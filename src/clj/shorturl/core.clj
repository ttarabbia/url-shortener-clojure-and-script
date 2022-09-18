(ns shorturl.core
  (:require [ring.adapter.jetty :as ring-jetty]
            [reitit.ring :as ring]
            [ring.util.response :as r]
            [muuntaja.core :as m]
            [reitit.ring.middleware.muuntaja :as muuntaja]
            [shorturl.db :as db]
            [shorturl.slug :refer [generate-slug]]
            [clojure.java.io :as io]))

;; https://github.com/alndvz/vid4

(defn index []
  (slurp (io/resource "public/index.html")))

(index)

(defn redirect [req]
  (let [slug (get-in req [:path-params :slug])
        url (db/get-url slug)]
    (if url
      (r/redirect url 307)
      (r/not-found "Not found"))))

(defn create-redirect [req]
  (let [url (get-in req [:body-params :url] "no :body-params found")
        slug (generate-slug)]
    (db/insert-redirect! slug url)
    (r/response {:slug slug})))

(defn print-post [req]
  (clojure.pprint/pprint (get-in req [:body-params :url] "no :body-params found"))
  {:status 200
   :body ""})


(def app
  (ring/ring-handler
    (ring/router
       ["/"
        [":slug/" redirect]
        ["api/"
         ["redirect/" {:post create-redirect}]]
        ["assets/*" (ring/create-resource-handler {:root "public/assets"})]
        ["" {:handler (fn [req] {:body (index) :status 200})}]]
       {:data {:muuntaja m/instance
               :middleware [muuntaja/format-middleware]}})))

(comment
  (app {:request-method :post
        :uri "/api/redirect/"
        :body-params {:url "https://metosin.fi"}})
  (db/get-url "EAYRQJOCPN"))



(defn start []
  (ring-jetty/run-jetty #'app {:port  3000
                               :join? false}))

(def server (start))

(.stop server)
(ns shorturl.db
  (:require [clojure.java.jdbc :as j]
            [honey.sql :as sql]
            [honey.sql.helpers :refer [select select-distinct from
                                       join left-join right-join
                                       where for group-by having union
                                       order-by limit offset values columns
                                       update insert-into set composite
                                       delete delete-from truncate] :as h]
            [shorturl.env :refer [env]]))


;HOST=us-east.connect.psdb.cloud
;USERNAME=v5kjve05hs4k4fe3di73
;PASSWORD=pscale_pw_DxHFqQxNT9kmGiJZI4ilS2ks2Rtf2fzIMxStWZQWXyn
;DATABASE=shorturl


;; (def db
;;   {:classname   "org.sqlite.JDBC"
;;    :subprotocol "sqlite"
;;    :subname     "db/database.db"})

;; create table
;; (j/db-do-commands db "CREATE TABLE redirects
;;                     (slug varchar(12) PRIMARY KEY NOT NULL,
;;                      url varchar(1000) NOT NULL)")



(def mysql-db
  {:host (env :HOST)
   :dbtype (env :DBTYPE)
   :dbname (env :DBNAME)
   :user (env :USER)
   :password (env :PASSWORD)})

(defn query [q]
  (j/query mysql-db q))

(defn insert! [q]
  (j/db-do-prepared mysql-db q))


(defn insert-redirect! [slug url]
  (insert! (-> (insert-into :redirects)
               (columns :slug :url)
               (values
                 [[slug url]])
               (sql/format))))


(defn get-url [slug]
   (-> (query (-> (select :*)
                  (from :redirects)
                  (where [:= :slug slug])
                  (sql/format))) first :url))





(comment
  (query (-> (select :*)
             (from :redirects)
             (where := :slug "EAYRQJOCPN")
             (sql/format)))
  (insert! (-> (insert-into :redirects)
               (columns :slug :url)
               (values
                 [["abc" "https://roamresearch.com/#/app/Ttarabbia"]])
               (sql/format)))
  (insert-redirect! "rfs" "http://google.com")
  (get-url "abc"))

(j/query mysql-db
         (-> (select :*)
             (from :redirects)
             (sql/format)))


(-> (select :a :b :c)
    (from :foo)
    (where [:= :foo.a "baz"])
    (sql/format))
(ns shorturl.slug)

(def charset "ABCDEFGHIJKLMNOPQRSTUVWXYZ")

(comment
  (rand-nth charset)
  (apply str (take 4 (repeatedly #(rand-nth charset))))
  (generate-slug))


(defn generate-slug []
  (->> (repeatedly #(rand-nth charset))
       (take 10)
       (apply str)))
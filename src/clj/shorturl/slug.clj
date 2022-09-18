(ns shorturl.slug)

(def charset "ABCDEFGHIJKLMNOPQRSTUVWXYZ")

(defn generate-slug []
  (->> (repeatedly #(rand-nth charset))
       (take 10)
       (apply str)))

(comment
  (rand-nth charset)
  (apply str (take 4 (repeatedly #(rand-nth charset))))
  (generate-slug))
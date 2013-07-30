(ns just
  (:require [domina.events :as ev]
            [domina]
            [cljs.core.async :as async])
  (:use [domina.xpath :only [xpath]] [domina.css :only [sel]]))

;(ev/listen! (domina/by-id "cha") :click (fn [evt] (domina/log (str (domina/attr (domina/by-id "cha") "text") "button clicked!"))))

(defn rand-1 [n] (inc (rand-int (dec n))))

(defn rand-color [] (str "#" (.toString (rand-int 4095) 16)))

(defn color [e c] (domina/set-styles! e {:background-color c}))

(defn ^:export run-once [] (color (xpath (str "//tr[" (rand-1 10) "]/td[" (rand-1 12) "]")) (rand-color)))

(defn ^:export run-all [] (doall (map #(color % (rand-color)) (domina/nodes (xpath "//td")))))

(defn ^:export testt [] (async/chan))
;(defn ^:export run2 [] (map #(.log js/console %) (.getElementsByTagName js/document "td")))

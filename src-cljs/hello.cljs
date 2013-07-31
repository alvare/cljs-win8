(ns just
  (:require [domina.events :as ev]
            [domina]
            [cljs.core.async :refer [chan timeout]])
  (:use [domina.xpath :only [xpath]] [domina.css :only [sel]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

;(ev/listen! (domina/by-id "cha") :click (fn [evt] (domina/log (str (domina/attr (domina/by-id "cha") "text") "button clicked!"))))

(defn rand-1 [n] (inc (rand-int (dec n))))

(defn rand-color [] (str "#" (.toString (rand-int 4095) 16)))

(defn color [e c] (domina/set-styles! e {:background-color c}))

(defn ^:export run-once [] (color (xpath (str "//tr[" (rand-1 10) "]/td[" (rand-1 12) "]")) (rand-color)))

(defn ^:export run-all [] (doseq [e (domina/nodes (xpath "//td"))] (color e (rand-color))))

; -- Main

(run-all)
(go
  (while true
    (<! (timeout (+ (rand-int 900) 200)))
    (run-once)))

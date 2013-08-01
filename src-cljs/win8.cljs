(ns just
  (:require [domina.events :as ev]
            [domina]
            [cljs.core.async :refer [chan timeout]])
            ;[clojure.browser.repl :as repl])
  (:use [domina.xpath :only [xpath]] [domina.css :only [sel]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

;(ev/listen! (domina/by-id "cha") :click (fn [evt] (domina/log (str (domina/attr (domina/by-id "cha") "text") "button clicked!"))))

(defn rand-1 [n] (inc (rand-int (dec n))))

(defn rand-color [] (str "#" (.toString (rand-int 4095) 16)))

(defn color [e c] (domina/set-styles! e {:background-color c}))

(defn run-once [] (color (xpath (str "//tr[" (rand-1 8) "]/td[" (rand-1 10) "]")) (rand-color)))

(defn run-all [] (doseq [e (domina/nodes (xpath "//td"))] (color e (rand-color))))

(defn td [n] (str "<td "
  (cond (= n 0) "colspan=\"2\""
        (= n 1) "colspan=\"2\" rowspan=\"2\""
        (= n 2) "rowspan=\"2\"")
  "></td>"))

(defn row [n fc]
  (defn iter [arr res cols fcols]
    (let [head (first arr)]
      (cond (= cols 0)
              {:res res :fcols fcols}
            (= cols 1)
              (iter (rest arr) (str res (td 3)) (- cols 1) fcols)
            (< head 2)
              (if (not= fc n)
                    (iter (rest arr) (str res (td 3)) (- cols 1) fcols)
                    (iter (rest arr) (str res (td head)) (- cols 2) (- fcols (if (= head 1) 2 0))))
            (= head 2)
              (iter (rest arr) (str res (td head)) (- cols 1) (- fcols 1))
            (identity true)
              (iter (rest arr) (str res (td head)) (- cols 1) fcols))))
  (iter (repeatedly #(rand-int 6)) "" n fc))

(defn table [w h]
  (defn iter2 [res fw fh]
    (cond (= fh 1)
            (str res "<tr>" (map td (take fw (repeat 3))) "</tr>")
          (identity true)
            (let [row-res (row fw w)]
              (iter2 (str res "<tr>" (:res row-res) "</tr>") (:fcols row-res) (dec fh)))))
  (iter2 "" w h))

; REPL
;(repl/connect "http://localhost:9000/repl")

(defn ^:export build-table [s w h] (domina/set-html! (sel (str "#" s)) (table w h)))

(defn ^:export main []
  (run-all)
  (go
    (while true
      (<! (timeout (+ (rand-int 700) 200)))
      (run-once))))

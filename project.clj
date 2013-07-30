(defproject js-algo "0.1"
  :description "just trying this out"
  :plugins [[lein-cljsbuild "0.3.2"]]
  :dependencies [[domina "1.0.2-SNAPSHOT"]
                 [org.clojure/core.async "0.1.0-SNAPSHOT"]]
  :repositories {"sonatype-oss-public" "https://oss.sonatype.org/content/groups/public/"}
  :cljsbuild {
    :builds [{:source-paths ["src-cljs"]
              :compiler {:output-to "resources/main.js"
                         :optimizations :whitespace
                         :pretty-print true}}]})

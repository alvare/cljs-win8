goog.provide('just');
goog.require('cljs.core');
goog.require('domina.xpath');
goog.require('domina.css');
goog.require('domina.css');
goog.require('domina.xpath');
goog.require('cljs.core.async');
goog.require('domina');
goog.require('domina.events');
just.rand_1 = (function rand_1(n){
return (cljs.core.rand_int.call(null,(n - 1)) + 1);
});
just.rand_color = (function rand_color(){
return [cljs.core.str("#"),cljs.core.str(cljs.core.rand_int.call(null,4095).toString(16))].join('');
});
just.color = (function color(e,c){
return domina.set_styles_BANG_.call(null,e,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:background-color",c], true));
});
just.run_once = (function run_once(){
return just.color.call(null,domina.xpath.xpath.call(null,[cljs.core.str("//tr["),cljs.core.str(just.rand_1.call(null,10)),cljs.core.str("]/td["),cljs.core.str(just.rand_1.call(null,12)),cljs.core.str("]")].join('')),just.rand_color.call(null));
});
goog.exportSymbol('just.run_once', just.run_once);
just.run_all = (function run_all(){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__4760_SHARP_){
return just.color.call(null,p1__4760_SHARP_,just.rand_color.call(null));
}),domina.nodes.call(null,domina.xpath.xpath.call(null,"//td"))));
});
goog.exportSymbol('just.run_all', just.run_all);
just.testt = (function testt(){
return cljs.core.async.chan.call(null);
});
goog.exportSymbol('just.testt', just.testt);

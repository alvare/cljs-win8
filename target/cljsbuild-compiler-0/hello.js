goog.provide('just');
goog.require('cljs.core');
goog.require('domina.xpath');
goog.require('domina.css');
goog.require('cljs.core.async');
goog.require('domina.css');
goog.require('domina.xpath');
goog.require('cljs.core.async');
goog.require('domina');
goog.require('domina.events');
just.rand_1 = (function rand_1(n){
return (cljs.core.rand_int((n - 1)) + 1);
});
just.rand_color = (function rand_color(){
return [cljs.core.str("#"),cljs.core.str(cljs.core.rand_int(4095).toString(16))].join('');
});
just.color = (function color(e,c){
return domina.set_styles_BANG_(e,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:background-color",c], true));
});
just.run_once = (function run_once(){
return just.color(domina.xpath.xpath.cljs$core$IFn$_invoke$arity$1([cljs.core.str("//tr["),cljs.core.str(just.rand_1(8)),cljs.core.str("]/td["),cljs.core.str(just.rand_1(10)),cljs.core.str("]")].join('')),just.rand_color());
});
just.run_all = (function run_all(){
var seq__4812 = cljs.core.seq(domina.nodes(domina.xpath.xpath.cljs$core$IFn$_invoke$arity$1("//td")));
var chunk__4813 = null;
var count__4814 = 0;
var i__4815 = 0;
while(true){
if((i__4815 < count__4814))
{var e = chunk__4813.cljs$core$IIndexed$_nth$arity$2(chunk__4813,i__4815);
just.color(e,just.rand_color());
{
var G__4816 = seq__4812;
var G__4817 = chunk__4813;
var G__4818 = count__4814;
var G__4819 = (i__4815 + 1);
seq__4812 = G__4816;
chunk__4813 = G__4817;
count__4814 = G__4818;
i__4815 = G__4819;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__4812);
if(temp__4092__auto__)
{var seq__4812__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__4812__$1))
{var c__3073__auto__ = cljs.core.chunk_first(seq__4812__$1);
{
var G__4820 = cljs.core.chunk_rest(seq__4812__$1);
var G__4821 = c__3073__auto__;
var G__4822 = cljs.core.count(c__3073__auto__);
var G__4823 = 0;
seq__4812 = G__4820;
chunk__4813 = G__4821;
count__4814 = G__4822;
i__4815 = G__4823;
continue;
}
} else
{var e = cljs.core.first(seq__4812__$1);
just.color(e,just.rand_color());
{
var G__4824 = cljs.core.next(seq__4812__$1);
var G__4825 = null;
var G__4826 = 0;
var G__4827 = 0;
seq__4812 = G__4824;
chunk__4813 = G__4825;
count__4814 = G__4826;
i__4815 = G__4827;
continue;
}
}
} else
{return null;
}
}
break;
}
});
just.td = (function td(n){
return [cljs.core.str("<td "),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,0))?"colspan=\"2\"":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,1))?"colspan=\"2\" rowspan=\"2\"":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,2))?"rowspan=\"2\"":null)))),cljs.core.str("></td>")].join('');
});
just.row = (function row(n,fc){
just.iter = (function iter(arr,res,cols,fcols){
var head = cljs.core.first(arr);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cols,0))
{return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:res",res,"\uFDD0:fcols",fcols], true);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cols,1))
{return iter(cljs.core.rest(arr),[cljs.core.str(res),cljs.core.str(just.td(3))].join(''),(cols - 1),fcols);
} else
{if((head < 2))
{if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fc,n))
{return iter(cljs.core.rest(arr),[cljs.core.str(res),cljs.core.str(just.td(3))].join(''),(cols - 1),fcols);
} else
{return iter(cljs.core.rest(arr),[cljs.core.str(res),cljs.core.str(just.td(head))].join(''),(cols - 2),(fcols - ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(head,1))?2:0)));
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(head,2))
{return iter(cljs.core.rest(arr),[cljs.core.str(res),cljs.core.str(just.td(head))].join(''),(cols - 1),(fcols - 1));
} else
{if(cljs.core.truth_(cljs.core.identity(true)))
{return iter(cljs.core.rest(arr),[cljs.core.str(res),cljs.core.str(just.td(head))].join(''),(cols - 1),fcols);
} else
{return null;
}
}
}
}
}
});
return just.iter(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.rand_int(6);
})),"",n,fc);
});
just.table = (function table(w,h){
just.iter2 = (function iter2(res,fw,fh){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fh,1))
{return [cljs.core.str(res),cljs.core.str("<tr>"),cljs.core.str(cljs.core.map.cljs$core$IFn$_invoke$arity$2(just.td,cljs.core.take(fw,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(3)))),cljs.core.str("</tr>")].join('');
} else
{if(cljs.core.truth_(cljs.core.identity(true)))
{var row_res = just.row(fw,w);
return iter2([cljs.core.str(res),cljs.core.str("<tr>"),cljs.core.str((new cljs.core.Keyword("\uFDD0:res")).call(null,row_res)),cljs.core.str("</tr>")].join(''),(new cljs.core.Keyword("\uFDD0:fcols")).call(null,row_res),(fh - 1));
} else
{return null;
}
}
});
return just.iter2("",w,h);
});
just.build_table = (function build_table(s,w,h){
return domina.set_html_BANG_(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#"),cljs.core.str(s)].join('')),just.table(w,h));
});
goog.exportSymbol('just.build_table', just.build_table);
just.main = (function main(){
just.run_all();
var c__4770__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);
cljs.core.async.impl.dispatch.run((function (){
var f__4771__auto__ = (function (){var switch__4688__auto__ = (function (state_4868){
var state_val_4869 = (state_4868[1]);
if((state_val_4869 === 7))
{var inst_4860 = (state_4868[2]);
var inst_4861 = just.run_once();
var state_4868__$1 = (function (){var statearr_4870 = state_4868;
(statearr_4870[5] = inst_4861);
(statearr_4870[6] = inst_4860);
return statearr_4870;
})();
var statearr_4871_4880 = state_4868__$1;
(statearr_4871_4880[2] = null);
(statearr_4871_4880[1] = 2);
return "\uFDD0:recur";
} else
{if((state_val_4869 === 6))
{var inst_4864 = (state_4868[2]);
var state_4868__$1 = state_4868;
var statearr_4872_4881 = state_4868__$1;
(statearr_4872_4881[2] = inst_4864);
(statearr_4872_4881[1] = 3);
return "\uFDD0:recur";
} else
{if((state_val_4869 === 5))
{var state_4868__$1 = state_4868;
var statearr_4873_4882 = state_4868__$1;
(statearr_4873_4882[2] = null);
(statearr_4873_4882[1] = 6);
return "\uFDD0:recur";
} else
{if((state_val_4869 === 4))
{var inst_4856 = cljs.core.rand_int(700);
var inst_4857 = (inst_4856 + 200);
var inst_4858 = cljs.core.async.timeout(inst_4857);
var state_4868__$1 = state_4868;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_4868__$1,7,inst_4858);
} else
{if((state_val_4869 === 3))
{var inst_4866 = (state_4868[2]);
var state_4868__$1 = state_4868;
return cljs.core.async.impl.ioc_helpers.return_chan(state_4868__$1,inst_4866);
} else
{if((state_val_4869 === 2))
{var state_4868__$1 = state_4868;
if(true)
{var statearr_4874_4883 = state_4868__$1;
(statearr_4874_4883[1] = 4);
} else
{var statearr_4875_4884 = state_4868__$1;
(statearr_4875_4884[1] = 5);
}
return "\uFDD0:recur";
} else
{if((state_val_4869 === 1))
{var state_4868__$1 = state_4868;
var statearr_4876_4885 = state_4868__$1;
(statearr_4876_4885[2] = null);
(statearr_4876_4885[1] = 2);
return "\uFDD0:recur";
} else
{return null;
}
}
}
}
}
}
}
});
return ((function (switch__4688__auto__){
return (function() {
var state_machine__4689__auto__ = null;
var state_machine__4689__auto____0 = (function (){
var statearr_4878 = (new Array(7));
(statearr_4878[0] = state_machine__4689__auto__);
(statearr_4878[1] = 1);
return statearr_4878;
});
var state_machine__4689__auto____1 = (function (state_4868){
while(true){
var result__4690__auto__ = switch__4688__auto__(state_4868);
if((result__4690__auto__ === "\uFDD0:recur"))
{{
continue;
}
} else
{return result__4690__auto__;
}
break;
}
});
state_machine__4689__auto__ = function(state_4868){
switch(arguments.length){
case 0:
return state_machine__4689__auto____0.call(this);
case 1:
return state_machine__4689__auto____1.call(this,state_4868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__4689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__4689__auto____0;
state_machine__4689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__4689__auto____1;
return state_machine__4689__auto__;
})()
;})(switch__4688__auto__))
})();
var state__4772__auto__ = (function (){var statearr_4879 = (f__4771__auto__.cljs$core$IFn$_invoke$arity$0 ? f__4771__auto__.cljs$core$IFn$_invoke$arity$0() : f__4771__auto__.call(null));
(statearr_4879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__4770__auto__);
return statearr_4879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine(state__4772__auto__);
}));
return c__4770__auto__;
});
goog.exportSymbol('just.main', just.main);

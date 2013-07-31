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
return just.color(domina.xpath.xpath.cljs$core$IFn$_invoke$arity$1([cljs.core.str("//tr["),cljs.core.str(just.rand_1(10)),cljs.core.str("]/td["),cljs.core.str(just.rand_1(12)),cljs.core.str("]")].join('')),just.rand_color());
});
goog.exportSymbol('just.run_once', just.run_once);
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
goog.exportSymbol('just.run_all', just.run_all);
just.run_all();
var c__4770__auto___4852 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);
cljs.core.async.impl.dispatch.run((function (){
var f__4771__auto__ = (function (){var switch__4688__auto__ = (function (state_4840){
var state_val_4841 = (state_4840[1]);
if((state_val_4841 === 7))
{var inst_4832 = (state_4840[2]);
var inst_4833 = just.run_once();
var state_4840__$1 = (function (){var statearr_4842 = state_4840;
(statearr_4842[5] = inst_4832);
(statearr_4842[6] = inst_4833);
return statearr_4842;
})();
var statearr_4843_4853 = state_4840__$1;
(statearr_4843_4853[2] = null);
(statearr_4843_4853[1] = 2);
return "\uFDD0:recur";
} else
{if((state_val_4841 === 6))
{var inst_4836 = (state_4840[2]);
var state_4840__$1 = state_4840;
var statearr_4844_4854 = state_4840__$1;
(statearr_4844_4854[2] = inst_4836);
(statearr_4844_4854[1] = 3);
return "\uFDD0:recur";
} else
{if((state_val_4841 === 5))
{var state_4840__$1 = state_4840;
var statearr_4845_4855 = state_4840__$1;
(statearr_4845_4855[2] = null);
(statearr_4845_4855[1] = 6);
return "\uFDD0:recur";
} else
{if((state_val_4841 === 4))
{var inst_4830 = cljs.core.async.timeout(400);
var state_4840__$1 = state_4840;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_4840__$1,7,inst_4830);
} else
{if((state_val_4841 === 3))
{var inst_4838 = (state_4840[2]);
var state_4840__$1 = state_4840;
return cljs.core.async.impl.ioc_helpers.return_chan(state_4840__$1,inst_4838);
} else
{if((state_val_4841 === 2))
{var state_4840__$1 = state_4840;
if(true)
{var statearr_4846_4856 = state_4840__$1;
(statearr_4846_4856[1] = 4);
} else
{var statearr_4847_4857 = state_4840__$1;
(statearr_4847_4857[1] = 5);
}
return "\uFDD0:recur";
} else
{if((state_val_4841 === 1))
{var state_4840__$1 = state_4840;
var statearr_4848_4858 = state_4840__$1;
(statearr_4848_4858[2] = null);
(statearr_4848_4858[1] = 2);
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
var statearr_4850 = (new Array(7));
(statearr_4850[0] = state_machine__4689__auto__);
(statearr_4850[1] = 1);
return statearr_4850;
});
var state_machine__4689__auto____1 = (function (state_4840){
while(true){
var result__4690__auto__ = switch__4688__auto__(state_4840);
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
state_machine__4689__auto__ = function(state_4840){
switch(arguments.length){
case 0:
return state_machine__4689__auto____0.call(this);
case 1:
return state_machine__4689__auto____1.call(this,state_4840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__4689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__4689__auto____0;
state_machine__4689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__4689__auto____1;
return state_machine__4689__auto__;
})()
;})(switch__4688__auto__))
})();
var state__4772__auto__ = (function (){var statearr_4851 = (f__4771__auto__.cljs$core$IFn$_invoke$arity$0 ? f__4771__auto__.cljs$core$IFn$_invoke$arity$0() : f__4771__auto__.call(null));
(statearr_4851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__4770__auto___4852);
return statearr_4851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine(state__4772__auto__);
}));

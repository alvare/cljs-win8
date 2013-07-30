goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.channels.box = (function box(val){
if((void 0 === cljs.core.async.impl.channels.t4817))
{goog.provide('cljs.core.async.impl.channels.t4817');

/**
* @constructor
*/
cljs.core.async.impl.channels.t4817 = (function (val,box,meta4818){
this.val = val;
this.box = box;
this.meta4818 = meta4818;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
cljs.core.async.impl.channels.t4817.cljs$lang$type = true;
cljs.core.async.impl.channels.t4817.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t4817";
cljs.core.async.impl.channels.t4817.cljs$lang$ctorPrWriter = (function (this__2882__auto__,writer__2883__auto__,opt__2884__auto__){
return cljs.core._write.call(null,writer__2883__auto__,"cljs.core.async.impl.channels/t4817");
});
cljs.core.async.impl.channels.t4817.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
return self__.val;
});
cljs.core.async.impl.channels.t4817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4819){
var self__ = this;
return self__.meta4818;
});
cljs.core.async.impl.channels.t4817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4819,meta4818__$1){
var self__ = this;
return (new cljs.core.async.impl.channels.t4817(self__.val,self__.box,meta4818__$1));
});
} else
{}
return (new cljs.core.async.impl.channels.t4817(val,box,null));
});
cljs.core.async.impl.channels.MMC = {};
cljs.core.async.impl.channels.cleanup = (function cleanup(_){
if((function (){var and__3941__auto__ = _;
if(and__3941__auto__)
{return _.cljs$core$async$impl$channels$MMC$cleanup$arity$1;
} else
{return and__3941__auto__;
}
})())
{return _.cljs$core$async$impl$channels$MMC$cleanup$arity$1(_);
} else
{var x__2942__auto__ = (((_ == null))?null:_);
return (function (){var or__3943__auto__ = (cljs.core.async.impl.channels.cleanup[goog.typeOf(x__2942__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.impl.channels.cleanup["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"MMC.cleanup",_);
}
}
})().call(null,_);
}
});
goog.provide('cljs.core.async.impl.channels.ManyToManyChannel');

/**
* @constructor
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,puts,buf,closed){
this.takes = takes;
this.puts = puts;
this.buf = buf;
this.closed = closed;
})
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__2882__auto__,writer__2883__auto__,opt__2884__auto__){
return cljs.core._write.call(null,writer__2883__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
this$.cljs$core$async$impl$channels$MMC$cleanup$arity$1(this$);
if(cljs.core.truth_(cljs.core.deref.call(null,self__.closed)))
{return null;
} else
{cljs.core.reset_BANG_.call(null,self__.closed,true);
var n__3120__auto___4824 = self__.takes.length;
var idx_4825 = 0;
while(true){
if((idx_4825 < n__3120__auto___4824))
{var taker_4826 = (self__.takes[idx_4825]);
var take_cb_4827 = (function (){var and__3941__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_4826);
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,taker_4826);
} else
{return and__3941__auto__;
}
})();
if(cljs.core.truth_(take_cb_4827))
{cljs.core.async.impl.dispatch.run.call(null,((function (idx_4825,taker_4826,take_cb_4827){
return (function (){
return take_cb_4827.call(null,null);
});})(idx_4825,taker_4826,take_cb_4827))
);
} else
{}
{
var G__4828 = (idx_4825 + 1);
idx_4825 = G__4828;
continue;
}
} else
{}
break;
}
return null;
}
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
this$.cljs$core$async$impl$channels$MMC$cleanup$arity$1(this$);
if(cljs.core.truth_((function (){var and__3941__auto__ = self__.buf;
if(cljs.core.truth_(and__3941__auto__))
{return (cljs.core.count.call(null,self__.buf) > 0);
} else
{return and__3941__auto__;
}
})()))
{var temp__4090__auto__ = (function (){var and__3941__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,handler);
} else
{return and__3941__auto__;
}
})();
if(cljs.core.truth_(temp__4090__auto__))
{var take_cb = temp__4090__auto__;
return cljs.core.async.impl.channels.box.call(null,cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf));
} else
{return null;
}
} else
{var vec__4820 = (function (){var put_idx = 0;
while(true){
if((put_idx < self__.puts.length))
{var vec__4821 = (self__.puts[put_idx]);
var putter = cljs.core.nth.call(null,vec__4821,0,null);
var val = cljs.core.nth.call(null,vec__4821,1,null);
var temp__4090__auto__ = (cljs.core.truth_((function (){var and__3941__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.async.impl.protocols.active_QMARK_.call(null,putter);
} else
{return and__3941__auto__;
}
})())?cljs.core.PersistentVector.fromArray([cljs.core.async.impl.protocols.commit.call(null,handler),cljs.core.async.impl.protocols.commit.call(null,putter),val], true):null);
if(cljs.core.truth_(temp__4090__auto__))
{var ret = temp__4090__auto__;
self__.puts.splice(put_idx,1);
return ret;
} else
{{
var G__4829 = (put_idx + 1);
put_idx = G__4829;
continue;
}
}
} else
{return null;
}
break;
}
})();
var take_cb = cljs.core.nth.call(null,vec__4820,0,null);
var put_cb = cljs.core.nth.call(null,vec__4820,1,null);
var val = cljs.core.nth.call(null,vec__4820,2,null);
if(cljs.core.truth_((function (){var and__3941__auto__ = put_cb;
if(cljs.core.truth_(and__3941__auto__))
{return take_cb;
} else
{return and__3941__auto__;
}
})()))
{cljs.core.async.impl.dispatch.run.call(null,put_cb);
return cljs.core.async.impl.channels.box.call(null,val);
} else
{if(cljs.core.truth_(cljs.core.deref.call(null,self__.closed)))
{var temp__4090__auto__ = (function (){var and__3941__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,handler);
} else
{return and__3941__auto__;
}
})();
if(cljs.core.truth_(temp__4090__auto__))
{var take_cb__$1 = temp__4090__auto__;
return cljs.core.async.impl.channels.box.call(null,null);
} else
{return null;
}
} else
{self__.takes.unshift(handler);
return null;
}
}
}
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
if(!((val == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't put nil in on a channel"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"val","val",-1640415014,null)),cljs.core.hash_map("\uFDD0:line",43,"\uFDD0:column",18))),cljs.core.hash_map("\uFDD0:line",43,"\uFDD0:column",13))))].join('')));
}
this$.cljs$core$async$impl$channels$MMC$cleanup$arity$1(this$);
if(cljs.core.truth_(cljs.core.deref.call(null,self__.closed)))
{return cljs.core.async.impl.channels.box.call(null,null);
} else
{var vec__4822 = (function (){var taker_idx = 0;
while(true){
if((taker_idx < self__.takes.length))
{var taker = (self__.takes[taker_idx]);
if(cljs.core.truth_((function (){var and__3941__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,taker);
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
} else
{return and__3941__auto__;
}
})()))
{self__.takes.splice(taker_idx,1);
return cljs.core.PersistentVector.fromArray([cljs.core.async.impl.protocols.commit.call(null,handler),cljs.core.async.impl.protocols.commit.call(null,taker)], true);
} else
{{
var G__4830 = (taker_idx + 1);
taker_idx = G__4830;
continue;
}
}
} else
{return null;
}
break;
}
})();
var put_cb = cljs.core.nth.call(null,vec__4822,0,null);
var take_cb = cljs.core.nth.call(null,vec__4822,1,null);
if(cljs.core.truth_((function (){var and__3941__auto__ = put_cb;
if(cljs.core.truth_(and__3941__auto__))
{return take_cb;
} else
{return and__3941__auto__;
}
})()))
{cljs.core.async.impl.dispatch.run.call(null,(function (){
return take_cb.call(null,val);
}));
return cljs.core.async.impl.channels.box.call(null,null);
} else
{if(cljs.core.truth_((function (){var and__3941__auto__ = self__.buf;
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else
{return and__3941__auto__;
}
})()))
{var put_cb__$1 = (function (){var and__3941__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,handler);
} else
{return and__3941__auto__;
}
})();
if(cljs.core.truth_(put_cb__$1))
{cljs.core.async.impl.protocols.add_BANG_.call(null,self__.buf,val);
return cljs.core.async.impl.channels.box.call(null,null);
} else
{return null;
}
} else
{self__.puts.unshift(cljs.core.PersistentVector.fromArray([handler,val], true));
return null;
}
}
}
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$cleanup$arity$1 = (function (_){
var self__ = this;
var idx_4831 = 0;
while(true){
if((idx_4831 < self__.puts.length))
{var vec__4823_4832 = (self__.puts[idx_4831]);
var itm_4833 = cljs.core.nth.call(null,vec__4823_4832,0,null);
var val_4834 = cljs.core.nth.call(null,vec__4823_4832,1,null);
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,itm_4833)))
{{
var G__4835 = (idx_4831 + 1);
idx_4831 = G__4835;
continue;
}
} else
{self__.puts.splice(idx_4831,1);
{
var G__4836 = idx_4831;
idx_4831 = G__4836;
continue;
}
}
} else
{}
break;
}
var idx = 0;
while(true){
if((idx < self__.takes.length))
{var itm = (self__.takes[idx]);
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,itm)))
{{
var G__4837 = (idx + 1);
idx = G__4837;
continue;
}
} else
{self__.takes.splice(idx,1);
{
var G__4838 = idx;
idx = G__4838;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.async.impl.channels.chan = (function chan(buf){
return (new cljs.core.async.impl.channels.ManyToManyChannel((new Array(0)),(new Array(0)),buf,cljs.core.atom.call(null,null)));
});

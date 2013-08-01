goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.channels.box = (function box(val){
if((void 0 === cljs.core.async.impl.channels.t6353))
{goog.provide('cljs.core.async.impl.channels.t6353');

/**
* @constructor
*/
cljs.core.async.impl.channels.t6353 = (function (val,box,meta6354){
this.val = val;
this.box = box;
this.meta6354 = meta6354;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
cljs.core.async.impl.channels.t6353.cljs$lang$type = true;
cljs.core.async.impl.channels.t6353.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t6353";
cljs.core.async.impl.channels.t6353.cljs$lang$ctorPrWriter = (function (this__2882__auto__,writer__2883__auto__,opt__2884__auto__){
return cljs.core._write.call(null,writer__2883__auto__,"cljs.core.async.impl.channels/t6353");
});
cljs.core.async.impl.channels.t6353.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
return self__.val;
});
cljs.core.async.impl.channels.t6353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6355){
var self__ = this;
return self__.meta6354;
});
cljs.core.async.impl.channels.t6353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6355,meta6354__$1){
var self__ = this;
return (new cljs.core.async.impl.channels.t6353(self__.val,self__.box,meta6354__$1));
});
} else
{}
return (new cljs.core.async.impl.channels.t6353(val,box,null));
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
var n__3120__auto___6360 = self__.takes.length;
var idx_6361 = 0;
while(true){
if((idx_6361 < n__3120__auto___6360))
{var taker_6362 = (self__.takes[idx_6361]);
var take_cb_6363 = (function (){var and__3941__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_6362);
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,taker_6362);
} else
{return and__3941__auto__;
}
})();
if(cljs.core.truth_(take_cb_6363))
{cljs.core.async.impl.dispatch.run.call(null,((function (idx_6361,taker_6362,take_cb_6363){
return (function (){
return take_cb_6363.call(null,null);
});})(idx_6361,taker_6362,take_cb_6363))
);
} else
{}
{
var G__6364 = (idx_6361 + 1);
idx_6361 = G__6364;
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
{var vec__6356 = (function (){var put_idx = 0;
while(true){
if((put_idx < self__.puts.length))
{var vec__6357 = (self__.puts[put_idx]);
var putter = cljs.core.nth.call(null,vec__6357,0,null);
var val = cljs.core.nth.call(null,vec__6357,1,null);
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
var G__6365 = (put_idx + 1);
put_idx = G__6365;
continue;
}
}
} else
{return null;
}
break;
}
})();
var take_cb = cljs.core.nth.call(null,vec__6356,0,null);
var put_cb = cljs.core.nth.call(null,vec__6356,1,null);
var val = cljs.core.nth.call(null,vec__6356,2,null);
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
{var vec__6358 = (function (){var taker_idx = 0;
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
var G__6366 = (taker_idx + 1);
taker_idx = G__6366;
continue;
}
}
} else
{return null;
}
break;
}
})();
var put_cb = cljs.core.nth.call(null,vec__6358,0,null);
var take_cb = cljs.core.nth.call(null,vec__6358,1,null);
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
var idx_6367 = 0;
while(true){
if((idx_6367 < self__.puts.length))
{var vec__6359_6368 = (self__.puts[idx_6367]);
var itm_6369 = cljs.core.nth.call(null,vec__6359_6368,0,null);
var val_6370 = cljs.core.nth.call(null,vec__6359_6368,1,null);
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,itm_6369)))
{{
var G__6371 = (idx_6367 + 1);
idx_6367 = G__6371;
continue;
}
} else
{self__.puts.splice(idx_6367,1);
{
var G__6372 = idx_6367;
idx_6367 = G__6372;
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
var G__6373 = (idx + 1);
idx = G__6373;
continue;
}
} else
{self__.takes.splice(idx,1);
{
var G__6374 = idx;
idx = G__6374;
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

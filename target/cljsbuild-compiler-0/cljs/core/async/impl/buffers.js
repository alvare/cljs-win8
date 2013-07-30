goog.provide('cljs.core.async.impl.buffers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.provide('cljs.core.async.impl.buffers.FixedBuffer');

/**
* @constructor
*/
cljs.core.async.impl.buffers.FixedBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$type = true;
cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/FixedBuffer";
cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$ctorPrWriter = (function (this__2882__auto__,writer__2883__auto__,opt__2884__auto__){
return cljs.core._write.call(null,writer__2883__auto__,"cljs.core.async.impl.buffers/FixedBuffer");
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
return self__.buf.length;
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = true;
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){
var self__ = this;
return cljs.core._EQ_.call(null,self__.buf.length,self__.n);
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){
var self__ = this;
return self__.buf.pop();
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2 = (function (this$,itm){
var self__ = this;
if(cljs.core.not.call(null,this$.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(this$)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't add to a full buffer"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol("impl","full?","impl/full?",-1337857039,null),new cljs.core.Symbol(null,"this","this",-1636972457,null)),cljs.core.hash_map("\uFDD0:line",19,"\uFDD0:column",18))),cljs.core.hash_map("\uFDD0:line",19,"\uFDD0:column",13))))].join('')));
}
return self__.buf.unshift(itm);
});
cljs.core.async.impl.buffers.fixed_buffer = (function fixed_buffer(n){
return (new cljs.core.async.impl.buffers.FixedBuffer((new Array(0)),n));
});
goog.provide('cljs.core.async.impl.buffers.DroppingBuffer');

/**
* @constructor
*/
cljs.core.async.impl.buffers.DroppingBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$type = true;
cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/DroppingBuffer";
cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$ctorPrWriter = (function (this__2882__auto__,writer__2883__auto__,opt__2884__auto__){
return cljs.core._write.call(null,writer__2883__auto__,"cljs.core.async.impl.buffers/DroppingBuffer");
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
return self__.buf.length;
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = true;
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){
var self__ = this;
return false;
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){
var self__ = this;
return self__.buf.pop();
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2 = (function (this$,itm){
var self__ = this;
if(cljs.core._EQ_.call(null,self__.buf.length,self__.n))
{return null;
} else
{return self__.buf.unshift(itm);
}
});
cljs.core.async.impl.buffers.dropping_buffer = (function dropping_buffer(n){
return (new cljs.core.async.impl.buffers.DroppingBuffer((new Array(0)),n));
});
goog.provide('cljs.core.async.impl.buffers.SlidingBuffer');

/**
* @constructor
*/
cljs.core.async.impl.buffers.SlidingBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$type = true;
cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/SlidingBuffer";
cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$ctorPrWriter = (function (this__2882__auto__,writer__2883__auto__,opt__2884__auto__){
return cljs.core._write.call(null,writer__2883__auto__,"cljs.core.async.impl.buffers/SlidingBuffer");
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
return self__.buf.length;
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = true;
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){
var self__ = this;
return false;
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){
var self__ = this;
return self__.buf.pop();
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2 = (function (this$,itm){
var self__ = this;
if(cljs.core._EQ_.call(null,self__.buf.length,self__.n))
{this$.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(this$);
} else
{}
return self__.buf.unshift(itm);
});
cljs.core.async.impl.buffers.sliding_buffer = (function sliding_buffer(n){
return (new cljs.core.async.impl.buffers.SlidingBuffer((new Array(0)),n));
});

goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = {};
domina.events.prevent_default = (function prevent_default(evt){
if((function (){var and__3941__auto__ = evt;
if(and__3941__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3941__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__2942__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.prevent_default[goog.typeOf(x__2942__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.prevent_default["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){
if((function (){var and__3941__auto__ = evt;
if(and__3941__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3941__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__2942__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.stop_propagation[goog.typeOf(x__2942__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.stop_propagation["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){
if((function (){var and__3941__auto__ = evt;
if(and__3941__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3941__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__2942__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.target[goog.typeOf(x__2942__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.target["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){
if((function (){var and__3941__auto__ = evt;
if(and__3941__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3941__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__2942__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.current_target[goog.typeOf(x__2942__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.current_target["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){
if((function (){var and__3941__auto__ = evt;
if(and__3941__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3941__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__2942__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.event_type[goog.typeOf(x__2942__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.event_type["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){
if((function (){var and__3941__auto__ = evt;
if(and__3941__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3941__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__2942__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.raw_event[goog.typeOf(x__2942__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.raw_event["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.builtin_events = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.keyword,goog.object.getValues(goog.events.EventType)));
domina.events.root_element = window.document.documentElement;
domina.events.find_builtin_type = (function find_builtin_type(evt_type){
if(cljs.core.contains_QMARK_.call(null,domina.events.builtin_events,evt_type))
{return cljs.core.name.call(null,evt_type);
} else
{return evt_type;
}
});
domina.events.create_listener_function = (function create_listener_function(f){
return (function (evt){
f.call(null,(function (){if((void 0 === domina.events.t5705))
{goog.provide('domina.events.t5705');

/**
* @constructor
*/
domina.events.t5705 = (function (evt,f,create_listener_function,meta5706){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta5706 = meta5706;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t5705.cljs$lang$type = true;
domina.events.t5705.cljs$lang$ctorStr = "domina.events/t5705";
domina.events.t5705.cljs$lang$ctorPrWriter = (function (this__2882__auto__,writer__2883__auto__,opt__2884__auto__){
return cljs.core._write.call(null,writer__2883__auto__,"domina.events/t5705");
});
domina.events.t5705.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var temp__4090__auto__ = (self__.evt[k]);
if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;
return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t5705.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var or__3943__auto__ = o.cljs$core$ILookup$_lookup$arity$2(o,k);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return not_found;
}
});
domina.events.t5705.prototype.domina$events$Event$ = true;
domina.events.t5705.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
return self__.evt.preventDefault();
});
domina.events.t5705.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
return self__.evt.stopPropagation();
});
domina.events.t5705.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
return self__.evt.target;
});
domina.events.t5705.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
return self__.evt.currentTarget;
});
domina.events.t5705.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
return self__.evt.type;
});
domina.events.t5705.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
return self__.evt;
});
domina.events.t5705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5707){
var self__ = this;
return self__.meta5706;
});
domina.events.t5705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5707,meta5706__$1){
var self__ = this;
return (new domina.events.t5705(self__.evt,self__.f,self__.create_listener_function,meta5706__$1));
});
} else
{}
return (new domina.events.t5705(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = domina.events.find_builtin_type.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__3042__auto__ = (function iter__5712(s__5713){
return (new cljs.core.LazySeq(null,false,(function (){
var s__5713__$1 = s__5713;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5713__$1);
if(temp__4092__auto__)
{var s__5713__$2 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5713__$2))
{var c__3040__auto__ = cljs.core.chunk_first.call(null,s__5713__$2);
var size__3041__auto__ = cljs.core.count.call(null,c__3040__auto__);
var b__5715 = cljs.core.chunk_buffer.call(null,size__3041__auto__);
if((function (){var i__5714 = 0;
while(true){
if((i__5714 < size__3041__auto__))
{var node = cljs.core._nth.call(null,c__3040__auto__,i__5714);
cljs.core.chunk_append.call(null,b__5715,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__5716 = (i__5714 + 1);
i__5714 = G__5716;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5715),iter__5712.call(null,cljs.core.chunk_rest.call(null,s__5713__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5715),null);
}
} else
{var node = cljs.core.first.call(null,s__5713__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__5712.call(null,cljs.core.rest.call(null,s__5713__$2)));
}
} else
{return null;
}
break;
}
}),null));
});
return iter__3042__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){
return listen_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});
listen_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,content,type);
case 3:
return listen_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_BANG_ = (function() {
var capture_BANG_ = null;
var capture_BANG___2 = (function (type,listener){
return capture_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});
capture_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_BANG___2.call(this,content,type);
case 3:
return capture_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_BANG___2;
capture_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_BANG___3;
return capture_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_once_BANG_ = (function() {
var listen_once_BANG_ = null;
var listen_once_BANG___2 = (function (type,listener){
return listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});
listen_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_once_BANG___2.call(this,content,type);
case 3:
return listen_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_once_BANG___2;
listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_once_BANG___3;
return listen_once_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_once_BANG_ = (function() {
var capture_once_BANG_ = null;
var capture_once_BANG___2 = (function (type,listener){
return capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});
capture_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_once_BANG___2.call(this,content,type);
case 3:
return capture_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_once_BANG___2;
capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_once_BANG___3;
return capture_once_BANG_;
})()
;
/**
* Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___0 = (function (){
return unlisten_BANG_.call(null,domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){
var seq__5725 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__5726 = null;
var count__5727 = 0;
var i__5728 = 0;
while(true){
if((i__5728 < count__5727))
{var node = cljs.core._nth.call(null,chunk__5726,i__5728);
goog.events.removeAll(node);
{
var G__5733 = seq__5725;
var G__5734 = chunk__5726;
var G__5735 = count__5727;
var G__5736 = (i__5728 + 1);
seq__5725 = G__5733;
chunk__5726 = G__5734;
count__5727 = G__5735;
i__5728 = G__5736;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__5725);
if(temp__4092__auto__)
{var seq__5725__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5725__$1))
{var c__3073__auto__ = cljs.core.chunk_first.call(null,seq__5725__$1);
{
var G__5737 = cljs.core.chunk_rest.call(null,seq__5725__$1);
var G__5738 = c__3073__auto__;
var G__5739 = cljs.core.count.call(null,c__3073__auto__);
var G__5740 = 0;
seq__5725 = G__5737;
chunk__5726 = G__5738;
count__5727 = G__5739;
i__5728 = G__5740;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__5725__$1);
goog.events.removeAll(node);
{
var G__5741 = cljs.core.next.call(null,seq__5725__$1);
var G__5742 = null;
var G__5743 = 0;
var G__5744 = 0;
seq__5725 = G__5741;
chunk__5726 = G__5742;
count__5727 = G__5743;
i__5728 = G__5744;
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
var unlisten_BANG___2 = (function (content,type){
var type__$1 = domina.events.find_builtin_type.call(null,type);
var seq__5729 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__5730 = null;
var count__5731 = 0;
var i__5732 = 0;
while(true){
if((i__5732 < count__5731))
{var node = cljs.core._nth.call(null,chunk__5730,i__5732);
goog.events.removeAll(node,type__$1);
{
var G__5745 = seq__5729;
var G__5746 = chunk__5730;
var G__5747 = count__5731;
var G__5748 = (i__5732 + 1);
seq__5729 = G__5745;
chunk__5730 = G__5746;
count__5731 = G__5747;
i__5732 = G__5748;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__5729);
if(temp__4092__auto__)
{var seq__5729__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5729__$1))
{var c__3073__auto__ = cljs.core.chunk_first.call(null,seq__5729__$1);
{
var G__5749 = cljs.core.chunk_rest.call(null,seq__5729__$1);
var G__5750 = c__3073__auto__;
var G__5751 = cljs.core.count.call(null,c__3073__auto__);
var G__5752 = 0;
seq__5729 = G__5749;
chunk__5730 = G__5750;
count__5731 = G__5751;
i__5732 = G__5752;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__5729__$1);
goog.events.removeAll(node,type__$1);
{
var G__5753 = cljs.core.next.call(null,seq__5729__$1);
var G__5754 = null;
var G__5755 = 0;
var G__5756 = 0;
seq__5729 = G__5753;
chunk__5730 = G__5754;
count__5731 = G__5755;
i__5732 = G__5756;
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
unlisten_BANG_ = function(content,type){
switch(arguments.length){
case 0:
return unlisten_BANG___0.call(this);
case 1:
return unlisten_BANG___1.call(this,content);
case 2:
return unlisten_BANG___2.call(this,content,type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = unlisten_BANG___0;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = unlisten_BANG___1;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = unlisten_BANG___2;
return unlisten_BANG_;
})()
;
/**
* Returns a seq of a node and its ancestors, starting with the document root.
*/
domina.events.ancestor_nodes = (function() {
var ancestor_nodes = null;
var ancestor_nodes__1 = (function (n){
return ancestor_nodes.call(null,n,cljs.core.PersistentVector.fromArray([n], true));
});
var ancestor_nodes__2 = (function (n,so_far){
while(true){
var temp__4090__auto__ = n.parentNode;
if(cljs.core.truth_(temp__4090__auto__))
{var parent = temp__4090__auto__;
{
var G__5757 = parent;
var G__5758 = cljs.core.cons.call(null,parent,so_far);
n = G__5757;
so_far = G__5758;
continue;
}
} else
{return so_far;
}
break;
}
});
ancestor_nodes = function(n,so_far){
switch(arguments.length){
case 1:
return ancestor_nodes__1.call(this,n);
case 2:
return ancestor_nodes__2.call(this,n,so_far);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = ancestor_nodes__1;
ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = ancestor_nodes__2;
return ancestor_nodes;
})()
;
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));
var seq__5767_5775 = cljs.core.seq.call(null,ancestors);
var chunk__5768_5776 = null;
var count__5769_5777 = 0;
var i__5770_5778 = 0;
while(true){
if((i__5770_5778 < count__5769_5777))
{var n_5779 = cljs.core._nth.call(null,chunk__5768_5776,i__5770_5778);
if(cljs.core.truth_(n_5779.propagationStopped))
{} else
{evt.currentTarget = n_5779;
goog.events.fireListeners(n_5779,evt.type,true,evt);
}
{
var G__5780 = seq__5767_5775;
var G__5781 = chunk__5768_5776;
var G__5782 = count__5769_5777;
var G__5783 = (i__5770_5778 + 1);
seq__5767_5775 = G__5780;
chunk__5768_5776 = G__5781;
count__5769_5777 = G__5782;
i__5770_5778 = G__5783;
continue;
}
} else
{var temp__4092__auto___5784 = cljs.core.seq.call(null,seq__5767_5775);
if(temp__4092__auto___5784)
{var seq__5767_5785__$1 = temp__4092__auto___5784;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5767_5785__$1))
{var c__3073__auto___5786 = cljs.core.chunk_first.call(null,seq__5767_5785__$1);
{
var G__5787 = cljs.core.chunk_rest.call(null,seq__5767_5785__$1);
var G__5788 = c__3073__auto___5786;
var G__5789 = cljs.core.count.call(null,c__3073__auto___5786);
var G__5790 = 0;
seq__5767_5775 = G__5787;
chunk__5768_5776 = G__5788;
count__5769_5777 = G__5789;
i__5770_5778 = G__5790;
continue;
}
} else
{var n_5791 = cljs.core.first.call(null,seq__5767_5785__$1);
if(cljs.core.truth_(n_5791.propagationStopped))
{} else
{evt.currentTarget = n_5791;
goog.events.fireListeners(n_5791,evt.type,true,evt);
}
{
var G__5792 = cljs.core.next.call(null,seq__5767_5785__$1);
var G__5793 = null;
var G__5794 = 0;
var G__5795 = 0;
seq__5767_5775 = G__5792;
chunk__5768_5776 = G__5793;
count__5769_5777 = G__5794;
i__5770_5778 = G__5795;
continue;
}
}
} else
{}
}
break;
}
var seq__5771_5796 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__5772_5797 = null;
var count__5773_5798 = 0;
var i__5774_5799 = 0;
while(true){
if((i__5774_5799 < count__5773_5798))
{var n_5800 = cljs.core._nth.call(null,chunk__5772_5797,i__5774_5799);
if(cljs.core.truth_(n_5800.propagationStopped))
{} else
{evt.currentTarget = n_5800;
goog.events.fireListeners(n_5800,evt.type,false,evt);
}
{
var G__5801 = seq__5771_5796;
var G__5802 = chunk__5772_5797;
var G__5803 = count__5773_5798;
var G__5804 = (i__5774_5799 + 1);
seq__5771_5796 = G__5801;
chunk__5772_5797 = G__5802;
count__5773_5798 = G__5803;
i__5774_5799 = G__5804;
continue;
}
} else
{var temp__4092__auto___5805 = cljs.core.seq.call(null,seq__5771_5796);
if(temp__4092__auto___5805)
{var seq__5771_5806__$1 = temp__4092__auto___5805;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5771_5806__$1))
{var c__3073__auto___5807 = cljs.core.chunk_first.call(null,seq__5771_5806__$1);
{
var G__5808 = cljs.core.chunk_rest.call(null,seq__5771_5806__$1);
var G__5809 = c__3073__auto___5807;
var G__5810 = cljs.core.count.call(null,c__3073__auto___5807);
var G__5811 = 0;
seq__5771_5796 = G__5808;
chunk__5772_5797 = G__5809;
count__5773_5798 = G__5810;
i__5774_5799 = G__5811;
continue;
}
} else
{var n_5812 = cljs.core.first.call(null,seq__5771_5806__$1);
if(cljs.core.truth_(n_5812.propagationStopped))
{} else
{evt.currentTarget = n_5812;
goog.events.fireListeners(n_5812,evt.type,false,evt);
}
{
var G__5813 = cljs.core.next.call(null,seq__5771_5806__$1);
var G__5814 = null;
var G__5815 = 0;
var G__5816 = 0;
seq__5771_5796 = G__5813;
chunk__5772_5797 = G__5814;
count__5773_5798 = G__5815;
i__5774_5799 = G__5816;
continue;
}
}
} else
{}
}
break;
}
return evt.returnValue_;
});
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
*/
domina.events.dispatch_event_target_BANG_ = (function dispatch_event_target_BANG_(source,evt){
return goog.events.dispatchEvent(source,evt);
});
/**
* Tests whether the object is a goog.event.EventTarget
*/
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){
var and__3941__auto__ = o.getParentEventTarget;
if(cljs.core.truth_(and__3941__auto__))
{return o.dispatchEvent;
} else
{return and__3941__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){
return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){
var evt = (new goog.events.Event(domina.events.find_builtin_type.call(null,type)));
var seq__5823_5829 = cljs.core.seq.call(null,evt_map);
var chunk__5824_5830 = null;
var count__5825_5831 = 0;
var i__5826_5832 = 0;
while(true){
if((i__5826_5832 < count__5825_5831))
{var vec__5827_5833 = cljs.core._nth.call(null,chunk__5824_5830,i__5826_5832);
var k_5834 = cljs.core.nth.call(null,vec__5827_5833,0,null);
var v_5835 = cljs.core.nth.call(null,vec__5827_5833,1,null);
(evt[k_5834] = v_5835);
{
var G__5836 = seq__5823_5829;
var G__5837 = chunk__5824_5830;
var G__5838 = count__5825_5831;
var G__5839 = (i__5826_5832 + 1);
seq__5823_5829 = G__5836;
chunk__5824_5830 = G__5837;
count__5825_5831 = G__5838;
i__5826_5832 = G__5839;
continue;
}
} else
{var temp__4092__auto___5840 = cljs.core.seq.call(null,seq__5823_5829);
if(temp__4092__auto___5840)
{var seq__5823_5841__$1 = temp__4092__auto___5840;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5823_5841__$1))
{var c__3073__auto___5842 = cljs.core.chunk_first.call(null,seq__5823_5841__$1);
{
var G__5843 = cljs.core.chunk_rest.call(null,seq__5823_5841__$1);
var G__5844 = c__3073__auto___5842;
var G__5845 = cljs.core.count.call(null,c__3073__auto___5842);
var G__5846 = 0;
seq__5823_5829 = G__5843;
chunk__5824_5830 = G__5844;
count__5825_5831 = G__5845;
i__5826_5832 = G__5846;
continue;
}
} else
{var vec__5828_5847 = cljs.core.first.call(null,seq__5823_5841__$1);
var k_5848 = cljs.core.nth.call(null,vec__5828_5847,0,null);
var v_5849 = cljs.core.nth.call(null,vec__5828_5847,1,null);
(evt[k_5848] = v_5849);
{
var G__5850 = cljs.core.next.call(null,seq__5823_5841__$1);
var G__5851 = null;
var G__5852 = 0;
var G__5853 = 0;
seq__5823_5829 = G__5850;
chunk__5824_5830 = G__5851;
count__5825_5831 = G__5852;
i__5826_5832 = G__5853;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source)))
{return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else
{return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});
dispatch_BANG_ = function(source,type,evt_map){
switch(arguments.length){
case 2:
return dispatch_BANG___2.call(this,source,type);
case 3:
return dispatch_BANG___3.call(this,source,type,evt_map);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = dispatch_BANG___2;
dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = dispatch_BANG___3;
return dispatch_BANG_;
})()
;
/**
* Given a listener key, removes the listener.
*/
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){
return goog.events.unlistenByKey(key);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){
var type__$1 = domina.events.find_builtin_type.call(null,type);
return cljs.core.mapcat.call(null,(function (p1__5854_SHARP_){
return goog.events.getListeners(p1__5854_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

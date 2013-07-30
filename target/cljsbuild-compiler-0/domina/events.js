goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.object');
goog.require('domina');
void 0;domina.events.Event = {};
domina.events.prevent_default = (function prevent_default(evt){
if((function (){var and__3941__auto____23993 = evt;
if(and__3941__auto____23993)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3941__auto____23993;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{return (function (){var or__3943__auto____23994 = (domina.events.prevent_default[goog.typeOf(evt)]);
if(or__3943__auto____23994)
{return or__3943__auto____23994;
} else
{var or__3943__auto____23995 = (domina.events.prevent_default["_"]);
if(or__3943__auto____23995)
{return or__3943__auto____23995;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){
if((function (){var and__3941__auto____23999 = evt;
if(and__3941__auto____23999)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3941__auto____23999;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{return (function (){var or__3943__auto____24000 = (domina.events.stop_propagation[goog.typeOf(evt)]);
if(or__3943__auto____24000)
{return or__3943__auto____24000;
} else
{var or__3943__auto____24001 = (domina.events.stop_propagation["_"]);
if(or__3943__auto____24001)
{return or__3943__auto____24001;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){
if((function (){var and__3941__auto____24005 = evt;
if(and__3941__auto____24005)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3941__auto____24005;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{return (function (){var or__3943__auto____24006 = (domina.events.target[goog.typeOf(evt)]);
if(or__3943__auto____24006)
{return or__3943__auto____24006;
} else
{var or__3943__auto____24007 = (domina.events.target["_"]);
if(or__3943__auto____24007)
{return or__3943__auto____24007;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){
if((function (){var and__3941__auto____24011 = evt;
if(and__3941__auto____24011)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3941__auto____24011;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{return (function (){var or__3943__auto____24012 = (domina.events.current_target[goog.typeOf(evt)]);
if(or__3943__auto____24012)
{return or__3943__auto____24012;
} else
{var or__3943__auto____24013 = (domina.events.current_target["_"]);
if(or__3943__auto____24013)
{return or__3943__auto____24013;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){
if((function (){var and__3941__auto____24017 = evt;
if(and__3941__auto____24017)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3941__auto____24017;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{return (function (){var or__3943__auto____24018 = (domina.events.event_type[goog.typeOf(evt)]);
if(or__3943__auto____24018)
{return or__3943__auto____24018;
} else
{var or__3943__auto____24019 = (domina.events.event_type["_"]);
if(or__3943__auto____24019)
{return or__3943__auto____24019;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){
if((function (){var and__3941__auto____24023 = evt;
if(and__3941__auto____24023)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3941__auto____24023;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{return (function (){var or__3943__auto____24024 = (domina.events.raw_event[goog.typeOf(evt)]);
if(or__3943__auto____24024)
{return or__3943__auto____24024;
} else
{var or__3943__auto____24025 = (domina.events.raw_event["_"]);
if(or__3943__auto____24025)
{return or__3943__auto____24025;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
void 0;domina.events.builtin_events = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.keyword,goog.object.getValues(goog.events.EventType)));
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
f.call(null,(function (){if((void 0 === domina.events.t24042))
{
/**
* @constructor
*/
domina.events.t24042 = (function (evt,f,create_listener_function,meta24043){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta24043 = meta24043;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t24042.cljs$lang$type = true;
domina.events.t24042.cljs$lang$ctorPrSeq = (function (this__2204__auto__){
return cljs.core.list.call(null,"domina.events/t24042");
});
domina.events.t24042.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var this__24045 = this;
var temp__4090__auto____24046 = (this__24045.evt[k]);
if(cljs.core.truth_(temp__4090__auto____24046))
{var val__24047 = temp__4090__auto____24046;
return val__24047;
} else
{return (this__24045.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t24042.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var this__24048 = this;
var or__3943__auto____24049 = o.cljs$core$ILookup$_lookup$arity$2(o,k);
if(cljs.core.truth_(or__3943__auto____24049))
{return or__3943__auto____24049;
} else
{return not_found;
}
});
domina.events.t24042.prototype.domina$events$Event$ = true;
domina.events.t24042.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var this__24050 = this;
return this__24050.evt.preventDefault();
});
domina.events.t24042.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var this__24051 = this;
return this__24051.evt.stopPropagation();
});
domina.events.t24042.prototype.domina$events$Event$target$arity$1 = (function (_){
var this__24052 = this;
return this__24052.evt.target;
});
domina.events.t24042.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var this__24053 = this;
return this__24053.evt.currentTarget;
});
domina.events.t24042.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var this__24054 = this;
return this__24054.evt.type;
});
domina.events.t24042.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var this__24055 = this;
return this__24055.evt;
});
domina.events.t24042.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24044){
var this__24056 = this;
return this__24056.meta24043;
});
domina.events.t24042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24044,meta24043){
var this__24057 = this;
return (new domina.events.t24042(this__24057.evt,this__24057.f,this__24057.create_listener_function,meta24043));
});
domina.events.t24042;
} else
{}
return (new domina.events.t24042(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){
var f__24071 = domina.events.create_listener_function.call(null,listener);
var t__24072 = domina.events.find_builtin_type.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__2361__auto____24083 = (function iter__24073(s__24074){
return (new cljs.core.LazySeq(null,false,(function (){
var s__24074__24079 = s__24074;
while(true){
var temp__4092__auto____24080 = cljs.core.seq.call(null,s__24074__24079);
if(temp__4092__auto____24080)
{var xs__4579__auto____24081 = temp__4092__auto____24080;
var node__24082 = cljs.core.first.call(null,xs__4579__auto____24081);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node__24082,t__24072,f__24071,capture):goog.events.listen(node__24082,t__24072,f__24071,capture)),iter__24073.call(null,cljs.core.rest.call(null,s__24074__24079)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2361__auto____24083.call(null,domina.nodes.call(null,content));
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
throw('Invalid arity: ' + arguments.length);
};
listen_BANG_.cljs$lang$arity$2 = listen_BANG___2;
listen_BANG_.cljs$lang$arity$3 = listen_BANG___3;
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
throw('Invalid arity: ' + arguments.length);
};
capture_BANG_.cljs$lang$arity$2 = capture_BANG___2;
capture_BANG_.cljs$lang$arity$3 = capture_BANG___3;
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
throw('Invalid arity: ' + arguments.length);
};
listen_once_BANG_.cljs$lang$arity$2 = listen_once_BANG___2;
listen_once_BANG_.cljs$lang$arity$3 = listen_once_BANG___3;
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
throw('Invalid arity: ' + arguments.length);
};
capture_once_BANG_.cljs$lang$arity$2 = capture_once_BANG___2;
capture_once_BANG_.cljs$lang$arity$3 = capture_once_BANG___3;
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
var G__24091__24092 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__24091__24092)
{var node__24093 = cljs.core.first.call(null,G__24091__24092);
var G__24091__24094 = G__24091__24092;
while(true){
goog.events.removeAll(node__24093);
var temp__4092__auto____24095 = cljs.core.next.call(null,G__24091__24094);
if(temp__4092__auto____24095)
{var G__24091__24096 = temp__4092__auto____24095;
{
var G__24098 = cljs.core.first.call(null,G__24091__24096);
var G__24099 = G__24091__24096;
node__24093 = G__24098;
G__24091__24094 = G__24099;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
var unlisten_BANG___2 = (function (content,type){
var type__24097 = domina.events.find_builtin_type.call(null,type);
return goog.events.removeAll(domina.events.node,type__24097);
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
throw('Invalid arity: ' + arguments.length);
};
unlisten_BANG_.cljs$lang$arity$0 = unlisten_BANG___0;
unlisten_BANG_.cljs$lang$arity$1 = unlisten_BANG___1;
unlisten_BANG_.cljs$lang$arity$2 = unlisten_BANG___2;
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
var temp__4090__auto____24102 = n.parentNode;
if(cljs.core.truth_(temp__4090__auto____24102))
{var parent__24103 = temp__4090__auto____24102;
{
var G__24104 = parent__24103;
var G__24105 = cljs.core.cons.call(null,parent__24103,so_far);
n = G__24104;
so_far = G__24105;
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
throw('Invalid arity: ' + arguments.length);
};
ancestor_nodes.cljs$lang$arity$1 = ancestor_nodes__1;
ancestor_nodes.cljs$lang$arity$2 = ancestor_nodes__2;
return ancestor_nodes;
})()
;
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){
var ancestors__24119 = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));
var G__24120__24121 = cljs.core.seq.call(null,ancestors__24119);
if(G__24120__24121)
{var n__24122 = cljs.core.first.call(null,G__24120__24121);
var G__24120__24123 = G__24120__24121;
while(true){
if(cljs.core.truth_(n__24122.propagationStopped))
{} else
{evt.currentTarget = n__24122;
goog.events.fireListeners(n__24122,evt.type,true,evt);
}
var temp__4092__auto____24124 = cljs.core.next.call(null,G__24120__24123);
if(temp__4092__auto____24124)
{var G__24120__24125 = temp__4092__auto____24124;
{
var G__24132 = cljs.core.first.call(null,G__24120__24125);
var G__24133 = G__24120__24125;
n__24122 = G__24132;
G__24120__24123 = G__24133;
continue;
}
} else
{}
break;
}
} else
{}
var G__24126__24127 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors__24119));
if(G__24126__24127)
{var n__24128 = cljs.core.first.call(null,G__24126__24127);
var G__24126__24129 = G__24126__24127;
while(true){
if(cljs.core.truth_(n__24128.propagationStopped))
{} else
{evt.currentTarget = n__24128;
goog.events.fireListeners(n__24128,evt.type,false,evt);
}
var temp__4092__auto____24130 = cljs.core.next.call(null,G__24126__24129);
if(temp__4092__auto____24130)
{var G__24126__24131 = temp__4092__auto____24130;
{
var G__24134 = cljs.core.first.call(null,G__24126__24131);
var G__24135 = G__24126__24131;
n__24128 = G__24134;
G__24126__24129 = G__24135;
continue;
}
} else
{}
break;
}
} else
{}
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
var and__3941__auto____24137 = o.getParentEventTarget;
if(cljs.core.truth_(and__3941__auto____24137))
{return o.dispatchEvent;
} else
{return and__3941__auto____24137;
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
var evt__24158 = (new goog.events.Event(domina.events.find_builtin_type.call(null,type)));
var G__24159__24160 = cljs.core.seq.call(null,evt_map);
if(G__24159__24160)
{var G__24162__24164 = cljs.core.first.call(null,G__24159__24160);
var vec__24163__24165 = G__24162__24164;
var k__24166 = cljs.core.nth.call(null,vec__24163__24165,0,null);
var v__24167 = cljs.core.nth.call(null,vec__24163__24165,1,null);
var G__24159__24168 = G__24159__24160;
var G__24162__24169 = G__24162__24164;
var G__24159__24170 = G__24159__24168;
while(true){
var vec__24171__24172 = G__24162__24169;
var k__24173 = cljs.core.nth.call(null,vec__24171__24172,0,null);
var v__24174 = cljs.core.nth.call(null,vec__24171__24172,1,null);
var G__24159__24175 = G__24159__24170;
(evt__24158[k__24173] = v__24174);
var temp__4092__auto____24176 = cljs.core.next.call(null,G__24159__24175);
if(temp__4092__auto____24176)
{var G__24159__24177 = temp__4092__auto____24176;
{
var G__24178 = cljs.core.first.call(null,G__24159__24177);
var G__24179 = G__24159__24177;
G__24162__24169 = G__24178;
G__24159__24170 = G__24179;
continue;
}
} else
{}
break;
}
} else
{}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source)))
{return domina.events.dispatch_event_target_BANG_.call(null,source,evt__24158);
} else
{return domina.events.dispatch_browser_BANG_.call(null,source,evt__24158);
}
});
dispatch_BANG_ = function(source,type,evt_map){
switch(arguments.length){
case 2:
return dispatch_BANG___2.call(this,source,type);
case 3:
return dispatch_BANG___3.call(this,source,type,evt_map);
}
throw('Invalid arity: ' + arguments.length);
};
dispatch_BANG_.cljs$lang$arity$2 = dispatch_BANG___2;
dispatch_BANG_.cljs$lang$arity$3 = dispatch_BANG___3;
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
var type__24182 = domina.events.find_builtin_type.call(null,type);
return cljs.core.mapcat.call(null,(function (p1__24180_SHARP_){
return goog.events.getListeners(p1__24180_SHARP_,type__24182,false);
}),domina.nodes.call(null,content));
});

goog.provide('domina');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_5863 = cljs.core.PersistentVector.fromArray([1,"<select multiple='multiple'>","</select>"], true);
var table_section_wrapper_5864 = cljs.core.PersistentVector.fromArray([1,"<table>","</table>"], true);
var cell_wrapper_5865 = cljs.core.PersistentVector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"], true);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col","\uFDD0:default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[cljs.core.PersistentVector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], true),cljs.core.PersistentVector.fromArray([0,"",""], true),table_section_wrapper_5864,table_section_wrapper_5864,opt_wrapper_5863,cljs.core.PersistentVector.fromArray([1,"<fieldset>","</fieldset>"], true),cljs.core.PersistentVector.fromArray([1,"<map>","</map>"], true),cell_wrapper_5865,table_section_wrapper_5864,cell_wrapper_5865,opt_wrapper_5863,table_section_wrapper_5864,cljs.core.PersistentVector.fromArray([2,"<table><tbody>","</tbody></table>"], true),table_section_wrapper_5864]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,tag_name,"table");
if(and__3941__auto__)
{return no_tbody_QMARK_;
} else
{return and__3941__auto__;
}
})())?(function (){var and__3941__auto__ = div.firstChild;
if(cljs.core.truth_(and__3941__auto__))
{return div.firstChild.childNodes;
} else
{return and__3941__auto__;
}
})():(((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,start_wrap,"<table>");
if(and__3941__auto__)
{return no_tbody_QMARK_;
} else
{return and__3941__auto__;
}
})())?divchildNodes:cljs.core.PersistentVector.EMPTY));
var seq__5870 = cljs.core.seq.call(null,tbody);
var chunk__5871 = null;
var count__5872 = 0;
var i__5873 = 0;
while(true){
if((i__5873 < count__5872))
{var child = cljs.core._nth.call(null,chunk__5871,i__5873);
if((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,child.nodeName,"tbody");
if(and__3941__auto__)
{return cljs.core._EQ_.call(null,child.childNodes.length,0);
} else
{return and__3941__auto__;
}
})())
{child.parentNode.removeChild(child);
} else
{}
{
var G__5874 = seq__5870;
var G__5875 = chunk__5871;
var G__5876 = count__5872;
var G__5877 = (i__5873 + 1);
seq__5870 = G__5874;
chunk__5871 = G__5875;
count__5872 = G__5876;
i__5873 = G__5877;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__5870);
if(temp__4092__auto__)
{var seq__5870__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5870__$1))
{var c__3073__auto__ = cljs.core.chunk_first.call(null,seq__5870__$1);
{
var G__5878 = cljs.core.chunk_rest.call(null,seq__5870__$1);
var G__5879 = c__3073__auto__;
var G__5880 = cljs.core.count.call(null,c__3073__auto__);
var G__5881 = 0;
seq__5870 = G__5878;
chunk__5871 = G__5879;
count__5872 = G__5880;
i__5873 = G__5881;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__5870__$1);
if((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,child.nodeName,"tbody");
if(and__3941__auto__)
{return cljs.core._EQ_.call(null,child.childNodes.length,0);
} else
{return and__3941__auto__;
}
})())
{child.parentNode.removeChild(child);
} else
{}
{
var G__5882 = cljs.core.next.call(null,seq__5870__$1);
var G__5883 = null;
var G__5884 = 0;
var G__5885 = 0;
seq__5870 = G__5882;
chunk__5871 = G__5883;
count__5872 = G__5884;
i__5873 = G__5885;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){
var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__5887 = cljs.core.get.call(null,domina.wrap_map,tag_name,(new cljs.core.Keyword("\uFDD0:default")).call(null,domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__5887,0,null);
var start_wrap = cljs.core.nth.call(null,vec__5887,1,null);
var end_wrap = cljs.core.nth.call(null,vec__5887,2,null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();
var level = depth;
while(true){
if((level > 0))
{{
var G__5888 = wrapper.lastChild;
var G__5889 = (level - 1);
wrapper = G__5888;
level = G__5889;
continue;
}
} else
{return wrapper;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3941__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__3941__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3941__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if((function (){var and__3941__auto__ = content;
if(and__3941__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3941__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__2942__auto__ = (((content == null))?null:content);
return (function (){var or__3943__auto__ = (domina.nodes[goog.typeOf(x__2942__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.nodes["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if((function (){var and__3941__auto__ = nodeseq;
if(and__3941__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3941__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__2942__auto__ = (((nodeseq == null))?null:nodeseq);
return (function (){var or__3943__auto__ = (domina.single_node[goog.typeOf(x__2942__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.single_node["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){
if(cljs.core.truth_((function (){var and__3941__auto__ = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__3941__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3941__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;
if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log_debug__delegate.call(this, mesg);
};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__5890){
var mesg = cljs.core.seq(arglist__5890);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){
if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;
if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log__delegate.call(this, mesg);
};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__5891){
var mesg = cljs.core.seq(arglist__5891);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){
if((void 0 === domina.t5895))
{goog.provide('domina.t5895');

/**
* @constructor
*/
domina.t5895 = (function (class_name,by_class,meta5896){
this.class_name = class_name;
this.by_class = by_class;
this.meta5896 = meta5896;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.t5895.cljs$lang$type = true;
domina.t5895.cljs$lang$ctorStr = "domina/t5895";
domina.t5895.cljs$lang$ctorPrWriter = (function (this__2882__auto__,writer__2883__auto__,opt__2884__auto__){
return cljs.core._write.call(null,writer__2883__auto__,"domina/t5895");
});
domina.t5895.prototype.domina$DomContent$ = true;
domina.t5895.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,self__.class_name)));
});
domina.t5895.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass(cljs.core.name.call(null,self__.class_name)));
});
domina.t5895.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5897){
var self__ = this;
return self__.meta5896;
});
domina.t5895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5897,meta5896__$1){
var self__ = this;
return (new domina.t5895(self__.class_name,self__.by_class,meta5896__$1));
});
} else
{}
return (new domina.t5895(class_name,by_class,null));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;
if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return common_ancestor__delegate.call(this, contents);
};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__5898){
var contents = cljs.core.seq(arglist__5898);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){
return cljs.core.map.call(null,(function (p1__5899_SHARP_){
return p1__5899_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__5900_SHARP_,p2__5901_SHARP_){
return goog.dom.insertChildAt(p1__5900_SHARP_,p2__5901_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__5903_SHARP_,p2__5902_SHARP_){
return goog.dom.insertSiblingBefore(p2__5902_SHARP_,p1__5903_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__5905_SHARP_,p2__5904_SHARP_){
return goog.dom.insertSiblingAfter(p2__5904_SHARP_,p1__5905_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__5907_SHARP_,p2__5906_SHARP_){
return goog.dom.replaceNode(p2__5906_SHARP_,p1__5907_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){
var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){
var seq__5912_5916 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__5913_5917 = null;
var count__5914_5918 = 0;
var i__5915_5919 = 0;
while(true){
if((i__5915_5919 < count__5914_5918))
{var n_5920 = cljs.core._nth.call(null,chunk__5913_5917,i__5915_5919);
goog.style.setStyle(n_5920,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__5921 = seq__5912_5916;
var G__5922 = chunk__5913_5917;
var G__5923 = count__5914_5918;
var G__5924 = (i__5915_5919 + 1);
seq__5912_5916 = G__5921;
chunk__5913_5917 = G__5922;
count__5914_5918 = G__5923;
i__5915_5919 = G__5924;
continue;
}
} else
{var temp__4092__auto___5925 = cljs.core.seq.call(null,seq__5912_5916);
if(temp__4092__auto___5925)
{var seq__5912_5926__$1 = temp__4092__auto___5925;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5912_5926__$1))
{var c__3073__auto___5927 = cljs.core.chunk_first.call(null,seq__5912_5926__$1);
{
var G__5928 = cljs.core.chunk_rest.call(null,seq__5912_5926__$1);
var G__5929 = c__3073__auto___5927;
var G__5930 = cljs.core.count.call(null,c__3073__auto___5927);
var G__5931 = 0;
seq__5912_5916 = G__5928;
chunk__5913_5917 = G__5929;
count__5914_5918 = G__5930;
i__5915_5919 = G__5931;
continue;
}
} else
{var n_5932 = cljs.core.first.call(null,seq__5912_5926__$1);
goog.style.setStyle(n_5932,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__5933 = cljs.core.next.call(null,seq__5912_5926__$1);
var G__5934 = null;
var G__5935 = 0;
var G__5936 = 0;
seq__5912_5916 = G__5933;
chunk__5913_5917 = G__5934;
count__5914_5918 = G__5935;
i__5915_5919 = G__5936;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;
if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_style_BANG___delegate.call(this, content, name, value);
};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__5937){
var content = cljs.core.first(arglist__5937);
arglist__5937 = cljs.core.next(arglist__5937);
var name = cljs.core.first(arglist__5937);
var value = cljs.core.rest(arglist__5937);
return set_style_BANG___delegate(content, name, value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){
var seq__5942_5946 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__5943_5947 = null;
var count__5944_5948 = 0;
var i__5945_5949 = 0;
while(true){
if((i__5945_5949 < count__5944_5948))
{var n_5950 = cljs.core._nth.call(null,chunk__5943_5947,i__5945_5949);
n_5950.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__5951 = seq__5942_5946;
var G__5952 = chunk__5943_5947;
var G__5953 = count__5944_5948;
var G__5954 = (i__5945_5949 + 1);
seq__5942_5946 = G__5951;
chunk__5943_5947 = G__5952;
count__5944_5948 = G__5953;
i__5945_5949 = G__5954;
continue;
}
} else
{var temp__4092__auto___5955 = cljs.core.seq.call(null,seq__5942_5946);
if(temp__4092__auto___5955)
{var seq__5942_5956__$1 = temp__4092__auto___5955;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5942_5956__$1))
{var c__3073__auto___5957 = cljs.core.chunk_first.call(null,seq__5942_5956__$1);
{
var G__5958 = cljs.core.chunk_rest.call(null,seq__5942_5956__$1);
var G__5959 = c__3073__auto___5957;
var G__5960 = cljs.core.count.call(null,c__3073__auto___5957);
var G__5961 = 0;
seq__5942_5946 = G__5958;
chunk__5943_5947 = G__5959;
count__5944_5948 = G__5960;
i__5945_5949 = G__5961;
continue;
}
} else
{var n_5962 = cljs.core.first.call(null,seq__5942_5956__$1);
n_5962.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__5963 = cljs.core.next.call(null,seq__5942_5956__$1);
var G__5964 = null;
var G__5965 = 0;
var G__5966 = 0;
seq__5942_5946 = G__5963;
chunk__5943_5947 = G__5964;
count__5944_5948 = G__5965;
i__5945_5949 = G__5966;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;
if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_attr_BANG___delegate.call(this, content, name, value);
};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__5967){
var content = cljs.core.first(arglist__5967);
arglist__5967 = cljs.core.next(arglist__5967);
var name = cljs.core.first(arglist__5967);
var value = cljs.core.rest(arglist__5967);
return set_attr_BANG___delegate(content, name, value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){
var seq__5972_5976 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__5973_5977 = null;
var count__5974_5978 = 0;
var i__5975_5979 = 0;
while(true){
if((i__5975_5979 < count__5974_5978))
{var n_5980 = cljs.core._nth.call(null,chunk__5973_5977,i__5975_5979);
n_5980.removeAttribute(cljs.core.name.call(null,name));
{
var G__5981 = seq__5972_5976;
var G__5982 = chunk__5973_5977;
var G__5983 = count__5974_5978;
var G__5984 = (i__5975_5979 + 1);
seq__5972_5976 = G__5981;
chunk__5973_5977 = G__5982;
count__5974_5978 = G__5983;
i__5975_5979 = G__5984;
continue;
}
} else
{var temp__4092__auto___5985 = cljs.core.seq.call(null,seq__5972_5976);
if(temp__4092__auto___5985)
{var seq__5972_5986__$1 = temp__4092__auto___5985;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5972_5986__$1))
{var c__3073__auto___5987 = cljs.core.chunk_first.call(null,seq__5972_5986__$1);
{
var G__5988 = cljs.core.chunk_rest.call(null,seq__5972_5986__$1);
var G__5989 = c__3073__auto___5987;
var G__5990 = cljs.core.count.call(null,c__3073__auto___5987);
var G__5991 = 0;
seq__5972_5976 = G__5988;
chunk__5973_5977 = G__5989;
count__5974_5978 = G__5990;
i__5975_5979 = G__5991;
continue;
}
} else
{var n_5992 = cljs.core.first.call(null,seq__5972_5986__$1);
n_5992.removeAttribute(cljs.core.name.call(null,name));
{
var G__5993 = cljs.core.next.call(null,seq__5972_5986__$1);
var G__5994 = null;
var G__5995 = 0;
var G__5996 = 0;
seq__5972_5976 = G__5993;
chunk__5973_5977 = G__5994;
count__5974_5978 = G__5995;
i__5975_5979 = G__5996;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__5998 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__5998,0,null);
var v = cljs.core.nth.call(null,vec__5998,1,null);
if(cljs.core.truth_((function (){var and__3941__auto__ = k;
if(cljs.core.truth_(and__3941__auto__))
{return v;
} else
{return and__3941__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.ObjMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style = domina.attr.call(null,content,"style");
if(cljs.core.string_QMARK_.call(null,style))
{return domina.parse_style_attributes.call(null,style);
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node = domina.single_node.call(null,content);
var attrs__$1 = node.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__5999_SHARP_){
var attr = attrs__$1.item(p1__5999_SHARP_);
var value = attr.nodeValue;
if((function (){var and__3941__auto__ = cljs.core.not_EQ_.call(null,null,value);
if(and__3941__auto__)
{return cljs.core.not_EQ_.call(null,"",value);
} else
{return and__3941__auto__;
}
})())
{return cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var seq__6006_6012 = cljs.core.seq.call(null,styles);
var chunk__6007_6013 = null;
var count__6008_6014 = 0;
var i__6009_6015 = 0;
while(true){
if((i__6009_6015 < count__6008_6014))
{var vec__6010_6016 = cljs.core._nth.call(null,chunk__6007_6013,i__6009_6015);
var name_6017 = cljs.core.nth.call(null,vec__6010_6016,0,null);
var value_6018 = cljs.core.nth.call(null,vec__6010_6016,1,null);
domina.set_style_BANG_.call(null,content,name_6017,value_6018);
{
var G__6019 = seq__6006_6012;
var G__6020 = chunk__6007_6013;
var G__6021 = count__6008_6014;
var G__6022 = (i__6009_6015 + 1);
seq__6006_6012 = G__6019;
chunk__6007_6013 = G__6020;
count__6008_6014 = G__6021;
i__6009_6015 = G__6022;
continue;
}
} else
{var temp__4092__auto___6023 = cljs.core.seq.call(null,seq__6006_6012);
if(temp__4092__auto___6023)
{var seq__6006_6024__$1 = temp__4092__auto___6023;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6006_6024__$1))
{var c__3073__auto___6025 = cljs.core.chunk_first.call(null,seq__6006_6024__$1);
{
var G__6026 = cljs.core.chunk_rest.call(null,seq__6006_6024__$1);
var G__6027 = c__3073__auto___6025;
var G__6028 = cljs.core.count.call(null,c__3073__auto___6025);
var G__6029 = 0;
seq__6006_6012 = G__6026;
chunk__6007_6013 = G__6027;
count__6008_6014 = G__6028;
i__6009_6015 = G__6029;
continue;
}
} else
{var vec__6011_6030 = cljs.core.first.call(null,seq__6006_6024__$1);
var name_6031 = cljs.core.nth.call(null,vec__6011_6030,0,null);
var value_6032 = cljs.core.nth.call(null,vec__6011_6030,1,null);
domina.set_style_BANG_.call(null,content,name_6031,value_6032);
{
var G__6033 = cljs.core.next.call(null,seq__6006_6024__$1);
var G__6034 = null;
var G__6035 = 0;
var G__6036 = 0;
seq__6006_6012 = G__6033;
chunk__6007_6013 = G__6034;
count__6008_6014 = G__6035;
i__6009_6015 = G__6036;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){
var seq__6043_6049 = cljs.core.seq.call(null,attrs);
var chunk__6044_6050 = null;
var count__6045_6051 = 0;
var i__6046_6052 = 0;
while(true){
if((i__6046_6052 < count__6045_6051))
{var vec__6047_6053 = cljs.core._nth.call(null,chunk__6044_6050,i__6046_6052);
var name_6054 = cljs.core.nth.call(null,vec__6047_6053,0,null);
var value_6055 = cljs.core.nth.call(null,vec__6047_6053,1,null);
domina.set_attr_BANG_.call(null,content,name_6054,value_6055);
{
var G__6056 = seq__6043_6049;
var G__6057 = chunk__6044_6050;
var G__6058 = count__6045_6051;
var G__6059 = (i__6046_6052 + 1);
seq__6043_6049 = G__6056;
chunk__6044_6050 = G__6057;
count__6045_6051 = G__6058;
i__6046_6052 = G__6059;
continue;
}
} else
{var temp__4092__auto___6060 = cljs.core.seq.call(null,seq__6043_6049);
if(temp__4092__auto___6060)
{var seq__6043_6061__$1 = temp__4092__auto___6060;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6043_6061__$1))
{var c__3073__auto___6062 = cljs.core.chunk_first.call(null,seq__6043_6061__$1);
{
var G__6063 = cljs.core.chunk_rest.call(null,seq__6043_6061__$1);
var G__6064 = c__3073__auto___6062;
var G__6065 = cljs.core.count.call(null,c__3073__auto___6062);
var G__6066 = 0;
seq__6043_6049 = G__6063;
chunk__6044_6050 = G__6064;
count__6045_6051 = G__6065;
i__6046_6052 = G__6066;
continue;
}
} else
{var vec__6048_6067 = cljs.core.first.call(null,seq__6043_6061__$1);
var name_6068 = cljs.core.nth.call(null,vec__6048_6067,0,null);
var value_6069 = cljs.core.nth.call(null,vec__6048_6067,1,null);
domina.set_attr_BANG_.call(null,content,name_6068,value_6069);
{
var G__6070 = cljs.core.next.call(null,seq__6043_6061__$1);
var G__6071 = null;
var G__6072 = 0;
var G__6073 = 0;
seq__6043_6049 = G__6070;
chunk__6044_6050 = G__6071;
count__6045_6051 = G__6072;
i__6046_6052 = G__6073;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){
var seq__6078_6082 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__6079_6083 = null;
var count__6080_6084 = 0;
var i__6081_6085 = 0;
while(true){
if((i__6081_6085 < count__6080_6084))
{var node_6086 = cljs.core._nth.call(null,chunk__6079_6083,i__6081_6085);
goog.dom.classes.add(node_6086,class$);
{
var G__6087 = seq__6078_6082;
var G__6088 = chunk__6079_6083;
var G__6089 = count__6080_6084;
var G__6090 = (i__6081_6085 + 1);
seq__6078_6082 = G__6087;
chunk__6079_6083 = G__6088;
count__6080_6084 = G__6089;
i__6081_6085 = G__6090;
continue;
}
} else
{var temp__4092__auto___6091 = cljs.core.seq.call(null,seq__6078_6082);
if(temp__4092__auto___6091)
{var seq__6078_6092__$1 = temp__4092__auto___6091;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6078_6092__$1))
{var c__3073__auto___6093 = cljs.core.chunk_first.call(null,seq__6078_6092__$1);
{
var G__6094 = cljs.core.chunk_rest.call(null,seq__6078_6092__$1);
var G__6095 = c__3073__auto___6093;
var G__6096 = cljs.core.count.call(null,c__3073__auto___6093);
var G__6097 = 0;
seq__6078_6082 = G__6094;
chunk__6079_6083 = G__6095;
count__6080_6084 = G__6096;
i__6081_6085 = G__6097;
continue;
}
} else
{var node_6098 = cljs.core.first.call(null,seq__6078_6092__$1);
goog.dom.classes.add(node_6098,class$);
{
var G__6099 = cljs.core.next.call(null,seq__6078_6092__$1);
var G__6100 = null;
var G__6101 = 0;
var G__6102 = 0;
seq__6078_6082 = G__6099;
chunk__6079_6083 = G__6100;
count__6080_6084 = G__6101;
i__6081_6085 = G__6102;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){
var seq__6107_6111 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__6108_6112 = null;
var count__6109_6113 = 0;
var i__6110_6114 = 0;
while(true){
if((i__6110_6114 < count__6109_6113))
{var node_6115 = cljs.core._nth.call(null,chunk__6108_6112,i__6110_6114);
goog.dom.classes.remove(node_6115,class$);
{
var G__6116 = seq__6107_6111;
var G__6117 = chunk__6108_6112;
var G__6118 = count__6109_6113;
var G__6119 = (i__6110_6114 + 1);
seq__6107_6111 = G__6116;
chunk__6108_6112 = G__6117;
count__6109_6113 = G__6118;
i__6110_6114 = G__6119;
continue;
}
} else
{var temp__4092__auto___6120 = cljs.core.seq.call(null,seq__6107_6111);
if(temp__4092__auto___6120)
{var seq__6107_6121__$1 = temp__4092__auto___6120;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6107_6121__$1))
{var c__3073__auto___6122 = cljs.core.chunk_first.call(null,seq__6107_6121__$1);
{
var G__6123 = cljs.core.chunk_rest.call(null,seq__6107_6121__$1);
var G__6124 = c__3073__auto___6122;
var G__6125 = cljs.core.count.call(null,c__3073__auto___6122);
var G__6126 = 0;
seq__6107_6111 = G__6123;
chunk__6108_6112 = G__6124;
count__6109_6113 = G__6125;
i__6110_6114 = G__6126;
continue;
}
} else
{var node_6127 = cljs.core.first.call(null,seq__6107_6121__$1);
goog.dom.classes.remove(node_6127,class$);
{
var G__6128 = cljs.core.next.call(null,seq__6107_6121__$1);
var G__6129 = null;
var G__6130 = 0;
var G__6131 = 0;
seq__6107_6111 = G__6128;
chunk__6108_6112 = G__6129;
count__6109_6113 = G__6130;
i__6110_6114 = G__6131;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){
var classes_6140__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__6136_6141 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__6137_6142 = null;
var count__6138_6143 = 0;
var i__6139_6144 = 0;
while(true){
if((i__6139_6144 < count__6138_6143))
{var node_6145 = cljs.core._nth.call(null,chunk__6137_6142,i__6139_6144);
goog.dom.classes.set(node_6145,classes_6140__$1);
{
var G__6146 = seq__6136_6141;
var G__6147 = chunk__6137_6142;
var G__6148 = count__6138_6143;
var G__6149 = (i__6139_6144 + 1);
seq__6136_6141 = G__6146;
chunk__6137_6142 = G__6147;
count__6138_6143 = G__6148;
i__6139_6144 = G__6149;
continue;
}
} else
{var temp__4092__auto___6150 = cljs.core.seq.call(null,seq__6136_6141);
if(temp__4092__auto___6150)
{var seq__6136_6151__$1 = temp__4092__auto___6150;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6136_6151__$1))
{var c__3073__auto___6152 = cljs.core.chunk_first.call(null,seq__6136_6151__$1);
{
var G__6153 = cljs.core.chunk_rest.call(null,seq__6136_6151__$1);
var G__6154 = c__3073__auto___6152;
var G__6155 = cljs.core.count.call(null,c__3073__auto___6152);
var G__6156 = 0;
seq__6136_6141 = G__6153;
chunk__6137_6142 = G__6154;
count__6138_6143 = G__6155;
i__6139_6144 = G__6156;
continue;
}
} else
{var node_6157 = cljs.core.first.call(null,seq__6136_6151__$1);
goog.dom.classes.set(node_6157,classes_6140__$1);
{
var G__6158 = cljs.core.next.call(null,seq__6136_6151__$1);
var G__6159 = null;
var G__6160 = 0;
var G__6161 = 0;
seq__6136_6141 = G__6158;
chunk__6137_6142 = G__6159;
count__6138_6143 = G__6160;
i__6139_6144 = G__6161;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){
var seq__6166_6170 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__6167_6171 = null;
var count__6168_6172 = 0;
var i__6169_6173 = 0;
while(true){
if((i__6169_6173 < count__6168_6172))
{var node_6174 = cljs.core._nth.call(null,chunk__6167_6171,i__6169_6173);
goog.dom.setTextContent(node_6174,value);
{
var G__6175 = seq__6166_6170;
var G__6176 = chunk__6167_6171;
var G__6177 = count__6168_6172;
var G__6178 = (i__6169_6173 + 1);
seq__6166_6170 = G__6175;
chunk__6167_6171 = G__6176;
count__6168_6172 = G__6177;
i__6169_6173 = G__6178;
continue;
}
} else
{var temp__4092__auto___6179 = cljs.core.seq.call(null,seq__6166_6170);
if(temp__4092__auto___6179)
{var seq__6166_6180__$1 = temp__4092__auto___6179;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6166_6180__$1))
{var c__3073__auto___6181 = cljs.core.chunk_first.call(null,seq__6166_6180__$1);
{
var G__6182 = cljs.core.chunk_rest.call(null,seq__6166_6180__$1);
var G__6183 = c__3073__auto___6181;
var G__6184 = cljs.core.count.call(null,c__3073__auto___6181);
var G__6185 = 0;
seq__6166_6170 = G__6182;
chunk__6167_6171 = G__6183;
count__6168_6172 = G__6184;
i__6169_6173 = G__6185;
continue;
}
} else
{var node_6186 = cljs.core.first.call(null,seq__6166_6180__$1);
goog.dom.setTextContent(node_6186,value);
{
var G__6187 = cljs.core.next.call(null,seq__6166_6180__$1);
var G__6188 = null;
var G__6189 = 0;
var G__6190 = 0;
seq__6166_6170 = G__6187;
chunk__6167_6171 = G__6188;
count__6168_6172 = G__6189;
i__6169_6173 = G__6190;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){
return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){
var seq__6195_6199 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__6196_6200 = null;
var count__6197_6201 = 0;
var i__6198_6202 = 0;
while(true){
if((i__6198_6202 < count__6197_6201))
{var node_6203 = cljs.core._nth.call(null,chunk__6196_6200,i__6198_6202);
goog.dom.forms.setValue(node_6203,value);
{
var G__6204 = seq__6195_6199;
var G__6205 = chunk__6196_6200;
var G__6206 = count__6197_6201;
var G__6207 = (i__6198_6202 + 1);
seq__6195_6199 = G__6204;
chunk__6196_6200 = G__6205;
count__6197_6201 = G__6206;
i__6198_6202 = G__6207;
continue;
}
} else
{var temp__4092__auto___6208 = cljs.core.seq.call(null,seq__6195_6199);
if(temp__4092__auto___6208)
{var seq__6195_6209__$1 = temp__4092__auto___6208;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6195_6209__$1))
{var c__3073__auto___6210 = cljs.core.chunk_first.call(null,seq__6195_6209__$1);
{
var G__6211 = cljs.core.chunk_rest.call(null,seq__6195_6209__$1);
var G__6212 = c__3073__auto___6210;
var G__6213 = cljs.core.count.call(null,c__3073__auto___6210);
var G__6214 = 0;
seq__6195_6199 = G__6211;
chunk__6196_6200 = G__6212;
count__6197_6201 = G__6213;
i__6198_6202 = G__6214;
continue;
}
} else
{var node_6215 = cljs.core.first.call(null,seq__6195_6209__$1);
goog.dom.forms.setValue(node_6215,value);
{
var G__6216 = cljs.core.next.call(null,seq__6195_6209__$1);
var G__6217 = null;
var G__6218 = 0;
var G__6219 = 0;
seq__6195_6199 = G__6216;
chunk__6196_6200 = G__6217;
count__6197_6201 = G__6218;
i__6198_6202 = G__6219;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){
return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);
if(cljs.core.truth_((function (){var and__3941__auto__ = allows_inner_html_QMARK_;
if(and__3941__auto__)
{var and__3941__auto____$1 = (function (){var or__3943__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__3941__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{var value_6230 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__6226_6231 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__6227_6232 = null;
var count__6228_6233 = 0;
var i__6229_6234 = 0;
while(true){
if((i__6229_6234 < count__6228_6233))
{var node_6235 = cljs.core._nth.call(null,chunk__6227_6232,i__6229_6234);
goog.events.removeAll(node_6235);
node_6235.innerHTML = value_6230;
{
var G__6236 = seq__6226_6231;
var G__6237 = chunk__6227_6232;
var G__6238 = count__6228_6233;
var G__6239 = (i__6229_6234 + 1);
seq__6226_6231 = G__6236;
chunk__6227_6232 = G__6237;
count__6228_6233 = G__6238;
i__6229_6234 = G__6239;
continue;
}
} else
{var temp__4092__auto___6240 = cljs.core.seq.call(null,seq__6226_6231);
if(temp__4092__auto___6240)
{var seq__6226_6241__$1 = temp__4092__auto___6240;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6226_6241__$1))
{var c__3073__auto___6242 = cljs.core.chunk_first.call(null,seq__6226_6241__$1);
{
var G__6243 = cljs.core.chunk_rest.call(null,seq__6226_6241__$1);
var G__6244 = c__3073__auto___6242;
var G__6245 = cljs.core.count.call(null,c__3073__auto___6242);
var G__6246 = 0;
seq__6226_6231 = G__6243;
chunk__6227_6232 = G__6244;
count__6228_6233 = G__6245;
i__6229_6234 = G__6246;
continue;
}
} else
{var node_6247 = cljs.core.first.call(null,seq__6226_6241__$1);
goog.events.removeAll(node_6247);
node_6247.innerHTML = value_6230;
{
var G__6248 = cljs.core.next.call(null,seq__6226_6241__$1);
var G__6249 = null;
var G__6250 = 0;
var G__6251 = 0;
seq__6226_6231 = G__6248;
chunk__6227_6232 = G__6249;
count__6228_6233 = G__6250;
i__6229_6234 = G__6251;
continue;
}
}
} else
{}
}
break;
}
}catch (e6225){if((e6225 instanceof Error))
{var e_6252 = e6225;
domina.replace_children_BANG_.call(null,content,value_6230);
} else
{if("\uFDD0:else")
{throw e6225;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){
if(cljs.core.string_QMARK_.call(null,inner_content))
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){
return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){
var m = domina.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__3941__auto__ = bubble;
if(cljs.core.truth_(and__3941__auto__))
{return (value == null);
} else
{return and__3941__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;
return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){
var m = (function (){var or__3943__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.ObjMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents = domina.nodes.call(null,parent_content);
var children = domina.nodes.call(null,child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__6259_6263 = cljs.core.seq.call(null,children);
var chunk__6260_6264 = null;
var count__6261_6265 = 0;
var i__6262_6266 = 0;
while(true){
if((i__6262_6266 < count__6261_6265))
{var child_6267 = cljs.core._nth.call(null,chunk__6260_6264,i__6262_6266);
frag.appendChild(child_6267);
{
var G__6268 = seq__6259_6263;
var G__6269 = chunk__6260_6264;
var G__6270 = count__6261_6265;
var G__6271 = (i__6262_6266 + 1);
seq__6259_6263 = G__6268;
chunk__6260_6264 = G__6269;
count__6261_6265 = G__6270;
i__6262_6266 = G__6271;
continue;
}
} else
{var temp__4092__auto___6272 = cljs.core.seq.call(null,seq__6259_6263);
if(temp__4092__auto___6272)
{var seq__6259_6273__$1 = temp__4092__auto___6272;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6259_6273__$1))
{var c__3073__auto___6274 = cljs.core.chunk_first.call(null,seq__6259_6273__$1);
{
var G__6275 = cljs.core.chunk_rest.call(null,seq__6259_6273__$1);
var G__6276 = c__3073__auto___6274;
var G__6277 = cljs.core.count.call(null,c__3073__auto___6274);
var G__6278 = 0;
seq__6259_6263 = G__6275;
chunk__6260_6264 = G__6276;
count__6261_6265 = G__6277;
i__6262_6266 = G__6278;
continue;
}
} else
{var child_6279 = cljs.core.first.call(null,seq__6259_6273__$1);
frag.appendChild(child_6279);
{
var G__6280 = cljs.core.next.call(null,seq__6259_6273__$1);
var G__6281 = null;
var G__6282 = 0;
var G__6283 = 0;
seq__6259_6263 = G__6280;
chunk__6260_6264 = G__6281;
count__6261_6265 = G__6282;
i__6262_6266 = G__6283;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();
var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){
return first_child.cloneNode(true);
});})(parents,children,first_child))
));
if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__6253_SHARP_,p2__6254_SHARP_){
return f.call(null,p1__6253_SHARP_,p2__6254_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){
if((n < nl.length))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){
if((n < nl.length))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){
if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){
var and__3941__auto__ = obj;
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = cljs.core.not.call(null,obj.name);
if(and__3941__auto____$1)
{return obj.length;
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){
if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__6285 = list_thing;
if(G__6285)
{if((function (){var or__3943__auto__ = (G__6285.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__6285.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__6285.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__6285);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__6285);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if("\uFDD0:default")
{return cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray([list_thing], true));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__6286 = content;
if(G__6286)
{if((function (){var or__3943__auto__ = (G__6286.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__6286.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__6286.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__6286);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__6286);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if("\uFDD0:default")
{return cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray([content], true));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){
if((content == null))
{return null;
} else
{if((function (){var G__6287 = content;
if(G__6287)
{if((function (){var or__3943__auto__ = (G__6287.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__6287.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__6287.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__6287);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__6287);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if("\uFDD0:default")
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
return nodelist.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
if((nodelist.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
return nodelist.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
if((nodelist.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
return domina.lazy_nodelist.call(null,coll);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
return coll.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
if((coll.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
return coll.length;
});
} else
{}

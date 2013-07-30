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
var opt_wrapper__19610 = cljs.core.PersistentVector.fromArray([1,"<select multiple='multiple'>","</select>"], true);
var table_section_wrapper__19611 = cljs.core.PersistentVector.fromArray([1,"<table>","</table>"], true);
var cell_wrapper__19612 = cljs.core.PersistentVector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"], true);
domina.wrap_map = cljs.core.ObjMap.fromObject(["col","\uFDD0'default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],{"col":cljs.core.PersistentVector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], true),"\uFDD0'default":cljs.core.PersistentVector.fromArray([0,"",""], true),"tfoot":table_section_wrapper__19611,"caption":table_section_wrapper__19611,"optgroup":opt_wrapper__19610,"legend":cljs.core.PersistentVector.fromArray([1,"<fieldset>","</fieldset>"], true),"area":cljs.core.PersistentVector.fromArray([1,"<map>","</map>"], true),"td":cell_wrapper__19612,"thead":table_section_wrapper__19611,"th":cell_wrapper__19612,"option":opt_wrapper__19610,"tbody":table_section_wrapper__19611,"tr":cljs.core.PersistentVector.fromArray([2,"<table><tbody>","</tbody></table>"], true),"colgroup":table_section_wrapper__19611});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html){
var no_tbody_QMARK___19625 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody__19629 = (((function (){var and__3941__auto____19626 = cljs.core._EQ_.call(null,domina.tag_name,"table");
if(and__3941__auto____19626)
{return no_tbody_QMARK___19625;
} else
{return and__3941__auto____19626;
}
})())?(function (){var and__3941__auto____19627 = div.firstChild;
if(cljs.core.truth_(and__3941__auto____19627))
{return div.firstChild.childNodes;
} else
{return and__3941__auto____19627;
}
})():(((function (){var and__3941__auto____19628 = cljs.core._EQ_.call(null,domina.start_wrap,"<table>");
if(and__3941__auto____19628)
{return no_tbody_QMARK___19625;
} else
{return and__3941__auto____19628;
}
})())?divchildNodes:cljs.core.PersistentVector.EMPTY));
var G__19630__19631 = cljs.core.seq.call(null,tbody__19629);
if(G__19630__19631)
{var child__19632 = cljs.core.first.call(null,G__19630__19631);
var G__19630__19633 = G__19630__19631;
while(true){
if((function (){var and__3941__auto____19634 = cljs.core._EQ_.call(null,child__19632.nodeName,"tbody");
if(and__3941__auto____19634)
{return cljs.core._EQ_.call(null,child__19632.childNodes.length,0);
} else
{return and__3941__auto____19634;
}
})())
{child__19632.parentNode.removeChild(child__19632);
} else
{}
var temp__4092__auto____19635 = cljs.core.next.call(null,G__19630__19633);
if(temp__4092__auto____19635)
{var G__19630__19636 = temp__4092__auto____19635;
{
var G__19637 = cljs.core.first.call(null,G__19630__19636);
var G__19638 = G__19630__19636;
child__19632 = G__19637;
G__19630__19633 = G__19638;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
domina.html_to_dom = (function html_to_dom(html){
var html__19652 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name__19653 = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__19652)))].join('').toLowerCase();
var vec__19651__19654 = cljs.core._lookup.call(null,domina.wrap_map,tag_name__19653,(new cljs.core.Keyword("\uFDD0'default")).call(null,domina.wrap_map));
var depth__19655 = cljs.core.nth.call(null,vec__19651__19654,0,null);
var start_wrap__19656 = cljs.core.nth.call(null,vec__19651__19654,1,null);
var end_wrap__19657 = cljs.core.nth.call(null,vec__19651__19654,2,null);
var div__19661 = (function (){var wrapper__19659 = (function (){var div__19658 = document.createElement("div");
div__19658.innerHTML = [cljs.core.str(start_wrap__19656),cljs.core.str(html__19652),cljs.core.str(end_wrap__19657)].join('');
return div__19658;
})();
var level__19660 = depth__19655;
while(true){
if((level__19660 > 0))
{{
var G__19663 = wrapper__19659.lastChild;
var G__19664 = (level__19660 - 1);
wrapper__19659 = G__19663;
level__19660 = G__19664;
continue;
}
} else
{return wrapper__19659;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div__19661,html__19652);
} else
{}
if(cljs.core.truth_((function (){var and__3941__auto____19662 = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__3941__auto____19662)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__19652);
} else
{return and__3941__auto____19662;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div__19661,html__19652);
} else
{}
return div__19661.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
void 0;domina.DomContent = {};
domina.nodes = (function nodes(content){
if((function (){var and__3941__auto____19668 = content;
if(and__3941__auto____19668)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3941__auto____19668;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{return (function (){var or__3943__auto____19669 = (domina.nodes[goog.typeOf(content)]);
if(or__3943__auto____19669)
{return or__3943__auto____19669;
} else
{var or__3943__auto____19670 = (domina.nodes["_"]);
if(or__3943__auto____19670)
{return or__3943__auto____19670;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if((function (){var and__3941__auto____19674 = nodeseq;
if(and__3941__auto____19674)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3941__auto____19674;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{return (function (){var or__3943__auto____19675 = (domina.single_node[goog.typeOf(nodeseq)]);
if(or__3943__auto____19675)
{return or__3943__auto____19675;
} else
{var or__3943__auto____19676 = (domina.single_node["_"]);
if(or__3943__auto____19676)
{return or__3943__auto____19676;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
void 0;domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){
if(cljs.core.truth_((function (){var and__3941__auto____19678 = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__3941__auto____19678))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3941__auto____19678;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;
if (goog.isDef(var_args)) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log_debug__delegate.call(this, mesg);
};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__19679){
var mesg = cljs.core.seq(arglist__19679);;
return log_debug__delegate(mesg);
});
log_debug.cljs$lang$arity$variadic = log_debug__delegate;
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
if (goog.isDef(var_args)) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log__delegate.call(this, mesg);
};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__19680){
var mesg = cljs.core.seq(arglist__19680);;
return log__delegate(mesg);
});
log.cljs$lang$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
void 0;
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){
if((void 0 === domina.t19688))
{
/**
* @constructor
*/
domina.t19688 = (function (class_name,by_class,meta19689){
this.class_name = class_name;
this.by_class = by_class;
this.meta19689 = meta19689;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.t19688.cljs$lang$type = true;
domina.t19688.cljs$lang$ctorPrSeq = (function (this__2204__auto__){
return cljs.core.list.call(null,"domina/t19688");
});
domina.t19688.prototype.domina$DomContent$ = true;
domina.t19688.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var this__19691 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,this__19691.class_name)));
});
domina.t19688.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var this__19692 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass(cljs.core.name.call(null,this__19692.class_name)));
});
domina.t19688.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19690){
var this__19693 = this;
return this__19693.meta19689;
});
domina.t19688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19690,meta19689){
var this__19694 = this;
return (new domina.t19688(this__19694.class_name,this__19694.by_class,meta19689));
});
domina.t19688;
} else
{}
return (new domina.t19688(class_name,by_class,null));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){
return cljs.core.map.call(null,(function (p1__19695_SHARP_){
return p1__19695_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
void 0;
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
domina.apply_with_cloning.call(null,(function (p1__19696_SHARP_,p2__19697_SHARP_){
return goog.dom.insertChildAt(p1__19696_SHARP_,p2__19697_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__19699_SHARP_,p2__19698_SHARP_){
return goog.dom.insertSiblingBefore(p2__19698_SHARP_,p1__19699_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__19701_SHARP_,p2__19700_SHARP_){
return goog.dom.insertSiblingAfter(p2__19700_SHARP_,p1__19701_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__19703_SHARP_,p2__19702_SHARP_){
return goog.dom.replaceNode(p2__19702_SHARP_,p1__19703_SHARP_);
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
var s__19705 = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s__19705)))
{return null;
} else
{return s__19705;
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
var G__19712__19713 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__19712__19713)
{var n__19714 = cljs.core.first.call(null,G__19712__19713);
var G__19712__19715 = G__19712__19713;
while(true){
goog.style.setStyle(n__19714,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__4092__auto____19716 = cljs.core.next.call(null,G__19712__19715);
if(temp__4092__auto____19716)
{var G__19712__19717 = temp__4092__auto____19716;
{
var G__19718 = cljs.core.first.call(null,G__19712__19717);
var G__19719 = G__19712__19717;
n__19714 = G__19718;
G__19712__19715 = G__19719;
continue;
}
} else
{}
break;
}
} else
{}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;
if (goog.isDef(var_args)) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_style_BANG___delegate.call(this, content, name, value);
};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__19720){
var content = cljs.core.first(arglist__19720);
var name = cljs.core.first(cljs.core.next(arglist__19720));
var value = cljs.core.rest(cljs.core.next(arglist__19720));
return set_style_BANG___delegate(content, name, value);
});
set_style_BANG_.cljs$lang$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){
var G__19727__19728 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__19727__19728)
{var n__19729 = cljs.core.first.call(null,G__19727__19728);
var G__19727__19730 = G__19727__19728;
while(true){
n__19729.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__4092__auto____19731 = cljs.core.next.call(null,G__19727__19730);
if(temp__4092__auto____19731)
{var G__19727__19732 = temp__4092__auto____19731;
{
var G__19733 = cljs.core.first.call(null,G__19727__19732);
var G__19734 = G__19727__19732;
n__19729 = G__19733;
G__19727__19730 = G__19734;
continue;
}
} else
{}
break;
}
} else
{}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;
if (goog.isDef(var_args)) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_attr_BANG___delegate.call(this, content, name, value);
};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__19735){
var content = cljs.core.first(arglist__19735);
var name = cljs.core.first(cljs.core.next(arglist__19735));
var value = cljs.core.rest(cljs.core.next(arglist__19735));
return set_attr_BANG___delegate(content, name, value);
});
set_attr_BANG_.cljs$lang$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){
var G__19742__19743 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__19742__19743)
{var n__19744 = cljs.core.first.call(null,G__19742__19743);
var G__19742__19745 = G__19742__19743;
while(true){
n__19744.removeAttribute(cljs.core.name.call(null,name));
var temp__4092__auto____19746 = cljs.core.next.call(null,G__19742__19745);
if(temp__4092__auto____19746)
{var G__19742__19747 = temp__4092__auto____19746;
{
var G__19748 = cljs.core.first.call(null,G__19742__19747);
var G__19749 = G__19742__19747;
n__19744 = G__19748;
G__19742__19745 = G__19749;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__19755__19756 = pair.split(/\s*:\s*/);
var k__19757 = cljs.core.nth.call(null,vec__19755__19756,0,null);
var v__19758 = cljs.core.nth.call(null,vec__19755__19756,1,null);
if(cljs.core.truth_((function (){var and__3941__auto____19759 = k__19757;
if(cljs.core.truth_(and__3941__auto____19759))
{return v__19758;
} else
{return and__3941__auto____19759;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__19757.toLowerCase()),v__19758);
} else
{return acc;
}
}),cljs.core.ObjMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__19762 = domina.attr.call(null,content,"style");
if(cljs.core.string_QMARK_.call(null,style__19762))
{return domina.parse_style_attributes.call(null,style__19762);
} else
{if(cljs.core.truth_(style__19762.cssText))
{return domina.parse_style_attributes.call(null,style__19762.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__19768 = domina.single_node.call(null,content);
var attrs__19769 = node__19768.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__19760_SHARP_){
var attr__19770 = attrs__19769.item(p1__19760_SHARP_);
var value__19771 = attr__19770.nodeValue;
if((function (){var and__3941__auto____19772 = cljs.core.not_EQ_.call(null,null,value__19771);
if(and__3941__auto____19772)
{return cljs.core.not_EQ_.call(null,"",value__19771);
} else
{return and__3941__auto____19772;
}
})())
{return cljs.core.PersistentArrayMap.fromArrays([cljs.core.keyword.call(null,attr__19770.nodeName.toLowerCase())],[attr__19770.nodeValue]);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__19769.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__19792__19793 = cljs.core.seq.call(null,styles);
if(G__19792__19793)
{var G__19795__19797 = cljs.core.first.call(null,G__19792__19793);
var vec__19796__19798 = G__19795__19797;
var name__19799 = cljs.core.nth.call(null,vec__19796__19798,0,null);
var value__19800 = cljs.core.nth.call(null,vec__19796__19798,1,null);
var G__19792__19801 = G__19792__19793;
var G__19795__19802 = G__19795__19797;
var G__19792__19803 = G__19792__19801;
while(true){
var vec__19804__19805 = G__19795__19802;
var name__19806 = cljs.core.nth.call(null,vec__19804__19805,0,null);
var value__19807 = cljs.core.nth.call(null,vec__19804__19805,1,null);
var G__19792__19808 = G__19792__19803;
domina.set_style_BANG_.call(null,content,name__19806,value__19807);
var temp__4092__auto____19809 = cljs.core.next.call(null,G__19792__19808);
if(temp__4092__auto____19809)
{var G__19792__19810 = temp__4092__auto____19809;
{
var G__19811 = cljs.core.first.call(null,G__19792__19810);
var G__19812 = G__19792__19810;
G__19795__19802 = G__19811;
G__19792__19803 = G__19812;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Sets the specified CSS styles fpr each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){
var G__19832__19833 = cljs.core.seq.call(null,attrs);
if(G__19832__19833)
{var G__19835__19837 = cljs.core.first.call(null,G__19832__19833);
var vec__19836__19838 = G__19835__19837;
var name__19839 = cljs.core.nth.call(null,vec__19836__19838,0,null);
var value__19840 = cljs.core.nth.call(null,vec__19836__19838,1,null);
var G__19832__19841 = G__19832__19833;
var G__19835__19842 = G__19835__19837;
var G__19832__19843 = G__19832__19841;
while(true){
var vec__19844__19845 = G__19835__19842;
var name__19846 = cljs.core.nth.call(null,vec__19844__19845,0,null);
var value__19847 = cljs.core.nth.call(null,vec__19844__19845,1,null);
var G__19832__19848 = G__19832__19843;
domina.set_attr_BANG_.call(null,content,name__19846,value__19847);
var temp__4092__auto____19849 = cljs.core.next.call(null,G__19832__19848);
if(temp__4092__auto____19849)
{var G__19832__19850 = temp__4092__auto____19849;
{
var G__19851 = cljs.core.first.call(null,G__19832__19850);
var G__19852 = G__19832__19850;
G__19835__19842 = G__19851;
G__19832__19843 = G__19852;
continue;
}
} else
{}
break;
}
} else
{}
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
var G__19859__19860 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__19859__19860)
{var node__19861 = cljs.core.first.call(null,G__19859__19860);
var G__19859__19862 = G__19859__19860;
while(true){
goog.dom.classes.add(node__19861,class$);
var temp__4092__auto____19863 = cljs.core.next.call(null,G__19859__19862);
if(temp__4092__auto____19863)
{var G__19859__19864 = temp__4092__auto____19863;
{
var G__19865 = cljs.core.first.call(null,G__19859__19864);
var G__19866 = G__19859__19864;
node__19861 = G__19865;
G__19859__19862 = G__19866;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){
var G__19873__19874 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__19873__19874)
{var node__19875 = cljs.core.first.call(null,G__19873__19874);
var G__19873__19876 = G__19873__19874;
while(true){
goog.dom.classes.remove(node__19875,class$);
var temp__4092__auto____19877 = cljs.core.next.call(null,G__19873__19876);
if(temp__4092__auto____19877)
{var G__19873__19878 = temp__4092__auto____19877;
{
var G__19879 = cljs.core.first.call(null,G__19873__19878);
var G__19880 = G__19873__19878;
node__19875 = G__19879;
G__19873__19876 = G__19880;
continue;
}
} else
{}
break;
}
} else
{}
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
var classes__19888 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var G__19889__19890 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__19889__19890)
{var node__19891 = cljs.core.first.call(null,G__19889__19890);
var G__19889__19892 = G__19889__19890;
while(true){
goog.dom.classes.set(node__19891,classes__19888);
var temp__4092__auto____19893 = cljs.core.next.call(null,G__19889__19892);
if(temp__4092__auto____19893)
{var G__19889__19894 = temp__4092__auto____19893;
{
var G__19895 = cljs.core.first.call(null,G__19889__19894);
var G__19896 = G__19889__19894;
node__19891 = G__19895;
G__19889__19892 = G__19896;
continue;
}
} else
{}
break;
}
} else
{}
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
var G__19903__19904 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__19903__19904)
{var node__19905 = cljs.core.first.call(null,G__19903__19904);
var G__19903__19906 = G__19903__19904;
while(true){
goog.dom.setTextContent(node__19905,value);
var temp__4092__auto____19907 = cljs.core.next.call(null,G__19903__19906);
if(temp__4092__auto____19907)
{var G__19903__19908 = temp__4092__auto____19907;
{
var G__19909 = cljs.core.first.call(null,G__19903__19908);
var G__19910 = G__19903__19908;
node__19905 = G__19909;
G__19903__19906 = G__19910;
continue;
}
} else
{}
break;
}
} else
{}
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
var G__19917__19918 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__19917__19918)
{var node__19919 = cljs.core.first.call(null,G__19917__19918);
var G__19917__19920 = G__19917__19918;
while(true){
goog.dom.forms.setValue(node__19919,value);
var temp__4092__auto____19921 = cljs.core.next.call(null,G__19917__19920);
if(temp__4092__auto____19921)
{var G__19917__19922 = temp__4092__auto____19921;
{
var G__19923 = cljs.core.first.call(null,G__19917__19922);
var G__19924 = G__19917__19922;
node__19919 = G__19923;
G__19917__19920 = G__19924;
continue;
}
} else
{}
break;
}
} else
{}
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
var allows_inner_html_QMARK___19941 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK___19942 = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name__19943 = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK___19944 = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name__19943);
if(cljs.core.truth_((function (){var and__3941__auto____19945 = allows_inner_html_QMARK___19941;
if(and__3941__auto____19945)
{var and__3941__auto____19947 = (function (){var or__3943__auto____19946 = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__3943__auto____19946))
{return or__3943__auto____19946;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK___19942);
}
})();
if(cljs.core.truth_(and__3941__auto____19947))
{return !(special_tag_QMARK___19944);
} else
{return and__3941__auto____19947;
}
} else
{return and__3941__auto____19945;
}
})()))
{var value__19948 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var G__19951__19952 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__19951__19952)
{var node__19953 = cljs.core.first.call(null,G__19951__19952);
var G__19951__19954 = G__19951__19952;
while(true){
goog.events.removeAll(node__19953);
node__19953.innerHTML = value__19948;
var temp__4092__auto____19955 = cljs.core.next.call(null,G__19951__19954);
if(temp__4092__auto____19955)
{var G__19951__19956 = temp__4092__auto____19955;
{
var G__19957 = cljs.core.first.call(null,G__19951__19956);
var G__19958 = G__19951__19956;
node__19953 = G__19957;
G__19951__19954 = G__19958;
continue;
}
} else
{}
break;
}
} else
{}
}catch (e19949){if(cljs.core.instance_QMARK_.call(null,domina.Exception,e19949))
{var e__19950 = e19949;
domina.replace_children_BANG_.call(null,content,value__19948);
} else
{if("\uFDD0'else")
{throw e19949;
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
var m__19964 = domina.single_node.call(null,node).__domina_data;
var value__19965 = (cljs.core.truth_(m__19964)?cljs.core._lookup.call(null,m__19964,key,null):null);
if(cljs.core.truth_((function (){var and__3941__auto____19966 = bubble;
if(cljs.core.truth_(and__3941__auto____19966))
{return (value__19965 == null);
} else
{return and__3941__auto____19966;
}
})()))
{var temp__4092__auto____19967 = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__4092__auto____19967))
{var parent__19968 = temp__4092__auto____19967;
return get_data.call(null,parent__19968,key,true);
} else
{return null;
}
} else
{return value__19965;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw('Invalid arity: ' + arguments.length);
};
get_data.cljs$lang$arity$2 = get_data__2;
get_data.cljs$lang$arity$3 = get_data__3;
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
var m__19974 = (function (){var or__3943__auto____19973 = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__3943__auto____19973))
{return or__3943__auto____19973;
} else
{return cljs.core.ObjMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m__19974,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents__19986 = domina.nodes.call(null,parent_content);
var children__19987 = domina.nodes.call(null,child_content);
var first_child__19995 = (function (){var frag__19988 = document.createDocumentFragment();
var G__19989__19990 = cljs.core.seq.call(null,children__19987);
if(G__19989__19990)
{var child__19991 = cljs.core.first.call(null,G__19989__19990);
var G__19989__19992 = G__19989__19990;
while(true){
frag__19988.appendChild(child__19991);
var temp__4092__auto____19993 = cljs.core.next.call(null,G__19989__19992);
if(temp__4092__auto____19993)
{var G__19989__19994 = temp__4092__auto____19993;
{
var G__19997 = cljs.core.first.call(null,G__19989__19994);
var G__19998 = G__19989__19994;
child__19991 = G__19997;
G__19989__19992 = G__19998;
continue;
}
} else
{}
break;
}
} else
{}
return frag__19988;
})();
var other_children__19996 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__19986) - 1),(function (){
return first_child__19995.cloneNode(true);
})));
if(cljs.core.seq.call(null,parents__19986))
{f.call(null,cljs.core.first.call(null,parents__19986),first_child__19995);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__19969_SHARP_,p2__19970_SHARP_){
return f.call(null,p1__19969_SHARP_,p2__19970_SHARP_);
}),cljs.core.rest.call(null,parents__19986),other_children__19996));
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
throw('Invalid arity: ' + arguments.length);
};
lazy_nl_via_item.cljs$lang$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$lang$arity$2 = lazy_nl_via_item__2;
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
throw('Invalid arity: ' + arguments.length);
};
lazy_nl_via_array_ref.cljs$lang$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$lang$arity$2 = lazy_nl_via_array_ref__2;
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
var and__3941__auto____20000 = obj;
if(cljs.core.truth_(and__3941__auto____20000))
{return obj.length;
} else
{return and__3941__auto____20000;
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
{if((function (){var G__20004__20005 = list_thing;
if(G__20004__20005)
{if((function (){var or__3943__auto____20006 = (G__20004__20005.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto____20006)
{return or__3943__auto____20006;
} else
{return G__20004__20005.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__20004__20005.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__20004__20005);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__20004__20005);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if("\uFDD0'default")
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
{if((function (){var G__20007__20008 = content;
if(G__20007__20008)
{if((function (){var or__3943__auto____20009 = (G__20007__20008.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto____20009)
{return or__3943__auto____20009;
} else
{return G__20007__20008.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__20007__20008.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__20007__20008);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__20007__20008);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if("\uFDD0'default")
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
{if((function (){var G__20010__20011 = content;
if(G__20010__20011)
{if((function (){var or__3943__auto____20012 = (G__20010__20011.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto____20012)
{return or__3943__auto____20012;
} else
{return G__20010__20011.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__20010__20011.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__20010__20011);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__20010__20011);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if("\uFDD0'default")
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

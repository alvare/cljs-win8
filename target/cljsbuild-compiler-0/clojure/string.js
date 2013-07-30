goog.provide('clojure.string');
goog.require('cljs.core');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
clojure.string.seq_reverse = (function seq_reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* Returns s with its characters reversed.
*/
clojure.string.reverse = (function reverse(s){
return s.split("").reverse().join("");
});
/**
* Replaces all instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace = (function replace(s,match,replacement){
if(cljs.core.string_QMARK_.call(null,match))
{return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else
{if(cljs.core.truth_(match.hasOwnProperty("source")))
{return s.replace((new RegExp(match.source,"g")),replacement);
} else
{if("\uFDD0'else")
{throw [cljs.core.str("Invalid match arg: "),cljs.core.str(match)].join('');
} else
{return null;
}
}
}
});
/**
* Replaces the first instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace_first = (function replace_first(s,match,replacement){
return s.replace(match,replacement);
});
/**
* Returns a string of all elements in coll, as returned by (seq coll),
* separated by an optional separator.
*/
clojure.string.join = (function() {
var join = null;
var join__1 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});
var join__2 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case 1:
return join__1.call(this,separator);
case 2:
return join__2.call(this,separator,coll);
}
throw('Invalid arity: ' + arguments.length);
};
join.cljs$lang$arity$1 = join__1;
join.cljs$lang$arity$2 = join__2;
return join;
})()
;
/**
* Converts string to all upper-case.
*/
clojure.string.upper_case = (function upper_case(s){
return s.toUpperCase();
});
/**
* Converts string to all lower-case.
*/
clojure.string.lower_case = (function lower_case(s){
return s.toLowerCase();
});
/**
* Converts first character of the string to upper-case, all other
* characters to lower-case.
*/
clojure.string.capitalize = (function capitalize(s){
if((cljs.core.count.call(null,s) < 2))
{return clojure.string.upper_case.call(null,s);
} else
{return [cljs.core.str(clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,0,1))),cljs.core.str(clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,1)))].join('');
}
});
/**
* Splits string on a regular expression. Optional argument limit is
* the maximum number of splits. Not lazy. Returns vector of the splits.
*/
clojure.string.split = (function() {
var split = null;
var split__2 = (function (s,re){
return cljs.core.vec.call(null,[cljs.core.str(s)].join('').split(re));
});
var split__3 = (function (s,re,limit){
if((limit < 1))
{return cljs.core.vec.call(null,[cljs.core.str(s)].join('').split(re));
} else
{var s__20021 = s;
var limit__20022 = limit;
var parts__20023 = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core._EQ_.call(null,limit__20022,1))
{return cljs.core.conj.call(null,parts__20023,s__20021);
} else
{var temp__4090__auto____20024 = cljs.core.re_find.call(null,re,s__20021);
if(cljs.core.truth_(temp__4090__auto____20024))
{var m__20025 = temp__4090__auto____20024;
var index__20026 = s__20021.indexOf(m__20025);
{
var G__20027 = s__20021.substring((index__20026 + cljs.core.count.call(null,m__20025)));
var G__20028 = (limit__20022 - 1);
var G__20029 = cljs.core.conj.call(null,parts__20023,s__20021.substring(0,index__20026));
s__20021 = G__20027;
limit__20022 = G__20028;
parts__20023 = G__20029;
continue;
}
} else
{return cljs.core.conj.call(null,parts__20023,s__20021);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case 2:
return split__2.call(this,s,re);
case 3:
return split__3.call(this,s,re,limit);
}
throw('Invalid arity: ' + arguments.length);
};
split.cljs$lang$arity$2 = split__2;
split.cljs$lang$arity$3 = split__3;
return split;
})()
;
/**
* Splits s on
* or
* .
*/
clojure.string.split_lines = (function split_lines(s){
return clojure.string.split.call(null,s,/\n|\r\n/);
});
/**
* Removes whitespace from both ends of string.
*/
clojure.string.trim = (function trim(s){
return goog.string.trim(s);
});
/**
* Removes whitespace from the left side of string.
*/
clojure.string.triml = (function triml(s){
return goog.string.trimLeft(s);
});
/**
* Removes whitespace from the right side of string.
*/
clojure.string.trimr = (function trimr(s){
return goog.string.trimRight(s);
});
/**
* Removes all trailing newline \n or return \r characters from
* string.  Similar to Perl's chomp.
*/
clojure.string.trim_newline = (function trim_newline(s){
var index__20033 = s.length;
while(true){
if((index__20033 === 0))
{return "";
} else
{var ch__20034 = cljs.core._lookup.call(null,s,(index__20033 - 1),null);
if((function (){var or__3943__auto____20035 = cljs.core._EQ_.call(null,ch__20034,"\n");
if(or__3943__auto____20035)
{return or__3943__auto____20035;
} else
{return cljs.core._EQ_.call(null,ch__20034,"\r");
}
})())
{{
var G__20036 = (index__20033 - 1);
index__20033 = G__20036;
continue;
}
} else
{return s.substring(0,index__20033);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var s__20040 = [cljs.core.str(s)].join('');
if(cljs.core.truth_((function (){var or__3943__auto____20041 = cljs.core.not.call(null,s__20040);
if(or__3943__auto____20041)
{return or__3943__auto____20041;
} else
{var or__3943__auto____20042 = cljs.core._EQ_.call(null,"",s__20040);
if(or__3943__auto____20042)
{return or__3943__auto____20042;
} else
{return cljs.core.re_matches.call(null,/\s+/,s__20040);
}
}
})()))
{return true;
} else
{return false;
}
});
/**
* Return a new string, using cmap to escape each character ch
* from s as follows:
* 
* If (cmap ch) is nil, append ch to the new string.
* If (cmap ch) is non-nil, append (str (cmap ch)) instead.
*/
clojure.string.escape = (function escape(s,cmap){
var buffer__20049 = (new goog.string.StringBuffer());
var length__20050 = s.length;
var index__20051 = 0;
while(true){
if(cljs.core._EQ_.call(null,length__20050,index__20051))
{return buffer__20049.toString();
} else
{var ch__20052 = s.charAt(index__20051);
var temp__4090__auto____20053 = cljs.core._lookup.call(null,cmap,ch__20052,null);
if(cljs.core.truth_(temp__4090__auto____20053))
{var replacement__20054 = temp__4090__auto____20053;
buffer__20049.append([cljs.core.str(replacement__20054)].join(''));
} else
{buffer__20049.append(ch__20052);
}
{
var G__20055 = (index__20051 + 1);
index__20051 = G__20055;
continue;
}
}
break;
}
});

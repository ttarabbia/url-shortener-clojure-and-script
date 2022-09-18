goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39577){
var map__39578 = p__39577;
var map__39578__$1 = cljs.core.__destructure_map(map__39578);
var m = map__39578__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39578__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39578__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39579_39777 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39580_39778 = null;
var count__39581_39779 = (0);
var i__39582_39780 = (0);
while(true){
if((i__39582_39780 < count__39581_39779)){
var f_39782 = chunk__39580_39778.cljs$core$IIndexed$_nth$arity$2(null,i__39582_39780);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_39782], 0));


var G__39783 = seq__39579_39777;
var G__39784 = chunk__39580_39778;
var G__39785 = count__39581_39779;
var G__39786 = (i__39582_39780 + (1));
seq__39579_39777 = G__39783;
chunk__39580_39778 = G__39784;
count__39581_39779 = G__39785;
i__39582_39780 = G__39786;
continue;
} else {
var temp__5804__auto___39787 = cljs.core.seq(seq__39579_39777);
if(temp__5804__auto___39787){
var seq__39579_39788__$1 = temp__5804__auto___39787;
if(cljs.core.chunked_seq_QMARK_(seq__39579_39788__$1)){
var c__5568__auto___39789 = cljs.core.chunk_first(seq__39579_39788__$1);
var G__39790 = cljs.core.chunk_rest(seq__39579_39788__$1);
var G__39791 = c__5568__auto___39789;
var G__39792 = cljs.core.count(c__5568__auto___39789);
var G__39793 = (0);
seq__39579_39777 = G__39790;
chunk__39580_39778 = G__39791;
count__39581_39779 = G__39792;
i__39582_39780 = G__39793;
continue;
} else {
var f_39794 = cljs.core.first(seq__39579_39788__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_39794], 0));


var G__39795 = cljs.core.next(seq__39579_39788__$1);
var G__39796 = null;
var G__39797 = (0);
var G__39798 = (0);
seq__39579_39777 = G__39795;
chunk__39580_39778 = G__39796;
count__39581_39779 = G__39797;
i__39582_39780 = G__39798;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39799 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_39799], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_39799)))?cljs.core.second(arglists_39799):arglists_39799)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39583_39800 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39584_39801 = null;
var count__39585_39802 = (0);
var i__39586_39803 = (0);
while(true){
if((i__39586_39803 < count__39585_39802)){
var vec__39598_39804 = chunk__39584_39801.cljs$core$IIndexed$_nth$arity$2(null,i__39586_39803);
var name_39805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39598_39804,(0),null);
var map__39601_39806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39598_39804,(1),null);
var map__39601_39807__$1 = cljs.core.__destructure_map(map__39601_39806);
var doc_39808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39601_39807__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39809 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39601_39807__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_39805], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_39809], 0));

if(cljs.core.truth_(doc_39808)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_39808], 0));
} else {
}


var G__39811 = seq__39583_39800;
var G__39812 = chunk__39584_39801;
var G__39813 = count__39585_39802;
var G__39814 = (i__39586_39803 + (1));
seq__39583_39800 = G__39811;
chunk__39584_39801 = G__39812;
count__39585_39802 = G__39813;
i__39586_39803 = G__39814;
continue;
} else {
var temp__5804__auto___39815 = cljs.core.seq(seq__39583_39800);
if(temp__5804__auto___39815){
var seq__39583_39816__$1 = temp__5804__auto___39815;
if(cljs.core.chunked_seq_QMARK_(seq__39583_39816__$1)){
var c__5568__auto___39817 = cljs.core.chunk_first(seq__39583_39816__$1);
var G__39818 = cljs.core.chunk_rest(seq__39583_39816__$1);
var G__39819 = c__5568__auto___39817;
var G__39820 = cljs.core.count(c__5568__auto___39817);
var G__39821 = (0);
seq__39583_39800 = G__39818;
chunk__39584_39801 = G__39819;
count__39585_39802 = G__39820;
i__39586_39803 = G__39821;
continue;
} else {
var vec__39603_39822 = cljs.core.first(seq__39583_39816__$1);
var name_39823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39603_39822,(0),null);
var map__39606_39824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39603_39822,(1),null);
var map__39606_39825__$1 = cljs.core.__destructure_map(map__39606_39824);
var doc_39826 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39606_39825__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39827 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39606_39825__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_39823], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_39827], 0));

if(cljs.core.truth_(doc_39826)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_39826], 0));
} else {
}


var G__39829 = cljs.core.next(seq__39583_39816__$1);
var G__39830 = null;
var G__39831 = (0);
var G__39832 = (0);
seq__39583_39800 = G__39829;
chunk__39584_39801 = G__39830;
count__39585_39802 = G__39831;
i__39586_39803 = G__39832;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__39608 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39610 = null;
var count__39611 = (0);
var i__39612 = (0);
while(true){
if((i__39612 < count__39611)){
var role = chunk__39610.cljs$core$IIndexed$_nth$arity$2(null,i__39612);
var temp__5804__auto___39833__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___39833__$1)){
var spec_39834 = temp__5804__auto___39833__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_39834)], 0));
} else {
}


var G__39835 = seq__39608;
var G__39836 = chunk__39610;
var G__39837 = count__39611;
var G__39838 = (i__39612 + (1));
seq__39608 = G__39835;
chunk__39610 = G__39836;
count__39611 = G__39837;
i__39612 = G__39838;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__39608);
if(temp__5804__auto____$1){
var seq__39608__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__39608__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39608__$1);
var G__39839 = cljs.core.chunk_rest(seq__39608__$1);
var G__39840 = c__5568__auto__;
var G__39841 = cljs.core.count(c__5568__auto__);
var G__39842 = (0);
seq__39608 = G__39839;
chunk__39610 = G__39840;
count__39611 = G__39841;
i__39612 = G__39842;
continue;
} else {
var role = cljs.core.first(seq__39608__$1);
var temp__5804__auto___39843__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___39843__$2)){
var spec_39844 = temp__5804__auto___39843__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_39844)], 0));
} else {
}


var G__39845 = cljs.core.next(seq__39608__$1);
var G__39846 = null;
var G__39847 = (0);
var G__39848 = (0);
seq__39608 = G__39845;
chunk__39610 = G__39846;
count__39611 = G__39847;
i__39612 = G__39848;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__39849 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__39850 = cljs.core.ex_cause(t);
via = G__39849;
t = G__39850;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__39621 = datafied_throwable;
var map__39621__$1 = cljs.core.__destructure_map(map__39621);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39621__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39621__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39621__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__39622 = cljs.core.last(via);
var map__39622__$1 = cljs.core.__destructure_map(map__39622);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39622__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39622__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39622__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__39623 = data;
var map__39623__$1 = cljs.core.__destructure_map(map__39623);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39623__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39623__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39623__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__39624 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__39624__$1 = cljs.core.__destructure_map(map__39624);
var top_data = map__39624__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39624__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__39625 = phase;
var G__39625__$1 = (((G__39625 instanceof cljs.core.Keyword))?G__39625.fqn:null);
switch (G__39625__$1) {
case "read-source":
var map__39626 = data;
var map__39626__$1 = cljs.core.__destructure_map(map__39626);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39626__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39626__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__39627 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__39627__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39627,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39627);
var G__39627__$2 = (cljs.core.truth_((function (){var fexpr__39628 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39628.cljs$core$IFn$_invoke$arity$1 ? fexpr__39628.cljs$core$IFn$_invoke$arity$1(source) : fexpr__39628.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__39627__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39627__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39627__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39627__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__39629 = top_data;
var G__39629__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39629,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39629);
var G__39629__$2 = (cljs.core.truth_((function (){var fexpr__39630 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39630.cljs$core$IFn$_invoke$arity$1 ? fexpr__39630.cljs$core$IFn$_invoke$arity$1(source) : fexpr__39630.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__39629__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39629__$1);
var G__39629__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39629__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39629__$2);
var G__39629__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39629__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39629__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39629__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39629__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__39631 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39631,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39631,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39631,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39631,(3),null);
var G__39638 = top_data;
var G__39638__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39638,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__39638);
var G__39638__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39638__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__39638__$1);
var G__39638__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39638__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__39638__$2);
var G__39638__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39638__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39638__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39638__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39638__$4;
}

break;
case "execution":
var vec__39652 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39652,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39652,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39652,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39652,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__39619_SHARP_){
var or__5045__auto__ = (p1__39619_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__39655 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39655.cljs$core$IFn$_invoke$arity$1 ? fexpr__39655.cljs$core$IFn$_invoke$arity$1(p1__39619_SHARP_) : fexpr__39655.call(null,p1__39619_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__39656 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__39656__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39656,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__39656);
var G__39656__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39656__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39656__$1);
var G__39656__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39656__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__39656__$2);
var G__39656__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39656__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__39656__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39656__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39656__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39625__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__39666){
var map__39667 = p__39666;
var map__39667__$1 = cljs.core.__destructure_map(map__39667);
var triage_data = map__39667__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39667__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39667__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39667__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39667__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39667__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39667__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39667__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39667__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__39673 = phase;
var G__39673__$1 = (((G__39673 instanceof cljs.core.Keyword))?G__39673.fqn:null);
switch (G__39673__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__39683 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__39684 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39685 = loc;
var G__39686 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39687_39891 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39688_39892 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39689_39893 = true;
var _STAR_print_fn_STAR__temp_val__39690_39894 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39689_39893);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39690_39894);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39664_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__39664_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39688_39892);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39687_39891);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__39683,G__39684,G__39685,G__39686) : format.call(null,G__39683,G__39684,G__39685,G__39686));

break;
case "macroexpansion":
var G__39715 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__39716 = cause_type;
var G__39717 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39718 = loc;
var G__39719 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39715,G__39716,G__39717,G__39718,G__39719) : format.call(null,G__39715,G__39716,G__39717,G__39718,G__39719));

break;
case "compile-syntax-check":
var G__39720 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__39721 = cause_type;
var G__39722 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39723 = loc;
var G__39724 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39720,G__39721,G__39722,G__39723,G__39724) : format.call(null,G__39720,G__39721,G__39722,G__39723,G__39724));

break;
case "compilation":
var G__39725 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__39726 = cause_type;
var G__39727 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39728 = loc;
var G__39729 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39725,G__39726,G__39727,G__39728,G__39729) : format.call(null,G__39725,G__39726,G__39727,G__39728,G__39729));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__39737 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__39738 = symbol;
var G__39739 = loc;
var G__39740 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39741_39896 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39742_39897 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39743_39898 = true;
var _STAR_print_fn_STAR__temp_val__39744_39899 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39743_39898);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39744_39899);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39665_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__39665_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39742_39897);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39741_39896);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__39737,G__39738,G__39739,G__39740) : format.call(null,G__39737,G__39738,G__39739,G__39740));
} else {
var G__39759 = "Execution error%s at %s(%s).\n%s\n";
var G__39760 = cause_type;
var G__39761 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39762 = loc;
var G__39763 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39759,G__39760,G__39761,G__39762,G__39763) : format.call(null,G__39759,G__39760,G__39761,G__39762,G__39763));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39673__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

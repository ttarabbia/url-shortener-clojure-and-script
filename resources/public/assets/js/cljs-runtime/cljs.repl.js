goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35172){
var map__35173 = p__35172;
var map__35173__$1 = cljs.core.__destructure_map(map__35173);
var m = map__35173__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35173__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35173__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__35175_35451 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35176_35452 = null;
var count__35177_35453 = (0);
var i__35178_35454 = (0);
while(true){
if((i__35178_35454 < count__35177_35453)){
var f_35455 = chunk__35176_35452.cljs$core$IIndexed$_nth$arity$2(null,i__35178_35454);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35455], 0));


var G__35456 = seq__35175_35451;
var G__35457 = chunk__35176_35452;
var G__35458 = count__35177_35453;
var G__35459 = (i__35178_35454 + (1));
seq__35175_35451 = G__35456;
chunk__35176_35452 = G__35457;
count__35177_35453 = G__35458;
i__35178_35454 = G__35459;
continue;
} else {
var temp__5804__auto___35460 = cljs.core.seq(seq__35175_35451);
if(temp__5804__auto___35460){
var seq__35175_35461__$1 = temp__5804__auto___35460;
if(cljs.core.chunked_seq_QMARK_(seq__35175_35461__$1)){
var c__5568__auto___35462 = cljs.core.chunk_first(seq__35175_35461__$1);
var G__35463 = cljs.core.chunk_rest(seq__35175_35461__$1);
var G__35464 = c__5568__auto___35462;
var G__35465 = cljs.core.count(c__5568__auto___35462);
var G__35466 = (0);
seq__35175_35451 = G__35463;
chunk__35176_35452 = G__35464;
count__35177_35453 = G__35465;
i__35178_35454 = G__35466;
continue;
} else {
var f_35467 = cljs.core.first(seq__35175_35461__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35467], 0));


var G__35468 = cljs.core.next(seq__35175_35461__$1);
var G__35469 = null;
var G__35470 = (0);
var G__35471 = (0);
seq__35175_35451 = G__35468;
chunk__35176_35452 = G__35469;
count__35177_35453 = G__35470;
i__35178_35454 = G__35471;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35472 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35472], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35472)))?cljs.core.second(arglists_35472):arglists_35472)], 0));
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
var seq__35184_35473 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35185_35474 = null;
var count__35186_35475 = (0);
var i__35187_35476 = (0);
while(true){
if((i__35187_35476 < count__35186_35475)){
var vec__35206_35481 = chunk__35185_35474.cljs$core$IIndexed$_nth$arity$2(null,i__35187_35476);
var name_35482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35206_35481,(0),null);
var map__35209_35483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35206_35481,(1),null);
var map__35209_35484__$1 = cljs.core.__destructure_map(map__35209_35483);
var doc_35485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35209_35484__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35209_35484__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35482], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35486], 0));

if(cljs.core.truth_(doc_35485)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35485], 0));
} else {
}


var G__35487 = seq__35184_35473;
var G__35488 = chunk__35185_35474;
var G__35489 = count__35186_35475;
var G__35490 = (i__35187_35476 + (1));
seq__35184_35473 = G__35487;
chunk__35185_35474 = G__35488;
count__35186_35475 = G__35489;
i__35187_35476 = G__35490;
continue;
} else {
var temp__5804__auto___35491 = cljs.core.seq(seq__35184_35473);
if(temp__5804__auto___35491){
var seq__35184_35492__$1 = temp__5804__auto___35491;
if(cljs.core.chunked_seq_QMARK_(seq__35184_35492__$1)){
var c__5568__auto___35493 = cljs.core.chunk_first(seq__35184_35492__$1);
var G__35494 = cljs.core.chunk_rest(seq__35184_35492__$1);
var G__35495 = c__5568__auto___35493;
var G__35496 = cljs.core.count(c__5568__auto___35493);
var G__35497 = (0);
seq__35184_35473 = G__35494;
chunk__35185_35474 = G__35495;
count__35186_35475 = G__35496;
i__35187_35476 = G__35497;
continue;
} else {
var vec__35213_35499 = cljs.core.first(seq__35184_35492__$1);
var name_35500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35213_35499,(0),null);
var map__35217_35501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35213_35499,(1),null);
var map__35217_35502__$1 = cljs.core.__destructure_map(map__35217_35501);
var doc_35503 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35217_35502__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35217_35502__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35500], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35504], 0));

if(cljs.core.truth_(doc_35503)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35503], 0));
} else {
}


var G__35505 = cljs.core.next(seq__35184_35492__$1);
var G__35506 = null;
var G__35507 = (0);
var G__35508 = (0);
seq__35184_35473 = G__35505;
chunk__35185_35474 = G__35506;
count__35186_35475 = G__35507;
i__35187_35476 = G__35508;
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

var seq__35219 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35220 = null;
var count__35221 = (0);
var i__35222 = (0);
while(true){
if((i__35222 < count__35221)){
var role = chunk__35220.cljs$core$IIndexed$_nth$arity$2(null,i__35222);
var temp__5804__auto___35510__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___35510__$1)){
var spec_35511 = temp__5804__auto___35510__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35511)], 0));
} else {
}


var G__35512 = seq__35219;
var G__35513 = chunk__35220;
var G__35514 = count__35221;
var G__35515 = (i__35222 + (1));
seq__35219 = G__35512;
chunk__35220 = G__35513;
count__35221 = G__35514;
i__35222 = G__35515;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__35219);
if(temp__5804__auto____$1){
var seq__35219__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35219__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35219__$1);
var G__35516 = cljs.core.chunk_rest(seq__35219__$1);
var G__35517 = c__5568__auto__;
var G__35518 = cljs.core.count(c__5568__auto__);
var G__35519 = (0);
seq__35219 = G__35516;
chunk__35220 = G__35517;
count__35221 = G__35518;
i__35222 = G__35519;
continue;
} else {
var role = cljs.core.first(seq__35219__$1);
var temp__5804__auto___35520__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___35520__$2)){
var spec_35521 = temp__5804__auto___35520__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35521)], 0));
} else {
}


var G__35522 = cljs.core.next(seq__35219__$1);
var G__35523 = null;
var G__35524 = (0);
var G__35525 = (0);
seq__35219 = G__35522;
chunk__35220 = G__35523;
count__35221 = G__35524;
i__35222 = G__35525;
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
var G__35527 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35528 = cljs.core.ex_cause(t);
via = G__35527;
t = G__35528;
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
var map__35332 = datafied_throwable;
var map__35332__$1 = cljs.core.__destructure_map(map__35332);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35332__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35332__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35332__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35333 = cljs.core.last(via);
var map__35333__$1 = cljs.core.__destructure_map(map__35333);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35333__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35333__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35333__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35334 = data;
var map__35334__$1 = cljs.core.__destructure_map(map__35334);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35334__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35334__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35334__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35335 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35335__$1 = cljs.core.__destructure_map(map__35335);
var top_data = map__35335__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35335__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35340 = phase;
var G__35340__$1 = (((G__35340 instanceof cljs.core.Keyword))?G__35340.fqn:null);
switch (G__35340__$1) {
case "read-source":
var map__35345 = data;
var map__35345__$1 = cljs.core.__destructure_map(map__35345);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35345__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35345__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35346 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35346__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35346,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35346);
var G__35346__$2 = (cljs.core.truth_((function (){var fexpr__35351 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35351.cljs$core$IFn$_invoke$arity$1 ? fexpr__35351.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35351.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35346__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35346__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35346__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35346__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35352 = top_data;
var G__35352__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35352,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35352);
var G__35352__$2 = (cljs.core.truth_((function (){var fexpr__35354 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35354.cljs$core$IFn$_invoke$arity$1 ? fexpr__35354.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35354.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35352__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35352__$1);
var G__35352__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35352__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35352__$2);
var G__35352__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35352__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35352__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35352__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35352__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35360 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35360,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35360,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35360,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35360,(3),null);
var G__35370 = top_data;
var G__35370__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35370,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35370);
var G__35370__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35370__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35370__$1);
var G__35370__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35370__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35370__$2);
var G__35370__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35370__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35370__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35370__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35370__$4;
}

break;
case "execution":
var vec__35377 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35377,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35377,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35377,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35377,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35320_SHARP_){
var or__5045__auto__ = (p1__35320_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__35382 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35382.cljs$core$IFn$_invoke$arity$1 ? fexpr__35382.cljs$core$IFn$_invoke$arity$1(p1__35320_SHARP_) : fexpr__35382.call(null,p1__35320_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__35385 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35385__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35385,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35385);
var G__35385__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35385__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35385__$1);
var G__35385__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35385__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35385__$2);
var G__35385__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35385__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35385__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35385__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35385__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35340__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35398){
var map__35399 = p__35398;
var map__35399__$1 = cljs.core.__destructure_map(map__35399);
var triage_data = map__35399__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35399__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35399__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35399__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35399__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35399__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35399__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35399__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35399__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__35400 = phase;
var G__35400__$1 = (((G__35400 instanceof cljs.core.Keyword))?G__35400.fqn:null);
switch (G__35400__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35407 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35408 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35409 = loc;
var G__35410 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35412_35545 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35413_35546 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35414_35547 = true;
var _STAR_print_fn_STAR__temp_val__35415_35548 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35414_35547);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35415_35548);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35396_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35396_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35413_35546);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35412_35545);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35407,G__35408,G__35409,G__35410) : format.call(null,G__35407,G__35408,G__35409,G__35410));

break;
case "macroexpansion":
var G__35416 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35417 = cause_type;
var G__35418 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35419 = loc;
var G__35420 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35416,G__35417,G__35418,G__35419,G__35420) : format.call(null,G__35416,G__35417,G__35418,G__35419,G__35420));

break;
case "compile-syntax-check":
var G__35421 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35422 = cause_type;
var G__35423 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35424 = loc;
var G__35425 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35421,G__35422,G__35423,G__35424,G__35425) : format.call(null,G__35421,G__35422,G__35423,G__35424,G__35425));

break;
case "compilation":
var G__35426 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35427 = cause_type;
var G__35428 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35429 = loc;
var G__35430 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35426,G__35427,G__35428,G__35429,G__35430) : format.call(null,G__35426,G__35427,G__35428,G__35429,G__35430));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35431 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35432 = symbol;
var G__35433 = loc;
var G__35434 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35435_35555 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35436_35556 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35437_35557 = true;
var _STAR_print_fn_STAR__temp_val__35438_35558 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35437_35557);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35438_35558);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35397_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35397_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35436_35556);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35435_35555);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35431,G__35432,G__35433,G__35434) : format.call(null,G__35431,G__35432,G__35433,G__35434));
} else {
var G__35440 = "Execution error%s at %s(%s).\n%s\n";
var G__35441 = cause_type;
var G__35442 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35443 = loc;
var G__35444 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35440,G__35441,G__35442,G__35443,G__35444) : format.call(null,G__35440,G__35441,G__35442,G__35443,G__35444));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35400__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

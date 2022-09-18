goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__32199,res){
var map__32201 = p__32199;
var map__32201__$1 = cljs.core.__destructure_map(map__32201);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32201__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32201__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__32202 = res;
var G__32202__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32202,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__32202);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32202__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__32202__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__32209 = arguments.length;
switch (G__32209) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__32219,msg,handlers,timeout_after_ms){
var map__32221 = p__32219;
var map__32221__$1 = cljs.core.__destructure_map(map__32221);
var runtime = map__32221__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32221__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32762 = arguments.length;
var i__5770__auto___32763 = (0);
while(true){
if((i__5770__auto___32763 < len__5769__auto___32762)){
args__5775__auto__.push((arguments[i__5770__auto___32763]));

var G__32765 = (i__5770__auto___32763 + (1));
i__5770__auto___32763 = G__32765;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__32236,ev,args){
var map__32237 = p__32236;
var map__32237__$1 = cljs.core.__destructure_map(map__32237);
var runtime = map__32237__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32237__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__32238 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__32246 = null;
var count__32247 = (0);
var i__32248 = (0);
while(true){
if((i__32248 < count__32247)){
var ext = chunk__32246.cljs$core$IIndexed$_nth$arity$2(null,i__32248);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__32767 = seq__32238;
var G__32768 = chunk__32246;
var G__32769 = count__32247;
var G__32770 = (i__32248 + (1));
seq__32238 = G__32767;
chunk__32246 = G__32768;
count__32247 = G__32769;
i__32248 = G__32770;
continue;
} else {
var G__32771 = seq__32238;
var G__32772 = chunk__32246;
var G__32773 = count__32247;
var G__32774 = (i__32248 + (1));
seq__32238 = G__32771;
chunk__32246 = G__32772;
count__32247 = G__32773;
i__32248 = G__32774;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32238);
if(temp__5804__auto__){
var seq__32238__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32238__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32238__$1);
var G__32775 = cljs.core.chunk_rest(seq__32238__$1);
var G__32776 = c__5568__auto__;
var G__32777 = cljs.core.count(c__5568__auto__);
var G__32778 = (0);
seq__32238 = G__32775;
chunk__32246 = G__32776;
count__32247 = G__32777;
i__32248 = G__32778;
continue;
} else {
var ext = cljs.core.first(seq__32238__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__32779 = cljs.core.next(seq__32238__$1);
var G__32780 = null;
var G__32781 = (0);
var G__32782 = (0);
seq__32238 = G__32779;
chunk__32246 = G__32780;
count__32247 = G__32781;
i__32248 = G__32782;
continue;
} else {
var G__32783 = cljs.core.next(seq__32238__$1);
var G__32784 = null;
var G__32785 = (0);
var G__32786 = (0);
seq__32238 = G__32783;
chunk__32246 = G__32784;
count__32247 = G__32785;
i__32248 = G__32786;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq32227){
var G__32229 = cljs.core.first(seq32227);
var seq32227__$1 = cljs.core.next(seq32227);
var G__32230 = cljs.core.first(seq32227__$1);
var seq32227__$2 = cljs.core.next(seq32227__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32229,G__32230,seq32227__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__32336,p__32337){
var map__32338 = p__32336;
var map__32338__$1 = cljs.core.__destructure_map(map__32338);
var runtime = map__32338__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32338__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__32339 = p__32337;
var map__32339__$1 = cljs.core.__destructure_map(map__32339);
var msg = map__32339__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32339__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__32344 = cljs.core.deref(state_ref);
var map__32344__$1 = cljs.core.__destructure_map(map__32344);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32344__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32344__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__32421){
var map__32423 = p__32421;
var map__32423__$1 = cljs.core.__destructure_map(map__32423);
var runtime = map__32423__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32423__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__32444,msg){
var map__32446 = p__32444;
var map__32446__$1 = cljs.core.__destructure_map(map__32446);
var runtime = map__32446__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32446__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__32472,key,p__32473){
var map__32474 = p__32472;
var map__32474__$1 = cljs.core.__destructure_map(map__32474);
var state = map__32474__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32474__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__32478 = p__32473;
var map__32478__$1 = cljs.core.__destructure_map(map__32478);
var spec = map__32478__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32478__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__32515,key,spec){
var map__32517 = p__32515;
var map__32517__$1 = cljs.core.__destructure_map(map__32517);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32517__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__32518_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__32518_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__32519_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__32519_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__32520_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__32520_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__32521_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__32521_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__32522_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__32522_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__32603,key){
var map__32604 = p__32603;
var map__32604__$1 = cljs.core.__destructure_map(map__32604);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32604__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__32612,msg){
var map__32613 = p__32612;
var map__32613__$1 = cljs.core.__destructure_map(map__32613);
var runtime = map__32613__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32613__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__32623,p__32624){
var map__32626 = p__32623;
var map__32626__$1 = cljs.core.__destructure_map(map__32626);
var runtime = map__32626__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32626__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__32627 = p__32624;
var map__32627__$1 = cljs.core.__destructure_map(map__32627);
var msg = map__32627__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32627__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32627__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__32635 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__32637 = null;
var count__32638 = (0);
var i__32639 = (0);
while(true){
if((i__32639 < count__32638)){
var map__32713 = chunk__32637.cljs$core$IIndexed$_nth$arity$2(null,i__32639);
var map__32713__$1 = cljs.core.__destructure_map(map__32713);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32713__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__32853 = seq__32635;
var G__32854 = chunk__32637;
var G__32855 = count__32638;
var G__32856 = (i__32639 + (1));
seq__32635 = G__32853;
chunk__32637 = G__32854;
count__32638 = G__32855;
i__32639 = G__32856;
continue;
} else {
var G__32858 = seq__32635;
var G__32859 = chunk__32637;
var G__32860 = count__32638;
var G__32861 = (i__32639 + (1));
seq__32635 = G__32858;
chunk__32637 = G__32859;
count__32638 = G__32860;
i__32639 = G__32861;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32635);
if(temp__5804__auto__){
var seq__32635__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32635__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32635__$1);
var G__32862 = cljs.core.chunk_rest(seq__32635__$1);
var G__32863 = c__5568__auto__;
var G__32864 = cljs.core.count(c__5568__auto__);
var G__32865 = (0);
seq__32635 = G__32862;
chunk__32637 = G__32863;
count__32638 = G__32864;
i__32639 = G__32865;
continue;
} else {
var map__32714 = cljs.core.first(seq__32635__$1);
var map__32714__$1 = cljs.core.__destructure_map(map__32714);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32714__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__32874 = cljs.core.next(seq__32635__$1);
var G__32875 = null;
var G__32876 = (0);
var G__32877 = (0);
seq__32635 = G__32874;
chunk__32637 = G__32875;
count__32638 = G__32876;
i__32639 = G__32877;
continue;
} else {
var G__32882 = cljs.core.next(seq__32635__$1);
var G__32883 = null;
var G__32884 = (0);
var G__32885 = (0);
seq__32635 = G__32882;
chunk__32637 = G__32883;
count__32638 = G__32884;
i__32639 = G__32885;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map

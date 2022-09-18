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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__35731,res){
var map__35732 = p__35731;
var map__35732__$1 = cljs.core.__destructure_map(map__35732);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35732__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35732__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__35733 = res;
var G__35733__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35733,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__35733);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35733__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__35733__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__35735 = arguments.length;
switch (G__35735) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__35736,msg,handlers,timeout_after_ms){
var map__35741 = p__35736;
var map__35741__$1 = cljs.core.__destructure_map(map__35741);
var runtime = map__35741__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35741__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35874 = arguments.length;
var i__5770__auto___35875 = (0);
while(true){
if((i__5770__auto___35875 < len__5769__auto___35874)){
args__5775__auto__.push((arguments[i__5770__auto___35875]));

var G__35876 = (i__5770__auto___35875 + (1));
i__5770__auto___35875 = G__35876;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__35750,ev,args){
var map__35751 = p__35750;
var map__35751__$1 = cljs.core.__destructure_map(map__35751);
var runtime = map__35751__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35751__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__35752 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__35755 = null;
var count__35756 = (0);
var i__35757 = (0);
while(true){
if((i__35757 < count__35756)){
var ext = chunk__35755.cljs$core$IIndexed$_nth$arity$2(null,i__35757);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__35899 = seq__35752;
var G__35900 = chunk__35755;
var G__35901 = count__35756;
var G__35902 = (i__35757 + (1));
seq__35752 = G__35899;
chunk__35755 = G__35900;
count__35756 = G__35901;
i__35757 = G__35902;
continue;
} else {
var G__35905 = seq__35752;
var G__35906 = chunk__35755;
var G__35907 = count__35756;
var G__35908 = (i__35757 + (1));
seq__35752 = G__35905;
chunk__35755 = G__35906;
count__35756 = G__35907;
i__35757 = G__35908;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35752);
if(temp__5804__auto__){
var seq__35752__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35752__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35752__$1);
var G__35912 = cljs.core.chunk_rest(seq__35752__$1);
var G__35913 = c__5568__auto__;
var G__35914 = cljs.core.count(c__5568__auto__);
var G__35915 = (0);
seq__35752 = G__35912;
chunk__35755 = G__35913;
count__35756 = G__35914;
i__35757 = G__35915;
continue;
} else {
var ext = cljs.core.first(seq__35752__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__35916 = cljs.core.next(seq__35752__$1);
var G__35917 = null;
var G__35918 = (0);
var G__35919 = (0);
seq__35752 = G__35916;
chunk__35755 = G__35917;
count__35756 = G__35918;
i__35757 = G__35919;
continue;
} else {
var G__35920 = cljs.core.next(seq__35752__$1);
var G__35921 = null;
var G__35922 = (0);
var G__35923 = (0);
seq__35752 = G__35920;
chunk__35755 = G__35921;
count__35756 = G__35922;
i__35757 = G__35923;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq35746){
var G__35747 = cljs.core.first(seq35746);
var seq35746__$1 = cljs.core.next(seq35746);
var G__35748 = cljs.core.first(seq35746__$1);
var seq35746__$2 = cljs.core.next(seq35746__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35747,G__35748,seq35746__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__35784,p__35785){
var map__35787 = p__35784;
var map__35787__$1 = cljs.core.__destructure_map(map__35787);
var runtime = map__35787__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35787__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__35791 = p__35785;
var map__35791__$1 = cljs.core.__destructure_map(map__35791);
var msg = map__35791__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35791__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__35792 = cljs.core.deref(state_ref);
var map__35792__$1 = cljs.core.__destructure_map(map__35792);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35792__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35792__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__35793){
var map__35794 = p__35793;
var map__35794__$1 = cljs.core.__destructure_map(map__35794);
var runtime = map__35794__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35794__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__35796,msg){
var map__35797 = p__35796;
var map__35797__$1 = cljs.core.__destructure_map(map__35797);
var runtime = map__35797__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35797__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__35800,key,p__35801){
var map__35802 = p__35800;
var map__35802__$1 = cljs.core.__destructure_map(map__35802);
var state = map__35802__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35802__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__35803 = p__35801;
var map__35803__$1 = cljs.core.__destructure_map(map__35803);
var spec = map__35803__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35803__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__35804,key,spec){
var map__35805 = p__35804;
var map__35805__$1 = cljs.core.__destructure_map(map__35805);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35805__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__35806_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__35806_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__35807_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__35807_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__35808_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__35808_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__35809_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__35809_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__35810_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__35810_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__35815,key){
var map__35816 = p__35815;
var map__35816__$1 = cljs.core.__destructure_map(map__35816);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35816__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__35819,msg){
var map__35820 = p__35819;
var map__35820__$1 = cljs.core.__destructure_map(map__35820);
var runtime = map__35820__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35820__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__35821,p__35822){
var map__35823 = p__35821;
var map__35823__$1 = cljs.core.__destructure_map(map__35823);
var runtime = map__35823__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35823__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__35824 = p__35822;
var map__35824__$1 = cljs.core.__destructure_map(map__35824);
var msg = map__35824__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35824__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35824__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__35829 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__35831 = null;
var count__35832 = (0);
var i__35833 = (0);
while(true){
if((i__35833 < count__35832)){
var map__35851 = chunk__35831.cljs$core$IIndexed$_nth$arity$2(null,i__35833);
var map__35851__$1 = cljs.core.__destructure_map(map__35851);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35851__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__36059 = seq__35829;
var G__36060 = chunk__35831;
var G__36061 = count__35832;
var G__36062 = (i__35833 + (1));
seq__35829 = G__36059;
chunk__35831 = G__36060;
count__35832 = G__36061;
i__35833 = G__36062;
continue;
} else {
var G__36065 = seq__35829;
var G__36066 = chunk__35831;
var G__36067 = count__35832;
var G__36068 = (i__35833 + (1));
seq__35829 = G__36065;
chunk__35831 = G__36066;
count__35832 = G__36067;
i__35833 = G__36068;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35829);
if(temp__5804__auto__){
var seq__35829__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35829__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35829__$1);
var G__36075 = cljs.core.chunk_rest(seq__35829__$1);
var G__36076 = c__5568__auto__;
var G__36077 = cljs.core.count(c__5568__auto__);
var G__36078 = (0);
seq__35829 = G__36075;
chunk__35831 = G__36076;
count__35832 = G__36077;
i__35833 = G__36078;
continue;
} else {
var map__35856 = cljs.core.first(seq__35829__$1);
var map__35856__$1 = cljs.core.__destructure_map(map__35856);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35856__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__36153 = cljs.core.next(seq__35829__$1);
var G__36154 = null;
var G__36155 = (0);
var G__36156 = (0);
seq__35829 = G__36153;
chunk__35831 = G__36154;
count__35832 = G__36155;
i__35833 = G__36156;
continue;
} else {
var G__36158 = cljs.core.next(seq__35829__$1);
var G__36159 = null;
var G__36160 = (0);
var G__36161 = (0);
seq__35829 = G__36158;
chunk__35831 = G__36159;
count__35832 = G__36160;
i__35833 = G__36161;
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

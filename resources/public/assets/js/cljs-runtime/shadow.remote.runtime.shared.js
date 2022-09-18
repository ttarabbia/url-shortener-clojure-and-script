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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__31809,res){
var map__31811 = p__31809;
var map__31811__$1 = cljs.core.__destructure_map(map__31811);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31811__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31811__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__31820 = res;
var G__31820__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31820,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__31820);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31820__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__31820__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__31852 = arguments.length;
switch (G__31852) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__31871,msg,handlers,timeout_after_ms){
var map__31872 = p__31871;
var map__31872__$1 = cljs.core.__destructure_map(map__31872);
var runtime = map__31872__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31872__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32157 = arguments.length;
var i__5770__auto___32158 = (0);
while(true){
if((i__5770__auto___32158 < len__5769__auto___32157)){
args__5775__auto__.push((arguments[i__5770__auto___32158]));

var G__32162 = (i__5770__auto___32158 + (1));
i__5770__auto___32158 = G__32162;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__31884,ev,args){
var map__31885 = p__31884;
var map__31885__$1 = cljs.core.__destructure_map(map__31885);
var runtime = map__31885__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31885__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__31886 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31890 = null;
var count__31891 = (0);
var i__31892 = (0);
while(true){
if((i__31892 < count__31891)){
var ext = chunk__31890.cljs$core$IIndexed$_nth$arity$2(null,i__31892);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__32172 = seq__31886;
var G__32173 = chunk__31890;
var G__32174 = count__31891;
var G__32175 = (i__31892 + (1));
seq__31886 = G__32172;
chunk__31890 = G__32173;
count__31891 = G__32174;
i__31892 = G__32175;
continue;
} else {
var G__32180 = seq__31886;
var G__32182 = chunk__31890;
var G__32183 = count__31891;
var G__32184 = (i__31892 + (1));
seq__31886 = G__32180;
chunk__31890 = G__32182;
count__31891 = G__32183;
i__31892 = G__32184;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31886);
if(temp__5804__auto__){
var seq__31886__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31886__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__31886__$1);
var G__32185 = cljs.core.chunk_rest(seq__31886__$1);
var G__32186 = c__5568__auto__;
var G__32187 = cljs.core.count(c__5568__auto__);
var G__32188 = (0);
seq__31886 = G__32185;
chunk__31890 = G__32186;
count__31891 = G__32187;
i__31892 = G__32188;
continue;
} else {
var ext = cljs.core.first(seq__31886__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__32190 = cljs.core.next(seq__31886__$1);
var G__32191 = null;
var G__32192 = (0);
var G__32193 = (0);
seq__31886 = G__32190;
chunk__31890 = G__32191;
count__31891 = G__32192;
i__31892 = G__32193;
continue;
} else {
var G__32194 = cljs.core.next(seq__31886__$1);
var G__32195 = null;
var G__32196 = (0);
var G__32197 = (0);
seq__31886 = G__32194;
chunk__31890 = G__32195;
count__31891 = G__32196;
i__31892 = G__32197;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq31877){
var G__31878 = cljs.core.first(seq31877);
var seq31877__$1 = cljs.core.next(seq31877);
var G__31879 = cljs.core.first(seq31877__$1);
var seq31877__$2 = cljs.core.next(seq31877__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31878,G__31879,seq31877__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__31933,p__31934){
var map__31936 = p__31933;
var map__31936__$1 = cljs.core.__destructure_map(map__31936);
var runtime = map__31936__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31936__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31938 = p__31934;
var map__31938__$1 = cljs.core.__destructure_map(map__31938);
var msg = map__31938__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31938__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__31943 = cljs.core.deref(state_ref);
var map__31943__$1 = cljs.core.__destructure_map(map__31943);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31943__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31943__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__31947){
var map__31949 = p__31947;
var map__31949__$1 = cljs.core.__destructure_map(map__31949);
var runtime = map__31949__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31949__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__31958,msg){
var map__31960 = p__31958;
var map__31960__$1 = cljs.core.__destructure_map(map__31960);
var runtime = map__31960__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31960__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__31971,key,p__31972){
var map__31973 = p__31971;
var map__31973__$1 = cljs.core.__destructure_map(map__31973);
var state = map__31973__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31973__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__31976 = p__31972;
var map__31976__$1 = cljs.core.__destructure_map(map__31976);
var spec = map__31976__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31976__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__31992,key,spec){
var map__31993 = p__31992;
var map__31993__$1 = cljs.core.__destructure_map(map__31993);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31993__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__31995_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__31995_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__31997_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__31997_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__31998_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__31998_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__31999_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__31999_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__32000_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__32000_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__32014,key){
var map__32015 = p__32014;
var map__32015__$1 = cljs.core.__destructure_map(map__32015);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32015__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__32026,msg){
var map__32028 = p__32026;
var map__32028__$1 = cljs.core.__destructure_map(map__32028);
var runtime = map__32028__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32028__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__32038,p__32039){
var map__32042 = p__32038;
var map__32042__$1 = cljs.core.__destructure_map(map__32042);
var runtime = map__32042__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32042__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__32043 = p__32039;
var map__32043__$1 = cljs.core.__destructure_map(map__32043);
var msg = map__32043__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32043__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32043__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__32066 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__32068 = null;
var count__32069 = (0);
var i__32070 = (0);
while(true){
if((i__32070 < count__32069)){
var map__32096 = chunk__32068.cljs$core$IIndexed$_nth$arity$2(null,i__32070);
var map__32096__$1 = cljs.core.__destructure_map(map__32096);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32096__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__32263 = seq__32066;
var G__32264 = chunk__32068;
var G__32265 = count__32069;
var G__32266 = (i__32070 + (1));
seq__32066 = G__32263;
chunk__32068 = G__32264;
count__32069 = G__32265;
i__32070 = G__32266;
continue;
} else {
var G__32267 = seq__32066;
var G__32268 = chunk__32068;
var G__32269 = count__32069;
var G__32270 = (i__32070 + (1));
seq__32066 = G__32267;
chunk__32068 = G__32268;
count__32069 = G__32269;
i__32070 = G__32270;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32066);
if(temp__5804__auto__){
var seq__32066__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32066__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32066__$1);
var G__32272 = cljs.core.chunk_rest(seq__32066__$1);
var G__32273 = c__5568__auto__;
var G__32274 = cljs.core.count(c__5568__auto__);
var G__32275 = (0);
seq__32066 = G__32272;
chunk__32068 = G__32273;
count__32069 = G__32274;
i__32070 = G__32275;
continue;
} else {
var map__32107 = cljs.core.first(seq__32066__$1);
var map__32107__$1 = cljs.core.__destructure_map(map__32107);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32107__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__32276 = cljs.core.next(seq__32066__$1);
var G__32277 = null;
var G__32278 = (0);
var G__32280 = (0);
seq__32066 = G__32276;
chunk__32068 = G__32277;
count__32069 = G__32278;
i__32070 = G__32280;
continue;
} else {
var G__32283 = cljs.core.next(seq__32066__$1);
var G__32284 = null;
var G__32285 = (0);
var G__32286 = (0);
seq__32066 = G__32283;
chunk__32068 = G__32284;
count__32069 = G__32285;
i__32070 = G__32286;
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

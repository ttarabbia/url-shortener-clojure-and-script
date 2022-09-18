goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__40025,p__40026){
var map__40027 = p__40025;
var map__40027__$1 = cljs.core.__destructure_map(map__40027);
var svc = map__40027__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40027__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40027__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40027__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__40028 = p__40026;
var map__40028__$1 = cljs.core.__destructure_map(map__40028);
var msg = map__40028__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40028__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40028__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40028__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40028__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__40033,p__40034){
var map__40035 = p__40033;
var map__40035__$1 = cljs.core.__destructure_map(map__40035);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40035__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__40036 = p__40034;
var map__40036__$1 = cljs.core.__destructure_map(map__40036);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40036__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__40037,p__40038){
var map__40039 = p__40037;
var map__40039__$1 = cljs.core.__destructure_map(map__40039);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40039__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40039__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__40040 = p__40038;
var map__40040__$1 = cljs.core.__destructure_map(map__40040);
var msg = map__40040__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40040__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__40042,tid){
var map__40043 = p__40042;
var map__40043__$1 = cljs.core.__destructure_map(map__40043);
var svc = map__40043__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40043__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__40050 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__40051 = null;
var count__40052 = (0);
var i__40053 = (0);
while(true){
if((i__40053 < count__40052)){
var vec__40061 = chunk__40051.cljs$core$IIndexed$_nth$arity$2(null,i__40053);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40061,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40061,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__40090 = seq__40050;
var G__40091 = chunk__40051;
var G__40092 = count__40052;
var G__40093 = (i__40053 + (1));
seq__40050 = G__40090;
chunk__40051 = G__40091;
count__40052 = G__40092;
i__40053 = G__40093;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40050);
if(temp__5804__auto__){
var seq__40050__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40050__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40050__$1);
var G__40094 = cljs.core.chunk_rest(seq__40050__$1);
var G__40095 = c__5568__auto__;
var G__40096 = cljs.core.count(c__5568__auto__);
var G__40097 = (0);
seq__40050 = G__40094;
chunk__40051 = G__40095;
count__40052 = G__40096;
i__40053 = G__40097;
continue;
} else {
var vec__40064 = cljs.core.first(seq__40050__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40064,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40064,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__40098 = cljs.core.next(seq__40050__$1);
var G__40099 = null;
var G__40100 = (0);
var G__40101 = (0);
seq__40050 = G__40098;
chunk__40051 = G__40099;
count__40052 = G__40100;
i__40053 = G__40101;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__40045_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__40045_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__40046_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__40046_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__40047_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__40047_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__40048_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__40048_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__40087){
var map__40089 = p__40087;
var map__40089__$1 = cljs.core.__destructure_map(map__40089);
var svc = map__40089__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40089__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40089__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map

goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__36108,p__36109){
var map__36110 = p__36108;
var map__36110__$1 = cljs.core.__destructure_map(map__36110);
var svc = map__36110__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36110__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36110__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36110__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36111 = p__36109;
var map__36111__$1 = cljs.core.__destructure_map(map__36111);
var msg = map__36111__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36111__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36111__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36111__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36111__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__36123,p__36124){
var map__36126 = p__36123;
var map__36126__$1 = cljs.core.__destructure_map(map__36126);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36126__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__36127 = p__36124;
var map__36127__$1 = cljs.core.__destructure_map(map__36127);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36127__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__36131,p__36132){
var map__36133 = p__36131;
var map__36133__$1 = cljs.core.__destructure_map(map__36133);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36133__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36133__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36134 = p__36132;
var map__36134__$1 = cljs.core.__destructure_map(map__36134);
var msg = map__36134__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36134__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__36139,tid){
var map__36140 = p__36139;
var map__36140__$1 = cljs.core.__destructure_map(map__36140);
var svc = map__36140__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36140__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__36154 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__36155 = null;
var count__36156 = (0);
var i__36157 = (0);
while(true){
if((i__36157 < count__36156)){
var vec__36170 = chunk__36155.cljs$core$IIndexed$_nth$arity$2(null,i__36157);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36170,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36170,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36182 = seq__36154;
var G__36183 = chunk__36155;
var G__36184 = count__36156;
var G__36185 = (i__36157 + (1));
seq__36154 = G__36182;
chunk__36155 = G__36183;
count__36156 = G__36184;
i__36157 = G__36185;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36154);
if(temp__5804__auto__){
var seq__36154__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36154__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36154__$1);
var G__36186 = cljs.core.chunk_rest(seq__36154__$1);
var G__36187 = c__5568__auto__;
var G__36188 = cljs.core.count(c__5568__auto__);
var G__36189 = (0);
seq__36154 = G__36186;
chunk__36155 = G__36187;
count__36156 = G__36188;
i__36157 = G__36189;
continue;
} else {
var vec__36174 = cljs.core.first(seq__36154__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36174,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36174,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36190 = cljs.core.next(seq__36154__$1);
var G__36191 = null;
var G__36192 = (0);
var G__36193 = (0);
seq__36154 = G__36190;
chunk__36155 = G__36191;
count__36156 = G__36192;
i__36157 = G__36193;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__36146_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__36146_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__36147_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__36147_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__36148_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__36148_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__36149_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__36149_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__36177){
var map__36178 = p__36177;
var map__36178__$1 = cljs.core.__destructure_map(map__36178);
var svc = map__36178__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36178__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36178__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map

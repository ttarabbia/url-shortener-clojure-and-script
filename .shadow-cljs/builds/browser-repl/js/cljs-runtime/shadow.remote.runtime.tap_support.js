goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__36097,p__36098){
var map__36099 = p__36097;
var map__36099__$1 = cljs.core.__destructure_map(map__36099);
var svc = map__36099__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36099__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36099__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36099__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36100 = p__36098;
var map__36100__$1 = cljs.core.__destructure_map(map__36100);
var msg = map__36100__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36100__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36100__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36100__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36100__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__36105,p__36106){
var map__36107 = p__36105;
var map__36107__$1 = cljs.core.__destructure_map(map__36107);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36107__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__36108 = p__36106;
var map__36108__$1 = cljs.core.__destructure_map(map__36108);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36108__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__36117,p__36118){
var map__36119 = p__36117;
var map__36119__$1 = cljs.core.__destructure_map(map__36119);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36119__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36119__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36120 = p__36118;
var map__36120__$1 = cljs.core.__destructure_map(map__36120);
var msg = map__36120__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36120__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__36123,tid){
var map__36125 = p__36123;
var map__36125__$1 = cljs.core.__destructure_map(map__36125);
var svc = map__36125__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36125__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__36130 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__36131 = null;
var count__36132 = (0);
var i__36133 = (0);
while(true){
if((i__36133 < count__36132)){
var vec__36150 = chunk__36131.cljs$core$IIndexed$_nth$arity$2(null,i__36133);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36150,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36150,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36172 = seq__36130;
var G__36173 = chunk__36131;
var G__36174 = count__36132;
var G__36175 = (i__36133 + (1));
seq__36130 = G__36172;
chunk__36131 = G__36173;
count__36132 = G__36174;
i__36133 = G__36175;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36130);
if(temp__5804__auto__){
var seq__36130__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36130__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36130__$1);
var G__36176 = cljs.core.chunk_rest(seq__36130__$1);
var G__36177 = c__5568__auto__;
var G__36178 = cljs.core.count(c__5568__auto__);
var G__36179 = (0);
seq__36130 = G__36176;
chunk__36131 = G__36177;
count__36132 = G__36178;
i__36133 = G__36179;
continue;
} else {
var vec__36153 = cljs.core.first(seq__36130__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36153,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36153,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36184 = cljs.core.next(seq__36130__$1);
var G__36185 = null;
var G__36186 = (0);
var G__36187 = (0);
seq__36130 = G__36184;
chunk__36131 = G__36185;
count__36132 = G__36186;
i__36133 = G__36187;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__36126_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__36126_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__36127_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__36127_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__36128_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__36128_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__36129_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__36129_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__36166){
var map__36167 = p__36166;
var map__36167__$1 = cljs.core.__destructure_map(map__36167);
var svc = map__36167__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36167__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36167__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map

goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41212 = arguments.length;
var i__5770__auto___41213 = (0);
while(true){
if((i__5770__auto___41213 < len__5769__auto___41212)){
args__5775__auto__.push((arguments[i__5770__auto___41213]));

var G__41214 = (i__5770__auto___41213 + (1));
i__5770__auto___41213 = G__41214;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq40650){
var G__40651 = cljs.core.first(seq40650);
var seq40650__$1 = cljs.core.next(seq40650);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40651,seq40650__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__40663 = cljs.core.seq(sources);
var chunk__40664 = null;
var count__40665 = (0);
var i__40666 = (0);
while(true){
if((i__40666 < count__40665)){
var map__40709 = chunk__40664.cljs$core$IIndexed$_nth$arity$2(null,i__40666);
var map__40709__$1 = cljs.core.__destructure_map(map__40709);
var src = map__40709__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40709__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40709__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40709__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40709__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e40710){var e_41224 = e40710;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_41224);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_41224.message)].join('')));
}

var G__41225 = seq__40663;
var G__41226 = chunk__40664;
var G__41227 = count__40665;
var G__41228 = (i__40666 + (1));
seq__40663 = G__41225;
chunk__40664 = G__41226;
count__40665 = G__41227;
i__40666 = G__41228;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40663);
if(temp__5804__auto__){
var seq__40663__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40663__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40663__$1);
var G__41230 = cljs.core.chunk_rest(seq__40663__$1);
var G__41231 = c__5568__auto__;
var G__41232 = cljs.core.count(c__5568__auto__);
var G__41233 = (0);
seq__40663 = G__41230;
chunk__40664 = G__41231;
count__40665 = G__41232;
i__40666 = G__41233;
continue;
} else {
var map__40716 = cljs.core.first(seq__40663__$1);
var map__40716__$1 = cljs.core.__destructure_map(map__40716);
var src = map__40716__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40716__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40716__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40716__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40716__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e40717){var e_41238 = e40717;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_41238);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_41238.message)].join('')));
}

var G__41239 = cljs.core.next(seq__40663__$1);
var G__41240 = null;
var G__41241 = (0);
var G__41242 = (0);
seq__40663 = G__41239;
chunk__40664 = G__41240;
count__40665 = G__41241;
i__40666 = G__41242;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__40743 = cljs.core.seq(js_requires);
var chunk__40744 = null;
var count__40745 = (0);
var i__40746 = (0);
while(true){
if((i__40746 < count__40745)){
var js_ns = chunk__40744.cljs$core$IIndexed$_nth$arity$2(null,i__40746);
var require_str_41248 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_41248);


var G__41249 = seq__40743;
var G__41250 = chunk__40744;
var G__41251 = count__40745;
var G__41252 = (i__40746 + (1));
seq__40743 = G__41249;
chunk__40744 = G__41250;
count__40745 = G__41251;
i__40746 = G__41252;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40743);
if(temp__5804__auto__){
var seq__40743__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40743__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40743__$1);
var G__41253 = cljs.core.chunk_rest(seq__40743__$1);
var G__41254 = c__5568__auto__;
var G__41255 = cljs.core.count(c__5568__auto__);
var G__41256 = (0);
seq__40743 = G__41253;
chunk__40744 = G__41254;
count__40745 = G__41255;
i__40746 = G__41256;
continue;
} else {
var js_ns = cljs.core.first(seq__40743__$1);
var require_str_41258 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_41258);


var G__41259 = cljs.core.next(seq__40743__$1);
var G__41260 = null;
var G__41261 = (0);
var G__41262 = (0);
seq__40743 = G__41259;
chunk__40744 = G__41260;
count__40745 = G__41261;
i__40746 = G__41262;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__40794){
var map__40795 = p__40794;
var map__40795__$1 = cljs.core.__destructure_map(map__40795);
var msg = map__40795__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40795__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40795__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40796(s__40797){
return (new cljs.core.LazySeq(null,(function (){
var s__40797__$1 = s__40797;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__40797__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__40802 = cljs.core.first(xs__6360__auto__);
var map__40802__$1 = cljs.core.__destructure_map(map__40802);
var src = map__40802__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40802__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40802__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__40797__$1,map__40802,map__40802__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__40795,map__40795__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40796_$_iter__40798(s__40799){
return (new cljs.core.LazySeq(null,((function (s__40797__$1,map__40802,map__40802__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__40795,map__40795__$1,msg,info,reload_info){
return (function (){
var s__40799__$1 = s__40799;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__40799__$1);
if(temp__5804__auto____$1){
var s__40799__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40799__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__40799__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__40801 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__40800 = (0);
while(true){
if((i__40800 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__40800);
cljs.core.chunk_append(b__40801,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__41270 = (i__40800 + (1));
i__40800 = G__41270;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40801),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40796_$_iter__40798(cljs.core.chunk_rest(s__40799__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40801),null);
}
} else {
var warning = cljs.core.first(s__40799__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40796_$_iter__40798(cljs.core.rest(s__40799__$2)));
}
} else {
return null;
}
break;
}
});})(s__40797__$1,map__40802,map__40802__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__40795,map__40795__$1,msg,info,reload_info))
,null,null));
});})(s__40797__$1,map__40802,map__40802__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__40795,map__40795__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40796(cljs.core.rest(s__40797__$1)));
} else {
var G__41273 = cljs.core.rest(s__40797__$1);
s__40797__$1 = G__41273;
continue;
}
} else {
var G__41275 = cljs.core.rest(s__40797__$1);
s__40797__$1 = G__41275;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__40817_41276 = cljs.core.seq(warnings);
var chunk__40818_41277 = null;
var count__40819_41278 = (0);
var i__40820_41279 = (0);
while(true){
if((i__40820_41279 < count__40819_41278)){
var map__40827_41280 = chunk__40818_41277.cljs$core$IIndexed$_nth$arity$2(null,i__40820_41279);
var map__40827_41281__$1 = cljs.core.__destructure_map(map__40827_41280);
var w_41282 = map__40827_41281__$1;
var msg_41283__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40827_41281__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_41284 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40827_41281__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_41285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40827_41281__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_41286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40827_41281__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_41286)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41284),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_41285),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_41283__$1)].join(''));


var G__41291 = seq__40817_41276;
var G__41292 = chunk__40818_41277;
var G__41293 = count__40819_41278;
var G__41294 = (i__40820_41279 + (1));
seq__40817_41276 = G__41291;
chunk__40818_41277 = G__41292;
count__40819_41278 = G__41293;
i__40820_41279 = G__41294;
continue;
} else {
var temp__5804__auto___41295 = cljs.core.seq(seq__40817_41276);
if(temp__5804__auto___41295){
var seq__40817_41296__$1 = temp__5804__auto___41295;
if(cljs.core.chunked_seq_QMARK_(seq__40817_41296__$1)){
var c__5568__auto___41297 = cljs.core.chunk_first(seq__40817_41296__$1);
var G__41298 = cljs.core.chunk_rest(seq__40817_41296__$1);
var G__41299 = c__5568__auto___41297;
var G__41300 = cljs.core.count(c__5568__auto___41297);
var G__41301 = (0);
seq__40817_41276 = G__41298;
chunk__40818_41277 = G__41299;
count__40819_41278 = G__41300;
i__40820_41279 = G__41301;
continue;
} else {
var map__40830_41303 = cljs.core.first(seq__40817_41296__$1);
var map__40830_41304__$1 = cljs.core.__destructure_map(map__40830_41303);
var w_41305 = map__40830_41304__$1;
var msg_41306__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40830_41304__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_41307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40830_41304__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_41308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40830_41304__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_41309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40830_41304__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_41309)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41307),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_41308),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_41306__$1)].join(''));


var G__41312 = cljs.core.next(seq__40817_41296__$1);
var G__41313 = null;
var G__41314 = (0);
var G__41315 = (0);
seq__40817_41276 = G__41312;
chunk__40818_41277 = G__41313;
count__40819_41278 = G__41314;
i__40820_41279 = G__41315;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__40793_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__40793_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__40834){
var map__40835 = p__40834;
var map__40835__$1 = cljs.core.__destructure_map(map__40835);
var msg = map__40835__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40835__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40835__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__40836 = cljs.core.seq(updates);
var chunk__40838 = null;
var count__40839 = (0);
var i__40840 = (0);
while(true){
if((i__40840 < count__40839)){
var path = chunk__40838.cljs$core$IIndexed$_nth$arity$2(null,i__40840);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40980_41324 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40984_41325 = null;
var count__40985_41326 = (0);
var i__40986_41327 = (0);
while(true){
if((i__40986_41327 < count__40985_41326)){
var node_41328 = chunk__40984_41325.cljs$core$IIndexed$_nth$arity$2(null,i__40986_41327);
if(cljs.core.not(node_41328.shadow$old)){
var path_match_41331 = shadow.cljs.devtools.client.browser.match_paths(node_41328.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41331)){
var new_link_41332 = (function (){var G__41026 = node_41328.cloneNode(true);
G__41026.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41331),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41026;
})();
(node_41328.shadow$old = true);

(new_link_41332.onload = ((function (seq__40980_41324,chunk__40984_41325,count__40985_41326,i__40986_41327,seq__40836,chunk__40838,count__40839,i__40840,new_link_41332,path_match_41331,node_41328,path,map__40835,map__40835__$1,msg,updates,reload_info){
return (function (e){
var seq__41027_41335 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41029_41336 = null;
var count__41030_41337 = (0);
var i__41031_41338 = (0);
while(true){
if((i__41031_41338 < count__41030_41337)){
var map__41037_41340 = chunk__41029_41336.cljs$core$IIndexed$_nth$arity$2(null,i__41031_41338);
var map__41037_41341__$1 = cljs.core.__destructure_map(map__41037_41340);
var task_41342 = map__41037_41341__$1;
var fn_str_41343 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41037_41341__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41037_41341__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41345 = goog.getObjectByName(fn_str_41343,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41344)].join(''));

(fn_obj_41345.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41345.cljs$core$IFn$_invoke$arity$2(path,new_link_41332) : fn_obj_41345.call(null,path,new_link_41332));


var G__41346 = seq__41027_41335;
var G__41347 = chunk__41029_41336;
var G__41348 = count__41030_41337;
var G__41349 = (i__41031_41338 + (1));
seq__41027_41335 = G__41346;
chunk__41029_41336 = G__41347;
count__41030_41337 = G__41348;
i__41031_41338 = G__41349;
continue;
} else {
var temp__5804__auto___41350 = cljs.core.seq(seq__41027_41335);
if(temp__5804__auto___41350){
var seq__41027_41351__$1 = temp__5804__auto___41350;
if(cljs.core.chunked_seq_QMARK_(seq__41027_41351__$1)){
var c__5568__auto___41354 = cljs.core.chunk_first(seq__41027_41351__$1);
var G__41355 = cljs.core.chunk_rest(seq__41027_41351__$1);
var G__41356 = c__5568__auto___41354;
var G__41357 = cljs.core.count(c__5568__auto___41354);
var G__41358 = (0);
seq__41027_41335 = G__41355;
chunk__41029_41336 = G__41356;
count__41030_41337 = G__41357;
i__41031_41338 = G__41358;
continue;
} else {
var map__41039_41359 = cljs.core.first(seq__41027_41351__$1);
var map__41039_41360__$1 = cljs.core.__destructure_map(map__41039_41359);
var task_41361 = map__41039_41360__$1;
var fn_str_41362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41039_41360__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41039_41360__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41366 = goog.getObjectByName(fn_str_41362,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41363)].join(''));

(fn_obj_41366.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41366.cljs$core$IFn$_invoke$arity$2(path,new_link_41332) : fn_obj_41366.call(null,path,new_link_41332));


var G__41367 = cljs.core.next(seq__41027_41351__$1);
var G__41368 = null;
var G__41369 = (0);
var G__41370 = (0);
seq__41027_41335 = G__41367;
chunk__41029_41336 = G__41368;
count__41030_41337 = G__41369;
i__41031_41338 = G__41370;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41328);
});})(seq__40980_41324,chunk__40984_41325,count__40985_41326,i__40986_41327,seq__40836,chunk__40838,count__40839,i__40840,new_link_41332,path_match_41331,node_41328,path,map__40835,map__40835__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41331], 0));

goog.dom.insertSiblingAfter(new_link_41332,node_41328);


var G__41372 = seq__40980_41324;
var G__41373 = chunk__40984_41325;
var G__41374 = count__40985_41326;
var G__41375 = (i__40986_41327 + (1));
seq__40980_41324 = G__41372;
chunk__40984_41325 = G__41373;
count__40985_41326 = G__41374;
i__40986_41327 = G__41375;
continue;
} else {
var G__41376 = seq__40980_41324;
var G__41377 = chunk__40984_41325;
var G__41378 = count__40985_41326;
var G__41379 = (i__40986_41327 + (1));
seq__40980_41324 = G__41376;
chunk__40984_41325 = G__41377;
count__40985_41326 = G__41378;
i__40986_41327 = G__41379;
continue;
}
} else {
var G__41380 = seq__40980_41324;
var G__41381 = chunk__40984_41325;
var G__41382 = count__40985_41326;
var G__41383 = (i__40986_41327 + (1));
seq__40980_41324 = G__41380;
chunk__40984_41325 = G__41381;
count__40985_41326 = G__41382;
i__40986_41327 = G__41383;
continue;
}
} else {
var temp__5804__auto___41384 = cljs.core.seq(seq__40980_41324);
if(temp__5804__auto___41384){
var seq__40980_41387__$1 = temp__5804__auto___41384;
if(cljs.core.chunked_seq_QMARK_(seq__40980_41387__$1)){
var c__5568__auto___41388 = cljs.core.chunk_first(seq__40980_41387__$1);
var G__41389 = cljs.core.chunk_rest(seq__40980_41387__$1);
var G__41390 = c__5568__auto___41388;
var G__41391 = cljs.core.count(c__5568__auto___41388);
var G__41392 = (0);
seq__40980_41324 = G__41389;
chunk__40984_41325 = G__41390;
count__40985_41326 = G__41391;
i__40986_41327 = G__41392;
continue;
} else {
var node_41395 = cljs.core.first(seq__40980_41387__$1);
if(cljs.core.not(node_41395.shadow$old)){
var path_match_41396 = shadow.cljs.devtools.client.browser.match_paths(node_41395.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41396)){
var new_link_41397 = (function (){var G__41042 = node_41395.cloneNode(true);
G__41042.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41396),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41042;
})();
(node_41395.shadow$old = true);

(new_link_41397.onload = ((function (seq__40980_41324,chunk__40984_41325,count__40985_41326,i__40986_41327,seq__40836,chunk__40838,count__40839,i__40840,new_link_41397,path_match_41396,node_41395,seq__40980_41387__$1,temp__5804__auto___41384,path,map__40835,map__40835__$1,msg,updates,reload_info){
return (function (e){
var seq__41051_41399 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41053_41400 = null;
var count__41054_41401 = (0);
var i__41055_41402 = (0);
while(true){
if((i__41055_41402 < count__41054_41401)){
var map__41060_41403 = chunk__41053_41400.cljs$core$IIndexed$_nth$arity$2(null,i__41055_41402);
var map__41060_41404__$1 = cljs.core.__destructure_map(map__41060_41403);
var task_41405 = map__41060_41404__$1;
var fn_str_41406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41060_41404__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41407 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41060_41404__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41410 = goog.getObjectByName(fn_str_41406,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41407)].join(''));

(fn_obj_41410.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41410.cljs$core$IFn$_invoke$arity$2(path,new_link_41397) : fn_obj_41410.call(null,path,new_link_41397));


var G__41413 = seq__41051_41399;
var G__41414 = chunk__41053_41400;
var G__41415 = count__41054_41401;
var G__41416 = (i__41055_41402 + (1));
seq__41051_41399 = G__41413;
chunk__41053_41400 = G__41414;
count__41054_41401 = G__41415;
i__41055_41402 = G__41416;
continue;
} else {
var temp__5804__auto___41417__$1 = cljs.core.seq(seq__41051_41399);
if(temp__5804__auto___41417__$1){
var seq__41051_41418__$1 = temp__5804__auto___41417__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41051_41418__$1)){
var c__5568__auto___41419 = cljs.core.chunk_first(seq__41051_41418__$1);
var G__41420 = cljs.core.chunk_rest(seq__41051_41418__$1);
var G__41421 = c__5568__auto___41419;
var G__41422 = cljs.core.count(c__5568__auto___41419);
var G__41423 = (0);
seq__41051_41399 = G__41420;
chunk__41053_41400 = G__41421;
count__41054_41401 = G__41422;
i__41055_41402 = G__41423;
continue;
} else {
var map__41065_41424 = cljs.core.first(seq__41051_41418__$1);
var map__41065_41425__$1 = cljs.core.__destructure_map(map__41065_41424);
var task_41426 = map__41065_41425__$1;
var fn_str_41427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41065_41425__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41065_41425__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41430 = goog.getObjectByName(fn_str_41427,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41428)].join(''));

(fn_obj_41430.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41430.cljs$core$IFn$_invoke$arity$2(path,new_link_41397) : fn_obj_41430.call(null,path,new_link_41397));


var G__41431 = cljs.core.next(seq__41051_41418__$1);
var G__41432 = null;
var G__41433 = (0);
var G__41434 = (0);
seq__41051_41399 = G__41431;
chunk__41053_41400 = G__41432;
count__41054_41401 = G__41433;
i__41055_41402 = G__41434;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41395);
});})(seq__40980_41324,chunk__40984_41325,count__40985_41326,i__40986_41327,seq__40836,chunk__40838,count__40839,i__40840,new_link_41397,path_match_41396,node_41395,seq__40980_41387__$1,temp__5804__auto___41384,path,map__40835,map__40835__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41396], 0));

goog.dom.insertSiblingAfter(new_link_41397,node_41395);


var G__41437 = cljs.core.next(seq__40980_41387__$1);
var G__41438 = null;
var G__41439 = (0);
var G__41440 = (0);
seq__40980_41324 = G__41437;
chunk__40984_41325 = G__41438;
count__40985_41326 = G__41439;
i__40986_41327 = G__41440;
continue;
} else {
var G__41443 = cljs.core.next(seq__40980_41387__$1);
var G__41444 = null;
var G__41445 = (0);
var G__41446 = (0);
seq__40980_41324 = G__41443;
chunk__40984_41325 = G__41444;
count__40985_41326 = G__41445;
i__40986_41327 = G__41446;
continue;
}
} else {
var G__41447 = cljs.core.next(seq__40980_41387__$1);
var G__41448 = null;
var G__41449 = (0);
var G__41450 = (0);
seq__40980_41324 = G__41447;
chunk__40984_41325 = G__41448;
count__40985_41326 = G__41449;
i__40986_41327 = G__41450;
continue;
}
}
} else {
}
}
break;
}


var G__41451 = seq__40836;
var G__41452 = chunk__40838;
var G__41453 = count__40839;
var G__41454 = (i__40840 + (1));
seq__40836 = G__41451;
chunk__40838 = G__41452;
count__40839 = G__41453;
i__40840 = G__41454;
continue;
} else {
var G__41455 = seq__40836;
var G__41456 = chunk__40838;
var G__41457 = count__40839;
var G__41458 = (i__40840 + (1));
seq__40836 = G__41455;
chunk__40838 = G__41456;
count__40839 = G__41457;
i__40840 = G__41458;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40836);
if(temp__5804__auto__){
var seq__40836__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40836__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40836__$1);
var G__41460 = cljs.core.chunk_rest(seq__40836__$1);
var G__41461 = c__5568__auto__;
var G__41462 = cljs.core.count(c__5568__auto__);
var G__41463 = (0);
seq__40836 = G__41460;
chunk__40838 = G__41461;
count__40839 = G__41462;
i__40840 = G__41463;
continue;
} else {
var path = cljs.core.first(seq__40836__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__41067_41464 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__41071_41465 = null;
var count__41072_41466 = (0);
var i__41073_41467 = (0);
while(true){
if((i__41073_41467 < count__41072_41466)){
var node_41470 = chunk__41071_41465.cljs$core$IIndexed$_nth$arity$2(null,i__41073_41467);
if(cljs.core.not(node_41470.shadow$old)){
var path_match_41471 = shadow.cljs.devtools.client.browser.match_paths(node_41470.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41471)){
var new_link_41472 = (function (){var G__41119 = node_41470.cloneNode(true);
G__41119.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41471),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41119;
})();
(node_41470.shadow$old = true);

(new_link_41472.onload = ((function (seq__41067_41464,chunk__41071_41465,count__41072_41466,i__41073_41467,seq__40836,chunk__40838,count__40839,i__40840,new_link_41472,path_match_41471,node_41470,path,seq__40836__$1,temp__5804__auto__,map__40835,map__40835__$1,msg,updates,reload_info){
return (function (e){
var seq__41120_41475 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41122_41476 = null;
var count__41123_41477 = (0);
var i__41124_41478 = (0);
while(true){
if((i__41124_41478 < count__41123_41477)){
var map__41129_41480 = chunk__41122_41476.cljs$core$IIndexed$_nth$arity$2(null,i__41124_41478);
var map__41129_41481__$1 = cljs.core.__destructure_map(map__41129_41480);
var task_41482 = map__41129_41481__$1;
var fn_str_41483 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41129_41481__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41129_41481__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41485 = goog.getObjectByName(fn_str_41483,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41484)].join(''));

(fn_obj_41485.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41485.cljs$core$IFn$_invoke$arity$2(path,new_link_41472) : fn_obj_41485.call(null,path,new_link_41472));


var G__41488 = seq__41120_41475;
var G__41489 = chunk__41122_41476;
var G__41490 = count__41123_41477;
var G__41491 = (i__41124_41478 + (1));
seq__41120_41475 = G__41488;
chunk__41122_41476 = G__41489;
count__41123_41477 = G__41490;
i__41124_41478 = G__41491;
continue;
} else {
var temp__5804__auto___41492__$1 = cljs.core.seq(seq__41120_41475);
if(temp__5804__auto___41492__$1){
var seq__41120_41495__$1 = temp__5804__auto___41492__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41120_41495__$1)){
var c__5568__auto___41496 = cljs.core.chunk_first(seq__41120_41495__$1);
var G__41497 = cljs.core.chunk_rest(seq__41120_41495__$1);
var G__41498 = c__5568__auto___41496;
var G__41499 = cljs.core.count(c__5568__auto___41496);
var G__41500 = (0);
seq__41120_41475 = G__41497;
chunk__41122_41476 = G__41498;
count__41123_41477 = G__41499;
i__41124_41478 = G__41500;
continue;
} else {
var map__41132_41501 = cljs.core.first(seq__41120_41495__$1);
var map__41132_41502__$1 = cljs.core.__destructure_map(map__41132_41501);
var task_41503 = map__41132_41502__$1;
var fn_str_41504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41132_41502__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41132_41502__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41507 = goog.getObjectByName(fn_str_41504,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41505)].join(''));

(fn_obj_41507.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41507.cljs$core$IFn$_invoke$arity$2(path,new_link_41472) : fn_obj_41507.call(null,path,new_link_41472));


var G__41510 = cljs.core.next(seq__41120_41495__$1);
var G__41511 = null;
var G__41512 = (0);
var G__41513 = (0);
seq__41120_41475 = G__41510;
chunk__41122_41476 = G__41511;
count__41123_41477 = G__41512;
i__41124_41478 = G__41513;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41470);
});})(seq__41067_41464,chunk__41071_41465,count__41072_41466,i__41073_41467,seq__40836,chunk__40838,count__40839,i__40840,new_link_41472,path_match_41471,node_41470,path,seq__40836__$1,temp__5804__auto__,map__40835,map__40835__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41471], 0));

goog.dom.insertSiblingAfter(new_link_41472,node_41470);


var G__41516 = seq__41067_41464;
var G__41517 = chunk__41071_41465;
var G__41518 = count__41072_41466;
var G__41519 = (i__41073_41467 + (1));
seq__41067_41464 = G__41516;
chunk__41071_41465 = G__41517;
count__41072_41466 = G__41518;
i__41073_41467 = G__41519;
continue;
} else {
var G__41520 = seq__41067_41464;
var G__41521 = chunk__41071_41465;
var G__41522 = count__41072_41466;
var G__41523 = (i__41073_41467 + (1));
seq__41067_41464 = G__41520;
chunk__41071_41465 = G__41521;
count__41072_41466 = G__41522;
i__41073_41467 = G__41523;
continue;
}
} else {
var G__41524 = seq__41067_41464;
var G__41525 = chunk__41071_41465;
var G__41526 = count__41072_41466;
var G__41527 = (i__41073_41467 + (1));
seq__41067_41464 = G__41524;
chunk__41071_41465 = G__41525;
count__41072_41466 = G__41526;
i__41073_41467 = G__41527;
continue;
}
} else {
var temp__5804__auto___41528__$1 = cljs.core.seq(seq__41067_41464);
if(temp__5804__auto___41528__$1){
var seq__41067_41529__$1 = temp__5804__auto___41528__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41067_41529__$1)){
var c__5568__auto___41530 = cljs.core.chunk_first(seq__41067_41529__$1);
var G__41531 = cljs.core.chunk_rest(seq__41067_41529__$1);
var G__41532 = c__5568__auto___41530;
var G__41533 = cljs.core.count(c__5568__auto___41530);
var G__41534 = (0);
seq__41067_41464 = G__41531;
chunk__41071_41465 = G__41532;
count__41072_41466 = G__41533;
i__41073_41467 = G__41534;
continue;
} else {
var node_41536 = cljs.core.first(seq__41067_41529__$1);
if(cljs.core.not(node_41536.shadow$old)){
var path_match_41537 = shadow.cljs.devtools.client.browser.match_paths(node_41536.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41537)){
var new_link_41538 = (function (){var G__41136 = node_41536.cloneNode(true);
G__41136.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41537),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41136;
})();
(node_41536.shadow$old = true);

(new_link_41538.onload = ((function (seq__41067_41464,chunk__41071_41465,count__41072_41466,i__41073_41467,seq__40836,chunk__40838,count__40839,i__40840,new_link_41538,path_match_41537,node_41536,seq__41067_41529__$1,temp__5804__auto___41528__$1,path,seq__40836__$1,temp__5804__auto__,map__40835,map__40835__$1,msg,updates,reload_info){
return (function (e){
var seq__41137_41541 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41139_41542 = null;
var count__41140_41543 = (0);
var i__41141_41544 = (0);
while(true){
if((i__41141_41544 < count__41140_41543)){
var map__41150_41547 = chunk__41139_41542.cljs$core$IIndexed$_nth$arity$2(null,i__41141_41544);
var map__41150_41548__$1 = cljs.core.__destructure_map(map__41150_41547);
var task_41549 = map__41150_41548__$1;
var fn_str_41550 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41150_41548__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41551 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41150_41548__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41552 = goog.getObjectByName(fn_str_41550,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41551)].join(''));

(fn_obj_41552.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41552.cljs$core$IFn$_invoke$arity$2(path,new_link_41538) : fn_obj_41552.call(null,path,new_link_41538));


var G__41553 = seq__41137_41541;
var G__41554 = chunk__41139_41542;
var G__41555 = count__41140_41543;
var G__41556 = (i__41141_41544 + (1));
seq__41137_41541 = G__41553;
chunk__41139_41542 = G__41554;
count__41140_41543 = G__41555;
i__41141_41544 = G__41556;
continue;
} else {
var temp__5804__auto___41558__$2 = cljs.core.seq(seq__41137_41541);
if(temp__5804__auto___41558__$2){
var seq__41137_41559__$1 = temp__5804__auto___41558__$2;
if(cljs.core.chunked_seq_QMARK_(seq__41137_41559__$1)){
var c__5568__auto___41560 = cljs.core.chunk_first(seq__41137_41559__$1);
var G__41561 = cljs.core.chunk_rest(seq__41137_41559__$1);
var G__41562 = c__5568__auto___41560;
var G__41563 = cljs.core.count(c__5568__auto___41560);
var G__41564 = (0);
seq__41137_41541 = G__41561;
chunk__41139_41542 = G__41562;
count__41140_41543 = G__41563;
i__41141_41544 = G__41564;
continue;
} else {
var map__41155_41565 = cljs.core.first(seq__41137_41559__$1);
var map__41155_41566__$1 = cljs.core.__destructure_map(map__41155_41565);
var task_41567 = map__41155_41566__$1;
var fn_str_41568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41155_41566__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41155_41566__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41572 = goog.getObjectByName(fn_str_41568,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41569)].join(''));

(fn_obj_41572.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41572.cljs$core$IFn$_invoke$arity$2(path,new_link_41538) : fn_obj_41572.call(null,path,new_link_41538));


var G__41575 = cljs.core.next(seq__41137_41559__$1);
var G__41576 = null;
var G__41577 = (0);
var G__41578 = (0);
seq__41137_41541 = G__41575;
chunk__41139_41542 = G__41576;
count__41140_41543 = G__41577;
i__41141_41544 = G__41578;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41536);
});})(seq__41067_41464,chunk__41071_41465,count__41072_41466,i__41073_41467,seq__40836,chunk__40838,count__40839,i__40840,new_link_41538,path_match_41537,node_41536,seq__41067_41529__$1,temp__5804__auto___41528__$1,path,seq__40836__$1,temp__5804__auto__,map__40835,map__40835__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41537], 0));

goog.dom.insertSiblingAfter(new_link_41538,node_41536);


var G__41579 = cljs.core.next(seq__41067_41529__$1);
var G__41580 = null;
var G__41581 = (0);
var G__41582 = (0);
seq__41067_41464 = G__41579;
chunk__41071_41465 = G__41580;
count__41072_41466 = G__41581;
i__41073_41467 = G__41582;
continue;
} else {
var G__41583 = cljs.core.next(seq__41067_41529__$1);
var G__41584 = null;
var G__41585 = (0);
var G__41586 = (0);
seq__41067_41464 = G__41583;
chunk__41071_41465 = G__41584;
count__41072_41466 = G__41585;
i__41073_41467 = G__41586;
continue;
}
} else {
var G__41587 = cljs.core.next(seq__41067_41529__$1);
var G__41588 = null;
var G__41589 = (0);
var G__41590 = (0);
seq__41067_41464 = G__41587;
chunk__41071_41465 = G__41588;
count__41072_41466 = G__41589;
i__41073_41467 = G__41590;
continue;
}
}
} else {
}
}
break;
}


var G__41591 = cljs.core.next(seq__40836__$1);
var G__41592 = null;
var G__41593 = (0);
var G__41594 = (0);
seq__40836 = G__41591;
chunk__40838 = G__41592;
count__40839 = G__41593;
i__40840 = G__41594;
continue;
} else {
var G__41596 = cljs.core.next(seq__40836__$1);
var G__41597 = null;
var G__41598 = (0);
var G__41599 = (0);
seq__40836 = G__41596;
chunk__40838 = G__41597;
count__40839 = G__41598;
i__40840 = G__41599;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__41157){
var map__41158 = p__41157;
var map__41158__$1 = cljs.core.__destructure_map(map__41158);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41158__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__41169){
var map__41170 = p__41169;
var map__41170__$1 = cljs.core.__destructure_map(map__41170);
var _ = map__41170__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41170__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__41171,done,error){
var map__41172 = p__41171;
var map__41172__$1 = cljs.core.__destructure_map(map__41172);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41172__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__41173,done,error){
var map__41174 = p__41173;
var map__41174__$1 = cljs.core.__destructure_map(map__41174);
var msg = map__41174__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41174__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41174__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41174__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__41175){
var map__41176 = p__41175;
var map__41176__$1 = cljs.core.__destructure_map(map__41176);
var src = map__41176__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41176__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__41177 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__41177) : done.call(null,G__41177));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__41178){
var map__41179 = p__41178;
var map__41179__$1 = cljs.core.__destructure_map(map__41179);
var msg__$1 = map__41179__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41179__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e41180){var ex = e41180;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__41181){
var map__41182 = p__41181;
var map__41182__$1 = cljs.core.__destructure_map(map__41182);
var env = map__41182__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41182__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__41183){
var map__41184 = p__41183;
var map__41184__$1 = cljs.core.__destructure_map(map__41184);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41184__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41184__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__41185){
var map__41186 = p__41185;
var map__41186__$1 = cljs.core.__destructure_map(map__41186);
var svc = map__41186__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41186__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

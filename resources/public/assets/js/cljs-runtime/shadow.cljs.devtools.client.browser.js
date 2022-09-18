goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37131 = arguments.length;
var i__5770__auto___37132 = (0);
while(true){
if((i__5770__auto___37132 < len__5769__auto___37131)){
args__5775__auto__.push((arguments[i__5770__auto___37132]));

var G__37133 = (i__5770__auto___37132 + (1));
i__5770__auto___37132 = G__37133;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36844){
var G__36845 = cljs.core.first(seq36844);
var seq36844__$1 = cljs.core.next(seq36844);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36845,seq36844__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36849 = cljs.core.seq(sources);
var chunk__36850 = null;
var count__36851 = (0);
var i__36852 = (0);
while(true){
if((i__36852 < count__36851)){
var map__36859 = chunk__36850.cljs$core$IIndexed$_nth$arity$2(null,i__36852);
var map__36859__$1 = cljs.core.__destructure_map(map__36859);
var src = map__36859__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36859__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36859__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36859__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36859__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36860){var e_37134 = e36860;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37134);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37134.message)].join('')));
}

var G__37135 = seq__36849;
var G__37136 = chunk__36850;
var G__37137 = count__36851;
var G__37138 = (i__36852 + (1));
seq__36849 = G__37135;
chunk__36850 = G__37136;
count__36851 = G__37137;
i__36852 = G__37138;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36849);
if(temp__5804__auto__){
var seq__36849__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36849__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36849__$1);
var G__37139 = cljs.core.chunk_rest(seq__36849__$1);
var G__37140 = c__5568__auto__;
var G__37141 = cljs.core.count(c__5568__auto__);
var G__37142 = (0);
seq__36849 = G__37139;
chunk__36850 = G__37140;
count__36851 = G__37141;
i__36852 = G__37142;
continue;
} else {
var map__36861 = cljs.core.first(seq__36849__$1);
var map__36861__$1 = cljs.core.__destructure_map(map__36861);
var src = map__36861__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36861__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36861__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36861__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36861__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36862){var e_37143 = e36862;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37143);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37143.message)].join('')));
}

var G__37144 = cljs.core.next(seq__36849__$1);
var G__37145 = null;
var G__37146 = (0);
var G__37147 = (0);
seq__36849 = G__37144;
chunk__36850 = G__37145;
count__36851 = G__37146;
i__36852 = G__37147;
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
var seq__36865 = cljs.core.seq(js_requires);
var chunk__36866 = null;
var count__36867 = (0);
var i__36868 = (0);
while(true){
if((i__36868 < count__36867)){
var js_ns = chunk__36866.cljs$core$IIndexed$_nth$arity$2(null,i__36868);
var require_str_37148 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37148);


var G__37149 = seq__36865;
var G__37150 = chunk__36866;
var G__37151 = count__36867;
var G__37152 = (i__36868 + (1));
seq__36865 = G__37149;
chunk__36866 = G__37150;
count__36867 = G__37151;
i__36868 = G__37152;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36865);
if(temp__5804__auto__){
var seq__36865__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36865__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36865__$1);
var G__37153 = cljs.core.chunk_rest(seq__36865__$1);
var G__37154 = c__5568__auto__;
var G__37155 = cljs.core.count(c__5568__auto__);
var G__37156 = (0);
seq__36865 = G__37153;
chunk__36866 = G__37154;
count__36867 = G__37155;
i__36868 = G__37156;
continue;
} else {
var js_ns = cljs.core.first(seq__36865__$1);
var require_str_37157 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37157);


var G__37158 = cljs.core.next(seq__36865__$1);
var G__37159 = null;
var G__37160 = (0);
var G__37161 = (0);
seq__36865 = G__37158;
chunk__36866 = G__37159;
count__36867 = G__37160;
i__36868 = G__37161;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__36870){
var map__36871 = p__36870;
var map__36871__$1 = cljs.core.__destructure_map(map__36871);
var msg = map__36871__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36871__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36871__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36872(s__36873){
return (new cljs.core.LazySeq(null,(function (){
var s__36873__$1 = s__36873;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__36873__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__36878 = cljs.core.first(xs__6360__auto__);
var map__36878__$1 = cljs.core.__destructure_map(map__36878);
var src = map__36878__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36878__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36878__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__36873__$1,map__36878,map__36878__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__36871,map__36871__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36872_$_iter__36874(s__36875){
return (new cljs.core.LazySeq(null,((function (s__36873__$1,map__36878,map__36878__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__36871,map__36871__$1,msg,info,reload_info){
return (function (){
var s__36875__$1 = s__36875;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__36875__$1);
if(temp__5804__auto____$1){
var s__36875__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36875__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__36875__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__36877 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__36876 = (0);
while(true){
if((i__36876 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__36876);
cljs.core.chunk_append(b__36877,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37162 = (i__36876 + (1));
i__36876 = G__37162;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36877),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36872_$_iter__36874(cljs.core.chunk_rest(s__36875__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36877),null);
}
} else {
var warning = cljs.core.first(s__36875__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36872_$_iter__36874(cljs.core.rest(s__36875__$2)));
}
} else {
return null;
}
break;
}
});})(s__36873__$1,map__36878,map__36878__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__36871,map__36871__$1,msg,info,reload_info))
,null,null));
});})(s__36873__$1,map__36878,map__36878__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__36871,map__36871__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36872(cljs.core.rest(s__36873__$1)));
} else {
var G__37163 = cljs.core.rest(s__36873__$1);
s__36873__$1 = G__37163;
continue;
}
} else {
var G__37164 = cljs.core.rest(s__36873__$1);
s__36873__$1 = G__37164;
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
var seq__36879_37165 = cljs.core.seq(warnings);
var chunk__36880_37166 = null;
var count__36881_37167 = (0);
var i__36882_37168 = (0);
while(true){
if((i__36882_37168 < count__36881_37167)){
var map__36885_37169 = chunk__36880_37166.cljs$core$IIndexed$_nth$arity$2(null,i__36882_37168);
var map__36885_37170__$1 = cljs.core.__destructure_map(map__36885_37169);
var w_37171 = map__36885_37170__$1;
var msg_37172__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36885_37170__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37173 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36885_37170__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36885_37170__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37175 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36885_37170__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37175)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37173),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37174),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37172__$1)].join(''));


var G__37176 = seq__36879_37165;
var G__37177 = chunk__36880_37166;
var G__37178 = count__36881_37167;
var G__37179 = (i__36882_37168 + (1));
seq__36879_37165 = G__37176;
chunk__36880_37166 = G__37177;
count__36881_37167 = G__37178;
i__36882_37168 = G__37179;
continue;
} else {
var temp__5804__auto___37180 = cljs.core.seq(seq__36879_37165);
if(temp__5804__auto___37180){
var seq__36879_37181__$1 = temp__5804__auto___37180;
if(cljs.core.chunked_seq_QMARK_(seq__36879_37181__$1)){
var c__5568__auto___37182 = cljs.core.chunk_first(seq__36879_37181__$1);
var G__37183 = cljs.core.chunk_rest(seq__36879_37181__$1);
var G__37184 = c__5568__auto___37182;
var G__37185 = cljs.core.count(c__5568__auto___37182);
var G__37186 = (0);
seq__36879_37165 = G__37183;
chunk__36880_37166 = G__37184;
count__36881_37167 = G__37185;
i__36882_37168 = G__37186;
continue;
} else {
var map__36886_37187 = cljs.core.first(seq__36879_37181__$1);
var map__36886_37188__$1 = cljs.core.__destructure_map(map__36886_37187);
var w_37189 = map__36886_37188__$1;
var msg_37190__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36886_37188__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37191 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36886_37188__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36886_37188__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36886_37188__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37193)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37191),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37192),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37190__$1)].join(''));


var G__37194 = cljs.core.next(seq__36879_37181__$1);
var G__37195 = null;
var G__37196 = (0);
var G__37197 = (0);
seq__36879_37165 = G__37194;
chunk__36880_37166 = G__37195;
count__36881_37167 = G__37196;
i__36882_37168 = G__37197;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__36869_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36869_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__36887){
var map__36888 = p__36887;
var map__36888__$1 = cljs.core.__destructure_map(map__36888);
var msg = map__36888__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36888__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36888__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__36889 = cljs.core.seq(updates);
var chunk__36891 = null;
var count__36892 = (0);
var i__36893 = (0);
while(true){
if((i__36893 < count__36892)){
var path = chunk__36891.cljs$core$IIndexed$_nth$arity$2(null,i__36893);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37003_37198 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37007_37199 = null;
var count__37008_37200 = (0);
var i__37009_37201 = (0);
while(true){
if((i__37009_37201 < count__37008_37200)){
var node_37202 = chunk__37007_37199.cljs$core$IIndexed$_nth$arity$2(null,i__37009_37201);
if(cljs.core.not(node_37202.shadow$old)){
var path_match_37203 = shadow.cljs.devtools.client.browser.match_paths(node_37202.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37203)){
var new_link_37204 = (function (){var G__37035 = node_37202.cloneNode(true);
G__37035.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37203),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37035;
})();
(node_37202.shadow$old = true);

(new_link_37204.onload = ((function (seq__37003_37198,chunk__37007_37199,count__37008_37200,i__37009_37201,seq__36889,chunk__36891,count__36892,i__36893,new_link_37204,path_match_37203,node_37202,path,map__36888,map__36888__$1,msg,updates,reload_info){
return (function (e){
var seq__37036_37205 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37038_37206 = null;
var count__37039_37207 = (0);
var i__37040_37208 = (0);
while(true){
if((i__37040_37208 < count__37039_37207)){
var map__37044_37209 = chunk__37038_37206.cljs$core$IIndexed$_nth$arity$2(null,i__37040_37208);
var map__37044_37210__$1 = cljs.core.__destructure_map(map__37044_37209);
var task_37211 = map__37044_37210__$1;
var fn_str_37212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37044_37210__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37213 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37044_37210__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37214 = goog.getObjectByName(fn_str_37212,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37213)].join(''));

(fn_obj_37214.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37214.cljs$core$IFn$_invoke$arity$2(path,new_link_37204) : fn_obj_37214.call(null,path,new_link_37204));


var G__37215 = seq__37036_37205;
var G__37216 = chunk__37038_37206;
var G__37217 = count__37039_37207;
var G__37218 = (i__37040_37208 + (1));
seq__37036_37205 = G__37215;
chunk__37038_37206 = G__37216;
count__37039_37207 = G__37217;
i__37040_37208 = G__37218;
continue;
} else {
var temp__5804__auto___37219 = cljs.core.seq(seq__37036_37205);
if(temp__5804__auto___37219){
var seq__37036_37220__$1 = temp__5804__auto___37219;
if(cljs.core.chunked_seq_QMARK_(seq__37036_37220__$1)){
var c__5568__auto___37221 = cljs.core.chunk_first(seq__37036_37220__$1);
var G__37222 = cljs.core.chunk_rest(seq__37036_37220__$1);
var G__37223 = c__5568__auto___37221;
var G__37224 = cljs.core.count(c__5568__auto___37221);
var G__37225 = (0);
seq__37036_37205 = G__37222;
chunk__37038_37206 = G__37223;
count__37039_37207 = G__37224;
i__37040_37208 = G__37225;
continue;
} else {
var map__37045_37226 = cljs.core.first(seq__37036_37220__$1);
var map__37045_37227__$1 = cljs.core.__destructure_map(map__37045_37226);
var task_37228 = map__37045_37227__$1;
var fn_str_37229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37045_37227__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37045_37227__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37231 = goog.getObjectByName(fn_str_37229,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37230)].join(''));

(fn_obj_37231.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37231.cljs$core$IFn$_invoke$arity$2(path,new_link_37204) : fn_obj_37231.call(null,path,new_link_37204));


var G__37232 = cljs.core.next(seq__37036_37220__$1);
var G__37233 = null;
var G__37234 = (0);
var G__37235 = (0);
seq__37036_37205 = G__37232;
chunk__37038_37206 = G__37233;
count__37039_37207 = G__37234;
i__37040_37208 = G__37235;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37202);
});})(seq__37003_37198,chunk__37007_37199,count__37008_37200,i__37009_37201,seq__36889,chunk__36891,count__36892,i__36893,new_link_37204,path_match_37203,node_37202,path,map__36888,map__36888__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37203], 0));

goog.dom.insertSiblingAfter(new_link_37204,node_37202);


var G__37236 = seq__37003_37198;
var G__37237 = chunk__37007_37199;
var G__37238 = count__37008_37200;
var G__37239 = (i__37009_37201 + (1));
seq__37003_37198 = G__37236;
chunk__37007_37199 = G__37237;
count__37008_37200 = G__37238;
i__37009_37201 = G__37239;
continue;
} else {
var G__37240 = seq__37003_37198;
var G__37241 = chunk__37007_37199;
var G__37242 = count__37008_37200;
var G__37243 = (i__37009_37201 + (1));
seq__37003_37198 = G__37240;
chunk__37007_37199 = G__37241;
count__37008_37200 = G__37242;
i__37009_37201 = G__37243;
continue;
}
} else {
var G__37244 = seq__37003_37198;
var G__37245 = chunk__37007_37199;
var G__37246 = count__37008_37200;
var G__37247 = (i__37009_37201 + (1));
seq__37003_37198 = G__37244;
chunk__37007_37199 = G__37245;
count__37008_37200 = G__37246;
i__37009_37201 = G__37247;
continue;
}
} else {
var temp__5804__auto___37248 = cljs.core.seq(seq__37003_37198);
if(temp__5804__auto___37248){
var seq__37003_37249__$1 = temp__5804__auto___37248;
if(cljs.core.chunked_seq_QMARK_(seq__37003_37249__$1)){
var c__5568__auto___37250 = cljs.core.chunk_first(seq__37003_37249__$1);
var G__37251 = cljs.core.chunk_rest(seq__37003_37249__$1);
var G__37252 = c__5568__auto___37250;
var G__37253 = cljs.core.count(c__5568__auto___37250);
var G__37254 = (0);
seq__37003_37198 = G__37251;
chunk__37007_37199 = G__37252;
count__37008_37200 = G__37253;
i__37009_37201 = G__37254;
continue;
} else {
var node_37255 = cljs.core.first(seq__37003_37249__$1);
if(cljs.core.not(node_37255.shadow$old)){
var path_match_37256 = shadow.cljs.devtools.client.browser.match_paths(node_37255.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37256)){
var new_link_37257 = (function (){var G__37046 = node_37255.cloneNode(true);
G__37046.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37256),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37046;
})();
(node_37255.shadow$old = true);

(new_link_37257.onload = ((function (seq__37003_37198,chunk__37007_37199,count__37008_37200,i__37009_37201,seq__36889,chunk__36891,count__36892,i__36893,new_link_37257,path_match_37256,node_37255,seq__37003_37249__$1,temp__5804__auto___37248,path,map__36888,map__36888__$1,msg,updates,reload_info){
return (function (e){
var seq__37047_37258 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37049_37259 = null;
var count__37050_37260 = (0);
var i__37051_37261 = (0);
while(true){
if((i__37051_37261 < count__37050_37260)){
var map__37055_37262 = chunk__37049_37259.cljs$core$IIndexed$_nth$arity$2(null,i__37051_37261);
var map__37055_37263__$1 = cljs.core.__destructure_map(map__37055_37262);
var task_37264 = map__37055_37263__$1;
var fn_str_37265 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37055_37263__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37266 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37055_37263__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37267 = goog.getObjectByName(fn_str_37265,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37266)].join(''));

(fn_obj_37267.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37267.cljs$core$IFn$_invoke$arity$2(path,new_link_37257) : fn_obj_37267.call(null,path,new_link_37257));


var G__37268 = seq__37047_37258;
var G__37269 = chunk__37049_37259;
var G__37270 = count__37050_37260;
var G__37271 = (i__37051_37261 + (1));
seq__37047_37258 = G__37268;
chunk__37049_37259 = G__37269;
count__37050_37260 = G__37270;
i__37051_37261 = G__37271;
continue;
} else {
var temp__5804__auto___37272__$1 = cljs.core.seq(seq__37047_37258);
if(temp__5804__auto___37272__$1){
var seq__37047_37273__$1 = temp__5804__auto___37272__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37047_37273__$1)){
var c__5568__auto___37274 = cljs.core.chunk_first(seq__37047_37273__$1);
var G__37275 = cljs.core.chunk_rest(seq__37047_37273__$1);
var G__37276 = c__5568__auto___37274;
var G__37277 = cljs.core.count(c__5568__auto___37274);
var G__37278 = (0);
seq__37047_37258 = G__37275;
chunk__37049_37259 = G__37276;
count__37050_37260 = G__37277;
i__37051_37261 = G__37278;
continue;
} else {
var map__37056_37279 = cljs.core.first(seq__37047_37273__$1);
var map__37056_37280__$1 = cljs.core.__destructure_map(map__37056_37279);
var task_37281 = map__37056_37280__$1;
var fn_str_37282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37056_37280__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37056_37280__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37284 = goog.getObjectByName(fn_str_37282,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37283)].join(''));

(fn_obj_37284.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37284.cljs$core$IFn$_invoke$arity$2(path,new_link_37257) : fn_obj_37284.call(null,path,new_link_37257));


var G__37285 = cljs.core.next(seq__37047_37273__$1);
var G__37286 = null;
var G__37287 = (0);
var G__37288 = (0);
seq__37047_37258 = G__37285;
chunk__37049_37259 = G__37286;
count__37050_37260 = G__37287;
i__37051_37261 = G__37288;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37255);
});})(seq__37003_37198,chunk__37007_37199,count__37008_37200,i__37009_37201,seq__36889,chunk__36891,count__36892,i__36893,new_link_37257,path_match_37256,node_37255,seq__37003_37249__$1,temp__5804__auto___37248,path,map__36888,map__36888__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37256], 0));

goog.dom.insertSiblingAfter(new_link_37257,node_37255);


var G__37289 = cljs.core.next(seq__37003_37249__$1);
var G__37290 = null;
var G__37291 = (0);
var G__37292 = (0);
seq__37003_37198 = G__37289;
chunk__37007_37199 = G__37290;
count__37008_37200 = G__37291;
i__37009_37201 = G__37292;
continue;
} else {
var G__37293 = cljs.core.next(seq__37003_37249__$1);
var G__37294 = null;
var G__37295 = (0);
var G__37296 = (0);
seq__37003_37198 = G__37293;
chunk__37007_37199 = G__37294;
count__37008_37200 = G__37295;
i__37009_37201 = G__37296;
continue;
}
} else {
var G__37297 = cljs.core.next(seq__37003_37249__$1);
var G__37298 = null;
var G__37299 = (0);
var G__37300 = (0);
seq__37003_37198 = G__37297;
chunk__37007_37199 = G__37298;
count__37008_37200 = G__37299;
i__37009_37201 = G__37300;
continue;
}
}
} else {
}
}
break;
}


var G__37301 = seq__36889;
var G__37302 = chunk__36891;
var G__37303 = count__36892;
var G__37304 = (i__36893 + (1));
seq__36889 = G__37301;
chunk__36891 = G__37302;
count__36892 = G__37303;
i__36893 = G__37304;
continue;
} else {
var G__37305 = seq__36889;
var G__37306 = chunk__36891;
var G__37307 = count__36892;
var G__37308 = (i__36893 + (1));
seq__36889 = G__37305;
chunk__36891 = G__37306;
count__36892 = G__37307;
i__36893 = G__37308;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36889);
if(temp__5804__auto__){
var seq__36889__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36889__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36889__$1);
var G__37309 = cljs.core.chunk_rest(seq__36889__$1);
var G__37310 = c__5568__auto__;
var G__37311 = cljs.core.count(c__5568__auto__);
var G__37312 = (0);
seq__36889 = G__37309;
chunk__36891 = G__37310;
count__36892 = G__37311;
i__36893 = G__37312;
continue;
} else {
var path = cljs.core.first(seq__36889__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37057_37313 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37061_37314 = null;
var count__37062_37315 = (0);
var i__37063_37316 = (0);
while(true){
if((i__37063_37316 < count__37062_37315)){
var node_37317 = chunk__37061_37314.cljs$core$IIndexed$_nth$arity$2(null,i__37063_37316);
if(cljs.core.not(node_37317.shadow$old)){
var path_match_37318 = shadow.cljs.devtools.client.browser.match_paths(node_37317.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37318)){
var new_link_37319 = (function (){var G__37089 = node_37317.cloneNode(true);
G__37089.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37318),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37089;
})();
(node_37317.shadow$old = true);

(new_link_37319.onload = ((function (seq__37057_37313,chunk__37061_37314,count__37062_37315,i__37063_37316,seq__36889,chunk__36891,count__36892,i__36893,new_link_37319,path_match_37318,node_37317,path,seq__36889__$1,temp__5804__auto__,map__36888,map__36888__$1,msg,updates,reload_info){
return (function (e){
var seq__37090_37320 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37092_37321 = null;
var count__37093_37322 = (0);
var i__37094_37323 = (0);
while(true){
if((i__37094_37323 < count__37093_37322)){
var map__37098_37324 = chunk__37092_37321.cljs$core$IIndexed$_nth$arity$2(null,i__37094_37323);
var map__37098_37325__$1 = cljs.core.__destructure_map(map__37098_37324);
var task_37326 = map__37098_37325__$1;
var fn_str_37327 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37098_37325__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37098_37325__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37329 = goog.getObjectByName(fn_str_37327,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37328)].join(''));

(fn_obj_37329.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37329.cljs$core$IFn$_invoke$arity$2(path,new_link_37319) : fn_obj_37329.call(null,path,new_link_37319));


var G__37330 = seq__37090_37320;
var G__37331 = chunk__37092_37321;
var G__37332 = count__37093_37322;
var G__37333 = (i__37094_37323 + (1));
seq__37090_37320 = G__37330;
chunk__37092_37321 = G__37331;
count__37093_37322 = G__37332;
i__37094_37323 = G__37333;
continue;
} else {
var temp__5804__auto___37334__$1 = cljs.core.seq(seq__37090_37320);
if(temp__5804__auto___37334__$1){
var seq__37090_37335__$1 = temp__5804__auto___37334__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37090_37335__$1)){
var c__5568__auto___37336 = cljs.core.chunk_first(seq__37090_37335__$1);
var G__37337 = cljs.core.chunk_rest(seq__37090_37335__$1);
var G__37338 = c__5568__auto___37336;
var G__37339 = cljs.core.count(c__5568__auto___37336);
var G__37340 = (0);
seq__37090_37320 = G__37337;
chunk__37092_37321 = G__37338;
count__37093_37322 = G__37339;
i__37094_37323 = G__37340;
continue;
} else {
var map__37099_37341 = cljs.core.first(seq__37090_37335__$1);
var map__37099_37342__$1 = cljs.core.__destructure_map(map__37099_37341);
var task_37343 = map__37099_37342__$1;
var fn_str_37344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37099_37342__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37099_37342__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37346 = goog.getObjectByName(fn_str_37344,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37345)].join(''));

(fn_obj_37346.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37346.cljs$core$IFn$_invoke$arity$2(path,new_link_37319) : fn_obj_37346.call(null,path,new_link_37319));


var G__37347 = cljs.core.next(seq__37090_37335__$1);
var G__37348 = null;
var G__37349 = (0);
var G__37350 = (0);
seq__37090_37320 = G__37347;
chunk__37092_37321 = G__37348;
count__37093_37322 = G__37349;
i__37094_37323 = G__37350;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37317);
});})(seq__37057_37313,chunk__37061_37314,count__37062_37315,i__37063_37316,seq__36889,chunk__36891,count__36892,i__36893,new_link_37319,path_match_37318,node_37317,path,seq__36889__$1,temp__5804__auto__,map__36888,map__36888__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37318], 0));

goog.dom.insertSiblingAfter(new_link_37319,node_37317);


var G__37351 = seq__37057_37313;
var G__37352 = chunk__37061_37314;
var G__37353 = count__37062_37315;
var G__37354 = (i__37063_37316 + (1));
seq__37057_37313 = G__37351;
chunk__37061_37314 = G__37352;
count__37062_37315 = G__37353;
i__37063_37316 = G__37354;
continue;
} else {
var G__37355 = seq__37057_37313;
var G__37356 = chunk__37061_37314;
var G__37357 = count__37062_37315;
var G__37358 = (i__37063_37316 + (1));
seq__37057_37313 = G__37355;
chunk__37061_37314 = G__37356;
count__37062_37315 = G__37357;
i__37063_37316 = G__37358;
continue;
}
} else {
var G__37359 = seq__37057_37313;
var G__37360 = chunk__37061_37314;
var G__37361 = count__37062_37315;
var G__37362 = (i__37063_37316 + (1));
seq__37057_37313 = G__37359;
chunk__37061_37314 = G__37360;
count__37062_37315 = G__37361;
i__37063_37316 = G__37362;
continue;
}
} else {
var temp__5804__auto___37363__$1 = cljs.core.seq(seq__37057_37313);
if(temp__5804__auto___37363__$1){
var seq__37057_37364__$1 = temp__5804__auto___37363__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37057_37364__$1)){
var c__5568__auto___37365 = cljs.core.chunk_first(seq__37057_37364__$1);
var G__37366 = cljs.core.chunk_rest(seq__37057_37364__$1);
var G__37367 = c__5568__auto___37365;
var G__37368 = cljs.core.count(c__5568__auto___37365);
var G__37369 = (0);
seq__37057_37313 = G__37366;
chunk__37061_37314 = G__37367;
count__37062_37315 = G__37368;
i__37063_37316 = G__37369;
continue;
} else {
var node_37370 = cljs.core.first(seq__37057_37364__$1);
if(cljs.core.not(node_37370.shadow$old)){
var path_match_37371 = shadow.cljs.devtools.client.browser.match_paths(node_37370.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37371)){
var new_link_37372 = (function (){var G__37100 = node_37370.cloneNode(true);
G__37100.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37371),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37100;
})();
(node_37370.shadow$old = true);

(new_link_37372.onload = ((function (seq__37057_37313,chunk__37061_37314,count__37062_37315,i__37063_37316,seq__36889,chunk__36891,count__36892,i__36893,new_link_37372,path_match_37371,node_37370,seq__37057_37364__$1,temp__5804__auto___37363__$1,path,seq__36889__$1,temp__5804__auto__,map__36888,map__36888__$1,msg,updates,reload_info){
return (function (e){
var seq__37101_37373 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37103_37374 = null;
var count__37104_37375 = (0);
var i__37105_37376 = (0);
while(true){
if((i__37105_37376 < count__37104_37375)){
var map__37109_37377 = chunk__37103_37374.cljs$core$IIndexed$_nth$arity$2(null,i__37105_37376);
var map__37109_37378__$1 = cljs.core.__destructure_map(map__37109_37377);
var task_37379 = map__37109_37378__$1;
var fn_str_37380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37109_37378__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37381 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37109_37378__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37382 = goog.getObjectByName(fn_str_37380,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37381)].join(''));

(fn_obj_37382.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37382.cljs$core$IFn$_invoke$arity$2(path,new_link_37372) : fn_obj_37382.call(null,path,new_link_37372));


var G__37383 = seq__37101_37373;
var G__37384 = chunk__37103_37374;
var G__37385 = count__37104_37375;
var G__37386 = (i__37105_37376 + (1));
seq__37101_37373 = G__37383;
chunk__37103_37374 = G__37384;
count__37104_37375 = G__37385;
i__37105_37376 = G__37386;
continue;
} else {
var temp__5804__auto___37387__$2 = cljs.core.seq(seq__37101_37373);
if(temp__5804__auto___37387__$2){
var seq__37101_37388__$1 = temp__5804__auto___37387__$2;
if(cljs.core.chunked_seq_QMARK_(seq__37101_37388__$1)){
var c__5568__auto___37389 = cljs.core.chunk_first(seq__37101_37388__$1);
var G__37390 = cljs.core.chunk_rest(seq__37101_37388__$1);
var G__37391 = c__5568__auto___37389;
var G__37392 = cljs.core.count(c__5568__auto___37389);
var G__37393 = (0);
seq__37101_37373 = G__37390;
chunk__37103_37374 = G__37391;
count__37104_37375 = G__37392;
i__37105_37376 = G__37393;
continue;
} else {
var map__37110_37394 = cljs.core.first(seq__37101_37388__$1);
var map__37110_37395__$1 = cljs.core.__destructure_map(map__37110_37394);
var task_37396 = map__37110_37395__$1;
var fn_str_37397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37110_37395__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37110_37395__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37399 = goog.getObjectByName(fn_str_37397,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37398)].join(''));

(fn_obj_37399.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37399.cljs$core$IFn$_invoke$arity$2(path,new_link_37372) : fn_obj_37399.call(null,path,new_link_37372));


var G__37400 = cljs.core.next(seq__37101_37388__$1);
var G__37401 = null;
var G__37402 = (0);
var G__37403 = (0);
seq__37101_37373 = G__37400;
chunk__37103_37374 = G__37401;
count__37104_37375 = G__37402;
i__37105_37376 = G__37403;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37370);
});})(seq__37057_37313,chunk__37061_37314,count__37062_37315,i__37063_37316,seq__36889,chunk__36891,count__36892,i__36893,new_link_37372,path_match_37371,node_37370,seq__37057_37364__$1,temp__5804__auto___37363__$1,path,seq__36889__$1,temp__5804__auto__,map__36888,map__36888__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37371], 0));

goog.dom.insertSiblingAfter(new_link_37372,node_37370);


var G__37404 = cljs.core.next(seq__37057_37364__$1);
var G__37405 = null;
var G__37406 = (0);
var G__37407 = (0);
seq__37057_37313 = G__37404;
chunk__37061_37314 = G__37405;
count__37062_37315 = G__37406;
i__37063_37316 = G__37407;
continue;
} else {
var G__37408 = cljs.core.next(seq__37057_37364__$1);
var G__37409 = null;
var G__37410 = (0);
var G__37411 = (0);
seq__37057_37313 = G__37408;
chunk__37061_37314 = G__37409;
count__37062_37315 = G__37410;
i__37063_37316 = G__37411;
continue;
}
} else {
var G__37412 = cljs.core.next(seq__37057_37364__$1);
var G__37413 = null;
var G__37414 = (0);
var G__37415 = (0);
seq__37057_37313 = G__37412;
chunk__37061_37314 = G__37413;
count__37062_37315 = G__37414;
i__37063_37316 = G__37415;
continue;
}
}
} else {
}
}
break;
}


var G__37416 = cljs.core.next(seq__36889__$1);
var G__37417 = null;
var G__37418 = (0);
var G__37419 = (0);
seq__36889 = G__37416;
chunk__36891 = G__37417;
count__36892 = G__37418;
i__36893 = G__37419;
continue;
} else {
var G__37420 = cljs.core.next(seq__36889__$1);
var G__37421 = null;
var G__37422 = (0);
var G__37423 = (0);
seq__36889 = G__37420;
chunk__36891 = G__37421;
count__36892 = G__37422;
i__36893 = G__37423;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37111){
var map__37112 = p__37111;
var map__37112__$1 = cljs.core.__destructure_map(map__37112);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37112__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37113){
var map__37114 = p__37113;
var map__37114__$1 = cljs.core.__destructure_map(map__37114);
var _ = map__37114__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37114__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37115,done,error){
var map__37116 = p__37115;
var map__37116__$1 = cljs.core.__destructure_map(map__37116);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37116__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37117,done,error){
var map__37118 = p__37117;
var map__37118__$1 = cljs.core.__destructure_map(map__37118);
var msg = map__37118__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37118__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37118__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37118__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37119){
var map__37120 = p__37119;
var map__37120__$1 = cljs.core.__destructure_map(map__37120);
var src = map__37120__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37120__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37121 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37121) : done.call(null,G__37121));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37122){
var map__37123 = p__37122;
var map__37123__$1 = cljs.core.__destructure_map(map__37123);
var msg__$1 = map__37123__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37123__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37124){var ex = e37124;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37125){
var map__37126 = p__37125;
var map__37126__$1 = cljs.core.__destructure_map(map__37126);
var env = map__37126__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37126__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37127){
var map__37128 = p__37127;
var map__37128__$1 = cljs.core.__destructure_map(map__37128);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37128__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37128__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__37129){
var map__37130 = p__37129;
var map__37130__$1 = cljs.core.__destructure_map(map__37130);
var svc = map__37130__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37130__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37132 = arguments.length;
var i__5770__auto___37133 = (0);
while(true){
if((i__5770__auto___37133 < len__5769__auto___37132)){
args__5775__auto__.push((arguments[i__5770__auto___37133]));

var G__37134 = (i__5770__auto___37133 + (1));
i__5770__auto___37133 = G__37134;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36849){
var G__36850 = cljs.core.first(seq36849);
var seq36849__$1 = cljs.core.next(seq36849);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36850,seq36849__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36852 = cljs.core.seq(sources);
var chunk__36853 = null;
var count__36854 = (0);
var i__36855 = (0);
while(true){
if((i__36855 < count__36854)){
var map__36862 = chunk__36853.cljs$core$IIndexed$_nth$arity$2(null,i__36855);
var map__36862__$1 = cljs.core.__destructure_map(map__36862);
var src = map__36862__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36862__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36862__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36862__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36862__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36863){var e_37135 = e36863;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37135);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37135.message)].join('')));
}

var G__37136 = seq__36852;
var G__37137 = chunk__36853;
var G__37138 = count__36854;
var G__37139 = (i__36855 + (1));
seq__36852 = G__37136;
chunk__36853 = G__37137;
count__36854 = G__37138;
i__36855 = G__37139;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36852);
if(temp__5804__auto__){
var seq__36852__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36852__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36852__$1);
var G__37140 = cljs.core.chunk_rest(seq__36852__$1);
var G__37141 = c__5568__auto__;
var G__37142 = cljs.core.count(c__5568__auto__);
var G__37143 = (0);
seq__36852 = G__37140;
chunk__36853 = G__37141;
count__36854 = G__37142;
i__36855 = G__37143;
continue;
} else {
var map__36864 = cljs.core.first(seq__36852__$1);
var map__36864__$1 = cljs.core.__destructure_map(map__36864);
var src = map__36864__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36864__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36864__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36864__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36864__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36865){var e_37144 = e36865;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37144);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37144.message)].join('')));
}

var G__37145 = cljs.core.next(seq__36852__$1);
var G__37146 = null;
var G__37147 = (0);
var G__37148 = (0);
seq__36852 = G__37145;
chunk__36853 = G__37146;
count__36854 = G__37147;
i__36855 = G__37148;
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
var seq__36866 = cljs.core.seq(js_requires);
var chunk__36867 = null;
var count__36868 = (0);
var i__36869 = (0);
while(true){
if((i__36869 < count__36868)){
var js_ns = chunk__36867.cljs$core$IIndexed$_nth$arity$2(null,i__36869);
var require_str_37149 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37149);


var G__37150 = seq__36866;
var G__37151 = chunk__36867;
var G__37152 = count__36868;
var G__37153 = (i__36869 + (1));
seq__36866 = G__37150;
chunk__36867 = G__37151;
count__36868 = G__37152;
i__36869 = G__37153;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36866);
if(temp__5804__auto__){
var seq__36866__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36866__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36866__$1);
var G__37154 = cljs.core.chunk_rest(seq__36866__$1);
var G__37155 = c__5568__auto__;
var G__37156 = cljs.core.count(c__5568__auto__);
var G__37157 = (0);
seq__36866 = G__37154;
chunk__36867 = G__37155;
count__36868 = G__37156;
i__36869 = G__37157;
continue;
} else {
var js_ns = cljs.core.first(seq__36866__$1);
var require_str_37158 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37158);


var G__37159 = cljs.core.next(seq__36866__$1);
var G__37160 = null;
var G__37161 = (0);
var G__37162 = (0);
seq__36866 = G__37159;
chunk__36867 = G__37160;
count__36868 = G__37161;
i__36869 = G__37162;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__36871){
var map__36872 = p__36871;
var map__36872__$1 = cljs.core.__destructure_map(map__36872);
var msg = map__36872__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36872__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36872__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36873(s__36874){
return (new cljs.core.LazySeq(null,(function (){
var s__36874__$1 = s__36874;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__36874__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__36879 = cljs.core.first(xs__6360__auto__);
var map__36879__$1 = cljs.core.__destructure_map(map__36879);
var src = map__36879__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36879__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36879__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__36874__$1,map__36879,map__36879__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__36872,map__36872__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36873_$_iter__36875(s__36876){
return (new cljs.core.LazySeq(null,((function (s__36874__$1,map__36879,map__36879__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__36872,map__36872__$1,msg,info,reload_info){
return (function (){
var s__36876__$1 = s__36876;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__36876__$1);
if(temp__5804__auto____$1){
var s__36876__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36876__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__36876__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__36878 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__36877 = (0);
while(true){
if((i__36877 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__36877);
cljs.core.chunk_append(b__36878,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37163 = (i__36877 + (1));
i__36877 = G__37163;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36878),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36873_$_iter__36875(cljs.core.chunk_rest(s__36876__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36878),null);
}
} else {
var warning = cljs.core.first(s__36876__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36873_$_iter__36875(cljs.core.rest(s__36876__$2)));
}
} else {
return null;
}
break;
}
});})(s__36874__$1,map__36879,map__36879__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__36872,map__36872__$1,msg,info,reload_info))
,null,null));
});})(s__36874__$1,map__36879,map__36879__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__36872,map__36872__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36873(cljs.core.rest(s__36874__$1)));
} else {
var G__37164 = cljs.core.rest(s__36874__$1);
s__36874__$1 = G__37164;
continue;
}
} else {
var G__37165 = cljs.core.rest(s__36874__$1);
s__36874__$1 = G__37165;
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
var seq__36880_37166 = cljs.core.seq(warnings);
var chunk__36881_37167 = null;
var count__36882_37168 = (0);
var i__36883_37169 = (0);
while(true){
if((i__36883_37169 < count__36882_37168)){
var map__36886_37170 = chunk__36881_37167.cljs$core$IIndexed$_nth$arity$2(null,i__36883_37169);
var map__36886_37171__$1 = cljs.core.__destructure_map(map__36886_37170);
var w_37172 = map__36886_37171__$1;
var msg_37173__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36886_37171__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36886_37171__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37175 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36886_37171__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37176 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36886_37171__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37176)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37174),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37175),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37173__$1)].join(''));


var G__37177 = seq__36880_37166;
var G__37178 = chunk__36881_37167;
var G__37179 = count__36882_37168;
var G__37180 = (i__36883_37169 + (1));
seq__36880_37166 = G__37177;
chunk__36881_37167 = G__37178;
count__36882_37168 = G__37179;
i__36883_37169 = G__37180;
continue;
} else {
var temp__5804__auto___37181 = cljs.core.seq(seq__36880_37166);
if(temp__5804__auto___37181){
var seq__36880_37182__$1 = temp__5804__auto___37181;
if(cljs.core.chunked_seq_QMARK_(seq__36880_37182__$1)){
var c__5568__auto___37183 = cljs.core.chunk_first(seq__36880_37182__$1);
var G__37184 = cljs.core.chunk_rest(seq__36880_37182__$1);
var G__37185 = c__5568__auto___37183;
var G__37186 = cljs.core.count(c__5568__auto___37183);
var G__37187 = (0);
seq__36880_37166 = G__37184;
chunk__36881_37167 = G__37185;
count__36882_37168 = G__37186;
i__36883_37169 = G__37187;
continue;
} else {
var map__36887_37188 = cljs.core.first(seq__36880_37182__$1);
var map__36887_37189__$1 = cljs.core.__destructure_map(map__36887_37188);
var w_37190 = map__36887_37189__$1;
var msg_37191__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36887_37189__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36887_37189__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36887_37189__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37194 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36887_37189__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37194)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37192),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37193),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37191__$1)].join(''));


var G__37195 = cljs.core.next(seq__36880_37182__$1);
var G__37196 = null;
var G__37197 = (0);
var G__37198 = (0);
seq__36880_37166 = G__37195;
chunk__36881_37167 = G__37196;
count__36882_37168 = G__37197;
i__36883_37169 = G__37198;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__36870_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36870_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__36888){
var map__36889 = p__36888;
var map__36889__$1 = cljs.core.__destructure_map(map__36889);
var msg = map__36889__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36889__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36889__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__36890 = cljs.core.seq(updates);
var chunk__36892 = null;
var count__36893 = (0);
var i__36894 = (0);
while(true){
if((i__36894 < count__36893)){
var path = chunk__36892.cljs$core$IIndexed$_nth$arity$2(null,i__36894);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37004_37199 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37008_37200 = null;
var count__37009_37201 = (0);
var i__37010_37202 = (0);
while(true){
if((i__37010_37202 < count__37009_37201)){
var node_37203 = chunk__37008_37200.cljs$core$IIndexed$_nth$arity$2(null,i__37010_37202);
if(cljs.core.not(node_37203.shadow$old)){
var path_match_37204 = shadow.cljs.devtools.client.browser.match_paths(node_37203.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37204)){
var new_link_37205 = (function (){var G__37036 = node_37203.cloneNode(true);
G__37036.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37204),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37036;
})();
(node_37203.shadow$old = true);

(new_link_37205.onload = ((function (seq__37004_37199,chunk__37008_37200,count__37009_37201,i__37010_37202,seq__36890,chunk__36892,count__36893,i__36894,new_link_37205,path_match_37204,node_37203,path,map__36889,map__36889__$1,msg,updates,reload_info){
return (function (e){
var seq__37037_37206 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37039_37207 = null;
var count__37040_37208 = (0);
var i__37041_37209 = (0);
while(true){
if((i__37041_37209 < count__37040_37208)){
var map__37045_37210 = chunk__37039_37207.cljs$core$IIndexed$_nth$arity$2(null,i__37041_37209);
var map__37045_37211__$1 = cljs.core.__destructure_map(map__37045_37210);
var task_37212 = map__37045_37211__$1;
var fn_str_37213 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37045_37211__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37045_37211__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37215 = goog.getObjectByName(fn_str_37213,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37214)].join(''));

(fn_obj_37215.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37215.cljs$core$IFn$_invoke$arity$2(path,new_link_37205) : fn_obj_37215.call(null,path,new_link_37205));


var G__37216 = seq__37037_37206;
var G__37217 = chunk__37039_37207;
var G__37218 = count__37040_37208;
var G__37219 = (i__37041_37209 + (1));
seq__37037_37206 = G__37216;
chunk__37039_37207 = G__37217;
count__37040_37208 = G__37218;
i__37041_37209 = G__37219;
continue;
} else {
var temp__5804__auto___37220 = cljs.core.seq(seq__37037_37206);
if(temp__5804__auto___37220){
var seq__37037_37221__$1 = temp__5804__auto___37220;
if(cljs.core.chunked_seq_QMARK_(seq__37037_37221__$1)){
var c__5568__auto___37222 = cljs.core.chunk_first(seq__37037_37221__$1);
var G__37223 = cljs.core.chunk_rest(seq__37037_37221__$1);
var G__37224 = c__5568__auto___37222;
var G__37225 = cljs.core.count(c__5568__auto___37222);
var G__37226 = (0);
seq__37037_37206 = G__37223;
chunk__37039_37207 = G__37224;
count__37040_37208 = G__37225;
i__37041_37209 = G__37226;
continue;
} else {
var map__37046_37227 = cljs.core.first(seq__37037_37221__$1);
var map__37046_37228__$1 = cljs.core.__destructure_map(map__37046_37227);
var task_37229 = map__37046_37228__$1;
var fn_str_37230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37046_37228__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37231 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37046_37228__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37232 = goog.getObjectByName(fn_str_37230,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37231)].join(''));

(fn_obj_37232.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37232.cljs$core$IFn$_invoke$arity$2(path,new_link_37205) : fn_obj_37232.call(null,path,new_link_37205));


var G__37233 = cljs.core.next(seq__37037_37221__$1);
var G__37234 = null;
var G__37235 = (0);
var G__37236 = (0);
seq__37037_37206 = G__37233;
chunk__37039_37207 = G__37234;
count__37040_37208 = G__37235;
i__37041_37209 = G__37236;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37203);
});})(seq__37004_37199,chunk__37008_37200,count__37009_37201,i__37010_37202,seq__36890,chunk__36892,count__36893,i__36894,new_link_37205,path_match_37204,node_37203,path,map__36889,map__36889__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37204], 0));

goog.dom.insertSiblingAfter(new_link_37205,node_37203);


var G__37237 = seq__37004_37199;
var G__37238 = chunk__37008_37200;
var G__37239 = count__37009_37201;
var G__37240 = (i__37010_37202 + (1));
seq__37004_37199 = G__37237;
chunk__37008_37200 = G__37238;
count__37009_37201 = G__37239;
i__37010_37202 = G__37240;
continue;
} else {
var G__37241 = seq__37004_37199;
var G__37242 = chunk__37008_37200;
var G__37243 = count__37009_37201;
var G__37244 = (i__37010_37202 + (1));
seq__37004_37199 = G__37241;
chunk__37008_37200 = G__37242;
count__37009_37201 = G__37243;
i__37010_37202 = G__37244;
continue;
}
} else {
var G__37245 = seq__37004_37199;
var G__37246 = chunk__37008_37200;
var G__37247 = count__37009_37201;
var G__37248 = (i__37010_37202 + (1));
seq__37004_37199 = G__37245;
chunk__37008_37200 = G__37246;
count__37009_37201 = G__37247;
i__37010_37202 = G__37248;
continue;
}
} else {
var temp__5804__auto___37249 = cljs.core.seq(seq__37004_37199);
if(temp__5804__auto___37249){
var seq__37004_37250__$1 = temp__5804__auto___37249;
if(cljs.core.chunked_seq_QMARK_(seq__37004_37250__$1)){
var c__5568__auto___37251 = cljs.core.chunk_first(seq__37004_37250__$1);
var G__37252 = cljs.core.chunk_rest(seq__37004_37250__$1);
var G__37253 = c__5568__auto___37251;
var G__37254 = cljs.core.count(c__5568__auto___37251);
var G__37255 = (0);
seq__37004_37199 = G__37252;
chunk__37008_37200 = G__37253;
count__37009_37201 = G__37254;
i__37010_37202 = G__37255;
continue;
} else {
var node_37256 = cljs.core.first(seq__37004_37250__$1);
if(cljs.core.not(node_37256.shadow$old)){
var path_match_37257 = shadow.cljs.devtools.client.browser.match_paths(node_37256.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37257)){
var new_link_37258 = (function (){var G__37047 = node_37256.cloneNode(true);
G__37047.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37257),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37047;
})();
(node_37256.shadow$old = true);

(new_link_37258.onload = ((function (seq__37004_37199,chunk__37008_37200,count__37009_37201,i__37010_37202,seq__36890,chunk__36892,count__36893,i__36894,new_link_37258,path_match_37257,node_37256,seq__37004_37250__$1,temp__5804__auto___37249,path,map__36889,map__36889__$1,msg,updates,reload_info){
return (function (e){
var seq__37048_37259 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37050_37260 = null;
var count__37051_37261 = (0);
var i__37052_37262 = (0);
while(true){
if((i__37052_37262 < count__37051_37261)){
var map__37056_37263 = chunk__37050_37260.cljs$core$IIndexed$_nth$arity$2(null,i__37052_37262);
var map__37056_37264__$1 = cljs.core.__destructure_map(map__37056_37263);
var task_37265 = map__37056_37264__$1;
var fn_str_37266 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37056_37264__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37267 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37056_37264__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37268 = goog.getObjectByName(fn_str_37266,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37267)].join(''));

(fn_obj_37268.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37268.cljs$core$IFn$_invoke$arity$2(path,new_link_37258) : fn_obj_37268.call(null,path,new_link_37258));


var G__37269 = seq__37048_37259;
var G__37270 = chunk__37050_37260;
var G__37271 = count__37051_37261;
var G__37272 = (i__37052_37262 + (1));
seq__37048_37259 = G__37269;
chunk__37050_37260 = G__37270;
count__37051_37261 = G__37271;
i__37052_37262 = G__37272;
continue;
} else {
var temp__5804__auto___37273__$1 = cljs.core.seq(seq__37048_37259);
if(temp__5804__auto___37273__$1){
var seq__37048_37274__$1 = temp__5804__auto___37273__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37048_37274__$1)){
var c__5568__auto___37275 = cljs.core.chunk_first(seq__37048_37274__$1);
var G__37276 = cljs.core.chunk_rest(seq__37048_37274__$1);
var G__37277 = c__5568__auto___37275;
var G__37278 = cljs.core.count(c__5568__auto___37275);
var G__37279 = (0);
seq__37048_37259 = G__37276;
chunk__37050_37260 = G__37277;
count__37051_37261 = G__37278;
i__37052_37262 = G__37279;
continue;
} else {
var map__37057_37280 = cljs.core.first(seq__37048_37274__$1);
var map__37057_37281__$1 = cljs.core.__destructure_map(map__37057_37280);
var task_37282 = map__37057_37281__$1;
var fn_str_37283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37057_37281__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37284 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37057_37281__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37285 = goog.getObjectByName(fn_str_37283,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37284)].join(''));

(fn_obj_37285.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37285.cljs$core$IFn$_invoke$arity$2(path,new_link_37258) : fn_obj_37285.call(null,path,new_link_37258));


var G__37286 = cljs.core.next(seq__37048_37274__$1);
var G__37287 = null;
var G__37288 = (0);
var G__37289 = (0);
seq__37048_37259 = G__37286;
chunk__37050_37260 = G__37287;
count__37051_37261 = G__37288;
i__37052_37262 = G__37289;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37256);
});})(seq__37004_37199,chunk__37008_37200,count__37009_37201,i__37010_37202,seq__36890,chunk__36892,count__36893,i__36894,new_link_37258,path_match_37257,node_37256,seq__37004_37250__$1,temp__5804__auto___37249,path,map__36889,map__36889__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37257], 0));

goog.dom.insertSiblingAfter(new_link_37258,node_37256);


var G__37290 = cljs.core.next(seq__37004_37250__$1);
var G__37291 = null;
var G__37292 = (0);
var G__37293 = (0);
seq__37004_37199 = G__37290;
chunk__37008_37200 = G__37291;
count__37009_37201 = G__37292;
i__37010_37202 = G__37293;
continue;
} else {
var G__37294 = cljs.core.next(seq__37004_37250__$1);
var G__37295 = null;
var G__37296 = (0);
var G__37297 = (0);
seq__37004_37199 = G__37294;
chunk__37008_37200 = G__37295;
count__37009_37201 = G__37296;
i__37010_37202 = G__37297;
continue;
}
} else {
var G__37298 = cljs.core.next(seq__37004_37250__$1);
var G__37299 = null;
var G__37300 = (0);
var G__37301 = (0);
seq__37004_37199 = G__37298;
chunk__37008_37200 = G__37299;
count__37009_37201 = G__37300;
i__37010_37202 = G__37301;
continue;
}
}
} else {
}
}
break;
}


var G__37302 = seq__36890;
var G__37303 = chunk__36892;
var G__37304 = count__36893;
var G__37305 = (i__36894 + (1));
seq__36890 = G__37302;
chunk__36892 = G__37303;
count__36893 = G__37304;
i__36894 = G__37305;
continue;
} else {
var G__37306 = seq__36890;
var G__37307 = chunk__36892;
var G__37308 = count__36893;
var G__37309 = (i__36894 + (1));
seq__36890 = G__37306;
chunk__36892 = G__37307;
count__36893 = G__37308;
i__36894 = G__37309;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36890);
if(temp__5804__auto__){
var seq__36890__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36890__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36890__$1);
var G__37310 = cljs.core.chunk_rest(seq__36890__$1);
var G__37311 = c__5568__auto__;
var G__37312 = cljs.core.count(c__5568__auto__);
var G__37313 = (0);
seq__36890 = G__37310;
chunk__36892 = G__37311;
count__36893 = G__37312;
i__36894 = G__37313;
continue;
} else {
var path = cljs.core.first(seq__36890__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37058_37314 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37062_37315 = null;
var count__37063_37316 = (0);
var i__37064_37317 = (0);
while(true){
if((i__37064_37317 < count__37063_37316)){
var node_37318 = chunk__37062_37315.cljs$core$IIndexed$_nth$arity$2(null,i__37064_37317);
if(cljs.core.not(node_37318.shadow$old)){
var path_match_37319 = shadow.cljs.devtools.client.browser.match_paths(node_37318.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37319)){
var new_link_37320 = (function (){var G__37090 = node_37318.cloneNode(true);
G__37090.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37319),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37090;
})();
(node_37318.shadow$old = true);

(new_link_37320.onload = ((function (seq__37058_37314,chunk__37062_37315,count__37063_37316,i__37064_37317,seq__36890,chunk__36892,count__36893,i__36894,new_link_37320,path_match_37319,node_37318,path,seq__36890__$1,temp__5804__auto__,map__36889,map__36889__$1,msg,updates,reload_info){
return (function (e){
var seq__37091_37321 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37093_37322 = null;
var count__37094_37323 = (0);
var i__37095_37324 = (0);
while(true){
if((i__37095_37324 < count__37094_37323)){
var map__37099_37325 = chunk__37093_37322.cljs$core$IIndexed$_nth$arity$2(null,i__37095_37324);
var map__37099_37326__$1 = cljs.core.__destructure_map(map__37099_37325);
var task_37327 = map__37099_37326__$1;
var fn_str_37328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37099_37326__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37099_37326__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37330 = goog.getObjectByName(fn_str_37328,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37329)].join(''));

(fn_obj_37330.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37330.cljs$core$IFn$_invoke$arity$2(path,new_link_37320) : fn_obj_37330.call(null,path,new_link_37320));


var G__37331 = seq__37091_37321;
var G__37332 = chunk__37093_37322;
var G__37333 = count__37094_37323;
var G__37334 = (i__37095_37324 + (1));
seq__37091_37321 = G__37331;
chunk__37093_37322 = G__37332;
count__37094_37323 = G__37333;
i__37095_37324 = G__37334;
continue;
} else {
var temp__5804__auto___37335__$1 = cljs.core.seq(seq__37091_37321);
if(temp__5804__auto___37335__$1){
var seq__37091_37336__$1 = temp__5804__auto___37335__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37091_37336__$1)){
var c__5568__auto___37337 = cljs.core.chunk_first(seq__37091_37336__$1);
var G__37338 = cljs.core.chunk_rest(seq__37091_37336__$1);
var G__37339 = c__5568__auto___37337;
var G__37340 = cljs.core.count(c__5568__auto___37337);
var G__37341 = (0);
seq__37091_37321 = G__37338;
chunk__37093_37322 = G__37339;
count__37094_37323 = G__37340;
i__37095_37324 = G__37341;
continue;
} else {
var map__37100_37342 = cljs.core.first(seq__37091_37336__$1);
var map__37100_37343__$1 = cljs.core.__destructure_map(map__37100_37342);
var task_37344 = map__37100_37343__$1;
var fn_str_37345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37100_37343__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37346 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37100_37343__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37347 = goog.getObjectByName(fn_str_37345,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37346)].join(''));

(fn_obj_37347.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37347.cljs$core$IFn$_invoke$arity$2(path,new_link_37320) : fn_obj_37347.call(null,path,new_link_37320));


var G__37348 = cljs.core.next(seq__37091_37336__$1);
var G__37349 = null;
var G__37350 = (0);
var G__37351 = (0);
seq__37091_37321 = G__37348;
chunk__37093_37322 = G__37349;
count__37094_37323 = G__37350;
i__37095_37324 = G__37351;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37318);
});})(seq__37058_37314,chunk__37062_37315,count__37063_37316,i__37064_37317,seq__36890,chunk__36892,count__36893,i__36894,new_link_37320,path_match_37319,node_37318,path,seq__36890__$1,temp__5804__auto__,map__36889,map__36889__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37319], 0));

goog.dom.insertSiblingAfter(new_link_37320,node_37318);


var G__37352 = seq__37058_37314;
var G__37353 = chunk__37062_37315;
var G__37354 = count__37063_37316;
var G__37355 = (i__37064_37317 + (1));
seq__37058_37314 = G__37352;
chunk__37062_37315 = G__37353;
count__37063_37316 = G__37354;
i__37064_37317 = G__37355;
continue;
} else {
var G__37356 = seq__37058_37314;
var G__37357 = chunk__37062_37315;
var G__37358 = count__37063_37316;
var G__37359 = (i__37064_37317 + (1));
seq__37058_37314 = G__37356;
chunk__37062_37315 = G__37357;
count__37063_37316 = G__37358;
i__37064_37317 = G__37359;
continue;
}
} else {
var G__37360 = seq__37058_37314;
var G__37361 = chunk__37062_37315;
var G__37362 = count__37063_37316;
var G__37363 = (i__37064_37317 + (1));
seq__37058_37314 = G__37360;
chunk__37062_37315 = G__37361;
count__37063_37316 = G__37362;
i__37064_37317 = G__37363;
continue;
}
} else {
var temp__5804__auto___37364__$1 = cljs.core.seq(seq__37058_37314);
if(temp__5804__auto___37364__$1){
var seq__37058_37365__$1 = temp__5804__auto___37364__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37058_37365__$1)){
var c__5568__auto___37366 = cljs.core.chunk_first(seq__37058_37365__$1);
var G__37367 = cljs.core.chunk_rest(seq__37058_37365__$1);
var G__37368 = c__5568__auto___37366;
var G__37369 = cljs.core.count(c__5568__auto___37366);
var G__37370 = (0);
seq__37058_37314 = G__37367;
chunk__37062_37315 = G__37368;
count__37063_37316 = G__37369;
i__37064_37317 = G__37370;
continue;
} else {
var node_37371 = cljs.core.first(seq__37058_37365__$1);
if(cljs.core.not(node_37371.shadow$old)){
var path_match_37372 = shadow.cljs.devtools.client.browser.match_paths(node_37371.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37372)){
var new_link_37373 = (function (){var G__37101 = node_37371.cloneNode(true);
G__37101.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37372),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37101;
})();
(node_37371.shadow$old = true);

(new_link_37373.onload = ((function (seq__37058_37314,chunk__37062_37315,count__37063_37316,i__37064_37317,seq__36890,chunk__36892,count__36893,i__36894,new_link_37373,path_match_37372,node_37371,seq__37058_37365__$1,temp__5804__auto___37364__$1,path,seq__36890__$1,temp__5804__auto__,map__36889,map__36889__$1,msg,updates,reload_info){
return (function (e){
var seq__37102_37374 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37104_37375 = null;
var count__37105_37376 = (0);
var i__37106_37377 = (0);
while(true){
if((i__37106_37377 < count__37105_37376)){
var map__37110_37378 = chunk__37104_37375.cljs$core$IIndexed$_nth$arity$2(null,i__37106_37377);
var map__37110_37379__$1 = cljs.core.__destructure_map(map__37110_37378);
var task_37380 = map__37110_37379__$1;
var fn_str_37381 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37110_37379__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37110_37379__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37383 = goog.getObjectByName(fn_str_37381,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37382)].join(''));

(fn_obj_37383.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37383.cljs$core$IFn$_invoke$arity$2(path,new_link_37373) : fn_obj_37383.call(null,path,new_link_37373));


var G__37384 = seq__37102_37374;
var G__37385 = chunk__37104_37375;
var G__37386 = count__37105_37376;
var G__37387 = (i__37106_37377 + (1));
seq__37102_37374 = G__37384;
chunk__37104_37375 = G__37385;
count__37105_37376 = G__37386;
i__37106_37377 = G__37387;
continue;
} else {
var temp__5804__auto___37388__$2 = cljs.core.seq(seq__37102_37374);
if(temp__5804__auto___37388__$2){
var seq__37102_37389__$1 = temp__5804__auto___37388__$2;
if(cljs.core.chunked_seq_QMARK_(seq__37102_37389__$1)){
var c__5568__auto___37390 = cljs.core.chunk_first(seq__37102_37389__$1);
var G__37391 = cljs.core.chunk_rest(seq__37102_37389__$1);
var G__37392 = c__5568__auto___37390;
var G__37393 = cljs.core.count(c__5568__auto___37390);
var G__37394 = (0);
seq__37102_37374 = G__37391;
chunk__37104_37375 = G__37392;
count__37105_37376 = G__37393;
i__37106_37377 = G__37394;
continue;
} else {
var map__37111_37395 = cljs.core.first(seq__37102_37389__$1);
var map__37111_37396__$1 = cljs.core.__destructure_map(map__37111_37395);
var task_37397 = map__37111_37396__$1;
var fn_str_37398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37111_37396__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37111_37396__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37400 = goog.getObjectByName(fn_str_37398,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37399)].join(''));

(fn_obj_37400.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37400.cljs$core$IFn$_invoke$arity$2(path,new_link_37373) : fn_obj_37400.call(null,path,new_link_37373));


var G__37401 = cljs.core.next(seq__37102_37389__$1);
var G__37402 = null;
var G__37403 = (0);
var G__37404 = (0);
seq__37102_37374 = G__37401;
chunk__37104_37375 = G__37402;
count__37105_37376 = G__37403;
i__37106_37377 = G__37404;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37371);
});})(seq__37058_37314,chunk__37062_37315,count__37063_37316,i__37064_37317,seq__36890,chunk__36892,count__36893,i__36894,new_link_37373,path_match_37372,node_37371,seq__37058_37365__$1,temp__5804__auto___37364__$1,path,seq__36890__$1,temp__5804__auto__,map__36889,map__36889__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37372], 0));

goog.dom.insertSiblingAfter(new_link_37373,node_37371);


var G__37405 = cljs.core.next(seq__37058_37365__$1);
var G__37406 = null;
var G__37407 = (0);
var G__37408 = (0);
seq__37058_37314 = G__37405;
chunk__37062_37315 = G__37406;
count__37063_37316 = G__37407;
i__37064_37317 = G__37408;
continue;
} else {
var G__37409 = cljs.core.next(seq__37058_37365__$1);
var G__37410 = null;
var G__37411 = (0);
var G__37412 = (0);
seq__37058_37314 = G__37409;
chunk__37062_37315 = G__37410;
count__37063_37316 = G__37411;
i__37064_37317 = G__37412;
continue;
}
} else {
var G__37413 = cljs.core.next(seq__37058_37365__$1);
var G__37414 = null;
var G__37415 = (0);
var G__37416 = (0);
seq__37058_37314 = G__37413;
chunk__37062_37315 = G__37414;
count__37063_37316 = G__37415;
i__37064_37317 = G__37416;
continue;
}
}
} else {
}
}
break;
}


var G__37417 = cljs.core.next(seq__36890__$1);
var G__37418 = null;
var G__37419 = (0);
var G__37420 = (0);
seq__36890 = G__37417;
chunk__36892 = G__37418;
count__36893 = G__37419;
i__36894 = G__37420;
continue;
} else {
var G__37421 = cljs.core.next(seq__36890__$1);
var G__37422 = null;
var G__37423 = (0);
var G__37424 = (0);
seq__36890 = G__37421;
chunk__36892 = G__37422;
count__36893 = G__37423;
i__36894 = G__37424;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37112){
var map__37113 = p__37112;
var map__37113__$1 = cljs.core.__destructure_map(map__37113);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37113__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37114){
var map__37115 = p__37114;
var map__37115__$1 = cljs.core.__destructure_map(map__37115);
var _ = map__37115__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37115__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37116,done,error){
var map__37117 = p__37116;
var map__37117__$1 = cljs.core.__destructure_map(map__37117);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37117__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37118,done,error){
var map__37119 = p__37118;
var map__37119__$1 = cljs.core.__destructure_map(map__37119);
var msg = map__37119__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37119__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37119__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37119__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37120){
var map__37121 = p__37120;
var map__37121__$1 = cljs.core.__destructure_map(map__37121);
var src = map__37121__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37121__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37122 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37122) : done.call(null,G__37122));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37123){
var map__37124 = p__37123;
var map__37124__$1 = cljs.core.__destructure_map(map__37124);
var msg__$1 = map__37124__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37124__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37125){var ex = e37125;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37126){
var map__37127 = p__37126;
var map__37127__$1 = cljs.core.__destructure_map(map__37127);
var env = map__37127__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37127__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37128){
var map__37129 = p__37128;
var map__37129__$1 = cljs.core.__destructure_map(map__37129);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37129__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37129__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__37130){
var map__37131 = p__37130;
var map__37131__$1 = cljs.core.__destructure_map(map__37131);
var svc = map__37131__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37131__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

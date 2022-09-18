goog.provide('helix.core');
goog.scope(function(){
  helix.core.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
if((typeof Symbol !== 'undefined')){
(Symbol.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(Symbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (sym,writer,_){
var sym__$1 = this;
return cljs.core._write(writer,["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym__$1.toString()),"\""].join(''));
}));
} else {
}
/**
 * React.Fragment. See `helix.core/<>` for macro version.
 */
helix.core.Fragment = module$node_modules$react$index.Fragment;
/**
 * React.Suspense. See `helix.core/suspense` for macro version.
 */
helix.core.Suspense = module$node_modules$react$index.Suspense;
helix.core.create_element = module$node_modules$react$index.createElement;
/**
 * React.createContext
 */
helix.core.create_context = module$node_modules$react$index.createContext;
helix.core.get_react = (function helix$core$get_react(){
return module$node_modules$react$index;
});
/**
 * Create a new React element from a valid React type.
 * 
 *   Example:
 *   ```
 *   ($ MyComponent
 * "child1"
 * ($ "span"
 *   {:style {:color "green"}}
 *   "child2" ))
 *   ```
 */
helix.core.$ = (function helix$core$$(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41018 = arguments.length;
var i__5770__auto___41019 = (0);
while(true){
if((i__5770__auto___41019 < len__5769__auto___41018)){
args__5775__auto__.push((arguments[i__5770__auto___41019]));

var G__41021 = (i__5770__auto___41019 + (1));
i__5770__auto___41019 = G__41021;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return helix.core.$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(helix.core.$.cljs$core$IFn$_invoke$arity$variadic = (function (type,args){
var _QMARK_p = cljs.core.first(args);
var _QMARK_c = cljs.core.rest(args);
var native_QMARK_ = (function (){var or__5045__auto__ = (type instanceof cljs.core.Keyword);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = typeof type === 'string';
if(or__5045__auto____$1){
return or__5045__auto____$1;
} else {
return new cljs.core.Keyword(null,"native","native",-613060878).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(type));
}
}
})();
var type_SINGLEQUOTE_ = (((type instanceof cljs.core.Keyword))?cljs.core.name(type):type);
if(cljs.core.map_QMARK_(_QMARK_p)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(helix.core.create_element,type_SINGLEQUOTE_,(cljs.core.truth_(native_QMARK_)?helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$1(_QMARK_p):helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(_QMARK_p)),_QMARK_c);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(helix.core.create_element,type_SINGLEQUOTE_,null,args);
}
}));

(helix.core.$.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(helix.core.$.cljs$lang$applyTo = (function (seq40950){
var G__40951 = cljs.core.first(seq40950);
var seq40950__$1 = cljs.core.next(seq40950);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40951,seq40950__$1);
}));

/**
 * Dynamically create a new React element from a valid React type.
 * 
 *   `$` can typically be faster, because it will statically process the arguments
 *   at macro-time if possible.
 * 
 *   Example:
 *   ```
 *   ($$ MyComponent
 * "child1"
 * ($$ "span"
 *   {:style {:color "green"}}
 *   "child2" ))
 *   ```
 */
helix.core.$$ = helix.core.$;

/**
 * @interface
 */
helix.core.IExtractType = function(){};

var helix$core$IExtractType$_type$dyn_41023 = (function (factory){
var x__5393__auto__ = (((factory == null))?null:factory);
var m__5394__auto__ = (helix.core._type[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(factory) : m__5394__auto__.call(null,factory));
} else {
var m__5392__auto__ = (helix.core._type["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(factory) : m__5392__auto__.call(null,factory));
} else {
throw cljs.core.missing_protocol("IExtractType.-type",factory);
}
}
});
/**
 * Extracts the underlying type from the factory function.
 */
helix.core._type = (function helix$core$_type(factory){
if((((!((factory == null)))) && ((!((factory.helix$core$IExtractType$_type$arity$1 == null)))))){
return factory.helix$core$IExtractType$_type$arity$1(factory);
} else {
return helix$core$IExtractType$_type$dyn_41023(factory);
}
});

/**
 * Geven a factory function created by `helix.core/factory` or `cljs-factory`,
 *   returns the original component that the factory creates elements of.
 */
helix.core.type = (function helix$core$type(f){
return helix.core._type(f);
});
/**
 * Creates a factory function for a React component, that when called returns an
 *   element with the props and children passed to the factory.
 * 
 *   Use `helix.core/type` to extract the original React component.
 */
helix.core.factory = (function helix$core$factory(type){
var x40968 = (function() { 
var helix$core$factory_$_factory__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(helix.core.$,type,args);
};
var helix$core$factory_$_factory = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41024__i = 0, G__41024__a = new Array(arguments.length -  0);
while (G__41024__i < G__41024__a.length) {G__41024__a[G__41024__i] = arguments[G__41024__i + 0]; ++G__41024__i;}
  args = new cljs.core.IndexedSeq(G__41024__a,0,null);
} 
return helix$core$factory_$_factory__delegate.call(this,args);};
helix$core$factory_$_factory.cljs$lang$maxFixedArity = 0;
helix$core$factory_$_factory.cljs$lang$applyTo = (function (arglist__41025){
var args = cljs.core.seq(arglist__41025);
return helix$core$factory_$_factory__delegate(args);
});
helix$core$factory_$_factory.cljs$core$IFn$_invoke$arity$variadic = helix$core$factory_$_factory__delegate;
return helix$core$factory_$_factory;
})()
;
(x40968.helix$core$IExtractType$ = cljs.core.PROTOCOL_SENTINEL);

(x40968.helix$core$IExtractType$_type$arity$1 = (function (_){
var ___$1 = this;
return type;
}));

return x40968;
});
/**
 * Creates a factory function for a component defined via `defnc`, that when
 *   called returns an element with the props and children passed to the factory.
 *   Slightly more performant than `factory` when used with a helix component.
 * 
 *   Use `helix.core/type` to extract the original component this was called with.
 */
helix.core.cljs_factory = (function helix$core$cljs_factory(type){
var x40977 = (function() { 
var helix$core$cljs_factory_$_factory__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var props = cljs.core.first(args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,type,({"helix/props": cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ref","ref",1289896967)], 0)), "key": cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"key","key",-1516042587),undefined), "ref": cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),undefined)}),cljs.core.rest(args));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,type,({}),args);
}
};
var helix$core$cljs_factory_$_factory = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41033__i = 0, G__41033__a = new Array(arguments.length -  0);
while (G__41033__i < G__41033__a.length) {G__41033__a[G__41033__i] = arguments[G__41033__i + 0]; ++G__41033__i;}
  args = new cljs.core.IndexedSeq(G__41033__a,0,null);
} 
return helix$core$cljs_factory_$_factory__delegate.call(this,args);};
helix$core$cljs_factory_$_factory.cljs$lang$maxFixedArity = 0;
helix$core$cljs_factory_$_factory.cljs$lang$applyTo = (function (arglist__41034){
var args = cljs.core.seq(arglist__41034);
return helix$core$cljs_factory_$_factory__delegate(args);
});
helix$core$cljs_factory_$_factory.cljs$core$IFn$_invoke$arity$variadic = helix$core$cljs_factory_$_factory__delegate;
return helix$core$cljs_factory_$_factory;
})()
;
(x40977.helix$core$IExtractType$ = cljs.core.PROTOCOL_SENTINEL);

(x40977.helix$core$IExtractType$_type$arity$1 = (function (_){
var ___$1 = this;
return type;
}));

return x40977;
});
helix.core.assoc_some = (function helix$core$assoc_some(m,k,x){
if((!((x == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,x);
} else {
return m;
}
});
/**
 * A helper function for turning a props object into a CLJS map. Works with both
 *   factory functions (which stores a map in a single key, "helix/props") and
 *   normal JS objects.
 *   Mostly used internally by helix, but can be useful when writing HOC.
 */
helix.core.extract_cljs_props = (function helix$core$extract_cljs_props(o){
if(((goog.DEBUG) && (((cljs.core.map_QMARK_(o)) || ((o == null)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Props received were a map. This probably means you're calling your component as a function.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"props","props",453281727),o], null));
} else {
}

var temp__5802__auto__ = helix.core.goog$module$goog$object.get(o,"helix/props");
if(cljs.core.truth_(temp__5802__auto__)){
var props = temp__5802__auto__;
return helix.core.assoc_some(props,new cljs.core.Keyword(null,"children","children",-940561982),helix.core.goog$module$goog$object.get(o,"children"));
} else {
return cljs_bean.core.bean.cljs$core$IFn$_invoke$arity$1(o);
}
});
helix.core.props_kvs_identical_QMARK_ = (function helix$core$props_kvs_identical_QMARK_(prev,cur){
var prev_props = helix.core.extract_cljs_props(prev);
var cur_props = helix.core.extract_cljs_props(cur);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(prev_props),cljs.core.count(cur_props))) && (cljs.core.every_QMARK_((function (p1__40990_SHARP_){
return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(prev_props,p1__40990_SHARP_) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(cur_props,p1__40990_SHARP_));
}),cljs.core.keys(cur_props))));
});
/**
 * Like React.memo, but passes props to `compare` as CLJS map-likes instead of
 *   JS objects.
 *   `compare` should return true if props are equal, and false if not.
 */
helix.core.memo = (function helix$core$memo(var_args){
var G__41000 = arguments.length;
switch (G__41000) {
case 1:
return helix.core.memo.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return helix.core.memo.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(helix.core.memo.cljs$core$IFn$_invoke$arity$1 = (function (component){
return module$node_modules$react$index.memo(component,helix.core.props_kvs_identical_QMARK_);
}));

(helix.core.memo.cljs$core$IFn$_invoke$arity$2 = (function (component,compare){
return module$node_modules$react$index.memo(component,(function helix$core$memo_compare(o,o_SINGLEQUOTE_){
var G__41003 = helix.core.extract_cljs_props(o);
var G__41004 = helix.core.extract_cljs_props(o_SINGLEQUOTE_);
return (compare.cljs$core$IFn$_invoke$arity$2 ? compare.cljs$core$IFn$_invoke$arity$2(G__41003,G__41004) : compare.call(null,G__41003,G__41004));
}));
}));

(helix.core.memo.cljs$lang$maxFixedArity = 2);

/**
 * Helper function for creating a class component. See `defcomponent`.
 */
helix.core.create_component = (function helix$core$create_component(spec,statics){
var render = spec.render;
var render_SINGLEQUOTE_ = (function (this$){
var G__41006 = this$;
var G__41007 = helix.core.extract_cljs_props(this$.props);
var G__41008 = this$.state;
return (render.cljs$core$IFn$_invoke$arity$3 ? render.cljs$core$IFn$_invoke$arity$3(G__41006,G__41007,G__41008) : render.call(null,G__41006,G__41007,G__41008));
});
helix.core.goog$module$goog$object.set(spec,"render",render_SINGLEQUOTE_);

return helix.impl.classes.createComponent(module$node_modules$react$index.Component,spec,statics);
});
/**
 * Registers a component with the React Fresh runtime.
 *   `type` is the component function, and `id` is the unique ID assigned to it
 *   (e.g. component name) for cache invalidation.
 */
helix.core.register_BANG_ = (function helix$core$register_BANG_(type,id){
if((!((window.$$Register$$ == null)))){
return window.$$Register$$(type,id);
} else {
return null;
}
});
helix.core.signature_BANG_ = (function helix$core$signature_BANG_(){
var and__5043__auto__ = (!((window.$$Signature$$ == null)));
if(and__5043__auto__){
return window.$$Signature$$();
} else {
return and__5043__auto__;
}
});

//# sourceMappingURL=helix.core.js.map

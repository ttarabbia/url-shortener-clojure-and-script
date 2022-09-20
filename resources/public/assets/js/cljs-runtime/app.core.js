goog.provide('app.core');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});

app.core.app = (function (){var G__36645 = (function app$core$app_render(props__31095__auto__,maybe_ref__31096__auto__){
var vec__36646 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__31095__auto__),maybe_ref__31096__auto__], null);

var vec__36649 = helix.hooks.use_state(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"slug","slug",2029314850),null,new cljs.core.Keyword(null,"url","url",276297046),""], null));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36649,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36649,(1),null);
var fetch_slug = (function (){
return promesa.protocols._bind(promesa.protocols._promise(null),(function (___33031__auto__){
return promesa.protocols._bind(promesa.protocols._promise(fetch("/api/redirect/",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Content-Type","Content-Type",-692731875),"application/json"], null),new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(({"url": new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(state)}))], null)))),(function (_response){
return promesa.protocols._bind(promesa.protocols._promise(_response.json()),(function (response){
return promesa.protocols._bind(promesa.protocols._promise(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))),(function (data){
return promesa.protocols._bind(promesa.protocols._promise(null),(function (___33016__auto__){
return promesa.protocols._promise((function (){var G__36652 = cljs.core.assoc;
var G__36653 = new cljs.core.Keyword(null,"slug","slug",2029314850);
var G__36654 = new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(data);
return (set_state.cljs$core$IFn$_invoke$arity$3 ? set_state.cljs$core$IFn$_invoke$arity$3(G__36652,G__36653,G__36654) : set_state.call(null,G__36652,G__36653,G__36654));
})());
}));
}));
}));
}));
}));
});
var redirect_link = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.origin),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(state)),"/"].join('');
return helix.core.get_react().createElement("div",(function (){var obj36656 = ({"className":"grid place-items-center h-screen bg-pink-100"});
return obj36656;
})(),(cljs.core.truth_(new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(state))?helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("a",(function (){var obj36658 = ({"href":redirect_link});
return obj36658;
})(),redirect_link)):helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("h1",null,"Enter your URL here"),helix.core.get_react().createElement("input",(function (){var obj36660 = ({"value":helix.impl.props.or_undefined(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(state)),"onChange":(function (p1__36643_SHARP_){
var G__36661 = cljs.core.assoc;
var G__36662 = new cljs.core.Keyword(null,"url","url",276297046);
var G__36663 = p1__36643_SHARP_.target.value;
return (set_state.cljs$core$IFn$_invoke$arity$3 ? set_state.cljs$core$IFn$_invoke$arity$3(G__36661,G__36662,G__36663) : set_state.call(null,G__36661,G__36662,G__36663));
}),"className":"form-control border border-solid border-gray-600","placeholder":"Enter URL"});
return obj36660;
})()),helix.core.get_react().createElement("button",(function (){var obj36665 = ({"onClick":(function (){
return fetch_slug();
}),"className":"border-2 rounded px-4 font-extrabold uppercase bg-blue-50"});
return obj36665;
})(),"shorten Url"))));
});
if(goog.DEBUG === true){
var G__36666 = G__36645;
(G__36666.displayName = "app.core/app");

return G__36666;
} else {
return G__36645;
}
})();



app.core.init = (function app$core$init(){
var root = module$node_modules$react_dom$client.createRoot(document.getElementById("app"));
return root.render(helix.core.get_react().createElement(app.core.app,null));
});
goog.exportSymbol('app.core.init', app.core.init);

//# sourceMappingURL=app.core.js.map

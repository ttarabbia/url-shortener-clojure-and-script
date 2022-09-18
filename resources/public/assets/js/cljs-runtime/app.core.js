goog.provide('app.core');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});

/**
 * A component which greets a user.
 */
app.core.greeting = (function (){var G__32152 = (function app$core$greeting_render(props__31070__auto__,maybe_ref__31071__auto__){
var vec__32153 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__31070__auto__),maybe_ref__31071__auto__], null);
var map__32156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32153,(0),null);
var map__32156__$1 = cljs.core.__destructure_map(map__32156);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32156__$1,new cljs.core.Keyword(null,"name","name",1843675177));

return helix.core.get_react().createElement("div",null,"Hello, ",helix.core.get_react().createElement("strong",null,name),"!");
});
if(goog.DEBUG === true){
var G__32157 = G__32152;
(G__32157.displayName = "app.core/greeting");

return G__32157;
} else {
return G__32152;
}
})();




app.core.app = (function (){var G__32160 = (function app$core$app_render(props__31070__auto__,maybe_ref__31071__auto__){
var vec__32161 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__31070__auto__),maybe_ref__31071__auto__], null);

var vec__32164 = helix.hooks.use_state(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Helix User"], null));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32164,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32164,(1),null);
return helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("h1",null,"Welcome!"),helix.core.get_react().createElement(app.core.greeting,(function (){var obj32168 = ({"name":new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(state)});
return obj32168;
})()),helix.core.get_react().createElement("input",(function (){var obj32170 = ({"value":helix.impl.props.or_undefined(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(state)),"onChange":(function (p1__32158_SHARP_){
var G__32171 = cljs.core.assoc;
var G__32172 = new cljs.core.Keyword(null,"name","name",1843675177);
var G__32173 = p1__32158_SHARP_.target.value;
return (set_state.cljs$core$IFn$_invoke$arity$3 ? set_state.cljs$core$IFn$_invoke$arity$3(G__32171,G__32172,G__32173) : set_state.call(null,G__32171,G__32172,G__32173));
})});
return obj32170;
})()));
});
if(goog.DEBUG === true){
var G__32174 = G__32160;
(G__32174.displayName = "app.core/app");

return G__32174;
} else {
return G__32160;
}
})();



if((typeof app !== 'undefined') && (typeof app.core !== 'undefined') && (typeof app.core.root !== 'undefined')){
} else {
app.core.root = module$node_modules$react_dom$client.createRoot(document.getElementById("app"));
}
app.core.root.render(helix.core.get_react().createElement(app.core.app,null));

//# sourceMappingURL=app.core.js.map

goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_38251 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_38251(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_38254 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_38254(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__37340 = coll;
var G__37341 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__37340,G__37341) : shadow.dom.lazy_native_coll_seq.call(null,G__37340,G__37341));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__37510 = arguments.length;
switch (G__37510) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__37514 = arguments.length;
switch (G__37514) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__37517 = arguments.length;
switch (G__37517) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__37533 = arguments.length;
switch (G__37533) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__37537 = arguments.length;
switch (G__37537) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__37545 = arguments.length;
switch (G__37545) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e37547){if((e37547 instanceof Object)){
var e = e37547;
return console.log("didnt support attachEvent",el,e);
} else {
throw e37547;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__37548 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__37549 = null;
var count__37550 = (0);
var i__37551 = (0);
while(true){
if((i__37551 < count__37550)){
var el = chunk__37549.cljs$core$IIndexed$_nth$arity$2(null,i__37551);
var handler_38281__$1 = ((function (seq__37548,chunk__37549,count__37550,i__37551,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37548,chunk__37549,count__37550,i__37551,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_38281__$1);


var G__38282 = seq__37548;
var G__38283 = chunk__37549;
var G__38284 = count__37550;
var G__38285 = (i__37551 + (1));
seq__37548 = G__38282;
chunk__37549 = G__38283;
count__37550 = G__38284;
i__37551 = G__38285;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37548);
if(temp__5804__auto__){
var seq__37548__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37548__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37548__$1);
var G__38286 = cljs.core.chunk_rest(seq__37548__$1);
var G__38287 = c__5568__auto__;
var G__38288 = cljs.core.count(c__5568__auto__);
var G__38289 = (0);
seq__37548 = G__38286;
chunk__37549 = G__38287;
count__37550 = G__38288;
i__37551 = G__38289;
continue;
} else {
var el = cljs.core.first(seq__37548__$1);
var handler_38290__$1 = ((function (seq__37548,chunk__37549,count__37550,i__37551,el,seq__37548__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37548,chunk__37549,count__37550,i__37551,el,seq__37548__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_38290__$1);


var G__38291 = cljs.core.next(seq__37548__$1);
var G__38292 = null;
var G__38293 = (0);
var G__38294 = (0);
seq__37548 = G__38291;
chunk__37549 = G__38292;
count__37550 = G__38293;
i__37551 = G__38294;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__37564 = arguments.length;
switch (G__37564) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__37571 = cljs.core.seq(events);
var chunk__37572 = null;
var count__37573 = (0);
var i__37574 = (0);
while(true){
if((i__37574 < count__37573)){
var vec__37623 = chunk__37572.cljs$core$IIndexed$_nth$arity$2(null,i__37574);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37623,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37623,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38299 = seq__37571;
var G__38300 = chunk__37572;
var G__38301 = count__37573;
var G__38302 = (i__37574 + (1));
seq__37571 = G__38299;
chunk__37572 = G__38300;
count__37573 = G__38301;
i__37574 = G__38302;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37571);
if(temp__5804__auto__){
var seq__37571__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37571__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37571__$1);
var G__38304 = cljs.core.chunk_rest(seq__37571__$1);
var G__38305 = c__5568__auto__;
var G__38306 = cljs.core.count(c__5568__auto__);
var G__38307 = (0);
seq__37571 = G__38304;
chunk__37572 = G__38305;
count__37573 = G__38306;
i__37574 = G__38307;
continue;
} else {
var vec__37630 = cljs.core.first(seq__37571__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37630,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37630,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38308 = cljs.core.next(seq__37571__$1);
var G__38309 = null;
var G__38310 = (0);
var G__38311 = (0);
seq__37571 = G__38308;
chunk__37572 = G__38309;
count__37573 = G__38310;
i__37574 = G__38311;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__37636 = cljs.core.seq(styles);
var chunk__37637 = null;
var count__37638 = (0);
var i__37639 = (0);
while(true){
if((i__37639 < count__37638)){
var vec__37653 = chunk__37637.cljs$core$IIndexed$_nth$arity$2(null,i__37639);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37653,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37653,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__38315 = seq__37636;
var G__38316 = chunk__37637;
var G__38317 = count__37638;
var G__38318 = (i__37639 + (1));
seq__37636 = G__38315;
chunk__37637 = G__38316;
count__37638 = G__38317;
i__37639 = G__38318;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37636);
if(temp__5804__auto__){
var seq__37636__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37636__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37636__$1);
var G__38319 = cljs.core.chunk_rest(seq__37636__$1);
var G__38320 = c__5568__auto__;
var G__38321 = cljs.core.count(c__5568__auto__);
var G__38322 = (0);
seq__37636 = G__38319;
chunk__37637 = G__38320;
count__37638 = G__38321;
i__37639 = G__38322;
continue;
} else {
var vec__37657 = cljs.core.first(seq__37636__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37657,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37657,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__38324 = cljs.core.next(seq__37636__$1);
var G__38325 = null;
var G__38326 = (0);
var G__38327 = (0);
seq__37636 = G__38324;
chunk__37637 = G__38325;
count__37638 = G__38326;
i__37639 = G__38327;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__37660_38329 = key;
var G__37660_38330__$1 = (((G__37660_38329 instanceof cljs.core.Keyword))?G__37660_38329.fqn:null);
switch (G__37660_38330__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_38337 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_38337,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_38337,"aria-");
}
})())){
el.setAttribute(ks_38337,value);
} else {
(el[ks_38337] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__37692){
var map__37693 = p__37692;
var map__37693__$1 = cljs.core.__destructure_map(map__37693);
var props = map__37693__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37693__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__37696 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37696,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37696,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37696,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__37701 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__37701,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__37701;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__37706 = arguments.length;
switch (G__37706) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__37713){
var vec__37714 = p__37713;
var seq__37715 = cljs.core.seq(vec__37714);
var first__37716 = cljs.core.first(seq__37715);
var seq__37715__$1 = cljs.core.next(seq__37715);
var nn = first__37716;
var first__37716__$1 = cljs.core.first(seq__37715__$1);
var seq__37715__$2 = cljs.core.next(seq__37715__$1);
var np = first__37716__$1;
var nc = seq__37715__$2;
var node = vec__37714;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37719 = nn;
var G__37720 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37719,G__37720) : create_fn.call(null,G__37719,G__37720));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37722 = nn;
var G__37723 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37722,G__37723) : create_fn.call(null,G__37722,G__37723));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__37726 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37726,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37726,(1),null);
var seq__37729_38356 = cljs.core.seq(node_children);
var chunk__37730_38357 = null;
var count__37731_38358 = (0);
var i__37732_38359 = (0);
while(true){
if((i__37732_38359 < count__37731_38358)){
var child_struct_38362 = chunk__37730_38357.cljs$core$IIndexed$_nth$arity$2(null,i__37732_38359);
var children_38363 = shadow.dom.dom_node(child_struct_38362);
if(cljs.core.seq_QMARK_(children_38363)){
var seq__37766_38364 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38363));
var chunk__37768_38365 = null;
var count__37769_38366 = (0);
var i__37770_38367 = (0);
while(true){
if((i__37770_38367 < count__37769_38366)){
var child_38369 = chunk__37768_38365.cljs$core$IIndexed$_nth$arity$2(null,i__37770_38367);
if(cljs.core.truth_(child_38369)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38369);


var G__38370 = seq__37766_38364;
var G__38371 = chunk__37768_38365;
var G__38372 = count__37769_38366;
var G__38373 = (i__37770_38367 + (1));
seq__37766_38364 = G__38370;
chunk__37768_38365 = G__38371;
count__37769_38366 = G__38372;
i__37770_38367 = G__38373;
continue;
} else {
var G__38375 = seq__37766_38364;
var G__38376 = chunk__37768_38365;
var G__38377 = count__37769_38366;
var G__38378 = (i__37770_38367 + (1));
seq__37766_38364 = G__38375;
chunk__37768_38365 = G__38376;
count__37769_38366 = G__38377;
i__37770_38367 = G__38378;
continue;
}
} else {
var temp__5804__auto___38379 = cljs.core.seq(seq__37766_38364);
if(temp__5804__auto___38379){
var seq__37766_38381__$1 = temp__5804__auto___38379;
if(cljs.core.chunked_seq_QMARK_(seq__37766_38381__$1)){
var c__5568__auto___38383 = cljs.core.chunk_first(seq__37766_38381__$1);
var G__38384 = cljs.core.chunk_rest(seq__37766_38381__$1);
var G__38385 = c__5568__auto___38383;
var G__38386 = cljs.core.count(c__5568__auto___38383);
var G__38387 = (0);
seq__37766_38364 = G__38384;
chunk__37768_38365 = G__38385;
count__37769_38366 = G__38386;
i__37770_38367 = G__38387;
continue;
} else {
var child_38390 = cljs.core.first(seq__37766_38381__$1);
if(cljs.core.truth_(child_38390)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38390);


var G__38391 = cljs.core.next(seq__37766_38381__$1);
var G__38392 = null;
var G__38393 = (0);
var G__38394 = (0);
seq__37766_38364 = G__38391;
chunk__37768_38365 = G__38392;
count__37769_38366 = G__38393;
i__37770_38367 = G__38394;
continue;
} else {
var G__38395 = cljs.core.next(seq__37766_38381__$1);
var G__38396 = null;
var G__38397 = (0);
var G__38398 = (0);
seq__37766_38364 = G__38395;
chunk__37768_38365 = G__38396;
count__37769_38366 = G__38397;
i__37770_38367 = G__38398;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38363);
}


var G__38399 = seq__37729_38356;
var G__38400 = chunk__37730_38357;
var G__38401 = count__37731_38358;
var G__38402 = (i__37732_38359 + (1));
seq__37729_38356 = G__38399;
chunk__37730_38357 = G__38400;
count__37731_38358 = G__38401;
i__37732_38359 = G__38402;
continue;
} else {
var temp__5804__auto___38403 = cljs.core.seq(seq__37729_38356);
if(temp__5804__auto___38403){
var seq__37729_38404__$1 = temp__5804__auto___38403;
if(cljs.core.chunked_seq_QMARK_(seq__37729_38404__$1)){
var c__5568__auto___38405 = cljs.core.chunk_first(seq__37729_38404__$1);
var G__38407 = cljs.core.chunk_rest(seq__37729_38404__$1);
var G__38408 = c__5568__auto___38405;
var G__38409 = cljs.core.count(c__5568__auto___38405);
var G__38410 = (0);
seq__37729_38356 = G__38407;
chunk__37730_38357 = G__38408;
count__37731_38358 = G__38409;
i__37732_38359 = G__38410;
continue;
} else {
var child_struct_38412 = cljs.core.first(seq__37729_38404__$1);
var children_38413 = shadow.dom.dom_node(child_struct_38412);
if(cljs.core.seq_QMARK_(children_38413)){
var seq__37776_38414 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38413));
var chunk__37778_38415 = null;
var count__37779_38416 = (0);
var i__37780_38417 = (0);
while(true){
if((i__37780_38417 < count__37779_38416)){
var child_38419 = chunk__37778_38415.cljs$core$IIndexed$_nth$arity$2(null,i__37780_38417);
if(cljs.core.truth_(child_38419)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38419);


var G__38420 = seq__37776_38414;
var G__38421 = chunk__37778_38415;
var G__38422 = count__37779_38416;
var G__38423 = (i__37780_38417 + (1));
seq__37776_38414 = G__38420;
chunk__37778_38415 = G__38421;
count__37779_38416 = G__38422;
i__37780_38417 = G__38423;
continue;
} else {
var G__38424 = seq__37776_38414;
var G__38425 = chunk__37778_38415;
var G__38426 = count__37779_38416;
var G__38427 = (i__37780_38417 + (1));
seq__37776_38414 = G__38424;
chunk__37778_38415 = G__38425;
count__37779_38416 = G__38426;
i__37780_38417 = G__38427;
continue;
}
} else {
var temp__5804__auto___38428__$1 = cljs.core.seq(seq__37776_38414);
if(temp__5804__auto___38428__$1){
var seq__37776_38429__$1 = temp__5804__auto___38428__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37776_38429__$1)){
var c__5568__auto___38430 = cljs.core.chunk_first(seq__37776_38429__$1);
var G__38431 = cljs.core.chunk_rest(seq__37776_38429__$1);
var G__38432 = c__5568__auto___38430;
var G__38433 = cljs.core.count(c__5568__auto___38430);
var G__38434 = (0);
seq__37776_38414 = G__38431;
chunk__37778_38415 = G__38432;
count__37779_38416 = G__38433;
i__37780_38417 = G__38434;
continue;
} else {
var child_38435 = cljs.core.first(seq__37776_38429__$1);
if(cljs.core.truth_(child_38435)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38435);


var G__38436 = cljs.core.next(seq__37776_38429__$1);
var G__38437 = null;
var G__38438 = (0);
var G__38439 = (0);
seq__37776_38414 = G__38436;
chunk__37778_38415 = G__38437;
count__37779_38416 = G__38438;
i__37780_38417 = G__38439;
continue;
} else {
var G__38440 = cljs.core.next(seq__37776_38429__$1);
var G__38441 = null;
var G__38442 = (0);
var G__38443 = (0);
seq__37776_38414 = G__38440;
chunk__37778_38415 = G__38441;
count__37779_38416 = G__38442;
i__37780_38417 = G__38443;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38413);
}


var G__38444 = cljs.core.next(seq__37729_38404__$1);
var G__38445 = null;
var G__38446 = (0);
var G__38447 = (0);
seq__37729_38356 = G__38444;
chunk__37730_38357 = G__38445;
count__37731_38358 = G__38446;
i__37732_38359 = G__38447;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__37838 = cljs.core.seq(node);
var chunk__37839 = null;
var count__37840 = (0);
var i__37841 = (0);
while(true){
if((i__37841 < count__37840)){
var n = chunk__37839.cljs$core$IIndexed$_nth$arity$2(null,i__37841);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38452 = seq__37838;
var G__38453 = chunk__37839;
var G__38454 = count__37840;
var G__38455 = (i__37841 + (1));
seq__37838 = G__38452;
chunk__37839 = G__38453;
count__37840 = G__38454;
i__37841 = G__38455;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37838);
if(temp__5804__auto__){
var seq__37838__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37838__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37838__$1);
var G__38457 = cljs.core.chunk_rest(seq__37838__$1);
var G__38458 = c__5568__auto__;
var G__38459 = cljs.core.count(c__5568__auto__);
var G__38460 = (0);
seq__37838 = G__38457;
chunk__37839 = G__38458;
count__37840 = G__38459;
i__37841 = G__38460;
continue;
} else {
var n = cljs.core.first(seq__37838__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38461 = cljs.core.next(seq__37838__$1);
var G__38462 = null;
var G__38463 = (0);
var G__38464 = (0);
seq__37838 = G__38461;
chunk__37839 = G__38462;
count__37840 = G__38463;
i__37841 = G__38464;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__37853 = arguments.length;
switch (G__37853) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__37859 = arguments.length;
switch (G__37859) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__37867 = arguments.length;
switch (G__37867) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___38471 = arguments.length;
var i__5770__auto___38472 = (0);
while(true){
if((i__5770__auto___38472 < len__5769__auto___38471)){
args__5775__auto__.push((arguments[i__5770__auto___38472]));

var G__38473 = (i__5770__auto___38472 + (1));
i__5770__auto___38472 = G__38473;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__37897_38474 = cljs.core.seq(nodes);
var chunk__37898_38475 = null;
var count__37899_38476 = (0);
var i__37900_38477 = (0);
while(true){
if((i__37900_38477 < count__37899_38476)){
var node_38479 = chunk__37898_38475.cljs$core$IIndexed$_nth$arity$2(null,i__37900_38477);
fragment.appendChild(shadow.dom._to_dom(node_38479));


var G__38480 = seq__37897_38474;
var G__38481 = chunk__37898_38475;
var G__38482 = count__37899_38476;
var G__38483 = (i__37900_38477 + (1));
seq__37897_38474 = G__38480;
chunk__37898_38475 = G__38481;
count__37899_38476 = G__38482;
i__37900_38477 = G__38483;
continue;
} else {
var temp__5804__auto___38484 = cljs.core.seq(seq__37897_38474);
if(temp__5804__auto___38484){
var seq__37897_38485__$1 = temp__5804__auto___38484;
if(cljs.core.chunked_seq_QMARK_(seq__37897_38485__$1)){
var c__5568__auto___38486 = cljs.core.chunk_first(seq__37897_38485__$1);
var G__38487 = cljs.core.chunk_rest(seq__37897_38485__$1);
var G__38488 = c__5568__auto___38486;
var G__38489 = cljs.core.count(c__5568__auto___38486);
var G__38490 = (0);
seq__37897_38474 = G__38487;
chunk__37898_38475 = G__38488;
count__37899_38476 = G__38489;
i__37900_38477 = G__38490;
continue;
} else {
var node_38491 = cljs.core.first(seq__37897_38485__$1);
fragment.appendChild(shadow.dom._to_dom(node_38491));


var G__38492 = cljs.core.next(seq__37897_38485__$1);
var G__38493 = null;
var G__38494 = (0);
var G__38495 = (0);
seq__37897_38474 = G__38492;
chunk__37898_38475 = G__38493;
count__37899_38476 = G__38494;
i__37900_38477 = G__38495;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq37896){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37896));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__37911_38498 = cljs.core.seq(scripts);
var chunk__37912_38499 = null;
var count__37913_38500 = (0);
var i__37914_38501 = (0);
while(true){
if((i__37914_38501 < count__37913_38500)){
var vec__37924_38502 = chunk__37912_38499.cljs$core$IIndexed$_nth$arity$2(null,i__37914_38501);
var script_tag_38503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37924_38502,(0),null);
var script_body_38504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37924_38502,(1),null);
eval(script_body_38504);


var G__38506 = seq__37911_38498;
var G__38507 = chunk__37912_38499;
var G__38508 = count__37913_38500;
var G__38509 = (i__37914_38501 + (1));
seq__37911_38498 = G__38506;
chunk__37912_38499 = G__38507;
count__37913_38500 = G__38508;
i__37914_38501 = G__38509;
continue;
} else {
var temp__5804__auto___38511 = cljs.core.seq(seq__37911_38498);
if(temp__5804__auto___38511){
var seq__37911_38512__$1 = temp__5804__auto___38511;
if(cljs.core.chunked_seq_QMARK_(seq__37911_38512__$1)){
var c__5568__auto___38513 = cljs.core.chunk_first(seq__37911_38512__$1);
var G__38515 = cljs.core.chunk_rest(seq__37911_38512__$1);
var G__38516 = c__5568__auto___38513;
var G__38517 = cljs.core.count(c__5568__auto___38513);
var G__38518 = (0);
seq__37911_38498 = G__38515;
chunk__37912_38499 = G__38516;
count__37913_38500 = G__38517;
i__37914_38501 = G__38518;
continue;
} else {
var vec__37927_38519 = cljs.core.first(seq__37911_38512__$1);
var script_tag_38520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37927_38519,(0),null);
var script_body_38521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37927_38519,(1),null);
eval(script_body_38521);


var G__38522 = cljs.core.next(seq__37911_38512__$1);
var G__38523 = null;
var G__38524 = (0);
var G__38525 = (0);
seq__37911_38498 = G__38522;
chunk__37912_38499 = G__38523;
count__37913_38500 = G__38524;
i__37914_38501 = G__38525;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__37934){
var vec__37935 = p__37934;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37935,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37935,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__37939 = arguments.length;
switch (G__37939) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__37953 = cljs.core.seq(style_keys);
var chunk__37954 = null;
var count__37955 = (0);
var i__37956 = (0);
while(true){
if((i__37956 < count__37955)){
var it = chunk__37954.cljs$core$IIndexed$_nth$arity$2(null,i__37956);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38530 = seq__37953;
var G__38531 = chunk__37954;
var G__38532 = count__37955;
var G__38533 = (i__37956 + (1));
seq__37953 = G__38530;
chunk__37954 = G__38531;
count__37955 = G__38532;
i__37956 = G__38533;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37953);
if(temp__5804__auto__){
var seq__37953__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37953__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37953__$1);
var G__38534 = cljs.core.chunk_rest(seq__37953__$1);
var G__38535 = c__5568__auto__;
var G__38536 = cljs.core.count(c__5568__auto__);
var G__38537 = (0);
seq__37953 = G__38534;
chunk__37954 = G__38535;
count__37955 = G__38536;
i__37956 = G__38537;
continue;
} else {
var it = cljs.core.first(seq__37953__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38538 = cljs.core.next(seq__37953__$1);
var G__38539 = null;
var G__38540 = (0);
var G__38541 = (0);
seq__37953 = G__38538;
chunk__37954 = G__38539;
count__37955 = G__38540;
i__37956 = G__38541;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k37965,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__37976 = k37965;
var G__37976__$1 = (((G__37976 instanceof cljs.core.Keyword))?G__37976.fqn:null);
switch (G__37976__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37965,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__37979){
var vec__37982 = p__37979;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37982,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37982,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37964){
var self__ = this;
var G__37964__$1 = this;
return (new cljs.core.RecordIter((0),G__37964__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37966,other37968){
var self__ = this;
var this37966__$1 = this;
return (((!((other37968 == null)))) && ((((this37966__$1.constructor === other37968.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37966__$1.x,other37968.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37966__$1.y,other37968.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37966__$1.__extmap,other37968.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k37965){
var self__ = this;
var this__5350__auto____$1 = this;
var G__37998 = k37965;
var G__37998__$1 = (((G__37998 instanceof cljs.core.Keyword))?G__37998.fqn:null);
switch (G__37998__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37965);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__37964){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__37999 = cljs.core.keyword_identical_QMARK_;
var expr__38000 = k__5352__auto__;
if(cljs.core.truth_((pred__37999.cljs$core$IFn$_invoke$arity$2 ? pred__37999.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__38000) : pred__37999.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__38000)))){
return (new shadow.dom.Coordinate(G__37964,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37999.cljs$core$IFn$_invoke$arity$2 ? pred__37999.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__38000) : pred__37999.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__38000)))){
return (new shadow.dom.Coordinate(self__.x,G__37964,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__37964),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__37964){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__37964,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__37972){
var extmap__5385__auto__ = (function (){var G__38005 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37972,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__37972)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38005);
} else {
return G__38005;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__37972),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__37972),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k38007,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__38011 = k38007;
var G__38011__$1 = (((G__38011 instanceof cljs.core.Keyword))?G__38011.fqn:null);
switch (G__38011__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38007,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__38012){
var vec__38013 = p__38012;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38013,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38013,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38006){
var self__ = this;
var G__38006__$1 = this;
return (new cljs.core.RecordIter((0),G__38006__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38008,other38009){
var self__ = this;
var this38008__$1 = this;
return (((!((other38009 == null)))) && ((((this38008__$1.constructor === other38009.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38008__$1.w,other38009.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38008__$1.h,other38009.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38008__$1.__extmap,other38009.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k38007){
var self__ = this;
var this__5350__auto____$1 = this;
var G__38023 = k38007;
var G__38023__$1 = (((G__38023 instanceof cljs.core.Keyword))?G__38023.fqn:null);
switch (G__38023__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k38007);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__38006){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__38026 = cljs.core.keyword_identical_QMARK_;
var expr__38027 = k__5352__auto__;
if(cljs.core.truth_((pred__38026.cljs$core$IFn$_invoke$arity$2 ? pred__38026.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__38027) : pred__38026.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__38027)))){
return (new shadow.dom.Size(G__38006,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38026.cljs$core$IFn$_invoke$arity$2 ? pred__38026.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__38027) : pred__38026.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__38027)))){
return (new shadow.dom.Size(self__.w,G__38006,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__38006),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__38006){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__38006,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__38010){
var extmap__5385__auto__ = (function (){var G__38033 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38010,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__38010)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38033);
} else {
return G__38033;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__38010),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__38010),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__38642 = (i + (1));
var G__38643 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__38642;
ret = G__38643;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38053){
var vec__38054 = p__38053;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38054,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38054,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__38061 = arguments.length;
switch (G__38061) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__38649 = ps;
var G__38650 = (i + (1));
el__$1 = G__38649;
i = G__38650;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__38069 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38069,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38069,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38069,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__38073_38651 = cljs.core.seq(props);
var chunk__38074_38652 = null;
var count__38075_38653 = (0);
var i__38076_38654 = (0);
while(true){
if((i__38076_38654 < count__38075_38653)){
var vec__38085_38656 = chunk__38074_38652.cljs$core$IIndexed$_nth$arity$2(null,i__38076_38654);
var k_38657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38085_38656,(0),null);
var v_38658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38085_38656,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_38657);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38657),v_38658);


var G__38659 = seq__38073_38651;
var G__38660 = chunk__38074_38652;
var G__38661 = count__38075_38653;
var G__38662 = (i__38076_38654 + (1));
seq__38073_38651 = G__38659;
chunk__38074_38652 = G__38660;
count__38075_38653 = G__38661;
i__38076_38654 = G__38662;
continue;
} else {
var temp__5804__auto___38663 = cljs.core.seq(seq__38073_38651);
if(temp__5804__auto___38663){
var seq__38073_38664__$1 = temp__5804__auto___38663;
if(cljs.core.chunked_seq_QMARK_(seq__38073_38664__$1)){
var c__5568__auto___38665 = cljs.core.chunk_first(seq__38073_38664__$1);
var G__38666 = cljs.core.chunk_rest(seq__38073_38664__$1);
var G__38667 = c__5568__auto___38665;
var G__38668 = cljs.core.count(c__5568__auto___38665);
var G__38669 = (0);
seq__38073_38651 = G__38666;
chunk__38074_38652 = G__38667;
count__38075_38653 = G__38668;
i__38076_38654 = G__38669;
continue;
} else {
var vec__38089_38670 = cljs.core.first(seq__38073_38664__$1);
var k_38671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38089_38670,(0),null);
var v_38672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38089_38670,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_38671);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38671),v_38672);


var G__38674 = cljs.core.next(seq__38073_38664__$1);
var G__38675 = null;
var G__38676 = (0);
var G__38677 = (0);
seq__38073_38651 = G__38674;
chunk__38074_38652 = G__38675;
count__38075_38653 = G__38676;
i__38076_38654 = G__38677;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__38094 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38094,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38094,(1),null);
var seq__38097_38678 = cljs.core.seq(node_children);
var chunk__38099_38679 = null;
var count__38100_38680 = (0);
var i__38101_38681 = (0);
while(true){
if((i__38101_38681 < count__38100_38680)){
var child_struct_38682 = chunk__38099_38679.cljs$core$IIndexed$_nth$arity$2(null,i__38101_38681);
if((!((child_struct_38682 == null)))){
if(typeof child_struct_38682 === 'string'){
var text_38683 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38683),child_struct_38682].join(''));
} else {
var children_38684 = shadow.dom.svg_node(child_struct_38682);
if(cljs.core.seq_QMARK_(children_38684)){
var seq__38143_38685 = cljs.core.seq(children_38684);
var chunk__38145_38686 = null;
var count__38146_38687 = (0);
var i__38147_38688 = (0);
while(true){
if((i__38147_38688 < count__38146_38687)){
var child_38689 = chunk__38145_38686.cljs$core$IIndexed$_nth$arity$2(null,i__38147_38688);
if(cljs.core.truth_(child_38689)){
node.appendChild(child_38689);


var G__38690 = seq__38143_38685;
var G__38691 = chunk__38145_38686;
var G__38692 = count__38146_38687;
var G__38693 = (i__38147_38688 + (1));
seq__38143_38685 = G__38690;
chunk__38145_38686 = G__38691;
count__38146_38687 = G__38692;
i__38147_38688 = G__38693;
continue;
} else {
var G__38694 = seq__38143_38685;
var G__38695 = chunk__38145_38686;
var G__38696 = count__38146_38687;
var G__38697 = (i__38147_38688 + (1));
seq__38143_38685 = G__38694;
chunk__38145_38686 = G__38695;
count__38146_38687 = G__38696;
i__38147_38688 = G__38697;
continue;
}
} else {
var temp__5804__auto___38698 = cljs.core.seq(seq__38143_38685);
if(temp__5804__auto___38698){
var seq__38143_38699__$1 = temp__5804__auto___38698;
if(cljs.core.chunked_seq_QMARK_(seq__38143_38699__$1)){
var c__5568__auto___38700 = cljs.core.chunk_first(seq__38143_38699__$1);
var G__38701 = cljs.core.chunk_rest(seq__38143_38699__$1);
var G__38702 = c__5568__auto___38700;
var G__38703 = cljs.core.count(c__5568__auto___38700);
var G__38704 = (0);
seq__38143_38685 = G__38701;
chunk__38145_38686 = G__38702;
count__38146_38687 = G__38703;
i__38147_38688 = G__38704;
continue;
} else {
var child_38705 = cljs.core.first(seq__38143_38699__$1);
if(cljs.core.truth_(child_38705)){
node.appendChild(child_38705);


var G__38706 = cljs.core.next(seq__38143_38699__$1);
var G__38707 = null;
var G__38708 = (0);
var G__38709 = (0);
seq__38143_38685 = G__38706;
chunk__38145_38686 = G__38707;
count__38146_38687 = G__38708;
i__38147_38688 = G__38709;
continue;
} else {
var G__38710 = cljs.core.next(seq__38143_38699__$1);
var G__38711 = null;
var G__38712 = (0);
var G__38713 = (0);
seq__38143_38685 = G__38710;
chunk__38145_38686 = G__38711;
count__38146_38687 = G__38712;
i__38147_38688 = G__38713;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38684);
}
}


var G__38714 = seq__38097_38678;
var G__38715 = chunk__38099_38679;
var G__38716 = count__38100_38680;
var G__38717 = (i__38101_38681 + (1));
seq__38097_38678 = G__38714;
chunk__38099_38679 = G__38715;
count__38100_38680 = G__38716;
i__38101_38681 = G__38717;
continue;
} else {
var G__38718 = seq__38097_38678;
var G__38719 = chunk__38099_38679;
var G__38720 = count__38100_38680;
var G__38721 = (i__38101_38681 + (1));
seq__38097_38678 = G__38718;
chunk__38099_38679 = G__38719;
count__38100_38680 = G__38720;
i__38101_38681 = G__38721;
continue;
}
} else {
var temp__5804__auto___38722 = cljs.core.seq(seq__38097_38678);
if(temp__5804__auto___38722){
var seq__38097_38723__$1 = temp__5804__auto___38722;
if(cljs.core.chunked_seq_QMARK_(seq__38097_38723__$1)){
var c__5568__auto___38724 = cljs.core.chunk_first(seq__38097_38723__$1);
var G__38725 = cljs.core.chunk_rest(seq__38097_38723__$1);
var G__38726 = c__5568__auto___38724;
var G__38727 = cljs.core.count(c__5568__auto___38724);
var G__38728 = (0);
seq__38097_38678 = G__38725;
chunk__38099_38679 = G__38726;
count__38100_38680 = G__38727;
i__38101_38681 = G__38728;
continue;
} else {
var child_struct_38729 = cljs.core.first(seq__38097_38723__$1);
if((!((child_struct_38729 == null)))){
if(typeof child_struct_38729 === 'string'){
var text_38730 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38730),child_struct_38729].join(''));
} else {
var children_38731 = shadow.dom.svg_node(child_struct_38729);
if(cljs.core.seq_QMARK_(children_38731)){
var seq__38152_38732 = cljs.core.seq(children_38731);
var chunk__38154_38733 = null;
var count__38155_38734 = (0);
var i__38156_38735 = (0);
while(true){
if((i__38156_38735 < count__38155_38734)){
var child_38736 = chunk__38154_38733.cljs$core$IIndexed$_nth$arity$2(null,i__38156_38735);
if(cljs.core.truth_(child_38736)){
node.appendChild(child_38736);


var G__38737 = seq__38152_38732;
var G__38738 = chunk__38154_38733;
var G__38739 = count__38155_38734;
var G__38740 = (i__38156_38735 + (1));
seq__38152_38732 = G__38737;
chunk__38154_38733 = G__38738;
count__38155_38734 = G__38739;
i__38156_38735 = G__38740;
continue;
} else {
var G__38741 = seq__38152_38732;
var G__38742 = chunk__38154_38733;
var G__38743 = count__38155_38734;
var G__38744 = (i__38156_38735 + (1));
seq__38152_38732 = G__38741;
chunk__38154_38733 = G__38742;
count__38155_38734 = G__38743;
i__38156_38735 = G__38744;
continue;
}
} else {
var temp__5804__auto___38745__$1 = cljs.core.seq(seq__38152_38732);
if(temp__5804__auto___38745__$1){
var seq__38152_38746__$1 = temp__5804__auto___38745__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38152_38746__$1)){
var c__5568__auto___38747 = cljs.core.chunk_first(seq__38152_38746__$1);
var G__38748 = cljs.core.chunk_rest(seq__38152_38746__$1);
var G__38749 = c__5568__auto___38747;
var G__38750 = cljs.core.count(c__5568__auto___38747);
var G__38751 = (0);
seq__38152_38732 = G__38748;
chunk__38154_38733 = G__38749;
count__38155_38734 = G__38750;
i__38156_38735 = G__38751;
continue;
} else {
var child_38752 = cljs.core.first(seq__38152_38746__$1);
if(cljs.core.truth_(child_38752)){
node.appendChild(child_38752);


var G__38753 = cljs.core.next(seq__38152_38746__$1);
var G__38754 = null;
var G__38755 = (0);
var G__38756 = (0);
seq__38152_38732 = G__38753;
chunk__38154_38733 = G__38754;
count__38155_38734 = G__38755;
i__38156_38735 = G__38756;
continue;
} else {
var G__38757 = cljs.core.next(seq__38152_38746__$1);
var G__38758 = null;
var G__38759 = (0);
var G__38760 = (0);
seq__38152_38732 = G__38757;
chunk__38154_38733 = G__38758;
count__38155_38734 = G__38759;
i__38156_38735 = G__38760;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38731);
}
}


var G__38761 = cljs.core.next(seq__38097_38723__$1);
var G__38762 = null;
var G__38763 = (0);
var G__38764 = (0);
seq__38097_38678 = G__38761;
chunk__38099_38679 = G__38762;
count__38100_38680 = G__38763;
i__38101_38681 = G__38764;
continue;
} else {
var G__38765 = cljs.core.next(seq__38097_38723__$1);
var G__38766 = null;
var G__38767 = (0);
var G__38768 = (0);
seq__38097_38678 = G__38765;
chunk__38099_38679 = G__38766;
count__38100_38680 = G__38767;
i__38101_38681 = G__38768;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___38773 = arguments.length;
var i__5770__auto___38774 = (0);
while(true){
if((i__5770__auto___38774 < len__5769__auto___38773)){
args__5775__auto__.push((arguments[i__5770__auto___38774]));

var G__38776 = (i__5770__auto___38774 + (1));
i__5770__auto___38774 = G__38776;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq38169){
var G__38170 = cljs.core.first(seq38169);
var seq38169__$1 = cljs.core.next(seq38169);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38170,seq38169__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__38192 = arguments.length;
switch (G__38192) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__34404__auto___38781 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34405__auto__ = (function (){var switch__34048__auto__ = (function (state_38226){
var state_val_38227 = (state_38226[(1)]);
if((state_val_38227 === (1))){
var state_38226__$1 = state_38226;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38226__$1,(2),once_or_cleanup);
} else {
if((state_val_38227 === (2))){
var inst_38223 = (state_38226[(2)]);
var inst_38224 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_38226__$1 = (function (){var statearr_38231 = state_38226;
(statearr_38231[(7)] = inst_38223);

return statearr_38231;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38226__$1,inst_38224);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__34049__auto__ = null;
var shadow$dom$state_machine__34049__auto____0 = (function (){
var statearr_38235 = [null,null,null,null,null,null,null,null];
(statearr_38235[(0)] = shadow$dom$state_machine__34049__auto__);

(statearr_38235[(1)] = (1));

return statearr_38235;
});
var shadow$dom$state_machine__34049__auto____1 = (function (state_38226){
while(true){
var ret_value__34050__auto__ = (function (){try{while(true){
var result__34051__auto__ = switch__34048__auto__(state_38226);
if(cljs.core.keyword_identical_QMARK_(result__34051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34051__auto__;
}
break;
}
}catch (e38237){var ex__34052__auto__ = e38237;
var statearr_38238_38795 = state_38226;
(statearr_38238_38795[(2)] = ex__34052__auto__);


if(cljs.core.seq((state_38226[(4)]))){
var statearr_38240_38796 = state_38226;
(statearr_38240_38796[(1)] = cljs.core.first((state_38226[(4)])));

} else {
throw ex__34052__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34050__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38800 = state_38226;
state_38226 = G__38800;
continue;
} else {
return ret_value__34050__auto__;
}
break;
}
});
shadow$dom$state_machine__34049__auto__ = function(state_38226){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__34049__auto____0.call(this);
case 1:
return shadow$dom$state_machine__34049__auto____1.call(this,state_38226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__34049__auto____0;
shadow$dom$state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__34049__auto____1;
return shadow$dom$state_machine__34049__auto__;
})()
})();
var state__34406__auto__ = (function (){var statearr_38242 = f__34405__auto__();
(statearr_38242[(6)] = c__34404__auto___38781);

return statearr_38242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34406__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map

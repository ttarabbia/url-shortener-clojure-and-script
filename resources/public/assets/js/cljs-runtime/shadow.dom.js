goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35579 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_35579(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35580 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_35580(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34337 = coll;
var G__34338 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34337,G__34338) : shadow.dom.lazy_native_coll_seq.call(null,G__34337,G__34338));
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
var G__34384 = arguments.length;
switch (G__34384) {
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
var G__34411 = arguments.length;
switch (G__34411) {
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
var G__34427 = arguments.length;
switch (G__34427) {
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
var G__34453 = arguments.length;
switch (G__34453) {
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
var G__34474 = arguments.length;
switch (G__34474) {
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
var G__34493 = arguments.length;
switch (G__34493) {
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
}catch (e34519){if((e34519 instanceof Object)){
var e = e34519;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34519;

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
var seq__34529 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34531 = null;
var count__34532 = (0);
var i__34533 = (0);
while(true){
if((i__34533 < count__34532)){
var el = chunk__34531.cljs$core$IIndexed$_nth$arity$2(null,i__34533);
var handler_35588__$1 = ((function (seq__34529,chunk__34531,count__34532,i__34533,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34529,chunk__34531,count__34532,i__34533,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35588__$1);


var G__35589 = seq__34529;
var G__35590 = chunk__34531;
var G__35591 = count__34532;
var G__35592 = (i__34533 + (1));
seq__34529 = G__35589;
chunk__34531 = G__35590;
count__34532 = G__35591;
i__34533 = G__35592;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34529);
if(temp__5804__auto__){
var seq__34529__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34529__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34529__$1);
var G__35593 = cljs.core.chunk_rest(seq__34529__$1);
var G__35594 = c__5568__auto__;
var G__35595 = cljs.core.count(c__5568__auto__);
var G__35596 = (0);
seq__34529 = G__35593;
chunk__34531 = G__35594;
count__34532 = G__35595;
i__34533 = G__35596;
continue;
} else {
var el = cljs.core.first(seq__34529__$1);
var handler_35597__$1 = ((function (seq__34529,chunk__34531,count__34532,i__34533,el,seq__34529__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34529,chunk__34531,count__34532,i__34533,el,seq__34529__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35597__$1);


var G__35598 = cljs.core.next(seq__34529__$1);
var G__35599 = null;
var G__35600 = (0);
var G__35601 = (0);
seq__34529 = G__35598;
chunk__34531 = G__35599;
count__34532 = G__35600;
i__34533 = G__35601;
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
var G__34558 = arguments.length;
switch (G__34558) {
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
var seq__34571 = cljs.core.seq(events);
var chunk__34572 = null;
var count__34573 = (0);
var i__34574 = (0);
while(true){
if((i__34574 < count__34573)){
var vec__34603 = chunk__34572.cljs$core$IIndexed$_nth$arity$2(null,i__34574);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34603,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34603,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35610 = seq__34571;
var G__35611 = chunk__34572;
var G__35612 = count__34573;
var G__35613 = (i__34574 + (1));
seq__34571 = G__35610;
chunk__34572 = G__35611;
count__34573 = G__35612;
i__34574 = G__35613;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34571);
if(temp__5804__auto__){
var seq__34571__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34571__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34571__$1);
var G__35616 = cljs.core.chunk_rest(seq__34571__$1);
var G__35617 = c__5568__auto__;
var G__35618 = cljs.core.count(c__5568__auto__);
var G__35619 = (0);
seq__34571 = G__35616;
chunk__34572 = G__35617;
count__34573 = G__35618;
i__34574 = G__35619;
continue;
} else {
var vec__34616 = cljs.core.first(seq__34571__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34616,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34616,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35620 = cljs.core.next(seq__34571__$1);
var G__35621 = null;
var G__35622 = (0);
var G__35623 = (0);
seq__34571 = G__35620;
chunk__34572 = G__35621;
count__34573 = G__35622;
i__34574 = G__35623;
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
var seq__34626 = cljs.core.seq(styles);
var chunk__34627 = null;
var count__34628 = (0);
var i__34629 = (0);
while(true){
if((i__34629 < count__34628)){
var vec__34652 = chunk__34627.cljs$core$IIndexed$_nth$arity$2(null,i__34629);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34652,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34652,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35627 = seq__34626;
var G__35628 = chunk__34627;
var G__35629 = count__34628;
var G__35630 = (i__34629 + (1));
seq__34626 = G__35627;
chunk__34627 = G__35628;
count__34628 = G__35629;
i__34629 = G__35630;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34626);
if(temp__5804__auto__){
var seq__34626__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34626__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34626__$1);
var G__35631 = cljs.core.chunk_rest(seq__34626__$1);
var G__35632 = c__5568__auto__;
var G__35633 = cljs.core.count(c__5568__auto__);
var G__35634 = (0);
seq__34626 = G__35631;
chunk__34627 = G__35632;
count__34628 = G__35633;
i__34629 = G__35634;
continue;
} else {
var vec__34664 = cljs.core.first(seq__34626__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34664,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34664,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35637 = cljs.core.next(seq__34626__$1);
var G__35638 = null;
var G__35639 = (0);
var G__35640 = (0);
seq__34626 = G__35637;
chunk__34627 = G__35638;
count__34628 = G__35639;
i__34629 = G__35640;
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
var G__34673_35641 = key;
var G__34673_35642__$1 = (((G__34673_35641 instanceof cljs.core.Keyword))?G__34673_35641.fqn:null);
switch (G__34673_35642__$1) {
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
var ks_35644 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_35644,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_35644,"aria-");
}
})())){
el.setAttribute(ks_35644,value);
} else {
(el[ks_35644] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34716){
var map__34718 = p__34716;
var map__34718__$1 = cljs.core.__destructure_map(map__34718);
var props = map__34718__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34718__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34720 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34720,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34720,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34720,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34725 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34725,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34725;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34731 = arguments.length;
switch (G__34731) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34739){
var vec__34740 = p__34739;
var seq__34741 = cljs.core.seq(vec__34740);
var first__34742 = cljs.core.first(seq__34741);
var seq__34741__$1 = cljs.core.next(seq__34741);
var nn = first__34742;
var first__34742__$1 = cljs.core.first(seq__34741__$1);
var seq__34741__$2 = cljs.core.next(seq__34741__$1);
var np = first__34742__$1;
var nc = seq__34741__$2;
var node = vec__34740;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34749 = nn;
var G__34750 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34749,G__34750) : create_fn.call(null,G__34749,G__34750));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34755 = nn;
var G__34756 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34755,G__34756) : create_fn.call(null,G__34755,G__34756));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34761 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34761,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34761,(1),null);
var seq__34772_35652 = cljs.core.seq(node_children);
var chunk__34773_35653 = null;
var count__34774_35654 = (0);
var i__34775_35655 = (0);
while(true){
if((i__34775_35655 < count__34774_35654)){
var child_struct_35656 = chunk__34773_35653.cljs$core$IIndexed$_nth$arity$2(null,i__34775_35655);
var children_35657 = shadow.dom.dom_node(child_struct_35656);
if(cljs.core.seq_QMARK_(children_35657)){
var seq__34836_35658 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35657));
var chunk__34838_35659 = null;
var count__34839_35660 = (0);
var i__34840_35661 = (0);
while(true){
if((i__34840_35661 < count__34839_35660)){
var child_35662 = chunk__34838_35659.cljs$core$IIndexed$_nth$arity$2(null,i__34840_35661);
if(cljs.core.truth_(child_35662)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35662);


var G__35663 = seq__34836_35658;
var G__35664 = chunk__34838_35659;
var G__35665 = count__34839_35660;
var G__35666 = (i__34840_35661 + (1));
seq__34836_35658 = G__35663;
chunk__34838_35659 = G__35664;
count__34839_35660 = G__35665;
i__34840_35661 = G__35666;
continue;
} else {
var G__35667 = seq__34836_35658;
var G__35668 = chunk__34838_35659;
var G__35669 = count__34839_35660;
var G__35670 = (i__34840_35661 + (1));
seq__34836_35658 = G__35667;
chunk__34838_35659 = G__35668;
count__34839_35660 = G__35669;
i__34840_35661 = G__35670;
continue;
}
} else {
var temp__5804__auto___35671 = cljs.core.seq(seq__34836_35658);
if(temp__5804__auto___35671){
var seq__34836_35673__$1 = temp__5804__auto___35671;
if(cljs.core.chunked_seq_QMARK_(seq__34836_35673__$1)){
var c__5568__auto___35675 = cljs.core.chunk_first(seq__34836_35673__$1);
var G__35676 = cljs.core.chunk_rest(seq__34836_35673__$1);
var G__35677 = c__5568__auto___35675;
var G__35678 = cljs.core.count(c__5568__auto___35675);
var G__35679 = (0);
seq__34836_35658 = G__35676;
chunk__34838_35659 = G__35677;
count__34839_35660 = G__35678;
i__34840_35661 = G__35679;
continue;
} else {
var child_35681 = cljs.core.first(seq__34836_35673__$1);
if(cljs.core.truth_(child_35681)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35681);


var G__35682 = cljs.core.next(seq__34836_35673__$1);
var G__35683 = null;
var G__35684 = (0);
var G__35685 = (0);
seq__34836_35658 = G__35682;
chunk__34838_35659 = G__35683;
count__34839_35660 = G__35684;
i__34840_35661 = G__35685;
continue;
} else {
var G__35686 = cljs.core.next(seq__34836_35673__$1);
var G__35687 = null;
var G__35688 = (0);
var G__35689 = (0);
seq__34836_35658 = G__35686;
chunk__34838_35659 = G__35687;
count__34839_35660 = G__35688;
i__34840_35661 = G__35689;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35657);
}


var G__35690 = seq__34772_35652;
var G__35691 = chunk__34773_35653;
var G__35692 = count__34774_35654;
var G__35693 = (i__34775_35655 + (1));
seq__34772_35652 = G__35690;
chunk__34773_35653 = G__35691;
count__34774_35654 = G__35692;
i__34775_35655 = G__35693;
continue;
} else {
var temp__5804__auto___35695 = cljs.core.seq(seq__34772_35652);
if(temp__5804__auto___35695){
var seq__34772_35696__$1 = temp__5804__auto___35695;
if(cljs.core.chunked_seq_QMARK_(seq__34772_35696__$1)){
var c__5568__auto___35697 = cljs.core.chunk_first(seq__34772_35696__$1);
var G__35698 = cljs.core.chunk_rest(seq__34772_35696__$1);
var G__35699 = c__5568__auto___35697;
var G__35700 = cljs.core.count(c__5568__auto___35697);
var G__35701 = (0);
seq__34772_35652 = G__35698;
chunk__34773_35653 = G__35699;
count__34774_35654 = G__35700;
i__34775_35655 = G__35701;
continue;
} else {
var child_struct_35702 = cljs.core.first(seq__34772_35696__$1);
var children_35703 = shadow.dom.dom_node(child_struct_35702);
if(cljs.core.seq_QMARK_(children_35703)){
var seq__34851_35704 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35703));
var chunk__34853_35705 = null;
var count__34854_35706 = (0);
var i__34855_35707 = (0);
while(true){
if((i__34855_35707 < count__34854_35706)){
var child_35708 = chunk__34853_35705.cljs$core$IIndexed$_nth$arity$2(null,i__34855_35707);
if(cljs.core.truth_(child_35708)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35708);


var G__35709 = seq__34851_35704;
var G__35710 = chunk__34853_35705;
var G__35711 = count__34854_35706;
var G__35712 = (i__34855_35707 + (1));
seq__34851_35704 = G__35709;
chunk__34853_35705 = G__35710;
count__34854_35706 = G__35711;
i__34855_35707 = G__35712;
continue;
} else {
var G__35713 = seq__34851_35704;
var G__35714 = chunk__34853_35705;
var G__35715 = count__34854_35706;
var G__35716 = (i__34855_35707 + (1));
seq__34851_35704 = G__35713;
chunk__34853_35705 = G__35714;
count__34854_35706 = G__35715;
i__34855_35707 = G__35716;
continue;
}
} else {
var temp__5804__auto___35717__$1 = cljs.core.seq(seq__34851_35704);
if(temp__5804__auto___35717__$1){
var seq__34851_35718__$1 = temp__5804__auto___35717__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34851_35718__$1)){
var c__5568__auto___35719 = cljs.core.chunk_first(seq__34851_35718__$1);
var G__35720 = cljs.core.chunk_rest(seq__34851_35718__$1);
var G__35721 = c__5568__auto___35719;
var G__35722 = cljs.core.count(c__5568__auto___35719);
var G__35723 = (0);
seq__34851_35704 = G__35720;
chunk__34853_35705 = G__35721;
count__34854_35706 = G__35722;
i__34855_35707 = G__35723;
continue;
} else {
var child_35725 = cljs.core.first(seq__34851_35718__$1);
if(cljs.core.truth_(child_35725)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35725);


var G__35726 = cljs.core.next(seq__34851_35718__$1);
var G__35727 = null;
var G__35728 = (0);
var G__35729 = (0);
seq__34851_35704 = G__35726;
chunk__34853_35705 = G__35727;
count__34854_35706 = G__35728;
i__34855_35707 = G__35729;
continue;
} else {
var G__35730 = cljs.core.next(seq__34851_35718__$1);
var G__35731 = null;
var G__35732 = (0);
var G__35733 = (0);
seq__34851_35704 = G__35730;
chunk__34853_35705 = G__35731;
count__34854_35706 = G__35732;
i__34855_35707 = G__35733;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35703);
}


var G__35734 = cljs.core.next(seq__34772_35696__$1);
var G__35735 = null;
var G__35736 = (0);
var G__35737 = (0);
seq__34772_35652 = G__35734;
chunk__34773_35653 = G__35735;
count__34774_35654 = G__35736;
i__34775_35655 = G__35737;
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
var seq__34906 = cljs.core.seq(node);
var chunk__34907 = null;
var count__34908 = (0);
var i__34909 = (0);
while(true){
if((i__34909 < count__34908)){
var n = chunk__34907.cljs$core$IIndexed$_nth$arity$2(null,i__34909);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35742 = seq__34906;
var G__35743 = chunk__34907;
var G__35744 = count__34908;
var G__35745 = (i__34909 + (1));
seq__34906 = G__35742;
chunk__34907 = G__35743;
count__34908 = G__35744;
i__34909 = G__35745;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34906);
if(temp__5804__auto__){
var seq__34906__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34906__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34906__$1);
var G__35748 = cljs.core.chunk_rest(seq__34906__$1);
var G__35749 = c__5568__auto__;
var G__35750 = cljs.core.count(c__5568__auto__);
var G__35751 = (0);
seq__34906 = G__35748;
chunk__34907 = G__35749;
count__34908 = G__35750;
i__34909 = G__35751;
continue;
} else {
var n = cljs.core.first(seq__34906__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35752 = cljs.core.next(seq__34906__$1);
var G__35753 = null;
var G__35754 = (0);
var G__35755 = (0);
seq__34906 = G__35752;
chunk__34907 = G__35753;
count__34908 = G__35754;
i__34909 = G__35755;
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
var G__34923 = arguments.length;
switch (G__34923) {
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
var G__34930 = arguments.length;
switch (G__34930) {
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
var G__34947 = arguments.length;
switch (G__34947) {
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
var len__5769__auto___35767 = arguments.length;
var i__5770__auto___35768 = (0);
while(true){
if((i__5770__auto___35768 < len__5769__auto___35767)){
args__5775__auto__.push((arguments[i__5770__auto___35768]));

var G__35770 = (i__5770__auto___35768 + (1));
i__5770__auto___35768 = G__35770;
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
var seq__34978_35773 = cljs.core.seq(nodes);
var chunk__34979_35774 = null;
var count__34980_35775 = (0);
var i__34981_35776 = (0);
while(true){
if((i__34981_35776 < count__34980_35775)){
var node_35777 = chunk__34979_35774.cljs$core$IIndexed$_nth$arity$2(null,i__34981_35776);
fragment.appendChild(shadow.dom._to_dom(node_35777));


var G__35778 = seq__34978_35773;
var G__35779 = chunk__34979_35774;
var G__35780 = count__34980_35775;
var G__35781 = (i__34981_35776 + (1));
seq__34978_35773 = G__35778;
chunk__34979_35774 = G__35779;
count__34980_35775 = G__35780;
i__34981_35776 = G__35781;
continue;
} else {
var temp__5804__auto___35784 = cljs.core.seq(seq__34978_35773);
if(temp__5804__auto___35784){
var seq__34978_35785__$1 = temp__5804__auto___35784;
if(cljs.core.chunked_seq_QMARK_(seq__34978_35785__$1)){
var c__5568__auto___35786 = cljs.core.chunk_first(seq__34978_35785__$1);
var G__35787 = cljs.core.chunk_rest(seq__34978_35785__$1);
var G__35788 = c__5568__auto___35786;
var G__35789 = cljs.core.count(c__5568__auto___35786);
var G__35790 = (0);
seq__34978_35773 = G__35787;
chunk__34979_35774 = G__35788;
count__34980_35775 = G__35789;
i__34981_35776 = G__35790;
continue;
} else {
var node_35791 = cljs.core.first(seq__34978_35785__$1);
fragment.appendChild(shadow.dom._to_dom(node_35791));


var G__35793 = cljs.core.next(seq__34978_35785__$1);
var G__35794 = null;
var G__35795 = (0);
var G__35796 = (0);
seq__34978_35773 = G__35793;
chunk__34979_35774 = G__35794;
count__34980_35775 = G__35795;
i__34981_35776 = G__35796;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34971){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34971));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34987_35800 = cljs.core.seq(scripts);
var chunk__34988_35801 = null;
var count__34989_35802 = (0);
var i__34990_35803 = (0);
while(true){
if((i__34990_35803 < count__34989_35802)){
var vec__35001_35804 = chunk__34988_35801.cljs$core$IIndexed$_nth$arity$2(null,i__34990_35803);
var script_tag_35805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35001_35804,(0),null);
var script_body_35806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35001_35804,(1),null);
eval(script_body_35806);


var G__35807 = seq__34987_35800;
var G__35808 = chunk__34988_35801;
var G__35809 = count__34989_35802;
var G__35810 = (i__34990_35803 + (1));
seq__34987_35800 = G__35807;
chunk__34988_35801 = G__35808;
count__34989_35802 = G__35809;
i__34990_35803 = G__35810;
continue;
} else {
var temp__5804__auto___35811 = cljs.core.seq(seq__34987_35800);
if(temp__5804__auto___35811){
var seq__34987_35812__$1 = temp__5804__auto___35811;
if(cljs.core.chunked_seq_QMARK_(seq__34987_35812__$1)){
var c__5568__auto___35813 = cljs.core.chunk_first(seq__34987_35812__$1);
var G__35814 = cljs.core.chunk_rest(seq__34987_35812__$1);
var G__35815 = c__5568__auto___35813;
var G__35816 = cljs.core.count(c__5568__auto___35813);
var G__35817 = (0);
seq__34987_35800 = G__35814;
chunk__34988_35801 = G__35815;
count__34989_35802 = G__35816;
i__34990_35803 = G__35817;
continue;
} else {
var vec__35006_35818 = cljs.core.first(seq__34987_35812__$1);
var script_tag_35819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35006_35818,(0),null);
var script_body_35820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35006_35818,(1),null);
eval(script_body_35820);


var G__35821 = cljs.core.next(seq__34987_35812__$1);
var G__35822 = null;
var G__35823 = (0);
var G__35824 = (0);
seq__34987_35800 = G__35821;
chunk__34988_35801 = G__35822;
count__34989_35802 = G__35823;
i__34990_35803 = G__35824;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35013){
var vec__35014 = p__35013;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35014,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35014,(1),null);
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
var G__35030 = arguments.length;
switch (G__35030) {
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
var seq__35053 = cljs.core.seq(style_keys);
var chunk__35054 = null;
var count__35055 = (0);
var i__35056 = (0);
while(true){
if((i__35056 < count__35055)){
var it = chunk__35054.cljs$core$IIndexed$_nth$arity$2(null,i__35056);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35836 = seq__35053;
var G__35837 = chunk__35054;
var G__35838 = count__35055;
var G__35839 = (i__35056 + (1));
seq__35053 = G__35836;
chunk__35054 = G__35837;
count__35055 = G__35838;
i__35056 = G__35839;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35053);
if(temp__5804__auto__){
var seq__35053__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35053__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35053__$1);
var G__35841 = cljs.core.chunk_rest(seq__35053__$1);
var G__35842 = c__5568__auto__;
var G__35843 = cljs.core.count(c__5568__auto__);
var G__35844 = (0);
seq__35053 = G__35841;
chunk__35054 = G__35842;
count__35055 = G__35843;
i__35056 = G__35844;
continue;
} else {
var it = cljs.core.first(seq__35053__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35846 = cljs.core.next(seq__35053__$1);
var G__35847 = null;
var G__35848 = (0);
var G__35849 = (0);
seq__35053 = G__35846;
chunk__35054 = G__35847;
count__35055 = G__35848;
i__35056 = G__35849;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k35073,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__35087 = k35073;
var G__35087__$1 = (((G__35087 instanceof cljs.core.Keyword))?G__35087.fqn:null);
switch (G__35087__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35073,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__35093){
var vec__35094 = p__35093;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35094,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35094,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35072){
var self__ = this;
var G__35072__$1 = this;
return (new cljs.core.RecordIter((0),G__35072__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35074,other35075){
var self__ = this;
var this35074__$1 = this;
return (((!((other35075 == null)))) && ((((this35074__$1.constructor === other35075.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35074__$1.x,other35075.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35074__$1.y,other35075.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35074__$1.__extmap,other35075.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k35073){
var self__ = this;
var this__5350__auto____$1 = this;
var G__35125 = k35073;
var G__35125__$1 = (((G__35125 instanceof cljs.core.Keyword))?G__35125.fqn:null);
switch (G__35125__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35073);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__35072){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__35129 = cljs.core.keyword_identical_QMARK_;
var expr__35130 = k__5352__auto__;
if(cljs.core.truth_((pred__35129.cljs$core$IFn$_invoke$arity$2 ? pred__35129.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35130) : pred__35129.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35130)))){
return (new shadow.dom.Coordinate(G__35072,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35129.cljs$core$IFn$_invoke$arity$2 ? pred__35129.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35130) : pred__35129.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35130)))){
return (new shadow.dom.Coordinate(self__.x,G__35072,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__35072),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__35072){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35072,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35079){
var extmap__5385__auto__ = (function (){var G__35146 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35079,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35079)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35146);
} else {
return G__35146;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35079),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35079),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k35151,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__35155 = k35151;
var G__35155__$1 = (((G__35155 instanceof cljs.core.Keyword))?G__35155.fqn:null);
switch (G__35155__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35151,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__35156){
var vec__35157 = p__35156;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35157,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35157,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35150){
var self__ = this;
var G__35150__$1 = this;
return (new cljs.core.RecordIter((0),G__35150__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35152,other35153){
var self__ = this;
var this35152__$1 = this;
return (((!((other35153 == null)))) && ((((this35152__$1.constructor === other35153.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35152__$1.w,other35153.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35152__$1.h,other35153.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35152__$1.__extmap,other35153.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k35151){
var self__ = this;
var this__5350__auto____$1 = this;
var G__35168 = k35151;
var G__35168__$1 = (((G__35168 instanceof cljs.core.Keyword))?G__35168.fqn:null);
switch (G__35168__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35151);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__35150){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__35169 = cljs.core.keyword_identical_QMARK_;
var expr__35170 = k__5352__auto__;
if(cljs.core.truth_((pred__35169.cljs$core$IFn$_invoke$arity$2 ? pred__35169.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35170) : pred__35169.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35170)))){
return (new shadow.dom.Size(G__35150,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35169.cljs$core$IFn$_invoke$arity$2 ? pred__35169.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35170) : pred__35169.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35170)))){
return (new shadow.dom.Size(self__.w,G__35150,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__35150),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__35150){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35150,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35154){
var extmap__5385__auto__ = (function (){var G__35174 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35154,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35154)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35174);
} else {
return G__35174;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35154),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35154),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__35881 = (i + (1));
var G__35882 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35881;
ret = G__35882;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35202){
var vec__35203 = p__35202;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35203,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35203,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35216 = arguments.length;
switch (G__35216) {
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
var G__35884 = ps;
var G__35885 = (i + (1));
el__$1 = G__35884;
i = G__35885;
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
var vec__35308 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35308,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35308,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35308,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35321_35896 = cljs.core.seq(props);
var chunk__35322_35897 = null;
var count__35323_35898 = (0);
var i__35324_35899 = (0);
while(true){
if((i__35324_35899 < count__35323_35898)){
var vec__35342_35900 = chunk__35322_35897.cljs$core$IIndexed$_nth$arity$2(null,i__35324_35899);
var k_35901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35342_35900,(0),null);
var v_35902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35342_35900,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_35901);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35901),v_35902);


var G__35903 = seq__35321_35896;
var G__35904 = chunk__35322_35897;
var G__35905 = count__35323_35898;
var G__35906 = (i__35324_35899 + (1));
seq__35321_35896 = G__35903;
chunk__35322_35897 = G__35904;
count__35323_35898 = G__35905;
i__35324_35899 = G__35906;
continue;
} else {
var temp__5804__auto___35908 = cljs.core.seq(seq__35321_35896);
if(temp__5804__auto___35908){
var seq__35321_35909__$1 = temp__5804__auto___35908;
if(cljs.core.chunked_seq_QMARK_(seq__35321_35909__$1)){
var c__5568__auto___35910 = cljs.core.chunk_first(seq__35321_35909__$1);
var G__35911 = cljs.core.chunk_rest(seq__35321_35909__$1);
var G__35912 = c__5568__auto___35910;
var G__35913 = cljs.core.count(c__5568__auto___35910);
var G__35914 = (0);
seq__35321_35896 = G__35911;
chunk__35322_35897 = G__35912;
count__35323_35898 = G__35913;
i__35324_35899 = G__35914;
continue;
} else {
var vec__35347_35915 = cljs.core.first(seq__35321_35909__$1);
var k_35916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35347_35915,(0),null);
var v_35917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35347_35915,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_35916);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35916),v_35917);


var G__35921 = cljs.core.next(seq__35321_35909__$1);
var G__35922 = null;
var G__35923 = (0);
var G__35924 = (0);
seq__35321_35896 = G__35921;
chunk__35322_35897 = G__35922;
count__35323_35898 = G__35923;
i__35324_35899 = G__35924;
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
var vec__35357 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35357,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35357,(1),null);
var seq__35363_35927 = cljs.core.seq(node_children);
var chunk__35365_35928 = null;
var count__35366_35929 = (0);
var i__35367_35930 = (0);
while(true){
if((i__35367_35930 < count__35366_35929)){
var child_struct_35931 = chunk__35365_35928.cljs$core$IIndexed$_nth$arity$2(null,i__35367_35930);
if((!((child_struct_35931 == null)))){
if(typeof child_struct_35931 === 'string'){
var text_35932 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35932),child_struct_35931].join(''));
} else {
var children_35933 = shadow.dom.svg_node(child_struct_35931);
if(cljs.core.seq_QMARK_(children_35933)){
var seq__35401_35934 = cljs.core.seq(children_35933);
var chunk__35403_35935 = null;
var count__35404_35936 = (0);
var i__35405_35937 = (0);
while(true){
if((i__35405_35937 < count__35404_35936)){
var child_35938 = chunk__35403_35935.cljs$core$IIndexed$_nth$arity$2(null,i__35405_35937);
if(cljs.core.truth_(child_35938)){
node.appendChild(child_35938);


var G__35942 = seq__35401_35934;
var G__35943 = chunk__35403_35935;
var G__35944 = count__35404_35936;
var G__35945 = (i__35405_35937 + (1));
seq__35401_35934 = G__35942;
chunk__35403_35935 = G__35943;
count__35404_35936 = G__35944;
i__35405_35937 = G__35945;
continue;
} else {
var G__35946 = seq__35401_35934;
var G__35947 = chunk__35403_35935;
var G__35948 = count__35404_35936;
var G__35949 = (i__35405_35937 + (1));
seq__35401_35934 = G__35946;
chunk__35403_35935 = G__35947;
count__35404_35936 = G__35948;
i__35405_35937 = G__35949;
continue;
}
} else {
var temp__5804__auto___35950 = cljs.core.seq(seq__35401_35934);
if(temp__5804__auto___35950){
var seq__35401_35951__$1 = temp__5804__auto___35950;
if(cljs.core.chunked_seq_QMARK_(seq__35401_35951__$1)){
var c__5568__auto___35952 = cljs.core.chunk_first(seq__35401_35951__$1);
var G__35953 = cljs.core.chunk_rest(seq__35401_35951__$1);
var G__35954 = c__5568__auto___35952;
var G__35955 = cljs.core.count(c__5568__auto___35952);
var G__35956 = (0);
seq__35401_35934 = G__35953;
chunk__35403_35935 = G__35954;
count__35404_35936 = G__35955;
i__35405_35937 = G__35956;
continue;
} else {
var child_35957 = cljs.core.first(seq__35401_35951__$1);
if(cljs.core.truth_(child_35957)){
node.appendChild(child_35957);


var G__35958 = cljs.core.next(seq__35401_35951__$1);
var G__35959 = null;
var G__35960 = (0);
var G__35961 = (0);
seq__35401_35934 = G__35958;
chunk__35403_35935 = G__35959;
count__35404_35936 = G__35960;
i__35405_35937 = G__35961;
continue;
} else {
var G__35962 = cljs.core.next(seq__35401_35951__$1);
var G__35963 = null;
var G__35964 = (0);
var G__35965 = (0);
seq__35401_35934 = G__35962;
chunk__35403_35935 = G__35963;
count__35404_35936 = G__35964;
i__35405_35937 = G__35965;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35933);
}
}


var G__35966 = seq__35363_35927;
var G__35967 = chunk__35365_35928;
var G__35968 = count__35366_35929;
var G__35969 = (i__35367_35930 + (1));
seq__35363_35927 = G__35966;
chunk__35365_35928 = G__35967;
count__35366_35929 = G__35968;
i__35367_35930 = G__35969;
continue;
} else {
var G__35970 = seq__35363_35927;
var G__35971 = chunk__35365_35928;
var G__35972 = count__35366_35929;
var G__35973 = (i__35367_35930 + (1));
seq__35363_35927 = G__35970;
chunk__35365_35928 = G__35971;
count__35366_35929 = G__35972;
i__35367_35930 = G__35973;
continue;
}
} else {
var temp__5804__auto___35974 = cljs.core.seq(seq__35363_35927);
if(temp__5804__auto___35974){
var seq__35363_35976__$1 = temp__5804__auto___35974;
if(cljs.core.chunked_seq_QMARK_(seq__35363_35976__$1)){
var c__5568__auto___35978 = cljs.core.chunk_first(seq__35363_35976__$1);
var G__35979 = cljs.core.chunk_rest(seq__35363_35976__$1);
var G__35980 = c__5568__auto___35978;
var G__35981 = cljs.core.count(c__5568__auto___35978);
var G__35982 = (0);
seq__35363_35927 = G__35979;
chunk__35365_35928 = G__35980;
count__35366_35929 = G__35981;
i__35367_35930 = G__35982;
continue;
} else {
var child_struct_35983 = cljs.core.first(seq__35363_35976__$1);
if((!((child_struct_35983 == null)))){
if(typeof child_struct_35983 === 'string'){
var text_35984 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35984),child_struct_35983].join(''));
} else {
var children_35985 = shadow.dom.svg_node(child_struct_35983);
if(cljs.core.seq_QMARK_(children_35985)){
var seq__35445_35986 = cljs.core.seq(children_35985);
var chunk__35447_35987 = null;
var count__35448_35988 = (0);
var i__35449_35989 = (0);
while(true){
if((i__35449_35989 < count__35448_35988)){
var child_35990 = chunk__35447_35987.cljs$core$IIndexed$_nth$arity$2(null,i__35449_35989);
if(cljs.core.truth_(child_35990)){
node.appendChild(child_35990);


var G__35991 = seq__35445_35986;
var G__35992 = chunk__35447_35987;
var G__35993 = count__35448_35988;
var G__35994 = (i__35449_35989 + (1));
seq__35445_35986 = G__35991;
chunk__35447_35987 = G__35992;
count__35448_35988 = G__35993;
i__35449_35989 = G__35994;
continue;
} else {
var G__35995 = seq__35445_35986;
var G__35996 = chunk__35447_35987;
var G__35997 = count__35448_35988;
var G__35998 = (i__35449_35989 + (1));
seq__35445_35986 = G__35995;
chunk__35447_35987 = G__35996;
count__35448_35988 = G__35997;
i__35449_35989 = G__35998;
continue;
}
} else {
var temp__5804__auto___36000__$1 = cljs.core.seq(seq__35445_35986);
if(temp__5804__auto___36000__$1){
var seq__35445_36002__$1 = temp__5804__auto___36000__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35445_36002__$1)){
var c__5568__auto___36003 = cljs.core.chunk_first(seq__35445_36002__$1);
var G__36004 = cljs.core.chunk_rest(seq__35445_36002__$1);
var G__36005 = c__5568__auto___36003;
var G__36006 = cljs.core.count(c__5568__auto___36003);
var G__36007 = (0);
seq__35445_35986 = G__36004;
chunk__35447_35987 = G__36005;
count__35448_35988 = G__36006;
i__35449_35989 = G__36007;
continue;
} else {
var child_36008 = cljs.core.first(seq__35445_36002__$1);
if(cljs.core.truth_(child_36008)){
node.appendChild(child_36008);


var G__36009 = cljs.core.next(seq__35445_36002__$1);
var G__36010 = null;
var G__36011 = (0);
var G__36012 = (0);
seq__35445_35986 = G__36009;
chunk__35447_35987 = G__36010;
count__35448_35988 = G__36011;
i__35449_35989 = G__36012;
continue;
} else {
var G__36013 = cljs.core.next(seq__35445_36002__$1);
var G__36014 = null;
var G__36015 = (0);
var G__36016 = (0);
seq__35445_35986 = G__36013;
chunk__35447_35987 = G__36014;
count__35448_35988 = G__36015;
i__35449_35989 = G__36016;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35985);
}
}


var G__36017 = cljs.core.next(seq__35363_35976__$1);
var G__36018 = null;
var G__36019 = (0);
var G__36020 = (0);
seq__35363_35927 = G__36017;
chunk__35365_35928 = G__36018;
count__35366_35929 = G__36019;
i__35367_35930 = G__36020;
continue;
} else {
var G__36021 = cljs.core.next(seq__35363_35976__$1);
var G__36022 = null;
var G__36023 = (0);
var G__36024 = (0);
seq__35363_35927 = G__36021;
chunk__35365_35928 = G__36022;
count__35366_35929 = G__36023;
i__35367_35930 = G__36024;
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
var len__5769__auto___36029 = arguments.length;
var i__5770__auto___36030 = (0);
while(true){
if((i__5770__auto___36030 < len__5769__auto___36029)){
args__5775__auto__.push((arguments[i__5770__auto___36030]));

var G__36033 = (i__5770__auto___36030 + (1));
i__5770__auto___36030 = G__36033;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35531){
var G__35532 = cljs.core.first(seq35531);
var seq35531__$1 = cljs.core.next(seq35531);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35532,seq35531__$1);
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
var G__35541 = arguments.length;
switch (G__35541) {
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
var c__30343__auto___36039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30344__auto__ = (function (){var switch__29699__auto__ = (function (state_35553){
var state_val_35554 = (state_35553[(1)]);
if((state_val_35554 === (1))){
var state_35553__$1 = state_35553;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35553__$1,(2),once_or_cleanup);
} else {
if((state_val_35554 === (2))){
var inst_35550 = (state_35553[(2)]);
var inst_35551 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35553__$1 = (function (){var statearr_35559 = state_35553;
(statearr_35559[(7)] = inst_35550);

return statearr_35559;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35553__$1,inst_35551);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29700__auto__ = null;
var shadow$dom$state_machine__29700__auto____0 = (function (){
var statearr_35560 = [null,null,null,null,null,null,null,null];
(statearr_35560[(0)] = shadow$dom$state_machine__29700__auto__);

(statearr_35560[(1)] = (1));

return statearr_35560;
});
var shadow$dom$state_machine__29700__auto____1 = (function (state_35553){
while(true){
var ret_value__29701__auto__ = (function (){try{while(true){
var result__29702__auto__ = switch__29699__auto__(state_35553);
if(cljs.core.keyword_identical_QMARK_(result__29702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29702__auto__;
}
break;
}
}catch (e35564){var ex__29703__auto__ = e35564;
var statearr_35565_36048 = state_35553;
(statearr_35565_36048[(2)] = ex__29703__auto__);


if(cljs.core.seq((state_35553[(4)]))){
var statearr_35566_36049 = state_35553;
(statearr_35566_36049[(1)] = cljs.core.first((state_35553[(4)])));

} else {
throw ex__29703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36053 = state_35553;
state_35553 = G__36053;
continue;
} else {
return ret_value__29701__auto__;
}
break;
}
});
shadow$dom$state_machine__29700__auto__ = function(state_35553){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29700__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29700__auto____1.call(this,state_35553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29700__auto____0;
shadow$dom$state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29700__auto____1;
return shadow$dom$state_machine__29700__auto__;
})()
})();
var state__30346__auto__ = (function (){var statearr_35571 = f__30344__auto__();
(statearr_35571[(6)] = c__30343__auto___36039);

return statearr_35571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30346__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map

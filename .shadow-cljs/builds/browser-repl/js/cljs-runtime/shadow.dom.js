goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35552 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_35552(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35555 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_35555(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33958 = coll;
var G__33959 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33958,G__33959) : shadow.dom.lazy_native_coll_seq.call(null,G__33958,G__33959));
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
var G__33991 = arguments.length;
switch (G__33991) {
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
var G__34008 = arguments.length;
switch (G__34008) {
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
var G__34038 = arguments.length;
switch (G__34038) {
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
var G__34064 = arguments.length;
switch (G__34064) {
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
var G__34099 = arguments.length;
switch (G__34099) {
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
var G__34146 = arguments.length;
switch (G__34146) {
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
}catch (e34222){if((e34222 instanceof Object)){
var e = e34222;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34222;

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
var seq__34255 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34256 = null;
var count__34257 = (0);
var i__34258 = (0);
while(true){
if((i__34258 < count__34257)){
var el = chunk__34256.cljs$core$IIndexed$_nth$arity$2(null,i__34258);
var handler_35578__$1 = ((function (seq__34255,chunk__34256,count__34257,i__34258,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34255,chunk__34256,count__34257,i__34258,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35578__$1);


var G__35579 = seq__34255;
var G__35580 = chunk__34256;
var G__35581 = count__34257;
var G__35582 = (i__34258 + (1));
seq__34255 = G__35579;
chunk__34256 = G__35580;
count__34257 = G__35581;
i__34258 = G__35582;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34255);
if(temp__5804__auto__){
var seq__34255__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34255__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34255__$1);
var G__35583 = cljs.core.chunk_rest(seq__34255__$1);
var G__35584 = c__5568__auto__;
var G__35585 = cljs.core.count(c__5568__auto__);
var G__35586 = (0);
seq__34255 = G__35583;
chunk__34256 = G__35584;
count__34257 = G__35585;
i__34258 = G__35586;
continue;
} else {
var el = cljs.core.first(seq__34255__$1);
var handler_35587__$1 = ((function (seq__34255,chunk__34256,count__34257,i__34258,el,seq__34255__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34255,chunk__34256,count__34257,i__34258,el,seq__34255__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35587__$1);


var G__35588 = cljs.core.next(seq__34255__$1);
var G__35589 = null;
var G__35590 = (0);
var G__35591 = (0);
seq__34255 = G__35588;
chunk__34256 = G__35589;
count__34257 = G__35590;
i__34258 = G__35591;
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
var G__34375 = arguments.length;
switch (G__34375) {
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
var seq__34424 = cljs.core.seq(events);
var chunk__34425 = null;
var count__34426 = (0);
var i__34427 = (0);
while(true){
if((i__34427 < count__34426)){
var vec__34456 = chunk__34425.cljs$core$IIndexed$_nth$arity$2(null,i__34427);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34456,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34456,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35596 = seq__34424;
var G__35597 = chunk__34425;
var G__35598 = count__34426;
var G__35599 = (i__34427 + (1));
seq__34424 = G__35596;
chunk__34425 = G__35597;
count__34426 = G__35598;
i__34427 = G__35599;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34424);
if(temp__5804__auto__){
var seq__34424__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34424__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34424__$1);
var G__35600 = cljs.core.chunk_rest(seq__34424__$1);
var G__35601 = c__5568__auto__;
var G__35602 = cljs.core.count(c__5568__auto__);
var G__35603 = (0);
seq__34424 = G__35600;
chunk__34425 = G__35601;
count__34426 = G__35602;
i__34427 = G__35603;
continue;
} else {
var vec__34463 = cljs.core.first(seq__34424__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34463,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34463,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35605 = cljs.core.next(seq__34424__$1);
var G__35606 = null;
var G__35607 = (0);
var G__35608 = (0);
seq__34424 = G__35605;
chunk__34425 = G__35606;
count__34426 = G__35607;
i__34427 = G__35608;
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
var seq__34468 = cljs.core.seq(styles);
var chunk__34469 = null;
var count__34470 = (0);
var i__34471 = (0);
while(true){
if((i__34471 < count__34470)){
var vec__34490 = chunk__34469.cljs$core$IIndexed$_nth$arity$2(null,i__34471);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34490,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34490,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35613 = seq__34468;
var G__35614 = chunk__34469;
var G__35615 = count__34470;
var G__35616 = (i__34471 + (1));
seq__34468 = G__35613;
chunk__34469 = G__35614;
count__34470 = G__35615;
i__34471 = G__35616;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34468);
if(temp__5804__auto__){
var seq__34468__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34468__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34468__$1);
var G__35619 = cljs.core.chunk_rest(seq__34468__$1);
var G__35620 = c__5568__auto__;
var G__35621 = cljs.core.count(c__5568__auto__);
var G__35622 = (0);
seq__34468 = G__35619;
chunk__34469 = G__35620;
count__34470 = G__35621;
i__34471 = G__35622;
continue;
} else {
var vec__34506 = cljs.core.first(seq__34468__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34506,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34506,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35623 = cljs.core.next(seq__34468__$1);
var G__35624 = null;
var G__35625 = (0);
var G__35626 = (0);
seq__34468 = G__35623;
chunk__34469 = G__35624;
count__34470 = G__35625;
i__34471 = G__35626;
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
var G__34538_35627 = key;
var G__34538_35628__$1 = (((G__34538_35627 instanceof cljs.core.Keyword))?G__34538_35627.fqn:null);
switch (G__34538_35628__$1) {
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
var ks_35634 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_35634,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_35634,"aria-");
}
})())){
el.setAttribute(ks_35634,value);
} else {
(el[ks_35634] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34585){
var map__34586 = p__34585;
var map__34586__$1 = cljs.core.__destructure_map(map__34586);
var props = map__34586__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34586__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34588 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34588,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34588,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34588,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34592 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34592,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34592;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34600 = arguments.length;
switch (G__34600) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34615){
var vec__34617 = p__34615;
var seq__34618 = cljs.core.seq(vec__34617);
var first__34619 = cljs.core.first(seq__34618);
var seq__34618__$1 = cljs.core.next(seq__34618);
var nn = first__34619;
var first__34619__$1 = cljs.core.first(seq__34618__$1);
var seq__34618__$2 = cljs.core.next(seq__34618__$1);
var np = first__34619__$1;
var nc = seq__34618__$2;
var node = vec__34617;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34626 = nn;
var G__34627 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34626,G__34627) : create_fn.call(null,G__34626,G__34627));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34630 = nn;
var G__34631 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34630,G__34631) : create_fn.call(null,G__34630,G__34631));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34636 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34636,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34636,(1),null);
var seq__34639_35642 = cljs.core.seq(node_children);
var chunk__34640_35643 = null;
var count__34641_35644 = (0);
var i__34642_35645 = (0);
while(true){
if((i__34642_35645 < count__34641_35644)){
var child_struct_35646 = chunk__34640_35643.cljs$core$IIndexed$_nth$arity$2(null,i__34642_35645);
var children_35647 = shadow.dom.dom_node(child_struct_35646);
if(cljs.core.seq_QMARK_(children_35647)){
var seq__34714_35648 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35647));
var chunk__34716_35649 = null;
var count__34717_35650 = (0);
var i__34718_35651 = (0);
while(true){
if((i__34718_35651 < count__34717_35650)){
var child_35652 = chunk__34716_35649.cljs$core$IIndexed$_nth$arity$2(null,i__34718_35651);
if(cljs.core.truth_(child_35652)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35652);


var G__35653 = seq__34714_35648;
var G__35654 = chunk__34716_35649;
var G__35655 = count__34717_35650;
var G__35656 = (i__34718_35651 + (1));
seq__34714_35648 = G__35653;
chunk__34716_35649 = G__35654;
count__34717_35650 = G__35655;
i__34718_35651 = G__35656;
continue;
} else {
var G__35657 = seq__34714_35648;
var G__35658 = chunk__34716_35649;
var G__35659 = count__34717_35650;
var G__35660 = (i__34718_35651 + (1));
seq__34714_35648 = G__35657;
chunk__34716_35649 = G__35658;
count__34717_35650 = G__35659;
i__34718_35651 = G__35660;
continue;
}
} else {
var temp__5804__auto___35661 = cljs.core.seq(seq__34714_35648);
if(temp__5804__auto___35661){
var seq__34714_35662__$1 = temp__5804__auto___35661;
if(cljs.core.chunked_seq_QMARK_(seq__34714_35662__$1)){
var c__5568__auto___35663 = cljs.core.chunk_first(seq__34714_35662__$1);
var G__35665 = cljs.core.chunk_rest(seq__34714_35662__$1);
var G__35666 = c__5568__auto___35663;
var G__35667 = cljs.core.count(c__5568__auto___35663);
var G__35668 = (0);
seq__34714_35648 = G__35665;
chunk__34716_35649 = G__35666;
count__34717_35650 = G__35667;
i__34718_35651 = G__35668;
continue;
} else {
var child_35669 = cljs.core.first(seq__34714_35662__$1);
if(cljs.core.truth_(child_35669)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35669);


var G__35670 = cljs.core.next(seq__34714_35662__$1);
var G__35671 = null;
var G__35672 = (0);
var G__35673 = (0);
seq__34714_35648 = G__35670;
chunk__34716_35649 = G__35671;
count__34717_35650 = G__35672;
i__34718_35651 = G__35673;
continue;
} else {
var G__35674 = cljs.core.next(seq__34714_35662__$1);
var G__35675 = null;
var G__35676 = (0);
var G__35677 = (0);
seq__34714_35648 = G__35674;
chunk__34716_35649 = G__35675;
count__34717_35650 = G__35676;
i__34718_35651 = G__35677;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35647);
}


var G__35678 = seq__34639_35642;
var G__35679 = chunk__34640_35643;
var G__35680 = count__34641_35644;
var G__35681 = (i__34642_35645 + (1));
seq__34639_35642 = G__35678;
chunk__34640_35643 = G__35679;
count__34641_35644 = G__35680;
i__34642_35645 = G__35681;
continue;
} else {
var temp__5804__auto___35682 = cljs.core.seq(seq__34639_35642);
if(temp__5804__auto___35682){
var seq__34639_35683__$1 = temp__5804__auto___35682;
if(cljs.core.chunked_seq_QMARK_(seq__34639_35683__$1)){
var c__5568__auto___35684 = cljs.core.chunk_first(seq__34639_35683__$1);
var G__35685 = cljs.core.chunk_rest(seq__34639_35683__$1);
var G__35686 = c__5568__auto___35684;
var G__35687 = cljs.core.count(c__5568__auto___35684);
var G__35688 = (0);
seq__34639_35642 = G__35685;
chunk__34640_35643 = G__35686;
count__34641_35644 = G__35687;
i__34642_35645 = G__35688;
continue;
} else {
var child_struct_35689 = cljs.core.first(seq__34639_35683__$1);
var children_35690 = shadow.dom.dom_node(child_struct_35689);
if(cljs.core.seq_QMARK_(children_35690)){
var seq__34746_35691 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35690));
var chunk__34749_35692 = null;
var count__34750_35693 = (0);
var i__34751_35694 = (0);
while(true){
if((i__34751_35694 < count__34750_35693)){
var child_35696 = chunk__34749_35692.cljs$core$IIndexed$_nth$arity$2(null,i__34751_35694);
if(cljs.core.truth_(child_35696)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35696);


var G__35698 = seq__34746_35691;
var G__35699 = chunk__34749_35692;
var G__35700 = count__34750_35693;
var G__35701 = (i__34751_35694 + (1));
seq__34746_35691 = G__35698;
chunk__34749_35692 = G__35699;
count__34750_35693 = G__35700;
i__34751_35694 = G__35701;
continue;
} else {
var G__35702 = seq__34746_35691;
var G__35703 = chunk__34749_35692;
var G__35704 = count__34750_35693;
var G__35705 = (i__34751_35694 + (1));
seq__34746_35691 = G__35702;
chunk__34749_35692 = G__35703;
count__34750_35693 = G__35704;
i__34751_35694 = G__35705;
continue;
}
} else {
var temp__5804__auto___35706__$1 = cljs.core.seq(seq__34746_35691);
if(temp__5804__auto___35706__$1){
var seq__34746_35707__$1 = temp__5804__auto___35706__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34746_35707__$1)){
var c__5568__auto___35708 = cljs.core.chunk_first(seq__34746_35707__$1);
var G__35709 = cljs.core.chunk_rest(seq__34746_35707__$1);
var G__35710 = c__5568__auto___35708;
var G__35711 = cljs.core.count(c__5568__auto___35708);
var G__35712 = (0);
seq__34746_35691 = G__35709;
chunk__34749_35692 = G__35710;
count__34750_35693 = G__35711;
i__34751_35694 = G__35712;
continue;
} else {
var child_35713 = cljs.core.first(seq__34746_35707__$1);
if(cljs.core.truth_(child_35713)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35713);


var G__35714 = cljs.core.next(seq__34746_35707__$1);
var G__35715 = null;
var G__35716 = (0);
var G__35717 = (0);
seq__34746_35691 = G__35714;
chunk__34749_35692 = G__35715;
count__34750_35693 = G__35716;
i__34751_35694 = G__35717;
continue;
} else {
var G__35718 = cljs.core.next(seq__34746_35707__$1);
var G__35719 = null;
var G__35720 = (0);
var G__35721 = (0);
seq__34746_35691 = G__35718;
chunk__34749_35692 = G__35719;
count__34750_35693 = G__35720;
i__34751_35694 = G__35721;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35690);
}


var G__35722 = cljs.core.next(seq__34639_35683__$1);
var G__35723 = null;
var G__35724 = (0);
var G__35725 = (0);
seq__34639_35642 = G__35722;
chunk__34640_35643 = G__35723;
count__34641_35644 = G__35724;
i__34642_35645 = G__35725;
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
var seq__34808 = cljs.core.seq(node);
var chunk__34809 = null;
var count__34810 = (0);
var i__34811 = (0);
while(true){
if((i__34811 < count__34810)){
var n = chunk__34809.cljs$core$IIndexed$_nth$arity$2(null,i__34811);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35733 = seq__34808;
var G__35734 = chunk__34809;
var G__35735 = count__34810;
var G__35736 = (i__34811 + (1));
seq__34808 = G__35733;
chunk__34809 = G__35734;
count__34810 = G__35735;
i__34811 = G__35736;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34808);
if(temp__5804__auto__){
var seq__34808__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34808__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34808__$1);
var G__35737 = cljs.core.chunk_rest(seq__34808__$1);
var G__35738 = c__5568__auto__;
var G__35739 = cljs.core.count(c__5568__auto__);
var G__35740 = (0);
seq__34808 = G__35737;
chunk__34809 = G__35738;
count__34810 = G__35739;
i__34811 = G__35740;
continue;
} else {
var n = cljs.core.first(seq__34808__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35743 = cljs.core.next(seq__34808__$1);
var G__35744 = null;
var G__35745 = (0);
var G__35746 = (0);
seq__34808 = G__35743;
chunk__34809 = G__35744;
count__34810 = G__35745;
i__34811 = G__35746;
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
var G__34858 = arguments.length;
switch (G__34858) {
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
var G__34874 = arguments.length;
switch (G__34874) {
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
var G__34903 = arguments.length;
switch (G__34903) {
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
var len__5769__auto___35754 = arguments.length;
var i__5770__auto___35755 = (0);
while(true){
if((i__5770__auto___35755 < len__5769__auto___35754)){
args__5775__auto__.push((arguments[i__5770__auto___35755]));

var G__35756 = (i__5770__auto___35755 + (1));
i__5770__auto___35755 = G__35756;
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
var seq__34944_35759 = cljs.core.seq(nodes);
var chunk__34945_35760 = null;
var count__34946_35761 = (0);
var i__34947_35762 = (0);
while(true){
if((i__34947_35762 < count__34946_35761)){
var node_35764 = chunk__34945_35760.cljs$core$IIndexed$_nth$arity$2(null,i__34947_35762);
fragment.appendChild(shadow.dom._to_dom(node_35764));


var G__35765 = seq__34944_35759;
var G__35766 = chunk__34945_35760;
var G__35767 = count__34946_35761;
var G__35768 = (i__34947_35762 + (1));
seq__34944_35759 = G__35765;
chunk__34945_35760 = G__35766;
count__34946_35761 = G__35767;
i__34947_35762 = G__35768;
continue;
} else {
var temp__5804__auto___35769 = cljs.core.seq(seq__34944_35759);
if(temp__5804__auto___35769){
var seq__34944_35773__$1 = temp__5804__auto___35769;
if(cljs.core.chunked_seq_QMARK_(seq__34944_35773__$1)){
var c__5568__auto___35774 = cljs.core.chunk_first(seq__34944_35773__$1);
var G__35775 = cljs.core.chunk_rest(seq__34944_35773__$1);
var G__35776 = c__5568__auto___35774;
var G__35777 = cljs.core.count(c__5568__auto___35774);
var G__35778 = (0);
seq__34944_35759 = G__35775;
chunk__34945_35760 = G__35776;
count__34946_35761 = G__35777;
i__34947_35762 = G__35778;
continue;
} else {
var node_35779 = cljs.core.first(seq__34944_35773__$1);
fragment.appendChild(shadow.dom._to_dom(node_35779));


var G__35781 = cljs.core.next(seq__34944_35773__$1);
var G__35782 = null;
var G__35783 = (0);
var G__35784 = (0);
seq__34944_35759 = G__35781;
chunk__34945_35760 = G__35782;
count__34946_35761 = G__35783;
i__34947_35762 = G__35784;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34935){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34935));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34972_35787 = cljs.core.seq(scripts);
var chunk__34973_35788 = null;
var count__34974_35789 = (0);
var i__34975_35790 = (0);
while(true){
if((i__34975_35790 < count__34974_35789)){
var vec__34985_35791 = chunk__34973_35788.cljs$core$IIndexed$_nth$arity$2(null,i__34975_35790);
var script_tag_35792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34985_35791,(0),null);
var script_body_35793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34985_35791,(1),null);
eval(script_body_35793);


var G__35794 = seq__34972_35787;
var G__35795 = chunk__34973_35788;
var G__35796 = count__34974_35789;
var G__35797 = (i__34975_35790 + (1));
seq__34972_35787 = G__35794;
chunk__34973_35788 = G__35795;
count__34974_35789 = G__35796;
i__34975_35790 = G__35797;
continue;
} else {
var temp__5804__auto___35798 = cljs.core.seq(seq__34972_35787);
if(temp__5804__auto___35798){
var seq__34972_35799__$1 = temp__5804__auto___35798;
if(cljs.core.chunked_seq_QMARK_(seq__34972_35799__$1)){
var c__5568__auto___35800 = cljs.core.chunk_first(seq__34972_35799__$1);
var G__35801 = cljs.core.chunk_rest(seq__34972_35799__$1);
var G__35802 = c__5568__auto___35800;
var G__35803 = cljs.core.count(c__5568__auto___35800);
var G__35804 = (0);
seq__34972_35787 = G__35801;
chunk__34973_35788 = G__35802;
count__34974_35789 = G__35803;
i__34975_35790 = G__35804;
continue;
} else {
var vec__34988_35807 = cljs.core.first(seq__34972_35799__$1);
var script_tag_35808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34988_35807,(0),null);
var script_body_35809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34988_35807,(1),null);
eval(script_body_35809);


var G__35810 = cljs.core.next(seq__34972_35799__$1);
var G__35811 = null;
var G__35812 = (0);
var G__35813 = (0);
seq__34972_35787 = G__35810;
chunk__34973_35788 = G__35811;
count__34974_35789 = G__35812;
i__34975_35790 = G__35813;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34991){
var vec__34992 = p__34991;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34992,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34992,(1),null);
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
var G__34997 = arguments.length;
switch (G__34997) {
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
var seq__35029 = cljs.core.seq(style_keys);
var chunk__35030 = null;
var count__35031 = (0);
var i__35032 = (0);
while(true){
if((i__35032 < count__35031)){
var it = chunk__35030.cljs$core$IIndexed$_nth$arity$2(null,i__35032);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35823 = seq__35029;
var G__35824 = chunk__35030;
var G__35825 = count__35031;
var G__35826 = (i__35032 + (1));
seq__35029 = G__35823;
chunk__35030 = G__35824;
count__35031 = G__35825;
i__35032 = G__35826;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35029);
if(temp__5804__auto__){
var seq__35029__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35029__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35029__$1);
var G__35829 = cljs.core.chunk_rest(seq__35029__$1);
var G__35830 = c__5568__auto__;
var G__35831 = cljs.core.count(c__5568__auto__);
var G__35832 = (0);
seq__35029 = G__35829;
chunk__35030 = G__35830;
count__35031 = G__35831;
i__35032 = G__35832;
continue;
} else {
var it = cljs.core.first(seq__35029__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35834 = cljs.core.next(seq__35029__$1);
var G__35835 = null;
var G__35836 = (0);
var G__35837 = (0);
seq__35029 = G__35834;
chunk__35030 = G__35835;
count__35031 = G__35836;
i__35032 = G__35837;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k35048,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__35068 = k35048;
var G__35068__$1 = (((G__35068 instanceof cljs.core.Keyword))?G__35068.fqn:null);
switch (G__35068__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35048,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__35073){
var vec__35075 = p__35073;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35075,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35075,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35047){
var self__ = this;
var G__35047__$1 = this;
return (new cljs.core.RecordIter((0),G__35047__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35049,other35050){
var self__ = this;
var this35049__$1 = this;
return (((!((other35050 == null)))) && ((((this35049__$1.constructor === other35050.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35049__$1.x,other35050.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35049__$1.y,other35050.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35049__$1.__extmap,other35050.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k35048){
var self__ = this;
var this__5350__auto____$1 = this;
var G__35100 = k35048;
var G__35100__$1 = (((G__35100 instanceof cljs.core.Keyword))?G__35100.fqn:null);
switch (G__35100__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35048);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__35047){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__35104 = cljs.core.keyword_identical_QMARK_;
var expr__35105 = k__5352__auto__;
if(cljs.core.truth_((pred__35104.cljs$core$IFn$_invoke$arity$2 ? pred__35104.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35105) : pred__35104.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35105)))){
return (new shadow.dom.Coordinate(G__35047,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35104.cljs$core$IFn$_invoke$arity$2 ? pred__35104.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35105) : pred__35104.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35105)))){
return (new shadow.dom.Coordinate(self__.x,G__35047,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__35047),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__35047){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35047,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35053){
var extmap__5385__auto__ = (function (){var G__35128 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35053,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35053)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35128);
} else {
return G__35128;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35053),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35053),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k35138,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__35149 = k35138;
var G__35149__$1 = (((G__35149 instanceof cljs.core.Keyword))?G__35149.fqn:null);
switch (G__35149__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35138,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__35153){
var vec__35154 = p__35153;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35154,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35154,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35137){
var self__ = this;
var G__35137__$1 = this;
return (new cljs.core.RecordIter((0),G__35137__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35140,other35141){
var self__ = this;
var this35140__$1 = this;
return (((!((other35141 == null)))) && ((((this35140__$1.constructor === other35141.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35140__$1.w,other35141.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35140__$1.h,other35141.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35140__$1.__extmap,other35141.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k35138){
var self__ = this;
var this__5350__auto____$1 = this;
var G__35157 = k35138;
var G__35157__$1 = (((G__35157 instanceof cljs.core.Keyword))?G__35157.fqn:null);
switch (G__35157__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35138);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__35137){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__35159 = cljs.core.keyword_identical_QMARK_;
var expr__35160 = k__5352__auto__;
if(cljs.core.truth_((pred__35159.cljs$core$IFn$_invoke$arity$2 ? pred__35159.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35160) : pred__35159.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35160)))){
return (new shadow.dom.Size(G__35137,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35159.cljs$core$IFn$_invoke$arity$2 ? pred__35159.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35160) : pred__35159.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35160)))){
return (new shadow.dom.Size(self__.w,G__35137,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__35137),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__35137){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35137,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35145){
var extmap__5385__auto__ = (function (){var G__35164 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35145,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35145)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35164);
} else {
return G__35164;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35145),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35145),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__35862 = (i + (1));
var G__35863 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35862;
ret = G__35863;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35177){
var vec__35178 = p__35177;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35178,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35178,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35182 = arguments.length;
switch (G__35182) {
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
var G__35865 = ps;
var G__35866 = (i + (1));
el__$1 = G__35865;
i = G__35866;
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
var vec__35201 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35201,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35201,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35201,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35210_35867 = cljs.core.seq(props);
var chunk__35211_35868 = null;
var count__35212_35869 = (0);
var i__35213_35870 = (0);
while(true){
if((i__35213_35870 < count__35212_35869)){
var vec__35229_35871 = chunk__35211_35868.cljs$core$IIndexed$_nth$arity$2(null,i__35213_35870);
var k_35872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35229_35871,(0),null);
var v_35873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35229_35871,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_35872);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35872),v_35873);


var G__35876 = seq__35210_35867;
var G__35877 = chunk__35211_35868;
var G__35878 = count__35212_35869;
var G__35879 = (i__35213_35870 + (1));
seq__35210_35867 = G__35876;
chunk__35211_35868 = G__35877;
count__35212_35869 = G__35878;
i__35213_35870 = G__35879;
continue;
} else {
var temp__5804__auto___35880 = cljs.core.seq(seq__35210_35867);
if(temp__5804__auto___35880){
var seq__35210_35881__$1 = temp__5804__auto___35880;
if(cljs.core.chunked_seq_QMARK_(seq__35210_35881__$1)){
var c__5568__auto___35882 = cljs.core.chunk_first(seq__35210_35881__$1);
var G__35883 = cljs.core.chunk_rest(seq__35210_35881__$1);
var G__35884 = c__5568__auto___35882;
var G__35885 = cljs.core.count(c__5568__auto___35882);
var G__35886 = (0);
seq__35210_35867 = G__35883;
chunk__35211_35868 = G__35884;
count__35212_35869 = G__35885;
i__35213_35870 = G__35886;
continue;
} else {
var vec__35239_35887 = cljs.core.first(seq__35210_35881__$1);
var k_35888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35239_35887,(0),null);
var v_35889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35239_35887,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_35888);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35888),v_35889);


var G__35893 = cljs.core.next(seq__35210_35881__$1);
var G__35894 = null;
var G__35895 = (0);
var G__35896 = (0);
seq__35210_35867 = G__35893;
chunk__35211_35868 = G__35894;
count__35212_35869 = G__35895;
i__35213_35870 = G__35896;
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
var vec__35245 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35245,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35245,(1),null);
var seq__35248_35902 = cljs.core.seq(node_children);
var chunk__35250_35903 = null;
var count__35251_35904 = (0);
var i__35252_35905 = (0);
while(true){
if((i__35252_35905 < count__35251_35904)){
var child_struct_35908 = chunk__35250_35903.cljs$core$IIndexed$_nth$arity$2(null,i__35252_35905);
if((!((child_struct_35908 == null)))){
if(typeof child_struct_35908 === 'string'){
var text_35909 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35909),child_struct_35908].join(''));
} else {
var children_35910 = shadow.dom.svg_node(child_struct_35908);
if(cljs.core.seq_QMARK_(children_35910)){
var seq__35371_35911 = cljs.core.seq(children_35910);
var chunk__35373_35912 = null;
var count__35374_35913 = (0);
var i__35375_35914 = (0);
while(true){
if((i__35375_35914 < count__35374_35913)){
var child_35915 = chunk__35373_35912.cljs$core$IIndexed$_nth$arity$2(null,i__35375_35914);
if(cljs.core.truth_(child_35915)){
node.appendChild(child_35915);


var G__35916 = seq__35371_35911;
var G__35917 = chunk__35373_35912;
var G__35918 = count__35374_35913;
var G__35919 = (i__35375_35914 + (1));
seq__35371_35911 = G__35916;
chunk__35373_35912 = G__35917;
count__35374_35913 = G__35918;
i__35375_35914 = G__35919;
continue;
} else {
var G__35920 = seq__35371_35911;
var G__35921 = chunk__35373_35912;
var G__35922 = count__35374_35913;
var G__35923 = (i__35375_35914 + (1));
seq__35371_35911 = G__35920;
chunk__35373_35912 = G__35921;
count__35374_35913 = G__35922;
i__35375_35914 = G__35923;
continue;
}
} else {
var temp__5804__auto___35925 = cljs.core.seq(seq__35371_35911);
if(temp__5804__auto___35925){
var seq__35371_35926__$1 = temp__5804__auto___35925;
if(cljs.core.chunked_seq_QMARK_(seq__35371_35926__$1)){
var c__5568__auto___35927 = cljs.core.chunk_first(seq__35371_35926__$1);
var G__35928 = cljs.core.chunk_rest(seq__35371_35926__$1);
var G__35929 = c__5568__auto___35927;
var G__35930 = cljs.core.count(c__5568__auto___35927);
var G__35931 = (0);
seq__35371_35911 = G__35928;
chunk__35373_35912 = G__35929;
count__35374_35913 = G__35930;
i__35375_35914 = G__35931;
continue;
} else {
var child_35932 = cljs.core.first(seq__35371_35926__$1);
if(cljs.core.truth_(child_35932)){
node.appendChild(child_35932);


var G__35933 = cljs.core.next(seq__35371_35926__$1);
var G__35934 = null;
var G__35935 = (0);
var G__35936 = (0);
seq__35371_35911 = G__35933;
chunk__35373_35912 = G__35934;
count__35374_35913 = G__35935;
i__35375_35914 = G__35936;
continue;
} else {
var G__35937 = cljs.core.next(seq__35371_35926__$1);
var G__35938 = null;
var G__35939 = (0);
var G__35940 = (0);
seq__35371_35911 = G__35937;
chunk__35373_35912 = G__35938;
count__35374_35913 = G__35939;
i__35375_35914 = G__35940;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35910);
}
}


var G__35941 = seq__35248_35902;
var G__35942 = chunk__35250_35903;
var G__35943 = count__35251_35904;
var G__35944 = (i__35252_35905 + (1));
seq__35248_35902 = G__35941;
chunk__35250_35903 = G__35942;
count__35251_35904 = G__35943;
i__35252_35905 = G__35944;
continue;
} else {
var G__35945 = seq__35248_35902;
var G__35946 = chunk__35250_35903;
var G__35947 = count__35251_35904;
var G__35948 = (i__35252_35905 + (1));
seq__35248_35902 = G__35945;
chunk__35250_35903 = G__35946;
count__35251_35904 = G__35947;
i__35252_35905 = G__35948;
continue;
}
} else {
var temp__5804__auto___35949 = cljs.core.seq(seq__35248_35902);
if(temp__5804__auto___35949){
var seq__35248_35950__$1 = temp__5804__auto___35949;
if(cljs.core.chunked_seq_QMARK_(seq__35248_35950__$1)){
var c__5568__auto___35951 = cljs.core.chunk_first(seq__35248_35950__$1);
var G__35952 = cljs.core.chunk_rest(seq__35248_35950__$1);
var G__35953 = c__5568__auto___35951;
var G__35954 = cljs.core.count(c__5568__auto___35951);
var G__35955 = (0);
seq__35248_35902 = G__35952;
chunk__35250_35903 = G__35953;
count__35251_35904 = G__35954;
i__35252_35905 = G__35955;
continue;
} else {
var child_struct_35956 = cljs.core.first(seq__35248_35950__$1);
if((!((child_struct_35956 == null)))){
if(typeof child_struct_35956 === 'string'){
var text_35957 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35957),child_struct_35956].join(''));
} else {
var children_35958 = shadow.dom.svg_node(child_struct_35956);
if(cljs.core.seq_QMARK_(children_35958)){
var seq__35391_35959 = cljs.core.seq(children_35958);
var chunk__35393_35960 = null;
var count__35394_35961 = (0);
var i__35395_35962 = (0);
while(true){
if((i__35395_35962 < count__35394_35961)){
var child_35963 = chunk__35393_35960.cljs$core$IIndexed$_nth$arity$2(null,i__35395_35962);
if(cljs.core.truth_(child_35963)){
node.appendChild(child_35963);


var G__35964 = seq__35391_35959;
var G__35965 = chunk__35393_35960;
var G__35966 = count__35394_35961;
var G__35967 = (i__35395_35962 + (1));
seq__35391_35959 = G__35964;
chunk__35393_35960 = G__35965;
count__35394_35961 = G__35966;
i__35395_35962 = G__35967;
continue;
} else {
var G__35968 = seq__35391_35959;
var G__35969 = chunk__35393_35960;
var G__35970 = count__35394_35961;
var G__35971 = (i__35395_35962 + (1));
seq__35391_35959 = G__35968;
chunk__35393_35960 = G__35969;
count__35394_35961 = G__35970;
i__35395_35962 = G__35971;
continue;
}
} else {
var temp__5804__auto___35972__$1 = cljs.core.seq(seq__35391_35959);
if(temp__5804__auto___35972__$1){
var seq__35391_35973__$1 = temp__5804__auto___35972__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35391_35973__$1)){
var c__5568__auto___35974 = cljs.core.chunk_first(seq__35391_35973__$1);
var G__35975 = cljs.core.chunk_rest(seq__35391_35973__$1);
var G__35976 = c__5568__auto___35974;
var G__35977 = cljs.core.count(c__5568__auto___35974);
var G__35978 = (0);
seq__35391_35959 = G__35975;
chunk__35393_35960 = G__35976;
count__35394_35961 = G__35977;
i__35395_35962 = G__35978;
continue;
} else {
var child_35979 = cljs.core.first(seq__35391_35973__$1);
if(cljs.core.truth_(child_35979)){
node.appendChild(child_35979);


var G__35980 = cljs.core.next(seq__35391_35973__$1);
var G__35981 = null;
var G__35982 = (0);
var G__35983 = (0);
seq__35391_35959 = G__35980;
chunk__35393_35960 = G__35981;
count__35394_35961 = G__35982;
i__35395_35962 = G__35983;
continue;
} else {
var G__35984 = cljs.core.next(seq__35391_35973__$1);
var G__35985 = null;
var G__35986 = (0);
var G__35987 = (0);
seq__35391_35959 = G__35984;
chunk__35393_35960 = G__35985;
count__35394_35961 = G__35986;
i__35395_35962 = G__35987;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35958);
}
}


var G__35988 = cljs.core.next(seq__35248_35950__$1);
var G__35989 = null;
var G__35990 = (0);
var G__35991 = (0);
seq__35248_35902 = G__35988;
chunk__35250_35903 = G__35989;
count__35251_35904 = G__35990;
i__35252_35905 = G__35991;
continue;
} else {
var G__35992 = cljs.core.next(seq__35248_35950__$1);
var G__35993 = null;
var G__35994 = (0);
var G__35995 = (0);
seq__35248_35902 = G__35992;
chunk__35250_35903 = G__35993;
count__35251_35904 = G__35994;
i__35252_35905 = G__35995;
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
var len__5769__auto___36001 = arguments.length;
var i__5770__auto___36002 = (0);
while(true){
if((i__5770__auto___36002 < len__5769__auto___36001)){
args__5775__auto__.push((arguments[i__5770__auto___36002]));

var G__36003 = (i__5770__auto___36002 + (1));
i__5770__auto___36002 = G__36003;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35411){
var G__35412 = cljs.core.first(seq35411);
var seq35411__$1 = cljs.core.next(seq35411);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35412,seq35411__$1);
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
var G__35443 = arguments.length;
switch (G__35443) {
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
var c__30067__auto___36015 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30068__auto__ = (function (){var switch__29501__auto__ = (function (state_35458){
var state_val_35459 = (state_35458[(1)]);
if((state_val_35459 === (1))){
var state_35458__$1 = state_35458;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35458__$1,(2),once_or_cleanup);
} else {
if((state_val_35459 === (2))){
var inst_35454 = (state_35458[(2)]);
var inst_35455 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35458__$1 = (function (){var statearr_35460 = state_35458;
(statearr_35460[(7)] = inst_35454);

return statearr_35460;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35458__$1,inst_35455);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29502__auto__ = null;
var shadow$dom$state_machine__29502__auto____0 = (function (){
var statearr_35461 = [null,null,null,null,null,null,null,null];
(statearr_35461[(0)] = shadow$dom$state_machine__29502__auto__);

(statearr_35461[(1)] = (1));

return statearr_35461;
});
var shadow$dom$state_machine__29502__auto____1 = (function (state_35458){
while(true){
var ret_value__29503__auto__ = (function (){try{while(true){
var result__29504__auto__ = switch__29501__auto__(state_35458);
if(cljs.core.keyword_identical_QMARK_(result__29504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29504__auto__;
}
break;
}
}catch (e35462){var ex__29505__auto__ = e35462;
var statearr_35463_36016 = state_35458;
(statearr_35463_36016[(2)] = ex__29505__auto__);


if(cljs.core.seq((state_35458[(4)]))){
var statearr_35468_36017 = state_35458;
(statearr_35468_36017[(1)] = cljs.core.first((state_35458[(4)])));

} else {
throw ex__29505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36018 = state_35458;
state_35458 = G__36018;
continue;
} else {
return ret_value__29503__auto__;
}
break;
}
});
shadow$dom$state_machine__29502__auto__ = function(state_35458){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29502__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29502__auto____1.call(this,state_35458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29502__auto____0;
shadow$dom$state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29502__auto____1;
return shadow$dom$state_machine__29502__auto__;
})()
})();
var state__30069__auto__ = (function (){var statearr_35482 = f__30068__auto__();
(statearr_35482[(6)] = c__30067__auto___36015);

return statearr_35482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30069__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map

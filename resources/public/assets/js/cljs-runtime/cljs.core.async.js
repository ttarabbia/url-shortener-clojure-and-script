goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30443 = arguments.length;
switch (G__30443) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30445 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30445 = (function (f,blockable,meta30446){
this.f = f;
this.blockable = blockable;
this.meta30446 = meta30446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30447,meta30446__$1){
var self__ = this;
var _30447__$1 = this;
return (new cljs.core.async.t_cljs$core$async30445(self__.f,self__.blockable,meta30446__$1));
}));

(cljs.core.async.t_cljs$core$async30445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30447){
var self__ = this;
var _30447__$1 = this;
return self__.meta30446;
}));

(cljs.core.async.t_cljs$core$async30445.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30445.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30445.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30445.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30445.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30446","meta30446",1492031811,null)], null);
}));

(cljs.core.async.t_cljs$core$async30445.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30445.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30445");

(cljs.core.async.t_cljs$core$async30445.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30445");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30445.
 */
cljs.core.async.__GT_t_cljs$core$async30445 = (function cljs$core$async$__GT_t_cljs$core$async30445(f__$1,blockable__$1,meta30446){
return (new cljs.core.async.t_cljs$core$async30445(f__$1,blockable__$1,meta30446));
});

}

return (new cljs.core.async.t_cljs$core$async30445(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30491 = arguments.length;
switch (G__30491) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30508 = arguments.length;
switch (G__30508) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30538 = arguments.length;
switch (G__30538) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34308 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34308) : fn1.call(null,val_34308));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34308) : fn1.call(null,val_34308));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30567 = arguments.length;
switch (G__30567) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___34320 = n;
var x_34321 = (0);
while(true){
if((x_34321 < n__5636__auto___34320)){
(a[x_34321] = x_34321);

var G__34322 = (x_34321 + (1));
x_34321 = G__34322;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30588 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30588 = (function (flag,meta30589){
this.flag = flag;
this.meta30589 = meta30589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30590,meta30589__$1){
var self__ = this;
var _30590__$1 = this;
return (new cljs.core.async.t_cljs$core$async30588(self__.flag,meta30589__$1));
}));

(cljs.core.async.t_cljs$core$async30588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30590){
var self__ = this;
var _30590__$1 = this;
return self__.meta30589;
}));

(cljs.core.async.t_cljs$core$async30588.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30588.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30588.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30588.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30589","meta30589",648919454,null)], null);
}));

(cljs.core.async.t_cljs$core$async30588.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30588.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30588");

(cljs.core.async.t_cljs$core$async30588.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30588");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30588.
 */
cljs.core.async.__GT_t_cljs$core$async30588 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30588(flag__$1,meta30589){
return (new cljs.core.async.t_cljs$core$async30588(flag__$1,meta30589));
});

}

return (new cljs.core.async.t_cljs$core$async30588(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30614 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30614 = (function (flag,cb,meta30615){
this.flag = flag;
this.cb = cb;
this.meta30615 = meta30615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30616,meta30615__$1){
var self__ = this;
var _30616__$1 = this;
return (new cljs.core.async.t_cljs$core$async30614(self__.flag,self__.cb,meta30615__$1));
}));

(cljs.core.async.t_cljs$core$async30614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30616){
var self__ = this;
var _30616__$1 = this;
return self__.meta30615;
}));

(cljs.core.async.t_cljs$core$async30614.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30614.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30614.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30614.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30614.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30615","meta30615",-1678430864,null)], null);
}));

(cljs.core.async.t_cljs$core$async30614.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30614.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30614");

(cljs.core.async.t_cljs$core$async30614.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30614");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30614.
 */
cljs.core.async.__GT_t_cljs$core$async30614 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30614(flag__$1,cb__$1,meta30615){
return (new cljs.core.async.t_cljs$core$async30614(flag__$1,cb__$1,meta30615));
});

}

return (new cljs.core.async.t_cljs$core$async30614(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30631_SHARP_){
var G__30639 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30631_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30639) : fret.call(null,G__30639));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30632_SHARP_){
var G__30640 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30632_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30640) : fret.call(null,G__30640));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34332 = (i + (1));
i = G__34332;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34333 = arguments.length;
var i__5770__auto___34334 = (0);
while(true){
if((i__5770__auto___34334 < len__5769__auto___34333)){
args__5775__auto__.push((arguments[i__5770__auto___34334]));

var G__34335 = (i__5770__auto___34334 + (1));
i__5770__auto___34334 = G__34335;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30673){
var map__30674 = p__30673;
var map__30674__$1 = cljs.core.__destructure_map(map__30674);
var opts = map__30674__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30664){
var G__30665 = cljs.core.first(seq30664);
var seq30664__$1 = cljs.core.next(seq30664);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30665,seq30664__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30703 = arguments.length;
switch (G__30703) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30343__auto___34339 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30344__auto__ = (function (){var switch__29699__auto__ = (function (state_30756){
var state_val_30759 = (state_30756[(1)]);
if((state_val_30759 === (7))){
var inst_30749 = (state_30756[(2)]);
var state_30756__$1 = state_30756;
var statearr_30763_34340 = state_30756__$1;
(statearr_30763_34340[(2)] = inst_30749);

(statearr_30763_34340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30759 === (1))){
var state_30756__$1 = state_30756;
var statearr_30770_34341 = state_30756__$1;
(statearr_30770_34341[(2)] = null);

(statearr_30770_34341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30759 === (4))){
var inst_30726 = (state_30756[(7)]);
var inst_30726__$1 = (state_30756[(2)]);
var inst_30729 = (inst_30726__$1 == null);
var state_30756__$1 = (function (){var statearr_30780 = state_30756;
(statearr_30780[(7)] = inst_30726__$1);

return statearr_30780;
})();
if(cljs.core.truth_(inst_30729)){
var statearr_30781_34342 = state_30756__$1;
(statearr_30781_34342[(1)] = (5));

} else {
var statearr_30784_34343 = state_30756__$1;
(statearr_30784_34343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30759 === (13))){
var state_30756__$1 = state_30756;
var statearr_30792_34344 = state_30756__$1;
(statearr_30792_34344[(2)] = null);

(statearr_30792_34344[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30759 === (6))){
var inst_30726 = (state_30756[(7)]);
var state_30756__$1 = state_30756;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30756__$1,(11),to,inst_30726);
} else {
if((state_val_30759 === (3))){
var inst_30753 = (state_30756[(2)]);
var state_30756__$1 = state_30756;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30756__$1,inst_30753);
} else {
if((state_val_30759 === (12))){
var state_30756__$1 = state_30756;
var statearr_30799_34345 = state_30756__$1;
(statearr_30799_34345[(2)] = null);

(statearr_30799_34345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30759 === (2))){
var state_30756__$1 = state_30756;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30756__$1,(4),from);
} else {
if((state_val_30759 === (11))){
var inst_30741 = (state_30756[(2)]);
var state_30756__$1 = state_30756;
if(cljs.core.truth_(inst_30741)){
var statearr_30805_34346 = state_30756__$1;
(statearr_30805_34346[(1)] = (12));

} else {
var statearr_30806_34347 = state_30756__$1;
(statearr_30806_34347[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30759 === (9))){
var state_30756__$1 = state_30756;
var statearr_30814_34348 = state_30756__$1;
(statearr_30814_34348[(2)] = null);

(statearr_30814_34348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30759 === (5))){
var state_30756__$1 = state_30756;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30815_34349 = state_30756__$1;
(statearr_30815_34349[(1)] = (8));

} else {
var statearr_30818_34350 = state_30756__$1;
(statearr_30818_34350[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30759 === (14))){
var inst_30747 = (state_30756[(2)]);
var state_30756__$1 = state_30756;
var statearr_30826_34351 = state_30756__$1;
(statearr_30826_34351[(2)] = inst_30747);

(statearr_30826_34351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30759 === (10))){
var inst_30737 = (state_30756[(2)]);
var state_30756__$1 = state_30756;
var statearr_30831_34352 = state_30756__$1;
(statearr_30831_34352[(2)] = inst_30737);

(statearr_30831_34352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30759 === (8))){
var inst_30734 = cljs.core.async.close_BANG_(to);
var state_30756__$1 = state_30756;
var statearr_30838_34353 = state_30756__$1;
(statearr_30838_34353[(2)] = inst_30734);

(statearr_30838_34353[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29700__auto__ = null;
var cljs$core$async$state_machine__29700__auto____0 = (function (){
var statearr_30841 = [null,null,null,null,null,null,null,null];
(statearr_30841[(0)] = cljs$core$async$state_machine__29700__auto__);

(statearr_30841[(1)] = (1));

return statearr_30841;
});
var cljs$core$async$state_machine__29700__auto____1 = (function (state_30756){
while(true){
var ret_value__29701__auto__ = (function (){try{while(true){
var result__29702__auto__ = switch__29699__auto__(state_30756);
if(cljs.core.keyword_identical_QMARK_(result__29702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29702__auto__;
}
break;
}
}catch (e30847){var ex__29703__auto__ = e30847;
var statearr_30851_34354 = state_30756;
(statearr_30851_34354[(2)] = ex__29703__auto__);


if(cljs.core.seq((state_30756[(4)]))){
var statearr_30852_34355 = state_30756;
(statearr_30852_34355[(1)] = cljs.core.first((state_30756[(4)])));

} else {
throw ex__29703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34356 = state_30756;
state_30756 = G__34356;
continue;
} else {
return ret_value__29701__auto__;
}
break;
}
});
cljs$core$async$state_machine__29700__auto__ = function(state_30756){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29700__auto____1.call(this,state_30756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29700__auto____0;
cljs$core$async$state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29700__auto____1;
return cljs$core$async$state_machine__29700__auto__;
})()
})();
var state__30346__auto__ = (function (){var statearr_30856 = f__30344__auto__();
(statearr_30856[(6)] = c__30343__auto___34339);

return statearr_30856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30346__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__30863){
var vec__30864 = p__30863;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30864,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30864,(1),null);
var job = vec__30864;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30343__auto___34357 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30344__auto__ = (function (){var switch__29699__auto__ = (function (state_30875){
var state_val_30876 = (state_30875[(1)]);
if((state_val_30876 === (1))){
var state_30875__$1 = state_30875;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30875__$1,(2),res,v);
} else {
if((state_val_30876 === (2))){
var inst_30870 = (state_30875[(2)]);
var inst_30873 = cljs.core.async.close_BANG_(res);
var state_30875__$1 = (function (){var statearr_30885 = state_30875;
(statearr_30885[(7)] = inst_30870);

return statearr_30885;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30875__$1,inst_30873);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29700__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29700__auto____0 = (function (){
var statearr_30889 = [null,null,null,null,null,null,null,null];
(statearr_30889[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29700__auto__);

(statearr_30889[(1)] = (1));

return statearr_30889;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29700__auto____1 = (function (state_30875){
while(true){
var ret_value__29701__auto__ = (function (){try{while(true){
var result__29702__auto__ = switch__29699__auto__(state_30875);
if(cljs.core.keyword_identical_QMARK_(result__29702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29702__auto__;
}
break;
}
}catch (e30890){var ex__29703__auto__ = e30890;
var statearr_30891_34358 = state_30875;
(statearr_30891_34358[(2)] = ex__29703__auto__);


if(cljs.core.seq((state_30875[(4)]))){
var statearr_30892_34359 = state_30875;
(statearr_30892_34359[(1)] = cljs.core.first((state_30875[(4)])));

} else {
throw ex__29703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34360 = state_30875;
state_30875 = G__34360;
continue;
} else {
return ret_value__29701__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29700__auto__ = function(state_30875){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29700__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29700__auto____1.call(this,state_30875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29700__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29700__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29700__auto__;
})()
})();
var state__30346__auto__ = (function (){var statearr_30894 = f__30344__auto__();
(statearr_30894[(6)] = c__30343__auto___34357);

return statearr_30894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30346__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30901){
var vec__30902 = p__30901;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30902,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30902,(1),null);
var job = vec__30902;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___34362 = n;
var __34363 = (0);
while(true){
if((__34363 < n__5636__auto___34362)){
var G__30911_34364 = type;
var G__30911_34365__$1 = (((G__30911_34364 instanceof cljs.core.Keyword))?G__30911_34364.fqn:null);
switch (G__30911_34365__$1) {
case "compute":
var c__30343__auto___34367 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34363,c__30343__auto___34367,G__30911_34364,G__30911_34365__$1,n__5636__auto___34362,jobs,results,process__$1,async){
return (function (){
var f__30344__auto__ = (function (){var switch__29699__auto__ = ((function (__34363,c__30343__auto___34367,G__30911_34364,G__30911_34365__$1,n__5636__auto___34362,jobs,results,process__$1,async){
return (function (state_30938){
var state_val_30939 = (state_30938[(1)]);
if((state_val_30939 === (1))){
var state_30938__$1 = state_30938;
var statearr_30940_34368 = state_30938__$1;
(statearr_30940_34368[(2)] = null);

(statearr_30940_34368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (2))){
var state_30938__$1 = state_30938;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30938__$1,(4),jobs);
} else {
if((state_val_30939 === (3))){
var inst_30936 = (state_30938[(2)]);
var state_30938__$1 = state_30938;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30938__$1,inst_30936);
} else {
if((state_val_30939 === (4))){
var inst_30927 = (state_30938[(2)]);
var inst_30928 = process__$1(inst_30927);
var state_30938__$1 = state_30938;
if(cljs.core.truth_(inst_30928)){
var statearr_30946_34369 = state_30938__$1;
(statearr_30946_34369[(1)] = (5));

} else {
var statearr_30947_34370 = state_30938__$1;
(statearr_30947_34370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (5))){
var state_30938__$1 = state_30938;
var statearr_30948_34371 = state_30938__$1;
(statearr_30948_34371[(2)] = null);

(statearr_30948_34371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (6))){
var state_30938__$1 = state_30938;
var statearr_30949_34373 = state_30938__$1;
(statearr_30949_34373[(2)] = null);

(statearr_30949_34373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (7))){
var inst_30933 = (state_30938[(2)]);
var state_30938__$1 = state_30938;
var statearr_30951_34374 = state_30938__$1;
(statearr_30951_34374[(2)] = inst_30933);

(statearr_30951_34374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34363,c__30343__auto___34367,G__30911_34364,G__30911_34365__$1,n__5636__auto___34362,jobs,results,process__$1,async))
;
return ((function (__34363,switch__29699__auto__,c__30343__auto___34367,G__30911_34364,G__30911_34365__$1,n__5636__auto___34362,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29700__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29700__auto____0 = (function (){
var statearr_30952 = [null,null,null,null,null,null,null];
(statearr_30952[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29700__auto__);

(statearr_30952[(1)] = (1));

return statearr_30952;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29700__auto____1 = (function (state_30938){
while(true){
var ret_value__29701__auto__ = (function (){try{while(true){
var result__29702__auto__ = switch__29699__auto__(state_30938);
if(cljs.core.keyword_identical_QMARK_(result__29702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29702__auto__;
}
break;
}
}catch (e30953){var ex__29703__auto__ = e30953;
var statearr_30954_34375 = state_30938;
(statearr_30954_34375[(2)] = ex__29703__auto__);


if(cljs.core.seq((state_30938[(4)]))){
var statearr_30956_34376 = state_30938;
(statearr_30956_34376[(1)] = cljs.core.first((state_30938[(4)])));

} else {
throw ex__29703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34378 = state_30938;
state_30938 = G__34378;
continue;
} else {
return ret_value__29701__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29700__auto__ = function(state_30938){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29700__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29700__auto____1.call(this,state_30938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29700__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29700__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29700__auto__;
})()
;})(__34363,switch__29699__auto__,c__30343__auto___34367,G__30911_34364,G__30911_34365__$1,n__5636__auto___34362,jobs,results,process__$1,async))
})();
var state__30346__auto__ = (function (){var statearr_30957 = f__30344__auto__();
(statearr_30957[(6)] = c__30343__auto___34367);

return statearr_30957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30346__auto__);
});})(__34363,c__30343__auto___34367,G__30911_34364,G__30911_34365__$1,n__5636__auto___34362,jobs,results,process__$1,async))
);


break;
case "async":
var c__30343__auto___34380 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34363,c__30343__auto___34380,G__30911_34364,G__30911_34365__$1,n__5636__auto___34362,jobs,results,process__$1,async){
return (function (){
var f__30344__auto__ = (function (){var switch__29699__auto__ = ((function (__34363,c__30343__auto___34380,G__30911_34364,G__30911_34365__$1,n__5636__auto___34362,jobs,results,process__$1,async){
return (function (state_30975){
var state_val_30976 = (state_30975[(1)]);
if((state_val_30976 === (1))){
var state_30975__$1 = state_30975;
var statearr_30981_34382 = state_30975__$1;
(statearr_30981_34382[(2)] = null);

(statearr_30981_34382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30976 === (2))){
var state_30975__$1 = state_30975;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30975__$1,(4),jobs);
} else {
if((state_val_30976 === (3))){
var inst_30972 = (state_30975[(2)]);
var state_30975__$1 = state_30975;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30975__$1,inst_30972);
} else {
if((state_val_30976 === (4))){
var inst_30964 = (state_30975[(2)]);
var inst_30965 = async(inst_30964);
var state_30975__$1 = state_30975;
if(cljs.core.truth_(inst_30965)){
var statearr_30984_34385 = state_30975__$1;
(statearr_30984_34385[(1)] = (5));

} else {
var statearr_30985_34386 = state_30975__$1;
(statearr_30985_34386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30976 === (5))){
var state_30975__$1 = state_30975;
var statearr_30989_34387 = state_30975__$1;
(statearr_30989_34387[(2)] = null);

(statearr_30989_34387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30976 === (6))){
var state_30975__$1 = state_30975;
var statearr_30990_34388 = state_30975__$1;
(statearr_30990_34388[(2)] = null);

(statearr_30990_34388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30976 === (7))){
var inst_30970 = (state_30975[(2)]);
var state_30975__$1 = state_30975;
var statearr_30991_34389 = state_30975__$1;
(statearr_30991_34389[(2)] = inst_30970);

(statearr_30991_34389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34363,c__30343__auto___34380,G__30911_34364,G__30911_34365__$1,n__5636__auto___34362,jobs,results,process__$1,async))
;
return ((function (__34363,switch__29699__auto__,c__30343__auto___34380,G__30911_34364,G__30911_34365__$1,n__5636__auto___34362,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29700__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29700__auto____0 = (function (){
var statearr_30997 = [null,null,null,null,null,null,null];
(statearr_30997[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29700__auto__);

(statearr_30997[(1)] = (1));

return statearr_30997;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29700__auto____1 = (function (state_30975){
while(true){
var ret_value__29701__auto__ = (function (){try{while(true){
var result__29702__auto__ = switch__29699__auto__(state_30975);
if(cljs.core.keyword_identical_QMARK_(result__29702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29702__auto__;
}
break;
}
}catch (e30999){var ex__29703__auto__ = e30999;
var statearr_31000_34390 = state_30975;
(statearr_31000_34390[(2)] = ex__29703__auto__);


if(cljs.core.seq((state_30975[(4)]))){
var statearr_31002_34392 = state_30975;
(statearr_31002_34392[(1)] = cljs.core.first((state_30975[(4)])));

} else {
throw ex__29703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34393 = state_30975;
state_30975 = G__34393;
continue;
} else {
return ret_value__29701__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29700__auto__ = function(state_30975){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29700__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29700__auto____1.call(this,state_30975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29700__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29700__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29700__auto__;
})()
;})(__34363,switch__29699__auto__,c__30343__auto___34380,G__30911_34364,G__30911_34365__$1,n__5636__auto___34362,jobs,results,process__$1,async))
})();
var state__30346__auto__ = (function (){var statearr_31003 = f__30344__auto__();
(statearr_31003[(6)] = c__30343__auto___34380);

return statearr_31003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30346__auto__);
});})(__34363,c__30343__auto___34380,G__30911_34364,G__30911_34365__$1,n__5636__auto___34362,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30911_34365__$1)].join('')));

}

var G__34404 = (__34363 + (1));
__34363 = G__34404;
continue;
} else {
}
break;
}

var c__30343__auto___34406 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30344__auto__ = (function (){var switch__29699__auto__ = (function (state_31034){
var state_val_31035 = (state_31034[(1)]);
if((state_val_31035 === (7))){
var inst_31029 = (state_31034[(2)]);
var state_31034__$1 = state_31034;
var statearr_31040_34409 = state_31034__$1;
(statearr_31040_34409[(2)] = inst_31029);

(statearr_31040_34409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (1))){
var state_31034__$1 = state_31034;
var statearr_31045_34414 = state_31034__$1;
(statearr_31045_34414[(2)] = null);

(statearr_31045_34414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (4))){
var inst_31008 = (state_31034[(7)]);
var inst_31008__$1 = (state_31034[(2)]);
var inst_31009 = (inst_31008__$1 == null);
var state_31034__$1 = (function (){var statearr_31047 = state_31034;
(statearr_31047[(7)] = inst_31008__$1);

return statearr_31047;
})();
if(cljs.core.truth_(inst_31009)){
var statearr_31048_34416 = state_31034__$1;
(statearr_31048_34416[(1)] = (5));

} else {
var statearr_31050_34417 = state_31034__$1;
(statearr_31050_34417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (6))){
var inst_31015 = (state_31034[(8)]);
var inst_31008 = (state_31034[(7)]);
var inst_31015__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31020 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31021 = [inst_31008,inst_31015__$1];
var inst_31022 = (new cljs.core.PersistentVector(null,2,(5),inst_31020,inst_31021,null));
var state_31034__$1 = (function (){var statearr_31052 = state_31034;
(statearr_31052[(8)] = inst_31015__$1);

return statearr_31052;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31034__$1,(8),jobs,inst_31022);
} else {
if((state_val_31035 === (3))){
var inst_31031 = (state_31034[(2)]);
var state_31034__$1 = state_31034;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31034__$1,inst_31031);
} else {
if((state_val_31035 === (2))){
var state_31034__$1 = state_31034;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31034__$1,(4),from);
} else {
if((state_val_31035 === (9))){
var inst_31026 = (state_31034[(2)]);
var state_31034__$1 = (function (){var statearr_31058 = state_31034;
(statearr_31058[(9)] = inst_31026);

return statearr_31058;
})();
var statearr_31059_34421 = state_31034__$1;
(statearr_31059_34421[(2)] = null);

(statearr_31059_34421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (5))){
var inst_31011 = cljs.core.async.close_BANG_(jobs);
var state_31034__$1 = state_31034;
var statearr_31061_34422 = state_31034__$1;
(statearr_31061_34422[(2)] = inst_31011);

(statearr_31061_34422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (8))){
var inst_31015 = (state_31034[(8)]);
var inst_31024 = (state_31034[(2)]);
var state_31034__$1 = (function (){var statearr_31062 = state_31034;
(statearr_31062[(10)] = inst_31024);

return statearr_31062;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31034__$1,(9),results,inst_31015);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29700__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29700__auto____0 = (function (){
var statearr_31064 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31064[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29700__auto__);

(statearr_31064[(1)] = (1));

return statearr_31064;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29700__auto____1 = (function (state_31034){
while(true){
var ret_value__29701__auto__ = (function (){try{while(true){
var result__29702__auto__ = switch__29699__auto__(state_31034);
if(cljs.core.keyword_identical_QMARK_(result__29702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29702__auto__;
}
break;
}
}catch (e31075){var ex__29703__auto__ = e31075;
var statearr_31078_34425 = state_31034;
(statearr_31078_34425[(2)] = ex__29703__auto__);


if(cljs.core.seq((state_31034[(4)]))){
var statearr_31087_34432 = state_31034;
(statearr_31087_34432[(1)] = cljs.core.first((state_31034[(4)])));

} else {
throw ex__29703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34433 = state_31034;
state_31034 = G__34433;
continue;
} else {
return ret_value__29701__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29700__auto__ = function(state_31034){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29700__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29700__auto____1.call(this,state_31034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29700__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29700__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29700__auto__;
})()
})();
var state__30346__auto__ = (function (){var statearr_31093 = f__30344__auto__();
(statearr_31093[(6)] = c__30343__auto___34406);

return statearr_31093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30346__auto__);
}));


var c__30343__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30344__auto__ = (function (){var switch__29699__auto__ = (function (state_31138){
var state_val_31139 = (state_31138[(1)]);
if((state_val_31139 === (7))){
var inst_31132 = (state_31138[(2)]);
var state_31138__$1 = state_31138;
var statearr_31145_34443 = state_31138__$1;
(statearr_31145_34443[(2)] = inst_31132);

(statearr_31145_34443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (20))){
var state_31138__$1 = state_31138;
var statearr_31146_34444 = state_31138__$1;
(statearr_31146_34444[(2)] = null);

(statearr_31146_34444[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (1))){
var state_31138__$1 = state_31138;
var statearr_31148_34445 = state_31138__$1;
(statearr_31148_34445[(2)] = null);

(statearr_31148_34445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (4))){
var inst_31099 = (state_31138[(7)]);
var inst_31099__$1 = (state_31138[(2)]);
var inst_31100 = (inst_31099__$1 == null);
var state_31138__$1 = (function (){var statearr_31159 = state_31138;
(statearr_31159[(7)] = inst_31099__$1);

return statearr_31159;
})();
if(cljs.core.truth_(inst_31100)){
var statearr_31161_34446 = state_31138__$1;
(statearr_31161_34446[(1)] = (5));

} else {
var statearr_31168_34447 = state_31138__$1;
(statearr_31168_34447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (15))){
var inst_31114 = (state_31138[(8)]);
var state_31138__$1 = state_31138;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31138__$1,(18),to,inst_31114);
} else {
if((state_val_31139 === (21))){
var inst_31127 = (state_31138[(2)]);
var state_31138__$1 = state_31138;
var statearr_31174_34448 = state_31138__$1;
(statearr_31174_34448[(2)] = inst_31127);

(statearr_31174_34448[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (13))){
var inst_31129 = (state_31138[(2)]);
var state_31138__$1 = (function (){var statearr_31176 = state_31138;
(statearr_31176[(9)] = inst_31129);

return statearr_31176;
})();
var statearr_31178_34449 = state_31138__$1;
(statearr_31178_34449[(2)] = null);

(statearr_31178_34449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (6))){
var inst_31099 = (state_31138[(7)]);
var state_31138__$1 = state_31138;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31138__$1,(11),inst_31099);
} else {
if((state_val_31139 === (17))){
var inst_31122 = (state_31138[(2)]);
var state_31138__$1 = state_31138;
if(cljs.core.truth_(inst_31122)){
var statearr_31200_34451 = state_31138__$1;
(statearr_31200_34451[(1)] = (19));

} else {
var statearr_31202_34452 = state_31138__$1;
(statearr_31202_34452[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (3))){
var inst_31134 = (state_31138[(2)]);
var state_31138__$1 = state_31138;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31138__$1,inst_31134);
} else {
if((state_val_31139 === (12))){
var inst_31109 = (state_31138[(10)]);
var state_31138__$1 = state_31138;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31138__$1,(14),inst_31109);
} else {
if((state_val_31139 === (2))){
var state_31138__$1 = state_31138;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31138__$1,(4),results);
} else {
if((state_val_31139 === (19))){
var state_31138__$1 = state_31138;
var statearr_31232_34454 = state_31138__$1;
(statearr_31232_34454[(2)] = null);

(statearr_31232_34454[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (11))){
var inst_31109 = (state_31138[(2)]);
var state_31138__$1 = (function (){var statearr_31234 = state_31138;
(statearr_31234[(10)] = inst_31109);

return statearr_31234;
})();
var statearr_31235_34455 = state_31138__$1;
(statearr_31235_34455[(2)] = null);

(statearr_31235_34455[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (9))){
var state_31138__$1 = state_31138;
var statearr_31236_34456 = state_31138__$1;
(statearr_31236_34456[(2)] = null);

(statearr_31236_34456[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (5))){
var state_31138__$1 = state_31138;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31237_34457 = state_31138__$1;
(statearr_31237_34457[(1)] = (8));

} else {
var statearr_31241_34458 = state_31138__$1;
(statearr_31241_34458[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (14))){
var inst_31116 = (state_31138[(11)]);
var inst_31114 = (state_31138[(8)]);
var inst_31114__$1 = (state_31138[(2)]);
var inst_31115 = (inst_31114__$1 == null);
var inst_31116__$1 = cljs.core.not(inst_31115);
var state_31138__$1 = (function (){var statearr_31244 = state_31138;
(statearr_31244[(11)] = inst_31116__$1);

(statearr_31244[(8)] = inst_31114__$1);

return statearr_31244;
})();
if(inst_31116__$1){
var statearr_31246_34461 = state_31138__$1;
(statearr_31246_34461[(1)] = (15));

} else {
var statearr_31247_34462 = state_31138__$1;
(statearr_31247_34462[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (16))){
var inst_31116 = (state_31138[(11)]);
var state_31138__$1 = state_31138;
var statearr_31250_34463 = state_31138__$1;
(statearr_31250_34463[(2)] = inst_31116);

(statearr_31250_34463[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (10))){
var inst_31106 = (state_31138[(2)]);
var state_31138__$1 = state_31138;
var statearr_31258_34465 = state_31138__$1;
(statearr_31258_34465[(2)] = inst_31106);

(statearr_31258_34465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (18))){
var inst_31119 = (state_31138[(2)]);
var state_31138__$1 = state_31138;
var statearr_31259_34466 = state_31138__$1;
(statearr_31259_34466[(2)] = inst_31119);

(statearr_31259_34466[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (8))){
var inst_31103 = cljs.core.async.close_BANG_(to);
var state_31138__$1 = state_31138;
var statearr_31271_34467 = state_31138__$1;
(statearr_31271_34467[(2)] = inst_31103);

(statearr_31271_34467[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29700__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29700__auto____0 = (function (){
var statearr_31281 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31281[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29700__auto__);

(statearr_31281[(1)] = (1));

return statearr_31281;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29700__auto____1 = (function (state_31138){
while(true){
var ret_value__29701__auto__ = (function (){try{while(true){
var result__29702__auto__ = switch__29699__auto__(state_31138);
if(cljs.core.keyword_identical_QMARK_(result__29702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29702__auto__;
}
break;
}
}catch (e31283){var ex__29703__auto__ = e31283;
var statearr_31284_34468 = state_31138;
(statearr_31284_34468[(2)] = ex__29703__auto__);


if(cljs.core.seq((state_31138[(4)]))){
var statearr_31285_34469 = state_31138;
(statearr_31285_34469[(1)] = cljs.core.first((state_31138[(4)])));

} else {
throw ex__29703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34470 = state_31138;
state_31138 = G__34470;
continue;
} else {
return ret_value__29701__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29700__auto__ = function(state_31138){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29700__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29700__auto____1.call(this,state_31138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29700__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29700__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29700__auto__;
})()
})();
var state__30346__auto__ = (function (){var statearr_31289 = f__30344__auto__();
(statearr_31289[(6)] = c__30343__auto__);

return statearr_31289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30346__auto__);
}));

return c__30343__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31300 = arguments.length;
switch (G__31300) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31306 = arguments.length;
switch (G__31306) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31326 = arguments.length;
switch (G__31326) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30343__auto___34479 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30344__auto__ = (function (){var switch__29699__auto__ = (function (state_31355){
var state_val_31356 = (state_31355[(1)]);
if((state_val_31356 === (7))){
var inst_31350 = (state_31355[(2)]);
var state_31355__$1 = state_31355;
var statearr_31357_34480 = state_31355__$1;
(statearr_31357_34480[(2)] = inst_31350);

(statearr_31357_34480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31356 === (1))){
var state_31355__$1 = state_31355;
var statearr_31359_34481 = state_31355__$1;
(statearr_31359_34481[(2)] = null);

(statearr_31359_34481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31356 === (4))){
var inst_31331 = (state_31355[(7)]);
var inst_31331__$1 = (state_31355[(2)]);
var inst_31332 = (inst_31331__$1 == null);
var state_31355__$1 = (function (){var statearr_31361 = state_31355;
(statearr_31361[(7)] = inst_31331__$1);

return statearr_31361;
})();
if(cljs.core.truth_(inst_31332)){
var statearr_31362_34482 = state_31355__$1;
(statearr_31362_34482[(1)] = (5));

} else {
var statearr_31363_34484 = state_31355__$1;
(statearr_31363_34484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31356 === (13))){
var state_31355__$1 = state_31355;
var statearr_31364_34486 = state_31355__$1;
(statearr_31364_34486[(2)] = null);

(statearr_31364_34486[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31356 === (6))){
var inst_31331 = (state_31355[(7)]);
var inst_31337 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31331) : p.call(null,inst_31331));
var state_31355__$1 = state_31355;
if(cljs.core.truth_(inst_31337)){
var statearr_31367_34487 = state_31355__$1;
(statearr_31367_34487[(1)] = (9));

} else {
var statearr_31368_34488 = state_31355__$1;
(statearr_31368_34488[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31356 === (3))){
var inst_31352 = (state_31355[(2)]);
var state_31355__$1 = state_31355;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31355__$1,inst_31352);
} else {
if((state_val_31356 === (12))){
var state_31355__$1 = state_31355;
var statearr_31369_34489 = state_31355__$1;
(statearr_31369_34489[(2)] = null);

(statearr_31369_34489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31356 === (2))){
var state_31355__$1 = state_31355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31355__$1,(4),ch);
} else {
if((state_val_31356 === (11))){
var inst_31331 = (state_31355[(7)]);
var inst_31341 = (state_31355[(2)]);
var state_31355__$1 = state_31355;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31355__$1,(8),inst_31341,inst_31331);
} else {
if((state_val_31356 === (9))){
var state_31355__$1 = state_31355;
var statearr_31371_34490 = state_31355__$1;
(statearr_31371_34490[(2)] = tc);

(statearr_31371_34490[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31356 === (5))){
var inst_31334 = cljs.core.async.close_BANG_(tc);
var inst_31335 = cljs.core.async.close_BANG_(fc);
var state_31355__$1 = (function (){var statearr_31376 = state_31355;
(statearr_31376[(8)] = inst_31334);

return statearr_31376;
})();
var statearr_31380_34492 = state_31355__$1;
(statearr_31380_34492[(2)] = inst_31335);

(statearr_31380_34492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31356 === (14))){
var inst_31348 = (state_31355[(2)]);
var state_31355__$1 = state_31355;
var statearr_31382_34494 = state_31355__$1;
(statearr_31382_34494[(2)] = inst_31348);

(statearr_31382_34494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31356 === (10))){
var state_31355__$1 = state_31355;
var statearr_31383_34495 = state_31355__$1;
(statearr_31383_34495[(2)] = fc);

(statearr_31383_34495[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31356 === (8))){
var inst_31343 = (state_31355[(2)]);
var state_31355__$1 = state_31355;
if(cljs.core.truth_(inst_31343)){
var statearr_31393_34496 = state_31355__$1;
(statearr_31393_34496[(1)] = (12));

} else {
var statearr_31394_34497 = state_31355__$1;
(statearr_31394_34497[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29700__auto__ = null;
var cljs$core$async$state_machine__29700__auto____0 = (function (){
var statearr_31399 = [null,null,null,null,null,null,null,null,null];
(statearr_31399[(0)] = cljs$core$async$state_machine__29700__auto__);

(statearr_31399[(1)] = (1));

return statearr_31399;
});
var cljs$core$async$state_machine__29700__auto____1 = (function (state_31355){
while(true){
var ret_value__29701__auto__ = (function (){try{while(true){
var result__29702__auto__ = switch__29699__auto__(state_31355);
if(cljs.core.keyword_identical_QMARK_(result__29702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29702__auto__;
}
break;
}
}catch (e31404){var ex__29703__auto__ = e31404;
var statearr_31405_34498 = state_31355;
(statearr_31405_34498[(2)] = ex__29703__auto__);


if(cljs.core.seq((state_31355[(4)]))){
var statearr_31406_34499 = state_31355;
(statearr_31406_34499[(1)] = cljs.core.first((state_31355[(4)])));

} else {
throw ex__29703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34500 = state_31355;
state_31355 = G__34500;
continue;
} else {
return ret_value__29701__auto__;
}
break;
}
});
cljs$core$async$state_machine__29700__auto__ = function(state_31355){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29700__auto____1.call(this,state_31355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29700__auto____0;
cljs$core$async$state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29700__auto____1;
return cljs$core$async$state_machine__29700__auto__;
})()
})();
var state__30346__auto__ = (function (){var statearr_31410 = f__30344__auto__();
(statearr_31410[(6)] = c__30343__auto___34479);

return statearr_31410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30346__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30343__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30344__auto__ = (function (){var switch__29699__auto__ = (function (state_31439){
var state_val_31441 = (state_31439[(1)]);
if((state_val_31441 === (7))){
var inst_31431 = (state_31439[(2)]);
var state_31439__$1 = state_31439;
var statearr_31447_34510 = state_31439__$1;
(statearr_31447_34510[(2)] = inst_31431);

(statearr_31447_34510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (1))){
var inst_31411 = init;
var inst_31412 = inst_31411;
var state_31439__$1 = (function (){var statearr_31448 = state_31439;
(statearr_31448[(7)] = inst_31412);

return statearr_31448;
})();
var statearr_31449_34511 = state_31439__$1;
(statearr_31449_34511[(2)] = null);

(statearr_31449_34511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (4))){
var inst_31416 = (state_31439[(8)]);
var inst_31416__$1 = (state_31439[(2)]);
var inst_31417 = (inst_31416__$1 == null);
var state_31439__$1 = (function (){var statearr_31450 = state_31439;
(statearr_31450[(8)] = inst_31416__$1);

return statearr_31450;
})();
if(cljs.core.truth_(inst_31417)){
var statearr_31451_34512 = state_31439__$1;
(statearr_31451_34512[(1)] = (5));

} else {
var statearr_31452_34513 = state_31439__$1;
(statearr_31452_34513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (6))){
var inst_31420 = (state_31439[(9)]);
var inst_31416 = (state_31439[(8)]);
var inst_31412 = (state_31439[(7)]);
var inst_31420__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31412,inst_31416) : f.call(null,inst_31412,inst_31416));
var inst_31422 = cljs.core.reduced_QMARK_(inst_31420__$1);
var state_31439__$1 = (function (){var statearr_31454 = state_31439;
(statearr_31454[(9)] = inst_31420__$1);

return statearr_31454;
})();
if(inst_31422){
var statearr_31459_34514 = state_31439__$1;
(statearr_31459_34514[(1)] = (8));

} else {
var statearr_31460_34515 = state_31439__$1;
(statearr_31460_34515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (3))){
var inst_31433 = (state_31439[(2)]);
var state_31439__$1 = state_31439;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31439__$1,inst_31433);
} else {
if((state_val_31441 === (2))){
var state_31439__$1 = state_31439;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31439__$1,(4),ch);
} else {
if((state_val_31441 === (9))){
var inst_31420 = (state_31439[(9)]);
var inst_31412 = inst_31420;
var state_31439__$1 = (function (){var statearr_31464 = state_31439;
(statearr_31464[(7)] = inst_31412);

return statearr_31464;
})();
var statearr_31466_34517 = state_31439__$1;
(statearr_31466_34517[(2)] = null);

(statearr_31466_34517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (5))){
var inst_31412 = (state_31439[(7)]);
var state_31439__$1 = state_31439;
var statearr_31468_34518 = state_31439__$1;
(statearr_31468_34518[(2)] = inst_31412);

(statearr_31468_34518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (10))){
var inst_31428 = (state_31439[(2)]);
var state_31439__$1 = state_31439;
var statearr_31470_34520 = state_31439__$1;
(statearr_31470_34520[(2)] = inst_31428);

(statearr_31470_34520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (8))){
var inst_31420 = (state_31439[(9)]);
var inst_31424 = cljs.core.deref(inst_31420);
var state_31439__$1 = state_31439;
var statearr_31473_34521 = state_31439__$1;
(statearr_31473_34521[(2)] = inst_31424);

(statearr_31473_34521[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29700__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29700__auto____0 = (function (){
var statearr_31476 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31476[(0)] = cljs$core$async$reduce_$_state_machine__29700__auto__);

(statearr_31476[(1)] = (1));

return statearr_31476;
});
var cljs$core$async$reduce_$_state_machine__29700__auto____1 = (function (state_31439){
while(true){
var ret_value__29701__auto__ = (function (){try{while(true){
var result__29702__auto__ = switch__29699__auto__(state_31439);
if(cljs.core.keyword_identical_QMARK_(result__29702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29702__auto__;
}
break;
}
}catch (e31478){var ex__29703__auto__ = e31478;
var statearr_31483_34522 = state_31439;
(statearr_31483_34522[(2)] = ex__29703__auto__);


if(cljs.core.seq((state_31439[(4)]))){
var statearr_31484_34523 = state_31439;
(statearr_31484_34523[(1)] = cljs.core.first((state_31439[(4)])));

} else {
throw ex__29703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34524 = state_31439;
state_31439 = G__34524;
continue;
} else {
return ret_value__29701__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29700__auto__ = function(state_31439){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29700__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29700__auto____1.call(this,state_31439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29700__auto____0;
cljs$core$async$reduce_$_state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29700__auto____1;
return cljs$core$async$reduce_$_state_machine__29700__auto__;
})()
})();
var state__30346__auto__ = (function (){var statearr_31491 = f__30344__auto__();
(statearr_31491[(6)] = c__30343__auto__);

return statearr_31491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30346__auto__);
}));

return c__30343__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30343__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30344__auto__ = (function (){var switch__29699__auto__ = (function (state_31499){
var state_val_31500 = (state_31499[(1)]);
if((state_val_31500 === (1))){
var inst_31494 = cljs.core.async.reduce(f__$1,init,ch);
var state_31499__$1 = state_31499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31499__$1,(2),inst_31494);
} else {
if((state_val_31500 === (2))){
var inst_31496 = (state_31499[(2)]);
var inst_31497 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31496) : f__$1.call(null,inst_31496));
var state_31499__$1 = state_31499;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31499__$1,inst_31497);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29700__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29700__auto____0 = (function (){
var statearr_31512 = [null,null,null,null,null,null,null];
(statearr_31512[(0)] = cljs$core$async$transduce_$_state_machine__29700__auto__);

(statearr_31512[(1)] = (1));

return statearr_31512;
});
var cljs$core$async$transduce_$_state_machine__29700__auto____1 = (function (state_31499){
while(true){
var ret_value__29701__auto__ = (function (){try{while(true){
var result__29702__auto__ = switch__29699__auto__(state_31499);
if(cljs.core.keyword_identical_QMARK_(result__29702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29702__auto__;
}
break;
}
}catch (e31513){var ex__29703__auto__ = e31513;
var statearr_31517_34525 = state_31499;
(statearr_31517_34525[(2)] = ex__29703__auto__);


if(cljs.core.seq((state_31499[(4)]))){
var statearr_31522_34526 = state_31499;
(statearr_31522_34526[(1)] = cljs.core.first((state_31499[(4)])));

} else {
throw ex__29703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34527 = state_31499;
state_31499 = G__34527;
continue;
} else {
return ret_value__29701__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29700__auto__ = function(state_31499){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29700__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29700__auto____1.call(this,state_31499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29700__auto____0;
cljs$core$async$transduce_$_state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29700__auto____1;
return cljs$core$async$transduce_$_state_machine__29700__auto__;
})()
})();
var state__30346__auto__ = (function (){var statearr_31525 = f__30344__auto__();
(statearr_31525[(6)] = c__30343__auto__);

return statearr_31525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30346__auto__);
}));

return c__30343__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__31528 = arguments.length;
switch (G__31528) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30343__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30344__auto__ = (function (){var switch__29699__auto__ = (function (state_31558){
var state_val_31559 = (state_31558[(1)]);
if((state_val_31559 === (7))){
var inst_31540 = (state_31558[(2)]);
var state_31558__$1 = state_31558;
var statearr_31561_34530 = state_31558__$1;
(statearr_31561_34530[(2)] = inst_31540);

(statearr_31561_34530[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (1))){
var inst_31533 = cljs.core.seq(coll);
var inst_31535 = inst_31533;
var state_31558__$1 = (function (){var statearr_31566 = state_31558;
(statearr_31566[(7)] = inst_31535);

return statearr_31566;
})();
var statearr_31568_34534 = state_31558__$1;
(statearr_31568_34534[(2)] = null);

(statearr_31568_34534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (4))){
var inst_31535 = (state_31558[(7)]);
var inst_31538 = cljs.core.first(inst_31535);
var state_31558__$1 = state_31558;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31558__$1,(7),ch,inst_31538);
} else {
if((state_val_31559 === (13))){
var inst_31552 = (state_31558[(2)]);
var state_31558__$1 = state_31558;
var statearr_31577_34535 = state_31558__$1;
(statearr_31577_34535[(2)] = inst_31552);

(statearr_31577_34535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (6))){
var inst_31543 = (state_31558[(2)]);
var state_31558__$1 = state_31558;
if(cljs.core.truth_(inst_31543)){
var statearr_31582_34536 = state_31558__$1;
(statearr_31582_34536[(1)] = (8));

} else {
var statearr_31584_34537 = state_31558__$1;
(statearr_31584_34537[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (3))){
var inst_31556 = (state_31558[(2)]);
var state_31558__$1 = state_31558;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31558__$1,inst_31556);
} else {
if((state_val_31559 === (12))){
var state_31558__$1 = state_31558;
var statearr_31591_34538 = state_31558__$1;
(statearr_31591_34538[(2)] = null);

(statearr_31591_34538[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (2))){
var inst_31535 = (state_31558[(7)]);
var state_31558__$1 = state_31558;
if(cljs.core.truth_(inst_31535)){
var statearr_31593_34539 = state_31558__$1;
(statearr_31593_34539[(1)] = (4));

} else {
var statearr_31595_34540 = state_31558__$1;
(statearr_31595_34540[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (11))){
var inst_31549 = cljs.core.async.close_BANG_(ch);
var state_31558__$1 = state_31558;
var statearr_31597_34541 = state_31558__$1;
(statearr_31597_34541[(2)] = inst_31549);

(statearr_31597_34541[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (9))){
var state_31558__$1 = state_31558;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31599_34542 = state_31558__$1;
(statearr_31599_34542[(1)] = (11));

} else {
var statearr_31600_34543 = state_31558__$1;
(statearr_31600_34543[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (5))){
var inst_31535 = (state_31558[(7)]);
var state_31558__$1 = state_31558;
var statearr_31607_34544 = state_31558__$1;
(statearr_31607_34544[(2)] = inst_31535);

(statearr_31607_34544[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (10))){
var inst_31554 = (state_31558[(2)]);
var state_31558__$1 = state_31558;
var statearr_31609_34545 = state_31558__$1;
(statearr_31609_34545[(2)] = inst_31554);

(statearr_31609_34545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (8))){
var inst_31535 = (state_31558[(7)]);
var inst_31545 = cljs.core.next(inst_31535);
var inst_31535__$1 = inst_31545;
var state_31558__$1 = (function (){var statearr_31617 = state_31558;
(statearr_31617[(7)] = inst_31535__$1);

return statearr_31617;
})();
var statearr_31619_34546 = state_31558__$1;
(statearr_31619_34546[(2)] = null);

(statearr_31619_34546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29700__auto__ = null;
var cljs$core$async$state_machine__29700__auto____0 = (function (){
var statearr_31620 = [null,null,null,null,null,null,null,null];
(statearr_31620[(0)] = cljs$core$async$state_machine__29700__auto__);

(statearr_31620[(1)] = (1));

return statearr_31620;
});
var cljs$core$async$state_machine__29700__auto____1 = (function (state_31558){
while(true){
var ret_value__29701__auto__ = (function (){try{while(true){
var result__29702__auto__ = switch__29699__auto__(state_31558);
if(cljs.core.keyword_identical_QMARK_(result__29702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29702__auto__;
}
break;
}
}catch (e31621){var ex__29703__auto__ = e31621;
var statearr_31622_34549 = state_31558;
(statearr_31622_34549[(2)] = ex__29703__auto__);


if(cljs.core.seq((state_31558[(4)]))){
var statearr_31623_34550 = state_31558;
(statearr_31623_34550[(1)] = cljs.core.first((state_31558[(4)])));

} else {
throw ex__29703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34551 = state_31558;
state_31558 = G__34551;
continue;
} else {
return ret_value__29701__auto__;
}
break;
}
});
cljs$core$async$state_machine__29700__auto__ = function(state_31558){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29700__auto____1.call(this,state_31558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29700__auto____0;
cljs$core$async$state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29700__auto____1;
return cljs$core$async$state_machine__29700__auto__;
})()
})();
var state__30346__auto__ = (function (){var statearr_31628 = f__30344__auto__();
(statearr_31628[(6)] = c__30343__auto__);

return statearr_31628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30346__auto__);
}));

return c__30343__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31636 = arguments.length;
switch (G__31636) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_34554 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_34554(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34556 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_34556(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34559 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_34559(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34560 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_34560(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31702 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31702 = (function (ch,cs,meta31703){
this.ch = ch;
this.cs = cs;
this.meta31703 = meta31703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31704,meta31703__$1){
var self__ = this;
var _31704__$1 = this;
return (new cljs.core.async.t_cljs$core$async31702(self__.ch,self__.cs,meta31703__$1));
}));

(cljs.core.async.t_cljs$core$async31702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31704){
var self__ = this;
var _31704__$1 = this;
return self__.meta31703;
}));

(cljs.core.async.t_cljs$core$async31702.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31702.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31702.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31702.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31702.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31702.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31702.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31703","meta31703",-1801872570,null)], null);
}));

(cljs.core.async.t_cljs$core$async31702.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31702.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31702");

(cljs.core.async.t_cljs$core$async31702.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31702");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31702.
 */
cljs.core.async.__GT_t_cljs$core$async31702 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31702(ch__$1,cs__$1,meta31703){
return (new cljs.core.async.t_cljs$core$async31702(ch__$1,cs__$1,meta31703));
});

}

return (new cljs.core.async.t_cljs$core$async31702(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30343__auto___34569 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30344__auto__ = (function (){var switch__29699__auto__ = (function (state_31873){
var state_val_31874 = (state_31873[(1)]);
if((state_val_31874 === (7))){
var inst_31860 = (state_31873[(2)]);
var state_31873__$1 = state_31873;
var statearr_31880_34570 = state_31873__$1;
(statearr_31880_34570[(2)] = inst_31860);

(statearr_31880_34570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (20))){
var inst_31752 = (state_31873[(7)]);
var inst_31764 = cljs.core.first(inst_31752);
var inst_31765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31764,(0),null);
var inst_31766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31764,(1),null);
var state_31873__$1 = (function (){var statearr_31881 = state_31873;
(statearr_31881[(8)] = inst_31765);

return statearr_31881;
})();
if(cljs.core.truth_(inst_31766)){
var statearr_31882_34575 = state_31873__$1;
(statearr_31882_34575[(1)] = (22));

} else {
var statearr_31883_34576 = state_31873__$1;
(statearr_31883_34576[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (27))){
var inst_31720 = (state_31873[(9)]);
var inst_31801 = (state_31873[(10)]);
var inst_31808 = (state_31873[(11)]);
var inst_31799 = (state_31873[(12)]);
var inst_31808__$1 = cljs.core._nth(inst_31799,inst_31801);
var inst_31810 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31808__$1,inst_31720,done);
var state_31873__$1 = (function (){var statearr_31887 = state_31873;
(statearr_31887[(11)] = inst_31808__$1);

return statearr_31887;
})();
if(cljs.core.truth_(inst_31810)){
var statearr_31895_34589 = state_31873__$1;
(statearr_31895_34589[(1)] = (30));

} else {
var statearr_31896_34590 = state_31873__$1;
(statearr_31896_34590[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (1))){
var state_31873__$1 = state_31873;
var statearr_31897_34591 = state_31873__$1;
(statearr_31897_34591[(2)] = null);

(statearr_31897_34591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (24))){
var inst_31752 = (state_31873[(7)]);
var inst_31772 = (state_31873[(2)]);
var inst_31773 = cljs.core.next(inst_31752);
var inst_31730 = inst_31773;
var inst_31731 = null;
var inst_31732 = (0);
var inst_31733 = (0);
var state_31873__$1 = (function (){var statearr_31906 = state_31873;
(statearr_31906[(13)] = inst_31733);

(statearr_31906[(14)] = inst_31732);

(statearr_31906[(15)] = inst_31731);

(statearr_31906[(16)] = inst_31772);

(statearr_31906[(17)] = inst_31730);

return statearr_31906;
})();
var statearr_31907_34592 = state_31873__$1;
(statearr_31907_34592[(2)] = null);

(statearr_31907_34592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (39))){
var state_31873__$1 = state_31873;
var statearr_31911_34593 = state_31873__$1;
(statearr_31911_34593[(2)] = null);

(statearr_31911_34593[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (4))){
var inst_31720 = (state_31873[(9)]);
var inst_31720__$1 = (state_31873[(2)]);
var inst_31721 = (inst_31720__$1 == null);
var state_31873__$1 = (function (){var statearr_31913 = state_31873;
(statearr_31913[(9)] = inst_31720__$1);

return statearr_31913;
})();
if(cljs.core.truth_(inst_31721)){
var statearr_31915_34601 = state_31873__$1;
(statearr_31915_34601[(1)] = (5));

} else {
var statearr_31916_34602 = state_31873__$1;
(statearr_31916_34602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (15))){
var inst_31733 = (state_31873[(13)]);
var inst_31732 = (state_31873[(14)]);
var inst_31731 = (state_31873[(15)]);
var inst_31730 = (state_31873[(17)]);
var inst_31748 = (state_31873[(2)]);
var inst_31749 = (inst_31733 + (1));
var tmp31908 = inst_31732;
var tmp31909 = inst_31731;
var tmp31910 = inst_31730;
var inst_31730__$1 = tmp31910;
var inst_31731__$1 = tmp31909;
var inst_31732__$1 = tmp31908;
var inst_31733__$1 = inst_31749;
var state_31873__$1 = (function (){var statearr_31918 = state_31873;
(statearr_31918[(13)] = inst_31733__$1);

(statearr_31918[(14)] = inst_31732__$1);

(statearr_31918[(15)] = inst_31731__$1);

(statearr_31918[(18)] = inst_31748);

(statearr_31918[(17)] = inst_31730__$1);

return statearr_31918;
})();
var statearr_31923_34606 = state_31873__$1;
(statearr_31923_34606[(2)] = null);

(statearr_31923_34606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (21))){
var inst_31776 = (state_31873[(2)]);
var state_31873__$1 = state_31873;
var statearr_31931_34608 = state_31873__$1;
(statearr_31931_34608[(2)] = inst_31776);

(statearr_31931_34608[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (31))){
var inst_31808 = (state_31873[(11)]);
var inst_31814 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31808);
var state_31873__$1 = state_31873;
var statearr_31935_34615 = state_31873__$1;
(statearr_31935_34615[(2)] = inst_31814);

(statearr_31935_34615[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (32))){
var inst_31801 = (state_31873[(10)]);
var inst_31800 = (state_31873[(19)]);
var inst_31798 = (state_31873[(20)]);
var inst_31799 = (state_31873[(12)]);
var inst_31816 = (state_31873[(2)]);
var inst_31817 = (inst_31801 + (1));
var tmp31925 = inst_31800;
var tmp31926 = inst_31798;
var tmp31927 = inst_31799;
var inst_31798__$1 = tmp31926;
var inst_31799__$1 = tmp31927;
var inst_31800__$1 = tmp31925;
var inst_31801__$1 = inst_31817;
var state_31873__$1 = (function (){var statearr_31944 = state_31873;
(statearr_31944[(10)] = inst_31801__$1);

(statearr_31944[(19)] = inst_31800__$1);

(statearr_31944[(21)] = inst_31816);

(statearr_31944[(20)] = inst_31798__$1);

(statearr_31944[(12)] = inst_31799__$1);

return statearr_31944;
})();
var statearr_31945_34619 = state_31873__$1;
(statearr_31945_34619[(2)] = null);

(statearr_31945_34619[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (40))){
var inst_31830 = (state_31873[(22)]);
var inst_31834 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31830);
var state_31873__$1 = state_31873;
var statearr_31946_34621 = state_31873__$1;
(statearr_31946_34621[(2)] = inst_31834);

(statearr_31946_34621[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (33))){
var inst_31821 = (state_31873[(23)]);
var inst_31823 = cljs.core.chunked_seq_QMARK_(inst_31821);
var state_31873__$1 = state_31873;
if(inst_31823){
var statearr_31948_34622 = state_31873__$1;
(statearr_31948_34622[(1)] = (36));

} else {
var statearr_31951_34623 = state_31873__$1;
(statearr_31951_34623[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (13))){
var inst_31742 = (state_31873[(24)]);
var inst_31745 = cljs.core.async.close_BANG_(inst_31742);
var state_31873__$1 = state_31873;
var statearr_31955_34624 = state_31873__$1;
(statearr_31955_34624[(2)] = inst_31745);

(statearr_31955_34624[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (22))){
var inst_31765 = (state_31873[(8)]);
var inst_31769 = cljs.core.async.close_BANG_(inst_31765);
var state_31873__$1 = state_31873;
var statearr_31961_34625 = state_31873__$1;
(statearr_31961_34625[(2)] = inst_31769);

(statearr_31961_34625[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (36))){
var inst_31821 = (state_31873[(23)]);
var inst_31825 = cljs.core.chunk_first(inst_31821);
var inst_31826 = cljs.core.chunk_rest(inst_31821);
var inst_31827 = cljs.core.count(inst_31825);
var inst_31798 = inst_31826;
var inst_31799 = inst_31825;
var inst_31800 = inst_31827;
var inst_31801 = (0);
var state_31873__$1 = (function (){var statearr_31962 = state_31873;
(statearr_31962[(10)] = inst_31801);

(statearr_31962[(19)] = inst_31800);

(statearr_31962[(20)] = inst_31798);

(statearr_31962[(12)] = inst_31799);

return statearr_31962;
})();
var statearr_31963_34632 = state_31873__$1;
(statearr_31963_34632[(2)] = null);

(statearr_31963_34632[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (41))){
var inst_31821 = (state_31873[(23)]);
var inst_31836 = (state_31873[(2)]);
var inst_31837 = cljs.core.next(inst_31821);
var inst_31798 = inst_31837;
var inst_31799 = null;
var inst_31800 = (0);
var inst_31801 = (0);
var state_31873__$1 = (function (){var statearr_31967 = state_31873;
(statearr_31967[(10)] = inst_31801);

(statearr_31967[(19)] = inst_31800);

(statearr_31967[(25)] = inst_31836);

(statearr_31967[(20)] = inst_31798);

(statearr_31967[(12)] = inst_31799);

return statearr_31967;
})();
var statearr_31970_34639 = state_31873__$1;
(statearr_31970_34639[(2)] = null);

(statearr_31970_34639[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (43))){
var state_31873__$1 = state_31873;
var statearr_31977_34642 = state_31873__$1;
(statearr_31977_34642[(2)] = null);

(statearr_31977_34642[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (29))){
var inst_31847 = (state_31873[(2)]);
var state_31873__$1 = state_31873;
var statearr_31979_34643 = state_31873__$1;
(statearr_31979_34643[(2)] = inst_31847);

(statearr_31979_34643[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (44))){
var inst_31857 = (state_31873[(2)]);
var state_31873__$1 = (function (){var statearr_31984 = state_31873;
(statearr_31984[(26)] = inst_31857);

return statearr_31984;
})();
var statearr_31985_34644 = state_31873__$1;
(statearr_31985_34644[(2)] = null);

(statearr_31985_34644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (6))){
var inst_31790 = (state_31873[(27)]);
var inst_31789 = cljs.core.deref(cs);
var inst_31790__$1 = cljs.core.keys(inst_31789);
var inst_31791 = cljs.core.count(inst_31790__$1);
var inst_31792 = cljs.core.reset_BANG_(dctr,inst_31791);
var inst_31797 = cljs.core.seq(inst_31790__$1);
var inst_31798 = inst_31797;
var inst_31799 = null;
var inst_31800 = (0);
var inst_31801 = (0);
var state_31873__$1 = (function (){var statearr_31994 = state_31873;
(statearr_31994[(10)] = inst_31801);

(statearr_31994[(19)] = inst_31800);

(statearr_31994[(20)] = inst_31798);

(statearr_31994[(28)] = inst_31792);

(statearr_31994[(12)] = inst_31799);

(statearr_31994[(27)] = inst_31790__$1);

return statearr_31994;
})();
var statearr_32001_34648 = state_31873__$1;
(statearr_32001_34648[(2)] = null);

(statearr_32001_34648[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (28))){
var inst_31798 = (state_31873[(20)]);
var inst_31821 = (state_31873[(23)]);
var inst_31821__$1 = cljs.core.seq(inst_31798);
var state_31873__$1 = (function (){var statearr_32004 = state_31873;
(statearr_32004[(23)] = inst_31821__$1);

return statearr_32004;
})();
if(inst_31821__$1){
var statearr_32005_34650 = state_31873__$1;
(statearr_32005_34650[(1)] = (33));

} else {
var statearr_32006_34651 = state_31873__$1;
(statearr_32006_34651[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (25))){
var inst_31801 = (state_31873[(10)]);
var inst_31800 = (state_31873[(19)]);
var inst_31805 = (inst_31801 < inst_31800);
var inst_31806 = inst_31805;
var state_31873__$1 = state_31873;
if(cljs.core.truth_(inst_31806)){
var statearr_32008_34655 = state_31873__$1;
(statearr_32008_34655[(1)] = (27));

} else {
var statearr_32010_34656 = state_31873__$1;
(statearr_32010_34656[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (34))){
var state_31873__$1 = state_31873;
var statearr_32013_34657 = state_31873__$1;
(statearr_32013_34657[(2)] = null);

(statearr_32013_34657[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (17))){
var state_31873__$1 = state_31873;
var statearr_32017_34661 = state_31873__$1;
(statearr_32017_34661[(2)] = null);

(statearr_32017_34661[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (3))){
var inst_31862 = (state_31873[(2)]);
var state_31873__$1 = state_31873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31873__$1,inst_31862);
} else {
if((state_val_31874 === (12))){
var inst_31781 = (state_31873[(2)]);
var state_31873__$1 = state_31873;
var statearr_32023_34662 = state_31873__$1;
(statearr_32023_34662[(2)] = inst_31781);

(statearr_32023_34662[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (2))){
var state_31873__$1 = state_31873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31873__$1,(4),ch);
} else {
if((state_val_31874 === (23))){
var state_31873__$1 = state_31873;
var statearr_32033_34667 = state_31873__$1;
(statearr_32033_34667[(2)] = null);

(statearr_32033_34667[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (35))){
var inst_31844 = (state_31873[(2)]);
var state_31873__$1 = state_31873;
var statearr_32034_34668 = state_31873__$1;
(statearr_32034_34668[(2)] = inst_31844);

(statearr_32034_34668[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (19))){
var inst_31752 = (state_31873[(7)]);
var inst_31756 = cljs.core.chunk_first(inst_31752);
var inst_31757 = cljs.core.chunk_rest(inst_31752);
var inst_31758 = cljs.core.count(inst_31756);
var inst_31730 = inst_31757;
var inst_31731 = inst_31756;
var inst_31732 = inst_31758;
var inst_31733 = (0);
var state_31873__$1 = (function (){var statearr_32049 = state_31873;
(statearr_32049[(13)] = inst_31733);

(statearr_32049[(14)] = inst_31732);

(statearr_32049[(15)] = inst_31731);

(statearr_32049[(17)] = inst_31730);

return statearr_32049;
})();
var statearr_32053_34669 = state_31873__$1;
(statearr_32053_34669[(2)] = null);

(statearr_32053_34669[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (11))){
var inst_31752 = (state_31873[(7)]);
var inst_31730 = (state_31873[(17)]);
var inst_31752__$1 = cljs.core.seq(inst_31730);
var state_31873__$1 = (function (){var statearr_32062 = state_31873;
(statearr_32062[(7)] = inst_31752__$1);

return statearr_32062;
})();
if(inst_31752__$1){
var statearr_32065_34670 = state_31873__$1;
(statearr_32065_34670[(1)] = (16));

} else {
var statearr_32072_34671 = state_31873__$1;
(statearr_32072_34671[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (9))){
var inst_31784 = (state_31873[(2)]);
var state_31873__$1 = state_31873;
var statearr_32075_34672 = state_31873__$1;
(statearr_32075_34672[(2)] = inst_31784);

(statearr_32075_34672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (5))){
var inst_31727 = cljs.core.deref(cs);
var inst_31728 = cljs.core.seq(inst_31727);
var inst_31730 = inst_31728;
var inst_31731 = null;
var inst_31732 = (0);
var inst_31733 = (0);
var state_31873__$1 = (function (){var statearr_32080 = state_31873;
(statearr_32080[(13)] = inst_31733);

(statearr_32080[(14)] = inst_31732);

(statearr_32080[(15)] = inst_31731);

(statearr_32080[(17)] = inst_31730);

return statearr_32080;
})();
var statearr_32085_34674 = state_31873__$1;
(statearr_32085_34674[(2)] = null);

(statearr_32085_34674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (14))){
var state_31873__$1 = state_31873;
var statearr_32094_34675 = state_31873__$1;
(statearr_32094_34675[(2)] = null);

(statearr_32094_34675[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (45))){
var inst_31854 = (state_31873[(2)]);
var state_31873__$1 = state_31873;
var statearr_32102_34677 = state_31873__$1;
(statearr_32102_34677[(2)] = inst_31854);

(statearr_32102_34677[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (26))){
var inst_31790 = (state_31873[(27)]);
var inst_31849 = (state_31873[(2)]);
var inst_31850 = cljs.core.seq(inst_31790);
var state_31873__$1 = (function (){var statearr_32105 = state_31873;
(statearr_32105[(29)] = inst_31849);

return statearr_32105;
})();
if(inst_31850){
var statearr_32112_34678 = state_31873__$1;
(statearr_32112_34678[(1)] = (42));

} else {
var statearr_32114_34679 = state_31873__$1;
(statearr_32114_34679[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (16))){
var inst_31752 = (state_31873[(7)]);
var inst_31754 = cljs.core.chunked_seq_QMARK_(inst_31752);
var state_31873__$1 = state_31873;
if(inst_31754){
var statearr_32117_34680 = state_31873__$1;
(statearr_32117_34680[(1)] = (19));

} else {
var statearr_32120_34682 = state_31873__$1;
(statearr_32120_34682[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (38))){
var inst_31841 = (state_31873[(2)]);
var state_31873__$1 = state_31873;
var statearr_32121_34689 = state_31873__$1;
(statearr_32121_34689[(2)] = inst_31841);

(statearr_32121_34689[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (30))){
var state_31873__$1 = state_31873;
var statearr_32125_34690 = state_31873__$1;
(statearr_32125_34690[(2)] = null);

(statearr_32125_34690[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (10))){
var inst_31733 = (state_31873[(13)]);
var inst_31731 = (state_31873[(15)]);
var inst_31741 = cljs.core._nth(inst_31731,inst_31733);
var inst_31742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31741,(0),null);
var inst_31743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31741,(1),null);
var state_31873__$1 = (function (){var statearr_32130 = state_31873;
(statearr_32130[(24)] = inst_31742);

return statearr_32130;
})();
if(cljs.core.truth_(inst_31743)){
var statearr_32133_34691 = state_31873__$1;
(statearr_32133_34691[(1)] = (13));

} else {
var statearr_32135_34692 = state_31873__$1;
(statearr_32135_34692[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (18))){
var inst_31779 = (state_31873[(2)]);
var state_31873__$1 = state_31873;
var statearr_32142_34694 = state_31873__$1;
(statearr_32142_34694[(2)] = inst_31779);

(statearr_32142_34694[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (42))){
var state_31873__$1 = state_31873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31873__$1,(45),dchan);
} else {
if((state_val_31874 === (37))){
var inst_31720 = (state_31873[(9)]);
var inst_31821 = (state_31873[(23)]);
var inst_31830 = (state_31873[(22)]);
var inst_31830__$1 = cljs.core.first(inst_31821);
var inst_31831 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31830__$1,inst_31720,done);
var state_31873__$1 = (function (){var statearr_32156 = state_31873;
(statearr_32156[(22)] = inst_31830__$1);

return statearr_32156;
})();
if(cljs.core.truth_(inst_31831)){
var statearr_32161_34695 = state_31873__$1;
(statearr_32161_34695[(1)] = (39));

} else {
var statearr_32164_34696 = state_31873__$1;
(statearr_32164_34696[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31874 === (8))){
var inst_31733 = (state_31873[(13)]);
var inst_31732 = (state_31873[(14)]);
var inst_31735 = (inst_31733 < inst_31732);
var inst_31736 = inst_31735;
var state_31873__$1 = state_31873;
if(cljs.core.truth_(inst_31736)){
var statearr_32168_34697 = state_31873__$1;
(statearr_32168_34697[(1)] = (10));

} else {
var statearr_32171_34698 = state_31873__$1;
(statearr_32171_34698[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29700__auto__ = null;
var cljs$core$async$mult_$_state_machine__29700__auto____0 = (function (){
var statearr_32201 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32201[(0)] = cljs$core$async$mult_$_state_machine__29700__auto__);

(statearr_32201[(1)] = (1));

return statearr_32201;
});
var cljs$core$async$mult_$_state_machine__29700__auto____1 = (function (state_31873){
while(true){
var ret_value__29701__auto__ = (function (){try{while(true){
var result__29702__auto__ = switch__29699__auto__(state_31873);
if(cljs.core.keyword_identical_QMARK_(result__29702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29702__auto__;
}
break;
}
}catch (e32203){var ex__29703__auto__ = e32203;
var statearr_32206_34699 = state_31873;
(statearr_32206_34699[(2)] = ex__29703__auto__);


if(cljs.core.seq((state_31873[(4)]))){
var statearr_32208_34702 = state_31873;
(statearr_32208_34702[(1)] = cljs.core.first((state_31873[(4)])));

} else {
throw ex__29703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34703 = state_31873;
state_31873 = G__34703;
continue;
} else {
return ret_value__29701__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29700__auto__ = function(state_31873){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29700__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29700__auto____1.call(this,state_31873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29700__auto____0;
cljs$core$async$mult_$_state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29700__auto____1;
return cljs$core$async$mult_$_state_machine__29700__auto__;
})()
})();
var state__30346__auto__ = (function (){var statearr_32213 = f__30344__auto__();
(statearr_32213[(6)] = c__30343__auto___34569);

return statearr_32213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30346__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32223 = arguments.length;
switch (G__32223) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_34707 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34707(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34708 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34708(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34710 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34710(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34712 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34712(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34713 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34713(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34714 = arguments.length;
var i__5770__auto___34715 = (0);
while(true){
if((i__5770__auto___34715 < len__5769__auto___34714)){
args__5775__auto__.push((arguments[i__5770__auto___34715]));

var G__34717 = (i__5770__auto___34715 + (1));
i__5770__auto___34715 = G__34717;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32358){
var map__32359 = p__32358;
var map__32359__$1 = cljs.core.__destructure_map(map__32359);
var opts = map__32359__$1;
var statearr_32361_34719 = state;
(statearr_32361_34719[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32367_34723 = state;
(statearr_32367_34723[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_32370_34724 = state;
(statearr_32370_34724[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32349){
var G__32350 = cljs.core.first(seq32349);
var seq32349__$1 = cljs.core.next(seq32349);
var G__32351 = cljs.core.first(seq32349__$1);
var seq32349__$2 = cljs.core.next(seq32349__$1);
var G__32352 = cljs.core.first(seq32349__$2);
var seq32349__$3 = cljs.core.next(seq32349__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32350,G__32351,G__32352,seq32349__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32392 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32392 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32393){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32393 = meta32393;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32394,meta32393__$1){
var self__ = this;
var _32394__$1 = this;
return (new cljs.core.async.t_cljs$core$async32392(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32393__$1));
}));

(cljs.core.async.t_cljs$core$async32392.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32394){
var self__ = this;
var _32394__$1 = this;
return self__.meta32393;
}));

(cljs.core.async.t_cljs$core$async32392.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32392.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32392.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32392.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32392.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32392.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32392.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32392.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32392.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32393","meta32393",467137515,null)], null);
}));

(cljs.core.async.t_cljs$core$async32392.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32392.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32392");

(cljs.core.async.t_cljs$core$async32392.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32392");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32392.
 */
cljs.core.async.__GT_t_cljs$core$async32392 = (function cljs$core$async$mix_$___GT_t_cljs$core$async32392(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32393){
return (new cljs.core.async.t_cljs$core$async32392(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32393));
});

}

return (new cljs.core.async.t_cljs$core$async32392(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30343__auto___34746 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30344__auto__ = (function (){var switch__29699__auto__ = (function (state_32486){
var state_val_32487 = (state_32486[(1)]);
if((state_val_32487 === (7))){
var inst_32441 = (state_32486[(2)]);
var state_32486__$1 = state_32486;
if(cljs.core.truth_(inst_32441)){
var statearr_32490_34747 = state_32486__$1;
(statearr_32490_34747[(1)] = (8));

} else {
var statearr_32493_34748 = state_32486__$1;
(statearr_32493_34748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32487 === (20))){
var inst_32433 = (state_32486[(7)]);
var state_32486__$1 = state_32486;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32486__$1,(23),out,inst_32433);
} else {
if((state_val_32487 === (1))){
var inst_32416 = calc_state();
var inst_32417 = cljs.core.__destructure_map(inst_32416);
var inst_32418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32417,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32417,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32417,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32421 = inst_32416;
var state_32486__$1 = (function (){var statearr_32495 = state_32486;
(statearr_32495[(8)] = inst_32420);

(statearr_32495[(9)] = inst_32421);

(statearr_32495[(10)] = inst_32418);

(statearr_32495[(11)] = inst_32419);

return statearr_32495;
})();
var statearr_32497_34757 = state_32486__$1;
(statearr_32497_34757[(2)] = null);

(statearr_32497_34757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32487 === (24))){
var inst_32424 = (state_32486[(12)]);
var inst_32421 = inst_32424;
var state_32486__$1 = (function (){var statearr_32498 = state_32486;
(statearr_32498[(9)] = inst_32421);

return statearr_32498;
})();
var statearr_32499_34758 = state_32486__$1;
(statearr_32499_34758[(2)] = null);

(statearr_32499_34758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32487 === (4))){
var inst_32436 = (state_32486[(13)]);
var inst_32433 = (state_32486[(7)]);
var inst_32432 = (state_32486[(2)]);
var inst_32433__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32432,(0),null);
var inst_32434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32432,(1),null);
var inst_32436__$1 = (inst_32433__$1 == null);
var state_32486__$1 = (function (){var statearr_32500 = state_32486;
(statearr_32500[(13)] = inst_32436__$1);

(statearr_32500[(14)] = inst_32434);

(statearr_32500[(7)] = inst_32433__$1);

return statearr_32500;
})();
if(cljs.core.truth_(inst_32436__$1)){
var statearr_32501_34759 = state_32486__$1;
(statearr_32501_34759[(1)] = (5));

} else {
var statearr_32502_34760 = state_32486__$1;
(statearr_32502_34760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32487 === (15))){
var inst_32425 = (state_32486[(15)]);
var inst_32456 = (state_32486[(16)]);
var inst_32456__$1 = cljs.core.empty_QMARK_(inst_32425);
var state_32486__$1 = (function (){var statearr_32504 = state_32486;
(statearr_32504[(16)] = inst_32456__$1);

return statearr_32504;
})();
if(inst_32456__$1){
var statearr_32505_34764 = state_32486__$1;
(statearr_32505_34764[(1)] = (17));

} else {
var statearr_32506_34765 = state_32486__$1;
(statearr_32506_34765[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32487 === (21))){
var inst_32424 = (state_32486[(12)]);
var inst_32421 = inst_32424;
var state_32486__$1 = (function (){var statearr_32509 = state_32486;
(statearr_32509[(9)] = inst_32421);

return statearr_32509;
})();
var statearr_32511_34776 = state_32486__$1;
(statearr_32511_34776[(2)] = null);

(statearr_32511_34776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32487 === (13))){
var inst_32448 = (state_32486[(2)]);
var inst_32449 = calc_state();
var inst_32421 = inst_32449;
var state_32486__$1 = (function (){var statearr_32514 = state_32486;
(statearr_32514[(9)] = inst_32421);

(statearr_32514[(17)] = inst_32448);

return statearr_32514;
})();
var statearr_32520_34777 = state_32486__$1;
(statearr_32520_34777[(2)] = null);

(statearr_32520_34777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32487 === (22))){
var inst_32477 = (state_32486[(2)]);
var state_32486__$1 = state_32486;
var statearr_32529_34778 = state_32486__$1;
(statearr_32529_34778[(2)] = inst_32477);

(statearr_32529_34778[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32487 === (6))){
var inst_32434 = (state_32486[(14)]);
var inst_32439 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32434,change);
var state_32486__$1 = state_32486;
var statearr_32538_34785 = state_32486__$1;
(statearr_32538_34785[(2)] = inst_32439);

(statearr_32538_34785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32487 === (25))){
var state_32486__$1 = state_32486;
var statearr_32543_34786 = state_32486__$1;
(statearr_32543_34786[(2)] = null);

(statearr_32543_34786[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32487 === (17))){
var inst_32426 = (state_32486[(18)]);
var inst_32434 = (state_32486[(14)]);
var inst_32459 = (inst_32426.cljs$core$IFn$_invoke$arity$1 ? inst_32426.cljs$core$IFn$_invoke$arity$1(inst_32434) : inst_32426.call(null,inst_32434));
var inst_32460 = cljs.core.not(inst_32459);
var state_32486__$1 = state_32486;
var statearr_32548_34793 = state_32486__$1;
(statearr_32548_34793[(2)] = inst_32460);

(statearr_32548_34793[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32487 === (3))){
var inst_32481 = (state_32486[(2)]);
var state_32486__$1 = state_32486;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32486__$1,inst_32481);
} else {
if((state_val_32487 === (12))){
var state_32486__$1 = state_32486;
var statearr_32554_34794 = state_32486__$1;
(statearr_32554_34794[(2)] = null);

(statearr_32554_34794[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32487 === (2))){
var inst_32421 = (state_32486[(9)]);
var inst_32424 = (state_32486[(12)]);
var inst_32424__$1 = cljs.core.__destructure_map(inst_32421);
var inst_32425 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32424__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32424__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32424__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32486__$1 = (function (){var statearr_32564 = state_32486;
(statearr_32564[(18)] = inst_32426);

(statearr_32564[(12)] = inst_32424__$1);

(statearr_32564[(15)] = inst_32425);

return statearr_32564;
})();
return cljs.core.async.ioc_alts_BANG_(state_32486__$1,(4),inst_32427);
} else {
if((state_val_32487 === (23))){
var inst_32468 = (state_32486[(2)]);
var state_32486__$1 = state_32486;
if(cljs.core.truth_(inst_32468)){
var statearr_32567_34795 = state_32486__$1;
(statearr_32567_34795[(1)] = (24));

} else {
var statearr_32572_34796 = state_32486__$1;
(statearr_32572_34796[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32487 === (19))){
var inst_32463 = (state_32486[(2)]);
var state_32486__$1 = state_32486;
var statearr_32573_34797 = state_32486__$1;
(statearr_32573_34797[(2)] = inst_32463);

(statearr_32573_34797[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32487 === (11))){
var inst_32434 = (state_32486[(14)]);
var inst_32445 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32434);
var state_32486__$1 = state_32486;
var statearr_32577_34799 = state_32486__$1;
(statearr_32577_34799[(2)] = inst_32445);

(statearr_32577_34799[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32487 === (9))){
var inst_32434 = (state_32486[(14)]);
var inst_32425 = (state_32486[(15)]);
var inst_32452 = (state_32486[(19)]);
var inst_32452__$1 = (inst_32425.cljs$core$IFn$_invoke$arity$1 ? inst_32425.cljs$core$IFn$_invoke$arity$1(inst_32434) : inst_32425.call(null,inst_32434));
var state_32486__$1 = (function (){var statearr_32584 = state_32486;
(statearr_32584[(19)] = inst_32452__$1);

return statearr_32584;
})();
if(cljs.core.truth_(inst_32452__$1)){
var statearr_32585_34800 = state_32486__$1;
(statearr_32585_34800[(1)] = (14));

} else {
var statearr_32586_34801 = state_32486__$1;
(statearr_32586_34801[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32487 === (5))){
var inst_32436 = (state_32486[(13)]);
var state_32486__$1 = state_32486;
var statearr_32595_34802 = state_32486__$1;
(statearr_32595_34802[(2)] = inst_32436);

(statearr_32595_34802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32487 === (14))){
var inst_32452 = (state_32486[(19)]);
var state_32486__$1 = state_32486;
var statearr_32596_34804 = state_32486__$1;
(statearr_32596_34804[(2)] = inst_32452);

(statearr_32596_34804[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32487 === (26))){
var inst_32473 = (state_32486[(2)]);
var state_32486__$1 = state_32486;
var statearr_32597_34805 = state_32486__$1;
(statearr_32597_34805[(2)] = inst_32473);

(statearr_32597_34805[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32487 === (16))){
var inst_32465 = (state_32486[(2)]);
var state_32486__$1 = state_32486;
if(cljs.core.truth_(inst_32465)){
var statearr_32598_34806 = state_32486__$1;
(statearr_32598_34806[(1)] = (20));

} else {
var statearr_32599_34807 = state_32486__$1;
(statearr_32599_34807[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32487 === (10))){
var inst_32479 = (state_32486[(2)]);
var state_32486__$1 = state_32486;
var statearr_32603_34808 = state_32486__$1;
(statearr_32603_34808[(2)] = inst_32479);

(statearr_32603_34808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32487 === (18))){
var inst_32456 = (state_32486[(16)]);
var state_32486__$1 = state_32486;
var statearr_32605_34809 = state_32486__$1;
(statearr_32605_34809[(2)] = inst_32456);

(statearr_32605_34809[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32487 === (8))){
var inst_32433 = (state_32486[(7)]);
var inst_32443 = (inst_32433 == null);
var state_32486__$1 = state_32486;
if(cljs.core.truth_(inst_32443)){
var statearr_32609_34810 = state_32486__$1;
(statearr_32609_34810[(1)] = (11));

} else {
var statearr_32610_34817 = state_32486__$1;
(statearr_32610_34817[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29700__auto__ = null;
var cljs$core$async$mix_$_state_machine__29700__auto____0 = (function (){
var statearr_32614 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32614[(0)] = cljs$core$async$mix_$_state_machine__29700__auto__);

(statearr_32614[(1)] = (1));

return statearr_32614;
});
var cljs$core$async$mix_$_state_machine__29700__auto____1 = (function (state_32486){
while(true){
var ret_value__29701__auto__ = (function (){try{while(true){
var result__29702__auto__ = switch__29699__auto__(state_32486);
if(cljs.core.keyword_identical_QMARK_(result__29702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29702__auto__;
}
break;
}
}catch (e32615){var ex__29703__auto__ = e32615;
var statearr_32616_34818 = state_32486;
(statearr_32616_34818[(2)] = ex__29703__auto__);


if(cljs.core.seq((state_32486[(4)]))){
var statearr_32621_34819 = state_32486;
(statearr_32621_34819[(1)] = cljs.core.first((state_32486[(4)])));

} else {
throw ex__29703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34820 = state_32486;
state_32486 = G__34820;
continue;
} else {
return ret_value__29701__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29700__auto__ = function(state_32486){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29700__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29700__auto____1.call(this,state_32486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29700__auto____0;
cljs$core$async$mix_$_state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29700__auto____1;
return cljs$core$async$mix_$_state_machine__29700__auto__;
})()
})();
var state__30346__auto__ = (function (){var statearr_32623 = f__30344__auto__();
(statearr_32623[(6)] = c__30343__auto___34746);

return statearr_32623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30346__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_34831 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_34831(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34832 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_34832(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34834 = (function() {
var G__34835 = null;
var G__34835__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__34835__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__34835 = function(p,v){
switch(arguments.length){
case 1:
return G__34835__1.call(this,p);
case 2:
return G__34835__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34835.cljs$core$IFn$_invoke$arity$1 = G__34835__1;
G__34835.cljs$core$IFn$_invoke$arity$2 = G__34835__2;
return G__34835;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32707 = arguments.length;
switch (G__32707) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34834(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34834(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32735 = arguments.length;
switch (G__32735) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32725_SHARP_){
if(cljs.core.truth_((p1__32725_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32725_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32725_SHARP_.call(null,topic)))){
return p1__32725_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32725_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32747 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32747 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32748){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32748 = meta32748;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32749,meta32748__$1){
var self__ = this;
var _32749__$1 = this;
return (new cljs.core.async.t_cljs$core$async32747(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32748__$1));
}));

(cljs.core.async.t_cljs$core$async32747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32749){
var self__ = this;
var _32749__$1 = this;
return self__.meta32748;
}));

(cljs.core.async.t_cljs$core$async32747.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32747.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32747.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32747.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32747.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async32747.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32747.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32747.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32748","meta32748",-893142376,null)], null);
}));

(cljs.core.async.t_cljs$core$async32747.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32747.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32747");

(cljs.core.async.t_cljs$core$async32747.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32747");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32747.
 */
cljs.core.async.__GT_t_cljs$core$async32747 = (function cljs$core$async$__GT_t_cljs$core$async32747(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32748){
return (new cljs.core.async.t_cljs$core$async32747(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32748));
});

}

return (new cljs.core.async.t_cljs$core$async32747(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30343__auto___34850 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30344__auto__ = (function (){var switch__29699__auto__ = (function (state_32884){
var state_val_32885 = (state_32884[(1)]);
if((state_val_32885 === (7))){
var inst_32876 = (state_32884[(2)]);
var state_32884__$1 = state_32884;
var statearr_32890_34857 = state_32884__$1;
(statearr_32890_34857[(2)] = inst_32876);

(statearr_32890_34857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (20))){
var state_32884__$1 = state_32884;
var statearr_32893_34858 = state_32884__$1;
(statearr_32893_34858[(2)] = null);

(statearr_32893_34858[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (1))){
var state_32884__$1 = state_32884;
var statearr_32894_34859 = state_32884__$1;
(statearr_32894_34859[(2)] = null);

(statearr_32894_34859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (24))){
var inst_32851 = (state_32884[(7)]);
var inst_32868 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32851);
var state_32884__$1 = state_32884;
var statearr_32896_34861 = state_32884__$1;
(statearr_32896_34861[(2)] = inst_32868);

(statearr_32896_34861[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (4))){
var inst_32789 = (state_32884[(8)]);
var inst_32789__$1 = (state_32884[(2)]);
var inst_32790 = (inst_32789__$1 == null);
var state_32884__$1 = (function (){var statearr_32897 = state_32884;
(statearr_32897[(8)] = inst_32789__$1);

return statearr_32897;
})();
if(cljs.core.truth_(inst_32790)){
var statearr_32898_34865 = state_32884__$1;
(statearr_32898_34865[(1)] = (5));

} else {
var statearr_32899_34866 = state_32884__$1;
(statearr_32899_34866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (15))){
var inst_32844 = (state_32884[(2)]);
var state_32884__$1 = state_32884;
var statearr_32900_34867 = state_32884__$1;
(statearr_32900_34867[(2)] = inst_32844);

(statearr_32900_34867[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (21))){
var inst_32873 = (state_32884[(2)]);
var state_32884__$1 = (function (){var statearr_32902 = state_32884;
(statearr_32902[(9)] = inst_32873);

return statearr_32902;
})();
var statearr_32906_34868 = state_32884__$1;
(statearr_32906_34868[(2)] = null);

(statearr_32906_34868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (13))){
var inst_32817 = (state_32884[(10)]);
var inst_32824 = cljs.core.chunked_seq_QMARK_(inst_32817);
var state_32884__$1 = state_32884;
if(inst_32824){
var statearr_32919_34869 = state_32884__$1;
(statearr_32919_34869[(1)] = (16));

} else {
var statearr_32920_34870 = state_32884__$1;
(statearr_32920_34870[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (22))){
var inst_32863 = (state_32884[(2)]);
var state_32884__$1 = state_32884;
if(cljs.core.truth_(inst_32863)){
var statearr_32921_34871 = state_32884__$1;
(statearr_32921_34871[(1)] = (23));

} else {
var statearr_32923_34872 = state_32884__$1;
(statearr_32923_34872[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (6))){
var inst_32856 = (state_32884[(11)]);
var inst_32851 = (state_32884[(7)]);
var inst_32789 = (state_32884[(8)]);
var inst_32851__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32789) : topic_fn.call(null,inst_32789));
var inst_32855 = cljs.core.deref(mults);
var inst_32856__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32855,inst_32851__$1);
var state_32884__$1 = (function (){var statearr_32924 = state_32884;
(statearr_32924[(11)] = inst_32856__$1);

(statearr_32924[(7)] = inst_32851__$1);

return statearr_32924;
})();
if(cljs.core.truth_(inst_32856__$1)){
var statearr_32925_34873 = state_32884__$1;
(statearr_32925_34873[(1)] = (19));

} else {
var statearr_32926_34874 = state_32884__$1;
(statearr_32926_34874[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (25))){
var inst_32870 = (state_32884[(2)]);
var state_32884__$1 = state_32884;
var statearr_32927_34875 = state_32884__$1;
(statearr_32927_34875[(2)] = inst_32870);

(statearr_32927_34875[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (17))){
var inst_32817 = (state_32884[(10)]);
var inst_32834 = cljs.core.first(inst_32817);
var inst_32835 = cljs.core.async.muxch_STAR_(inst_32834);
var inst_32836 = cljs.core.async.close_BANG_(inst_32835);
var inst_32837 = cljs.core.next(inst_32817);
var inst_32799 = inst_32837;
var inst_32800 = null;
var inst_32801 = (0);
var inst_32802 = (0);
var state_32884__$1 = (function (){var statearr_32928 = state_32884;
(statearr_32928[(12)] = inst_32836);

(statearr_32928[(13)] = inst_32802);

(statearr_32928[(14)] = inst_32799);

(statearr_32928[(15)] = inst_32801);

(statearr_32928[(16)] = inst_32800);

return statearr_32928;
})();
var statearr_32930_34883 = state_32884__$1;
(statearr_32930_34883[(2)] = null);

(statearr_32930_34883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (3))){
var inst_32878 = (state_32884[(2)]);
var state_32884__$1 = state_32884;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32884__$1,inst_32878);
} else {
if((state_val_32885 === (12))){
var inst_32847 = (state_32884[(2)]);
var state_32884__$1 = state_32884;
var statearr_32933_34884 = state_32884__$1;
(statearr_32933_34884[(2)] = inst_32847);

(statearr_32933_34884[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (2))){
var state_32884__$1 = state_32884;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32884__$1,(4),ch);
} else {
if((state_val_32885 === (23))){
var state_32884__$1 = state_32884;
var statearr_32940_34888 = state_32884__$1;
(statearr_32940_34888[(2)] = null);

(statearr_32940_34888[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (19))){
var inst_32856 = (state_32884[(11)]);
var inst_32789 = (state_32884[(8)]);
var inst_32861 = cljs.core.async.muxch_STAR_(inst_32856);
var state_32884__$1 = state_32884;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32884__$1,(22),inst_32861,inst_32789);
} else {
if((state_val_32885 === (11))){
var inst_32817 = (state_32884[(10)]);
var inst_32799 = (state_32884[(14)]);
var inst_32817__$1 = cljs.core.seq(inst_32799);
var state_32884__$1 = (function (){var statearr_32943 = state_32884;
(statearr_32943[(10)] = inst_32817__$1);

return statearr_32943;
})();
if(inst_32817__$1){
var statearr_32944_34889 = state_32884__$1;
(statearr_32944_34889[(1)] = (13));

} else {
var statearr_32945_34890 = state_32884__$1;
(statearr_32945_34890[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (9))){
var inst_32849 = (state_32884[(2)]);
var state_32884__$1 = state_32884;
var statearr_32948_34891 = state_32884__$1;
(statearr_32948_34891[(2)] = inst_32849);

(statearr_32948_34891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (5))){
var inst_32796 = cljs.core.deref(mults);
var inst_32797 = cljs.core.vals(inst_32796);
var inst_32798 = cljs.core.seq(inst_32797);
var inst_32799 = inst_32798;
var inst_32800 = null;
var inst_32801 = (0);
var inst_32802 = (0);
var state_32884__$1 = (function (){var statearr_32953 = state_32884;
(statearr_32953[(13)] = inst_32802);

(statearr_32953[(14)] = inst_32799);

(statearr_32953[(15)] = inst_32801);

(statearr_32953[(16)] = inst_32800);

return statearr_32953;
})();
var statearr_32954_34892 = state_32884__$1;
(statearr_32954_34892[(2)] = null);

(statearr_32954_34892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (14))){
var state_32884__$1 = state_32884;
var statearr_32965_34893 = state_32884__$1;
(statearr_32965_34893[(2)] = null);

(statearr_32965_34893[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (16))){
var inst_32817 = (state_32884[(10)]);
var inst_32827 = cljs.core.chunk_first(inst_32817);
var inst_32828 = cljs.core.chunk_rest(inst_32817);
var inst_32829 = cljs.core.count(inst_32827);
var inst_32799 = inst_32828;
var inst_32800 = inst_32827;
var inst_32801 = inst_32829;
var inst_32802 = (0);
var state_32884__$1 = (function (){var statearr_32973 = state_32884;
(statearr_32973[(13)] = inst_32802);

(statearr_32973[(14)] = inst_32799);

(statearr_32973[(15)] = inst_32801);

(statearr_32973[(16)] = inst_32800);

return statearr_32973;
})();
var statearr_32974_34894 = state_32884__$1;
(statearr_32974_34894[(2)] = null);

(statearr_32974_34894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (10))){
var inst_32802 = (state_32884[(13)]);
var inst_32799 = (state_32884[(14)]);
var inst_32801 = (state_32884[(15)]);
var inst_32800 = (state_32884[(16)]);
var inst_32807 = cljs.core._nth(inst_32800,inst_32802);
var inst_32808 = cljs.core.async.muxch_STAR_(inst_32807);
var inst_32809 = cljs.core.async.close_BANG_(inst_32808);
var inst_32810 = (inst_32802 + (1));
var tmp32958 = inst_32799;
var tmp32959 = inst_32801;
var tmp32960 = inst_32800;
var inst_32799__$1 = tmp32958;
var inst_32800__$1 = tmp32960;
var inst_32801__$1 = tmp32959;
var inst_32802__$1 = inst_32810;
var state_32884__$1 = (function (){var statearr_32976 = state_32884;
(statearr_32976[(13)] = inst_32802__$1);

(statearr_32976[(14)] = inst_32799__$1);

(statearr_32976[(15)] = inst_32801__$1);

(statearr_32976[(17)] = inst_32809);

(statearr_32976[(16)] = inst_32800__$1);

return statearr_32976;
})();
var statearr_32977_34895 = state_32884__$1;
(statearr_32977_34895[(2)] = null);

(statearr_32977_34895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (18))){
var inst_32840 = (state_32884[(2)]);
var state_32884__$1 = state_32884;
var statearr_32978_34896 = state_32884__$1;
(statearr_32978_34896[(2)] = inst_32840);

(statearr_32978_34896[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (8))){
var inst_32802 = (state_32884[(13)]);
var inst_32801 = (state_32884[(15)]);
var inst_32804 = (inst_32802 < inst_32801);
var inst_32805 = inst_32804;
var state_32884__$1 = state_32884;
if(cljs.core.truth_(inst_32805)){
var statearr_32985_34897 = state_32884__$1;
(statearr_32985_34897[(1)] = (10));

} else {
var statearr_32987_34898 = state_32884__$1;
(statearr_32987_34898[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29700__auto__ = null;
var cljs$core$async$state_machine__29700__auto____0 = (function (){
var statearr_32991 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32991[(0)] = cljs$core$async$state_machine__29700__auto__);

(statearr_32991[(1)] = (1));

return statearr_32991;
});
var cljs$core$async$state_machine__29700__auto____1 = (function (state_32884){
while(true){
var ret_value__29701__auto__ = (function (){try{while(true){
var result__29702__auto__ = switch__29699__auto__(state_32884);
if(cljs.core.keyword_identical_QMARK_(result__29702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29702__auto__;
}
break;
}
}catch (e32994){var ex__29703__auto__ = e32994;
var statearr_32995_34902 = state_32884;
(statearr_32995_34902[(2)] = ex__29703__auto__);


if(cljs.core.seq((state_32884[(4)]))){
var statearr_32998_34904 = state_32884;
(statearr_32998_34904[(1)] = cljs.core.first((state_32884[(4)])));

} else {
throw ex__29703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34905 = state_32884;
state_32884 = G__34905;
continue;
} else {
return ret_value__29701__auto__;
}
break;
}
});
cljs$core$async$state_machine__29700__auto__ = function(state_32884){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29700__auto____1.call(this,state_32884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29700__auto____0;
cljs$core$async$state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29700__auto____1;
return cljs$core$async$state_machine__29700__auto__;
})()
})();
var state__30346__auto__ = (function (){var statearr_33010 = f__30344__auto__();
(statearr_33010[(6)] = c__30343__auto___34850);

return statearr_33010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30346__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33016 = arguments.length;
switch (G__33016) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33026 = arguments.length;
switch (G__33026) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33033 = arguments.length;
switch (G__33033) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__30343__auto___34913 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30344__auto__ = (function (){var switch__29699__auto__ = (function (state_33122){
var state_val_33123 = (state_33122[(1)]);
if((state_val_33123 === (7))){
var state_33122__$1 = state_33122;
var statearr_33124_34914 = state_33122__$1;
(statearr_33124_34914[(2)] = null);

(statearr_33124_34914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (1))){
var state_33122__$1 = state_33122;
var statearr_33126_34915 = state_33122__$1;
(statearr_33126_34915[(2)] = null);

(statearr_33126_34915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (4))){
var inst_33042 = (state_33122[(7)]);
var inst_33041 = (state_33122[(8)]);
var inst_33049 = (inst_33042 < inst_33041);
var state_33122__$1 = state_33122;
if(cljs.core.truth_(inst_33049)){
var statearr_33133_34916 = state_33122__$1;
(statearr_33133_34916[(1)] = (6));

} else {
var statearr_33134_34917 = state_33122__$1;
(statearr_33134_34917[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (15))){
var inst_33101 = (state_33122[(9)]);
var inst_33106 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33101);
var state_33122__$1 = state_33122;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33122__$1,(17),out,inst_33106);
} else {
if((state_val_33123 === (13))){
var inst_33101 = (state_33122[(9)]);
var inst_33101__$1 = (state_33122[(2)]);
var inst_33102 = cljs.core.some(cljs.core.nil_QMARK_,inst_33101__$1);
var state_33122__$1 = (function (){var statearr_33135 = state_33122;
(statearr_33135[(9)] = inst_33101__$1);

return statearr_33135;
})();
if(cljs.core.truth_(inst_33102)){
var statearr_33136_34918 = state_33122__$1;
(statearr_33136_34918[(1)] = (14));

} else {
var statearr_33137_34919 = state_33122__$1;
(statearr_33137_34919[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (6))){
var state_33122__$1 = state_33122;
var statearr_33139_34920 = state_33122__$1;
(statearr_33139_34920[(2)] = null);

(statearr_33139_34920[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (17))){
var inst_33108 = (state_33122[(2)]);
var state_33122__$1 = (function (){var statearr_33145 = state_33122;
(statearr_33145[(10)] = inst_33108);

return statearr_33145;
})();
var statearr_33148_34922 = state_33122__$1;
(statearr_33148_34922[(2)] = null);

(statearr_33148_34922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (3))){
var inst_33113 = (state_33122[(2)]);
var state_33122__$1 = state_33122;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33122__$1,inst_33113);
} else {
if((state_val_33123 === (12))){
var _ = (function (){var statearr_33152 = state_33122;
(statearr_33152[(4)] = cljs.core.rest((state_33122[(4)])));

return statearr_33152;
})();
var state_33122__$1 = state_33122;
var ex33144 = (state_33122__$1[(2)]);
var statearr_33153_34924 = state_33122__$1;
(statearr_33153_34924[(5)] = ex33144);


if((ex33144 instanceof Object)){
var statearr_33157_34925 = state_33122__$1;
(statearr_33157_34925[(1)] = (11));

(statearr_33157_34925[(5)] = null);

} else {
throw ex33144;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (2))){
var inst_33040 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33041 = cnt;
var inst_33042 = (0);
var state_33122__$1 = (function (){var statearr_33161 = state_33122;
(statearr_33161[(7)] = inst_33042);

(statearr_33161[(11)] = inst_33040);

(statearr_33161[(8)] = inst_33041);

return statearr_33161;
})();
var statearr_33162_34926 = state_33122__$1;
(statearr_33162_34926[(2)] = null);

(statearr_33162_34926[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (11))){
var inst_33056 = (state_33122[(2)]);
var inst_33061 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33122__$1 = (function (){var statearr_33171 = state_33122;
(statearr_33171[(12)] = inst_33056);

return statearr_33171;
})();
var statearr_33172_34927 = state_33122__$1;
(statearr_33172_34927[(2)] = inst_33061);

(statearr_33172_34927[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (9))){
var inst_33042 = (state_33122[(7)]);
var _ = (function (){var statearr_33179 = state_33122;
(statearr_33179[(4)] = cljs.core.cons((12),(state_33122[(4)])));

return statearr_33179;
})();
var inst_33087 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33042) : chs__$1.call(null,inst_33042));
var inst_33088 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33042) : done.call(null,inst_33042));
var inst_33089 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33087,inst_33088);
var ___$1 = (function (){var statearr_33183 = state_33122;
(statearr_33183[(4)] = cljs.core.rest((state_33122[(4)])));

return statearr_33183;
})();
var state_33122__$1 = state_33122;
var statearr_33190_34929 = state_33122__$1;
(statearr_33190_34929[(2)] = inst_33089);

(statearr_33190_34929[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (5))){
var inst_33099 = (state_33122[(2)]);
var state_33122__$1 = (function (){var statearr_33191 = state_33122;
(statearr_33191[(13)] = inst_33099);

return statearr_33191;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33122__$1,(13),dchan);
} else {
if((state_val_33123 === (14))){
var inst_33104 = cljs.core.async.close_BANG_(out);
var state_33122__$1 = state_33122;
var statearr_33194_34931 = state_33122__$1;
(statearr_33194_34931[(2)] = inst_33104);

(statearr_33194_34931[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (16))){
var inst_33111 = (state_33122[(2)]);
var state_33122__$1 = state_33122;
var statearr_33195_34932 = state_33122__$1;
(statearr_33195_34932[(2)] = inst_33111);

(statearr_33195_34932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (10))){
var inst_33042 = (state_33122[(7)]);
var inst_33092 = (state_33122[(2)]);
var inst_33093 = (inst_33042 + (1));
var inst_33042__$1 = inst_33093;
var state_33122__$1 = (function (){var statearr_33198 = state_33122;
(statearr_33198[(7)] = inst_33042__$1);

(statearr_33198[(14)] = inst_33092);

return statearr_33198;
})();
var statearr_33199_34933 = state_33122__$1;
(statearr_33199_34933[(2)] = null);

(statearr_33199_34933[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (8))){
var inst_33097 = (state_33122[(2)]);
var state_33122__$1 = state_33122;
var statearr_33204_34934 = state_33122__$1;
(statearr_33204_34934[(2)] = inst_33097);

(statearr_33204_34934[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29700__auto__ = null;
var cljs$core$async$state_machine__29700__auto____0 = (function (){
var statearr_33214 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33214[(0)] = cljs$core$async$state_machine__29700__auto__);

(statearr_33214[(1)] = (1));

return statearr_33214;
});
var cljs$core$async$state_machine__29700__auto____1 = (function (state_33122){
while(true){
var ret_value__29701__auto__ = (function (){try{while(true){
var result__29702__auto__ = switch__29699__auto__(state_33122);
if(cljs.core.keyword_identical_QMARK_(result__29702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29702__auto__;
}
break;
}
}catch (e33215){var ex__29703__auto__ = e33215;
var statearr_33218_34935 = state_33122;
(statearr_33218_34935[(2)] = ex__29703__auto__);


if(cljs.core.seq((state_33122[(4)]))){
var statearr_33219_34936 = state_33122;
(statearr_33219_34936[(1)] = cljs.core.first((state_33122[(4)])));

} else {
throw ex__29703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34937 = state_33122;
state_33122 = G__34937;
continue;
} else {
return ret_value__29701__auto__;
}
break;
}
});
cljs$core$async$state_machine__29700__auto__ = function(state_33122){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29700__auto____1.call(this,state_33122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29700__auto____0;
cljs$core$async$state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29700__auto____1;
return cljs$core$async$state_machine__29700__auto__;
})()
})();
var state__30346__auto__ = (function (){var statearr_33223 = f__30344__auto__();
(statearr_33223[(6)] = c__30343__auto___34913);

return statearr_33223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30346__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33226 = arguments.length;
switch (G__33226) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30343__auto___34939 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30344__auto__ = (function (){var switch__29699__auto__ = (function (state_33272){
var state_val_33273 = (state_33272[(1)]);
if((state_val_33273 === (7))){
var inst_33246 = (state_33272[(7)]);
var inst_33247 = (state_33272[(8)]);
var inst_33246__$1 = (state_33272[(2)]);
var inst_33247__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33246__$1,(0),null);
var inst_33249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33246__$1,(1),null);
var inst_33250 = (inst_33247__$1 == null);
var state_33272__$1 = (function (){var statearr_33275 = state_33272;
(statearr_33275[(9)] = inst_33249);

(statearr_33275[(7)] = inst_33246__$1);

(statearr_33275[(8)] = inst_33247__$1);

return statearr_33275;
})();
if(cljs.core.truth_(inst_33250)){
var statearr_33276_34940 = state_33272__$1;
(statearr_33276_34940[(1)] = (8));

} else {
var statearr_33277_34941 = state_33272__$1;
(statearr_33277_34941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (1))){
var inst_33236 = cljs.core.vec(chs);
var inst_33237 = inst_33236;
var state_33272__$1 = (function (){var statearr_33278 = state_33272;
(statearr_33278[(10)] = inst_33237);

return statearr_33278;
})();
var statearr_33280_34943 = state_33272__$1;
(statearr_33280_34943[(2)] = null);

(statearr_33280_34943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (4))){
var inst_33237 = (state_33272[(10)]);
var state_33272__$1 = state_33272;
return cljs.core.async.ioc_alts_BANG_(state_33272__$1,(7),inst_33237);
} else {
if((state_val_33273 === (6))){
var inst_33268 = (state_33272[(2)]);
var state_33272__$1 = state_33272;
var statearr_33282_34944 = state_33272__$1;
(statearr_33282_34944[(2)] = inst_33268);

(statearr_33282_34944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (3))){
var inst_33270 = (state_33272[(2)]);
var state_33272__$1 = state_33272;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33272__$1,inst_33270);
} else {
if((state_val_33273 === (2))){
var inst_33237 = (state_33272[(10)]);
var inst_33239 = cljs.core.count(inst_33237);
var inst_33240 = (inst_33239 > (0));
var state_33272__$1 = state_33272;
if(cljs.core.truth_(inst_33240)){
var statearr_33288_34946 = state_33272__$1;
(statearr_33288_34946[(1)] = (4));

} else {
var statearr_33289_34948 = state_33272__$1;
(statearr_33289_34948[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (11))){
var inst_33237 = (state_33272[(10)]);
var inst_33261 = (state_33272[(2)]);
var tmp33283 = inst_33237;
var inst_33237__$1 = tmp33283;
var state_33272__$1 = (function (){var statearr_33290 = state_33272;
(statearr_33290[(10)] = inst_33237__$1);

(statearr_33290[(11)] = inst_33261);

return statearr_33290;
})();
var statearr_33291_34949 = state_33272__$1;
(statearr_33291_34949[(2)] = null);

(statearr_33291_34949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (9))){
var inst_33247 = (state_33272[(8)]);
var state_33272__$1 = state_33272;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33272__$1,(11),out,inst_33247);
} else {
if((state_val_33273 === (5))){
var inst_33266 = cljs.core.async.close_BANG_(out);
var state_33272__$1 = state_33272;
var statearr_33295_34953 = state_33272__$1;
(statearr_33295_34953[(2)] = inst_33266);

(statearr_33295_34953[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (10))){
var inst_33264 = (state_33272[(2)]);
var state_33272__$1 = state_33272;
var statearr_33297_34954 = state_33272__$1;
(statearr_33297_34954[(2)] = inst_33264);

(statearr_33297_34954[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (8))){
var inst_33249 = (state_33272[(9)]);
var inst_33246 = (state_33272[(7)]);
var inst_33237 = (state_33272[(10)]);
var inst_33247 = (state_33272[(8)]);
var inst_33255 = (function (){var cs = inst_33237;
var vec__33242 = inst_33246;
var v = inst_33247;
var c = inst_33249;
return (function (p1__33224_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33224_SHARP_);
});
})();
var inst_33257 = cljs.core.filterv(inst_33255,inst_33237);
var inst_33237__$1 = inst_33257;
var state_33272__$1 = (function (){var statearr_33300 = state_33272;
(statearr_33300[(10)] = inst_33237__$1);

return statearr_33300;
})();
var statearr_33301_34955 = state_33272__$1;
(statearr_33301_34955[(2)] = null);

(statearr_33301_34955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29700__auto__ = null;
var cljs$core$async$state_machine__29700__auto____0 = (function (){
var statearr_33306 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33306[(0)] = cljs$core$async$state_machine__29700__auto__);

(statearr_33306[(1)] = (1));

return statearr_33306;
});
var cljs$core$async$state_machine__29700__auto____1 = (function (state_33272){
while(true){
var ret_value__29701__auto__ = (function (){try{while(true){
var result__29702__auto__ = switch__29699__auto__(state_33272);
if(cljs.core.keyword_identical_QMARK_(result__29702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29702__auto__;
}
break;
}
}catch (e33307){var ex__29703__auto__ = e33307;
var statearr_33308_34956 = state_33272;
(statearr_33308_34956[(2)] = ex__29703__auto__);


if(cljs.core.seq((state_33272[(4)]))){
var statearr_33309_34957 = state_33272;
(statearr_33309_34957[(1)] = cljs.core.first((state_33272[(4)])));

} else {
throw ex__29703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34958 = state_33272;
state_33272 = G__34958;
continue;
} else {
return ret_value__29701__auto__;
}
break;
}
});
cljs$core$async$state_machine__29700__auto__ = function(state_33272){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29700__auto____1.call(this,state_33272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29700__auto____0;
cljs$core$async$state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29700__auto____1;
return cljs$core$async$state_machine__29700__auto__;
})()
})();
var state__30346__auto__ = (function (){var statearr_33313 = f__30344__auto__();
(statearr_33313[(6)] = c__30343__auto___34939);

return statearr_33313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30346__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33328 = arguments.length;
switch (G__33328) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30343__auto___34963 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30344__auto__ = (function (){var switch__29699__auto__ = (function (state_33363){
var state_val_33364 = (state_33363[(1)]);
if((state_val_33364 === (7))){
var inst_33345 = (state_33363[(7)]);
var inst_33345__$1 = (state_33363[(2)]);
var inst_33346 = (inst_33345__$1 == null);
var inst_33347 = cljs.core.not(inst_33346);
var state_33363__$1 = (function (){var statearr_33369 = state_33363;
(statearr_33369[(7)] = inst_33345__$1);

return statearr_33369;
})();
if(inst_33347){
var statearr_33373_34964 = state_33363__$1;
(statearr_33373_34964[(1)] = (8));

} else {
var statearr_33374_34965 = state_33363__$1;
(statearr_33374_34965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (1))){
var inst_33340 = (0);
var state_33363__$1 = (function (){var statearr_33379 = state_33363;
(statearr_33379[(8)] = inst_33340);

return statearr_33379;
})();
var statearr_33380_34966 = state_33363__$1;
(statearr_33380_34966[(2)] = null);

(statearr_33380_34966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (4))){
var state_33363__$1 = state_33363;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33363__$1,(7),ch);
} else {
if((state_val_33364 === (6))){
var inst_33358 = (state_33363[(2)]);
var state_33363__$1 = state_33363;
var statearr_33381_34967 = state_33363__$1;
(statearr_33381_34967[(2)] = inst_33358);

(statearr_33381_34967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (3))){
var inst_33360 = (state_33363[(2)]);
var inst_33361 = cljs.core.async.close_BANG_(out);
var state_33363__$1 = (function (){var statearr_33383 = state_33363;
(statearr_33383[(9)] = inst_33360);

return statearr_33383;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33363__$1,inst_33361);
} else {
if((state_val_33364 === (2))){
var inst_33340 = (state_33363[(8)]);
var inst_33342 = (inst_33340 < n);
var state_33363__$1 = state_33363;
if(cljs.core.truth_(inst_33342)){
var statearr_33385_34968 = state_33363__$1;
(statearr_33385_34968[(1)] = (4));

} else {
var statearr_33387_34969 = state_33363__$1;
(statearr_33387_34969[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (11))){
var inst_33340 = (state_33363[(8)]);
var inst_33350 = (state_33363[(2)]);
var inst_33351 = (inst_33340 + (1));
var inst_33340__$1 = inst_33351;
var state_33363__$1 = (function (){var statearr_33390 = state_33363;
(statearr_33390[(10)] = inst_33350);

(statearr_33390[(8)] = inst_33340__$1);

return statearr_33390;
})();
var statearr_33391_34970 = state_33363__$1;
(statearr_33391_34970[(2)] = null);

(statearr_33391_34970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (9))){
var state_33363__$1 = state_33363;
var statearr_33392_34972 = state_33363__$1;
(statearr_33392_34972[(2)] = null);

(statearr_33392_34972[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (5))){
var state_33363__$1 = state_33363;
var statearr_33393_34973 = state_33363__$1;
(statearr_33393_34973[(2)] = null);

(statearr_33393_34973[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (10))){
var inst_33355 = (state_33363[(2)]);
var state_33363__$1 = state_33363;
var statearr_33395_34974 = state_33363__$1;
(statearr_33395_34974[(2)] = inst_33355);

(statearr_33395_34974[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (8))){
var inst_33345 = (state_33363[(7)]);
var state_33363__$1 = state_33363;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33363__$1,(11),out,inst_33345);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29700__auto__ = null;
var cljs$core$async$state_machine__29700__auto____0 = (function (){
var statearr_33400 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33400[(0)] = cljs$core$async$state_machine__29700__auto__);

(statearr_33400[(1)] = (1));

return statearr_33400;
});
var cljs$core$async$state_machine__29700__auto____1 = (function (state_33363){
while(true){
var ret_value__29701__auto__ = (function (){try{while(true){
var result__29702__auto__ = switch__29699__auto__(state_33363);
if(cljs.core.keyword_identical_QMARK_(result__29702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29702__auto__;
}
break;
}
}catch (e33401){var ex__29703__auto__ = e33401;
var statearr_33402_34975 = state_33363;
(statearr_33402_34975[(2)] = ex__29703__auto__);


if(cljs.core.seq((state_33363[(4)]))){
var statearr_33403_34976 = state_33363;
(statearr_33403_34976[(1)] = cljs.core.first((state_33363[(4)])));

} else {
throw ex__29703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34977 = state_33363;
state_33363 = G__34977;
continue;
} else {
return ret_value__29701__auto__;
}
break;
}
});
cljs$core$async$state_machine__29700__auto__ = function(state_33363){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29700__auto____1.call(this,state_33363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29700__auto____0;
cljs$core$async$state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29700__auto____1;
return cljs$core$async$state_machine__29700__auto__;
})()
})();
var state__30346__auto__ = (function (){var statearr_33404 = f__30344__auto__();
(statearr_33404[(6)] = c__30343__auto___34963);

return statearr_33404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30346__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33409 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33409 = (function (f,ch,meta33410){
this.f = f;
this.ch = ch;
this.meta33410 = meta33410;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33411,meta33410__$1){
var self__ = this;
var _33411__$1 = this;
return (new cljs.core.async.t_cljs$core$async33409(self__.f,self__.ch,meta33410__$1));
}));

(cljs.core.async.t_cljs$core$async33409.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33411){
var self__ = this;
var _33411__$1 = this;
return self__.meta33410;
}));

(cljs.core.async.t_cljs$core$async33409.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33409.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33409.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33409.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33409.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33433 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33433 = (function (f,ch,meta33410,_,fn1,meta33434){
this.f = f;
this.ch = ch;
this.meta33410 = meta33410;
this._ = _;
this.fn1 = fn1;
this.meta33434 = meta33434;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33435,meta33434__$1){
var self__ = this;
var _33435__$1 = this;
return (new cljs.core.async.t_cljs$core$async33433(self__.f,self__.ch,self__.meta33410,self__._,self__.fn1,meta33434__$1));
}));

(cljs.core.async.t_cljs$core$async33433.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33435){
var self__ = this;
var _33435__$1 = this;
return self__.meta33434;
}));

(cljs.core.async.t_cljs$core$async33433.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33433.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33433.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33433.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33405_SHARP_){
var G__33454 = (((p1__33405_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33405_SHARP_) : self__.f.call(null,p1__33405_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33454) : f1.call(null,G__33454));
});
}));

(cljs.core.async.t_cljs$core$async33433.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33410","meta33410",1165446324,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33409","cljs.core.async/t_cljs$core$async33409",1811536131,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33434","meta33434",27103748,null)], null);
}));

(cljs.core.async.t_cljs$core$async33433.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33433.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33433");

(cljs.core.async.t_cljs$core$async33433.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33433");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33433.
 */
cljs.core.async.__GT_t_cljs$core$async33433 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33433(f__$1,ch__$1,meta33410__$1,___$2,fn1__$1,meta33434){
return (new cljs.core.async.t_cljs$core$async33433(f__$1,ch__$1,meta33410__$1,___$2,fn1__$1,meta33434));
});

}

return (new cljs.core.async.t_cljs$core$async33433(self__.f,self__.ch,self__.meta33410,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33459 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33459) : self__.f.call(null,G__33459));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33409.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33409.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33409.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33410","meta33410",1165446324,null)], null);
}));

(cljs.core.async.t_cljs$core$async33409.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33409.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33409");

(cljs.core.async.t_cljs$core$async33409.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33409");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33409.
 */
cljs.core.async.__GT_t_cljs$core$async33409 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33409(f__$1,ch__$1,meta33410){
return (new cljs.core.async.t_cljs$core$async33409(f__$1,ch__$1,meta33410));
});

}

return (new cljs.core.async.t_cljs$core$async33409(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33465 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33465 = (function (f,ch,meta33466){
this.f = f;
this.ch = ch;
this.meta33466 = meta33466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33467,meta33466__$1){
var self__ = this;
var _33467__$1 = this;
return (new cljs.core.async.t_cljs$core$async33465(self__.f,self__.ch,meta33466__$1));
}));

(cljs.core.async.t_cljs$core$async33465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33467){
var self__ = this;
var _33467__$1 = this;
return self__.meta33466;
}));

(cljs.core.async.t_cljs$core$async33465.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33465.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33465.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33465.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33465.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33465.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33465.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33466","meta33466",1813354691,null)], null);
}));

(cljs.core.async.t_cljs$core$async33465.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33465.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33465");

(cljs.core.async.t_cljs$core$async33465.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33465");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33465.
 */
cljs.core.async.__GT_t_cljs$core$async33465 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33465(f__$1,ch__$1,meta33466){
return (new cljs.core.async.t_cljs$core$async33465(f__$1,ch__$1,meta33466));
});

}

return (new cljs.core.async.t_cljs$core$async33465(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33484 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33484 = (function (p,ch,meta33485){
this.p = p;
this.ch = ch;
this.meta33485 = meta33485;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33486,meta33485__$1){
var self__ = this;
var _33486__$1 = this;
return (new cljs.core.async.t_cljs$core$async33484(self__.p,self__.ch,meta33485__$1));
}));

(cljs.core.async.t_cljs$core$async33484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33486){
var self__ = this;
var _33486__$1 = this;
return self__.meta33485;
}));

(cljs.core.async.t_cljs$core$async33484.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33484.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33484.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33484.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33484.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33484.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33484.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33484.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33485","meta33485",-1731575258,null)], null);
}));

(cljs.core.async.t_cljs$core$async33484.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33484.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33484");

(cljs.core.async.t_cljs$core$async33484.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33484");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33484.
 */
cljs.core.async.__GT_t_cljs$core$async33484 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33484(p__$1,ch__$1,meta33485){
return (new cljs.core.async.t_cljs$core$async33484(p__$1,ch__$1,meta33485));
});

}

return (new cljs.core.async.t_cljs$core$async33484(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33517 = arguments.length;
switch (G__33517) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30343__auto___35005 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30344__auto__ = (function (){var switch__29699__auto__ = (function (state_33541){
var state_val_33545 = (state_33541[(1)]);
if((state_val_33545 === (7))){
var inst_33537 = (state_33541[(2)]);
var state_33541__$1 = state_33541;
var statearr_33550_35009 = state_33541__$1;
(statearr_33550_35009[(2)] = inst_33537);

(statearr_33550_35009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33545 === (1))){
var state_33541__$1 = state_33541;
var statearr_33552_35010 = state_33541__$1;
(statearr_33552_35010[(2)] = null);

(statearr_33552_35010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33545 === (4))){
var inst_33520 = (state_33541[(7)]);
var inst_33520__$1 = (state_33541[(2)]);
var inst_33521 = (inst_33520__$1 == null);
var state_33541__$1 = (function (){var statearr_33553 = state_33541;
(statearr_33553[(7)] = inst_33520__$1);

return statearr_33553;
})();
if(cljs.core.truth_(inst_33521)){
var statearr_33554_35011 = state_33541__$1;
(statearr_33554_35011[(1)] = (5));

} else {
var statearr_33555_35012 = state_33541__$1;
(statearr_33555_35012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33545 === (6))){
var inst_33520 = (state_33541[(7)]);
var inst_33525 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33520) : p.call(null,inst_33520));
var state_33541__$1 = state_33541;
if(cljs.core.truth_(inst_33525)){
var statearr_33556_35017 = state_33541__$1;
(statearr_33556_35017[(1)] = (8));

} else {
var statearr_33557_35018 = state_33541__$1;
(statearr_33557_35018[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33545 === (3))){
var inst_33539 = (state_33541[(2)]);
var state_33541__$1 = state_33541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33541__$1,inst_33539);
} else {
if((state_val_33545 === (2))){
var state_33541__$1 = state_33541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33541__$1,(4),ch);
} else {
if((state_val_33545 === (11))){
var inst_33531 = (state_33541[(2)]);
var state_33541__$1 = state_33541;
var statearr_33561_35019 = state_33541__$1;
(statearr_33561_35019[(2)] = inst_33531);

(statearr_33561_35019[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33545 === (9))){
var state_33541__$1 = state_33541;
var statearr_33563_35020 = state_33541__$1;
(statearr_33563_35020[(2)] = null);

(statearr_33563_35020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33545 === (5))){
var inst_33523 = cljs.core.async.close_BANG_(out);
var state_33541__$1 = state_33541;
var statearr_33565_35022 = state_33541__$1;
(statearr_33565_35022[(2)] = inst_33523);

(statearr_33565_35022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33545 === (10))){
var inst_33534 = (state_33541[(2)]);
var state_33541__$1 = (function (){var statearr_33566 = state_33541;
(statearr_33566[(8)] = inst_33534);

return statearr_33566;
})();
var statearr_33567_35023 = state_33541__$1;
(statearr_33567_35023[(2)] = null);

(statearr_33567_35023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33545 === (8))){
var inst_33520 = (state_33541[(7)]);
var state_33541__$1 = state_33541;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33541__$1,(11),out,inst_33520);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29700__auto__ = null;
var cljs$core$async$state_machine__29700__auto____0 = (function (){
var statearr_33568 = [null,null,null,null,null,null,null,null,null];
(statearr_33568[(0)] = cljs$core$async$state_machine__29700__auto__);

(statearr_33568[(1)] = (1));

return statearr_33568;
});
var cljs$core$async$state_machine__29700__auto____1 = (function (state_33541){
while(true){
var ret_value__29701__auto__ = (function (){try{while(true){
var result__29702__auto__ = switch__29699__auto__(state_33541);
if(cljs.core.keyword_identical_QMARK_(result__29702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29702__auto__;
}
break;
}
}catch (e33569){var ex__29703__auto__ = e33569;
var statearr_33570_35025 = state_33541;
(statearr_33570_35025[(2)] = ex__29703__auto__);


if(cljs.core.seq((state_33541[(4)]))){
var statearr_33571_35026 = state_33541;
(statearr_33571_35026[(1)] = cljs.core.first((state_33541[(4)])));

} else {
throw ex__29703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35027 = state_33541;
state_33541 = G__35027;
continue;
} else {
return ret_value__29701__auto__;
}
break;
}
});
cljs$core$async$state_machine__29700__auto__ = function(state_33541){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29700__auto____1.call(this,state_33541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29700__auto____0;
cljs$core$async$state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29700__auto____1;
return cljs$core$async$state_machine__29700__auto__;
})()
})();
var state__30346__auto__ = (function (){var statearr_33576 = f__30344__auto__();
(statearr_33576[(6)] = c__30343__auto___35005);

return statearr_33576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30346__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33586 = arguments.length;
switch (G__33586) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30343__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30344__auto__ = (function (){var switch__29699__auto__ = (function (state_33674){
var state_val_33675 = (state_33674[(1)]);
if((state_val_33675 === (7))){
var inst_33670 = (state_33674[(2)]);
var state_33674__$1 = state_33674;
var statearr_33679_35031 = state_33674__$1;
(statearr_33679_35031[(2)] = inst_33670);

(statearr_33679_35031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33675 === (20))){
var inst_33633 = (state_33674[(7)]);
var inst_33651 = (state_33674[(2)]);
var inst_33652 = cljs.core.next(inst_33633);
var inst_33617 = inst_33652;
var inst_33618 = null;
var inst_33619 = (0);
var inst_33620 = (0);
var state_33674__$1 = (function (){var statearr_33680 = state_33674;
(statearr_33680[(8)] = inst_33619);

(statearr_33680[(9)] = inst_33618);

(statearr_33680[(10)] = inst_33620);

(statearr_33680[(11)] = inst_33617);

(statearr_33680[(12)] = inst_33651);

return statearr_33680;
})();
var statearr_33681_35032 = state_33674__$1;
(statearr_33681_35032[(2)] = null);

(statearr_33681_35032[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33675 === (1))){
var state_33674__$1 = state_33674;
var statearr_33682_35033 = state_33674__$1;
(statearr_33682_35033[(2)] = null);

(statearr_33682_35033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33675 === (4))){
var inst_33602 = (state_33674[(13)]);
var inst_33602__$1 = (state_33674[(2)]);
var inst_33603 = (inst_33602__$1 == null);
var state_33674__$1 = (function (){var statearr_33683 = state_33674;
(statearr_33683[(13)] = inst_33602__$1);

return statearr_33683;
})();
if(cljs.core.truth_(inst_33603)){
var statearr_33688_35034 = state_33674__$1;
(statearr_33688_35034[(1)] = (5));

} else {
var statearr_33689_35035 = state_33674__$1;
(statearr_33689_35035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33675 === (15))){
var state_33674__$1 = state_33674;
var statearr_33697_35036 = state_33674__$1;
(statearr_33697_35036[(2)] = null);

(statearr_33697_35036[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33675 === (21))){
var state_33674__$1 = state_33674;
var statearr_33698_35037 = state_33674__$1;
(statearr_33698_35037[(2)] = null);

(statearr_33698_35037[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33675 === (13))){
var inst_33619 = (state_33674[(8)]);
var inst_33618 = (state_33674[(9)]);
var inst_33620 = (state_33674[(10)]);
var inst_33617 = (state_33674[(11)]);
var inst_33627 = (state_33674[(2)]);
var inst_33630 = (inst_33620 + (1));
var tmp33691 = inst_33619;
var tmp33692 = inst_33618;
var tmp33693 = inst_33617;
var inst_33617__$1 = tmp33693;
var inst_33618__$1 = tmp33692;
var inst_33619__$1 = tmp33691;
var inst_33620__$1 = inst_33630;
var state_33674__$1 = (function (){var statearr_33710 = state_33674;
(statearr_33710[(8)] = inst_33619__$1);

(statearr_33710[(14)] = inst_33627);

(statearr_33710[(9)] = inst_33618__$1);

(statearr_33710[(10)] = inst_33620__$1);

(statearr_33710[(11)] = inst_33617__$1);

return statearr_33710;
})();
var statearr_33715_35038 = state_33674__$1;
(statearr_33715_35038[(2)] = null);

(statearr_33715_35038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33675 === (22))){
var state_33674__$1 = state_33674;
var statearr_33716_35039 = state_33674__$1;
(statearr_33716_35039[(2)] = null);

(statearr_33716_35039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33675 === (6))){
var inst_33602 = (state_33674[(13)]);
var inst_33615 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33602) : f.call(null,inst_33602));
var inst_33616 = cljs.core.seq(inst_33615);
var inst_33617 = inst_33616;
var inst_33618 = null;
var inst_33619 = (0);
var inst_33620 = (0);
var state_33674__$1 = (function (){var statearr_33720 = state_33674;
(statearr_33720[(8)] = inst_33619);

(statearr_33720[(9)] = inst_33618);

(statearr_33720[(10)] = inst_33620);

(statearr_33720[(11)] = inst_33617);

return statearr_33720;
})();
var statearr_33721_35040 = state_33674__$1;
(statearr_33721_35040[(2)] = null);

(statearr_33721_35040[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33675 === (17))){
var inst_33633 = (state_33674[(7)]);
var inst_33639 = cljs.core.chunk_first(inst_33633);
var inst_33641 = cljs.core.chunk_rest(inst_33633);
var inst_33646 = cljs.core.count(inst_33639);
var inst_33617 = inst_33641;
var inst_33618 = inst_33639;
var inst_33619 = inst_33646;
var inst_33620 = (0);
var state_33674__$1 = (function (){var statearr_33725 = state_33674;
(statearr_33725[(8)] = inst_33619);

(statearr_33725[(9)] = inst_33618);

(statearr_33725[(10)] = inst_33620);

(statearr_33725[(11)] = inst_33617);

return statearr_33725;
})();
var statearr_33728_35041 = state_33674__$1;
(statearr_33728_35041[(2)] = null);

(statearr_33728_35041[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33675 === (3))){
var inst_33672 = (state_33674[(2)]);
var state_33674__$1 = state_33674;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33674__$1,inst_33672);
} else {
if((state_val_33675 === (12))){
var inst_33660 = (state_33674[(2)]);
var state_33674__$1 = state_33674;
var statearr_33733_35042 = state_33674__$1;
(statearr_33733_35042[(2)] = inst_33660);

(statearr_33733_35042[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33675 === (2))){
var state_33674__$1 = state_33674;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33674__$1,(4),in$);
} else {
if((state_val_33675 === (23))){
var inst_33668 = (state_33674[(2)]);
var state_33674__$1 = state_33674;
var statearr_33739_35043 = state_33674__$1;
(statearr_33739_35043[(2)] = inst_33668);

(statearr_33739_35043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33675 === (19))){
var inst_33655 = (state_33674[(2)]);
var state_33674__$1 = state_33674;
var statearr_33740_35044 = state_33674__$1;
(statearr_33740_35044[(2)] = inst_33655);

(statearr_33740_35044[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33675 === (11))){
var inst_33633 = (state_33674[(7)]);
var inst_33617 = (state_33674[(11)]);
var inst_33633__$1 = cljs.core.seq(inst_33617);
var state_33674__$1 = (function (){var statearr_33741 = state_33674;
(statearr_33741[(7)] = inst_33633__$1);

return statearr_33741;
})();
if(inst_33633__$1){
var statearr_33742_35045 = state_33674__$1;
(statearr_33742_35045[(1)] = (14));

} else {
var statearr_33743_35046 = state_33674__$1;
(statearr_33743_35046[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33675 === (9))){
var inst_33662 = (state_33674[(2)]);
var inst_33663 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33674__$1 = (function (){var statearr_33748 = state_33674;
(statearr_33748[(15)] = inst_33662);

return statearr_33748;
})();
if(cljs.core.truth_(inst_33663)){
var statearr_33750_35047 = state_33674__$1;
(statearr_33750_35047[(1)] = (21));

} else {
var statearr_33753_35048 = state_33674__$1;
(statearr_33753_35048[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33675 === (5))){
var inst_33606 = cljs.core.async.close_BANG_(out);
var state_33674__$1 = state_33674;
var statearr_33755_35049 = state_33674__$1;
(statearr_33755_35049[(2)] = inst_33606);

(statearr_33755_35049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33675 === (14))){
var inst_33633 = (state_33674[(7)]);
var inst_33636 = cljs.core.chunked_seq_QMARK_(inst_33633);
var state_33674__$1 = state_33674;
if(inst_33636){
var statearr_33758_35050 = state_33674__$1;
(statearr_33758_35050[(1)] = (17));

} else {
var statearr_33760_35051 = state_33674__$1;
(statearr_33760_35051[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33675 === (16))){
var inst_33658 = (state_33674[(2)]);
var state_33674__$1 = state_33674;
var statearr_33766_35052 = state_33674__$1;
(statearr_33766_35052[(2)] = inst_33658);

(statearr_33766_35052[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33675 === (10))){
var inst_33618 = (state_33674[(9)]);
var inst_33620 = (state_33674[(10)]);
var inst_33625 = cljs.core._nth(inst_33618,inst_33620);
var state_33674__$1 = state_33674;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33674__$1,(13),out,inst_33625);
} else {
if((state_val_33675 === (18))){
var inst_33633 = (state_33674[(7)]);
var inst_33649 = cljs.core.first(inst_33633);
var state_33674__$1 = state_33674;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33674__$1,(20),out,inst_33649);
} else {
if((state_val_33675 === (8))){
var inst_33619 = (state_33674[(8)]);
var inst_33620 = (state_33674[(10)]);
var inst_33622 = (inst_33620 < inst_33619);
var inst_33623 = inst_33622;
var state_33674__$1 = state_33674;
if(cljs.core.truth_(inst_33623)){
var statearr_33778_35061 = state_33674__$1;
(statearr_33778_35061[(1)] = (10));

} else {
var statearr_33781_35062 = state_33674__$1;
(statearr_33781_35062[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29700__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29700__auto____0 = (function (){
var statearr_33789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33789[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29700__auto__);

(statearr_33789[(1)] = (1));

return statearr_33789;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29700__auto____1 = (function (state_33674){
while(true){
var ret_value__29701__auto__ = (function (){try{while(true){
var result__29702__auto__ = switch__29699__auto__(state_33674);
if(cljs.core.keyword_identical_QMARK_(result__29702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29702__auto__;
}
break;
}
}catch (e33791){var ex__29703__auto__ = e33791;
var statearr_33794_35063 = state_33674;
(statearr_33794_35063[(2)] = ex__29703__auto__);


if(cljs.core.seq((state_33674[(4)]))){
var statearr_33795_35064 = state_33674;
(statearr_33795_35064[(1)] = cljs.core.first((state_33674[(4)])));

} else {
throw ex__29703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35065 = state_33674;
state_33674 = G__35065;
continue;
} else {
return ret_value__29701__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29700__auto__ = function(state_33674){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29700__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29700__auto____1.call(this,state_33674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29700__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29700__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29700__auto__;
})()
})();
var state__30346__auto__ = (function (){var statearr_33796 = f__30344__auto__();
(statearr_33796[(6)] = c__30343__auto__);

return statearr_33796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30346__auto__);
}));

return c__30343__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33813 = arguments.length;
switch (G__33813) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33832 = arguments.length;
switch (G__33832) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33853 = arguments.length;
switch (G__33853) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30343__auto___35076 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30344__auto__ = (function (){var switch__29699__auto__ = (function (state_33897){
var state_val_33898 = (state_33897[(1)]);
if((state_val_33898 === (7))){
var inst_33889 = (state_33897[(2)]);
var state_33897__$1 = state_33897;
var statearr_33905_35077 = state_33897__$1;
(statearr_33905_35077[(2)] = inst_33889);

(statearr_33905_35077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33898 === (1))){
var inst_33864 = null;
var state_33897__$1 = (function (){var statearr_33907 = state_33897;
(statearr_33907[(7)] = inst_33864);

return statearr_33907;
})();
var statearr_33912_35078 = state_33897__$1;
(statearr_33912_35078[(2)] = null);

(statearr_33912_35078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33898 === (4))){
var inst_33872 = (state_33897[(8)]);
var inst_33872__$1 = (state_33897[(2)]);
var inst_33873 = (inst_33872__$1 == null);
var inst_33874 = cljs.core.not(inst_33873);
var state_33897__$1 = (function (){var statearr_33925 = state_33897;
(statearr_33925[(8)] = inst_33872__$1);

return statearr_33925;
})();
if(inst_33874){
var statearr_33928_35080 = state_33897__$1;
(statearr_33928_35080[(1)] = (5));

} else {
var statearr_33930_35081 = state_33897__$1;
(statearr_33930_35081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33898 === (6))){
var state_33897__$1 = state_33897;
var statearr_33935_35082 = state_33897__$1;
(statearr_33935_35082[(2)] = null);

(statearr_33935_35082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33898 === (3))){
var inst_33892 = (state_33897[(2)]);
var inst_33893 = cljs.core.async.close_BANG_(out);
var state_33897__$1 = (function (){var statearr_33947 = state_33897;
(statearr_33947[(9)] = inst_33892);

return statearr_33947;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33897__$1,inst_33893);
} else {
if((state_val_33898 === (2))){
var state_33897__$1 = state_33897;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33897__$1,(4),ch);
} else {
if((state_val_33898 === (11))){
var inst_33872 = (state_33897[(8)]);
var inst_33882 = (state_33897[(2)]);
var inst_33864 = inst_33872;
var state_33897__$1 = (function (){var statearr_33950 = state_33897;
(statearr_33950[(10)] = inst_33882);

(statearr_33950[(7)] = inst_33864);

return statearr_33950;
})();
var statearr_33951_35083 = state_33897__$1;
(statearr_33951_35083[(2)] = null);

(statearr_33951_35083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33898 === (9))){
var inst_33872 = (state_33897[(8)]);
var state_33897__$1 = state_33897;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33897__$1,(11),out,inst_33872);
} else {
if((state_val_33898 === (5))){
var inst_33872 = (state_33897[(8)]);
var inst_33864 = (state_33897[(7)]);
var inst_33876 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33872,inst_33864);
var state_33897__$1 = state_33897;
if(inst_33876){
var statearr_33954_35084 = state_33897__$1;
(statearr_33954_35084[(1)] = (8));

} else {
var statearr_33955_35085 = state_33897__$1;
(statearr_33955_35085[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33898 === (10))){
var inst_33886 = (state_33897[(2)]);
var state_33897__$1 = state_33897;
var statearr_33964_35086 = state_33897__$1;
(statearr_33964_35086[(2)] = inst_33886);

(statearr_33964_35086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33898 === (8))){
var inst_33864 = (state_33897[(7)]);
var tmp33953 = inst_33864;
var inst_33864__$1 = tmp33953;
var state_33897__$1 = (function (){var statearr_33971 = state_33897;
(statearr_33971[(7)] = inst_33864__$1);

return statearr_33971;
})();
var statearr_33972_35088 = state_33897__$1;
(statearr_33972_35088[(2)] = null);

(statearr_33972_35088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29700__auto__ = null;
var cljs$core$async$state_machine__29700__auto____0 = (function (){
var statearr_33975 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33975[(0)] = cljs$core$async$state_machine__29700__auto__);

(statearr_33975[(1)] = (1));

return statearr_33975;
});
var cljs$core$async$state_machine__29700__auto____1 = (function (state_33897){
while(true){
var ret_value__29701__auto__ = (function (){try{while(true){
var result__29702__auto__ = switch__29699__auto__(state_33897);
if(cljs.core.keyword_identical_QMARK_(result__29702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29702__auto__;
}
break;
}
}catch (e33982){var ex__29703__auto__ = e33982;
var statearr_33983_35089 = state_33897;
(statearr_33983_35089[(2)] = ex__29703__auto__);


if(cljs.core.seq((state_33897[(4)]))){
var statearr_33984_35090 = state_33897;
(statearr_33984_35090[(1)] = cljs.core.first((state_33897[(4)])));

} else {
throw ex__29703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35092 = state_33897;
state_33897 = G__35092;
continue;
} else {
return ret_value__29701__auto__;
}
break;
}
});
cljs$core$async$state_machine__29700__auto__ = function(state_33897){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29700__auto____1.call(this,state_33897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29700__auto____0;
cljs$core$async$state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29700__auto____1;
return cljs$core$async$state_machine__29700__auto__;
})()
})();
var state__30346__auto__ = (function (){var statearr_33987 = f__30344__auto__();
(statearr_33987[(6)] = c__30343__auto___35076);

return statearr_33987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30346__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33994 = arguments.length;
switch (G__33994) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30343__auto___35098 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30344__auto__ = (function (){var switch__29699__auto__ = (function (state_34093){
var state_val_34094 = (state_34093[(1)]);
if((state_val_34094 === (7))){
var inst_34082 = (state_34093[(2)]);
var state_34093__$1 = state_34093;
var statearr_34100_35099 = state_34093__$1;
(statearr_34100_35099[(2)] = inst_34082);

(statearr_34100_35099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34094 === (1))){
var inst_34018 = (new Array(n));
var inst_34019 = inst_34018;
var inst_34020 = (0);
var state_34093__$1 = (function (){var statearr_34104 = state_34093;
(statearr_34104[(7)] = inst_34020);

(statearr_34104[(8)] = inst_34019);

return statearr_34104;
})();
var statearr_34106_35100 = state_34093__$1;
(statearr_34106_35100[(2)] = null);

(statearr_34106_35100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34094 === (4))){
var inst_34028 = (state_34093[(9)]);
var inst_34028__$1 = (state_34093[(2)]);
var inst_34031 = (inst_34028__$1 == null);
var inst_34032 = cljs.core.not(inst_34031);
var state_34093__$1 = (function (){var statearr_34107 = state_34093;
(statearr_34107[(9)] = inst_34028__$1);

return statearr_34107;
})();
if(inst_34032){
var statearr_34108_35101 = state_34093__$1;
(statearr_34108_35101[(1)] = (5));

} else {
var statearr_34109_35102 = state_34093__$1;
(statearr_34109_35102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34094 === (15))){
var inst_34075 = (state_34093[(2)]);
var state_34093__$1 = state_34093;
var statearr_34110_35103 = state_34093__$1;
(statearr_34110_35103[(2)] = inst_34075);

(statearr_34110_35103[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34094 === (13))){
var state_34093__$1 = state_34093;
var statearr_34111_35104 = state_34093__$1;
(statearr_34111_35104[(2)] = null);

(statearr_34111_35104[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34094 === (6))){
var inst_34020 = (state_34093[(7)]);
var inst_34066 = (inst_34020 > (0));
var state_34093__$1 = state_34093;
if(cljs.core.truth_(inst_34066)){
var statearr_34113_35105 = state_34093__$1;
(statearr_34113_35105[(1)] = (12));

} else {
var statearr_34114_35106 = state_34093__$1;
(statearr_34114_35106[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34094 === (3))){
var inst_34084 = (state_34093[(2)]);
var state_34093__$1 = state_34093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34093__$1,inst_34084);
} else {
if((state_val_34094 === (12))){
var inst_34019 = (state_34093[(8)]);
var inst_34073 = cljs.core.vec(inst_34019);
var state_34093__$1 = state_34093;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34093__$1,(15),out,inst_34073);
} else {
if((state_val_34094 === (2))){
var state_34093__$1 = state_34093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34093__$1,(4),ch);
} else {
if((state_val_34094 === (11))){
var inst_34056 = (state_34093[(2)]);
var inst_34061 = (new Array(n));
var inst_34019 = inst_34061;
var inst_34020 = (0);
var state_34093__$1 = (function (){var statearr_34123 = state_34093;
(statearr_34123[(7)] = inst_34020);

(statearr_34123[(10)] = inst_34056);

(statearr_34123[(8)] = inst_34019);

return statearr_34123;
})();
var statearr_34124_35107 = state_34093__$1;
(statearr_34124_35107[(2)] = null);

(statearr_34124_35107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34094 === (9))){
var inst_34019 = (state_34093[(8)]);
var inst_34054 = cljs.core.vec(inst_34019);
var state_34093__$1 = state_34093;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34093__$1,(11),out,inst_34054);
} else {
if((state_val_34094 === (5))){
var inst_34020 = (state_34093[(7)]);
var inst_34028 = (state_34093[(9)]);
var inst_34045 = (state_34093[(11)]);
var inst_34019 = (state_34093[(8)]);
var inst_34041 = (inst_34019[inst_34020] = inst_34028);
var inst_34045__$1 = (inst_34020 + (1));
var inst_34046 = (inst_34045__$1 < n);
var state_34093__$1 = (function (){var statearr_34125 = state_34093;
(statearr_34125[(11)] = inst_34045__$1);

(statearr_34125[(12)] = inst_34041);

return statearr_34125;
})();
if(cljs.core.truth_(inst_34046)){
var statearr_34126_35108 = state_34093__$1;
(statearr_34126_35108[(1)] = (8));

} else {
var statearr_34127_35109 = state_34093__$1;
(statearr_34127_35109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34094 === (14))){
var inst_34078 = (state_34093[(2)]);
var inst_34080 = cljs.core.async.close_BANG_(out);
var state_34093__$1 = (function (){var statearr_34131 = state_34093;
(statearr_34131[(13)] = inst_34078);

return statearr_34131;
})();
var statearr_34133_35113 = state_34093__$1;
(statearr_34133_35113[(2)] = inst_34080);

(statearr_34133_35113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34094 === (10))){
var inst_34064 = (state_34093[(2)]);
var state_34093__$1 = state_34093;
var statearr_34134_35114 = state_34093__$1;
(statearr_34134_35114[(2)] = inst_34064);

(statearr_34134_35114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34094 === (8))){
var inst_34045 = (state_34093[(11)]);
var inst_34019 = (state_34093[(8)]);
var tmp34128 = inst_34019;
var inst_34019__$1 = tmp34128;
var inst_34020 = inst_34045;
var state_34093__$1 = (function (){var statearr_34136 = state_34093;
(statearr_34136[(7)] = inst_34020);

(statearr_34136[(8)] = inst_34019__$1);

return statearr_34136;
})();
var statearr_34137_35115 = state_34093__$1;
(statearr_34137_35115[(2)] = null);

(statearr_34137_35115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29700__auto__ = null;
var cljs$core$async$state_machine__29700__auto____0 = (function (){
var statearr_34138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34138[(0)] = cljs$core$async$state_machine__29700__auto__);

(statearr_34138[(1)] = (1));

return statearr_34138;
});
var cljs$core$async$state_machine__29700__auto____1 = (function (state_34093){
while(true){
var ret_value__29701__auto__ = (function (){try{while(true){
var result__29702__auto__ = switch__29699__auto__(state_34093);
if(cljs.core.keyword_identical_QMARK_(result__29702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29702__auto__;
}
break;
}
}catch (e34139){var ex__29703__auto__ = e34139;
var statearr_34140_35116 = state_34093;
(statearr_34140_35116[(2)] = ex__29703__auto__);


if(cljs.core.seq((state_34093[(4)]))){
var statearr_34143_35117 = state_34093;
(statearr_34143_35117[(1)] = cljs.core.first((state_34093[(4)])));

} else {
throw ex__29703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35118 = state_34093;
state_34093 = G__35118;
continue;
} else {
return ret_value__29701__auto__;
}
break;
}
});
cljs$core$async$state_machine__29700__auto__ = function(state_34093){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29700__auto____1.call(this,state_34093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29700__auto____0;
cljs$core$async$state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29700__auto____1;
return cljs$core$async$state_machine__29700__auto__;
})()
})();
var state__30346__auto__ = (function (){var statearr_34145 = f__30344__auto__();
(statearr_34145[(6)] = c__30343__auto___35098);

return statearr_34145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30346__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34149 = arguments.length;
switch (G__34149) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30343__auto___35120 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30344__auto__ = (function (){var switch__29699__auto__ = (function (state_34207){
var state_val_34208 = (state_34207[(1)]);
if((state_val_34208 === (7))){
var inst_34202 = (state_34207[(2)]);
var state_34207__$1 = state_34207;
var statearr_34209_35121 = state_34207__$1;
(statearr_34209_35121[(2)] = inst_34202);

(statearr_34209_35121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34208 === (1))){
var inst_34151 = [];
var inst_34152 = inst_34151;
var inst_34153 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34207__$1 = (function (){var statearr_34210 = state_34207;
(statearr_34210[(7)] = inst_34152);

(statearr_34210[(8)] = inst_34153);

return statearr_34210;
})();
var statearr_34211_35122 = state_34207__$1;
(statearr_34211_35122[(2)] = null);

(statearr_34211_35122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34208 === (4))){
var inst_34156 = (state_34207[(9)]);
var inst_34156__$1 = (state_34207[(2)]);
var inst_34158 = (inst_34156__$1 == null);
var inst_34160 = cljs.core.not(inst_34158);
var state_34207__$1 = (function (){var statearr_34212 = state_34207;
(statearr_34212[(9)] = inst_34156__$1);

return statearr_34212;
})();
if(inst_34160){
var statearr_34213_35123 = state_34207__$1;
(statearr_34213_35123[(1)] = (5));

} else {
var statearr_34214_35124 = state_34207__$1;
(statearr_34214_35124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34208 === (15))){
var inst_34152 = (state_34207[(7)]);
var inst_34194 = cljs.core.vec(inst_34152);
var state_34207__$1 = state_34207;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34207__$1,(18),out,inst_34194);
} else {
if((state_val_34208 === (13))){
var inst_34186 = (state_34207[(2)]);
var state_34207__$1 = state_34207;
var statearr_34217_35126 = state_34207__$1;
(statearr_34217_35126[(2)] = inst_34186);

(statearr_34217_35126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34208 === (6))){
var inst_34152 = (state_34207[(7)]);
var inst_34191 = inst_34152.length;
var inst_34192 = (inst_34191 > (0));
var state_34207__$1 = state_34207;
if(cljs.core.truth_(inst_34192)){
var statearr_34218_35127 = state_34207__$1;
(statearr_34218_35127[(1)] = (15));

} else {
var statearr_34219_35128 = state_34207__$1;
(statearr_34219_35128[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34208 === (17))){
var inst_34199 = (state_34207[(2)]);
var inst_34200 = cljs.core.async.close_BANG_(out);
var state_34207__$1 = (function (){var statearr_34220 = state_34207;
(statearr_34220[(10)] = inst_34199);

return statearr_34220;
})();
var statearr_34221_35132 = state_34207__$1;
(statearr_34221_35132[(2)] = inst_34200);

(statearr_34221_35132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34208 === (3))){
var inst_34204 = (state_34207[(2)]);
var state_34207__$1 = state_34207;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34207__$1,inst_34204);
} else {
if((state_val_34208 === (12))){
var inst_34152 = (state_34207[(7)]);
var inst_34179 = cljs.core.vec(inst_34152);
var state_34207__$1 = state_34207;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34207__$1,(14),out,inst_34179);
} else {
if((state_val_34208 === (2))){
var state_34207__$1 = state_34207;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34207__$1,(4),ch);
} else {
if((state_val_34208 === (11))){
var inst_34152 = (state_34207[(7)]);
var inst_34156 = (state_34207[(9)]);
var inst_34163 = (state_34207[(11)]);
var inst_34176 = inst_34152.push(inst_34156);
var tmp34222 = inst_34152;
var inst_34152__$1 = tmp34222;
var inst_34153 = inst_34163;
var state_34207__$1 = (function (){var statearr_34224 = state_34207;
(statearr_34224[(7)] = inst_34152__$1);

(statearr_34224[(12)] = inst_34176);

(statearr_34224[(8)] = inst_34153);

return statearr_34224;
})();
var statearr_34225_35133 = state_34207__$1;
(statearr_34225_35133[(2)] = null);

(statearr_34225_35133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34208 === (9))){
var inst_34153 = (state_34207[(8)]);
var inst_34172 = cljs.core.keyword_identical_QMARK_(inst_34153,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34207__$1 = state_34207;
var statearr_34227_35134 = state_34207__$1;
(statearr_34227_35134[(2)] = inst_34172);

(statearr_34227_35134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34208 === (5))){
var inst_34167 = (state_34207[(13)]);
var inst_34156 = (state_34207[(9)]);
var inst_34163 = (state_34207[(11)]);
var inst_34153 = (state_34207[(8)]);
var inst_34163__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34156) : f.call(null,inst_34156));
var inst_34167__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34163__$1,inst_34153);
var state_34207__$1 = (function (){var statearr_34229 = state_34207;
(statearr_34229[(13)] = inst_34167__$1);

(statearr_34229[(11)] = inst_34163__$1);

return statearr_34229;
})();
if(inst_34167__$1){
var statearr_34230_35135 = state_34207__$1;
(statearr_34230_35135[(1)] = (8));

} else {
var statearr_34231_35136 = state_34207__$1;
(statearr_34231_35136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34208 === (14))){
var inst_34156 = (state_34207[(9)]);
var inst_34163 = (state_34207[(11)]);
var inst_34181 = (state_34207[(2)]);
var inst_34182 = [];
var inst_34183 = inst_34182.push(inst_34156);
var inst_34152 = inst_34182;
var inst_34153 = inst_34163;
var state_34207__$1 = (function (){var statearr_34233 = state_34207;
(statearr_34233[(14)] = inst_34183);

(statearr_34233[(7)] = inst_34152);

(statearr_34233[(15)] = inst_34181);

(statearr_34233[(8)] = inst_34153);

return statearr_34233;
})();
var statearr_34234_35137 = state_34207__$1;
(statearr_34234_35137[(2)] = null);

(statearr_34234_35137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34208 === (16))){
var state_34207__$1 = state_34207;
var statearr_34235_35138 = state_34207__$1;
(statearr_34235_35138[(2)] = null);

(statearr_34235_35138[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34208 === (10))){
var inst_34174 = (state_34207[(2)]);
var state_34207__$1 = state_34207;
if(cljs.core.truth_(inst_34174)){
var statearr_34237_35139 = state_34207__$1;
(statearr_34237_35139[(1)] = (11));

} else {
var statearr_34238_35140 = state_34207__$1;
(statearr_34238_35140[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34208 === (18))){
var inst_34196 = (state_34207[(2)]);
var state_34207__$1 = state_34207;
var statearr_34239_35141 = state_34207__$1;
(statearr_34239_35141[(2)] = inst_34196);

(statearr_34239_35141[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34208 === (8))){
var inst_34167 = (state_34207[(13)]);
var state_34207__$1 = state_34207;
var statearr_34242_35142 = state_34207__$1;
(statearr_34242_35142[(2)] = inst_34167);

(statearr_34242_35142[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29700__auto__ = null;
var cljs$core$async$state_machine__29700__auto____0 = (function (){
var statearr_34245 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34245[(0)] = cljs$core$async$state_machine__29700__auto__);

(statearr_34245[(1)] = (1));

return statearr_34245;
});
var cljs$core$async$state_machine__29700__auto____1 = (function (state_34207){
while(true){
var ret_value__29701__auto__ = (function (){try{while(true){
var result__29702__auto__ = switch__29699__auto__(state_34207);
if(cljs.core.keyword_identical_QMARK_(result__29702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29702__auto__;
}
break;
}
}catch (e34248){var ex__29703__auto__ = e34248;
var statearr_34250_35143 = state_34207;
(statearr_34250_35143[(2)] = ex__29703__auto__);


if(cljs.core.seq((state_34207[(4)]))){
var statearr_34251_35144 = state_34207;
(statearr_34251_35144[(1)] = cljs.core.first((state_34207[(4)])));

} else {
throw ex__29703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35145 = state_34207;
state_34207 = G__35145;
continue;
} else {
return ret_value__29701__auto__;
}
break;
}
});
cljs$core$async$state_machine__29700__auto__ = function(state_34207){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29700__auto____1.call(this,state_34207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29700__auto____0;
cljs$core$async$state_machine__29700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29700__auto____1;
return cljs$core$async$state_machine__29700__auto__;
})()
})();
var state__30346__auto__ = (function (){var statearr_34253 = f__30344__auto__();
(statearr_34253[(6)] = c__30343__auto___35120);

return statearr_34253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30346__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

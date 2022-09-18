goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__34508 = arguments.length;
switch (G__34508) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34511 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34511 = (function (f,blockable,meta34512){
this.f = f;
this.blockable = blockable;
this.meta34512 = meta34512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34513,meta34512__$1){
var self__ = this;
var _34513__$1 = this;
return (new cljs.core.async.t_cljs$core$async34511(self__.f,self__.blockable,meta34512__$1));
}));

(cljs.core.async.t_cljs$core$async34511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34513){
var self__ = this;
var _34513__$1 = this;
return self__.meta34512;
}));

(cljs.core.async.t_cljs$core$async34511.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34511.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34511.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async34511.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async34511.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34512","meta34512",499994958,null)], null);
}));

(cljs.core.async.t_cljs$core$async34511.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34511.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34511");

(cljs.core.async.t_cljs$core$async34511.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34511");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34511.
 */
cljs.core.async.__GT_t_cljs$core$async34511 = (function cljs$core$async$__GT_t_cljs$core$async34511(f__$1,blockable__$1,meta34512){
return (new cljs.core.async.t_cljs$core$async34511(f__$1,blockable__$1,meta34512));
});

}

return (new cljs.core.async.t_cljs$core$async34511(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34531 = arguments.length;
switch (G__34531) {
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
var G__34541 = arguments.length;
switch (G__34541) {
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
var G__34546 = arguments.length;
switch (G__34546) {
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
var val_37293 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_37293) : fn1.call(null,val_37293));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_37293) : fn1.call(null,val_37293));
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
var G__34553 = arguments.length;
switch (G__34553) {
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
var n__5636__auto___37312 = n;
var x_37314 = (0);
while(true){
if((x_37314 < n__5636__auto___37312)){
(a[x_37314] = x_37314);

var G__37318 = (x_37314 + (1));
x_37314 = G__37318;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34556 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34556 = (function (flag,meta34557){
this.flag = flag;
this.meta34557 = meta34557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34558,meta34557__$1){
var self__ = this;
var _34558__$1 = this;
return (new cljs.core.async.t_cljs$core$async34556(self__.flag,meta34557__$1));
}));

(cljs.core.async.t_cljs$core$async34556.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34558){
var self__ = this;
var _34558__$1 = this;
return self__.meta34557;
}));

(cljs.core.async.t_cljs$core$async34556.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34556.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34556.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34556.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async34556.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34557","meta34557",1145851869,null)], null);
}));

(cljs.core.async.t_cljs$core$async34556.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34556.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34556");

(cljs.core.async.t_cljs$core$async34556.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34556");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34556.
 */
cljs.core.async.__GT_t_cljs$core$async34556 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34556(flag__$1,meta34557){
return (new cljs.core.async.t_cljs$core$async34556(flag__$1,meta34557));
});

}

return (new cljs.core.async.t_cljs$core$async34556(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34559 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34559 = (function (flag,cb,meta34560){
this.flag = flag;
this.cb = cb;
this.meta34560 = meta34560;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34561,meta34560__$1){
var self__ = this;
var _34561__$1 = this;
return (new cljs.core.async.t_cljs$core$async34559(self__.flag,self__.cb,meta34560__$1));
}));

(cljs.core.async.t_cljs$core$async34559.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34561){
var self__ = this;
var _34561__$1 = this;
return self__.meta34560;
}));

(cljs.core.async.t_cljs$core$async34559.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34559.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34559.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34559.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34559.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34560","meta34560",303769187,null)], null);
}));

(cljs.core.async.t_cljs$core$async34559.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34559.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34559");

(cljs.core.async.t_cljs$core$async34559.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34559");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34559.
 */
cljs.core.async.__GT_t_cljs$core$async34559 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34559(flag__$1,cb__$1,meta34560){
return (new cljs.core.async.t_cljs$core$async34559(flag__$1,cb__$1,meta34560));
});

}

return (new cljs.core.async.t_cljs$core$async34559(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34578_SHARP_){
var G__34583 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34578_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34583) : fret.call(null,G__34583));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34580_SHARP_){
var G__34585 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34580_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34585) : fret.call(null,G__34585));
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
var G__37382 = (i + (1));
i = G__37382;
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
var len__5769__auto___37383 = arguments.length;
var i__5770__auto___37384 = (0);
while(true){
if((i__5770__auto___37384 < len__5769__auto___37383)){
args__5775__auto__.push((arguments[i__5770__auto___37384]));

var G__37385 = (i__5770__auto___37384 + (1));
i__5770__auto___37384 = G__37385;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34593){
var map__34596 = p__34593;
var map__34596__$1 = cljs.core.__destructure_map(map__34596);
var opts = map__34596__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34590){
var G__34591 = cljs.core.first(seq34590);
var seq34590__$1 = cljs.core.next(seq34590);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34591,seq34590__$1);
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
var G__34611 = arguments.length;
switch (G__34611) {
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
var c__34404__auto___37395 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34405__auto__ = (function (){var switch__34048__auto__ = (function (state_34706){
var state_val_34707 = (state_34706[(1)]);
if((state_val_34707 === (7))){
var inst_34689 = (state_34706[(2)]);
var state_34706__$1 = state_34706;
var statearr_34725_37399 = state_34706__$1;
(statearr_34725_37399[(2)] = inst_34689);

(statearr_34725_37399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34707 === (1))){
var state_34706__$1 = state_34706;
var statearr_34726_37401 = state_34706__$1;
(statearr_34726_37401[(2)] = null);

(statearr_34726_37401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34707 === (4))){
var inst_34646 = (state_34706[(7)]);
var inst_34646__$1 = (state_34706[(2)]);
var inst_34655 = (inst_34646__$1 == null);
var state_34706__$1 = (function (){var statearr_34727 = state_34706;
(statearr_34727[(7)] = inst_34646__$1);

return statearr_34727;
})();
if(cljs.core.truth_(inst_34655)){
var statearr_34728_37405 = state_34706__$1;
(statearr_34728_37405[(1)] = (5));

} else {
var statearr_34729_37406 = state_34706__$1;
(statearr_34729_37406[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34707 === (13))){
var state_34706__$1 = state_34706;
var statearr_34730_37408 = state_34706__$1;
(statearr_34730_37408[(2)] = null);

(statearr_34730_37408[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34707 === (6))){
var inst_34646 = (state_34706[(7)]);
var state_34706__$1 = state_34706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34706__$1,(11),to,inst_34646);
} else {
if((state_val_34707 === (3))){
var inst_34695 = (state_34706[(2)]);
var state_34706__$1 = state_34706;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34706__$1,inst_34695);
} else {
if((state_val_34707 === (12))){
var state_34706__$1 = state_34706;
var statearr_34733_37409 = state_34706__$1;
(statearr_34733_37409[(2)] = null);

(statearr_34733_37409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34707 === (2))){
var state_34706__$1 = state_34706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34706__$1,(4),from);
} else {
if((state_val_34707 === (11))){
var inst_34676 = (state_34706[(2)]);
var state_34706__$1 = state_34706;
if(cljs.core.truth_(inst_34676)){
var statearr_34737_37413 = state_34706__$1;
(statearr_34737_37413[(1)] = (12));

} else {
var statearr_34738_37414 = state_34706__$1;
(statearr_34738_37414[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34707 === (9))){
var state_34706__$1 = state_34706;
var statearr_34739_37416 = state_34706__$1;
(statearr_34739_37416[(2)] = null);

(statearr_34739_37416[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34707 === (5))){
var state_34706__$1 = state_34706;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34740_37417 = state_34706__$1;
(statearr_34740_37417[(1)] = (8));

} else {
var statearr_34741_37418 = state_34706__$1;
(statearr_34741_37418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34707 === (14))){
var inst_34687 = (state_34706[(2)]);
var state_34706__$1 = state_34706;
var statearr_34743_37419 = state_34706__$1;
(statearr_34743_37419[(2)] = inst_34687);

(statearr_34743_37419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34707 === (10))){
var inst_34668 = (state_34706[(2)]);
var state_34706__$1 = state_34706;
var statearr_34744_37420 = state_34706__$1;
(statearr_34744_37420[(2)] = inst_34668);

(statearr_34744_37420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34707 === (8))){
var inst_34659 = cljs.core.async.close_BANG_(to);
var state_34706__$1 = state_34706;
var statearr_34746_37422 = state_34706__$1;
(statearr_34746_37422[(2)] = inst_34659);

(statearr_34746_37422[(1)] = (10));


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
var cljs$core$async$state_machine__34049__auto__ = null;
var cljs$core$async$state_machine__34049__auto____0 = (function (){
var statearr_34747 = [null,null,null,null,null,null,null,null];
(statearr_34747[(0)] = cljs$core$async$state_machine__34049__auto__);

(statearr_34747[(1)] = (1));

return statearr_34747;
});
var cljs$core$async$state_machine__34049__auto____1 = (function (state_34706){
while(true){
var ret_value__34050__auto__ = (function (){try{while(true){
var result__34051__auto__ = switch__34048__auto__(state_34706);
if(cljs.core.keyword_identical_QMARK_(result__34051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34051__auto__;
}
break;
}
}catch (e34749){var ex__34052__auto__ = e34749;
var statearr_34751_37423 = state_34706;
(statearr_34751_37423[(2)] = ex__34052__auto__);


if(cljs.core.seq((state_34706[(4)]))){
var statearr_34752_37424 = state_34706;
(statearr_34752_37424[(1)] = cljs.core.first((state_34706[(4)])));

} else {
throw ex__34052__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34050__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37425 = state_34706;
state_34706 = G__37425;
continue;
} else {
return ret_value__34050__auto__;
}
break;
}
});
cljs$core$async$state_machine__34049__auto__ = function(state_34706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34049__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34049__auto____1.call(this,state_34706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34049__auto____0;
cljs$core$async$state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34049__auto____1;
return cljs$core$async$state_machine__34049__auto__;
})()
})();
var state__34406__auto__ = (function (){var statearr_34753 = f__34405__auto__();
(statearr_34753[(6)] = c__34404__auto___37395);

return statearr_34753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34406__auto__);
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
var process__$1 = (function (p__34755){
var vec__34756 = p__34755;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34756,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34756,(1),null);
var job = vec__34756;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34404__auto___37434 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34405__auto__ = (function (){var switch__34048__auto__ = (function (state_34764){
var state_val_34765 = (state_34764[(1)]);
if((state_val_34765 === (1))){
var state_34764__$1 = state_34764;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34764__$1,(2),res,v);
} else {
if((state_val_34765 === (2))){
var inst_34761 = (state_34764[(2)]);
var inst_34762 = cljs.core.async.close_BANG_(res);
var state_34764__$1 = (function (){var statearr_34766 = state_34764;
(statearr_34766[(7)] = inst_34761);

return statearr_34766;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34764__$1,inst_34762);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34049__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34049__auto____0 = (function (){
var statearr_34767 = [null,null,null,null,null,null,null,null];
(statearr_34767[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34049__auto__);

(statearr_34767[(1)] = (1));

return statearr_34767;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34049__auto____1 = (function (state_34764){
while(true){
var ret_value__34050__auto__ = (function (){try{while(true){
var result__34051__auto__ = switch__34048__auto__(state_34764);
if(cljs.core.keyword_identical_QMARK_(result__34051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34051__auto__;
}
break;
}
}catch (e34769){var ex__34052__auto__ = e34769;
var statearr_34770_37438 = state_34764;
(statearr_34770_37438[(2)] = ex__34052__auto__);


if(cljs.core.seq((state_34764[(4)]))){
var statearr_34772_37440 = state_34764;
(statearr_34772_37440[(1)] = cljs.core.first((state_34764[(4)])));

} else {
throw ex__34052__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34050__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37441 = state_34764;
state_34764 = G__37441;
continue;
} else {
return ret_value__34050__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34049__auto__ = function(state_34764){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34049__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34049__auto____1.call(this,state_34764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34049__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34049__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34049__auto__;
})()
})();
var state__34406__auto__ = (function (){var statearr_34773 = f__34405__auto__();
(statearr_34773[(6)] = c__34404__auto___37434);

return statearr_34773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34406__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34774){
var vec__34775 = p__34774;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34775,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34775,(1),null);
var job = vec__34775;
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
var n__5636__auto___37446 = n;
var __37447 = (0);
while(true){
if((__37447 < n__5636__auto___37446)){
var G__34778_37448 = type;
var G__34778_37449__$1 = (((G__34778_37448 instanceof cljs.core.Keyword))?G__34778_37448.fqn:null);
switch (G__34778_37449__$1) {
case "compute":
var c__34404__auto___37451 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37447,c__34404__auto___37451,G__34778_37448,G__34778_37449__$1,n__5636__auto___37446,jobs,results,process__$1,async){
return (function (){
var f__34405__auto__ = (function (){var switch__34048__auto__ = ((function (__37447,c__34404__auto___37451,G__34778_37448,G__34778_37449__$1,n__5636__auto___37446,jobs,results,process__$1,async){
return (function (state_34792){
var state_val_34793 = (state_34792[(1)]);
if((state_val_34793 === (1))){
var state_34792__$1 = state_34792;
var statearr_34804_37455 = state_34792__$1;
(statearr_34804_37455[(2)] = null);

(statearr_34804_37455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34793 === (2))){
var state_34792__$1 = state_34792;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34792__$1,(4),jobs);
} else {
if((state_val_34793 === (3))){
var inst_34790 = (state_34792[(2)]);
var state_34792__$1 = state_34792;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34792__$1,inst_34790);
} else {
if((state_val_34793 === (4))){
var inst_34782 = (state_34792[(2)]);
var inst_34783 = process__$1(inst_34782);
var state_34792__$1 = state_34792;
if(cljs.core.truth_(inst_34783)){
var statearr_34814_37457 = state_34792__$1;
(statearr_34814_37457[(1)] = (5));

} else {
var statearr_34815_37458 = state_34792__$1;
(statearr_34815_37458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34793 === (5))){
var state_34792__$1 = state_34792;
var statearr_34820_37460 = state_34792__$1;
(statearr_34820_37460[(2)] = null);

(statearr_34820_37460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34793 === (6))){
var state_34792__$1 = state_34792;
var statearr_34821_37461 = state_34792__$1;
(statearr_34821_37461[(2)] = null);

(statearr_34821_37461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34793 === (7))){
var inst_34788 = (state_34792[(2)]);
var state_34792__$1 = state_34792;
var statearr_34822_37462 = state_34792__$1;
(statearr_34822_37462[(2)] = inst_34788);

(statearr_34822_37462[(1)] = (3));


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
});})(__37447,c__34404__auto___37451,G__34778_37448,G__34778_37449__$1,n__5636__auto___37446,jobs,results,process__$1,async))
;
return ((function (__37447,switch__34048__auto__,c__34404__auto___37451,G__34778_37448,G__34778_37449__$1,n__5636__auto___37446,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34049__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34049__auto____0 = (function (){
var statearr_34827 = [null,null,null,null,null,null,null];
(statearr_34827[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34049__auto__);

(statearr_34827[(1)] = (1));

return statearr_34827;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34049__auto____1 = (function (state_34792){
while(true){
var ret_value__34050__auto__ = (function (){try{while(true){
var result__34051__auto__ = switch__34048__auto__(state_34792);
if(cljs.core.keyword_identical_QMARK_(result__34051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34051__auto__;
}
break;
}
}catch (e34832){var ex__34052__auto__ = e34832;
var statearr_34833_37463 = state_34792;
(statearr_34833_37463[(2)] = ex__34052__auto__);


if(cljs.core.seq((state_34792[(4)]))){
var statearr_34838_37464 = state_34792;
(statearr_34838_37464[(1)] = cljs.core.first((state_34792[(4)])));

} else {
throw ex__34052__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34050__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37465 = state_34792;
state_34792 = G__37465;
continue;
} else {
return ret_value__34050__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34049__auto__ = function(state_34792){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34049__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34049__auto____1.call(this,state_34792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34049__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34049__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34049__auto__;
})()
;})(__37447,switch__34048__auto__,c__34404__auto___37451,G__34778_37448,G__34778_37449__$1,n__5636__auto___37446,jobs,results,process__$1,async))
})();
var state__34406__auto__ = (function (){var statearr_34840 = f__34405__auto__();
(statearr_34840[(6)] = c__34404__auto___37451);

return statearr_34840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34406__auto__);
});})(__37447,c__34404__auto___37451,G__34778_37448,G__34778_37449__$1,n__5636__auto___37446,jobs,results,process__$1,async))
);


break;
case "async":
var c__34404__auto___37466 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37447,c__34404__auto___37466,G__34778_37448,G__34778_37449__$1,n__5636__auto___37446,jobs,results,process__$1,async){
return (function (){
var f__34405__auto__ = (function (){var switch__34048__auto__ = ((function (__37447,c__34404__auto___37466,G__34778_37448,G__34778_37449__$1,n__5636__auto___37446,jobs,results,process__$1,async){
return (function (state_34854){
var state_val_34855 = (state_34854[(1)]);
if((state_val_34855 === (1))){
var state_34854__$1 = state_34854;
var statearr_34856_37467 = state_34854__$1;
(statearr_34856_37467[(2)] = null);

(statearr_34856_37467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (2))){
var state_34854__$1 = state_34854;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34854__$1,(4),jobs);
} else {
if((state_val_34855 === (3))){
var inst_34852 = (state_34854[(2)]);
var state_34854__$1 = state_34854;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34854__$1,inst_34852);
} else {
if((state_val_34855 === (4))){
var inst_34844 = (state_34854[(2)]);
var inst_34845 = async(inst_34844);
var state_34854__$1 = state_34854;
if(cljs.core.truth_(inst_34845)){
var statearr_34859_37468 = state_34854__$1;
(statearr_34859_37468[(1)] = (5));

} else {
var statearr_34860_37469 = state_34854__$1;
(statearr_34860_37469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (5))){
var state_34854__$1 = state_34854;
var statearr_34861_37470 = state_34854__$1;
(statearr_34861_37470[(2)] = null);

(statearr_34861_37470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (6))){
var state_34854__$1 = state_34854;
var statearr_34862_37475 = state_34854__$1;
(statearr_34862_37475[(2)] = null);

(statearr_34862_37475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (7))){
var inst_34850 = (state_34854[(2)]);
var state_34854__$1 = state_34854;
var statearr_34863_37477 = state_34854__$1;
(statearr_34863_37477[(2)] = inst_34850);

(statearr_34863_37477[(1)] = (3));


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
});})(__37447,c__34404__auto___37466,G__34778_37448,G__34778_37449__$1,n__5636__auto___37446,jobs,results,process__$1,async))
;
return ((function (__37447,switch__34048__auto__,c__34404__auto___37466,G__34778_37448,G__34778_37449__$1,n__5636__auto___37446,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34049__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34049__auto____0 = (function (){
var statearr_34864 = [null,null,null,null,null,null,null];
(statearr_34864[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34049__auto__);

(statearr_34864[(1)] = (1));

return statearr_34864;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34049__auto____1 = (function (state_34854){
while(true){
var ret_value__34050__auto__ = (function (){try{while(true){
var result__34051__auto__ = switch__34048__auto__(state_34854);
if(cljs.core.keyword_identical_QMARK_(result__34051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34051__auto__;
}
break;
}
}catch (e34865){var ex__34052__auto__ = e34865;
var statearr_34866_37494 = state_34854;
(statearr_34866_37494[(2)] = ex__34052__auto__);


if(cljs.core.seq((state_34854[(4)]))){
var statearr_34867_37495 = state_34854;
(statearr_34867_37495[(1)] = cljs.core.first((state_34854[(4)])));

} else {
throw ex__34052__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34050__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37496 = state_34854;
state_34854 = G__37496;
continue;
} else {
return ret_value__34050__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34049__auto__ = function(state_34854){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34049__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34049__auto____1.call(this,state_34854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34049__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34049__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34049__auto__;
})()
;})(__37447,switch__34048__auto__,c__34404__auto___37466,G__34778_37448,G__34778_37449__$1,n__5636__auto___37446,jobs,results,process__$1,async))
})();
var state__34406__auto__ = (function (){var statearr_34868 = f__34405__auto__();
(statearr_34868[(6)] = c__34404__auto___37466);

return statearr_34868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34406__auto__);
});})(__37447,c__34404__auto___37466,G__34778_37448,G__34778_37449__$1,n__5636__auto___37446,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34778_37449__$1)].join('')));

}

var G__37499 = (__37447 + (1));
__37447 = G__37499;
continue;
} else {
}
break;
}

var c__34404__auto___37500 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34405__auto__ = (function (){var switch__34048__auto__ = (function (state_34921){
var state_val_34922 = (state_34921[(1)]);
if((state_val_34922 === (7))){
var inst_34916 = (state_34921[(2)]);
var state_34921__$1 = state_34921;
var statearr_34929_37501 = state_34921__$1;
(statearr_34929_37501[(2)] = inst_34916);

(statearr_34929_37501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (1))){
var state_34921__$1 = state_34921;
var statearr_34935_37502 = state_34921__$1;
(statearr_34935_37502[(2)] = null);

(statearr_34935_37502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (4))){
var inst_34882 = (state_34921[(7)]);
var inst_34882__$1 = (state_34921[(2)]);
var inst_34887 = (inst_34882__$1 == null);
var state_34921__$1 = (function (){var statearr_34943 = state_34921;
(statearr_34943[(7)] = inst_34882__$1);

return statearr_34943;
})();
if(cljs.core.truth_(inst_34887)){
var statearr_34945_37507 = state_34921__$1;
(statearr_34945_37507[(1)] = (5));

} else {
var statearr_34950_37509 = state_34921__$1;
(statearr_34950_37509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (6))){
var inst_34892 = (state_34921[(8)]);
var inst_34882 = (state_34921[(7)]);
var inst_34892__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34905 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34907 = [inst_34882,inst_34892__$1];
var inst_34908 = (new cljs.core.PersistentVector(null,2,(5),inst_34905,inst_34907,null));
var state_34921__$1 = (function (){var statearr_34951 = state_34921;
(statearr_34951[(8)] = inst_34892__$1);

return statearr_34951;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34921__$1,(8),jobs,inst_34908);
} else {
if((state_val_34922 === (3))){
var inst_34918 = (state_34921[(2)]);
var state_34921__$1 = state_34921;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34921__$1,inst_34918);
} else {
if((state_val_34922 === (2))){
var state_34921__$1 = state_34921;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34921__$1,(4),from);
} else {
if((state_val_34922 === (9))){
var inst_34912 = (state_34921[(2)]);
var state_34921__$1 = (function (){var statearr_34959 = state_34921;
(statearr_34959[(9)] = inst_34912);

return statearr_34959;
})();
var statearr_34964_37511 = state_34921__$1;
(statearr_34964_37511[(2)] = null);

(statearr_34964_37511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (5))){
var inst_34889 = cljs.core.async.close_BANG_(jobs);
var state_34921__$1 = state_34921;
var statearr_34970_37512 = state_34921__$1;
(statearr_34970_37512[(2)] = inst_34889);

(statearr_34970_37512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (8))){
var inst_34892 = (state_34921[(8)]);
var inst_34910 = (state_34921[(2)]);
var state_34921__$1 = (function (){var statearr_34976 = state_34921;
(statearr_34976[(10)] = inst_34910);

return statearr_34976;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34921__$1,(9),results,inst_34892);
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
var cljs$core$async$pipeline_STAR__$_state_machine__34049__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34049__auto____0 = (function (){
var statearr_34982 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34982[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34049__auto__);

(statearr_34982[(1)] = (1));

return statearr_34982;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34049__auto____1 = (function (state_34921){
while(true){
var ret_value__34050__auto__ = (function (){try{while(true){
var result__34051__auto__ = switch__34048__auto__(state_34921);
if(cljs.core.keyword_identical_QMARK_(result__34051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34051__auto__;
}
break;
}
}catch (e34987){var ex__34052__auto__ = e34987;
var statearr_34988_37565 = state_34921;
(statearr_34988_37565[(2)] = ex__34052__auto__);


if(cljs.core.seq((state_34921[(4)]))){
var statearr_34993_37566 = state_34921;
(statearr_34993_37566[(1)] = cljs.core.first((state_34921[(4)])));

} else {
throw ex__34052__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34050__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37567 = state_34921;
state_34921 = G__37567;
continue;
} else {
return ret_value__34050__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34049__auto__ = function(state_34921){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34049__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34049__auto____1.call(this,state_34921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34049__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34049__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34049__auto__;
})()
})();
var state__34406__auto__ = (function (){var statearr_34996 = f__34405__auto__();
(statearr_34996[(6)] = c__34404__auto___37500);

return statearr_34996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34406__auto__);
}));


var c__34404__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34405__auto__ = (function (){var switch__34048__auto__ = (function (state_35035){
var state_val_35036 = (state_35035[(1)]);
if((state_val_35036 === (7))){
var inst_35031 = (state_35035[(2)]);
var state_35035__$1 = state_35035;
var statearr_35042_37583 = state_35035__$1;
(statearr_35042_37583[(2)] = inst_35031);

(statearr_35042_37583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35036 === (20))){
var state_35035__$1 = state_35035;
var statearr_35043_37584 = state_35035__$1;
(statearr_35043_37584[(2)] = null);

(statearr_35043_37584[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35036 === (1))){
var state_35035__$1 = state_35035;
var statearr_35044_37585 = state_35035__$1;
(statearr_35044_37585[(2)] = null);

(statearr_35044_37585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35036 === (4))){
var inst_34999 = (state_35035[(7)]);
var inst_34999__$1 = (state_35035[(2)]);
var inst_35000 = (inst_34999__$1 == null);
var state_35035__$1 = (function (){var statearr_35049 = state_35035;
(statearr_35049[(7)] = inst_34999__$1);

return statearr_35049;
})();
if(cljs.core.truth_(inst_35000)){
var statearr_35050_37586 = state_35035__$1;
(statearr_35050_37586[(1)] = (5));

} else {
var statearr_35051_37587 = state_35035__$1;
(statearr_35051_37587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35036 === (15))){
var inst_35013 = (state_35035[(8)]);
var state_35035__$1 = state_35035;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35035__$1,(18),to,inst_35013);
} else {
if((state_val_35036 === (21))){
var inst_35026 = (state_35035[(2)]);
var state_35035__$1 = state_35035;
var statearr_35056_37588 = state_35035__$1;
(statearr_35056_37588[(2)] = inst_35026);

(statearr_35056_37588[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35036 === (13))){
var inst_35028 = (state_35035[(2)]);
var state_35035__$1 = (function (){var statearr_35057 = state_35035;
(statearr_35057[(9)] = inst_35028);

return statearr_35057;
})();
var statearr_35058_37589 = state_35035__$1;
(statearr_35058_37589[(2)] = null);

(statearr_35058_37589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35036 === (6))){
var inst_34999 = (state_35035[(7)]);
var state_35035__$1 = state_35035;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35035__$1,(11),inst_34999);
} else {
if((state_val_35036 === (17))){
var inst_35021 = (state_35035[(2)]);
var state_35035__$1 = state_35035;
if(cljs.core.truth_(inst_35021)){
var statearr_35059_37590 = state_35035__$1;
(statearr_35059_37590[(1)] = (19));

} else {
var statearr_35060_37591 = state_35035__$1;
(statearr_35060_37591[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35036 === (3))){
var inst_35033 = (state_35035[(2)]);
var state_35035__$1 = state_35035;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35035__$1,inst_35033);
} else {
if((state_val_35036 === (12))){
var inst_35009 = (state_35035[(10)]);
var state_35035__$1 = state_35035;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35035__$1,(14),inst_35009);
} else {
if((state_val_35036 === (2))){
var state_35035__$1 = state_35035;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35035__$1,(4),results);
} else {
if((state_val_35036 === (19))){
var state_35035__$1 = state_35035;
var statearr_35065_37592 = state_35035__$1;
(statearr_35065_37592[(2)] = null);

(statearr_35065_37592[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35036 === (11))){
var inst_35009 = (state_35035[(2)]);
var state_35035__$1 = (function (){var statearr_35070 = state_35035;
(statearr_35070[(10)] = inst_35009);

return statearr_35070;
})();
var statearr_35071_37593 = state_35035__$1;
(statearr_35071_37593[(2)] = null);

(statearr_35071_37593[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35036 === (9))){
var state_35035__$1 = state_35035;
var statearr_35080_37594 = state_35035__$1;
(statearr_35080_37594[(2)] = null);

(statearr_35080_37594[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35036 === (5))){
var state_35035__$1 = state_35035;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35081_37595 = state_35035__$1;
(statearr_35081_37595[(1)] = (8));

} else {
var statearr_35082_37596 = state_35035__$1;
(statearr_35082_37596[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35036 === (14))){
var inst_35013 = (state_35035[(8)]);
var inst_35015 = (state_35035[(11)]);
var inst_35013__$1 = (state_35035[(2)]);
var inst_35014 = (inst_35013__$1 == null);
var inst_35015__$1 = cljs.core.not(inst_35014);
var state_35035__$1 = (function (){var statearr_35083 = state_35035;
(statearr_35083[(8)] = inst_35013__$1);

(statearr_35083[(11)] = inst_35015__$1);

return statearr_35083;
})();
if(inst_35015__$1){
var statearr_35084_37597 = state_35035__$1;
(statearr_35084_37597[(1)] = (15));

} else {
var statearr_35086_37598 = state_35035__$1;
(statearr_35086_37598[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35036 === (16))){
var inst_35015 = (state_35035[(11)]);
var state_35035__$1 = state_35035;
var statearr_35087_37599 = state_35035__$1;
(statearr_35087_37599[(2)] = inst_35015);

(statearr_35087_37599[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35036 === (10))){
var inst_35006 = (state_35035[(2)]);
var state_35035__$1 = state_35035;
var statearr_35088_37600 = state_35035__$1;
(statearr_35088_37600[(2)] = inst_35006);

(statearr_35088_37600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35036 === (18))){
var inst_35018 = (state_35035[(2)]);
var state_35035__$1 = state_35035;
var statearr_35089_37601 = state_35035__$1;
(statearr_35089_37601[(2)] = inst_35018);

(statearr_35089_37601[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35036 === (8))){
var inst_35003 = cljs.core.async.close_BANG_(to);
var state_35035__$1 = state_35035;
var statearr_35090_37603 = state_35035__$1;
(statearr_35090_37603[(2)] = inst_35003);

(statearr_35090_37603[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__34049__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34049__auto____0 = (function (){
var statearr_35091 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35091[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34049__auto__);

(statearr_35091[(1)] = (1));

return statearr_35091;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34049__auto____1 = (function (state_35035){
while(true){
var ret_value__34050__auto__ = (function (){try{while(true){
var result__34051__auto__ = switch__34048__auto__(state_35035);
if(cljs.core.keyword_identical_QMARK_(result__34051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34051__auto__;
}
break;
}
}catch (e35092){var ex__34052__auto__ = e35092;
var statearr_35093_37622 = state_35035;
(statearr_35093_37622[(2)] = ex__34052__auto__);


if(cljs.core.seq((state_35035[(4)]))){
var statearr_35094_37626 = state_35035;
(statearr_35094_37626[(1)] = cljs.core.first((state_35035[(4)])));

} else {
throw ex__34052__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34050__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37635 = state_35035;
state_35035 = G__37635;
continue;
} else {
return ret_value__34050__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34049__auto__ = function(state_35035){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34049__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34049__auto____1.call(this,state_35035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34049__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34049__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34049__auto__;
})()
})();
var state__34406__auto__ = (function (){var statearr_35095 = f__34405__auto__();
(statearr_35095[(6)] = c__34404__auto__);

return statearr_35095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34406__auto__);
}));

return c__34404__auto__;
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
var G__35097 = arguments.length;
switch (G__35097) {
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
var G__35099 = arguments.length;
switch (G__35099) {
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
var G__35101 = arguments.length;
switch (G__35101) {
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
var c__34404__auto___37666 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34405__auto__ = (function (){var switch__34048__auto__ = (function (state_35129){
var state_val_35130 = (state_35129[(1)]);
if((state_val_35130 === (7))){
var inst_35125 = (state_35129[(2)]);
var state_35129__$1 = state_35129;
var statearr_35131_37667 = state_35129__$1;
(statearr_35131_37667[(2)] = inst_35125);

(statearr_35131_37667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (1))){
var state_35129__$1 = state_35129;
var statearr_35132_37669 = state_35129__$1;
(statearr_35132_37669[(2)] = null);

(statearr_35132_37669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (4))){
var inst_35105 = (state_35129[(7)]);
var inst_35105__$1 = (state_35129[(2)]);
var inst_35106 = (inst_35105__$1 == null);
var state_35129__$1 = (function (){var statearr_35133 = state_35129;
(statearr_35133[(7)] = inst_35105__$1);

return statearr_35133;
})();
if(cljs.core.truth_(inst_35106)){
var statearr_35134_37670 = state_35129__$1;
(statearr_35134_37670[(1)] = (5));

} else {
var statearr_35135_37671 = state_35129__$1;
(statearr_35135_37671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (13))){
var state_35129__$1 = state_35129;
var statearr_35136_37672 = state_35129__$1;
(statearr_35136_37672[(2)] = null);

(statearr_35136_37672[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (6))){
var inst_35105 = (state_35129[(7)]);
var inst_35111 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35105) : p.call(null,inst_35105));
var state_35129__$1 = state_35129;
if(cljs.core.truth_(inst_35111)){
var statearr_35137_37674 = state_35129__$1;
(statearr_35137_37674[(1)] = (9));

} else {
var statearr_35138_37675 = state_35129__$1;
(statearr_35138_37675[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (3))){
var inst_35127 = (state_35129[(2)]);
var state_35129__$1 = state_35129;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35129__$1,inst_35127);
} else {
if((state_val_35130 === (12))){
var state_35129__$1 = state_35129;
var statearr_35140_37676 = state_35129__$1;
(statearr_35140_37676[(2)] = null);

(statearr_35140_37676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (2))){
var state_35129__$1 = state_35129;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35129__$1,(4),ch);
} else {
if((state_val_35130 === (11))){
var inst_35105 = (state_35129[(7)]);
var inst_35115 = (state_35129[(2)]);
var state_35129__$1 = state_35129;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35129__$1,(8),inst_35115,inst_35105);
} else {
if((state_val_35130 === (9))){
var state_35129__$1 = state_35129;
var statearr_35141_37678 = state_35129__$1;
(statearr_35141_37678[(2)] = tc);

(statearr_35141_37678[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (5))){
var inst_35108 = cljs.core.async.close_BANG_(tc);
var inst_35109 = cljs.core.async.close_BANG_(fc);
var state_35129__$1 = (function (){var statearr_35142 = state_35129;
(statearr_35142[(8)] = inst_35108);

return statearr_35142;
})();
var statearr_35143_37679 = state_35129__$1;
(statearr_35143_37679[(2)] = inst_35109);

(statearr_35143_37679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (14))){
var inst_35123 = (state_35129[(2)]);
var state_35129__$1 = state_35129;
var statearr_35144_37681 = state_35129__$1;
(statearr_35144_37681[(2)] = inst_35123);

(statearr_35144_37681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (10))){
var state_35129__$1 = state_35129;
var statearr_35145_37682 = state_35129__$1;
(statearr_35145_37682[(2)] = fc);

(statearr_35145_37682[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (8))){
var inst_35117 = (state_35129[(2)]);
var state_35129__$1 = state_35129;
if(cljs.core.truth_(inst_35117)){
var statearr_35146_37683 = state_35129__$1;
(statearr_35146_37683[(1)] = (12));

} else {
var statearr_35149_37684 = state_35129__$1;
(statearr_35149_37684[(1)] = (13));

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
var cljs$core$async$state_machine__34049__auto__ = null;
var cljs$core$async$state_machine__34049__auto____0 = (function (){
var statearr_35150 = [null,null,null,null,null,null,null,null,null];
(statearr_35150[(0)] = cljs$core$async$state_machine__34049__auto__);

(statearr_35150[(1)] = (1));

return statearr_35150;
});
var cljs$core$async$state_machine__34049__auto____1 = (function (state_35129){
while(true){
var ret_value__34050__auto__ = (function (){try{while(true){
var result__34051__auto__ = switch__34048__auto__(state_35129);
if(cljs.core.keyword_identical_QMARK_(result__34051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34051__auto__;
}
break;
}
}catch (e35155){var ex__34052__auto__ = e35155;
var statearr_35156_37686 = state_35129;
(statearr_35156_37686[(2)] = ex__34052__auto__);


if(cljs.core.seq((state_35129[(4)]))){
var statearr_35158_37687 = state_35129;
(statearr_35158_37687[(1)] = cljs.core.first((state_35129[(4)])));

} else {
throw ex__34052__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34050__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37688 = state_35129;
state_35129 = G__37688;
continue;
} else {
return ret_value__34050__auto__;
}
break;
}
});
cljs$core$async$state_machine__34049__auto__ = function(state_35129){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34049__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34049__auto____1.call(this,state_35129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34049__auto____0;
cljs$core$async$state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34049__auto____1;
return cljs$core$async$state_machine__34049__auto__;
})()
})();
var state__34406__auto__ = (function (){var statearr_35163 = f__34405__auto__();
(statearr_35163[(6)] = c__34404__auto___37666);

return statearr_35163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34406__auto__);
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
var c__34404__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34405__auto__ = (function (){var switch__34048__auto__ = (function (state_35197){
var state_val_35198 = (state_35197[(1)]);
if((state_val_35198 === (7))){
var inst_35193 = (state_35197[(2)]);
var state_35197__$1 = state_35197;
var statearr_35199_37690 = state_35197__$1;
(statearr_35199_37690[(2)] = inst_35193);

(statearr_35199_37690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35198 === (1))){
var inst_35176 = init;
var inst_35177 = inst_35176;
var state_35197__$1 = (function (){var statearr_35200 = state_35197;
(statearr_35200[(7)] = inst_35177);

return statearr_35200;
})();
var statearr_35201_37691 = state_35197__$1;
(statearr_35201_37691[(2)] = null);

(statearr_35201_37691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35198 === (4))){
var inst_35180 = (state_35197[(8)]);
var inst_35180__$1 = (state_35197[(2)]);
var inst_35181 = (inst_35180__$1 == null);
var state_35197__$1 = (function (){var statearr_35202 = state_35197;
(statearr_35202[(8)] = inst_35180__$1);

return statearr_35202;
})();
if(cljs.core.truth_(inst_35181)){
var statearr_35203_37694 = state_35197__$1;
(statearr_35203_37694[(1)] = (5));

} else {
var statearr_35204_37695 = state_35197__$1;
(statearr_35204_37695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35198 === (6))){
var inst_35177 = (state_35197[(7)]);
var inst_35180 = (state_35197[(8)]);
var inst_35184 = (state_35197[(9)]);
var inst_35184__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_35177,inst_35180) : f.call(null,inst_35177,inst_35180));
var inst_35185 = cljs.core.reduced_QMARK_(inst_35184__$1);
var state_35197__$1 = (function (){var statearr_35205 = state_35197;
(statearr_35205[(9)] = inst_35184__$1);

return statearr_35205;
})();
if(inst_35185){
var statearr_35206_37699 = state_35197__$1;
(statearr_35206_37699[(1)] = (8));

} else {
var statearr_35207_37700 = state_35197__$1;
(statearr_35207_37700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35198 === (3))){
var inst_35195 = (state_35197[(2)]);
var state_35197__$1 = state_35197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35197__$1,inst_35195);
} else {
if((state_val_35198 === (2))){
var state_35197__$1 = state_35197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35197__$1,(4),ch);
} else {
if((state_val_35198 === (9))){
var inst_35184 = (state_35197[(9)]);
var inst_35177 = inst_35184;
var state_35197__$1 = (function (){var statearr_35208 = state_35197;
(statearr_35208[(7)] = inst_35177);

return statearr_35208;
})();
var statearr_35211_37702 = state_35197__$1;
(statearr_35211_37702[(2)] = null);

(statearr_35211_37702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35198 === (5))){
var inst_35177 = (state_35197[(7)]);
var state_35197__$1 = state_35197;
var statearr_35212_37703 = state_35197__$1;
(statearr_35212_37703[(2)] = inst_35177);

(statearr_35212_37703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35198 === (10))){
var inst_35191 = (state_35197[(2)]);
var state_35197__$1 = state_35197;
var statearr_35214_37705 = state_35197__$1;
(statearr_35214_37705[(2)] = inst_35191);

(statearr_35214_37705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35198 === (8))){
var inst_35184 = (state_35197[(9)]);
var inst_35187 = cljs.core.deref(inst_35184);
var state_35197__$1 = state_35197;
var statearr_35215_37707 = state_35197__$1;
(statearr_35215_37707[(2)] = inst_35187);

(statearr_35215_37707[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__34049__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34049__auto____0 = (function (){
var statearr_35216 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35216[(0)] = cljs$core$async$reduce_$_state_machine__34049__auto__);

(statearr_35216[(1)] = (1));

return statearr_35216;
});
var cljs$core$async$reduce_$_state_machine__34049__auto____1 = (function (state_35197){
while(true){
var ret_value__34050__auto__ = (function (){try{while(true){
var result__34051__auto__ = switch__34048__auto__(state_35197);
if(cljs.core.keyword_identical_QMARK_(result__34051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34051__auto__;
}
break;
}
}catch (e35217){var ex__34052__auto__ = e35217;
var statearr_35218_37708 = state_35197;
(statearr_35218_37708[(2)] = ex__34052__auto__);


if(cljs.core.seq((state_35197[(4)]))){
var statearr_35219_37709 = state_35197;
(statearr_35219_37709[(1)] = cljs.core.first((state_35197[(4)])));

} else {
throw ex__34052__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34050__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37710 = state_35197;
state_35197 = G__37710;
continue;
} else {
return ret_value__34050__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34049__auto__ = function(state_35197){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34049__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34049__auto____1.call(this,state_35197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34049__auto____0;
cljs$core$async$reduce_$_state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34049__auto____1;
return cljs$core$async$reduce_$_state_machine__34049__auto__;
})()
})();
var state__34406__auto__ = (function (){var statearr_35220 = f__34405__auto__();
(statearr_35220[(6)] = c__34404__auto__);

return statearr_35220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34406__auto__);
}));

return c__34404__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__34404__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34405__auto__ = (function (){var switch__34048__auto__ = (function (state_35231){
var state_val_35232 = (state_35231[(1)]);
if((state_val_35232 === (1))){
var inst_35225 = cljs.core.async.reduce(f__$1,init,ch);
var state_35231__$1 = state_35231;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35231__$1,(2),inst_35225);
} else {
if((state_val_35232 === (2))){
var inst_35227 = (state_35231[(2)]);
var inst_35228 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_35227) : f__$1.call(null,inst_35227));
var state_35231__$1 = state_35231;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35231__$1,inst_35228);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34049__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34049__auto____0 = (function (){
var statearr_35234 = [null,null,null,null,null,null,null];
(statearr_35234[(0)] = cljs$core$async$transduce_$_state_machine__34049__auto__);

(statearr_35234[(1)] = (1));

return statearr_35234;
});
var cljs$core$async$transduce_$_state_machine__34049__auto____1 = (function (state_35231){
while(true){
var ret_value__34050__auto__ = (function (){try{while(true){
var result__34051__auto__ = switch__34048__auto__(state_35231);
if(cljs.core.keyword_identical_QMARK_(result__34051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34051__auto__;
}
break;
}
}catch (e35235){var ex__34052__auto__ = e35235;
var statearr_35236_37717 = state_35231;
(statearr_35236_37717[(2)] = ex__34052__auto__);


if(cljs.core.seq((state_35231[(4)]))){
var statearr_35237_37718 = state_35231;
(statearr_35237_37718[(1)] = cljs.core.first((state_35231[(4)])));

} else {
throw ex__34052__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34050__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37721 = state_35231;
state_35231 = G__37721;
continue;
} else {
return ret_value__34050__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34049__auto__ = function(state_35231){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34049__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34049__auto____1.call(this,state_35231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34049__auto____0;
cljs$core$async$transduce_$_state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34049__auto____1;
return cljs$core$async$transduce_$_state_machine__34049__auto__;
})()
})();
var state__34406__auto__ = (function (){var statearr_35240 = f__34405__auto__();
(statearr_35240[(6)] = c__34404__auto__);

return statearr_35240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34406__auto__);
}));

return c__34404__auto__;
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
var G__35242 = arguments.length;
switch (G__35242) {
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
var c__34404__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34405__auto__ = (function (){var switch__34048__auto__ = (function (state_35267){
var state_val_35268 = (state_35267[(1)]);
if((state_val_35268 === (7))){
var inst_35249 = (state_35267[(2)]);
var state_35267__$1 = state_35267;
var statearr_35269_37725 = state_35267__$1;
(statearr_35269_37725[(2)] = inst_35249);

(statearr_35269_37725[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35268 === (1))){
var inst_35243 = cljs.core.seq(coll);
var inst_35244 = inst_35243;
var state_35267__$1 = (function (){var statearr_35270 = state_35267;
(statearr_35270[(7)] = inst_35244);

return statearr_35270;
})();
var statearr_35271_37733 = state_35267__$1;
(statearr_35271_37733[(2)] = null);

(statearr_35271_37733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35268 === (4))){
var inst_35244 = (state_35267[(7)]);
var inst_35247 = cljs.core.first(inst_35244);
var state_35267__$1 = state_35267;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35267__$1,(7),ch,inst_35247);
} else {
if((state_val_35268 === (13))){
var inst_35261 = (state_35267[(2)]);
var state_35267__$1 = state_35267;
var statearr_35273_37740 = state_35267__$1;
(statearr_35273_37740[(2)] = inst_35261);

(statearr_35273_37740[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35268 === (6))){
var inst_35252 = (state_35267[(2)]);
var state_35267__$1 = state_35267;
if(cljs.core.truth_(inst_35252)){
var statearr_35274_37741 = state_35267__$1;
(statearr_35274_37741[(1)] = (8));

} else {
var statearr_35275_37742 = state_35267__$1;
(statearr_35275_37742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35268 === (3))){
var inst_35265 = (state_35267[(2)]);
var state_35267__$1 = state_35267;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35267__$1,inst_35265);
} else {
if((state_val_35268 === (12))){
var state_35267__$1 = state_35267;
var statearr_35276_37743 = state_35267__$1;
(statearr_35276_37743[(2)] = null);

(statearr_35276_37743[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35268 === (2))){
var inst_35244 = (state_35267[(7)]);
var state_35267__$1 = state_35267;
if(cljs.core.truth_(inst_35244)){
var statearr_35277_37744 = state_35267__$1;
(statearr_35277_37744[(1)] = (4));

} else {
var statearr_35278_37745 = state_35267__$1;
(statearr_35278_37745[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35268 === (11))){
var inst_35258 = cljs.core.async.close_BANG_(ch);
var state_35267__$1 = state_35267;
var statearr_35279_37746 = state_35267__$1;
(statearr_35279_37746[(2)] = inst_35258);

(statearr_35279_37746[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35268 === (9))){
var state_35267__$1 = state_35267;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35282_37747 = state_35267__$1;
(statearr_35282_37747[(1)] = (11));

} else {
var statearr_35283_37748 = state_35267__$1;
(statearr_35283_37748[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35268 === (5))){
var inst_35244 = (state_35267[(7)]);
var state_35267__$1 = state_35267;
var statearr_35285_37749 = state_35267__$1;
(statearr_35285_37749[(2)] = inst_35244);

(statearr_35285_37749[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35268 === (10))){
var inst_35263 = (state_35267[(2)]);
var state_35267__$1 = state_35267;
var statearr_35286_37750 = state_35267__$1;
(statearr_35286_37750[(2)] = inst_35263);

(statearr_35286_37750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35268 === (8))){
var inst_35244 = (state_35267[(7)]);
var inst_35254 = cljs.core.next(inst_35244);
var inst_35244__$1 = inst_35254;
var state_35267__$1 = (function (){var statearr_35291 = state_35267;
(statearr_35291[(7)] = inst_35244__$1);

return statearr_35291;
})();
var statearr_35292_37751 = state_35267__$1;
(statearr_35292_37751[(2)] = null);

(statearr_35292_37751[(1)] = (2));


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
var cljs$core$async$state_machine__34049__auto__ = null;
var cljs$core$async$state_machine__34049__auto____0 = (function (){
var statearr_35294 = [null,null,null,null,null,null,null,null];
(statearr_35294[(0)] = cljs$core$async$state_machine__34049__auto__);

(statearr_35294[(1)] = (1));

return statearr_35294;
});
var cljs$core$async$state_machine__34049__auto____1 = (function (state_35267){
while(true){
var ret_value__34050__auto__ = (function (){try{while(true){
var result__34051__auto__ = switch__34048__auto__(state_35267);
if(cljs.core.keyword_identical_QMARK_(result__34051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34051__auto__;
}
break;
}
}catch (e35295){var ex__34052__auto__ = e35295;
var statearr_35296_37752 = state_35267;
(statearr_35296_37752[(2)] = ex__34052__auto__);


if(cljs.core.seq((state_35267[(4)]))){
var statearr_35297_37753 = state_35267;
(statearr_35297_37753[(1)] = cljs.core.first((state_35267[(4)])));

} else {
throw ex__34052__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34050__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37760 = state_35267;
state_35267 = G__37760;
continue;
} else {
return ret_value__34050__auto__;
}
break;
}
});
cljs$core$async$state_machine__34049__auto__ = function(state_35267){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34049__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34049__auto____1.call(this,state_35267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34049__auto____0;
cljs$core$async$state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34049__auto____1;
return cljs$core$async$state_machine__34049__auto__;
})()
})();
var state__34406__auto__ = (function (){var statearr_35298 = f__34405__auto__();
(statearr_35298[(6)] = c__34404__auto__);

return statearr_35298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34406__auto__);
}));

return c__34404__auto__;
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
var G__35302 = arguments.length;
switch (G__35302) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_37762 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_37762(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_37763 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_37763(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_37772 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_37772(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_37773 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_37773(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35311 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35311 = (function (ch,cs,meta35312){
this.ch = ch;
this.cs = cs;
this.meta35312 = meta35312;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35313,meta35312__$1){
var self__ = this;
var _35313__$1 = this;
return (new cljs.core.async.t_cljs$core$async35311(self__.ch,self__.cs,meta35312__$1));
}));

(cljs.core.async.t_cljs$core$async35311.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35313){
var self__ = this;
var _35313__$1 = this;
return self__.meta35312;
}));

(cljs.core.async.t_cljs$core$async35311.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35311.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35311.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35311.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async35311.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async35311.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async35311.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35312","meta35312",1433310316,null)], null);
}));

(cljs.core.async.t_cljs$core$async35311.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35311.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35311");

(cljs.core.async.t_cljs$core$async35311.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35311");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35311.
 */
cljs.core.async.__GT_t_cljs$core$async35311 = (function cljs$core$async$mult_$___GT_t_cljs$core$async35311(ch__$1,cs__$1,meta35312){
return (new cljs.core.async.t_cljs$core$async35311(ch__$1,cs__$1,meta35312));
});

}

return (new cljs.core.async.t_cljs$core$async35311(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34404__auto___37784 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34405__auto__ = (function (){var switch__34048__auto__ = (function (state_35458){
var state_val_35459 = (state_35458[(1)]);
if((state_val_35459 === (7))){
var inst_35452 = (state_35458[(2)]);
var state_35458__$1 = state_35458;
var statearr_35460_37785 = state_35458__$1;
(statearr_35460_37785[(2)] = inst_35452);

(statearr_35460_37785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (20))){
var inst_35352 = (state_35458[(7)]);
var inst_35365 = cljs.core.first(inst_35352);
var inst_35366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35365,(0),null);
var inst_35367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35365,(1),null);
var state_35458__$1 = (function (){var statearr_35461 = state_35458;
(statearr_35461[(8)] = inst_35366);

return statearr_35461;
})();
if(cljs.core.truth_(inst_35367)){
var statearr_35462_37790 = state_35458__$1;
(statearr_35462_37790[(1)] = (22));

} else {
var statearr_35463_37791 = state_35458__$1;
(statearr_35463_37791[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (27))){
var inst_35395 = (state_35458[(9)]);
var inst_35319 = (state_35458[(10)]);
var inst_35402 = (state_35458[(11)]);
var inst_35397 = (state_35458[(12)]);
var inst_35402__$1 = cljs.core._nth(inst_35395,inst_35397);
var inst_35403 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35402__$1,inst_35319,done);
var state_35458__$1 = (function (){var statearr_35464 = state_35458;
(statearr_35464[(11)] = inst_35402__$1);

return statearr_35464;
})();
if(cljs.core.truth_(inst_35403)){
var statearr_35465_37792 = state_35458__$1;
(statearr_35465_37792[(1)] = (30));

} else {
var statearr_35466_37793 = state_35458__$1;
(statearr_35466_37793[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (1))){
var state_35458__$1 = state_35458;
var statearr_35468_37794 = state_35458__$1;
(statearr_35468_37794[(2)] = null);

(statearr_35468_37794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (24))){
var inst_35352 = (state_35458[(7)]);
var inst_35372 = (state_35458[(2)]);
var inst_35373 = cljs.core.next(inst_35352);
var inst_35328 = inst_35373;
var inst_35329 = null;
var inst_35330 = (0);
var inst_35331 = (0);
var state_35458__$1 = (function (){var statearr_35469 = state_35458;
(statearr_35469[(13)] = inst_35329);

(statearr_35469[(14)] = inst_35330);

(statearr_35469[(15)] = inst_35372);

(statearr_35469[(16)] = inst_35331);

(statearr_35469[(17)] = inst_35328);

return statearr_35469;
})();
var statearr_35470_37795 = state_35458__$1;
(statearr_35470_37795[(2)] = null);

(statearr_35470_37795[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (39))){
var state_35458__$1 = state_35458;
var statearr_35475_37796 = state_35458__$1;
(statearr_35475_37796[(2)] = null);

(statearr_35475_37796[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (4))){
var inst_35319 = (state_35458[(10)]);
var inst_35319__$1 = (state_35458[(2)]);
var inst_35320 = (inst_35319__$1 == null);
var state_35458__$1 = (function (){var statearr_35476 = state_35458;
(statearr_35476[(10)] = inst_35319__$1);

return statearr_35476;
})();
if(cljs.core.truth_(inst_35320)){
var statearr_35478_37797 = state_35458__$1;
(statearr_35478_37797[(1)] = (5));

} else {
var statearr_35479_37798 = state_35458__$1;
(statearr_35479_37798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (15))){
var inst_35329 = (state_35458[(13)]);
var inst_35330 = (state_35458[(14)]);
var inst_35331 = (state_35458[(16)]);
var inst_35328 = (state_35458[(17)]);
var inst_35346 = (state_35458[(2)]);
var inst_35347 = (inst_35331 + (1));
var tmp35471 = inst_35329;
var tmp35472 = inst_35330;
var tmp35473 = inst_35328;
var inst_35328__$1 = tmp35473;
var inst_35329__$1 = tmp35471;
var inst_35330__$1 = tmp35472;
var inst_35331__$1 = inst_35347;
var state_35458__$1 = (function (){var statearr_35482 = state_35458;
(statearr_35482[(18)] = inst_35346);

(statearr_35482[(13)] = inst_35329__$1);

(statearr_35482[(14)] = inst_35330__$1);

(statearr_35482[(16)] = inst_35331__$1);

(statearr_35482[(17)] = inst_35328__$1);

return statearr_35482;
})();
var statearr_35483_37799 = state_35458__$1;
(statearr_35483_37799[(2)] = null);

(statearr_35483_37799[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (21))){
var inst_35376 = (state_35458[(2)]);
var state_35458__$1 = state_35458;
var statearr_35487_37800 = state_35458__$1;
(statearr_35487_37800[(2)] = inst_35376);

(statearr_35487_37800[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (31))){
var inst_35402 = (state_35458[(11)]);
var inst_35406 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35402);
var state_35458__$1 = state_35458;
var statearr_35488_37801 = state_35458__$1;
(statearr_35488_37801[(2)] = inst_35406);

(statearr_35488_37801[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (32))){
var inst_35396 = (state_35458[(19)]);
var inst_35395 = (state_35458[(9)]);
var inst_35394 = (state_35458[(20)]);
var inst_35397 = (state_35458[(12)]);
var inst_35408 = (state_35458[(2)]);
var inst_35409 = (inst_35397 + (1));
var tmp35484 = inst_35396;
var tmp35485 = inst_35395;
var tmp35486 = inst_35394;
var inst_35394__$1 = tmp35486;
var inst_35395__$1 = tmp35485;
var inst_35396__$1 = tmp35484;
var inst_35397__$1 = inst_35409;
var state_35458__$1 = (function (){var statearr_35489 = state_35458;
(statearr_35489[(19)] = inst_35396__$1);

(statearr_35489[(21)] = inst_35408);

(statearr_35489[(9)] = inst_35395__$1);

(statearr_35489[(20)] = inst_35394__$1);

(statearr_35489[(12)] = inst_35397__$1);

return statearr_35489;
})();
var statearr_35490_37802 = state_35458__$1;
(statearr_35490_37802[(2)] = null);

(statearr_35490_37802[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (40))){
var inst_35421 = (state_35458[(22)]);
var inst_35425 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35421);
var state_35458__$1 = state_35458;
var statearr_35491_37803 = state_35458__$1;
(statearr_35491_37803[(2)] = inst_35425);

(statearr_35491_37803[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (33))){
var inst_35412 = (state_35458[(23)]);
var inst_35414 = cljs.core.chunked_seq_QMARK_(inst_35412);
var state_35458__$1 = state_35458;
if(inst_35414){
var statearr_35494_37804 = state_35458__$1;
(statearr_35494_37804[(1)] = (36));

} else {
var statearr_35495_37805 = state_35458__$1;
(statearr_35495_37805[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (13))){
var inst_35340 = (state_35458[(24)]);
var inst_35343 = cljs.core.async.close_BANG_(inst_35340);
var state_35458__$1 = state_35458;
var statearr_35496_37806 = state_35458__$1;
(statearr_35496_37806[(2)] = inst_35343);

(statearr_35496_37806[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (22))){
var inst_35366 = (state_35458[(8)]);
var inst_35369 = cljs.core.async.close_BANG_(inst_35366);
var state_35458__$1 = state_35458;
var statearr_35497_37807 = state_35458__$1;
(statearr_35497_37807[(2)] = inst_35369);

(statearr_35497_37807[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (36))){
var inst_35412 = (state_35458[(23)]);
var inst_35416 = cljs.core.chunk_first(inst_35412);
var inst_35417 = cljs.core.chunk_rest(inst_35412);
var inst_35418 = cljs.core.count(inst_35416);
var inst_35394 = inst_35417;
var inst_35395 = inst_35416;
var inst_35396 = inst_35418;
var inst_35397 = (0);
var state_35458__$1 = (function (){var statearr_35498 = state_35458;
(statearr_35498[(19)] = inst_35396);

(statearr_35498[(9)] = inst_35395);

(statearr_35498[(20)] = inst_35394);

(statearr_35498[(12)] = inst_35397);

return statearr_35498;
})();
var statearr_35499_37808 = state_35458__$1;
(statearr_35499_37808[(2)] = null);

(statearr_35499_37808[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (41))){
var inst_35412 = (state_35458[(23)]);
var inst_35427 = (state_35458[(2)]);
var inst_35428 = cljs.core.next(inst_35412);
var inst_35394 = inst_35428;
var inst_35395 = null;
var inst_35396 = (0);
var inst_35397 = (0);
var state_35458__$1 = (function (){var statearr_35500 = state_35458;
(statearr_35500[(19)] = inst_35396);

(statearr_35500[(9)] = inst_35395);

(statearr_35500[(20)] = inst_35394);

(statearr_35500[(25)] = inst_35427);

(statearr_35500[(12)] = inst_35397);

return statearr_35500;
})();
var statearr_35503_37809 = state_35458__$1;
(statearr_35503_37809[(2)] = null);

(statearr_35503_37809[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (43))){
var state_35458__$1 = state_35458;
var statearr_35504_37810 = state_35458__$1;
(statearr_35504_37810[(2)] = null);

(statearr_35504_37810[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (29))){
var inst_35436 = (state_35458[(2)]);
var state_35458__$1 = state_35458;
var statearr_35506_37811 = state_35458__$1;
(statearr_35506_37811[(2)] = inst_35436);

(statearr_35506_37811[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (44))){
var inst_35449 = (state_35458[(2)]);
var state_35458__$1 = (function (){var statearr_35507 = state_35458;
(statearr_35507[(26)] = inst_35449);

return statearr_35507;
})();
var statearr_35508_37812 = state_35458__$1;
(statearr_35508_37812[(2)] = null);

(statearr_35508_37812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (6))){
var inst_35386 = (state_35458[(27)]);
var inst_35385 = cljs.core.deref(cs);
var inst_35386__$1 = cljs.core.keys(inst_35385);
var inst_35387 = cljs.core.count(inst_35386__$1);
var inst_35388 = cljs.core.reset_BANG_(dctr,inst_35387);
var inst_35393 = cljs.core.seq(inst_35386__$1);
var inst_35394 = inst_35393;
var inst_35395 = null;
var inst_35396 = (0);
var inst_35397 = (0);
var state_35458__$1 = (function (){var statearr_35509 = state_35458;
(statearr_35509[(19)] = inst_35396);

(statearr_35509[(9)] = inst_35395);

(statearr_35509[(20)] = inst_35394);

(statearr_35509[(12)] = inst_35397);

(statearr_35509[(28)] = inst_35388);

(statearr_35509[(27)] = inst_35386__$1);

return statearr_35509;
})();
var statearr_35510_37813 = state_35458__$1;
(statearr_35510_37813[(2)] = null);

(statearr_35510_37813[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (28))){
var inst_35394 = (state_35458[(20)]);
var inst_35412 = (state_35458[(23)]);
var inst_35412__$1 = cljs.core.seq(inst_35394);
var state_35458__$1 = (function (){var statearr_35511 = state_35458;
(statearr_35511[(23)] = inst_35412__$1);

return statearr_35511;
})();
if(inst_35412__$1){
var statearr_35512_37814 = state_35458__$1;
(statearr_35512_37814[(1)] = (33));

} else {
var statearr_35513_37815 = state_35458__$1;
(statearr_35513_37815[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (25))){
var inst_35396 = (state_35458[(19)]);
var inst_35397 = (state_35458[(12)]);
var inst_35399 = (inst_35397 < inst_35396);
var inst_35400 = inst_35399;
var state_35458__$1 = state_35458;
if(cljs.core.truth_(inst_35400)){
var statearr_35515_37816 = state_35458__$1;
(statearr_35515_37816[(1)] = (27));

} else {
var statearr_35516_37817 = state_35458__$1;
(statearr_35516_37817[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (34))){
var state_35458__$1 = state_35458;
var statearr_35517_37818 = state_35458__$1;
(statearr_35517_37818[(2)] = null);

(statearr_35517_37818[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (17))){
var state_35458__$1 = state_35458;
var statearr_35518_37820 = state_35458__$1;
(statearr_35518_37820[(2)] = null);

(statearr_35518_37820[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (3))){
var inst_35454 = (state_35458[(2)]);
var state_35458__$1 = state_35458;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35458__$1,inst_35454);
} else {
if((state_val_35459 === (12))){
var inst_35381 = (state_35458[(2)]);
var state_35458__$1 = state_35458;
var statearr_35519_37821 = state_35458__$1;
(statearr_35519_37821[(2)] = inst_35381);

(statearr_35519_37821[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (2))){
var state_35458__$1 = state_35458;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35458__$1,(4),ch);
} else {
if((state_val_35459 === (23))){
var state_35458__$1 = state_35458;
var statearr_35520_37822 = state_35458__$1;
(statearr_35520_37822[(2)] = null);

(statearr_35520_37822[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (35))){
var inst_35434 = (state_35458[(2)]);
var state_35458__$1 = state_35458;
var statearr_35521_37824 = state_35458__$1;
(statearr_35521_37824[(2)] = inst_35434);

(statearr_35521_37824[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (19))){
var inst_35352 = (state_35458[(7)]);
var inst_35357 = cljs.core.chunk_first(inst_35352);
var inst_35358 = cljs.core.chunk_rest(inst_35352);
var inst_35359 = cljs.core.count(inst_35357);
var inst_35328 = inst_35358;
var inst_35329 = inst_35357;
var inst_35330 = inst_35359;
var inst_35331 = (0);
var state_35458__$1 = (function (){var statearr_35522 = state_35458;
(statearr_35522[(13)] = inst_35329);

(statearr_35522[(14)] = inst_35330);

(statearr_35522[(16)] = inst_35331);

(statearr_35522[(17)] = inst_35328);

return statearr_35522;
})();
var statearr_35523_37826 = state_35458__$1;
(statearr_35523_37826[(2)] = null);

(statearr_35523_37826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (11))){
var inst_35352 = (state_35458[(7)]);
var inst_35328 = (state_35458[(17)]);
var inst_35352__$1 = cljs.core.seq(inst_35328);
var state_35458__$1 = (function (){var statearr_35524 = state_35458;
(statearr_35524[(7)] = inst_35352__$1);

return statearr_35524;
})();
if(inst_35352__$1){
var statearr_35525_37827 = state_35458__$1;
(statearr_35525_37827[(1)] = (16));

} else {
var statearr_35526_37829 = state_35458__$1;
(statearr_35526_37829[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (9))){
var inst_35383 = (state_35458[(2)]);
var state_35458__$1 = state_35458;
var statearr_35527_37831 = state_35458__$1;
(statearr_35527_37831[(2)] = inst_35383);

(statearr_35527_37831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (5))){
var inst_35326 = cljs.core.deref(cs);
var inst_35327 = cljs.core.seq(inst_35326);
var inst_35328 = inst_35327;
var inst_35329 = null;
var inst_35330 = (0);
var inst_35331 = (0);
var state_35458__$1 = (function (){var statearr_35529 = state_35458;
(statearr_35529[(13)] = inst_35329);

(statearr_35529[(14)] = inst_35330);

(statearr_35529[(16)] = inst_35331);

(statearr_35529[(17)] = inst_35328);

return statearr_35529;
})();
var statearr_35531_37832 = state_35458__$1;
(statearr_35531_37832[(2)] = null);

(statearr_35531_37832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (14))){
var state_35458__$1 = state_35458;
var statearr_35532_37833 = state_35458__$1;
(statearr_35532_37833[(2)] = null);

(statearr_35532_37833[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (45))){
var inst_35446 = (state_35458[(2)]);
var state_35458__$1 = state_35458;
var statearr_35533_37834 = state_35458__$1;
(statearr_35533_37834[(2)] = inst_35446);

(statearr_35533_37834[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (26))){
var inst_35386 = (state_35458[(27)]);
var inst_35440 = (state_35458[(2)]);
var inst_35441 = cljs.core.seq(inst_35386);
var state_35458__$1 = (function (){var statearr_35534 = state_35458;
(statearr_35534[(29)] = inst_35440);

return statearr_35534;
})();
if(inst_35441){
var statearr_35535_37835 = state_35458__$1;
(statearr_35535_37835[(1)] = (42));

} else {
var statearr_35537_37837 = state_35458__$1;
(statearr_35537_37837[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (16))){
var inst_35352 = (state_35458[(7)]);
var inst_35355 = cljs.core.chunked_seq_QMARK_(inst_35352);
var state_35458__$1 = state_35458;
if(inst_35355){
var statearr_35538_37845 = state_35458__$1;
(statearr_35538_37845[(1)] = (19));

} else {
var statearr_35539_37846 = state_35458__$1;
(statearr_35539_37846[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (38))){
var inst_35431 = (state_35458[(2)]);
var state_35458__$1 = state_35458;
var statearr_35540_37847 = state_35458__$1;
(statearr_35540_37847[(2)] = inst_35431);

(statearr_35540_37847[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (30))){
var state_35458__$1 = state_35458;
var statearr_35541_37848 = state_35458__$1;
(statearr_35541_37848[(2)] = null);

(statearr_35541_37848[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (10))){
var inst_35329 = (state_35458[(13)]);
var inst_35331 = (state_35458[(16)]);
var inst_35339 = cljs.core._nth(inst_35329,inst_35331);
var inst_35340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35339,(0),null);
var inst_35341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35339,(1),null);
var state_35458__$1 = (function (){var statearr_35543 = state_35458;
(statearr_35543[(24)] = inst_35340);

return statearr_35543;
})();
if(cljs.core.truth_(inst_35341)){
var statearr_35544_37849 = state_35458__$1;
(statearr_35544_37849[(1)] = (13));

} else {
var statearr_35545_37850 = state_35458__$1;
(statearr_35545_37850[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (18))){
var inst_35379 = (state_35458[(2)]);
var state_35458__$1 = state_35458;
var statearr_35546_37851 = state_35458__$1;
(statearr_35546_37851[(2)] = inst_35379);

(statearr_35546_37851[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (42))){
var state_35458__$1 = state_35458;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35458__$1,(45),dchan);
} else {
if((state_val_35459 === (37))){
var inst_35319 = (state_35458[(10)]);
var inst_35412 = (state_35458[(23)]);
var inst_35421 = (state_35458[(22)]);
var inst_35421__$1 = cljs.core.first(inst_35412);
var inst_35422 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35421__$1,inst_35319,done);
var state_35458__$1 = (function (){var statearr_35547 = state_35458;
(statearr_35547[(22)] = inst_35421__$1);

return statearr_35547;
})();
if(cljs.core.truth_(inst_35422)){
var statearr_35548_37854 = state_35458__$1;
(statearr_35548_37854[(1)] = (39));

} else {
var statearr_35549_37855 = state_35458__$1;
(statearr_35549_37855[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (8))){
var inst_35330 = (state_35458[(14)]);
var inst_35331 = (state_35458[(16)]);
var inst_35333 = (inst_35331 < inst_35330);
var inst_35334 = inst_35333;
var state_35458__$1 = state_35458;
if(cljs.core.truth_(inst_35334)){
var statearr_35550_37856 = state_35458__$1;
(statearr_35550_37856[(1)] = (10));

} else {
var statearr_35551_37857 = state_35458__$1;
(statearr_35551_37857[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__34049__auto__ = null;
var cljs$core$async$mult_$_state_machine__34049__auto____0 = (function (){
var statearr_35553 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35553[(0)] = cljs$core$async$mult_$_state_machine__34049__auto__);

(statearr_35553[(1)] = (1));

return statearr_35553;
});
var cljs$core$async$mult_$_state_machine__34049__auto____1 = (function (state_35458){
while(true){
var ret_value__34050__auto__ = (function (){try{while(true){
var result__34051__auto__ = switch__34048__auto__(state_35458);
if(cljs.core.keyword_identical_QMARK_(result__34051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34051__auto__;
}
break;
}
}catch (e35554){var ex__34052__auto__ = e35554;
var statearr_35555_37860 = state_35458;
(statearr_35555_37860[(2)] = ex__34052__auto__);


if(cljs.core.seq((state_35458[(4)]))){
var statearr_35556_37861 = state_35458;
(statearr_35556_37861[(1)] = cljs.core.first((state_35458[(4)])));

} else {
throw ex__34052__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34050__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37862 = state_35458;
state_35458 = G__37862;
continue;
} else {
return ret_value__34050__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34049__auto__ = function(state_35458){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34049__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34049__auto____1.call(this,state_35458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34049__auto____0;
cljs$core$async$mult_$_state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34049__auto____1;
return cljs$core$async$mult_$_state_machine__34049__auto__;
})()
})();
var state__34406__auto__ = (function (){var statearr_35557 = f__34405__auto__();
(statearr_35557[(6)] = c__34404__auto___37784);

return statearr_35557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34406__auto__);
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
var G__35559 = arguments.length;
switch (G__35559) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_37864 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_37864(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_37865 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_37865(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_37874 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_37874(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_37882 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_37882(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_37883 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_37883(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37884 = arguments.length;
var i__5770__auto___37885 = (0);
while(true){
if((i__5770__auto___37885 < len__5769__auto___37884)){
args__5775__auto__.push((arguments[i__5770__auto___37885]));

var G__37886 = (i__5770__auto___37885 + (1));
i__5770__auto___37885 = G__37886;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35579){
var map__35580 = p__35579;
var map__35580__$1 = cljs.core.__destructure_map(map__35580);
var opts = map__35580__$1;
var statearr_35581_37893 = state;
(statearr_35581_37893[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35583_37894 = state;
(statearr_35583_37894[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_35584_37895 = state;
(statearr_35584_37895[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35574){
var G__35575 = cljs.core.first(seq35574);
var seq35574__$1 = cljs.core.next(seq35574);
var G__35576 = cljs.core.first(seq35574__$1);
var seq35574__$2 = cljs.core.next(seq35574__$1);
var G__35577 = cljs.core.first(seq35574__$2);
var seq35574__$3 = cljs.core.next(seq35574__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35575,G__35576,G__35577,seq35574__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35587 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35587 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35588){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35588 = meta35588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35589,meta35588__$1){
var self__ = this;
var _35589__$1 = this;
return (new cljs.core.async.t_cljs$core$async35587(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35588__$1));
}));

(cljs.core.async.t_cljs$core$async35587.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35589){
var self__ = this;
var _35589__$1 = this;
return self__.meta35588;
}));

(cljs.core.async.t_cljs$core$async35587.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35587.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35587.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35587.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35587.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35587.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35587.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35587.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35587.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35588","meta35588",1931943279,null)], null);
}));

(cljs.core.async.t_cljs$core$async35587.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35587.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35587");

(cljs.core.async.t_cljs$core$async35587.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35587");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35587.
 */
cljs.core.async.__GT_t_cljs$core$async35587 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35587(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35588){
return (new cljs.core.async.t_cljs$core$async35587(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35588));
});

}

return (new cljs.core.async.t_cljs$core$async35587(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34404__auto___37944 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34405__auto__ = (function (){var switch__34048__auto__ = (function (state_35670){
var state_val_35671 = (state_35670[(1)]);
if((state_val_35671 === (7))){
var inst_35627 = (state_35670[(2)]);
var state_35670__$1 = state_35670;
if(cljs.core.truth_(inst_35627)){
var statearr_35675_37945 = state_35670__$1;
(statearr_35675_37945[(1)] = (8));

} else {
var statearr_35677_37948 = state_35670__$1;
(statearr_35677_37948[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (20))){
var inst_35620 = (state_35670[(7)]);
var state_35670__$1 = state_35670;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35670__$1,(23),out,inst_35620);
} else {
if((state_val_35671 === (1))){
var inst_35603 = calc_state();
var inst_35604 = cljs.core.__destructure_map(inst_35603);
var inst_35605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35604,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35604,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35604,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35608 = inst_35603;
var state_35670__$1 = (function (){var statearr_35679 = state_35670;
(statearr_35679[(8)] = inst_35605);

(statearr_35679[(9)] = inst_35608);

(statearr_35679[(10)] = inst_35606);

(statearr_35679[(11)] = inst_35607);

return statearr_35679;
})();
var statearr_35680_37950 = state_35670__$1;
(statearr_35680_37950[(2)] = null);

(statearr_35680_37950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (24))){
var inst_35611 = (state_35670[(12)]);
var inst_35608 = inst_35611;
var state_35670__$1 = (function (){var statearr_35681 = state_35670;
(statearr_35681[(9)] = inst_35608);

return statearr_35681;
})();
var statearr_35682_37952 = state_35670__$1;
(statearr_35682_37952[(2)] = null);

(statearr_35682_37952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (4))){
var inst_35620 = (state_35670[(7)]);
var inst_35622 = (state_35670[(13)]);
var inst_35619 = (state_35670[(2)]);
var inst_35620__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35619,(0),null);
var inst_35621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35619,(1),null);
var inst_35622__$1 = (inst_35620__$1 == null);
var state_35670__$1 = (function (){var statearr_35686 = state_35670;
(statearr_35686[(14)] = inst_35621);

(statearr_35686[(7)] = inst_35620__$1);

(statearr_35686[(13)] = inst_35622__$1);

return statearr_35686;
})();
if(cljs.core.truth_(inst_35622__$1)){
var statearr_35687_37957 = state_35670__$1;
(statearr_35687_37957[(1)] = (5));

} else {
var statearr_35688_37958 = state_35670__$1;
(statearr_35688_37958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (15))){
var inst_35641 = (state_35670[(15)]);
var inst_35612 = (state_35670[(16)]);
var inst_35641__$1 = cljs.core.empty_QMARK_(inst_35612);
var state_35670__$1 = (function (){var statearr_35690 = state_35670;
(statearr_35690[(15)] = inst_35641__$1);

return statearr_35690;
})();
if(inst_35641__$1){
var statearr_35691_37959 = state_35670__$1;
(statearr_35691_37959[(1)] = (17));

} else {
var statearr_35692_37960 = state_35670__$1;
(statearr_35692_37960[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (21))){
var inst_35611 = (state_35670[(12)]);
var inst_35608 = inst_35611;
var state_35670__$1 = (function (){var statearr_35695 = state_35670;
(statearr_35695[(9)] = inst_35608);

return statearr_35695;
})();
var statearr_35697_37961 = state_35670__$1;
(statearr_35697_37961[(2)] = null);

(statearr_35697_37961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (13))){
var inst_35634 = (state_35670[(2)]);
var inst_35635 = calc_state();
var inst_35608 = inst_35635;
var state_35670__$1 = (function (){var statearr_35698 = state_35670;
(statearr_35698[(17)] = inst_35634);

(statearr_35698[(9)] = inst_35608);

return statearr_35698;
})();
var statearr_35699_37962 = state_35670__$1;
(statearr_35699_37962[(2)] = null);

(statearr_35699_37962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (22))){
var inst_35664 = (state_35670[(2)]);
var state_35670__$1 = state_35670;
var statearr_35702_37963 = state_35670__$1;
(statearr_35702_37963[(2)] = inst_35664);

(statearr_35702_37963[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (6))){
var inst_35621 = (state_35670[(14)]);
var inst_35625 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35621,change);
var state_35670__$1 = state_35670;
var statearr_35703_37969 = state_35670__$1;
(statearr_35703_37969[(2)] = inst_35625);

(statearr_35703_37969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (25))){
var state_35670__$1 = state_35670;
var statearr_35704_37971 = state_35670__$1;
(statearr_35704_37971[(2)] = null);

(statearr_35704_37971[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (17))){
var inst_35613 = (state_35670[(18)]);
var inst_35621 = (state_35670[(14)]);
var inst_35644 = (inst_35613.cljs$core$IFn$_invoke$arity$1 ? inst_35613.cljs$core$IFn$_invoke$arity$1(inst_35621) : inst_35613.call(null,inst_35621));
var inst_35646 = cljs.core.not(inst_35644);
var state_35670__$1 = state_35670;
var statearr_35708_37973 = state_35670__$1;
(statearr_35708_37973[(2)] = inst_35646);

(statearr_35708_37973[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (3))){
var inst_35668 = (state_35670[(2)]);
var state_35670__$1 = state_35670;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35670__$1,inst_35668);
} else {
if((state_val_35671 === (12))){
var state_35670__$1 = state_35670;
var statearr_35709_37974 = state_35670__$1;
(statearr_35709_37974[(2)] = null);

(statearr_35709_37974[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (2))){
var inst_35608 = (state_35670[(9)]);
var inst_35611 = (state_35670[(12)]);
var inst_35611__$1 = cljs.core.__destructure_map(inst_35608);
var inst_35612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35611__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35611__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35611__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35670__$1 = (function (){var statearr_35712 = state_35670;
(statearr_35712[(18)] = inst_35613);

(statearr_35712[(16)] = inst_35612);

(statearr_35712[(12)] = inst_35611__$1);

return statearr_35712;
})();
return cljs.core.async.ioc_alts_BANG_(state_35670__$1,(4),inst_35614);
} else {
if((state_val_35671 === (23))){
var inst_35654 = (state_35670[(2)]);
var state_35670__$1 = state_35670;
if(cljs.core.truth_(inst_35654)){
var statearr_35713_37977 = state_35670__$1;
(statearr_35713_37977[(1)] = (24));

} else {
var statearr_35714_37978 = state_35670__$1;
(statearr_35714_37978[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (19))){
var inst_35649 = (state_35670[(2)]);
var state_35670__$1 = state_35670;
var statearr_35716_37981 = state_35670__$1;
(statearr_35716_37981[(2)] = inst_35649);

(statearr_35716_37981[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (11))){
var inst_35621 = (state_35670[(14)]);
var inst_35631 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35621);
var state_35670__$1 = state_35670;
var statearr_35717_37985 = state_35670__$1;
(statearr_35717_37985[(2)] = inst_35631);

(statearr_35717_37985[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (9))){
var inst_35638 = (state_35670[(19)]);
var inst_35612 = (state_35670[(16)]);
var inst_35621 = (state_35670[(14)]);
var inst_35638__$1 = (inst_35612.cljs$core$IFn$_invoke$arity$1 ? inst_35612.cljs$core$IFn$_invoke$arity$1(inst_35621) : inst_35612.call(null,inst_35621));
var state_35670__$1 = (function (){var statearr_35718 = state_35670;
(statearr_35718[(19)] = inst_35638__$1);

return statearr_35718;
})();
if(cljs.core.truth_(inst_35638__$1)){
var statearr_35719_37987 = state_35670__$1;
(statearr_35719_37987[(1)] = (14));

} else {
var statearr_35721_37988 = state_35670__$1;
(statearr_35721_37988[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (5))){
var inst_35622 = (state_35670[(13)]);
var state_35670__$1 = state_35670;
var statearr_35722_37989 = state_35670__$1;
(statearr_35722_37989[(2)] = inst_35622);

(statearr_35722_37989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (14))){
var inst_35638 = (state_35670[(19)]);
var state_35670__$1 = state_35670;
var statearr_35723_37990 = state_35670__$1;
(statearr_35723_37990[(2)] = inst_35638);

(statearr_35723_37990[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (26))){
var inst_35660 = (state_35670[(2)]);
var state_35670__$1 = state_35670;
var statearr_35724_37991 = state_35670__$1;
(statearr_35724_37991[(2)] = inst_35660);

(statearr_35724_37991[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (16))){
var inst_35651 = (state_35670[(2)]);
var state_35670__$1 = state_35670;
if(cljs.core.truth_(inst_35651)){
var statearr_35760_37992 = state_35670__$1;
(statearr_35760_37992[(1)] = (20));

} else {
var statearr_35761_37993 = state_35670__$1;
(statearr_35761_37993[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (10))){
var inst_35666 = (state_35670[(2)]);
var state_35670__$1 = state_35670;
var statearr_35762_37994 = state_35670__$1;
(statearr_35762_37994[(2)] = inst_35666);

(statearr_35762_37994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (18))){
var inst_35641 = (state_35670[(15)]);
var state_35670__$1 = state_35670;
var statearr_35765_37995 = state_35670__$1;
(statearr_35765_37995[(2)] = inst_35641);

(statearr_35765_37995[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (8))){
var inst_35620 = (state_35670[(7)]);
var inst_35629 = (inst_35620 == null);
var state_35670__$1 = state_35670;
if(cljs.core.truth_(inst_35629)){
var statearr_35769_37996 = state_35670__$1;
(statearr_35769_37996[(1)] = (11));

} else {
var statearr_35770_37997 = state_35670__$1;
(statearr_35770_37997[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__34049__auto__ = null;
var cljs$core$async$mix_$_state_machine__34049__auto____0 = (function (){
var statearr_35772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35772[(0)] = cljs$core$async$mix_$_state_machine__34049__auto__);

(statearr_35772[(1)] = (1));

return statearr_35772;
});
var cljs$core$async$mix_$_state_machine__34049__auto____1 = (function (state_35670){
while(true){
var ret_value__34050__auto__ = (function (){try{while(true){
var result__34051__auto__ = switch__34048__auto__(state_35670);
if(cljs.core.keyword_identical_QMARK_(result__34051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34051__auto__;
}
break;
}
}catch (e35776){var ex__34052__auto__ = e35776;
var statearr_35777_38042 = state_35670;
(statearr_35777_38042[(2)] = ex__34052__auto__);


if(cljs.core.seq((state_35670[(4)]))){
var statearr_35778_38043 = state_35670;
(statearr_35778_38043[(1)] = cljs.core.first((state_35670[(4)])));

} else {
throw ex__34052__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34050__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38059 = state_35670;
state_35670 = G__38059;
continue;
} else {
return ret_value__34050__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34049__auto__ = function(state_35670){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34049__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34049__auto____1.call(this,state_35670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34049__auto____0;
cljs$core$async$mix_$_state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34049__auto____1;
return cljs$core$async$mix_$_state_machine__34049__auto__;
})()
})();
var state__34406__auto__ = (function (){var statearr_35779 = f__34405__auto__();
(statearr_35779[(6)] = c__34404__auto___37944);

return statearr_35779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34406__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_38066 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_38066(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_38072 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_38072(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_38080 = (function() {
var G__38081 = null;
var G__38081__1 = (function (p){
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
var G__38081__2 = (function (p,v){
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
G__38081 = function(p,v){
switch(arguments.length){
case 1:
return G__38081__1.call(this,p);
case 2:
return G__38081__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__38081.cljs$core$IFn$_invoke$arity$1 = G__38081__1;
G__38081.cljs$core$IFn$_invoke$arity$2 = G__38081__2;
return G__38081;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35818 = arguments.length;
switch (G__35818) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_38080(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_38080(p,v);
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
var G__35827 = arguments.length;
switch (G__35827) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35825_SHARP_){
if(cljs.core.truth_((p1__35825_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35825_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35825_SHARP_.call(null,topic)))){
return p1__35825_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35825_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35837 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35837 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35838){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35838 = meta35838;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35839,meta35838__$1){
var self__ = this;
var _35839__$1 = this;
return (new cljs.core.async.t_cljs$core$async35837(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35838__$1));
}));

(cljs.core.async.t_cljs$core$async35837.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35839){
var self__ = this;
var _35839__$1 = this;
return self__.meta35838;
}));

(cljs.core.async.t_cljs$core$async35837.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35837.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35837.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35837.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35837.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35837.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35837.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35837.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35838","meta35838",-626629481,null)], null);
}));

(cljs.core.async.t_cljs$core$async35837.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35837.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35837");

(cljs.core.async.t_cljs$core$async35837.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35837");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35837.
 */
cljs.core.async.__GT_t_cljs$core$async35837 = (function cljs$core$async$__GT_t_cljs$core$async35837(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35838){
return (new cljs.core.async.t_cljs$core$async35837(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35838));
});

}

return (new cljs.core.async.t_cljs$core$async35837(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34404__auto___38109 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34405__auto__ = (function (){var switch__34048__auto__ = (function (state_35981){
var state_val_35982 = (state_35981[(1)]);
if((state_val_35982 === (7))){
var inst_35977 = (state_35981[(2)]);
var state_35981__$1 = state_35981;
var statearr_35983_38110 = state_35981__$1;
(statearr_35983_38110[(2)] = inst_35977);

(statearr_35983_38110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35982 === (20))){
var state_35981__$1 = state_35981;
var statearr_35984_38111 = state_35981__$1;
(statearr_35984_38111[(2)] = null);

(statearr_35984_38111[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35982 === (1))){
var state_35981__$1 = state_35981;
var statearr_35985_38112 = state_35981__$1;
(statearr_35985_38112[(2)] = null);

(statearr_35985_38112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35982 === (24))){
var inst_35960 = (state_35981[(7)]);
var inst_35969 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35960);
var state_35981__$1 = state_35981;
var statearr_35986_38113 = state_35981__$1;
(statearr_35986_38113[(2)] = inst_35969);

(statearr_35986_38113[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35982 === (4))){
var inst_35879 = (state_35981[(8)]);
var inst_35879__$1 = (state_35981[(2)]);
var inst_35880 = (inst_35879__$1 == null);
var state_35981__$1 = (function (){var statearr_35987 = state_35981;
(statearr_35987[(8)] = inst_35879__$1);

return statearr_35987;
})();
if(cljs.core.truth_(inst_35880)){
var statearr_35988_38114 = state_35981__$1;
(statearr_35988_38114[(1)] = (5));

} else {
var statearr_35989_38115 = state_35981__$1;
(statearr_35989_38115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35982 === (15))){
var inst_35954 = (state_35981[(2)]);
var state_35981__$1 = state_35981;
var statearr_35992_38116 = state_35981__$1;
(statearr_35992_38116[(2)] = inst_35954);

(statearr_35992_38116[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35982 === (21))){
var inst_35974 = (state_35981[(2)]);
var state_35981__$1 = (function (){var statearr_35994 = state_35981;
(statearr_35994[(9)] = inst_35974);

return statearr_35994;
})();
var statearr_35995_38117 = state_35981__$1;
(statearr_35995_38117[(2)] = null);

(statearr_35995_38117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35982 === (13))){
var inst_35924 = (state_35981[(10)]);
var inst_35933 = cljs.core.chunked_seq_QMARK_(inst_35924);
var state_35981__$1 = state_35981;
if(inst_35933){
var statearr_35996_38124 = state_35981__$1;
(statearr_35996_38124[(1)] = (16));

} else {
var statearr_35997_38125 = state_35981__$1;
(statearr_35997_38125[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35982 === (22))){
var inst_35966 = (state_35981[(2)]);
var state_35981__$1 = state_35981;
if(cljs.core.truth_(inst_35966)){
var statearr_35998_38126 = state_35981__$1;
(statearr_35998_38126[(1)] = (23));

} else {
var statearr_35999_38127 = state_35981__$1;
(statearr_35999_38127[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35982 === (6))){
var inst_35879 = (state_35981[(8)]);
var inst_35960 = (state_35981[(7)]);
var inst_35962 = (state_35981[(11)]);
var inst_35960__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35879) : topic_fn.call(null,inst_35879));
var inst_35961 = cljs.core.deref(mults);
var inst_35962__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35961,inst_35960__$1);
var state_35981__$1 = (function (){var statearr_36000 = state_35981;
(statearr_36000[(7)] = inst_35960__$1);

(statearr_36000[(11)] = inst_35962__$1);

return statearr_36000;
})();
if(cljs.core.truth_(inst_35962__$1)){
var statearr_36001_38164 = state_35981__$1;
(statearr_36001_38164[(1)] = (19));

} else {
var statearr_36002_38165 = state_35981__$1;
(statearr_36002_38165[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35982 === (25))){
var inst_35971 = (state_35981[(2)]);
var state_35981__$1 = state_35981;
var statearr_36008_38167 = state_35981__$1;
(statearr_36008_38167[(2)] = inst_35971);

(statearr_36008_38167[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35982 === (17))){
var inst_35924 = (state_35981[(10)]);
var inst_35945 = cljs.core.first(inst_35924);
var inst_35946 = cljs.core.async.muxch_STAR_(inst_35945);
var inst_35947 = cljs.core.async.close_BANG_(inst_35946);
var inst_35948 = cljs.core.next(inst_35924);
var inst_35890 = inst_35948;
var inst_35891 = null;
var inst_35892 = (0);
var inst_35893 = (0);
var state_35981__$1 = (function (){var statearr_36009 = state_35981;
(statearr_36009[(12)] = inst_35892);

(statearr_36009[(13)] = inst_35947);

(statearr_36009[(14)] = inst_35891);

(statearr_36009[(15)] = inst_35890);

(statearr_36009[(16)] = inst_35893);

return statearr_36009;
})();
var statearr_36010_38168 = state_35981__$1;
(statearr_36010_38168[(2)] = null);

(statearr_36010_38168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35982 === (3))){
var inst_35979 = (state_35981[(2)]);
var state_35981__$1 = state_35981;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35981__$1,inst_35979);
} else {
if((state_val_35982 === (12))){
var inst_35956 = (state_35981[(2)]);
var state_35981__$1 = state_35981;
var statearr_36011_38171 = state_35981__$1;
(statearr_36011_38171[(2)] = inst_35956);

(statearr_36011_38171[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35982 === (2))){
var state_35981__$1 = state_35981;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35981__$1,(4),ch);
} else {
if((state_val_35982 === (23))){
var state_35981__$1 = state_35981;
var statearr_36036_38172 = state_35981__$1;
(statearr_36036_38172[(2)] = null);

(statearr_36036_38172[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35982 === (19))){
var inst_35879 = (state_35981[(8)]);
var inst_35962 = (state_35981[(11)]);
var inst_35964 = cljs.core.async.muxch_STAR_(inst_35962);
var state_35981__$1 = state_35981;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35981__$1,(22),inst_35964,inst_35879);
} else {
if((state_val_35982 === (11))){
var inst_35890 = (state_35981[(15)]);
var inst_35924 = (state_35981[(10)]);
var inst_35924__$1 = cljs.core.seq(inst_35890);
var state_35981__$1 = (function (){var statearr_36046 = state_35981;
(statearr_36046[(10)] = inst_35924__$1);

return statearr_36046;
})();
if(inst_35924__$1){
var statearr_36050_38176 = state_35981__$1;
(statearr_36050_38176[(1)] = (13));

} else {
var statearr_36051_38182 = state_35981__$1;
(statearr_36051_38182[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35982 === (9))){
var inst_35958 = (state_35981[(2)]);
var state_35981__$1 = state_35981;
var statearr_36052_38190 = state_35981__$1;
(statearr_36052_38190[(2)] = inst_35958);

(statearr_36052_38190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35982 === (5))){
var inst_35887 = cljs.core.deref(mults);
var inst_35888 = cljs.core.vals(inst_35887);
var inst_35889 = cljs.core.seq(inst_35888);
var inst_35890 = inst_35889;
var inst_35891 = null;
var inst_35892 = (0);
var inst_35893 = (0);
var state_35981__$1 = (function (){var statearr_36053 = state_35981;
(statearr_36053[(12)] = inst_35892);

(statearr_36053[(14)] = inst_35891);

(statearr_36053[(15)] = inst_35890);

(statearr_36053[(16)] = inst_35893);

return statearr_36053;
})();
var statearr_36054_38199 = state_35981__$1;
(statearr_36054_38199[(2)] = null);

(statearr_36054_38199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35982 === (14))){
var state_35981__$1 = state_35981;
var statearr_36058_38200 = state_35981__$1;
(statearr_36058_38200[(2)] = null);

(statearr_36058_38200[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35982 === (16))){
var inst_35924 = (state_35981[(10)]);
var inst_35940 = cljs.core.chunk_first(inst_35924);
var inst_35941 = cljs.core.chunk_rest(inst_35924);
var inst_35942 = cljs.core.count(inst_35940);
var inst_35890 = inst_35941;
var inst_35891 = inst_35940;
var inst_35892 = inst_35942;
var inst_35893 = (0);
var state_35981__$1 = (function (){var statearr_36063 = state_35981;
(statearr_36063[(12)] = inst_35892);

(statearr_36063[(14)] = inst_35891);

(statearr_36063[(15)] = inst_35890);

(statearr_36063[(16)] = inst_35893);

return statearr_36063;
})();
var statearr_36064_38201 = state_35981__$1;
(statearr_36064_38201[(2)] = null);

(statearr_36064_38201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35982 === (10))){
var inst_35892 = (state_35981[(12)]);
var inst_35891 = (state_35981[(14)]);
var inst_35890 = (state_35981[(15)]);
var inst_35893 = (state_35981[(16)]);
var inst_35898 = cljs.core._nth(inst_35891,inst_35893);
var inst_35903 = cljs.core.async.muxch_STAR_(inst_35898);
var inst_35904 = cljs.core.async.close_BANG_(inst_35903);
var inst_35909 = (inst_35893 + (1));
var tmp36055 = inst_35892;
var tmp36056 = inst_35891;
var tmp36057 = inst_35890;
var inst_35890__$1 = tmp36057;
var inst_35891__$1 = tmp36056;
var inst_35892__$1 = tmp36055;
var inst_35893__$1 = inst_35909;
var state_35981__$1 = (function (){var statearr_36069 = state_35981;
(statearr_36069[(12)] = inst_35892__$1);

(statearr_36069[(14)] = inst_35891__$1);

(statearr_36069[(15)] = inst_35890__$1);

(statearr_36069[(16)] = inst_35893__$1);

(statearr_36069[(17)] = inst_35904);

return statearr_36069;
})();
var statearr_36070_38228 = state_35981__$1;
(statearr_36070_38228[(2)] = null);

(statearr_36070_38228[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35982 === (18))){
var inst_35951 = (state_35981[(2)]);
var state_35981__$1 = state_35981;
var statearr_36071_38229 = state_35981__$1;
(statearr_36071_38229[(2)] = inst_35951);

(statearr_36071_38229[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35982 === (8))){
var inst_35892 = (state_35981[(12)]);
var inst_35893 = (state_35981[(16)]);
var inst_35895 = (inst_35893 < inst_35892);
var inst_35896 = inst_35895;
var state_35981__$1 = state_35981;
if(cljs.core.truth_(inst_35896)){
var statearr_36072_38230 = state_35981__$1;
(statearr_36072_38230[(1)] = (10));

} else {
var statearr_36073_38232 = state_35981__$1;
(statearr_36073_38232[(1)] = (11));

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
var cljs$core$async$state_machine__34049__auto__ = null;
var cljs$core$async$state_machine__34049__auto____0 = (function (){
var statearr_36074 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36074[(0)] = cljs$core$async$state_machine__34049__auto__);

(statearr_36074[(1)] = (1));

return statearr_36074;
});
var cljs$core$async$state_machine__34049__auto____1 = (function (state_35981){
while(true){
var ret_value__34050__auto__ = (function (){try{while(true){
var result__34051__auto__ = switch__34048__auto__(state_35981);
if(cljs.core.keyword_identical_QMARK_(result__34051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34051__auto__;
}
break;
}
}catch (e36079){var ex__34052__auto__ = e36079;
var statearr_36080_38236 = state_35981;
(statearr_36080_38236[(2)] = ex__34052__auto__);


if(cljs.core.seq((state_35981[(4)]))){
var statearr_36081_38239 = state_35981;
(statearr_36081_38239[(1)] = cljs.core.first((state_35981[(4)])));

} else {
throw ex__34052__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34050__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38241 = state_35981;
state_35981 = G__38241;
continue;
} else {
return ret_value__34050__auto__;
}
break;
}
});
cljs$core$async$state_machine__34049__auto__ = function(state_35981){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34049__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34049__auto____1.call(this,state_35981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34049__auto____0;
cljs$core$async$state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34049__auto____1;
return cljs$core$async$state_machine__34049__auto__;
})()
})();
var state__34406__auto__ = (function (){var statearr_36082 = f__34405__auto__();
(statearr_36082[(6)] = c__34404__auto___38109);

return statearr_36082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34406__auto__);
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
var G__36084 = arguments.length;
switch (G__36084) {
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
var G__36099 = arguments.length;
switch (G__36099) {
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
var G__36102 = arguments.length;
switch (G__36102) {
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
var c__34404__auto___38248 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34405__auto__ = (function (){var switch__34048__auto__ = (function (state_36145){
var state_val_36149 = (state_36145[(1)]);
if((state_val_36149 === (7))){
var state_36145__$1 = state_36145;
var statearr_36150_38249 = state_36145__$1;
(statearr_36150_38249[(2)] = null);

(statearr_36150_38249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36149 === (1))){
var state_36145__$1 = state_36145;
var statearr_36157_38250 = state_36145__$1;
(statearr_36157_38250[(2)] = null);

(statearr_36157_38250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36149 === (4))){
var inst_36106 = (state_36145[(7)]);
var inst_36105 = (state_36145[(8)]);
var inst_36108 = (inst_36106 < inst_36105);
var state_36145__$1 = state_36145;
if(cljs.core.truth_(inst_36108)){
var statearr_36162_38252 = state_36145__$1;
(statearr_36162_38252[(1)] = (6));

} else {
var statearr_36163_38253 = state_36145__$1;
(statearr_36163_38253[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36149 === (15))){
var inst_36131 = (state_36145[(9)]);
var inst_36136 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36131);
var state_36145__$1 = state_36145;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36145__$1,(17),out,inst_36136);
} else {
if((state_val_36149 === (13))){
var inst_36131 = (state_36145[(9)]);
var inst_36131__$1 = (state_36145[(2)]);
var inst_36132 = cljs.core.some(cljs.core.nil_QMARK_,inst_36131__$1);
var state_36145__$1 = (function (){var statearr_36164 = state_36145;
(statearr_36164[(9)] = inst_36131__$1);

return statearr_36164;
})();
if(cljs.core.truth_(inst_36132)){
var statearr_36165_38258 = state_36145__$1;
(statearr_36165_38258[(1)] = (14));

} else {
var statearr_36166_38259 = state_36145__$1;
(statearr_36166_38259[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36149 === (6))){
var state_36145__$1 = state_36145;
var statearr_36167_38260 = state_36145__$1;
(statearr_36167_38260[(2)] = null);

(statearr_36167_38260[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36149 === (17))){
var inst_36138 = (state_36145[(2)]);
var state_36145__$1 = (function (){var statearr_36170 = state_36145;
(statearr_36170[(10)] = inst_36138);

return statearr_36170;
})();
var statearr_36171_38261 = state_36145__$1;
(statearr_36171_38261[(2)] = null);

(statearr_36171_38261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36149 === (3))){
var inst_36143 = (state_36145[(2)]);
var state_36145__$1 = state_36145;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36145__$1,inst_36143);
} else {
if((state_val_36149 === (12))){
var _ = (function (){var statearr_36173 = state_36145;
(statearr_36173[(4)] = cljs.core.rest((state_36145[(4)])));

return statearr_36173;
})();
var state_36145__$1 = state_36145;
var ex36169 = (state_36145__$1[(2)]);
var statearr_36174_38262 = state_36145__$1;
(statearr_36174_38262[(5)] = ex36169);


if((ex36169 instanceof Object)){
var statearr_36175_38263 = state_36145__$1;
(statearr_36175_38263[(1)] = (11));

(statearr_36175_38263[(5)] = null);

} else {
throw ex36169;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36149 === (2))){
var inst_36104 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36105 = cnt;
var inst_36106 = (0);
var state_36145__$1 = (function (){var statearr_36176 = state_36145;
(statearr_36176[(7)] = inst_36106);

(statearr_36176[(8)] = inst_36105);

(statearr_36176[(11)] = inst_36104);

return statearr_36176;
})();
var statearr_36178_38264 = state_36145__$1;
(statearr_36178_38264[(2)] = null);

(statearr_36178_38264[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36149 === (11))){
var inst_36110 = (state_36145[(2)]);
var inst_36111 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36145__$1 = (function (){var statearr_36179 = state_36145;
(statearr_36179[(12)] = inst_36110);

return statearr_36179;
})();
var statearr_36180_38265 = state_36145__$1;
(statearr_36180_38265[(2)] = inst_36111);

(statearr_36180_38265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36149 === (9))){
var inst_36106 = (state_36145[(7)]);
var _ = (function (){var statearr_36181 = state_36145;
(statearr_36181[(4)] = cljs.core.cons((12),(state_36145[(4)])));

return statearr_36181;
})();
var inst_36117 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36106) : chs__$1.call(null,inst_36106));
var inst_36118 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36106) : done.call(null,inst_36106));
var inst_36119 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36117,inst_36118);
var ___$1 = (function (){var statearr_36182 = state_36145;
(statearr_36182[(4)] = cljs.core.rest((state_36145[(4)])));

return statearr_36182;
})();
var state_36145__$1 = state_36145;
var statearr_36183_38268 = state_36145__$1;
(statearr_36183_38268[(2)] = inst_36119);

(statearr_36183_38268[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36149 === (5))){
var inst_36129 = (state_36145[(2)]);
var state_36145__$1 = (function (){var statearr_36184 = state_36145;
(statearr_36184[(13)] = inst_36129);

return statearr_36184;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36145__$1,(13),dchan);
} else {
if((state_val_36149 === (14))){
var inst_36134 = cljs.core.async.close_BANG_(out);
var state_36145__$1 = state_36145;
var statearr_36185_38270 = state_36145__$1;
(statearr_36185_38270[(2)] = inst_36134);

(statearr_36185_38270[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36149 === (16))){
var inst_36141 = (state_36145[(2)]);
var state_36145__$1 = state_36145;
var statearr_36187_38271 = state_36145__$1;
(statearr_36187_38271[(2)] = inst_36141);

(statearr_36187_38271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36149 === (10))){
var inst_36106 = (state_36145[(7)]);
var inst_36122 = (state_36145[(2)]);
var inst_36123 = (inst_36106 + (1));
var inst_36106__$1 = inst_36123;
var state_36145__$1 = (function (){var statearr_36188 = state_36145;
(statearr_36188[(14)] = inst_36122);

(statearr_36188[(7)] = inst_36106__$1);

return statearr_36188;
})();
var statearr_36189_38273 = state_36145__$1;
(statearr_36189_38273[(2)] = null);

(statearr_36189_38273[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36149 === (8))){
var inst_36127 = (state_36145[(2)]);
var state_36145__$1 = state_36145;
var statearr_36190_38274 = state_36145__$1;
(statearr_36190_38274[(2)] = inst_36127);

(statearr_36190_38274[(1)] = (5));


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
var cljs$core$async$state_machine__34049__auto__ = null;
var cljs$core$async$state_machine__34049__auto____0 = (function (){
var statearr_36191 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36191[(0)] = cljs$core$async$state_machine__34049__auto__);

(statearr_36191[(1)] = (1));

return statearr_36191;
});
var cljs$core$async$state_machine__34049__auto____1 = (function (state_36145){
while(true){
var ret_value__34050__auto__ = (function (){try{while(true){
var result__34051__auto__ = switch__34048__auto__(state_36145);
if(cljs.core.keyword_identical_QMARK_(result__34051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34051__auto__;
}
break;
}
}catch (e36192){var ex__34052__auto__ = e36192;
var statearr_36193_38276 = state_36145;
(statearr_36193_38276[(2)] = ex__34052__auto__);


if(cljs.core.seq((state_36145[(4)]))){
var statearr_36194_38277 = state_36145;
(statearr_36194_38277[(1)] = cljs.core.first((state_36145[(4)])));

} else {
throw ex__34052__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34050__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38279 = state_36145;
state_36145 = G__38279;
continue;
} else {
return ret_value__34050__auto__;
}
break;
}
});
cljs$core$async$state_machine__34049__auto__ = function(state_36145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34049__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34049__auto____1.call(this,state_36145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34049__auto____0;
cljs$core$async$state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34049__auto____1;
return cljs$core$async$state_machine__34049__auto__;
})()
})();
var state__34406__auto__ = (function (){var statearr_36196 = f__34405__auto__();
(statearr_36196[(6)] = c__34404__auto___38248);

return statearr_36196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34406__auto__);
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
var G__36199 = arguments.length;
switch (G__36199) {
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
var c__34404__auto___38296 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34405__auto__ = (function (){var switch__34048__auto__ = (function (state_36237){
var state_val_36238 = (state_36237[(1)]);
if((state_val_36238 === (7))){
var inst_36212 = (state_36237[(7)]);
var inst_36211 = (state_36237[(8)]);
var inst_36211__$1 = (state_36237[(2)]);
var inst_36212__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36211__$1,(0),null);
var inst_36213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36211__$1,(1),null);
var inst_36214 = (inst_36212__$1 == null);
var state_36237__$1 = (function (){var statearr_36246 = state_36237;
(statearr_36246[(7)] = inst_36212__$1);

(statearr_36246[(8)] = inst_36211__$1);

(statearr_36246[(9)] = inst_36213);

return statearr_36246;
})();
if(cljs.core.truth_(inst_36214)){
var statearr_36247_38297 = state_36237__$1;
(statearr_36247_38297[(1)] = (8));

} else {
var statearr_36248_38298 = state_36237__$1;
(statearr_36248_38298[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (1))){
var inst_36201 = cljs.core.vec(chs);
var inst_36202 = inst_36201;
var state_36237__$1 = (function (){var statearr_36249 = state_36237;
(statearr_36249[(10)] = inst_36202);

return statearr_36249;
})();
var statearr_36250_38303 = state_36237__$1;
(statearr_36250_38303[(2)] = null);

(statearr_36250_38303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (4))){
var inst_36202 = (state_36237[(10)]);
var state_36237__$1 = state_36237;
return cljs.core.async.ioc_alts_BANG_(state_36237__$1,(7),inst_36202);
} else {
if((state_val_36238 === (6))){
var inst_36230 = (state_36237[(2)]);
var state_36237__$1 = state_36237;
var statearr_36251_38312 = state_36237__$1;
(statearr_36251_38312[(2)] = inst_36230);

(statearr_36251_38312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (3))){
var inst_36232 = (state_36237[(2)]);
var state_36237__$1 = state_36237;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36237__$1,inst_36232);
} else {
if((state_val_36238 === (2))){
var inst_36202 = (state_36237[(10)]);
var inst_36204 = cljs.core.count(inst_36202);
var inst_36205 = (inst_36204 > (0));
var state_36237__$1 = state_36237;
if(cljs.core.truth_(inst_36205)){
var statearr_36253_38313 = state_36237__$1;
(statearr_36253_38313[(1)] = (4));

} else {
var statearr_36254_38314 = state_36237__$1;
(statearr_36254_38314[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (11))){
var inst_36202 = (state_36237[(10)]);
var inst_36222 = (state_36237[(2)]);
var tmp36252 = inst_36202;
var inst_36202__$1 = tmp36252;
var state_36237__$1 = (function (){var statearr_36257 = state_36237;
(statearr_36257[(11)] = inst_36222);

(statearr_36257[(10)] = inst_36202__$1);

return statearr_36257;
})();
var statearr_36258_38323 = state_36237__$1;
(statearr_36258_38323[(2)] = null);

(statearr_36258_38323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (9))){
var inst_36212 = (state_36237[(7)]);
var state_36237__$1 = state_36237;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36237__$1,(11),out,inst_36212);
} else {
if((state_val_36238 === (5))){
var inst_36228 = cljs.core.async.close_BANG_(out);
var state_36237__$1 = state_36237;
var statearr_36274_38328 = state_36237__$1;
(statearr_36274_38328[(2)] = inst_36228);

(statearr_36274_38328[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (10))){
var inst_36225 = (state_36237[(2)]);
var state_36237__$1 = state_36237;
var statearr_36278_38332 = state_36237__$1;
(statearr_36278_38332[(2)] = inst_36225);

(statearr_36278_38332[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (8))){
var inst_36212 = (state_36237[(7)]);
var inst_36211 = (state_36237[(8)]);
var inst_36202 = (state_36237[(10)]);
var inst_36213 = (state_36237[(9)]);
var inst_36217 = (function (){var cs = inst_36202;
var vec__36207 = inst_36211;
var v = inst_36212;
var c = inst_36213;
return (function (p1__36197_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36197_SHARP_);
});
})();
var inst_36218 = cljs.core.filterv(inst_36217,inst_36202);
var inst_36202__$1 = inst_36218;
var state_36237__$1 = (function (){var statearr_36279 = state_36237;
(statearr_36279[(10)] = inst_36202__$1);

return statearr_36279;
})();
var statearr_36281_38335 = state_36237__$1;
(statearr_36281_38335[(2)] = null);

(statearr_36281_38335[(1)] = (2));


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
var cljs$core$async$state_machine__34049__auto__ = null;
var cljs$core$async$state_machine__34049__auto____0 = (function (){
var statearr_36284 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36284[(0)] = cljs$core$async$state_machine__34049__auto__);

(statearr_36284[(1)] = (1));

return statearr_36284;
});
var cljs$core$async$state_machine__34049__auto____1 = (function (state_36237){
while(true){
var ret_value__34050__auto__ = (function (){try{while(true){
var result__34051__auto__ = switch__34048__auto__(state_36237);
if(cljs.core.keyword_identical_QMARK_(result__34051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34051__auto__;
}
break;
}
}catch (e36285){var ex__34052__auto__ = e36285;
var statearr_36286_38346 = state_36237;
(statearr_36286_38346[(2)] = ex__34052__auto__);


if(cljs.core.seq((state_36237[(4)]))){
var statearr_36287_38347 = state_36237;
(statearr_36287_38347[(1)] = cljs.core.first((state_36237[(4)])));

} else {
throw ex__34052__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34050__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38348 = state_36237;
state_36237 = G__38348;
continue;
} else {
return ret_value__34050__auto__;
}
break;
}
});
cljs$core$async$state_machine__34049__auto__ = function(state_36237){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34049__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34049__auto____1.call(this,state_36237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34049__auto____0;
cljs$core$async$state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34049__auto____1;
return cljs$core$async$state_machine__34049__auto__;
})()
})();
var state__34406__auto__ = (function (){var statearr_36290 = f__34405__auto__();
(statearr_36290[(6)] = c__34404__auto___38296);

return statearr_36290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34406__auto__);
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
var G__36296 = arguments.length;
switch (G__36296) {
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
var c__34404__auto___38351 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34405__auto__ = (function (){var switch__34048__auto__ = (function (state_36324){
var state_val_36325 = (state_36324[(1)]);
if((state_val_36325 === (7))){
var inst_36306 = (state_36324[(7)]);
var inst_36306__$1 = (state_36324[(2)]);
var inst_36307 = (inst_36306__$1 == null);
var inst_36308 = cljs.core.not(inst_36307);
var state_36324__$1 = (function (){var statearr_36333 = state_36324;
(statearr_36333[(7)] = inst_36306__$1);

return statearr_36333;
})();
if(inst_36308){
var statearr_36334_38352 = state_36324__$1;
(statearr_36334_38352[(1)] = (8));

} else {
var statearr_36335_38353 = state_36324__$1;
(statearr_36335_38353[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36325 === (1))){
var inst_36301 = (0);
var state_36324__$1 = (function (){var statearr_36336 = state_36324;
(statearr_36336[(8)] = inst_36301);

return statearr_36336;
})();
var statearr_36337_38354 = state_36324__$1;
(statearr_36337_38354[(2)] = null);

(statearr_36337_38354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36325 === (4))){
var state_36324__$1 = state_36324;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36324__$1,(7),ch);
} else {
if((state_val_36325 === (6))){
var inst_36319 = (state_36324[(2)]);
var state_36324__$1 = state_36324;
var statearr_36343_38355 = state_36324__$1;
(statearr_36343_38355[(2)] = inst_36319);

(statearr_36343_38355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36325 === (3))){
var inst_36321 = (state_36324[(2)]);
var inst_36322 = cljs.core.async.close_BANG_(out);
var state_36324__$1 = (function (){var statearr_36345 = state_36324;
(statearr_36345[(9)] = inst_36321);

return statearr_36345;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36324__$1,inst_36322);
} else {
if((state_val_36325 === (2))){
var inst_36301 = (state_36324[(8)]);
var inst_36303 = (inst_36301 < n);
var state_36324__$1 = state_36324;
if(cljs.core.truth_(inst_36303)){
var statearr_36346_38360 = state_36324__$1;
(statearr_36346_38360[(1)] = (4));

} else {
var statearr_36347_38361 = state_36324__$1;
(statearr_36347_38361[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36325 === (11))){
var inst_36301 = (state_36324[(8)]);
var inst_36311 = (state_36324[(2)]);
var inst_36312 = (inst_36301 + (1));
var inst_36301__$1 = inst_36312;
var state_36324__$1 = (function (){var statearr_36348 = state_36324;
(statearr_36348[(8)] = inst_36301__$1);

(statearr_36348[(10)] = inst_36311);

return statearr_36348;
})();
var statearr_36349_38368 = state_36324__$1;
(statearr_36349_38368[(2)] = null);

(statearr_36349_38368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36325 === (9))){
var state_36324__$1 = state_36324;
var statearr_36354_38374 = state_36324__$1;
(statearr_36354_38374[(2)] = null);

(statearr_36354_38374[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36325 === (5))){
var state_36324__$1 = state_36324;
var statearr_36355_38380 = state_36324__$1;
(statearr_36355_38380[(2)] = null);

(statearr_36355_38380[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36325 === (10))){
var inst_36316 = (state_36324[(2)]);
var state_36324__$1 = state_36324;
var statearr_36356_38388 = state_36324__$1;
(statearr_36356_38388[(2)] = inst_36316);

(statearr_36356_38388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36325 === (8))){
var inst_36306 = (state_36324[(7)]);
var state_36324__$1 = state_36324;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36324__$1,(11),out,inst_36306);
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
var cljs$core$async$state_machine__34049__auto__ = null;
var cljs$core$async$state_machine__34049__auto____0 = (function (){
var statearr_36357 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36357[(0)] = cljs$core$async$state_machine__34049__auto__);

(statearr_36357[(1)] = (1));

return statearr_36357;
});
var cljs$core$async$state_machine__34049__auto____1 = (function (state_36324){
while(true){
var ret_value__34050__auto__ = (function (){try{while(true){
var result__34051__auto__ = switch__34048__auto__(state_36324);
if(cljs.core.keyword_identical_QMARK_(result__34051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34051__auto__;
}
break;
}
}catch (e36361){var ex__34052__auto__ = e36361;
var statearr_36362_38406 = state_36324;
(statearr_36362_38406[(2)] = ex__34052__auto__);


if(cljs.core.seq((state_36324[(4)]))){
var statearr_36363_38411 = state_36324;
(statearr_36363_38411[(1)] = cljs.core.first((state_36324[(4)])));

} else {
throw ex__34052__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34050__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38418 = state_36324;
state_36324 = G__38418;
continue;
} else {
return ret_value__34050__auto__;
}
break;
}
});
cljs$core$async$state_machine__34049__auto__ = function(state_36324){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34049__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34049__auto____1.call(this,state_36324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34049__auto____0;
cljs$core$async$state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34049__auto____1;
return cljs$core$async$state_machine__34049__auto__;
})()
})();
var state__34406__auto__ = (function (){var statearr_36364 = f__34405__auto__();
(statearr_36364[(6)] = c__34404__auto___38351);

return statearr_36364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34406__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36371 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36371 = (function (f,ch,meta36372){
this.f = f;
this.ch = ch;
this.meta36372 = meta36372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36373,meta36372__$1){
var self__ = this;
var _36373__$1 = this;
return (new cljs.core.async.t_cljs$core$async36371(self__.f,self__.ch,meta36372__$1));
}));

(cljs.core.async.t_cljs$core$async36371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36373){
var self__ = this;
var _36373__$1 = this;
return self__.meta36372;
}));

(cljs.core.async.t_cljs$core$async36371.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36371.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36371.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36371.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36371.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36378 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36378 = (function (f,ch,meta36372,_,fn1,meta36379){
this.f = f;
this.ch = ch;
this.meta36372 = meta36372;
this._ = _;
this.fn1 = fn1;
this.meta36379 = meta36379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36380,meta36379__$1){
var self__ = this;
var _36380__$1 = this;
return (new cljs.core.async.t_cljs$core$async36378(self__.f,self__.ch,self__.meta36372,self__._,self__.fn1,meta36379__$1));
}));

(cljs.core.async.t_cljs$core$async36378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36380){
var self__ = this;
var _36380__$1 = this;
return self__.meta36379;
}));

(cljs.core.async.t_cljs$core$async36378.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36378.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36378.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36378.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36370_SHARP_){
var G__36382 = (((p1__36370_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36370_SHARP_) : self__.f.call(null,p1__36370_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36382) : f1.call(null,G__36382));
});
}));

(cljs.core.async.t_cljs$core$async36378.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36372","meta36372",-447091795,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36371","cljs.core.async/t_cljs$core$async36371",431507718,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36379","meta36379",-841969319,null)], null);
}));

(cljs.core.async.t_cljs$core$async36378.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36378.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36378");

(cljs.core.async.t_cljs$core$async36378.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36378");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36378.
 */
cljs.core.async.__GT_t_cljs$core$async36378 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36378(f__$1,ch__$1,meta36372__$1,___$2,fn1__$1,meta36379){
return (new cljs.core.async.t_cljs$core$async36378(f__$1,ch__$1,meta36372__$1,___$2,fn1__$1,meta36379));
});

}

return (new cljs.core.async.t_cljs$core$async36378(self__.f,self__.ch,self__.meta36372,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36386 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36386) : self__.f.call(null,G__36386));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36371.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36371.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36371.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36372","meta36372",-447091795,null)], null);
}));

(cljs.core.async.t_cljs$core$async36371.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36371.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36371");

(cljs.core.async.t_cljs$core$async36371.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36371");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36371.
 */
cljs.core.async.__GT_t_cljs$core$async36371 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36371(f__$1,ch__$1,meta36372){
return (new cljs.core.async.t_cljs$core$async36371(f__$1,ch__$1,meta36372));
});

}

return (new cljs.core.async.t_cljs$core$async36371(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36390 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36390 = (function (f,ch,meta36391){
this.f = f;
this.ch = ch;
this.meta36391 = meta36391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36392,meta36391__$1){
var self__ = this;
var _36392__$1 = this;
return (new cljs.core.async.t_cljs$core$async36390(self__.f,self__.ch,meta36391__$1));
}));

(cljs.core.async.t_cljs$core$async36390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36392){
var self__ = this;
var _36392__$1 = this;
return self__.meta36391;
}));

(cljs.core.async.t_cljs$core$async36390.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36390.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36390.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36390.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36390.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36390.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36390.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36391","meta36391",-83372758,null)], null);
}));

(cljs.core.async.t_cljs$core$async36390.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36390.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36390");

(cljs.core.async.t_cljs$core$async36390.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36390");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36390.
 */
cljs.core.async.__GT_t_cljs$core$async36390 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36390(f__$1,ch__$1,meta36391){
return (new cljs.core.async.t_cljs$core$async36390(f__$1,ch__$1,meta36391));
});

}

return (new cljs.core.async.t_cljs$core$async36390(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36408 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36408 = (function (p,ch,meta36409){
this.p = p;
this.ch = ch;
this.meta36409 = meta36409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36410,meta36409__$1){
var self__ = this;
var _36410__$1 = this;
return (new cljs.core.async.t_cljs$core$async36408(self__.p,self__.ch,meta36409__$1));
}));

(cljs.core.async.t_cljs$core$async36408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36410){
var self__ = this;
var _36410__$1 = this;
return self__.meta36409;
}));

(cljs.core.async.t_cljs$core$async36408.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36408.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36408.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36408.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36408.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36408.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36408.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36408.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36409","meta36409",-1369107432,null)], null);
}));

(cljs.core.async.t_cljs$core$async36408.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36408.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36408");

(cljs.core.async.t_cljs$core$async36408.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36408");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36408.
 */
cljs.core.async.__GT_t_cljs$core$async36408 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36408(p__$1,ch__$1,meta36409){
return (new cljs.core.async.t_cljs$core$async36408(p__$1,ch__$1,meta36409));
});

}

return (new cljs.core.async.t_cljs$core$async36408(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36420 = arguments.length;
switch (G__36420) {
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
var c__34404__auto___38562 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34405__auto__ = (function (){var switch__34048__auto__ = (function (state_36451){
var state_val_36453 = (state_36451[(1)]);
if((state_val_36453 === (7))){
var inst_36447 = (state_36451[(2)]);
var state_36451__$1 = state_36451;
var statearr_36455_38563 = state_36451__$1;
(statearr_36455_38563[(2)] = inst_36447);

(statearr_36455_38563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36453 === (1))){
var state_36451__$1 = state_36451;
var statearr_36456_38567 = state_36451__$1;
(statearr_36456_38567[(2)] = null);

(statearr_36456_38567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36453 === (4))){
var inst_36433 = (state_36451[(7)]);
var inst_36433__$1 = (state_36451[(2)]);
var inst_36434 = (inst_36433__$1 == null);
var state_36451__$1 = (function (){var statearr_36458 = state_36451;
(statearr_36458[(7)] = inst_36433__$1);

return statearr_36458;
})();
if(cljs.core.truth_(inst_36434)){
var statearr_36459_38568 = state_36451__$1;
(statearr_36459_38568[(1)] = (5));

} else {
var statearr_36460_38569 = state_36451__$1;
(statearr_36460_38569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36453 === (6))){
var inst_36433 = (state_36451[(7)]);
var inst_36438 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36433) : p.call(null,inst_36433));
var state_36451__$1 = state_36451;
if(cljs.core.truth_(inst_36438)){
var statearr_36462_38570 = state_36451__$1;
(statearr_36462_38570[(1)] = (8));

} else {
var statearr_36464_38571 = state_36451__$1;
(statearr_36464_38571[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36453 === (3))){
var inst_36449 = (state_36451[(2)]);
var state_36451__$1 = state_36451;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36451__$1,inst_36449);
} else {
if((state_val_36453 === (2))){
var state_36451__$1 = state_36451;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36451__$1,(4),ch);
} else {
if((state_val_36453 === (11))){
var inst_36441 = (state_36451[(2)]);
var state_36451__$1 = state_36451;
var statearr_36465_38572 = state_36451__$1;
(statearr_36465_38572[(2)] = inst_36441);

(statearr_36465_38572[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36453 === (9))){
var state_36451__$1 = state_36451;
var statearr_36466_38573 = state_36451__$1;
(statearr_36466_38573[(2)] = null);

(statearr_36466_38573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36453 === (5))){
var inst_36436 = cljs.core.async.close_BANG_(out);
var state_36451__$1 = state_36451;
var statearr_36468_38574 = state_36451__$1;
(statearr_36468_38574[(2)] = inst_36436);

(statearr_36468_38574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36453 === (10))){
var inst_36444 = (state_36451[(2)]);
var state_36451__$1 = (function (){var statearr_36470 = state_36451;
(statearr_36470[(8)] = inst_36444);

return statearr_36470;
})();
var statearr_36471_38575 = state_36451__$1;
(statearr_36471_38575[(2)] = null);

(statearr_36471_38575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36453 === (8))){
var inst_36433 = (state_36451[(7)]);
var state_36451__$1 = state_36451;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36451__$1,(11),out,inst_36433);
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
var cljs$core$async$state_machine__34049__auto__ = null;
var cljs$core$async$state_machine__34049__auto____0 = (function (){
var statearr_36473 = [null,null,null,null,null,null,null,null,null];
(statearr_36473[(0)] = cljs$core$async$state_machine__34049__auto__);

(statearr_36473[(1)] = (1));

return statearr_36473;
});
var cljs$core$async$state_machine__34049__auto____1 = (function (state_36451){
while(true){
var ret_value__34050__auto__ = (function (){try{while(true){
var result__34051__auto__ = switch__34048__auto__(state_36451);
if(cljs.core.keyword_identical_QMARK_(result__34051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34051__auto__;
}
break;
}
}catch (e36474){var ex__34052__auto__ = e36474;
var statearr_36475_38576 = state_36451;
(statearr_36475_38576[(2)] = ex__34052__auto__);


if(cljs.core.seq((state_36451[(4)]))){
var statearr_36476_38577 = state_36451;
(statearr_36476_38577[(1)] = cljs.core.first((state_36451[(4)])));

} else {
throw ex__34052__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34050__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38578 = state_36451;
state_36451 = G__38578;
continue;
} else {
return ret_value__34050__auto__;
}
break;
}
});
cljs$core$async$state_machine__34049__auto__ = function(state_36451){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34049__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34049__auto____1.call(this,state_36451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34049__auto____0;
cljs$core$async$state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34049__auto____1;
return cljs$core$async$state_machine__34049__auto__;
})()
})();
var state__34406__auto__ = (function (){var statearr_36477 = f__34405__auto__();
(statearr_36477[(6)] = c__34404__auto___38562);

return statearr_36477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34406__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36480 = arguments.length;
switch (G__36480) {
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
var c__34404__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34405__auto__ = (function (){var switch__34048__auto__ = (function (state_36556){
var state_val_36557 = (state_36556[(1)]);
if((state_val_36557 === (7))){
var inst_36552 = (state_36556[(2)]);
var state_36556__$1 = state_36556;
var statearr_36559_38584 = state_36556__$1;
(statearr_36559_38584[(2)] = inst_36552);

(statearr_36559_38584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36557 === (20))){
var inst_36518 = (state_36556[(7)]);
var inst_36533 = (state_36556[(2)]);
var inst_36534 = cljs.core.next(inst_36518);
var inst_36501 = inst_36534;
var inst_36502 = null;
var inst_36503 = (0);
var inst_36504 = (0);
var state_36556__$1 = (function (){var statearr_36564 = state_36556;
(statearr_36564[(8)] = inst_36533);

(statearr_36564[(9)] = inst_36502);

(statearr_36564[(10)] = inst_36501);

(statearr_36564[(11)] = inst_36504);

(statearr_36564[(12)] = inst_36503);

return statearr_36564;
})();
var statearr_36567_38585 = state_36556__$1;
(statearr_36567_38585[(2)] = null);

(statearr_36567_38585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36557 === (1))){
var state_36556__$1 = state_36556;
var statearr_36568_38586 = state_36556__$1;
(statearr_36568_38586[(2)] = null);

(statearr_36568_38586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36557 === (4))){
var inst_36490 = (state_36556[(13)]);
var inst_36490__$1 = (state_36556[(2)]);
var inst_36491 = (inst_36490__$1 == null);
var state_36556__$1 = (function (){var statearr_36569 = state_36556;
(statearr_36569[(13)] = inst_36490__$1);

return statearr_36569;
})();
if(cljs.core.truth_(inst_36491)){
var statearr_36570_38587 = state_36556__$1;
(statearr_36570_38587[(1)] = (5));

} else {
var statearr_36571_38588 = state_36556__$1;
(statearr_36571_38588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36557 === (15))){
var state_36556__$1 = state_36556;
var statearr_36575_38589 = state_36556__$1;
(statearr_36575_38589[(2)] = null);

(statearr_36575_38589[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36557 === (21))){
var state_36556__$1 = state_36556;
var statearr_36576_38594 = state_36556__$1;
(statearr_36576_38594[(2)] = null);

(statearr_36576_38594[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36557 === (13))){
var inst_36502 = (state_36556[(9)]);
var inst_36501 = (state_36556[(10)]);
var inst_36504 = (state_36556[(11)]);
var inst_36503 = (state_36556[(12)]);
var inst_36512 = (state_36556[(2)]);
var inst_36514 = (inst_36504 + (1));
var tmp36572 = inst_36502;
var tmp36573 = inst_36501;
var tmp36574 = inst_36503;
var inst_36501__$1 = tmp36573;
var inst_36502__$1 = tmp36572;
var inst_36503__$1 = tmp36574;
var inst_36504__$1 = inst_36514;
var state_36556__$1 = (function (){var statearr_36579 = state_36556;
(statearr_36579[(9)] = inst_36502__$1);

(statearr_36579[(10)] = inst_36501__$1);

(statearr_36579[(11)] = inst_36504__$1);

(statearr_36579[(12)] = inst_36503__$1);

(statearr_36579[(14)] = inst_36512);

return statearr_36579;
})();
var statearr_36582_38598 = state_36556__$1;
(statearr_36582_38598[(2)] = null);

(statearr_36582_38598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36557 === (22))){
var state_36556__$1 = state_36556;
var statearr_36585_38599 = state_36556__$1;
(statearr_36585_38599[(2)] = null);

(statearr_36585_38599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36557 === (6))){
var inst_36490 = (state_36556[(13)]);
var inst_36499 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36490) : f.call(null,inst_36490));
var inst_36500 = cljs.core.seq(inst_36499);
var inst_36501 = inst_36500;
var inst_36502 = null;
var inst_36503 = (0);
var inst_36504 = (0);
var state_36556__$1 = (function (){var statearr_36587 = state_36556;
(statearr_36587[(9)] = inst_36502);

(statearr_36587[(10)] = inst_36501);

(statearr_36587[(11)] = inst_36504);

(statearr_36587[(12)] = inst_36503);

return statearr_36587;
})();
var statearr_36588_38600 = state_36556__$1;
(statearr_36588_38600[(2)] = null);

(statearr_36588_38600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36557 === (17))){
var inst_36518 = (state_36556[(7)]);
var inst_36524 = cljs.core.chunk_first(inst_36518);
var inst_36526 = cljs.core.chunk_rest(inst_36518);
var inst_36528 = cljs.core.count(inst_36524);
var inst_36501 = inst_36526;
var inst_36502 = inst_36524;
var inst_36503 = inst_36528;
var inst_36504 = (0);
var state_36556__$1 = (function (){var statearr_36592 = state_36556;
(statearr_36592[(9)] = inst_36502);

(statearr_36592[(10)] = inst_36501);

(statearr_36592[(11)] = inst_36504);

(statearr_36592[(12)] = inst_36503);

return statearr_36592;
})();
var statearr_36593_38604 = state_36556__$1;
(statearr_36593_38604[(2)] = null);

(statearr_36593_38604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36557 === (3))){
var inst_36554 = (state_36556[(2)]);
var state_36556__$1 = state_36556;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36556__$1,inst_36554);
} else {
if((state_val_36557 === (12))){
var inst_36542 = (state_36556[(2)]);
var state_36556__$1 = state_36556;
var statearr_36600_38617 = state_36556__$1;
(statearr_36600_38617[(2)] = inst_36542);

(statearr_36600_38617[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36557 === (2))){
var state_36556__$1 = state_36556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36556__$1,(4),in$);
} else {
if((state_val_36557 === (23))){
var inst_36550 = (state_36556[(2)]);
var state_36556__$1 = state_36556;
var statearr_36601_38619 = state_36556__$1;
(statearr_36601_38619[(2)] = inst_36550);

(statearr_36601_38619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36557 === (19))){
var inst_36537 = (state_36556[(2)]);
var state_36556__$1 = state_36556;
var statearr_36603_38622 = state_36556__$1;
(statearr_36603_38622[(2)] = inst_36537);

(statearr_36603_38622[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36557 === (11))){
var inst_36501 = (state_36556[(10)]);
var inst_36518 = (state_36556[(7)]);
var inst_36518__$1 = cljs.core.seq(inst_36501);
var state_36556__$1 = (function (){var statearr_36605 = state_36556;
(statearr_36605[(7)] = inst_36518__$1);

return statearr_36605;
})();
if(inst_36518__$1){
var statearr_36608_38789 = state_36556__$1;
(statearr_36608_38789[(1)] = (14));

} else {
var statearr_36609_38790 = state_36556__$1;
(statearr_36609_38790[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36557 === (9))){
var inst_36544 = (state_36556[(2)]);
var inst_36545 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36556__$1 = (function (){var statearr_36612 = state_36556;
(statearr_36612[(15)] = inst_36544);

return statearr_36612;
})();
if(cljs.core.truth_(inst_36545)){
var statearr_36614_38801 = state_36556__$1;
(statearr_36614_38801[(1)] = (21));

} else {
var statearr_36615_38802 = state_36556__$1;
(statearr_36615_38802[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36557 === (5))){
var inst_36493 = cljs.core.async.close_BANG_(out);
var state_36556__$1 = state_36556;
var statearr_36616_38808 = state_36556__$1;
(statearr_36616_38808[(2)] = inst_36493);

(statearr_36616_38808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36557 === (14))){
var inst_36518 = (state_36556[(7)]);
var inst_36522 = cljs.core.chunked_seq_QMARK_(inst_36518);
var state_36556__$1 = state_36556;
if(inst_36522){
var statearr_36617_38809 = state_36556__$1;
(statearr_36617_38809[(1)] = (17));

} else {
var statearr_36618_38810 = state_36556__$1;
(statearr_36618_38810[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36557 === (16))){
var inst_36540 = (state_36556[(2)]);
var state_36556__$1 = state_36556;
var statearr_36619_38812 = state_36556__$1;
(statearr_36619_38812[(2)] = inst_36540);

(statearr_36619_38812[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36557 === (10))){
var inst_36502 = (state_36556[(9)]);
var inst_36504 = (state_36556[(11)]);
var inst_36510 = cljs.core._nth(inst_36502,inst_36504);
var state_36556__$1 = state_36556;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36556__$1,(13),out,inst_36510);
} else {
if((state_val_36557 === (18))){
var inst_36518 = (state_36556[(7)]);
var inst_36531 = cljs.core.first(inst_36518);
var state_36556__$1 = state_36556;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36556__$1,(20),out,inst_36531);
} else {
if((state_val_36557 === (8))){
var inst_36504 = (state_36556[(11)]);
var inst_36503 = (state_36556[(12)]);
var inst_36506 = (inst_36504 < inst_36503);
var inst_36508 = inst_36506;
var state_36556__$1 = state_36556;
if(cljs.core.truth_(inst_36508)){
var statearr_36620_38814 = state_36556__$1;
(statearr_36620_38814[(1)] = (10));

} else {
var statearr_36621_38815 = state_36556__$1;
(statearr_36621_38815[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__34049__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34049__auto____0 = (function (){
var statearr_36626 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36626[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34049__auto__);

(statearr_36626[(1)] = (1));

return statearr_36626;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34049__auto____1 = (function (state_36556){
while(true){
var ret_value__34050__auto__ = (function (){try{while(true){
var result__34051__auto__ = switch__34048__auto__(state_36556);
if(cljs.core.keyword_identical_QMARK_(result__34051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34051__auto__;
}
break;
}
}catch (e36627){var ex__34052__auto__ = e36627;
var statearr_36628_38817 = state_36556;
(statearr_36628_38817[(2)] = ex__34052__auto__);


if(cljs.core.seq((state_36556[(4)]))){
var statearr_36629_38818 = state_36556;
(statearr_36629_38818[(1)] = cljs.core.first((state_36556[(4)])));

} else {
throw ex__34052__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34050__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38819 = state_36556;
state_36556 = G__38819;
continue;
} else {
return ret_value__34050__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34049__auto__ = function(state_36556){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34049__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34049__auto____1.call(this,state_36556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34049__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34049__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34049__auto__;
})()
})();
var state__34406__auto__ = (function (){var statearr_36632 = f__34405__auto__();
(statearr_36632[(6)] = c__34404__auto__);

return statearr_36632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34406__auto__);
}));

return c__34404__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36636 = arguments.length;
switch (G__36636) {
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
var G__36654 = arguments.length;
switch (G__36654) {
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
var G__36717 = arguments.length;
switch (G__36717) {
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
var c__34404__auto___38826 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34405__auto__ = (function (){var switch__34048__auto__ = (function (state_36769){
var state_val_36770 = (state_36769[(1)]);
if((state_val_36770 === (7))){
var inst_36759 = (state_36769[(2)]);
var state_36769__$1 = state_36769;
var statearr_36780_38827 = state_36769__$1;
(statearr_36780_38827[(2)] = inst_36759);

(statearr_36780_38827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36770 === (1))){
var inst_36733 = null;
var state_36769__$1 = (function (){var statearr_36781 = state_36769;
(statearr_36781[(7)] = inst_36733);

return statearr_36781;
})();
var statearr_36783_38828 = state_36769__$1;
(statearr_36783_38828[(2)] = null);

(statearr_36783_38828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36770 === (4))){
var inst_36740 = (state_36769[(8)]);
var inst_36740__$1 = (state_36769[(2)]);
var inst_36741 = (inst_36740__$1 == null);
var inst_36742 = cljs.core.not(inst_36741);
var state_36769__$1 = (function (){var statearr_36787 = state_36769;
(statearr_36787[(8)] = inst_36740__$1);

return statearr_36787;
})();
if(inst_36742){
var statearr_36789_38829 = state_36769__$1;
(statearr_36789_38829[(1)] = (5));

} else {
var statearr_36791_38830 = state_36769__$1;
(statearr_36791_38830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36770 === (6))){
var state_36769__$1 = state_36769;
var statearr_36794_38831 = state_36769__$1;
(statearr_36794_38831[(2)] = null);

(statearr_36794_38831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36770 === (3))){
var inst_36761 = (state_36769[(2)]);
var inst_36762 = cljs.core.async.close_BANG_(out);
var state_36769__$1 = (function (){var statearr_36799 = state_36769;
(statearr_36799[(9)] = inst_36761);

return statearr_36799;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36769__$1,inst_36762);
} else {
if((state_val_36770 === (2))){
var state_36769__$1 = state_36769;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36769__$1,(4),ch);
} else {
if((state_val_36770 === (11))){
var inst_36740 = (state_36769[(8)]);
var inst_36753 = (state_36769[(2)]);
var inst_36733 = inst_36740;
var state_36769__$1 = (function (){var statearr_36804 = state_36769;
(statearr_36804[(10)] = inst_36753);

(statearr_36804[(7)] = inst_36733);

return statearr_36804;
})();
var statearr_36805_38832 = state_36769__$1;
(statearr_36805_38832[(2)] = null);

(statearr_36805_38832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36770 === (9))){
var inst_36740 = (state_36769[(8)]);
var state_36769__$1 = state_36769;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36769__$1,(11),out,inst_36740);
} else {
if((state_val_36770 === (5))){
var inst_36740 = (state_36769[(8)]);
var inst_36733 = (state_36769[(7)]);
var inst_36748 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36740,inst_36733);
var state_36769__$1 = state_36769;
if(inst_36748){
var statearr_36810_38841 = state_36769__$1;
(statearr_36810_38841[(1)] = (8));

} else {
var statearr_36811_38849 = state_36769__$1;
(statearr_36811_38849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36770 === (10))){
var inst_36756 = (state_36769[(2)]);
var state_36769__$1 = state_36769;
var statearr_36813_38853 = state_36769__$1;
(statearr_36813_38853[(2)] = inst_36756);

(statearr_36813_38853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36770 === (8))){
var inst_36733 = (state_36769[(7)]);
var tmp36809 = inst_36733;
var inst_36733__$1 = tmp36809;
var state_36769__$1 = (function (){var statearr_36818 = state_36769;
(statearr_36818[(7)] = inst_36733__$1);

return statearr_36818;
})();
var statearr_36821_38857 = state_36769__$1;
(statearr_36821_38857[(2)] = null);

(statearr_36821_38857[(1)] = (2));


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
var cljs$core$async$state_machine__34049__auto__ = null;
var cljs$core$async$state_machine__34049__auto____0 = (function (){
var statearr_36827 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36827[(0)] = cljs$core$async$state_machine__34049__auto__);

(statearr_36827[(1)] = (1));

return statearr_36827;
});
var cljs$core$async$state_machine__34049__auto____1 = (function (state_36769){
while(true){
var ret_value__34050__auto__ = (function (){try{while(true){
var result__34051__auto__ = switch__34048__auto__(state_36769);
if(cljs.core.keyword_identical_QMARK_(result__34051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34051__auto__;
}
break;
}
}catch (e36829){var ex__34052__auto__ = e36829;
var statearr_36831_38861 = state_36769;
(statearr_36831_38861[(2)] = ex__34052__auto__);


if(cljs.core.seq((state_36769[(4)]))){
var statearr_36835_38862 = state_36769;
(statearr_36835_38862[(1)] = cljs.core.first((state_36769[(4)])));

} else {
throw ex__34052__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34050__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38869 = state_36769;
state_36769 = G__38869;
continue;
} else {
return ret_value__34050__auto__;
}
break;
}
});
cljs$core$async$state_machine__34049__auto__ = function(state_36769){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34049__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34049__auto____1.call(this,state_36769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34049__auto____0;
cljs$core$async$state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34049__auto____1;
return cljs$core$async$state_machine__34049__auto__;
})()
})();
var state__34406__auto__ = (function (){var statearr_36837 = f__34405__auto__();
(statearr_36837[(6)] = c__34404__auto___38826);

return statearr_36837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34406__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36850 = arguments.length;
switch (G__36850) {
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
var c__34404__auto___38885 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34405__auto__ = (function (){var switch__34048__auto__ = (function (state_36904){
var state_val_36905 = (state_36904[(1)]);
if((state_val_36905 === (7))){
var inst_36899 = (state_36904[(2)]);
var state_36904__$1 = state_36904;
var statearr_36918_38886 = state_36904__$1;
(statearr_36918_38886[(2)] = inst_36899);

(statearr_36918_38886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36905 === (1))){
var inst_36860 = (new Array(n));
var inst_36861 = inst_36860;
var inst_36862 = (0);
var state_36904__$1 = (function (){var statearr_36924 = state_36904;
(statearr_36924[(7)] = inst_36861);

(statearr_36924[(8)] = inst_36862);

return statearr_36924;
})();
var statearr_36928_38889 = state_36904__$1;
(statearr_36928_38889[(2)] = null);

(statearr_36928_38889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36905 === (4))){
var inst_36866 = (state_36904[(9)]);
var inst_36866__$1 = (state_36904[(2)]);
var inst_36868 = (inst_36866__$1 == null);
var inst_36869 = cljs.core.not(inst_36868);
var state_36904__$1 = (function (){var statearr_36933 = state_36904;
(statearr_36933[(9)] = inst_36866__$1);

return statearr_36933;
})();
if(inst_36869){
var statearr_36934_38890 = state_36904__$1;
(statearr_36934_38890[(1)] = (5));

} else {
var statearr_36937_38891 = state_36904__$1;
(statearr_36937_38891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36905 === (15))){
var inst_36892 = (state_36904[(2)]);
var state_36904__$1 = state_36904;
var statearr_36939_38892 = state_36904__$1;
(statearr_36939_38892[(2)] = inst_36892);

(statearr_36939_38892[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36905 === (13))){
var state_36904__$1 = state_36904;
var statearr_36941_38893 = state_36904__$1;
(statearr_36941_38893[(2)] = null);

(statearr_36941_38893[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36905 === (6))){
var inst_36862 = (state_36904[(8)]);
var inst_36886 = (inst_36862 > (0));
var state_36904__$1 = state_36904;
if(cljs.core.truth_(inst_36886)){
var statearr_36944_38894 = state_36904__$1;
(statearr_36944_38894[(1)] = (12));

} else {
var statearr_36945_38895 = state_36904__$1;
(statearr_36945_38895[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36905 === (3))){
var inst_36901 = (state_36904[(2)]);
var state_36904__$1 = state_36904;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36904__$1,inst_36901);
} else {
if((state_val_36905 === (12))){
var inst_36861 = (state_36904[(7)]);
var inst_36889 = cljs.core.vec(inst_36861);
var state_36904__$1 = state_36904;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36904__$1,(15),out,inst_36889);
} else {
if((state_val_36905 === (2))){
var state_36904__$1 = state_36904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36904__$1,(4),ch);
} else {
if((state_val_36905 === (11))){
var inst_36880 = (state_36904[(2)]);
var inst_36881 = (new Array(n));
var inst_36861 = inst_36881;
var inst_36862 = (0);
var state_36904__$1 = (function (){var statearr_36950 = state_36904;
(statearr_36950[(7)] = inst_36861);

(statearr_36950[(8)] = inst_36862);

(statearr_36950[(10)] = inst_36880);

return statearr_36950;
})();
var statearr_36952_38896 = state_36904__$1;
(statearr_36952_38896[(2)] = null);

(statearr_36952_38896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36905 === (9))){
var inst_36861 = (state_36904[(7)]);
var inst_36878 = cljs.core.vec(inst_36861);
var state_36904__$1 = state_36904;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36904__$1,(11),out,inst_36878);
} else {
if((state_val_36905 === (5))){
var inst_36866 = (state_36904[(9)]);
var inst_36861 = (state_36904[(7)]);
var inst_36873 = (state_36904[(11)]);
var inst_36862 = (state_36904[(8)]);
var inst_36871 = (inst_36861[inst_36862] = inst_36866);
var inst_36873__$1 = (inst_36862 + (1));
var inst_36874 = (inst_36873__$1 < n);
var state_36904__$1 = (function (){var statearr_36969 = state_36904;
(statearr_36969[(11)] = inst_36873__$1);

(statearr_36969[(12)] = inst_36871);

return statearr_36969;
})();
if(cljs.core.truth_(inst_36874)){
var statearr_36971_38897 = state_36904__$1;
(statearr_36971_38897[(1)] = (8));

} else {
var statearr_36972_38898 = state_36904__$1;
(statearr_36972_38898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36905 === (14))){
var inst_36895 = (state_36904[(2)]);
var inst_36896 = cljs.core.async.close_BANG_(out);
var state_36904__$1 = (function (){var statearr_36977 = state_36904;
(statearr_36977[(13)] = inst_36895);

return statearr_36977;
})();
var statearr_36978_38899 = state_36904__$1;
(statearr_36978_38899[(2)] = inst_36896);

(statearr_36978_38899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36905 === (10))){
var inst_36884 = (state_36904[(2)]);
var state_36904__$1 = state_36904;
var statearr_36982_38900 = state_36904__$1;
(statearr_36982_38900[(2)] = inst_36884);

(statearr_36982_38900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36905 === (8))){
var inst_36861 = (state_36904[(7)]);
var inst_36873 = (state_36904[(11)]);
var tmp36975 = inst_36861;
var inst_36861__$1 = tmp36975;
var inst_36862 = inst_36873;
var state_36904__$1 = (function (){var statearr_36983 = state_36904;
(statearr_36983[(7)] = inst_36861__$1);

(statearr_36983[(8)] = inst_36862);

return statearr_36983;
})();
var statearr_36985_38901 = state_36904__$1;
(statearr_36985_38901[(2)] = null);

(statearr_36985_38901[(1)] = (2));


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
var cljs$core$async$state_machine__34049__auto__ = null;
var cljs$core$async$state_machine__34049__auto____0 = (function (){
var statearr_36987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36987[(0)] = cljs$core$async$state_machine__34049__auto__);

(statearr_36987[(1)] = (1));

return statearr_36987;
});
var cljs$core$async$state_machine__34049__auto____1 = (function (state_36904){
while(true){
var ret_value__34050__auto__ = (function (){try{while(true){
var result__34051__auto__ = switch__34048__auto__(state_36904);
if(cljs.core.keyword_identical_QMARK_(result__34051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34051__auto__;
}
break;
}
}catch (e36990){var ex__34052__auto__ = e36990;
var statearr_36991_38902 = state_36904;
(statearr_36991_38902[(2)] = ex__34052__auto__);


if(cljs.core.seq((state_36904[(4)]))){
var statearr_36992_38904 = state_36904;
(statearr_36992_38904[(1)] = cljs.core.first((state_36904[(4)])));

} else {
throw ex__34052__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34050__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38905 = state_36904;
state_36904 = G__38905;
continue;
} else {
return ret_value__34050__auto__;
}
break;
}
});
cljs$core$async$state_machine__34049__auto__ = function(state_36904){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34049__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34049__auto____1.call(this,state_36904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34049__auto____0;
cljs$core$async$state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34049__auto____1;
return cljs$core$async$state_machine__34049__auto__;
})()
})();
var state__34406__auto__ = (function (){var statearr_36997 = f__34405__auto__();
(statearr_36997[(6)] = c__34404__auto___38885);

return statearr_36997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34406__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__37002 = arguments.length;
switch (G__37002) {
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
var c__34404__auto___38914 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34405__auto__ = (function (){var switch__34048__auto__ = (function (state_37067){
var state_val_37068 = (state_37067[(1)]);
if((state_val_37068 === (7))){
var inst_37059 = (state_37067[(2)]);
var state_37067__$1 = state_37067;
var statearr_37075_38915 = state_37067__$1;
(statearr_37075_38915[(2)] = inst_37059);

(statearr_37075_38915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (1))){
var inst_37013 = [];
var inst_37014 = inst_37013;
var inst_37015 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37067__$1 = (function (){var statearr_37076 = state_37067;
(statearr_37076[(7)] = inst_37014);

(statearr_37076[(8)] = inst_37015);

return statearr_37076;
})();
var statearr_37077_38916 = state_37067__$1;
(statearr_37077_38916[(2)] = null);

(statearr_37077_38916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (4))){
var inst_37020 = (state_37067[(9)]);
var inst_37020__$1 = (state_37067[(2)]);
var inst_37021 = (inst_37020__$1 == null);
var inst_37022 = cljs.core.not(inst_37021);
var state_37067__$1 = (function (){var statearr_37082 = state_37067;
(statearr_37082[(9)] = inst_37020__$1);

return statearr_37082;
})();
if(inst_37022){
var statearr_37083_38920 = state_37067__$1;
(statearr_37083_38920[(1)] = (5));

} else {
var statearr_37084_38921 = state_37067__$1;
(statearr_37084_38921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (15))){
var inst_37014 = (state_37067[(7)]);
var inst_37051 = cljs.core.vec(inst_37014);
var state_37067__$1 = state_37067;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37067__$1,(18),out,inst_37051);
} else {
if((state_val_37068 === (13))){
var inst_37046 = (state_37067[(2)]);
var state_37067__$1 = state_37067;
var statearr_37089_38947 = state_37067__$1;
(statearr_37089_38947[(2)] = inst_37046);

(statearr_37089_38947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (6))){
var inst_37014 = (state_37067[(7)]);
var inst_37048 = inst_37014.length;
var inst_37049 = (inst_37048 > (0));
var state_37067__$1 = state_37067;
if(cljs.core.truth_(inst_37049)){
var statearr_37093_38951 = state_37067__$1;
(statearr_37093_38951[(1)] = (15));

} else {
var statearr_37095_38956 = state_37067__$1;
(statearr_37095_38956[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (17))){
var inst_37056 = (state_37067[(2)]);
var inst_37057 = cljs.core.async.close_BANG_(out);
var state_37067__$1 = (function (){var statearr_37098 = state_37067;
(statearr_37098[(10)] = inst_37056);

return statearr_37098;
})();
var statearr_37099_38957 = state_37067__$1;
(statearr_37099_38957[(2)] = inst_37057);

(statearr_37099_38957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (3))){
var inst_37061 = (state_37067[(2)]);
var state_37067__$1 = state_37067;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37067__$1,inst_37061);
} else {
if((state_val_37068 === (12))){
var inst_37014 = (state_37067[(7)]);
var inst_37039 = cljs.core.vec(inst_37014);
var state_37067__$1 = state_37067;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37067__$1,(14),out,inst_37039);
} else {
if((state_val_37068 === (2))){
var state_37067__$1 = state_37067;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37067__$1,(4),ch);
} else {
if((state_val_37068 === (11))){
var inst_37020 = (state_37067[(9)]);
var inst_37014 = (state_37067[(7)]);
var inst_37024 = (state_37067[(11)]);
var inst_37036 = inst_37014.push(inst_37020);
var tmp37101 = inst_37014;
var inst_37014__$1 = tmp37101;
var inst_37015 = inst_37024;
var state_37067__$1 = (function (){var statearr_37108 = state_37067;
(statearr_37108[(12)] = inst_37036);

(statearr_37108[(7)] = inst_37014__$1);

(statearr_37108[(8)] = inst_37015);

return statearr_37108;
})();
var statearr_37111_38981 = state_37067__$1;
(statearr_37111_38981[(2)] = null);

(statearr_37111_38981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (9))){
var inst_37015 = (state_37067[(8)]);
var inst_37030 = cljs.core.keyword_identical_QMARK_(inst_37015,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_37067__$1 = state_37067;
var statearr_37117_39020 = state_37067__$1;
(statearr_37117_39020[(2)] = inst_37030);

(statearr_37117_39020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (5))){
var inst_37020 = (state_37067[(9)]);
var inst_37027 = (state_37067[(13)]);
var inst_37024 = (state_37067[(11)]);
var inst_37015 = (state_37067[(8)]);
var inst_37024__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_37020) : f.call(null,inst_37020));
var inst_37027__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37024__$1,inst_37015);
var state_37067__$1 = (function (){var statearr_37119 = state_37067;
(statearr_37119[(13)] = inst_37027__$1);

(statearr_37119[(11)] = inst_37024__$1);

return statearr_37119;
})();
if(inst_37027__$1){
var statearr_37121_39024 = state_37067__$1;
(statearr_37121_39024[(1)] = (8));

} else {
var statearr_37124_39026 = state_37067__$1;
(statearr_37124_39026[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (14))){
var inst_37020 = (state_37067[(9)]);
var inst_37024 = (state_37067[(11)]);
var inst_37041 = (state_37067[(2)]);
var inst_37042 = [];
var inst_37043 = inst_37042.push(inst_37020);
var inst_37014 = inst_37042;
var inst_37015 = inst_37024;
var state_37067__$1 = (function (){var statearr_37125 = state_37067;
(statearr_37125[(14)] = inst_37041);

(statearr_37125[(7)] = inst_37014);

(statearr_37125[(15)] = inst_37043);

(statearr_37125[(8)] = inst_37015);

return statearr_37125;
})();
var statearr_37130_39036 = state_37067__$1;
(statearr_37130_39036[(2)] = null);

(statearr_37130_39036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (16))){
var state_37067__$1 = state_37067;
var statearr_37131_39037 = state_37067__$1;
(statearr_37131_39037[(2)] = null);

(statearr_37131_39037[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (10))){
var inst_37033 = (state_37067[(2)]);
var state_37067__$1 = state_37067;
if(cljs.core.truth_(inst_37033)){
var statearr_37133_39040 = state_37067__$1;
(statearr_37133_39040[(1)] = (11));

} else {
var statearr_37135_39041 = state_37067__$1;
(statearr_37135_39041[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (18))){
var inst_37053 = (state_37067[(2)]);
var state_37067__$1 = state_37067;
var statearr_37139_39043 = state_37067__$1;
(statearr_37139_39043[(2)] = inst_37053);

(statearr_37139_39043[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37068 === (8))){
var inst_37027 = (state_37067[(13)]);
var state_37067__$1 = state_37067;
var statearr_37144_39046 = state_37067__$1;
(statearr_37144_39046[(2)] = inst_37027);

(statearr_37144_39046[(1)] = (10));


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
var cljs$core$async$state_machine__34049__auto__ = null;
var cljs$core$async$state_machine__34049__auto____0 = (function (){
var statearr_37147 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37147[(0)] = cljs$core$async$state_machine__34049__auto__);

(statearr_37147[(1)] = (1));

return statearr_37147;
});
var cljs$core$async$state_machine__34049__auto____1 = (function (state_37067){
while(true){
var ret_value__34050__auto__ = (function (){try{while(true){
var result__34051__auto__ = switch__34048__auto__(state_37067);
if(cljs.core.keyword_identical_QMARK_(result__34051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34051__auto__;
}
break;
}
}catch (e37150){var ex__34052__auto__ = e37150;
var statearr_37151_39058 = state_37067;
(statearr_37151_39058[(2)] = ex__34052__auto__);


if(cljs.core.seq((state_37067[(4)]))){
var statearr_37152_39059 = state_37067;
(statearr_37152_39059[(1)] = cljs.core.first((state_37067[(4)])));

} else {
throw ex__34052__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34050__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39060 = state_37067;
state_37067 = G__39060;
continue;
} else {
return ret_value__34050__auto__;
}
break;
}
});
cljs$core$async$state_machine__34049__auto__ = function(state_37067){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34049__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34049__auto____1.call(this,state_37067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34049__auto____0;
cljs$core$async$state_machine__34049__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34049__auto____1;
return cljs$core$async$state_machine__34049__auto__;
})()
})();
var state__34406__auto__ = (function (){var statearr_37154 = f__34405__auto__();
(statearr_37154[(6)] = c__34404__auto___38914);

return statearr_37154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34406__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30205 = arguments.length;
switch (G__30205) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30207 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30207 = (function (f,blockable,meta30208){
this.f = f;
this.blockable = blockable;
this.meta30208 = meta30208;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30209,meta30208__$1){
var self__ = this;
var _30209__$1 = this;
return (new cljs.core.async.t_cljs$core$async30207(self__.f,self__.blockable,meta30208__$1));
}));

(cljs.core.async.t_cljs$core$async30207.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30209){
var self__ = this;
var _30209__$1 = this;
return self__.meta30208;
}));

(cljs.core.async.t_cljs$core$async30207.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30207.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30207.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30207.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30207.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30208","meta30208",-1956313728,null)], null);
}));

(cljs.core.async.t_cljs$core$async30207.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30207.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30207");

(cljs.core.async.t_cljs$core$async30207.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30207");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30207.
 */
cljs.core.async.__GT_t_cljs$core$async30207 = (function cljs$core$async$__GT_t_cljs$core$async30207(f__$1,blockable__$1,meta30208){
return (new cljs.core.async.t_cljs$core$async30207(f__$1,blockable__$1,meta30208));
});

}

return (new cljs.core.async.t_cljs$core$async30207(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30221 = arguments.length;
switch (G__30221) {
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
var G__30247 = arguments.length;
switch (G__30247) {
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
var G__30256 = arguments.length;
switch (G__30256) {
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
var val_33949 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33949) : fn1.call(null,val_33949));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33949) : fn1.call(null,val_33949));
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
var G__30275 = arguments.length;
switch (G__30275) {
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
var n__5636__auto___33955 = n;
var x_33956 = (0);
while(true){
if((x_33956 < n__5636__auto___33955)){
(a[x_33956] = x_33956);

var G__33957 = (x_33956 + (1));
x_33956 = G__33957;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30307 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30307 = (function (flag,meta30308){
this.flag = flag;
this.meta30308 = meta30308;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30309,meta30308__$1){
var self__ = this;
var _30309__$1 = this;
return (new cljs.core.async.t_cljs$core$async30307(self__.flag,meta30308__$1));
}));

(cljs.core.async.t_cljs$core$async30307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30309){
var self__ = this;
var _30309__$1 = this;
return self__.meta30308;
}));

(cljs.core.async.t_cljs$core$async30307.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30307.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30307.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30307.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30307.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30308","meta30308",280226662,null)], null);
}));

(cljs.core.async.t_cljs$core$async30307.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30307.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30307");

(cljs.core.async.t_cljs$core$async30307.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30307");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30307.
 */
cljs.core.async.__GT_t_cljs$core$async30307 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30307(flag__$1,meta30308){
return (new cljs.core.async.t_cljs$core$async30307(flag__$1,meta30308));
});

}

return (new cljs.core.async.t_cljs$core$async30307(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30336 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30336 = (function (flag,cb,meta30337){
this.flag = flag;
this.cb = cb;
this.meta30337 = meta30337;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30338,meta30337__$1){
var self__ = this;
var _30338__$1 = this;
return (new cljs.core.async.t_cljs$core$async30336(self__.flag,self__.cb,meta30337__$1));
}));

(cljs.core.async.t_cljs$core$async30336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30338){
var self__ = this;
var _30338__$1 = this;
return self__.meta30337;
}));

(cljs.core.async.t_cljs$core$async30336.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30336.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30336.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30336.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30336.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30337","meta30337",-45866594,null)], null);
}));

(cljs.core.async.t_cljs$core$async30336.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30336.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30336");

(cljs.core.async.t_cljs$core$async30336.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30336");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30336.
 */
cljs.core.async.__GT_t_cljs$core$async30336 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30336(flag__$1,cb__$1,meta30337){
return (new cljs.core.async.t_cljs$core$async30336(flag__$1,cb__$1,meta30337));
});

}

return (new cljs.core.async.t_cljs$core$async30336(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30347_SHARP_){
var G__30379 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30347_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30379) : fret.call(null,G__30379));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30351_SHARP_){
var G__30380 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30351_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30380) : fret.call(null,G__30380));
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
var G__33962 = (i + (1));
i = G__33962;
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
var len__5769__auto___33963 = arguments.length;
var i__5770__auto___33964 = (0);
while(true){
if((i__5770__auto___33964 < len__5769__auto___33963)){
args__5775__auto__.push((arguments[i__5770__auto___33964]));

var G__33965 = (i__5770__auto___33964 + (1));
i__5770__auto___33964 = G__33965;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30386){
var map__30387 = p__30386;
var map__30387__$1 = cljs.core.__destructure_map(map__30387);
var opts = map__30387__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30381){
var G__30382 = cljs.core.first(seq30381);
var seq30381__$1 = cljs.core.next(seq30381);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30382,seq30381__$1);
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
var G__30405 = arguments.length;
switch (G__30405) {
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
var c__30067__auto___33974 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30068__auto__ = (function (){var switch__29501__auto__ = (function (state_30487){
var state_val_30493 = (state_30487[(1)]);
if((state_val_30493 === (7))){
var inst_30477 = (state_30487[(2)]);
var state_30487__$1 = state_30487;
var statearr_30504_33975 = state_30487__$1;
(statearr_30504_33975[(2)] = inst_30477);

(statearr_30504_33975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30493 === (1))){
var state_30487__$1 = state_30487;
var statearr_30506_33979 = state_30487__$1;
(statearr_30506_33979[(2)] = null);

(statearr_30506_33979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30493 === (4))){
var inst_30443 = (state_30487[(7)]);
var inst_30443__$1 = (state_30487[(2)]);
var inst_30456 = (inst_30443__$1 == null);
var state_30487__$1 = (function (){var statearr_30509 = state_30487;
(statearr_30509[(7)] = inst_30443__$1);

return statearr_30509;
})();
if(cljs.core.truth_(inst_30456)){
var statearr_30511_33980 = state_30487__$1;
(statearr_30511_33980[(1)] = (5));

} else {
var statearr_30514_33986 = state_30487__$1;
(statearr_30514_33986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30493 === (13))){
var state_30487__$1 = state_30487;
var statearr_30516_33988 = state_30487__$1;
(statearr_30516_33988[(2)] = null);

(statearr_30516_33988[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30493 === (6))){
var inst_30443 = (state_30487[(7)]);
var state_30487__$1 = state_30487;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30487__$1,(11),to,inst_30443);
} else {
if((state_val_30493 === (3))){
var inst_30481 = (state_30487[(2)]);
var state_30487__$1 = state_30487;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30487__$1,inst_30481);
} else {
if((state_val_30493 === (12))){
var state_30487__$1 = state_30487;
var statearr_30522_33995 = state_30487__$1;
(statearr_30522_33995[(2)] = null);

(statearr_30522_33995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30493 === (2))){
var state_30487__$1 = state_30487;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30487__$1,(4),from);
} else {
if((state_val_30493 === (11))){
var inst_30467 = (state_30487[(2)]);
var state_30487__$1 = state_30487;
if(cljs.core.truth_(inst_30467)){
var statearr_30526_33996 = state_30487__$1;
(statearr_30526_33996[(1)] = (12));

} else {
var statearr_30530_33997 = state_30487__$1;
(statearr_30530_33997[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30493 === (9))){
var state_30487__$1 = state_30487;
var statearr_30531_33999 = state_30487__$1;
(statearr_30531_33999[(2)] = null);

(statearr_30531_33999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30493 === (5))){
var state_30487__$1 = state_30487;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30535_34002 = state_30487__$1;
(statearr_30535_34002[(1)] = (8));

} else {
var statearr_30539_34003 = state_30487__$1;
(statearr_30539_34003[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30493 === (14))){
var inst_30474 = (state_30487[(2)]);
var state_30487__$1 = state_30487;
var statearr_30545_34004 = state_30487__$1;
(statearr_30545_34004[(2)] = inst_30474);

(statearr_30545_34004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30493 === (10))){
var inst_30464 = (state_30487[(2)]);
var state_30487__$1 = state_30487;
var statearr_30576_34006 = state_30487__$1;
(statearr_30576_34006[(2)] = inst_30464);

(statearr_30576_34006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30493 === (8))){
var inst_30459 = cljs.core.async.close_BANG_(to);
var state_30487__$1 = state_30487;
var statearr_30578_34010 = state_30487__$1;
(statearr_30578_34010[(2)] = inst_30459);

(statearr_30578_34010[(1)] = (10));


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
var cljs$core$async$state_machine__29502__auto__ = null;
var cljs$core$async$state_machine__29502__auto____0 = (function (){
var statearr_30583 = [null,null,null,null,null,null,null,null];
(statearr_30583[(0)] = cljs$core$async$state_machine__29502__auto__);

(statearr_30583[(1)] = (1));

return statearr_30583;
});
var cljs$core$async$state_machine__29502__auto____1 = (function (state_30487){
while(true){
var ret_value__29503__auto__ = (function (){try{while(true){
var result__29504__auto__ = switch__29501__auto__(state_30487);
if(cljs.core.keyword_identical_QMARK_(result__29504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29504__auto__;
}
break;
}
}catch (e30585){var ex__29505__auto__ = e30585;
var statearr_30586_34017 = state_30487;
(statearr_30586_34017[(2)] = ex__29505__auto__);


if(cljs.core.seq((state_30487[(4)]))){
var statearr_30587_34023 = state_30487;
(statearr_30587_34023[(1)] = cljs.core.first((state_30487[(4)])));

} else {
throw ex__29505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34024 = state_30487;
state_30487 = G__34024;
continue;
} else {
return ret_value__29503__auto__;
}
break;
}
});
cljs$core$async$state_machine__29502__auto__ = function(state_30487){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29502__auto____1.call(this,state_30487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29502__auto____0;
cljs$core$async$state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29502__auto____1;
return cljs$core$async$state_machine__29502__auto__;
})()
})();
var state__30069__auto__ = (function (){var statearr_30591 = f__30068__auto__();
(statearr_30591[(6)] = c__30067__auto___33974);

return statearr_30591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30069__auto__);
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
var process__$1 = (function (p__30611){
var vec__30612 = p__30611;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30612,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30612,(1),null);
var job = vec__30612;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30067__auto___34031 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30068__auto__ = (function (){var switch__29501__auto__ = (function (state_30623){
var state_val_30624 = (state_30623[(1)]);
if((state_val_30624 === (1))){
var state_30623__$1 = state_30623;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30623__$1,(2),res,v);
} else {
if((state_val_30624 === (2))){
var inst_30618 = (state_30623[(2)]);
var inst_30621 = cljs.core.async.close_BANG_(res);
var state_30623__$1 = (function (){var statearr_30629 = state_30623;
(statearr_30629[(7)] = inst_30618);

return statearr_30629;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30623__$1,inst_30621);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29502__auto____0 = (function (){
var statearr_30632 = [null,null,null,null,null,null,null,null];
(statearr_30632[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29502__auto__);

(statearr_30632[(1)] = (1));

return statearr_30632;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29502__auto____1 = (function (state_30623){
while(true){
var ret_value__29503__auto__ = (function (){try{while(true){
var result__29504__auto__ = switch__29501__auto__(state_30623);
if(cljs.core.keyword_identical_QMARK_(result__29504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29504__auto__;
}
break;
}
}catch (e30633){var ex__29505__auto__ = e30633;
var statearr_30634_34046 = state_30623;
(statearr_30634_34046[(2)] = ex__29505__auto__);


if(cljs.core.seq((state_30623[(4)]))){
var statearr_30635_34047 = state_30623;
(statearr_30635_34047[(1)] = cljs.core.first((state_30623[(4)])));

} else {
throw ex__29505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34052 = state_30623;
state_30623 = G__34052;
continue;
} else {
return ret_value__29503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29502__auto__ = function(state_30623){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29502__auto____1.call(this,state_30623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29502__auto__;
})()
})();
var state__30069__auto__ = (function (){var statearr_30651 = f__30068__auto__();
(statearr_30651[(6)] = c__30067__auto___34031);

return statearr_30651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30069__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30659){
var vec__30660 = p__30659;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30660,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30660,(1),null);
var job = vec__30660;
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
var n__5636__auto___34053 = n;
var __34054 = (0);
while(true){
if((__34054 < n__5636__auto___34053)){
var G__30663_34057 = type;
var G__30663_34058__$1 = (((G__30663_34057 instanceof cljs.core.Keyword))?G__30663_34057.fqn:null);
switch (G__30663_34058__$1) {
case "compute":
var c__30067__auto___34062 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34054,c__30067__auto___34062,G__30663_34057,G__30663_34058__$1,n__5636__auto___34053,jobs,results,process__$1,async){
return (function (){
var f__30068__auto__ = (function (){var switch__29501__auto__ = ((function (__34054,c__30067__auto___34062,G__30663_34057,G__30663_34058__$1,n__5636__auto___34053,jobs,results,process__$1,async){
return (function (state_30695){
var state_val_30696 = (state_30695[(1)]);
if((state_val_30696 === (1))){
var state_30695__$1 = state_30695;
var statearr_30702_34067 = state_30695__$1;
(statearr_30702_34067[(2)] = null);

(statearr_30702_34067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30696 === (2))){
var state_30695__$1 = state_30695;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30695__$1,(4),jobs);
} else {
if((state_val_30696 === (3))){
var inst_30693 = (state_30695[(2)]);
var state_30695__$1 = state_30695;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30695__$1,inst_30693);
} else {
if((state_val_30696 === (4))){
var inst_30680 = (state_30695[(2)]);
var inst_30681 = process__$1(inst_30680);
var state_30695__$1 = state_30695;
if(cljs.core.truth_(inst_30681)){
var statearr_30704_34071 = state_30695__$1;
(statearr_30704_34071[(1)] = (5));

} else {
var statearr_30706_34072 = state_30695__$1;
(statearr_30706_34072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30696 === (5))){
var state_30695__$1 = state_30695;
var statearr_30707_34073 = state_30695__$1;
(statearr_30707_34073[(2)] = null);

(statearr_30707_34073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30696 === (6))){
var state_30695__$1 = state_30695;
var statearr_30711_34074 = state_30695__$1;
(statearr_30711_34074[(2)] = null);

(statearr_30711_34074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30696 === (7))){
var inst_30687 = (state_30695[(2)]);
var state_30695__$1 = state_30695;
var statearr_30714_34075 = state_30695__$1;
(statearr_30714_34075[(2)] = inst_30687);

(statearr_30714_34075[(1)] = (3));


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
});})(__34054,c__30067__auto___34062,G__30663_34057,G__30663_34058__$1,n__5636__auto___34053,jobs,results,process__$1,async))
;
return ((function (__34054,switch__29501__auto__,c__30067__auto___34062,G__30663_34057,G__30663_34058__$1,n__5636__auto___34053,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29502__auto____0 = (function (){
var statearr_30722 = [null,null,null,null,null,null,null];
(statearr_30722[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29502__auto__);

(statearr_30722[(1)] = (1));

return statearr_30722;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29502__auto____1 = (function (state_30695){
while(true){
var ret_value__29503__auto__ = (function (){try{while(true){
var result__29504__auto__ = switch__29501__auto__(state_30695);
if(cljs.core.keyword_identical_QMARK_(result__29504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29504__auto__;
}
break;
}
}catch (e30729){var ex__29505__auto__ = e30729;
var statearr_30731_34076 = state_30695;
(statearr_30731_34076[(2)] = ex__29505__auto__);


if(cljs.core.seq((state_30695[(4)]))){
var statearr_30734_34077 = state_30695;
(statearr_30734_34077[(1)] = cljs.core.first((state_30695[(4)])));

} else {
throw ex__29505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34082 = state_30695;
state_30695 = G__34082;
continue;
} else {
return ret_value__29503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29502__auto__ = function(state_30695){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29502__auto____1.call(this,state_30695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29502__auto__;
})()
;})(__34054,switch__29501__auto__,c__30067__auto___34062,G__30663_34057,G__30663_34058__$1,n__5636__auto___34053,jobs,results,process__$1,async))
})();
var state__30069__auto__ = (function (){var statearr_30745 = f__30068__auto__();
(statearr_30745[(6)] = c__30067__auto___34062);

return statearr_30745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30069__auto__);
});})(__34054,c__30067__auto___34062,G__30663_34057,G__30663_34058__$1,n__5636__auto___34053,jobs,results,process__$1,async))
);


break;
case "async":
var c__30067__auto___34086 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34054,c__30067__auto___34086,G__30663_34057,G__30663_34058__$1,n__5636__auto___34053,jobs,results,process__$1,async){
return (function (){
var f__30068__auto__ = (function (){var switch__29501__auto__ = ((function (__34054,c__30067__auto___34086,G__30663_34057,G__30663_34058__$1,n__5636__auto___34053,jobs,results,process__$1,async){
return (function (state_30766){
var state_val_30767 = (state_30766[(1)]);
if((state_val_30767 === (1))){
var state_30766__$1 = state_30766;
var statearr_30786_34091 = state_30766__$1;
(statearr_30786_34091[(2)] = null);

(statearr_30786_34091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30767 === (2))){
var state_30766__$1 = state_30766;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30766__$1,(4),jobs);
} else {
if((state_val_30767 === (3))){
var inst_30764 = (state_30766[(2)]);
var state_30766__$1 = state_30766;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30766__$1,inst_30764);
} else {
if((state_val_30767 === (4))){
var inst_30751 = (state_30766[(2)]);
var inst_30753 = async(inst_30751);
var state_30766__$1 = state_30766;
if(cljs.core.truth_(inst_30753)){
var statearr_30793_34104 = state_30766__$1;
(statearr_30793_34104[(1)] = (5));

} else {
var statearr_30794_34105 = state_30766__$1;
(statearr_30794_34105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30767 === (5))){
var state_30766__$1 = state_30766;
var statearr_30795_34106 = state_30766__$1;
(statearr_30795_34106[(2)] = null);

(statearr_30795_34106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30767 === (6))){
var state_30766__$1 = state_30766;
var statearr_30797_34112 = state_30766__$1;
(statearr_30797_34112[(2)] = null);

(statearr_30797_34112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30767 === (7))){
var inst_30762 = (state_30766[(2)]);
var state_30766__$1 = state_30766;
var statearr_30799_34113 = state_30766__$1;
(statearr_30799_34113[(2)] = inst_30762);

(statearr_30799_34113[(1)] = (3));


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
});})(__34054,c__30067__auto___34086,G__30663_34057,G__30663_34058__$1,n__5636__auto___34053,jobs,results,process__$1,async))
;
return ((function (__34054,switch__29501__auto__,c__30067__auto___34086,G__30663_34057,G__30663_34058__$1,n__5636__auto___34053,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29502__auto____0 = (function (){
var statearr_30800 = [null,null,null,null,null,null,null];
(statearr_30800[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29502__auto__);

(statearr_30800[(1)] = (1));

return statearr_30800;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29502__auto____1 = (function (state_30766){
while(true){
var ret_value__29503__auto__ = (function (){try{while(true){
var result__29504__auto__ = switch__29501__auto__(state_30766);
if(cljs.core.keyword_identical_QMARK_(result__29504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29504__auto__;
}
break;
}
}catch (e30801){var ex__29505__auto__ = e30801;
var statearr_30803_34118 = state_30766;
(statearr_30803_34118[(2)] = ex__29505__auto__);


if(cljs.core.seq((state_30766[(4)]))){
var statearr_30804_34119 = state_30766;
(statearr_30804_34119[(1)] = cljs.core.first((state_30766[(4)])));

} else {
throw ex__29505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34120 = state_30766;
state_30766 = G__34120;
continue;
} else {
return ret_value__29503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29502__auto__ = function(state_30766){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29502__auto____1.call(this,state_30766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29502__auto__;
})()
;})(__34054,switch__29501__auto__,c__30067__auto___34086,G__30663_34057,G__30663_34058__$1,n__5636__auto___34053,jobs,results,process__$1,async))
})();
var state__30069__auto__ = (function (){var statearr_30807 = f__30068__auto__();
(statearr_30807[(6)] = c__30067__auto___34086);

return statearr_30807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30069__auto__);
});})(__34054,c__30067__auto___34086,G__30663_34057,G__30663_34058__$1,n__5636__auto___34053,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30663_34058__$1)].join('')));

}

var G__34125 = (__34054 + (1));
__34054 = G__34125;
continue;
} else {
}
break;
}

var c__30067__auto___34126 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30068__auto__ = (function (){var switch__29501__auto__ = (function (state_30838){
var state_val_30839 = (state_30838[(1)]);
if((state_val_30839 === (7))){
var inst_30833 = (state_30838[(2)]);
var state_30838__$1 = state_30838;
var statearr_30845_34130 = state_30838__$1;
(statearr_30845_34130[(2)] = inst_30833);

(statearr_30845_34130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (1))){
var state_30838__$1 = state_30838;
var statearr_30846_34133 = state_30838__$1;
(statearr_30846_34133[(2)] = null);

(statearr_30846_34133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (4))){
var inst_30815 = (state_30838[(7)]);
var inst_30815__$1 = (state_30838[(2)]);
var inst_30816 = (inst_30815__$1 == null);
var state_30838__$1 = (function (){var statearr_30847 = state_30838;
(statearr_30847[(7)] = inst_30815__$1);

return statearr_30847;
})();
if(cljs.core.truth_(inst_30816)){
var statearr_30871_34138 = state_30838__$1;
(statearr_30871_34138[(1)] = (5));

} else {
var statearr_30872_34140 = state_30838__$1;
(statearr_30872_34140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (6))){
var inst_30820 = (state_30838[(8)]);
var inst_30815 = (state_30838[(7)]);
var inst_30820__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30824 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30825 = [inst_30815,inst_30820__$1];
var inst_30826 = (new cljs.core.PersistentVector(null,2,(5),inst_30824,inst_30825,null));
var state_30838__$1 = (function (){var statearr_30874 = state_30838;
(statearr_30874[(8)] = inst_30820__$1);

return statearr_30874;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30838__$1,(8),jobs,inst_30826);
} else {
if((state_val_30839 === (3))){
var inst_30836 = (state_30838[(2)]);
var state_30838__$1 = state_30838;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30838__$1,inst_30836);
} else {
if((state_val_30839 === (2))){
var state_30838__$1 = state_30838;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30838__$1,(4),from);
} else {
if((state_val_30839 === (9))){
var inst_30830 = (state_30838[(2)]);
var state_30838__$1 = (function (){var statearr_30877 = state_30838;
(statearr_30877[(9)] = inst_30830);

return statearr_30877;
})();
var statearr_30878_34154 = state_30838__$1;
(statearr_30878_34154[(2)] = null);

(statearr_30878_34154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (5))){
var inst_30818 = cljs.core.async.close_BANG_(jobs);
var state_30838__$1 = state_30838;
var statearr_30880_34159 = state_30838__$1;
(statearr_30880_34159[(2)] = inst_30818);

(statearr_30880_34159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (8))){
var inst_30820 = (state_30838[(8)]);
var inst_30828 = (state_30838[(2)]);
var state_30838__$1 = (function (){var statearr_30881 = state_30838;
(statearr_30881[(10)] = inst_30828);

return statearr_30881;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30838__$1,(9),results,inst_30820);
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
var cljs$core$async$pipeline_STAR__$_state_machine__29502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29502__auto____0 = (function (){
var statearr_30889 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30889[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29502__auto__);

(statearr_30889[(1)] = (1));

return statearr_30889;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29502__auto____1 = (function (state_30838){
while(true){
var ret_value__29503__auto__ = (function (){try{while(true){
var result__29504__auto__ = switch__29501__auto__(state_30838);
if(cljs.core.keyword_identical_QMARK_(result__29504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29504__auto__;
}
break;
}
}catch (e30892){var ex__29505__auto__ = e30892;
var statearr_30895_34187 = state_30838;
(statearr_30895_34187[(2)] = ex__29505__auto__);


if(cljs.core.seq((state_30838[(4)]))){
var statearr_30896_34190 = state_30838;
(statearr_30896_34190[(1)] = cljs.core.first((state_30838[(4)])));

} else {
throw ex__29505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34198 = state_30838;
state_30838 = G__34198;
continue;
} else {
return ret_value__29503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29502__auto__ = function(state_30838){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29502__auto____1.call(this,state_30838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29502__auto__;
})()
})();
var state__30069__auto__ = (function (){var statearr_30897 = f__30068__auto__();
(statearr_30897[(6)] = c__30067__auto___34126);

return statearr_30897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30069__auto__);
}));


var c__30067__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30068__auto__ = (function (){var switch__29501__auto__ = (function (state_30973){
var state_val_30977 = (state_30973[(1)]);
if((state_val_30977 === (7))){
var inst_30949 = (state_30973[(2)]);
var state_30973__$1 = state_30973;
var statearr_30998_34215 = state_30973__$1;
(statearr_30998_34215[(2)] = inst_30949);

(statearr_30998_34215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30977 === (20))){
var state_30973__$1 = state_30973;
var statearr_31003_34217 = state_30973__$1;
(statearr_31003_34217[(2)] = null);

(statearr_31003_34217[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30977 === (1))){
var state_30973__$1 = state_30973;
var statearr_31008_34219 = state_30973__$1;
(statearr_31008_34219[(2)] = null);

(statearr_31008_34219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30977 === (4))){
var inst_30909 = (state_30973[(7)]);
var inst_30909__$1 = (state_30973[(2)]);
var inst_30910 = (inst_30909__$1 == null);
var state_30973__$1 = (function (){var statearr_31011 = state_30973;
(statearr_31011[(7)] = inst_30909__$1);

return statearr_31011;
})();
if(cljs.core.truth_(inst_30910)){
var statearr_31012_34225 = state_30973__$1;
(statearr_31012_34225[(1)] = (5));

} else {
var statearr_31013_34227 = state_30973__$1;
(statearr_31013_34227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30977 === (15))){
var inst_30930 = (state_30973[(8)]);
var state_30973__$1 = state_30973;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30973__$1,(18),to,inst_30930);
} else {
if((state_val_30977 === (21))){
var inst_30944 = (state_30973[(2)]);
var state_30973__$1 = state_30973;
var statearr_31014_34231 = state_30973__$1;
(statearr_31014_34231[(2)] = inst_30944);

(statearr_31014_34231[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30977 === (13))){
var inst_30946 = (state_30973[(2)]);
var state_30973__$1 = (function (){var statearr_31015 = state_30973;
(statearr_31015[(9)] = inst_30946);

return statearr_31015;
})();
var statearr_31016_34237 = state_30973__$1;
(statearr_31016_34237[(2)] = null);

(statearr_31016_34237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30977 === (6))){
var inst_30909 = (state_30973[(7)]);
var state_30973__$1 = state_30973;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30973__$1,(11),inst_30909);
} else {
if((state_val_30977 === (17))){
var inst_30938 = (state_30973[(2)]);
var state_30973__$1 = state_30973;
if(cljs.core.truth_(inst_30938)){
var statearr_31018_34240 = state_30973__$1;
(statearr_31018_34240[(1)] = (19));

} else {
var statearr_31019_34242 = state_30973__$1;
(statearr_31019_34242[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30977 === (3))){
var inst_30951 = (state_30973[(2)]);
var state_30973__$1 = state_30973;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30973__$1,inst_30951);
} else {
if((state_val_30977 === (12))){
var inst_30924 = (state_30973[(10)]);
var state_30973__$1 = state_30973;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30973__$1,(14),inst_30924);
} else {
if((state_val_30977 === (2))){
var state_30973__$1 = state_30973;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30973__$1,(4),results);
} else {
if((state_val_30977 === (19))){
var state_30973__$1 = state_30973;
var statearr_31020_34247 = state_30973__$1;
(statearr_31020_34247[(2)] = null);

(statearr_31020_34247[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30977 === (11))){
var inst_30924 = (state_30973[(2)]);
var state_30973__$1 = (function (){var statearr_31021 = state_30973;
(statearr_31021[(10)] = inst_30924);

return statearr_31021;
})();
var statearr_31022_34250 = state_30973__$1;
(statearr_31022_34250[(2)] = null);

(statearr_31022_34250[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30977 === (9))){
var state_30973__$1 = state_30973;
var statearr_31023_34252 = state_30973__$1;
(statearr_31023_34252[(2)] = null);

(statearr_31023_34252[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30977 === (5))){
var state_30973__$1 = state_30973;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31027_34259 = state_30973__$1;
(statearr_31027_34259[(1)] = (8));

} else {
var statearr_31028_34260 = state_30973__$1;
(statearr_31028_34260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30977 === (14))){
var inst_30930 = (state_30973[(8)]);
var inst_30932 = (state_30973[(11)]);
var inst_30930__$1 = (state_30973[(2)]);
var inst_30931 = (inst_30930__$1 == null);
var inst_30932__$1 = cljs.core.not(inst_30931);
var state_30973__$1 = (function (){var statearr_31030 = state_30973;
(statearr_31030[(8)] = inst_30930__$1);

(statearr_31030[(11)] = inst_30932__$1);

return statearr_31030;
})();
if(inst_30932__$1){
var statearr_31034_34262 = state_30973__$1;
(statearr_31034_34262[(1)] = (15));

} else {
var statearr_31035_34263 = state_30973__$1;
(statearr_31035_34263[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30977 === (16))){
var inst_30932 = (state_30973[(11)]);
var state_30973__$1 = state_30973;
var statearr_31040_34266 = state_30973__$1;
(statearr_31040_34266[(2)] = inst_30932);

(statearr_31040_34266[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30977 === (10))){
var inst_30920 = (state_30973[(2)]);
var state_30973__$1 = state_30973;
var statearr_31046_34274 = state_30973__$1;
(statearr_31046_34274[(2)] = inst_30920);

(statearr_31046_34274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30977 === (18))){
var inst_30935 = (state_30973[(2)]);
var state_30973__$1 = state_30973;
var statearr_31047_34276 = state_30973__$1;
(statearr_31047_34276[(2)] = inst_30935);

(statearr_31047_34276[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30977 === (8))){
var inst_30915 = cljs.core.async.close_BANG_(to);
var state_30973__$1 = state_30973;
var statearr_31049_34281 = state_30973__$1;
(statearr_31049_34281[(2)] = inst_30915);

(statearr_31049_34281[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__29502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29502__auto____0 = (function (){
var statearr_31055 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31055[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29502__auto__);

(statearr_31055[(1)] = (1));

return statearr_31055;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29502__auto____1 = (function (state_30973){
while(true){
var ret_value__29503__auto__ = (function (){try{while(true){
var result__29504__auto__ = switch__29501__auto__(state_30973);
if(cljs.core.keyword_identical_QMARK_(result__29504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29504__auto__;
}
break;
}
}catch (e31056){var ex__29505__auto__ = e31056;
var statearr_31057_34292 = state_30973;
(statearr_31057_34292[(2)] = ex__29505__auto__);


if(cljs.core.seq((state_30973[(4)]))){
var statearr_31059_34293 = state_30973;
(statearr_31059_34293[(1)] = cljs.core.first((state_30973[(4)])));

} else {
throw ex__29505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34294 = state_30973;
state_30973 = G__34294;
continue;
} else {
return ret_value__29503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29502__auto__ = function(state_30973){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29502__auto____1.call(this,state_30973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29502__auto__;
})()
})();
var state__30069__auto__ = (function (){var statearr_31073 = f__30068__auto__();
(statearr_31073[(6)] = c__30067__auto__);

return statearr_31073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30069__auto__);
}));

return c__30067__auto__;
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
var G__31080 = arguments.length;
switch (G__31080) {
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
var G__31095 = arguments.length;
switch (G__31095) {
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
var G__31110 = arguments.length;
switch (G__31110) {
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
var c__30067__auto___34335 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30068__auto__ = (function (){var switch__29501__auto__ = (function (state_31142){
var state_val_31143 = (state_31142[(1)]);
if((state_val_31143 === (7))){
var inst_31138 = (state_31142[(2)]);
var state_31142__$1 = state_31142;
var statearr_31150_34338 = state_31142__$1;
(statearr_31150_34338[(2)] = inst_31138);

(statearr_31150_34338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (1))){
var state_31142__$1 = state_31142;
var statearr_31151_34342 = state_31142__$1;
(statearr_31151_34342[(2)] = null);

(statearr_31151_34342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (4))){
var inst_31119 = (state_31142[(7)]);
var inst_31119__$1 = (state_31142[(2)]);
var inst_31120 = (inst_31119__$1 == null);
var state_31142__$1 = (function (){var statearr_31152 = state_31142;
(statearr_31152[(7)] = inst_31119__$1);

return statearr_31152;
})();
if(cljs.core.truth_(inst_31120)){
var statearr_31153_34350 = state_31142__$1;
(statearr_31153_34350[(1)] = (5));

} else {
var statearr_31154_34355 = state_31142__$1;
(statearr_31154_34355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (13))){
var state_31142__$1 = state_31142;
var statearr_31155_34359 = state_31142__$1;
(statearr_31155_34359[(2)] = null);

(statearr_31155_34359[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (6))){
var inst_31119 = (state_31142[(7)]);
var inst_31125 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31119) : p.call(null,inst_31119));
var state_31142__$1 = state_31142;
if(cljs.core.truth_(inst_31125)){
var statearr_31156_34362 = state_31142__$1;
(statearr_31156_34362[(1)] = (9));

} else {
var statearr_31159_34367 = state_31142__$1;
(statearr_31159_34367[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (3))){
var inst_31140 = (state_31142[(2)]);
var state_31142__$1 = state_31142;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31142__$1,inst_31140);
} else {
if((state_val_31143 === (12))){
var state_31142__$1 = state_31142;
var statearr_31165_34372 = state_31142__$1;
(statearr_31165_34372[(2)] = null);

(statearr_31165_34372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (2))){
var state_31142__$1 = state_31142;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31142__$1,(4),ch);
} else {
if((state_val_31143 === (11))){
var inst_31119 = (state_31142[(7)]);
var inst_31129 = (state_31142[(2)]);
var state_31142__$1 = state_31142;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31142__$1,(8),inst_31129,inst_31119);
} else {
if((state_val_31143 === (9))){
var state_31142__$1 = state_31142;
var statearr_31166_34378 = state_31142__$1;
(statearr_31166_34378[(2)] = tc);

(statearr_31166_34378[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (5))){
var inst_31122 = cljs.core.async.close_BANG_(tc);
var inst_31123 = cljs.core.async.close_BANG_(fc);
var state_31142__$1 = (function (){var statearr_31171 = state_31142;
(statearr_31171[(8)] = inst_31122);

return statearr_31171;
})();
var statearr_31172_34380 = state_31142__$1;
(statearr_31172_34380[(2)] = inst_31123);

(statearr_31172_34380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (14))){
var inst_31136 = (state_31142[(2)]);
var state_31142__$1 = state_31142;
var statearr_31173_34388 = state_31142__$1;
(statearr_31173_34388[(2)] = inst_31136);

(statearr_31173_34388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (10))){
var state_31142__$1 = state_31142;
var statearr_31175_34393 = state_31142__$1;
(statearr_31175_34393[(2)] = fc);

(statearr_31175_34393[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (8))){
var inst_31131 = (state_31142[(2)]);
var state_31142__$1 = state_31142;
if(cljs.core.truth_(inst_31131)){
var statearr_31178_34399 = state_31142__$1;
(statearr_31178_34399[(1)] = (12));

} else {
var statearr_31180_34403 = state_31142__$1;
(statearr_31180_34403[(1)] = (13));

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
var cljs$core$async$state_machine__29502__auto__ = null;
var cljs$core$async$state_machine__29502__auto____0 = (function (){
var statearr_31184 = [null,null,null,null,null,null,null,null,null];
(statearr_31184[(0)] = cljs$core$async$state_machine__29502__auto__);

(statearr_31184[(1)] = (1));

return statearr_31184;
});
var cljs$core$async$state_machine__29502__auto____1 = (function (state_31142){
while(true){
var ret_value__29503__auto__ = (function (){try{while(true){
var result__29504__auto__ = switch__29501__auto__(state_31142);
if(cljs.core.keyword_identical_QMARK_(result__29504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29504__auto__;
}
break;
}
}catch (e31185){var ex__29505__auto__ = e31185;
var statearr_31186_34411 = state_31142;
(statearr_31186_34411[(2)] = ex__29505__auto__);


if(cljs.core.seq((state_31142[(4)]))){
var statearr_31187_34416 = state_31142;
(statearr_31187_34416[(1)] = cljs.core.first((state_31142[(4)])));

} else {
throw ex__29505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34417 = state_31142;
state_31142 = G__34417;
continue;
} else {
return ret_value__29503__auto__;
}
break;
}
});
cljs$core$async$state_machine__29502__auto__ = function(state_31142){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29502__auto____1.call(this,state_31142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29502__auto____0;
cljs$core$async$state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29502__auto____1;
return cljs$core$async$state_machine__29502__auto__;
})()
})();
var state__30069__auto__ = (function (){var statearr_31192 = f__30068__auto__();
(statearr_31192[(6)] = c__30067__auto___34335);

return statearr_31192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30069__auto__);
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
var c__30067__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30068__auto__ = (function (){var switch__29501__auto__ = (function (state_31217){
var state_val_31218 = (state_31217[(1)]);
if((state_val_31218 === (7))){
var inst_31213 = (state_31217[(2)]);
var state_31217__$1 = state_31217;
var statearr_31227_34420 = state_31217__$1;
(statearr_31227_34420[(2)] = inst_31213);

(statearr_31227_34420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31218 === (1))){
var inst_31194 = init;
var inst_31196 = inst_31194;
var state_31217__$1 = (function (){var statearr_31228 = state_31217;
(statearr_31228[(7)] = inst_31196);

return statearr_31228;
})();
var statearr_31229_34423 = state_31217__$1;
(statearr_31229_34423[(2)] = null);

(statearr_31229_34423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31218 === (4))){
var inst_31200 = (state_31217[(8)]);
var inst_31200__$1 = (state_31217[(2)]);
var inst_31201 = (inst_31200__$1 == null);
var state_31217__$1 = (function (){var statearr_31231 = state_31217;
(statearr_31231[(8)] = inst_31200__$1);

return statearr_31231;
})();
if(cljs.core.truth_(inst_31201)){
var statearr_31232_34429 = state_31217__$1;
(statearr_31232_34429[(1)] = (5));

} else {
var statearr_31233_34431 = state_31217__$1;
(statearr_31233_34431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31218 === (6))){
var inst_31200 = (state_31217[(8)]);
var inst_31196 = (state_31217[(7)]);
var inst_31204 = (state_31217[(9)]);
var inst_31204__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31196,inst_31200) : f.call(null,inst_31196,inst_31200));
var inst_31205 = cljs.core.reduced_QMARK_(inst_31204__$1);
var state_31217__$1 = (function (){var statearr_31237 = state_31217;
(statearr_31237[(9)] = inst_31204__$1);

return statearr_31237;
})();
if(inst_31205){
var statearr_31240_34441 = state_31217__$1;
(statearr_31240_34441[(1)] = (8));

} else {
var statearr_31241_34442 = state_31217__$1;
(statearr_31241_34442[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31218 === (3))){
var inst_31215 = (state_31217[(2)]);
var state_31217__$1 = state_31217;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31217__$1,inst_31215);
} else {
if((state_val_31218 === (2))){
var state_31217__$1 = state_31217;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31217__$1,(4),ch);
} else {
if((state_val_31218 === (9))){
var inst_31204 = (state_31217[(9)]);
var inst_31196 = inst_31204;
var state_31217__$1 = (function (){var statearr_31243 = state_31217;
(statearr_31243[(7)] = inst_31196);

return statearr_31243;
})();
var statearr_31244_34447 = state_31217__$1;
(statearr_31244_34447[(2)] = null);

(statearr_31244_34447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31218 === (5))){
var inst_31196 = (state_31217[(7)]);
var state_31217__$1 = state_31217;
var statearr_31245_34448 = state_31217__$1;
(statearr_31245_34448[(2)] = inst_31196);

(statearr_31245_34448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31218 === (10))){
var inst_31211 = (state_31217[(2)]);
var state_31217__$1 = state_31217;
var statearr_31248_34452 = state_31217__$1;
(statearr_31248_34452[(2)] = inst_31211);

(statearr_31248_34452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31218 === (8))){
var inst_31204 = (state_31217[(9)]);
var inst_31207 = cljs.core.deref(inst_31204);
var state_31217__$1 = state_31217;
var statearr_31250_34453 = state_31217__$1;
(statearr_31250_34453[(2)] = inst_31207);

(statearr_31250_34453[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__29502__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29502__auto____0 = (function (){
var statearr_31256 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31256[(0)] = cljs$core$async$reduce_$_state_machine__29502__auto__);

(statearr_31256[(1)] = (1));

return statearr_31256;
});
var cljs$core$async$reduce_$_state_machine__29502__auto____1 = (function (state_31217){
while(true){
var ret_value__29503__auto__ = (function (){try{while(true){
var result__29504__auto__ = switch__29501__auto__(state_31217);
if(cljs.core.keyword_identical_QMARK_(result__29504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29504__auto__;
}
break;
}
}catch (e31257){var ex__29505__auto__ = e31257;
var statearr_31258_34459 = state_31217;
(statearr_31258_34459[(2)] = ex__29505__auto__);


if(cljs.core.seq((state_31217[(4)]))){
var statearr_31259_34461 = state_31217;
(statearr_31259_34461[(1)] = cljs.core.first((state_31217[(4)])));

} else {
throw ex__29505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34462 = state_31217;
state_31217 = G__34462;
continue;
} else {
return ret_value__29503__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29502__auto__ = function(state_31217){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29502__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29502__auto____1.call(this,state_31217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29502__auto____0;
cljs$core$async$reduce_$_state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29502__auto____1;
return cljs$core$async$reduce_$_state_machine__29502__auto__;
})()
})();
var state__30069__auto__ = (function (){var statearr_31264 = f__30068__auto__();
(statearr_31264[(6)] = c__30067__auto__);

return statearr_31264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30069__auto__);
}));

return c__30067__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30067__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30068__auto__ = (function (){var switch__29501__auto__ = (function (state_31274){
var state_val_31275 = (state_31274[(1)]);
if((state_val_31275 === (1))){
var inst_31268 = cljs.core.async.reduce(f__$1,init,ch);
var state_31274__$1 = state_31274;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31274__$1,(2),inst_31268);
} else {
if((state_val_31275 === (2))){
var inst_31271 = (state_31274[(2)]);
var inst_31272 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31271) : f__$1.call(null,inst_31271));
var state_31274__$1 = state_31274;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31274__$1,inst_31272);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29502__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29502__auto____0 = (function (){
var statearr_31283 = [null,null,null,null,null,null,null];
(statearr_31283[(0)] = cljs$core$async$transduce_$_state_machine__29502__auto__);

(statearr_31283[(1)] = (1));

return statearr_31283;
});
var cljs$core$async$transduce_$_state_machine__29502__auto____1 = (function (state_31274){
while(true){
var ret_value__29503__auto__ = (function (){try{while(true){
var result__29504__auto__ = switch__29501__auto__(state_31274);
if(cljs.core.keyword_identical_QMARK_(result__29504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29504__auto__;
}
break;
}
}catch (e31285){var ex__29505__auto__ = e31285;
var statearr_31290_34466 = state_31274;
(statearr_31290_34466[(2)] = ex__29505__auto__);


if(cljs.core.seq((state_31274[(4)]))){
var statearr_31294_34467 = state_31274;
(statearr_31294_34467[(1)] = cljs.core.first((state_31274[(4)])));

} else {
throw ex__29505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34473 = state_31274;
state_31274 = G__34473;
continue;
} else {
return ret_value__29503__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29502__auto__ = function(state_31274){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29502__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29502__auto____1.call(this,state_31274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29502__auto____0;
cljs$core$async$transduce_$_state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29502__auto____1;
return cljs$core$async$transduce_$_state_machine__29502__auto__;
})()
})();
var state__30069__auto__ = (function (){var statearr_31296 = f__30068__auto__();
(statearr_31296[(6)] = c__30067__auto__);

return statearr_31296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30069__auto__);
}));

return c__30067__auto__;
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
var G__31306 = arguments.length;
switch (G__31306) {
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
var c__30067__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30068__auto__ = (function (){var switch__29501__auto__ = (function (state_31349){
var state_val_31350 = (state_31349[(1)]);
if((state_val_31350 === (7))){
var inst_31318 = (state_31349[(2)]);
var state_31349__$1 = state_31349;
var statearr_31352_34479 = state_31349__$1;
(statearr_31352_34479[(2)] = inst_31318);

(statearr_31352_34479[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (1))){
var inst_31310 = cljs.core.seq(coll);
var inst_31311 = inst_31310;
var state_31349__$1 = (function (){var statearr_31353 = state_31349;
(statearr_31353[(7)] = inst_31311);

return statearr_31353;
})();
var statearr_31355_34482 = state_31349__$1;
(statearr_31355_34482[(2)] = null);

(statearr_31355_34482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (4))){
var inst_31311 = (state_31349[(7)]);
var inst_31316 = cljs.core.first(inst_31311);
var state_31349__$1 = state_31349;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31349__$1,(7),ch,inst_31316);
} else {
if((state_val_31350 === (13))){
var inst_31331 = (state_31349[(2)]);
var state_31349__$1 = state_31349;
var statearr_31356_34486 = state_31349__$1;
(statearr_31356_34486[(2)] = inst_31331);

(statearr_31356_34486[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (6))){
var inst_31322 = (state_31349[(2)]);
var state_31349__$1 = state_31349;
if(cljs.core.truth_(inst_31322)){
var statearr_31358_34488 = state_31349__$1;
(statearr_31358_34488[(1)] = (8));

} else {
var statearr_31359_34489 = state_31349__$1;
(statearr_31359_34489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (3))){
var inst_31347 = (state_31349[(2)]);
var state_31349__$1 = state_31349;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31349__$1,inst_31347);
} else {
if((state_val_31350 === (12))){
var state_31349__$1 = state_31349;
var statearr_31360_34493 = state_31349__$1;
(statearr_31360_34493[(2)] = null);

(statearr_31360_34493[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (2))){
var inst_31311 = (state_31349[(7)]);
var state_31349__$1 = state_31349;
if(cljs.core.truth_(inst_31311)){
var statearr_31362_34494 = state_31349__$1;
(statearr_31362_34494[(1)] = (4));

} else {
var statearr_31363_34497 = state_31349__$1;
(statearr_31363_34497[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (11))){
var inst_31328 = cljs.core.async.close_BANG_(ch);
var state_31349__$1 = state_31349;
var statearr_31364_34500 = state_31349__$1;
(statearr_31364_34500[(2)] = inst_31328);

(statearr_31364_34500[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (9))){
var state_31349__$1 = state_31349;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31366_34501 = state_31349__$1;
(statearr_31366_34501[(1)] = (11));

} else {
var statearr_31367_34502 = state_31349__$1;
(statearr_31367_34502[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (5))){
var inst_31311 = (state_31349[(7)]);
var state_31349__$1 = state_31349;
var statearr_31368_34504 = state_31349__$1;
(statearr_31368_34504[(2)] = inst_31311);

(statearr_31368_34504[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (10))){
var inst_31333 = (state_31349[(2)]);
var state_31349__$1 = state_31349;
var statearr_31372_34505 = state_31349__$1;
(statearr_31372_34505[(2)] = inst_31333);

(statearr_31372_34505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (8))){
var inst_31311 = (state_31349[(7)]);
var inst_31324 = cljs.core.next(inst_31311);
var inst_31311__$1 = inst_31324;
var state_31349__$1 = (function (){var statearr_31373 = state_31349;
(statearr_31373[(7)] = inst_31311__$1);

return statearr_31373;
})();
var statearr_31374_34513 = state_31349__$1;
(statearr_31374_34513[(2)] = null);

(statearr_31374_34513[(1)] = (2));


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
var cljs$core$async$state_machine__29502__auto__ = null;
var cljs$core$async$state_machine__29502__auto____0 = (function (){
var statearr_31377 = [null,null,null,null,null,null,null,null];
(statearr_31377[(0)] = cljs$core$async$state_machine__29502__auto__);

(statearr_31377[(1)] = (1));

return statearr_31377;
});
var cljs$core$async$state_machine__29502__auto____1 = (function (state_31349){
while(true){
var ret_value__29503__auto__ = (function (){try{while(true){
var result__29504__auto__ = switch__29501__auto__(state_31349);
if(cljs.core.keyword_identical_QMARK_(result__29504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29504__auto__;
}
break;
}
}catch (e31381){var ex__29505__auto__ = e31381;
var statearr_31382_34534 = state_31349;
(statearr_31382_34534[(2)] = ex__29505__auto__);


if(cljs.core.seq((state_31349[(4)]))){
var statearr_31383_34536 = state_31349;
(statearr_31383_34536[(1)] = cljs.core.first((state_31349[(4)])));

} else {
throw ex__29505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34537 = state_31349;
state_31349 = G__34537;
continue;
} else {
return ret_value__29503__auto__;
}
break;
}
});
cljs$core$async$state_machine__29502__auto__ = function(state_31349){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29502__auto____1.call(this,state_31349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29502__auto____0;
cljs$core$async$state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29502__auto____1;
return cljs$core$async$state_machine__29502__auto__;
})()
})();
var state__30069__auto__ = (function (){var statearr_31387 = f__30068__auto__();
(statearr_31387[(6)] = c__30067__auto__);

return statearr_31387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30069__auto__);
}));

return c__30067__auto__;
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
var G__31389 = arguments.length;
switch (G__31389) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_34542 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_34542(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34545 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_34545(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34546 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_34546(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34547 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_34547(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31419 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31419 = (function (ch,cs,meta31420){
this.ch = ch;
this.cs = cs;
this.meta31420 = meta31420;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31421,meta31420__$1){
var self__ = this;
var _31421__$1 = this;
return (new cljs.core.async.t_cljs$core$async31419(self__.ch,self__.cs,meta31420__$1));
}));

(cljs.core.async.t_cljs$core$async31419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31421){
var self__ = this;
var _31421__$1 = this;
return self__.meta31420;
}));

(cljs.core.async.t_cljs$core$async31419.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31419.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31419.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31419.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31419.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31419.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31419.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31420","meta31420",196030260,null)], null);
}));

(cljs.core.async.t_cljs$core$async31419.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31419.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31419");

(cljs.core.async.t_cljs$core$async31419.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31419");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31419.
 */
cljs.core.async.__GT_t_cljs$core$async31419 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31419(ch__$1,cs__$1,meta31420){
return (new cljs.core.async.t_cljs$core$async31419(ch__$1,cs__$1,meta31420));
});

}

return (new cljs.core.async.t_cljs$core$async31419(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30067__auto___34548 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30068__auto__ = (function (){var switch__29501__auto__ = (function (state_31611){
var state_val_31612 = (state_31611[(1)]);
if((state_val_31612 === (7))){
var inst_31602 = (state_31611[(2)]);
var state_31611__$1 = state_31611;
var statearr_31615_34549 = state_31611__$1;
(statearr_31615_34549[(2)] = inst_31602);

(statearr_31615_34549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (20))){
var inst_31481 = (state_31611[(7)]);
var inst_31503 = cljs.core.first(inst_31481);
var inst_31504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31503,(0),null);
var inst_31505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31503,(1),null);
var state_31611__$1 = (function (){var statearr_31620 = state_31611;
(statearr_31620[(8)] = inst_31504);

return statearr_31620;
})();
if(cljs.core.truth_(inst_31505)){
var statearr_31621_34551 = state_31611__$1;
(statearr_31621_34551[(1)] = (22));

} else {
var statearr_31623_34553 = state_31611__$1;
(statearr_31623_34553[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (27))){
var inst_31444 = (state_31611[(9)]);
var inst_31546 = (state_31611[(10)]);
var inst_31541 = (state_31611[(11)]);
var inst_31539 = (state_31611[(12)]);
var inst_31546__$1 = cljs.core._nth(inst_31539,inst_31541);
var inst_31547 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31546__$1,inst_31444,done);
var state_31611__$1 = (function (){var statearr_31625 = state_31611;
(statearr_31625[(10)] = inst_31546__$1);

return statearr_31625;
})();
if(cljs.core.truth_(inst_31547)){
var statearr_31626_34554 = state_31611__$1;
(statearr_31626_34554[(1)] = (30));

} else {
var statearr_31627_34555 = state_31611__$1;
(statearr_31627_34555[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (1))){
var state_31611__$1 = state_31611;
var statearr_31628_34556 = state_31611__$1;
(statearr_31628_34556[(2)] = null);

(statearr_31628_34556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (24))){
var inst_31481 = (state_31611[(7)]);
var inst_31512 = (state_31611[(2)]);
var inst_31513 = cljs.core.next(inst_31481);
var inst_31453 = inst_31513;
var inst_31454 = null;
var inst_31455 = (0);
var inst_31456 = (0);
var state_31611__$1 = (function (){var statearr_31632 = state_31611;
(statearr_31632[(13)] = inst_31453);

(statearr_31632[(14)] = inst_31512);

(statearr_31632[(15)] = inst_31456);

(statearr_31632[(16)] = inst_31454);

(statearr_31632[(17)] = inst_31455);

return statearr_31632;
})();
var statearr_31633_34558 = state_31611__$1;
(statearr_31633_34558[(2)] = null);

(statearr_31633_34558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (39))){
var state_31611__$1 = state_31611;
var statearr_31637_34559 = state_31611__$1;
(statearr_31637_34559[(2)] = null);

(statearr_31637_34559[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (4))){
var inst_31444 = (state_31611[(9)]);
var inst_31444__$1 = (state_31611[(2)]);
var inst_31445 = (inst_31444__$1 == null);
var state_31611__$1 = (function (){var statearr_31638 = state_31611;
(statearr_31638[(9)] = inst_31444__$1);

return statearr_31638;
})();
if(cljs.core.truth_(inst_31445)){
var statearr_31639_34560 = state_31611__$1;
(statearr_31639_34560[(1)] = (5));

} else {
var statearr_31640_34561 = state_31611__$1;
(statearr_31640_34561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (15))){
var inst_31453 = (state_31611[(13)]);
var inst_31456 = (state_31611[(15)]);
var inst_31454 = (state_31611[(16)]);
var inst_31455 = (state_31611[(17)]);
var inst_31477 = (state_31611[(2)]);
var inst_31478 = (inst_31456 + (1));
var tmp31634 = inst_31453;
var tmp31635 = inst_31454;
var tmp31636 = inst_31455;
var inst_31453__$1 = tmp31634;
var inst_31454__$1 = tmp31635;
var inst_31455__$1 = tmp31636;
var inst_31456__$1 = inst_31478;
var state_31611__$1 = (function (){var statearr_31641 = state_31611;
(statearr_31641[(13)] = inst_31453__$1);

(statearr_31641[(15)] = inst_31456__$1);

(statearr_31641[(16)] = inst_31454__$1);

(statearr_31641[(18)] = inst_31477);

(statearr_31641[(17)] = inst_31455__$1);

return statearr_31641;
})();
var statearr_31642_34562 = state_31611__$1;
(statearr_31642_34562[(2)] = null);

(statearr_31642_34562[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (21))){
var inst_31516 = (state_31611[(2)]);
var state_31611__$1 = state_31611;
var statearr_31646_34563 = state_31611__$1;
(statearr_31646_34563[(2)] = inst_31516);

(statearr_31646_34563[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (31))){
var inst_31546 = (state_31611[(10)]);
var inst_31559 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31546);
var state_31611__$1 = state_31611;
var statearr_31651_34564 = state_31611__$1;
(statearr_31651_34564[(2)] = inst_31559);

(statearr_31651_34564[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (32))){
var inst_31540 = (state_31611[(19)]);
var inst_31541 = (state_31611[(11)]);
var inst_31539 = (state_31611[(12)]);
var inst_31538 = (state_31611[(20)]);
var inst_31561 = (state_31611[(2)]);
var inst_31562 = (inst_31541 + (1));
var tmp31643 = inst_31540;
var tmp31644 = inst_31539;
var tmp31645 = inst_31538;
var inst_31538__$1 = tmp31645;
var inst_31539__$1 = tmp31644;
var inst_31540__$1 = tmp31643;
var inst_31541__$1 = inst_31562;
var state_31611__$1 = (function (){var statearr_31654 = state_31611;
(statearr_31654[(21)] = inst_31561);

(statearr_31654[(19)] = inst_31540__$1);

(statearr_31654[(11)] = inst_31541__$1);

(statearr_31654[(12)] = inst_31539__$1);

(statearr_31654[(20)] = inst_31538__$1);

return statearr_31654;
})();
var statearr_31656_34574 = state_31611__$1;
(statearr_31656_34574[(2)] = null);

(statearr_31656_34574[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (40))){
var inst_31574 = (state_31611[(22)]);
var inst_31578 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31574);
var state_31611__$1 = state_31611;
var statearr_31657_34575 = state_31611__$1;
(statearr_31657_34575[(2)] = inst_31578);

(statearr_31657_34575[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (33))){
var inst_31565 = (state_31611[(23)]);
var inst_31567 = cljs.core.chunked_seq_QMARK_(inst_31565);
var state_31611__$1 = state_31611;
if(inst_31567){
var statearr_31658_34576 = state_31611__$1;
(statearr_31658_34576[(1)] = (36));

} else {
var statearr_31659_34577 = state_31611__$1;
(statearr_31659_34577[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (13))){
var inst_31470 = (state_31611[(24)]);
var inst_31474 = cljs.core.async.close_BANG_(inst_31470);
var state_31611__$1 = state_31611;
var statearr_31667_34578 = state_31611__$1;
(statearr_31667_34578[(2)] = inst_31474);

(statearr_31667_34578[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (22))){
var inst_31504 = (state_31611[(8)]);
var inst_31509 = cljs.core.async.close_BANG_(inst_31504);
var state_31611__$1 = state_31611;
var statearr_31671_34579 = state_31611__$1;
(statearr_31671_34579[(2)] = inst_31509);

(statearr_31671_34579[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (36))){
var inst_31565 = (state_31611[(23)]);
var inst_31569 = cljs.core.chunk_first(inst_31565);
var inst_31570 = cljs.core.chunk_rest(inst_31565);
var inst_31571 = cljs.core.count(inst_31569);
var inst_31538 = inst_31570;
var inst_31539 = inst_31569;
var inst_31540 = inst_31571;
var inst_31541 = (0);
var state_31611__$1 = (function (){var statearr_31672 = state_31611;
(statearr_31672[(19)] = inst_31540);

(statearr_31672[(11)] = inst_31541);

(statearr_31672[(12)] = inst_31539);

(statearr_31672[(20)] = inst_31538);

return statearr_31672;
})();
var statearr_31673_34580 = state_31611__$1;
(statearr_31673_34580[(2)] = null);

(statearr_31673_34580[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (41))){
var inst_31565 = (state_31611[(23)]);
var inst_31580 = (state_31611[(2)]);
var inst_31582 = cljs.core.next(inst_31565);
var inst_31538 = inst_31582;
var inst_31539 = null;
var inst_31540 = (0);
var inst_31541 = (0);
var state_31611__$1 = (function (){var statearr_31674 = state_31611;
(statearr_31674[(19)] = inst_31540);

(statearr_31674[(11)] = inst_31541);

(statearr_31674[(25)] = inst_31580);

(statearr_31674[(12)] = inst_31539);

(statearr_31674[(20)] = inst_31538);

return statearr_31674;
})();
var statearr_31682_34582 = state_31611__$1;
(statearr_31682_34582[(2)] = null);

(statearr_31682_34582[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (43))){
var state_31611__$1 = state_31611;
var statearr_31683_34583 = state_31611__$1;
(statearr_31683_34583[(2)] = null);

(statearr_31683_34583[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (29))){
var inst_31590 = (state_31611[(2)]);
var state_31611__$1 = state_31611;
var statearr_31688_34584 = state_31611__$1;
(statearr_31688_34584[(2)] = inst_31590);

(statearr_31688_34584[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (44))){
var inst_31599 = (state_31611[(2)]);
var state_31611__$1 = (function (){var statearr_31689 = state_31611;
(statearr_31689[(26)] = inst_31599);

return statearr_31689;
})();
var statearr_31690_34587 = state_31611__$1;
(statearr_31690_34587[(2)] = null);

(statearr_31690_34587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (6))){
var inst_31526 = (state_31611[(27)]);
var inst_31525 = cljs.core.deref(cs);
var inst_31526__$1 = cljs.core.keys(inst_31525);
var inst_31527 = cljs.core.count(inst_31526__$1);
var inst_31528 = cljs.core.reset_BANG_(dctr,inst_31527);
var inst_31533 = cljs.core.seq(inst_31526__$1);
var inst_31538 = inst_31533;
var inst_31539 = null;
var inst_31540 = (0);
var inst_31541 = (0);
var state_31611__$1 = (function (){var statearr_31691 = state_31611;
(statearr_31691[(28)] = inst_31528);

(statearr_31691[(19)] = inst_31540);

(statearr_31691[(11)] = inst_31541);

(statearr_31691[(27)] = inst_31526__$1);

(statearr_31691[(12)] = inst_31539);

(statearr_31691[(20)] = inst_31538);

return statearr_31691;
})();
var statearr_31692_34591 = state_31611__$1;
(statearr_31692_34591[(2)] = null);

(statearr_31692_34591[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (28))){
var inst_31565 = (state_31611[(23)]);
var inst_31538 = (state_31611[(20)]);
var inst_31565__$1 = cljs.core.seq(inst_31538);
var state_31611__$1 = (function (){var statearr_31697 = state_31611;
(statearr_31697[(23)] = inst_31565__$1);

return statearr_31697;
})();
if(inst_31565__$1){
var statearr_31698_34593 = state_31611__$1;
(statearr_31698_34593[(1)] = (33));

} else {
var statearr_31701_34594 = state_31611__$1;
(statearr_31701_34594[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (25))){
var inst_31540 = (state_31611[(19)]);
var inst_31541 = (state_31611[(11)]);
var inst_31543 = (inst_31541 < inst_31540);
var inst_31544 = inst_31543;
var state_31611__$1 = state_31611;
if(cljs.core.truth_(inst_31544)){
var statearr_31704_34595 = state_31611__$1;
(statearr_31704_34595[(1)] = (27));

} else {
var statearr_31705_34596 = state_31611__$1;
(statearr_31705_34596[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (34))){
var state_31611__$1 = state_31611;
var statearr_31706_34597 = state_31611__$1;
(statearr_31706_34597[(2)] = null);

(statearr_31706_34597[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (17))){
var state_31611__$1 = state_31611;
var statearr_31710_34598 = state_31611__$1;
(statearr_31710_34598[(2)] = null);

(statearr_31710_34598[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (3))){
var inst_31604 = (state_31611[(2)]);
var state_31611__$1 = state_31611;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31611__$1,inst_31604);
} else {
if((state_val_31612 === (12))){
var inst_31521 = (state_31611[(2)]);
var state_31611__$1 = state_31611;
var statearr_31711_34601 = state_31611__$1;
(statearr_31711_34601[(2)] = inst_31521);

(statearr_31711_34601[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (2))){
var state_31611__$1 = state_31611;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31611__$1,(4),ch);
} else {
if((state_val_31612 === (23))){
var state_31611__$1 = state_31611;
var statearr_31713_34602 = state_31611__$1;
(statearr_31713_34602[(2)] = null);

(statearr_31713_34602[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (35))){
var inst_31588 = (state_31611[(2)]);
var state_31611__$1 = state_31611;
var statearr_31715_34603 = state_31611__$1;
(statearr_31715_34603[(2)] = inst_31588);

(statearr_31715_34603[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (19))){
var inst_31481 = (state_31611[(7)]);
var inst_31493 = cljs.core.chunk_first(inst_31481);
var inst_31494 = cljs.core.chunk_rest(inst_31481);
var inst_31495 = cljs.core.count(inst_31493);
var inst_31453 = inst_31494;
var inst_31454 = inst_31493;
var inst_31455 = inst_31495;
var inst_31456 = (0);
var state_31611__$1 = (function (){var statearr_31717 = state_31611;
(statearr_31717[(13)] = inst_31453);

(statearr_31717[(15)] = inst_31456);

(statearr_31717[(16)] = inst_31454);

(statearr_31717[(17)] = inst_31455);

return statearr_31717;
})();
var statearr_31718_34604 = state_31611__$1;
(statearr_31718_34604[(2)] = null);

(statearr_31718_34604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (11))){
var inst_31453 = (state_31611[(13)]);
var inst_31481 = (state_31611[(7)]);
var inst_31481__$1 = cljs.core.seq(inst_31453);
var state_31611__$1 = (function (){var statearr_31719 = state_31611;
(statearr_31719[(7)] = inst_31481__$1);

return statearr_31719;
})();
if(inst_31481__$1){
var statearr_31720_34605 = state_31611__$1;
(statearr_31720_34605[(1)] = (16));

} else {
var statearr_31721_34606 = state_31611__$1;
(statearr_31721_34606[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (9))){
var inst_31523 = (state_31611[(2)]);
var state_31611__$1 = state_31611;
var statearr_31722_34607 = state_31611__$1;
(statearr_31722_34607[(2)] = inst_31523);

(statearr_31722_34607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (5))){
var inst_31451 = cljs.core.deref(cs);
var inst_31452 = cljs.core.seq(inst_31451);
var inst_31453 = inst_31452;
var inst_31454 = null;
var inst_31455 = (0);
var inst_31456 = (0);
var state_31611__$1 = (function (){var statearr_31723 = state_31611;
(statearr_31723[(13)] = inst_31453);

(statearr_31723[(15)] = inst_31456);

(statearr_31723[(16)] = inst_31454);

(statearr_31723[(17)] = inst_31455);

return statearr_31723;
})();
var statearr_31724_34610 = state_31611__$1;
(statearr_31724_34610[(2)] = null);

(statearr_31724_34610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (14))){
var state_31611__$1 = state_31611;
var statearr_31726_34611 = state_31611__$1;
(statearr_31726_34611[(2)] = null);

(statearr_31726_34611[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (45))){
var inst_31596 = (state_31611[(2)]);
var state_31611__$1 = state_31611;
var statearr_31727_34612 = state_31611__$1;
(statearr_31727_34612[(2)] = inst_31596);

(statearr_31727_34612[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (26))){
var inst_31526 = (state_31611[(27)]);
var inst_31592 = (state_31611[(2)]);
var inst_31593 = cljs.core.seq(inst_31526);
var state_31611__$1 = (function (){var statearr_31729 = state_31611;
(statearr_31729[(29)] = inst_31592);

return statearr_31729;
})();
if(inst_31593){
var statearr_31731_34613 = state_31611__$1;
(statearr_31731_34613[(1)] = (42));

} else {
var statearr_31732_34614 = state_31611__$1;
(statearr_31732_34614[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (16))){
var inst_31481 = (state_31611[(7)]);
var inst_31491 = cljs.core.chunked_seq_QMARK_(inst_31481);
var state_31611__$1 = state_31611;
if(inst_31491){
var statearr_31733_34616 = state_31611__$1;
(statearr_31733_34616[(1)] = (19));

} else {
var statearr_31740_34620 = state_31611__$1;
(statearr_31740_34620[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (38))){
var inst_31585 = (state_31611[(2)]);
var state_31611__$1 = state_31611;
var statearr_31744_34622 = state_31611__$1;
(statearr_31744_34622[(2)] = inst_31585);

(statearr_31744_34622[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (30))){
var state_31611__$1 = state_31611;
var statearr_31745_34623 = state_31611__$1;
(statearr_31745_34623[(2)] = null);

(statearr_31745_34623[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (10))){
var inst_31456 = (state_31611[(15)]);
var inst_31454 = (state_31611[(16)]);
var inst_31469 = cljs.core._nth(inst_31454,inst_31456);
var inst_31470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31469,(0),null);
var inst_31471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31469,(1),null);
var state_31611__$1 = (function (){var statearr_31747 = state_31611;
(statearr_31747[(24)] = inst_31470);

return statearr_31747;
})();
if(cljs.core.truth_(inst_31471)){
var statearr_31752_34625 = state_31611__$1;
(statearr_31752_34625[(1)] = (13));

} else {
var statearr_31753_34628 = state_31611__$1;
(statearr_31753_34628[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (18))){
var inst_31519 = (state_31611[(2)]);
var state_31611__$1 = state_31611;
var statearr_31754_34629 = state_31611__$1;
(statearr_31754_34629[(2)] = inst_31519);

(statearr_31754_34629[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (42))){
var state_31611__$1 = state_31611;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31611__$1,(45),dchan);
} else {
if((state_val_31612 === (37))){
var inst_31444 = (state_31611[(9)]);
var inst_31565 = (state_31611[(23)]);
var inst_31574 = (state_31611[(22)]);
var inst_31574__$1 = cljs.core.first(inst_31565);
var inst_31575 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31574__$1,inst_31444,done);
var state_31611__$1 = (function (){var statearr_31755 = state_31611;
(statearr_31755[(22)] = inst_31574__$1);

return statearr_31755;
})();
if(cljs.core.truth_(inst_31575)){
var statearr_31756_34632 = state_31611__$1;
(statearr_31756_34632[(1)] = (39));

} else {
var statearr_31757_34633 = state_31611__$1;
(statearr_31757_34633[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (8))){
var inst_31456 = (state_31611[(15)]);
var inst_31455 = (state_31611[(17)]);
var inst_31458 = (inst_31456 < inst_31455);
var inst_31459 = inst_31458;
var state_31611__$1 = state_31611;
if(cljs.core.truth_(inst_31459)){
var statearr_31758_34634 = state_31611__$1;
(statearr_31758_34634[(1)] = (10));

} else {
var statearr_31759_34635 = state_31611__$1;
(statearr_31759_34635[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__29502__auto__ = null;
var cljs$core$async$mult_$_state_machine__29502__auto____0 = (function (){
var statearr_31761 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31761[(0)] = cljs$core$async$mult_$_state_machine__29502__auto__);

(statearr_31761[(1)] = (1));

return statearr_31761;
});
var cljs$core$async$mult_$_state_machine__29502__auto____1 = (function (state_31611){
while(true){
var ret_value__29503__auto__ = (function (){try{while(true){
var result__29504__auto__ = switch__29501__auto__(state_31611);
if(cljs.core.keyword_identical_QMARK_(result__29504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29504__auto__;
}
break;
}
}catch (e31762){var ex__29505__auto__ = e31762;
var statearr_31763_34643 = state_31611;
(statearr_31763_34643[(2)] = ex__29505__auto__);


if(cljs.core.seq((state_31611[(4)]))){
var statearr_31764_34651 = state_31611;
(statearr_31764_34651[(1)] = cljs.core.first((state_31611[(4)])));

} else {
throw ex__29505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34652 = state_31611;
state_31611 = G__34652;
continue;
} else {
return ret_value__29503__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29502__auto__ = function(state_31611){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29502__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29502__auto____1.call(this,state_31611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29502__auto____0;
cljs$core$async$mult_$_state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29502__auto____1;
return cljs$core$async$mult_$_state_machine__29502__auto__;
})()
})();
var state__30069__auto__ = (function (){var statearr_31765 = f__30068__auto__();
(statearr_31765[(6)] = c__30067__auto___34548);

return statearr_31765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30069__auto__);
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
var G__31770 = arguments.length;
switch (G__31770) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_34661 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_34661(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34671 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_34671(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34672 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34672(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34677 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_34677(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34678 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34678(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34686 = arguments.length;
var i__5770__auto___34687 = (0);
while(true){
if((i__5770__auto___34687 < len__5769__auto___34686)){
args__5775__auto__.push((arguments[i__5770__auto___34687]));

var G__34688 = (i__5770__auto___34687 + (1));
i__5770__auto___34687 = G__34688;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31808){
var map__31809 = p__31808;
var map__31809__$1 = cljs.core.__destructure_map(map__31809);
var opts = map__31809__$1;
var statearr_31815_34689 = state;
(statearr_31815_34689[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31816_34691 = state;
(statearr_31816_34691[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_31822_34692 = state;
(statearr_31822_34692[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31799){
var G__31801 = cljs.core.first(seq31799);
var seq31799__$1 = cljs.core.next(seq31799);
var G__31802 = cljs.core.first(seq31799__$1);
var seq31799__$2 = cljs.core.next(seq31799__$1);
var G__31803 = cljs.core.first(seq31799__$2);
var seq31799__$3 = cljs.core.next(seq31799__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31801,G__31802,G__31803,seq31799__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31833 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31833 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31834){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31834 = meta31834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31835,meta31834__$1){
var self__ = this;
var _31835__$1 = this;
return (new cljs.core.async.t_cljs$core$async31833(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31834__$1));
}));

(cljs.core.async.t_cljs$core$async31833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31835){
var self__ = this;
var _31835__$1 = this;
return self__.meta31834;
}));

(cljs.core.async.t_cljs$core$async31833.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31833.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31833.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31833.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31833.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31833.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31833.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31833.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31833.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31834","meta31834",1360667107,null)], null);
}));

(cljs.core.async.t_cljs$core$async31833.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31833.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31833");

(cljs.core.async.t_cljs$core$async31833.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31833");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31833.
 */
cljs.core.async.__GT_t_cljs$core$async31833 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31833(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31834){
return (new cljs.core.async.t_cljs$core$async31833(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31834));
});

}

return (new cljs.core.async.t_cljs$core$async31833(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30067__auto___34711 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30068__auto__ = (function (){var switch__29501__auto__ = (function (state_31944){
var state_val_31945 = (state_31944[(1)]);
if((state_val_31945 === (7))){
var inst_31900 = (state_31944[(2)]);
var state_31944__$1 = state_31944;
if(cljs.core.truth_(inst_31900)){
var statearr_31951_34712 = state_31944__$1;
(statearr_31951_34712[(1)] = (8));

} else {
var statearr_31954_34713 = state_31944__$1;
(statearr_31954_34713[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (20))){
var inst_31891 = (state_31944[(7)]);
var state_31944__$1 = state_31944;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31944__$1,(23),out,inst_31891);
} else {
if((state_val_31945 === (1))){
var inst_31868 = calc_state();
var inst_31869 = cljs.core.__destructure_map(inst_31868);
var inst_31870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31869,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31869,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31872 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31869,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31873 = inst_31868;
var state_31944__$1 = (function (){var statearr_31960 = state_31944;
(statearr_31960[(8)] = inst_31873);

(statearr_31960[(9)] = inst_31871);

(statearr_31960[(10)] = inst_31870);

(statearr_31960[(11)] = inst_31872);

return statearr_31960;
})();
var statearr_31965_34720 = state_31944__$1;
(statearr_31965_34720[(2)] = null);

(statearr_31965_34720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (24))){
var inst_31876 = (state_31944[(12)]);
var inst_31873 = inst_31876;
var state_31944__$1 = (function (){var statearr_31968 = state_31944;
(statearr_31968[(8)] = inst_31873);

return statearr_31968;
})();
var statearr_31969_34721 = state_31944__$1;
(statearr_31969_34721[(2)] = null);

(statearr_31969_34721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (4))){
var inst_31891 = (state_31944[(7)]);
var inst_31894 = (state_31944[(13)]);
var inst_31886 = (state_31944[(2)]);
var inst_31891__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31886,(0),null);
var inst_31892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31886,(1),null);
var inst_31894__$1 = (inst_31891__$1 == null);
var state_31944__$1 = (function (){var statearr_31979 = state_31944;
(statearr_31979[(7)] = inst_31891__$1);

(statearr_31979[(14)] = inst_31892);

(statearr_31979[(13)] = inst_31894__$1);

return statearr_31979;
})();
if(cljs.core.truth_(inst_31894__$1)){
var statearr_31981_34722 = state_31944__$1;
(statearr_31981_34722[(1)] = (5));

} else {
var statearr_31984_34723 = state_31944__$1;
(statearr_31984_34723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (15))){
var inst_31878 = (state_31944[(15)]);
var inst_31918 = (state_31944[(16)]);
var inst_31918__$1 = cljs.core.empty_QMARK_(inst_31878);
var state_31944__$1 = (function (){var statearr_31987 = state_31944;
(statearr_31987[(16)] = inst_31918__$1);

return statearr_31987;
})();
if(inst_31918__$1){
var statearr_31991_34724 = state_31944__$1;
(statearr_31991_34724[(1)] = (17));

} else {
var statearr_31993_34726 = state_31944__$1;
(statearr_31993_34726[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (21))){
var inst_31876 = (state_31944[(12)]);
var inst_31873 = inst_31876;
var state_31944__$1 = (function (){var statearr_31996 = state_31944;
(statearr_31996[(8)] = inst_31873);

return statearr_31996;
})();
var statearr_31998_34727 = state_31944__$1;
(statearr_31998_34727[(2)] = null);

(statearr_31998_34727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (13))){
var inst_31909 = (state_31944[(2)]);
var inst_31910 = calc_state();
var inst_31873 = inst_31910;
var state_31944__$1 = (function (){var statearr_32010 = state_31944;
(statearr_32010[(8)] = inst_31873);

(statearr_32010[(17)] = inst_31909);

return statearr_32010;
})();
var statearr_32011_34728 = state_31944__$1;
(statearr_32011_34728[(2)] = null);

(statearr_32011_34728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (22))){
var inst_31938 = (state_31944[(2)]);
var state_31944__$1 = state_31944;
var statearr_32015_34729 = state_31944__$1;
(statearr_32015_34729[(2)] = inst_31938);

(statearr_32015_34729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (6))){
var inst_31892 = (state_31944[(14)]);
var inst_31898 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31892,change);
var state_31944__$1 = state_31944;
var statearr_32016_34731 = state_31944__$1;
(statearr_32016_34731[(2)] = inst_31898);

(statearr_32016_34731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (25))){
var state_31944__$1 = state_31944;
var statearr_32019_34733 = state_31944__$1;
(statearr_32019_34733[(2)] = null);

(statearr_32019_34733[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (17))){
var inst_31879 = (state_31944[(18)]);
var inst_31892 = (state_31944[(14)]);
var inst_31920 = (inst_31879.cljs$core$IFn$_invoke$arity$1 ? inst_31879.cljs$core$IFn$_invoke$arity$1(inst_31892) : inst_31879.call(null,inst_31892));
var inst_31921 = cljs.core.not(inst_31920);
var state_31944__$1 = state_31944;
var statearr_32021_34740 = state_31944__$1;
(statearr_32021_34740[(2)] = inst_31921);

(statearr_32021_34740[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (3))){
var inst_31942 = (state_31944[(2)]);
var state_31944__$1 = state_31944;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31944__$1,inst_31942);
} else {
if((state_val_31945 === (12))){
var state_31944__$1 = state_31944;
var statearr_32027_34741 = state_31944__$1;
(statearr_32027_34741[(2)] = null);

(statearr_32027_34741[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (2))){
var inst_31873 = (state_31944[(8)]);
var inst_31876 = (state_31944[(12)]);
var inst_31876__$1 = cljs.core.__destructure_map(inst_31873);
var inst_31878 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31876__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31876__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31876__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31944__$1 = (function (){var statearr_32032 = state_31944;
(statearr_32032[(18)] = inst_31879);

(statearr_32032[(15)] = inst_31878);

(statearr_32032[(12)] = inst_31876__$1);

return statearr_32032;
})();
return cljs.core.async.ioc_alts_BANG_(state_31944__$1,(4),inst_31881);
} else {
if((state_val_31945 === (23))){
var inst_31929 = (state_31944[(2)]);
var state_31944__$1 = state_31944;
if(cljs.core.truth_(inst_31929)){
var statearr_32036_34742 = state_31944__$1;
(statearr_32036_34742[(1)] = (24));

} else {
var statearr_32040_34743 = state_31944__$1;
(statearr_32040_34743[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (19))){
var inst_31924 = (state_31944[(2)]);
var state_31944__$1 = state_31944;
var statearr_32042_34745 = state_31944__$1;
(statearr_32042_34745[(2)] = inst_31924);

(statearr_32042_34745[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (11))){
var inst_31892 = (state_31944[(14)]);
var inst_31906 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31892);
var state_31944__$1 = state_31944;
var statearr_32046_34748 = state_31944__$1;
(statearr_32046_34748[(2)] = inst_31906);

(statearr_32046_34748[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (9))){
var inst_31878 = (state_31944[(15)]);
var inst_31892 = (state_31944[(14)]);
var inst_31915 = (state_31944[(19)]);
var inst_31915__$1 = (inst_31878.cljs$core$IFn$_invoke$arity$1 ? inst_31878.cljs$core$IFn$_invoke$arity$1(inst_31892) : inst_31878.call(null,inst_31892));
var state_31944__$1 = (function (){var statearr_32048 = state_31944;
(statearr_32048[(19)] = inst_31915__$1);

return statearr_32048;
})();
if(cljs.core.truth_(inst_31915__$1)){
var statearr_32050_34754 = state_31944__$1;
(statearr_32050_34754[(1)] = (14));

} else {
var statearr_32051_34755 = state_31944__$1;
(statearr_32051_34755[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (5))){
var inst_31894 = (state_31944[(13)]);
var state_31944__$1 = state_31944;
var statearr_32056_34756 = state_31944__$1;
(statearr_32056_34756[(2)] = inst_31894);

(statearr_32056_34756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (14))){
var inst_31915 = (state_31944[(19)]);
var state_31944__$1 = state_31944;
var statearr_32058_34757 = state_31944__$1;
(statearr_32058_34757[(2)] = inst_31915);

(statearr_32058_34757[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (26))){
var inst_31934 = (state_31944[(2)]);
var state_31944__$1 = state_31944;
var statearr_32060_34758 = state_31944__$1;
(statearr_32060_34758[(2)] = inst_31934);

(statearr_32060_34758[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (16))){
var inst_31926 = (state_31944[(2)]);
var state_31944__$1 = state_31944;
if(cljs.core.truth_(inst_31926)){
var statearr_32066_34759 = state_31944__$1;
(statearr_32066_34759[(1)] = (20));

} else {
var statearr_32067_34760 = state_31944__$1;
(statearr_32067_34760[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (10))){
var inst_31940 = (state_31944[(2)]);
var state_31944__$1 = state_31944;
var statearr_32069_34763 = state_31944__$1;
(statearr_32069_34763[(2)] = inst_31940);

(statearr_32069_34763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (18))){
var inst_31918 = (state_31944[(16)]);
var state_31944__$1 = state_31944;
var statearr_32072_34764 = state_31944__$1;
(statearr_32072_34764[(2)] = inst_31918);

(statearr_32072_34764[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (8))){
var inst_31891 = (state_31944[(7)]);
var inst_31902 = (inst_31891 == null);
var state_31944__$1 = state_31944;
if(cljs.core.truth_(inst_31902)){
var statearr_32074_34765 = state_31944__$1;
(statearr_32074_34765[(1)] = (11));

} else {
var statearr_32076_34766 = state_31944__$1;
(statearr_32076_34766[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__29502__auto__ = null;
var cljs$core$async$mix_$_state_machine__29502__auto____0 = (function (){
var statearr_32083 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32083[(0)] = cljs$core$async$mix_$_state_machine__29502__auto__);

(statearr_32083[(1)] = (1));

return statearr_32083;
});
var cljs$core$async$mix_$_state_machine__29502__auto____1 = (function (state_31944){
while(true){
var ret_value__29503__auto__ = (function (){try{while(true){
var result__29504__auto__ = switch__29501__auto__(state_31944);
if(cljs.core.keyword_identical_QMARK_(result__29504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29504__auto__;
}
break;
}
}catch (e32086){var ex__29505__auto__ = e32086;
var statearr_32088_34774 = state_31944;
(statearr_32088_34774[(2)] = ex__29505__auto__);


if(cljs.core.seq((state_31944[(4)]))){
var statearr_32091_34775 = state_31944;
(statearr_32091_34775[(1)] = cljs.core.first((state_31944[(4)])));

} else {
throw ex__29505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34777 = state_31944;
state_31944 = G__34777;
continue;
} else {
return ret_value__29503__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29502__auto__ = function(state_31944){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29502__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29502__auto____1.call(this,state_31944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29502__auto____0;
cljs$core$async$mix_$_state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29502__auto____1;
return cljs$core$async$mix_$_state_machine__29502__auto__;
})()
})();
var state__30069__auto__ = (function (){var statearr_32094 = f__30068__auto__();
(statearr_32094[(6)] = c__30067__auto___34711);

return statearr_32094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30069__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_34780 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_34780(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34782 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_34782(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34784 = (function() {
var G__34785 = null;
var G__34785__1 = (function (p){
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
var G__34785__2 = (function (p,v){
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
G__34785 = function(p,v){
switch(arguments.length){
case 1:
return G__34785__1.call(this,p);
case 2:
return G__34785__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34785.cljs$core$IFn$_invoke$arity$1 = G__34785__1;
G__34785.cljs$core$IFn$_invoke$arity$2 = G__34785__2;
return G__34785;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32176 = arguments.length;
switch (G__32176) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34784(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34784(p,v);
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
var G__32196 = arguments.length;
switch (G__32196) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32188_SHARP_){
if(cljs.core.truth_((p1__32188_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32188_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32188_SHARP_.call(null,topic)))){
return p1__32188_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32188_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32211 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32211 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32212){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32212 = meta32212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32213,meta32212__$1){
var self__ = this;
var _32213__$1 = this;
return (new cljs.core.async.t_cljs$core$async32211(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32212__$1));
}));

(cljs.core.async.t_cljs$core$async32211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32213){
var self__ = this;
var _32213__$1 = this;
return self__.meta32212;
}));

(cljs.core.async.t_cljs$core$async32211.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32211.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32211.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32211.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32211.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async32211.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32211.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32211.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32212","meta32212",-1537049574,null)], null);
}));

(cljs.core.async.t_cljs$core$async32211.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32211.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32211");

(cljs.core.async.t_cljs$core$async32211.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32211");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32211.
 */
cljs.core.async.__GT_t_cljs$core$async32211 = (function cljs$core$async$__GT_t_cljs$core$async32211(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32212){
return (new cljs.core.async.t_cljs$core$async32211(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32212));
});

}

return (new cljs.core.async.t_cljs$core$async32211(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30067__auto___34807 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30068__auto__ = (function (){var switch__29501__auto__ = (function (state_32334){
var state_val_32335 = (state_32334[(1)]);
if((state_val_32335 === (7))){
var inst_32329 = (state_32334[(2)]);
var state_32334__$1 = state_32334;
var statearr_32351_34812 = state_32334__$1;
(statearr_32351_34812[(2)] = inst_32329);

(statearr_32351_34812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (20))){
var state_32334__$1 = state_32334;
var statearr_32352_34813 = state_32334__$1;
(statearr_32352_34813[(2)] = null);

(statearr_32352_34813[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (1))){
var state_32334__$1 = state_32334;
var statearr_32356_34815 = state_32334__$1;
(statearr_32356_34815[(2)] = null);

(statearr_32356_34815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (24))){
var inst_32309 = (state_32334[(7)]);
var inst_32321 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32309);
var state_32334__$1 = state_32334;
var statearr_32363_34816 = state_32334__$1;
(statearr_32363_34816[(2)] = inst_32321);

(statearr_32363_34816[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (4))){
var inst_32256 = (state_32334[(8)]);
var inst_32256__$1 = (state_32334[(2)]);
var inst_32257 = (inst_32256__$1 == null);
var state_32334__$1 = (function (){var statearr_32371 = state_32334;
(statearr_32371[(8)] = inst_32256__$1);

return statearr_32371;
})();
if(cljs.core.truth_(inst_32257)){
var statearr_32372_34819 = state_32334__$1;
(statearr_32372_34819[(1)] = (5));

} else {
var statearr_32375_34820 = state_32334__$1;
(statearr_32375_34820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (15))){
var inst_32302 = (state_32334[(2)]);
var state_32334__$1 = state_32334;
var statearr_32382_34822 = state_32334__$1;
(statearr_32382_34822[(2)] = inst_32302);

(statearr_32382_34822[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (21))){
var inst_32326 = (state_32334[(2)]);
var state_32334__$1 = (function (){var statearr_32390 = state_32334;
(statearr_32390[(9)] = inst_32326);

return statearr_32390;
})();
var statearr_32392_34829 = state_32334__$1;
(statearr_32392_34829[(2)] = null);

(statearr_32392_34829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (13))){
var inst_32280 = (state_32334[(10)]);
var inst_32282 = cljs.core.chunked_seq_QMARK_(inst_32280);
var state_32334__$1 = state_32334;
if(inst_32282){
var statearr_32401_34830 = state_32334__$1;
(statearr_32401_34830[(1)] = (16));

} else {
var statearr_32402_34831 = state_32334__$1;
(statearr_32402_34831[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (22))){
var inst_32317 = (state_32334[(2)]);
var state_32334__$1 = state_32334;
if(cljs.core.truth_(inst_32317)){
var statearr_32408_34832 = state_32334__$1;
(statearr_32408_34832[(1)] = (23));

} else {
var statearr_32409_34833 = state_32334__$1;
(statearr_32409_34833[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (6))){
var inst_32309 = (state_32334[(7)]);
var inst_32311 = (state_32334[(11)]);
var inst_32256 = (state_32334[(8)]);
var inst_32309__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32256) : topic_fn.call(null,inst_32256));
var inst_32310 = cljs.core.deref(mults);
var inst_32311__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32310,inst_32309__$1);
var state_32334__$1 = (function (){var statearr_32420 = state_32334;
(statearr_32420[(7)] = inst_32309__$1);

(statearr_32420[(11)] = inst_32311__$1);

return statearr_32420;
})();
if(cljs.core.truth_(inst_32311__$1)){
var statearr_32422_34837 = state_32334__$1;
(statearr_32422_34837[(1)] = (19));

} else {
var statearr_32427_34838 = state_32334__$1;
(statearr_32427_34838[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (25))){
var inst_32323 = (state_32334[(2)]);
var state_32334__$1 = state_32334;
var statearr_32433_34839 = state_32334__$1;
(statearr_32433_34839[(2)] = inst_32323);

(statearr_32433_34839[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (17))){
var inst_32280 = (state_32334[(10)]);
var inst_32291 = cljs.core.first(inst_32280);
var inst_32294 = cljs.core.async.muxch_STAR_(inst_32291);
var inst_32295 = cljs.core.async.close_BANG_(inst_32294);
var inst_32296 = cljs.core.next(inst_32280);
var inst_32266 = inst_32296;
var inst_32267 = null;
var inst_32268 = (0);
var inst_32269 = (0);
var state_32334__$1 = (function (){var statearr_32445 = state_32334;
(statearr_32445[(12)] = inst_32295);

(statearr_32445[(13)] = inst_32269);

(statearr_32445[(14)] = inst_32266);

(statearr_32445[(15)] = inst_32267);

(statearr_32445[(16)] = inst_32268);

return statearr_32445;
})();
var statearr_32448_34845 = state_32334__$1;
(statearr_32448_34845[(2)] = null);

(statearr_32448_34845[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (3))){
var inst_32331 = (state_32334[(2)]);
var state_32334__$1 = state_32334;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32334__$1,inst_32331);
} else {
if((state_val_32335 === (12))){
var inst_32304 = (state_32334[(2)]);
var state_32334__$1 = state_32334;
var statearr_32453_34846 = state_32334__$1;
(statearr_32453_34846[(2)] = inst_32304);

(statearr_32453_34846[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (2))){
var state_32334__$1 = state_32334;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32334__$1,(4),ch);
} else {
if((state_val_32335 === (23))){
var state_32334__$1 = state_32334;
var statearr_32458_34847 = state_32334__$1;
(statearr_32458_34847[(2)] = null);

(statearr_32458_34847[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (19))){
var inst_32311 = (state_32334[(11)]);
var inst_32256 = (state_32334[(8)]);
var inst_32315 = cljs.core.async.muxch_STAR_(inst_32311);
var state_32334__$1 = state_32334;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32334__$1,(22),inst_32315,inst_32256);
} else {
if((state_val_32335 === (11))){
var inst_32266 = (state_32334[(14)]);
var inst_32280 = (state_32334[(10)]);
var inst_32280__$1 = cljs.core.seq(inst_32266);
var state_32334__$1 = (function (){var statearr_32496 = state_32334;
(statearr_32496[(10)] = inst_32280__$1);

return statearr_32496;
})();
if(inst_32280__$1){
var statearr_32498_34848 = state_32334__$1;
(statearr_32498_34848[(1)] = (13));

} else {
var statearr_32500_34849 = state_32334__$1;
(statearr_32500_34849[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (9))){
var inst_32306 = (state_32334[(2)]);
var state_32334__$1 = state_32334;
var statearr_32523_34857 = state_32334__$1;
(statearr_32523_34857[(2)] = inst_32306);

(statearr_32523_34857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (5))){
var inst_32263 = cljs.core.deref(mults);
var inst_32264 = cljs.core.vals(inst_32263);
var inst_32265 = cljs.core.seq(inst_32264);
var inst_32266 = inst_32265;
var inst_32267 = null;
var inst_32268 = (0);
var inst_32269 = (0);
var state_32334__$1 = (function (){var statearr_32524 = state_32334;
(statearr_32524[(13)] = inst_32269);

(statearr_32524[(14)] = inst_32266);

(statearr_32524[(15)] = inst_32267);

(statearr_32524[(16)] = inst_32268);

return statearr_32524;
})();
var statearr_32529_34859 = state_32334__$1;
(statearr_32529_34859[(2)] = null);

(statearr_32529_34859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (14))){
var state_32334__$1 = state_32334;
var statearr_32539_34860 = state_32334__$1;
(statearr_32539_34860[(2)] = null);

(statearr_32539_34860[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (16))){
var inst_32280 = (state_32334[(10)]);
var inst_32284 = cljs.core.chunk_first(inst_32280);
var inst_32285 = cljs.core.chunk_rest(inst_32280);
var inst_32286 = cljs.core.count(inst_32284);
var inst_32266 = inst_32285;
var inst_32267 = inst_32284;
var inst_32268 = inst_32286;
var inst_32269 = (0);
var state_32334__$1 = (function (){var statearr_32543 = state_32334;
(statearr_32543[(13)] = inst_32269);

(statearr_32543[(14)] = inst_32266);

(statearr_32543[(15)] = inst_32267);

(statearr_32543[(16)] = inst_32268);

return statearr_32543;
})();
var statearr_32544_34868 = state_32334__$1;
(statearr_32544_34868[(2)] = null);

(statearr_32544_34868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (10))){
var inst_32269 = (state_32334[(13)]);
var inst_32266 = (state_32334[(14)]);
var inst_32267 = (state_32334[(15)]);
var inst_32268 = (state_32334[(16)]);
var inst_32274 = cljs.core._nth(inst_32267,inst_32269);
var inst_32275 = cljs.core.async.muxch_STAR_(inst_32274);
var inst_32276 = cljs.core.async.close_BANG_(inst_32275);
var inst_32277 = (inst_32269 + (1));
var tmp32535 = inst_32266;
var tmp32536 = inst_32267;
var tmp32537 = inst_32268;
var inst_32266__$1 = tmp32535;
var inst_32267__$1 = tmp32536;
var inst_32268__$1 = tmp32537;
var inst_32269__$1 = inst_32277;
var state_32334__$1 = (function (){var statearr_32549 = state_32334;
(statearr_32549[(13)] = inst_32269__$1);

(statearr_32549[(14)] = inst_32266__$1);

(statearr_32549[(17)] = inst_32276);

(statearr_32549[(15)] = inst_32267__$1);

(statearr_32549[(16)] = inst_32268__$1);

return statearr_32549;
})();
var statearr_32556_34869 = state_32334__$1;
(statearr_32556_34869[(2)] = null);

(statearr_32556_34869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (18))){
var inst_32299 = (state_32334[(2)]);
var state_32334__$1 = state_32334;
var statearr_32561_34870 = state_32334__$1;
(statearr_32561_34870[(2)] = inst_32299);

(statearr_32561_34870[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (8))){
var inst_32269 = (state_32334[(13)]);
var inst_32268 = (state_32334[(16)]);
var inst_32271 = (inst_32269 < inst_32268);
var inst_32272 = inst_32271;
var state_32334__$1 = state_32334;
if(cljs.core.truth_(inst_32272)){
var statearr_32562_34873 = state_32334__$1;
(statearr_32562_34873[(1)] = (10));

} else {
var statearr_32567_34875 = state_32334__$1;
(statearr_32567_34875[(1)] = (11));

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
var cljs$core$async$state_machine__29502__auto__ = null;
var cljs$core$async$state_machine__29502__auto____0 = (function (){
var statearr_32569 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32569[(0)] = cljs$core$async$state_machine__29502__auto__);

(statearr_32569[(1)] = (1));

return statearr_32569;
});
var cljs$core$async$state_machine__29502__auto____1 = (function (state_32334){
while(true){
var ret_value__29503__auto__ = (function (){try{while(true){
var result__29504__auto__ = switch__29501__auto__(state_32334);
if(cljs.core.keyword_identical_QMARK_(result__29504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29504__auto__;
}
break;
}
}catch (e32570){var ex__29505__auto__ = e32570;
var statearr_32571_34876 = state_32334;
(statearr_32571_34876[(2)] = ex__29505__auto__);


if(cljs.core.seq((state_32334[(4)]))){
var statearr_32572_34877 = state_32334;
(statearr_32572_34877[(1)] = cljs.core.first((state_32334[(4)])));

} else {
throw ex__29505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34879 = state_32334;
state_32334 = G__34879;
continue;
} else {
return ret_value__29503__auto__;
}
break;
}
});
cljs$core$async$state_machine__29502__auto__ = function(state_32334){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29502__auto____1.call(this,state_32334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29502__auto____0;
cljs$core$async$state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29502__auto____1;
return cljs$core$async$state_machine__29502__auto__;
})()
})();
var state__30069__auto__ = (function (){var statearr_32584 = f__30068__auto__();
(statearr_32584[(6)] = c__30067__auto___34807);

return statearr_32584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30069__auto__);
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
var G__32594 = arguments.length;
switch (G__32594) {
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
var G__32611 = arguments.length;
switch (G__32611) {
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
var G__32621 = arguments.length;
switch (G__32621) {
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
var c__30067__auto___34888 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30068__auto__ = (function (){var switch__29501__auto__ = (function (state_32697){
var state_val_32698 = (state_32697[(1)]);
if((state_val_32698 === (7))){
var state_32697__$1 = state_32697;
var statearr_32702_34894 = state_32697__$1;
(statearr_32702_34894[(2)] = null);

(statearr_32702_34894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (1))){
var state_32697__$1 = state_32697;
var statearr_32704_34895 = state_32697__$1;
(statearr_32704_34895[(2)] = null);

(statearr_32704_34895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (4))){
var inst_32652 = (state_32697[(7)]);
var inst_32653 = (state_32697[(8)]);
var inst_32655 = (inst_32653 < inst_32652);
var state_32697__$1 = state_32697;
if(cljs.core.truth_(inst_32655)){
var statearr_32706_34896 = state_32697__$1;
(statearr_32706_34896[(1)] = (6));

} else {
var statearr_32707_34897 = state_32697__$1;
(statearr_32707_34897[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (15))){
var inst_32683 = (state_32697[(9)]);
var inst_32688 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32683);
var state_32697__$1 = state_32697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32697__$1,(17),out,inst_32688);
} else {
if((state_val_32698 === (13))){
var inst_32683 = (state_32697[(9)]);
var inst_32683__$1 = (state_32697[(2)]);
var inst_32684 = cljs.core.some(cljs.core.nil_QMARK_,inst_32683__$1);
var state_32697__$1 = (function (){var statearr_32709 = state_32697;
(statearr_32709[(9)] = inst_32683__$1);

return statearr_32709;
})();
if(cljs.core.truth_(inst_32684)){
var statearr_32710_34898 = state_32697__$1;
(statearr_32710_34898[(1)] = (14));

} else {
var statearr_32711_34899 = state_32697__$1;
(statearr_32711_34899[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (6))){
var state_32697__$1 = state_32697;
var statearr_32712_34900 = state_32697__$1;
(statearr_32712_34900[(2)] = null);

(statearr_32712_34900[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (17))){
var inst_32690 = (state_32697[(2)]);
var state_32697__$1 = (function (){var statearr_32717 = state_32697;
(statearr_32717[(10)] = inst_32690);

return statearr_32717;
})();
var statearr_32718_34902 = state_32697__$1;
(statearr_32718_34902[(2)] = null);

(statearr_32718_34902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (3))){
var inst_32695 = (state_32697[(2)]);
var state_32697__$1 = state_32697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32697__$1,inst_32695);
} else {
if((state_val_32698 === (12))){
var _ = (function (){var statearr_32719 = state_32697;
(statearr_32719[(4)] = cljs.core.rest((state_32697[(4)])));

return statearr_32719;
})();
var state_32697__$1 = state_32697;
var ex32716 = (state_32697__$1[(2)]);
var statearr_32720_34904 = state_32697__$1;
(statearr_32720_34904[(5)] = ex32716);


if((ex32716 instanceof Object)){
var statearr_32721_34905 = state_32697__$1;
(statearr_32721_34905[(1)] = (11));

(statearr_32721_34905[(5)] = null);

} else {
throw ex32716;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (2))){
var inst_32651 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32652 = cnt;
var inst_32653 = (0);
var state_32697__$1 = (function (){var statearr_32724 = state_32697;
(statearr_32724[(7)] = inst_32652);

(statearr_32724[(8)] = inst_32653);

(statearr_32724[(11)] = inst_32651);

return statearr_32724;
})();
var statearr_32725_34907 = state_32697__$1;
(statearr_32725_34907[(2)] = null);

(statearr_32725_34907[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (11))){
var inst_32662 = (state_32697[(2)]);
var inst_32663 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32697__$1 = (function (){var statearr_32726 = state_32697;
(statearr_32726[(12)] = inst_32662);

return statearr_32726;
})();
var statearr_32727_34908 = state_32697__$1;
(statearr_32727_34908[(2)] = inst_32663);

(statearr_32727_34908[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (9))){
var inst_32653 = (state_32697[(8)]);
var _ = (function (){var statearr_32728 = state_32697;
(statearr_32728[(4)] = cljs.core.cons((12),(state_32697[(4)])));

return statearr_32728;
})();
var inst_32669 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32653) : chs__$1.call(null,inst_32653));
var inst_32670 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32653) : done.call(null,inst_32653));
var inst_32671 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32669,inst_32670);
var ___$1 = (function (){var statearr_32729 = state_32697;
(statearr_32729[(4)] = cljs.core.rest((state_32697[(4)])));

return statearr_32729;
})();
var state_32697__$1 = state_32697;
var statearr_32730_34910 = state_32697__$1;
(statearr_32730_34910[(2)] = inst_32671);

(statearr_32730_34910[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (5))){
var inst_32681 = (state_32697[(2)]);
var state_32697__$1 = (function (){var statearr_32735 = state_32697;
(statearr_32735[(13)] = inst_32681);

return statearr_32735;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32697__$1,(13),dchan);
} else {
if((state_val_32698 === (14))){
var inst_32686 = cljs.core.async.close_BANG_(out);
var state_32697__$1 = state_32697;
var statearr_32739_34911 = state_32697__$1;
(statearr_32739_34911[(2)] = inst_32686);

(statearr_32739_34911[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (16))){
var inst_32693 = (state_32697[(2)]);
var state_32697__$1 = state_32697;
var statearr_32741_34917 = state_32697__$1;
(statearr_32741_34917[(2)] = inst_32693);

(statearr_32741_34917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (10))){
var inst_32653 = (state_32697[(8)]);
var inst_32674 = (state_32697[(2)]);
var inst_32675 = (inst_32653 + (1));
var inst_32653__$1 = inst_32675;
var state_32697__$1 = (function (){var statearr_32742 = state_32697;
(statearr_32742[(14)] = inst_32674);

(statearr_32742[(8)] = inst_32653__$1);

return statearr_32742;
})();
var statearr_32743_34918 = state_32697__$1;
(statearr_32743_34918[(2)] = null);

(statearr_32743_34918[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (8))){
var inst_32679 = (state_32697[(2)]);
var state_32697__$1 = state_32697;
var statearr_32744_34919 = state_32697__$1;
(statearr_32744_34919[(2)] = inst_32679);

(statearr_32744_34919[(1)] = (5));


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
var cljs$core$async$state_machine__29502__auto__ = null;
var cljs$core$async$state_machine__29502__auto____0 = (function (){
var statearr_32745 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32745[(0)] = cljs$core$async$state_machine__29502__auto__);

(statearr_32745[(1)] = (1));

return statearr_32745;
});
var cljs$core$async$state_machine__29502__auto____1 = (function (state_32697){
while(true){
var ret_value__29503__auto__ = (function (){try{while(true){
var result__29504__auto__ = switch__29501__auto__(state_32697);
if(cljs.core.keyword_identical_QMARK_(result__29504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29504__auto__;
}
break;
}
}catch (e32752){var ex__29505__auto__ = e32752;
var statearr_32753_34920 = state_32697;
(statearr_32753_34920[(2)] = ex__29505__auto__);


if(cljs.core.seq((state_32697[(4)]))){
var statearr_32755_34921 = state_32697;
(statearr_32755_34921[(1)] = cljs.core.first((state_32697[(4)])));

} else {
throw ex__29505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34922 = state_32697;
state_32697 = G__34922;
continue;
} else {
return ret_value__29503__auto__;
}
break;
}
});
cljs$core$async$state_machine__29502__auto__ = function(state_32697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29502__auto____1.call(this,state_32697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29502__auto____0;
cljs$core$async$state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29502__auto____1;
return cljs$core$async$state_machine__29502__auto__;
})()
})();
var state__30069__auto__ = (function (){var statearr_32756 = f__30068__auto__();
(statearr_32756[(6)] = c__30067__auto___34888);

return statearr_32756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30069__auto__);
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
var G__32766 = arguments.length;
switch (G__32766) {
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
var c__30067__auto___34924 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30068__auto__ = (function (){var switch__29501__auto__ = (function (state_32827){
var state_val_32828 = (state_32827[(1)]);
if((state_val_32828 === (7))){
var inst_32806 = (state_32827[(7)]);
var inst_32805 = (state_32827[(8)]);
var inst_32805__$1 = (state_32827[(2)]);
var inst_32806__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32805__$1,(0),null);
var inst_32807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32805__$1,(1),null);
var inst_32808 = (inst_32806__$1 == null);
var state_32827__$1 = (function (){var statearr_32830 = state_32827;
(statearr_32830[(7)] = inst_32806__$1);

(statearr_32830[(9)] = inst_32807);

(statearr_32830[(8)] = inst_32805__$1);

return statearr_32830;
})();
if(cljs.core.truth_(inst_32808)){
var statearr_32835_34925 = state_32827__$1;
(statearr_32835_34925[(1)] = (8));

} else {
var statearr_32836_34926 = state_32827__$1;
(statearr_32836_34926[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32828 === (1))){
var inst_32795 = cljs.core.vec(chs);
var inst_32796 = inst_32795;
var state_32827__$1 = (function (){var statearr_32841 = state_32827;
(statearr_32841[(10)] = inst_32796);

return statearr_32841;
})();
var statearr_32842_34927 = state_32827__$1;
(statearr_32842_34927[(2)] = null);

(statearr_32842_34927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32828 === (4))){
var inst_32796 = (state_32827[(10)]);
var state_32827__$1 = state_32827;
return cljs.core.async.ioc_alts_BANG_(state_32827__$1,(7),inst_32796);
} else {
if((state_val_32828 === (6))){
var inst_32822 = (state_32827[(2)]);
var state_32827__$1 = state_32827;
var statearr_32844_34929 = state_32827__$1;
(statearr_32844_34929[(2)] = inst_32822);

(statearr_32844_34929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32828 === (3))){
var inst_32825 = (state_32827[(2)]);
var state_32827__$1 = state_32827;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32827__$1,inst_32825);
} else {
if((state_val_32828 === (2))){
var inst_32796 = (state_32827[(10)]);
var inst_32798 = cljs.core.count(inst_32796);
var inst_32799 = (inst_32798 > (0));
var state_32827__$1 = state_32827;
if(cljs.core.truth_(inst_32799)){
var statearr_32870_34933 = state_32827__$1;
(statearr_32870_34933[(1)] = (4));

} else {
var statearr_32886_34934 = state_32827__$1;
(statearr_32886_34934[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32828 === (11))){
var inst_32796 = (state_32827[(10)]);
var inst_32815 = (state_32827[(2)]);
var tmp32845 = inst_32796;
var inst_32796__$1 = tmp32845;
var state_32827__$1 = (function (){var statearr_32892 = state_32827;
(statearr_32892[(11)] = inst_32815);

(statearr_32892[(10)] = inst_32796__$1);

return statearr_32892;
})();
var statearr_32893_34936 = state_32827__$1;
(statearr_32893_34936[(2)] = null);

(statearr_32893_34936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32828 === (9))){
var inst_32806 = (state_32827[(7)]);
var state_32827__$1 = state_32827;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32827__$1,(11),out,inst_32806);
} else {
if((state_val_32828 === (5))){
var inst_32820 = cljs.core.async.close_BANG_(out);
var state_32827__$1 = state_32827;
var statearr_32899_34937 = state_32827__$1;
(statearr_32899_34937[(2)] = inst_32820);

(statearr_32899_34937[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32828 === (10))){
var inst_32818 = (state_32827[(2)]);
var state_32827__$1 = state_32827;
var statearr_32900_34938 = state_32827__$1;
(statearr_32900_34938[(2)] = inst_32818);

(statearr_32900_34938[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32828 === (8))){
var inst_32806 = (state_32827[(7)]);
var inst_32807 = (state_32827[(9)]);
var inst_32796 = (state_32827[(10)]);
var inst_32805 = (state_32827[(8)]);
var inst_32810 = (function (){var cs = inst_32796;
var vec__32801 = inst_32805;
var v = inst_32806;
var c = inst_32807;
return (function (p1__32761_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32761_SHARP_);
});
})();
var inst_32811 = cljs.core.filterv(inst_32810,inst_32796);
var inst_32796__$1 = inst_32811;
var state_32827__$1 = (function (){var statearr_32912 = state_32827;
(statearr_32912[(10)] = inst_32796__$1);

return statearr_32912;
})();
var statearr_32914_34939 = state_32827__$1;
(statearr_32914_34939[(2)] = null);

(statearr_32914_34939[(1)] = (2));


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
var cljs$core$async$state_machine__29502__auto__ = null;
var cljs$core$async$state_machine__29502__auto____0 = (function (){
var statearr_32915 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32915[(0)] = cljs$core$async$state_machine__29502__auto__);

(statearr_32915[(1)] = (1));

return statearr_32915;
});
var cljs$core$async$state_machine__29502__auto____1 = (function (state_32827){
while(true){
var ret_value__29503__auto__ = (function (){try{while(true){
var result__29504__auto__ = switch__29501__auto__(state_32827);
if(cljs.core.keyword_identical_QMARK_(result__29504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29504__auto__;
}
break;
}
}catch (e32956){var ex__29505__auto__ = e32956;
var statearr_32957_34951 = state_32827;
(statearr_32957_34951[(2)] = ex__29505__auto__);


if(cljs.core.seq((state_32827[(4)]))){
var statearr_32958_34952 = state_32827;
(statearr_32958_34952[(1)] = cljs.core.first((state_32827[(4)])));

} else {
throw ex__29505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34953 = state_32827;
state_32827 = G__34953;
continue;
} else {
return ret_value__29503__auto__;
}
break;
}
});
cljs$core$async$state_machine__29502__auto__ = function(state_32827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29502__auto____1.call(this,state_32827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29502__auto____0;
cljs$core$async$state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29502__auto____1;
return cljs$core$async$state_machine__29502__auto__;
})()
})();
var state__30069__auto__ = (function (){var statearr_32959 = f__30068__auto__();
(statearr_32959[(6)] = c__30067__auto___34924);

return statearr_32959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30069__auto__);
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
var G__32963 = arguments.length;
switch (G__32963) {
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
var c__30067__auto___34958 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30068__auto__ = (function (){var switch__29501__auto__ = (function (state_32992){
var state_val_32993 = (state_32992[(1)]);
if((state_val_32993 === (7))){
var inst_32971 = (state_32992[(7)]);
var inst_32971__$1 = (state_32992[(2)]);
var inst_32972 = (inst_32971__$1 == null);
var inst_32973 = cljs.core.not(inst_32972);
var state_32992__$1 = (function (){var statearr_32995 = state_32992;
(statearr_32995[(7)] = inst_32971__$1);

return statearr_32995;
})();
if(inst_32973){
var statearr_32998_34959 = state_32992__$1;
(statearr_32998_34959[(1)] = (8));

} else {
var statearr_33005_34960 = state_32992__$1;
(statearr_33005_34960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32993 === (1))){
var inst_32966 = (0);
var state_32992__$1 = (function (){var statearr_33006 = state_32992;
(statearr_33006[(8)] = inst_32966);

return statearr_33006;
})();
var statearr_33007_34961 = state_32992__$1;
(statearr_33007_34961[(2)] = null);

(statearr_33007_34961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32993 === (4))){
var state_32992__$1 = state_32992;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32992__$1,(7),ch);
} else {
if((state_val_32993 === (6))){
var inst_32986 = (state_32992[(2)]);
var state_32992__$1 = state_32992;
var statearr_33010_34962 = state_32992__$1;
(statearr_33010_34962[(2)] = inst_32986);

(statearr_33010_34962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32993 === (3))){
var inst_32988 = (state_32992[(2)]);
var inst_32989 = cljs.core.async.close_BANG_(out);
var state_32992__$1 = (function (){var statearr_33017 = state_32992;
(statearr_33017[(9)] = inst_32988);

return statearr_33017;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32992__$1,inst_32989);
} else {
if((state_val_32993 === (2))){
var inst_32966 = (state_32992[(8)]);
var inst_32968 = (inst_32966 < n);
var state_32992__$1 = state_32992;
if(cljs.core.truth_(inst_32968)){
var statearr_33024_34963 = state_32992__$1;
(statearr_33024_34963[(1)] = (4));

} else {
var statearr_33026_34964 = state_32992__$1;
(statearr_33026_34964[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32993 === (11))){
var inst_32966 = (state_32992[(8)]);
var inst_32978 = (state_32992[(2)]);
var inst_32979 = (inst_32966 + (1));
var inst_32966__$1 = inst_32979;
var state_32992__$1 = (function (){var statearr_33036 = state_32992;
(statearr_33036[(10)] = inst_32978);

(statearr_33036[(8)] = inst_32966__$1);

return statearr_33036;
})();
var statearr_33037_34965 = state_32992__$1;
(statearr_33037_34965[(2)] = null);

(statearr_33037_34965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32993 === (9))){
var state_32992__$1 = state_32992;
var statearr_33043_34966 = state_32992__$1;
(statearr_33043_34966[(2)] = null);

(statearr_33043_34966[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32993 === (5))){
var state_32992__$1 = state_32992;
var statearr_33044_34967 = state_32992__$1;
(statearr_33044_34967[(2)] = null);

(statearr_33044_34967[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32993 === (10))){
var inst_32983 = (state_32992[(2)]);
var state_32992__$1 = state_32992;
var statearr_33047_34971 = state_32992__$1;
(statearr_33047_34971[(2)] = inst_32983);

(statearr_33047_34971[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32993 === (8))){
var inst_32971 = (state_32992[(7)]);
var state_32992__$1 = state_32992;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32992__$1,(11),out,inst_32971);
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
var cljs$core$async$state_machine__29502__auto__ = null;
var cljs$core$async$state_machine__29502__auto____0 = (function (){
var statearr_33049 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33049[(0)] = cljs$core$async$state_machine__29502__auto__);

(statearr_33049[(1)] = (1));

return statearr_33049;
});
var cljs$core$async$state_machine__29502__auto____1 = (function (state_32992){
while(true){
var ret_value__29503__auto__ = (function (){try{while(true){
var result__29504__auto__ = switch__29501__auto__(state_32992);
if(cljs.core.keyword_identical_QMARK_(result__29504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29504__auto__;
}
break;
}
}catch (e33054){var ex__29505__auto__ = e33054;
var statearr_33055_34976 = state_32992;
(statearr_33055_34976[(2)] = ex__29505__auto__);


if(cljs.core.seq((state_32992[(4)]))){
var statearr_33056_34977 = state_32992;
(statearr_33056_34977[(1)] = cljs.core.first((state_32992[(4)])));

} else {
throw ex__29505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34981 = state_32992;
state_32992 = G__34981;
continue;
} else {
return ret_value__29503__auto__;
}
break;
}
});
cljs$core$async$state_machine__29502__auto__ = function(state_32992){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29502__auto____1.call(this,state_32992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29502__auto____0;
cljs$core$async$state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29502__auto____1;
return cljs$core$async$state_machine__29502__auto__;
})()
})();
var state__30069__auto__ = (function (){var statearr_33060 = f__30068__auto__();
(statearr_33060[(6)] = c__30067__auto___34958);

return statearr_33060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30069__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33067 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33067 = (function (f,ch,meta33068){
this.f = f;
this.ch = ch;
this.meta33068 = meta33068;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33069,meta33068__$1){
var self__ = this;
var _33069__$1 = this;
return (new cljs.core.async.t_cljs$core$async33067(self__.f,self__.ch,meta33068__$1));
}));

(cljs.core.async.t_cljs$core$async33067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33069){
var self__ = this;
var _33069__$1 = this;
return self__.meta33068;
}));

(cljs.core.async.t_cljs$core$async33067.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33067.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33067.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33067.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33067.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33077 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33077 = (function (f,ch,meta33068,_,fn1,meta33078){
this.f = f;
this.ch = ch;
this.meta33068 = meta33068;
this._ = _;
this.fn1 = fn1;
this.meta33078 = meta33078;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33079,meta33078__$1){
var self__ = this;
var _33079__$1 = this;
return (new cljs.core.async.t_cljs$core$async33077(self__.f,self__.ch,self__.meta33068,self__._,self__.fn1,meta33078__$1));
}));

(cljs.core.async.t_cljs$core$async33077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33079){
var self__ = this;
var _33079__$1 = this;
return self__.meta33078;
}));

(cljs.core.async.t_cljs$core$async33077.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33077.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33077.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33077.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33064_SHARP_){
var G__33084 = (((p1__33064_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33064_SHARP_) : self__.f.call(null,p1__33064_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33084) : f1.call(null,G__33084));
});
}));

(cljs.core.async.t_cljs$core$async33077.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33068","meta33068",-568092420,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33067","cljs.core.async/t_cljs$core$async33067",1846673501,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33078","meta33078",-445923381,null)], null);
}));

(cljs.core.async.t_cljs$core$async33077.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33077.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33077");

(cljs.core.async.t_cljs$core$async33077.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33077");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33077.
 */
cljs.core.async.__GT_t_cljs$core$async33077 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33077(f__$1,ch__$1,meta33068__$1,___$2,fn1__$1,meta33078){
return (new cljs.core.async.t_cljs$core$async33077(f__$1,ch__$1,meta33068__$1,___$2,fn1__$1,meta33078));
});

}

return (new cljs.core.async.t_cljs$core$async33077(self__.f,self__.ch,self__.meta33068,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33091 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33091) : self__.f.call(null,G__33091));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33067.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33067.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33067.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33068","meta33068",-568092420,null)], null);
}));

(cljs.core.async.t_cljs$core$async33067.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33067.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33067");

(cljs.core.async.t_cljs$core$async33067.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33067");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33067.
 */
cljs.core.async.__GT_t_cljs$core$async33067 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33067(f__$1,ch__$1,meta33068){
return (new cljs.core.async.t_cljs$core$async33067(f__$1,ch__$1,meta33068));
});

}

return (new cljs.core.async.t_cljs$core$async33067(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33100 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33100 = (function (f,ch,meta33101){
this.f = f;
this.ch = ch;
this.meta33101 = meta33101;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33102,meta33101__$1){
var self__ = this;
var _33102__$1 = this;
return (new cljs.core.async.t_cljs$core$async33100(self__.f,self__.ch,meta33101__$1));
}));

(cljs.core.async.t_cljs$core$async33100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33102){
var self__ = this;
var _33102__$1 = this;
return self__.meta33101;
}));

(cljs.core.async.t_cljs$core$async33100.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33100.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33100.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33100.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33100.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33100.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33100.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33101","meta33101",26430044,null)], null);
}));

(cljs.core.async.t_cljs$core$async33100.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33100.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33100");

(cljs.core.async.t_cljs$core$async33100.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33100");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33100.
 */
cljs.core.async.__GT_t_cljs$core$async33100 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33100(f__$1,ch__$1,meta33101){
return (new cljs.core.async.t_cljs$core$async33100(f__$1,ch__$1,meta33101));
});

}

return (new cljs.core.async.t_cljs$core$async33100(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33169 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33169 = (function (p,ch,meta33170){
this.p = p;
this.ch = ch;
this.meta33170 = meta33170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33171,meta33170__$1){
var self__ = this;
var _33171__$1 = this;
return (new cljs.core.async.t_cljs$core$async33169(self__.p,self__.ch,meta33170__$1));
}));

(cljs.core.async.t_cljs$core$async33169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33171){
var self__ = this;
var _33171__$1 = this;
return self__.meta33170;
}));

(cljs.core.async.t_cljs$core$async33169.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33169.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33169.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33169.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33169.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33169.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33169.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33169.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33170","meta33170",1309384043,null)], null);
}));

(cljs.core.async.t_cljs$core$async33169.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33169.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33169");

(cljs.core.async.t_cljs$core$async33169.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33169");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33169.
 */
cljs.core.async.__GT_t_cljs$core$async33169 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33169(p__$1,ch__$1,meta33170){
return (new cljs.core.async.t_cljs$core$async33169(p__$1,ch__$1,meta33170));
});

}

return (new cljs.core.async.t_cljs$core$async33169(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33203 = arguments.length;
switch (G__33203) {
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
var c__30067__auto___34998 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30068__auto__ = (function (){var switch__29501__auto__ = (function (state_33229){
var state_val_33230 = (state_33229[(1)]);
if((state_val_33230 === (7))){
var inst_33225 = (state_33229[(2)]);
var state_33229__$1 = state_33229;
var statearr_33231_34999 = state_33229__$1;
(statearr_33231_34999[(2)] = inst_33225);

(statearr_33231_34999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (1))){
var state_33229__$1 = state_33229;
var statearr_33232_35000 = state_33229__$1;
(statearr_33232_35000[(2)] = null);

(statearr_33232_35000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (4))){
var inst_33211 = (state_33229[(7)]);
var inst_33211__$1 = (state_33229[(2)]);
var inst_33212 = (inst_33211__$1 == null);
var state_33229__$1 = (function (){var statearr_33233 = state_33229;
(statearr_33233[(7)] = inst_33211__$1);

return statearr_33233;
})();
if(cljs.core.truth_(inst_33212)){
var statearr_33234_35002 = state_33229__$1;
(statearr_33234_35002[(1)] = (5));

} else {
var statearr_33235_35003 = state_33229__$1;
(statearr_33235_35003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (6))){
var inst_33211 = (state_33229[(7)]);
var inst_33216 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33211) : p.call(null,inst_33211));
var state_33229__$1 = state_33229;
if(cljs.core.truth_(inst_33216)){
var statearr_33242_35004 = state_33229__$1;
(statearr_33242_35004[(1)] = (8));

} else {
var statearr_33244_35005 = state_33229__$1;
(statearr_33244_35005[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (3))){
var inst_33227 = (state_33229[(2)]);
var state_33229__$1 = state_33229;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33229__$1,inst_33227);
} else {
if((state_val_33230 === (2))){
var state_33229__$1 = state_33229;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33229__$1,(4),ch);
} else {
if((state_val_33230 === (11))){
var inst_33219 = (state_33229[(2)]);
var state_33229__$1 = state_33229;
var statearr_33248_35006 = state_33229__$1;
(statearr_33248_35006[(2)] = inst_33219);

(statearr_33248_35006[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (9))){
var state_33229__$1 = state_33229;
var statearr_33252_35007 = state_33229__$1;
(statearr_33252_35007[(2)] = null);

(statearr_33252_35007[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (5))){
var inst_33214 = cljs.core.async.close_BANG_(out);
var state_33229__$1 = state_33229;
var statearr_33253_35008 = state_33229__$1;
(statearr_33253_35008[(2)] = inst_33214);

(statearr_33253_35008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (10))){
var inst_33222 = (state_33229[(2)]);
var state_33229__$1 = (function (){var statearr_33254 = state_33229;
(statearr_33254[(8)] = inst_33222);

return statearr_33254;
})();
var statearr_33257_35009 = state_33229__$1;
(statearr_33257_35009[(2)] = null);

(statearr_33257_35009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (8))){
var inst_33211 = (state_33229[(7)]);
var state_33229__$1 = state_33229;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33229__$1,(11),out,inst_33211);
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
var cljs$core$async$state_machine__29502__auto__ = null;
var cljs$core$async$state_machine__29502__auto____0 = (function (){
var statearr_33260 = [null,null,null,null,null,null,null,null,null];
(statearr_33260[(0)] = cljs$core$async$state_machine__29502__auto__);

(statearr_33260[(1)] = (1));

return statearr_33260;
});
var cljs$core$async$state_machine__29502__auto____1 = (function (state_33229){
while(true){
var ret_value__29503__auto__ = (function (){try{while(true){
var result__29504__auto__ = switch__29501__auto__(state_33229);
if(cljs.core.keyword_identical_QMARK_(result__29504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29504__auto__;
}
break;
}
}catch (e33263){var ex__29505__auto__ = e33263;
var statearr_33264_35013 = state_33229;
(statearr_33264_35013[(2)] = ex__29505__auto__);


if(cljs.core.seq((state_33229[(4)]))){
var statearr_33265_35014 = state_33229;
(statearr_33265_35014[(1)] = cljs.core.first((state_33229[(4)])));

} else {
throw ex__29505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35015 = state_33229;
state_33229 = G__35015;
continue;
} else {
return ret_value__29503__auto__;
}
break;
}
});
cljs$core$async$state_machine__29502__auto__ = function(state_33229){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29502__auto____1.call(this,state_33229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29502__auto____0;
cljs$core$async$state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29502__auto____1;
return cljs$core$async$state_machine__29502__auto__;
})()
})();
var state__30069__auto__ = (function (){var statearr_33267 = f__30068__auto__();
(statearr_33267[(6)] = c__30067__auto___34998);

return statearr_33267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30069__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33273 = arguments.length;
switch (G__33273) {
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
var c__30067__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30068__auto__ = (function (){var switch__29501__auto__ = (function (state_33358){
var state_val_33359 = (state_33358[(1)]);
if((state_val_33359 === (7))){
var inst_33354 = (state_33358[(2)]);
var state_33358__$1 = state_33358;
var statearr_33364_35020 = state_33358__$1;
(statearr_33364_35020[(2)] = inst_33354);

(statearr_33364_35020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (20))){
var inst_33314 = (state_33358[(7)]);
var inst_33335 = (state_33358[(2)]);
var inst_33336 = cljs.core.next(inst_33314);
var inst_33296 = inst_33336;
var inst_33297 = null;
var inst_33298 = (0);
var inst_33299 = (0);
var state_33358__$1 = (function (){var statearr_33366 = state_33358;
(statearr_33366[(8)] = inst_33298);

(statearr_33366[(9)] = inst_33335);

(statearr_33366[(10)] = inst_33299);

(statearr_33366[(11)] = inst_33297);

(statearr_33366[(12)] = inst_33296);

return statearr_33366;
})();
var statearr_33368_35021 = state_33358__$1;
(statearr_33368_35021[(2)] = null);

(statearr_33368_35021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (1))){
var state_33358__$1 = state_33358;
var statearr_33369_35022 = state_33358__$1;
(statearr_33369_35022[(2)] = null);

(statearr_33369_35022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (4))){
var inst_33285 = (state_33358[(13)]);
var inst_33285__$1 = (state_33358[(2)]);
var inst_33286 = (inst_33285__$1 == null);
var state_33358__$1 = (function (){var statearr_33375 = state_33358;
(statearr_33375[(13)] = inst_33285__$1);

return statearr_33375;
})();
if(cljs.core.truth_(inst_33286)){
var statearr_33376_35023 = state_33358__$1;
(statearr_33376_35023[(1)] = (5));

} else {
var statearr_33379_35024 = state_33358__$1;
(statearr_33379_35024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (15))){
var state_33358__$1 = state_33358;
var statearr_33391_35025 = state_33358__$1;
(statearr_33391_35025[(2)] = null);

(statearr_33391_35025[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (21))){
var state_33358__$1 = state_33358;
var statearr_33392_35026 = state_33358__$1;
(statearr_33392_35026[(2)] = null);

(statearr_33392_35026[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (13))){
var inst_33298 = (state_33358[(8)]);
var inst_33299 = (state_33358[(10)]);
var inst_33297 = (state_33358[(11)]);
var inst_33296 = (state_33358[(12)]);
var inst_33310 = (state_33358[(2)]);
var inst_33311 = (inst_33299 + (1));
var tmp33382 = inst_33298;
var tmp33383 = inst_33297;
var tmp33384 = inst_33296;
var inst_33296__$1 = tmp33384;
var inst_33297__$1 = tmp33383;
var inst_33298__$1 = tmp33382;
var inst_33299__$1 = inst_33311;
var state_33358__$1 = (function (){var statearr_33394 = state_33358;
(statearr_33394[(8)] = inst_33298__$1);

(statearr_33394[(14)] = inst_33310);

(statearr_33394[(10)] = inst_33299__$1);

(statearr_33394[(11)] = inst_33297__$1);

(statearr_33394[(12)] = inst_33296__$1);

return statearr_33394;
})();
var statearr_33395_35027 = state_33358__$1;
(statearr_33395_35027[(2)] = null);

(statearr_33395_35027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (22))){
var state_33358__$1 = state_33358;
var statearr_33397_35028 = state_33358__$1;
(statearr_33397_35028[(2)] = null);

(statearr_33397_35028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (6))){
var inst_33285 = (state_33358[(13)]);
var inst_33294 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33285) : f.call(null,inst_33285));
var inst_33295 = cljs.core.seq(inst_33294);
var inst_33296 = inst_33295;
var inst_33297 = null;
var inst_33298 = (0);
var inst_33299 = (0);
var state_33358__$1 = (function (){var statearr_33403 = state_33358;
(statearr_33403[(8)] = inst_33298);

(statearr_33403[(10)] = inst_33299);

(statearr_33403[(11)] = inst_33297);

(statearr_33403[(12)] = inst_33296);

return statearr_33403;
})();
var statearr_33404_35033 = state_33358__$1;
(statearr_33404_35033[(2)] = null);

(statearr_33404_35033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (17))){
var inst_33314 = (state_33358[(7)]);
var inst_33320 = cljs.core.chunk_first(inst_33314);
var inst_33323 = cljs.core.chunk_rest(inst_33314);
var inst_33324 = cljs.core.count(inst_33320);
var inst_33296 = inst_33323;
var inst_33297 = inst_33320;
var inst_33298 = inst_33324;
var inst_33299 = (0);
var state_33358__$1 = (function (){var statearr_33406 = state_33358;
(statearr_33406[(8)] = inst_33298);

(statearr_33406[(10)] = inst_33299);

(statearr_33406[(11)] = inst_33297);

(statearr_33406[(12)] = inst_33296);

return statearr_33406;
})();
var statearr_33410_35034 = state_33358__$1;
(statearr_33410_35034[(2)] = null);

(statearr_33410_35034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (3))){
var inst_33356 = (state_33358[(2)]);
var state_33358__$1 = state_33358;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33358__$1,inst_33356);
} else {
if((state_val_33359 === (12))){
var inst_33344 = (state_33358[(2)]);
var state_33358__$1 = state_33358;
var statearr_33412_35035 = state_33358__$1;
(statearr_33412_35035[(2)] = inst_33344);

(statearr_33412_35035[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (2))){
var state_33358__$1 = state_33358;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33358__$1,(4),in$);
} else {
if((state_val_33359 === (23))){
var inst_33352 = (state_33358[(2)]);
var state_33358__$1 = state_33358;
var statearr_33421_35036 = state_33358__$1;
(statearr_33421_35036[(2)] = inst_33352);

(statearr_33421_35036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (19))){
var inst_33339 = (state_33358[(2)]);
var state_33358__$1 = state_33358;
var statearr_33422_35037 = state_33358__$1;
(statearr_33422_35037[(2)] = inst_33339);

(statearr_33422_35037[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (11))){
var inst_33296 = (state_33358[(12)]);
var inst_33314 = (state_33358[(7)]);
var inst_33314__$1 = cljs.core.seq(inst_33296);
var state_33358__$1 = (function (){var statearr_33423 = state_33358;
(statearr_33423[(7)] = inst_33314__$1);

return statearr_33423;
})();
if(inst_33314__$1){
var statearr_33424_35038 = state_33358__$1;
(statearr_33424_35038[(1)] = (14));

} else {
var statearr_33425_35039 = state_33358__$1;
(statearr_33425_35039[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (9))){
var inst_33346 = (state_33358[(2)]);
var inst_33347 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33358__$1 = (function (){var statearr_33428 = state_33358;
(statearr_33428[(15)] = inst_33346);

return statearr_33428;
})();
if(cljs.core.truth_(inst_33347)){
var statearr_33429_35040 = state_33358__$1;
(statearr_33429_35040[(1)] = (21));

} else {
var statearr_33430_35041 = state_33358__$1;
(statearr_33430_35041[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (5))){
var inst_33288 = cljs.core.async.close_BANG_(out);
var state_33358__$1 = state_33358;
var statearr_33431_35042 = state_33358__$1;
(statearr_33431_35042[(2)] = inst_33288);

(statearr_33431_35042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (14))){
var inst_33314 = (state_33358[(7)]);
var inst_33317 = cljs.core.chunked_seq_QMARK_(inst_33314);
var state_33358__$1 = state_33358;
if(inst_33317){
var statearr_33432_35044 = state_33358__$1;
(statearr_33432_35044[(1)] = (17));

} else {
var statearr_33434_35045 = state_33358__$1;
(statearr_33434_35045[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (16))){
var inst_33342 = (state_33358[(2)]);
var state_33358__$1 = state_33358;
var statearr_33436_35046 = state_33358__$1;
(statearr_33436_35046[(2)] = inst_33342);

(statearr_33436_35046[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (10))){
var inst_33299 = (state_33358[(10)]);
var inst_33297 = (state_33358[(11)]);
var inst_33305 = cljs.core._nth(inst_33297,inst_33299);
var state_33358__$1 = state_33358;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33358__$1,(13),out,inst_33305);
} else {
if((state_val_33359 === (18))){
var inst_33314 = (state_33358[(7)]);
var inst_33333 = cljs.core.first(inst_33314);
var state_33358__$1 = state_33358;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33358__$1,(20),out,inst_33333);
} else {
if((state_val_33359 === (8))){
var inst_33298 = (state_33358[(8)]);
var inst_33299 = (state_33358[(10)]);
var inst_33302 = (inst_33299 < inst_33298);
var inst_33303 = inst_33302;
var state_33358__$1 = state_33358;
if(cljs.core.truth_(inst_33303)){
var statearr_33437_35051 = state_33358__$1;
(statearr_33437_35051[(1)] = (10));

} else {
var statearr_33438_35052 = state_33358__$1;
(statearr_33438_35052[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__29502__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29502__auto____0 = (function (){
var statearr_33440 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33440[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29502__auto__);

(statearr_33440[(1)] = (1));

return statearr_33440;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29502__auto____1 = (function (state_33358){
while(true){
var ret_value__29503__auto__ = (function (){try{while(true){
var result__29504__auto__ = switch__29501__auto__(state_33358);
if(cljs.core.keyword_identical_QMARK_(result__29504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29504__auto__;
}
break;
}
}catch (e33441){var ex__29505__auto__ = e33441;
var statearr_33442_35054 = state_33358;
(statearr_33442_35054[(2)] = ex__29505__auto__);


if(cljs.core.seq((state_33358[(4)]))){
var statearr_33443_35055 = state_33358;
(statearr_33443_35055[(1)] = cljs.core.first((state_33358[(4)])));

} else {
throw ex__29505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35056 = state_33358;
state_33358 = G__35056;
continue;
} else {
return ret_value__29503__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29502__auto__ = function(state_33358){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29502__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29502__auto____1.call(this,state_33358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29502__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29502__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29502__auto__;
})()
})();
var state__30069__auto__ = (function (){var statearr_33444 = f__30068__auto__();
(statearr_33444[(6)] = c__30067__auto__);

return statearr_33444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30069__auto__);
}));

return c__30067__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33452 = arguments.length;
switch (G__33452) {
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
var G__33459 = arguments.length;
switch (G__33459) {
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
var G__33477 = arguments.length;
switch (G__33477) {
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
var c__30067__auto___35069 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30068__auto__ = (function (){var switch__29501__auto__ = (function (state_33527){
var state_val_33528 = (state_33527[(1)]);
if((state_val_33528 === (7))){
var inst_33522 = (state_33527[(2)]);
var state_33527__$1 = state_33527;
var statearr_33534_35070 = state_33527__$1;
(statearr_33534_35070[(2)] = inst_33522);

(statearr_33534_35070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33528 === (1))){
var inst_33504 = null;
var state_33527__$1 = (function (){var statearr_33535 = state_33527;
(statearr_33535[(7)] = inst_33504);

return statearr_33535;
})();
var statearr_33537_35071 = state_33527__$1;
(statearr_33537_35071[(2)] = null);

(statearr_33537_35071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33528 === (4))){
var inst_33507 = (state_33527[(8)]);
var inst_33507__$1 = (state_33527[(2)]);
var inst_33508 = (inst_33507__$1 == null);
var inst_33509 = cljs.core.not(inst_33508);
var state_33527__$1 = (function (){var statearr_33538 = state_33527;
(statearr_33538[(8)] = inst_33507__$1);

return statearr_33538;
})();
if(inst_33509){
var statearr_33539_35072 = state_33527__$1;
(statearr_33539_35072[(1)] = (5));

} else {
var statearr_33540_35074 = state_33527__$1;
(statearr_33540_35074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33528 === (6))){
var state_33527__$1 = state_33527;
var statearr_33541_35078 = state_33527__$1;
(statearr_33541_35078[(2)] = null);

(statearr_33541_35078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33528 === (3))){
var inst_33524 = (state_33527[(2)]);
var inst_33525 = cljs.core.async.close_BANG_(out);
var state_33527__$1 = (function (){var statearr_33543 = state_33527;
(statearr_33543[(9)] = inst_33524);

return statearr_33543;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33527__$1,inst_33525);
} else {
if((state_val_33528 === (2))){
var state_33527__$1 = state_33527;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33527__$1,(4),ch);
} else {
if((state_val_33528 === (11))){
var inst_33507 = (state_33527[(8)]);
var inst_33516 = (state_33527[(2)]);
var inst_33504 = inst_33507;
var state_33527__$1 = (function (){var statearr_33544 = state_33527;
(statearr_33544[(7)] = inst_33504);

(statearr_33544[(10)] = inst_33516);

return statearr_33544;
})();
var statearr_33545_35079 = state_33527__$1;
(statearr_33545_35079[(2)] = null);

(statearr_33545_35079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33528 === (9))){
var inst_33507 = (state_33527[(8)]);
var state_33527__$1 = state_33527;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33527__$1,(11),out,inst_33507);
} else {
if((state_val_33528 === (5))){
var inst_33507 = (state_33527[(8)]);
var inst_33504 = (state_33527[(7)]);
var inst_33511 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33507,inst_33504);
var state_33527__$1 = state_33527;
if(inst_33511){
var statearr_33550_35080 = state_33527__$1;
(statearr_33550_35080[(1)] = (8));

} else {
var statearr_33551_35081 = state_33527__$1;
(statearr_33551_35081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33528 === (10))){
var inst_33519 = (state_33527[(2)]);
var state_33527__$1 = state_33527;
var statearr_33554_35082 = state_33527__$1;
(statearr_33554_35082[(2)] = inst_33519);

(statearr_33554_35082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33528 === (8))){
var inst_33504 = (state_33527[(7)]);
var tmp33547 = inst_33504;
var inst_33504__$1 = tmp33547;
var state_33527__$1 = (function (){var statearr_33558 = state_33527;
(statearr_33558[(7)] = inst_33504__$1);

return statearr_33558;
})();
var statearr_33559_35083 = state_33527__$1;
(statearr_33559_35083[(2)] = null);

(statearr_33559_35083[(1)] = (2));


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
var cljs$core$async$state_machine__29502__auto__ = null;
var cljs$core$async$state_machine__29502__auto____0 = (function (){
var statearr_33560 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33560[(0)] = cljs$core$async$state_machine__29502__auto__);

(statearr_33560[(1)] = (1));

return statearr_33560;
});
var cljs$core$async$state_machine__29502__auto____1 = (function (state_33527){
while(true){
var ret_value__29503__auto__ = (function (){try{while(true){
var result__29504__auto__ = switch__29501__auto__(state_33527);
if(cljs.core.keyword_identical_QMARK_(result__29504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29504__auto__;
}
break;
}
}catch (e33564){var ex__29505__auto__ = e33564;
var statearr_33565_35086 = state_33527;
(statearr_33565_35086[(2)] = ex__29505__auto__);


if(cljs.core.seq((state_33527[(4)]))){
var statearr_33567_35087 = state_33527;
(statearr_33567_35087[(1)] = cljs.core.first((state_33527[(4)])));

} else {
throw ex__29505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35088 = state_33527;
state_33527 = G__35088;
continue;
} else {
return ret_value__29503__auto__;
}
break;
}
});
cljs$core$async$state_machine__29502__auto__ = function(state_33527){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29502__auto____1.call(this,state_33527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29502__auto____0;
cljs$core$async$state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29502__auto____1;
return cljs$core$async$state_machine__29502__auto__;
})()
})();
var state__30069__auto__ = (function (){var statearr_33574 = f__30068__auto__();
(statearr_33574[(6)] = c__30067__auto___35069);

return statearr_33574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30069__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33584 = arguments.length;
switch (G__33584) {
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
var c__30067__auto___35090 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30068__auto__ = (function (){var switch__29501__auto__ = (function (state_33633){
var state_val_33634 = (state_33633[(1)]);
if((state_val_33634 === (7))){
var inst_33629 = (state_33633[(2)]);
var state_33633__$1 = state_33633;
var statearr_33651_35091 = state_33633__$1;
(statearr_33651_35091[(2)] = inst_33629);

(statearr_33651_35091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33634 === (1))){
var inst_33588 = (new Array(n));
var inst_33589 = inst_33588;
var inst_33590 = (0);
var state_33633__$1 = (function (){var statearr_33652 = state_33633;
(statearr_33652[(7)] = inst_33589);

(statearr_33652[(8)] = inst_33590);

return statearr_33652;
})();
var statearr_33653_35092 = state_33633__$1;
(statearr_33653_35092[(2)] = null);

(statearr_33653_35092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33634 === (4))){
var inst_33594 = (state_33633[(9)]);
var inst_33594__$1 = (state_33633[(2)]);
var inst_33595 = (inst_33594__$1 == null);
var inst_33596 = cljs.core.not(inst_33595);
var state_33633__$1 = (function (){var statearr_33656 = state_33633;
(statearr_33656[(9)] = inst_33594__$1);

return statearr_33656;
})();
if(inst_33596){
var statearr_33658_35093 = state_33633__$1;
(statearr_33658_35093[(1)] = (5));

} else {
var statearr_33661_35094 = state_33633__$1;
(statearr_33661_35094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33634 === (15))){
var inst_33619 = (state_33633[(2)]);
var state_33633__$1 = state_33633;
var statearr_33666_35095 = state_33633__$1;
(statearr_33666_35095[(2)] = inst_33619);

(statearr_33666_35095[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33634 === (13))){
var state_33633__$1 = state_33633;
var statearr_33667_35096 = state_33633__$1;
(statearr_33667_35096[(2)] = null);

(statearr_33667_35096[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33634 === (6))){
var inst_33590 = (state_33633[(8)]);
var inst_33615 = (inst_33590 > (0));
var state_33633__$1 = state_33633;
if(cljs.core.truth_(inst_33615)){
var statearr_33670_35097 = state_33633__$1;
(statearr_33670_35097[(1)] = (12));

} else {
var statearr_33672_35098 = state_33633__$1;
(statearr_33672_35098[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33634 === (3))){
var inst_33631 = (state_33633[(2)]);
var state_33633__$1 = state_33633;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33633__$1,inst_33631);
} else {
if((state_val_33634 === (12))){
var inst_33589 = (state_33633[(7)]);
var inst_33617 = cljs.core.vec(inst_33589);
var state_33633__$1 = state_33633;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33633__$1,(15),out,inst_33617);
} else {
if((state_val_33634 === (2))){
var state_33633__$1 = state_33633;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33633__$1,(4),ch);
} else {
if((state_val_33634 === (11))){
var inst_33609 = (state_33633[(2)]);
var inst_33610 = (new Array(n));
var inst_33589 = inst_33610;
var inst_33590 = (0);
var state_33633__$1 = (function (){var statearr_33679 = state_33633;
(statearr_33679[(7)] = inst_33589);

(statearr_33679[(10)] = inst_33609);

(statearr_33679[(8)] = inst_33590);

return statearr_33679;
})();
var statearr_33681_35099 = state_33633__$1;
(statearr_33681_35099[(2)] = null);

(statearr_33681_35099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33634 === (9))){
var inst_33589 = (state_33633[(7)]);
var inst_33607 = cljs.core.vec(inst_33589);
var state_33633__$1 = state_33633;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33633__$1,(11),out,inst_33607);
} else {
if((state_val_33634 === (5))){
var inst_33589 = (state_33633[(7)]);
var inst_33594 = (state_33633[(9)]);
var inst_33590 = (state_33633[(8)]);
var inst_33599 = (state_33633[(11)]);
var inst_33598 = (inst_33589[inst_33590] = inst_33594);
var inst_33599__$1 = (inst_33590 + (1));
var inst_33603 = (inst_33599__$1 < n);
var state_33633__$1 = (function (){var statearr_33682 = state_33633;
(statearr_33682[(12)] = inst_33598);

(statearr_33682[(11)] = inst_33599__$1);

return statearr_33682;
})();
if(cljs.core.truth_(inst_33603)){
var statearr_33683_35101 = state_33633__$1;
(statearr_33683_35101[(1)] = (8));

} else {
var statearr_33684_35102 = state_33633__$1;
(statearr_33684_35102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33634 === (14))){
var inst_33622 = (state_33633[(2)]);
var inst_33626 = cljs.core.async.close_BANG_(out);
var state_33633__$1 = (function (){var statearr_33686 = state_33633;
(statearr_33686[(13)] = inst_33622);

return statearr_33686;
})();
var statearr_33687_35103 = state_33633__$1;
(statearr_33687_35103[(2)] = inst_33626);

(statearr_33687_35103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33634 === (10))){
var inst_33613 = (state_33633[(2)]);
var state_33633__$1 = state_33633;
var statearr_33688_35107 = state_33633__$1;
(statearr_33688_35107[(2)] = inst_33613);

(statearr_33688_35107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33634 === (8))){
var inst_33589 = (state_33633[(7)]);
var inst_33599 = (state_33633[(11)]);
var tmp33685 = inst_33589;
var inst_33589__$1 = tmp33685;
var inst_33590 = inst_33599;
var state_33633__$1 = (function (){var statearr_33689 = state_33633;
(statearr_33689[(7)] = inst_33589__$1);

(statearr_33689[(8)] = inst_33590);

return statearr_33689;
})();
var statearr_33690_35108 = state_33633__$1;
(statearr_33690_35108[(2)] = null);

(statearr_33690_35108[(1)] = (2));


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
var cljs$core$async$state_machine__29502__auto__ = null;
var cljs$core$async$state_machine__29502__auto____0 = (function (){
var statearr_33691 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33691[(0)] = cljs$core$async$state_machine__29502__auto__);

(statearr_33691[(1)] = (1));

return statearr_33691;
});
var cljs$core$async$state_machine__29502__auto____1 = (function (state_33633){
while(true){
var ret_value__29503__auto__ = (function (){try{while(true){
var result__29504__auto__ = switch__29501__auto__(state_33633);
if(cljs.core.keyword_identical_QMARK_(result__29504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29504__auto__;
}
break;
}
}catch (e33692){var ex__29505__auto__ = e33692;
var statearr_33693_35109 = state_33633;
(statearr_33693_35109[(2)] = ex__29505__auto__);


if(cljs.core.seq((state_33633[(4)]))){
var statearr_33697_35110 = state_33633;
(statearr_33697_35110[(1)] = cljs.core.first((state_33633[(4)])));

} else {
throw ex__29505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35115 = state_33633;
state_33633 = G__35115;
continue;
} else {
return ret_value__29503__auto__;
}
break;
}
});
cljs$core$async$state_machine__29502__auto__ = function(state_33633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29502__auto____1.call(this,state_33633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29502__auto____0;
cljs$core$async$state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29502__auto____1;
return cljs$core$async$state_machine__29502__auto__;
})()
})();
var state__30069__auto__ = (function (){var statearr_33703 = f__30068__auto__();
(statearr_33703[(6)] = c__30067__auto___35090);

return statearr_33703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30069__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33714 = arguments.length;
switch (G__33714) {
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
var c__30067__auto___35117 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30068__auto__ = (function (){var switch__29501__auto__ = (function (state_33783){
var state_val_33784 = (state_33783[(1)]);
if((state_val_33784 === (7))){
var inst_33779 = (state_33783[(2)]);
var state_33783__$1 = state_33783;
var statearr_33785_35118 = state_33783__$1;
(statearr_33785_35118[(2)] = inst_33779);

(statearr_33785_35118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33784 === (1))){
var inst_33732 = [];
var inst_33733 = inst_33732;
var inst_33734 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33783__$1 = (function (){var statearr_33786 = state_33783;
(statearr_33786[(7)] = inst_33734);

(statearr_33786[(8)] = inst_33733);

return statearr_33786;
})();
var statearr_33787_35122 = state_33783__$1;
(statearr_33787_35122[(2)] = null);

(statearr_33787_35122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33784 === (4))){
var inst_33737 = (state_33783[(9)]);
var inst_33737__$1 = (state_33783[(2)]);
var inst_33738 = (inst_33737__$1 == null);
var inst_33739 = cljs.core.not(inst_33738);
var state_33783__$1 = (function (){var statearr_33788 = state_33783;
(statearr_33788[(9)] = inst_33737__$1);

return statearr_33788;
})();
if(inst_33739){
var statearr_33790_35123 = state_33783__$1;
(statearr_33790_35123[(1)] = (5));

} else {
var statearr_33791_35124 = state_33783__$1;
(statearr_33791_35124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33784 === (15))){
var inst_33733 = (state_33783[(8)]);
var inst_33768 = cljs.core.vec(inst_33733);
var state_33783__$1 = state_33783;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33783__$1,(18),out,inst_33768);
} else {
if((state_val_33784 === (13))){
var inst_33763 = (state_33783[(2)]);
var state_33783__$1 = state_33783;
var statearr_33792_35125 = state_33783__$1;
(statearr_33792_35125[(2)] = inst_33763);

(statearr_33792_35125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33784 === (6))){
var inst_33733 = (state_33783[(8)]);
var inst_33765 = inst_33733.length;
var inst_33766 = (inst_33765 > (0));
var state_33783__$1 = state_33783;
if(cljs.core.truth_(inst_33766)){
var statearr_33793_35126 = state_33783__$1;
(statearr_33793_35126[(1)] = (15));

} else {
var statearr_33794_35127 = state_33783__$1;
(statearr_33794_35127[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33784 === (17))){
var inst_33773 = (state_33783[(2)]);
var inst_33774 = cljs.core.async.close_BANG_(out);
var state_33783__$1 = (function (){var statearr_33795 = state_33783;
(statearr_33795[(10)] = inst_33773);

return statearr_33795;
})();
var statearr_33796_35129 = state_33783__$1;
(statearr_33796_35129[(2)] = inst_33774);

(statearr_33796_35129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33784 === (3))){
var inst_33781 = (state_33783[(2)]);
var state_33783__$1 = state_33783;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33783__$1,inst_33781);
} else {
if((state_val_33784 === (12))){
var inst_33733 = (state_33783[(8)]);
var inst_33756 = cljs.core.vec(inst_33733);
var state_33783__$1 = state_33783;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33783__$1,(14),out,inst_33756);
} else {
if((state_val_33784 === (2))){
var state_33783__$1 = state_33783;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33783__$1,(4),ch);
} else {
if((state_val_33784 === (11))){
var inst_33733 = (state_33783[(8)]);
var inst_33741 = (state_33783[(11)]);
var inst_33737 = (state_33783[(9)]);
var inst_33753 = inst_33733.push(inst_33737);
var tmp33806 = inst_33733;
var inst_33733__$1 = tmp33806;
var inst_33734 = inst_33741;
var state_33783__$1 = (function (){var statearr_33811 = state_33783;
(statearr_33811[(7)] = inst_33734);

(statearr_33811[(8)] = inst_33733__$1);

(statearr_33811[(12)] = inst_33753);

return statearr_33811;
})();
var statearr_33813_35130 = state_33783__$1;
(statearr_33813_35130[(2)] = null);

(statearr_33813_35130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33784 === (9))){
var inst_33734 = (state_33783[(7)]);
var inst_33749 = cljs.core.keyword_identical_QMARK_(inst_33734,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_33783__$1 = state_33783;
var statearr_33816_35131 = state_33783__$1;
(statearr_33816_35131[(2)] = inst_33749);

(statearr_33816_35131[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33784 === (5))){
var inst_33734 = (state_33783[(7)]);
var inst_33746 = (state_33783[(13)]);
var inst_33741 = (state_33783[(11)]);
var inst_33737 = (state_33783[(9)]);
var inst_33741__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33737) : f.call(null,inst_33737));
var inst_33746__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33741__$1,inst_33734);
var state_33783__$1 = (function (){var statearr_33820 = state_33783;
(statearr_33820[(13)] = inst_33746__$1);

(statearr_33820[(11)] = inst_33741__$1);

return statearr_33820;
})();
if(inst_33746__$1){
var statearr_33822_35132 = state_33783__$1;
(statearr_33822_35132[(1)] = (8));

} else {
var statearr_33823_35133 = state_33783__$1;
(statearr_33823_35133[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33784 === (14))){
var inst_33741 = (state_33783[(11)]);
var inst_33737 = (state_33783[(9)]);
var inst_33758 = (state_33783[(2)]);
var inst_33759 = [];
var inst_33760 = inst_33759.push(inst_33737);
var inst_33733 = inst_33759;
var inst_33734 = inst_33741;
var state_33783__$1 = (function (){var statearr_33830 = state_33783;
(statearr_33830[(7)] = inst_33734);

(statearr_33830[(8)] = inst_33733);

(statearr_33830[(14)] = inst_33758);

(statearr_33830[(15)] = inst_33760);

return statearr_33830;
})();
var statearr_33831_35134 = state_33783__$1;
(statearr_33831_35134[(2)] = null);

(statearr_33831_35134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33784 === (16))){
var state_33783__$1 = state_33783;
var statearr_33834_35135 = state_33783__$1;
(statearr_33834_35135[(2)] = null);

(statearr_33834_35135[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33784 === (10))){
var inst_33751 = (state_33783[(2)]);
var state_33783__$1 = state_33783;
if(cljs.core.truth_(inst_33751)){
var statearr_33841_35136 = state_33783__$1;
(statearr_33841_35136[(1)] = (11));

} else {
var statearr_33842_35142 = state_33783__$1;
(statearr_33842_35142[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33784 === (18))){
var inst_33770 = (state_33783[(2)]);
var state_33783__$1 = state_33783;
var statearr_33847_35143 = state_33783__$1;
(statearr_33847_35143[(2)] = inst_33770);

(statearr_33847_35143[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33784 === (8))){
var inst_33746 = (state_33783[(13)]);
var state_33783__$1 = state_33783;
var statearr_33851_35144 = state_33783__$1;
(statearr_33851_35144[(2)] = inst_33746);

(statearr_33851_35144[(1)] = (10));


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
var cljs$core$async$state_machine__29502__auto__ = null;
var cljs$core$async$state_machine__29502__auto____0 = (function (){
var statearr_33856 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33856[(0)] = cljs$core$async$state_machine__29502__auto__);

(statearr_33856[(1)] = (1));

return statearr_33856;
});
var cljs$core$async$state_machine__29502__auto____1 = (function (state_33783){
while(true){
var ret_value__29503__auto__ = (function (){try{while(true){
var result__29504__auto__ = switch__29501__auto__(state_33783);
if(cljs.core.keyword_identical_QMARK_(result__29504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29504__auto__;
}
break;
}
}catch (e33863){var ex__29505__auto__ = e33863;
var statearr_33865_35146 = state_33783;
(statearr_33865_35146[(2)] = ex__29505__auto__);


if(cljs.core.seq((state_33783[(4)]))){
var statearr_33868_35147 = state_33783;
(statearr_33868_35147[(1)] = cljs.core.first((state_33783[(4)])));

} else {
throw ex__29505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35148 = state_33783;
state_33783 = G__35148;
continue;
} else {
return ret_value__29503__auto__;
}
break;
}
});
cljs$core$async$state_machine__29502__auto__ = function(state_33783){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29502__auto____1.call(this,state_33783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29502__auto____0;
cljs$core$async$state_machine__29502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29502__auto____1;
return cljs$core$async$state_machine__29502__auto__;
})()
})();
var state__30069__auto__ = (function (){var statearr_33869 = f__30068__auto__();
(statearr_33869[(6)] = c__30067__auto___35117);

return statearr_33869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30069__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

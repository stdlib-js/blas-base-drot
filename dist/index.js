"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var p=f(function(F,x){
function b(e,r,n,o,i,s,q,a,t){var m,u,v,d;if(e<=0)return i;for(u=o,v=q,d=0;d<e;d++)m=a*r[u]+t*i[v],i[v]=a*i[v]-t*r[u],r[u]=m,u+=n,v+=s;return i}x.exports=b
});var y=f(function(G,l){
var j=require('@stdlib/strided-base-stride2offset/dist'),g=p();function h(e,r,n,o,i,s,q){var a,t;return e<=0?o:(a=j(e,n),t=j(e,i),g(e,r,n,a,o,i,t,s,q))}l.exports=h
});var E=f(function(H,_){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=y(),w=p();k(R,"ndarray",w);_.exports=R
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=E(),c,O=A(z(__dirname,"./native.js"));B(O)?c=C:c=O;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

"use strict";var f=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var p=f(function(F,x){
function b(e,r,a,o,i,s,q,t,u){var m,v,n,d;if(e<=0)return i;for(v=o,n=q,d=0;d<e;d++)m=t*r[v]+u*i[n],i[n]=t*i[n]-u*r[v],r[v]=m,v+=a,n+=s;return i}x.exports=b
});var y=f(function(G,l){
var j=require('@stdlib/strided-base-stride2offset/dist'),g=p();function h(e,r,a,o,i,s,q){var t,u;return e<=0?o:(t=j(e,a),u=j(e,i),g(e,r,a,t,o,i,u,s,q))}l.exports=h
});var E=f(function(H,_){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=y(),w=p();k(R,"ndarray",w);_.exports=R
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=E(),c,O=A(z(__dirname,"./native.js"));B(O)?c=C:c=O;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

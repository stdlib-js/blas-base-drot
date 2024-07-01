"use strict";var m=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var c=m(function(F,j){
function g(a,e,o,i,t,f,q){var n,u,v,r;if(a<=0)return i;if(o===1&&t===1){for(r=0;r<a;r++)n=f*e[r]+q*i[r],i[r]=f*i[r]-q*e[r],e[r]=n;return i}for(o<0?u=(1-a)*o:u=0,t<0?v=(1-a)*t:v=0,r=0;r<a;r++)n=f*e[u]+q*i[v],i[v]=f*i[v]-q*e[u],e[u]=n,u+=o,v+=t;return i}j.exports=g
});var R=m(function(G,d){
function h(a,e,o,i,t,f,q,n,u){var v,r,s,p;if(a<=0)return t;for(r=i,s=q,p=0;p<a;p++)v=n*e[r]+u*t[s],t[s]=n*t[s]-u*e[r],e[r]=v,r+=o,s+=f;return t}d.exports=h
});var O=m(function(H,E){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),_=c(),w=R();k(_,"ndarray",w);E.exports=_
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=O(),l,b=A(z(__dirname,"./native.js"));B(b)?l=C:l=b;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

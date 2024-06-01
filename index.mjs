// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";function n(r,n,e,t,a,f,i){var o,u,d,s;if(r<=0)return t;if(1===e&&1===a){for(s=0;s<r;s++)o=f*n[s]+i*t[s],t[s]=f*t[s]-i*n[s],n[s]=o;return t}for(u=e<0?(1-r)*e:0,d=a<0?(1-r)*a:0,s=0;s<r;s++)o=f*n[u]+i*t[d],t[d]=f*t[d]-i*n[u],n[u]=o,u+=e,d+=a;return t}function e(r,n,e,t,a,f,i,o,u){var d,s,l,m;if(r<=0)return a;for(s=t,l=i,m=0;m<r;m++)d=o*n[s]+u*a[l],a[l]=o*a[l]-u*n[s],n[s]=d,s+=e,l+=f;return a}r(n,"ndarray",e);export{n as default,e as ndarray};
//# sourceMappingURL=index.mjs.map

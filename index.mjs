// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@esm/index.mjs";function t(r,e,t,n,s,d,i,o,a){var f,m,l,u;if(r<=0)return s;for(m=n,l=i,u=0;u<r;u++)f=o*e[m]+a*s[l],s[l]=o*s[l]-a*e[m],e[m]=f,m+=t,l+=d;return s}function n(r,n,s,d,i,o,a){return r<=0?d:t(r,n,s,e(r,s),d,i,e(r,i),o,a)}r(n,"ndarray",t);export{n as default,t as ndarray};
//# sourceMappingURL=index.mjs.map

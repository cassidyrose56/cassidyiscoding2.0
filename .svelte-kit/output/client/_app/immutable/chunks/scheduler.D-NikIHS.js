var B=Object.defineProperty;var G=(t,e,n)=>e in t?B(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>(G(t,typeof e!="symbol"?e+"":e,n),n);function I(){}function z(t,e){for(const n in e)t[n]=e[n];return t}function F(t){return t()}function rt(){return Object.create(null)}function R(t){t.forEach(F)}function st(t){return typeof t=="function"}function ct(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let m;function ot(t,e){return t===e?!0:(m||(m=document.createElement("a")),m.href=e,t===m.href)}function ut(t){return Object.keys(t).length===0}function U(t,...e){if(t==null){for(const i of e)i(void 0);return I}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function at(t,e,n){t.$$.on_destroy.push(U(e,n))}function ft(t,e,n,i){if(t){const l=j(t,e,n,i);return t[0](l)}}function j(t,e,n,i){return t[1]&&i?z(n.ctx.slice(),t[1](i(e))):n.ctx}function _t(t,e,n,i){if(t[2]&&i){const l=t[2](i(n));if(e.dirty===void 0)return l;if(typeof l=="object"){const c=[],r=Math.max(e.dirty.length,l.length);for(let o=0;o<r;o+=1)c[o]=e.dirty[o]|l[o];return c}return e.dirty|l}return e.dirty}function ht(t,e,n,i,l,c){if(l){const r=j(e,n,i,c);t.p(r,l)}}function dt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function mt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}let y=!1;function pt(){y=!0}function yt(){y=!1}function W(t,e,n,i){for(;t<e;){const l=t+(e-t>>1);n(l)<=i?t=l+1:e=l}return t}function J(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&s.push(a)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let l=0;for(let s=0;s<e.length;s++){const u=e[s].claim_order,a=(l>0&&e[n[l]].claim_order<=u?l+1:W(1,l,q=>e[n[q]].claim_order,u))-1;i[s]=n[a]+1;const N=a+1;n[N]=s,l=Math.max(N,l)}const c=[],r=[];let o=e.length-1;for(let s=n[l]+1;s!=0;s=i[s-1]){for(c.push(e[s-1]);o>=s;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);c.reverse(),r.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<r.length;s++){for(;u<c.length&&r[s].claim_order>=c[u].claim_order;)u++;const a=u<c.length?c[u]:null;t.insertBefore(r[s],a)}}function K(t,e){if(y){for(J(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Q(t,e,n){t.insertBefore(e,n||null)}function V(t,e,n){y&&!n?K(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function H(t){return document.createElement(t)}function L(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function T(t){return document.createTextNode(t)}function gt(){return T(" ")}function bt(){return T("")}function xt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function P(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const X=["width","height"];function vt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&X.indexOf(i)===-1?t[i]=e[i]:P(t,i,e[i])}function Et(t,e){for(const n in e)P(t,n,e[n])}function wt(t){return t.dataset.svelteH}function Tt(t){return Array.from(t.childNodes)}function S(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,e,n,i,l=!1){S(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const s=n(o);return s===void 0?t.splice(r,1):t[r]=s,l||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const s=n(o);return s===void 0?t.splice(r,1):t[r]=s,l?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function C(t,e,n,i){return O(t,l=>l.nodeName===e,l=>{const c=[];for(let r=0;r<l.attributes.length;r++){const o=l.attributes[r];n[o.name]||c.push(o.name)}c.forEach(r=>l.removeAttribute(r))},()=>i(e))}function Nt(t,e,n){return C(t,e,n,H)}function At(t,e,n){return C(t,e,n,L)}function Y(t,e){return O(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>T(e),!0)}function kt(t){return Y(t," ")}function A(t,e,n){for(let i=n;i<t.length;i+=1){const l=t[i];if(l.nodeType===8&&l.textContent.trim()===e)return i}return-1}function Mt(t,e){const n=A(t,"HTML_TAG_START",0),i=A(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new b(e);S(t);const l=t.splice(n,i-n+1);E(l[0]),E(l[l.length-1]);const c=l.slice(1,l.length-1);if(c.length===0)return new b(e);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new b(e,c)}function jt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ht(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Z(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}class ${constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=L(n.nodeName):this.e=H(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Q(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(E)}}class b extends ${constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)V(this.t,this.n[i],n)}}function Lt(t,e){return new t(e)}let p;function x(t){p=t}function g(){if(!p)throw new Error("Function called outside component initialization");return p}function Pt(t){g().$$.on_mount.push(t)}function St(t){g().$$.after_update.push(t)}function Ot(t){g().$$.on_destroy.push(t)}function Ct(){const t=g();return(e,n,{cancelable:i=!1}={})=>{const l=t.$$.callbacks[e];if(l){const c=Z(e,n,{cancelable:i});return l.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}const d=[],k=[];let h=[];const M=[],D=Promise.resolve();let w=!1;function tt(){w||(w=!0,D.then(nt))}function Dt(){return tt(),D}function et(t){h.push(t)}const v=new Set;let _=0;function nt(){if(_!==0)return;const t=p;do{try{for(;_<d.length;){const e=d[_];_++,x(e),it(e.$$)}}catch(e){throw d.length=0,_=0,e}for(x(null),d.length=0,_=0;k.length;)k.pop()();for(let e=0;e<h.length;e+=1){const n=h[e];v.has(n)||(v.add(n),n())}h.length=0}while(d.length);for(;M.length;)M.pop()();w=!1,v.clear(),x(t)}function it(t){if(t.fragment!==null){t.update(),R(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(et)}}function qt(t){const e=[],n=[];h.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),h=e}export{R as A,rt as B,nt as C,st as D,ut as E,et as F,qt as G,p as H,x as I,F as J,d as K,tt as L,pt as M,yt as N,xt as O,wt as P,Ot as Q,z as R,mt as S,vt as T,L as U,b as V,At as W,Mt as X,Et as Y,Ct as Z,ot as _,_t as a,gt as b,ft as c,Nt as d,H as e,Tt as f,dt as g,Y as h,E as i,kt as j,V as k,K as l,jt as m,I as n,at as o,bt as p,St as q,Pt as r,ct as s,T as t,ht as u,P as v,Ht as w,k as x,Lt as y,Dt as z};
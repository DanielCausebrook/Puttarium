var Vn=Array.isArray,on=Array.prototype.indexOf,Gn=Array.from,Kn=Object.defineProperty,mt=Object.getOwnPropertyDescriptor,fn=Object.getOwnPropertyDescriptors,$n=Object.prototype,Zn=Array.prototype,_n=Object.getPrototypeOf;function zn(t){return typeof t=="function"}const Jn=()=>{};function Qn(t){return t()}function It(t){for(var n=0;n<t.length;n++)t[n]()}const d=2,Dt=4,G=8,ht=16,S=32,K=64,z=128,N=256,J=512,p=1024,x=2048,b=4096,L=8192,M=16384,cn=32768,Rt=65536,vn=1<<17,pn=1<<19,Ot=1<<20,At=Symbol("$state"),Wn=Symbol("legacy props"),Xn=Symbol("");function Ct(t){return t===this.v}function hn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function tr(t,n){return t!==n}function Nt(t){return!hn(t,this.v)}function dn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function En(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function yn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function wn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function nr(){throw new Error("https://svelte.dev/e/hydration_failed")}function rr(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function er(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ar(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Tn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function gn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let rt=!1;function lr(){rt=!0}const sr=1,ur=2,or=4,ir=8,fr=16,_r=1,cr=2,vr=4,pr=8,hr=16,dr=1,Er=2,mn="[",An="[!",kn="]",bt={},yr=Symbol(),wr="http://www.w3.org/2000/svg";function dt(t,n){var r={f:0,v:t,reactions:null,equals:Ct,rv:0,wv:0};return r}function Tr(t){return qt(dt(t))}function Sn(t,n=!1){var e;const r=dt(t);return n||(r.equals=Nt),rt&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function gr(t,n=!1){return qt(Sn(t,n))}function qt(t){return u!==null&&!k&&u.f&d&&(m===null?Pn([t]):m.push(t)),t}function mr(t,n){return Et(t,ot(()=>ut(t))),n}function Et(t,n){return u!==null&&!k&&et()&&u.f&(d|ht)&&(m===null||!m.includes(t))&&gn(),it(t,n)}function it(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=nn(),Pt(t,x),et()&&f!==null&&f.f&p&&!(f.f&(S|K))&&(A===null?Fn([t]):A.push(t))),n}function Pt(t,n){var r=t.reactions;if(r!==null)for(var e=et(),a=r.length,l=0;l<a;l++){var s=r[l],o=s.f;o&x||!e&&s===f||(w(s,n),o&(p|N)&&(o&d?Pt(s,b):st(s)))}}function Ft(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let O=!1;function Ar(t){O=t}let T;function j(t){if(t===null)throw Ft(),bt;return T=t}function kr(){return j(q(T))}function Sr(t){if(O){if(q(T)!==null)throw Ft(),bt;T=t}}function xr(t=1){if(O){for(var n=t,r=T;n--;)r=q(r);T=r}}function Ir(){for(var t=0,n=T;;){if(n.nodeType===8){var r=n.data;if(r===kn){if(t===0)return n;t-=1}else(r===mn||r===An)&&(t+=1)}var e=q(n);n.remove(),n=e}}var kt,Lt,Mt;function Dr(){if(kt===void 0){kt=window;var t=Element.prototype,n=Node.prototype;Lt=mt(n,"firstChild").get,Mt=mt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function ft(t=""){return document.createTextNode(t)}function _t(t){return Lt.call(t)}function q(t){return Mt.call(t)}function Rr(t,n){if(!O)return _t(t);var r=_t(T);if(r===null)r=T.appendChild(ft());else if(n&&r.nodeType!==3){var e=ft();return r==null||r.before(e),j(e),e}return j(r),r}function Or(t,n){if(!O){var r=_t(t);return r instanceof Comment&&r.data===""?q(r):r}return T}function Cr(t,n=1,r=!1){let e=O?T:t;for(var a;n--;)a=e,e=q(e);if(!O)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var s=ft();return e===null?a==null||a.after(s):e.before(s),j(s),s}return j(e),e}function Nr(t){t.textContent=""}function Yt(t){var n=d|x;f===null?n|=N:f.f|=Ot;var r=u!==null&&u.f&d?u:null;const e={children:null,ctx:i,deps:null,equals:Ct,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??f};return r!==null&&(r.children??(r.children=[])).push(e),e}function br(t){const n=Yt(t);return n.equals=Nt,n}function Ht(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&d?yt(e):C(e)}}}function xn(t){for(var n=t.parent;n!==null;){if(!(n.f&d))return n;n=n.parent}return null}function jt(t){var n,r=f;tt(xn(t));try{Ht(t),n=en(t)}finally{tt(r)}return n}function Bt(t){var n=jt(t),r=(R||t.f&N)&&t.deps!==null?b:p;w(t,r),t.equals(n)||(t.v=n,t.wv=nn())}function yt(t){Ht(t),V(t,0),w(t,M),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ut(t){f===null&&u===null&&yn(),u!==null&&u.f&N&&En(),Tt&&dn()}function In(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function Y(t,n,r,e=!0){var a=(t&K)!==0,l=f,s={ctx:i,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|x,first:null,fn:n,last:null,next:null,parent:a?null:l,prev:null,teardown:null,transitions:null,wv:0};if(r){var o=P;try{St(!0),lt(s),s.f|=cn}catch(g){throw C(s),g}finally{St(o)}}else n!==null&&st(s);var _=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(Ot|z))===0;if(!_&&!a&&e&&(l!==null&&In(s,l),u!==null&&u.f&d)){var c=u;(c.children??(c.children=[])).push(s)}return s}function qr(t){const n=Y(G,null,!1);return w(n,p),n.teardown=t,n}function Pr(t){Ut();var n=f!==null&&(f.f&S)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:f,reaction:u})}else{var e=Vt(t);return e}}function Fr(t){return Ut(),wt(t)}function Lr(t){const n=Y(K,t,!0);return(r={})=>new Promise(e=>{r.outro?On(n,()=>{C(n),e(void 0)}):(C(n),e(void 0))})}function Vt(t){return Y(Dt,t,!1)}function Mr(t,n){var r=i,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=wt(()=>{t(),!e.ran&&(e.ran=!0,Et(r.l.r2,!0),ot(n))})}function Yr(){var t=i;wt(()=>{if(ut(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&p&&w(r,b),H(r)&&lt(r),n.ran=!1}t.l.r2.v=!1}})}function wt(t){return Y(G,t,!0)}function Hr(t,n=[],r=Yt){const e=n.map(r);return Dn(()=>t(...e.map(ut)))}function Dn(t,n=0){return Y(G|ht|n,t,!0)}function jr(t,n=!0){return Y(G|S,t,!0,n)}function Gt(t){var n=t.teardown;if(n!==null){const r=Tt,e=u;xt(!0),X(null);try{n.call(null)}finally{xt(r),X(e)}}}function Kt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)yt(n[r])}}function $t(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;C(r,n),r=e}}function Rn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&S||C(n),n=r}}function C(t,n=!0){var r=!1;if((n||t.f&pn)&&t.nodes_start!==null){for(var e=t.nodes_start,a=t.nodes_end;e!==null;){var l=e===a?null:q(e);e.remove(),e=l}r=!0}$t(t,n&&!r),Kt(t),V(t,0),w(t,M);var s=t.transitions;if(s!==null)for(const _ of s)_.stop();Gt(t);var o=t.parent;o!==null&&o.first!==null&&Zt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Zt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function On(t,n){var r=[];zt(t,r,!0),Cn(r,()=>{C(t),n&&n()})}function Cn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var a of t)a.out(e)}else n()}function zt(t,n,r){if(!(t.f&L)){if(t.f^=L,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var a=e.next,l=(e.f&Rt)!==0||(e.f&S)!==0;zt(e,n,l?r:!1),e=a}}}function Br(t){Jt(t,!0)}function Jt(t,n){if(t.f&L){t.f^=L,t.f&p||(t.f^=p),H(t)&&(w(t,x),st(t));for(var r=t.first;r!==null;){var e=r.next,a=(r.f&Rt)!==0||(r.f&S)!==0;Jt(r,a?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}const Nn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let Q=!1,W=!1,ct=[],vt=[];function Qt(){Q=!1;const t=ct.slice();ct=[],It(t)}function Wt(){W=!1;const t=vt.slice();vt=[],It(t)}function Ur(t){Q||(Q=!0,queueMicrotask(Qt)),ct.push(t)}function Vr(t){W||(W=!0,Nn(Wt)),vt.push(t)}function bn(){Q&&Qt(),W&&Wt()}const Xt=0,qn=1;let $=!1,Z=Xt,B=!1,U=null,P=!1,Tt=!1;function St(t){P=t}function xt(t){Tt=t}let D=[],F=0;let u=null,k=!1;function X(t){u=t}let f=null;function tt(t){f=t}let m=null;function Pn(t){m=t}let h=null,y=0,A=null;function Fn(t){A=t}let tn=1,nt=0,R=!1,I=null,i=null;function nn(){return++tn}function et(){return!rt||i!==null&&i.l===null}function H(t){var c;var n=t.f;if(n&x)return!0;if(n&b){var r=t.deps,e=(n&N)!==0;if(r!==null){var a,l,s=(n&J)!==0,o=e&&f!==null&&!R,_=r.length;if(s||o){for(a=0;a<_;a++)l=r[a],(s||!((c=l==null?void 0:l.reactions)!=null&&c.includes(t)))&&(l.reactions??(l.reactions=[])).push(t);s&&(t.f^=J)}for(a=0;a<_;a++)if(l=r[a],H(l)&&Bt(l),l.wv>t.wv)return!0}(!e||f!==null&&!R)&&w(t,p)}return!1}function Ln(t,n){for(var r=n;r!==null;){if(r.f&z)try{r.fn(t);return}catch{r.f^=z}r=r.parent}throw $=!1,t}function Mn(t){return(t.f&M)===0&&(t.parent===null||(t.parent.f&z)===0)}function at(t,n,r,e){if($){if(r===null&&($=!1),Mn(n))throw t;return}r!==null&&($=!0);{Ln(t,n);return}}function rn(t,n,r=0){var e=t.reactions;if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];l.f&d?rn(l,n,r+1):n===l&&(r===0?w(l,x):l.f&p&&w(l,b),st(l))}}function en(t){var gt;var n=h,r=y,e=A,a=u,l=R,s=m,o=i,_=k,c=t.f;h=null,y=0,A=null,u=c&(S|K)?null:t,R=!P&&(c&N)!==0,m=null,i=t.ctx,k=!1,nt++;try{var g=(0,t.fn)(),v=t.deps;if(h!==null){var E;if(V(t,y),v!==null&&y>0)for(v.length=y+h.length,E=0;E<h.length;E++)v[y+E]=h[E];else t.deps=v=h;if(!R)for(E=y;E<v.length;E++)((gt=v[E]).reactions??(gt.reactions=[])).push(t)}else v!==null&&y<v.length&&(V(t,y),v.length=y);if(et()&&A!==null&&!(t.f&(d|b|x)))for(E=0;E<A.length;E++)rn(A[E],t);return a!==null&&nt++,g}finally{h=n,y=r,A=e,u=a,R=l,m=s,i=o,k=_}}function Yn(t,n){let r=n.reactions;if(r!==null){var e=on.call(r,t);if(e!==-1){var a=r.length-1;a===0?r=n.reactions=null:(r[e]=r[a],r.pop())}}r===null&&n.f&d&&(h===null||!h.includes(n))&&(w(n,b),n.f&(N|J)||(n.f^=J),V(n,0))}function V(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Yn(t,r[e])}function lt(t){var n=t.f;if(!(n&M)){w(t,p);var r=f,e=i;f=t;try{n&ht?Rn(t):$t(t),Kt(t),Gt(t);var a=en(t);t.teardown=typeof a=="function"?a:null,t.wv=tn;var l=t.deps,s}catch(o){at(o,t,r,e||t.ctx)}finally{f=r}}}function an(){if(F>1e3){F=0;try{wn()}catch(t){if(U!==null)at(t,U,null);else throw t}}F++}function ln(t){var n=t.length;if(n!==0){an();var r=P;P=!0;try{for(var e=0;e<n;e++){var a=t[e];a.f&p||(a.f^=p);var l=[];sn(a,l),Hn(l)}}finally{P=r}}}function Hn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(M|L)))try{H(e)&&(lt(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Zt(e):e.fn=null))}catch(a){at(a,e,null,e.ctx)}}}function jn(){if(B=!1,F>1001)return;const t=D;D=[],ln(t),B||(F=0,U=null)}function st(t){Z===Xt&&(B||(B=!0,queueMicrotask(jn))),U=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(K|S)){if(!(r&p))return;n.f^=p}}D.push(n)}function sn(t,n){var r=t.first,e=[];t:for(;r!==null;){var a=r.f,l=(a&S)!==0,s=l&&(a&p)!==0,o=r.next;if(!s&&!(a&L))if(a&G){if(l)r.f^=p;else try{H(r)&&lt(r)}catch(v){at(v,r,null,r.ctx)}var _=r.first;if(_!==null){r=_;continue}}else a&Dt&&e.push(r);if(o===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var c=v.next;if(c!==null){r=c;continue t}v=v.parent}}r=o}for(var g=0;g<e.length;g++)_=e[g],n.push(_),sn(_,n)}function un(t){var n=Z,r=D;try{an();const a=[];Z=qn,D=a,B=!1,ln(r);var e=t==null?void 0:t();return bn(),(D.length>0||a.length>0)&&un(),F=0,U=null,e}finally{Z=n,D=r}}async function Gr(){await Promise.resolve(),un()}function ut(t){var g;var n=t.f,r=(n&d)!==0;if(r&&n&M){var e=jt(t);return yt(t),e}if(I!==null&&I.add(t),u!==null&&!k){m!==null&&m.includes(t)&&Tn();var a=u.deps;t.rv<nt&&(t.rv=nt,h===null&&a!==null&&a[y]===t?y++:h===null?h=[t]:h.push(t))}else if(r&&t.deps===null)for(var l=t,s=l.parent,o=l;s!==null;)if(s.f&d){var _=s;o=_,s=_.parent}else{var c=s;(g=c.deriveds)!=null&&g.includes(o)||(c.deriveds??(c.deriveds=[])).push(o);break}return r&&(l=t,H(l)&&Bt(l)),t.v}function Bn(t){var n=I;I=new Set;var r=I,e;try{if(ot(t),n!==null)for(e of I)n.add(e)}finally{I=n}return r}function Kr(t){var n=Bn(()=>ot(t));for(var r of n)if(r.f&vn)for(const e of r.deps||[])e.f&d||it(e,e.v);else it(r,r.v)}function ot(t){var n=k;try{return k=!0,t()}finally{k=n}}const Un=-7169;function w(t,n){t.f=t.f&Un|n}function $r(t,n=1){var r=ut(t),e=n===1?r++:r--;return Et(t,r),e}function Zr(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},rt&&!n&&(i.l={s:null,u:null,r1:[],r2:dt(!1)})}function zr(t){const n=i;if(n!==null){t!==void 0&&(n.x=t);const s=n.e;if(s!==null){var r=f,e=u;n.e=null;try{for(var a=0;a<s.length;a++){var l=s[a];tt(l.effect),X(l.reaction),Vt(l.fn)}}finally{tt(r),X(e)}}i=n.p,n.m=!0}return t||{}}function Jr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(At in t)pt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&At in r&&pt(r)}}}function pt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{pt(t[e],n)}catch{}const r=_n(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=fn(r);for(let a in e){const l=e[a].get;if(l)try{l.call(t)}catch{}}}}}export{Wn as $,i as A,Qn as B,It as C,Jr as D,Rt as E,Yt as F,lr as G,An as H,rt as I,$n as J,Zn as K,dt as L,er as M,Et as N,mt as O,f as P,ar as Q,_n as R,At as S,Vn as T,yr as U,rr as V,vn as W,vr as X,Nt as Y,$r as Z,zn as _,zr as a,S as a0,K as a1,tt as a2,_r as a3,cr as a4,pr as a5,br as a6,hr as a7,Sn as a8,I as a9,it as aA,ur as aB,zt as aC,Cn as aD,ir as aE,fr as aF,Vr as aG,Xn as aH,fn as aI,et as aJ,tr as aK,hn as aL,wr as aM,xr as aN,mr as aO,Mr as aP,Yr as aQ,ft as aa,_t as ab,dr as ac,Er as ad,Jn as ae,C as af,X as ag,u as ah,qr as ai,Kn as aj,Dr as ak,mn as al,q as am,bt as an,kn as ao,Ft as ap,nr as aq,Nr as ar,Gn as as,Lr as at,un as au,Gr as av,Tr as aw,or as ax,L as ay,sr as az,wt as b,Rr as c,kr as d,Vt as e,Or as f,Dn as g,O as h,Ir as i,j,Ar as k,Br as l,jr as m,On as n,T as o,Zr as p,Ur as q,Sr as r,Cr as s,Hr as t,ot as u,gr as v,ut as w,Kr as x,Fr as y,Pr as z};

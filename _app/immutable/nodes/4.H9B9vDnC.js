import{t as A,a as h,c as W}from"../chunks/CKUKgwmd.js";import{i as ma}from"../chunks/AJncAzSd.js";import{h as ta,u as na,b as oa,G as ua,p as ha,I as sa,a as pa,s as R,c as p,A as a,r as d,J as X,f as $,t as j}from"../chunks/BHGRi8DX.js";import{l as ia,d as ka,s as I}from"../chunks/BpJYjnDY.js";import{i as Y}from"../chunks/BYFRodKv.js";import{M as q,c as xa,e as Z,i as g,R as S,g as ba,a as ya,D as Da,b as Ma,s as f,T as Ta,r as aa,d as Ea,f as wa,h as Ca}from"../chunks/BP1oAmB6.js";import{b as Ra}from"../chunks/DhYZVDsW.js";import{o as Aa}from"../chunks/Bb5YKMOf.js";function Pa(e,t,m=t){var x=ua();ia(e,"input",o=>{var c=o?e.defaultValue:e.value;if(c=ea(e)?la(c):c,m(c),x&&c!==(c=t())){var J=e.selectionStart,P=e.selectionEnd;e.value=c??"",P!==null&&(e.selectionStart=J,e.selectionEnd=Math.min(P,e.value.length))}}),(ta&&e.defaultValue!==e.value||na(t)==null&&e.value)&&m(ea(e)?la(e.value):e.value),oa(()=>{var o=t();ea(e)&&o===la(e.value)||e.type==="date"&&!o&&!e.value||o!==e.value&&(e.value=o??"")})}function Va(e,t,m=t){ia(e,"change",x=>{var o=x?e.defaultChecked:e.checked;m(o)}),(ta&&e.defaultChecked!==e.checked||na(t)==null)&&m(e.checked),oa(()=>{var x=t();e.checked=!!x})}function ea(e){var t=e.type;return t==="number"||t==="range"}function la(e){return e===""?null:+e}var Ba=A('<canvas class="svelte-3a5lfa"></canvas>'),Ga=A('<div class="bool svelte-3a5lfa"><label> </label> <input type="checkbox"></div>'),Ha=A('<div class="number svelte-3a5lfa"><label> </label> <input type="range" class="svelte-3a5lfa"> <span class="svelte-3a5lfa"> </span></div>'),Ia=A('<div class="radio svelte-3a5lfa"><input type="radio"> <label> </label></div>'),Ja=A('<div class="radio-label svelte-3a5lfa"> </div> <!>',1),Na=A('<main class="svelte-3a5lfa"><div class="canvas-container svelte-3a5lfa"></div> <div class="controls svelte-3a5lfa"></div></main>');function Qa(e,t){ha(t,!1);let m=sa(Array(24).fill(null).map(()=>({element:null}))),x=q.autoSeed().next();const o=20,c=22,J=1,P=2,_=10,V=sa(xa());function va(i,l){i instanceof Da?i.map.data.forEach((n,s)=>n.forEach((r,u)=>{let b=0;typeof r=="number"?b=r:typeof r=="boolean"&&(b=r?1:0),l.fillStyle=`color-mix(in oklch, hsl(0, 50%, 50%) ${b*100}%, hsl(240, 50%, 50%))`,l.fillRect(s*_,u*_,_,_)})):i.data.forEach((n,s)=>n.forEach((r,u)=>{l.fillStyle=Ma(r).primaryColor,l.fillRect(s*_,u*_,_,_)}))}function fa(i,l){let n=a(V).setting(i);n!==null&&(n.value=l),N()}function N(){let i=new S(q.seed(x));for(const l of a(m)){let n=l.element,s=(n==null?void 0:n.getContext("2d"))??null;if(n!==null&&s!==null){let[r,u]=ba(o,c,J,P,new S(q.seed(i.uint32()))),b=ya(o,c,J,P,r,u,new S(q.seed(i.uint32())),a(V));va(b,s)}}}Aa(()=>{N()}),ma();var z=Na(),F=p(z);Z(F,5,()=>a(m),g,(i,l,n)=>{var s=Ba();f(s,"width",o*_),f(s,"height",c*_),Ra(s,(r,u)=>(u.element=r,X(()=>a(m))),r=>r==null?void 0:r.element,()=>[a(l)]),h(i,s)}),d(F);var ra=R(F,2);Z(ra,5,()=>a(V).settings,g,(i,l,n)=>{var s=W(),r=$(s);{var u=y=>{var D=Ga(),M=p(D),K=p(M,!0);d(M);var T=R(M,2);aa(T),T.__change=N,d(D),j(()=>{f(M,"for",a(l).id),I(K,a(l).name),f(T,"id",a(l).id)}),Va(T,()=>a(l).value,k=>(a(l).value=k,X(()=>a(V).settings))),h(y,D)},b=y=>{var D=W(),M=$(D);{var K=k=>{var E=Ha(),w=p(E),L=p(w,!0);d(w);var v=R(w,2);aa(v),v.__change=N;var B=R(v,2),G=p(B,!0);d(B),d(E),j(()=>{f(w,"for",a(l).id),I(L,a(l).name),f(v,"id",a(l).id),f(v,"min",a(l).sliderMin),f(v,"max",a(l).sliderMax),f(v,"step",a(l).sliderStep),I(G,a(l).value)}),Pa(v,()=>a(l).value,O=>(a(l).value=O,X(()=>a(V).settings))),h(k,E)},T=k=>{var E=W(),w=$(E);{var L=v=>{var B=Ja(),G=$(B),O=p(G,!0);d(G);var ca=R(G,2);Z(ca,1,()=>a(l).options,g,(da,H)=>{var Q=Ia(),C=p(Q);aa(C),C.__click=()=>fa(a(l).id,a(H).id);var U=R(C,2),_a=p(U,!0);d(U),d(Q),j(()=>{f(C,"id",a(l).id+"-"+a(H).id),f(C,"name",a(l).id),Ca(C,a(H).id===a(l).value),f(U,"for",a(l).id+"-"+a(H).id),I(_a,a(H).name)}),h(da,Q)}),j(()=>I(O,a(l).name)),h(v,B)};Y(w,v=>{a(l)instanceof wa&&v(L)},!0)}h(k,E)};Y(M,k=>{a(l)instanceof Ea?k(K):k(T,!1)},!0)}h(y,D)};Y(r,y=>{a(l)instanceof Ta?y(u):y(b,!1)})}h(i,s)}),d(ra),d(z),h(e,z),pa()}ka(["change","click"]);export{Qa as component};

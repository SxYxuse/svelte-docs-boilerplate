import{l as p,u as a,o as d,r as f,q as _,s as m,g as b,v,f as g,U as i,w as c,x as u,y}from"./runtime.BAFUM52B.js";import{a as I}from"./entry.Ie7rGrFD.js";function N(){const n=d,e=n.l.u;e&&(e.b.length&&p(()=>{l(n),f(e.b)}),a(()=>{const t=_(()=>e.m.map(m));return()=>{for(const s of t)typeof s=="function"&&s()}}),e.a.length&&a(()=>{l(n),f(e.a)}))}function l(n){if(n.l.s)for(const e of n.l.s)b(e);v(n.s)}function U(n,e,t){let s=t[e];const r=s===void 0;r&&(s={store:null,last_value:null,value:y(i),unsubscribe:u},t[e]=s),(r||s.store!==n)&&(s.unsubscribe(),s.store=n??null,s.unsubscribe=h(n,s.value));const o=b(s.value);return o===i?s.last_value:o}function q(n,e,t){let s=t[e];return s&&s.store!==n&&(s.unsubscribe(),s.unsubscribe=u),n}function h(n,e){return n==null?(c(e,void 0),u):I(n,t=>c(e,t))}function A(n){k(()=>{let e;for(e in n)n[e].unsubscribe()})}function k(n){g(()=>()=>_(n))}export{q as a,N as i,U as s,A as u};
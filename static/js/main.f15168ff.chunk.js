(this["webpackJsonpaleo-website"]=this["webpackJsonpaleo-website"]||[]).push([[1],{106:function(e,t,n){},107:function(e,t,n){},178:function(e,t,n){"use strict";n.r(t);var c=n(8),l=n(0),a=n.n(l),r=n(25),s=n.n(r),i=(n(106),n(69)),j=n.n(i),u=n(87),d=n(49),o=(n(107),n(183)),b=n(182),h=n(41),O=n(29),x=n(96),f=n(181),p=n(184),v=function(){var e=Object(l.useState)(null),t=Object(d.a)(e,2),a=t[0],r=t[1],s=Object(l.useState)(null),i=Object(d.a)(s,2),v=i[0],y=i[1];Object(l.useEffect)((function(){null===a&&n.e(0).then(n.bind(null,190)).then((function(e){r(e)}))}),[]);var g=function(){var e=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=y,e.next=3,new a.Account;case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(null!==a){return Object(c.jsx)(o.a,{title:"Generate a New Account",style:{width:"90%"},children:Object(c.jsxs)(b.a,{layout:"vertical",children:[Object(c.jsx)(b.a.Item,{children:Object(c.jsxs)(h.a,{justify:"center",children:[Object(c.jsx)(O.a,{children:Object(c.jsx)(x.a,{type:"primary",shape:"round",onClick:g,children:"Generate"})}),Object(c.jsx)(O.a,{offset:"1",children:Object(c.jsx)(x.a,{shape:"round",onClick:function(){return y(null)},children:"Clear"})})]})}),null!==v?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(f.a,{}),Object(c.jsx)(b.a.Item,{children:Object(c.jsx)(p.a,{size:"large",placeholder:"Private Key",value:null!==v?v.to_private_key():"",disabled:!0})}),Object(c.jsx)(b.a.Item,{children:Object(c.jsx)(p.a,{size:"large",placeholder:"View Key",value:null!==v?v.to_view_key():"",disabled:!0})}),Object(c.jsx)(b.a.Item,{children:Object(c.jsx)(p.a,{size:"large",placeholder:"Address",value:null!==v?v.to_address():"",disabled:!0})})]}):null]})})}return Object(c.jsx)("h2",{children:"Loading..."})},y=function(){var e=Object(l.useState)(null),t=Object(d.a)(e,2),a=t[0],r=t[1],s=Object(l.useState)(null),i=Object(d.a)(s,2),j=i[0],u=i[1];Object(l.useEffect)((function(){null===a&&n.e(0).then(n.bind(null,190)).then((function(e){r(e)}))}),[]);if(null!==a){return Object(c.jsxs)(o.a,{title:"Load Account from Private Key",style:{width:"90%"},children:[Object(c.jsx)("div",{style:{marginBottom:16},children:Object(c.jsx)(p.a,{name:"privateKey",size:"large",placeholder:"Private Key",allowClear:!0,onChange:function(e){u(null);try{u(a.Account.from_private_key(e.target.value))}catch(t){console.error(t)}}})}),null!==j?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(f.a,{}),Object(c.jsxs)(b.a,{layout:"vertical",children:[Object(c.jsx)(b.a.Item,{children:Object(c.jsx)(p.a,{size:"large",placeholder:"View Key",value:null!==j?j.to_view_key():"",disabled:!0})}),Object(c.jsx)(b.a.Item,{children:Object(c.jsx)(p.a,{size:"large",placeholder:"Address",value:null!==j?j.to_address():"",disabled:!0})})]})]}):null]})}return Object(c.jsx)("h2",{children:"Loading..."})};var g=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("header",{className:"App-header",children:[Object(c.jsx)(v,{}),Object(c.jsx)("br",{}),Object(c.jsx)(y,{})]})})},m=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,191)).then((function(t){var n=t.getCLS,c=t.getFID,l=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),l(e),a(e),r(e)}))};n(177);s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),m()}},[[178,2,3]]]);
//# sourceMappingURL=main.f15168ff.chunk.js.map
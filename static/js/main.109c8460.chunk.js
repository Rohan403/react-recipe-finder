(this["webpackJsonpniladri-dev"]=this["webpackJsonpniladri-dev"]||[]).push([[0],{54:function(e,n,t){},80:function(e,n,t){"use strict";t.r(n);var c,i,r,a,o,s,d,l,j,p,b,x,h,u,O=t(0),g=t.n(O),f=t(11),m=t.n(f),w=(t(54),t(29)),v=t.n(w),y=t(43),k=t(22),C=t(6),S=t(44),z=t.n(S),I=t(7),R=t(107),F=t(105),J=t(108),M=t(106),T=t(2),_=I.a.div(c||(c=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  width: 300px;\n  box-shadow: 0 3px 10px 0 #aaa;\n"]))),q=I.a.img(i||(i=Object(C.a)(["\n  object-fit: cover;\n  height: 200px;\n"]))),B=I.a.span(r||(r=Object(C.a)(["\n  font-size: 18px;\n  font-weight: 600;\n  color: black;\n  margin: 10px 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]))),E=I.a.span(a||(a=Object(C.a)(["\n  color: #eb3300;\n  font-size: 18px;\n  text-align: center;\n  border: solid 1px #eb3300;\n  border-radius: 3px;\n  padding: 10px 15px;\n  cursor: pointer;\n"]))),N=Object(I.a)(E)(o||(o=Object(C.a)(["\n  color: green;\n  border: solid 1px green;\n  margin-bottom: 12px;\n"]))),P=Object(I.a)(E)(s||(s=Object(C.a)(["\n  color: green;\n  border: solid 1px green;\n"]))),W=function(e){var n=Object(O.useState)(""),t=Object(k.a)(n,2),c=t[0],i=t[1],r=e.recipe,a=r.label,o=r.image,s=r.ingredients,d=r.url;return Object(T.jsxs)(_,{children:[Object(T.jsxs)(R.a,{onClose:function(){return console.log("adsadad")},"aria-labelledby":"simple-dialog-title",open:!!c,children:[Object(T.jsx)(J.a,{children:"Ingredients"}),Object(T.jsxs)(F.a,{children:[Object(T.jsx)(B,{children:a}),Object(T.jsxs)("table",{children:[Object(T.jsxs)("thead",{children:[Object(T.jsx)("th",{children:"Ingredient"}),Object(T.jsx)("th",{children:"Weight"})]}),Object(T.jsx)("tbody",{children:s.map((function(e,n){return Object(T.jsxs)("tr",{className:"ingredient-list",children:[Object(T.jsx)("td",{children:e.text}),Object(T.jsx)("td",{children:e.weight})]},n)}))})]})]}),Object(T.jsxs)(M.a,{children:[Object(T.jsx)(P,{onClick:function(){return window.open(d)},children:"See More"}),Object(T.jsx)(E,{onClick:function(){return i("")},children:"Close"})]})]}),Object(T.jsx)(q,{src:o,alt:a}),Object(T.jsx)(B,{children:a}),Object(T.jsx)(N,{onClick:function(){return i(!c)},children:"Ingredients"}),Object(T.jsx)(E,{onClick:function(){return window.open(d)},children:"See Complete Recipe"})]})},A=I.a.div(d||(d=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),D=I.a.div(l||(l=Object(C.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]))),G=I.a.div(j||(j=Object(C.a)(["\n  background-color: coral;\n  color: white;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  align-items: center;\n  padding: 20px;\n  font-size: 25px;\n  font-weight: bold;\n  box-shadow: 0 3px 6px 0 #555;\n"]))),H=I.a.div(p||(p=Object(C.a)(["\n  display: flex;\n  flex-direction: row;\n  padding: 10px 10px;\n  border-radius: 6px;\n  margin-left: 20px;\n  width: 50%;\n  background-color: white;\n"]))),K=I.a.img(b||(b=Object(C.a)(["\n  width: 32px;\n  height: 32px;\n"]))),L=I.a.img(x||(x=Object(C.a)(["\n  width: 36px;\n  height: 36px;\n  margin: 15px;\n"]))),Q=I.a.input(h||(h=Object(C.a)(["\n  color: black;\n  font-size: 16px;\n  font-weight: bold;\n  border: none;\n  outline: none;\n  margin-left: 15px;\n"]))),U=I.a.div(u||(u=Object(C.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  padding: 30px;\n  gap: 20px;\n  justify-content: space-evenly;\n"]))),V=function(){var e=Object(O.useState)(""),n=Object(k.a)(e,2),t=n[0],c=n[1],i=Object(O.useState)([]),r=Object(k.a)(i,2),a=r[0],o=r[1],s=Object(O.useState)(),d=Object(k.a)(s,2),l=d[0],j=d[1],p=function(){var e=Object(y.a)(v.a.mark((function e(n){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.get("https://api.edamam.com/search?q=".concat(n,"&app_id=").concat("a52b4d43","&app_key=").concat("e0e5c667605f5e91d8275c973531b80a"));case 2:t=e.sent,o(t.data.hits);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(T.jsxs)(A,{children:[Object(T.jsxs)(G,{children:[Object(T.jsxs)(D,{children:[Object(T.jsx)(L,{src:"/react-recipe-finder/hamburger.svg"}),"Recipe Finder"]}),Object(T.jsxs)(H,{children:[Object(T.jsx)(K,{src:"/react-recipe-finder/search-icon.svg"}),Object(T.jsx)(Q,{placeholder:"Search Recipe",value:t,onChange:function(e){clearTimeout(l),c(e.target.value);var n=setTimeout((function(){return p(e.target.value)}),500);j(n)}})]})]}),Object(T.jsx)(U,{children:(null===a||void 0===a?void 0:a.length)?a.map((function(e,n){return Object(T.jsx)(W,{recipe:e.recipe},n)})):Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("p",{style:{color:"white"},children:"Please search to find your appropriate recipie"}),Object(T.jsx)("img",{src:"https://i.pinimg.com/originals/71/6b/27/716b27256c6099e4e2724939ff5e77f9.png",alt:"heyy"})]})})]})};m.a.render(Object(T.jsx)(g.a.StrictMode,{children:Object(T.jsx)(V,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.109c8460.chunk.js.map
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[10],{119:function(n,e,t){"use strict";t.d(e,"a",(function(){return m}));var c=t(0),r=t.n(c),a=(t(49),t(15)),s=function(){return(s=Object.assign||function(n){for(var e,t=1,c=arguments.length;t<c;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}).apply(this,arguments)};var l="",o=null,i=null,u=null;function j(){l="",null!==o&&o.disconnect(),null!==i&&(window.clearTimeout(i),i=null)}function b(n){return["BUTTON","INPUT","SELECT","TEXTAREA"].includes(n.tagName)&&!n.hasAttribute("disabled")||["A","AREA"].includes(n.tagName)&&n.hasAttribute("href")}function d(){var n=null;if("#"===l)n=document.body;else{var e=l.replace("#","");null===(n=document.getElementById(e))&&"#top"===l&&(n=document.body)}if(null!==n){u(n);var t=n.getAttribute("tabindex");return null!==t||b(n)||n.setAttribute("tabindex",-1),n.focus({preventScroll:!0}),null!==t||b(n)||(n.blur(),n.removeAttribute("tabindex")),j(),!0}return!1}function h(n){return r.a.forwardRef((function(e,t){var c="";"string"===typeof e.to&&e.to.includes("#")?c="#"+e.to.split("#").slice(1).join("#"):"object"===typeof e.to&&"string"===typeof e.to.hash&&(c=e.to.hash);var b={};n===a.c&&(b.isActive=function(n,e){return n&&n.isExact&&e.hash===c});var h=function(n,e){var t={};for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&e.indexOf(c)<0&&(t[c]=n[c]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(c=Object.getOwnPropertySymbols(n);r<c.length;r++)e.indexOf(c[r])<0&&Object.prototype.propertyIsEnumerable.call(n,c[r])&&(t[c[r]]=n[c[r]])}return t}(e,["scroll","smooth","timeout","elementId"]);return r.a.createElement(n,s({},b,h,{onClick:function(n){var t;j(),l=e.elementId?"#"+e.elementId:c,e.onClick&&e.onClick(n),""===l||n.defaultPrevented||0!==n.button||e.target&&"_self"!==e.target||n.metaKey||n.altKey||n.ctrlKey||n.shiftKey||(u=e.scroll||function(n){return e.smooth?n.scrollIntoView({behavior:"smooth"}):n.scrollIntoView()},t=e.timeout,window.setTimeout((function(){!1===d()&&(null===o&&(o=new MutationObserver(d)),o.observe(document,{attributes:!0,childList:!0,subtree:!0}),i=window.setTimeout((function(){j()}),t||1e4))}),0))},ref:t}),e.children)}))}var m=h(a.b);h(a.c)},138:function(n,e,t){},402:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return K}));var c=t(71),r=t(0),a=t.n(r),s=t(66),l=t(73),o=t.n(l),i=t(108),u=t(119),j=t(3);function b(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Welcome page"}),Object(j.jsx)("section",{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("p",{className:"mt-4",children:[Object(j.jsx)("strong",{children:"\u0421\u0430\u043b\u044e\u0442!"})," \u0422\u044b \u043f\u043e\u043f\u0430\u043b \u043d\u0430 \u044d\u0442\u043e\u0442 \u043f\u043e\u0440\u0442\u0430\u043b, \u0430 \u0437\u043d\u0430\u0447\u0438\u0442 \u0438\u0449\u0435\u0448\u044c \u0437\u043d\u0430\u043d\u0438\u0439. \u0422\u043e\u0433\u0434\u0430 - \u0442\u044b \u043f\u043e \u043f\u043e\u043f\u0430\u043b \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443!"]}),Object(j.jsxs)("div",{className:"alert alert-dark mt-2",role:"alert",children:[Object(j.jsx)("strong",{children:"\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435:"})," \u0412\u043e \u0432\u043a\u043b\u0430\u0434\u043a\u0430\u0445 ",Object(j.jsx)("kbd",{children:"HTML"}),", ",Object(j.jsx)("kbd",{children:"CSS"}),", ",Object(j.jsx)("kbd",{children:"Advanced"}),", ",Object(j.jsx)("kbd",{children:"JS"})," - \u0442\u044b \u043d\u0430\u0439\u0434\u0435\u0448\u044c \u0432\u0441\u044e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0437\u043d\u0430\u043d\u0438\u0439 \u043f\u0440\u043e\u0448\u043b\u043e \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0441 \u043f\u043e\u043b\u044c\u0437\u043e\u0439."]}),Object(j.jsxs)("div",{className:"alert alert-primary mt-2",role:"alert",children:["\u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u0434\u0430\u043b\u044c\u0448\u0435 \u0432 \u0443\u0440\u043e\u043a\u0430\u0445 \u0431\u0443\u0434\u0443\u0442 \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 ",Object(j.jsx)("a",{href:"https://creativeeconomy.school/ua/course/front-end",target:"blank",className:"alert-link",children:"\u0441\u0441\u044b\u043b\u043a\u0438"}),"."]}),Object(j.jsxs)("div",{className:"alert alert-warning mt-2",role:"alert",children:[Object(j.jsx)("strong",{children:"\u0421\u043f\u043e\u0439\u043b\u0435\u0440:"})," ",Object(j.jsx)("a",{href:"https://creativeeconomy.school/ua/course/front-end",target:"blank",className:"alert-link",download:!0,children:"\u0422\u0443\u0442"})," \u0442\u044b \u0441\u043c\u043e\u0436\u0435\u0448\u044c \u043d\u0430\u0439\u0442\u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0443 \u043a\u0443\u0440\u0441\u0430 \u0438 \u0441\u043a\u0430\u0447\u0430\u0442\u044c \u0435\u0435!"]}),Object(j.jsxs)("p",{className:"mt-4",children:["\u0412\u043e \u0432\u0440\u0435\u043c\u044f \u043f\u0440\u043e\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044f ",Object(j.jsx)("strong",{children:"\u043a\u0443\u0440\u0441\u0430"})," - \u043e\u0431\u0440\u0430\u0449\u0430\u0439 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u044f \u043d\u0430 \u0431\u043b\u043e\u043a\u0438, \u043a\u0430\u043a \u0442\u0435, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u044b \u0432\u044b\u0448\u0435. \u0412 \u043d\u0438\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043c\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u0435\u0437\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438!"]}),Object(j.jsx)("div",{className:"row d-flex flex-row justify-content-center mt-4",children:Object(j.jsx)(u.a,{class:"btn btn-primary w-75",to:"/htmlMain/HTML1",children:"\u041d\u0430\u0447\u0430\u0442\u044c \u043a\u0443\u0440\u0441!"})})]})})]})}t(138);function d(){return Object(j.jsx)("section",{class:"page_404",children:Object(j.jsx)("div",{class:"container",children:Object(j.jsx)("div",{class:"row",children:Object(j.jsx)("div",{class:"col-sm-12 ",children:Object(j.jsxs)("div",{class:"col-sm-12 col-sm-offset-1  text-center",children:[Object(j.jsx)("div",{class:"four_zero_four_bg",children:Object(j.jsx)("h1",{class:"text-center ",children:"404"})}),Object(j.jsxs)("div",{class:"contant_box_404",children:[Object(j.jsx)("h3",{class:"h2",children:"\u041f\u043e\u0445\u043e\u0436\u0435, \u0432\u044b \u0437\u0430\u0431\u043b\u0443\u0434\u0438\u043b\u0438\u0441\u044c"}),Object(j.jsx)("p",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0432\u044b \u0438\u0449\u0435\u0442\u0435, \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430!"}),Object(j.jsx)("a",{href:"/",class:"link_404",children:"Go Home"})]})]})})})})})}var h,m=t(10),O=a.a.lazy((function(){return Promise.all([t.e(0),t.e(26)]).then(t.bind(null,405))})),f=a.a.lazy((function(){return Promise.all([t.e(0),t.e(27)]).then(t.bind(null,394))})),x=a.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(7)]).then(t.bind(null,399))})),p=a.a.lazy((function(){return Promise.all([t.e(0),t.e(21)]).then(t.bind(null,400))})),v=a.a.lazy((function(){return Promise.all([t.e(0),t.e(22)]).then(t.bind(null,385))})),y=a.a.lazy((function(){return Promise.all([t.e(0),t.e(23)]).then(t.bind(null,386))})),M=a.a.lazy((function(){return Promise.all([t.e(0),t.e(24)]).then(t.bind(null,403))})),S=a.a.lazy((function(){return Promise.all([t.e(0),t.e(25)]).then(t.bind(null,406))})),g=a.a.lazy((function(){return Promise.all([t.e(0),t.e(9)]).then(t.bind(null,388))})),P=a.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(5),t.e(12)]).then(t.bind(null,390))})),w=a.a.lazy((function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,391))})),z=a.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(16),t.e(13)]).then(t.bind(null,392))})),A=a.a.lazy((function(){return Promise.all([t.e(0),t.e(11)]).then(t.bind(null,395))})),k=a.a.lazy((function(){return Promise.all([t.e(0),t.e(19)]).then(t.bind(null,387))})),C=a.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(20)]).then(t.bind(null,389))})),T=a.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(8)]).then(t.bind(null,396))})),N=a.a.lazy((function(){return t.e(17).then(t.bind(null,397))})),E=a.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(18)]).then(t.bind(null,401))})),I=a.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(14)]).then(t.bind(null,398))})),L=a.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(28),t.e(15)]).then(t.bind(null,404))})),_=Object(s.css)(h||(h=Object(c.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: #F68112;\nposition: absolute;\ntop:50%;\nleft:50%;\ntransform: translate(-50%, -50%);\n"]))),H=i.a.Content;function J(){return Object(m.g)().pathname}function K(){return Object(j.jsx)(H,{style:{margin:"0 16px"},children:Object(j.jsxs)(r.Suspense,{className:"loader",fallback:Object(j.jsx)(o.a,{color:"#F68112",css:_,size:25}),children:[Object(j.jsxs)(m.d,{children:[Object(j.jsx)(m.b,{exact:!0,path:"/",component:function(){return Object(j.jsx)(b,{})}}),Object(j.jsx)(m.b,{path:"/cssMain",component:function(){return"/cssMain"===J()?Object(j.jsx)(m.a,{to:"/cssMain/CSS1"}):""}}),Object(j.jsx)(m.b,{path:"/htmlMain",component:function(){return"/htmlMain"===J()?Object(j.jsx)(m.a,{to:"/htmlMain/HTML1"}):""}}),Object(j.jsx)(m.b,{path:"/advancedMain",component:function(){return"/advancedMain"===J()?Object(j.jsx)(m.a,{to:"/advancedMain/Advanced1"}):""}}),Object(j.jsx)(m.b,{path:"/jsMain",component:function(){return"/jsMain"===J()?Object(j.jsx)(m.a,{to:"/jsMain/JS1"}):""}}),Object(j.jsx)(m.b,{path:"",component:function(){return"/"!==J()?Object(j.jsx)(d,{}):""}})]}),Object(j.jsxs)(m.d,{children:[Object(j.jsx)(m.b,{path:"/htmlMain/HTML1",component:function(){return Object(j.jsx)(O,{})}}),Object(j.jsx)(m.b,{path:"/htmlMain/HTML2",component:function(){return Object(j.jsx)(f,{})}}),Object(j.jsx)(m.b,{path:"/htmlMain/HTML3",component:function(){return Object(j.jsx)(x,{})}}),Object(j.jsx)(m.b,{path:"/cssMain/CSS1",component:function(){return Object(j.jsx)(p,{})}}),Object(j.jsx)(m.b,{path:"/cssMain/CSS2",component:function(){return Object(j.jsx)(v,{})}}),Object(j.jsx)(m.b,{path:"/cssMain/CSS3",component:function(){return Object(j.jsx)(y,{})}}),Object(j.jsx)(m.b,{path:"/cssMain/CSS4",component:function(){return Object(j.jsx)(M,{})}}),Object(j.jsx)(m.b,{path:"/cssMain/CSS5",component:function(){return Object(j.jsx)(S,{})}}),Object(j.jsx)(m.b,{path:"/cssMain/CSS6",component:function(){return Object(j.jsx)(g,{})}}),Object(j.jsx)(m.b,{path:"/cssMain/CSS7",component:function(){return Object(j.jsx)(P,{})}}),Object(j.jsx)(m.b,{path:"/cssMain/CSS8",component:function(){return Object(j.jsx)(w,{})}}),Object(j.jsx)(m.b,{path:"/cssMain/CSS9",component:function(){return Object(j.jsx)(z,{})}}),Object(j.jsx)(m.b,{path:"/cssMain/CSS10",component:function(){return Object(j.jsx)(A,{})}}),Object(j.jsx)(m.b,{path:"/advancedMain/Advanced1",component:function(){return Object(j.jsx)(k,{})}}),Object(j.jsx)(m.b,{path:"/advancedMain/Advanced2",component:function(){return Object(j.jsx)(C,{})}}),Object(j.jsx)(m.b,{path:"/advancedMain/Advanced3",component:function(){return Object(j.jsx)(T,{})}}),Object(j.jsx)(m.b,{path:"/advancedMain/Advanced4",component:function(){return Object(j.jsx)(N,{})}}),Object(j.jsx)(m.b,{path:"/advancedMain/Advanced5",component:function(){return Object(j.jsx)(E,{})}}),Object(j.jsx)(m.b,{path:"/jsMain/JS1",component:function(){return Object(j.jsx)(I,{})}}),Object(j.jsx)(m.b,{path:"/jsMain/JS2",component:function(){return Object(j.jsx)(L,{})}}),Object(j.jsx)(m.b,{path:"",component:function(){return"/"!==J()?Object(j.jsx)(d,{}):""}})]})]})})}}}]);
//# sourceMappingURL=10.660ae711.chunk.js.map
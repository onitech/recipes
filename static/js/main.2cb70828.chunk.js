(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,function(e,t,a){e.exports={result:"result_result__3vqtd",title:"result_title__15-xI",image:"result_image__1F1uw",ingredients:"result_ingredients__RiLiV",sourceLabel:"result_sourceLabel__2lbZm",sourceLink:"result_sourceLink__3RJZe"}},,,,,,function(e,t,a){e.exports={noResult:"no-result_noResult__1joC5"}},function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),s=a.n(c),l=(a(13),a(3)),i=a.n(l),o=a(6),u=a(2),m=a(1),p=a.n(m);var f=function(e){var t=e.title,a=e.calories,n=e.image,c=e.source,s=e.url,l=e.ingredients;return r.a.createElement("div",{className:p.a.result},r.a.createElement("h1",{className:p.a.title},t),r.a.createElement("img",{className:p.a.image,src:n,alt:""}),r.a.createElement("span",{className:p.a.calories},r.a.createElement("b",null,"Calories: "),a.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),r.a.createElement("ul",{className:p.a.ingredients},r.a.createElement("b",null,"Ingredients:"),l.map((function(e){return r.a.createElement("li",null,e.text)}))),r.a.createElement("a",{href:s},r.a.createElement("span",{className:p.a.sourceLabel},"See full recipe on: "),r.a.createElement("span",{className:p.a.sourceLink},c)))},h=(a(15),function(e){var t=e.recipes;return r.a.createElement("div",{className:"recipes"},t.map((function(e){return r.a.createElement(f,{key:e.recipe.url,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,source:e.recipe.source,url:e.recipe.url,ingredients:e.recipe.ingredients})})))}),b=a(7),d=a.n(b);function E(){return r.a.createElement("div",{className:d.a.noResult},"NO RESULT!")}a(16);var g=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),l=Object(u.a)(s,2),m=l[0],p=l[1],f=Object(n.useState)(""),b=Object(u.a)(f,2),d=b[0],g=b[1],_=Object(n.useState)(100),v=Object(u.a)(_,2),k=v[0],x=v[1],N=function(){var e=Object(o.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!d){e.next=8;break}return e.next=3,fetch("https://api.edamam.com/search?q=".concat(d,"&app_id=").concat("244ea43b","&app_key=").concat("07e940acdb8f63eef87c8f248c71fb40","&from=0&to=20&ingr=").concat(k));case 3:return t=e.sent,e.next=6,t.json();case 6:(a=e.sent).hits&&a.hits.length?c(a.hits):c(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){N(),g("")}),[d]),r.a.createElement("div",{className:"App"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),g(m),p("")},className:"search-form"},r.a.createElement("span",{className:"search-tag"},r.a.createElement("input",{type:"checkbox",id:"checkboxOne",onChange:function(e){e.target.checked?x(5):x(100)}}),r.a.createElement("label",{for:"checkboxOne"},"EASY")),r.a.createElement("input",{className:"search-bar",type:"text",value:m,onChange:function(e){p(e.target.value)},placeholder:"Enter any dish you want"}),r.a.createElement("button",{className:"search-button",type:"submit"},"Search"),r.a.createElement("ul",{class:"ks-cboxtags"})),a?r.a.createElement(h,{recipes:a}):r.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.2cb70828.chunk.js.map
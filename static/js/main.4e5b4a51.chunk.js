(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(2),c=n.n(r),i=n(3),s=n(4),l=n(6),u=n(5),d=function(e){var t=e.goods;return a.a.createElement("div",{className:"content"},a.a.createElement("ul",{type:"1"},t.map((function(e){return a.a.createElement("li",{key:e.id,style:{color:e.color}},e.name)}))))};n(12);function m(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(e){return e.json()}))}var f=function(){return m().then((function(e){return e.sort((function(e,t){return e.name.localeCompare(t.name)})).slice(0,5)}))},h=function(){return m().then((function(e){return e.filter((function(e){return"red"===e.color}))}))},g=function(e){var t=e.name,n=e.onClick;return a.a.createElement("button",{className:"button is-info",type:"button",onClick:n},t)},p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={goods:[]},e.loadGoods=function(t){t().then((function(t){return e.setState({goods:t})}))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.state.goods;return a.a.createElement("div",{className:"section is-center"},a.a.createElement("h1",{className:"title"},"Dynamic list of Goods"),a.a.createElement("div",{className:"buttons"},a.a.createElement(g,{name:"Load All goods",onClick:function(){return e.loadGoods(m)}}),a.a.createElement(g,{name:"Load 5 first goods",onClick:function(){return e.loadGoods(f)}}),a.a.createElement(g,{name:"Load red goods",onClick:function(){return e.loadGoods(h)}})),a.a.createElement(d,{goods:t}))}}]),n}(a.a.Component);c.a.render(a.a.createElement(p,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.4e5b4a51.chunk.js.map
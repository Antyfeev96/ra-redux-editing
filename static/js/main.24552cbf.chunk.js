(this.webpackJsonpredux=this.webpackJsonpredux||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(5),i=n.n(r),u=(n(19),n(13)),d=(n(20),n(21),n(2)),o="ADD_ITEM",l="EDIT_ITEM",s="REMOVE_ITEM",p="SAVE_EDITED_ITEM",j="CHANGE_ITEM_FIELD",m="CHANGE_EDITED_ID";function b(e,t){return{type:j,payload:{name:e,value:t}}}function f(e){return{type:m,payload:{editedId:e}}}var O=n(1);function v(){var e=Object(d.c)((function(e){return e.itemAdd}));console.log(e);var t=Object(d.b)(),n=function(){t(b("name","")),t(b("price",""))},a=function(e){var n=e.target,a=n.name,c=n.value;t(b(a,c))};return Object(O.jsxs)("form",{className:"form",onSubmit:null!==e.editedId?function(a){var c,r,i;a.preventDefault(),t((c=e.name,r=e.price,i=e.editedId,{type:p,payload:{name:c,value:r,editedId:i}})),t(f(null)),n()}:function(a){var c,r;a.preventDefault(),t((c=e.name,r=e.price,{type:o,payload:{name:c,price:r}})),n()},children:[Object(O.jsx)("input",{className:"form__name",name:"name",onChange:a,value:e.name}),Object(O.jsx)("input",{className:"form__price",name:"price",onChange:a,value:e.price}),null!==e.editedId?Object(O.jsx)("button",{className:"form__cancel",onClick:function(){t(f(null)),n()},type:"button",children:"Cancel"}):null,Object(O.jsx)("button",{className:"form__button",type:"submit",children:"Save"})]})}n(27);function _(){var e=Object(d.c)((function(e){return e.itemList})),t=(Object(d.c)((function(e){return e.itemAdd})),Object(d.b)()),n=function(e,n,a){t(function(e,t){return{type:l,payload:{name:e,price:t}}}(e,n)),t(f(a))},a=function(e){t(function(e){return{type:s,payload:{id:e}}}(e))};return Object(O.jsx)("ul",{className:"list",children:e.map((function(e){return Object(O.jsxs)("li",{className:"item",children:[e.name," ",e.price,Object(O.jsx)("span",{children:"\u20bd"}),Object(O.jsx)("button",{onClick:function(){return n(e.name,e.price,e.id)},children:"\u270e"}),Object(O.jsx)("button",{onClick:function(){return a(e.id)},children:"\u2715"})]},e.id)}))})}var y=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2);return t[0],t[1],Object(O.jsxs)("div",{className:"app",children:[Object(O.jsx)(v,{edited:!0}),Object(O.jsx)(_,{setEdited:!0})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},h=n(12),I=n(14),x=n(8),D=[{id:Object(x.a)(),name:"\u0417\u0430\u043c\u0435\u043d\u0430 \u0441\u0442\u0435\u043a\u043b\u0430",price:21e3},{id:Object(x.a)(),name:"\u0417\u0430\u043c\u0435\u043d\u0430 \u0434\u0438\u0441\u043f\u043b\u0435\u044f",price:25e3}];var N=n(7),g=n(3),T={name:"",price:"",editedId:null};var C=Object(h.a)({itemList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var n=t.payload,a=n.name,c=n.price;return[].concat(Object(I.a)(e),[{id:Object(x.a)(),name:a,price:Number(c)}]);case s:var r=t.payload.id;return e.filter((function(e){return e.id!==r}));case p:var i=t.payload.name,u=t.payload.value,d=t.payload.editedId;return e=e.map((function(e){return e.id===d&&(e.name=i,e.price=u),e}));default:return e}},itemAdd:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:var n=t.payload,a=n.name,c=n.value;return Object(g.a)(Object(g.a)({},e),{},Object(N.a)({},a,c));case l:var r=t.payload.price,i=t.payload.name;return Object(g.a)(Object(g.a)({},e),{},{name:i,price:r});case m:var u=t.payload.editedId;return Object(g.a)(Object(g.a)({},e),{},{editedId:u});default:return e}}}),S=Object(h.b)(C,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(O.jsx)(d.a,{store:S,children:Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(y,{})})}),document.getElementById("root")),E()}},[[28,1,2]]]);
//# sourceMappingURL=main.24552cbf.chunk.js.map
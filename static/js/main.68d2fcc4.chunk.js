(this["webpackJsonpredux-todo"]=this["webpackJsonpredux-todo"]||[]).push([[0],{13:function(e,t,n){e.exports=n(25)},18:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(2),c=n.n(a),l=(n(18),n(9),n(3));var d=Object(l.b)((function(e){return{todos:e.todos}}),null)((function(e){var t=e.todos;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement("li",null,e.name)})))}));var u=function(){return r.a.createElement("div",null,r.a.createElement(d,null))},i=n(1),s=n(11),m=n(12),p=n(7),b={todos:[{title:"First todo",done:!0},{title:"Second todo",done:!1}]},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TODO_ADD":return Object(p.a)(Object(p.a)({},e),{},{todos:[].concat(Object(m.a)(e.todos),[{title:t.payload,done:!1}])});default:return e}},v=Object(i.createStore)(f,Object(s.composeWithDevTools)(Object(i.applyMiddleware)()));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:v},r.a.createElement(u,null))),document.getElementById("root"))},9:function(e,t,n){}},[[13,1,2]]]);
//# sourceMappingURL=main.68d2fcc4.chunk.js.map
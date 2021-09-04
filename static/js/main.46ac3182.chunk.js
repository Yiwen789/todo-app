(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{49:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(40),c=n.n(a),o=(n(49),n(2)),r=n(3),i=n(7),l=n(6),d=n(15),u=n(4),h=n(41),j=new(function(){function e(){Object(o.a)(this,e)}return Object(r.a)(e,[{key:"registerSuccessfulLogin",value:function(e,t){console.log("registerSuccessfulLogin"),sessionStorage.setItem("authenticatedUser",e)}},{key:"logout",value:function(){sessionStorage.removeItem("authenticatedUser")}},{key:"isUserLoggedIn",value:function(){return null!==sessionStorage.getItem("authenticatedUser")}},{key:"getLoggedInUserName",value:function(){var e=sessionStorage.getItem("authenticatedUser");return null===e?"":e}}]),e}()),b=n(1),p=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return j.isUserLoggedIn()?Object(b.jsx)(u.b,Object(h.a)({},this.props)):Object(b.jsx)(u.a,{to:"/login"})}}]),n}(s.Component),O=n(24),m=n(9),g=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).state={username:"helloworld",password:"",hasLoginFailed:!1,showSuccessMessage:!1},s.handleChange=s.handleChange.bind(Object(m.a)(s)),s.loginClicked=s.loginClicked.bind(Object(m.a)(s)),s}return Object(r.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(O.a)({},e.target.name,e.target.value))}},{key:"loginClicked",value:function(){"in28minutes"===this.state.username&&"dummy"===this.state.password||""===this.state.password?(j.registerSuccessfulLogin(this.state.username,this.state.password),this.props.history.push("/welcome/".concat(this.state.username))):(this.setState({showSuccessMessage:!1}),this.setState({hasLoginFailed:!0}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Login"}),Object(b.jsxs)("div",{className:"container",children:[this.state.hasLoginFailed&&Object(b.jsx)("div",{className:"alert alert-warning",children:"Invalid Credentials"}),this.state.showSuccessMessage&&Object(b.jsx)("div",{children:"Login Sucessful"}),"User Name: ",Object(b.jsx)("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleChange}),"Password: ",Object(b.jsx)("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange}),Object(b.jsx)("button",{className:"btn btn-success",onClick:this.loginClicked,children:"Login"})]})]})}}]),n}(s.Component),v=n(16),f=n.n(v),x=new(function(){function e(){Object(o.a)(this,e)}return Object(r.a)(e,[{key:"retrieveAllTodos",value:function(e){return f.a.get("http://localhost:8080/users/".concat(e,"/todos"))}},{key:"retrieveTodo",value:function(e,t){return f.a.get("http://localhost:8080/users/".concat(e,"/todos/").concat(t))}},{key:"deleteTodo",value:function(e,t){return f.a.delete("http://localhost:8080/users/".concat(e,"/todos/").concat(t))}},{key:"updateTodo",value:function(e,t,n){return f.a.put("http://localhost:8080/users/".concat(e,"/todos/").concat(t),n)}},{key:"createTodo",value:function(e,t){return f.a.post("http://localhost:8080/users/".concat(e,"/todos/"),t)}}]),e}()),k=n(21),y=n.n(k),C=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var s;return Object(o.a)(this,n),console.log("constructor"),(s=t.call(this,e)).state={todos:[],message:null},s.deleteTodoClicked=s.deleteTodoClicked.bind(Object(m.a)(s)),s.updateTodoClicked=s.updateTodoClicked.bind(Object(m.a)(s)),s.addTodoClicked=s.addTodoClicked.bind(Object(m.a)(s)),s.refreshTodos=s.refreshTodos.bind(Object(m.a)(s)),s}return Object(r.a)(n,[{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount")}},{key:"shouldComponentUpdate",value:function(e,t){return console.log("shouldComponentUpdate"),console.log(e),console.log(t),!0}},{key:"componentDidMount",value:function(){console.log("componentDidMount"),this.refreshTodos(),console.log(this.state)}},{key:"refreshTodos",value:function(){var e=this,t=j.getLoggedInUserName();x.retrieveAllTodos(t).then((function(t){e.setState({todos:t.data})}))}},{key:"deleteTodoClicked",value:function(e){var t=this,n=j.getLoggedInUserName();x.deleteTodo(n,e).then((function(n){t.setState({message:"Delete of todo ".concat(e," Successful")}),t.refreshTodos()}))}},{key:"addTodoClicked",value:function(){this.props.history.push("/todos/-1")}},{key:"updateTodoClicked",value:function(e){console.log("update "+e),this.props.history.push("/todos/".concat(e))}},{key:"render",value:function(){var e=this;return console.log("render"),Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"List Todos"}),this.state.message&&Object(b.jsx)("div",{class:"alert alert-success",children:this.state.message}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("table",{className:"table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Description"}),Object(b.jsx)("th",{children:"Target Date"}),Object(b.jsx)("th",{children:"IsCompleted?"}),Object(b.jsx)("th",{children:"Update"}),Object(b.jsx)("th",{children:"Delete"})]})}),Object(b.jsx)("tbody",{children:this.state.todos.map((function(t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t.description}),Object(b.jsx)("td",{children:t.done.toString()}),Object(b.jsx)("td",{children:y()(t.targetDate).format("YYYY-MM-DD")}),Object(b.jsx)("td",{children:Object(b.jsx)("button",{className:"btn btn-success",onClick:function(){return e.updateTodoClicked(t.id)},children:"Update"})}),Object(b.jsx)("td",{children:Object(b.jsx)("button",{className:"btn btn-warning",onClick:function(){return e.deleteTodoClicked(t.id)},children:"Delete"})})]},t.id)}))})]}),Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("button",{className:"btn btn-success",onClick:this.addTodoClicked,children:"Add"})})]})]})}}]),n}(s.Component);var N=function(){return Object(b.jsx)("div",{children:"An Error Occurred. I don't know what to do! Contact support at abcd-efgh-ijkl"})},w=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=j.isUserLoggedIn();return Object(b.jsx)("header",{children:Object(b.jsxs)("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark",children:[Object(b.jsx)("div",{children:Object(b.jsx)("a",{href:"https://github.com/Yiwen789",className:"navbar-brand",children:"Wonder List"})}),Object(b.jsxs)("ul",{className:"navbar-nav",children:[e&&Object(b.jsx)("li",{children:Object(b.jsx)(d.b,{className:"nav-link",to:"/welcome/wonderlist",children:"Home"})}),e&&Object(b.jsx)("li",{children:Object(b.jsx)(d.b,{className:"nav-link",to:"/todos",children:"Todos"})})]}),Object(b.jsxs)("ul",{className:"navbar-nav navbar-collapse justify-content-end",children:[!e&&Object(b.jsx)("li",{children:Object(b.jsx)(d.b,{className:"nav-link",to:"/login",children:"Login"})}),e&&Object(b.jsx)("li",{children:Object(b.jsx)(d.b,{className:"nav-link",to:"/logout",onClick:j.logout,children:"Logout"})})]})]})})}}]),n}(s.Component),T=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(b.jsx)("footer",{className:"footer",children:Object(b.jsxs)("span",{className:"text-muted",children:["Thank you for using! For more information please visit my ",Object(b.jsx)("a",{href:"https://github.com/Yiwen789",children:"GitHub"})]})})}}]),n}(s.Component),S=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"You are logged out"}),Object(b.jsx)("div",{className:"container",children:"Thank You for Using Our Application."})]})}}]),n}(s.Component),D=new(function(){function e(){Object(o.a)(this,e)}return Object(r.a)(e,[{key:"executeHelloWorldService",value:function(){return f.a.get("http://localhost:8080/hello-world")}},{key:"executeHelloWorldBeanService",value:function(){return f.a.get("http://localhost:8080/hello-world-bean")}},{key:"executeHelloWorldPathVariableService",value:function(e){return f.a.get("http://localhost:8080/hello-world/path-variable/".concat(e))}}]),e}()),L=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).state={welcomeMessage:""},s.retrieveWelcomeMessage=s.retrieveWelcomeMessage.bind(Object(m.a)(s)),s.handleSuccesfulResponse=s.handleSuccesfulResponse.bind(Object(m.a)(s)),s.handleError=s.handleError.bind(Object(m.a)(s)),s}return Object(r.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Welcome!"}),Object(b.jsxs)("div",{className:"container",children:["Welcome ",this.props.match.params.name,". You can manage your todos",Object(b.jsx)(d.b,{to:"/todos",children:"here"}),"."]}),Object(b.jsxs)("div",{className:"container",children:["Click here to get a customized welcome message",Object(b.jsx)("button",{onClick:this.retrieveWelcomeMessage,className:"btn btn-success",children:"Get Welcome Message"})]}),Object(b.jsx)("div",{className:"container",children:this.state.welcomeMessage})]})}},{key:"retrieveWelcomeMessage",value:function(){var e=this;D.executeHelloWorldPathVariableService(this.props.match.params.name).then((function(t){return e.handleSuccesfulResponse(t)})).catch((function(t){return e.handleError(t)}))}},{key:"handleSuccesfulResponse",value:function(e){this.setState({welcomeMessage:e.data.message})}},{key:"handleError",value:function(e){this.setState({welcomeMessage:e.data.message})}}]),n}(s.Component),M=n(20),U=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).state={id:s.props.match.params.id,description:"",targetDate:y()(new Date).format("YYYY-MM-DD")},s.onSubmit=s.onSubmit.bind(Object(m.a)(s)),s.validate=s.validate.bind(Object(m.a)(s)),s}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;if(-1!==this.state.id){var t=j.getLoggedInUserName();x.retrieveTodo(t,this.state.id).then((function(t){return e.setState({description:t.data.description,targetDate:y()(t.data.targetDate).format("YYYY-MM-DD")})}))}}},{key:"validate",value:function(e){var t={};return e.description?e.description.length<5&&(t.description="Enter atleast 5 Characters in Description"):t.description="Enter a Description",y()(e.targetDate).isValid()||(t.targetDate="Enter a valid Target Date"),t}},{key:"onSubmit",value:function(e){var t=this,n=j.getLoggedInUserName(),s={id:this.state.id,description:e.description,targetDate:e.targetDate};-1===this.state.id?x.createTodo(n,s).then((function(){return t.props.history.push("/todos")})):x.updateTodo(n,this.state.id,s).then((function(){return t.props.history.push("/todos")})),console.log(e)}},{key:"render",value:function(){var e=this.state,t=e.description,n=e.targetDate;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Todo"}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(M.d,{initialValues:{description:t,targetDate:n},onSubmit:this.onSubmit,validateOnChange:!1,validateOnBlur:!1,validate:this.validate,enableReinitialize:!0,children:function(e){return Object(b.jsxs)(M.c,{children:[Object(b.jsx)(M.a,{name:"description",component:"div",className:"alert alert-warning"}),Object(b.jsx)(M.a,{name:"targetDate",component:"div",className:"alert alert-warning"}),Object(b.jsxs)("fieldset",{className:"form-group",children:[Object(b.jsx)("label",{children:"Description"}),Object(b.jsx)(M.b,{className:"form-control",type:"text",name:"description"})]}),Object(b.jsxs)("fieldset",{className:"form-group",children:[Object(b.jsx)("label",{children:"Target Date"}),Object(b.jsx)(M.b,{className:"form-control",type:"date",name:"targetDate"})]}),Object(b.jsx)("button",{className:"btn btn-success",type:"submit",children:"Save"})]})}})})]})}}]),n}(s.Component),I=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"TodoApp",children:Object(b.jsx)(d.a,{children:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(w,{}),Object(b.jsxs)(u.d,{children:[Object(b.jsx)(u.b,{path:"/",exact:!0,component:g}),Object(b.jsx)(u.b,{path:"/login",component:g}),Object(b.jsx)(p,{path:"/welcome/:name",component:L}),Object(b.jsx)(p,{path:"/todos/:id",component:U}),Object(b.jsx)(p,{path:"/todos",component:C}),Object(b.jsx)(p,{path:"/logout",component:S}),Object(b.jsx)(u.b,{component:N})]}),Object(b.jsx)(T,{})]})})})}}]),n}(s.Component),Y=(n(78),n(79),function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(I,{})})}}]),n}(s.Component)),W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),s(e),a(e),c(e),o(e)}))};c.a.render(Object(b.jsx)(Y,{}),document.getElementById("root")),W()}},[[80,1,2]]]);
//# sourceMappingURL=main.46ac3182.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(88)},41:function(e,t,a){},42:function(e,t){!function(e,t){var a=e.documentElement,n="orientationchange"in window?"orientationchange":"resize",l=function(){var e=a.clientWidth;e>=640&&(e=640),e&&(a.style.fontSize=e/640*100+"px")};e.addEventListener&&(t.addEventListener(n,l,!1),e.addEventListener("DOMContentLoaded",l,!1))}(document,window)},43:function(e,t,a){},44:function(e,t,a){},49:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(31),r=a.n(c),m=a(1),i=a(2),s=a(4),o=a(3),u=a(5),E=(a(41),a(42),a(12)),p=(a(43),function(e){function t(){return Object(m.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"PubliceHeader"},l.a.createElement("div",{className:"Column_header"},l.a.createElement("a",{href:"#",className:"Column_header-left",onClick:function(){return window.history.go(-1)}},l.a.createElement("img",{src:"./data/images/icon10.png"}),l.a.createElement("i",null)),l.a.createElement("h3",null,"\u6d3b\u52a8\u5217\u8868"),l.a.createElement("a",{href:"#",className:"Column_header-right"},l.a.createElement("img",{src:"/data/images/icon9.png"}))))}}]),t}(n.Component)),d=(a(44),a(6)),h=function(e){function t(){return Object(m.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.dataName;return l.a.createElement("div",{className:"Cell"},l.a.createElement("div",{className:"Cell_top"},l.a.createElement("div",{className:"Cell_top-left"},l.a.createElement("i",null,l.a.createElement("img",{src:"/data/images/a1.png"})),l.a.createElement("span",null,"\u738b\u5bcc\u8d35\u513f")),l.a.createElement("div",{className:"Cell_top-right"},l.a.createElement("span",null,"\u65b0\u9c9c\u4e8b"),l.a.createElement("i",null))),l.a.createElement("div",{className:"Cell_bottom"},l.a.createElement(d.b,{to:{pathname:"/detail/"+t.id,search:"dataName=".concat(a)}},l.a.createElement("h3",null,t.id,".",t.title),l.a.createElement("p",null,t.des)),l.a.createElement("div",{className:"Cell_bottom-right"},l.a.createElement("img",{src:"/data/images/a2.png"}))))}}]),t}(n.Component),b=(a(49),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={list:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"User"},l.a.createElement(p,null),l.a.createElement("div",{className:"User_body"},l.a.createElement("div",{className:"User_body-top"},l.a.createElement("img",{src:"./data/images/qq1.png"}),l.a.createElement("h3",null,"AmizingUI"),l.a.createElement("span",null,"\u4e2d\u56fd"),l.a.createElement("p",null,"\u5f53\u4f60\u8001\u4e86\uff0c\u5934\u767d\u4e86\uff0c\u7761\u610f\u660f\u6c89\uff0c\u7089\u706b\u65c1\u6253\u76f9\uff0c\u8bf7\u53d6\u4e0b\u8fd9\u90e8\u8bd7\u6b4c\uff0c\u6162\u6162\u8bfb\uff0c\u56de\u60f3\u4f60\u8fc7\u53bb\u773c\u795e\u7684\u67d4\u548c")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("span",null,"999"),l.a.createElement("br",null),"\u559c\u6b22")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("span",null,"520"),l.a.createElement("br",null),"\u5173\u6ce8")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("span",null,"666"),l.a.createElement("br",null),"\u6587\u7ae0")))),list.map(function(e){return l.a.createElement(h,{key:e.id,data:e,dataName:"home"})}))}}]),t}(n.Component)),f=a(34),g=a.n(f),v=(a(53),function(e){function t(){return Object(m.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"header_top"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(d.c,{to:"/home",activeClassName:"active"},"\u9996\u9875")),l.a.createElement("li",null,l.a.createElement(d.c,{to:"/column",activeClassName:"active"},"\u6d3b\u52a8\u5217\u8868")),l.a.createElement("li",null,l.a.createElement(d.c,{to:"/user",activeClassName:"active"},"\u4e2a\u4eba\u4e2d\u5fc3"))))}}]),t}(n.Component)),j=(a(54),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={list:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;axios({url:"/mock/home",params:{_page:1,_limit:11}}).then(function(t){return e.setState({list:t.data.data})})}},{key:"render",value:function(){var e=this.state.list;return l.a.createElement("div",{className:"Home"},l.a.createElement(g.a,{className:"Home_top",swipeOptions:{continuous:!0,auto:1e3}},l.a.createElement("div",null,l.a.createElement(d.b,{to:"/detail/1"},l.a.createElement("img",{src:"/data/images/b1.png"}))),l.a.createElement("div",null,l.a.createElement(d.b,{to:"/detail/1"},l.a.createElement("img",{src:"/data/images/b2.png"}))),l.a.createElement("div",null,l.a.createElement(d.b,{to:"/detail/1"},l.a.createElement("img",{src:"/data/images/b3.png"})))),l.a.createElement("div",{className:"Home_center"},l.a.createElement(v,null),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("i",null,l.a.createElement("img",{src:"./data/images/icon.png"})),l.a.createElement("p",null,"\u65b0\u9c9c\u4e8b"))),l.a.createElement("li",{className:"Home_center-t"},l.a.createElement("a",{href:"#"},l.a.createElement("i",null,l.a.createElement("img",{src:"./data/images/icon1.png"})),l.a.createElement("p",null,"\u8da3\u95fb"))),l.a.createElement("li",{className:"Home_center-t"},l.a.createElement("a",{href:"#"},l.a.createElement("i",null,l.a.createElement("img",{src:"./data/images/icon2.png"})),l.a.createElement("p",null,"\u9605\u8bfb"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("i",null,l.a.createElement("img",{src:"./data/images/icon3.png"})),l.a.createElement("p",null,"\u4e13\u9898"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("i",null,l.a.createElement("img",{src:"./data/images/icon4.png"})),l.a.createElement("p",null,"\u8ba2\u9605"))),l.a.createElement("li",{className:"Home_center-t"},l.a.createElement("a",{href:"#"},l.a.createElement("i",null,l.a.createElement("img",{src:"./data/images/icon5.png"})),l.a.createElement("p",null,"\u4e13\u680f"))),l.a.createElement("li",{className:"Home_center-t"},l.a.createElement("a",{href:"#"},l.a.createElement("i",null,l.a.createElement("img",{src:"./data/images/icon6.png"})),l.a.createElement("p",null,"\u8ba8\u8bba"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("i",null,l.a.createElement("img",{src:"./data/images/icon7.png"})),l.a.createElement("p",null,"\u66f4\u591a"))))),e.map(function(e){return l.a.createElement(h,{key:e.id,data:e,dataName:"home"})}))}}]),t}(n.Component)),O=(a(55),a(56),function(e){function t(){return Object(m.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.dataName;return l.a.createElement("div",{className:"Ltiplex"},l.a.createElement(d.b,{to:{pathName:"/detail/",search:"dataName=".concat(a)}},l.a.createElement("h3",null,t.id,".",t.title),l.a.createElement("p",{className:"Ltiplex_top"},l.a.createElement("img",{src:"./data/images/icon11.png"}),l.a.createElement("span",null,t.des)),l.a.createElement("div",{className:"Ltiplex_bottom"},l.a.createElement("div",{className:"Ltiplex_bottom-left"},"\u7b79\u5907\u4e2d"),l.a.createElement("p",null,"2019\u5e747\u670815\u65e522:12:30"))))}}]),t}(n.Component)),N=a(16),y=a.n(N);y.a.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)}),y.a.interceptors.response.use(function(e){return e},function(e){return Promise.reject(e)}),window.axios=y.a;var w=y.a,C=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={list:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;w({url:"/mock/column",params:{_page:1,_limit:4}}).then(function(t){return e.setState({list:t.data.data})})}},{key:"render",value:function(){return l.a.createElement("div",{className:"Column"},l.a.createElement(p,null),l.a.createElement("div",{className:"Column_body"},this.state.list.map(function(e){return l.a.createElement(O,{key:e.id,data:e,dataName:"home"})})))}}]),t}(n.Component),k=(a(74),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={username:"",password:"",mess:""},a.login=function(){axios({url:"/mock/login",method:"POST",data:{username:a.state.username,password:a.state.password}}).then(function(e){0===e.data.err?a.props.history.push("/user"):a.setState({mess:"\u767b\u9646\u5931\u8d25"})})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"content"},l.a.createElement(p,null),l.a.createElement("p",{className:"fhbtn"},l.a.createElement("a",{href:"javascript:;",onClick:function(){return window.history.go(-1)}})),l.a.createElement("h1",null),l.a.createElement("div",{className:"login-box"},l.a.createElement("p",{className:"lsolid"}),l.a.createElement("div",{className:"login"},l.a.createElement(d.b,{to:"/login"},"\u767b\u5f55"),l.a.createElement("span",null),l.a.createElement(d.b,{to:"/reg"},"\u6ce8\u518c")),l.a.createElement("p",{className:"rsolid"})),l.a.createElement("ul",null,l.a.createElement("li",{className:"lifirst"},l.a.createElement("input",{type:"text",value:this.state.username,onChange:function(t){return e.setState({username:t.target.value})}}),l.a.createElement("span",null,"\u5e10\u53f7")),l.a.createElement("li",null,l.a.createElement("input",{type:"text",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}}),l.a.createElement("span",null,"\u5bc6\u7801"))),l.a.createElement("div",{className:"footbox"},l.a.createElement("input",{type:"button",value:"\u767b \u5f55",className:"login-btn",onClick:this.login}),l.a.createElement("a",{href:"javascript:;",className:"tishi"},"\u5fd8\u8bb0\u5bc6\u7801\uff1f")))}}]),t}(n.Component)),_=a(13),x=(a(75),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={username:"",password:"",mess:""},a.reg=function(){axios({url:"/mock/reg",method:"POST",data:{username:a.state.username,password:a.state.password}}).then(function(e){0===e.data.err?a.props.history.push("/"):a.setState({mess:"\u6ce8\u518c\u5931\u8d25"})})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t,a=this;return l.a.createElement("div",{className:"content"},l.a.createElement(p,null),l.a.createElement("p",{className:"fhbtn"},l.a.createElement("a",{href:"javascript:window.history.go(-1);"})),l.a.createElement("h1",null),l.a.createElement("div",{className:"login-box"},l.a.createElement("p",{className:"lsolid"}),l.a.createElement("div",{className:"login"},l.a.createElement(Link,{to:"/login"},"\u767b\u5f55"),l.a.createElement("span",null),l.a.createElement(Link,{to:"/reg"},"\u6ce8\u518c")),l.a.createElement("p",{className:"rsolid"})),l.a.createElement("ul",null,l.a.createElement("li",{className:"lifirst"},l.a.createElement("input",(e={type:"text"},Object(_.a)(e,"type","text"),Object(_.a)(e,"value",this.state.username),Object(_.a)(e,"onChange",function(e){return a.setState({username:e.target.value})}),e)),l.a.createElement("span",null,"\u5e10\u53f7")),l.a.createElement("li",null,l.a.createElement("input",(t={type:"text"},Object(_.a)(t,"type","text"),Object(_.a)(t,"value",this.state.password),Object(_.a)(t,"onChange",function(e){return a.setState({password:e.target.value})}),t)),l.a.createElement("span",null,"\u5bc6\u7801"))),l.a.createElement("div",{className:"footbox"},l.a.createElement("input",{type:"button",value:"\u6ce8 \u518c",className:"login-btn",onClick:this.reg}),l.a.createElement("a",{href:"javascript:;",className:"tishi"},"\u5fd8\u8bb0\u5bc6\u7801\uff1f")))}}]),t}(n.Component)),S=(a(76),a(35)),H=a.n(S),L=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={data:{}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=(t.history,t.match),n=t.location,l=a.params.id-0,c=H.a.parse(n.search).dataName;w({url:"/mock/".concat(c,"/").concat(l)}).then(function(t){return e.setState({data:t.data.data})})}},{key:"render",value:function(){var e=this.state.data;return l.a.createElement("div",{className:"Detail"},l.a.createElement(p,null),e.detail&&l.a.createElement("div",{className:"Detail_body"},l.a.createElement("div",{className:"detail-detail"},l.a.createElement("div",{className:"Detail_body-top"},l.a.createElement("img",{src:"/data/images/a1.png"}),l.a.createElement("h3",null,l.a.createElement("i",null,e.detail.auth),l.a.createElement("span",null,e.title))),l.a.createElement("div",{className:"Detail_body-center"},l.a.createElement("img",{src:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=402704470,3269230154&fm=27&gp=0.jpg"}),l.a.createElement("p",null,e.detail.content)))))}}]),t}(n.Component),A=function(e){function t(){return Object(m.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"ErrorPages"},l.a.createElement("h3",null,"404\u9875\u9762\u627e\u4e0d\u5230"))}}]),t}(n.Component),D=function(e){function t(){return Object(m.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){console.log("app",e.location.pathname)}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E.d,null,l.a.createElement(E.b,{path:"/home",component:j}),l.a.createElement(E.b,{path:"/column",component:C}),l.a.createElement(E.b,{path:"/user",component:b}),l.a.createElement(E.b,{path:"/login",component:k}),l.a.createElement(E.b,{path:"/reg",component:x}),l.a.createElement(E.b,{path:"/detail/:id",component:L}),l.a.createElement(E.a,{exact:!0,from:"/",to:"/home"}),l.a.createElement(E.b,{component:A})))}}]),t}(n.Component);r.a.render(l.a.createElement(d.a,null,l.a.createElement(E.b,{component:D})),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.cd220ee6.chunk.js.map
(this["webpackJsonpmeta-dns-lookup-app"]=this["webpackJsonpmeta-dns-lookup-app"]||[]).push([[0],{24:function(e,t){t.isUrl=function(e){return console.log("inside isUrl"),!0}},26:function(e,t,a){e.exports=a(54)},31:function(e,t,a){},32:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(5),s=a.n(r),c=(a(31),a(4)),l=a(1),u=a(8),i=a(9),p=a(3),d=a(11),b=a(10),h=a(7),m=(a(32),a(25)),f=[{value:"metaTags",label:"meta"},{value:"dnsRecords",label:"dns"}];var j=function(e){var t=Object(n.useState)({}),a=Object(h.a)(t,2),r=a[0],s=a[1];return console.log("remnder"),Object(n.useEffect)((function(){console.log(r.value),e.setLookupType(r.value)}),[r]),o.a.createElement("form",{className:"lookup",onSubmit:e.handleSubmit},o.a.createElement(m.a,{theme:function(e){return Object(l.a)(Object(l.a)({},e),{},{colors:Object(l.a)(Object(l.a)({},e.colors),{},{primary25:"#00868F"})})},className:"lookup__type",onChange:function(e){s(e)},placeholder:"type",options:f,autofocus:!0}),o.a.createElement("input",{type:"text",className:"lookup__url",onChange:e.handleChange,placeholder:"some-domain.com"}),o.a.createElement("input",{className:"lookup__btn",value:"lookMeUp",type:"submit"}))},O=a(24),v=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={urlVal:"",lookupType:""},n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n.setLookupType=n.setLookupType.bind(Object(p.a)(n)),n}return Object(i.a)(a,[{key:"handleChange",value:function(e){e.preventDefault(),this.state.urlVal!==e.target.value&&this.setState(Object(l.a)(Object(l.a)({},this.state),{},{urlVal:e.target.value}),(function(){console.log("state updated")}))}},{key:"handleSubmit",value:function(e){e.preventDefault(),Object(O.isUrl)(this.state.urlVal)&&this.props.getData(this.state.urlVal,this.state.lookupType)}},{key:"setLookupType",value:function(e){console.log("----------------------------"+e),this.state.lookupType!==e&&this.setState(Object(l.a)(Object(l.a)({},this.state),{},{lookupType:e}))}},{key:"render",value:function(){return o.a.createElement(j,{val:this.state.urlVal,handleChange:this.handleChange,handleSubmit:this.handleSubmit,setLookupType:this.setLookupType})}}]),a}(n.Component),g=(a(35),function(e){var t,a=e.data;return t="0"===Object.keys(a)[0]?Object.entries(a).map((function(e){var t=Object(h.a)(e,2),a=t[0],n=t[1];return o.a.createElement("li",{className:"listItem",key:a}," ",n.toString()," ")})):Object.entries(a).map((function(e){var t=Object(h.a)(e,2),a=t[0],n=t[1];return o.a.createElement("li",{className:"listItem",key:a}," ",a," : ",n.toString()," ")})),o.a.createElement("ul",{className:"resultsList"}," ",t," ")}),k=(a(36),function(e){var t=e.data,a=e.getData;return o.a.createElement("div",{className:"urlLookupBox"},o.a.createElement(v,{getData:a}),o.a.createElement(g,{data:t}))}),y=a(13),E=a.n(y);E.a.defaults.baseURL="https://meta-dns-lookup.herokuapp.com/";var S={metaTags:{},dnsRecords:{},currentView:"",error:""},T=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state=S,n.getData=n.getData.bind(Object(p.a)(n)),n}return Object(i.a)(a,[{key:"getData",value:function(e,t){var a=this;if(!t)return console.log("no loooookup found"),void this.setState(Object(l.a)(Object(l.a)({},S),{},{error:["please select type of lookup from the select dropdown"]}));E()({method:"GET",url:"/".concat(t,"?tUrl=").concat(encodeURIComponent(e)),headers:{"Content-Type":"application/json"}}).then((function(e){e.data.status&&200===e.data.status?a.setState((function(){var a;return Object(l.a)(Object(l.a)({},S),{},(a={},Object(c.a)(a,t,e.data.serverResp),Object(c.a)(a,"currentView",t),Object(c.a)(a,"error",""),a))}),(function(){return console.log("state updated ,"+a.state)})):e.data.status&&404===e.data.status&&(console.log("rrrrrr 400+"),console.log(e.data.serverResp),a.setState((function(a){var n;return Object(l.a)(Object(l.a)({},S),{},(n={},Object(c.a)(n,t,e.data.serverResp),Object(c.a)(n,"currentView",t),n))}),(function(){console.log("state updated ",a.state)})))})).catch((function(e){console.log("indisde errror"),console.log(e),a.setState(Object(l.a)(Object(l.a)({},S),{},{error:["error receiving data , check the url"]}))}))}},{key:"render",value:function(){var e=this.state.currentView,t=this.state.error?this.state.error:this.state[e];return o.a.createElement(k,{data:t||{},getData:this.getData})}}]),a}(n.Component);s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(T,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.1f6b5bb4.chunk.js.map
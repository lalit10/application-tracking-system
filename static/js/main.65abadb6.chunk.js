(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{24:function(t,e,a){},26:function(t,e,a){},35:function(t,e,a){},40:function(t,e,a){"use strict";a.r(e);var i=a(0),s=a.n(i),c=a(11),n=a.n(c),l=(a(24),a(6)),o=a(7),r=a(9),d=a(8),h=(a(25),a(26),a(27),a(31),a(32),a(33),a(34),a(35),a(1)),p=function(t){Object(r.a)(a,t);var e=Object(d.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var t=this;return Object(h.jsx)("div",{className:"left-nav",children:Object(h.jsxs)("div",{className:"left-nav-item",children:[Object(h.jsx)("div",{onClick:function(){return t.props.switchPage("ApplicationPage")},children:Object(h.jsx)("i",{className:"fas fa-columns left-nav-icon"})}),Object(h.jsx)("div",{onClick:function(){return t.props.switchPage("SearchPage")},children:Object(h.jsx)("i",{className:"fas fa-search left-nav-icon"})})]})})}}]),a}(i.Component),u=a(13),j=[{class:"1",state:"Wish list",wordOfDate:"Apply By"},{class:"2",state:"Waiting for referral",wordOfDate:"Referral before "},{class:"3",state:"Applied",wordOfDate:"Applied Date"},{class:"4",state:"Rejected",wordOfDate:"Applied Date"}],b=function(t){Object(r.a)(a,t);var e=Object(d.a)(a);function a(t){var i;return Object(l.a)(this,a),(i=e.call(this,t)).state={showEditModal:t.showEditModal},i}return Object(o.a)(a,[{key:"stopPropagation",value:function(t){t.stopPropagation()}},{key:"render",value:function(){var t=this,e=j.find((function(e){return e.class===t.props.application.status}));return Object(h.jsx)("div",{className:"card card-col",onClick:this.state.showEditModal,children:Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("div",{className:"card-action",children:Object(h.jsx)("h6",{className:"card-title",onClick:this.stopPropagation,children:this.props.application.jobTitle})}),Object(h.jsxs)("p",{className:"small-content-text",children:[this.props.application.companyName,Object(h.jsx)("br",{}),e.wordOfDate,": ",this.props.application.date]},this.props.application.companyName)]})},this.state.id+"_card")}}]),a}(i.Component),m=a(14),O=a(43),f=function(t){Object(r.a)(a,t);var e=Object(d.a)(a);function a(t){var i;return Object(l.a)(this,a),(i=e.call(this,t)).state={closeEditModal:t.closeEditModal,deleteApplication:t.deleteApplication,submitFunc:t.submitFunc,id:t.application.id,jobTitle:t.application.jobTitle,companyName:t.application.companyName,date:t.application.date,class:t.application.status},i}return Object(o.a)(a,[{key:"handleChange",value:function(t){this.setState(Object(m.a)({},t.target.id,t.target.value))}},{key:"submitAction",value:function(){this.state.closeEditModal();var t={id:this.state.id,companyName:this.state.companyName,jobTitle:this.state.jobTitle,date:this.state.date,status:this.state.class};this.state.submitFunc(t)}},{key:"deleteAction",value:function(){this.state.closeEditModal();var t={id:this.state.id,companyName:this.state.companyName,jobTitle:this.state.jobTitle,date:this.state.date,status:this.state.class};this.state.deleteApplication(t)}},{key:"render",value:function(){var t=null;return t="update"===this.props.mode?Object(h.jsx)("button",{type:"button",className:"btn btn-success",onClick:this.submitAction.bind(this),children:"Update"}):Object(h.jsx)("button",{type:"button",className:"btn btn-success",onClick:this.submitAction.bind(this),children:"Create"}),this.props.application?Object(h.jsx)("div",{children:Object(h.jsxs)(O.a,{show:this.props.show,onHide:this.state.closeEditModal,children:[Object(h.jsx)(O.a.Header,{closeButton:!0,children:Object(h.jsx)(O.a.Title,{children:this.props.application.companyName})}),Object(h.jsxs)(O.a.Body,{children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"companyName",className:"col-form-label",children:"Company Name"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"companyName",value:this.state.companyName,onChange:this.handleChange.bind(this)})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"job_title",className:"col-form-label",children:"Job Title"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"jobTitle",value:this.state.jobTitle,onChange:this.handleChange.bind(this)})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"date",className:"col-form-label",children:"Date"}),Object(h.jsx)("input",{type:"date",className:"form-control",id:"date",value:this.state.date,onChange:this.handleChange.bind(this)})]}),Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("div",{className:"input-group-prepend",children:Object(h.jsx)("label",{className:"input-group-text",htmlFor:"class",children:"Application Type"})}),Object(h.jsxs)("select",{className:"custom-select",id:"class",value:this.state.class,onChange:this.handleChange.bind(this),children:[Object(h.jsx)("option",{children:"Choose..."}),Object(h.jsx)("option",{value:"1",children:"Wish list"}),Object(h.jsx)("option",{value:"2",children:"Waiting Referral"}),Object(h.jsx)("option",{value:"3",children:"Applied"}),Object(h.jsx)("option",{value:"4",children:"Rejected"})]})]})]}),Object(h.jsxs)(O.a.Footer,{children:[Object(h.jsx)("button",{type:"button",className:"btn btn-danger mr-auto",onClick:this.deleteAction.bind(this),children:"Delete"}),Object(h.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:this.state.closeEditModal,children:"Close"}),t]})]})}):Object(h.jsx)("div",{})}}]),a}(i.Component),v=a(12),x=a.n(v),y=function(t){Object(r.a)(a,t);var e=Object(d.a)(a);function a(t){var i;return Object(l.a)(this,a),(i=e.call(this,t)).state={applications:[],card_titles:[],card_class:[],showModal:!1},i.getData=i.getData.bind(Object(u.a)(i)),i.groupApplication=i.groupApplication.bind(Object(u.a)(i)),i.createCardTitle=i.createCardTitle.bind(Object(u.a)(i)),i.createCardClass=i.createCardClass.bind(Object(u.a)(i)),i}return Object(o.a)(a,[{key:"getData",value:function(){return x.a.ajax({url:"http://localhost:5000/application",method:"GET",headers:{"x-access-token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE2NDY2ODIxMzl9.I-nNQGxnA7izne_dfChGVUhHIPnyyh8PXG9Ba9XYRDQ"},error:function(t){console.log(JSON.stringify(t))}})}},{key:"componentDidMount",value:function(){var t=this;this.getData().done((function(e){e=JSON.parse(e);var a=t.groupApplication(e),i=t.createCardTitle(a),s=t.createCardClass(a);t.setState({applications:e,card_titles:i,card_class:s})}))}},{key:"updateCardBoard",value:function(t){var e=this,a=this.state.applications;null==t.id?x.a.ajax({url:"http://localhost:5000/application",method:"POST",async:!1,headers:{"x-access-token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE2NDY2ODIxMzl9.I-nNQGxnA7izne_dfChGVUhHIPnyyh8PXG9Ba9XYRDQ"},data:JSON.stringify({application:t}),contentType:"application/json",success:function(t){console.log("Success")},error:function(t){console.log(JSON.stringify(t))},complete:function(t){e.componentDidMount()}}):x.a.ajax({url:"http://localhost:5000/application",method:"PUT",headers:{"x-access-token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE2NDY2ODIxMzl9.I-nNQGxnA7izne_dfChGVUhHIPnyyh8PXG9Ba9XYRDQ"},async:!1,data:JSON.stringify({application:t}),contentType:"application/json",success:function(t){console.log("Success")},complete:function(t){e.componentDidMount()}});var i=this.groupApplication(a),s=this.createCardTitle(i),c=this.createCardClass(i);this.setState({applications:a,card_titles:s,card_class:c,showModal:!1,application:null})}},{key:"deleteApplication",value:function(t){var e=this,a=this.state.applications;x.a.ajax({url:"http://localhost:5000/application",method:"DELETE",headers:{"x-access-token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE2NDY2ODIxMzl9.I-nNQGxnA7izne_dfChGVUhHIPnyyh8PXG9Ba9XYRDQ"},async:!1,data:JSON.stringify({application:t}),contentType:"application/json",success:function(t){console.log("Success")},error:function(t){console.log(JSON.stringify(t))},complete:function(t){e.componentDidMount()}});var i=this.groupApplication(a),s=this.createCardTitle(i),c=this.createCardClass(i);this.setState({applications:a,card_titles:s,card_class:c,showModal:!1,application:null})}},{key:"showEditModal",value:function(t,e){var a=e;this.setState({showModal:!0,application:t,modalMode:a})}},{key:"closeEditModal",value:function(){this.setState({showModal:!1,application:null})}},{key:"createCardClass",value:function(t){var e=this;return t.reduce((function(t,a){var i=Object(h.jsxs)("div",{className:"col",id:a.title+"_class",children:[a.applications.reduce((function(t,a){var i=Object(h.jsx)(b,{application:a,showEditModal:e.showEditModal.bind(e,a,"update")},a.id);return t.push(i),t}),[]),Object(h.jsx)("div",{className:"card card-col",children:Object(h.jsx)("div",{className:"card-body new-col",onClick:e.showEditModal.bind(e,{class:a.class},"create"),children:Object(h.jsx)("i",{className:"fas fa-plus text-center"})})})]},a.title+"_class");return t.push(i),t}),[])}},{key:"createCardTitle",value:function(t){return t.reduce((function(t,e){var a=Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("div",{className:"card card-col",children:Object(h.jsx)("div",{className:"card-body noPadding",children:Object(h.jsx)("div",{type:"text",className:"text-center title-col form-control-lg",children:e.title})})})},e.title+"_title");return t.push(a),t}),[])}},{key:"groupApplication",value:function(t){var e=[{title:"Wish list",applications:[],class:"1"},{title:"Waiting for referral",applications:[],class:"2"},{title:"Applied",applications:[],class:"3"},{title:"Rejected",applications:[],class:"4"}];return null===t||void 0===t||t.forEach((function(t){var a=e.find((function(e){return e.class===t.status}));null===a||void 0===a||a.applications.push(t)})),e}},{key:"render",value:function(){var t=null;return this.state.application&&(t=Object(h.jsx)(f,{show:this.state.showModal,submitFunc:this.updateCardBoard.bind(this),mode:this.state.modalMode,application:this.state.application,closeEditModal:this.closeEditModal.bind(this),deleteApplication:this.deleteApplication.bind(this)})),Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"text-center",children:"Dashboard"}),Object(h.jsxs)("span",{id:"tab",children:[Object(h.jsx)("div",{className:"row",children:this.state.card_titles}),Object(h.jsx)("div",{className:"row",children:this.state.card_class}),t]})]})}}]),a}(i.Component),N=[{label:"Company Name",id:"companyName"},{label:"Job title",id:"jobTitle"},{label:"Date",id:"date"},{label:"",id:"func"}],g=function(t){Object(r.a)(a,t);var e=Object(d.a)(a);function a(t){var i;return Object(l.a)(this,a),(i=e.call(this,t)).state={searchText:"",rows:[],addedList:[]},i}return Object(o.a)(a,[{key:"search",value:function(){var t=this;this.state.searchText?x.a.ajax({url:"http://localhost:5000/search",method:"get",data:{keywords:this.state.searchText},contentType:"application/json",success:function(e){var a=e.map((function(t,e){return{id:e,jobTitle:t.jobTitle,companyName:t.companyName,location:t.location}}));t.setState({rows:a})}}):alert("Search bar cannot be empty!!")}},{key:"deleteTheApplication",value:function(t){var e=this.state.rows.filter((function(e){return e.id!==t})),a=this.state.addedList.filter((function(e){return e.id!==t}));this.setState({rows:e,addedList:a})}},{key:"addToWaitlist",value:function(t){var e=this.state.addedList;e.push(t.id),console.log(t);var a={jobTitle:t.jobTitle,companyName:t.companyName,date:(new Date).toJSON().slice(0,10).replace(/-/g,"-"),status:"1"};console.log(a),x.a.ajax({url:"http://localhost:5000/application",method:"POST",data:JSON.stringify({application:a}),contentType:"application/json",success:function(t){console.log(t)}}),this.setState({addedList:e})}},{key:"removeFromWaitlist",value:function(t){var e=this.state.addedList.filter((function(e){return e!==t.id}));this.setState({addedList:e})}},{key:"handleChange",value:function(t){this.setState(Object(m.a)({},t.target.id,t.target.value))}},{key:"render",value:function(){var t=this,e=this.state.rows;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"text-center",children:"Company Search"}),Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-6 input-group mb-3",children:Object(h.jsx)("input",{type:"text",id:"searchText",className:"form-control",placeholder:"Keyword","aria-label":"Username","aria-describedby":"basic-addon1",value:this.state.searchText,onChange:this.handleChange.bind(this)})}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:this.search.bind(this),children:"Search"})})]})}),Object(h.jsxs)("table",{className:"table",children:[Object(h.jsx)("thead",{children:Object(h.jsx)("tr",{children:N.map((function(t){return Object(h.jsx)("th",{children:t.label},t.id+"_th")}))})}),Object(h.jsx)("tbody",{children:e.map((function(e){return Object(h.jsx)("tr",{children:N.map((function(a){var i=e[a.id];if("func"!==a.id)return Object(h.jsx)("td",{children:i},a.id);var s=t.state.addedList.includes(e.id)?Object(h.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:t.removeFromWaitlist.bind(t,e),children:" Added "}):Object(h.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:t.addToWaitlist.bind(t,e),children:" Add "});return Object(h.jsx)("td",{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-4",children:s}),"\xa0\xa0",Object(h.jsx)("div",{className:"col-md-2",children:Object(h.jsx)("button",{type:"button",style:{backgroundColor:"red"},className:"btn btn-secondary",onClick:t.deleteTheApplication.bind(t,e.id),children:" Delete "})})]})})},e.id+"_func")}))},e.id)}))})]})]})}}]),a}(i.Component),C=function(t){Object(r.a)(a,t);var e=Object(d.a)(a);function a(t){var i;Object(l.a)(this,a),i=e.call(this,t);var s={SearchPage:Object(h.jsx)(g,{}),ApplicationPage:Object(h.jsx)(y,{})};return i.state={currentPage:Object(h.jsx)(y,{}),mapRouter:s},i}return Object(o.a)(a,[{key:"switchPage",value:function(t){this.setState({currentPage:this.state.mapRouter[t]})}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"main-page",children:[Object(h.jsx)(p,{switchPage:this.switchPage.bind(this)}),Object(h.jsx)("div",{className:"main",children:Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)("div",{className:""}),this.state.currentPage]})})]})}}]),a}(s.a.Component),k=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,44)).then((function(e){var a=e.getCLS,i=e.getFID,s=e.getFCP,c=e.getLCP,n=e.getTTFB;a(t),i(t),s(t),c(t),n(t)}))};n.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root")),k()}},[[40,1,2]]]);
//# sourceMappingURL=main.65abadb6.chunk.js.map
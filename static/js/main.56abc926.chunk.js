(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{12:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(3),c=t.n(n),r=t(4),i=t(5),l=t(7),s=t(6),o=t(1),g=t.n(o),h=(t(12),t(0)),j=function(e){var a=e.total,t=e.perPage,n=e.currentPage,c=e.onPageChange,r=Array.from({length:Math.ceil(a/t)},(function(e,a){return a+1})),i=Array.from({length:a},(function(e,a){return a+1}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("ul",{className:"pagination",children:[Object(h.jsx)("li",{className:1===n?"page-item disabled":"page-item",children:Object(h.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===n,onClick:function(){c(n-1)},children:"\xab"})}),r.map((function(e){return Object(h.jsx)("li",{className:e===n?"page-item active":"page-item",children:Object(h.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){c(e)},children:e})},e)})),Object(h.jsx)("li",{className:n===Math.ceil(a/t)?"page-item disabled":"page-item",children:Object(h.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":n===Math.ceil(a/t),onClick:function(){c(n+1)},children:"\xbb"})})]}),Object(h.jsx)("ul",{children:i.filter((function(e){return 1===n?e<=t:e<=t*n&&e>t*(n-1)})).map((function(e){return Object(h.jsx)("li",{"data-cy":"item",children:"Item ".concat(e)})}))})]})},u=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=a.call.apply(a,[this].concat(c))).state={itemsPerPageOptions:[3,5,10,20],perPage:5,currentPage:1,total:42},e.setItemsPerPage=function(a){e.setState({perPage:a,currentPage:1})},e.handlePageChange=function(a){e.setState({currentPage:a})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.perPage,n=a.itemsPerPageOptions,c=a.currentPage,r=a.total;return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{children:"Items with Pagination"}),Object(h.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(c," (items ").concat(t*(c-1)+1," - ").concat(c*t," of ").concat(r,")")}),Object(h.jsxs)("div",{className:"form-group row",children:[Object(h.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(h.jsx)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:t,onChange:function(a){e.setItemsPerPage(+a.target.value)},children:n.map((function(e){return Object(h.jsx)("option",{value:e,children:e})}))})}),Object(h.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(h.jsx)(j,{total:r,perPage:t,currentPage:c,onPageChange:this.handlePageChange})]})}}]),t}(g.a.Component);c.a.render(Object(h.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.56abc926.chunk.js.map
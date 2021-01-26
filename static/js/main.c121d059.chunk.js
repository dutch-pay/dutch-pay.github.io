(this["webpackJsonpdutch-pay"]=this["webpackJsonpdutch-pay"]||[]).push([[0],{29:function(e,t,a){},47:function(e,t,a){e.exports=a(69)},52:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),c=a.n(r),o=(a(52),a(22)),i=a(6),u=a(7),m=(a(58),a(30)),s=a(31),d=a(11),p=a(44),b=a(41),E=(a(59),a(71)),h=a(72),f=a(33),y=a(32);a(60);var S=function(e){return l.a.createElement("div",{className:"progress-step"},l.a.createElement("div",{className:"title"},l.a.createElement("span",null,e.title)),l.a.createElement("div",{className:"step rounded-circle ".concat(e.completed?"completed-step":"")},e.completed?l.a.createElement(i.a,{icon:u.c,className:"checked",alt:"checked"}):l.a.createElement("span",{className:"number"},e.step)))};a(61);var v=function(e){var t=["Enter info.","Enter bills","Get result"];return l.a.createElement(E.a,{id:"progress-bar",fluid:!0},l.a.createElement(y.a,{now:100*(e.currentStep-1)/(t.length-1)}),l.a.createElement(h.a,null,t.map((function(a,n){return l.a.createElement(f.a,{key:n+a,xs:12/t.length},l.a.createElement(S,{step:n+1,title:a,completed:n+1<e.currentStep||e.currentStep===t.length}))}))))},g=a(13),N=a(10),w=a(9),j=a(75),I=a(78),x=a(34);a(62);var k=function(e){var t=["$","\u20a9","\u20ac","\xa3"],a=Object(n.useState)(!1),r=Object(w.a)(a,2),c=r[0],m=r[1],s=Object(n.useState)({title:"",peopleNames:"",currency:t[0]}),d=Object(w.a)(s,2),p=d[0],b=d[1];function h(e){b(Object(N.a)(Object(N.a)({},p),{},Object(g.a)({},e.target.name,e.target.value)))}return e.display&&l.a.createElement(E.a,{fluid:!0,className:"steps-container"},l.a.createElement("h2",{className:"step-title-header"},"Expenditure information"),l.a.createElement(j.a,{noValidate:!0,validated:c,onSubmit:function(t){t.preventDefault(),t.stopPropagation();var a=t.currentTarget.checkValidity();m(!0),""===p.title&&""===p.peopleNames&&""!==e.expenditureInfo.title&&e.expenditureInfo.peopleNames.length>0?e.onSubmitSucceeded&&e.onSubmitSucceeded({title:e.expenditureInfo.title,peopleNames:e.expenditureInfo.peopleNames.join(", "),currency:e.expenditureInfo.currency}):a&&e.onSubmitSucceeded&&e.onSubmitSucceeded(p)},style:{position:"relative"}},l.a.createElement(j.a.Group,{controlId:"title"},l.a.createElement(j.a.Label,null,l.a.createElement(i.a,{icon:u.j})," What is bills about you want to split?"),l.a.createElement(j.a.Control,{name:"title",required:!0,type:"text",placeholder:"2020 Vancouver trip!",defaultValue:e.expenditureInfo.title,onChange:h})),l.a.createElement(j.a.Group,{controlId:"group-members"},l.a.createElement(j.a.Label,null,l.a.createElement(i.a,{icon:u.s})," Who do you want to split with?"),l.a.createElement(j.a.Control,{required:!0,name:"peopleNames",type:"text",placeholder:"Aree, Tomas, Jessica",defaultValue:e.expenditureInfo.peopleNames.join(", "),onChange:h}),l.a.createElement(j.a.Text,null,"Enter the names of people separating with comma (,)")),l.a.createElement(j.a.Group,{controlId:"currency"},l.a.createElement(j.a.Label,null,l.a.createElement(i.a,{icon:u.f})," Select the currency"),l.a.createElement("br",null),l.a.createElement(I.a,{id:"currency-button-group",type:"radio",name:"currency",defaultValue:e.expenditureInfo.currency||p.currency,onChange:function(e){b(Object(N.a)(Object(N.a)({},p),{},{currency:e}))}},t.map((function(e,t){return l.a.createElement(x.a,{value:e,key:e},e)})))),l.a.createElement(o.a,{className:"next-button",type:"submit"},"Next ",l.a.createElement(i.a,{icon:u.a}))))},O=a(43),C=a(76),D=a(77),B=a(73);a(64);var A=function(e){var t=Object(n.useState)(!1),a=Object(w.a)(t,2),r=a[0],c=a[1],m=Object(n.useState)({billDate:"",billName:"",billAmount:0,billPayer:e.peopleNames[0],id:""}),s=Object(w.a)(m,2),d=s[0],p=s[1],b=function(e){var t=e.target.name;p(Object(N.a)(Object(N.a)({},d),{},Object(g.a)({},t,"number"===t?e.target.valueAsNumber:e.target.value)))};return l.a.createElement(D.a,null,l.a.createElement(D.a.Body,null,l.a.createElement(D.a.Title,null,"Add new bill"),l.a.createElement(j.a,{noValidate:!0,validated:r,onSubmit:function(t){t.preventDefault(),t.stopPropagation();var a=t.currentTarget,n=a.checkValidity();c(!0),n&&e.onSubmitSucceeded&&(p(Object(N.a)(Object(N.a)({},d),{},{billAmount:d.billAmount,id:(new Date).toJSON()})),e.onSubmitSucceeded(d),a.reset(),c(!1))}},l.a.createElement(j.a.Row,null,l.a.createElement(f.a,{xs:6,md:5},l.a.createElement(j.a.Group,{controlId:"billAmount"},l.a.createElement(j.a.Label,null,l.a.createElement(i.a,{icon:u.i})," Amount *"),l.a.createElement(B.a,null,l.a.createElement(B.a.Prepend,null,l.a.createElement(B.a.Text,null,e.currencySymbol)),l.a.createElement(j.a.Control,{required:!0,name:"billAmount",type:"number",step:"0.01",onChange:b})))),l.a.createElement(f.a,{xs:6,md:7},l.a.createElement(j.a.Group,{controlId:"billPayer"},l.a.createElement(j.a.Label,null,l.a.createElement(i.a,{icon:u.r})," Payer *"),l.a.createElement(j.a.Control,{required:!0,name:"billPayer",as:"select",onChange:b},e.peopleNames.map((function(e){return l.a.createElement("option",{key:e},e)})))))),l.a.createElement(j.a.Row,null,l.a.createElement(f.a,{xs:12,md:5},l.a.createElement(j.a.Group,{controlId:"billName"},l.a.createElement(j.a.Label,null,l.a.createElement(i.a,{icon:u.p})," Description"),l.a.createElement(j.a.Control,{name:"billName",type:"text",onChange:b}))),l.a.createElement(f.a,{xs:7,md:5},l.a.createElement(j.a.Group,{controlId:"billDate"},l.a.createElement(j.a.Label,null,l.a.createElement(i.a,{icon:u.b})," Bill date"),l.a.createElement(j.a.Control,{name:"billDate",type:"date",onChange:b}))),l.a.createElement(f.a,{xs:5,md:2},l.a.createElement(o.a,{className:"add-button",type:"submit"},"Add ",l.a.createElement(i.a,{icon:u.l})))))))},L=a(74);a(65);function P(e){var t=["Payer","Amount","Description","Date","Actions"];return e.actionsShow||t.pop(),l.a.createElement(L.a,{responsive:e.responsive,className:"".concat(e.additionalClassName," bill-table mt-4")},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),t.map((function(e,t){return l.a.createElement("th",{key:e},e)})))),l.a.createElement("tbody",null,e.bills.map((function(t,a){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,a+1),l.a.createElement("td",null,t.billPayer),l.a.createElement("td",null,e.currencySymbol," ",t.billAmount.toLocaleString()),l.a.createElement("td",null,t.billName),l.a.createElement("td",null,t.billDate),e.actionsShow&&l.a.createElement("td",null,l.a.createElement(o.a,{variant:"link",className:"p-0",onClick:function(){return e.onBillDeletionClicked(t)}},l.a.createElement(i.a,{icon:u.q}))))}))))}P.defaultProps={actionsShow:!0,responsive:!0,additionalClassName:"",currencySymbol:"$",bills:[]};var R=P;a(29);var U=function(e){var t=Object(n.useState)([]),a=Object(w.a)(t,2),r=a[0],c=a[1],m=Object(n.useState)(!1),s=Object(w.a)(m,2),d=s[0],p=s[1];function b(){return 0===r.length&&e.bills.length>0}return e.display&&l.a.createElement(E.a,{fluid:!0,className:"steps-container"},l.a.createElement("h2",{className:"step-title-header"},"Bill information"),l.a.createElement(A,{onSubmitSucceeded:function(t){var a=b()?e.bills.concat(t):[].concat(Object(O.a)(r),[t]);c(a),e.onBillUpdated&&e.onBillUpdated(a)},peopleNames:e.peopleNames,currencySymbol:e.currencySymbol}),l.a.createElement(R,{onBillDeletionClicked:function(t){var a=(b()?e.bills:r).filter((function(e){return e.id!==t.id}));c(a),e.onBillUpdated&&e.onBillUpdated(a)},bills:0===r.length?e.bills:r,currencySymbol:e.currencySymbol,actionsShow:!0}),l.a.createElement("div",{style:{position:"relative "}},l.a.createElement(o.a,{className:"next-button",onClick:function(){0!==e.bills.length||r&&0!==r.length?(p(!1),e.onSubmitSucceeded&&e.onSubmitSucceeded(b()?e.bills:r)):p(!0)}},"Next ",l.a.createElement(i.a,{icon:u.a}))),l.a.createElement("div",{className:"toast-container"},l.a.createElement(C.a,{onClose:function(){return p(!1)},className:"error-toast",show:d,delay:3e3,autohide:!0},l.a.createElement(C.a.Header,null,l.a.createElement(i.a,{icon:u.h,className:"rounded mr-2"}),l.a.createElement("strong",{className:"mr-auto"},"Error occurred")),l.a.createElement(C.a.Body,null,"There should be at least 1 bill entered"))))},G=a(38),T=a.n(G),V=a(39);a(66);function M(e){var t=Object(n.useRef)(null),a=Object(n.useRef)(null),r=Object(n.useState)(!1),c=Object(w.a)(r,2),m=c[0],s=c[1],d=Object(n.useState)(!1),p=Object(w.a)(d,2),b=p[0],y=p[1],S=Object(n.useState)(!1),v=Object(w.a)(S,2),g=v[0],N=v[1];if(!e.bills)return l.a.createElement("div",null,"No bills entered");var j=e.expenditureInfo,I=e.bills,x=0===I.length?0:I.flatMap((function(e){return e.billAmount})).reduce((function(e,t){return parseInt(e)+parseInt(t)})),k=x/j.peopleNames.length,O=function(e){e.sort((function(e,t){return e.amount-t.amount}));for(var t=[],a=0,n=e.length-1;a<n;){var l=e[a],r=e[n];if(!l||!r)break;var c=l.amount,o=r.amount;c+o<0?(t.push({sender:r.name,receiver:l.name,amount:o}),e[a].amount+=o,e[n].amount-=o,n-=1):c+o>0?(t.push({sender:r.name,receiver:l.name,amount:Math.abs(c)}),e[a].amount=0,e[n].amount+=c,a+=1):(t.push({sender:r.name,receiver:l.name,amount:o}),e[a].amount=0,e[n].amount=0,a+=1,n-=1)}return t}(function(){var e={};return j.peopleNames.forEach((function(t){return e[t]=k})),I.forEach((function(t){return e[t.billPayer]=e[t.billPayer]-t.billAmount})),Object.keys(e).map((function(t){return{name:t,amount:e[t]}}))}()),B=O.flatMap((function(e){return"".concat(e.sender,"->").concat(e.receiver," : ").concat(Math.round(10*e.amount)/10)})).join(", ");return e.display&&l.a.createElement(E.a,{fluid:!0,className:"steps-container"},l.a.createElement("div",{className:"report-container"},l.a.createElement("div",{ref:t,id:"report"},l.a.createElement("h2",{className:"step-title-header"},"Settlement"),l.a.createElement(D.a,null,l.a.createElement(D.a.Body,null,l.a.createElement(D.a.Title,null,j.title),l.a.createElement(D.a.Subtitle,null," with ",j.peopleNames.join(", ")),l.a.createElement(D.a.Text,null,"Sum of all bills: ",l.a.createElement("b",null,e.currencySymbol,x.toLocaleString()),l.a.createElement("br",null),"Cost of each person: ",l.a.createElement("b",null,e.currencySymbol,k.toLocaleString())))),l.a.createElement("br",null),l.a.createElement("h3",null,"Bill list"),l.a.createElement("div",{ref:a},l.a.createElement(R,{bills:I,currencySymbol:e.currencySymbol,actionsShow:!1,responsive:!0})),l.a.createElement(D.a,{border:"success"},l.a.createElement(D.a.Body,null,l.a.createElement(D.a.Title,null,"Minimum transaction"),l.a.createElement(L.a,{id:"transaction-table",borderless:!0,responsive:!0,size:"sm"},l.a.createElement("tbody",null,O.map((function(t,a){return l.a.createElement("tr",{key:"transaction-row-".concat(a)},l.a.createElement("td",null,l.a.createElement(i.a,{icon:u.k})),l.a.createElement("td",null,t.sender),l.a.createElement("td",null,l.a.createElement(i.a,{icon:u.a})),l.a.createElement("td",null,t.receiver),l.a.createElement("td",null,":"),l.a.createElement("td",null,e.currencySymbol,(Math.round(10*t.amount)/10).toLocaleString()))})))))))),l.a.createElement(h.a,{className:"mt-3"},l.a.createElement(f.a,{xs:12,md:6},l.a.createElement(o.a,{className:"action-button",onClick:function(){var e=document.createElement("input");e.value=B,document.body.appendChild(e),e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),document.body.removeChild(e),y(!0)}},l.a.createElement(i.a,{icon:u.d}),"\xa0Copy to clipboard")),l.a.createElement(f.a,{xs:12,md:6},l.a.createElement(o.a,{className:"action-button",onClick:function(){s(!0),a.current.classList.add("bill-table-mobile"),T.a.toBlob(t.current).then((function(e){a.current.classList.remove("bill-table-mobile"),Object(V.saveAs)(e,"".concat(j.title.split(" ").join("_"),".png"))})),s(!1),N(!0)}},m?l.a.createElement(i.a,{icon:u.o,spin:!0}):l.a.createElement(i.a,{icon:u.g}),"\xa0",m?"Downloading":"Download the report"))),l.a.createElement(h.a,{className:"mt-5"},l.a.createElement(f.a,{xs:{span:10,offset:1}},l.a.createElement("a",{className:"text-center d-block",href:"/"},l.a.createElement(i.a,{icon:u.m}),"\xa0Begin new dutch pay"))),l.a.createElement("div",{className:"toast-container"},l.a.createElement(C.a,{onClose:function(){y(!1)},show:b,className:"success-toast",delay:3e3,autohide:!0},l.a.createElement(C.a.Header,null,l.a.createElement(i.a,{icon:u.h,className:"rounded mr-2"}),l.a.createElement("strong",{className:"mr-auto"},"Copied to clipboard!")),l.a.createElement(C.a.Body,null,B)),l.a.createElement(C.a,{onClose:function(){N(!1)},show:g,className:"success-toast",delay:3e3,autohide:!0},l.a.createElement(C.a.Header,null,l.a.createElement(i.a,{icon:u.h,className:"rounded mr-2"}),l.a.createElement("strong",{className:"mr-auto"},"Download completed!")),l.a.createElement(C.a.Body,null,"Check the download folder.. :)"))))}var q=M;M.defaultProps={currencySymbol:"$",expenditureInfo:{title:"",peopleNames:[""]},bills:[{billDate:"",billName:"",billAmount:0,billPayer:""}]};var H=a(67)("lzma"),W=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={expenditureInfo:{title:"",peopleNames:[""],currency:""},bills:[],currentStep:1,expenditureInfoDisplayed:!0,billsInfoDisplayed:!1,resultDisplayed:!1},n.afterStep1Submitted=n.afterStep1Submitted.bind(Object(d.a)(n)),n.afterStep2Submitted=n.afterStep2Submitted.bind(Object(d.a)(n)),n.updateBillInfo=n.updateBillInfo.bind(Object(d.a)(n)),n.generateURL=n.generateURL.bind(Object(d.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;""!==this.props.compressedURL&&document.getElementById("dutch-form").scrollIntoView(),H.decompress(this.props.compressedURL).then((function(t){return e.setState(t)}))}},{key:"generateURL",value:function(){H.compress(this.state).then((function(e){var t=window.location.origin+window.location.pathname+"?c="+e,a=document.createElement("input");a.value=t,document.body.appendChild(a),a.select(),a.setSelectionRange(0,99999),document.execCommand("copy"),document.body.removeChild(a),alert("URL copied!\nShare to your group and they can see all the contents that you just entered")}))}},{key:"afterStep1Submitted",value:function(e){this.setState({expenditureInfo:{title:e.title,peopleNames:e.peopleNames.split(",").map((function(e){return e.trim()})),currency:e.currency},currentStep:2,expenditureInfoDisplayed:!1,billsInfoDisplayed:!0})}},{key:"updateBillInfo",value:function(e){this.setState({bills:e})}},{key:"afterStep2Submitted",value:function(e){this.setState({bills:e,currentStep:3,billsInfoDisplayed:!1,resultDisplayed:!0})}},{key:"render",value:function(){return l.a.createElement("div",{id:"dutch-form"},l.a.createElement(v,{currentStep:this.state.currentStep}),l.a.createElement(k,{display:this.state.expenditureInfoDisplayed,expenditureInfo:this.state.expenditureInfo,onSubmitSucceeded:this.afterStep1Submitted}),l.a.createElement(U,{display:this.state.billsInfoDisplayed,bills:this.state.bills,onBillUpdated:this.updateBillInfo,onSubmitSucceeded:this.afterStep2Submitted,currencySymbol:this.state.expenditureInfo.currency,peopleNames:this.state.expenditureInfo.peopleNames}),l.a.createElement(q,{display:this.state.resultDisplayed,expenditureInfo:this.state.expenditureInfo,currencySymbol:this.state.expenditureInfo.currency,bills:this.state.bills}),l.a.createElement("div",{id:"share-area"},l.a.createElement(o.a,{id:"share-btn",onClick:this.generateURL},l.a.createElement(i.a,{icon:u.n})),l.a.createElement("br",null)))}}]),a}(n.Component),_=a(25);a(68);var z=function(){return l.a.createElement("div",{id:"footer-container"},l.a.createElement("span",null,l.a.createElement("b",null,"Have new feature request? Found a bug?"),l.a.createElement("br",null),"Feel free to create an issue\xa0",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/dutch-pay/dutch-pay.github.io/issues/new"},"here")),l.a.createElement("footer",null,"Designed and developed by Aree Oh, \xa0",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/aree-oh/"},l.a.createElement(i.a,{icon:_.b})),"\xa0\xa0",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/aria-grande"},l.a.createElement(i.a,{icon:_.a}))))};var J=function(){function e(){document.getElementById("dutch-form").scrollIntoView({behavior:"smooth"})}return l.a.createElement("div",{className:"App"},l.a.createElement("div",{id:"introduction"},l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,l.a.createElement(i.a,{icon:u.e,className:"App-logo",alt:"logo",size:"lg",spin:!0}),"\xa0\xa0\xa0",l.a.createElement("span",null,"Split bills with friends!")),l.a.createElement("p",{className:"p-3"},"It's not a simple calculator that lets you know how much you have to pay for a bill paid by one person.",l.a.createElement("br",null),l.a.createElement("span",{className:"highlight"},"Dutch pay")," will calculate and split every bills paid by multiple people.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("i",{className:"quote"},"I went to a trip with my friends and each of us spent different amount of money for buying food, drinks and etc. After the trip, I was struggled with how to spilt all the bills. At that moment, I used this and it was super easy. What I did was just entering all the bills and DutchPay solved the problem!",l.a.createElement("br",null),"- Aree"),l.a.createElement("br",null),l.a.createElement("br",null),"Enter every bills, we will let you know",l.a.createElement("br",null),"how to split bills with ",l.a.createElement("span",{className:"highlight"},"minimum transaction!"),l.a.createElement("br",null))),l.a.createElement("div",null,l.a.createElement(o.a,{className:"start-button",size:"lg",onClick:e},"Get started!"))),l.a.createElement(W,{compressedURL:function(){var e=new URLSearchParams(window.location.search);return e.has("c")?e.get("c"):""}()}),l.a.createElement("div",{id:"kofi"},l.a.createElement("span",null,"Did you enjoy dutch paying?"),l.a.createElement("br",null),l.a.createElement("a",{href:"https://ko-fi.com/G2G22LHXS",target:"_blank"},l.a.createElement("img",{height:"36",style:{border:"0px",height:"36px"},src:"https://cdn.ko-fi.com/cdn/kofi2.png?v=2",border:"0",alt:"Buy Me a Coffee at ko-fi.com"}))),l.a.createElement(z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.c121d059.chunk.js.map
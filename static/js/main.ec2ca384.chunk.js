(this["webpackJsonpbuddy-cue"]=this["webpackJsonpbuddy-cue"]||[]).push([[0],{222:function(e,t,n){},363:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(21),r=n.n(c),d=(n(222),n(204)),s=n(16),o=n(3),j=i.a.createContext({timeTempCache:[],addTimeTemp:function(){},dateArr:[],setWeight:function(){},weight:0,isWarningOpen:!1,setIsWarningOpen:function(){}});function l(e){var t=e.children,n=Object(a.useState)([]),i=Object(s.a)(n,2),c=i[0],r=i[1],l=Object(a.useState)(!1),b=Object(s.a)(l,2),u=b[0],p=b[1],x=new Date;x.setHours(6,0,0,0);var O=Object(a.useState)(0),h=Object(s.a)(O,2),m=h[0],f=h[1],g=Array.from(Array(29),(function(e,t){var n=new Date(x);return n.setMinutes(x.getMinutes()+30*t),n}));return Object(o.jsx)(j.Provider,{value:{timeTempCache:c,addTimeTemp:function(e){r((function(t){return[].concat(Object(d.a)(t),[e])})),c.length&&function(){var e=c[0].temp,t=c.slice(-1).pop();(t?t.temp:0)-e<(205-e)/(2*m)&&p(!0)}()},dateArr:g,weight:m,setWeight:f,isWarningOpen:u,setIsWarningOpen:p},children:t})}function b(){return Object(a.useContext)(j)}var u,p,x,O,h,m,f,g=n(36),v=n(37),y=n(412),C=n(398),T=n(409),S=n(414),k=v.a.div(u||(u=Object(g.a)(["\n  display: flex;\n  align-items: center;\n"]))),w=function(){var e=b(),t=e.timeTempCache,n=e.addTimeTemp,i=e.dateArr;(new Date).setHours(6,0,0,0);var c=Object(a.useState)(0),r=Object(s.a)(c,2),d=r[0],j=r[1],l=Object(a.useState)(0),u=Object(s.a)(l,2),p=u[0],x=u[1],O=t.length?t[t.length-1].timeIndex+1:0,h=i[O],m=h.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/,"$1$3");return Object(o.jsxs)(k,{children:[Object(o.jsx)("div",{style:{padding:"12px"},children:m}),Object(o.jsx)("div",{style:{padding:"12px"},children:Object(o.jsx)(y.a,{id:"temp-input",label:"Temperature",variant:"outlined",margin:"dense",onChange:function(e){return function(e){j(parseInt(e.target.value,10))}(e)}})}),Object(o.jsx)("div",{style:{padding:"12px"},children:Object(o.jsx)(C.a,{variant:"contained",color:"primary",onClick:function(){return function(){var e=t.length?d-t[t.length-1].temp:0,a=h.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/,"$1$3");n({timeIndex:O,temp:d,time:h,formattedTime:a,tempDiff:e,addedCoals:!!p})}()},children:"Enter Temp"})}),Object(o.jsx)("div",{style:{padding:"12px"},children:Object(o.jsxs)(T.a,{labelId:"add-coals-select",id:"add-coals-select",onChange:function(e){return function(e){x(e.target.value)}(e)},value:p,children:[Object(o.jsx)(S.a,{value:0,children:"No"}),Object(o.jsx)(S.a,{value:1,children:"Yes"})]})})]})},I=n(399),W=n(400),D=n(401),$=n(402),A=n(403),B=function(){var e=b().timeTempCache,t=e&&e.map((function(e){var t=e.timeIndex,n=e.formattedTime,a=e.temp,i=e.tempDiff,c=e.addedCoals;return Object(o.jsxs)(I.a,{children:[Object(o.jsx)(W.a,{children:n}),Object(o.jsx)(W.a,{children:"".concat(a,"\xb0F")}),Object(o.jsx)(W.a,{children:i}),Object(o.jsx)(W.a,{children:c?"Yes":"No"})]},t)}));return Object(o.jsxs)(D.a,{className:"temp-table","aria-label":"simple table",children:[Object(o.jsx)($.a,{children:Object(o.jsxs)(I.a,{children:[Object(o.jsx)(W.a,{children:"Time"}),Object(o.jsx)(W.a,{children:"Temperature"}),Object(o.jsx)(W.a,{children:"Temp Difference"}),Object(o.jsx)(W.a,{children:"Coals Added"})]})}),Object(o.jsx)(A.a,{children:t})]})},E=n(411),L=function(e){var t=e.onChange,n=b().dateArr,i=Object(a.useState)(0),c=Object(s.a)(i,2),r=c[0],d=c[1],j=n.map((function(e,t){return Object(o.jsx)(S.a,{value:t,children:e.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/,"$1$3")},e.toString())})),l=function(e){var a=e.target.value,i=n[a];t(a,i),d(a)};return Object(o.jsx)(T.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",onChange:function(e){return l(e)},value:r,children:j})},P=v.a.div(p||(p=Object(g.a)(["\n  position: absolute;\n  width: 400px;\n  background-color: #ffffff;\n  top: 40%;\n  left: 40%;\n  transform: translate(-40%, -40%);\n  outline: 0;\n  padding: 16px;\n  border-radius: 4px;\n"]))),Y=v.a.div(x||(x=Object(g.a)(["\n  font-size: 24px;\n  padding-bottom: 8px;\n"]))),F=v.a.div(O||(O=Object(g.a)(["\n  padding-top: 8px;\n  padding-bottom: 8px;\n  display: flex;\n"]))),H=v.a.div(h||(h=Object(g.a)(["\n  padding: 8px;\n  display: flex;\n  justify-content: center;\n"]))),K=function(e){var t=e.onSubmit,n=b(),i=n.timeTempCache,c=n.addTimeTemp,r=n.setWeight,d=new Date;d.setHours(6,0,0,0);var j=Object(a.useState)(0),l=Object(s.a)(j,2),u=l[0],p=l[1],x=Object(a.useState)(d),O=Object(s.a)(x,2),h=O[0],m=O[1],f=Object(a.useState)(0),g=Object(s.a)(f,2),v=g[0],T=g[1],S=Object(a.useState)(0),k=Object(s.a)(S,2),w=k[0],I=k[1];return Object(o.jsxs)(P,{children:[Object(o.jsxs)(Y,{children:[Object(o.jsx)("h1",{children:"Welcome to Buddy Cue!"}),Object(o.jsx)("div",{children:"Please select a starting time, temp (in \xbaF), and weight (in lbs)."})]}),Object(o.jsxs)(F,{children:[Object(o.jsx)(H,{children:Object(o.jsx)(L,{onChange:function(e,t){p(e),m(t)}})}),Object(o.jsx)("div",{style:{padding:"8px"},children:Object(o.jsx)(y.a,{id:"temp-input",label:"Temperature",variant:"outlined",onChange:function(e){return function(e){T(parseInt(e.target.value,10))}(e)}})}),Object(o.jsx)("div",{style:{padding:"8px"},children:Object(o.jsx)(y.a,{id:"weight-input",label:"Weight",variant:"outlined",onChange:function(e){return function(e){I(parseInt(e.target.value,10))}(e)}})})]}),Object(o.jsx)("div",{style:{padding:"8px 0 8px 0"},children:Object(o.jsx)(C.a,{variant:"contained",color:"primary",onClick:function(){return function(){var e=i.length?v-i[i.length-1].temp:0,n=h.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/,"$1$3");c({timeIndex:u,temp:v,time:h,formattedTime:n,tempDiff:e,addedCoals:!0}),r(w),t()}()},children:"Enter"})})]})},M=v.a.div(m||(m=Object(g.a)(["\n  position: absolute;\n  width: 400px;\n  background-color: #ffffff;\n  top: 40%;\n  left: 40%;\n  transform: translate(-40%, -40%);\n  outline: 0;\n  padding: 16px;\n  border-radius: 4px;\n"]))),N=function(e){var t=e.onClose,n=2*b().weight;return Object(o.jsxs)(M,{children:[Object(o.jsxs)("div",{style:{padding:"8px 0 8px 0"},children:[Object(o.jsx)("h1",{children:"Excellent."}),Object(o.jsx)("div",{style:{paddingBottom:"8px"},children:"Your time estimated smoking time is ".concat(n," hours.")}),Object(o.jsx)("div",{style:{paddingBottom:"8px"},children:"Prep your smoker to 225\xbaF, and let the smoking commence!"})]}),Object(o.jsx)("div",{style:{padding:"8px 0 8px 0"},children:Object(o.jsx)(C.a,{variant:"contained",color:"primary",onClick:function(){return t()},children:"Close"})})]})},J=function(){var e=Object(a.useState)(!0),t=Object(s.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(!1),r=Object(s.a)(c,2),d=r[0],j=r[1],l=d?Object(o.jsx)(N,{onClose:function(){return i(!1)}}):Object(o.jsx)(K,{onSubmit:function(){return j(!0)}});return Object(o.jsx)(E.a,{open:n,onClose:function(){return i(!1)},children:l})},z=n(404),q=n(408),G=n(201),Q=n(202),R=n(99),U=n(96),V=n(205),X=function(){var e=b().timeTempCache;return Object(o.jsxs)(z.a,{width:500,height:300,data:e,margin:{top:5,right:30,left:20,bottom:5},children:[Object(o.jsx)(q.a,{strokeDasharray:"3 3"}),Object(o.jsx)(G.a,{dataKey:"formattedTime"}),Object(o.jsx)(Q.a,{}),Object(o.jsx)(R.a,{}),Object(o.jsx)(U.a,{}),Object(o.jsx)(V.a,{type:"monotone",dataKey:"temp",stroke:"#8884d8",activeDot:{r:8}})]})},Z=v.a.div(f||(f=Object(g.a)(["\n  position: absolute;\n  width: 400px;\n  background-color: #ffffff;\n  top: 40%;\n  left: 40%;\n  transform: translate(-40%, -40%);\n  outline: 0;\n  padding: 16px;\n  border-radius: 4px;\n"]))),_=function(){var e=b(),t=e.isWarningOpen,n=e.setIsWarningOpen;return Object(o.jsx)(E.a,{open:t,children:Object(o.jsxs)(Z,{children:[Object(o.jsx)("h1",{children:"Warning"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:"Your temp is not rising fast enough."}),Object(o.jsx)("p",{children:"Please add more coals to the smoker."})]}),Object(o.jsx)("div",{style:{padding:"8px 0 8px 0"},children:Object(o.jsx)(C.a,{variant:"contained",color:"primary",onClick:function(){return n(!1)},children:"OK"})})]})})},ee=function(){return Object(o.jsxs)(l,{children:[Object(o.jsx)(J,{}),Object(o.jsx)(_,{}),Object(o.jsx)("div",{style:{padding:"12px"},children:Object(o.jsx)(w,{})}),Object(o.jsx)("div",{style:{padding:"12px"},children:Object(o.jsx)(X,{})}),Object(o.jsx)("div",{style:{padding:"12px"},children:Object(o.jsx)(B,{})})]})};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(ee,{})}),document.getElementById("root"))}},[[363,1,2]]]);
//# sourceMappingURL=main.ec2ca384.chunk.js.map
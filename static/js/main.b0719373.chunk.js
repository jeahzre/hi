(this["webpackJsonpreact-responsive"]=this["webpackJsonpreact-responsive"]||[]).push([[0],{23:function(t,e,n){},34:function(t,e,n){},35:function(t,e,n){},37:function(t,e,n){},46:function(t,e,n){},47:function(t,e,n){},48:function(t,e,n){},49:function(t,e,n){},50:function(t,e,n){},51:function(t,e,n){},52:function(t,e,n){},53:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(26),i=n.n(r),s=(n(34),n(23),n(13)),o=n(2),u=n(16),l=n(17),d=n(8),m=n(19),b=n(18),h=(n(35),n(0)),j=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).handleScroll=a.handleScroll.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;setTimeout((function(){var e=document.querySelector(".hero-container");if(null!==e&&e.getBoundingClientRect().y>window.innerHeight/4&&e.getBoundingClientRect().bottom>0){e.innerHTML+='\n\t\t\t<div id="scrollDownMsgContainer">\n\t\t\t<div id="scrollDownMsg">\u2b07 Scroll Down \u2b07</div>\n\t\t\t</div>',window.addEventListener("scroll",t.handleScroll)}}),2e3)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){var t=this;if(document.getElementById("scrollDownMsgContainer")){var e=document.querySelector(".hero-container"),n=document.getElementById("scrollDownMsgContainer");n.parentNode.removeChild(n),window.removeEventListener("scroll",this.handleScroll),setTimeout((function(){if(e.getBoundingClientRect().bottom>0){e.innerHTML+='\n\t\t\t<div id="scrollDownMsgContainer">\n\t\t\t<div id="scrollDownMsg">\u2b07 Scroll Down \u2b07</div>\n\t\t\t</div>',window.addEventListener("scroll",t.handleScroll)}}),150)}}},{key:"render",value:function(){return Object(h.jsx)("div",{id:"hero-container",children:Object(h.jsxs)("div",{className:"explanation",children:[Object(h.jsx)("h1",{className:"hero-exp",children:"Jeahz"}),Object(h.jsx)("p",{className:"hero-exp",children:"A student"})]})})}}]),n}(c.a.Component),f=(n(37),function(t){var e=t.text,n=t.path;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("li",{className:"card-item",id:"card-item",children:Object(h.jsx)(s.b,{className:"cards_item_link",to:n,children:Object(h.jsx)("div",{className:"cards_item_info",children:Object(h.jsx)("h5",{className:"cards_item_text",children:e})})})})})}),O=(n(46),function(){return Object(h.jsxs)("div",{className:"cards",children:[Object(h.jsx)("h1",{children:"My Projects"}),Object(h.jsxs)("div",{className:"cards__items",children:[Object(h.jsx)(f,{text:"Calculator \u2795\u2796",label:"calculator",path:"/calculator"}),Object(h.jsx)(f,{text:"Drum Machine \ud83e\udd41",label:"drum-machine",path:"/drum-machine"}),Object(h.jsx)(f,{text:"Pomodoro \ud83d\udd53",label:"pomodoro",path:"/pomodoro"}),Object(h.jsx)(f,{text:"Markdown Previewer \ud83d\udcdd",label:"markdown-previewer",path:"/markdown-previewer"}),Object(h.jsx)(f,{text:"Avatar Generator \ud83d\udc34\ufe0f",label:"avatar-generator",path:"/avatar-generator"})]})]})}),x=(n(47),function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"home",children:[Object(h.jsx)(j,{}),Object(h.jsx)(O,{})]})})}),v=n(4),g=(n(48),function(){var t=Object(a.useState)(null),e=Object(v.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)("0"),i=Object(v.a)(r,2),s=i[0],o=i[1],u=Object(a.useState)(""),l=Object(v.a)(u,2),d=l[0],m=l[1],b=Object(a.useState)(""),j=Object(v.a)(b,2),f=j[0],O=j[1],x=Object(a.useState)(""),g=Object(v.a)(x,2),p=g[0],N=g[1],C=Object(a.useState)(!1),k=Object(v.a)(C,2),w=k[0],y=k[1],P=Object(a.useState)(!1),S=Object(v.a)(P,2),M=S[0],T=S[1],z=function(){"add"===p&&c((function(t){return Math.round(1e4*(Number(t)+Number(d)))/1e4}))},_=function(){"subtract"===p&&c((function(t){return Math.round(1e4*(Number(t)-Number(d)))/1e4}))},E=function(){"multiply"===p&&c((function(t){return Math.round(Number(t)*Number(d)*1e4)/1e4}))},F=function(){"divide"===p&&c((function(t){return Math.round(Number(t)/Number(d)*1e4)/1e4}))},L=function(t){"clear"===t.target.id?(c(null),m(""),O(""),o("0"),N(""),y(!1),T(!1)):"zero"===t.target.id?(!p&&void 0!==d[0]||p&&"0"!==d[0]||M||f)&&(f?(w?(m("".concat(f,".").concat(t.target.innerText)),o((function(e){return"".concat(f,".").concat(t.target.innerText)})),y(!1)):(m("".concat(f,".").concat(t.target.innerText)),o((function(e){return"".concat(f,".").concat(t.target.innerText)}))),c(null),O("")):(w?(m((function(e){return"".concat(Number(e),".").concat(t.target.innerText)})),y(!1)):m((function(e){return"".concat(e).concat(t.target.innerText)})),o((function(e){return"".concat(e).concat(t.target.innerText)})))):"one"===t.target.id||"two"===t.target.id||"three"===t.target.id||"four"===t.target.id||"five"===t.target.id||"six"===t.target.id||"seven"===t.target.id||"eight"===t.target.id||"nine"===t.target.id?f?(w?(m("".concat(f,".").concat(t.target.innerText)),o((function(e){return"".concat(e).concat(t.target.innerText)})),y(!1)):(m("".concat(f).concat(t.target.innerText)),o((function(e){return"".concat(e).concat(t.target.innerText)}))),O(""),c(null)):""===p?w?(o((function(e){return"".concat(e).concat(t.target.innerText)})),m((function(e){return"".concat(Number(e),".").concat(t.target.innerText)})),y(!1)):(o((function(e){return"".concat(d).concat(t.target.innerText)})),m((function(e){return"".concat(e).concat(t.target.innerText)}))):"add"!==p&&"multiply"!==p&&"divide"!==p&&"subtract"!==p||(w?(o((function(e){return"".concat(e).concat(t.target.innerText)})),1===("".concat(d).match(/-/g)||[]).length?m((function(e){return"".concat(e,".").concat(t.target.innerText)})):m((function(e){return"".concat(Number(e),".").concat(t.target.innerText)})),y(!1)):(o((function(e){return"".concat(e).concat(t.target.innerText)})),m((function(e){return"".concat(e).concat(t.target.innerText)})))):"add"===t.target.id?(""===p||"add"===p||""!==d&&"-"!==d?("add"!==p&&""!==p?(_(),E(),F()):f?(c(f),O("")):c((function(t){return Math.round(1e4*(Number(t)+Number(d)))/1e4})),null==="".concat(s).match(/\+\s$/g)&&o((function(t){return"".concat(t," + ")}))):o((function(t){return t.replace(/[\s-+/x]+$/g," + ")})),T(!1),N("add"),m("")):"subtract"===t.target.id?(""!==p&&"subtract"!==p&&""!==d&&"-"!==d?(z(),E(),F(),m(""),N("subtract"),null==="".concat(s).match(/-\s$/g)&&o((function(t){return"".concat(t," - ")}))):""!==f?(c(f),O(""),N("subtract"),null==="".concat(s).match(/-\s$/g)&&o((function(t){return"".concat(t," - ")}))):(null!=="".concat(d).match(/[1-9]/g)&&(null===n&&c(Number(d)),null!==n&&c((function(t){return Math.round(1e4*(Number(t)-Number(d)))/1e4})),m("")),("".concat(d).match(/-/g)||[]).length<1&&""!==p&&""===d&&("subtract"===p&&o((function(t){return"".concat(t," - ")})),m("-")),("".concat(d).match(/-/g)||[]).length<1&&""===d&&""===p?(m("-"),o("-")):null!=="".concat(d).match(/-$/g)||null==="".concat(s).match(/-\s$/g)&&(o((function(t){return"".concat(t," - ")})),"subtract"!==p&&""!==d&&N("subtract"))),T(!1)):"multiply"===t.target.id?(""===p||"multiply"===p||""!==d&&"-"!==d?(""!==p&&"multiply"!==p?(z(),_(),F()):f?(c(f),O("")):(n&&c((function(t){return Math.round(Number(t)*Number(d)*1e4)/1e4})),!n&&c(Number(d))),null==="".concat(s).match(/\x\s$/g)&&o((function(t){return"".concat(t," x ")}))):o((function(t){return t.replace(/[\s\-+/\x]+$/g," x ")})),T(!1),N("multiply"),m("")):"divide"===t.target.id?(""===p||"divide"===p||""!==d&&"-"!==d?(""!==p&&"divide"!==p?(z(),_(),E()):f?(c(f),O("")):(n&&c((function(t){return Math.round(Number(t)/Number(d)*1e4)/1e4})),!n&&c(Number(d))),null==="".concat(s).match(/\/\s$/g)&&o((function(t){return"".concat(t," / ")}))):o((function(t){return t.replace(/[\s\-+/\x]+$/g," / ")})),T(!1),N("divide"),m("")):"equals"===t.target.id?d&&null==="".concat(d).match(/^-$/g)?("add"===p?(O(Math.round(1e4*(Number(n)+Number(d)))/1e4),d&&o("".concat(Math.round(1e4*(Number(n)+Number(d)))/1e4))):"subtract"===p?(O(Math.round(1e4*(Number(n)-Number(d)))/1e4),d&&o("".concat(Math.round(1e4*(Number(n)-Number(d)))/1e4))):"divide"===p?(O(Math.round(Number(n)/Number(d)*1e4)/1e4),d&&o("".concat(Math.round(Number(n)/Number(d)*1e4)/1e4))):"multiply"===p&&(O(Math.round(Number(n)*Number(d)*1e4)/1e4),o("".concat(Math.round(Number(n)*Number(d)*1e4)/1e4))),m(""),N(""),T(!1)):console.log("input has minus and hasn`t number"):"decimal"===t.target.id&&(!f&&!M||f&&null==="".concat(f).match(/\./g)?(f?(m("".concat(f)),o("".concat(f,"."))):""===d&&0!==Number(s)?o((function(t){return"".concat(t,"0.")})):o("".concat(s,".")),y(!0),T(!0)):console.log("input has minus and hasn`t any number"))};return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"calc-container",children:Object(h.jsxs)("div",{id:"calculator",children:[Object(h.jsx)("div",{id:"display-calc",children:s}),Object(h.jsxs)("div",{id:"button-area",children:[Object(h.jsx)("button",{id:"clear",onClick:L,children:"AC"}),Object(h.jsx)("button",{id:"divide",onClick:L,children:"/"}),Object(h.jsx)("button",{id:"multiply",onClick:L,children:"x"}),Object(h.jsx)("button",{id:"seven",onClick:L,children:"7"}),Object(h.jsx)("button",{id:"eight",onClick:L,children:"8"}),Object(h.jsx)("button",{id:"nine",onClick:L,children:"9"}),Object(h.jsx)("button",{id:"subtract",onClick:L,children:"-"}),Object(h.jsx)("button",{id:"four",onClick:L,children:"4"}),Object(h.jsx)("button",{id:"five",onClick:L,children:"5"}),Object(h.jsx)("button",{id:"six",onClick:L,children:"6"}),Object(h.jsx)("button",{id:"add",onClick:L,children:"+"}),Object(h.jsx)("button",{id:"one",onClick:L,children:"1"}),Object(h.jsx)("button",{id:"two",onClick:L,children:"2"}),Object(h.jsx)("button",{id:"three",onClick:L,children:"3"}),Object(h.jsx)("button",{id:"equals",onClick:L,children:"="}),Object(h.jsx)("button",{id:"zero",onClick:L,children:"0"}),Object(h.jsx)("button",{id:"decimal",onClick:L,children:"."})]})]})})})}),p=n(29),N=(n(49),function(t){var e=t.drumpad,n=t.audioName,a=t.audio,c=t.handleClick;return Object(h.jsx)(h.Fragment,{children:e.map((function(t,e){return Object(h.jsxs)("button",{className:"drum-pad button btn-primary",onClick:function(t){return c(t)},id:n[e],children:[t,Object(h.jsx)("audio",{className:"clip",id:t,src:a[e],preload:"auto"})]},e)}))})}),C=function(){var t=Object(a.useState)(""),e=Object(v.a)(t,2),n=e[0],c=e[1],r=["Q","W","E","A","S","D","Z","X","C"],i=["clap","crash","hi-hat1","hi-hat2","kick1","kick2","perc1","perc2","snare"],s=function(t,e){if(t){var n=t.target.children[0].id,a=r.indexOf(n),s=document.getElementById(n);return s.currentTime=0,c(i[a]),s.play()}var o=document.getElementById(e),u=r.indexOf(e);return c(i[u]),o.currentTime=0,o.play()},o=function(t){var e,n=Object(p.a)(r);try{for(n.s();!(e=n.n()).done;){var a=e.value;t.key==="".concat(a.toLowerCase())&&s(null,a)}}catch(c){n.e(c)}finally{n.f()}};return Object(a.useEffect)((function(){return window.addEventListener("keydown",o),function(){return window.removeEventListener("keydown",o)}})),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{id:"drum-container",children:[Object(h.jsx)("div",{id:"drum-machine",children:Object(h.jsx)("div",{className:"pad-container",children:Object(h.jsx)(N,{drumpad:r,audio:["https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3","https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3","https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3","https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3","https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3","https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3","https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3","https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3","https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"],handleClick:s,audioName:i})})}),Object(h.jsx)("div",{className:"d-flex justify-content-center",id:"display-container",children:Object(h.jsx)("span",{className:"badge badge-info d-flex justify-content-center align-items-center",id:"display-drum",children:n})})]})})},k=(n(50),function(){var t=Object(a.useState)(5),e=Object(v.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(25),i=Object(v.a)(r,2),s=i[0],o=i[1],u=Object(a.useState)(60*s),l=Object(v.a)(u,2),d=l[0],m=l[1],b=Object(a.useState)(!1),j=Object(v.a)(b,2),f=j[0],O=j[1],x=Object(a.useState)(!1),g=Object(v.a)(x,2),p=g[0],N=g[1],C=Math.floor(d/60),k=Math.round(d%60);Object(a.useEffect)((function(){var t=document.getElementById("beep");if(p){if(f){var e=setInterval((function(){m((function(e){return Number(e)>=1?Number(e)-1:(O(!1),m(60*Number(s)),t.play(),0)}))}),1e3);return function(){return clearInterval(e)}}var a=setInterval((function(){m((function(e){return Number(e)>=1?Number(e)-1:(O(!0),m(60*Number(n)),t.play(),0)}))}),1e3);return function(){return clearInterval(a)}}}),[p,f]);var w=function(t){var e=t.currentTarget.id;if("break-decrement"===e?n>1&&(c((function(t){return Number(t)-1})),f&&m((function(t){return t-60}))):"break-increment"===e&&n<=59&&(c((function(t){return Number(t)+1})),f&&m((function(t){return t+60}))),"session-decrement"===e?s>1&&(o((function(t){return Number(t)-1})),!f&&m((function(t){return t-60}))):"session-increment"===e&&s<=59&&(o((function(t){return Number(t)+1})),!f&&m((function(t){return t+60}))),"start_stop"===e)N(!p);else if("reset"===e){var a=document.getElementById("beep");c(5),o(25),N(!1),f&&O(!1),m(1500),a.pause(),a.currentTime=0}};return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)("audio",{src:"https://res.cloudinary.com/dymnej9mt/video/upload/v1632633269/mixkit-censorship-beep-1082_gfemv9.wav",id:"beep"}),Object(h.jsxs)("div",{className:"lengths-container",children:[Object(h.jsxs)("div",{className:"length-container",children:[Object(h.jsx)("div",{className:"length-label",id:"break-label",children:"Break Length"}),Object(h.jsxs)("div",{className:"length-control",children:[Object(h.jsx)("button",{id:"break-increment",onClick:w,children:Object(h.jsx)("i",{className:"fas fa-chevron-up"})}),Object(h.jsx)("div",{id:"break-length",children:n}),Object(h.jsx)("button",{id:"break-decrement",onClick:w,children:Object(h.jsx)("i",{className:"fas fa-chevron-down"})})]})]}),Object(h.jsxs)("div",{className:"length-container",children:[Object(h.jsx)("span",{className:"length-label",id:"session-label",children:"Session Length"}),Object(h.jsxs)("div",{className:"length-control",children:[Object(h.jsx)("button",{id:"session-increment",onClick:w,children:Object(h.jsx)("i",{className:"fas fa-chevron-up"})}),Object(h.jsx)("div",{id:"session-length",children:s}),Object(h.jsx)("button",{id:"session-decrement",onClick:w,children:Object(h.jsx)("i",{className:"fas fa-chevron-down"})})]})]})]}),Object(h.jsxs)("div",{className:"timer",children:[Object(h.jsx)("div",{id:"timer-label",children:f?"Break":"Session"}),Object(h.jsxs)("span",{id:"time-left",children:[C<10?"0"+C:C,":",k<10?"0"+k:k]}),Object(h.jsxs)("div",{id:"timer-control",children:[Object(h.jsxs)("button",{id:"start_stop",onClick:w,children:[Object(h.jsx)("i",{className:"fas fa-play"}),Object(h.jsx)("i",{className:"fas fa-pause"})]}),Object(h.jsx)("button",{id:"reset",onClick:w,children:Object(h.jsx)("i",{className:"fas fa-step-backward"})})]})]})]})})}),w=n(25),y=n.n(w),P=(n(51),function(t){var e=t.setText,n=t.text;return Object(h.jsx)("div",{id:"markdown",children:Object(h.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[Object(h.jsx)("h5",{children:"Markdown"}),Object(h.jsx)("textarea",{onChange:function(t){return e(t.target.value)},id:"editor",value:n})]})})}),S=function(t){var e=t.text;return Object(h.jsx)("div",{className:"card",id:"previewer",children:Object(h.jsxs)("div",{className:"card-body d-flex flex-column",children:[Object(h.jsx)("h5",{className:"title",children:"Preview"}),Object(h.jsx)("div",{id:"preview",dangerouslySetInnerHTML:{__html:y()(e)}}),Object(h.jsx)("button",{id:"preview-button",onClick:function(){document.getElementById("html-format").classList.toggle("show")},children:"Show HTML format"}),Object(h.jsx)("p",{id:"html-format",children:y()(e)})]})})},M=function(){var t=Object(a.useState)("\n# h1\n## h2\nThis is a [link](https://www.google.com)\n`inline code`\n```\nlet score = 0\nif(true) {\n  score++;\n} else {\n  score--;\n}\n```\n- Food: \n  - kiwi\n  - apple\n  - orange\n**COOL!**\n> Mission: to make human healthy.\n\n![Fruit](https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80g)\n  "),e=Object(v.a)(t,2),n=e[0],c=e[1];return Object(h.jsxs)("div",{className:"container-fluid",id:"markdown-previewer",children:[Object(h.jsx)(P,{setText:c,text:n}),Object(h.jsx)(S,{text:n})]})},T=n(12),z=n(20),_=n(10),E=(n(52),function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).pathToImageFolder="".concat("/hi","/alpaca-generator-assets/alpaca"),a.avatarPartStylesMap={accessories:["earings","flower","glasses","headphone"],backgrounds:["blue50","blue60","blue70","darkblue30","darkblue50","darkblue70","green50","green60","green70","grey40","grey70","grey80","red50","red60","red70","yellow50","yellow60","yellow70"],ears:["default","tilt-backward","tilt-forward"],eyes:["angry","default","naughty","panda","smart","star"],hair:["bang","curls","default","elegant","fancy","quiff","short"],leg:["tilt-forward","tilt-backward","game-console","default","cookie","bubble-tea"],mouth:["default","eating","laugh","tongue","astonished"],neck:["bend-backward","bend-forward","default","thick"],nose:["nose"]},a.arrayStateProperties=["accessories"],a.notSameNamesWithFolder=["background"],a.notSameNamesWithFolderMap={background:"backgrounds"},a.state={avatarParts:{accessories:["flower"],background:"blue50",ears:"default",eyes:"default",hair:"default",leg:"default",mouth:"default",neck:"default",nose:"nose"},currentCustomizePart:"accessories"},a.handleChangeCurrentCutomizePart=a.handleChangeCurrentCutomizePart.bind(Object(d.a)(a)),a.handleChangeCurrentCustomizeStyle=a.handleChangeCurrentCustomizeStyle.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"handleChangeCurrentCutomizePart",value:function(t){this.setState({currentCustomizePart:t.target.id})}},{key:"handleChangeCurrentCustomizeStyle",value:function(t){if(this.arrayStateProperties.includes(this.state.currentCustomizePart))if("true"===t.target.dataset.chosen){var e=this.state.avatarParts[this.state.currentCustomizePart].indexOf(t.target.id);console.log(e),t.target.dataset.chosen=!1,this.setState({avatarParts:Object(_.a)(Object(_.a)({},this.state.avatarParts),{},Object(T.a)({},this.state.currentCustomizePart,[].concat(Object(z.a)(this.state.avatarParts[this.state.currentCustomizePart].slice(0,e)),Object(z.a)(this.state.avatarParts[this.state.currentCustomizePart].slice(e+1)))))})}else t.target.dataset.chosen=!0,this.setState({avatarParts:Object(_.a)(Object(_.a)({},this.state.avatarParts),{},Object(T.a)({},this.state.currentCustomizePart,[].concat(Object(z.a)(this.state.avatarParts[this.state.currentCustomizePart]),[t.target.id])))});else this.setState({avatarParts:Object(_.a)(Object(_.a)({},this.state.avatarParts),{},Object(T.a)({},this.state.currentCustomizePart,t.target.id))})}},{key:"render",value:function(){var t=this;return Object(h.jsxs)("div",{className:"image-generator",children:[Object(h.jsx)("h1",{children:"ALPACA GENERATOR"}),Object(h.jsxs)("div",{className:"image-button-container",children:[Object(h.jsxs)("div",{className:"images-container",children:[Object.keys(this.state.avatarParts).map((function(e){if(t.notSameNamesWithFolder.includes(e)){var n=t.notSameNamesWithFolderMap[t.notSameNamesWithFolder];return Object(h.jsx)("img",{className:"".concat(e),src:"".concat(t.pathToImageFolder,"/").concat(n,"/").concat(t.state.avatarParts[e],".png"),alt:"".concat(t.state.avatarParts[e],"_").concat(e)},"".concat(t.state.avatarParts[e],"_").concat(e))}return null})),Object.keys(this.state.avatarParts).map((function(e){return t.arrayStateProperties.includes(e)?t.state.avatarParts[e].map((function(n){return Object(h.jsx)("img",{className:"".concat(e),src:"".concat(t.pathToImageFolder,"/").concat(e,"/").concat(n,".png"),alt:"".concat(t.state.avatarParts[n],"_").concat(n)},"".concat(t.state.avatarParts[n],"_").concat(n))})):null})),Object.keys(this.state.avatarParts).map((function(e){return t.arrayStateProperties.includes(e)||t.notSameNamesWithFolder.includes(e)?null:Object(h.jsx)("img",{className:"".concat(e),src:"".concat(t.pathToImageFolder,"/").concat(e,"/").concat(t.state.avatarParts[e],".png"),alt:"".concat(t.state.avatarParts[e],"_").concat(e)},"".concat(t.state.avatarParts[e],"_").concat(e))}))]}),Object(h.jsxs)("div",{className:"customize-buttons-container",children:[Object(h.jsxs)("div",{className:"customize-part-buttons",children:[Object(h.jsx)("h2",{className:"customize-title",children:"ACCESSORIZE THE ALPACA'S"}),Object(h.jsx)("div",{className:"customize-buttons",children:Object.keys(this.state.avatarParts).map((function(e){var n=t.state.currentCustomizePart===e;return Object(h.jsx)("button",{id:e,className:"avatar-part-button",onClick:t.handleChangeCurrentCutomizePart,"data-chosen":n,children:e},"".concat(e,"_button"))}))})]}),Object(h.jsxs)("div",{className:"customize-style-buttons",children:[Object(h.jsx)("h2",{className:"customize-title",children:"STYLE"}),Object(h.jsx)("div",{className:"customize-buttons",children:Object.keys(this.state.avatarParts).map((function(e){if(e===t.state.currentCustomizePart){var n=[];if(t.notSameNamesWithFolder.includes(e)){var a=t.notSameNamesWithFolderMap[t.notSameNamesWithFolder];n=t.avatarPartStylesMap[a]}else n=t.avatarPartStylesMap[e];return n.map((function(n){var a;return a=t.arrayStateProperties.includes(t.state.currentCustomizePart)?t.state.avatarParts[e].includes(n):n===t.state.avatarParts[e],Object(h.jsx)("button",{id:n,className:"avatar-style-button",onClick:t.handleChangeCurrentCustomizeStyle,"data-chosen":a,children:n},"".concat(n,"_").concat(e,"_button"))}))}return null}))})]})]})]})]})}}]),n}(a.Component));function F(){var t=Object(o.f)();return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[t]),null}var L=function(){var t=/Mobile/.test(window.navigator.userAgent);return Object(a.useEffect)((function(){if(t)return document.body.addEventListener("touchstart",(function(){}),!1),function(){return document.body.removeEventListener("touchstart",(function(){}),!1)}}),[t]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(s.a,{basename:window.location.pathname||"",children:[Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{path:"/",exact:!0,component:x}),Object(h.jsx)(o.a,{path:"/calculator",component:g}),Object(h.jsx)(o.a,{path:"/drum-machine",component:C}),Object(h.jsx)(o.a,{path:"/pomodoro",component:k}),Object(h.jsx)(o.a,{path:"/markdown-previewer",component:M}),Object(h.jsx)(o.a,{path:"/avatar-generator",component:E})]}),Object(h.jsx)(F,{})]})})};i.a.render(Object(h.jsx)(L,{}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.b0719373.chunk.js.map
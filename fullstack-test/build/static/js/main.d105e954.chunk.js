(this.webpackJsonpchatapp=this.webpackJsonpchatapp||[]).push([[0],{10:function(e,t,n){e.exports={root:"MessageEditor_root__n3e0Q",wrapper:"MessageEditor_wrapper__xOCsj",input:"MessageEditor_input__1picR",button:"MessageEditor_button__4nIJO",cancelText:"MessageEditor_cancelText__1L4ls",cancelButton:"MessageEditor_cancelButton__1YQUi"}},11:function(e,t,n){e.exports={root:"MessageComposer_root__28QKd",wrapper:"MessageComposer_wrapper__3_Wth",input:"MessageComposer_input__2q3_E",button:"MessageComposer_button__5bI4Y",characterLimit:"MessageComposer_characterLimit__19QPr",characterLimitExceeded:"MessageComposer_characterLimitExceeded__w8pUY"}},117:function(e,t,n){},118:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(56),s=n.n(c),u=n(5),l=n(15),o=n(57),i=n.n(o)()("http://localhost:8000"),m=n(25),p=n.n(m),_=p()({USER_ID:null}),f=p()({FETCH_ALL_MESSAGES:null,FETCH_ALL_CHANNELS:null,FETCH_ALL_USERS:null,CREATE_CHANNEL:null,CREATE_MESSAGE:null,EDIT_MESSAGE:null,CREATE_USER:null,LOG_IN:null,LOG_OUT:null}),d={LIKE:"\ud83d\udc4d",LOVE:"\u2764\ufe0f",LOL:"\ud83d\ude02"},E=p()({UPDATE_ALL_MESSAGES:null,UPDATE_ALL_CHANNELS:null,UPDATE_ALL_USERS:null}),v=Object(l.a)((function(e,t){return{activeChannelId:null,channels:[],setActiveChannelId:function(t){return e({activeChannelId:t})}}})),h=Object(u.a)(v,2),C=h[0],g=h[1],N=Object(l.a)((function(e){return{messages:[]}})),b=Object(u.a)(N,2),w=b[0],I=b[1],O=Object(l.a)((function(e){return{activeUserId:null,users:[]}})),S=Object(u.a)(O,2),L=S[0],A=S[1],x=n(1),U=n.n(x),j=n(7),M=n(9),T=n.n(M);T.a.defaults.withCredentials=!0;var y=function(e){return"http://localhost:8000".concat(e)},k=function(){var e=Object(j.a)(U.a.mark((function e(t){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.post(y("/channels"),{channelName:t});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(j.a)(U.a.mark((function e(t,n){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.post(y("/channels/".concat(t,"/messages")),{content:n});case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),W=function(){var e=Object(j.a)(U.a.mark((function e(t){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.post(y("/users"),{username:t});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(j.a)(U.a.mark((function e(t){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.post(y("/login"),{id:t});case 2:A.setState({activeUserId:t}),window.localStorage.setItem(_.USER_ID,t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(j.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.post(y("/logout"));case 2:A.setState({activeUserId:null}),window.localStorage.setItem(_.USER_ID,"");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(j.a)(U.a.mark((function e(t){var n,a,r;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.messageId,a=t.channelId,r=t.content,e.next=3,T.a.patch(y("/channels/".concat(a,"/messages/").concat(n)),{content:r});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(j.a)(U.a.mark((function e(t,n){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.post(y("/messages/".concat(t,"/reactions")),{emojiId:n});case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),G=n(58),H=n.n(G),Q=function(e){var t=e.children;return r.a.createElement("label",{className:H.a.label},t)},K=n(16),P=n(2),z=n.n(P),q=n(59),J=n.n(q),Y=function(e){var t=e.className,n=Object(K.a)(e,["className"]);return r.a.createElement("select",Object.assign({className:z()(J.a.select,t)},n))},Z=n(30),X=n.n(Z),$=function(e){e.onSubmit;var t=L((function(e){return e.users})),n=L((function(e){return e.activeUserId}));return r.a.createElement("div",{className:X.a.wrapper},r.a.createElement(Q,null,"Select User"),r.a.createElement(Y,{className:X.a.select,onChange:function(e){var t="-1"===e.currentTarget.value?null:e.currentTarget.value;D(t)},value:null==n?"":n},[{id:-1,username:"None"}].concat(t).map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.username)}))))},ee=n(31),te=n.n(ee),ne=n(60),ae=n.n(ne),re=function(e){var t=e.className,n=Object(K.a)(e,["className"]);return r.a.createElement("button",Object.assign({className:z()(ae.a.button,t)},n))},ce=n(61),se=n.n(ce),ue=r.a.forwardRef((function(e,t){var n=e.className,a=Object(K.a)(e,["className"]);return r.a.createElement("input",Object.assign({ref:t,className:z()(se.a.input,n),type:"text"},a))})),le=n(18),oe=n.n(le),ie=function(e){e.onSubmit;var t=r.a.useRef(null);return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),null!=t.current&&""!==t.current.value&&(W(t.current.value),t.current.value="")},className:oe.a.wrapper},r.a.createElement(Q,null,"Create User"),r.a.createElement("div",{className:oe.a.content},r.a.createElement(ue,{className:oe.a.input,placeholder:"Username",ref:t}),r.a.createElement(re,{className:oe.a.button,type:"submit"},"Add")))},me=function(){return r.a.createElement("div",{className:te.a.pageWrapper},r.a.createElement("div",{className:te.a.wrapper},r.a.createElement($,null),r.a.createElement(ie,null)))},pe=n(6),_e=n(17),fe=n.n(_e),de=function(e){var t,n=e.children,a=e.className,c=e.isActive,s=void 0!==c&&c,u=e.onClick,l=null==u?"span":"button";return r.a.createElement("li",{className:fe.a.listItemWrapper},r.a.createElement(l,{className:z()(fe.a.listItem,(t={},Object(pe.a)(t,fe.a.listItemInteractive,null!=u),Object(pe.a)(t,fe.a.listItemActive,s),t),a),onClick:u},n))},Ee=function(e){var t=e.children;return r.a.createElement("ul",{className:fe.a.list},t)},ve=n(32),he=n.n(ve),Ce=function(){var e=C((function(e){return e.channels})),t=C((function(e){return e.activeChannelId})),n=C((function(e){return e.setActiveChannelId}));return r.a.createElement("div",{className:he.a.wrapper},r.a.createElement(Q,null,"Channels"),r.a.createElement(Ee,null,e.map((function(e){return r.a.createElement(de,{key:e.id,isActive:t===e.id,onClick:function(){return n(e.id)}},"#",e.name)}))),r.a.createElement("ul",{className:he.a.channelList}))},ge=n(19),Ne=n.n(ge),be=function(e){e.onSubmit;var t=r.a.useRef(null);return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),null!=t.current&&""!==t.current.value&&(k(t.current.value),t.current.value="")},className:Ne.a.wrapper},r.a.createElement(Q,null,"Create Channel"),r.a.createElement("div",{className:Ne.a.inputWrapper},r.a.createElement(ue,{className:Ne.a.input,placeholder:"Channel Name",ref:t}),r.a.createElement(re,{className:Ne.a.button,type:"submit"},"+")))},we=n(63),Ie=n(10),Oe=n.n(Ie),Se=n(11),Le=n.n(Se),Ae=function(e){var t=256-e.content.length;return t>8?null:r.a.createElement("div",{className:z()(Le.a.characterLimit,Object(pe.a)({},Le.a.characterLimitExceeded,t<0))},t)},xe=function(){var e=L((function(e){return e.activeUserId})),t=function(){var e=C((function(e){return e.activeChannelId})),t=C((function(e){return e.channels}));return r.a.useMemo((function(){return t.find((function(t){return t.id===e}))}),[t,e])}(),n=r.a.useRef(null),a=null==e||null==t,c=r.a.useState(""),s=Object(u.a)(c,2),l=s[0],o=s[1];return r.a.createElement("form",{className:Le.a.root,onSubmit:function(e){if(e.preventDefault(),null!=n.current){var a=n.current.value;""!==a&&a.length<=256&&(R(t.id,n.current.value),n.current.value="",n.current.focus())}}},r.a.createElement(Ae,{content:l}),r.a.createElement("div",{className:Le.a.wrapper},r.a.createElement(ue,{className:Le.a.input,disabled:a,onChange:function(e){o(e.target.value)},placeholder:null==t?"Select a channel":null==e?"Select a user":"Message #".concat(t.name),ref:n}),r.a.createElement(re,{className:Le.a.button,type:"submit",disabled:a||l.length>256},"Send")))},Ue=function(e){var t=e.id,n=e.content,a=e.onClose,c=e.channelId,s=r.a.useRef(null),l=r.a.useState(n),o=Object(u.a)(l,2),i=o[0],m=o[1];return r.a.useLayoutEffect((function(){s.current.focus()}),[]),r.a.createElement("form",{className:Oe.a.root,onSubmit:function(){var e=Object(j.a)(U.a.mark((function e(n){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,V({messageId:t,channelId:c,content:s.current.value});case 3:a();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},r.a.createElement(Ae,{content:i}),r.a.createElement("div",{className:Oe.a.wrapper},r.a.createElement(ue,{defaultValue:n,className:Oe.a.input,onKeyDown:function(e){"Escape"===e.key&&a()},onChange:function(e){return m(e.target.value)},ref:s}),r.a.createElement(re,{className:Oe.a.button,type:"submit",disabled:n.length>256},"Save")),r.a.createElement("div",{className:Oe.a.cancelText},"ESC to"," ",r.a.createElement("button",{onClick:function(){return a()},className:Oe.a.cancelButton},"Cancel")))},je=n(8),Me=n.n(je),Te=n(62),ye=n.n(Te),ke=function(e){var t=e.messageId,n=e.emoji;return console.log(n),r.a.createElement("button",{className:ye.a.emojiButton,onClick:function(){return F(t,n)}},r.a.createElement("span",{"aria-label":"emoji",role:"img"},n))},Re=function(e){var t=e.messageId;return console.log(Object.keys(d)),Object.values(d).map((function(e){return r.a.createElement(ke,{messageId:t,emoji:e})}))},We=function(e){var t=e.content,n=e.createdAt,a=e.id,c=e.userId,s=e.channelId,l=r.a.useState(!1),o=Object(u.a)(l,2),i=o[0],m=o[1],p=L((function(e){return e.users.find((function(e){return e.id===c}))})),_=L((function(e){return e.activeUserId})),f=r.a.useMemo((function(){return new Date(n)}),[n]);return r.a.createElement("div",{className:Me.a.message},r.a.createElement("div",{className:Me.a.metadata},null==p?null:r.a.createElement("span",{className:Me.a.username},p.username),r.a.createElement("span",{className:Me.a.timestamp},Object(we.a)(f,new Date))),i?r.a.createElement(Ue,{channelId:s,id:a,content:t,onClose:function(){return m(!1)}}):t,c!==_||i?null:r.a.createElement("button",{onClick:function(){return m(!0)},className:Me.a.editButton},"Edit"))},De=function(){var e=w((function(e){return e.messages})),t=C((function(e){return e.activeChannelId})),n=r.a.useMemo((function(){return e.filter((function(e){return e.channelId===t}))}),[t,e]),a=0===n.length;return r.a.createElement("div",{className:z()(Me.a.wrapper,Object(pe.a)({},Me.a.wrapperEmpty,a))},a?r.a.createElement("div",{className:Me.a.empty},"No messages"," ",r.a.createElement("span",{"aria-label":"Sad face",role:"img"},"\ud83d\ude22")):n.map((function(e){return r.a.createElement("div",{key:e.id,className:Me.a.empty},r.a.createElement(We,{channelId:t,key:e.id,id:e.id,content:e.content,createdAt:e.createdAt,userId:e.userId}),r.a.createElement(Re,{messageId:e.id}))})))},Be=n(12),Ve=n.n(Be),Fe=function(){var e=L((function(e){return e.users})),t=L((function(e){return e.activeUserId}));return r.a.createElement("div",{className:Ve.a.wrapper},r.a.createElement(Q,null,"Users"),r.a.createElement(Ee,null,e.map((function(e){var n;return r.a.createElement(de,{className:z()(Ve.a.user,(n={},Object(pe.a)(n,Ve.a.userMe,e.id===t),Object(pe.a)(n,Ve.a.userOnline,e.isOnline),n)),key:e.id},r.a.createElement("span",{className:z()(Ve.a.statusIndicator,Object(pe.a)({},Ve.a.statusIndicatorOnline,e.isOnline))}),e.username)}))))},Ge=n(3),He=n.n(Ge),Qe=function(){var e=function(){var e=L((function(e){return e.activeUserId})),t=L((function(e){return e.users}));return r.a.useMemo((function(){return t.find((function(t){return t.id===e}))}),[e,t])}();return r.a.createElement("div",{className:He.a.wrapper},r.a.createElement("div",{className:He.a.channels},r.a.createElement("div",{className:He.a.channelsContentFixed},r.a.createElement(be,null)),r.a.createElement("div",{className:He.a.channelsWrapper},r.a.createElement(Ce,null)),null==e?null:r.a.createElement("div",{className:z()(He.a.logOutWrapper,He.a.channelsContentFixed)},r.a.createElement(Q,null,"Logged in as"),r.a.createElement("div",{className:He.a.logOutContent},r.a.createElement("div",{className:He.a.logOutUser},e.username),r.a.createElement(re,{className:He.a.logOutButton,onClick:B},"Log Out")))),r.a.createElement("div",{className:He.a.chat},r.a.createElement("div",{className:He.a.chatWrapper},r.a.createElement(De,null)),r.a.createElement("div",{className:He.a.messageComposerWrapper},r.a.createElement(xe,null))),r.a.createElement("div",{className:He.a.users},r.a.createElement(Fe,null)))},Ke=function(){var e=L((function(e){return e.activeUserId})),t=L((function(e){return e.users})),n=r.a.useMemo((function(){return t.some((function(t){return t.id===e}))}),[t,e]);return null!=e&&n?r.a.createElement(Qe,null):r.a.createElement(me,null)};n(117);i.on(E.UPDATE_ALL_CHANNELS,(function(e){var t=g.getState();g.setState({channels:e,activeChannelId:null==t.activeChannelId&&e.length>0?e[0].id:t.activeChannelId})})),i.emit(f.FETCH_ALL_CHANNELS),i.on(E.UPDATE_ALL_MESSAGES,(function(e){return I.setState({messages:e})})),i.emit(f.FETCH_ALL_MESSAGES),i.on(E.UPDATE_ALL_USERS,(function(e){A.setState({users:e})})),i.emit(f.FETCH_ALL_USERS);var Pe=window.localStorage.getItem(_.USER_ID);null!=Pe&&""!==Pe&&D(Pe),s.a.render(r.a.createElement(Ke,null),document.getElementById("root"))},12:function(e,t,n){e.exports={wrapper:"UsersList_wrapper__34Qtc",user:"UsersList_user__3toL9",userMe:"UsersList_userMe__2uejX",userOnline:"UsersList_userOnline__10-Bj",statusIndicator:"UsersList_statusIndicator___r2_s",statusIndicatorOnline:"UsersList_statusIndicatorOnline__1kcYT"}},17:function(e,t,n){e.exports={list:"List_list__12_ST",listItem:"List_listItem__2bt8g",listItemInteractive:"List_listItemInteractive__3tOgC",listItemActive:"List_listItemActive__2o0uz"}},18:function(e,t,n){e.exports={wrapper:"UserAccountCreator_wrapper__1E4Dp",content:"UserAccountCreator_content__2cGNz",input:"UserAccountCreator_input__TTQm3",button:"UserAccountCreator_button__QohE6"}},19:function(e,t,n){e.exports={wrapper:"ChannelCreator_wrapper__1GNGV",inputWrapper:"ChannelCreator_inputWrapper__sxBmP",input:"ChannelCreator_input__1Sbct",button:"ChannelCreator_button__2rOGY"}},3:function(e,t,n){e.exports={wrapper:"Chat_wrapper__3KRe_",channels:"Chat_channels__1sawh",channelsWrapper:"Chat_channelsWrapper__1LJjV",channelsContentFixed:"Chat_channelsContentFixed__16_xO",logOutWrapper:"Chat_logOutWrapper__WFlwc",logOutContent:"Chat_logOutContent__2j-KK",logOutUser:"Chat_logOutUser__qyTzq",logOutButton:"Chat_logOutButton__3_-Rl",hover:"Chat_hover__2ZEk9",chat:"Chat_chat__MqTQc",chatWrapper:"Chat_chatWrapper__2qcnf",messageComposerWrapper:"Chat_messageComposerWrapper__F_cz9",users:"Chat_users__2ZVL1"}},30:function(e,t,n){e.exports={wrapper:"UserAccountSelector_wrapper__14CwZ",select:"UserAccountSelector_select__2dD_M"}},31:function(e,t,n){e.exports={pageWrapper:"Authorization_pageWrapper__1INK9"}},32:function(e,t,n){e.exports={wrapper:"ChannelsList_wrapper__2TzLn"}},58:function(e,t,n){e.exports={label:"Label_label__hnL6C"}},59:function(e,t,n){e.exports={select:"Select_select__3wCDr"}},60:function(e,t,n){e.exports={button:"Button_button__2Ce79"}},61:function(e,t,n){e.exports={input:"TextInput_input__1RIOw"}},62:function(e,t,n){e.exports={emojiButton:"ReactionIcon_emojiButton__1a3x2"}},64:function(e,t,n){e.exports=n(118)},8:function(e,t,n){e.exports={wrapper:"MessageViewer_wrapper__1JMu6",wrapperEmpty:"MessageViewer_wrapperEmpty__15wVh",message:"MessageViewer_message__1fhVk",metadata:"MessageViewer_metadata__sBKos",username:"MessageViewer_username__1OUd4",timestamp:"MessageViewer_timestamp__3rhWf",editButton:"MessageViewer_editButton__2UjSQ"}},97:function(e,t){}},[[64,1,2]]]);
//# sourceMappingURL=main.d105e954.chunk.js.map
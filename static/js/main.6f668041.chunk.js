(this["webpackJsonpkeycard-cash-sign-test"]=this["webpackJsonpkeycard-cash-sign-test"]||[]).push([[0],{196:function(e,n,t){e.exports=t(466)},201:function(e,n,t){},202:function(e,n,t){},214:function(e,n){},216:function(e,n){},230:function(e,n){},231:function(e,n){},255:function(e,n){},257:function(e,n){},273:function(e,n){},391:function(e,n){},393:function(e,n){},399:function(e,n){},466:function(e,n,t){"use strict";t.r(n);var a,c=t(15),r=t.n(c),s=t(192),i=t.n(s),o=(t(201),t(194)),u=t(195),m=(t(202),t(17)),l=t.n(m),p=t(68),d=t(69),y=t(193),g=t.n(y),C=window.ethereum;var f=function(){var e=Object(p.a)(l.a.mark((function e(n){var t,c,r,s,i,o,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n("calling net_version"),e.next=4,a.eth.net.getId();case 4:if(t=e.sent,3===(c=parseInt(t))){e.next=9;break}throw"you can use this test app only on ropsten";case 9:return n("network id",c),n("calling eth_accounts"),e.next=13,a.eth.getAccounts();case 13:return r=e.sent,s=r[0],n("accounts",r.join(", ")),n("calling keycard_signTypedData"),i={types:{EIP712Domain:[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],Redeem:[{name:"blockNumber",type:"uint256"},{name:"blockHash",type:"bytes32"},{name:"receiver",type:"address"},{name:"code",type:"bytes32"}]},primaryType:"Redeem",domain:{name:"KeycardERC20Bucket",version:"1",chainId:c,verifyingContract:"0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC"},message:{blockNumber:1,blockHash:"0x0000000000000000000000000000000000000000",code:"0x0000000000000000000000000000000000000000",receiver:s}},e.next=20,C.request({method:"keycard_signTypedData",params:JSON.stringify(i)});case 20:o=e.sent,n("signature: ",o),u=Object(d.recoverTypedSignature)({data:i,sig:o}),n("signer: ",u),e.next=29;break;case 26:e.prev=26,e.t0=e.catch(0),n("error",e.t0,e.t0.message);case 29:case"end":return e.stop()}}),e,null,[[0,26]])})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=Object(p.a)(l.a.mark((function e(n){var t,c,r,s,i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n("calling net_version"),e.next=4,a.eth.net.getId();case 4:if(t=e.sent,3===(c=parseInt(t))){e.next=9;break}throw"you can use this test app only on ropsten";case 9:return n("network id",c),n("calling eth_accounts"),e.next=13,a.eth.getAccounts();case 13:return r=e.sent,r[0],n("accounts",r.join(", ")),n("calling keycard_signTypedData"),"1000000000000000000",s={types:{EIP712Domain:[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],Payment:[{name:"blockNumber",type:"uint256"},{name:"blockHash",type:"bytes32"},{name:"currency",type:"address"},{name:"amount",type:"uint256"},{name:"to",type:"address"}]},primaryType:"Payment",domain:{name:"KeycardWallet",version:"1",chainId:c,verifyingContract:"0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC"},message:{blockNumber:1,blockHash:"0x0000000000000000000000000000000000000000",currency:"0xc55cf4b03948d7ebc8b9e8bad92643703811d162",to:"0x0000000000000000000000000000000000000000",amount:"1000000000000000000"}},e.next=21,C.request({method:"keycard_signTypedData",params:JSON.stringify(s)});case 21:i=e.sent,n("signature: ",i),o=Object(d.recoverTypedSignature)({data:s,sig:i}),n("signer: ",o),e.next=30;break;case 27:e.prev=27,e.t0=e.catch(0),n("error",e.t0,e.t0.message);case 30:case"end":return e.stop()}}),e,null,[[0,27]])})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=Object(p.a)(l.a.mark((function e(n){var t,c,r,s,i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n("calling net_version"),e.next=4,a.eth.net.getId();case 4:if(t=e.sent,3===(c=parseInt(t))){e.next=9;break}throw"you can use this test app only on ropsten";case 9:return n("network id",c),n("calling eth_accounts"),e.next=13,a.eth.getAccounts();case 13:return r=e.sent,r[0],n("accounts",r.join(", ")),n("calling keycard_signTypedData"),s={types:{EIP712Domain:[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],GenericMessage:[{name:"from",type:"string"},{name:"to",type:"string"},{name:"text",type:"string"}]},primaryType:"GenericMessage",domain:{name:"GenericMessage",version:"1",chainId:c,verifyingContract:"0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC"},message:{from:"Foo",to:"Bar",text:"Hello World"}},e.next=20,C.request({method:"keycard_signTypedData",params:JSON.stringify(s)});case 20:i=e.sent,n("signature: ",i),o=Object(d.recoverTypedSignature)({data:s,sig:i}),n("signer: ",o),e.next=29;break;case 26:e.prev=26,e.t0=e.catch(0),n("error",e.t0,e.t0.message);case 29:case"end":return e.stop()}}),e,null,[[0,26]])})));return function(n){return e.apply(this,arguments)}}();var b=function(){var e=Object(c.useState)([]),n=Object(u.a)(e,2),t=n[0],s=n[1],i=Object(c.useCallback)((function(e){var n=e;console.log(e);for(var t=arguments.length,a=new Array(t>1?t-1:0),c=1;c<t;c++)a[c-1]=arguments[c];(a||[]).forEach((function(e){e&&(n="".concat(n," ").concat(JSON.stringify(e))),console.log(e)})),s((function(e){return[].concat(Object(o.a)(e),[{time:(new Date).toLocaleDateString("default",{hour:"numeric",minute:"numeric",second:"numeric"}),text:n}])})),window.scrollTo(0,document.body.scrollHeight)}),[s]);return Object(c.useEffect)((function(){!function(e){C&&C.enable().then((function(){a=new g.a(C),e("ethereum enabled")})).catch((function(n){e(JSON.stringify(n.message))}))}(i)}),[i]),r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"header"},r.a.createElement("button",{onClick:function(e){e.preventDefault(),s([]),h(i)},className:"btn"},"Sign Payment"),r.a.createElement("button",{onClick:function(e){e.preventDefault(),s([]),f(i)},className:"btn"},"Sign Redeem"),r.a.createElement("button",{onClick:function(e){e.preventDefault(),s([]),v(i)},className:"btn"},"Sign Generic")),r.a.createElement("div",{className:"messages"},t.map((function(e,n){return r.a.createElement("div",{key:n,className:"message"},r.a.createElement("div",{className:"time"},e.time),r.a.createElement("div",{className:"text"},e.text))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[196,1,2]]]);
//# sourceMappingURL=main.6f668041.chunk.js.map
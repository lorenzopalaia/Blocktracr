(function(){"use strict";var t={7377:function(t,e,a){var o=a(9242),n=a(3396);function i(t,e,a,o,i,r){const s=(0,n.up)("CoinsBar"),l=(0,n.up)("Navbar"),c=(0,n.up)("router-view"),d=(0,n.up)("Footer");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(s),(0,n.Wm)(l),(0,n.Wm)(c),(0,n.Wm)(d)],64)}var r=a(7139);const s={key:0,class:"coinsBar"},l={class:"m-0"},c=["src"],d={class:"text-white d-inline p-2"};function u(t,e,a,o,i,u){const f=(0,n.up)("router-link");return i.coins?((0,n.wg)(),(0,n.iD)("div",s,[(0,n._)("ul",l,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.coins,(t=>((0,n.wg)(),(0,n.iD)("li",{class:"d-inline p-2",key:t.symbol},[(0,n._)("img",{style:{width:"14px"},src:t.image},null,8,c),(0,n.Wm)(f,{class:"text-decoration-none",to:{name:"coin",params:{id:t.id}}},{default:(0,n.w5)((()=>[(0,n._)("p",d,(0,r.zw)(t.symbol.toUpperCase()),1)])),_:2},1032,["to"]),((0,n.wg)(),(0,n.iD)("p",{class:"text-white d-inline p-1 coinPrice",key:t.current_price},(0,r.zw)(t.current_price)+"$ ",1))])))),128))])])):(0,n.kq)("",!0)}var f=a(6265),v=a.n(f),p={name:"CoinsBar",data(){return{coins:[]}},methods:{async getData(){let t="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100",e={headers:{Accept:"application/json"}};const a=await v().get(t,e);this.coins=a.data}},mounted(){this.getData(),setInterval(this.getData,6e4)}},g=a(89);const m=(0,g.Z)(p,[["render",u],["__scopeId","data-v-6ca94d5e"]]);var b=m;const h=t=>((0,n.dD)("data-v-72284822"),t=t(),(0,n.Cn)(),t),k={class:"navbar navbar-expand-lg navbar-dark fw-bold sticky-top"},_={class:"container"},w=h((()=>(0,n._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,n._)("span",{class:"navbar-toggler-icon"})],-1))),y={class:"collapse navbar-collapse",id:"navbarNav"},x={class:"navbar-nav",id:"menu"},L={class:"nav-item"},C=(0,n.Uk)("HOME"),O={class:"nav-item"},D=(0,n.Uk)("LIVE STATS"),A={class:"nav-item"},E=(0,n.Uk)("DASHBOARD"),S={class:"navbar-nav ms-auto"},T={class:"nav-item"},j=(0,n.Uk)("LOGIN"),U=(0,n.Uk)("LOGOUT"),q={class:"nav-item"},H=(0,n.Uk)("REGISTRATI"),I=(0,n.uE)('<div class="modal" id="logout" data-v-72284822><div class="modal-dialog" data-v-72284822><div class="modal-content text-white" data-v-72284822><div style="background-color:rgb(20, 15, 68);" class="modal-body justify-content-center text-center" data-v-72284822><p class="m-0 sequel-font-small" data-v-72284822>Ti sei disconnesso correttamente</p></div></div></div></div>',1);function W(t,e,a,o,i,r){const s=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("nav",k,[(0,n._)("div",_,[w,(0,n._)("div",y,[(0,n._)("ul",x,[(0,n._)("li",L,[(0,n.Wm)(s,{class:"text-decoration-none",to:"/"},{default:(0,n.w5)((()=>[C])),_:1})]),(0,n._)("li",O,[(0,n.Wm)(s,{class:"text-decoration-none",to:"/livestats"},{default:(0,n.w5)((()=>[D])),_:1})]),(0,n._)("li",A,[(0,n.Wm)(s,{class:"text-decoration-none",to:"/dashboard"},{default:(0,n.w5)((()=>[E])),_:1})])]),(0,n._)("ul",S,[(0,n._)("li",T,[i.isLog?((0,n.wg)(),(0,n.j4)(s,{key:1,class:"text-decoration-none","data-bs-toggle":"modal","data-bs-target":"#logout",to:"/",onClick:e[0]||(e[0]=t=>r.logout())},{default:(0,n.w5)((()=>[U])),_:1})):((0,n.wg)(),(0,n.j4)(s,{key:0,class:"text-decoration-none",to:"/login"},{default:(0,n.w5)((()=>[j])),_:1}))]),(0,n._)("li",q,[i.isLog?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(s,{key:0,class:"text-decoration-none",to:"/register"},{default:(0,n.w5)((()=>[H])),_:1}))])])])])]),I],64)}var B={name:"Navbar",data(){return{isLog:!1}},methods:{logout(){localStorage.clear(),sessionStorage.clear(),this.isLog=!1,this.emitter.emit("loggedOut"),this.$router.push("/")},loginLogoutEventHandler(){(localStorage.getItem("token")||sessionStorage.getItem("token"))&&(this.isLog=!0),this.emitter.on("loggedIn",(()=>{this.isLog=!0})),this.emitter.on("loggedOut",(()=>{this.isLog=!1}))}},mounted(){this.loginLogoutEventHandler()}};const N=(0,g.Z)(B,[["render",W],["__scopeId","data-v-72284822"]]);var R=N;const z=t=>((0,n.dD)("data-v-38849482"),t=t(),(0,n.Cn)(),t),P={class:"footer mt-4"},G={class:"container"},F=z((()=>(0,n._)("p",{class:"fs-1 pt-2"},"BLOCKTRACR",-1))),Z={class:"row"},K={class:"col"},M=z((()=>(0,n._)("p",{class:"footer-col-header"},"Navigazione",-1))),Y={class:"p-0 list-unstyled"},V={class:"footer-link pb-2"},$=(0,n.Uk)("Home"),J={class:"footer-link pb-2"},Q=(0,n.Uk)("Live Stats"),X={class:"footer-link pb-2"},tt=(0,n.Uk)("Dashboard"),et={class:"footer-link pb-2"},at=(0,n.Uk)("Login"),ot={class:"footer-link pb-2"},nt=(0,n.Uk)("Register"),it=(0,n.uE)('<div class="col" data-v-38849482><p class="footer-col-header" data-v-38849482>Links</p><ul class="p-0 list-unstyled" data-v-38849482><li data-v-38849482><a target="_blank" href="https://github.com/lorenzopalaia" class="text-decoration-none" data-v-38849482><p class="footer-link pb-2 m-0" data-v-38849482>GitHub Lorenzo</p></a></li><li data-v-38849482><a target="_blank" href="https://www.linkedin.com/in/lorenzo-palaia-7177a5202/" class="text-decoration-none" data-v-38849482><p class="footer-link pb-2 m-0" data-v-38849482>LinkedIn Lorenzo</p></a></li><li data-v-38849482><a target="_blank" href="https://github.com/giorgiokr" class="text-decoration-none" data-v-38849482><p class="footer-link pb-2 m-0" data-v-38849482>GitHub Giorgio</p></a></li></ul></div><div class="col" data-v-38849482><p class="footer-col-header" data-v-38849482>Riguardo Blocktracr</p><p class="footer-text pb-2" data-v-38849482> A cura di Apa Giorgio e Palaia Lorenzo. Blocktracr è un progetto realizzato per il corso di Linguaggi e Tecnologie per il Web dell&#39;Università La Sapienza di Roma, A.A. 2021/2022 </p></div>',2);function rt(t,e,a,o,i,r){const s=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",P,[(0,n._)("div",G,[F,(0,n._)("div",Z,[(0,n._)("div",K,[M,(0,n._)("ul",Y,[(0,n._)("li",V,[(0,n.Wm)(s,{class:"router-link",to:"/"},{default:(0,n.w5)((()=>[$])),_:1})]),(0,n._)("li",J,[(0,n.Wm)(s,{class:"router-link",to:"/livestats"},{default:(0,n.w5)((()=>[Q])),_:1})]),(0,n._)("li",X,[(0,n.Wm)(s,{class:"router-link",to:"/dashboard"},{default:(0,n.w5)((()=>[tt])),_:1})]),(0,n._)("li",et,[(0,n.Wm)(s,{class:"router-link",to:"/login"},{default:(0,n.w5)((()=>[at])),_:1})]),(0,n._)("li",ot,[(0,n.Wm)(s,{class:"router-link",to:"/register"},{default:(0,n.w5)((()=>[nt])),_:1})])])]),it])])])}var st={name:"Footer"};const lt=(0,g.Z)(st,[["render",rt],["__scopeId","data-v-38849482"]]);var ct=lt,dt={name:"App",components:{CoinsBar:b,Navbar:R,Footer:ct}};const ut=(0,g.Z)(dt,[["render",i]]);var ft=ut,vt=a(678);const pt={class:"home"};function gt(t,e,a,o,i,r){const s=(0,n.up)("Home");return(0,n.wg)(),(0,n.iD)("div",pt,[(0,n.Wm)(s)])}var mt=a(3608),bt=a(1255),ht=a(5397),kt=a(6793);const _t=t=>((0,n.dD)("data-v-610cf44e"),t=t(),(0,n.Cn)(),t),wt={class:"home"},yt={class:"container"},xt={class:"row"},Lt={class:"col text-center text-md-start"},Ct=_t((()=>(0,n._)("p",{class:"fs-1 sequel-font-big"},"BLOCKTRACR",-1))),Ot=_t((()=>(0,n._)("p",{class:"sequel-font-small"},[(0,n.Uk)(" Tieni traccia dell'andamento del tuo portafoglio crypto."),(0,n._)("br"),(0,n.Uk)("Analizza ogni crypto presente sul mercato tramite un'interfaccia semplice e interattiva ")],-1))),Dt={key:0,type:"button",class:"btn btn-primary btn-lg sequel-font-big"},At=(0,n.Uk)("Registrati"),Et={key:1,type:"button",class:"btn btn-outline-primary btn-lg m-2 sequel-font-big"},St=(0,n.Uk)("Login"),Tt={key:2,type:"button",class:"btn btn-primary btn-lg sequel-font-big"},jt=(0,n.Uk)("Dashboard"),Ut=_t((()=>(0,n._)("div",{class:"col d-none d-sm-block d-sm-none d-md-block"},[(0,n._)("img",{class:"img-fluid float-end",src:mt,alt:"eth"})],-1))),qt=(0,n.uE)('<div class="container mt-4" data-v-610cf44e><p class="fs-3 text-center sequel-font-big" data-v-610cf44e>PERCHÉ BLOCKTRACR?</p><p class="text-center sequel-font-small" data-v-610cf44e> I vantaggi di tracciare l&#39;andamento del tuo portafoglio crypto sono molteplici </p><div data-v-610cf44e><div class="row" data-v-610cf44e><div class="col-sm pt-4 d-flex justify-content-center" data-v-610cf44e><div class="card" data-v-610cf44e><img src="'+bt+'" class="card-img-top" alt="plot" data-v-610cf44e><div class="card-body" data-v-610cf44e><p class="card-text sequel-font-small" data-v-610cf44e> Grafico dell&#39;andamento temporale </p></div></div></div><div class="col-sm pt-4 d-flex justify-content-center" data-v-610cf44e><div class="card" data-v-610cf44e><img src="'+ht+'" class="card-img-top" alt="transaction" data-v-610cf44e><div class="card-body" data-v-610cf44e><p class="card-text sequel-font-small" data-v-610cf44e>Raccolta delle allocazioni del wallet</p></div></div></div><div class="col-sm pt-4 d-flex justify-content-center" data-v-610cf44e><div class="card" data-v-610cf44e><img src="'+kt+'" class="card-img-top" alt="profit" data-v-610cf44e><div class="card-body" data-v-610cf44e><p class="card-text sequel-font-small" data-v-610cf44e> Statistiche dettagliate su profitti e perdite </p></div></div></div></div></div></div>',1);function Ht(t,e,a,o,i,r){const s=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",wt,[(0,n._)("div",yt,[(0,n._)("div",xt,[(0,n._)("div",Lt,[Ct,Ot,i.isLog?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("button",Dt,[(0,n.Wm)(s,{class:"text-decoration-none text-white",to:"/register"},{default:(0,n.w5)((()=>[At])),_:1})])),i.isLog?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("button",Et,[(0,n.Wm)(s,{class:"text-decoration-none",to:"/login"},{default:(0,n.w5)((()=>[St])),_:1})])),i.isLog?((0,n.wg)(),(0,n.iD)("button",Tt,[(0,n.Wm)(s,{class:"text-decoration-none text-white",to:"/dashboard"},{default:(0,n.w5)((()=>[jt])),_:1})])):(0,n.kq)("",!0)]),Ut]),qt])])}var It={name:"Home",data(){return{isLog:!1}},methods:{loginLogoutEventHandler(){(localStorage.getItem("token")||sessionStorage.getItem("token"))&&(this.isLog=!0),this.emitter.on("loggedIn",(()=>{this.isLog=!0})),this.emitter.on("loggedOut",(()=>{this.isLog=!1}))}},mounted(){this.loginLogoutEventHandler()}};const Wt=(0,g.Z)(It,[["render",Ht],["__scopeId","data-v-610cf44e"]]);var Bt=Wt,Nt={name:"HomeView",components:{Home:Bt}};const Rt=(0,g.Z)(Nt,[["render",gt]]);var zt=Rt;const Pt=[{path:"/",name:"home",component:zt},{path:"/login",name:"login",component:()=>a.e(627).then(a.bind(a,6627))},{path:"/register",name:"register",component:()=>a.e(313).then(a.bind(a,2313))},{path:"/dashboard",name:"dashboard",component:()=>Promise.all([a.e(294),a.e(569)]).then(a.bind(a,3569))},{path:"/livestats",name:"livestats",component:()=>a.e(851).then(a.bind(a,5851))},{path:"/coin/:id",name:"coin",component:()=>Promise.all([a.e(294),a.e(932)]).then(a.bind(a,1932))}],Gt=(0,vt.p7)({history:(0,vt.PO)("/Blocktracr/"),routes:Pt});var Ft=Gt,Zt=a(1373);const Kt=(0,Zt.Z)(),Mt=(0,o.ri)(ft);Mt.use(Ft),Mt.config.globalProperties.emitter=Kt,Mt.mount("#app")},3608:function(t,e,a){t.exports=a.p+"img/eth.fe725817.svg"},1255:function(t,e,a){t.exports=a.p+"img/plot.fca1462a.svg"},6793:function(t,e,a){t.exports=a.p+"img/profit.595d527e.svg"},5397:function(t,e,a){t.exports=a.p+"img/transaction.7507d04e.svg"}},e={};function a(o){var n=e[o];if(void 0!==n)return n.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(e,o,n,i){if(!o){var r=1/0;for(d=0;d<t.length;d++){o=t[d][0],n=t[d][1],i=t[d][2];for(var s=!0,l=0;l<o.length;l++)(!1&i||r>=i)&&Object.keys(a.O).every((function(t){return a.O[t](o[l])}))?o.splice(l--,1):(s=!1,i<r&&(r=i));if(s){t.splice(d--,1);var c=n();void 0!==c&&(e=c)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[o,n,i]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,o){return a.f[o](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/"+t+"."+{294:"b8d24e84",313:"29f1482d",569:"501ff764",627:"76cf5b69",851:"c4dc0746",932:"4c0185fb"}[t]+".js"}}(),function(){a.miniCssF=function(t){return"css/"+t+"."+{313:"9ba9385a",569:"040b2079",627:"00fb0329",851:"7c9af128",932:"2eadd8e1"}[t]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="progetto-ltw:";a.l=function(o,n,i,r){if(t[o])t[o].push(n);else{var s,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==e+i){s=u;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",e+i),s.src=o),t[o]=[n];var f=function(e,a){s.onerror=s.onload=null,clearTimeout(v);var n=t[o];if(delete t[o],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((function(t){return t(a)})),e)return e(a)},v=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/Blocktracr/"}(),function(){var t=function(t,e,a,o){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var i=function(i){if(n.onerror=n.onload=null,"load"===i.type)a();else{var r=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=r,l.request=s,n.parentNode.removeChild(n),o(l)}};return n.onerror=n.onload=i,n.href=e,document.head.appendChild(n),n},e=function(t,e){for(var a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var n=a[o],i=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(i===t||i===e))return n}var r=document.getElementsByTagName("style");for(o=0;o<r.length;o++){n=r[o],i=n.getAttribute("data-href");if(i===t||i===e)return n}},o=function(o){return new Promise((function(n,i){var r=a.miniCssF(o),s=a.p+r;if(e(r,s))return n();t(o,s,n,i)}))},n={143:0};a.f.miniCss=function(t,e){var a={313:1,569:1,627:1,851:1,932:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=o(t).then((function(){n[t]=0}),(function(e){throw delete n[t],e})))}}(),function(){var t={143:0};a.f.j=function(e,o){var n=a.o(t,e)?t[e]:void 0;if(0!==n)if(n)o.push(n[2]);else{var i=new Promise((function(a,o){n=t[e]=[a,o]}));o.push(n[2]=i);var r=a.p+a.u(e),s=new Error,l=function(o){if(a.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var i=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",s.name="ChunkLoadError",s.type=i,s.request=r,n[1](s)}};a.l(r,l,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,i,r=o[0],s=o[1],l=o[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(l)var d=l(a)}for(e&&e(o);c<r.length;c++)i=r[c],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(d)},o=self["webpackChunkprogetto_ltw"]=self["webpackChunkprogetto_ltw"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(7377)}));o=a.O(o)})();
//# sourceMappingURL=app.32c2e1c5.js.map
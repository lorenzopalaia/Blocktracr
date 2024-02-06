import{_ as l,f as _,a as d,c as o,b as t,t as s,F as h,r as m,d as a,n as p,e as x,g as u,o as r}from"./index-wvXsM7t1.js";const g={data(){return{coin:null}},methods:{onMountedGetCoin(){fetch(`http://localhost:3000/crypto/${this.$route.params.id}`).then(c=>c.json()).then(c=>{this.coin=c})},formatPrice:_,firstSentence:d},mounted(){this.onMountedGetCoin()}},v={key:0},f={class:"flex flex-row mt-32 items-center"},w=["src","alt"],k={class:"flex flex-col"},y={class:"flex flex-row items-end"},b={class:"text-8xl mr-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"},C={class:"text-4xl text-white"},V={class:"flex flex-row"},M=["innerHTML"],H={class:"flex flex-row gap-8 mt-8 stats bg-transparent"},S={class:"stat w-1/3"},z=t("div",{class:"stat-title text-white"},"Price",-1),B={class:"stat-value text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"},L={class:"stat-desc text-white"},F={class:"stat w-1/3"},N=t("div",{class:"stat-title text-white"},"Market Cap",-1),P={class:"stat-value text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"},j={class:"stat-desc text-white"},T={class:"stat w-1/3"},G=t("div",{class:"stat-title text-white"},"Volume",-1),R={class:"stat-value text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"},D={class:"stat-desc text-white"},E=t("p",{class:"text-2xl text-white mt-8"},"Sentiment Score",-1),U={class:"flex flex-row justify-between w-full mt-4"},q={class:"text-success"},A={class:"text-error"},I=["value"],J=u('<div class="flex flex-row justify-between w-full mt-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4"><path class="fill-success" d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4"><path class="fill-error" d="M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384H96c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H32C14.3 96 0 110.3 0 128V352c0 17.7 14.3 32 32 32z"></path></svg></div>',1);function K(c,O,Q,W,e,i){return e.coin?(r(),o("div",v,[t("div",f,[t("img",{src:e.coin.image.large,alt:e.coin.name,class:"w-28 h-28 mr-4"},null,8,w),t("div",k,[t("div",y,[t("h1",b,s(e.coin.name),1),t("div",C,s(e.coin.symbol.toUpperCase()),1)]),t("div",V,[(r(!0),o(h,null,m(e.coin.categories.reverse().slice(0,5),n=>(r(),o("div",{class:"badge badge-primary mr-4",key:n},s(n),1))),128))])])]),e.coin.description.en?(r(),o("h2",{key:0,class:"text-xl text-white mt-8",innerHTML:i.firstSentence(e.coin.description.en)},null,8,M)):a("",!0),t("div",H,[t("div",S,[z,t("div",B," $ "+s(e.coin.market_data.current_price.usd.toLocaleString("us")),1),t("div",L,[t("span",{class:p(e.coin.market_data.price_change_percentage_24h_in_currency.usd>=0?"text-success":"text-error")},s(e.coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2))+"%",3),x(" "+s(e.coin.market_data.price_change_percentage_24h_in_currency.usd>=0?"higher":"lower")+" than yesterday ",1)])]),t("div",F,[N,t("div",P," $ "+s(i.formatPrice(e.coin.market_data.market_cap.usd)),1),t("div",j," Rank "+s(e.coin.market_data.market_cap_rank)+" in Market Cap ",1)]),t("div",T,[G,t("div",R," $ "+s(i.formatPrice(e.coin.market_data.total_volume.usd)),1),t("div",D,s((e.coin.market_data.total_volume.usd/e.coin.market_data.market_cap.usd).toFixed(2))+"% Volume to Market Cap Ratio ",1)])]),E,t("div",U,[t("p",q,s(e.coin.sentiment_votes_up_percentage)+"%",1),t("p",A,s(e.coin.sentiment_votes_down_percentage)+"%",1)]),t("progress",{class:"progress w-full bg-error progress-success",value:e.coin.sentiment_votes_up_percentage,max:"100"},null,8,I),J])):a("",!0)}const Y=l(g,[["render",K]]);export{Y as default};
"use strict";(self["webpackChunkprogetto_ltw"]=self["webpackChunkprogetto_ltw"]||[]).push([[313],{2313:function(e,t,s){s.r(t),s.d(t,{default:function(){return A}});var a=s(3396);const l={class:"register"};function n(e,t,s,n,r,o){const i=(0,a.up)("Register");return(0,a.wg)(),(0,a.iD)("div",l,[(0,a.Wm)(i)])}var r=s(9242);const o=e=>((0,a.dD)("data-v-5687262d"),e=e(),(0,a.Cn)(),e),i={class:"container"},d={class:"row d-flex justify-content-center align-items-center"},c={class:"col-12 col-md-8 col-lg-6 col-xl-5"},m={class:"card rounded"},u={class:"card-body text-center",id:"card"},p={class:"mb-md-5 mt-md-4 pb-5"},g={name:"formLogin"},f=o((()=>(0,a._)("p",{class:"sequel-font-small text-white fs-2"},"Registrati",-1))),w=o((()=>(0,a._)("p",{class:"sequel-font-small text-white"},"Inserisci Username, Email e Password",-1))),h={class:"form-outline"},_={key:0,class:"alert alert-danger mt-4",role:"alert"},v={class:"mt-3 sequel-font-small text-white"},y=(0,a.Uk)(" Hai già un account? "),b=(0,a.Uk)("Login");function q(e,t,s,l,n,o){const q=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("div",d,[(0,a._)("div",c,[(0,a._)("div",m,[(0,a._)("div",u,[(0,a._)("div",p,[(0,a._)("form",g,[f,w,(0,a._)("div",h,[(0,a.wy)((0,a._)("input",{type:"text",class:"form-control form-control-lg bg-transparent sequel-font-small",placeholder:"Username",id:"name","onUpdate:modelValue":t[0]||(t[0]=e=>n.name=e),required:""},null,512),[[r.nr,n.name]]),(0,a.wy)((0,a._)("input",{type:"email",class:"form-control form-control-lg mt-4 bg-transparent sequel-font-small",placeholder:"Email",id:"email","onUpdate:modelValue":t[1]||(t[1]=e=>n.email=e),required:""},null,512),[[r.nr,n.email]]),(0,a.wy)((0,a._)("input",{type:"password",class:"form-control form-control-lg mt-4 bg-transparent sequel-font-small",placeholder:"Password",id:"password","onUpdate:modelValue":t[2]||(t[2]=e=>n.password=e),required:""},null,512),[[r.nr,n.password]]),!0===n.emailAlreadyInUse?((0,a.wg)(),(0,a.iD)("div",_," Email già in uso ")):(0,a.kq)("",!0)]),(0,a._)("a",{href:"#",class:"btn btn-primary sequel-font-big mt-4",onClick:t[3]||(t[3]=(...e)=>o.signup&&o.signup(...e))}," Invia ")]),(0,a._)("div",null,[(0,a._)("p",v,[y,(0,a.Wm)(q,{class:"sequel-font-big text-primary text-decoration-none",to:"/login"},{default:(0,a.w5)((()=>[b])),_:1})])])])])])])])])}var k=s(6265),U=s.n(k),x={name:"Register",data(){return{name:"",email:"",password:"",emailAlreadyInUse:!1}},methods:{async signup(){let e={name:this.name,email:this.email,password:this.password};""!==this.name&&""!==this.email&&""!==this.password&&await U().post("http://localhost:5000/register",e).then((e=>{200===e.status&&this.$router.push("/login")}),(e=>{this.emailAlreadyInUse=!0,console.log(e.response)}))}}},I=s(89);const R=(0,I.Z)(x,[["render",q],["__scopeId","data-v-5687262d"]]);var C=R,D={name:"RegisterVue",components:{Register:C}};const V=(0,I.Z)(D,[["render",n]]);var A=V}}]);
//# sourceMappingURL=313.29f1482d.js.map
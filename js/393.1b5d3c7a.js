"use strict";(self["webpackChunkvue3_firebase"]=self["webpackChunkvue3_firebase"]||[]).push([[393],{393:function(e,l,t){t.r(l),t.d(l,{default:function(){return O}});var s=t(252),i=t(963),a=t(867),o=t(828),n=t(262),r=t(218),d=t(120);const c={class:"min-w-screen min-h-screen bg-white flex items-center justify-center px-5 py-5"},u={class:"bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden",style:{"max-width":"1000px"}},x={class:"md:flex w-full"},p={class:"w-full md:w-1/2 py-10 px-5 md:px-10"},f=(0,s._)("div",{class:"text-center mb-2"},[(0,s._)("h1",{class:"font-bold text-3xl text-gray-900"},"Sign up"),(0,s._)("p",null,"Enter your information to register")],-1),m=(0,s._)("div",{class:"flex -mx-3"},null,-1),v={class:"flex -mx-3"},g={class:"w-full px-3 mb-5"},y=(0,s._)("label",{for:"",class:"text-xs font-semibold px-1"},"Email",-1),b={class:"flex"},_=(0,s._)("div",{class:"w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"},[(0,s._)("i",{class:"mdi mdi-email-outline text-gray-400 text-lg"})],-1),w={class:"flex -mx-3"},h={class:"w-full px-3 mb-5"},k=(0,s._)("label",{for:"",class:"text-xs font-semibold px-1"},"User name",-1),C={class:"flex"},U=(0,s._)("div",{class:"w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"},[(0,s._)("i",{class:"mdi mdi-email-outline text-gray-400 text-lg"})],-1),j={class:"flex -mx-3"},z={class:"w-full px-3 mb-6"},H=(0,s._)("label",{for:"",class:"text-xs font-semibold px-1"},"Password",-1),D={class:"flex relative"},q=(0,s._)("div",{class:"w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"},[(0,s._)("i",{class:"mdi mdi-lock-outline text-gray-400 text-lg"})],-1),V=["type"],Z={key:0,class:"fa fa-eye","aria-hidden":"true"},A={key:1,class:"fa fa-eye-slash","aria-hidden":"true"},E={class:"flex -mx-3"},R={class:"w-full px-3 mb-6"},S=(0,s._)("label",{for:"",class:"text-xs font-semibold px-1"},"Confirm password",-1),Y={class:"flex relative"},G=(0,s._)("div",{class:"w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"},[(0,s._)("i",{class:"mdi mdi-lock-outline text-gray-400 text-lg"})],-1),J=["type"],L={key:0,class:"fa fa-eye","aria-hidden":"true"},P={key:1,class:"fa fa-eye-slash","aria-hidden":"true"},T=(0,s._)("img",{src:a,alt:"google icon"},null,-1),W=[T],X=(0,s._)("span",{class:"text-sm font-medium text-gray-800 group-hover:text-white"},"Google",-1),B={class:"mt-6 text-sm font-display font-semibold text-gray-700 text-center"},F=(0,s.Uk)(" Already have an Account ? "),I=(0,s.Uk)("Login"),K=(0,s._)("div",{class:"hidden md:block w-1/1 bg-white-500 py-10 px-10"},[(0,s._)("img",{src:o,alt:"Team"})],-1);var M={name:"Register",setup(e){const l=(0,n.iH)(""),t=(0,n.iH)(""),a=(0,n.iH)(""),o=(0,n.iH)(""),T=(0,n.iH)(!1),M=(0,n.iH)(!1),N=()=>{(0,r.Xb)((0,r.v0)(),l.value,t.value).then((e=>{console.log("Successfully registration"),d.Z.push("/profile")})).catch((e=>{console.log(e.code)}))},O=()=>{const e=new r.hJ;(0,r.rh)((0,r.v0)(),e).then((e=>{console.log(e.user),d.Z.push("/profile")})).catch((e=>{console.log(e)}))};return(e,n)=>{const r=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",c,[(0,s._)("div",u,[(0,s._)("div",x,[(0,s._)("div",p,[f,(0,s._)("div",null,[m,(0,s._)("div",v,[(0,s._)("div",g,[y,(0,s._)("div",b,[_,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":n[0]||(n[0]=e=>l.value=e),type:"email",class:"w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500",placeholder:"example@mail.com"},null,512),[[i.nr,l.value]])])])]),(0,s._)("div",w,[(0,s._)("div",h,[k,(0,s._)("div",C,[U,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":n[1]||(n[1]=e=>o.value=e),type:"email",class:"w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500",placeholder:"username"},null,512),[[i.nr,o.value]])])])]),(0,s._)("div",j,[(0,s._)("div",z,[H,(0,s._)("div",D,[q,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":n[2]||(n[2]=e=>t.value=e),type:T.value?"text":"password",class:"w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500",placeholder:"************"},null,8,V),[[i.YZ,t.value]]),(0,s._)("div",{class:"absolute right-5 top-2",onClick:n[3]||(n[3]=e=>T.value=!T.value),tabindex:"-1"},[T.value?((0,s.wg)(),(0,s.iD)("i",Z)):(0,s.kq)("",!0),T.value?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("i",A))])])])]),(0,s._)("div",E,[(0,s._)("div",R,[S,(0,s._)("div",Y,[G,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":n[4]||(n[4]=e=>a.value=e),type:M.value?"text":"password",class:"w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500",placeholder:"************"},null,8,J),[[i.YZ,a.value]]),(0,s._)("div",{class:"absolute right-5 top-2",onClick:n[5]||(n[5]=e=>M.value=!M.value),tabindex:"-1"},[M.value?((0,s.wg)(),(0,s.iD)("i",L)):(0,s.kq)("",!0),M.value?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("i",P))])])])]),(0,s._)("div",{class:"flex -mx-3"},[(0,s._)("div",{class:"w-full px-3 mb-5"},[(0,s._)("button",{onClick:N,class:"block w-full max-w-xs mx-auto bg-zinc-900 hover:bg-zinc-700 text-white rounded-lg px-2 py-1 font-semibold"},"Register")])]),(0,s._)("a",{onClick:O,href:"#",class:"flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"},[(0,s._)("span",{onClick:O,class:"w-5 h-5 text-gray-800 fill-current group-hover:text-white"},W),X]),(0,s._)("div",B,[F,(0,s.Wm)(r,{to:"/sign-in",class:"cursor-pointer text-indigo-600 hover:text-indigo-800"},{default:(0,s.w5)((()=>[I])),_:1})])])]),K])])])}}};const N=M;var O=N},867:function(e,l,t){e.exports=t.p+"img/google.6de91356.svg"},828:function(e,l,t){e.exports=t.p+"img/team.ab5d8bf8.svg"}}]);
//# sourceMappingURL=393.1b5d3c7a.js.map
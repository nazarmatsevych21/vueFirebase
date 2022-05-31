"use strict";(self["webpackChunkvue3_firebase"]=self["webpackChunkvue3_firebase"]||[]).push([[285],{285:function(e,l,t){t.r(l),t.d(l,{default:function(){return N}});var s=t(252),a=t(963),o=t(577),i=t(867),n=t(828),r=t(262),c=t(218),u=t(907),d=t(120);const m={class:"min-w-screen min-h-screen bg-white flex items-center justify-center px-5 py-5"},x={class:"bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden",style:{"max-width":"1000px"}},p={class:"md:flex w-full"},f={class:"w-full md:w-1/2 py-10 px-5 md:px-10"},g=(0,s._)("div",{class:"text-center mb-2"},[(0,s._)("h1",{class:"font-bold text-3xl text-gray-900"},"Sign in"),(0,s._)("p",null,"Enter your information to sign in into your account")],-1),v=(0,s._)("div",{class:"flex -mx-3"},null,-1),b={class:"flex -mx-3"},h={class:"w-full px-3 mb-5"},w=(0,s._)("label",{class:"text-xs font-semibold px-1"},"Email",-1),y={class:"flex"},_=(0,s._)("div",{class:"w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"},[(0,s._)("i",{class:"mdi mdi-email-outline text-gray-400 text-lg"})],-1),k={class:"flex -mx-3"},z={class:"w-full px-3 mb-1"},C=(0,s._)("label",{class:"text-xs font-semibold px-1"},"Password",-1),D={class:"flex relative"},j=(0,s._)("div",{class:"w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"},[(0,s._)("i",{class:"mdi mdi-lock-outline text-gray-400 text-lg"})],-1),H=["type"],U={key:0,class:"fa fa-eye","aria-hidden":"true"},q={key:1,class:"fa fa-eye-slash","aria-hidden":"true"},I=(0,s._)("div",{class:"flex items-center space-x-2 py-4"},[(0,s._)("input",{type:"checkbox",id:"remember",class:"w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"}),(0,s._)("label",{for:"remember",class:"text-sm font-semibold text-gray-500"},"Remember me")],-1),R={key:0,class:"text-red-500"},S=(0,s._)("span",{class:"w-5 h-5 text-gray-800 fill-current group-hover:text-white"},[(0,s._)("img",{src:i,alt:"google icon"})],-1),Z=(0,s._)("span",{class:"text-sm font-medium text-gray-800 group-hover:text-white"},"Google",-1),E=[S,Z],T={class:"mt-6 text-sm font-display font-semibold text-gray-700 text-center"},V=(0,s.Uk)(" Don't have an Account ? "),A=(0,s.Uk)("Register "),G=(0,s._)("div",{class:"hidden md:block w-1/1 bg-white-500 py-10 px-10"},[(0,s._)("img",{src:n,alt:"Team"})],-1);var J={name:"SignIn",setup(e){(0,u.oR)();const l=(0,r.iH)(""),t=(0,r.iH)(""),i=(0,r.iH)(!1),n=(0,r.iH)(),S=()=>{"admin"===l.value&&"12345"===t.value&&(l.value="admin@gmail.com",t.value="123456"),(0,c.e5)((0,c.v0)(),l.value,t.value).then((e=>{console.log("Successfully signed in"),d.Z.push("/profile")})).catch((e=>{switch(console.log(e.code),e.code){case"auth/invalid-email":n.value="Invalid email";break;case"auth/user-not-found":n.value="No account with that emaul found";break;case"auth/wrong-password":n.value="Incorrect password";break;default:n.value="The username or password you entered is incorrect";break}}))},Z=()=>{const e=new c.hJ;(0,c.rh)((0,c.v0)(),e).then((e=>{console.log(e.user),d.Z.push("/profile")})).catch((e=>{console.log(e)}))};return(e,r)=>{const c=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",m,[(0,s._)("div",x,[(0,s._)("div",p,[(0,s._)("div",f,[g,(0,s._)("div",null,[v,(0,s._)("div",b,[(0,s._)("div",h,[w,(0,s._)("div",y,[_,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":r[0]||(r[0]=e=>l.value=e),type:"email",class:"w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500",placeholder:"example@mail.com"},null,512),[[a.nr,l.value]])])])]),(0,s._)("div",k,[(0,s._)("div",z,[C,(0,s._)("div",D,[j,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":r[1]||(r[1]=e=>t.value=e),type:i.value?"text":"password",class:"w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500",placeholder:"************"},null,8,H),[[a.YZ,t.value]]),(0,s._)("div",{class:"absolute right-5 top-2",onClick:r[2]||(r[2]=e=>i.value=!i.value),tabindex:"-1"},[i.value?((0,s.wg)(),(0,s.iD)("i",U)):(0,s.kq)("",!0),i.value?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("i",q))])])])]),I,n.value?((0,s.wg)(),(0,s.iD)("p",R,(0,o.zw)(n.value),1)):(0,s.kq)("",!0),(0,s._)("div",{class:"flex -mx-3"},[(0,s._)("div",{class:"w-full px-3 mb-5"},[(0,s._)("button",{onClick:S,class:"block w-full max-w-xs mx-auto bg-zinc-900 hover:bg-zinc-700 text-white rounded-lg px-2 py-1 font-semibold"}," Login ")])]),(0,s._)("a",{onClick:Z,href:"#",class:"flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"},E),(0,s._)("div",T,[V,(0,s.Wm)(c,{to:"/register",class:"cursor-pointer text-indigo-600 hover:text-indigo-800"},{default:(0,s.w5)((()=>[A])),_:1})])])]),G])])])}}};const L=J;var N=L},867:function(e,l,t){e.exports=t.p+"img/google.6de91356.svg"},828:function(e,l,t){e.exports=t.p+"img/team.ab5d8bf8.svg"}}]);
//# sourceMappingURL=285.44675646.js.map
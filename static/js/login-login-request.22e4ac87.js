(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login-login-request"],{"15bc":function(t,e,n){},"1a62":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var r=/^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/,i=/^1[0-9]{10}$/,a=/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/},"214f":function(t,e,n){"use strict";var r=n("32e9"),i=n("2aba"),a=n("79e5"),s=n("be13"),o=n("2b4c");t.exports=function(t,e,n){var c=o(t),u=n(s,c,""[t]),l=u[0],d=u[1];a((function(){var e={};return e[c]=function(){return 7},7!=""[t](e)}))&&(i(String.prototype,t,l),r(RegExp.prototype,c,2==e?function(t,e){return d.call(t,this,e)}:function(t){return d.call(t,this)}))}},"22a8":function(t,e,n){},2764:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact_popup"},[t._m(0),n("div",{staticClass:"contact_box"},[n("div",[n("van-icon",{attrs:{name:"phone"}}),t._v(" "+t._s(t.mobile))],1),n("div",{staticClass:"contact_btn"},[n("a",{attrs:{href:"tel:"+t.mobile}},[t._v("联系店家")])])])])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"contact_box contact_top"},[r("div",[t._v("微信长按识别店主二维码")]),r("div",[r("img",{attrs:{src:n("ea79"),alt:"店主二维码"}})])])}],a={name:"md-kefu",props:{qcCode:String,mobile:String}},s=a,o=(n("6c52"),n("2877")),c=Object(o["a"])(s,r,i,!1,null,"3e900558",null);e["a"]=c.exports},"4bc4":function(t,e,n){},"6c52":function(t,e,n){"use strict";var r=n("22a8"),i=n.n(r);i.a},"79e3":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md_field",class:{md_field_hasIcon:!!t.icon,md_field_isError:t.isError}},[t.icon?n("van-icon",{staticClass:"md_feld_icon",attrs:{name:t.icon}}):t._e(),n("div",{staticClass:"md_field_control"},[n("input",t._g(t._b({attrs:{type:t.type},domProps:{value:t.value}},"input",t.$attrs,!1),t.listeners))]),n("div",[t._t("rightIcon",[n("van-icon",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],attrs:{name:t.rightIcon},on:{click:t.rightClick}})])],2)],1)},i=[],a=(n("8e6e"),n("ac6a"),n("456d"),n("bd86"));function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(n,!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c={name:"md-field",props:{value:{},type:{type:String,default:"text"},rightIcon:String,icon:String,isError:Boolean},computed:{listeners:function(){return o({},this.$listeners,{input:this.onInput})}},methods:{onInput:function(t){this.$emit("input",t.target.value)},rightClick:function(t){this.$emit("right-click",t)}}},u=c,l=(n("b596"),n("2877")),d=Object(l["a"])(u,r,i,!1,null,"2a5f428c",null);e["a"]=d.exports},"8a58":function(t,e,n){"use strict";n("68ef"),n("09fe"),n("4d75")},"90ac":function(t,e,n){"use strict";n.r(e);var r,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("md-field-group",[n("md-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{icon:"username",placeholder:"随便输","right-icon":"clear-full",name:"user","data-vv-as":"帐号"},on:{"right-click":t.clearText},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}}),n("md-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{icon:"lock",placeholder:"随便输",type:t.visiblePass?"text":"password","right-icon":t.visiblePass?"eye-open":"eye-close","data-vv-as":"密码",name:"password"},on:{"right-click":function(e){t.visiblePass=!t.visiblePass}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),n("div",{staticClass:"clearfix"},[n("div",{staticClass:"float-r"},[n("router-link",{attrs:{to:"/login/forget"}},[t._v("忘记密码")])],1)]),n("van-button",{attrs:{size:"large",type:"danger",loading:t.isLogining},on:{click:t.loginSubmit}},[t._v("登录")])],1),n("div",{staticClass:"register clearfix"},[n("div",{staticClass:"float-l connect"},[n("span",{on:{click:function(e){t.showKefu=!0}}},[t._v("联系客服")])]),n("div",{staticClass:"float-r"},[n("router-link",{attrs:{to:"/login/registerGetCode"}},[t._v("免费注册")])],1)]),n("van-popup",{model:{value:t.showKefu,callback:function(e){t.showKefu=e},expression:"showKefu"}},[n("md-kefu",{attrs:{mobile:"16454193338"}})],1)],1)},a=[],s=(n("8a58"),n("e41f")),o=(n("7f7f"),n("bd86")),c=(n("a481"),n("e7e5"),n("d399")),u=(n("96cf"),n("3b8d")),l=n("79e3"),d=n("e2bd"),f=n("2764"),p=n("c24f"),v=n("4097"),h=n("1a62"),m={name:"login-request",data:function(){return{account:"",password:"",visiblePass:!1,showKefu:!1,isLogining:!1}},methods:{clearText:function(){this.account=""},validate:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$validator.validate();case 2:if(e=t.sent,e){t.next=7;break}throw n=this.errors.items[0].msg,Object(c["a"])(n),new Error("表单验证: ".concat(n));case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),login:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(){var e,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.getLoginData(),t.next=3,this.$reqGet(p["d"],e);case 3:n=t.sent,r=n.data,Object(v["c"])({Authorization:r.data.access_token});case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),loginSubmit:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.isLogining=!0,t.prev=1,t.next=4,this.validate();case 4:return t.next=6,this.login();case 6:return t.next=8,this.getUserProfile();case 8:this.isLogining=!1,t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](1),console.log(t.t0.message),this.isLogining=!1;case 15:case"end":return t.stop()}}),t,this,[[1,11]])})));function e(){return t.apply(this,arguments)}return e}(),getUserProfile:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$reqGet(p["g"]);case 2:e=t.sent,n=e.data.data,Object(v["c"])({avatar:n.avatar,user_id:n.user_id,background_image:n.background_image,nick_name:n.nick_name}),this.routerRedirect();case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),routerRedirect:function(){var t=this.$route.query;this.$router.replace({name:t.redirect||"home",query:t})},getLoginData:function(){var t,e=this.password,n=this.getUserType(this.account);return t={},Object(o["a"])(t,n,this.account),Object(o["a"])(t,"password",e),t},getUserType:function(t){var e=h["c"].test(t)?"mobile":h["a"].test(t)?"email":"username";return e}},components:(r={},Object(o["a"])(r,l["a"].name,l["a"]),Object(o["a"])(r,d["a"].name,d["a"]),Object(o["a"])(r,f["a"].name,f["a"]),Object(o["a"])(r,s["a"].name,s["a"]),r)},g=m,b=(n("d5d0"),n("2877")),w=Object(b["a"])(g,i,a,!1,null,"7445e112",null);e["default"]=w.exports},a481:function(t,e,n){n("214f")("replace",2,(function(t,e,n){return[function(r,i){"use strict";var a=t(this),s=void 0==r?void 0:r[e];return void 0!==s?s.call(r,a,i):n.call(String(a),r,i)},n]}))},b3c8:function(t,e,n){},b596:function(t,e,n){"use strict";var r=n("b3c8"),i=n.n(r);i.a},c24f:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"e",(function(){return i})),n.d(e,"g",(function(){return a})),n.d(e,"f",(function(){return s})),n.d(e,"h",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return l}));var r="/user-login",i="",a="/user-profile",s="",o="",c="/address",u="/address-default",l="/moreGoods"},d5d0:function(t,e,n){"use strict";var r=n("4bc4"),i=n.n(r);i.a},e2bd:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"field_group"},[t._t("default")],2)},i=[],a={name:"md-field-group"},s=a,o=(n("f973"),n("2877")),c=Object(o["a"])(s,r,i,!1,null,"2f86ad46",null);e["a"]=c.exports},e41f:function(t,e,n){"use strict";var r=n("d282"),i=n("a142"),a=n("6605"),s=n("ad06"),o=Object(r["a"])("popup"),c=o[0],u=o[1];e["a"]=c({mixins:[a["a"]],props:{round:Boolean,duration:Number,closeable:Boolean,transition:String,safeAreaInsetBottom:Boolean,closeIcon:{type:String,default:"cross"},closeIconPosition:{type:String,default:"top-right"},position:{type:String,default:"center"},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},beforeCreate:function(){var t=this,e=function(e){return function(n){return t.$emit(e,n)}};this.onClick=e("click"),this.onOpened=e("opened"),this.onClosed=e("closed")},render:function(){var t,e=arguments[0];if(this.shouldRender){var n=this.round,r=this.position,a=this.duration,o=this.transition||("center"===r?"van-fade":"van-popup-slide-"+r),c={};return Object(i["b"])(a)&&(c.transitionDuration=a+"s"),e("transition",{attrs:{name:o},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[e("div",{directives:[{name:"show",value:this.value}],style:c,class:u((t={round:n},t[r]=r,t["safe-area-inset-bottom"]=this.safeAreaInsetBottom,t)),on:{click:this.onClick}},[this.slots(),this.closeable&&e(s["a"],{attrs:{role:"button",tabindex:"0",name:this.closeIcon},class:u("close-icon",this.closeIconPosition),on:{click:this.close}})])])}}})},ea79:function(t,e,n){t.exports=n.p+"static/img/qc_code.3da1f691.png"},f973:function(t,e,n){"use strict";var r=n("15bc"),i=n.n(r);i.a}}]);
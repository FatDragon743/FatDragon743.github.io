(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["scan-module-scan-list","scan-scan-tabs-tabbar-inventory-check"],{"02de":function(t,e,a){"use strict";function i(t){return"none"===window.getComputedStyle(t).display||null===t.offsetParent}a.d(e,"a",(function(){return i}))},2994:function(t,e,a){"use strict";a("68ef"),a("c0c2")},"2b28":function(t,e,a){"use strict";a("68ef"),a("7c7f")},"2bdd":function(t,e,a){"use strict";var i=a("d282"),n=a("02de"),l=a("5fbe"),s=a("a8c1"),o=a("543e"),r=Object(i["a"])("list"),c=r[0],u=r[1],d=r[2];e["a"]=c({mixins:[Object(l["a"])((function(t){this.scroller||(this.scroller=Object(s["c"])(this.$el)),t(this.scroller,"scroll",this.check)}))],model:{prop:"loading"},props:{error:Boolean,loading:Boolean,finished:Boolean,errorText:String,loadingText:String,finishedText:String,immediateCheck:{type:Boolean,default:!0},offset:{type:Number,default:300},direction:{type:String,default:"down"}},mounted:function(){this.immediateCheck&&this.check()},watch:{loading:"check",finished:"check"},methods:{check:function(){var t=this;this.$nextTick((function(){if(!(t.loading||t.finished||t.error)){var e,a=t.$el,i=t.scroller,l=t.offset,s=t.direction;e=i.getBoundingClientRect?i.getBoundingClientRect():{top:0,bottom:i.innerHeight};var o=e.bottom-e.top;if(!o||Object(n["a"])(a))return!1;var r=!1,c=t.$refs.placeholder.getBoundingClientRect();r="up"===s?c.top-e.top<=l:c.bottom-e.bottom<=l,r&&(t.$emit("input",!0),t.$emit("load"))}}))},clickErrorText:function(){this.$emit("update:error",!1),this.check()}},render:function(){var t=arguments[0],e=t("div",{ref:"placeholder",class:u("placeholder")});return t("div",{class:u(),attrs:{role:"feed","aria-busy":this.loading}},["down"===this.direction?this.slots():e,this.loading&&t("div",{class:u("loading"),key:"loading"},[this.slots("loading")||t(o["a"],{attrs:{size:"16"}},[this.loadingText||d("loading")])]),this.finished&&this.finishedText&&t("div",{class:u("finished-text")},[this.finishedText]),this.error&&this.errorText&&t("div",{on:{click:this.clickErrorText},class:u("error-text")},[this.errorText]),"up"===this.direction?this.slots():e])}})},"40af":function(t,e,a){"use strict";a.r(e);var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("van-row",{attrs:{align:"center"}},[a("van-col",{staticStyle:{height:"110px"},attrs:{span:"24",offset:"2"}},[a("van-button",{staticClass:"scan-button",attrs:{plain:"",type:"primary",round:"",size:"large"},on:{click:function(e){return t.toScan()}}},[t._v("点击扫码")])],1),a("van-col",{attrs:{span:"24"}},[a("van-list",{staticClass:"data-list"},t._l(t.inventoryData,(function(t,e){return a("van-cell",{key:e,attrs:{border:"","title-class":"list-title","value-class":"list-v-l","label-class":"list-v-l",title:t.title,size:"large",label:"批次： "+t.label,value:"数量： "+t.value}})})),1)],1),a("van-col",{attrs:{span:"24"}},[a("van-divider",{style:{color:"#1989fa",borderColor:"#1989fa",padding:"0 0px"},attrs:{"content-position":"left"}},[t._v("以下是扫码记录")])],1),a("van-col",{attrs:{span:"24"}},[a("van-list",t._l(t.scanData,(function(e,i){return a("van-cell",{key:i,attrs:{border:"","title-class":"list-title","value-class":"list-v-l","label-class":"list-v-l",title:e.title,size:"large"}},[a("template",{slot:"label"},[a("div",[t._v(t._s("箱码："+e.label1))]),a("div",[t._v(t._s("瓶码："+e.label2))]),a("div",[t._v(t._s("批次："+e.label3))])])],2)})),1)],1)],1)],1)},l=[],s=a("bd86"),o=(a("2b28"),a("9ed2")),r=(a("c194"),a("7744")),c=(a("5f1a"),a("a3e2")),u=(a("66b9"),a("b650")),d=(a("4d48"),a("d1e1")),f=(a("81e6"),a("9ffb")),b=(a("7f7f"),a("2994"),a("2bdd")),h={name:"scan-list",props:{},data:function(){return{inventoryData:[{title:"天然博士针叶樱桃粉固体饮料 I 型（30袋）",value:"2",label:"20170701A"},{title:"Life-Space益生菌固体饮料（婴幼儿型）（24袋）",value:"4",label:"20170101A"},{title:"Life-Space益生菌固体饮料（儿童型）（30袋）",value:"5",label:"20170704A"}],scanData:[{title:"天然博士针叶樱桃粉固体饮料 I 型（30袋）",label1:"7070124465465456465456",label2:"564546546465465",label3:"20170701A"},{title:"Life-Space益生菌固体饮料（婴幼儿型）（24袋）",label1:"7070124465465456465456",label2:"564546546465465",label3:"20170101A"},{title:"Life-Space益生菌固体饮料（儿童型）（30袋）",label1:"7070124465465456465456",label2:"564546546465465",label3:"20170704A"}]}},activated:function(){console.log("in activated!");var t=localStorage.getItem("tmpScanResult");if(console.log(t),""!=t){var e={title:t,label1:t,label2:t,label3:t};this.scanData.push(e),localStorage.removeItem("tmpScanResult")}},methods:{toScan:function(){this.$router.push({name:"barcodes"})}},components:(i={},Object(s["a"])(i,b["a"].name,b["a"]),Object(s["a"])(i,f["a"].name,f["a"]),Object(s["a"])(i,d["a"].name,d["a"]),Object(s["a"])(i,u["a"].name,u["a"]),Object(s["a"])(i,c["a"].name,c["a"]),Object(s["a"])(i,r["a"].name,r["a"]),Object(s["a"])(i,o["a"].name,o["a"]),i)},p=h,g=(a("cbbd"),a("2877")),v=Object(g["a"])(p,n,l,!1,null,"2f598444",null);e["default"]=v.exports},"4d48":function(t,e,a){"use strict";a("68ef"),a("bf60")},"5f1a":function(t,e,a){"use strict";a("68ef"),a("09fe"),a("9b7e")},"7b0a":function(t,e,a){},"7c7f":function(t,e,a){},"81e6":function(t,e,a){"use strict";a("68ef"),a("7b0a")},"8f96":function(t,e,a){},"9b7e":function(t,e,a){},"9ed2":function(t,e,a){"use strict";var i=a("2638"),n=a.n(i),l=a("d282"),s=a("ba31"),o=Object(l["a"])("divider"),r=o[0],c=o[1];function u(t,e,a,i){var l;return t("div",n()([{attrs:{role:"separator"},style:{borderColor:e.borderColor},class:c((l={dashed:e.dashed,hairline:e.hairline},l["content-"+e.contentPosition]=a.default,l))},Object(s["b"])(i,!0)]),[a.default&&a.default()])}u.props={dashed:Boolean,hairline:{type:Boolean,default:!0},contentPosition:{type:String,default:"center"}},e["a"]=r(u)},"9ffb":function(t,e,a){"use strict";var i=a("d282"),n=Object(i["a"])("col"),l=n[0],s=n[1];e["a"]=l({props:{span:[Number,String],offset:[Number,String],tag:{type:String,default:"div"}},computed:{gutter:function(){return this.$parent&&Number(this.$parent.gutter)||0},style:function(){var t=this.gutter/2+"px";return this.gutter?{paddingLeft:t,paddingRight:t}:{}}},methods:{onClick:function(t){this.$emit("click",t)}},render:function(){var t,e=arguments[0],a=this.span,i=this.offset;return e(this.tag,{style:this.style,class:s((t={},t[a]=a,t["offset-"+i]=i,t)),on:{click:this.onClick}},[this.slots()])}})},a3e2:function(t,e,a){"use strict";var i=a("2638"),n=a.n(i),l=a("d282"),s=a("ba31"),o=a("b1d2"),r=a("ad06"),c=Object(l["a"])("tag"),u=c[0],d=c[1];function f(t,e,a,i){var l,c,u=e.type,f=e.mark,b=e.plain,h=e.color,p=e.round,g=e.size,v=b?"color":"backgroundColor",m=(l={},l[v]=h,l);e.textColor&&(m.color=e.textColor);var y={mark:f,plain:b,round:p};g&&(y[g]=g);var k=t("span",n()([{style:m,class:[d([y,u]),(c={},c[o["e"]]=b,c)]},Object(s["b"])(i,!0)]),[a.default&&a.default(),e.closeable&&t(r["a"],{attrs:{name:"cross"},class:d("close"),on:{click:function(){Object(s["a"])(i,"close")}}})]);return e.closeable?t("transition",{attrs:{name:"van-fade"}},[k]):k}f.props={size:String,mark:Boolean,color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean,type:{type:String,default:"default"}},e["a"]=u(f)},bf60:function(t,e,a){},c0c2:function(t,e,a){},cbbd:function(t,e,a){"use strict";var i=a("8f96"),n=a.n(i);n.a},d1e1:function(t,e,a){"use strict";var i=a("d282"),n=Object(i["a"])("row"),l=n[0],s=n[1];e["a"]=l({props:{type:String,align:String,justify:String,tag:{type:String,default:"div"},gutter:{type:[Number,String],default:0}},methods:{onClick:function(t){this.$emit("click",t)}},render:function(){var t,e=arguments[0],a=this.align,i=this.justify,n="flex"===this.type,l="-"+Number(this.gutter)/2+"px",o=this.gutter?{marginLeft:l,marginRight:l}:{};return e(this.tag,{style:o,class:s((t={flex:n},t["align-"+a]=n&&a,t["justify-"+i]=n&&i,t)),on:{click:this.onClick}},[this.slots()])}})}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home-tabbar-home-sign-board-copy"],{"01f4":function(t,e,o){t.exports=o.p+"static/img/index_collect.71ec0f96.png"},"0289":function(t,e,o){"use strict";var n=o("38fa"),s=o.n(n);s.a},"38fa":function(t,e,o){},"39f2":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"signboard"},[o("img",{attrs:{src:t.boardUrl,height:t.signboardHeight,width:"100%"}}),o("div",{staticClass:"store_opacity clearfix"},[o("div",{staticClass:"float-l"},[t._v(t._s(t.storeName))]),o("div",{staticClass:"float-r store_collect isCollect",on:{click:function(e){t.showCollect=!0}}},[o("van-icon",{attrs:{name:"shoucang-full"}}),o("span",[t._v("收藏")])],1)]),o("van-popup",{staticStyle:{"background-color":"transparent"},attrs:{position:"top"},model:{value:t.showCollect,callback:function(e){t.showCollect=e},expression:"showCollect"}},[o("img",{attrs:{src:t.showCollect&&t.collectImg,width:"100%",alt:"右上角收藏"},on:{click:function(e){t.showCollect=!1}}})])],1)},s=[],i=o("bd86"),a=(o("7f7f"),o("8a58"),o("e41f")),c=o("01f4"),r=o.n(c),l={name:"sign-board",props:{boardUrl:{type:String,required:!0},storeName:{type:String,required:!0}},data:function(){var t=document.body.clientWidth||document.documentElement.clientWidth,e=t?2*t/3:250;return{signboardHeight:e,showCollect:!1,collectImg:r.a}},components:Object(i["a"])({},a["a"].name,a["a"])},d=l,u=(o("0289"),o("2877")),f=Object(u["a"])(d,n,s,!1,null,"dd58f35a",null);e["default"]=f.exports},"8a58":function(t,e,o){"use strict";o("68ef"),o("09fe"),o("4d75")},e41f:function(t,e,o){"use strict";var n=o("d282"),s=o("a142"),i=o("6605"),a=o("ad06"),c=Object(n["a"])("popup"),r=c[0],l=c[1];e["a"]=r({mixins:[i["a"]],props:{round:Boolean,duration:Number,closeable:Boolean,transition:String,safeAreaInsetBottom:Boolean,closeIcon:{type:String,default:"cross"},closeIconPosition:{type:String,default:"top-right"},position:{type:String,default:"center"},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},beforeCreate:function(){var t=this,e=function(e){return function(o){return t.$emit(e,o)}};this.onClick=e("click"),this.onOpened=e("opened"),this.onClosed=e("closed")},render:function(){var t,e=arguments[0];if(this.shouldRender){var o=this.round,n=this.position,i=this.duration,c=this.transition||("center"===n?"van-fade":"van-popup-slide-"+n),r={};return Object(s["b"])(i)&&(r.transitionDuration=i+"s"),e("transition",{attrs:{name:c},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[e("div",{directives:[{name:"show",value:this.value}],style:r,class:l((t={round:o},t[n]=n,t["safe-area-inset-bottom"]=this.safeAreaInsetBottom,t)),on:{click:this.onClick}},[this.slots(),this.closeable&&e(a["a"],{attrs:{role:"button",tabindex:"0",name:this.closeIcon},class:l("close-icon",this.closeIconPosition),on:{click:this.close}})])])}}})}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["items-search","items-search-search-tag"],{1146:function(t,e,i){},"214f":function(t,e,i){"use strict";var n=i("32e9"),r=i("2aba"),s=i("79e5"),a=i("be13"),o=i("2b4c");t.exports=function(t,e,i){var c=o(t),l=i(a,c,""[t]),u=l[0],h=l[1];s((function(){var e={};return e[c]=function(){return 7},7!=""[t](e)}))&&(r(String.prototype,t,u),n(RegExp.prototype,c,2==e?function(t,e){return h.call(t,this,e)}:function(t){return h.call(t,this)}))}},"24a7":function(t,e,i){},"28a5":function(t,e,i){i("214f")("split",2,(function(t,e,n){"use strict";var r=i("aae3"),s=n,a=[].push,o="split",c="length",l="lastIndex";if("c"=="abbc"[o](/(b)*/)[1]||4!="test"[o](/(?:)/,-1)[c]||2!="ab"[o](/(?:ab)*/)[c]||4!="."[o](/(.?)(.?)/)[c]||"."[o](/()()/)[c]>1||""[o](/.?/)[c]){var u=void 0===/()??/.exec("")[1];n=function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!r(t))return s.call(i,t,e);var n,o,h,f,d,b=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,v=void 0===e?4294967295:e>>>0,m=new RegExp(t.source,p+"g");u||(n=new RegExp("^"+m.source+"$(?!\\s)",p));while(o=m.exec(i)){if(h=o.index+o[0][c],h>g&&(b.push(i.slice(g,o.index)),!u&&o[c]>1&&o[0].replace(n,(function(){for(d=1;d<arguments[c]-2;d++)void 0===arguments[d]&&(o[d]=void 0)})),o[c]>1&&o.index<i[c]&&a.apply(b,o.slice(1)),f=o[0][c],g=h,b[c]>=v))break;m[l]===o.index&&m[l]++}return g===i[c]?!f&&m.test("")||b.push(""):b.push(i.slice(g)),b[c]>v?b.slice(0,v):b}}else"0"[o](void 0,0)[c]&&(n=function(t,e){return void 0===t&&0===e?[]:s.call(this,t,e)});return[function(i,r){var s=t(this),a=void 0==i?void 0:i[e];return void 0!==a?a.call(i,s,r):n.call(String(s),i,r)},n]}))},"32d7":function(t,e,i){"use strict";i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return s}));var n=i("a142");function r(){return!n["d"]&&/android/.test(navigator.userAgent.toLowerCase())}function s(){return!n["d"]&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}},"4c7e":function(t,e,i){"use strict";var n=i("24a7"),r=i.n(n);r.a},"565f":function(t,e,i){"use strict";var n=i("2638"),r=i.n(n),s=i("1988"),a=i("ad06"),o=i("7744"),c=i("dfaf"),l=i("1325"),u=i("a8fa"),h=i("d282"),f=i("a142"),d=i("ea8e"),b=Object(h["a"])("field"),p=b[0],g=b[1];e["a"]=p({inheritAttrs:!1,props:Object(s["a"])({},c["a"],{error:Boolean,readonly:Boolean,autosize:[Boolean,Object],leftIcon:String,rightIcon:String,clearable:Boolean,labelClass:null,labelWidth:[Number,String],labelAlign:String,inputAlign:String,errorMessage:String,errorMessageAlign:String,showWordLimit:Boolean,type:{type:String,default:"text"}}),data:function(){return{focused:!1}},watch:{value:function(){this.$nextTick(this.adjustSize)}},mounted:function(){this.format(),this.$nextTick(this.adjustSize)},computed:{showClear:function(){return this.clearable&&this.focused&&""!==this.value&&Object(f["b"])(this.value)&&!this.readonly},listeners:function(){var t=Object(s["a"])({},this.$listeners,{input:this.onInput,keypress:this.onKeypress,focus:this.onFocus,blur:this.onBlur});return delete t.click,t},labelStyle:function(){var t=this.labelWidth;if(t)return{width:Object(d["a"])(t)}}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},format:function(t){if(void 0===t&&(t=this.$refs.input),t){var e=t,i=e.value,n=this.$attrs.maxlength;return"number"===this.type&&Object(f["b"])(n)&&i.length>n&&(i=i.slice(0,n),t.value=i),i}},onInput:function(t){t.target.composing||this.$emit("input",this.format(t.target))},onFocus:function(t){this.focused=!0,this.$emit("focus",t),this.readonly&&this.blur()},onBlur:function(t){this.focused=!1,this.$emit("blur",t),Object(u["a"])()},onClick:function(t){this.$emit("click",t)},onClickLeftIcon:function(t){this.$emit("click-left-icon",t)},onClickRightIcon:function(t){this.$emit("click-right-icon",t)},onClear:function(t){Object(l["c"])(t),this.$emit("input",""),this.$emit("clear",t)},onKeypress:function(t){if("number"===this.type){var e=t.keyCode,i=-1===String(this.value).indexOf("."),n=e>=48&&e<=57||46===e&&i||45===e;n||Object(l["c"])(t)}"search"===this.type&&13===t.keyCode&&this.blur(),this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){t.style.height="auto";var e=t.scrollHeight;if(Object(f["c"])(this.autosize)){var i=this.autosize,n=i.maxHeight,r=i.minHeight;n&&(e=Math.min(e,n)),r&&(e=Math.max(e,r))}e&&(t.style.height=e+"px")}},renderInput:function(){var t=this.$createElement,e=this.slots("input");if(e)return t("div",{class:g("control",this.inputAlign)},[e]);var i={ref:"input",class:g("control",this.inputAlign),domProps:{value:this.value},attrs:Object(s["a"])({},this.$attrs,{readonly:this.readonly}),on:this.listeners,directives:[{name:"model",value:this.value}]};return"textarea"===this.type?t("textarea",r()([{},i])):t("input",r()([{attrs:{type:this.type}},i]))},renderLeftIcon:function(){var t=this.$createElement,e=this.slots("left-icon")||this.leftIcon;if(e)return t("div",{class:g("left-icon"),on:{click:this.onClickLeftIcon}},[this.slots("left-icon")||t(a["a"],{attrs:{name:this.leftIcon}})])},renderRightIcon:function(){var t=this.$createElement,e=this.slots,i=e("right-icon")||this.rightIcon;if(i)return t("div",{class:g("right-icon"),on:{click:this.onClickRightIcon}},[e("right-icon")||t(a["a"],{attrs:{name:this.rightIcon}})])},renderWordLimit:function(){var t=this.$createElement;if(this.showWordLimit&&this.$attrs.maxlength)return t("div",{class:g("word-limit")},[this.value.length,"/",this.$attrs.maxlength])}},render:function(){var t,e=arguments[0],i=this.slots,n=this.labelAlign,r={icon:this.renderLeftIcon};return i("label")&&(r.title=function(){return i("label")}),e(o["a"],{attrs:{icon:this.leftIcon,size:this.size,title:this.label,center:this.center,border:this.border,isLink:this.isLink,required:this.required,clickable:this.clickable,titleStyle:this.labelStyle,titleClass:[g("label",n),this.labelClass],arrowDirection:this.arrowDirection},class:g((t={error:this.error},t["label-"+n]=n,t["min-height"]="textarea"===this.type&&!this.autosize,t)),scopedSlots:r,on:{click:this.onClick}},[e("div",{class:g("body")},[this.renderInput(),this.showClear&&e(a["a"],{attrs:{name:"clear"},class:g("clear"),on:{touchstart:this.onClear}}),this.renderRightIcon(),i("button")&&e("div",{class:g("button")},[i("button")])]),this.renderWordLimit(),this.errorMessage&&e("div",{class:g("error-message",this.errorMessageAlign)},[this.errorMessage])])}})},5852:function(t,e,i){"use strict";i("68ef"),i("09fe"),i("1146"),i("f032")},"8b56":function(t,e,i){},"8e01":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"search_tag",on:{click:t.OnClick}},[t._t("default")],2)},r=[],s={name:"word-tag",methods:{OnClick:function(){this.$emit("click")}}},a=s,o=(i("d8ca"),i("2877")),c=Object(o["a"])(a,n,r,!1,null,"20e845d3",null);e["default"]=c.exports},a8fa:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var n=i("32d7"),r=i("a8c1"),s=Object(n["b"])();function a(){s&&Object(r["e"])(Object(r["b"])())}},aae3:function(t,e,i){var n=i("d3f4"),r=i("2d95"),s=i("2b4c")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==r(t))}},d8a0:function(t,e,i){"use strict";i.r(e);var n,r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item_search"},[i("form",{attrs:{action:"/search"},on:{submit:t.disabledSubmit}},[i("van-search",{attrs:{placeholder:"请输入商品名称",autofocus:""},on:{search:t.enterSearch},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1),i("div",{staticClass:"item_search_content"},[i("div",{staticClass:"item_search_text clearfix"},[i("div",{staticClass:"float-l"},[t._v("历史搜索")]),i("div",{staticClass:"float-r",on:{click:t.clearHistory}},[i("van-icon",{staticStyle:{"font-size":"12px","margin-right":"3px"},attrs:{name:"lajitong"}}),t._v("\n\t\t\t\t清空历史记录\n\t\t\t")],1)]),i("div",{staticClass:"item_search_history"},t._l(t.wordHistory,(function(e,n){return i("word-tag",{key:n,on:{click:function(i){return t.toSearchResult(e)}}},[t._v(t._s(e))])})),1)])])},s=[],a=i("bd86"),o=(i("7f7f"),i("5852"),i("d961")),c=(i("28a5"),i("8e01")),l={data:function(){return{keyword:"",focusStatus:!0,wordHistory:[]}},methods:{enterSearch:function(){var t=this.keyword;this.pushHistoryTolocal(t),this.toSearchResult(t)},toSearchResult:function(t){this.keyword=t.trim(),this.$router.push({name:"search-result",query:{keyword:t.trim()}})},pushHistoryTolocal:function(t){var e=this.wordHistory,i=this.getKeyWordHistory();t.trim()&&i.indexOf(t)<0&&(e.push(t),window.localStorage.setItem("keyword",e.join("|")))},getKeyWordHistory:function(){var t=window.localStorage.getItem("keyword");return t?t.split("|"):[]},clearHistory:function(){var t=this;this.$dialog.confirm({message:"是否清空历史记录"}).then((function(){window.localStorage.setItem("keyword",""),t.wordHistory=[]}))},disabledSubmit:function(){return!1}},activated:function(){this.wordHistory=this.getKeyWordHistory()},components:(n={},Object(a["a"])(n,o["a"].name,o["a"]),Object(a["a"])(n,c["default"].name,c["default"]),n)},u=l,h=(i("4c7e"),i("2877")),f=Object(h["a"])(u,r,s,!1,null,"3bf487ce",null);e["default"]=f.exports},d8ca:function(t,e,i){"use strict";var n=i("8b56"),r=i.n(n);r.a},d961:function(t,e,i){"use strict";var n=i("2638"),r=i.n(n),s=i("1988"),a=i("d282"),o=i("ba31"),c=i("1325"),l=i("565f"),u=Object(a["a"])("search"),h=u[0],f=u[1],d=u[2];function b(t,e,i,n){function a(){if(i.label||e.label)return t("div",{class:f("label")},[i.label?i.label():e.label])}function u(){if(e.showAction)return t("div",{class:f("action"),attrs:{role:"button",tabindex:"0"},on:{click:r}},[i.action?i.action():e.actionText||d("cancel")]);function r(){i.action||(Object(o["a"])(n,"input",""),Object(o["a"])(n,"cancel"))}}var h={attrs:n.data.attrs,on:Object(s["a"])({},n.listeners,{keypress:function(t){13===t.keyCode&&(Object(c["c"])(t),Object(o["a"])(n,"search",e.value)),Object(o["a"])(n,"keypress",t)}})},b=Object(o["b"])(n);return delete b.attrs,t("div",r()([{class:f({"show-action":e.showAction}),style:{background:e.background}},b]),[t("div",{class:f("content",e.shape)},[a(),t(l["a"],r()([{attrs:{type:"search",border:!1,value:e.value,leftIcon:e.leftIcon,rightIcon:e.rightIcon,clearable:e.clearable},scopedSlots:{"left-icon":i["left-icon"],"right-icon":i["right-icon"]}},h]))]),u()])}b.props={value:String,label:String,rightIcon:String,actionText:String,showAction:Boolean,shape:{type:String,default:"square"},clearable:{type:Boolean,default:!0},background:{type:String,default:"#fff"},leftIcon:{type:String,default:"search"}},e["a"]=h(b)},f032:function(t,e,i){}}]);
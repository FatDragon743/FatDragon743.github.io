(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bf63a85"],{"28a2":function(t,e,i){"use strict";var n=i("1988"),s=i("2b0e"),a=i("d282"),o=i("482d"),r=i("1325"),l=i("6605"),c=i("3875"),h=i("44bf"),u=i("543e"),f=i("5596"),m=i("2bb1"),v=Object(a["a"])("image-preview"),d=v[0],p=v[1];function g(t){return Math.sqrt(Math.pow(t[0].clientX-t[1].clientX,2)+Math.pow(t[0].clientY-t[1].clientY,2))}var w,b=d({mixins:[l["a"],c["a"]],props:{className:null,lazyLoad:Boolean,asyncClose:Boolean,showIndicators:Boolean,images:{type:Array,default:function(){return[]}},loop:{type:Boolean,default:!0},swipeDuration:{type:Number,default:500},overlay:{type:Boolean,default:!0},showIndex:{type:Boolean,default:!0},startPosition:{type:Number,default:0},minZoom:{type:Number,default:1/3},maxZoom:{type:Number,default:3},overlayClass:{type:String,default:p("overlay")}},data:function(){return{scale:1,moveX:0,moveY:0,active:0,moving:!1,zooming:!1,doubleClickTimer:null}},computed:{imageStyle:function(){var t=this.scale,e={transitionDuration:this.zooming||this.moving?"0s":".3s"};return 1!==t&&(e.transform="scale3d("+t+", "+t+", 1) translate("+this.moveX/t+"px, "+this.moveY/t+"px)"),e}},watch:{value:function(){this.setActive(this.startPosition)},startPosition:function(t){this.setActive(t)}},methods:{onWrapperTouchStart:function(){this.touchStartTime=new Date},onWrapperTouchEnd:function(t){var e=this;Object(r["c"])(t);var i=new Date-this.touchStartTime,n=this.$refs.swipe||{},s=n.offsetX,a=void 0===s?0:s,o=n.offsetY,l=void 0===o?0:o;i<300&&a<10&&l<10&&(this.doubleClickTimer?(clearTimeout(this.doubleClickTimer),this.doubleClickTimer=null,this.toggleScale()):this.doubleClickTimer=setTimeout((function(){var t=e.active;e.$emit("close",{index:t,url:e.images[t]}),e.asyncClose||e.$emit("input",!1),e.doubleClickTimer=null}),300))},startMove:function(t){var e=t.currentTarget,i=e.getBoundingClientRect(),n=window.innerWidth,s=window.innerHeight;this.touchStart(t),this.moving=!0,this.startMoveX=this.moveX,this.startMoveY=this.moveY,this.maxMoveX=Math.max(0,(i.width-n)/2),this.maxMoveY=Math.max(0,(i.height-s)/2)},startZoom:function(t){this.moving=!1,this.zooming=!0,this.startScale=this.scale,this.startDistance=g(t.touches)},onImageTouchStart:function(t){var e=t.touches,i=this.$refs.swipe||{},n=i.offsetX,s=void 0===n?0:n;1===e.length&&1!==this.scale?this.startMove(t):2!==e.length||s||this.startZoom(t)},onImageTouchMove:function(t){var e=t.touches;if((this.moving||this.zooming)&&Object(r["c"])(t,!0),this.moving){this.touchMove(t);var i=this.deltaX+this.startMoveX,n=this.deltaY+this.startMoveY;this.moveX=Object(o["a"])(i,-this.maxMoveX,this.maxMoveX),this.moveY=Object(o["a"])(n,-this.maxMoveY,this.maxMoveY)}if(this.zooming&&2===e.length){var s=g(e),a=this.startScale*s/this.startDistance;this.scale=Object(o["a"])(a,this.minZoom,this.maxZoom)}},onImageTouchEnd:function(t){if(this.moving||this.zooming){var e=!0;this.moving&&this.startMoveX===this.moveX&&this.startMoveY===this.moveY&&(e=!1),t.touches.length||(this.moving=!1,this.zooming=!1,this.startMoveX=0,this.startMoveY=0,this.startScale=1,this.scale<1&&this.resetScale()),e&&Object(r["c"])(t,!0)}},setActive:function(t){this.resetScale(),t!==this.active&&(this.active=t,this.$emit("change",t))},resetScale:function(){this.scale=1,this.moveX=0,this.moveY=0},toggleScale:function(){var t=this.scale>1?1:2;this.scale=t,this.moveX=0,this.moveY=0},genIndex:function(){var t=this.$createElement;if(this.showIndex)return t("div",{class:p("index")},[this.slots("index")||this.active+1+" / "+this.images.length])},genCover:function(){var t=this.$createElement,e=this.slots("cover");if(e)return t("div",{class:p("cover")},[e])},genImages:function(){var t=this,e=this.$createElement,i={loading:function(){return e(u["a"],{attrs:{type:"spinner"}})}};return e(f["a"],{ref:"swipe",attrs:{loop:this.loop,duration:this.swipeDuration,indicatorColor:"white",initialSwipe:this.startPosition,showIndicators:this.showIndicators},class:p("swipe"),on:{change:this.setActive},nativeOn:{touchstart:this.onWrapperTouchStart,touchMove:r["c"],touchend:this.onWrapperTouchEnd,touchcancel:this.onWrapperTouchEnd}},[this.images.map((function(n,s){return e(m["a"],[e(h["a"],{attrs:{src:n,fit:"contain",lazyLoad:t.lazyLoad},class:p("image"),scopedSlots:i,style:s===t.active?t.imageStyle:null,nativeOn:{touchstart:t.onImageTouchStart,touchmove:t.onImageTouchMove,touchend:t.onImageTouchEnd,touchcancel:t.onImageTouchEnd}})])}))])}},render:function(){var t=arguments[0];if(this.value)return t("transition",{attrs:{name:"van-fade"}},[t("div",{class:[p(),this.className]},[this.genImages(),this.genIndex(),this.genCover()])])}}),y=i("a142"),x={images:[],loop:!0,swipeDuration:500,value:!0,minZoom:1/3,maxZoom:3,className:"",onClose:null,onChange:null,lazyLoad:!1,showIndex:!0,asyncClose:!1,startPosition:0,showIndicators:!1,closeOnPopstate:!1},S=function(){w=new(s["a"].extend(b))({el:document.createElement("div")}),document.body.appendChild(w.$el),w.$on("change",(function(t){w.onChange&&w.onChange(t)}))},I=function(t,e){if(void 0===e&&(e=0),!y["d"]){w||S();var i=Array.isArray(t)?{images:t,startPosition:e}:t;return Object(n["a"])(w,x,i),w.$once("input",(function(t){w.value=t})),i.onClose&&w.$once("close",i.onClose),w}};I.install=function(){s["a"].use(b)};e["a"]=I},"504b":function(t,e,i){},"8f80":function(t,e,i){"use strict";var n=i("1988"),s=i("d282"),a=i("ea8e"),o=i("a142");function r(t){return Array.isArray(t)?t:[t]}function l(t,e){return new Promise((function(i){if("file"!==e){var n=new FileReader;n.onload=function(t){i(t.target.result)},"dataUrl"===e?n.readAsDataURL(t):"text"===e&&n.readAsText(t)}else i()}))}function c(t,e){return r(t).some((function(t){return t.size>e}))}var h=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;function u(t){return h.test(t)}function f(t){return!!t.isImage||(t.file&&t.file.type?0===t.file.type.indexOf("image"):t.url?u(t.url):!!t.content&&0===t.content.indexOf("data:image"))}var m=i("ad06"),v=i("44bf"),d=i("28a2"),p=Object(s["a"])("uploader"),g=p[0],w=p[1];e["a"]=g({inheritAttrs:!1,model:{prop:"fileList"},props:{disabled:Boolean,uploadText:String,afterRead:Function,beforeRead:Function,beforeDelete:Function,previewSize:[Number,String],name:{type:[Number,String],default:""},accept:{type:String,default:"image/*"},fileList:{type:Array,default:function(){return[]}},maxSize:{type:Number,default:Number.MAX_VALUE},maxCount:{type:Number,default:Number.MAX_VALUE},previewImage:{type:Boolean,default:!0},previewFullImage:{type:Boolean,default:!0},imageFit:{type:String,default:"cover"},resultType:{type:String,default:"dataUrl"}},computed:{previewSizeWithUnit:function(){return Object(a["a"])(this.previewSize)}},methods:{getDetail:function(t){return void 0===t&&(t=this.fileList.length),{name:this.name,index:t}},onChange:function(t){var e=this,i=t.target.files;if(!this.disabled&&i.length){if(i=1===i.length?i[0]:[].slice.call(i),this.beforeRead){var n=this.beforeRead(i,this.getDetail());if(!n)return void this.resetInput();if(n.then)return void n.then((function(){e.readFile(i)})).catch(this.resetInput)}this.readFile(i)}},readFile:function(t){var e=this,i=c(t,this.maxSize);if(Array.isArray(t)){var n=this.maxCount-this.fileList.length;t.length>n&&(t=t.slice(0,n)),Promise.all(t.map((function(t){return l(t,e.resultType)}))).then((function(n){var s=t.map((function(t,e){var i={file:t};return n[e]&&(i.content=n[e]),i}));e.onAfterRead(s,i)}))}else l(t,this.resultType).then((function(n){var s={file:t};n&&(s.content=n),e.onAfterRead(s,i)}))},onAfterRead:function(t,e){e?this.$emit("oversize",t,this.getDetail()):(this.resetInput(),this.$emit("input",[].concat(this.fileList,r(t))),this.afterRead&&this.afterRead(t,this.getDetail()))},onDelete:function(t,e){var i=this;if(this.beforeDelete){var n=this.beforeDelete(t,this.getDetail(e));if(!n)return;if(n.then)return void n.then((function(){i.deleteFile(t,e)})).catch(o["e"])}this.deleteFile(t,e)},deleteFile:function(t,e){var i=this.fileList.slice(0);i.splice(e,1),this.$emit("input",i),this.$emit("delete",t,this.getDetail(e))},resetInput:function(){this.$refs.input&&(this.$refs.input.value="")},onPreviewImage:function(t){var e=this;if(this.previewFullImage){var i=this.fileList.filter((function(t){return f(t)})),n=i.map((function(t){return t.content||t.url}));this.imagePreview=Object(d["a"])({images:n,closeOnPopstate:!0,startPosition:i.indexOf(t),onClose:function(){e.$emit("close-preview")}})}},closeImagePreview:function(){this.imagePreview&&this.imagePreview.close()},renderPreviewItem:function(t,e){var i=this,n=this.$createElement,s=n(m["a"],{attrs:{name:"clear"},class:w("preview-delete"),on:{click:function(n){n.stopPropagation(),i.onDelete(t,e)}}}),a=f(t)?n(v["a"],{attrs:{fit:this.imageFit,src:t.content||t.url,width:this.previewSize,height:this.previewSize,radius:4},class:w("preview-image"),on:{click:function(){i.onPreviewImage(t)}}}):n("div",{class:w("file"),style:{width:this.previewSizeWithUnit,height:this.previewSizeWithUnit}},[n(m["a"],{class:w("file-icon"),attrs:{name:"description"}}),n("div",{class:[w("file-name"),"van-ellipsis"]},[t.file?t.file.name:t.url])]);return n("div",{class:w("preview"),on:{click:function(){i.$emit("click-preview",t,i.getDetail(e))}}},[a,s])},renderPreviewList:function(){if(this.previewImage)return this.fileList.map(this.renderPreviewItem)},renderUpload:function(){var t=this.$createElement;if(!(this.fileList.length>=this.maxCount)){var e,i=this.slots(),s=t("input",{attrs:Object(n["a"])({},this.$attrs,{type:"file",accept:this.accept,disabled:this.disabled}),ref:"input",class:w("input"),on:{change:this.onChange}});if(i)return t("div",{class:w("input-wrapper")},[i,s]);if(this.previewSize){var a=this.previewSizeWithUnit;e={width:a,height:a}}return t("div",{class:w("upload"),style:e},[t(m["a"],{attrs:{name:"plus"},class:w("upload-icon")}),this.uploadText&&t("span",{class:w("upload-text")},[this.uploadText]),s])}}},render:function(){var t=arguments[0];return t("div",{class:w()},[t("div",{class:w("wrapper")},[this.renderPreviewList(),this.renderUpload()])])}})},bcd3:function(t,e,i){}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7abfcd73"],{"0e44":function(t,e,r){var n=r("88dd"),a=r("a013"),o=function(t,e){if(a(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=r("01f5")(Function.call,r("acb9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(a){e=!0}return function(t,r){return o(t,r),e?t.__proto__=r:n(t,r),t}}({},!1):void 0),check:o}},"0eb5":function(t,e,r){r("7b01")("asyncIterator")},"0ff6":function(t,e,r){e.f=r("8b37")},"19cd":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[r("el-form",{attrs:{inline:!0,model:t.filters}},[r("el-form-item",[r("el-input",{attrs:{placeholder:"订单状态"},model:{value:t.filters.status,callback:function(e){t.$set(t.filters,"status",e)},expression:"filters.status"}},[r("template",{slot:"prepend"},[t._v("订单状态")])],2)],1),r("el-form-item",[r("el-input",{attrs:{placeholder:"订单号"},model:{value:t.filters.order_num,callback:function(e){t.$set(t.filters,"order_num",e)},expression:"filters.order_num"}},[r("template",{slot:"prepend"},[t._v("订单号")])],2)],1),r("el-form-item",[r("el-input",{attrs:{placeholder:"产地"},model:{value:t.filters.made_in,callback:function(e){t.$set(t.filters,"made_in",e)},expression:"filters.made_in"}},[r("template",{slot:"prepend"},[t._v("产地")])],2)],1),r("el-form-item",[r("el-input",{attrs:{placeholder:"日期开始",disabled:""},model:{value:t.filters.date_start,callback:function(e){t.$set(t.filters,"date_start",e)},expression:"filters.date_start"}},[r("template",{slot:"prepend"},[t._v("日期开始")])],2)],1),r("el-form-item",[r("el-input",{attrs:{placeholder:"日期结束",disabled:""},model:{value:t.filters.date_end,callback:function(e){t.$set(t.filters,"date_end",e)},expression:"filters.date_end"}},[r("template",{slot:"prepend"},[t._v("日期结束")])],2)],1),r("el-form-item",{staticClass:"right"},[r("el-button",{attrs:{type:"primary"},on:{click:t.getOrders}},[t._v("查询")])],1)],1)],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.orders,"highlight-current-row":""},on:{"selection-change":t.selsChange}},[r("el-table-column",{attrs:{prop:"order_num",label:"订单号",width:"150",sortable:""}}),r("el-table-column",{attrs:{prop:"status",label:"订单状态",width:"100",formatter:t.formatStatus,sortable:""}}),r("el-table-column",{attrs:{prop:"made_in",label:"产地",width:"100",sortable:""}}),r("el-table-column",{attrs:{prop:"product_name",label:"产品名",sortable:""}}),r("el-table-column",{attrs:{prop:"product_model",label:"产品型号","min-width":"180",sortable:""}}),r("el-table-column",{attrs:{prop:"quantity",label:"测试数量","min-width":"80",sortable:""}}),r("el-table-column",{attrs:{prop:"complete_quantity",label:"已完成数量","min-width":"80",sortable:""}}),r("el-table-column",{attrs:{prop:"station_cnt",label:"测试站数量","min-width":"80",sortable:""}}),r("el-table-column",{attrs:{prop:"plan_online_time",label:"计划上线时间","min-width":"160",sortable:""}}),r("el-table-column",{attrs:{prop:"add_time",label:"订单生成时间","min-width":"160",sortable:""}}),r("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(r){return t.handleDetail(e.$index,e.row)}}},[t._v("详情")])]}}])})],1),r("el-col",{staticClass:"toolbar",attrs:{span:24}},[r("el-button",{attrs:{type:"primary"},on:{click:t.handleAdd}},[t._v("新增订单")]),r("el-pagination",{staticStyle:{float:"right"},attrs:{layout:"prev, pager, next","page-size":20,total:t.total},on:{"current-change":t.handleCurrentChange}})],1),r("el-dialog",{staticClass:"add",attrs:{title:"新增订单",visible:t.addFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(e){t.addFormVisible=e}}},[r("el-form",{ref:"addForm",attrs:{model:t.addForm,"label-width":"100px",rules:t.addFormRules,inline:!0,label:"left"}},[r("el-form-item",{attrs:{label:"用户ID"}},[r("el-input",{attrs:{"auto-complete":"off",disabled:""},model:{value:t.addForm.user_id,callback:function(e){t.$set(t.addForm,"user_id",e)},expression:"addForm.user_id"}})],1),r("el-form-item",{staticClass:"right",attrs:{label:"生产地"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:t.addForm.made_in,callback:function(e){t.$set(t.addForm,"made_in",e)},expression:"addForm.made_in"}})],1),r("el-form-item",{attrs:{label:"产品名"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:t.addForm.product_name,callback:function(e){t.$set(t.addForm,"product_name",e)},expression:"addForm.product_name"}})],1),r("el-form-item",{staticClass:"right",attrs:{label:"产品型号"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:t.addForm.product_model,callback:function(e){t.$set(t.addForm,"product_model",e)},expression:"addForm.product_model"}})],1),r("el-form-item",{attrs:{label:"数量"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:t.addForm.quantity,callback:function(e){t.$set(t.addForm,"quantity",e)},expression:"addForm.quantity"}})],1),r("el-form-item",{staticClass:"right",attrs:{label:"测试站数量"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:t.addForm.station_cnt,callback:function(e){t.$set(t.addForm,"station_cnt",e)},expression:"addForm.station_cnt"}})],1),r("el-form-item",{attrs:{label:"计划上线时间"}},[r("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期","default-time":"12:00:00"},model:{value:t.addForm.plan_online_time,callback:function(e){t.$set(t.addForm,"plan_online_time",e)},expression:"addForm.plan_online_time"}})],1),r("el-form-item",{staticClass:"right",attrs:{label:"测试序列"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:t.addForm.test_seq,callback:function(e){t.$set(t.addForm,"test_seq",e)},expression:"addForm.test_seq"}})],1),r("el-form-item",{attrs:{label:"测试流程"}},[r("el-input",{attrs:{type:"textarea","auto-complete":"off"},model:{value:t.addForm.working_procedure,callback:function(e){t.$set(t.addForm,"working_procedure",e)},expression:"addForm.working_procedure"}})],1),t._l(t.HDForm.hid_list,function(e,n){return r("el-form-item",{key:e.key,attrs:{label:"硬件ID: "+n,rules:{required:!0,message:"不能为空",trigger:"blur"}}},[r("el-select",{attrs:{placeholder:"硬件类型"},model:{value:e.type,callback:function(r){t.$set(e,"type",r)},expression:"hid.type"}},[r("el-option",{attrs:{label:"IMEI",value:"imei"}}),r("el-option",{attrs:{label:"MAC",value:"mac"}})],1),r("el-input",{model:{value:e.id,callback:function(r){t.$set(e,"id",r)},expression:"hid.id"}}),r("el-button",{on:{click:t.addHD}},[t._v("新增ID")]),r("el-button",{on:{click:function(r){return r.preventDefault(),t.removeHD(e)}}},[t._v("删除")])],1)}),r("el-form-item",{attrs:{label:"文件上传"}},[r("el-upload",{ref:"uploads",staticClass:"upload-demo center",attrs:{drag:"",action:t.doUpload,"before-upload":t.beforeUpload,"auto-upload":!1}},[r("i",{staticClass:"el-icon-upload"}),r("div",{staticClass:"el-upload__text"},[t._v("\n            将文件拖到此处，或\n            "),r("em",[t._v("点击上传")])]),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件，且不超过500kb")])])],1)],2),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{nativeOn:{click:function(e){t.addFormVisible=!1}}},[t._v("取消")]),r("el-button",{attrs:{type:"primary",loading:t.addLoading},nativeOn:{click:function(e){return t.addSubmit(e)}}},[t._v("提交")])],1)],1)],1)},a=[],o=(r("0eb5"),r("a4c5"),r("f763"),r("8b55")),i=r("4ec3"),l=(r("fed1"),r("96c8"),{data:function(){return{HDForm:{hid_list:[{type:"imei",id:"硬件ID0",key:""}]},doUpload:"http://localhost/",addLoading:!1,addFormRules:{},addForm:{},addFormVisible:!1,listLoading:!1,total:0,page:1,pageLimit:10,user_id:0,orders:[],filters:{status:"",order_num:"",made_in:"",date_start:"",date_end:""}}},methods:{handleDetail:function(t,e){this.$router.push({path:"/orderdetail",name:"订单详情",params:{user_id:this.user_id,order_num:e.order_num}})},handleHDform:function(){console.log(this.HDForm.hid_list);var t=[],e=[],r=!0,n=!1,a=void 0;try{for(var o,i=this.HDForm.hid_list[Symbol.iterator]();!(r=(o=i.next()).done);r=!0){var l=o.value,s=l.type,c=l.id;l.key;"imei"==s?t.push(c):"mac"==s&&e.push(c)}}catch(d){n=!0,a=d}finally{try{r||null==i.return||i.return()}finally{if(n)throw a}}var u="imei\n"+t.length+"\n"+t.join("\n")+"\n-------\nmac\n"+e.length+"\n"+e.join("\n");return u},removeHD:function(t){var e=this.HDForm.hid_list.indexOf(t);-1!==e&&this.HDForm.hid_list.splice(e,1)},addHD:function(){this.HDForm.hid_list.push({id:"硬件ID1",type:"mac",key:Date.now()})},beforeUpload:function(t){this.addForm.file.push(t)},addSubmit:function(){var t=this;this.$refs["uploads"].submit();var e=new FormData;e.append("user_id",this.user_id),e.append("made_in",this.addForm.made_in),e.append("product_name",this.addForm.product_name),e.append("product_model",this.addForm.product_model),e.append("quantity",this.addForm.quantity),e.append("station_cnt",this.addForm.station_cnt),e.append("plan_online_time",this.addForm.plan_online_time),e.append("working_procedure",this.addForm.working_procedure),e.append("test_seq",this.addForm.test_seq),e.append("hid_list",this.handleHDform());for(var r=0,n=this.addForm.file.length;r<n;r++)e.append("file[]",this.addForm.file[r]);Object(i["p"])(e).then(function(e){var r=e.code,n=e.msg;console.log(n),200==r?(t.addLoading=!1,t.$message({message:"提交成功",type:"success"}),t.$refs["addForm"].resetFields(),t.addFormVisible=!1,t.getOrders()):(t.addLoading=!1,t.$message({message:n,type:"error"}),t.$refs["addForm"].resetFields(),t.addFormVisible=!1,t.getOrders())})},handleAdd:function(){this.addFormVisible=!0,this.addForm={user_id:this.user_id,made_in:"zjm杭州",product_name:"zjmasdf",product_model:"zjmm1",quantity:"100",station_cnt:"3",plan_online_time:"2019-10-10 00:00:00",working_procedure:"zjm测试流程",test_seq:"zjm测试序列",file:[]}},handleCurrentChange:function(t){this.page=t,this.getOrders()},selsChange:function(t){this.sels=t},formatStatus:function(t,e){switch(t.status){case 0:return"未执行";case 1:return"执行中";case 2:return"执行完成";case 3:return"已取消"}},getOrders:function(){var t=this,e={page:this.page,pageLimit:this.pageLimit,user_id:this.user_id};for(var r in this.filters)this.filters[r]&&(e[r]=this.filters[r]);console.log(e),this.listLoading=!0,Object(i["h"])(e).then(function(e){var r=e.code,n=e.msg;200==r?(t.total=n.values.length,t.orders=o["a"].getList(n)):(t.$message({message:n||"没有项目，请重新查询！",type:"error"}),t.filters={status:"",order_num:"",made_in:"",date_start:"",date_end:""},t.getOrders()),t.listLoading=!1})}},mounted:function(){this.user_id=parseInt(sessionStorage.getItem("user_id")),this.getOrders()}}),s=l,c=(r("df80"),r("17cc")),u=Object(c["a"])(s,n,a,!1,null,"0c495299",null);e["default"]=u.exports},"1f98":function(t,e,r){"use strict";var n=r("f425"),a=RegExp.prototype.exec,o=String.prototype.replace,i=a,l="lastIndex",s=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t[l]||0!==e[l]}(),c=void 0!==/()??/.exec("")[1],u=s||c;u&&(i=function(t){var e,r,i,u,d=this;return c&&(r=new RegExp("^"+d.source+"$(?!\\s)",n.call(d))),s&&(e=d[l]),i=a.call(d,t),s&&i&&(d[l]=d.global?i.index+i[0].length:e),c&&i&&i.length>1&&o.call(i[0],r,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(i[u]=void 0)}),i}),t.exports=i},"22e9":function(t,e,r){var n=r("88dd"),a=r("94ac"),o=r("8b37")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==a(t))}},"2c0f":function(t,e,r){},"2f03":function(t,e,r){var n=r("c481"),a=r("f01a");t.exports=function(t){return function(e,r){var o,i,l=String(a(e)),s=n(r),c=l.length;return s<0||s>=c?t?"":void 0:(o=l.charCodeAt(s),o<55296||o>56319||s+1===c||(i=l.charCodeAt(s+1))<56320||i>57343?t?l.charAt(s):o:t?l.slice(s,s+2):i-56320+(o-55296<<10)+65536)}}},"31bc":function(t,e,r){var n=r("cfc7"),a=r("f7c1"),o=r("d217");t.exports=function(t){var e=n(t),r=a.f;if(r){var i,l=r(t),s=o.f,c=0;while(l.length>c)s.call(t,i=l[c++])&&e.push(i)}return e}},"34a3":function(t,e,r){"use strict";var n=r("a013"),a=r("db4b"),o=r("b146"),i=r("c481"),l=r("b0f4"),s=r("35dd"),c=Math.max,u=Math.min,d=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g,m=function(t){return void 0===t?t:String(t)};r("629c")("replace",2,function(t,e,r,h){return[function(n,a){var o=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,o,a):r.call(String(o),n,a)},function(t,e){var a=h(r,t,this,e);if(a.done)return a.value;var d=n(t),f=String(this),p="function"===typeof e;p||(e=String(e));var v=d.global;if(v){var g=d.unicode;d.lastIndex=0}var _=[];while(1){var y=s(d,f);if(null===y)break;if(_.push(y),!v)break;var x=String(y[0]);""===x&&(d.lastIndex=l(f,o(d.lastIndex),g))}for(var w="",F=0,S=0;S<_.length;S++){y=_[S];for(var k=String(y[0]),O=c(u(i(y.index),f.length),0),L=[],E=1;E<y.length;E++)L.push(m(y[E]));var D=y.groups;if(p){var $=[k].concat(L,O,f);void 0!==D&&$.push(D);var C=String(e.apply(void 0,$))}else C=b(k,f,O,L,D,e);O>=F&&(w+=f.slice(F,O)+C,F=O+k.length)}return w+f.slice(F)}];function b(t,e,n,o,i,l){var s=n+t.length,c=o.length,u=p;return void 0!==i&&(i=a(i),u=f),r.call(l,u,function(r,a){var l;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(s);case"<":l=i[a.slice(1,-1)];break;default:var u=+a;if(0===u)return r;if(u>c){var f=d(u/10);return 0===f?r:f<=c?void 0===o[f-1]?a.charAt(1):o[f-1]+a.charAt(1):r}l=o[u-1]}return void 0===l?"":l})}})},"35dd":function(t,e,r){"use strict";var n=r("4819"),a=RegExp.prototype.exec;t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var o=r.call(t,e);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==n(t))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"3a59":function(t,e,r){"use strict";var n=r("1f98");r("b2f5")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},"3c6b":function(t,e,r){"use strict";var n=r("a013"),a=r("b146"),o=r("b0f4"),i=r("35dd");r("629c")("match",1,function(t,e,r,l){return[function(r){var n=t(this),a=void 0==r?void 0:r[e];return void 0!==a?a.call(r,n):new RegExp(r)[e](String(n))},function(t){var e=l(r,t,this);if(e.done)return e.value;var s=n(t),c=String(this);if(!s.global)return i(s,c);var u=s.unicode;s.lastIndex=0;var d,f=[],p=0;while(null!==(d=i(s,c))){var m=String(d[0]);f[p]=m,""===m&&(s.lastIndex=o(c,a(s.lastIndex),u)),p++}return 0===p?null:f}]})},"3cc6":function(t,e,r){var n=r("9d01")("meta"),a=r("88dd"),o=r("03b3"),i=r("ddf7").f,l=0,s=Object.isExtensible||function(){return!0},c=!r("b6f1")(function(){return s(Object.preventExtensions({}))}),u=function(t){i(t,n,{value:{i:"O"+ ++l,w:{}}})},d=function(t,e){if(!a(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,n)){if(!s(t))return"F";if(!e)return"E";u(t)}return t[n].i},f=function(t,e){if(!o(t,n)){if(!s(t))return!0;if(!e)return!1;u(t)}return t[n].w},p=function(t){return c&&m.NEED&&s(t)&&!o(t,n)&&u(t),t},m=t.exports={KEY:n,NEED:!1,fastKey:d,getWeak:f,onFreeze:p}},"44de":function(t,e,r){var n=r("88dd"),a=r("0e44").set;t.exports=function(t,e,r){var o,i=e.constructor;return i!==r&&"function"==typeof i&&(o=i.prototype)!==r.prototype&&n(o)&&a&&a(t,o),t}},"4b0a":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"55a0":function(t,e,r){"use strict";var n=r("a013"),a=r("4b0a"),o=r("35dd");r("629c")("search",1,function(t,e,r,i){return[function(r){var n=t(this),a=void 0==r?void 0:r[e];return void 0!==a?a.call(r,n):new RegExp(r)[e](String(n))},function(t){var e=i(r,t,this);if(e.done)return e.value;var l=n(t),s=String(this),c=l.lastIndex;a(c,0)||(l.lastIndex=0);var u=o(l,s);return a(l.lastIndex,c)||(l.lastIndex=c),null===u?-1:u.index}]})},"629c":function(t,e,r){"use strict";r("3a59");var n=r("e5ef"),a=r("743d"),o=r("b6f1"),i=r("f01a"),l=r("8b37"),s=r("1f98"),c=l("species"),u=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),d=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();t.exports=function(t,e,r){var f=l(t),p=!o(function(){var e={};return e[f]=function(){return 7},7!=""[t](e)}),m=p?!o(function(){var e=!1,r=/a/;return r.exec=function(){return e=!0,null},"split"===t&&(r.constructor={},r.constructor[c]=function(){return r}),r[f](""),!e}):void 0;if(!p||!m||"replace"===t&&!u||"split"===t&&!d){var h=/./[f],b=r(i,f,""[t],function(t,e,r,n,a){return e.exec===s?p&&!a?{done:!0,value:h.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),v=b[0],g=b[1];n(String.prototype,t,v),a(RegExp.prototype,f,2==e?function(t,e){return g.call(t,this,e)}:function(t){return g.call(t,this)})}}},7793:function(t,e,r){var n=r("3a68"),a=r("a891").f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],l=function(t){try{return a(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==o.call(t)?l(t):a(n(t))}},"7b01":function(t,e,r){var n=r("3754"),a=r("a4cc"),o=r("ca2b"),i=r("0ff6"),l=r("ddf7").f;t.exports=function(t){var e=a.Symbol||(a.Symbol=o?{}:n.Symbol||{});"_"==t.charAt(0)||t in e||l(e,t,{value:i.f(t)})}},"7c56":function(t,e,r){var n=r("3754"),a=r("44de"),o=r("ddf7").f,i=r("a891").f,l=r("22e9"),s=r("f425"),c=n.RegExp,u=c,d=c.prototype,f=/a/g,p=/a/g,m=new c(f)!==f;if(r("dad2")&&(!m||r("b6f1")(function(){return p[r("8b37")("match")]=!1,c(f)!=f||c(p)==p||"/a/i"!=c(f,"i")}))){c=function(t,e){var r=this instanceof c,n=l(t),o=void 0===e;return!r&&n&&t.constructor===c&&o?t:a(m?new u(n&&!o?t.source:t,e):u((n=t instanceof c)?t.source:t,n&&o?s.call(t):e),r?this:d,c)};for(var h=function(t){t in c||o(c,t,{configurable:!0,get:function(){return u[t]},set:function(e){u[t]=e}})},b=i(u),v=0;b.length>v;)h(b[v++]);d.constructor=c,c.prototype=d,r("e5ef")(n,"RegExp",c)}r("c650")("RegExp")},"8b55":function(t,e,r){"use strict";r("34a3"),r("55a0"),r("3c6b"),r("7c56"),r("f763");var n=/([yMdhsm])(\1*)/g,a="yyyy-MM-dd";function o(t,e){e-=(t+"").length;for(var r=0;r<e;r++)t="0"+t;return t}e["a"]={getList:function(t){var e=t.keys,r=e.length,n=t.values,a=[],o={};return n.forEach(function(t){for(var n=0;n<r;n++)o[e[n]]=t[n];a.push(o),o={}}),a},getQueryStringByName:function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),r=window.location.search.substr(1).match(e),n="";return null!=r&&(n=r[2]),e=null,r=null,null==n||""===n||"undefined"===n?"":n},formatDate:{format:function(t,e){return e=e||a,e.replace(n,function(e){switch(e.charAt(0)){case"y":return o(t.getFullYear(),e.length);case"M":return o(t.getMonth()+1,e.length);case"d":return o(t.getDate(),e.length);case"w":return t.getDay()+1;case"h":return o(t.getHours(),e.length);case"m":return o(t.getMinutes(),e.length);case"s":return o(t.getSeconds(),e.length)}})},parse:function(t,e){var r=e.match(n),a=t.match(/(\d)+/g);if(r.length===a.length){for(var o=new Date(1970,0,1),i=0;i<r.length;i++){var l=parseInt(a[i]),s=r[i];switch(s.charAt(0)){case"y":o.setFullYear(l);break;case"M":o.setMonth(l-1);break;case"d":o.setDate(l);break;case"h":o.setHours(l);break;case"m":o.setMinutes(l);break;case"s":o.setSeconds(l);break}}return o}return null}}}},"96c8":function(t,e){e.endianness=function(){return"LE"},e.hostname=function(){return"undefined"!==typeof location?location.hostname:""},e.loadavg=function(){return[]},e.uptime=function(){return 0},e.freemem=function(){return Number.MAX_VALUE},e.totalmem=function(){return Number.MAX_VALUE},e.cpus=function(){return[]},e.type=function(){return"Browser"},e.release=function(){return"undefined"!==typeof navigator?navigator.appVersion:""},e.networkInterfaces=e.getNetworkInterfaces=function(){return{}},e.arch=function(){return"javascript"},e.platform=function(){return"browser"},e.tmpdir=e.tmpDir=function(){return"/tmp"},e.EOL="\n",e.homedir=function(){return"/"}},a4c5:function(t,e,r){"use strict";var n=r("3754"),a=r("03b3"),o=r("dad2"),i=r("b2f5"),l=r("e5ef"),s=r("3cc6").KEY,c=r("b6f1"),u=r("adbd"),d=r("6594"),f=r("9d01"),p=r("8b37"),m=r("0ff6"),h=r("7b01"),b=r("31bc"),v=r("b5b8"),g=r("a013"),_=r("88dd"),y=r("db4b"),x=r("3a68"),w=r("5325"),F=r("7dea"),S=r("a7b8"),k=r("7793"),O=r("acb9"),L=r("f7c1"),E=r("ddf7"),D=r("cfc7"),$=O.f,C=E.f,j=k.f,I=n.Symbol,M=n.JSON,A=M&&M.stringify,R="prototype",T=p("_hidden"),H=p("toPrimitive"),N={}.propertyIsEnumerable,P=u("symbol-registry"),V=u("symbols"),q=u("op-symbols"),z=Object[R],G="function"==typeof I&&!!L.f,J=n.QObject,U=!J||!J[R]||!J[R].findChild,Y=o&&c(function(){return 7!=S(C({},"a",{get:function(){return C(this,"a",{value:7}).a}})).a})?function(t,e,r){var n=$(z,e);n&&delete z[e],C(t,e,r),n&&t!==z&&C(z,e,n)}:C,B=function(t){var e=V[t]=S(I[R]);return e._k=t,e},K=G&&"symbol"==typeof I.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof I},W=function(t,e,r){return t===z&&W(q,e,r),g(t),e=w(e,!0),g(r),a(V,e)?(r.enumerable?(a(t,T)&&t[T][e]&&(t[T][e]=!1),r=S(r,{enumerable:F(0,!1)})):(a(t,T)||C(t,T,F(1,{})),t[T][e]=!0),Y(t,e,r)):C(t,e,r)},Q=function(t,e){g(t);var r,n=b(e=x(e)),a=0,o=n.length;while(o>a)W(t,r=n[a++],e[r]);return t},X=function(t,e){return void 0===e?S(t):Q(S(t),e)},Z=function(t){var e=N.call(this,t=w(t,!0));return!(this===z&&a(V,t)&&!a(q,t))&&(!(e||!a(this,t)||!a(V,t)||a(this,T)&&this[T][t])||e)},tt=function(t,e){if(t=x(t),e=w(e,!0),t!==z||!a(V,e)||a(q,e)){var r=$(t,e);return!r||!a(V,e)||a(t,T)&&t[T][e]||(r.enumerable=!0),r}},et=function(t){var e,r=j(x(t)),n=[],o=0;while(r.length>o)a(V,e=r[o++])||e==T||e==s||n.push(e);return n},rt=function(t){var e,r=t===z,n=j(r?q:x(t)),o=[],i=0;while(n.length>i)!a(V,e=n[i++])||r&&!a(z,e)||o.push(V[e]);return o};G||(I=function(){if(this instanceof I)throw TypeError("Symbol is not a constructor!");var t=f(arguments.length>0?arguments[0]:void 0),e=function(r){this===z&&e.call(q,r),a(this,T)&&a(this[T],t)&&(this[T][t]=!1),Y(this,t,F(1,r))};return o&&U&&Y(z,t,{configurable:!0,set:e}),B(t)},l(I[R],"toString",function(){return this._k}),O.f=tt,E.f=W,r("a891").f=k.f=et,r("d217").f=Z,L.f=rt,o&&!r("ca2b")&&l(z,"propertyIsEnumerable",Z,!0),m.f=function(t){return B(p(t))}),i(i.G+i.W+i.F*!G,{Symbol:I});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),at=0;nt.length>at;)p(nt[at++]);for(var ot=D(p.store),it=0;ot.length>it;)h(ot[it++]);i(i.S+i.F*!G,"Symbol",{for:function(t){return a(P,t+="")?P[t]:P[t]=I(t)},keyFor:function(t){if(!K(t))throw TypeError(t+" is not a symbol!");for(var e in P)if(P[e]===t)return e},useSetter:function(){U=!0},useSimple:function(){U=!1}}),i(i.S+i.F*!G,"Object",{create:X,defineProperty:W,defineProperties:Q,getOwnPropertyDescriptor:tt,getOwnPropertyNames:et,getOwnPropertySymbols:rt});var lt=c(function(){L.f(1)});i(i.S+i.F*lt,"Object",{getOwnPropertySymbols:function(t){return L.f(y(t))}}),M&&i(i.S+i.F*(!G||c(function(){var t=I();return"[null]"!=A([t])||"{}"!=A({a:t})||"{}"!=A(Object(t))})),"JSON",{stringify:function(t){var e,r,n=[t],a=1;while(arguments.length>a)n.push(arguments[a++]);if(r=e=n[1],(_(e)||void 0!==t)&&!K(t))return v(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!K(e))return e}),n[1]=e,A.apply(M,n)}}),I[R][H]||r("743d")(I[R],H,I[R].valueOf),d(I,"Symbol"),d(Math,"Math",!0),d(n.JSON,"JSON",!0)},a891:function(t,e,r){var n=r("fb6d"),a=r("b4e0").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,a)}},acb9:function(t,e,r){var n=r("d217"),a=r("7dea"),o=r("3a68"),i=r("5325"),l=r("03b3"),s=r("568a"),c=Object.getOwnPropertyDescriptor;e.f=r("dad2")?c:function(t,e){if(t=o(t),e=i(e,!0),s)try{return c(t,e)}catch(r){}if(l(t,e))return a(!n.f.call(t,e),t[e])}},b0f4:function(t,e,r){"use strict";var n=r("2f03")(!0);t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},b5b8:function(t,e,r){var n=r("94ac");t.exports=Array.isArray||function(t){return"Array"==n(t)}},df80:function(t,e,r){"use strict";var n=r("2c0f"),a=r.n(n);a.a},f425:function(t,e,r){"use strict";var n=r("a013");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},f763:function(t,e,r){for(var n=r("dac5"),a=r("cfc7"),o=r("e5ef"),i=r("3754"),l=r("743d"),s=r("14fc"),c=r("8b37"),u=c("iterator"),d=c("toStringTag"),f=s.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=a(p),h=0;h<m.length;h++){var b,v=m[h],g=p[v],_=i[v],y=_&&_.prototype;if(y&&(y[u]||l(y,u,f),y[d]||l(y,d,v),s[v]=f,g))for(b in n)y[b]||o(y,b,n[b],!0)}}}]);
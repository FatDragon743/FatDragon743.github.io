(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7491ef59"],{"0857":function(t,e,r){"use strict";r("a0e0");var n=r("a013"),a=r("f425"),i=r("dad2"),o="toString",s=/./[o],l=function(t){r("e5ef")(RegExp.prototype,o,t,!0)};r("b6f1")(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?l(function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?a.call(t):void 0)}):s.name!=o&&l(function(){return s.call(this)})},"0e44":function(t,e,r){var n=r("88dd"),a=r("a013"),i=function(t,e){if(a(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=r("01f5")(Function.call,r("acb9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(a){e=!0}return function(t,r){return i(t,r),e?t.__proto__=r:n(t,r),t}}({},!1):void 0),check:i}},"1f98":function(t,e,r){"use strict";var n=r("f425"),a=RegExp.prototype.exec,i=String.prototype.replace,o=a,s="lastIndex",l=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t[s]||0!==e[s]}(),c=void 0!==/()??/.exec("")[1],u=l||c;u&&(o=function(t){var e,r,o,u,f=this;return c&&(r=new RegExp("^"+f.source+"$(?!\\s)",n.call(f))),l&&(e=f[s]),o=a.call(f,t),l&&o&&(f[s]=f.global?o.index+o[0].length:e),c&&o&&o.length>1&&i.call(o[0],r,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(o[u]=void 0)}),o}),t.exports=o},"22e9":function(t,e,r){var n=r("88dd"),a=r("94ac"),i=r("8b37")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==a(t))}},"26dc":function(t,e,r){"use strict";var n=r("650d"),a=r.n(n);a.a},"2f03":function(t,e,r){var n=r("c481"),a=r("f01a");t.exports=function(t){return function(e,r){var i,o,s=String(a(e)),l=n(r),c=s.length;return l<0||l>=c?t?"":void 0:(i=s.charCodeAt(l),i<55296||i>56319||l+1===c||(o=s.charCodeAt(l+1))<56320||o>57343?t?s.charAt(l):i:t?s.slice(l,l+2):o-56320+(i-55296<<10)+65536)}}},"34a3":function(t,e,r){"use strict";var n=r("a013"),a=r("db4b"),i=r("b146"),o=r("c481"),s=r("b0f4"),l=r("35dd"),c=Math.max,u=Math.min,f=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,g=/\$([$&`']|\d\d?)/g,p=function(t){return void 0===t?t:String(t)};r("629c")("replace",2,function(t,e,r,h){return[function(n,a){var i=t(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,i,a):r.call(String(i),n,a)},function(t,e){var a=h(r,t,this,e);if(a.done)return a.value;var f=n(t),d=String(this),g="function"===typeof e;g||(e=String(e));var m=f.global;if(m){var b=f.unicode;f.lastIndex=0}var y=[];while(1){var x=l(f,d);if(null===x)break;if(y.push(x),!m)break;var _=String(x[0]);""===_&&(f.lastIndex=s(d,i(f.lastIndex),b))}for(var S="",L=0,w=0;w<y.length;w++){x=y[w];for(var k=String(x[0]),F=c(u(o(x.index),d.length),0),R=[],E=1;E<x.length;E++)R.push(p(x[E]));var $=x.groups;if(g){var M=[k].concat(R,F,d);void 0!==$&&M.push($);var C=String(e.apply(void 0,M))}else C=v(k,d,F,R,$,e);F>=L&&(S+=d.slice(L,F)+C,L=F+k.length)}return S+d.slice(L)}];function v(t,e,n,i,o,s){var l=n+t.length,c=i.length,u=g;return void 0!==o&&(o=a(o),u=d),r.call(s,u,function(r,a){var s;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(l);case"<":s=o[a.slice(1,-1)];break;default:var u=+a;if(0===u)return r;if(u>c){var d=f(u/10);return 0===d?r:d<=c?void 0===i[d-1]?a.charAt(1):i[d-1]+a.charAt(1):r}s=i[u-1]}return void 0===s?"":s})}})},"35dd":function(t,e,r){"use strict";var n=r("4819"),a=RegExp.prototype.exec;t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var i=r.call(t,e);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"3a59":function(t,e,r){"use strict";var n=r("1f98");r("b2f5")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},"3c6b":function(t,e,r){"use strict";var n=r("a013"),a=r("b146"),i=r("b0f4"),o=r("35dd");r("629c")("match",1,function(t,e,r,s){return[function(r){var n=t(this),a=void 0==r?void 0:r[e];return void 0!==a?a.call(r,n):new RegExp(r)[e](String(n))},function(t){var e=s(r,t,this);if(e.done)return e.value;var l=n(t),c=String(this);if(!l.global)return o(l,c);var u=l.unicode;l.lastIndex=0;var f,d=[],g=0;while(null!==(f=o(l,c))){var p=String(f[0]);d[g]=p,""===p&&(l.lastIndex=i(c,a(l.lastIndex),u)),g++}return 0===g?null:d}]})},"44de":function(t,e,r){var n=r("88dd"),a=r("0e44").set;t.exports=function(t,e,r){var i,o=e.constructor;return o!==r&&"function"==typeof o&&(i=o.prototype)!==r.prototype&&n(i)&&a&&a(t,i),t}},"4b0a":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"55a0":function(t,e,r){"use strict";var n=r("a013"),a=r("4b0a"),i=r("35dd");r("629c")("search",1,function(t,e,r,o){return[function(r){var n=t(this),a=void 0==r?void 0:r[e];return void 0!==a?a.call(r,n):new RegExp(r)[e](String(n))},function(t){var e=o(r,t,this);if(e.done)return e.value;var s=n(t),l=String(this),c=s.lastIndex;a(c,0)||(s.lastIndex=0);var u=i(s,l);return a(s.lastIndex,c)||(s.lastIndex=c),null===u?-1:u.index}]})},"58ff":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[r("el-form",{attrs:{inline:!0,model:t.filters}},[r("el-form-item",[r("el-input",{staticClass:"input-with-select",attrs:{placeholder:"完整公司名称"},model:{value:t.filters.value,callback:function(e){t.$set(t.filters,"value",e)},expression:"filters.value"}},[r("template",{slot:"prepend"},[t._v("按公司名检索")]),r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.getUsers},slot:"append"})],2)],1)],1)],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.users,"highlight-current-row":""},on:{"selection-change":t.selsChange}},[r("el-table-column",{attrs:{type:"selection",width:"55"}}),r("el-table-column",{attrs:{type:"index",sortable:""}}),r("el-table-column",{attrs:{prop:"user_id",label:"ID",sortable:""}}),r("el-table-column",{attrs:{prop:"company_name",label:"公司名称",sortable:""}}),r("el-table-column",{attrs:{prop:"register_time",label:"注册时间",sortable:""}}),r("el-table-column",{attrs:{prop:"order_cnt",label:"已生成订单数",sortable:""}}),r("el-table-column",{attrs:{prop:"software_version",label:"目前最新版本号",sortable:""}}),r("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{size:"small"},on:{click:function(r){return t.handleEdit(e.$index,e.row)}}},[t._v("修改")]),r("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(r){return t.handleDetail(e.$index,e.row)}}},[t._v("详情")])]}}])})],1),r("el-col",{staticClass:"toolbar",attrs:{span:24}},[r("el-button",{attrs:{type:"danger",disabled:0===this.sels.length},on:{click:t.batchRemove}},[t._v("批量删除")]),r("el-pagination",{staticStyle:{float:"right"},attrs:{layout:"prev, pager, next","page-size":20,total:t.total},on:{"current-change":t.handleCurrentChange}})],1),r("el-dialog",{attrs:{title:"修改",visible:t.editFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(e){t.editFormVisible=e}}},[r("el-form",{ref:"editForm",attrs:{model:t.editForm,"label-width":"100px",rules:t.editFormRules,"label-position":"left"}},[r("el-form-item",{attrs:{label:"用户id",prop:"user_id"}},[r("el-input",{attrs:{"auto-complete":"off",disabled:!0},model:{value:t.editForm.user_id,callback:function(e){t.$set(t.editForm,"user_id",e)},expression:"editForm.user_id"}})],1),r("el-form-item",{attrs:{label:"授权到期时间"}},[r("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:t.editForm.grant_time_out,callback:function(e){t.$set(t.editForm,"grant_time_out",e)},expression:"editForm.grant_time_out"}})],1),r("el-form-item",{attrs:{label:"备注"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.editForm.remark,callback:function(e){t.$set(t.editForm,"remark",e)},expression:"editForm.remark"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{nativeOn:{click:function(e){t.editFormVisible=!1}}},[t._v("取消")]),r("el-button",{attrs:{type:"primary",loading:t.editLoading},nativeOn:{click:function(e){return t.editSubmit(e)}}},[t._v("提交")])],1)],1)],1)},a=[],i=(r("0857"),r("f763"),r("8b55")),o=r("4ec3"),s={data:function(){return{pageLimit:10,filters:{company_name:""},users:[],total:0,page:1,listLoading:!1,sels:[],editFormVisible:!1,editLoading:!1,editFormRules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}]},editForm:{user_id:0,grant_time_out:"2019-09-09",remark:""},detailFormVisible:!1,addLoading:!1,detailFormRules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}]},detailForm:[]}},methods:{formatSex:function(t,e){return 1===t.sex?"男":0===t.sex?"女":"未知"},handleCurrentChange:function(t){this.page=t,this.getUsers()},getUsers:function(){var t=this,e={page:this.page,pageLimit:this.pageLimit};this.filters.value&&(e["company_name"]=this.filters.value),this.listLoading=!0,Object(o["k"])(e).then(function(e){e.code;var r=e.msg;200==e.code?(t.total=r.values.length,t.users=i["a"].getList(r),t.listLoading=!1):(t.$message({message:r,type:"error"}),t.listLoading=!1,t.filters.value="",t.getUsers())})},handleEdit:function(t,e){this.editFormVisible=!0,this.editForm=Object.assign({},e)},handleDetail:function(t,e){this.$router.push({path:"/admin/history",name:"更新管理",params:{user_id:e.user_id}})},editSubmit:function(){var t=this;this.$refs.editForm.validate(function(e){e&&t.$confirm("确认提交吗？","提示",{}).then(function(){t.editLoading=!0;var e=Object.assign({},t.editForm);e.grant_time_out=e.grant_time_out&&""!==e.grant_time_out?i["a"].formatDate.format(new Date(e.grant_time_out),"yyyy-MM-dd"):"",console.log(e),Object(o["c"])(e).then(function(e){t.editLoading=!1;e.code;var r=e.msg;console.log(r),200==e.code?t.$message({message:"提交成功",type:"success"}):t.$message({message:r,type:"error"}),t.$refs["editForm"].resetFields(),t.editFormVisible=!1,t.getUsers()})})})},updateSubmit:function(){this.$router.push({path:"/admin/History"})},selsChange:function(t){this.sels=t},batchRemove:function(){var t=this,e=this.sels.map(function(t){return t.id}).toString();this.$confirm("确认删除选中记录吗？","提示",{type:"warning"}).then(function(){t.listLoading=!0;var r={ids:e};batchRemoveUser(r).then(function(e){t.listLoading=!1,t.$message({message:"删除成功",type:"success"}),t.getUsers()})}).catch(function(){})}},mounted:function(){this.getUsers()}},l=s,c=(r("26dc"),r("17cc")),u=Object(c["a"])(l,n,a,!1,null,"0c71519a",null);e["default"]=u.exports},"629c":function(t,e,r){"use strict";r("3a59");var n=r("e5ef"),a=r("743d"),i=r("b6f1"),o=r("f01a"),s=r("8b37"),l=r("1f98"),c=s("species"),u=!i(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();t.exports=function(t,e,r){var d=s(t),g=!i(function(){var e={};return e[d]=function(){return 7},7!=""[t](e)}),p=g?!i(function(){var e=!1,r=/a/;return r.exec=function(){return e=!0,null},"split"===t&&(r.constructor={},r.constructor[c]=function(){return r}),r[d](""),!e}):void 0;if(!g||!p||"replace"===t&&!u||"split"===t&&!f){var h=/./[d],v=r(o,d,""[t],function(t,e,r,n,a){return e.exec===l?g&&!a?{done:!0,value:h.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),m=v[0],b=v[1];n(String.prototype,t,m),a(RegExp.prototype,d,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},"650d":function(t,e,r){},"7c56":function(t,e,r){var n=r("3754"),a=r("44de"),i=r("ddf7").f,o=r("a891").f,s=r("22e9"),l=r("f425"),c=n.RegExp,u=c,f=c.prototype,d=/a/g,g=/a/g,p=new c(d)!==d;if(r("dad2")&&(!p||r("b6f1")(function(){return g[r("8b37")("match")]=!1,c(d)!=d||c(g)==g||"/a/i"!=c(d,"i")}))){c=function(t,e){var r=this instanceof c,n=s(t),i=void 0===e;return!r&&n&&t.constructor===c&&i?t:a(p?new u(n&&!i?t.source:t,e):u((n=t instanceof c)?t.source:t,n&&i?l.call(t):e),r?this:f,c)};for(var h=function(t){t in c||i(c,t,{configurable:!0,get:function(){return u[t]},set:function(e){u[t]=e}})},v=o(u),m=0;v.length>m;)h(v[m++]);f.constructor=c,c.prototype=f,r("e5ef")(n,"RegExp",c)}r("c650")("RegExp")},"8b55":function(t,e,r){"use strict";r("34a3"),r("55a0"),r("3c6b"),r("7c56"),r("f763");var n=/([yMdhsm])(\1*)/g,a="yyyy-MM-dd";function i(t,e){e-=(t+"").length;for(var r=0;r<e;r++)t="0"+t;return t}e["a"]={getList:function(t){var e=t.keys,r=e.length,n=t.values,a=[],i={};return n.forEach(function(t){for(var n=0;n<r;n++)i[e[n]]=t[n];a.push(i),i={}}),a},getQueryStringByName:function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),r=window.location.search.substr(1).match(e),n="";return null!=r&&(n=r[2]),e=null,r=null,null==n||""===n||"undefined"===n?"":n},formatDate:{format:function(t,e){return e=e||a,e.replace(n,function(e){switch(e.charAt(0)){case"y":return i(t.getFullYear(),e.length);case"M":return i(t.getMonth()+1,e.length);case"d":return i(t.getDate(),e.length);case"w":return t.getDay()+1;case"h":return i(t.getHours(),e.length);case"m":return i(t.getMinutes(),e.length);case"s":return i(t.getSeconds(),e.length)}})},parse:function(t,e){var r=e.match(n),a=t.match(/(\d)+/g);if(r.length===a.length){for(var i=new Date(1970,0,1),o=0;o<r.length;o++){var s=parseInt(a[o]),l=r[o];switch(l.charAt(0)){case"y":i.setFullYear(s);break;case"M":i.setMonth(s-1);break;case"d":i.setDate(s);break;case"h":i.setHours(s);break;case"m":i.setMinutes(s);break;case"s":i.setSeconds(s);break}}return i}return null}}}},a0e0:function(t,e,r){r("dad2")&&"g"!=/./g.flags&&r("ddf7").f(RegExp.prototype,"flags",{configurable:!0,get:r("f425")})},a891:function(t,e,r){var n=r("fb6d"),a=r("b4e0").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,a)}},acb9:function(t,e,r){var n=r("d217"),a=r("7dea"),i=r("3a68"),o=r("5325"),s=r("03b3"),l=r("568a"),c=Object.getOwnPropertyDescriptor;e.f=r("dad2")?c:function(t,e){if(t=i(t),e=o(e,!0),l)try{return c(t,e)}catch(r){}if(s(t,e))return a(!n.f.call(t,e),t[e])}},b0f4:function(t,e,r){"use strict";var n=r("2f03")(!0);t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},f425:function(t,e,r){"use strict";var n=r("a013");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},f763:function(t,e,r){for(var n=r("dac5"),a=r("cfc7"),i=r("e5ef"),o=r("3754"),s=r("743d"),l=r("14fc"),c=r("8b37"),u=c("iterator"),f=c("toStringTag"),d=l.Array,g={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=a(g),h=0;h<p.length;h++){var v,m=p[h],b=g[m],y=o[m],x=y&&y.prototype;if(x&&(x[u]||s(x,u,d),x[f]||s(x,f,m),l[m]=d,b))for(v in n)x[v]||i(x,v,n[v],!0)}}}]);
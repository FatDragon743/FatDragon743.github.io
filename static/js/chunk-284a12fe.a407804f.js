(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-284a12fe"],{"1ce2":function(e,r,t){"use strict";var o=t("b6ab"),l=t.n(o);l.a},a55b:function(e,r,t){"use strict";t.r(r);var o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm login-container",attrs:{model:e.ruleForm2,rules:e.rules2,"label-position":"left","label-width":"0px"}},[t("h3",{staticClass:"title"},[e._v("系统登录")]),t("el-form-item",[t("el-radio",{staticClass:"left",attrs:{label:"0"},model:{value:e.ruleForm2.mode,callback:function(r){e.$set(e.ruleForm2,"mode",r)},expression:"ruleForm2.mode"}},[e._v("手机登录")]),t("el-radio",{staticClass:"right",attrs:{label:"1"},model:{value:e.ruleForm2.mode,callback:function(r){e.$set(e.ruleForm2,"mode",r)},expression:"ruleForm2.mode"}},[e._v("邮箱登录")])],1),0==e.ruleForm2.mode?t("el-form-item",{attrs:{prop:"account"}},[t("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"手机号"},model:{value:e.ruleForm2.phone,callback:function(r){e.$set(e.ruleForm2,"phone",r)},expression:"ruleForm2.phone"}})],1):e._e(),1==e.ruleForm2.mode?t("el-form-item",{attrs:{prop:"account"}},[t("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"邮箱"},model:{value:e.ruleForm2.email,callback:function(r){e.$set(e.ruleForm2,"email",r)},expression:"ruleForm2.email"}})],1):e._e(),t("el-form-item",{attrs:{prop:"checkPass"}},[t("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},model:{value:e.ruleForm2.password,callback:function(r){e.$set(e.ruleForm2,"password",r)},expression:"ruleForm2.password"}})],1),t("el-checkbox",{staticClass:"remember",attrs:{checked:""},model:{value:e.checked1,callback:function(r){e.checked1=r},expression:"checked1"}},[e._v("记住密码")]),t("el-checkbox",{staticClass:"remember right",model:{value:e.checked2,callback:function(r){e.checked2=r},expression:"checked2"}},[e._v("管理员账号")]),t("el-form-item",{staticStyle:{width:"100%"}},[t("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",loading:e.logining},nativeOn:{click:function(r){return r.preventDefault(),e.handleSubmit2(r)}}},[e._v("登录")])],1),t("el-link",{attrs:{type:"primary"},nativeOn:{click:function(r){return e.toRegister()}}},[e._v("没有账号？")])],1)},l=[],s=t("4ec3"),a={watch:{$router:function(e,r){console.log("go"),this.$router.go(0)}},data:function(){return{logining:!1,ruleForm2:{mode:"1",phone:"15700084670",email:"568442079@qq.com",password:"  "},rules2:{phone:[{required:!0,message:"请输入手机号",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},checked1:!0,checked2:!1}},methods:{toRegister:function(){this.$router.push({path:"/register"})},handleReset2:function(){this.$refs.ruleForm2.resetFields()},handleSubmit2:function(e){var r=this;this.$refs.ruleForm2.validate(function(e){if(!e)return console.log("error submit!!"),!1;r.logining=!0;var t=r.ruleForm2.mode?r.ruleForm2.email:r.ruleForm2.phone,o={mode1:"1",mode2:"0",account:t,passwd:r.ruleForm2.password};Object(s["f"])(o).then(function(e){r.logining=!1;var t=e.msg,o=e.code;if(200!==o)r.$message({message:t,type:"error"});else{var l=t.id,s=t.api_key,a=t.security_key,i=l+s+a;sessionStorage.setItem("user_key",JSON.stringify(i)),sessionStorage.setItem("user_id",JSON.stringify(l)),sessionStorage.setItem("api_key",JSON.stringify(s)),sessionStorage.setItem("security_key",JSON.stringify(a)),r.checked2?r.$router.push({path:"/admin"}):r.$router.push({path:"/table"})}})})}}},i=a,n=(t("1ce2"),t("17cc")),c=Object(n["a"])(i,o,l,!1,null,"e1c85572",null);r["default"]=c.exports},b6ab:function(e,r,t){}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44d54be0"],{a55b:function(e,t,r){"use strict";r.r(t);var c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm login-container",attrs:{model:e.ruleForm2,rules:e.rules2,"label-position":"left","label-width":"0px"}},[r("h3",{staticClass:"title"},[e._v("系统登录")]),r("el-form-item",{attrs:{prop:"account"}},[r("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"账号"},model:{value:e.ruleForm2.account,callback:function(t){e.$set(e.ruleForm2,"account",t)},expression:"ruleForm2.account"}})],1),r("el-form-item",{attrs:{prop:"checkPass"}},[r("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},model:{value:e.ruleForm2.checkPass,callback:function(t){e.$set(e.ruleForm2,"checkPass",t)},expression:"ruleForm2.checkPass"}})],1),r("el-checkbox",{staticClass:"remember",attrs:{checked:""},model:{value:e.checked1,callback:function(t){e.checked1=t},expression:"checked1"}},[e._v("记住密码")]),r("el-checkbox",{staticClass:"remember right",model:{value:e.checked2,callback:function(t){e.checked2=t},expression:"checked2"}},[e._v("管理员账号")]),r("el-form-item",{staticStyle:{width:"100%"}},[r("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",loading:e.logining},nativeOn:{click:function(t){return t.preventDefault(),e.handleSubmit2(t)}}},[e._v("登录")])],1),r("el-link",{attrs:{type:"primary"},nativeOn:{click:function(t){return e.register()}}},[e._v("没有账号？")])],1)},s=[],o=r("4ec3"),a={data:function(){return{logining:!1,ruleForm2:{mode:"",account:"18158504557",checkPass:"123456"},rules2:{account:[{required:!0,message:"请输入账号",trigger:"blur"}],checkPass:[{required:!0,message:"请输入密码",trigger:"blur"}]},checked1:!0,checked2:!1}},methods:{register:function(){console.log("in this"),this.$router.push({path:"/register"})},handleReset2:function(){this.$refs.ruleForm2.resetFields()},handleSubmit2:function(e){var t=this;this.$refs.ruleForm2.validate(function(e){if(!e)return console.log("error submit!!"),!1;t.logining=!0;var r={username:t.ruleForm2.account,password:t.ruleForm2.checkPass};Object(o["requestLogin"])(r).then(function(e){t.logining=!1;var r=e.msg,c=e.code,s=e.user;200!==c?t.$message({message:r,type:"error"}):(sessionStorage.setItem("user",JSON.stringify(s)),t.checked2?t.$router.push({path:"/admin"}):t.$router.push({path:"/table"}))})})}}},l=a,n=(r("c1da"),r("17cc")),i=Object(n["a"])(l,c,s,!1,null,"a8f92182",null);t["default"]=i.exports},c1da:function(e,t,r){"use strict";var c=r("ce1b"),s=r.n(c);s.a},ce1b:function(e,t,r){}}]);
//# sourceMappingURL=chunk-44d54be0.fba79bf5.js.map
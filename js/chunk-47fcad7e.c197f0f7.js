(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47fcad7e"],{"224e":function(e,a,r){"use strict";var s=r("c486"),t=r.n(s);t.a},"3a83":function(e,a,r){"use strict";r.r(a);var s=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"view-merchant-info"},[r("a-card",{attrs:{bordered:!1,title:"商户基本信息",headStyle:e.headStyle}},[r("a-form",{attrs:{form:e.merchantForm},on:{submit:e.handleSubmit}},[r("a-form-item",{attrs:{label:"商户编号",labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}}}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["user_no",{initialValue:e.user_no,rules:[{required:!0,message:"商户编号"}]}],expression:"['user_no', {initialValue:user_no, rules: [{ required: true, message: '商户编号' }]}]"}],attrs:{placeholder:"商户编号不可修改",disabled:e.disabled}})],1),r("a-form-item",{attrs:{label:"管理员姓名",labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}}}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["user_name",{initialValue:e.user_name,rules:[{required:!0,message:"管理员姓名"}]}],expression:"['user_name', {initialValue:user_name, rules: [{ required: true, message: '管理员姓名' }]}]"}],attrs:{name:"name",placeholder:"请输入管理员姓名"}})],1),r("a-form-item",{attrs:{label:"联系电话",labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}}}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["user_mobile",{initialValue:e.user_mobile,rules:[{required:!0,message:"联系电话"}]}],expression:"['user_mobile', {initialValue:user_mobile,  rules: [{ required: true, message: '联系电话' }]}]"}],attrs:{name:"phone",placeholder:"请输入联系人电话"}})],1),r("a-form-item",{attrs:{label:"绑定邮箱",labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}}}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["e_mail",{initialValue:e.e_mail,rules:[{type:"email",message:"请输入正确邮箱"},{required:!0,message:"请输入邮箱"}]}],expression:"['e_mail', {initialValue:e_mail, rules: [ {  type: 'email', message: '请输入正确邮箱',\n                      },{ required: true, message: '请输入邮箱' }]}]"}],attrs:{name:"email",placeholder:"请输入邮箱"}})],1),r("a-form-item",{staticStyle:{"text-align":"center"},attrs:{wrapperCol:{span:24}}},[r("a-button",{attrs:{htmlType:"submit",type:"primary",loading:e.isSubmiting,disabled:e.isSubmiting}},[e._v("保存")])],1)],1)],1)],1)},t=[],i=r("322e"),n=r("7ded"),l={name:"index",components:{AFormItem:i["a"]},data:function(){return{merchantForm:this.$form.createForm(this),headStyle:{height:"48px","font-size":"16px"},imageUrl:"",isSubmiting:!1,loading:!1,disabled:!0}},methods:{getUserInfo:function(e){var a=this;this.isSubmiting=!0,Object(n["e"])(e,2).then(function(e){if(a.isSubmiting=!1,0==e.code){var r=e.data;r&&"3008"==r.businessCode&&a.$message.success("商户信息编辑成功"),window.history.back()}else a.$message.error("编辑商户信息失败")}).catch(function(e){a.isSubmiting=!1,a.$message.error("编辑商户信息失败")})},handleSubmit:function(e){var a=this;e.preventDefault(),this.merchantForm.validateFields(function(e,r){e||a.getUserInfo(r)})}},created:function(){var e=this.$route.query;this.user_no=e.user_no,this.user_name=e.user_name,this.user_mobile=e.user_mobile,this.e_mail=e.e_mail}},m=l,o=(r("224e"),r("2877")),u=Object(o["a"])(m,s,t,!1,null,"1de9fb6a",null);a["default"]=u.exports},c486:function(e,a,r){}}]);
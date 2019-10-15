(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0710274e"],{"0528":function(e,a,r){"use strict";r.r(a);var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"view-create-line"},[r("create-line",{on:{lineInfo:e.lineInfo}}),r("bind-num",{ref:"bindNum",staticClass:"top"})],1)},o=[],l=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"view-create-line"},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.collapseShow,expression:"collapseShow"}],staticClass:"collapse-info"},[r("span",{staticClass:"lineNo"},[e._v(e._s(e.channel_no))]),r("span",{staticClass:"name"},[e._v(e._s(e.lineFormData.channel_name))]),r("span",{staticClass:"other-info"},[e._v(e._s(e.getLogisticsType()))]),r("span",{staticClass:"other-info"},[e._v("轻抛系数："+e._s(e.lineFormData.volume_factor))]),r("span",{staticClass:"other-info"},[e._v("燃油系数："+e._s(e.lineFormData.fuel_factor))]),e._e()]),r("a-card",{directives:[{name:"show",rawName:"v-show",value:!e.collapseShow,expression:"!collapseShow"}],attrs:{bordered:!1,title:"创建线路"}},[r("a-form",{attrs:{form:e.createLineForm},on:{submit:e.toCreateLines}},[r("a-form-item",{attrs:{label:"线路名称",labelCol:e.labelCol,required:!1,wrapperCol:e.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["channel_name",{rules:[{required:!0,message:"请输入线路名称"}]}],expression:"[ 'channel_name',{rules: [{ required: true, message: '请输入线路名称' }]}]"}],attrs:{placeholder:"请输入线路名称"}})],1),r("a-form-item",{attrs:{label:"运营商",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-radio-group",{attrs:{"default-value":e.defaultOperator},on:{change:e.handleOperatorInfo}},[e._l(e.operatorArray,function(a,t){return[r("a-radio-button",{attrs:{value:a.id}},[e._v("\n                            "+e._s(a.name)+"\n                        ")])]})],2)],1),r("a-row",[r("a-col",{attrs:{span:12}},[r("a-form-item",{attrs:{label:"是否FBA专线",labelCol:e.labelColHalf,wrapperCol:e.wrapperColHalf,required:!1}},[r("a-radio-group",{attrs:{"default-value":"1"},on:{change:e.handleFBALine}},[r("a-radio-button",{attrs:{value:"1"}},[e._v("是")]),r("a-radio-button",{attrs:{value:"0"}},[e._v("否")])],1)],1)],1),r("a-col",{attrs:{span:12}},[r("a-form-item",{attrs:{label:"末端派送公司",labelCol:e.labelColHalf,required:!1,wrapperCol:e.wrapperColHalf}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["end_send_company",{rules:[{required:!0,message:"请输入末端派送公司"}]}],expression:"[ 'end_send_company',{rules: [{ required: true, message: '请输入末端派送公司' }]}]"}],attrs:{placeholder:"请输入末端派送公司"}})],1)],1)],1),r("a-form-item",{attrs:{label:"中转仓",labelCol:e.labelCol,required:!1,wrapperCol:e.wrapperColWhole}},[r("a-select",{attrs:{"default-value":e.defaultTransferWarehouse},on:{change:e.handelTransferWarehouse}},e._l(e.transferWarehouse,function(a,t){return r("a-select-option",{key:t,attrs:{value:a.store_name}},[e._v("\n                        "+e._s(a.store_name)+"\n                    ")])}),1)],1),r("a-row",[r("a-col",{attrs:{span:12}},[r("a-form-item",{attrs:{label:"价格表",labelCol:e.labelColHalf}},[r("a-upload",{attrs:{name:"file",multiple:!1,remove:e.handleRemove,accept:".xls,.xlsx",beforeUpload:e.beforeUpload}},[r("a-button",[r("a-icon",{attrs:{type:"upload"}}),e._v("\n                                上传文件\n                            ")],1),e._v("\n                            请导入Excel价格表"),e._e()],1)],1)],1),r("a-col",{attrs:{span:12}},[r("a-form-item",{attrs:{label:"服务类别",labelCol:e.labelColHalf,wrapperCol:e.wrapperColHalf,required:!1}},[r("a-radio-group",{attrs:{"default-value":"0"},on:{change:e.handleServiceType}},[r("a-radio-button",{attrs:{value:"0"}},[e._v("红单")]),r("a-radio-button",{attrs:{value:"1"}},[e._v("蓝单")])],1)],1)],1)],1),r("a-row",[r("a-col",{attrs:{span:12}},[r("a-form-item",{attrs:{label:"轻抛系数",labelCol:e.labelColHalf,wrapperCol:e.wrapperColHalf,required:!1}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["volume_factor",{rules:[{required:!0,message:"请输入轻抛系数"}]}],expression:"[ 'volume_factor',{rules: [{ required: true, message: '请输入轻抛系数' }]}]"}],attrs:{placeholder:"请输入轻抛系数"}})],1)],1),r("a-col",{attrs:{span:12}},[r("a-form-item",{attrs:{label:"燃油系数",labelCol:e.labelColHalf,wrapperCol:e.wrapperColHalf,required:!1}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["fuel_factor",{rules:[{required:!0,message:"请输入燃油系数"}]}],expression:"[ 'fuel_factor',{rules: [{ required: true, message: '请输入燃油系数' }]}]"}],attrs:{placeholder:"请输入燃油系数"}})],1)],1)],1),r("a-form-item",{attrs:{label:"线路说明",labelCol:e.labelCol,wrapperCol:e.wrapperColWhole,required:!1}},[r("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["channel_desc",{rules:[{required:!1,message:"请输入线路说明"}]}],expression:"[ 'channel_desc',{rules: [{ required: false, message: '请输入线路说明' }]}]"}],attrs:{rows:"4",placeholder:"请输入线路说明"}})],1),r("a-form-item",{attrs:{label:"备注",labelCol:e.labelCol,wrapperCol:e.wrapperColWhole,required:!1}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["desc",{rules:[{required:!1,message:"请输入备注信息"}]}],expression:"[ 'desc',{rules: [{ required: false, message: '请输入备注信息' }]}]"}],attrs:{placeholder:"请输入备注信息"}})],1),r("a-form-item",{staticStyle:{"text-align":"center"}},[r("a-button",{attrs:{type:"primary",htmlType:"submit",loading:e.isSubmiting,disabled:e.isSubmiting}},[e._v("保存")])],1)],1)],1)],1)},s=[],n=(r("7f7f"),r("456d"),r("ac6a"),r("290c")),i=r("322e"),c=r("89ee"),u=r("c0e4"),p=r("261e"),d=r("da05"),m=r("35f8"),f={name:"create-line",components:{ACol:d["b"],ATextarea:p["a"],ARadioButton:u["a"],ARadioGroup:c["a"],AFormItem:i["a"],ARow:n["a"]},data:function(){return{createLineForm:this.$form.createForm(this),labelCol:{xs:{span:6},sm:{span:3}},wrapperCol:{xs:{span:12},sm:{span:9}},labelColHalf:{xs:{span:12},sm:{span:6}},wrapperColHalf:{xs:{span:24},sm:{span:18}},wrapperColWhole:{xs:{span:12},sm:{span:21}},lineFormData:{channel_name:"",logistics_type:0,middle_warehouse:0,end_send_company:"",service_type:0,is_fba:1,volume_factor:"",fuel_factor:"",channel_desc:"",files:"",desc:""},channel_no:"",fileList:[],collapseShow:!1,defaultOperator:0,defaultTransferWarehouse:"",warehouseVisible:!1,isSubmiting:!1,operatorArray:[{id:0,name:"GLS"},{id:1,name:"FedEx"},{id:2,name:"UPS"},{id:3,name:"DHL"},{id:4,name:"TNT"}],transferWarehouse:[{store_no:1,store_name:"【快鹅青岛仓】山东省青岛市黄岛区珠江路600号（天相国际5-815）"},{store_no:2,store_name:"【快鹅郑州仓】河南省郑州市高新区化工路600号（国风美唐5-815）"}]}},methods:{getLogisticsType:function(){var e=["GLS","FedEx","UPS","DHL","TNT"];return"运营商:"+e[this.defaultOperator]},toCreateLines:function(e){var a=this;e.preventDefault(),this.createLineForm.validateFields(function(e,r){if(!e){if(a.fileList.length<=0)return void a.$message.error("请导入价格单");if(!a.lineFormData.middle_warehouse)return void a.$message.error("请选择中转仓");var t=r;t.logistics_type=a.lineFormData.logistics_type,t.is_fba=a.lineFormData.is_fba,t.middle_warehouse=a.lineFormData.middle_warehouse,t.service_type=a.lineFormData.service_type,t.files=a.lineFormData.files,a.lineFormData=t;var o=new FormData;Object.keys(t).forEach(function(e){o.append(e,t[e])}),a.$emit("lineInfo",t),a.isSubmiting=!0,Object(m["a"])(o).then(function(e){if(a.hideLoading(),0==e.code){a.collapseShow=!0;var r=e.data;a.channel_no=r.channel_no,t.channel_no=a.channel_no,a.$emit("lineInfo",t),window.localStorage.setItem("list","1")}else a.$message.error(e.message||"创建线路失败")}).catch(function(e){a.hideLoading(),a.$message.error(res.message||"创建线路出错，请重试")})}})},hideLoading:function(){var e=this;setTimeout(function(){e.isSubmiting=!1,e.$message.success("线路创建成功")},2e3)},handleOperatorInfo:function(e){console.log("选择的运营商信息是：".concat(e.target.value)),this.lineFormData.logistics_type=e.target.value},handleFBALine:function(e){console.log("是否开启FBA路线：".concat(e.target.value)),this.lineFormData.is_fba=e.target.value},handleServiceType:function(e){console.log("服务类型：".concat(e.target.value)),this.lineFormData.service_type=e.target.value},handelTransferWarehouse:function(e){console.log("中转仓".concat(e)),this.lineFormData.middle_warehouse=e},beforeUpload:function(e){e.name;return this.lineFormData.files=e,this.fileList=[],this.fileList.push(e),console.log(this.fileList),!1},handleRemove:function(e){this.lineFormData.file=null,this.fileList=[]},toDownloadFile:function(){console.log("去下载价格单模板")},getStoreList:function(){var e=this;Object(m["e"])({}).then(function(a){0!=a.code&&a.data&&a.data.length>0?e.transferWarehouse=[]:(e.transferWarehouse=a.data,e.defaultTransferWarehouse=a.data[0].store_name)}).catch(function(a){e.transferWarehouse=[]})},modifyLines:function(){}},mounted:function(){this.getStoreList()}},h=f,b=(r("b659"),r("2877")),v=Object(b["a"])(h,l,s,!1,null,"afdf57b2",null),C=v.exports,w=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"bind-num"},[r("a-card",{staticClass:"top",attrs:{bordered:!1,title:"绑定下单账号"}},[r("a-form",{attrs:{form:e.bindAccountForm},on:{submit:e.toTest}},[r("a-form-item",{attrs:{label:"账号说明",labelCol:e.labelCol,wrapperCol:e.wrapperColWhole}},[r("span",{staticClass:"txt"},[e._v("UPS")])]),r("a-form-item",{attrs:{label:"账号类型",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-radio-group",{attrs:{"default-value":"0"},on:{change:e.handleAccountType}},[r("a-radio-button",{attrs:{value:"0"}},[e._v("预付费账号")]),r("a-radio-button",{attrs:{value:"1"}},[e._v("三方账号")])],1)],1),r("a-row",[r("a-col",{attrs:{span:12}},[r("a-form-item",{attrs:{label:"username",labelCol:e.labelColHalf,wrapperCol:e.wrapperColHalf}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["user_account",{rules:[{required:!0,message:"请输入物流账户"}]}],expression:"[ 'user_account',{rules: [{ required: true, message: '请输入物流账户' }]}]"}],attrs:{placeholder:"请输入物流账户"}})],1)],1),r("a-col",{attrs:{span:12}},[r("a-form-item",{attrs:{label:"password",labelCol:e.labelColHalf,wrapperCol:e.wrapperColHalf}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["pass_word",{rules:[{required:!0,message:"请输入密码"}]}],expression:"[ 'pass_word',{rules: [{ required: true, message: '请输入密码' }]}]"}],attrs:{placeholder:"请输入物流账户密码",type:"password"}})],1)],1)],1),r("a-form-item",{attrs:{label:"LicenseNumber",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["license_number",{rules:[{required:!0,message:"请输入物流牌照码"}]}],expression:"[ 'license_number',{rules: [{ required: true, message: '请输入物流牌照码' }]}]"}],attrs:{placeholder:"请输入物流牌照码"}})],1),1==e.account_type?[r("div",{staticStyle:{color:"black","font-size":"15px","font-weight":"600",margin:"16px 0"}},[e._v("三方账号信息")]),r("a-row",[r("a-col",{attrs:{span:12}},[r("a-form-item",{attrs:{label:"AccountNumber",labelCol:e.labelColHalf,wrapperCol:e.wrapperColHalf}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["pay_account",{rules:[{required:!0,message:"请输入支付账户名"}]}],expression:"[ 'pay_account',{rules: [{ required: true, message: '请输入支付账户名' }]}]"}],attrs:{placeholder:"请输入支付账户名"}})],1)],1),r("a-col",{attrs:{span:12}},[r("a-form-item",{attrs:{label:"CountryCode",labelCol:e.labelColHalf,wrapperCol:e.wrapperColHalf}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["accountPassword",{rules:[{required:!0,message:"请输入CountryCode"}]}],expression:"[ 'accountPassword',{rules: [{ required: true, message: '请输入CountryCode' }]}]"}],attrs:{placeholder:"请输入CountryCode"}})],1)],1)],1),r("a-form-item",{attrs:{label:"PostalCode",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["postalCode",{rules:[{required:!0,message:"PostalCode"}]}],expression:"[ 'postalCode',{rules: [{ required: true, message: 'PostalCode' }]}]"}],attrs:{placeholder:"请输入PostalCode"}})],1)]:e._e(),r("a-form-item",{staticStyle:{"text-align":"center"}},[r("a-button",{attrs:{type:"primary"}},[e._v("测试链接")]),r("a-button",{staticStyle:{"margin-left":"40px"},attrs:{type:"primary"}},[e._v("保存")])],1)],2)],1)],1)},_=[],g={name:"bind-num",components:{ACol:d["b"],ARow:n["a"],ARadioGroup:c["a"],ARadioButton:u["a"],AFormItem:i["a"]},data:function(){return{bindAccountForm:this.$form.createForm(this),labelCol:{xs:{span:6},sm:{span:3}},wrapperCol:{xs:{span:12},sm:{span:9}},labelColHalf:{xs:{span:12},sm:{span:6}},wrapperColHalf:{xs:{span:24},sm:{span:18}},wrapperColWhole:{xs:{span:12},sm:{span:21}},account_type:"",pass_word:"",license_number:""}},methods:{handleAccountType:function(e){console.log("账号类型：".concat(e.target.value)),this.account_type=e.target.value},lineInfo:function(e){console.log("info====="+JSON.stringify(e))},toTest:function(){}}},y=g,x=(r("2e13"),Object(b["a"])(y,w,_,!1,null,"227af658",null)),F=x.exports,q={name:"index",components:{BindNum:F,CreateLine:C},data:function(){return{}},methods:{lineInfo:function(e){this.$refs.bindNum.lineInfo(e)}},created:function(){}},L=q,T=(r("b3ef"),Object(b["a"])(L,t,o,!1,null,"4baf4404",null));a["default"]=T.exports},"0ec2":function(e,a,r){},"2e13":function(e,a,r){"use strict";var t=r("f04a"),o=r.n(t);o.a},"35f8":function(e,a,r){"use strict";r.d(a,"a",function(){return n}),r.d(a,"c",function(){return i}),r.d(a,"b",function(){return c}),r.d(a,"d",function(){return u}),r.d(a,"e",function(){return p});var t=r("365c"),o=r("4328"),l=r.n(o),s=r("b775");function n(e){return Object(s["b"])({url:"/api/v1/channel",method:"post",data:e,headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}})}function i(e){return Object(s["b"])({url:t["a"].LineList,method:"get",params:e,headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}})}function c(e){return Object(s["b"])({url:t["a"].LineDetail,method:"get",params:e,headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}})}function u(e){return Object(s["b"])({url:t["a"].OpenLines,method:"post",data:l.a.stringify(e),headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}})}function p(e){return Object(s["b"])({url:t["a"].StoreList,method:"get",params:e,headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}})}},"82d2":function(e,a,r){},b3ef:function(e,a,r){"use strict";var t=r("82d2"),o=r.n(t);o.a},b659:function(e,a,r){"use strict";var t=r("0ec2"),o=r.n(t);o.a},f04a:function(e,a,r){}}]);
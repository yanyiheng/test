(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-534cd69b"],{"30a3":function(t,e,n){"use strict";var a=n("86af"),s=n.n(a);s.a},"35f8":function(t,e,n){"use strict";n.d(e,"a",function(){return c}),n.d(e,"c",function(){return l}),n.d(e,"b",function(){return r}),n.d(e,"d",function(){return d}),n.d(e,"e",function(){return u});var a=n("365c"),s=n("4328"),i=n.n(s),o=n("b775");function c(t){return Object(o["b"])({url:"/api/v1/channel",method:"post",data:t,headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}})}function l(t){return Object(o["b"])({url:a["a"].LineList,method:"get",params:t,headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}})}function r(t){return Object(o["b"])({url:a["a"].LineDetail,method:"get",params:t,headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}})}function d(t){return Object(o["b"])({url:a["a"].OpenLines,method:"post",data:i.a.stringify(t),headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}})}function u(t){return Object(o["b"])({url:a["a"].StoreList,method:"get",params:t,headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}})}},"86af":function(t,e,n){},d9f6:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view-line-list"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticStyle:{"margin-bottom":"10px"}},[n("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:t.selectAll}},[t._v("全选")]),n("a-button",{staticStyle:{"margin-left":"10px"}},[t._v("批量关闭")]),n("a-button",{staticStyle:{"margin-left":"10px"}},[t._v("批量打开")])],1),n("a-spin",{attrs:{spinning:t.lineListLoading}},[n("a-list",{attrs:{grid:{gutter:24,lg:3,md:2,sm:1,xs:1},dataSource:t.dataSource,loading:t.loading},scopedSlots:t._u([{key:"renderItem",fn:function(e){return n("a-list-item",{staticStyle:{width:"25%"}},[null===e?[n("a-button",{staticClass:"new-btn",attrs:{type:"dashed"},on:{click:t.addNewLine}},[n("a-icon",{attrs:{type:"plus"}}),t._v("\n                        添加新路线\n                    ")],1)]:[n("a-card",{class:{"card-border":e.checked},attrs:{hoverable:!0,"body-style":t.bodyStyle},on:{click:function(n){return t.itemSelect(e)}}},[n("div",{staticClass:"list-card-cover",attrs:{slot:"cover"},slot:"cover"},[n("a-checkbox",{directives:[{name:"show",rawName:"v-show",value:e.checked,expression:"item.checked"}],staticStyle:{position:"absolute","margin-left":"20px","margin-top":"13px"},attrs:{value:e.channel_no,checked:e.checked}}),n("img",{attrs:{alt:"example",src:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}}),n("div",{staticClass:"mask-des"},[t._v("\n                                "+t._s(e.channel_name)+"\n                            ")])],1),[n("div",{staticClass:"card-txt"},[t._v("线路编号："),n("span",[t._v(t._s(e.channel_no))])]),n("div",{staticClass:"card-txt"},[t._v("中转仓："),n("span",[t._v(t._s(e.middle_warehouse))])]),n("div",{staticClass:"card-txt"},[t._v("线路要求："),n("span",[t._v(t._s(e.channel_desc))])]),n("div",{staticClass:"card-txt"},[t._v("价格导入时间："),n("span",[t._v(t._s(e.time))])]),n("div",{staticClass:"status"},[n("span",{class:0==e.account_status?"red":"main-color"},[t._v(t._s(0==e.account_status?"• 未绑定下单账号 ":" • 已绑定下单账号")+" ")]),n("span",{class:0==e.channel_status?"red":"main-color"},[t._v(" "+t._s(0==e.channel_status?"• 线路已关闭 ":" • 线路已开启"))])])],n("template",{staticClass:"ant-card-actions",slot:"actions"},[n("a",{on:{click:t.lookPrice}},[t._v("查看价格单")]),n("a",{on:{click:function(n){return t.toLineDetail(e)}}},[t._v("线路详情")]),n("a",{on:{click:function(n){return t.openOrClose(e)}}},[t._v(t._s(0==e.channel_status?"开启":"关闭"))])])],2)]],2)}}])}),n("div",{directives:[{name:"show",rawName:"v-show",value:t.dataSource&&t.dataSource.length>0,expression:"dataSource && dataSource.length > 0"}],staticStyle:{"text-align":"right","margin-top":"15px"}},[n("a-pagination",{directives:[{name:"show",rawName:"v-show",value:t.dataSource&&t.dataSource.length>1,expression:"dataSource && dataSource.length > 1"}],attrs:{showSizeChanger:!1,pageSize:t.pageSize,total:t.total_nums},on:{"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},change:t.pageChange},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}})],1)],1),n("a-modal",{attrs:{title:"温馨提示"},model:{value:t.modelVisible,callback:function(e){t.modelVisible=e},expression:"modelVisible"}},[n("template",{slot:"footer"},[n("a-button",{key:"back",on:{click:t.modelCancel}},[t._v("取消")]),n("a-button",{key:"submit",attrs:{type:"primary",loading:t.modelLoading,disabled:t.modelLoading},on:{click:t.modelSure}},[t._v("\n                "+t._s(t.modelSureTxt)+"\n            ")])],1),n("p",[t._v(t._s(t.modelContent))])],2)],1)},s=[],i=n("a6b6"),o=n("35f8"),c={name:"index",components:{AListItem:i["a"]},data:function(){return{loading:!0,lineListLoading:!1,dataSource:[],pagination:{},current:1,pageSize:12,total_nums:0,bodyStyle:{padding:"8px 20px",position:"relative"},modelVisible:!1,modelSureTxt:"",modelContent:"",modelLoading:!1,selectItem:{}}},methods:{addNewLine:function(){this.$router.push({path:"/lines/createLine"})},toLineDetail:function(t){this.$router.push({path:"/lines/lineDetail",query:{channel_no:t.channel_no,logistics_type:t.logistics_type,account_status:t.account_status}})},itemSelect:function(t){t.checked=!t.checked},openOrClose:function(t){this.modelSureTxt=0==t.channel_status?"开启":"关闭",this.modelContent=0==t.channel_status?"确定开启线路？":"确定关闭线路?",this.selectItem=t,this.modelVisible=!0},lookPrice:function(){this.$confirm({title:"温馨提示",content:"此功能暂未提供，敬请期待",onOk:function(){return new Promise(function(t,e){setTimeout(Math.random()>.5?t:e,500)}).catch(function(){})},onCancel:function(){}})},modelSure:function(){this.modelLoading=!0,this.openOrCloseRequest(this.selectItem)},modelCancel:function(){this.modelVisible=!1},openOrCloseRequest:function(t){var e=this,n=t.channel_no,a=t.logistics_type,s=0;1==t.channel_status?s=0:0==t.channel_status&&(s=1),Object(o["d"])({channel_no:n,logistics_type:a,channel_status:s}).then(function(t){e.modelVisible=!1,e.modelLoading=!1,0==t.code?3026!=t.data.businessCode&&3027!=t.data.businessCode||(e.$message.success(t.data.businessDesc),e.getLineList(e.current)):e.$message.error(t.data&&t.data.businessDesc||"操作失败")}).catch(function(t){e.modelVisible=!1,e.modelLoading=!1,e.$message.error(t||"操作失败")})},checkChange:function(t){},selectAll:function(){},pageChange:function(t){this.current!=t&&(this.current=t,this.getLineList(t))},getLineList:function(t){var e=this;this.dataSource&&this.dataSource.length>0?this.lineListLoading=!0:this.loading=!0,Object(o["c"])({page:t}).then(function(n){if(e.lineListLoading=!1,e.loading=!1,0==n.code){var a=n.data.channel_list;e.total_nums=n.data.total_nums||0,1==t&&(a.unshift(null),window.localStorage.setItem("list","")),e.dataSource=a}else e.$message.error("线路列表请求失败")}).catch(function(t){e.lineListLoading=!1,e.loading=!1,e.$message.error("线路列表请求失败")})}},created:function(){this.getLineList(1)},mounted:function(){var t=window.localStorage.getItem("list");"1"==t&&(this.current=1,this.getLineList(1))}},l=c,r=(n("30a3"),n("2877")),d=Object(r["a"])(l,a,s,!1,null,"35cf50a5",null);e["default"]=d.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bc962f18"],{"00d3":function(t,s,i){},"0e42":function(t,s,i){},"1cb8":function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"spinner7"},[i("div",{staticClass:"spinner-container container1"},[i("div",{staticClass:"circle1"}),i("div",{staticClass:"circle2"}),i("div",{staticClass:"circle3"}),i("div",{staticClass:"circle4"})]),i("div",{staticClass:"spinner-container container2"},[i("div",{staticClass:"circle1"}),i("div",{staticClass:"circle2"}),i("div",{staticClass:"circle3"}),i("div",{staticClass:"circle4"})]),i("div",{staticClass:"spinner-container container3"},[i("div",{staticClass:"circle1"}),i("div",{staticClass:"circle2"}),i("div",{staticClass:"circle3"}),i("div",{staticClass:"circle4"})])])}],e={},c=e,o=(i("6aab"),i("2877")),l=Object(o["a"])(c,a,n,!1,null,"578604de",null);l.options.__file="loading.vue";s["a"]=l.exports},"6aab":function(t,s,i){"use strict";var a=i("0e42"),n=i.n(a);n.a},"89d4":function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"myList"},[i("div",{staticClass:"topBar"},[i("span",{staticClass:"backbtn iconfont icon-left",on:{click:t.GoBack}}),i("p",{staticClass:"title"},[t._v(t._s(t.Title))])]),i("scroll",{staticClass:"scroll-wrap",class:{"scroll-wrap-bottom":t.needBottomMargin},attrs:{pullup:!0},on:{scrollToEnd:t.scrollToEnd}},[i("ul",[t._t("default")],2)])],1)},n=[],e=i("e9fc"),c={props:{Title:{type:String,default:""},needBottomMargin:{type:Boolean,default:!1}},methods:{GoBack:function(){this.$router.back()},scrollToEnd:function(){this.$emit("scrollToEnd")}},components:{Scroll:e["a"]}},o=c,l=(i("cfc8"),i("2877")),r=Object(l["a"])(o,a,n,!1,null,"1aedd296",null);r.options.__file="myList.vue";s["a"]=r.exports},9306:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("tip",{ref:"tip"}),i("my-list",{attrs:{Title:"粉丝"},on:{scrollToEnd:t.scrollToEnd}},[t._l(t.list,function(s){return i("li",{key:s.id,staticClass:"list-item"},[s.isRead?t._e():i("span",{staticClass:"point"}),i("img",{staticClass:"avatar",attrs:{src:""+t.baseURL+s.userAvatar,width:"45",height:"45",alt:""}}),i("div",{staticClass:"main"},[i("p",{staticClass:"name"},[t._v(t._s(s.userNickname))]),i("p",{staticClass:"name"},[t._v("关注了你")]),i("p",{staticClass:"desc"},[t._v(t._s(t.formatTime(s.createdAt)))])]),i("div",{staticClass:"btn",class:{"btn-inactive":s.bothStatus},domProps:{innerHTML:t._s(s.bothStatus?"互相关注":"关注")},on:{click:function(i){t.triggerFollow(s)}}})])}),t.list.length?t._e():i("div",{staticClass:"tip-wrap"},[i("p",[t._v("您还没有粉丝哦")]),i("p",{staticClass:"desc"},[t._v("快去拍摄精彩视频吸引粉丝吧！")])]),i("loading",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}]})],2)],1)},n=[],e=i("be94"),c=i("89d4"),o=i("41ea"),l=i("8b55"),r=i("2f62"),d=i("1cb8"),u=21,f={data:function(){return{list:[],isLoading:!1,page:0,isEnd:!1,baseURL:o["a"],timer:null}},created:function(){this.fetchFansList()},beforeDestroy:function(){var t=this,s=this.loginInfo.userId;this.$axios.get("/api/user/".concat(s,"/readAllFanMsg")).then(function(){t.getFanUnreadNum(s)})},methods:Object(e["a"])({fetchFansList:function(){var t=this;if(!this.isEnd){var s=this.loginInfo.userId;this.isLoading=!0,this.page++,this.$axios.get("/api/user/".concat(s,"/Fans/page/").concat(this.page,"/").concat(this.loginInfo.userId)).then(function(s){t.isLoading=!1,s.data.data.length<u&&(t.isEnd=!0),t.list=t.list.concat(s.data.data)})}},triggerFollow:function(t){var s=this;this.timer||(this.timer=setTimeout(function(){s.$axios.get("/api/user/".concat(s.loginInfo.userId,"/triggerFollow/").concat(t.userId)).then(function(i){t.bothStatus=!t.bothStatus,t.bothStatus?s.$refs.tip.show("关注成功"):s.$refs.tip.show("取关成功"),s.timer=null,s.$socket.emit("sendTriggerFollow",{fromUserId:s.loginInfo.userId,toUserId:t.userId})}).catch(function(t){s.$refs.tip.show("网络错误"),s.timer=null})},300))},scrollToEnd:function(){this.fetchFansList()},formatTime:l["d"]},Object(r["b"])(["getFanUnreadNum"])),computed:Object(e["a"])({},Object(r["c"])(["loginInfo"])),components:{MyList:c["a"],Loading:d["a"]}},p=f,v=(i("fa10"),i("2877")),h=Object(v["a"])(p,a,n,!1,null,"d31e1004",null);h.options.__file="MessageFan.vue";s["default"]=h.exports},cfc8:function(t,s,i){"use strict";var a=i("df3c"),n=i.n(a);n.a},df3c:function(t,s,i){},fa10:function(t,s,i){"use strict";var a=i("00d3"),n=i.n(a);n.a}}]);
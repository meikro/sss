(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5710b6dc"],{"0e42":function(t,i,s){},1949:function(t,i,s){"use strict";var e=s("273b"),a=s.n(e);a.a},"1cb8":function(t,i,s){"use strict";var e=function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"spinner7"},[s("div",{staticClass:"spinner-container container1"},[s("div",{staticClass:"circle1"}),s("div",{staticClass:"circle2"}),s("div",{staticClass:"circle3"}),s("div",{staticClass:"circle4"})]),s("div",{staticClass:"spinner-container container2"},[s("div",{staticClass:"circle1"}),s("div",{staticClass:"circle2"}),s("div",{staticClass:"circle3"}),s("div",{staticClass:"circle4"})]),s("div",{staticClass:"spinner-container container3"},[s("div",{staticClass:"circle1"}),s("div",{staticClass:"circle2"}),s("div",{staticClass:"circle3"}),s("div",{staticClass:"circle4"})])])}],n={},o=n,c=(s("6aab"),s("2877")),l=Object(c["a"])(o,e,a,!1,null,"578604de",null);l.options.__file="loading.vue";i["a"]=l.exports},"273b":function(t,i,s){},6282:function(t,i,s){"use strict";var e=s("ae4b"),a=s.n(e);a.a},"6aab":function(t,i,s){"use strict";var e=s("0e42"),a=s.n(e);a.a},"70b9":function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[t.isLoading?s("loading"):t._e(),t.isLoading?t._e():s("div",[s("followed-list",{attrs:{list:t.list},on:{close:t.close,showCommentList:t.showCommentList}})],1)],1)},a=[],n=s("be94"),o=s("1cb8"),c=s("ed17"),l=s("2f62"),r={data:function(){return{page:0,isLoading:!0,list:[]}},computed:Object(n["a"])({},Object(l["c"])(["loginInfo"])),created:function(){this.fetchVideoList()},methods:{showCommentList:function(t,i){this.$emit("showCommentList",t,i)},fetchVideoList:function(){var t=this,i="me"===this.$route.params.id?this.loginInfo.userId:this.$route.params.id;this.isLoading=!0,this.page++,this.$axios.get("/api/user/".concat(i,"/Videos/page/").concat(this.page)).then(function(i){t.list=t.list.concat(i.data.data),t.isLoading=!1})},close:function(){this.$emit("close")}},components:{FollowedList:c["a"],Loading:o["a"]}},d=r,u=(s("6282"),s("2877")),f=Object(u["a"])(d,e,a,!1,null,"389ade00",null);f.options.__file="videoAndDesc.vue";i["default"]=f.exports},ae4b:function(t,i,s){},ed17:function(t,i,s){"use strict";var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"followed-list"},[t._l(t.list,function(i,e){return s("div",{key:i.Video.videoId,staticClass:"followed-item"},[s("div",{staticClass:"top"},[s("img",{staticClass:"avatar",attrs:{src:""+t.baseURL+i.Video.userAvatar,alt:"",width:"30",height:"30"},on:{click:function(s){t.chooseUser(i.Video.userId)}}}),s("span",{staticClass:"name"},[t._v("@"+t._s(i.Video.userNickname))])]),s("div",{staticClass:"desc"},[t._v(t._s(i.Video.videoDesc))]),s("div",{staticClass:"video-wrap"},[s("video",{staticClass:"video",attrs:{poster:i.Video.videoCover,src:i.Video.videoPath,"webkit-playsinline":"",playsinline:"","x5-video-player-type":"h5"},on:{click:function(i){return i.target!==i.currentTarget?null:t.playHandler(i)}}})]),s("div",{staticClass:"button-bar"},[s("div",{staticClass:"like iconfont icon-heart-fill",class:{"red-heart":t.likes[e]},on:{click:function(s){t.toggleLike(i,e)}}},[s("span",{staticClass:"likenum"},[t._v(t._s(i.WSLCNum.likeNum))])]),s("div",{staticClass:"comment iconfont icon-message",on:{click:function(s){s.stopPropagation(),t.showCommentList(i.Video.videoId,i.WSLCNum.commentNum)}}},[s("span",{staticClass:"commentnum"},[t._v(t._s(i.WSLCNum.commentNum))])]),s("div",{staticClass:"share iconfont icon-share"},[s("span",{staticClass:"sharenum"},[t._v(t._s(i.WSLCNum.shareNum))])])]),s("div",{staticClass:"time"},[t._v(t._s(t.formatTime(i.Video.createdAt)))])])}),s("no-more",{staticClass:"no-more"})],2)},a=[],n=(s("6762"),s("2fdb"),s("be94")),o=s("d94a"),c=s("41ea"),l=s("8b55"),r=s("2f62"),d={props:{list:{type:Array,required:!0}},created:function(){for(var t=this,i=function(i,s){t.$axios.get("/api/user/".concat(t.loginInfo.userId,"/isLiked/").concat(t.list[i].Video.videoId)).then(function(e){t.likes[i]=e.data.data,i===s-1&&t.$forceUpdate()})},s=0,e=this.list.length;s<e;s++)i(s,e)},watch:{list:function(t,i){for(var s=this,e=function(t,i){s.$axios.get("/api/user/".concat(s.loginInfo.userId,"/isLiked/").concat(s.list[t].Video.videoId)).then(function(e){s.likes[t]=e.data.data,t===i-1&&s.$forceUpdate()})},a=i.length,n=t.length;a<n;a++)e(a,n)}},data:function(){return{likes:[],baseURL:c["a"]}},computed:Object(n["a"])({},Object(r["c"])(["loginInfo"])),methods:{showCommentList:function(t,i){this.$emit("showCommentList",t,i)},playHandler:function(t){var i=t.target;i.paused?i.play():i.pause()},toggleLike:function(t,i){var s=this;this.$axios.get("/api/user/".concat(this.loginInfo.userId,"/triggerLike/").concat(t.Video.videoId)).then(function(e){e.data.data.includes("取消")?(s.likes[i]=!1,t.WSLCNum.likeNum--):(s.likes[i]=!0,t.WSLCNum.likeNum++),s.likes=[].concat(s.likes),s.$socket.emit("sendTriggerLike",{fromUserId:s.loginInfo.userId,toUserId:t.Video.userId})})},chooseUser:function(t){"/followed"===this.$route.path&&this.$router.push("/profile/".concat(t))},formatTime:l["d"]},components:{NoMore:o["a"]}},u=d,f=(s("1949"),s("2877")),m=Object(f["a"])(u,e,a,!1,null,"4b12de74",null);m.options.__file="FollowedList.vue";i["a"]=m.exports}}]);
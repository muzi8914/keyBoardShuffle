webpackJsonp([0],{"9+cQ":function(e,t){},Luci:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={data:function(){return{isShow:!1,num:[1,2,3,4,5,6,7,8,9,0],keyBoard:[],deleteImg:"../../static/img/delete.png"}},methods:{shuffle:function(e){var t=void 0,n=void 0,s=void 0,i=void 0;for(t=e.length;t>0;t--)n=e[s=Math.floor(Math.random()*t)],e[s]=e[t-1],e[t-1]=n,t==e.length&&(i=e[t-1]);e=e.slice(0,-1);var a=["",i,this.deleteImg];return this.keyBoard=e.concat(a),this.keyBoard},tapNum:function(e,t,n){e=String(e)},changeBG:function(){this.$refs.ul.addEventListener("touchstart",function(e){console.log(1212);var t=(e||event).target;-1==t.className.indexOf("BgG")&&(t.style.background="#F2F2F2")},!1),this.$refs.ul.addEventListener("touchend",function(e){console.log(3434);var t=(e||event).target;-1==t.className.indexOf("BgG")&&(t.style.background="#FFF")},!1)}},created:function(){var e=this;this.shuffle(this.num),setTimeout(function(){e.isShow=!0,e.$nextTick(function(){e.changeBG()})},1e3)}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("transition",{attrs:{name:"slide-up"}},[e.isShow?n("section",{staticClass:"floatKeyBoard"},[n("div",{ref:"ul",staticClass:"list flex flex_wrap flex_center flex_end"},e._l(e.keyBoard,function(t,s){return n("ul",{key:s,staticClass:"ul"},[11!=s?n("li",{staticClass:"li flex flex_center flex_vcenter",class:{BgG:9==s,BorderLR:1==s||4==s||7==s||10==s},on:{click:function(n){return e.tapNum(t,s,n)}}},[e._v(e._s(t))]):n("li",{staticClass:"li flex flex_center flex_vcenter BgG",on:{click:function(n){return e.tapNum(t,s,n)}}},[n("img",{staticClass:"deletImg",attrs:{src:t}})])])}),0)]):e._e()])],1)},staticRenderFns:[]};var a=n("VU/8")(s,i,!1,function(e){n("9+cQ")},"data-v-a2f66790",null);t.default=a.exports}});
//# sourceMappingURL=0.89b2d225dd08c3d84250.js.map
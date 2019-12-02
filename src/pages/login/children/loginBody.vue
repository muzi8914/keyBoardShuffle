<template>
   <div class="loginBody">
      <div class="logo"></div>
      <div class="telephone">
         <section class="phoneNumber flex">
            <p class="local flex flex_vcenter flex_center">+86</p>
            <input class="cellphone" type="text" placeholder="请输入手机号" v-model="phoneNum" maxlength="11">
         </section>
         <div class="floatInp" @click="showBoard"></div>
      </div>
      <p class="notice">未注册的手机号通过注册后会自动注册</p>
      <button class="confirm" :class="{'btnBg': phone}" @click="confirm">获取短信验证码</button>
      <section class="loginWay flex flex_between">
         <p @click="otherWay('ps')">密码登录</p>
         <p @click="otherWay('ap')">其他方式登录</p>
      </section>
   </div>
</template>

<script>

export default {
   props: {
      phoneNum: {
         type: String,
         default: undefined
      },
   },
   data() {
      return {
         phone: false,//
      }
   },
   methods: {
      otherWay(arg) {
         if (arg=='ps') {
            this.$emit('showKeyBoard',false)
         } else if (arg=='ap') {
            alert('想走后门进银行？别想！！！')
         }
      },
      showBoard(){
         let isShow = true
         this.$emit('showKeyBoard',isShow)
      },
      confirm() {
         if (this.phoneNum) {
            alert('OK，带你去取钱^_^')
         }
      }
   },
   created () {
      console.log(this.phoneNum);
      if (this.phoneNum) {
         this.phone = true
      }
   },
   watch: {
      'phoneNum'(newValue, oldValue) {
         if (newValue) {
            this.phone = true
         } else {
            this.phone = false
         }
      }
   },
}
</script>

<style scoped>
/*------------- 整个页面 -------------*/
.loginBody{
   width: 100%;
   height: 100%;
   padding: 0 40px;
   box-sizing: border-box;
   font-size: 12px;
}
/*------------- logo -------------*/
.logo{
   /* width: 100%; */
   height: 182px;
   margin-top: 20px;
   background: url(../../../../static/img/logo.png) no-repeat center;
}
/*------------- 手机号输入框 -------------*/
.telephone{
   width: 100%;
   margin-top: 20px;
   position: relative;
}
.phoneNumber{
   width: 100%;
   padding: 10px 0;
   background-color: #f5f5f5;
}
.local{
   width: 50px;
   letter-spacing: 1px;
   font-weight: bold;
   border-right: 1px solid #c5c5c5;
}
.cellphone{
   width: 100%;
   border: none;
   text-indent: 10px;
   background-color: #f5f5f5;
}
.floatInp{
   width: 100%;
   height: 100%;
   position: absolute;
   left: 0;
   top: 0;
   background-color: transparent;
}
/*------------- 文字提示 -------------*/
.notice{
   margin: 10px 0;
   color: #c5c5c5;
   font-size: 12px;
}
/*------------- 确认按钮 -------------*/
.confirm{
   width: 100%;
   padding: 10px 0;
   background-color: #CCC;
   border: none;
   margin: 20px 0;
   border-radius: 4px;
   color: #FFF;
}
.btnBg{
   background-color: dodgerblue!important;
}
/*------------- 其他登录方式 -------------*/
.loginWay{
   color: #29B5EF;
}
</style>
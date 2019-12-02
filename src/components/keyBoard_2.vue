<template>
   <transition name="slide-up">
   <!-- <transition name="fade"> -->
      <section class="floatKeyBoard" v-if="isShow">
         <div ref="ul" class="list flex flex_wrap flex_vcenter">
            <ul v-for="(i,k) in keyBoard" :key="k" class="ul">
               <li v-if="k==9" class="li flex flex_center flex_vcenter BgG"></li>
               <li v-else-if="k==11" class="li flex flex_center flex_vcenter bgDelete" @click="tapNum(i,k,$event)"></li>
               <li v-else class="li flex flex_v flex_center flex_vcenter" :class="{'BorderR0': !((k+1)%3),'borderB0': (keyBoard.length-k)>3}" @click="tapNum(i,k,$event)">
                  <p class="bigNum">{{i.num}}</p>
                  <p v-if="k!=10" class="smallLetter">{{i.word}}</p>
               </li>
            </ul>
         </div>
      </section>
   </transition>
</template>

<script>
export default {
   props: {
      isShow: {
         type: Boolean,
         default: true
      },
   },
	data () {
		return {
			// isShow: false,//加载提示,加载中，显示加载loadidng,加载完成，自动弹出键盘
			keyBoard: [//虚拟数字键盘
            { num: 1, word: '' },
            { num: 2, word: 'ABC' },
            { num: 3, word: 'DEF' },
            { num: 4, word: 'GHI' },
            { num: 5, word: 'JKL' },
            { num: 6, word: 'MNO' },
            { num: 7, word: 'PQRS' },
            { num: 8, word: 'TUV' },
            { num: 9, word: 'WXYZ' },
            { num: '', word: '' },
            { num: 0, word: '' },
            { num: '', word: '' },
         ],
			deleteImg: '../../static/img/delete.png',//删除按钮图片
			skey: "", //输入的密码
         text: '',//页面显示的 * 号
		}
	},
	methods: {
		// 输入密码
      tapNum(i,k,e) {
         let ss = '*'
         if (k==9) {
            return
         } else if (k==11) {
            this.skey = this.skey.slice(0,-1)
            this.text = this.text.slice(0,-1)
         } else {
	         this.skey += i.num
            if (this.skey.length > 6) {
               this.skey = this.skey.substr(0,6)
               return
            }
            this.text += ss
         }
         this.$emit('changeNum',this.skey)
		},
		// 按下数字时，背景变色响应，抬起，恢复原背景色
		changeBG() {
         this.$refs.ul.addEventListener('touchstart',(e)=>{
            let ev = e || event
            let li = ev.target
            if (li.className == 'bigNum' || li.className == 'smallLetter') {
               li.parentNode.style.backgroundColor = '#F2F2F2'
            } else if (li.className.indexOf('li') > -1&&li.className.indexOf('BgG') == -1) {
               li.style.backgroundColor = '#F2F2F2'
            }
         },false)
         this.$refs.ul.addEventListener('touchend',(e)=>{
            let ev = e || event
            let li = ev.target
            if (li.className == 'bigNum' || li.className == 'smallLetter') {
               li.parentNode.style.backgroundColor = '#FFF'
            } else if (li.className.indexOf('li') > -1&&li.className.indexOf('BgG') == -1) {
               li.style.backgroundColor = '#FFF';
            }
         },false)
      },
      resetStatus() {
         this.$nextTick(()=>{
            this.changeBG()
         })
      }
	},
	created () {
		if (this.isShow) {
         this.resetStatus()
         return
      }
	},
   watch: {
      'isShow'(newValue, oldValue) {
         if (this.isShow) {
            this.resetStatus()
         }
      }
   },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list,li.li{
	width: 100%;
	height: 100%;
}
.floatKeyBoard{
	position: absolute;
   left: 0;
   bottom: 0;
   width: 100%;
   height: 39%;
   background-color: #FFF;
   box-shadow: 0px -3px 3px #F5F5F5;
}
.list{
   justify-content: space-evenly;
}
ul.ul{
   width: 33%;
   height: 24.6%;
   font-size: 14px;
   border-right: 1px solid #F2F2F2;
   border-bottom: 1px solid #F2F2F2;
}
.bigNum{
   font-weight: bolder;
   font-size: 20px;
}
.smallLetter{
   min-width: 16px;
   height: 16px;
}

.bgDelete{
   background: url(../../static/img/delete.png) center / 30px 21px no-repeat;
}

.BgG{
   background-color: transparent;
}

.BorderR0{
   border-right: none!important;
}
.borderB0{
   border-bottom: none!important;
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-up-enter-active {
   transition: all .6s ease;
}
.slide-up-leave-active {
   transition: all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-up-enter, .slide-up-leave-to {
   transform: translateY(100%);
   opacity: 0;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
	opacity: 0;
}
</style>
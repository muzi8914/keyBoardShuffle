<template>
   <transition name="fade">
   <!-- <transition name="slide-up"> -->
      <section class="floatKeyBoard" v-if="isShow">
         <div ref="ul" class="list flex flex_wrap flex_vcenter">
            <ul v-for="(i,k) in keyBoard" :key="k" class="ul">
               <li v-if="k==9" class="li flex flex_center flex_vcenter BgG"></li>
               <li v-else-if="k==11" class="li flex flex_center flex_vcenter bgDelete" @click="tapNum(i,k,$event)"></li>
               <li v-else class="li flex flex_center flex_vcenter" @click="tapNum(i,k,$event)">{{i}}</li>
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
			num: [1,2,3,4,5,6,7,8,9,0],//虚拟数字键盘
			keyBoard: [],//显示的
			// deleteImg: '../../static/img/delete.png',//删除按钮图片
			skey: "", //输入的密码
         text: '',//页面显示的 * 号
		}
	},
	methods: {
		// 虚拟键盘	数组洗牌
      shuffle(array){
         let i,x,j,end;
         for(i = array.length; i > 0; i--){
            j = Math.floor(Math.random() * i);
            x = array[j];
            array[j] = array[i-1];
            array[i-1] = x;
            if (i == array.length) {
               end = array[i-1]
            }
         }
         array = array.slice(0,-1)
         let arr = ['',end,'']
         this.keyBoard = array.concat(arr)
         return this.keyBoard
		},
		// 输入密码
      tapNum(i,k,e) {
			// 此处 i 必须转换成 String 类型，用于拼接。
         i = String(i)
         let ss = '*'
         if (k==9) {
            return
         } else if (k==11) {
            this.skey = this.skey.slice(0,-1)
            this.text = this.text.slice(0,-1)
         } else {
	         this.skey += i
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
            if (li.className.indexOf('BgG') == -1) {
               li.style.backgroundColor = '#F2F2F2'
            }
         },false)
         this.$refs.ul.addEventListener('touchend',(e)=>{
            let ev = e || event
            let li = ev.target
            if (li.className.indexOf('bgDelete') > -1) {
               li.style.backgroundColor = '#A8AEBA';
            } else if (li.className.indexOf('BgG') == -1) {
               li.style.background = '#FFF';
            }
         },false)
      },
      resetStatus() {
         this.shuffle(this.num);
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
   height: 300px;
   background-color: #CFD3DC;
   box-shadow: 0px -3px 3px #F5F5F5;
}
.list{
   padding: 10px 0;
   box-sizing: border-box;
   justify-content: space-evenly;
}
ul.ul{
   width: 110px;
   height: 55px;
   font-size: 20px;
   font-weight: bolder;
   background-color: #fff;
   border-radius: 10px;
}
li.li{
   border-radius: 10px;
   box-shadow: 2px 2px 5px #333333;
}

.BgG{
   background-color: #CFD3DC;
   border: none!important;
   box-shadow: none!important;
}

.bgDelete{
   background: #A8AEBA url(../../static/img/delete.png) no-repeat center / 30px 21px;
   border-radius: 10px;
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
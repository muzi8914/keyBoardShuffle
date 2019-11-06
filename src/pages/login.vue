<template>
	<div class="login">
		<transition name="slide-up">
			<section class="floatKeyBoard" v-if="isShow">
				<div ref="ul" class="list flex flex_wrap flex_center flex_end">
					<ul v-for="(i,k) in keyBoard" :key="k" class="ul">
						<li v-if="k!=11" class="li flex flex_center flex_vcenter" :class="{'BgG': k==9,'BorderLR': k==1||k==4||k==7||k==10}" @click="tapNum(i,k,$event)">{{i}}</li>
						<li v-else class="li flex flex_center flex_vcenter BgG" @click="tapNum(i,k,$event)"><img class="deletImg" :src="i" /></li>
					</ul>
				</div>
			</section>
		</transition>
	</div>
</template>

<script>
export default {
	data () {
		return {
			isShow: false,//加载提示,加载中，显示加载loadidng,加载完成，自动弹出键盘
			num: [1,2,3,4,5,6,7,8,9,0],//虚拟数字键盘
			keyBoard: [],//显示的
			deleteImg: '../../static/img/delete.png',//删除按钮图片
			// skey: "", //输入的密码
         // text: '',//页面显示的 * 号
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
         let arr = ['',end,this.deleteImg]
         this.keyBoard = array.concat(arr)
         // console.log(this.keyBoard)
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
            // this.skey = this.skey.slice(0,-1)
            // this.text = this.text.slice(0,-1)
         } else {
	         // this.skey += i
            // if (this.skey.length > 6) {
            //    this.skey = this.skey.substr(0,6)
            //    return
            // }
            // this.text += ss
         }
		},
		// 按下数字时，背景变色响应，抬起，恢复原背景色
		changeBG() {
         this.$refs.ul.addEventListener('touchstart',(e)=>{
				console.log(1212)
            let ev = e || event
            let li = ev.target
            if (li.className.indexOf('BgG') == -1) {
               li.style.background = '#F2F2F2'
            }
         },false)
         this.$refs.ul.addEventListener('touchend',(e)=>{
				console.log(3434)
            let ev = e || event
            let li = ev.target
            if (li.className.indexOf('BgG') == -1) {
               li.style.background = '#FFF';
            }
         },false)
      }
	},
	created () {
		this.shuffle(this.num);
		setTimeout(()=>{
			this.isShow = true
			this.$nextTick(()=>{
				this.changeBG()
			})
		},1000)
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login,.list,li.li{
	width: 100%;
	height: 100%;
}
.login{
	overflow: hidden;
	position: relative;
	background-color: rgba(0, 0, 0, .1)
}

.floatKeyBoard{
	position: absolute;
   left: 0;
   bottom: 0;
   width: 100%;
   height: 39%;
   background: #FFF;
}
ul.ul{
   height: 24.6%;
   width: 33.3%;
   font-size: 20px;
   font-weight: bolder;
   border-top: 1px solid #F2F2F2;
}

img.deletImg{
   width: 20px;
   height: 14px;
}

.BgG{
   background: #F2F2F2;
}

.BorderLR{
   border-left: 1px solid #F2F2F2;
   border-right: 1px solid #F2F2F2;
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

/* .fade-enter-active, .fade-leave-active {
	transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
	opacity: 0;
} */
</style>
<template>
	<div class="login">
		<login-body :phoneNum='phoneNum' @showKeyBoard='changeKeyStatus'></login-body>
      <key-board :isShow='isShow'  @changeNum='changePhone' @changeKeyBoardStatus='changeStatus'></key-board>
	</div>
</template>

<script>
import loginBody from "./children/loginBody";

// import keyBoard from "@/components/keyBoard";
// import keyBoard from "@/components/keyBoard_2.vue";
import keyBoard from "@/components/keyBoard_3.vue";
// import keyBoard from "@/components/keyBoard_4.vue";

export default {
	data () {
		return {
			isShow: true,//
			phoneNum: '',//
		}
   },
   components: {
		loginBody,
      keyBoard,
   },
	methods: {
		changeKeyStatus(val){
			this.isShow = val
			// this.$off('showKeyBoard')
		},
		changePhone(val){
			this.phoneNum = val
		},
		changeStatus(val) {
			this.isShow = val
		}
	},
	created () {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: relative;
	/* background-color: rgba(0, 0, 0, .1) */
}
.key-board{
	z-index: 10;
}
</style>
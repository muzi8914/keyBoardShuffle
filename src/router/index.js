import Vue from 'vue'
import Router from 'vue-router'

const keyBoard = ()=> import('@/pages/login/login')

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'keyBoard',
			component: keyBoard
		}
	]
})

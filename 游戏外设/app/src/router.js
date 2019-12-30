import Vue from 'vue'
import Router from 'vue-router'
import n1 from './n1'
import n2 from './n2'
import n3 from './n3'
import n4 from './n4'
import n5 from './n5'
import gongsi from './gongsi'
import hangye from './hangye'
import aaa from './aaa'
Vue.use(Router)

var routes = [
		    {
		    	path:'/',
		    	name:'n1',
				component:n1,
			},
			{
				path:'/n2',
				name:'n2',
				component:n2,
			},
			{
				path:'/n3',
				name:'n3',
				component:n3,
				children:[
					{
						path:'gongsi',
						name:'gongsi',
						component:gongsi
					},
					{
						path:'hangye',
						name:'hangye',
						component:hangye
					},
					{
						path:'aaa',
						name:'aaa',
						component:aaa
					},
				]
			},
			{
				path:'/n4',
				name:'n4',
				component:n4,
			},
			{
				path:'/n5',
				name:'n5',
				component:n5,
			},
]

export default new Router({
	routes
})

import PRol from './petal/rol'

const components =[
	PRol,
]

export default {
	install:function(Vue){
		components.forEach(component=>{
			Vue.component(component.name,component)
		})
	}
}
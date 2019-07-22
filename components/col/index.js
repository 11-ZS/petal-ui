import PCol from './petal/col'

const components =[
	PCol
]

export default {
	install:function(Vue){
		components.forEach(component=>{
			Vue.component(component.name,component);
		})
	}
}
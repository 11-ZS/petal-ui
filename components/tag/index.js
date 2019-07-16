import PTag from './petal/tag'
import PRTag from './petal/roll-tag'

const components = [
	PTag,
	PRTag
] 

export default {
	install:function(Vue){
		components.forEach(component=>{
			Vue.component(component.name,component); 
		})
	}
};
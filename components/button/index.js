import PButton from './petal/button'
// import PSButton from './petal/simple-button'

const components = [
	PButton,
	// PSButton
 
] 

export default {
	install:function(Vue){
		components.forEach(component=>{
			Vue.component(component.name,component); 
		})
	}
};
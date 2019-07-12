
import Button from './components/button/index.js'//要测试之后不用index是否自动加载index  ===可以


const components = [
	Button
]

const install = function(Vue,options={}){
	components.forEach(component=>{
		Vue.component(component.name,component);
	})
}

export default {
	install
}

import Button from './components/button/index.js'//要测试之后不用index是否自动加载index  ===可以
import Tag from './components/tag/index.js'

const components = [
	Button,
	Tag
]

const install = function(Vue,options={}){
	components.forEach(component=>{
		component.install(Vue);
	})
}

export default {
	install
}
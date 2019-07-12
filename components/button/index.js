import PButton from './petal/button'

PButton.install = function(Vue){
	Vue.component(PButton.name,PButton);
}

export default PButton;
<template>
    <button class="p-simple-button" 
	:class="[
	type?'p-type-'+type:'',
	size?'p-size-'+size:'',
	]">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "p-s-button",
    props: {
        type: {
            type: String,
            default: ""
		},
		size:{
			type:String,
			default:'default'
		}
    }
};
</script>
<style >
.p-simple-button {
    vertical-align: top;
	box-sizing:border-box;
    border: none;
    outline: none;
    padding: 0 10px;
    line-height: 36px;
	height:36px;
    font-size: 20px;
	border:1px solid rgb(218, 218, 218); 	
	background:white;
	
}
.p-simple-button .p-roll-tag,.p-simple-button .p-tag  {
    border: none;
} 
.p-size-default{
	font-size:24px;
}
.p-size-medium{
	font-size:24px;
}
.p-size-small{
	font-size:24px;
}
/* .roll-button{
	padding:0px;
	border:none;
} */

.p-type-primary,
.p-type-success,
.p-type-info,
.p-type-warning,
.p-type-danger {
    color: white;
    border: none;
}
.p-type-default {
}
.p-type-primary {
    background: linear-gradient(135deg, #22b9ff, #8d96ec);
}
.p-type-success {
    background: linear-gradient(150deg, #b4df1a, #26cf67);
}
.p-type-info {
    background: linear-gradient(150deg, #a6f791, #1fd6d6);
}
.p-type-warning {
    background: linear-gradient(150deg, #f0e878, #ffac30);
}
.p-type-danger {
    background: linear-gradient(150deg, #f16161, #c92323);
}
</style>
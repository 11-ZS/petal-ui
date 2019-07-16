<template>
	<span class="p-tag">
		<slot></slot>
	</span>
</template>

<script>
export default {
	name:'p-tag'
}

</script>


<style >
.p-tag{
	display:inline-block;
	vertical-align: top;  
	padding:0 10px;
	text-align:center;
	font-family: Arial, Helvetica, sans-serif;

	height:36px;
	line-height:36px;
	box-sizing: border-box;
	border:1px solid rgb(218, 218, 218); 
}
	
</style>
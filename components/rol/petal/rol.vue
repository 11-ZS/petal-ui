<template>
    <div class="p-rol">
        <slot></slot>
    </div>
</template>



<script>
export default {
    name: "p-rol"
};
</script>


<style >
	.p-rol{
		box-sizing:border-box;
		display:flex;
		flex-wrap: wrap;
		/* display: block;
		position: relative;*/
		border:1px solid red; 
	}
</style>
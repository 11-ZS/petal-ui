<template>
    <button class="p-button isplain" :class="['p-button-type-'+type]">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: "p-button",
    props: {
        type: {
            type: String,
            default: "normal"
        }
    },
    mounted() {
        //对this.$slots.default[0].tag进行解析,undifined跳过,其他的如a,button,vue-component-2-RouterLink的取代其中的内容重新编译
        // if (this.$slots.default[0].tag) {
        //     this.$slots.default[0].text = `aa`;
        // }
        // console.log(this.$slots.default);
    }
};
</script>

<style>
.p-button { 
    margin: 10px;
    font-family: monospace sans-serif;
    font-size: 14px; 
    box-sizing: border-box;
    border: none;
    outline: none;
    line-height: 32px;
	height:32px;
    padding: 0 12px;
	display: inline-block;
	transition:.3s;
	cursor:pointer;
}

.p-button:hover{
	background-position:right;
	transition:.3s;
}
.p-button:active{
	background-position:top;
	transition: .3s;
}

.p-button-type-normal {
    /* border: 1px solid rgb(145, 145, 145); */
    background:white;;
	position: relative; 
	z-index: 1;
}
 






.p-button-type-primary {
    color: white; 
	  background: linear-gradient(150deg, #409eff, #4062cf,#409eff);
	  background-size:200%;
}

.p-button-type-primary:hover{
	box-shadow: 0 0 10px rgb(101, 206, 255); 

}
.p-button-type-primary:active{
	box-shadow: 0 0 10px rgb(67, 70, 230) inset;
	
}

.p-button-type-success {
    color: white;
    background: linear-gradient(150deg, #b6f04c, #3dc41b,#9cd432);
	background-size:200px;
 
}
.p-button-type-success:hover{
	box-shadow: 0 0 10px rgb(165, 255, 91); 
}
.p-button-type-success:active{
	box-shadow: 0 0 10px rgb(51, 194, 46) inset; 
}

.p-button-type-info {
    color: white;
    background: linear-gradient(150deg, #c2c2c2, #798382,#bbbbbb);
	background-size:200%;
 

}

.p-button-type-info:hover{
	box-shadow: 0 0 10px rgb(189, 189, 189);
    background-position: right;
	transition:.3s;
}
.p-button-type-info:active{
	box-shadow: 0 0 10px rgb(131, 131, 131) inset;
	 
	background-position:top;
	transition:.3s;
}

.p-button-type-warning {
    color: white; 
    background: linear-gradient(120deg, #f0d478, #ffac30,#f0d478);
	 background-size: 200%;
 
}

.p-button-type-warning:hover{
	box-shadow: 0 0 10px rgb(255, 202, 55); 
    background-position:right;
	transition:.3s;
}
.p-button-type-warning:active{ 
	box-shadow: 0 0 10px rgb(255, 166, 0) inset;
  
	background-position:top;
	transition:.3s;

}
.p-button-type-danger {
    color: white;
    background: linear-gradient(120deg, #e97373, #cf3e3e,#e66363);
	background-size: 200%;
 

} 
 .p-button-type-danger:hover{
	box-shadow: 0 0 10px rgb(255, 95, 55); 
    background-position:right;
	transition:0.3s;
     
}
.p-button-type-danger:active{
	box-shadow: 0 0 10px rgb(185, 42, 6) inset;
	background-position:top; 
 
 
	transition:.3s;
}

</style>
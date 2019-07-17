<template>
    <button class="p-button" :class="[
   	type?'p-type-'+type:'',
   	size?'p-size-'+size:'',
      {
         'p-button-round':round
      }
	]">
        <slot v-if="this.$slots.default"></slot>
       <template v-else>button</template>
    </button>
</template>

<script>
export default {
    name: "p-button",
    props: {
        type: {
            type: String,
            default: ""
        },
        size: {
            type: String,
            default: "default"
        },
        round:Boolean
    },
    mounted(){
      console.log(this)
    }
};
</script>
<style >
.p-button {
    vertical-align: top;
    box-sizing: border-box;
    border: none;
    outline: none;
    padding: 0 10px;


    border: 1px solid rgb(218, 218, 218);
    background: white;
}

.p-button-round{
   border-radius:18px;
}

.p-button .p-roll-tag,
.p-button .p-tag {
    border: none;
}
.p-size-default {
     line-height: 36px;
    height: 36px;
    font-size: 20px;
}

.p-size-medium {
    font-size: 14px;
    height: 34px;
    line-height: 34px;
}
.p-size-small ,.p-size-small *{
    font-size: 12px;
    height: 28px;
    line-height: 28px;
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

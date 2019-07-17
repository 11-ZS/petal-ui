<template>
    <div class="p-roll-tag" >
    <!-- 这里改为条件触发滚动,如hover,blur,click,clickup,double click,key ....-->
        <span class="p-roll-tall-children">
            <slot></slot>
        </span>
    </div>
</template>

<script>
export default {
    name: "p-roll-tag",

    mounted() {
        console.log(this.$parent);
    }
};
</script>

<style >
.p-roll-tag {
    vertical-align: top;
    display: inline-flex;
    position: relative;
    height: 36px;
    line-height: 36px;
    flex-direction: column;
    overflow: hidden;

	box-sizing: border-box;
	border:1px solid rgb(218, 218, 218);
}


.p-roll-tall-children * {
    display: block;
}
.p-roll-tag .p-tag {
    background: none;
    border: none;
    transition: 1s;
}
.p-roll-tag:hover .p-tag {
    transition: 1s;
    transform: translateY(-36px);
}
</style>

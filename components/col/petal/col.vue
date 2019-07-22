<template>
    <div class="p-col" :class="[
		'p-col-size-'+span
	]">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "p-col",
    props: {
        span: {
            type: Number,
            default: 1
        }
    }
};
</script>

<style >
	.p-col {
		box-sizing: border-box;
		border: 1px solid blue;
		text-align: center;
		float: left;
	}
	.p-col-span-1 {
		width: 4.1666%;
	}
	.p-col-span-2 {
		width: 8.3333%;
	}
	.p-col-span-3 {
		width: 12.5%;
	}
	.p-col-span-4 {
		width: 16.6666%;
	}
	.p-col-span-5 {
		width: 20.8333%;
	}
	.p-col-span-6 {
		width: 25%;
	}
	.p-col-span-7 {
		width: 29.1666%;
	}
	.p-col-span-8 {
		width: 33.3333%;
	}
	.p-col-span-9 {
		width: 37.5%;
	}
	.p-col-span-10 {
		width: 41.6666%;
	}
	.p-col-span-11 {
		width: 45.8333%;
	}
	.p-col-span-12 {
		width: 50%;
	}
	.p-col-span-13 {
		width: 54.1666%;
	}
	.p-col-span-14 {
		width: 58.3333%;
	}
	.p-col-span-15 {
		width: 62.5%;
	}
	.p-col-span-16 {
		width: 66.6666%;
	}
	.p-col-span-17 {
		width: 70.8333%;
	}
	.p-col-span-18 {
		width: 75%;
	}
	.p-col-span-19 {
		width: 79.1666%;
	}
	.p-col-span-20 {
		width: 83.3333%;
	}
	.p-col-span-21 {
		width: 87.5%;
	}
	.p-col-span-22 {
		width: 91.6666%;
	}
	.p-col-span-23 {
		width: 95.8333%;
	}
	.p-col-span-24 {
		width: 100%;
	}
</style>
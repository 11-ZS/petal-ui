<template>
    <button :class="getClassName()">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "PButton",
    props: {
        type: {
            type: String,
            default: "default"
        },
        size: {
            type: String,
            default: ""
        }
    },
    methods: {
        getClassName() {
            console.log(this.type);
            return [this.type, this.size?"size-" + this.size:''];
        }
    }
};
</script>

<style>
button {
    font-family: sans-serif;
    border: 1px solid rgb(119, 119, 119);
    outline: none;
    border-radius: 4px;
    padding: 6px 14px;
    font-size: 14px;

    font-weight: 500;
    margin: 5px 0px;
}

button:hover {
    cursor: pointer; 
	opacity: 0.85;
}

.default {
    background: linear-gradient(135deg, rgb(255, 255, 255), rgb(238, 238, 238));
    color: rgb(66, 66, 66);
    border: 1px solid rgb(204, 201, 201);
}

.primary {
    background: linear-gradient(135deg, #22b9ff, #8d96ec);
    border: none;
    padding: 7px 15px;
    color: rgb(255, 255, 255);
} 
.success {
    background: linear-gradient(150deg, #b4df1a, #26cf67);
    border: none;
    padding: 7px 15px;
    color: rgb(255, 255, 255);
}
.info {
    background: linear-gradient(150deg, #a6f791, #1fd6d6);
    border: none;
    padding: 7px 15px;
    color: rgb(255, 255, 255);
}
.warning {
    background: #fc427b;
    background: linear-gradient(150deg, #f0e878, #ffac30);
    border: none;
    padding: 7px 15px;
    color: rgb(255, 255, 255);
}
.danger {
    background: linear-gradient(150deg, #f16161, #c92323);
    border: none;
    padding: 7px 15px;
    color: rgb(255, 255, 255);
}

.size-large {
    font-size: 20px;
    padding: 10px 20px;
} 
.size-small {
    font-size: 12px;
    padding: 5px 10px;
}
.size-tiny {
    font-size: 10px;
    padding: 3px 5px;
}
.block {
    display: block;
    width: 100%;
}

button[disabled],.disabled,.disabled:hover{
    opacity: 0.65;
    cursor: not-allowed;
} 
</style>
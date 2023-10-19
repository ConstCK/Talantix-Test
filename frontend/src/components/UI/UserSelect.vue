<template>
    <select class="select" @change="updateSelect" v-on:value="modelValue">
        <option class="option" default value="">{{ defaultOption }}</option>
        <slot></slot>
    </select>
</template>

<script>
export default {
    data() {
        return {
            defaultOption: "----------"
        }
    },
    props: {
        name: "user-select",
        modelValue: {
            type: String,
            required: true,
        }
    },
    methods: {
        updateSelect(event) {
            this.$emit("update:modelValue", event.target.value)
        }
    }
}
</script>

<style  scoped>
.select {
    background-color: rgba(0, 155, 155, 0.6);
    font-family: "Primary", Courier, monospace;
    font-size: 16px;
    font-weight: bold;
    margin: 20px;
    padding: 10px 30px;
    box-shadow: 0 0 3px 5px rgba(0, 165, 165, 0.8);
    border-radius: 20px;
}

.option {
    padding: 10px;
    text-align: center;
}
</style>
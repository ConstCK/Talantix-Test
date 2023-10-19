<template>
    <button class="btn">
        <slot></slot>

    </button>
</template>

<script>
export default {
    name: "user-button"
}
</script>

<style scoped>
.btn {
    background-color: teal;
    font-family: "Secondary", Courier, monospace;
    font-size: 24px;
    font-weight: bold;
    margin: 20px;
    padding: 10px 30px;
    box-shadow: 0 0 3px 5px rgba(0, 165, 165, 0.8);
    border-radius: 20px;
    transition: all 0.5s ease-out;
    border: none;
}

.btn:hover {
    color: aqua;
    box-shadow: 0 0 5px 8px rgba(0, 195, 195, 0.9);
}
</style>
<template>
    <input v-model="input" @keyup="$emit('inputChanged', {[model]: input})" class="v-input" :type="type" :placeholder="placeholder" />
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        },
        model: {
            type: String,
            default: ''
        }
        
    },
    data() {
        return {
            input: ''
        }
    }
}
</script>

<style>

.v-input {
    background-color: transparent;
    outline:none;
}

</style>
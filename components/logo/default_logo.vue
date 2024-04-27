<template>
    <img :width="width" src="/logo/remark-logo-1000.png" />
</template>

<script>

export default {

    props: {
        width: {
            type: Number,
            default: 80
        },
        height: {
            type: Number,
            default: 100
        }
    }

}

</script>
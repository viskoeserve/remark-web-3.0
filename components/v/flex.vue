<template>
    <div class="flex flex-row" :style={alignItems:alignItem,justifyContent:justifyContent}>
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        alignItem: {
            type: String,
            default: "center"
        },
        justifyContent: {
            type: String,
            default: "flex-start"
        }
    }
}
</script>
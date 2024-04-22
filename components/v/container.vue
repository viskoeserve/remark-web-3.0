<template>
    <div :style="{ 'width': width + '%', 'height': height + '%', 'padding': padding + 'px', 'margin' : margin + 'px' }" class="mx-auto" :class="isDebug ? 'border border-red-400': ''">
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        isDebug: {
            type: Boolean,
            default: false
        },
        width: {
            type: Number,
            default: 100
        },
        height: {
            type: Number,
            default: 0
        },
        padding: {
            type: String,
            default: 'auto'
        },
        margin: {
            type: String,
            default: 'auto'
        }
    }
}
</script>
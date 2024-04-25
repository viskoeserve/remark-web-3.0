<template>
    <div :class="'px-'+paddingX + ' ' + 'py-' + paddingY + ' ' + ' ' + bgColor + ' rounded-full cursor-pointer'">
        <VFlex>
            <slot />
            <VGap :width="10" />
            <Icon v-if="isDismissible" class="text-teal-800" name="material-symbols-light:cancel" />
        </VFlex>
    </div>
</template>

<script>
export default {
    props: {
        isDismissible: {
            type: Boolean,
            default: false
        },
        paddingX: {
            type: String,
            default: '5'
        },
        paddingY: {
            type: String,
            default: '2'
        },
        bgColor: {
            type: String,
            default: 'bg-teal-100'
        }
    }
}
</script>
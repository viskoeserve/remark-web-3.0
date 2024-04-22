<template>
    <button v-if="!isLink" @click="onClick" :class="['bg-' + bgColor + '-' + colorShade , 'text-' + textColor, 'px-' + paddingX, 'py-' + paddingY, isDisabled ? 'not-clickable' : '']" >
        <slot />
    </button>
    <NuxtLink :to="to"  @click="onClick" v-if="isLink" class="px-10 py-2" :class="['bg-' + bgColor + '-' + colorShade , 'text-' + textColor]">
        <slot />
    </NuxtLink>
</template>

<script>

export default {
    props: {

        bgColor: {
            type: String,
            default: 'teal',
        },
        colorShade: {
            type: String,
            default: '800'
        },
        textColor: {
            type: String,
            default: 'white'
        },
        isLink: {
            type: Boolean,
            default: false
        },
        to: {
            type: String,
            default: '/'
        },
        paddingX: {
            type: String,
            default: '10'
        },
        paddingY: {
            type: String,
            default: '2'
        },
        onClick: {
            type: Function,
            default: () => console.log('button clicked')
        },
        isDisabled: {
            type: Boolean,
            default: false,
        }

    }
}
</script>

<style>

.not-clickable {
    background-color: rgb(190, 190, 190);
}

</style>
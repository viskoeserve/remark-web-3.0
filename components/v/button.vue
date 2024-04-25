<template>
    <button v-if="!isLink" @click="onClick" :class="['bg-' + bgColor + '-' + colorShade.toString() , 'text-' + textColor, 'px-' + paddingX, 'py-' + paddingY, isDisabled ? 'not-clickable' : '', 'rounded-'+rounded]" >
        <slot />
    </button>
    <a :href="to"  @click="onClick" v-if="isLink" :class="[ fullBgColor == '' ? 'bg-' + bgColor + '-' + colorShade.toString() : fullBgColor , 'text-' + textColor, 'px-' + paddingX, 'py-' + paddingY, isDisabled ? 'not-clickable' : '', 'rounded-'+rounded]">
        <slot />
    </a>
</template>

<script>

export default {
    props: {

        bgColor: {
            type: String,
            default: 'teal',
        },
        fullBgColor: {
            type: String,
            default: ''
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
        },
        rounded: {
            type: String,
            default: '0'
        }

    }
}
</script>

<style>

.not-clickable {
    background-color: rgb(190, 190, 190);
}

</style>
<template>
    <VContainer :style="{ 'height': height + 'px', 'width': width + 'px'}" :class="'h-'+height" >

    </VContainer>
</template>

<script>
export default {
    props: {
        height: {
            type: Number,
            default: 0
        },
        width: {
            type: Number,
            default: 0
        }
    } 
}
</script>
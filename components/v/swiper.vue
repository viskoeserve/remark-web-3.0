<template>
  <Swiper 
            :style="{'height' : '250px'}"
            class=" bg-white"
            :modules="[SwiperAutoplay, SwiperEffectCoverflow]"
            :slides-per-view="6"
            :loop="false"
            :effect="'cube'"
            :creative-effect="{
            prev: {
                shadow: true,
                translate: ['-20%', 0, -1],
            },
            next: {
                translate: ['100%', 0, 0],
            },
            }"
            >
                <SwiperSlide class="" v-for="(l, i) in loop" :key="i" @sData="$emit('tData', l)" >
                    <slot />
                </SwiperSlide>
            </Swiper>
</template>

<script>
export default {
  props: {
    loop: {
      type: Array,
      default: []
    }
  }
}
</script>

<style>

</style>
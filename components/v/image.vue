<template>
  <img :width="width" :src=" link != '' ? link : 'https://remarkhr.com/img/logo/remark-placeholder.jpg' " :class="isRounded ? 'rounded-full' : 'rounded' "  />
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: '40'
    },
    isRounded: {
      type: String,
      default: false
    }
  }
}
</script>

<style>

</style>
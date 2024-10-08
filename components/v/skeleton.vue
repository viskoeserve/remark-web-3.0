<template>
  <div :style="{ width: width, height: height, backgroundColor: 'grey' }" >
    
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: "0"
    },
    height: {
      type: String,
      default: "0"
    }
  }
}
</script>

<style>

</style>
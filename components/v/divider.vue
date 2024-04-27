<template>
  <div>
    <VGap :height="height" />
    <hr />
    <VGap :height="height" />
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      default: '0'
    }
  }
}
</script>

<style>

</style>
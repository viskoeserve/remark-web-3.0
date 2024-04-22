<template>
  <VFlex :class="'gap-x-'+gap">
    <Icon :name="icon" />
    <p> {{ text }} </p>
  </VFlex>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    gap: {
      type: String,
      default: '1'
    },
    
  }
}
</script>

<style>

</style>
<template>
  <VButton rounded="full md:my-2">
    <a :href=" store == 'playstore' ? 'https://play.google.com/store/apps/details?id=com.remark.viskohr' : '' " target="_blank">
      <VIconText :icon="store == 'playstore' ?  'ion:logo-google-playstore' : 'mdi:apple' " :text="store == 'playstore' ? 'Playstore' : 'App Store'" gap="2">
      </VIconText>
    </a>
  </VButton>
</template>


<script>
export default {
  props: {
    store: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>
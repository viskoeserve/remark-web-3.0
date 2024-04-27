<template>
    <a class="bg-teal-800 px-5 py-2 rounded-full text-white" :href=" store == 'playstore' ? 'https://play.google.com/store/apps/details?id=com.remark.viskohr' : 'https://apps.apple.com/in/app/remark-job-recruiter-app/id6475642568' " target="_blank">
      <VIconText :icon="store == 'playstore' ?  'ion:logo-google-playstore' : 'mdi:apple' " :text="store == 'playstore' ? 'Playstore' : 'App Store'" gap="2">
      </VIconText>
    </a>
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
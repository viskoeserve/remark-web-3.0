<template>
  <div @click="searchCategory(slug)" class="shadow-lg text-center hover:border-t-4 border-teal-800 duration-200 cursor-pointer w-full pb-3">
    <VGap :height="10" />
    <!-- <Icon class="text-5xl" :name="icon" style="color:teal" /> -->
    <VFlex justifyContent="center" class="text-slate-600">
      <!-- <img class="text-center text-teal-800" width="60" height="70" :src="`https://remarkhr.com/` + icon" /> -->
       <Icon :name="icon" class="text-3xl text-slate-600" />
    </VFlex>
    <!-- {{ icon }} -->
    <p class="text-xs md:text-sm font-semibold py-1"> {{ title }} </p>
    <div>
      <small class="text-xs md:text-sm font-semibold text-teal-800 underline">{{ count }} Job(s)</small>
    </div>
</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    slug: {
      type: String,
      default: ''
    },
    count: {
      type: String,
      default: '0'
    },
    icon: {
      type: String,
      default: ''
    }
  },
  methods: {

    searchCategory(t) {
      location.href = '/industries/industry-' + t
    }

  }
}
</script>

<style>

</style>
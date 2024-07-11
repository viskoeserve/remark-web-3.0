<template>
  <div @click="searchCategory(slug)" class="shadow-lg bg-remark-light text-center hover:border-t-4 border-teal-800 duration-200 cursor-pointer w-full h-4/5">
    <VGap :height="30" />
    <!-- <Icon class="text-5xl" :name="icon" style="color:teal" /> -->
    <VFlex justifyContent="center" class="text-teal-800">
      <!-- <img class="text-center text-teal-800" width="60" height="70" :src="`https://remarkhr.com/` + icon" /> -->
       <Icon :name="icon" class="text-7xl" />
    </VFlex>
    <!-- {{ icon }} -->
    <p class="text-md my-2"> {{ title }} </p>
    <VButton paddingX="5" paddingY="1" rounded="full"  style="border-radius:25px"> <small>{{ count }} Opening </small></VButton>
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
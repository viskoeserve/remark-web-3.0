<template>
  <div @click="searchCategory(title)" class="shadow-lg bg-remark-light text-center hover:border-t-4 border-teal-800 duration-200 cursor-pointer w-full h-4/5">
    <VGap :height="50" />
    <!-- <Icon class="text-5xl" :name="icon" style="color:teal" /> -->
    <VFlex justifyContent="center" class="text-teal-800">
      <img class="text-center text-teal-800" width="60" height="70" :src="`https://remarkhr.com/` + icon" />
    </VFlex>
    <p class="text-md my-0"> {{ title }} </p>
    <!-- <VButton paddingX="5" paddingY="1" style="border-radius:25px"> <small>{{ count }} Opening </small></VButton> -->
</div>
</template>

<script>
export default {
  props: {
    title: {
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
      location.href = '/jobs?j=' + t
    }

  }
}
</script>

<style>

</style>
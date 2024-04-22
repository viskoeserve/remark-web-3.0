<template>
  <div class="shadow-lg bg-remark-light text-center hover:border-t-4 border-teal-800 duration-200" style="width:200px;height:200px;">
    <VGap :height="50" />
    <Icon class="text-5xl" :name="icon" style="color:teal" />
    <p class="text-md my-2"> {{ title }} </p>
    <VButton paddingX="5" paddingY="1" style="border-radius:25px"> <small>{{ count }} Opening </small></VButton>
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
  }
}
</script>

<style>

</style>
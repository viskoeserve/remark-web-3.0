<template>
  <div class="shadow-xl  text-center hover:border-t-4 border-teal-800 duration-200 bg-remark-light rounded-lg w-full h-60 md:h-72 ">
    <VFlex justifyContent="space-between" class="px-5 py-3">
        <p class="text-md my-2 font-bold text-center text-wrap text-ellipsis"> {{ name }} </p>
        <Icon name="material-symbols:chevron-right-rounded" />
    </VFlex>
    <!-- <img class="mx-auto" width="80" style="height:100px" :src="logo" /> -->
    <VFlex justifyContent="center" >
      <div :style="{ 'background-image' : 'url('+logo+')' , 'height' : '100px' , 'width' : '100px' , 'box-sizing' : 'border-box' , 'background-position' : 'center' , 'background-size' : 'contain' , 'background-repeat' : 'no-repeat'}">

      </div>
    </VFlex>
    <VGap :height="10" />
    <p class="text-slate-400 text-sm line-clamp-2 px-10">{{ description }}</p>
    <VGap :height="5" />

    <VButton paddingX="5" paddingY="1" style="border-radius:25px"> <small> {{ jobCount }} Jobs Available</small></VButton>
</div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    logo: {
      type: String,
      default: ''
    },
    jobCount: {
      type: String,
      default: '0'
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>
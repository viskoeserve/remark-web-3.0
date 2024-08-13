<template>
  <div @click="showPage(slug)" class="shadow-xl cursor-pointer text-center hover:border-t-4 border-teal-800 duration-200 rounded-lg w-full h-full py-3 pb-3">

    <!-- <img class="mx-auto" width="80" style="height:100px" :src="logo" /> -->
    <VFlex justifyContent="center" >
      <div :style="{ 'background-image' : 'url('+logo+')' , 'border-radius': '50%', 'height' : '60px' , 'width' : '60px' , 'box-sizing' : 'border-box' , 'background-position' : 'center' , 'background-size' : 'cover' , 'background-repeat' : 'no-repeat'}">

      </div>
    </VFlex>
    <VGap :height="10" />
    <p class="text-sm my-2 font-bold text-center"> {{ name }} </p>
    <p v-if="city != ''" class="text-sm text-slate-400">{{ city.trim() }}, {{ state }}</p>
    <p v-else class="text-sm text-slate-400">NA</p>
    <VGap :height="5" />

    <NuxtLink :to="'/companies/company-' + slug" class="font-semibold text-slate-400 underline" > <small> View Jobs </small></NuxtLink>
</div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    slug: {
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
    },
    city: {
      type: String,
      default: ''
    },
    state: {
      type:String,
      default: ''
    }
  },
  methods: {

    showPage(slug) {

      // location.href = '/companies/company-' + slug;
      open('/companies/company-' + slug, '_blank');


    }

  }
}
</script>

<style>

</style>
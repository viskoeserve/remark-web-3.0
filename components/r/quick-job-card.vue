<template>
  <div class="shadow-xl bg-remark-light hover:border-t-4 border-teal-800 duration-200 rounded-lg" style="width:400px;height:180px;">
    <VFlex justifyContent="space-between" class="px-5 pt-4">
        <a :href="'jobs/job-' + slug" target="_blank" >
        <p class="text-lg py-0 my-0 my-2 font-bold text-center text-wrap text-ellipsis"> {{ title }} </p>
        </a>
        <Icon name="material-symbols:chevron-right-rounded" />
    </VFlex>
    <VFlex class="px-5 gap-x-2">
        <img width="20" :src="logo" />
        <p class="text-sm my-2 text-slate-500 text-left text-wrap text-ellipsis"> {{ company }} </p>
    </VFlex>
    <hr class="py-2" />
    <!-- <VGap :height="10" /> -->
    <VFlex justifyContent="space-between">
        <div class="px-5">
            <VButton paddingX="5" paddingY="1" style="border-radius:25px"> <small> {{ hiring }} Hiring</small></VButton>
            <VGap :height="5" />
            <p class="text-slate-400 text-sm"> {{ location }} </p>
        </div>
        <div>
            <VButton paddingX="5" paddingY="2" > <small>Apply Now</small></VButton>
        </div>
    </VFlex>
    <VGap :height="5" />

</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    company: {
      type: String,
      default: ''
    },
    hiring: {
      type: String,
      default: ''
    },
    location: {
      type: String,
      default: ''
    },
    logo: {
      type: String,
      default: ''
    },
    slug: {
      type: String,
      default: ''
    }

  }
}
</script>
<style>

</style>
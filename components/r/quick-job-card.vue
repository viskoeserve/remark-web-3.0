<template>
  <div @click="showPage(slug)" class="shadow-xl cursor-pointer hover:border-t-4 border-teal-800 duration-200 rounded-lg w-full py-3 h-40 " >
    <VFlex justifyContent="space-between" class="px-5 pt-4 pb-0">
        <a :href="'jobs/job-' + slug" target="_blank" >
        <p class="text-lg py-0 my-0 my-0 font-bold w-60 text-left text-nowrap text-ellipsis overflow-hidden"> {{ title }} </p>
        </a>
            <Icon name="material-symbols:chevron-right-rounded" />
    </VFlex>
    <div class="px-5">
      <small class="text-slate-500">
        <b class="text-xs">Salary:</b> Rs. {{ minimum_salary }} - {{ maximum_salary }} /-
      </small>
    </div>
    <hr class="my-2" />
    <VFlex class="px-5 gap-x-2">
        <img width="30" :src="logo" />
        <div>
          <p class="text-md my-0 py-0 text-slate-700 w-60 text-left text-nowrap text-ellipsis overflow-hidden"> {{ company }} </p>
          <small class="text-slate-400 my-0 py-0">{{ company_city }}, {{ company_state }}</small>
        </div>        
    </VFlex>
    <!-- <VGap :height="10" /> -->

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
    },
    company_city: {
      type: String,
      default: ""
    },
    company_state: {
      type: String,
      default: ''
    },
    minimum_salary: {
      type: String,
      default: ''
    },
    maximum_salary: {
      type: String,
      default: ''
    }
  },
  methods: {
    showPage(sl) {

      open('/jobs/job-' + sl, '_blank');

    }
  },
  computed: {
    userStore() {
      const u = useMyUserStore();
      return u;
    }
  }
}
</script>
<style>

</style>
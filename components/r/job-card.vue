<template>
  <div class="bg-remark-light p-4 rounded-lg shadow-md hover:shadow-xl duration-300 mb-4 w-full" :class="additionalClass" >
    <VFlex justifyContent="space-between">
      <div class="w-full">
        <a target="_blank" :href="'/jobs/job-' + slug" class="text-lg font-bold hover:underline duration-200 line-clamp-1 text-ellipse"> {{ title }} </a>
        <p class="text-sm text-slate-400 line-clamp-1"> {{ skills }} </p>
      </div>
      <div class="w-6/12 md:w-2/12">  
        <VFlex justifyContent="end">
          <VIconText icon="carbon:recently-viewed" class="text-slate-400 text-sm" :text="timeAgo" />
      </vFlex>
    </div>
    </VFlex>
    <VGap :height="10" />
    <VFlex>
      <img width="30" class="rounded-full" :src="companyLogo != '' ? companyLogo : 'https://visko-hr-pvt-ltd.s3.ap-south-1.amazonaws.com/remark/remark-placeholder.jpg' " />
      <VGap :width="10" />
      <div class="w-full">
        <a href="#" target="_blank" class="text-md font-normal hover:underline line-clamp-1 text-ellipse"> {{ companyName }} </a>
        <VFlex justifyContent="start">
          <Icon name="ic:sharp-location-on" class="text-slate-600 text-sm" />
          <VGap :width="4" />
          <p class="text-slate-600 text-sm line-clamp-1 text-ellipse w-full"> {{ companyLocation }} </p>
        </VFlex>
      </div>
    </VFlex>
    <VGap :height="10" />

    <div class="flex flex-wrap md:flex-none justify-center md:justify-around">
      <div class="w-7/12 md:w-4/12 px-0 md:px-3 py-1 my-1 md:my-0 bg-slate-0">
        <VIconText gap="2" icon="material-symbols:currency-rupee" class="text-xs text-slate-500" text="Salary Range (Monthly)" />
        <VGap :height="3" />

        <p class="text-sm font-semibold"> {{ salary }} </p>
      </div>
      <div class="w-3/12 md:w-3/12 px-0 md:px-3 py-1 my-1 md:my-0 bg-slate-0 rounded">
        <VIconText gap="2" icon="mdi:briefcase" class="text-xs text-slate-500" text="Experience" />
        <VGap :height="3" />

        <p class="text-sm font-semibold"> {{ experience }} </p>
      </div>
      <div class="hidden md:block w-10/12 md:w-3/12 px-0 md:px-3 py-1 my-1 md:my-0 bg-slate-0 rounded">
        <VIconText gap="2" icon="material-symbols:nest-clock-farsight-analog" class="text-xs text-slate-500" text="Schedule" />
        <VGap :height="3" />
        <p class="text-sm font-semibold"> {{ schedule }} </p>
      </div>
    </div>
    <VGap :height="15" />
    <p class="px-4 line-clamp-1  text-ellipses overflow-hidden">{{ description }}</p>
    <hr class="my-3" />
    <VContainer class="px-3">
      <VFlex class="gap-x-5" justifyContent="space-between">
        <div class="w-full flex gap-x-3">
          <a href="#">
            <VIconText gap="2" class="text-md text-slate-400" icon="ic:round-share" text="Share" />
          </a>
          <a href="#" v-if="userStore?.user?.isLogged && userStore?.user?.user_type == '1'">
            <VIconText gap="2" class="text-md" :class="isSaved == '1' ? 'text-teal-800' : 'text-slate-400'" icon="ic:baseline-bookmark" text="Save" />
          </a>
          <a href="#">
            <VIconText gap="2" class="text-md text-slate-400" icon="material-symbols:report-outline" text="Report" />
          </a>
        </div>
        <div>
          <button class="px-6 py-2 bg-teal-800 rounded-full text-white" v-if="userStore.user.user_type != '2' || !userStore.user.isLogged " @click="applyForJob" > Apply</button>
        </div>
      </VFlex>
    </VContainer>
    
  </div>
</template>

<script>
export default {
  props: {
    additionalClass: {
      type: String,
      default: ''
    },  
    title: {
      required: true,
      
      type: String,
      default: ''
    },
    slug: {
      required: true,
      type: String,
      default: ''
    },
    skills: {
      type: String,
      default: ''
    },
    companyLogo: {
      type: String,
      default: ''
    },
    companyName: {
      required: true,

      type: String,
      default: ''
    },
    companyLocation: {
      type: String,
      default: ''
    },
    salary: {
      type: String,
      default: 'Not disclosed'
    },
    experience: {
      type: String,
      default: ''
    },
    schedule: {
      type: String,
      default: 'Full Time'
    },
    description: {
      type: String,
      default: ''
    },
    timeAgo: {
      type: String,
      default: ''
    },
    isSaved: {
      type: String,
      default: '0'
    },
    // For Safety, we will take full object
    job: {
      required: true,
      type: Object,
      default: {}
    }
  },
  computed: {
    userStore() {
      const u = useMyUserStore();
      return u;
    }
  },
  methods: {
    async applyForJob() {

      const { $event } = useNuxtApp();

      console.log(this.userStore.user.isLogged);

      if(this.userStore.user.isLogged) {

        if(this.userStore.user.user_type == '1') {

        }
        
      }else{
        $event('close');
      }

    }
  },
  
}
</script>

<style>

</style>

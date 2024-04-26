<template>
  <VContainer :width="100" class="bg-remark-light p-4 rounded-lg shadow-md hover:shadow-xl duration-300 mb-4">
    <VFlex justifyContent="space-between">
      <VContainer>
        <a target="_blank" :href="'/jobs/job-' + slug" class="text-lg font-bold hover:underline duration-200 line-clamp-1 text-ellipse"> {{ title }} </a>
        <p class="text-sm text-slate-400 line-clamp-1"> {{ skills }} </p>
      </VContainer>
      <VContainer>  
        <VFlex justifyContent="end">
          <VIconText icon="carbon:recently-viewed" class="text-slate-400 text-sm" :text="timeAgo" />
      </vFlex>
      </VContainer>
    </VFlex>
    <VGap :height="10" />
    <VFlex>
      <img width="30" class="rounded-full" :src="companyLogo != '' ? companyLogo : 'https://remarkhr.com/img/logo/remark-placeholder.jpg' " />
      <VGap :width="10" />
      <VContainer>
        <a href="#" target="_blank" class="text-md font-normal hover:underline line-clamp-1 text-ellipse"> {{ companyName }} </a>
        <VFlex>
          <Icon name="ic:sharp-location-on" class="text-slate-600 text-sm" />
          <VGap :width="4" />
          <p class="text-slate-600 text-sm line-clamp-1 text-ellipse"> {{ companyLocation }} </p>
        </VFlex>
      </VContainer>
      
    </VFlex>
    <VGap :height="10" />

    <VFlex justifyContent="space-around">
      <VContainer :width="30" class="px-3 py-1 bg-slate-200">
        <VIconText gap="2" icon="material-symbols:currency-rupee" class="text-xs text-slate-500" text="Salary Range (Monthly)" />
        <VGap :height="3" />

        <p class="text-sm font-semibold"> {{ salary }} </p>
      </VContainer>
      <VContainer :width="30" class="px-3 py-1 bg-slate-200 rounded">
        <VIconText gap="2" icon="mdi:briefcase" class="text-xs text-slate-500" text="Experience" />
        <VGap :height="3" />

        <p class="text-sm font-semibold"> {{ experience }} </p>
      </VContainer>
      <VContainer  :width="30" class="px-3 py-1 bg-slate-200 rounded">
        <VIconText gap="2" icon="material-symbols:nest-clock-farsight-analog" class="text-xs text-slate-500" text="Schedule" />
        <VGap :height="3" />
        <p class="text-sm font-semibold"> {{ schedule }} </p>
      </VContainer>
    </VFlex>
    <VGap :height="15" />
    <p class="px-4 line-clamp-1  text-ellipses overflow-hidden">{{ description }}</p>
    <hr class="my-3" />
    <VFlex justifyContent="space-between">
      
      <VContainer class="text-right">
        <!-- <VButton>
          Apply
        </VButton> -->
      </VContainer>
      <VContainer class="px-3 text-right">
        <VFlex class="gap-x-5" justifyContent="end">
          <a href="#">
            <VIconText class="text-md text-slate-400" icon="ic:round-share" text="Share" />
          </a>
          <a href="#" v-if="userStore.user.isLogged && userStore.user.user_type == '1'">
            <VIconText class="text-md" :class="isSaved == '1' ? 'text-teal-800' : 'text-slate-400'" icon="ic:baseline-bookmark" text="Save" />
          </a>
          <a href="#">
            <VIconText class="text-md text-slate-400" icon="material-symbols:report-outline" text="Report" />
          </a>
        </VFlex>
      </VContainer>
    </VFlex>
  </VContainer>
</template>

<script>
export default {
  props: {
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
  }
}
</script>

<style>

</style>
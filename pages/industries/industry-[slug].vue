<template>
  <div class="flex justify-center">
      <div class="w-full md:w-8/12 p-3">

        <div v-if="industry != null">

          <div class="p-3">

            <div class="bg-remark-light shadow-xl p-3 px-10 rounded-lg">
                <div class="flex items-center gap-x-3">
                  <!-- <div class="text-center">
                    <img :src="'../'+industry.industry_svg" class="border w-full h-20" />
                  </div> -->
                  <div>
                    <p class="text-xl md:text-2xl font-bold">Vacancies in {{ industry.industry_title }}</p>
                    <!-- <p class="text-teal-800 font-semibold"> {{ company.company_website }} </p> -->
                    <!-- <p class="text-slate-500 text-sm">{{ company.company_address }}</p> -->
                  </div>
                </div>

                <!-- <hr class="my-6" /> -->

            </div>

            <div class="h-10" ></div>
            
            <div class=" px-0 md:p-3 md:px-5 rounded-lg">
              
              <div class="">
                <!-- <p class="font-bold text-xl">Vacancies</p> -->
                <p class="text-sm text-slate-400">({{ jobs.length }}) jobs available in {{ industry.industry_title }}</p>
              </div>

              <div class="h-3"></div>

              <div v-if="jobs.length > 0" class="w-full flex flex-wrap">
                <div v-for="(job, i) in jobs" :key="i" class="w-full md:w-6/12 px-0 md:px-3 pb-2">
                  <RJobCard
                    :title="job.job_title"
                    :slug="job.job_slug"
                    :skills="JSON.parse(job.job_key_skills).join(', ')"
                    :companyLogo="job.company.company_logo"
                    :companyName="job.company.company_name"
                    :companyLocation="job.company.company_address"
                    :salary="'Rs. '+ job.job_minimum_salary + ' - Rs. ' + job.job_maximum_salary "
                    :experience="job.job_ext_experience != '' ? JSON.parse(job.job_ext_experience).length > 0 ? 'Experience' : 'Fresher' : 'NA'"
                    :schedule="job.job_schedule"
                    :description="job.job_description"
                    :timeAgo="job.job_timeago"
                    :job="job"
                  />
                </div>
              </div>

            </div>

          </div>

        </div>
        <div v-else class="text-center">
          <VLoading />
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slug: "",
      industry: null,
      jobs: []
    }
  },
  computed: {
    userStore() {
      const user = useMyUserStore();
      return user;
    }
  },
  methods: {
    async init() {
      const router = useRoute();
      console.log(router.params.slug);

      this.slug = router.params.slug;

      const token = this.userStore.token;

      setTimeout(async () => {

        const { data, pending, error, refresh } = await useFetch('/api/industry/single-industry',{
          method: 'post',
          body: {
            slug: this.slug,
            token: token
          }
      });

      if(!data?.value?.status) {
        console.log(data);
        return false;
      }

      if(data.value.status) {

          console.log(data);
          this.industry = data.value.industry;
          this.jobs = data.value.jobs;

      }
        
      }, 2000);

      

    }
  },
  async created() {
    await this.init();
  },
}
</script>

<style>

</style>
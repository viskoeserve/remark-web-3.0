<template>
  <div class="flex justify-center">
      <div class="w-full md:w-8/12 p-3">

        <div v-if="company != null">

          <div class="p-3">

            <div class="bg-remark-light shadow-xl p-3 px-10 rounded-lg">
                <div class="flex items-center gap-x-3">
                  <div>
                    <VImage :width="60" :link="company.company_logo" />
                  </div>
                  <div>
                    <p class="text-xl md:text-2xl font-bold">{{ company.company_name }}</p>
                    <!-- <p class="text-teal-800 font-semibold"> {{ company.company_website }} </p> -->
                    <p class="text-slate-500 text-sm">{{ company.company_address }}</p>
                  </div>
                </div>

                <hr class="my-6" />

                <div>

                  <div>
                    <p class="text-lg md:text-xl font-bold">Description</p>
                    <p class="text-sm md:text-md my-2">{{ company.company_des }}</p>
                  </div>

                </div>
            </div>

            <div class="h-10" ></div>

            <div class=" px-0 md:p-3 md:px-5 rounded-lg">
              
              <div class="">
                <p class="font-bold text-xl">Vacancies</p>
                <p class="text-sm text-slate-400">Recruitment in {{ company.company_name }}</p>
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
                    :companyLocation="job.company.company_location"
                    :salary="'Rs. '+ job.job_minimum_salary + ' - Rs. ' + job.job_maximum_salary "
                    :experience="JSON.parse(job.job_ext_experience).length > 0 ? 'Experience' : 'Fresher'"
                    :schedule="job.job_schedule"
                    :description="job.job_description"
                    :timeAgo="job.job_timeago"
                  />
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slug: "",
      company: null,
      jobs: []
    }
  },
  methods: {
    async init() {
      const router = useRoute();
      console.log(router.params.slug);

      this.slug = router.params.slug;

      const { data, pending, error, refresh } = await useFetch('/api/company/single-company',{
          method: 'post',
          body: {
            slug: this.slug
          }
      });

      if(data.value.status) {

          console.log(data);
          this.company = data.value.company;
          this.jobs = data.value.jobs;

      }

    }
  },
  async created() {
    await this.init();
  },
}
</script>

<style>

</style>
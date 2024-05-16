import { defineStore } from 'pinia'

export const useMyJobStore = defineStore({
  id: 'myJobStore',
  state: () => ({ 

    jobs: [],
    job: null,
    isApplyingJob: false

  }),
  actions: {

    async fetchJobs() {


    },

    setJob(j:any) {
      this.job = j;
    },

    async doApply(job_id:string, user_id:string, employer_id:string) {
      

      const { data, pending, error, refresh } = await useFetch('/api/job/apply-to-job', {
          method: 'post',
          body: {
            job_id: job_id,
            user_id: user_id,
            employer_id: employer_id
          }
      });

      console.log(data.value);

      if(data.value?.status) {

        

      }

    }

  }
})

<template>

  <div class="w-full md:w-4/12  text-right mt-4 md:mt-0">
      <div v-if="job.applied_status == null">
          <button @click="doAskForApply()" class="px-5 py-2 bg-teal-800 text-white rounded-full" v-if="userStore.user?.isLogged && userStore.user?.user_type == '1'">Apply Now</button>
      </div>
      <div v-if="job.applied_status == '0'">
          <p class="px-5 py-2 text-slate-400" v-if="userStore.user?.isLogged && userStore.user?.user_type == '1'">Applied</p>
      </div>
      <div v-if="job.applied_status == '1'">
          <p class="px-5 py-2 text-green-600" v-if="userStore.user?.isLogged && userStore.user?.user_type == '1'">Hired</p>
      </div>
      <div v-if="job.applied_status == '3'">
          <p class="px-5 py-2 text-red-600" v-if="userStore.user?.isLogged && userStore.user?.user_type == '1'">Rejected</p>
      </div>

      <!--  -->
      <div v-if="!userStore.user?.isLogged">
        <button @click="doApplyForJob()" class="px-5 py-2 bg-teal-800 text-white rounded-full">Apply Now</button>
    </div>
  </div>

  

  <VModal v-if="askForApply" @close="askForApply = false">
    <div class="w-full text-center">
        <div class="h-8"></div>
        <p>Hi<span class="pl-2 font-bold text-teal-800">{{ userStore.user.user_name }}</span>,</p>
        <div class="h-2"></div>
        <p class="font-semibold px-1">Are you sure want to apply for <span class="text-teal-800 font-bold">{{  job.job_title  }}</span>?</p>
        <div class="h-5"></div>
        <div class="flex justify-center gap-x-3">
            <button class="text-white bg-teal-800 px-8 py-2 rounded-full" @click="doApplyForJob(job.job_id, job.company.user_id)" >Yes</button>
            <button @click="askForApply = false" class="text-white bg-slate-400 px-8 py-2 rounded-full">No</button>
        </div>
    </div>
</VModal>

</template>

<script lang="ts" setup>

</script>

<script>
export default {
  props: {
    job: {
      type: Object,
      default: {}
    },
  },
  data() {
    return {
      askForApply: false,
    }
  },
  computed: {
    jobStore() {
      const jSTore = useMyJobStore();
      return jSTore;
    },
    userStore() {
      const user = useMyUserStore();
      return user;
    }
  },
  methods: {
    doAskForApply() {
            this.askForApply = true;
    },
    async doApplyForJob(job_id, employer_id) {

      const { $event } = useNuxtApp();

      console.log(this.userStore.user.isLogged);

      if(this.userStore.user.isLogged) {

        if(this.userStore.user.user_type == '1') {

          this.job.is_user_applied = '0';
          this.job.applied_status = '0';

          console.log({
              job_id:job_id,
              user_id:this.userStore.user.user_id,
              employer_id:employer_id
          });

          this.askForApply = false;

          // jobStore.job.is_user_applied

          await this.jobStore.doApply(job_id, this.userStore.user.user_id, employer_id);


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
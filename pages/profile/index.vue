<template>
  <div v-if="userStore.user.isLogged" class="w-full  flex px-5 gap-x-5 mt-5">
    <div class="w-2/12 bg-white relative rounded-lg">
      <div class="flex items-center justify-center pt-4 absolute top-0 h-52 w-full bg-teal-800">
          <div class="flex justify-center w-full">
            <div class="text-center">
              <div class="flex justify-center">
                <div class="w-20 h-20 rounded-full" :style="`background-image: url(${userStore.user.user_photo}); background-size:cover; background-position:center; background-repeat:no-repeat`">
                  <!-- <img  :src="userStore.user.user_photo" /> -->
                </div>
              </div>
              <div class="h-1"></div>
              <p class="text-md text-white font-semibold">{{ userStore.user.user_name }}</p>
              <p class="text-slate-200">{{ userStore.user.user_profile }}</p>
            </div>
          </div>
      </div>
      <div class="h-2"></div>
      <div class="w-full absolute top-5">
        <div class="h-44"></div>
        <div class="py-3 bg-remark-light h-full shadow-lg rounded-t-2xl">
          <div class="pl-10 py-3 mb-2" v-for="(menu, index) in menus" :key="index" >
            <a @click="fetchData(menu.slug)" href="javascript:void(0)" class="text-teal-800 font-semibold"   > 
              <VIconText :icon="menu.icon" :text="menu.title" gap="5" />
            </a>
          </div>
          <div class="pl-10 py-3 mb-2">
            <a @click="doLogout" href="javascript:void(0)" class="text-red-600 py-2" ><VIconText icon="ic:baseline-logout" text="Logout" gap="5" /></a>
          </div>
        </div>
      </div>
    </div>
    <div  class="w-10/12 p-3">
      
      <div v-if="activeMenu == 'profile'" class="profile">

        <div>
          <div class="w-full bg-remark-light p-5 rounded-lg shadow-xl shadow-slate-100 border border-teal-100">
          
            <div class="flex gap-x-5 items-center">
              <div class="w-20 h-20 rounded-full" :style="`background-image: url(${userStore.user.user_photo}); background-size:cover; background-position:center; background-repeat:no-repeat`">
                <!-- <img  :src="userStore.user.user_photo" /> -->
              </div>
              
              <div>
                
                <p class="text-2xl font-semibold">{{ userStore.user.user_name }}</p>
                <p class="text-slate-500"> {{ userStore.user.user_profile }} </p>
                <!-- <a href="/" class="text-red-500 underline text-xs"> Edit Profile </a> -->
              </div>
              <div v-if="userStore.user.user_type == '0'" >
                <p class="text-3xl font-semibold text-slate-800">Complete Profile</p>
                <p class="text-slate-400">Please Complete your profile to get the best opportunities available in Remark</p>
                <!-- <button class="px-5 py-2 bg-teal-800 text-white my-1">Edit Profile</button> -->
              </div>
            </div>
    
          </div>
          <div class="h-10"></div>
          <div class="w-full bg-remark-light p-5 rounded-lg shadow-xl shadow-slate-100 border border-teal-100 ">
    
            <div>
              <p class="text-lg font-bold">Bio</p>
              <div class="h-1"></div>
              <p class="text-slate-500">{{ userStore.user.user_bio != '' ? userStore.user.user_bio : "NA" }}</p>
            </div>
            <div class="h-8"></div>
            <div class="flex justify-between">
              <div class="w-6/12">
                <div>
                  <p class="text-lg font-bold">Email</p>
                  <div class="h-1"></div>
                  <p class="text-slate-500">{{ userStore.user.user_email != '' ? userStore.user.user_email : "NA" }}</p>
                </div>
                <div class="h-8"></div>
                <div>
                  <p class="text-lg font-bold">Mobile Number</p>
                  <div class="h-1"></div>
                  <p class="text-slate-500">{{ userStore.user.user_mobile ?? "NA" }}</p>
                </div>
              </div>
              <div class="w-6/12">
                <div>
                  <p class="text-lg font-bold">Work Experience</p>
                  <div class="h-1"></div>
                  <p class="text-slate-500">{{ userStore.getWorkExperience.length > 0 ? userStore.getWorkExperience : "NA" }}</p>
                </div>
                <div class="h-8"></div>
                <div>
                  <p class="text-lg font-bold">Skills</p>
                  <div class="h-1"></div>
        
                  <p class="text-slate-500">{{ userStore.user.user_skills ? userStore.user.user_skills : "NA" }}</p>
                </div>
              </div>
            </div>
            <div class="h-8"></div>
            <div class="flex justify-between">
              <div class="w-6/12">
                <div>
                  <p class="text-lg font-bold">Current Location</p>
                  <div class="h-1"></div>
                  
                  <p class="text-slate-500">{{ userStore.user.user_address ? userStore.user.user_address : "NA" }}</p>
                </div>
              </div>
              <div class="w-6/12">
                <div>
                  <p class="text-lg font-bold">Preferred Job Location</p>
                  <div class="h-1"></div>
                  
                  <p class="text-slate-500">{{ userStore.user.user_job_location ? userStore.user.user_job_location : "NA" }}</p>
                </div>
              </div>
            </div>
            
            <div class="h-8"></div>
          </div>
          <div class="h-10"></div>
        </div>

        <div>
          <div class="p-5 border border-teal-200 rounded shadow-lg bg-remark-light">
            <p class="font-bold text-xl">Update Profile</p>
            <div class="h-5"></div>
            <div class="my-3">
              <div class="flex flex-wrap">
                <div class="my-input px-2 w-6/12 mb-8">
                  <div>
                    <p class="text-md font-bold">Email Address</p>
                    <small class="text-slate-400">It is good to provide the email address, so that companies can connect you through the same</small>
                  </div>
                  <div class="bg-slate-100 p-2 px-3 rounded-lg">
                    <input placeholder="example@domain.com" class="bg-transparent outline-none border-none w-full" />
                    <!-- <textarea class="bg-transparent w-full outline-none border-none" placeholder="Enter your bio"></textarea> -->
                  </div>
                </div>
                <div class="my-input px-2 w-6/12 mb-8">
                  <div>
                    <p class="text-md font-bold">Email Address</p>
                    <small class="text-slate-400">It is good to provide the email address, so that companies can connect you through the same</small>
                  </div>
                  <div class="bg-slate-100 p-2 px-3 rounded-lg">
                    <input placeholder="example@domain.com" class="bg-transparent outline-none border-none w-full" />
                    <!-- <textarea class="bg-transparent w-full outline-none border-none" placeholder="Enter your bio"></textarea> -->
                  </div>
                </div>
                <div class="my-input px-2 w-6/12">
                  <div>
                    <p class="text-md font-bold">Bio (Profile Summary)</p>
                    <small class="text-slate-400">Bio should be clean & understandable for the companies</small>
                  </div>
                  <div class="bg-slate-100 p-2 px-3 rounded-lg">
                    <!-- <input placeholder="Bio" class="bg-transparent outline-none border-none" /> -->
                    <textarea class="bg-transparent w-full outline-none border-none" placeholder="Enter your bio"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div v-if="activeMenu == 'saved-jobs'" class="saved-jobs" style="height: 35rem; overflow-y: scroll">
        <div class="w-full rounded-lg">
          <div class="px-3 py-3">
            <p class="text-2xl text-teal-800 font-bold ">Saved Jobs</p>
            <div class="h-5"></div>
            <div v-if="!savedJobs.isFetching" class="flex justify-start flex-wrap" >
              <div v-for="(job,index) in savedJobs.jobs" :key="index" class="w-4/12 px-2">
                <RJobCard
                  :title="job.job_title"
                  :slug="job.job_slug"
                  :skills="JSON.parse(job.job_key_skills).join(' | ')"
                  :timeAgo="job.job_timeago"
                  :companyLogo="job.company.company_logo"
                  :companyName="job.company.company_name"
                  :companyLocation="job.company.company_address"  
                  :salary="'Rs. ' + job.job_minimum_salary + ' to Rs. ' + job.job_maximum_salary"
                  :experience="job.is_experienced ? 'Experienced' :'Fresher'"
                  :schedule="job.job_schedule"
                  :description="job.job_description"
                  :job="job"
                  isSaved="1"
                />
              </div>
            </div>
            <div class="w-full text-center" v-else>
              <icon name="svg-spinners:ring-resize" />
            </div>
          </div>
        </div>
      </div>
      <div v-if="activeMenu == 'applied-jobs'" class="applied-jobs" style="height: 35rem; overflow-y: scroll">
        <div class="w-full rounded-lg">
          <div class="px-3 py-3">
            <p class="text-2xl text-teal-800 font-bold ">Applied Jobs</p>
            <div class="h-5"></div>
            <div v-if="!appliedJobs.isFetching" class="flex justify-start flex-wrap">
              <div v-for="(job,index) in appliedJobs.jobs" :key="index" class="w-4/12 px-2">
                <RJobCard
                  :title="job.job_title"
                  :slug="job.job_slug"
                  :skills="JSON.parse(job.job_key_skills).join(' | ')"
                  :timeAgo="job.job_timeago"
                  :companyLogo="job.company.company_logo"
                  :companyName="job.company.company_name"
                  :companyLocation="job.company.company_address"  
                  :salary="'Rs. ' + job.job_minimum_salary + ' to Rs. ' + job.job_maximum_salary"
                  :experience="job.is_experienced ? 'Experienced' :'Fresher'"
                  :schedule="job.job_schedule"
                  :description="job.job_description"
                  :job="job"
                  isSaved="1"
                />
              </div>
            </div>
            <div class="w-full text-center" v-else>
              <icon name="svg-spinners:ring-resize" />
            </div>
          </div>
        </div>
      </div>
      <div v-if="activeMenu == 'ai-recommended-jobs'" class="ai-recommended-jobs" style="height: 38rem; overflow-y: scroll">
        <div class="w-full rounded-lg" >
          <div class="px-3 py-3">
            <p class="text-2xl text-teal-800 font-bold ">Recommended Jobs</p>
            <div class="h-5"></div>
            <div v-if="!recommendedJobs.isFetching" class="flex justify-start flex-wrap">
              <div v-for="(job,index) in recommendedJobs.jobs" :key="index" class="w-4/12 px-2">
                <RJobCard
                  :title="job.job_title"
                  :slug="job.job_slug"
                  :skills="JSON.parse(job.job_key_skills).join(' | ')"
                  :timeAgo="job.job_timeago"
                  :companyLogo="job.company.company_logo"
                  :companyName="job.company.company_name"
                  :companyLocation="job.company.company_address"  
                  :salary="'Rs. ' + job.job_minimum_salary + ' to Rs. ' + job.job_maximum_salary"
                  :experience="job.is_experienced ? 'Experienced' :'Fresher'"
                  :schedule="job.job_schedule"
                  :description="job.job_description"
                  :job="job"
                  isSaved="1"
                />
              </div>
            </div>
            <div class="w-full text-center" v-else>
              <icon name="svg-spinners:ring-resize" />

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
      activeMenu: 'profile',
      menus: [
        {
          title: "Saved Jobs",
          slug: "saved-jobs",
          isActive: false,
          icon: 'ic:baseline-bookmark-added',
          isForNewUser: true,
          isForEmployee: true,
          isForEmployer: true,
        },
        {
          title: "Applied Jobs",
          slug: "applied-jobs",
          isActive: false,
          icon: 'ic:baseline-check-circle',
          isForNewUser: false,
          isForEmployee: true,
          isForEmployer: false,
        },
        {
          title: "AI Recommended Jobs",
          slug: "ai-recommended-jobs",
          isActive: false,
          icon: 'ic:baseline-recommend',
          isForNewUser: false,
          isForEmployee: true,
          isForEmployer: false,
        },
        {
          title: "Profile",
          slug: "profile",
          isActive: true,
          icon: 'ic:sharp-person',
          isForNewUser: true,
          isForEmployee: true,
          isForEmployer: true,
        },
        // {
        //   title: "Support",
        //   slug: "support",
        //   isActive: false,
        //   icon: 'ic:baseline-question-mark'
        // }
      ],
      savedJobs: {
        isFetching: false,
        jobs: [],
        isFetched: false,
      },
      appliedJobs: {
        isFetching: false,
        jobs: [],
        isFetched: false,
      },
      recommendedJobs: {
        isFetching: false,
        jobs: [],
        isFetched: false,
      },
    }
  },
  computed: { 

    userStore() {
      const u = useMyUserStore();

      
      // console.log(u.user.isLogged);
      return u;
    }

  },
  methods: {
    async fetchData(m) {

      this.activeMenu = m;

      if(m == 'saved-jobs') {

        if(!this.savedJobs.isFetched) {
          this.savedJobs.isFetching = true;
          
          const { data, pending, error, refresh } = await useFetch('/api/job/saved-jobs', {
            method: 'post',
            body: {
              user_id: this.userStore.user.user_id
            }
          });
          
          
          if(data.value) {
            
            if(data.value.status) {
              if(data.value.status) {

                this.savedJobs.isFetched = true;
              
              this.savedJobs.jobs = data.value.jobs;

              }
            }

          }

          this.savedJobs.isFetching = false;
        }
      
      }

      if(m == 'applied-jobs') {

        if(!this.appliedJobs.isFetched) {
          this.appliedJobs.isFetching = true;

        const { data, pending, error, refresh } = await useFetch('/api/job/applied-jobs', {
          method: 'post',
          body: {
            user_id: this.userStore.user.user_id
          }
      });


        if(data.value) {

          if(data.value.status) {
            if(data.value.status) {

              this.appliedJobs.isFetched = true;
            
            this.appliedJobs.jobs = data.value.jobs;

            }
          }

        }

        this.appliedJobs.isFetching = false;
        }
      
      }

      if(m == 'ai-recommended-jobs') {

        if(!this.recommendedJobs.isFetched) {
          this.recommendedJobs.isFetching = true;

        const { data, pending, error, refresh } = await useFetch('/api/job/recommended-jobs', {
          method: 'post',
          body: {
            token: this.userStore.token
          }
      });

        console.log(data);

        if(data.value) {

          if(data.value.status) {
            if(data.value.status) {

            this.recommendedJobs.isFetched = true;
            this.recommendedJobs.jobs = data.value.jobs;

            }
          }

        }

        this.recommendedJobs.isFetching = false;
        }
      
      }

    },
    doLogout() {

this.userStore.unsetUser();

location.href = '/';

}
  },
}
</script>
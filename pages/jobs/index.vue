<template>

  
  <!-- FILTER SECTION -->
  <div :class="showFilter ? 'w-screen' : 'w-full' + isLoadingJobs ? ' pt-0' : 'pt-5' " class="h-full px-2 pt-5 md:px-10">
    <VFlex v-if="!isLoadingJobs"  alignItem="start" justifyContent="center" class="gap-x-3 flex-wrap md:flex-none w-full">
      <div v-if="showFilter && jobs.length > 0" :style="{ 'height': '800px' }" :class="showInMobile ? 'block' : 'hidden'"  class="bg-remark-light md:block rounded-lg shadow-xl sticky top-0 px-3 w-full md:w-3/12" >
        <VContainer :width="80" class="px-1 py-5">
          <div class="flex justify-between items-center">
            <p class="text-lg font-bold">Filters</p>
            <div class="block md:hidden">
              <button class="py-2 px-4 bg-red-600 text-white rounded-full" @click="showInMobile = false" >Close</button>
            </div>
          </div>
        </VContainer>
        <VGap :height="20" />
        
        <VContainer :width="100" :style="{ 'height': '300px' }" class="block overflow-y-scroll border p-3 rounded-xl border-teal-100">
          <VContainer class="px-3">
            <VFlex justifyContent="space-between">
              <p class="font-semibold">Skills</p>
              <a href="javascript:void(0)" class="text-teal-800 font-bold text-sm ">Selected ({{ filterSkills.all.filter((sk) => sk.selected == true).length }})</a>
              <!-- <a href="javascript:void(0)" class="text-teal-800 font-bold text-sm underline" @click="toggleShowAllSkills" >See all</a> -->
            </VFlex>
            <VGap :height="10" />
            <div class="flex flex-wrap gap-x-2 h-auto">
              <VChip @click="quickSelectSkill(skill)" v-for="(skill, i) in filterSkills.all" :key="i" class="my-1" :bgColor="skill.selected ? 'bg-teal-800 text-white' : 'bg-teal-100'" >
                <p class="text-sm">{{skill.skill}} ({{ skill.count }})</p>
              </VChip>
            </div>
            <VContainer v-if="seeAll.skills" :style="{'width': '400px', 'height': '300px', 'margin-left': '270px' , 'margin-top' : '100px' }" class="absolute top-0 p-3 bg-white rounded-xl shadow-xl">
              <p class="text-xs font-semibold text-teal-800">All Skills</p>
              <VGap :height="10" />
              <VContainer :width="100" :style="{ 'height': '200px' }" class="overflow-y-scroll scroll-smooth">
              <VFlex class="gap-x-2 flex-wrap bg-white p-2 ">
                <VChip  @click="selectSkill(skill.skill)" v-for="(skill, i) in filterSkills.all" :key="i" class="my-1" :bgColor=" skill.tempSelected ? 'bg-teal-800 text-white' : 'bg-teal-100' " >
                  <p class="text-sm">{{skill.skill}} ({{ skill.count }})</p>
                </VChip>
              </VFlex>
              </VContainer>
              <VContainer class="p-3" :width="100">
                <VFlex justifyContent="space-between">
                  <VButton bgColor="slate" colorShade="300" @click="toggleShowAllSkills">Close</VButton>
                  <VButton>Apply</VButton>
                </VFlex>
              </VContainer>
            </VContainer>
          </VContainer>
          
        </VContainer>

        <VGap :height="20" />
        <!-- SCHEDULE FILTER -->
        <VContainer :style="{ 'height': '180px' }" class="block p-3 border border-teal-100 rounded-xl overflow-y-scroll">
          <VFlex justifyContent="space-between">
            <p class="font-semibold">Schedule</p>
            <a href="javascript:void(0)" class="text-teal-800 font-bold text-sm" >Selected ({{ filterSchedule.all.filter((fl) => fl.selected == true).length }})</a>
            <!-- <a href="javascript:void(0)" class="text-teal-800 font-bold text-sm underline" @click="toggleShowAllSkills" >See all</a> -->
          </VFlex>
          <VFlex :style="{ 'height' : '100px' }" class="gap-x-2 flex-wrap">
            <VChip @click="quickSelectSchedule(schedule)" v-for="(schedule, i) in filterSchedule.all" :key="i" class="my-1" :bgColor="schedule.selected ? 'bg-teal-800 text-white' : 'bg-teal-100'" >
              <p class="text-sm">{{schedule.schedule}} ({{ schedule.count }})</p>
            </VChip>
          </VFlex>
          
        </VContainer>

        <VGap :height="20" />
        <!-- SCHEDULE FILTER -->
        <VContainer :style="{ 'height': '180px' }" class="block p-3 border border-teal-100 rounded-xl overflow-y-scroll">
          <VFlex justifyContent="space-between">
            <p class="font-semibold">Locations</p>
            <a href="javascript:void(0)" class="text-teal-800 font-bold text-sm">Selected ({{ filterLocations.all.filter((fl) => fl.selected == true).length }})</a>
            <!-- <a href="javascript:void(0)" class="text-teal-800 font-bold text-sm underline" @click="toggleShowAllSkills" >See all</a> -->
          </VFlex>
          <VFlex :style="{ 'height' : '100px' }" class="gap-x-2 flex-wrap">
            <VChip @click="quickSelectLocation(location)" v-for="(location, i) in filterLocations.all" :key="i" class="my-1" :bgColor="location.selected ? 'bg-teal-800 text-white' : 'bg-teal-100'" >
              <p class="text-sm">{{location.location}} ({{ location.count }})</p>
            </VChip>
          </VFlex>
          
        </VContainer>
      </div>

      <!-- JOB SEARCHING & LISTING SECTION -->
      <div class="w-full" :class="!showFilter ? 'md:w-6/12' : 'md:w-5/12' ">
        <VContainer class="">
          <VFlex :width="100" class="bg-remark-light px-8 py-2 shadow-xl hover:shadow-none duration-200" style="border-radius: 10px;">
            <input v-model="searchTitle" style="width:100%" placeholder="Development, Back Office, Sales" class="py-3 bg-transparent outline-none border-none" />
            <button paddingY="3" @click="filterJobs(1)" class="bg-teal-800 p-3 rounded-full text-white" >
                    <Icon name="material-symbols:search" class="text-2xl" />
              </button>
        </VFlex>
        </VContainer>

        <VGap :height="30" />

        <VContainer v-if="isSearched && jobs.length > 0" class="mx-3 font-semibold w-full">
          <VFlex class="gap-x-2 mx-3" justifyContent="space-between">
            <p> Showing ({{ jobs.length }}) jobs </p> 
            <div @click="showInMobile = !showInMobile" class="block md:hidden text-3xl text-teal-800">
              <span class="text-lg">Filter</span> <icon name="material-symbols:filter-alt" />
            </div>
            <!-- <VIconText v-if="isSearched" class="text-sm px-2 py-1 bg-teal-500 text-white" icon="ic:baseline-cancel" text="Clear" /> -->
          </VFlex>
          
        </VContainer>
        <VContainer v-if="!isSearched && jobs.length > 0" class="mx-3 font-semibold">
          <VFlex class="mx-3">
            <p> Latest Jobs for you</p> 
          </VFlex>
          
        </VContainer>
        <VGap :height="10" />
        <VContainer v-if="jobs.length > 0"  class="p-2 w-100">
          <!-- JOB COMPONENT -->
          <RJobCard
            v-for="(job,i) in jobs"
            :key="i"
            :title="job.job_title"
            :slug="job.job_slug"
            :skills="job.job_key_skills.join(' | ')"
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
          <VGap :height="10" />
          <VContainer :style="{ 'width' : '100%' }">
            <VPagination  @pageChange="showJobs" :currentPage="currentPage" :totalPages="totalPages" />
          </VContainer>
        </VContainer>
        <VContainer :width="100" v-else>
          <VFlex justifyContent="center" >
            <VContainer class="text-center">
              <p class="text-lg font-bold">
                No results found
              </p>
            </VContainer>
          </VFlex>
        </VContainer>
      </div>

      <!-- ADVERTISING SECTION -->
      <div class="w-full md:w-3/12 sticky md:h-screen top-0">
        <VContainer :width="100" class=" bg-remark-light h-screen shadow-xl">
          
          <VImage class="w-full" link="/mobile/mobile-preview.png" />
          <VGap :height="10" />
          <VContainer class="text-center md:px-5 md:text-sm py-2">
            <p class="text-lg md:text-md px-4 font-bold">Check Latest Jobs on Application</p>
            <p class="text-slate-400 md:text-sm text-sm">Available for both Android and iOS apps</p>
            <VGap :height="10" />
            <VFlex justifyContent="center" class="gap-x-2 md:flex-wrap ">
              <VButton rounded="full md:my-2">
                <VIconText icon="ion:logo-google-playstore" text="Playstore" gap="2">
                </VIconText>
              </VButton>
              <VButton rounded="full">
                <VIconText icon="mdi:apple" text="App Store" />
              </VButton>
            </VFlex>
          </VContainer>
        </VContainer>
      </div>
    </VFlex>
    <div class="h-96	 flex w-screen justify-center items-center" v-else>
      <div class="w-20 h-20">
        <icon class="text-4xl" name="svg-spinners:eclipse" />
      </div>
    </div>
  </div>
  <VGap :height="60" />

</template>

<script>
export default {
  data() {
    return  {
      showFilter: false,
      jobs: [],
      user: {},
      searchTitle: "",
      oldSearchTitle: "",
      searchLocation: "",
      filter: {
        skills: [],
        schedules: [],
        locations: []
      },
      filterSkills: {
        limit: [],
        all: [],
      },
      filterSchedule: {
        all: [],
      },
      filterLocations: {
        limit: [],
        all: []
      },
      showInMobile: false,
      isSearched: false,
      jobOffset: 0,
      countJobs: 0,
      totalPages: 10,
      storage: null,
      currentPage: 1,
      isLoadingJobs: false,
      seeAll: {
        skills: false
      }
    }
  },
  methods: {
    async init() {

      this.user = useMyUserStore();

      this.storage = await localStorage;

      const route = useRoute();

      if(route.query.j) {
        this.searchTitle = route.query.j;
        this.filterJobs(1);
      }else{

        if(this.storage?.hasJobs) {

        
if(this.storage.isSearched) {
  await this.loadMoreJobs(1);
}else{
this.jobs = JSON.parse(this.storage?.jobs);
this.countJobs = this.storage?.countJobs;
}

}else{

await this.loadMoreJobs(1);

}

      }

      
    },
    async showJobs(pageNum) {

      if(this.isSearched) {
        
        await this.filterJobs(pageNum);

      }else{

        await this.loadMoreJobs(pageNum);

      }

    },
    async loadMoreJobs(pageNum) {

      this.currentPage = pageNum;

      this.isLoadingJobs = true;

      console.log('loading jobs');
      this.jobs = [];
      const {data ,pending, refresh} = await useFetch('/api/job/all-jobs', {
          method: 'post',
          body: {
            offset: (pageNum * 10) - 10,
            token: this.user.token
          }
        });

        if(data.value?.status) {

          
          this.countJobs = data.value.counts;
          this.jobOffset = data.value.jobs.length;
          console.log(data.value); 
          data.value?.jobs.forEach((job) => {
            
            job?.job_key_skills.forEach((skill) => {
              skill.trim();

            
            
            if(job.job_ext_experience.length > 0) {
              job.is_experienced = true;
            }else{
              job.is_experienced = false;
            }

            });
        
          this.jobs.push(job);

        

          // this.storage.setItem('jobs', JSON.stringify(this.jobs));
          // this.storage.setItem('hasJobs', true);
          // this.storage.setItem('countJobs', this.countJobs);
          this.setToStorage(this.jobs, true, this.countJobs, false);

        });

  
        }

        this.totalPages = Math.round(this.countJobs/15)

        this.isLoadingJobs = false;

      
    },

    async setToStorage(jobs, hasJobs, countJobs, isSearched, filters, filterSkills) {

      // SET THE JOB DATA
      this.storage.setItem('jobs', JSON.stringify(jobs));
      this.storage.setItem('hasJobs', hasJobs);
      this.storage.setItem('countJobs', countJobs);

      // SET FITLER DATA
      if(isSearched) {
        this.storage.setItem('filter', filters);
        this.storage.setItem('isSearched', isSearched);
        this.storage.setItem('showFilter', this.showFilter);
        
      }

    },

    selectSkill(skill) {

      if(skill == 'All') {
        this.filterSkills.all.forEach((sk) => {
          sk.tempSelected = false;
          
          if(sk.skill == 'All') {
            sk.tempSelected = true;
          }
        });
        
        return false;
      }
      
      if(skill != 'All') {
        console.log(skill);
        
        this.filterSkills.all.forEach((sk) => {

          if(sk.skill == 'All') {
            sk.tempSelected = false;
          }

          if(sk.skill == skill) {
            sk.tempSelected = !sk.tempSelected;
          }
        })

      }

    },

    toggleShowAllSkills() {

      this.seeAll.skills = !this.seeAll.skills;

      if(!this.seeAll.skills) {
        console.log('skills hidden');
        this.filterSkills.all.forEach((skill) => skill.tempSelected = false);
      }

    },
    
    async filterJobs(pageNum) {

      if(this.searchTitle == '') {
        return false;
      }

      this.currentPage = pageNum;


      if(this.searchTitle != this.oldSearchTitle) {
        this.filter.skills = [];
        this.filter.skills.push("All");
        this.filter.schedules.push('All');
        this.filter.locations.push('All');
      }

      if(this.showInMobile) {
        this.showInMobile = false;
      }

      this.jobs = [];
      const user = useMyUserStore();
      this.isLoadingJobs = true;
      this.currentPage = pageNum;

      if(this.filter?.skills?.length == 0) {
        this.filter.skills.push('All');
      }

      if(this.filter?.schedules.length == 0) {
        this.filter.schedules.push('All');
      }

      if(this.filter?.locations.length == 0) {
        this.filter.locations.push('All');
      }

      this.storage.setItem('searchTitle', this.searchTitle);
      
      const { data, pending, error, refresh } = await useFetch('/api/job/filter-jobs', {
          method: 'post',
          body: {
            title: this.searchTitle,
            offset: (pageNum * 10) - 10,
            token: user.token,
            filter: JSON.stringify([this.filter])
          }
      });

      console.log(data.value);

      if(data?.value.status) {

        if(data.value.jobs.length == 0) {
          this.isSearched = false;
          this.showFilter = false;
        }else{
          this.isSearched = true;
          this.showFilter = true;
        
        }
        
 
        this.oldSearchTitle = this.searchTitle;

        this.countJobs = data.value?.counts?.page_job_count;
        this.totalPages = Math.ceil(this.countJobs/20);
        console.log('totalPages',this.totalPages);

       
        data.value?.jobs.forEach((job) => {
          
          job.job_key_skills = JSON.parse(job.job_key_skills);

          job.job_ext_experience = JSON.parse(job.job_ext_experience);
            if(job.job_ext_experience.length > 0) {
              job.is_experienced = true;
            }else{
              job.is_experienced = false;
            }

        
        job?.job_key_skills.forEach((skill) => {
          skill.trim();
        });


        this.jobs.push(job);
  

        });

        console.log('filter', data.value.filter);
        this.doReadySkillFilter(data.value.skills, data.value.filter);
        this.doReadyScheduleFilter(data.value.job_schedule, data.value.filter);
        this.doReadyLocationFilter(data.value.locations, data.value.filter);
        data.value.filter = JSON.parse(data.value.filter);

        // this.filterLocations = data.value.locations;

        // this.storage.setItem('jobs', JSON.stringify(this.jobs));
        // this.storage.setItem('hasJobs', true);
        // this.storage.setItem('countJobs', this.countJobs);
        this.setToStorage(this.jobs,true,this.countJobs,true, JSON.stringify( data.value.filter))

      }

      this.isLoadingJobs = false;


    },
    setTitle(title) {
      this.searchTitle = title.search_job_title;
    },
    quickSelectSkill(skill) {
      console.log(skill);
      this.filterSkills.all.forEach((sk, inde) => {

        if(skill.skill == 'All') {
          if(sk.skill == 'All') {
            this.filter.skills = [];
            sk.selected = true;
            sk.tempSelected = true;
            this.filter.skills.push('All');
            this.filterJobs(1);
          }else{

           

            sk.selected = false;
            sk.tempSelected = false;
          }
        }else{



          if(sk.skill == 'All') {
            sk.selected = false;
            sk.tempSelected = false;
            this.filter.skills = this.filter.skills.filter((s) => s != 'All');

          }
          

          if(skill.skill == sk.skill) {
            var isAlreadyFiltered = 'no';
            this.filter.skills.forEach((s, ind) => {
              if(s == sk.skill){
                isAlreadyFiltered = ind;
              }
            });
            if(isAlreadyFiltered != 'no') {
                console.log(isAlreadyFiltered);
                this.filter.skills.splice(isAlreadyFiltered, 1);
                sk.selected = false;
                sk.tempSelected = false;
            }else{
              sk.selected = true;
              sk.tempSelected = true;
              this.filter.skills.push(sk.skill);
            }
            this.filterJobs(1);
          }
        }
      });
    },

    quickSelectSchedule(schedule) {
      console.log(schedule);
      this.filterSchedule.all.forEach((sch, inde) => {

        if(schedule.schedule == 'All') {
          if(sch.schedule == 'All') {
            this.filter.schedules = [];
            sch.selected = true;
            sch.tempSelected = true;
            this.filter.schedules.push('All');
            this.filterJobs(1);
          }else{

           

            sch.selected = false;
            sch.tempSelected = false;
          }
        }else{



          if(sch.schedule == 'All') {
            sch.selected = false;
            sch.tempSelected = false;
            this.filter.schedules = this.filter.schedules.filter((s) => s != 'All');

          }
          

          if(schedule.schedule == sch.schedule) {
            var isAlreadyFiltered = 'no';
            this.filter.schedules.forEach((s, ind) => {
              if(s == sch.schedule){
                isAlreadyFiltered = ind;
              }
            });
            if(isAlreadyFiltered != 'no') {
                console.log(isAlreadyFiltered);
                this.filter.schedules.splice(isAlreadyFiltered, 1);
                sch.selected = false;
                sch.tempSelected = false;
            }else{
              sch.selected = true;
              sch.tempSelected = true;
              this.filter.schedules.push(sch.schedule);
            }
            this.filterJobs(1);
          }
        }
      });
    },

    quickSelectLocation(location) {
      console.log(location);
      this.filterLocations.all.forEach((loc, inde) => {

        if(location.location == 'All') {
          if(loc.location == 'All') {
            this.filter.locations = [];
            loc.selected = true;
            loc.tempSelected = true;
            this.filter.locations.push('All');
            this.filterJobs(1);
          }else{
            loc.selected = false;
            loc.tempSelected = false;
          }
        }else{



          if(loc.location == 'All') {
            loc.selected = false;
            loc.tempSelected = false;
            this.filter.locations = this.filter.locations.filter((s) => s != 'All');

          }
          

          if(location.location == loc.location) {
            var isAlreadyFiltered = 'no';
            this.filter.locations.forEach((s, ind) => {
              if(s == loc.location){
                isAlreadyFiltered = ind;
              }
            });
            if(isAlreadyFiltered != 'no') {
                console.log(isAlreadyFiltered);
                this.filter.locations.splice(isAlreadyFiltered, 1);
                loc.selected = false;
                loc.tempSelected = false;
            }else{
              loc.selected = true;
              loc.tempSelected = true;
              this.filter.locations.push(loc.location);
            }
            this.filterJobs(1);
          }
        }
      });
    },

    doReadyScheduleFilter(schedules, filters) {
      filters = JSON.parse(filters);

      if(schedules.length > 0) {
        this.filterSchedule.all = [];

      // ADD SELECTED AND TEMP SELECTED 
      schedules.forEach((schedule, i) => {

        schedule.selected = false;
        schedule.tempSelected = false;

        filters[0]['schedules'].forEach((sk) => {
          if(schedule.schedule == sk) {
            
            schedule.selected = true;
            schedule.tempSelected = true;
          }
        })

        this.filterSchedule.all.push(schedule);
      });

      this.storage.setItem('filterSchedule', JSON.stringify(this.filterSchedule));
      }

    },

    doReadySkillFilter(skills, filters) {
      filters = JSON.parse(filters);

      this.filterSkills.all = [];

      // ADD SELECTED AND TEMP SELECTED 
      skills.forEach((skill, i) => {

        skill.selected = false;
        skill.tempSelected = false;

        filters[0]['skills'].forEach((sk) => {
          if(skill.skill == sk) {
            
        skill.selected = true;
        skill.tempSelected = true;
          }
        })

        this.filterSkills.all.push(skill);

      });

      this.storage.setItem('filterSkills', JSON.stringify(this.filterSkills));

    },

    doReadyLocationFilter(locations, filters) {
      filters = JSON.parse(filters);

      this.filterLocations.all = [];

      // ADD SELECTED AND TEMP SELECTED 
      locations.forEach((location, i) => {

        location.selected = false;
        location.tempSelected = false;

        filters[0]['locations'].forEach((l) => {
          if(location.location == l) {
            
            location.selected = true;
            location.tempSelected = true;
          }
        })

        this.filterLocations.all.push(location);

      });

      this.storage.setItem('filterLocations', JSON.stringify(this.filterLocations));

    }

  },

  async created() {
    this.init();
    
  }
}
</script>

<style>

/* width */
::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #115E59;
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #156862;
}

</style>
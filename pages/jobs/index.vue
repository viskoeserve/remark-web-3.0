<template>
  <VGap :height="60" />

  <!-- FILTER SECTION -->
  <VContainer :width="80">
    <VFlex justifyContent="space-between" alignItem="start" class="gap-x-3">
      <VContainer :width="60"  :style="{'height': '800px'}" class="bg-remark-light rounded-lg shadow-xl">
        <VContainer :width="80" class="px-1 py-5">
          <p class="text-lg font-bold">Filters</p>

        </VContainer>
      </VContainer>


      <!-- JOB SEARCHING & LISTING SECTION -->
      <VContainer :width="150" class="">
        <VContainer class="">
          <VFlex :width="80"  class="bg-remark-light px-8 py-2 shadow-xl hover:shadow-none duration-200" style="border-radius: 10px;">
            <VInput style="width:60%" placeholder="Development, Back Office, Sales" class="py-3" />
            <div class="h-[2rem] border border-slate-300">

            </div>
            <VGap :width="15" />
            <VInput style="width:40%" placeholder="Enter Location" class="py-3" />
            <VButton paddingY="3">
                <VFlex>
                    <Icon name="material-symbols:search" class="mx-2" /> <p class="text-white">Search</p>
                </VFlex>
            </VButton>
        </VFlex>
        </VContainer>
        <VGap :height="30" />
        <VContainer class="mx-3 font-semibold">
          <VFlex class="gap-x-2">
            <p>70 jobs found in "developer" -</p> 
            
            <VIconText class="text-sm px-2 py-1 bg-teal-500 text-white" icon="ic:baseline-cancel" text="Clear" />
          </VFlex>
          
        </VContainer>
        <VGap :height="10" />
        <VContainer class="p-2">
          <!-- JOB COMPONENT -->
          <RJobCard
            v-for="(job,i) in jobs"
            :key="i"
            :title="job.job_title"
            :skills="job.job_key_skills.join(' | ')"
            :timeAgo="job.job_timeago"
            companyLogo=""
            :companyName="job.company"
            companyLocation="Richmond Plaza 3rd Floor , Near By Dheeraj Sons , Vesu"
            salary="Rs. 10000 to Rs. 20000"
            :experience="job.job_ext_experience.length > 0 ? 'Experienced' : 'Fresher'"
            :schedule="job.job_schedule"
            :description="job.job_description"
            isSaved="1"
          />
        </VContainer>
      </VContainer>

      <!-- ADVERTISING SECTION -->
      <VContainer :width="60" :style="{ 'height' : '800px'}" class="bg-remark-light shadow-xl">
        Advertising
      </VContainer>
    </VFlex>
  </VContainer>
  <VGap :height="60" />

</template>

<script lang="ts" setup>

  var limitJobs = [
    {
      job_title: "BPO TeleCalling work from home ",
      job_key_skills: ["good communication ","computer knowledge ","marketing manager "],
      job_description: "Telecalling is a job that is done by people with excellent verbal communication and persuasion skills that address a client's needs while nudging them toward the company's offerings. Playing the role of a customer service representative, telecalling work is in demand, given that it is a vital part of many industries.",
      job_slug: "bpo-telecalling-work-from-home",
      job_minimum_salary: "10000",
      job_maximum_salary: "20000",
      job_schedule: "Full Time",
      job_ext_experience: [{"ExperienceTitle":"marketing ","ExperienceMonth":"1","ExperienceYear":"1"}],
      job_timeago: "2 days ago",
      company: "Advertrone technologies Pvt Ltd ",
      company_slug: "advertrone-technologies-pvt-ltd-3480",
      company_address: "Advertrone Technology Pvt LtdSADHNA SADHAN , NEAR APEX HOSPITALQUARSI BYPASS ROADALIGARH - 202001",
      company_logo: ""
    },
    {
      job_title: "HR Intern",
      job_key_skills: ["good communication ","computer knowledge ","marketing manager "],
      job_description: "Telecalling is a job that is done by people with excellent verbal communication and persuasion skills that address a client's needs while nudging them toward the company's offerings. Playing the role of a customer service representative, telecalling work is in demand, given that it is a vital part of many industries.",
      job_slug: "bpo-telecalling-work-from-home",
      job_minimum_salary: "10000",
      job_maximum_salary: "20000",
      job_schedule: "Part Time",
      job_ext_experience: [{"ExperienceTitle":"marketing ","ExperienceMonth":"1","ExperienceYear":"1"}],
      job_timeago: "2 days ago",
      company: "Advertrone technologies Pvt Ltd ",
      company_slug: "advertrone-technologies-pvt-ltd-3480",
      company_address: "Advertrone Technology Pvt LtdSADHNA SADHAN , NEAR APEX HOSPITALQUARSI BYPASS ROADALIGARH - 202001",
      company_logo: ""
    }
  ];

  const jobs = [];

  limitJobs.forEach((job) => {
    job.job_key_skills.forEach((skill) => {
      skill.trim();
    });

    jobs.push(job);

  })

</script>

<style>

</style>
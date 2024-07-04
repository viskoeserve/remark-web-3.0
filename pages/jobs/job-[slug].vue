<template>
    <div v-if="jobStore.job">

       <VContainer :width="100">
        <div class="h-0 md:h-10"></div>
        <VFlex justifyContent="center" alignItem="start" class="flex-wrap md:flex-none ">
            <div class="w-full md:w-2/12 py-2 px-2"></div>
            <div class="w-full md:w-6/12 py-2 px-2">
                <VContainer class="border p-5 rounded-lg">
                    <VFlex justifyContent="space-between">
                        <VContainer :width="100">
                            <p class="text-2xl font-bold"> {{ jobStore.job?.job_title }} </p>
                            <VGap :height="5" />
                            <VIconText icon="ic:sharp-location-on" class="text-sm text-slate-500" gap="1" :text="jobStore.job?.company?.company_address" />
                            <VGap :height="5" />
                            <VIconText icon="material-symbols:currency-rupee" class="text-sm text-slate-500" gap="1" :text="'Rs. ' + jobStore.job?.job_minimum_salary + ' to ' + 'Rs. ' + jobStore.job?.job_maximum_salary + ' (Per Month)'" />
                        </VContainer>
                        <VContainer :width="20" class="text-end text-slate-400 text-sm">
                            <p class="font-bold text-slate-600 text-xs">Posted on</p>
                            {{ jobStore.job.job_timeago }}
                        </VContainer>
                    </VFlex>

                    <VDivider :height="15" />

                    <VContainer >
                        <p class="text-sm font-semibold">Required Experience:</p>
                        <VGap :height="5" />
                        <VFlex v-if="jobStore.job?.job_ext_experience?.length > 0" justifyContent="start" class="gap-x-3 text-start flex-wrap">
                            <div v-for="(exp, i) in jobStore.job.job_ext_experience" :width="30" class="p-3 my-1 bg-remark-light rounded border border-teal-300" :key="i">
                                <p class="font-semibold">{{ exp.ExperienceTitle }}</p>
                                <span class="text-sm text-slate-500"> {{exp.ExperienceMonth}} Month(s) {{ exp.ExperienceYear }} Year(s) </span>
                            </div>
                        </VFlex>
                        <p class="text-sm" v-else>Fresher</p>

                    </VContainer>

                    <VDivider v-if="jobStore.job?.job_key_skills?.length > 0" :height="15" />
                    
                    <VContainer v-if="jobStore.job?.job_key_skills?.length > 0">
                        <p class="text-sm font-semibold">Required Skills:</p>
                        <VGap :height="5" />
                        <VFlex justifyContent="start" class="gap-x-3 text-start flex-wrap">
                            <div v-for="(skill, i) in jobStore.job.job_key_skills" :key="i">
                                <div v-if="skill != ''" class="px-5 py-2 my-2 bg-remark-light rounded-full border border-teal-300">
                                    <p class="font-semibold text-slate-800 text-sm">{{ skill }}</p>
                                </div>
                            </div>
                        </VFlex>

                    </VContainer>
                    
                </VContainer>
                <VGap :height="20" />
                <VContainer class="border p-5 rounded-lg">
                    <p class="text-sm font-semibold">Company Details:</p>
                    <VGap :height="10" />
                    <VFlex justifyContent="start" class="gap-x-2">
                        <VContainer :width="10">
                            <VImage :width="60" :link="jobStore.job.company.company_logo" />
                        </VContainer>
                        <VContainer>
                            <p class="text-xl font-bold"> {{ jobStore.job?.company.company_name }} </p>
                    <small> {{ jobStore.job?.company?.company_website }} </small>
                        </VContainer>
                    </VFlex>
                </VContainer>
                <VGap :height="20" />
                <VContainer class="border p-5 rounded-lg">
                    <p class="text-lg font-bold my-2">Description</p>
                    <p> {{ jobStore.job.job_description }} </p>
                    <br />
                    <p class="text-sm my-2"><span class="font-semibold">Schedule:</span> {{ jobStore.job.job_schedule }}</p>
                    <p class="text-sm my-2"><span class="font-semibold">Education:</span> {{ jobStore.job.job_education }}</p>
                    <p class="text-sm my-2"><span class="font-semibold">Qualification:</span> {{ jobStore.job.job_qualification }}</p>
                    <p class="text-sm my-2"><span class="font-semibold">Hiring:</span> {{ jobStore.job.job_hiring_count }}</p>
                </VContainer>
                <VGap :height="20" />
                <VContainer class="border p-5 rounded-lg">
                    <VFlex justifyContent="space-between" class="flex-wrap md:flex-none">
                        <div class="w-full md:w-4/12">
                            <VFlex justifyContent="start" class="gap-x-5">
                                <!-- <VIconText gap="2" icon="ic:round-share" class="text-teal-900" text="Share" /> -->
                                <!-- <VIconText gap="2" icon="ic:baseline-bookmark" class="text-teal-900" text="Save" /> -->
                                <VIconText gap="2" icon="material-symbols:report-outline" class="text-teal-900" text="Report" />
                            </VFlex>
                        </div>

                        <RApplyButton :job="jobStore.job" />

                        <!-- APPLY BUTTON BACKUP -->
                        <!-- <div class="w-full md:w-3/12 text-center mt-4 md:mt-0">
                            <div v-if="jobStore.job.applied_status == null">
                                <button @click="doAskForApply()" class="px-5 py-2 bg-teal-800 text-white rounded-full" v-if="user.user?.isLogged && user.user?.user_type == '1'">Apply Now</button>
                            </div>
                            <div v-if="jobStore.job.applied_status == '0'">
                                <p class="px-5 py-2 text-slate-400" v-if="user.user?.isLogged && user.user?.user_type == '1'">Applied</p>
                            </div>
                            <div v-if="jobStore.job.applied_status == '1'">
                                <p class="px-5 py-2 text-green-600" v-if="user.user?.isLogged && user.user?.user_type == '1'">Hired</p>
                            </div>
                            <div v-if="jobStore.job.applied_status == '3'">
                                <p class="px-5 py-2 text-red-600" v-if="user.user?.isLogged && user.user?.user_type == '1'">Rejected</p>
                            </div>
                        </div> -->
                        <!--  -->

                    </VFlex>
                </VContainer>
            </div>
            <div  class="w-full md:w-3/12  py-2 px-2">
                <VContainer class="text-white rounded text-center" :width="100" :style="{ 'height': '200px', 'background-image': 'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' , 'background-size': 'contain' }" >
                    <VFlex justifyContent="center" :style="{ 'height': '150px' }">
                        <VContainer>
                            <p>Download App Now</p>
                            <VGap :height="10" />
                            <VButton>PlayStore</VButton>
                        </VContainer>
                    </VFlex>
                </VContainer>
            </div>
        </VFlex>
        
        <!-- <VModal v-if="askForApply" @close="askForApply = false">
            <div class="w-full text-center">
                <div class="h-8"></div>
                <p>Hi<span class="pl-2 font-bold text-teal-800">{{ user.user.user_name }}</span>,</p>
                <div class="h-2"></div>
                <p class="font-semibold px-1">Are you sure want to apply for <span class="text-teal-800 font-bold">{{  jobStore.job.job_title  }}</span>?</p>
                <div class="h-5"></div>
                <div class="flex justify-center gap-x-3">
                    <button class="text-white bg-teal-800 px-8 py-2 rounded-full" @click="doApplyForJob(jobStore.job.job_id, user.user.user_id, jobStore.job.company.user_id)" >Yes</button>
                    <button @click="askForApply = false" class="text-white bg-slate-400 px-8 py-2 rounded-full">No</button>
                </div>
            </div>
        </VModal> -->
       </VContainer>

    </div>
    <div v-else class="text-center">
        <VLoading />
    </div>
</template>

<script setup lang="ts">

var slug = '';
const jobStore = useMyJobStore();



// get router
const route = useRoute();

slug = route.params.slug.toString();

const user = useMyUserStore();

setTimeout(async() => {

    console.log(user.token);

const { data, pending, error, refresh } = await useFetch('/api/job/single-job', {
    method:'post',
    body:  {
        slug: slug,
        token: user.token.toString()
    },
    lazy: true, 
});

console.log(data.value);

if(data.value?.status) {
    console.log('got data');
    jobStore.setJob(data.value.job);
    useSeoMeta({
     title: jobStore.job.job_title + ' - ' + jobStore.job?.company?.company_address + ' - Remark Job & Recruiter App'
    })
}
    
console.log(jobStore.job);
}, 2000);



</script>

<script lang="ts">
export default {
    data() {
        return {
            askForApply: false,
        }
    },
    methods: {
        doAskForApply() {
            this.askForApply = true;
        },
        async doApplyForJob(job_id:string, user_id:string, employer_id:string) {

            const jobStore = useMyJobStore();

            console.log({
                job_id:job_id,
                user_id:user_id,
                employer_id:employer_id
            });

            this.askForApply = false;

            // jobStore.job.is_user_applied

            await jobStore.doApply(job_id, user_id, employer_id);



        }
    }
}
</script>
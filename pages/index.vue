
<template>

    <!-- HERO SECTION -->

    <div class="hidden md:block h-20"></div>
        <div :style="{'height': '200px'}" class="hidden md:block bg-gradient-to-br from-teal-500 to-teal-800">
            <VFlex class="h-full items-center">
                <VContainer :width="80" class="text-center" :style="{'background-image':'url(https://png.pngtree.com/png-clipart/20240212/original/pngtree-lord-ganesh-png-image_14296248.png)', 'height' : '300px', 'background-size': 'contain' , 'background-position': 'top', 'background-repeat': 'no-repeat'}">

                </VContainer>
                <VContainer :width="150" class="text-slate-800 text-center">

                    
                    <p class="text-xl md:text-5xl font-bold text-white">Happy Ganesh Chaturthi</p>
                    <VGap :height="15"  />
                    <small class="text-xs md:text-md font-semibold text-white">Celebrate Ganesh Chaturthi with joy and devotion.</small>
                </VContainer>
                <VContainer :width="80" class="text-white text-center">
                    <VButton :isDisabled="isLikedPoster ? true : false" bgColor="white" :onClick="!isLikedPoster ? () => {isLikedPoster = !isLikedPoster} : () => console.log('already liked')" class="rounded-full">
                        <VFlex class="gap-x-2"><Icon :name="`icon-park-${isLikedPoster ? 'solid' : 'outline'}:like`" /> <p>Like</p></VFlex>
                    </VButton>
                </VContainer>
            </VFlex>
        </div>
        <div class="flex items-center space-x-4">
            <USkeleton class="h-12 w-12" :ui="{ rounded: 'rounded-full' }" />
            <div class="space-y-2">
              <USkeleton class="h-4 w-[250px]" />
              <USkeleton class="h-4 w-[200px]" />
            </div>
          </div>
    <VGap :height="30" />
    <div  padding="50" class="bg-teal-0 w-full md:w-full px-5 md:px-40">
        
        <div class="h-10"></div>
        <VFlex :justifyContent="'center'">
            <!-- <div class="flex justify-center w-full md:w-4/12 ">
                <VContainer class="w-full text-center md:text-left md:px-5 md:py-0 md:my-0 ">
                    <p class="text-3xl md:text-5xl font-bold tracking-wide">Remark <span class="text-red-500">Job</span> & <span class="text-red-500">Recruiter</span> Portal
                    </p>
                </VContainer>
            </div> -->
            <div class="w-full md:w-8/12">
                <!-- <VGap :height="0" /> -->
                <div class="h-0 md:h-2"></div>
                <div class="w-full flex justify-center mb-2 animate__animated animate__fadeIn">
                    <!-- <img class="w-4/12 md:w-3/12" src="/img/svg/remark-ai.png" /> -->
                     <div class="w-11/12">
                        <p class="font-bold text-2xl md:text-6xl text-center">Best <span class="text-teal-500">Job Portal</span> in India Unleashing Growth for Everyone</p>
                        <div class="my-2 md:my-5"></div>
                        <div class="w-full flex justify-center text-center">
                            <p class="w-10/12 text-slate-500 mt-2 text-center text-xs md:text-lg">
                                Remark Jobs is making the recruitment process easy and seamless. Now, Apply for Jobs, Hire Candidates, and Expand the Team easily from a single platform.
                            </p>
                        </div>
                     </div>
                </div>
                <div class="my-3 md:my-5"></div>
                <VFlex  class="px-8 py-1 md:py-2 shadow-none border border-teal-300 rounded-full hover:shadow-xl hover:shadow-red-100 duration-200 hidden md:flex animate__animated animate__fadeIn">
                    <input v-model="searchInput" @keyup="searchJob" style="width:100%" placeholder="Development, Back Office, Sales" class="py-3 bg-transparent outline-none border-none" />
                    <VButton class="md:hidden" :to=" searchInput == '' ? 'javascript:void(0)' : 'jobs?j=' + searchInput" fullBgColor="bg-red-600" :isLink="true" paddingY="3" rounded="full">
                        <VFlex class="gap-x-2">
                            <Icon name="material-symbols:search" /> <p class="text-white">Search</p>
                        </VFlex>
                    </VButton>
                </VFlex>
                <div class="block md:hidden text-center animate__animated animate__fadeIn">
                    <div>
                        <div  class="bg-remark-light px-8 py-2 shadow-none border border-teal-300 rounded-full hover:shadow-xl hover:shadow-red-100 duration-200">
                            <input v-model="searchInput" @keyup="searchJob" style="width:100%" placeholder="Development, Back Office, Sales" class="py-3 bg-transparent outline-none border-none" />
                            
                        </div>
                        <div class="h-3">

                        </div>
                        <div class="flex w-full justify-center">
                            <a class="block md:hidden bg-red-600 py-3 w-6/12 rounded-full" :href=" searchInput == '' ? 'javascript:void(0)' : 'jobs?j=' + searchInput">
                                <VFlex class="gap-x-2 text-white" justifyContent="center">
                                    <Icon name="material-symbols:search" /> <p class="">Search</p>
                                </VFlex>
                            </a>
                        </div>
                    </div>
                </div>
                <VGap :height="20" />
                <VContainer class="text-center animate__animated animate__fadeIn">
                    <div class="font-bold text-slate-800">
                        Download Remark Job & Recruiter App
                    </div>
                    <div class="pb-2 text-slate-400">
                        Make your mark with remark!
                    </div>
                    <VFlex class="gap-x-3" justifyContent="center">
                        <RAppStoreButton store="playstore" />
                        <RAppStoreButton store="appstore" />
                    </VFlex>
                </VContainer>
            </div>
        </VFlex>
    </div>

    <!-- <VGap :height="100" /> -->
    <!-- <div class="h-10 md:h-48">
        
    </div> -->
    <div class="h-10 md:h-24" ></div>


    <!-- CATEGORIES SECTION -->
    
        <div class="w-[100%] mb-20 flex justify-center animate__animated animate__fadeInUp">
            <div class="w-[95%] md:w-[80%]">
                
                <div class="w-full">
                    <div class="p-4">
                        <div class="flex justify-between">
                            <div class="w-full text-center">
                                <p class="text-2xl md:text-5xl font-semibold">Top Searches</p>
                                <p class="text-slate-400 text-sm my-3">Browse Jobs by Industry</p>
                            </div>
                        </div>
                    </div>
                    <!-- <VContainer :style="{'height' : '200px'}" class="border-x-4 px-6">
                        <VFlex class="gap-x-5" >
                            <RCategory v-for="(category, i) in categories" :key="i" :title="category.title" :icon="category.icon" :count="category.count" />
                        </VFlex>
                    </VContainer> -->
                    
                    <div class="flex flex-wrap justify-start md:gap-x-0">
                        <div v-for="(category, i) in db.homepage.categories" :key="i" class="w-6/12 md:w-2/12 my-2 md:my-5 px-1 md:px-5">
                            <RCategory class="" :title="category.industry.industry_title" :slug="category.industry.industry_slug" :icon="category.industry.industry_logo" :count="category.count" />
                        </div>
                    </div>
                </div>
            </div>
            <!-- <VContainer :width="100" :style="{'height' : '200px'}" class="border-x-4 px-6">
                <client-only>
                    <Swiper 
                :style="{'height' : '250px'}"
                class=" bg-white"
                :modules="[SwiperAutoplay, SwiperEffectCoverflow]"
                :slides-per-view="viewPort == 'mobile' ? 1 : 5"
                :loop="false"
                :effect="'cube'"
                :creative-effect="{
                prev: {
                    shadow: true,
                    translate: ['-20%', 0, -1],
                },
                next: {
                    translate: ['100%', 0, 0],
                },
                }"
                >
                    <SwiperSlide class="px-2" v-for="(category, i) in db.homepage.categories" :key="i">
                        <RCategory class="" :title="category.industry.industry_title" :slug="category.industry.industry_slug" :icon="category.industry.industry_logo" :count="category.count" />
                    </SwiperSlide>
                </Swiper>
                </client-only>
            </VContainer> -->
    
    
        </div>
    

    <!-- <VGap :height="60" /> -->

    
    <!-- <VGap :height="40" /> -->
    <div class="h-0 md:h-10"></div>
    

    <!-- Banner -->
    <RMobilePromoBand class="animate__animated animate__fadeIn" />
    

    <VGap :height="50" />

    <!-- TOP COMPANIES -->
    <div class="flex justify-center" >
        <div class="w-11/12 md:w-9/12 h-full">
            <div class="py-20">
                <div class="flex justify-center">
                    <div class="w-full text-center">
                        <p class="text-lg md:text-4xl mb-4 font-semibold">Recruiters Hiring From Top Companies</p>
                        <!-- <p class="text-slate-400 text-md my-2">Explore the top companies and find your dream job</p> -->
                    </div>
                </div>
                <div>
                    <div class="flex flex-wrap justify-center">
                        <div v-for="(company, i) in db.homepage.topCompanies" :key="i" class="w-full md:w-3/12 my-5 px-5">
                            <RTopCompanyCard :name="company.company_name" :slug="company.company_slug" :city="company.company_city" :state="company.company_state" :logo="company.company_logo" :jobCount="company.job_count" :description="company.company_des" />
                        </div>
                    </div>
                </div>
            </div>
            <!-- <VContainer class="h-full mt-5 px-2 md:px-6">
                <Swiper
                class=" bg-white"
                :modules="[SwiperAutoplay, SwiperEffectCoverflow, SwiperEffectCreative, SwiperEffectCards]"
                :slides-per-view="viewPort == 'mobile' ? 1 : 3"
                :loop="false"
                :effect="'cube'"
                :creative-effect="{
                prev: {
                    shadow: false,
                    translate: ['-20%', 0, -1],
                },
                next: {
                    translate: ['100%', 0, 0],
                },
                }"
                >
                    <SwiperSlide v-for="(company, i) in db.homepage.topCompanies" :key="i" class="px-3 pb-8">
                    <RTopCompanyCard :name="company.company_name" :slug="company.company_slug" :logo="company.company_logo" :jobCount="company.job_count" :description="company.company_des" />
                </SwiperSlide>
                </Swiper>
                
            </VContainer> -->
        </div>

    </div>

    <!-- <div class="h-0"></div> -->

    <!-- RECENT JOBS -->
    <div class="flex justify-center animate__animated animate__fadeIn">
        <div class="w-11/12 md:w-9/12 h-full">
            <div class="p-4">
                <div class="flex justify-center">
                    <div class="w-full text-center">
                        <p class="text-lg md:text-3xl font-semibold">Exclusive Jobs for You!</p>
                        <!-- <p class="text-slate-400 text-sm">Explore the jobs or</p> -->
                    </div>
                </div>
            </div>
            <div>
                <div class="flex flex-wrap justify-start">
                    <div v-for="(job, i) in db.homepage.recentJobs" :key="i" class="w-full md:w-3/12 my-5 px-5">
                        <RQuickJobCard  :title="job.job_title" :company="job.company_name" :company_city="job.company_city" :minimum_salary="job.job_minimum_salary" :maximum_salary="job.job_maximum_salary" :company_state="job.company_state" :logo="job.company_logo" :slug="job.job_slug" :hiring="job.job_hiring_count" :location="job.company_address" />
                    </div>
                </div>
            </div>
            <!-- <div class="border-x-4 px-6 h-full">
                <Swiper
                class=" bg-white"
                :style="{'height' : '230px'}"
                :modules="[SwiperAutoplay, SwiperEffectCoverflow]"
                :slides-per-view="viewPort == 'mobile' ? 1 : 3"
                :loop="false"
                :effect="'cube'"
                :creative-effect="{
                prev: {
                    shadow: false,
                    translate: ['-20%', 0, -1],
                },
                next: {
                    shadow: false,
                    translate: ['100%', 0, 0],
                },
                }"
                >
                    <SwiperSlide v-for="(job, i) in db.homepage.recentJobs" :key="i" class="px-2 pb-0 md:pb-10">
                    <RQuickJobCard  :title="job.job_title" :company="job.company_name" :logo="job.company_logo" :slug="job.job_slug" :hiring="job.job_hiring_count" :location="job.company_address" />
                </SwiperSlide>
                </Swiper>
                
            </div> -->
        </div>
    </div>

    <div class="h-20"></div>

    <!-- BANNER 2 -->
    <VContainer :width="80" class="border bg-slate-900 rounded-lg h-full md:py-20 animate__animated animate__fadeIn">
        <VFlex  justifyContent="space-between" class="mx-auto w-10/12 flex-wrap md:flex-none">
            <div class="text-white mt-20 mb-10 md:my-0 flex justify-center w-full md:w-20">
                <VFlex class="gap-x-3">
                    <div>
                        <Icon class="text-6xl text-teal-200" name="tabler:briefcase-filled" />
                    </div>
                    <div>
                        <p class="text-3xl font-bold text-slate-400">5000+</p>
                        <p>Jobs</p>
                    </div>
                </VFlex>
            </div>
            <div class="text-white mb-20 md:my-0  flex justify-center w-full md:w-20">
                <VFlex class="gap-x-3">
                    <div>
                        <Icon class="text-6xl text-teal-200" name="gridicons:multiple-users" />
                    </div>
                    <div>
                        <p class="text-3xl font-bold text-slate-400">10000+</p>
                        <p>Employees</p>
                    </div>
                </VFlex>
            </div>
            <div class="text-white mb-20 md:my-0  flex justify-center w-full md:w-20">
                <VFlex class="gap-x-3">
                    <div>
                        <Icon class="text-6xl text-teal-200" name="material-symbols:apartment-rounded" />
                    </div>
                    <div>
                        <p class="text-3xl font-bold text-slate-400">1,000+</p>
                        <p>Companies</p>
                    </div>
                </VFlex>
            </div>
            <div class="text-white mb-20 md:my-0  flex justify-center w-full md:w-20">
                <VFlex class="gap-x-3">
                    <div>
                        <Icon class="text-6xl text-teal-200" name="mdi:office-building-marker-outline" />
                    </div>
                    <div>
                        <p class="text-3xl font-bold text-slate-400">200+</p>
                        <p> Consultancies</p>
                    </div>
                </VFlex>
            </div>
        </VFlex>
    </VContainer>

    <VGap :height="80" />
    
    <div class="w-full border flex justify-center bg-slate-900 h-full md:py-10 animate__animated animate__fadeIn">
        <div class="w-full md:w-10/12 px-5 md:px-40 flex flex-wrap md:flex-nowrap justify-center text-center md:text-left">
            <div class="w-6/12 md:w-3/12 text-white my-3 md:my-0">
                <h3 class="my-3 font-bold">Jobs by Function</h3>
                <div>
                    <ul class="text-sm leading-6 text-slate-400">
                        <li>
                            <a target="_blank" href="/industries/industry-it-contractor">IT Software Jobs</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=bpo jobs">BPO Jobs</a>
                        </li>
                        <li>
                            <a target="_blank" href="/industries/industry-sales-marketing">Sales Jobs</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=fresher jobs">Fresher Jobs</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=medical jobs">Medical Jobs</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=bank jobs">Bank Jobs</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs">All Functional Areas</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="w-6/12 md:w-3/12 text-white my-3 md:my-0">
                <h3 class="my-3 font-bold">IT Job Skills</h3>
                <div>
                    <ul class="text-sm leading-6 text-slate-400">
                        <li>
                            <a target="_blank" href="/jobs?j=java jobs">Java Jobs</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=sap jobs">SAP Jobs</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=.net jobs">.NET Jobs</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=oracle jobs">Oracle Jobs</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=sql">SQL Server Jobs</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=qa jobs">QA Jobs</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=html jobs">HTML Jobs</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=opengl es jobs">OpenGL ES Jobs</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=javafx jobs">JavaFX Jobs</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=flash lite jobs">Flash Lite Jobs</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=wml jobs">WML Jobs</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=blackberry jobs">Blackberry Jobs</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=uiq jobs">UIQ Jobs</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs">All IT Skills Jobs</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="w-6/12 md:w-3/12 text-white my-3 md:my-0">
                <h3 class="my-3 font-bold">Non-IT Job Skills</h3>
                <div>
                    <ul class="text-sm leading-6 text-slate-400">
                        <li>
                            <a target="_blank" href="/jobs?j=hr jobs">Human Resource Jobs</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=trade executive jobs">Trade Executive Jobs</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=sales jobs">Sales Jobs</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=marketing jobs">Marketing Jobs</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=account executive jobs">Accounts Executive Jobs</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=management jobs">Management Jobs</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=water treatment jobs">Water Treatment Jobs</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=graphic designer jobs">Graphic Designer Jobs</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=weaving jobs">Weaving Jobs</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=accountant jobs">Taxation Jobs</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="w-6/12 md:w-3/12 text-white my-3 md:my-0">
                <h3 class="my-3 font-bold">Jobs by Location</h3>
                <div>
                    <ul class="text-sm leading-6 text-slate-400">
                        <li>
                            <a target="_blank" href="/jobs?j=jobs in delhi">Jobs in New Delhi</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=jobs in kolkata">Jobs in Kolkata</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=jobs in ahmedabad">Jobs in Ahmedabad</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=jobs in noida">Jobs in Noida</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=jobs in gurgaon">Jobs in Gurgaon</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=jobs in mumbai">Jobs in Mumbai</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=jobs in chennai">Jobs in Chennai</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=jobs in hyderabad">Jobs in Hyderabad</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=jobs in banglore">Jobs in Banglore</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=jobs in pune">Jobs in Pune</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=jobs in chandigarh">Jobs in Chandigarh</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs">All Locations</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="w-full md:w-3/12 text-white my-3 md:my-0">
                <h3 class="my-3 font-bold">Jobs by Role</h3>
                <div>
                    <ul class="text-sm leading-6 text-slate-400">
                        <li>
                            <a target="_blank" href="/jobs?j=accountant jobs">Accountant Jobs</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=account executive jobs">Accountant Executive Jobs</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=manager jobs">Assistant Manager Jobs</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=manager jobs">Branch Manager Jobs</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=cmo jobs">Chief Marketing Officer Jobs</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=ceo jobs">Chief Executive Officer Jobs</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs?j=cto jobs">Chief Technology Officer Jobs</a>
                        </li>
                        <li>
                            <a target="_blank" href="/jobs">All Roles</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <VModal @close="db.closeInstantJobForm" v-if="db.showInstantJobForm" v-auto-animate>
        <div class="w-full">
            <p class="text-3xl font-bold">Get Instant Job!</p>
            <p class="text-slate-400 text-sm">Get your dream job instantly from <span class="text-red-500">Remark Support Team</span></p>
            
            <div class="my-3">
                <p>Name <span class="text-red-500">*</span></p>
                <div class="my-1"></div>
                <input v-model="instantJobForm.name.value" class="outline-none border px-5 w-full py-2 rounded-lg" placeholder="Your Name" />
                <small class="text-sm text-red-500" v-if="instantJobForm.name.isError"> {{ instantJobForm.name.errorMessage }} </small>
            </div>
            <div class="my-3">
                <p>Mobile Number <span class="text-red-500">*</span></p>
                <div class="my-1"></div>
                <input v-model="instantJobForm.mobileNumber.value" class="outline-none border px-5 w-full py-2 rounded-lg" type="tel" placeholder="+91" />
                <small class="text-sm text-red-500" v-if="instantJobForm.mobileNumber.isError"> {{ instantJobForm.mobileNumber.errorMessage }} </small>

            </div>
            <div class="my-3 text-center">
                <button v-if="!instantJobForm.isAdding" class="bg-teal-800 px-4 py-2 text-white" @click="submitInstantJobForm">Get a call</button>
                <icon v-else name="svg-spinners:ring-resize" />
            </div>
        </div>
    </VModal>
    
</template>


<script lang="js"setup>


    const db = useMyDbStore();
    const swiperJs = await useSwiper();

    console.log(swiperJs);

    console.log('homepage', db.homepage.isHomepageLoaded);

    if(!db.homepage.isHomepageLoaded) {
        await db.loadHomepage();
    }

    

</script>

<script lang="js">
export default {
    data() {
        return {
            searchInput: '',
            viewPort: '',
            instantJobForm: {
                isAdding: false,
                name: {
                    value: '',
                    isError: false,
                    errorMessage: ''
                },
                mobileNumber: {
                    value: '',
                    isError: false,
                    errorMessage: ''
                }
            },
            isLikedPoster: false,
        }
    },
    methods: {
        init() {

            const viewp = useViewport();
            this.viewPort = viewp.isLessThan('tablet') ? 'mobile' : 'tablet';



            if(this.homeDb.isShowForm) {
                
                this.homeDb.startInstantJobForm();
                                
            }else{
                this.homeDb.closeInstantJobForm();

            }                                                                                       

        },
        searchJob(ev) {
            if(ev.keyCode == 13) {

                if(this.searchInput != '') {

                    location.href = 'jobs?j=' + this.searchInput;

                }

            };
        },
        async submitInstantJobForm() {

            this.instantJobForm.isAdding = true;
            var utm_source = "";
            var utm_medium = "";
            var utm_campaign = "";
            var utm_content = "";
            
            const route = useRoute();

            
            if(route.query.utm_source) {
                utm_source = route.query.utm_source;
            }

            if(route.query.utm_medium) {
                utm_medium = route.query.utm_medium;
            }
            
            // this.instantJobForm.isAdding = false;
            // return false;

            this.resetInstantJobForm();

            if(this.instantJobForm.name.value.length == 0) {
                this.instantJobForm.name.isError = true;
                this.instantJobForm.name.errorMessage = 'Name is required';
            this.instantJobForm.isAdding = false;


                return false;
            } 

            if(this.instantJobForm.mobileNumber.value.length != 10) {
                this.instantJobForm.mobileNumber.isError = true;
                this.instantJobForm.mobileNumber.errorMessage = 'Please enter a valid mobile number';
            this.instantJobForm.isAdding = false;


                return false;
            }

            const { data, pending, error, refresh } = await useFetch('/api/job/instant-job',{
                method: 'post',
                body: {
                    name: this.instantJobForm.name.value,
                    number: this.instantJobForm.mobileNumber.value,
                    source: utm_medium != '' ? utm_medium : 'Website',
                    description: utm_source != '' ? "source: " + utm_source : ''
                }
            });

            if(data.value.status) {
                this.instantJobForm.name.value = "";
                this.instantJobForm.mobileNumber.value = "";

            }

            this.instantJobForm.isAdding = false;

            this.homeDb.closeInstantJobForm();

        },

        resetInstantJobForm() {

            this.instantJobForm.name.errorMessage = '';
            this.instantJobForm.name.isError = false;

            this.instantJobForm.mobileNumber.errorMessage = '';
            this.instantJobForm.mobileNumber.isError = false;

        }

    },
    computed: {
        homeDb() {
            const db = useMyDbStore();
            return db;
        }
    },
    mounted() {
        this.init();
    }
}
</script>

<template>

    <VGap :height="50" />

    <!-- HERO SECTION -->
    <div  :style="{ 'height': '350px' }" padding="50" class="bg-teal-0 w-full md:w-10/12 px-10 md:px-40 md:mx-28">
        <VFlex :justifyContent="'space-between'" class="flex-wrap md:flex-none" >
            <div class="flex justify-center w-full md:w-4/12 ">
                <VContainer class="w-full md:px-10 md:py-0 md:my-0 ">
                    <p class="text-4xl md:text-7xl font-bold tracking-wide">Find a Perfect Job</p>
                </VContainer>
            </div>
            <div class="w-full md:w-8/12">
                <!-- <VGap :height="100" /> -->
                <div class="h-10 md:h-40"></div>
                <VFlex  class="bg-remark-light px-8 py-2 shadow-none border border-teal-300 rounded-full hover:shadow-xl hover:shadow-red-100 duration-200 hidden md:flex">
                    <input v-model="searchInput" @keyup="searchJob" style="width:100%" placeholder="Development, Back Office, Sales" class="py-3 bg-transparent outline-none border-none" />
                    <VButton class="md:hidden" :to=" searchInput == '' ? 'javascript:void(0)' : 'jobs?j=' + searchInput" fullBgColor="bg-red-600" :isLink="true" paddingY="3" rounded="full">
                        <VFlex class="gap-x-2">
                            <Icon name="material-symbols:search" /> <p class="text-white">Search</p>
                        </VFlex>
                    </VButton>
                </VFlex>
                <div class="block md:hidden text-center">
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
                <VContainer class="text-center">
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
    <div class="h-8 md:h-24">

    </div>


    <!-- CATEGORIES SECTION -->
    
        <VContainer :width="80" :style="{'height' : '350px'}" class="">
            <div class="p-4">
                <div class="flex justify-between">
                    <div class="w-8/12">
                        <p class="text-2xl md:text-3xl font-semibold">Industries</p>
                        <p class="text-slate-400 text-sm">Slide to explore more industries</p>
                    </div>
                    <div class="w-4/12 text-end">
                        <span><Icon name="memory:chevron-left" /></span>
                        <span><Icon name="memory:chevron-right" /></span>

                    </div>
                </div>
            </div>
            <!-- <VContainer :style="{'height' : '200px'}" class="border-x-4 px-6">
                <VFlex class="gap-x-5" >
                    <RCategory v-for="(category, i) in categories" :key="i" :title="category.title" :icon="category.icon" :count="category.count" />
                </VFlex>
            </VContainer> -->
    
            <VContainer :width="100" :style="{'height' : '200px'}" class="border-x-4 px-6">
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
                        <RCategory class="" :title="category.industry.industry_title" :icon="category.industry.industry_svg" :count="category.count" />
                    </SwiperSlide>
                </Swiper>
                </client-only>
            </VContainer>
    
    
        </VContainer>
    

    <!-- <VGap :height="60" /> -->

    <!-- <VContainer :width="80" :style="{'height': '150px'}" class="bg-gray-800 rounded-xl">
        <VFlex>
            <VContainer :width="80" class="text-center" style="margin:-60px">
                <VFlex justifyContent="center">
                    <img width="250" class="" src="https://pngbong.com/wp-content/uploads/2023/04/Lord-Ram-PNG.png" />
                </VFlex>
            </VContainer>
            <VContainer :width="80" class="text-white text-center">
                <VGap :height="5"  />
                
                <p class="text-5xl font-bold">Happy Ram Navami</p>
                <VGap :height="15"  />
                <small class="text-md">I hope Lord Rama brings you lots of happiness, peace, and good luck! 🙏</small>
            </VContainer>
            <VContainer :width="80" class="text-white text-center">
                <VButton class="rounded-full">
                    <VFlex class="gap-x-2"><Icon name="icon-park-outline:like" /> <p>Like</p></VFlex>
                </VButton>
            </VContainer>
        </VFlex>
    </VContainer> -->

    <VGap :height="20" />
    

    <!-- Banner -->
    <RMobilePromoBand />
    

    <VGap :height="50" />

    <!-- TOP COMPANIES -->
    <VContainer :width="80" class="h-full" >
        <div class="p-4">
            <div class="flex justify-between">
                <div class="w-8/12">
                    <p class="text-2xl md:text-3xl font-semibold">Top Companies</p>
                    <p class="text-slate-400 text-sm">Slide to explore more companies</p>
                </div>
                <div class="w-4/12 text-end">
                    <span><Icon name="memory:chevron-left" /></span>
                    <span><Icon name="memory:chevron-right" /></span>

                </div>
            </div>
        </div>
        <VContainer class="border-x-4 h-full px-2 md:px-6">
            <Swiper
            :style="{'height' : '320px'}"
            class=" bg-white"
            :modules="[SwiperAutoplay, SwiperEffectCoverflow]"
            :slides-per-view="viewPort == 'mobile' ? 1 : 3"
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
                <SwiperSlide v-for="(company, i) in db.homepage.topCompanies" :key="i" class="px-3">
                <RTopCompanyCard  :name="company.company_name" :logo="company.company_logo" :jobCount="company.job_count" :description="company.company_des" />
            </SwiperSlide>
            </Swiper>
            
        </VContainer>

    </VContainer>

    <div class="h-16"></div>

    <!-- RECENT JOBS -->
    <VContainer :width="80"  class="">
        <div class="p-4">
            <div class="flex justify-between">
                <div class="w-8/12">
                    <p class="text-2xl md:text-3xl font-semibold">Recent Jobs</p>
                    <p class="text-slate-400 text-sm">Slide to explore more jobs</p>
                </div>
                <div class="w-4/12 text-end">
                    <span><Icon name="memory:chevron-left" /></span>
                    <span><Icon name="memory:chevron-right" /></span>

                </div>
            </div>
        </div>

        <div class="border-x-4 px-6 h-full">
            <Swiper
            class=" bg-white"
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
            
        </div>
    </VContainer>

    <div class="h-20"></div>

    <!-- BANNER 2 -->
    <VContainer :width="80" class="border bg-slate-900 rounded-lg h-full md:py-20">
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

    <VModal @close="db.closeInstantJobForm" v-if="db.showInstantJobForm">
        <div class="w-full">
            <p class="text-3xl font-bold">Get Instant Job!</p>
            <p class="text-slate-400 text-sm">Get your dream job instantly from <span class="text-red-500">Remark Support Team</span></p>
            
            <div class="my-3">
                <p>Name <span class="text-red-500">*</span></p>
                <div class="my-1"></div>
                <input class="outline-none border px-5 w-full py-2 rounded-lg" placeholder="Your Name" />
            </div>
            <div class="my-3">
                <p>Mobile Number <span class="text-red-500">*</span></p>
                <div class="my-1"></div>
                <input class="outline-none border px-5 w-full py-2 rounded-lg" type="tel" placeholder="+91" />
            </div>
            <div class="my-3 text-center">
                <button class="bg-teal-800 px-4 py-2 text-white">Get a call</button>
            </div>
        </div>
    </VModal>
    
</template>


<script lang="js"setup>


    const db = useMyDbStore();

    console.log('homepage', db.homepage.isHomepageLoaded);

    if(!db.homepage.isHomepageLoaded) {
        await db.loadHomepage();
    }

    if(db.showInstantJobForm) {
        db.showInstantJobForm = false;

        setTimeout(() => {
            db.showInstantJobForm = true;
        }, 2000);

    }

</script>

<script lang="js">
export default {
    data() {
        return {
            searchInput: '',
            viewPort: ''
        }
    },
    methods: {
        init() {
            const viewp = useViewport();
            this.viewPort = viewp.isLessThan('tablet') ? 'mobile' : 'tablet';
        },
        searchJob(ev) {
            if(ev.keyCode == 13) {

                if(this.searchInput != '') {

                    location.href = 'jobs?j=' + this.searchInput;

                }

            };
        }

    },
    created() {
        this.init();
    }
}
</script>
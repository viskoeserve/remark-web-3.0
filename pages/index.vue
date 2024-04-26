
<template>

    <VGap :height="50" />

    <!-- HERO SECTION -->
    <LazyVContainer  :width="80" :style="{ 'height': '350px' }" padding="50" class="bg-teal-0">
        <VFlex :justifyContent="'space-between'" >
            <div :style="{'width': '40%'}" class="flex justify-center">
                <VContainer :width="80">
                    <p class="text-7xl font-bold tracking-wide">Find a Perfect Job</p>
                </VContainer>
            </div>
            <div :style="{'width': '60%'}">
                <VGap :height="100" />
                <VFlex :width="80"  class="bg-remark-light px-8 py-2 shadow-none border border-teal-300  rounded-full hover:shadow-xl hover:shadow-red-100 duration-200">
                    
                    <input v-model="searchInput" @keyup="searchJob" style="width:100%" placeholder="Development, Back Office, Sales" class="py-3 bg-transparent outline-none border-none" />
                    <VButton :to=" searchInput == '' ? 'javascript:void(0)' : 'jobs?j=' + searchInput" fullBgColor="bg-red-600" :isLink="true" paddingY="3" rounded="full">
                        <VFlex class="gap-x-2">
                            <Icon name="material-symbols:search" /> <p class="text-white">Search</p>
                        </VFlex>
                    </VButton>
                </VFlex>
                <VGap :height="20" />
                <VContainer class="text-center">
                    <div class="font-bold text-slate-800">
                        Remark Job & Recruiter App
                    </div>
                    <div class="pb-2 text-slate-400">
                        Make your search easy
                    </div>
                    <VFlex class="gap-x-3" justifyContent="center">
                        <RAppStoreButton store="playstore" />
                        <RAppStoreButton store="appstore" />
                    </VFlex>
                </VContainer>
            </div>
        </VFlex>
    </LazyVContainer>

    <!-- CATEGORIES SECTION -->
    
        <VContainer :width="80" :style="{'height' : '350px'}" class="">
            <div class="p-4">
                <p class="text-3xl font-semibold">Industries</p>
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
                :slides-per-view="6"
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
                    <SwiperSlide class="" v-for="(category, i) in db.homepage.categories" :key="i">
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
    <VContainer :width="80" :style="{'height' : '300px'}" >
        <div class="p-4">
            <p class="text-3xl font-semibold">Top Companies</p>
        </div>
        <VContainer :style="{'height' : '280px'}" class="border-x-4 px-6">
            <Swiper
            :style="{'height' : '320px'}"
            class=" bg-white"
            :modules="[SwiperAutoplay, SwiperEffectCoverflow]"
            :slides-per-view="3"
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
                <SwiperSlide v-for="(company, i) in db.homepage.topCompanies" :key="i">
                <RTopCompanyCard  :name="company.company_name" :logo="company.company_logo" :jobCount="company.job_count" :description="company.company_des" />
            </SwiperSlide>
            </Swiper>
            
        </VContainer>

    </VContainer>

    <VGap :height="80" />

    <!-- RECENT JOBS -->
    <VContainer :width="80" :style="{'height' : '300px'}" class="">
        <div class="p-4">
            <p class="text-3xl font-semibold">Recent Jobs</p>
        </div>

        <VContainer :style="{'height' : '180px'}" class="border-x-4 px-6">
            <Swiper
            :style="{'height' : '250px'}"
            class=" bg-white"
            :modules="[SwiperAutoplay, SwiperEffectCoverflow]"
            :slides-per-view="3"
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
                <SwiperSlide v-for="(job, i) in db.homepage.recentJobs" :key="i">
                <RQuickJobCard  :title="job.job_title" :company="job.company_name" :logo="job.company_logo" :slug="job.job_slug" :hiring="job.job_hiring_count" :location="job.company_address" />
            </SwiperSlide>
            </Swiper>
            
        </VContainer>




    </VContainer>

    <VGap :height="30" />

    <!-- BANNER 2 -->
    <VContainer :width="80" :style="{'height': '200px'}" class="border bg-slate-900 rounded-lg">
        <VFlex style="height:200px;width:80%" justifyContent="space-between" class="mx-auto">
            <div class="text-white">
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
            <div class="text-white">
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
            <div class="text-white">
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
            <div class="text-white">
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

    
</template>


<script lang="js"setup>


    const db = useMyDbStore();

    console.log('homepage', db.homepage.isHomepageLoaded);

    if(!db.homepage.isHomepageLoaded) {
        await db.loadHomepage();
    }

</script>

<script lang="js">
export default {
    data() {
        return {
            searchInput: ''
        }
    },
    methods: {

        searchJob(ev) {
            if(ev.keyCode == 13) {

                if(this.searchInput != '') {

                    location.href = 'jobs?j=' + this.searchInput;

                }

            };
        }

    }
}
</script>
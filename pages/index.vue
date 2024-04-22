
<template>
    

    <VGap :height="50" />

    <!-- HERO SECTION -->
    <LazyVContainer :width="80" :style="{ 'height': '350px' }" padding="50" class="bg-teal-0">
        <VFlex :justifyContent="'space-between'" >
            <div :style="{'width': '25%'}" class="flex justify-center">
                <VContainer :width="80">
                    <p class="text-7xl font-bold tracking-wide">Find a Perfect Job</p>
                </VContainer>
            </div>
            <div :style="{'width': '75%'}">
                <VGap :height="100" />
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
                <VGap :height="10" />
                <div class="py-2 text-slate-400">
                    Recent Searches
                </div>
                <VFlex class="gap-x-3">
                    <VChip paddingX="5" paddingY="3" :isDismissible="true">
                        <Icon class="text-sm text-teal-800" name="carbon:recently-viewed" /> <VGap width="5" /> <small>developer</small>
                    </VChip>
                    <VChip  paddingY="3">
                        <Icon class="text-sm text-teal-800" name="carbon:recently-viewed" /> <VGap width="5" /> <small>telecaller</small>
                    </VChip>
                </VFlex>
            </div>
        </VFlex>
    </LazyVContainer>

    <!-- CATEGORIES SECTION -->
    
    <VContainer :width="80" :style="{'height' : '350px'}" class="">
        <div class="p-4">
            <p class="text-3xl font-semibold">Categories</p>
        </div>
        <!-- <VContainer :style="{'height' : '200px'}" class="border-x-4 px-6">
            <VFlex class="gap-x-5" >
                <RCategory v-for="(category, i) in categories" :key="i" :title="category.title" :icon="category.icon" :count="category.count" />
            </VFlex>
        </VContainer> -->

        <VContainer :width="100" :style="{'height' : '200px'}" class="border-x-4 px-6">
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
                <SwiperSlide class="" v-for="(category, i) in categories" :key="i">
                    <RCategory class="" :title="category.title" :icon="category.icon" :count="category.count" />
                </SwiperSlide>
            </Swiper>
        </VContainer>


    </VContainer>

    <VGap :height="60" />

    <VContainer :width="80" :style="{'height': '150px'}" class="bg-gray-800 rounded-xl">
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
    </VContainer>

    <VGap :height="40" />
    

    <!-- Banner -->
    <VContainer :width="80" class="bg-gray-900" :style="{'height': '300px', 'border-radius': '10px'}">
        <VFlex :style="{'height': '300px','width': '85%'}" justifyContent="space-between">

            <VFlex justifyContent="center">
                <div class="px-20 text-white" style="width:75%">
                    <div class="bg-teal-200 rounded-full" style="width:100%;height:10px">

                    </div>
                    <VGap :height="20" />
                    <p class="text-4xl">
                        AI Inbuilt Job Portal
                    </p>
                    <VGap :height="15" />
                    <p class="text-xl">
                        Transforming Job Search and Hiring with Intelligent Automation and Personalized Matching
                    </p>
                    <VGap :height="15" />
                    <VFlex class="gap-x-3">
                        <VButton :isLink="true" to="https://play.google.com/store/apps/details?id=com.remark.viskohr" paddingY="3">
                            <VFlex class="gap-x-3">
                                <Icon class="text-xl" name="mage:playstore" /><p>Playstore</p>
                            </VFlex>
                        </VButton>
                        <VButton :isLink="true" paddingY="3">
                            <VFlex class="gap-x-3">
                                <Icon class="text-lg" name="simple-icons:appstore" /><p>App Store</p>
                            </VFlex>
                        </VButton>
                    </VFlex>
                </div>
            </VFlex>
            <div>
                <VGap :height="50" />
                <img width="350" src="/mobile/mobile-preview.png" />
            </div>

        </VFlex>
    </VContainer>
    

    <VGap :height="50" />

    <!-- TOP COMPANIES -->
    <VContainer :width="80" :style="{'height' : '300px'}" >
        <div class="p-4">
            <p class="text-3xl font-semibold">Top Companies</p>
        </div>
        <VContainer :style="{'height' : '250px'}" class="border-x-4 px-6">
            <Swiper
            :style="{'height' : '300px'}"
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
                <SwiperSlide v-for="(company, i) in topCompanies" :key="i">
                <RTopCompanyCard  :name="company.name" :logo="company.logo" :jobCount="company.jobCount" />
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
                <SwiperSlide v-for="(job, i) in recentJobs" :key="i">
                <RQuickJobCard  :title="job.title" :company="job.company" :hiring="job.hiring" :location="job.location" />
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
                        <p class="text-3xl font-bold text-slate-400">80,000+</p>
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
                        <p class="text-3xl font-bold text-slate-400">50,000+</p>
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
                        <p class="text-3xl font-bold text-slate-400">3,000+</p>
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
                        <p class="text-3xl font-bold text-slate-400">500+</p>
                        <p> Consultancies</p>
                    </div>
                </VFlex>
            </div>
        </VFlex>
    </VContainer>

    <VGap :height="80" />


    

    
</template>

<script>
export default {
    data() {
        return {
            categories: [
                {
                    title: "Hospital",
                    icon: "ri:hospital-fill",
                    count: "10"
                },
                {
                    title: "Accounting",
                    icon: "streamline:money-cash-coins-stack-accounting-billing-payment-stack-cash-coins-currency-money-finance",
                    count: "13"
                },
                {
                    title: "IT",
                    icon: "fluent:developer-board-24-regular",
                    count: "36"
                },
                {
                    title: "Sales & Marketing",
                    icon: "nimbus:marketing",
                    count: "25"
                },
                {
                    title: "Hospital",
                    icon: "ri:hospital-fill",
                    count: "10"
                },
                {
                    title: "Accounting",
                    icon: "streamline:money-cash-coins-stack-accounting-billing-payment-stack-cash-coins-currency-money-finance",
                    count: "13"
                },
                {
                    title: "IT",
                    icon: "fluent:developer-board-24-regular",
                    count: "36"
                },
                {
                    title: "Sales & Marketing",
                    icon: "nimbus:marketing",
                    count: "25"
                }
            ],
            topCompanies: [
                {
                    name: "Sitent Web & Graphics Design",
                    logo: "https://apimanager.remarkhr.com//assets/company_logo/s-logo.png",
                    jobCount: "10"
                },
                {
                    name: "Visko E-Serve Private Limited",
                    logo: "/companies/visko-e-serve.png",
                    jobCount: "14"
                },
                {
                    name: "Visko Real Estate Private Limited",
                    logo: "/companies/visko-real-estate.png",
                    jobCount: "10"
                },
                {
                    name: "Visko HR Private Limited",
                    logo: "/companies/visko-real-estate.png",
                    jobCount: "8"
                }
            ],
            recentJobs: [
            {
                title: "Sales & Executive",
                company: "Sitent Web & Graphics Design",
                hiring: "5",
                location: "Indore, Madhya Pradesh"
            },
            {
                title: "Telecalling Supervisor Operator",
                company: "Sitent Web & Graphics Design",
                hiring: "6",
                location: "Indore, Madhya Pradesh"
            },
            {
                title: "Business Development Manager",
                company: "Sitent Web & Graphics Design",
                hiring: "4",
                location: "Indore, Madhya Pradesh"
            },
            {
                title: "Associate Executive",
                company: "Sitent Web & Graphics Design",
                hiring: "8",
                location: "Indore, Madhya Pradesh"
            }
        ],
        }
    }
}
</script>
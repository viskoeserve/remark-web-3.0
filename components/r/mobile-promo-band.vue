<template>
    <VContainer :width="100" class="bg-gray-900 h-3/12 pt-5">
        <div class="flex justify-center">
            <VFlex class="w-10/12 flex-wrap md:flex-none" justifyContent="space-between">

                <VFlex justifyContent="center" class="">
                    <div class="px-0 md:px-10 text-white w-10/12">
                        <div class="bg-teal-200 rounded-full w-full" style="height:10px">
    
                        </div>
                        <VGap :height="20" />
                        <p class="text-3xl md:text-4xl">
                            AI Inbuilt Job Portal
                        </p>
                        <VGap :height="15" />
                        <p class="text-md md:text-xl">
                            Transforming Job Search and Hiring with Intelligent Automation and Personalized Matching
                        </p>
                        <VGap :height="15" />
                        <VFlex class="gap-x-3 flex-wrap md:flex-none">
                            <RAppStoreButton class="my-2 md:my-0" store="playstore" />
                            <RAppStoreButton store="appstore" />
                        </VFlex>
                    </div>
                </VFlex>
                <div class="md:block">
                    <VGap :height="50" />
                    <img width="380" src="/mobile/mobile-preview.png" />
                </div>
    
            </VFlex>
        </div>
    </VContainer>
</template>

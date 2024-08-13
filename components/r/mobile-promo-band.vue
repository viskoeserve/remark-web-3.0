<template>
    <VContainer :width="100" class="bg-gray-900 h-3/12 pt-10">
        <div class="flex justify-center">
            <VFlex class="w-full md:w-8/12 flex-wrap md:flex-none" justifyContent="space-between">

                <VFlex justifyContent="center" class="">
                    <div class="px-0 md:px-10 text-white w-10/12 pb-10">
                        <div class="bg-teal-200 rounded-full w-full" style="height:10px">
                        </div>
                        <VGap :height="20" />
                        <p class="text-3xl md:text-4xl">
                            Remark Jobs Job Portal - Powered by AI
                        </p>
                        <VGap :height="15" />
                        <p class="text-sm md:text-lg text-slate-400 w-12/12">
                            The Remark app will make the recruitment process easy and seamless. Whether you are a candidate looking for a job or an employer searching for candidates for jobs at your company, Remark Jobs, the best job portal in India will make your hiring journey easy and fast with the help of native AI.

                        </p>
                        <VGap :height="20" />
                        <VFlex class="gap-x-3 flex-wrap md:flex-none">
                            <RAppStoreButton class="my-2 md:my-0" store="playstore" />
                            <RAppStoreButton store="appstore" />
                        </VFlex>
                    </div>
                    <div class="hidden md:block">
                        <VGap :height="50" />
                        <img width="500" src="/mobile/mobile-preview.png" />
                    </div>
                </VFlex>
            </VFlex>
        </div>
    </VContainer>
</template>

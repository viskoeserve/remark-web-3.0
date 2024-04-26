<template>
    <VContainer :width="100" class="bg-gray-900" :style="{'height': '300px'}">
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
                <img width="380" src="/mobile/mobile-preview.png" />
            </div>

        </VFlex>
    </VContainer>
</template>
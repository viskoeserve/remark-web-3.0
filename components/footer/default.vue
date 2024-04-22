<template>
    <VContainer :width="80" :style="{'height': '400px'}" class="bg-remark-light"   >
        <VGap :height="50" />
        <VFlex justifyContent="space-between">
            <!-- LOGO & DETAILS -->
            <VContainer :width="20"  class="">
                <LogoDefaultLogo :width="120" />
                <p class="text-slate-500">
                    Remark is a platform that brings together Jobseekers and Employers.
                </p>
                <VContainer class="my-3">
                    <p>Follow Us:</p>
                    <VFlex class="gap-x-3">
                        <div>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <Icon class="text-2xl text-teal-800" name="mdi:facebook" />
                            </a>
                        </div>
                        <div>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <Icon class="text-2xl text-teal-800" name="mdi:instagram" />
                            </a>
                            
                        </div>
                        <div>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <Icon class="text-2xl text-teal-800" name="mdi:linkedin" />
                            </a>
                        </div>
                        <div>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <Icon class="text-2xl text-teal-800" name="mdi:twitter" />
                            </a>
                        </div>
                    </VFlex>
                </VContainer>
            </VContainer>
            <VContainer :width="40" >
                <VFlex alignItem="start" justifyContent="space-between" >
                    <VContainer>
                        <ul>
                            <li class="my-4">
                                <p class="font-bold">Quick Menus</p>
                            </li>
                            <li class="my-2 font-semibold text-teal-900">
                                <NuxtLink to="/">
                                    How Remark Works?
                                </NuxtLink>
                            </li>
                            <li class="my-2 font-semibold text-teal-900">
                                <NuxtLink to="/">
                                    About Us
                                </NuxtLink>
                            </li>
                            <li class="my-2 font-semibold text-teal-900">
                                <NuxtLink to="/">
                                    Career in Remark
                                </NuxtLink>
                            </li>
                            <li class="my-2 font-semibold text-teal-900">
                                <NuxtLink to="/">
                                    Remark App
                                </NuxtLink>
                            </li>

                        </ul>
                    </VContainer>
                    <VContainer>
                        <ul>
                            <li class="my-4">
                                <p class="font-bold">Support</p>
                            </li>
                            <li class="my-2 font-semibold text-teal-900">
                                <NuxtLink to="/">
                                    Technical Support
                                </NuxtLink>
                            </li>
                            <li class="my-2 font-semibold text-teal-900">
                                <NuxtLink to="/">
                                    Report Fraud
                                </NuxtLink>
                            </li>
                        </ul>
                    </VContainer>
                    <VContainer>
                        <ul>
                            <li class="my-4">
                                <p class="font-bold">Privacy & Policy</p>
                            </li>
                            <li class="my-2 font-semibold text-teal-900">
                                <NuxtLink to="/">
                                    Terms of Conditions
                                </NuxtLink>
                            </li>
                            <li class="my-2 font-semibold text-teal-900">
                                <NuxtLink to="/">
                                    Privacy Policy
                                </NuxtLink>
                            </li>
                            <li class="my-2 font-semibold text-teal-900">
                                <NuxtLink to="/">
                                    Safety & Security Policy
                                </NuxtLink>
                            </li>
                            <li class="my-2 font-semibold text-teal-900">
                                <NuxtLink to="/">
                                    Consultancy Policy
                                </NuxtLink>
                            </li>

                        </ul>
                    </VContainer>
                </VFlex>
            </VContainer>
            <VContainer :width="20" class="text-center border border-teal-800 p-4 rounded-lg">
                <p class="font-bold text-2xl"> <Icon name="ph:eyes-fill" /> Looking for job?</p>
                <VGap :height="5" />
                <p class="text-slate-500 text-sm">Connect with the team and get the job.</p>
                <VGap :height="5" />
                <p class="text-slate-500 text-sm font-bold">Enter your mobile number</p>
                <VGap :height="5" />
                <VContainer :width="95" class="border">
                    <VInput type="text" class=" py-2"  max="10" placeholder="+91" />
                </VContainer>
                <VGap :height="10" />
                <VContainer class="text-center">
                    <VButton>Request Call</VButton>
                </VContainer>
            </VContainer>
        </VFlex>
        <VGap :height="40" />
        <VContainer class="text-center text-sm text-slate-400">
            © 2024 Remark Developed by <a href="/">Visko HR Private Limited</a>
        </VContainer>
    </VContainer>
</template>
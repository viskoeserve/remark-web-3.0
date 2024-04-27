<template>
    <div class="bg-remark-light w-full flex justify-center h-full"   >
        <div>
            <VGap :height="50" />
        <VFlex justifyContent="space-between" class="flex-wrap md:flex-none gap-x-5 px-10 md:px-0">
            <!-- LOGO & DETAILS -->
            <div  class="w-full md:w-2/12 text-center md:text-left">
                <div class="justify-center flex md:justify-start">
                    <LogoDefaultLogo :width="120" />
                </div>
                <p class="text-slate-500">
                    Remark is a platform that brings together Jobseekers and Employers.
                </p>
                <VContainer class="my-3">
                    <p>Follow Us:</p>
                    <div class="flex gap-x-3 justify-center md:justify-start">
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
                    </div>
                </VContainer>
            </div>
            <div  class="w-full md:w-5/12">
                <div class="flex justify-center md:justify-between items-start flex-wrap md:flex-none text-center md:text-left gap-x-5" >
                    <div class="w-50 md:w-4/12 my-6 md:my-0">
                        <ul>
                            <li class="my-4">
                                <p class="font-bold">Quick Menus</p>
                            </li>
                            <li class="my-2 font-semibold text-teal-900">
                                <a href="/how-it-works">
                                    How Remark Works?
                                </a>
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
                                <a href="https://play.google.com/store/apps/details?id=com.remark.viskohr" target="_blank">
                                    Download Remark App
                                </a>
                            </li>

                        </ul>
                    </div>
                    <div class="w-50 md:w-3/12 my-6 md:my-0">
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
                    </div>
                    <div class="w-50 md:w-4/12 mb-6 md:my-0">
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
                    </div>
                </div>
            </div>
            <div class="w-full md:w-4/12 text-center border border-teal-800 p-4 rounded-lg">
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
            </div>
        </VFlex>
        <VGap :height="40" />
        <VContainer class="text-center text-sm text-slate-400">
            © 2024 Remark Developed by <a href="/">Visko HR Private Limited</a>
        </VContainer>
        </div>
    </div>
</template>
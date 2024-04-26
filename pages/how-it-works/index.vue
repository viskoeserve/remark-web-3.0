<template>
    <VGap :height="5" />
    <div class="flex justify-center">
        <div class="w-10/12 md:w-8/12 pt-5" >
            <p class="text-4xl font-bold text-center text-teal-800">How Remark works for you</p>
    
            <VGap :height="50" />
    
            <div class="w-full flex justify-center text-center">
                <div class="w-full md:w-8/12">
                    <p class="text-2xl font-semibold">We connect employers with professionals</p>
                <p>Learn how to make your Job profile more attractive to recruiters. Read these tips and tricks on ways to improve your profile on Remarkhr.com</p>
                </div>
            </div>
    
    
            <VGap :height="50" />
    
            <VContainer :width="80" class="">
                <VFlex class="gap-x-20 flex-wrap md:flex-none" justifyContent="space-between" >
                    <div class="w-full md:w-4/12">
                        <p class="text-3xl font-bold border-t-4 border-teal-800 pt-3">Apply in simple steps</p>
                    </div>
                    <div class="w-full md:w-6/12">
                        <p class="text-md">When you apply for a job your application is send to the employer and you will get an update as the employer takes any action on your application</p>
                    </div>
                </VFlex>
                <VGap :height="50" />
                <VFlex justifyContent="space-between" class="text-center flex-wrap md:flex-none">
                    <div class="w-full md:w-4/12 px-2 py-2">
                        <div class="border border-teal-100 text-center">
                            <p class="my-8 text-xl font-bold">Create Account</p>
                        <icon class="text-9xl text-teal-400" name="streamline:interface-user-add-actions-add-close-geometric-human-person-plus-single-up-user" />
                        <p class="mx-4 my-5 text-slate-600">We guide you to create your profile. Creating a profile on Remark is free.</p>
                        </div>
                    </div>
                    <div class="w-full md:w-4/12 px-2 py-2">
                        <div class=" border border-teal-100 text-center">
                            <p class="my-8 text-xl font-bold">Add your resume</p>
                        <icon class="text-9xl text-teal-400" name="streamline:interface-file-text-text-common-file" />
                        <p class="mx-4 my-5 text-slate-600">Profiles with resume have higher chances of hire by employers.</p>
                        </div>
                    </div>
                    <div class="w-full md:w-4/12 px-2 py-2">
                        <div class="border border-teal-100 text-center">
                            <p class="my-8 text-xl font-bold">Get a Job</p>
                        <icon class="text-9xl text-teal-400" name="streamline:business-handshake" />
                        <p class="mx-4 my-5 text-slate-600">Get notifications of relevant jobs based on your profile and previous jobs.</p>
                        </div>
                    </div>
                </VFlex>
            </VContainer>
            <VGap :height="50" />
            <RMobilePromoBand />
            <VGap :height="50" />
    
            <div :width="80" class="w-full">
                <VFlex class="flex-wrap md:flex-none" justifyContent="space-between">
                    <div class="w-full md:w-4/12 flex justify-center my-3">
                        <p class="text-3xl font-bold border-t-4 border-teal-800 pt-3">Hire in simple steps</p>
                    </div>
                    <div class="w-full md:w-7/12 text-center">
                        <p class="text-md">Reach out to millions of jobseekers and hire quickly with our fast and easy job posting services.</p>
                    </div>
                </VFlex>
                <VGap :height="50" />
                <VFlex justifyContent="space-between" class="text-center flex-wrap md:flex-none">
                    <div class="w-full md:w-4/12 px-2 py-2">
                        <div class=" border border-teal-100 text-center">
                            <p class="my-8 text-xl font-bold">Create Account</p>
                        <icon class="text-9xl text-teal-400" name="ic:baseline-person-add-alt-1" />
                        <p class="mx-4 my-5 text-slate-600">Simples steps to create employer profile .Creating a profile on Remark is free.</p>
                        </div>
                    </div>
                    <div class="w-full md:w-4/12 px-2 py-2">
                        <div class="border border-teal-100 text-center">
                            <p class="my-8 text-xl font-bold">Post a job</p>
                            <icon class="text-9xl text-teal-400" name="ic:baseline-post-add" />
                            <p class="mx-4 my-5 text-slate-600">Post a job and get the perfect employee recommended by the Remark</p>
                        </div>
                    </div>
                    <div class="w-full md:w-4/12 px-2 py-2">
                        <div class="border border-teal-100 text-center">
                            <p class="my-8 text-xl font-bold">Hire an employee</p>
                        <icon class="text-9xl text-teal-400" name="ic:baseline-remember-me" />
                        <p class="mx-4 my-5 text-slate-600">Employer will be notified when an employee applies for the job.</p>
                        </div>
                    </div>
                </VFlex>
            </div>
            <VGap :height="50" />
        </div>
    </div>

    
</template>
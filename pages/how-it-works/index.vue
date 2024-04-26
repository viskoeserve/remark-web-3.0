<template>
    <VGap :height="5" />
    <VContainer :widht="80"  padding="50" class="" >
        <p class="text-4xl font-bold text-center text-teal-800">How Remark works for you</p>

        <VGap :height="50" />

        <VContainer :width="60"  class="text-center">
            <p class="text-2xl font-semibold">We connect employers with professionals</p>
            <p>Learn how to make your Job profile more attractive to recruiters. Read these tips and tricks on ways to improve your profile on Remarkhr.com</p>
        </VContainer>


        <VGap :height="50" />

        <VContainer :width="80" class="">
            <VFlex class="gap-x-20" justifyContent="space-between">
                <VContainer :width="60">
                    <p class="text-3xl font-bold border-t-4 border-teal-800 pt-3">Apply in simple steps</p>
                </VContainer>
                <VContainer>
                    <p class="text-md">When you apply for a job your application is send to the employer and you will get an update as the employer takes any action on your application</p>
                </VContainer>
            </VFlex>
            <VGap :height="50" />
            <VFlex justifyContent="space-between" class="text-center xs:flex-wrap md:flex-none gap-x-3">
                <VContainer :width="100" class="border border-teal-100 text-center">
                    <p class="my-8 text-xl font-bold">Create Account</p>
                    <icon class="text-9xl text-teal-400" name="streamline:interface-user-add-actions-add-close-geometric-human-person-plus-single-up-user" />
                    <p class="mx-4 my-5 text-slate-600">We guide you to create your profile. Creating a profile on Remark is free.</p>
                </VContainer>
                <VContainer :width="100" class="border border-teal-100 text-center">
                    <p class="my-8 text-xl font-bold">Add your resume</p>
                    <icon class="text-9xl text-teal-400" name="streamline:interface-file-text-text-common-file" />
                    <p class="mx-4 my-5 text-slate-600">Profiles with resume have higher chances of getting contacted by employers.</p>
                </VContainer>
                <VContainer :width="100" class="border border-teal-100 text-center">
                    <p class="my-8 text-xl font-bold">Get a Job</p>
                    <icon class="text-9xl text-teal-400" name="streamline:business-handshake" />
                    <p class="mx-4 my-5 text-slate-600">Get notifications of relevant jobs based on your profile and previous jobs.</p>
                </VContainer>
            </VFlex>
        </VContainer>
        <VGap :height="50" />
        <RMobilePromoBand />
        <VGap :height="50" />

        <VContainer :width="80" class="">
            <VFlex class="gap-x-20" justifyContent="space-between">
                <VContainer :width="60">
                    <p class="text-3xl font-bold border-t-4 border-teal-800 pt-3">Hire in simple steps</p>
                </VContainer>
                <VContainer>
                    <p class="text-md">Reach out to millions of jobseekers and hire quickly with our fast and easy job posting services.</p>
                </VContainer>
            </VFlex>
            <VGap :height="50" />
            <VFlex justifyContent="space-between" class="text-center xs:flex-wrap md:flex-none gap-x-3">
                <VContainer :width="100" class="border border-teal-100 text-center">
                    <p class="my-8 text-xl font-bold">Create Account</p>
                    <icon class="text-9xl text-teal-400" name="ic:baseline-person-add-alt-1" />
                    <p class="mx-4 my-5 text-slate-600">Simples steps to create employer profile .Creating a profile on Remark is free.</p>
                </VContainer>
                <VContainer :width="100" class="border border-teal-100 text-center">
                    <p class="my-8 text-xl font-bold">Post a job</p>
                    <icon class="text-9xl text-teal-400" name="ic:baseline-post-add" />
                    <p class="mx-4 my-5 text-slate-600">Post a job and get the perfect employee recommended by the Remark</p>
                </VContainer>
                <VContainer :width="100" class="border border-teal-100 text-center">
                    <p class="my-8 text-xl font-bold">Hire an employee</p>
                    <icon class="text-9xl text-teal-400" name="ic:baseline-remember-me" />
                    <p class="mx-4 my-5 text-slate-600">Employer will be notified when an employee applies for the job.</p>
                </VContainer>
            </VFlex>
        </VContainer>
    </VContainer>

    
</template>
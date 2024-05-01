<template>
    <div class="bg-remark-light w-full flex justify-center h-full"   >
        <div>
            <VGap :height="50" />
        <VFlex justifyContent="space-between" class="flex-wrap md:flex-none gap-x-5 px-10 md:px-0">
            <!-- LOGO & DETAILS -->
            <div  class="w-full md:w-2/12 text-center md:text-left">
                <a href="/" class="justify-center flex md:justify-start">
                    <LogoDefaultLogo :width="100" />
                </a>
                <p class="text-slate-500">
                    Remark is a platform that brings together Jobseekers and Employers.
                </p>
                <VContainer class="my-3">
                    <p>Follow Us:</p>
                    <div class="flex gap-x-3 justify-center md:justify-start">
                        <div>
                            <a href="https://facebook.com/remarkhr" target="_blank" rel="noopener noreferrer">
                                <Icon class="text-2xl text-blue-600" name="mdi:facebook" />
                            </a>
                        </div>
                        <div>
                            <a href="https://instagram.com/remarkhr" target="_blank" rel="noopener noreferrer">
                                <Icon class="text-2xl text-pink-800" name="mdi:instagram" />
                            </a>
                            
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/company/remark-official" target="_blank" rel="noopener noreferrer">
                                <Icon class="text-2xl text-blue-900" name="mdi:linkedin" />
                            </a>
                        </div>
                        <div>
                            <a href="https://twitter.com/Remark_official" target="_blank" rel="noopener noreferrer">
                                <Icon class="text-2xl text-blue-500" name="mdi:twitter" />
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
                                <NuxtLink to="/about">
                                    About Us
                                </NuxtLink>
                            </li>
                            <li class="my-2 font-semibold text-teal-900">
                                <NuxtLink to="/career-in-remark">
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
                                <a href="/support/technical">
                                    Technical Support
                                </a>
                            </li>
                            <li class="my-2 font-semibold text-teal-900">
                                <a href="/support/report-fraud">
                                    Report Fraud
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="w-50 md:w-4/12 mb-6 md:my-0">
                        <ul>
                            <li class="my-4">
                                <p class="font-bold">Privacy & Policy</p>
                            </li>
                            <li class="my-2 font-semibold text-teal-900">
                                <NuxtLink to="/policies/terms-and-conditions">
                                    Terms of Conditions
                                </NuxtLink>
                            </li>
                            <li class="my-2 font-semibold text-teal-900">
                                <NuxtLink to="/policies/privacy-policy">
                                    Privacy Policy
                                </NuxtLink>
                            </li>
                            <li class="my-2 font-semibold text-teal-900">
                                <NuxtLink to="/policies/safety-security">
                                    Safety & Security Policy
                                </NuxtLink>
                            </li>
                            <li class="my-2 font-semibold text-teal-900">
                                <NuxtLink to="/policies/consultancy-policy">
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
                <VContainer :width="95" class="">
                    <input v-model="instantForm.mobileNumber.value" type="text" class="border px-5 py-2 outline-none bg-remark-light"  max="10" placeholder="Enter Your Mobile Number" />
                </VContainer>
                <VGap :height="10" />
                <VContainer class="text-center">
                    <button v-if="!instantForm.isAdding" class="bg-teal-800 px-5 py-2 text-white rounded" @click="submitRequestForm" >Request Call</button>
                    <icon v-else name="svg-spinners:ring-resize" />

                </VContainer>
                <VGap :height="10" />
                <div class="text-center">
                    <p class="text-teal-800 font-semibold text-sm">{{ instantForm.isSubmittedForm }}</p>
                </div>
            </div>
        </VFlex>
        <VGap :height="40" />
        <VContainer class="text-center text-sm text-slate-400">
            © 2024 Remark Developed by <a href="/">Visko HR Private Limited</a>
        </VContainer>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            instantForm: {
                name: {
                    value: "",
                    isError: false,
                    errorMessage:""
                },
                mobileNumber: {
                    value: "",
                    isError: false,
                    errorMessage: ""
                },
                isAdding: false,
                isSubmittedForm: ''
            }
        }
    },
    methods: {

        async submitRequestForm() {
            this.instantForm.isAdding = true;

            if(this.instantForm.mobileNumber.value.length != 10) {

                this.instantForm.mobileNumber.isError = true;
                this.instantForm.mobileNumber.errorMessage = "Please enter a valid mobile number";
                this.instantForm.isAdding = false;
                return false;

            }

            const { data, pending, error, refresh } = await useFetch('/api/job/instant-job',{
                method: 'post',
                body: {
                    name: '',
                    number: this.instantForm.mobileNumber.value
                } 
            });

            if(data.value.status) {

                this.instantForm.mobileNumber.value = '';
                this.instantForm.isSubmittedForm = 'Thank you, Remark team will contact you soon'
                
            }

            this.instantForm.isAdding = false;

        }

    }
}
</script>
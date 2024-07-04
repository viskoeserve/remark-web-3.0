<template>
  <div>
    <div class="px-3 sm:px-96 py-24 w-full border">
      <div>
        <h1 class="text-3xl text-center font-bold">Register Yourself</h1>
      </div>
      <div>
        <form action="javascript:void(0)">

          <div class="grid grid-cols-12 gap-x-2 mt-12 border p-5 rounded">
            <div class="mb-3 col-span-12 sm:col-span-6">
              <label class="block" for="">Are you employee or employer <span class="text-red-500">*</span></label>
              <select name="" id="" v-model="user.role" :disabled="user.is_otp_sent" :class="inputClass">
                <option value="1">Employee</option>
                <option value="2">Employer</option>
              </select>
            </div>
            <div></div>
            <div class="mb-3 col-span-12 sm:col-span-6">
              <label class="block" for="">Full Name <span class="text-red-500">*</span></label>
              <input type="text" v-model="user.user_name" :class="inputClass"  :disabled="user.is_otp_sent" placeholder="Full Name">
              
            </div>
            <div v-if="user.role ==  '1'" class="mb-3 col-span-12 sm:col-span-6">
              <label class="block" for="">Profile <span class="text-red-500">*</span></label>
              <input type="text" v-model="user.user_profile" :class="inputClass" :disabled="user.is_otp_sent" placeholder="Full Stack Developer">
            </div>
            <div v-else class="mb-3 col-span-6" >
            </div>

            <div v-if="user.role=='2'" class="mb-3 col-span-12 sm:col-span-6">
              <label class="block" for="">Organization Name <span class="text-red-500">*</span></label>
              <input type="text" v-model="user.user_organization" :class="inputClass" :disabled="user.is_otp_sent" placeholder="Visko HR Private Limited">
            </div>
            <div v-if="user.role=='2'" class="mb-3 col-span-12 sm:col-span-6">
              <label class="block" for="">Organization Type <span class="text-red-500">*</span></label>
              <select :class="inputClass" :disabled="user.is_otp_sent" v-model="user.user_organization_type">
                <option value="0">Company</option>
                <option value="1">Consultancy</option>
              </select>
            </div>
            <div class="mb-3 col-span-12 sm:col-span-6">
              <label class="block" for="">Email Address <span class="text-red-500">*</span></label>
              <input type="text" v-model="user.user_email" :class="inputClass" :disabled="user.is_otp_sent" placeholder="email@gmail.com">
            </div>
            <div class="mb-3 col-span-12 sm:col-span-6">
              <label class="block" for="">Mobile Number <span class="text-red-500">*</span></label>
              <input type="text" v-model="user.user_mobile_number" :class="inputClass" :disabled="user.is_otp_sent" placeholder="+91">
              <small class="text-slate-400">Don't include the country code</small>
            </div>
            <div class="mb-3 col-span-12 sm:col-span-5"></div>
            
            <div class="mb-3 col-span-12 sm:col-span-5"></div>
            <div v-if="user.role == '1'" class="mb-3 col-span-12 sm:col-span-6">
              <label class="block" for="">Are you want to display your mobile number to companies <span class="text-red-500">*</span></label>
              <select name="" v-model="user.user_display_mobile_number" id="" :disabled="user.is_otp_sent" :class="inputClass">
                <option value="0">No</option>
                <option value="1">Yes</option>
              </select>
            </div>
            <div class="mb-3 col-span-12 sm:col-span-2" v-if="user.is_otp_sent">
              
              <label class="block" for="">Enter OTP <span class="text-red-500">*</span></label>
              <input type="text" :class="inputClass" v-model="user.otp_validation.user_otp" placeholder="">
              <div class="flex justify-between mt-2">
                <p>00:{{ user.otp_validation.otp_timing }}</p>
                <button @click="doSendOTP()" class="bg-teal-800 text-white px-3 py-1 rounded-full">Resend</button>
              </div>
            </div>
            <div class="mb-3 text-center col-span-12">
              <div v-if="user.validation.isError" class="py-2 text-red-600">
                <small>{{ user.validation.errorMessage }}</small>
              </div>
              <button v-if="!user.is_otp_sent" class="px-5 py-1 bg-teal-800 text-white" @click="doSendOTP()" >Send OTP</button>
              <button v-if="user.is_otp_sent" class="px-5 py-1 bg-teal-800 text-white" @click="doValidateOTP()" :disabled="user.otp_validation.is_validating" > {{ user.otp_validation.is_validating ? 'Please wait' : 'Validate & Register' }}</button>
            </div>
          </div>
          
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputClass: "w-full px-2 py-2 border mt-2 rounded-lg focus:outline-none",
      user: {
        role: "1",
        user_name: "",
        user_profile: "",
        user_email: "",
        user_mobile_number: "",
        user_organization: "",
        user_organization_type: "0",
        user_display_mobile_number: "0",
        user_token: "",
        is_otp_sent: false,
        otp_validation: {
          user_otp: "",
          otp_timing: 0,
          is_validating: false,
        },
        validation: {
          isError: false,
          errorMessage: ""
        }
      }
    }
  },
  methods: {
    async doSendOTP() {

      this.user.otp_validation.otp_timing = 0;

      var formData = new FormData();
      console.log("send otp");
      if(this.user.user_name == '') {
        this.user.validation.isError = true;
        this.user.validation.errorMessage = "Please enter a valid name";
        return false;
      }else{
        this.user.validation.isError = false;
        this.user.validation.errorMessage = "";
      }

      if(this.user.user_mobile_number.length != 10) {
        this.user.validation.isError = false;
        this.user.validation.errorMessage = "";
        return false;
      } 

      const {data} = await useFetch('/api/auth/register', {method: 'post', body: {
        "role": this.user.role,
        "user_name": this.user.user_name,
        "user_profile": this.user.user_profile,
        "user_email": this.user.user_email,
        "user_mobile_number": this.user.user_mobile_number,
        "user_organization": this.user.user_organization,
        "user_organization_type": this.user.user_organization_type,
        "user_display_mobile_number": this.user.user_display_mobile_number
      }});
      
      if(data.value.status) {

        this.user.is_otp_sent = true;

        this.user.otp_validation.otp_timing = 59;

        this.user.user_token = data.value.data;

      setInterval(() => {

        if(this.user.otp_validation.otp_timing != 0) {
          this.user.otp_validation.otp_timing--;
        }

      }, 1000);

      }else{

        this.user.validation.isError = true;
        this.user.validation.errorMessage = data.value.message;

      }

    },

    async doValidateOTP() {
      this.user.validation.isError = false;
      this.user.validation.errorMessage = '';

      if(this.user.otp_validation.user_otp.length != 4) {
        this.user.validation.errorMessage = 'Invalid OTP';
        this.user.validation.isError = true;
        return false;
      }

      const {data} = await useFetch('/api/auth/validate-register-otp', {
        method: 'post',
        body: {
          otp: this.user.otp_validation.user_otp,
          token: this.user.user_token
        }
      });

      if(data.value.status) {

        localStorage.setItem('token', this.user.user_token);
        localStorage.setItem('isLogged', true);
        const userStore = useMyUserStore();

        data.value.user.isLogged = true;
        userStore.setUser(data.value.user);

        location.href = '/';

      }else{

        this.user.validation.isError = true;
        this.user.validation.errorMessage = data.value.message;

      }

    }
  }
}
</script>

<style>

</style>
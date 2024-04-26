<template>
  <VContainer :width="100">
    <VFlex justifyContent="center">
      <LogoDefaultLogo />
    </VFlex>
    <VFlex justifyContent="space-between" >
      <p class="font-bold text-xl">Login</p>
      
    </VFlex>
    <VGap :height="20" />
    <VContainer>
      <p class="font-semibold">Enter Mobile Number</p>
    <VGap :height="5" />
    <VInput v-model="phoneNumber" @inputChanged="getInput" :model="model.phone" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="+91" class="border w-full px-2 py-2 rounded-lg" />
    <small v-if="errorMessage == ''" class="text-slate-400">Enter your 10 digit mobile number without +91</small>
    <small v-if="errorMessage != ''" class="text-red-400"> {{ errorMessage }} </small>
    <VGap :height="20" />
    <VContainer class="text-center">
      <VButton v-if="!isOTPSent" :onClick="sendOTP" :isDisabled="!isValidPhoneNumber">
        Send OTP
      </VButton>
    </VContainer>
    
    </VContainer>
    <VContainer v-if="isOTPSent">
      <VContainer>
        <VFlex justifyContent="space-between" >
          <p class="text-sm text-slate-600" >00:{{ timer >= 10 ? timer : '0'+timer }}</p>
          <p class="font-bold text-sm " @click="sendOTP" :class=" timer == 0 ? 'text-teal-800 cursor-pointer' : 'text-slate-400' " >Reset OTP</p>
        </VFlex>
        <!-- <hr /> -->
      </VContainer>
    <VGap :height="20" />

      <p class="font-semibold">Enter OTP</p>
    <VGap :height="5" />
    <VInput @inputChanged="getInput" :model="model.otp"  type="tel" placeholder="****" class="border w-full px-2 py-2 rounded-lg" />
    <small v-if="errorMessage == ''" class="text-slate-400">Enter otp sent on your phone number ({{ phoneNumber }})</small>
    <small v-if="errorMessage != ''" class="text-red-400"> {{ errorMessage }} </small>
    <VGap :height="20" />
    <VContainer class="text-center">
      <VButton :onClick="submitOtp" :isDisabled="!isValidOTP">
        Submit OTP
      </VButton>
    </VContainer>
    </VContainer>

  </VContainer>
</template>

<script setup>



</script>

<script>

const userStore = useMyUserStore();

export default {
  data() {
    return {
      model: {
        phone: 'phone',
        otp: 'otp'
      },
      phoneNumber: "",
      otp: "",
      isValidPhoneNumber: false,
      errorMessage: "",
      isOTPSent: false,
      isValidOTP: false,
      timer: 0,
      loginToken: "",
      storage: null
    }
  },
  methods: {
    async init() {

      this.storage = await localStorage;

    },
    getInput(input) {



      if(input.phone) {
        this.phoneNumber = input.phone;
      }
      
      if(input.otp) {
        this.otp = input.otp;

        if(this.otp.length == 4) {
          this.isValidOTP = true;
        }else{
          this.isValidOTP = false;
        }
      }

      this.validatePhoneNumber();
    },
    validatePhoneNumber() {
      this.errorMessage = "";
      var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

      this.isValidPhoneNumber = re.test(this.phoneNumber);

      console.log(re.test(this.phoneNumber));
 
      if(this.phoneNumber.length > 9) {
        if(this.isValidPhoneNumber) {
            this.errorMessage = "";
            
        }else{
          this.errorMessage = "Please provide a valid phone number";
        }
      }

    },

    async sendOTP() {

      // LOGIN
      
      this.loginToken = "";


      if(this.timer == 0) {
        if(this.isValidPhoneNumber) {

          var formData = new FormData();

          formData.append('login_type', 'mobile');
          formData.append('mobile_number', this.phoneNumber);

          const { data, pending, refresh } = await useFetch('/api/auth/login', {method: 'post', body: {
            "login_type": "mobile",
            "mobile_number": this.phoneNumber
          }});

          console.log('data',data.value);

          if(data.value.status) {

            

            this.loginToken = data.value.data.token;
                this.isOTPSent = true;
                this.otpValidTime();

              userStore.token = this.loginToken;

          }
          
      }
      }

    },
    

    otpValidTime() {
      this.timer = 20;
      var interval = setInterval(() => {
            if(this.timer != 0) {
              console.log('interval running');
              this.timer--;
            }else{
              clearInterval(interval);
            }
          }, 1000);

    },

    async submitOtp() {

      var formData = new FormData();

      formData.append('login_type', 'mobile');
      formData.append('mobile_number', this.phoneNumber);

      const { data, pending, refresh } = await useFetch('/api/auth/validate-otp', {method: 'post', body: {
        "otp": this.otp,
        "firebase_token": "web_login",
        "token": this.loginToken
      }});

      console.log('data',data.value);

      if(data.value.status) {

        

        // this.loginToken = data.value.data.token;
        // const storage = await useLocalStorage();
        this.storage.setItem('isLogged', true);
        this.storage.setItem('user', JSON.stringify(data.value.user));

        const u = useMyUserStore();
        data.value.user.isLogged = true;
        u.setUser(data.value.user);
        u.setToken(this.loginToken);


        location.href = '';
        

      }

    }
  },
  async created() {
    await this.init();
  }
}
</script>

<style>

</style>
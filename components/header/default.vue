<template>
    <div>

        <VContainer :width="100" style="height: 80px;" class="fixed top-0 z-10 bg-white shadow-lg" :isDebug="false">

            <VFlex :justifyContent="'space-between'" class="px-5 w-full">

                <div style="width:40%">
                    <ul class="flex gap-x-2 justify-evenly">
                        <li>
                            <a class="text-sm font-semibold text-teal-800" href="#">
                                Download App
                            </a>
                        </li>
                        <li>
                            <a class="text-sm font-semibold text-teal-800" href="/how-it-works">How To Work</a>
                        </li>
                        <li>
                            <NuxtLink class="text-sm font-semibold text-teal-800" to="/jobs">Jobs</NuxtLink>
                        </li>
                        <!-- <li>
                            <a class="text-sm font-semibold text-teal-800" href="/">Companies</a>
                        </li> -->
                        <!-- <li>
                            <a class="text-sm font-semibold text-teal-800" href="/">About</a>
                        </li> -->
                    </ul>
                </div>

                <div style="width:20%;" class="flex justify-center">
                    <a href="/">
                        <LogoDefaultLogo :width="80" />
                    </a>
                </div>

                <div style="width:40%">
                    <ul v-if="!userStore.user?.isLogged" class="flex justify-evenly gap-x-5 items-center" >
                        <li></li>
                        <li></li>
                        <li>
                            <a href="/register">Register Yourself </a>
                        </li>
                        <li>
                            <VButton paddingY="3" :onClick="toggleLogin" :isLink="false">Login</VButton>
                            <!-- <button class="py-2 px-6 bg-teal-800 text-white rounded-full">Login</button> -->
                        </li>
                    </ul>
                    <ul v-if="userStore.user?.isLogged" class="flex justify-evenly gap-x-5 items-center" >
                        <li></li>
                        <li></li>
                        <li></li>
                        <li>
                            <VFlex class="gap-x-2">
                                <VImage :image="userStore.user.user_photo" :isRounded="true" />
                                <VContainer>
                                    <nuxt-link to="/">{{ userStore.user.user_name }} </nuxt-link>
                                    <p v-if="userStore.user.user_type == '1'" class="text-sm"> {{ userStore.user.user_profile }} </p>
                                    <p v-if="userStore.user.user_type == '2'" class="text-xs"> {{ userStore.user.user_organization }} </p>
                                    
                                </VContainer>
                               
                            </VFlex>
                            
                        </li>
                        
                    </ul>
                </div>

            </VFlex>

        </VContainer>

        <VContainer :style="{ 'height' : '90px'}" ></VContainer>

    </div>
    <VModal v-if="showLogin" :onCancelled="toggleLogin">
        <RLogin />
    </VModal>
</template>

<script>

export default {
    data() {
        return {
            showLogin: false,
            storage: null,
            user: null
        }
    },
    computed: {
        userStore() {
            const u = useMyUserStore();
            return u;
        }
    },
    methods: {
        async init() {
            // this.storage = useStorage();
            // this.user = JSON.parse(this.storage.user);
            
        },
        toggleLogin() {
            this.showLogin = !this.showLogin;
        }
    },
    async created() {
        await this.init();
    }
}
</script>
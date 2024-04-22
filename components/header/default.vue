<template>
    <div>

        <VContainer :width="80" style="height: 80px;" :isDebug="false">

            <VFlex :justifyContent="'space-between'" class="px-5 w-full">

                <div style="width:40%">
                    <ul class="flex gap-x-5 justify-between">
                        <li>
                            <a href="#">
                                Download App
                            </a>
                        </li>
                        <li>
                            <NuxtLink to="/">How To Work</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/jobs">Jobs</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">Companies</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">About</NuxtLink>
                        </li>
                    </ul>
                </div>

                <div style="width:20%;" class="flex justify-center">
                    <LogoDefaultLogo :width="100" />
                </div>

                <div style="width:40%">
                    <ul v-if="!user.user.isLogged" class="flex justify-evenly gap-x-5 items-center" >
                        <li></li>
                        <li></li>
                        <li>
                            <nuxt-link to="/">Register Yourself  {{ user.user.isLogged }} </nuxt-link>
                        </li>
                        <li>
                            <VButton paddingY="3" :onClick="toggleLogin" :isLink="false">Login</VButton>
                            <!-- <button class="py-2 px-6 bg-teal-800 text-white rounded-full">Login</button> -->
                        </li>
                    </ul>
                    <ul v-else class="flex justify-evenly gap-x-5 items-center" >
                        <li></li>
                        <li></li>
                        <li></li>
                        <li>
                            <VFlex class="gap-x-2">
                                <VImage :image="user.user.user_photo" :isRounded="true" />
                                <VContainer>
                                    <nuxt-link to="/">{{ user.user.user_name }} </nuxt-link>
                                    <p v-if="user.user.user_type == '1'" class="text-sm"> {{ user.user.user_profile }} </p>
                                    <p v-if="user.user.user_type == '2'" class="text-xs"> {{ user.user.user_organization }} </p>
                                    
                                </VContainer>
                               
                            </VFlex>
                            
                        </li>
                        
                    </ul>
                </div>

            </VFlex>

        </VContainer>

    </div>
    <VModal v-if="showLogin" :onCancelled="toggleLogin">
        <RLogin />
    </VModal>
</template>


<script setup>

    const user = useMyUserStore();

</script>

<script>

export default {
    data() {
        return {
            showLogin: false,
        }
    },
    methods: {
        toggleLogin() {
            this.showLogin = !this.showLogin;
        }
    }
}
</script>
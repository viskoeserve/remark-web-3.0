<template>
    <div class="hidden md:block">

        <VContainer style="height: 80px;" class="fixed top-0 z-10 bg-white shadow-lg w-full" :isDebug="false">

            <VFlex :justifyContent="'space-between'" class="px-5 w-full">

                <div style="width:40%">
                    <ul class="flex gap-x-12 justify-start">
                        <li>
                            <a class="text-sm font-semibold text-teal-800" href="#">
                                Download App
                            </a>
                        </li>
                        <li>
                            <a class="text-sm font-semibold text-teal-800" href="/how-it-works">How To Work</a>
                        </li>
                        <li>
                            <a class="text-sm font-semibold text-teal-800" href="/jobs">Latest Jobs</a>
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
                            <VButton paddingY="3" :onClick="toggleLogin" :isLink="false">Login</VButton>
                            <!-- <button class="py-2 px-6 bg-teal-800 text-white rounded-full">Login</button> -->
                        </li>
                    </ul>
                    <ul v-if="userStore.user?.isLogged" class="flex justify-evenly gap-x-5 items-center" >
                        <li></li>
                        <li></li>
                        <li></li>
                        <li>
                            <div>
                                <div class="flex">
                                    <VFlex class="gap-x-2">
                                        <VImage :image="userStore.user.user_photo" :isRounded="true" />
                                        <VContainer>
                                            <nuxt-link to="/">{{ userStore.user.user_name }} </nuxt-link>
                                            <p v-if="userStore.user.user_type == '1'" class="text-sm"> {{ userStore.user.user_profile }} </p>
                                            <p v-if="userStore.user.user_type == '2'" class="text-xs"> {{ userStore.user.user_organization }} </p>
                                            
                                        </VContainer>
                                       
                                    </VFlex>
                                    <div>
                                        <button @click="doLogout" class="px-8 py-3 rounded-full text-red-600 underline" >Logout</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        
                    </ul>
                </div>

            </VFlex>

        </VContainer>

        <VContainer :style="{ 'height' : '90px'}" ></VContainer>

    </div>
    <div class="block md:hidden">
        <VContainer class="w-full px-5 py-3">
            <VFlex justifyContent="space-between">
                <a class="cursor-pointer" href="/">
                    <LogoDefaultLogo />
                </a>
                <div>
                    <a v-if="!userStore.user.isLogged" href="javascript:void(0)" class="px-8 py-3 bg-teal-800 text-white rounded-full" @click="toggleLogin">
                        Login
                    </a>
                    <div v-else class="text-center">
                        <p>{{ userStore.user.user_name }}</p>
                        <p class="text-sm text-slate-500" v-if="userStore.user.user_type == '1'"> {{ userStore.user.user_profile }} </p>
                        <p class="text-sm text-slate-500" v-if="userStore.user.user_type == '2'"> {{ userStore.user.user_organization }} </p>
                    </div>
                </div>
                <div class="relative">
                    <div class="p-1 cursor-pointer" @click="toggleMobileMenu" >
                        <icon name="material-symbols:menu-rounded" class="text-3xl" />
                    </div>
                </div>
                <!-- HIDDEN MENUS -->
            <div class="w-full bg-remark-light absolute top-0 right-0 mt-24 fade transition duration-150 ease-in-out shadow-xl" v-if="showMobileMenu">
                <div class="p-4">
                    <ul>
                        <li class="px-2">
                            <VFlex justifyContent="space-between">
                                <div>
                                    <p class="text-xl font-bold text-slate-400">Menus</p>
                                </div>
                                <div @click="toggleMobileMenu">
                                    <icon name="material-symbols:close-rounded" class="text-4xl text-slate-800" />
                                </div>
                            </VFlex>
                        </li>
                        <li v-if="userStore.user.isLogged" class="mt-4 mb-3">
                            <a class="px-2 py-2 text-teal-800 font-bold text-xl underline" href="#">My Account</a>
                        </li>
                        <hr v-if="userStore.user.isLogged" />
                        <li class="mt-4 mb-3">
                            <a class="px-2 py-2 text-teal-800 font-bold text-xl underline" href="#">Home</a>
                        </li>
                        <hr />
                        <li class="mt-4 mb-3">
                            <a class="px-2 py-2 text-teal-800 font-bold text-xl underline" href="#">Download App</a>
                        </li>
                        <hr />
                        <li class="mt-4 mb-3">
                            <a class="px-2 py-2 text-teal-800 font-bold text-xl underline" href="/how-it-works">How it works</a>
                        </li>
                        <hr />
                        <li class="mt-4 mb-3">
                            <a class="px-2 py-2 text-teal-800 font-bold text-xl" href="/jobs">Latest Jobs <span class="animate-pulse text-xs text-red-600">New</span></a>
                        </li>
                        <hr />
                        <li class="mt-4 mb-3">
                            <a class="px-2 py-2 text-teal-800 font-bold text-xl underline" href="#">About</a>
                        </li>
                        <hr v-if="userStore.user.isLogged" />
                        <li v-if="userStore.user.isLogged" class="mt-4 mb-3">
                            <a class="px-2 py-2 text-red-600 font-bold text-xl underline" @click="doLogout" href="javascript:void(0)">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
            </VFlex>
            
            
        </VContainer>
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
            user: null,
            showMobileMenu: false
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
        toggleMobileMenu() {

            this.showMobileMenu = !this.showMobileMenu;

        },
        toggleLogin() {
            this.showLogin = !this.showLogin;
        },
        doLogout() {

            this.userStore.unsetUser();

            location.href = '';

        }
    },
    async created() {
        await this.init();
    }
}
</script>
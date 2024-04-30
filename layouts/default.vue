<template >
    <div  class="scroll-smooth">
      <HeaderDefault @showLogin="showLoginNow" :toShowLogin="false"></HeaderDefault>
    <slot />
    <FooterDefault></FooterDefault>
    </div>
</template>

<script>
export default {
   data() {
      return {
         toShowLogin: false,
      }
   },
   methods: {
      showLoginNow() {
         console.log(this.toShowLogin);
         this.toShowLogin = !this.toShowLogin;
      }
   },
}
</script>
<style>
 body {
    background-color: #ffffff;
 }

 .bg-remark-light {
    background-color: #f7fffd;
 }
</style>
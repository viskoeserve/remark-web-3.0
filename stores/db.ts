
export const useMyDbStore = defineStore({
  id: 'myDbStore',

  state: () => ({ 
      homepage: {
        isHomepageLoaded: false,
        categories: [],
        topCompanies: [],
        recentJobs: []
      }
   }),
   getters: {
    isLoaded():boolean {
      return this.homepage.isHomepageLoaded;
    }
   },
  actions: {
    
      async loadHomepage() {

        if(this.homepage.categories.length == 0) {
          const user = useMyUserStore();

        const {data, pending, refresh} = await useFetch('/api/home/main', {
            method: 'post',
            body: {
                token: user.token
            }
        });

        var date = Date.now();

        console.log(date);
        console.log(data);

        if(data?.value?.status) {

            this.homepage.categories = data.value.categories;

            this.homepage.topCompanies = data.value.top_companies;

            this.homepage.recentJobs = data.value.recent_jobs;

            this.homepage.isHomepageLoaded = true;
            

        }
        }

        console.log(this.homepage);

      }

  }
})

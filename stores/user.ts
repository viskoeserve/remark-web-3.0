
export const useMyUserStore = defineStore({
  id: 'userStore',
  persist: true,
  state: () => ({ 
    user: {

    },
    token: ''
   }),
  getters: {

    getWorkExperience() {

      if(this.user.isLogged) {

        var user_exp = this.user?.user_experience_ext;

        
        
        user_exp = user_exp != '' ? JSON.parse(user_exp) : [];

        var experience = [];

        user_exp.forEach( (exp:any) => {
          
          experience.push({
            "title": exp.ExperiencePosition,
            "company": exp.ExperienceCompany,
            "from": exp.ExperienceFrom,
            "to": exp.ExperienceTo
          })

        });

        return experience;

      }

    },

    

  },
  actions: {

    setUser(user:Object) {
      this.user = user;
    },

    setToken(token:string){
      this.token = token;
    },
    unsetUser() {
      this.user = {};
    }

  }
})


export const useMyUserStore = defineStore({
  id: 'userStore',
  persist: true,
  state: () => ({ 
    user: {},
    token: ''
   }),
  actions: {

    setUser(user:Object) {
      this.user = user;
    },

    setToken(token:string){
      this.token = token;
    }

  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    studentData:{
      email:'',
      name:'',
      stream:'',
      id:'',
      tmpPwd:'',
      projectsNum:"",
      projects:"",
      wlnum:'',
      clink:'',
      llink:'',
      remark:'',
      status:'',
      topic:''
    },
    user:null,
    isAdmin:false,
    isLoggedIn:false
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

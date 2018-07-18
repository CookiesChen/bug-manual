const state = {
    account: '',
    logged: false,
    phone: '',
    schoolId: '',
    role: '',
    messages: [],
    mySchools: [],
    myTrains: [],
    schoolMembers: [],
    applylist: []
  }
  
  const getters = {}
  
  const actions = {}

  const mutations = {
    setInfo (state, data) {
      state.logged = true;
      state.account = data.account;
      state.phone = data.phone;
      state.schoolId = data.schoolId;
      state.role = data.role;
    },
    setMessages (state, data) {
        state.messages = data;
    },
    setMySchools (state, data) {
        state.mySchools = data;
    },
    setMyTrains (state, data) {
        state.myTrains = data;
    },
    setMembers (state, data) {
        state.schoolMembers = data;
    },
    setApply (state, data) {
      state.applylist = data;
    },
    logout (state) {
      state.logged = false
      state.email = ''
      state.name = ''
      state.info = {}
      state.mySchools = []
      state.messages = []
      state.myTrains = []
      state.schoolMembers = []
    }
  }
  
  export default {
    state,
    getters,
    actions,
    mutations
  }
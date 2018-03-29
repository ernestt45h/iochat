Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        user:{
            username: 'quasar241'
        }
    },
    getters:{
        getUser:(state)=>{
            return state.user
        }
    },
    mutations:{},
    actions:{}
})


let app = new Vue({
    el: '#app',
    store,
    data: {
        user: {
            username: ''
        }
    },
    created: function(){
        let socket = io.connect('http://localhost')
        this.user = this.$store.getters.getUser
    },
    
})
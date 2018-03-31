$('document').ready(function() {
    $('#app').css('display', 'block')
    $('.preloader').css('display', 'none')
    $('.tabs').tabs()
})


let bus = new Vue()
Vue.use(Vuex)



const store = new Vuex.Store({
    state:{
        user: '',
    },
    getters:{
        getUser:(state)=>{
            return state.user
        },
        isAuth:(state)=>{
            if (state.user != undefined) {
                return true
            }else{
                return false
            }
        }
    },
    mutations:{
        updateUser(state, payload){
            state.user = payload
            bus.$emit('isUser')
        }
    },
    actions:{
        loginUser({commit, getters}, creds){
            bus.$emit('loading', true)
            axios.post('http://localhost/api/login', creds).then(function(doc) {
                console.log(doc.data.error)
                if (doc.data.error != undefined) {
                    bus.$emit('error', {
                        msg: 'Wrong Username or password',
                        color: 'orange'
                    })
                }else{
                    commit('updateUser', doc.data)
                }
                bus.$emit('loading', false)
            })
        }
    }
})



let app = new Vue({
    el: '#app',
    store,
    data: {
        user: '',
        login:{
            username: '',
            password: ''
        },
        error: '',
        isAuth: false,
        loading: false
    },
    methods:{
        loginUser(){
            this.error = ''
            this.$store.dispatch('loginUser', {
                username: this.login.username,
                password: this.login.password
            })
        }
    },
    created: function(){
        let socket = io.connect('http://localhost')
        bus.$on('isUser',()=>{
            this.user = this.$store.getters.getUser
            this.isAuth = this.$store.getters.isAuth
        })
        bus.$on('loading', function(bool){
            this.loading = bool
        })
        bus.$on('error', (error)=>{
            this.error = error
            setTimeout(function() {
                this.error = ''
            }, 4000);
        })
    },
    beforeUpdate(){
        $('document').ready(function () {
            $('.tabs').tabs() 
            $('.fixed-action-btn').floatingActionButton();
        })
    }
})
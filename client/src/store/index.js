import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import {bus} from '../main'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: '',
        rooms: ''
    },
    getters: {
        getUser: (state) => {
            return state.user
        },
        isAuth: (state) => {
            if (state.user != '') {
                return true
            } else {
                return false
            }
        },
        getRooms: state =>{
            return state.rooms
        }
    },
    mutations: {
        updateUser(state, payload) {
            state.user = payload
            if (payload) {
                console.log(payload)
                bus.$emit('isUser', true)
            }else{
                bus.$emit('isUser', false)
                
            }
        },
        setRooms(state, payload){
            state.rooms = payload
            bus.$emit('rooms')
        }
    },
    actions: {
        loginUser({ commit, getters }, creds) {
            bus.$emit('error', '')
            bus.$emit('loading', true)
            axios.post('http://localhost/api/login', creds).then(function (doc) {
                console.log(doc.data.error)
                if (doc.data.error != undefined) {
                    bus.$emit('error', {
                        msg: 'Wrong Username or password',
                        color: 'orange'
                    })
                } else {
                    commit('updateUser', doc.data)
                }
                bus.$emit('loading', false)
            }).catch(()=>{
                bus.$emit('error', {
                    msg: 'Network Error',
                    color: 'red'
                })
                bus.$emit('loading', false)
            })
        },
        fetchRooms({commit}){
            commit('setRooms', [
                { name: 'Ernest' },
                { name: 'Anas'},
            ])
        }
    }
})


export default store
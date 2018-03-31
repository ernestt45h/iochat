<template>
    <div class="container">
        <div class="row">
            <div class="col l6 offset-l3 m8 offset-m2 s12">
                <div class="card">
                    <div class="card-title truncate">
                        <h1 class="blue-text center">
                            <i style="font-size: 50px" class="material-icons pink-text">bubble_chart</i>Login</a>
                        </h1>
                    </div>
                    <div class="card-content">
                        <div class="input-field">
                            <input v-model="username" id="username" type="text" class="validate blue-text" autocomplete="off">
                            <label for="username" class="blue-text">Username</label>
                        </div>
                        <div class="input-field">
                            <input v-model="password" id="password" type="password" class="validate blue-text" autocomplete="off">
                            <label for="password" class="blue-text">Password</label>
                        </div>
                        <div class="right">
                            <small>
                                <a href="./signup.html">Create new account</a>
                            </small>
                        </div>

                    </div>
                    <div class="card-footer">
                        <button @click.prevent="loginUser" class="waves-effect btn right blue btn-large">login</button>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>
<script>
import {bus} from '../main'

export default {
  name: 'login',
  data(){
      return {
          username: 'ernestt45h',
          password: 'Jimjam241',
      }
  },
  methods:{
      loginUser(){
            this.$store.dispatch('loginUser', {
                username: this.username,
                password: this.password
            })
      }
  },
  created(){
      if (this.$store.getters.isAuth) {
          this.$router.push('/')
      }

      bus.$on('isUser', (bool)=>{
        if(bool) this.$router.push('/')
      })
  }
}
</script>

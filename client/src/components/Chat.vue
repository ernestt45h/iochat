<template>
  <div class="container">
        <div class="row">
            <div class="col s12">
                <ul class="tabs">
                    <li class="tab col s6">
                        <a class="active" href="#test1">Chats</a>
                    </li>
                    <li class="tab col s6">
                        <a href="#test2">Contacts</a>
                    </li>
                </ul>
            </div>
            <div id="test1" class="col s12">
                <ul class="">
                    <li v-for="chat in chats" :key="chat.id" class="room card blue hoverable row">
                        <img v-if="chat.img" :src="chat.img" alt="" class="circle col s4 m2 l1">
                        <i v-else class="material-icons circle white-text center col s5 m3 l2">person</i>
                        <h5 class="room-name col s7 m9 l10 white-text">{{chat.name}}</h5>
                    </li>
                </ul>
            </div>
            <div id="test2" class="col s12">Will Work on you later</div>
        </div>
      <preloader></preloader>        
    </div>
</template>
<script>
import {bus} from '../main'
import $ from 'jquery'
import Preloader from './includes/preloader'

export default {
  name: 'room',
  components: {Preloader},
  data(){
      return {
          chats: '',
      }
  },
  beforeCreate(){
      if (!this.$store.getters.isAuth) {
          this.$router.push('/login')
      }
  },
  created(){
    $(document).ready(function(){
        $('ul.tabs').tabs();
    })

    bus.$on('chats', ()=>{
        this.chats = this.$store.getters.getChats
    })

    this.$store.dispatch('fetchChats')
  },
  updated(){
       $(document).ready(function(){
        $('ul.tabs').tabs();
    })
  }
}
</script>
<style scope>
    .circle{
        width: 100px;
        height: 100px;
        font-size: 100px;
    }
    .room-name{
        margin-top: 1.5em;
    }

    .room{
        cursor: pointer;
    }
</style>



<template>
  <div class="container">
        <div class="row">
            <div class="col s12">
                <ul class="tabs">
                    <li class="tab col s6">
                        <a class="active" href="#test1">Rooms</a>
                    </li>
                    <li class="tab col s6">
                        <a href="#test2">Contacts</a>
                    </li>
                </ul>
            </div>
            <div id="test1" class="col s12">
                <ul class="collection">
                    <li v-for="room in rooms" :key="room.id" class="collection-item avatar">
                        <img v-if="room.img" :src="room.img" alt="" class="circle">
                        <i v-else class="material-icons circle gray">person</i>
                        <span class="title">{{room.name}}</span>
                    </li>
                </ul>
            </div>
            <div id="test2" class="col s12">Test 2</div>
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
          rooms: '',
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

    bus.$on('rooms', ()=>{
        this.rooms = this.$store.getters.getRooms
    })

    this.$store.dispatch('fetchRooms')
  },
  updated(){
       $(document).ready(function(){
        $('ul.tabs').tabs();
    })
  }
}
</script>


<template>
  <div class="card white-text center" :class="error.color"><h5>{{error.msg}}</h5></div>
</template>
<script>
import {bus} from '../../main'
export default {
  name: 'error',
  data(){
      return{
          error: ''
      }
  },
  created(){
      bus.$on('error', error=>{
            this.error = error
        })
  }
}
</script>


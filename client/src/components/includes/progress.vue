<template>
    <div class="blue lighten-2" :class="{progress: loading}">
        <div class="indeterminate blue darken-1"></div>
    </div>
</template>
<script>
import {bus} from '../../main'

export default {
  name: 'progress-bar',
  data(){
      return {
          loading: false
      }
  },
  created(){
      bus.$on('loading',(isloading)=>{
          this.loading = isloading
      })
  }
}
</script>


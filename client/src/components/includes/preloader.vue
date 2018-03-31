<template>
    <div class="center">
        <div id="preloader" class="preloader-wrapper big" :class="{active: loading}">
            <div class="spinner-layer spinner-blue-only">
                <div class="circle-clipper left">
                    <div class="circle"></div>
                </div>
                <div class="gap-patch">
                    <div class="circle"></div>
                </div>
                <div class="circle-clipper right">
                    <div class="circle"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {bus} from '../../main'
export default {
  name: 'pre-loader',
  data(){
      return{
          loading: false
      }
  },
  created(){
      bus.$on('preloader', bool=>this.loading=bool)
  }
}
</script>


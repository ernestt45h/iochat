<template>
  <div id="app">
    <navbar></navbar>  
    <progress-bar></progress-bar>
    <error></error>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/includes/navbar'
import ProgressBar from './components/includes/progress'
import Error from './components/includes/error'

export default {
  name: 'App',
  components: {Navbar, ProgressBar, Error},
  created(){

  }
}
</script>

<style>

</style>

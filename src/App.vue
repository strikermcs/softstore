<template>
   <component :is="layout">
     <router-view/>
   </component>
 </template>


<script>

import EmptyLayout from '@/layouts/EmptyLayout'
import MainLayout from '@/layouts/MainLayout'

export default {
  computed:{
    layout(){
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },

  components:{
    EmptyLayout,
    MainLayout
  }
  
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap');
@import 'assets/style/normalize.css';
</style>

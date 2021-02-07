<template>
  <div class="page">
    <aside class="sidebar">
        <Aside/>
        </aside>
        <main class="main">
        <div class="container">
         <router-view/>
        </div>
      </main>
    </div>
</template>

<script>
import Aside from '@/components/ASide'

export default {
     name: 'main-layout',
      
      components:{
         Aside
     }
}
</script>

<style lang="scss">
.page{
  overflow: hidden;
}


.main{
  height: 100vh;
  // width: 100%;
  margin-left: 350px;
  border: 1px solid #e8eff4;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  background-color: #e8eff4;

}

.sidebar{
  width: 350px;
  height: 100vh;
  position: relative;
  background-color: #fff;   

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}


.container{
  width: 1290px;
  margin: 0 auto;
}


</style>
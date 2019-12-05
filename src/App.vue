<template>
  <v-app>
    <!-- <Header style="margin-top:5%:" v-if="$route.name !== 'home'"></Header> -->
    <Sidebar v-show="($route.name == 'admin'|| $route.name == 'home'|| $route.name == 'about_us')? false : true" />  
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>
<style scoped>

</style>

<script>
import Sidebar from "@/components/Sidebar"
export default {
  name: "App",
  components:{
    Sidebar
  },
  method:{
  }
};
</script>
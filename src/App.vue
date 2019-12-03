<template>
  <v-app>
    <Header style="margin-top:5%:" v-if="$route.name !== 'home'"></Header>
    <Sidebar />  
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>
<style>

</style>

<script>
import Sidebar from "@/components/Sidebar"
export default {
  name: "App",
  components:{
    Sidebar
  }
};
</script>
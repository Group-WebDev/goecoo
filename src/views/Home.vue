<template>
<div id="app">
  <Carousel/>
  <v-container>
    <Event/>
  </v-container>
  <Content/>
</div>
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/Common/Carousel.vue";
import Event from "@/components/Events"
// import Content from "@/components/Content.vue"
export default {
    components:{
      Carousel,
      Event
      // Content
    }
}
</script>

<!-- <v-container>
    <v-row>
      <v-col cols="4" v-for="(cat,idx) in cats" :key="idx">
        <Content :cat="cat" />
      </v-col>
    </v-row>
  </v-container> -->
<template>
<div id="app">
    <v-responsive min-height="20vh">
        <Carousel />
        <v-responsive min-height="10vh"></v-responsive>
        <v-container>
            <v-lazy v-model="isActive" :options="{
          threshold: .2
        }" min-height="100" transition="fade-transition">
                <Events />
            </v-lazy>
        </v-container>

    </v-responsive>
</div>
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/Common/Carousel.vue";
import Events from "@/components/Events.vue"
export default {
    components: {
        Carousel,
        Events
    },
    data: () => ({
        isActive: false,
    }),
}
</script>

<style>
#app {
    overflow: hidden;
}

</style>

<!-- <v-container>
    <v-row>
      <v-col cols="4" v-for="(cat,idx) in cats" :key="idx">
        <Content :cat="cat" />
      </v-col>
    </v-row>
  </v-container> -->

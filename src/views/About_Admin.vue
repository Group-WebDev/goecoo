<template>
  <div>
    <Sidebar/>
    <div>
      <v-carousel cycle height="500" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    </div>
    

    <Developer/>
  </div>
</template>
<script>
import Sidebar from "../components/Sidebar.vue";
import Developer from "../components/Developer.vue";

export default {
  name: "AboutUs",
  data: () => {
    return {
      items: [
        {
          src: require("@/assets/mountains.jpeg")
        },
        {
          src: require("@/assets/ocean.jpg")
        },
        {
          src: require("@/assets/falls.jpeg")
        },
        {
          src: require("@/assets/blue.jpeg")
        },
        {
          src: require("@/assets/dog.jpeg")
        }
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"]
    };
  },
  components: {
    Sidebar,
    Developer
  },
  methods: {}
};
</script>
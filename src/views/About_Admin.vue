<template>
  <div>
    <div>
      <v-carousel class="carousel" cycle height="500" hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <v-row
            v-for="(slide, i) in slides"
            :key="i"
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="display-3"><h3>{{ slide }}</h3></div>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </div>
    <h1>DEVELOPERS:</h1>
    <Developer/>
  </div>
</template>
<style scoped>
.carousel{
  margin-top: 60px;
}
::v-deep .v-image__image,
.v-image__placeholder {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
.display-3{
  color:white;
  font-size: 20px;
  margin: 20%;
   background-color:transparent;
}
h3{
  font-size:30px;
    background-color:transparent;
    width: 100%;
}
</style>

<script>
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
      slides: ["Mission:To create connection between people and environmental organizations to bring change in the environment through collaboration.", "Second", "Third", "Fourth", "Fifth"]
    };
  },
  components: {
    // Sidebar,
    Developer
  },
  methods: {}
};
</script>
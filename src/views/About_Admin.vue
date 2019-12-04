<template>
  <div>
    <div>
      <v-carousel class="carousel" cycle height="100%" hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item class="carouselitem"
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
        <v-card class="mx-auto" align="center" justify="center" color="rgba(0,0,0,0.5)" max-width="700">
        <v-card-text class="display-1 font-weight-bold" light color="white">
        <div>{{item.text}}</div>
        </v-card-text>
        </v-card>
        </v-carousel-item>
      </v-carousel>
    </div>
    <template>
        
      <v-img class="img" src="../assets/logos.png"></v-img>
      <v-card class="description">
      <h4>This application only focus on spreading the activities related to helping the environment. Also the users are any one as long as he or she can use a computer and are a concern to the environment. Also this an application used to connect with other people to help save mother nature, any misunderstanding between people is not the responsibility of this application. </h4>
      </v-card>
  <v-parallax
    class="parallax"
    dark
    src="../assets/erora.jpeg"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
      <v-card  color="rgba(0,0,0,0.5)" max-width="100%">
        <v-card-text class="display-1 font-weight-bold" light color="white">
          <h2 class="message">Save our mother Earth!</h2>
        </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-parallax>
</template>
  
    <!-- <h1>DEVELOPERS:</h1>
    <Developer/> -->
  </div>
</template>
<style scoped>
.message{
  color:lightgray;
  height: 20px;
}
.parallax{
  height: 50%;
  width: 100%;
}
h1{
  text-align: center;
}
.carouselitem{
  height: 900px;
  width: 100%;
}
.description{
  margin-bottom: 3%;
  padding: 4%;
  margin-right: 15%;
  margin-left: 15%;
}
.about{
  margin-top: 5%;
}
body{
  background-color: white;
}
.mx-auto{
  top:300px;
}
h4{
  margin-right: 20%;
  margin-left: 20%;
  text-align: center;
}
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
  margin-bottom: 3%;

}
.img{
  margin-top: 4%;
  margin-bottom: 2%;
  width: 120px;
  height: 120px;
  margin-left: 46%;
}
</style>

<script>
// import Developer from "../components/Developer.vue";

export default {
  name: "AboutUs",
  data: () => {
    return {
      items: [
        {
          src: require("@/assets/dog.jpeg"),
          text:"--------------------Mission-------------------"+"To create connection between people and environmental organizations to bring change in the environment through collaboration."
        },
        {
          src: require("@/assets/blue.jpeg"),
          text:"---------------------Vision--------------------- A world where people are united to preserve and promote the environment."
        },
        {
          src: require("@/assets/handinhand.jpg"),
          text:"------------------Be Involve!-------------------"

        }
      ],
    };
  },
  components: {
    // Sidebar,
    // Developer
  },
  methods: {}
};
</script>
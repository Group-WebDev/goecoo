<template>
  <div>
    <v-flex>
      <v-container id="header">
        <v-img
          src="https://ak1.picdn.net/shutterstock/videos/1020611911/thumb/4.jpg"
          aspect-ratio="1.7"
          cover
          gradient="to top right, rgba(255,255,2555,0.5), rgba(255,255,255,0.5)"
        >
          <center>
            <div>
              <Advocation />
            </div>
            <Form />
          </center>
        </v-img>
      </v-container>
    </v-flex>
  </div>
</template>

<script>
import Advocation from "@/components/subscribers/Advocation.vue";
import Form from "@/components/subscribers/Form.vue";

export default {
  components: {
    Advocation,
    Form
  }
};
</script>

<style scoped>
#header {
  width: 100%;
}
</style>

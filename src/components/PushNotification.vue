<template>
  <div>
    <div class="text-center">
      <v-badge class="notification">
        <template v-slot:badge>{{notification}}</template>
        <v-icon>mdi-email</v-icon>
      </v-badge>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Notification",
  data() {
    return {
      notification: 2
    };
  },
  // number of subscribers
  mounted() {
    axios
      .post("http://localhost:5000/subcriber/notification")
      .then(res => {
        console.log(res.data);
        this.notification = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.notification {
  /* background-color: #555; */
  color: white;
  text-decoration: none;
  /* padding: 15px 26px; */
  position: relative;
  display: inline-block;
  border-radius: 2px;
}

.notification:hover {
  background: #066473;
}

.notification .badge {
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 5px 10px;
  border-radius: 50%;
  background-color: red;
  color: white;
}
</style>
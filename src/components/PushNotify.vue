<template>
  <div>
    <div class="text-center">
      <button @click="isseen">
        <v-badge class="notification">
          <template v-slot:badge>{{notification}}</template>
          <v-icon>mdi-email</v-icon>
        </v-badge>
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Notification",
  data() {
    return {
      notification: 2,
      newSubscribers: [],
      viewNotif : false,
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
  },
  methods: {
     retrieveSubscribers(){
      axios.get("http://localhost:5000/subscribers/retrieveAll")
      .then(res =>{
        this.newSubscribers = res.data
      })
    },
    isseen() {
      // this.retrieveSubscribers()
      this.$router.push("/admin/subscriberlist")
      this.viewNotif = true
      axios
        .put("http://localhost:5000/subscriber/updateisSeen")
        .then(res => {
          axios.post("http://localhost:5000/subcriber/notification");
          this.notification = res.data;
          console.log("updated");
        })
        .catch(err => {
          console.log("error!");
        });
    },
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
#table {
  height: 500px;
  overflow-y: scroll;
  width: 100%
}
</style>
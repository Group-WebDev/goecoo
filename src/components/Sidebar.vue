<template>
  <div>
    <v-simple-table fixed-header>
      <thead class="back">
        <tr>
          <th class="text-left">
            <v-btn @click.stop="drawer = !drawer" x-medium color="teal" height="50">
              <v-icon  color="white">fas fa-bars</v-icon>
            </v-btn>
            <v-list-item-avatar>
              <v-img src="../assets/go-eco.png"></v-img>
            </v-list-item-avatar>&nbsp;&nbsp;&nbsp;GoEco
          </th>
          <th>
            <Notification/>
          </th>
          <th class="text-right">
            <v-btn link @click="logout()" class="mx-2" fab dark color="teal">
              <v-icon dark>fas fa-sign-out-alt</v-icon>
            </v-btn>
          </th>
        </tr>
      </thead>
    </v-simple-table>
    <v-navigation-drawer height="910" class="overflow-hidden" v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="../assets/go-eco.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>GoEco</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item link @click="dashboard()">
          <v-list-item-action>
            <v-icon>fas fa-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="subscriber()">
          <v-list-item-action>
            <v-icon>fad fa-clipboard-list</v-icon>
            <!-- <i class="fad fa-clipboard-list"></i> -->
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Subscriber List</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="addevent()">
          <v-list-item-action>
            <v-icon>fas fa-calendar-plus</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Add Event</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="aboutus()">
          <v-list-item-action>
            <v-icon>fas fa-building</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About Us</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-container fluid>
      <v-row dense>
      </v-row>
    </v-container>
  </div>
</template>
<style scoped>
.theme--light.v-data-table.v-data-table--fixed-header thead th {
  background: teal;
  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.12);
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.12);
  height: 60px;
}
.theme--light.v-data-table thead tr th {
  color: white;
  font-size: 30px;
}
.fa-sign-out-alt:before {
  color: white;
  content: "\f2f5";
}
.fa-home:before {
  content: "\f015";
  color: green;
}
.fa-clipboard-list:before {
  content: "\f46d";
  color: green;
}
.fa-building:before {
  content: "\f1ad";
  color: green;
}
.fa-calendar-plus:before {
  content: "\f271";
  color: green;
}
.v-list-item .v-list-item__title,
.v-list-item .v-list-item__subtitle {
  line-height: 2;
  color: teal;
  font-size: 20px;
}
.v-list-item--dense .v-list-item__title,
.v-list-item--dense .v-list-item__subtitle,
.v-list--dense .v-list-item .v-list-item__title,
.v-list--dense .v-list-item .v-list-item__subtitle {
  font-size: 17px;
  font-weight: 500;
  line-height: 1rem;
}
</style>
<script>
import Notification from "./PushNotification"
import axios from "axios";
export default {
  name: "sidebar",
  components:{
    Notification
  },

  data: () => ({
    drawer: false
  }),
  methods: {
    dashboard() {
      this.$router.push("dashboard").catch(err => {})
    },
    subscriber() {
      this.$router.push("subscriberlist").catch(err => {})
    },
    addevent() {
      this.$router.push("/admin/addevent").catch(err => {})
    },
    aboutus() {
      this.$router.push("/admin/about").catch(err => {})
    },
    logout() {
      // this.$store.dispatch('logout')
      sessionStorage.removeItem("username");
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
      this.$router.push("/admin");
    }
  }
};
</script>

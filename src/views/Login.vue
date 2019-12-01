<template>
  <div id="background">
    <v-flex justify-center>
      <!-- <h1 class="subtitle-110 text-center">GoEco</h1> -->

      <v-card class="mx-auto card" max-width="400">
        <v-container>
          <center>
            <v-img src="@/assets/icon.png" id="image"></v-img>
          </center>
          <form id="form">
            <v-container>
              <v-text-field
                v-model="user.username"
                :rules="[rules.required]"
                label="Username"
              ></v-text-field>
              <v-text-field
                v-model="user.password"
                :append-icon="show1 ? 'fas fa-eye' : 'fas fa-eye-slash'"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Password"
                counter
                @click:append="show1 = !show1"
              ></v-text-field>
              <v-btn class="mr-4" @click="login" :disabled="!validinput" color="green">submit</v-btn>
              <v-btn @click="clear">clear</v-btn>
            </v-container>
          </form>
          <br />
        </v-container>
      </v-card>
    </v-flex>
  </div>
</template>
<style>
h1,
h2 {
  font-weight: normal;
  color: teal;
}

.v-content__wrap {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  max-width: 100%;
  position: relative;
  background-image: url("../assets/greengrass.jpeg");
  background-size: cover;
}
.v-application .text-center {
  text-align: center !important;
  font-size: 80px;
  color: white;
}
.card {
  margin-top: 8%;
  margin-bottom: auto;
}
#image {
  width: 60%;
  height: 60%;
}
</style>
<script>
import axios from "axios";
export default {
  data() {
    return {
      show1: false,
      password: "Password",
      user: {
        username: "",
        password: ""
      },
      rules: {
        required: value => !!value || "Required.",
        min: value => value.length >= 8 || "Min 8 characters",
        password: value => {
          const pattern = /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
          //   valid = true;
          return (
            pattern.test(value) ||
            "Password Must contain 1 capital, special characters, and more than 8 letters"
          );
        }
      }
    };
  },
  methods: {
    login() {
      // this.$store.dispatch('login', {username : this.user.username, password : this.user.password})
      axios.post("http://localhost:5000/admin", {
        data: { username: this.user.username, password: this.user.password }
      })
        .then(response => {
          localStorage.setItem("token", response.data.token);
          sessionStorage.setItem("username", response.data.user.username)

          if (localStorage.getItem("token") != null) {
          this.$router.push("/admin/dashboard")
            this.$emit("loggedIn");
          }
        })
        .catch(err => {
          alert("error");
        })
    },
    clear() {
      this.$v.$reset();
      this.username = "";
      this.password = "";
    }
  },
  computed: {
    validinput() {
      //   if () {
      let value = /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
      return this.user.username && value.test(this.user.password);
      //   }
    }
  }
};
</script>

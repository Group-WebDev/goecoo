<template>
  <div id="all">
    <v-text-field
      v-model="search"
      append-icon="search"
      label="Search Event Name"
      single-line
      hide-details
      class="searchbar"
    ></v-text-field>
    <v-responsive max-height="200"></v-responsive>
    <!-- <CardsOfEvents/> -->
    <div v-for="(event, index) in filteredList" :key="index" v-bind:update="false" v-show="!update">
      <div>
        <div style="margin-top:2%">
          <v-card class="card">
            <v-container class="container">
              <h4>{{event.dateCreated}}</h4>
              <div id="title">
                <h1>{{event.title}}</h1>
                <img v-bind:src="'http://localhost:5000/static/images/' + event.image">
                <h4>Date : {{event.dateEvent}}</h4>
                <h4>Location : {{event.address}}</h4>
                <h4>Posted by : {{event.createdBy}}</h4>
              </div>
              <hr>
              <h5>{{event.description}}</h5>
              <hr>
              <hr>
              <div id="buttons">
                <v-btn
                  @click.prevent="update = true"
                  @click="editEvent(event._id, event.title, event.dateEvent,event.description,event.address,event.image)"
                  class="mx-2"
                  fab
                  dark
                  large
                  color="cyan"
                  v-show="cid != event._id"
                >
                  <v-icon dark>mdi-pencil</v-icon>
                </v-btn>
                <v-btn @click="cid = event._id" v-show="cid != event._id " :value="event._id" class="mx-2" fab dark large color="red">
                  <v-icon dark>mdi-delete</v-icon>
                </v-btn>
                <!-- delete -->
                <div v-if="cid == event._id">
                  <v-btn
                    class="ma-2"
                    tile
                    :value="event._id"
                    @click="deleteEvent(event._id),del=false"
                    color="primary"
                  >
                    <v-icon left>mdi-delete</v-icon>DELETE
                  </v-btn>
                  <v-btn class="ma-2" tile color="red" dark @click="cid = ''">CANCEL</v-btn>
                </div>
              </div>
            </v-container>
          </v-card>
        </div>
      </div>
    </div>

    <!-- update -->
    <div v-show="update">
        <v-card ref="form">
          <v-card-text>
            <template>
              <v-card class="mx-auto" max-width="400">
                <!-- <Imageupload /> -->
                <v-img
                  class="white--text align-end"
                  height="300px"
                  :src="img"
                  @click="$refs.file.click()"
                ></v-img>
                <!-- hidden file para sa file handling -->
                <input
                  type="file"
                  id="file"
                  ref="file"
                  style="display: none"
                  @change="onFileChange()"
                >
              </v-card>
            </template>
            <v-text-field
              ref="name"
              v-model="title"
              prepend-icon="fas fa-file"
              label="Title"
              placeholder="Title for the event"
              required
            ></v-text-field>
            <!-- <v-col cols="12" sm="6" md="4"> -->
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="date"
                  label="Pick a Date"
                  prepend-icon="fas fa-calendar-alt"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="this.$router.push('/admin/dashboard')">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
              </v-date-picker>
            </v-menu>
            <v-textarea
              name="input-7-1"
              filled
              placeholder="Description of the event"
              prepend-icon="fas fa-file-alt"
              label="Description"
              v-model="description"
              auto-grow
            ></v-textarea>
            <v-text-field
              v-model="address"
              prepend-icon="fas fa-map-marker-alt"
              label="Venue"
              placeholder="Venue"
              required
            ></v-text-field>
          </v-card-text>
          <v-divider class="mt-12"></v-divider>

          <v-card-actions>
            <v-btn text @click="update = false">Cancel</v-btn>
            <v-spacer></v-spacer>
            <v-slide-x-reverse-transition></v-slide-x-reverse-transition>
            <v-btn @click.prevent="update = false" color="primary" @click="submit" text>Update</v-btn>
          </v-card-actions>
        </v-card>
    </div>
  </div>
</template>
<style scoped>
img {
  height: 400px;
  width: 700px;
}
h1 {
  color: teal;
}
</style>


<script>
import axios from "axios";
// import Sidebar from "../components/Sidebar.vue";
import Imageupload from "../components/imageupload.vue";
// import CardsOfEvents from "../components/CardsOfEvents.vue"
export default {
  name: "Dashboard",
  components: {
    // CardsOfEvents
  },
  data() {
    return {
      search: "",
      events: [],
      update: false,
      title: "",
      del: false,
      description: "",
      date: "",
      address: "",
      menu: "",
      id: "",
      file: "",
      image: "",
      cid:"",
      img: require("@/assets/logopictures.jpeg")
    };
  },
  computed: {
    filteredList() {
      return this.events.filter(event => {
        return event.title.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  mounted() {
    axios.get("http://localhost:5000/event/retrieveAll").then(res => {
      this.events = res.data;
    });
  },
  methods: {
    deleteEvent(id) {
      this.cid = ""
      axios.delete("http://localhost:5000/event/delete" + id).then(res => {
        axios.get("http://localhost:5000/event/retrieveAll").then(res => {
          this.events = res.data;
        });
      });
    },
    editEvent(id, title, dateEvent, description, address, image) {
      (this.id = id),
        (this.title = title),
        (this.date = dateEvent),
        (this.description = description),
        (this.address = address),
        (this.image = image);
      console.log(image);
      // http://localhost:5000/static/images/
      this.img = "http://localhost:5000/static/images/" + image;
    },
    submit() {
      var data = {
        title: this.title,
        dateEvent: this.date,
        description: this.description,
        address: this.address,
        filename: this.file
      };
      console.log(this.file);
      let formData = new FormData();
      formData.append("image", this.file);
      formData.append("title", this.title);
      formData.append("dateEvent", this.date);
      formData.append("description", this.description);
      formData.append("address", this.address);
      console.log(formData);

      axios
        .put("http://localhost:5000/event/update" + this.id, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(res => {
          axios.get("http://localhost:5000/event/retrieveAll").then(res => {
            this.events = res.data;
          });
        });
    },
    onFileChange() {
      this.file = this.$refs.file.files[0];
      this.img = URL.createObjectURL(this.file);
    }
  }
};
</script>
<style scoped>
.container {
  background-image: linear-gradient(
    to right top,
    #051937,
    #004d7a,
    #008793,
    #00bf72,
    #a8eb12
  );
}
.searchbar {
  width: 40vh;
}
img {
    height: 30%;
    width: 60%;
}
#all {
  margin-top: 8%;
}
table #tbody {
  border-style: groove;
}
#title {
  text-align: center;
}
#buttons {
  text-align: right;
  margin-top: 1%;
}
h4 {
    color: white
}
h5 {
    color: white
}
h1 {
    color: white
}
.title{
  color:teal;
  font-size: 50px;
}
</style>
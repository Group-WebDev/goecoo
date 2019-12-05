<template>
<div>
        <v-text-field v-model="search" append-icon="search" label="Search Event Name" single-line hide-details class="searchbar"></v-text-field>
        <div v-for="(event, index) in filteredList" :key="index">
            <div>
                <div style="margin-top:2%">
                    <v-card class="card">
                        <v-container class="container">
                            <h4>{{event.dateCreated}}</h4>
                            <v-divider />
                            <div id="title">
                                <h1>{{event.title}}</h1>
                                <div>
                                    <img v-bind:src="'http://localhost:5000/static/images/' + event.image" /></div>
                                <h4>Date : {{event.dateEvent}}</h4>
                                <h4>Location : {{event.address}}</h4>
                                <h4>Posted by : {{event.createdBy}}</h4>
                            </div>
                            <hr>
                            <h5>{{event.description}}</h5>
                            <hr>
                            <hr>
                        </v-container>
                    </v-card>
                </div>
            </div>
        </div>
</div>
</template>

<script>
import axios from "axios";
// import CardsOfEvents from "../components/CardsOfEvents.vue"
export default {
    components: {
        // CardsOfEvents
    },
    data() {
        return {
            search: "",
            events: [],
            title: "",
            description: "",
            date: "",
            address: "",
            menu: '',
            id: ''
        };
    },
    mounted() {
        // this.scroll(this.event);
        axios.get("http://localhost:5000/event/retrieveAll").then(res => {
                        this.events = res.data;
                    });
    },
    computed: {
        filteredList() {
            return this.events.filter(event => {
                return event.title.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },
    methods: {
        // scroll(event) {
        //     window.onscroll = () => {
        //         let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        //         if (bottomOfWindow) {
        //             axios.get("http://localhost:5000/event/retrieveAll").then(res => {
        //                 this.events = res.data;
        //             });
        //         }
        //     };
        // },
        submit() {
            var data = {
                title: this.title,
                dateEvent: this.date,
                description: this.description,
                address: this.address
            };
            console.log(data)
            axios
                .put("http://localhost:5000/event/update" + this.id, {
                    data
                })
                .then(() => {
                    axios.get("http://localhost:5000/event/retrieveAll").then(res => {
                        this.events = res.data;
                    });
                });
        }
    }
};
</script>

<style scoped>
#title {
    text-align: center;
}
#buttons {
    text-align: right;
}
img {
    height: 30%;
    width: 60%;
}
.container {
    background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
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
.searchbar {
    width: 40vh;
}
#appbar{
    background-color: transparent;
}
</style>
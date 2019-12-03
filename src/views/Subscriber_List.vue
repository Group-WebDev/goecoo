<template>
  <div class="about">
  <v-card class="tableListOfSubcribers">
        <v-card-title>
            <h1>The List OF Subscribers</h1>
            <v-spacer></v-spacer>
            <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="subscribers" :items-per-page="10" :search="search" class="elevation-1"></v-data-table>
    </v-card>
  </div>
</template>
<style scoped>
.tableListOfSubcribers{
  margin-top :60px
}
</style>
<script>
import axios from 'axios'
export default {
 data() {
        return {
            search: '',
            headers: [{
                    text: 'First Name',
                    align: 'left',
                    sortable: false,
                    value: 'firstname',
                },
                {
                    text: 'Last Name',
                    value: 'lastname'
                },
                {
                    text: 'Middle Name',
                    value: 'middlename'
                },
                {
                    text: 'Email',
                    value: 'email'
                },
                {
                    text: 'Address',
                    value: 'address'
                },
            ],
            subscribers: []
        }
    },
    mounted() {
        axios
            .get('http://localhost:5000/subscribers/retrieveAll')
            .then(response => this.subscribers = response.data)
    }
};
</script>
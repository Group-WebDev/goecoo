import axios from 'axios';
const BASE_URL = 'http://localhost:5000';

export function Login() {
        return axios.get(`${BASE_URL}/admin`)
                .then(response => response.data);
}
export function deleteStudent(id){
        return axios.post(`${BASE_URL}/api/student/delete/${id}`)
                .then(response => response.data)
                .catch(err => Promise.reject(err.message));
}
export function createUser(data) {
        return axios.post(`${BASE_URL}/subscribers/create`, 
        { firstname:data.firstname,lastname:data.lastname,middlename:data.middlename, email:data.email,address:data.address }
        )      .then(response => {
                        alert(response)
                        return response.data
                })
                .catch(err => Promise.reject(err.message));
}
export function updateStudent(data, id) {
        return axios.post(`${BASE_URL}/api/student/update/${id}`, { data })
                .then(response => {
                        return response.data
                })
                .catch(err => Promise.reject(err.message));
}
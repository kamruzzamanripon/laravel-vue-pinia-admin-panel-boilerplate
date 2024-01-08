import { createPinia } from 'pinia';
import { createApp } from "vue";
import './bootstrap';


//Component import
import AppComponent from './App.vue';
import router from "./routes/index.js";

//define 
const app = createApp({});
const pinia = createPinia()

//define as component
app.component("app-component", AppComponent);

//use package 
app.use(pinia)
app.use(router)


app.mount("#app");
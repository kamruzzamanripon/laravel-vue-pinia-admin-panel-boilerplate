import { defineStore } from 'pinia';


export const basicStore = defineStore('basicStore', {
    state: () => ({
        showSideBar:false,
        loginUserInfo: JSON.parse( localStorage.getItem( "userInfo" ) ) || {},
        userAccountInfo:{},
        testData:"Syed Kamruzzaman"
    }),
    getters:{
       
    },
    actions: {
       
             


    },
});

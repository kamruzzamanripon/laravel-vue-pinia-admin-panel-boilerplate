import { createRouter, createWebHistory } from "vue-router";
import AuthLayout from "../components/layouts/AuthLayout.vue";
import DefaultLayout from "../components/layouts/DefaultLayout.vue";
import Page404 from "../views/PageNotFound.vue";
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register.vue";
import About from "../views/home/About.vue";
import Home from "../views/home/Home.vue";







const routes = [
    // { path: '/about', name: "About", component: About },
    // { path: '/', name: "Home", component: Home },
    {
        path: "/",
        redirect: "/home",
        component: DefaultLayout,
        children: [
           { path: "/home", name: "Home", component: Home },
           { path: '/about', name: "About", component: About },
        ],
    },
    {
        path: "/auth",
        redirect: "/login",
        name: "Auth",
        component: AuthLayout,
        children: [
            { path: "/login", name: "Login", component: Login },
            { path: "/register", name: "Register", component: Register },
            // {
            //     path: "/verify-email/:hash",
            //     name: "VerifyEmail",
            //     component: VerifyEmail,
            // },
            // {
            //     path: "/verify-otp/:hash",
            //     name: "VerifyOtp",
            //     component: VerifyOtp,
            // },
            // {
            //     path: "/forgot-password",
            //     name: "ForgotPassword",
            //     component: ForgotPassword,
            // },
            // {
            //     path: "/password-reset/:token",
            //     name: "PasswordResetForm",
            //     component: PasswordResetForm,
            // },
        ],
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: Page404,
    },
];

const router = createRouter( {
    history: createWebHistory(),
    routes,
} );

export default router;

<template>
    <!-- desktop sidebar  -->
    <div
        class="bg-gray-300 text-light-grey h-screen hidden w-full md:block md:fixed md:top-0 md:bottom-0 md:z-10 md:pt-[68px]"
        :class="[showSideBar ? 'md:w-64' : 'md:w-16']"
    >
        <ChevronLeftIcon
            class="relative -right-48 ml-5 my-2 w-8 h-8 stroke-2 text-light-grey bg-dark-blue cursor-pointer"
            v-if="showSideBar"
            @click="toggleSidebar"
        />
        <ChevronRightIcon
            class="ml-5 my-2 w-8 h-8 stroke-2 text-light-grey bg-dark-blue cursor-pointer"
            v-if="!showSideBar"
            @click="toggleSidebar"
        />

        <nav class="relative">
            
            <SidebarItem
                to="Home"
                class="group relative"
                :class="{
                    ['router-link-active router-link-exact-active']:
                        $route.path.match('home') !== null,
                }"
            >
                <CompanyIcon class="w-10 h-10 fill-white" />
                <span class="group-hover:opacity-100 transition-opacity bg-gray-800 px-3 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
                v-if="!showSideBar"
                >home</span>
                <span
                    class="sidebar-item text-white"
                    :class="[showSideBar ? 'block' : 'hidden']"
                    >home</span
                >
            </SidebarItem>

            
            <SidebarItem
                to="About"
                class="group relative"
                :class="{
                    ['router-link-active router-link-exact-active']:
                        $route.path.match('about') !== null,
                }"
            >
                <OrdersIcon class="w-6 h-10 fill-white ml-2" />
                <span class="group-hover:opacity-100 transition-opacity bg-gray-800 px-3 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
                v-if="!showSideBar"
                >About</span>
                <span
                    class="sidebar-item ml-2 text-white"
                    :class="[showSideBar ? 'block' : 'hidden']"
                    >About</span
                >
            </SidebarItem>
            
        </nav>
    </div>
    <!-- /desktop sidebar -->


    <!-- mobile side bar -->
    <MobileSidebar />
    <!-- /mobile side bar -->
</template>

<script setup>
import ChevronLeftIcon from "../icons/ChevronLeftIcon.vue";
import ChevronRightIcon from "../icons/ChevronRightIcon.vue";
import CompanyIcon from "../icons/CompnayIcon.vue";
import OrdersIcon from "../icons/OrdersIcon.vue";
import SidebarItem from "./SidebarItem.vue";

import { computed, ref } from 'vue';
import { basicStore } from '../../store/basicStore';
import MobileSidebar from "./MobileSidebar.vue";

const basicStoreInfo = basicStore();
const show = ref(true)

const toggleSidebar =()=>{
    basicStoreInfo.showSideBar = !basicStoreInfo.showSideBar;
}

const showSideBar = computed(() => basicStoreInfo.showSideBar)

</script>

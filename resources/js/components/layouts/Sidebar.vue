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
                :class="{
                    ['router-link-active router-link-exact-active']:
                        $route.path.match('home') !== null,
                }"
            >
                <CompanyIcon class="w-10 h-10 fill-white" />
                <span
                    class="sidebar-item"
                    :class="[showSideBar ? 'block' : 'hidden']"
                    >home</span
                >
            </SidebarItem>
            <SidebarItem
                to="About"
                :class="{
                    ['router-link-active router-link-exact-active']:
                        $route.path.match('about') !== null,
                }"
            >
                <OrdersIcon class="w-6 h-10 fill-white ml-2" />
                <span
                    class="sidebar-item ml-2"
                    :class="[showSideBar ? 'block' : 'hidden']"
                    >About</span
                >
            </SidebarItem>
            
        </nav>
    </div>
    <!-- /desktop sidebar -->

    <!-- mobile side bar -->
    <div
        class="fixed bg-dark-blue h-screen w-full z-10 md:hidden -top-[900px] transition-all duration-500 ease-in-out"
        :class="{ '-top-[-68px] sm:70px block': !showSideBar }"
    >
        <nav>
            <SidebarItem
                to="Home"
                :class="{
                    ['router-link-active router-link-exact-active']:
                        $route.path.match('home') !== null,
                }"
                @click="toggleSidebar"
            >
                <CompanyIcon class="w-10 h-10 fill-white text-light-grey" />
                <span class="sidebar-item">home</span>
            </SidebarItem>
            <SidebarItem to="About" @click="toggleSidebar">
                <PortfolioIcon
                    class="w-6 h-10 fill-white ml-2 text-light-grey"
                />
                <span class="sidebar-item ml-2">Portfolio</span>
            </SidebarItem>
            
        </nav>
    </div>
    <!-- /mobile side bar -->
</template>

<script setup>
import ChevronLeftIcon from "../icons/ChevronLeftIcon.vue";
import ChevronRightIcon from "../icons/ChevronRightIcon.vue";
import CompanyIcon from "../icons/CompnayIcon.vue";
import OrdersIcon from "../icons/OrdersIcon.vue";
import PortfolioIcon from "../icons/PortfolioIcon.vue";
import SidebarItem from "./SidebarItem.vue";

import { computed, ref } from 'vue';
import { basicStore } from '../../store/basicStore';

const basicStoreInfo = basicStore();
const show = ref(true)

const toggleSidebar =()=>{
    basicStoreInfo.showSideBar = !basicStoreInfo.showSideBar;
}

const showSideBar = computed(() => basicStoreInfo.showSideBar)

</script>

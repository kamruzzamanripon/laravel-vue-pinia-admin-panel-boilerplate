<template>
    <!-- mobile side bar -->
    <div
        class="fixed bg-gray-600 h-screen w-full z-10 md:hidden -top-[900px] transition-all duration-500 ease-in-out"
        :class="[!showSideBar ? '-top-[0px] sm:70px block' : '']"
    >
        <nav class="mt-[80px]">
            <SidebarItem
                to="Home"
                :class="{
                    ['router-link-active router-link-exact-active']:
                        $route.path.match('home') !== null,
                }"
                @click="toggleSidebar"
            >
                <CompanyIcon class="w-10 h-10 fill-white text-light-grey" />
                <span class="sidebar-item text-gray-100">home </span>
            </SidebarItem>

            <SidebarItem
                to="About"
                :class="{
                    ['router-link-active router-link-exact-active']:
                        $route.path.match('about') !== null,
                }"
                @click="toggleSidebar"
            >
                <CompanyIcon class="w-10 h-10 fill-white text-light-grey" />
                <span class="sidebar-item text-gray-100">About </span>
            </SidebarItem>
            
            
        </nav>
    </div>
    <!-- /mobile side bar -->
</template>

<script setup>
import CompanyIcon from "../icons/CompnayIcon.vue";
import SidebarItem from "./SidebarItem.vue";
import { computed, ref } from 'vue';
import { basicStore } from '../../store/basicStore';

const basicStoreInfo = basicStore();


const toggleSidebar =()=>{
    basicStoreInfo.showSideBar = !basicStoreInfo.showSideBar;
}

const showSideBar = computed(() => basicStoreInfo.showSideBar)

</script>

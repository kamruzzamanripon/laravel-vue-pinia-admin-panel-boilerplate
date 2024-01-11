<template>
    <!-- mobile side bar -->
    <div
        class="fixed bg-gray-600 h-screen w-full z-10 md:hidden  transition-all duration-500 ease-in-out"
        :class="[showSideBar ? '-top-[1px] sm:70px block' : '-top-[900px]']"
    >
        <nav class="mt-[80px]">
            <SidebarItem
                to="Dashboard"
                :class="{
                    ['router-link-active router-link-exact-active']:
                        $route.path.match('dashboard') !== null,
                }"
                @click="toggleSidebar"
            >
                <CompanyIcon class="w-10 h-10 fill-white text-light-grey" />
                <span class="sidebar-item text-gray-100">Dashboard </span>
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
import { computed } from 'vue';
import { basicStore } from '../../store/basicStore';
import CompanyIcon from "../icons/CompnayIcon.vue";
import SidebarItem from "./SidebarItem.vue";

const basicStoreInfo = basicStore();


const toggleSidebar =()=>{
    basicStoreInfo.showSideBar = !basicStoreInfo.showSideBar;
}

const showSideBar = computed(() => basicStoreInfo.showSideBar)

</script>

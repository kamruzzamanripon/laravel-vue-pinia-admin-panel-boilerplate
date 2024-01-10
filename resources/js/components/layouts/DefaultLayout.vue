<template>
    <div class="relative min-h-screen">
        <Sidebar />
        <!-- navbar -->
        <div
            class="bg-gray-700 py-4 px-4 text-light-grey flex justify-between items-center fixed left-0 right-0 z-10"
        >
            <ToggleIcon
                class="my-1 w-6 h-6 sm:w-7 sm:h-7 text-gray-100 bg-dark-blue cursor-pointer md:hidden"
                @click="toggleSidebar"
            />
            <div class="cursor-pointer">
                <router-link :to="{ name: 'Home' }">
                    <img
                        src="../../assets/coffeeLogo.png"
                        class="h-8"
                    />
                </router-link>
            </div>
            <div class="flex gap-4">
                
                <div class="flex items-center gap-4">
                    <h1
                        class="cursor-pointer font-renner_medium text-white"
                        title="Representative"
                    >
                        Hi, Kamruzzaman 
                    </h1>
                </div>
                <div class="dropdown inline-block relative">
                    <UserIcon class="w-9 h-9 cursor-pointer fill-white" />
                    <ul
                        class="dropdown-menu min-w-max absolute right-0 hidden text-gray-700 pt-5"
                    >
                        <li
                            class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer"
                            @click="logout"
                        >
                            logout
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- navbar -->
        <!-- main section -->
        <section
            class="relative pt-[70px] md:pl-[256px]"
            :class="[showSideBar ? '' : 'md:pl-[66px]']"
        >
            <router-view></router-view>
        </section>
        <!-- /main section -->

        <!-- Footer Section -->
        <div class="bg-gray-700 py-4 px-4 text-light-grey flex justify-center items-center fixed left-0 right-0 bottom-0 z-10">
            <p class="text-white mx-auto">copyright@syedKamruzzamn</p>
        </div>
        <!-- End Footer Section -->
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { basicStore } from '../../store/basicStore';
import ToggleIcon from "../icons/ToggleIcon.vue";
import UserIcon from "../icons/UserIcon.vue";
import Sidebar from "./Sidebar.vue";

const basicStoreInfo = basicStore();

const toggleSidebar =()=>{
    basicStoreInfo.showSideBar = !basicStoreInfo.showSideBar;
}
const logout =()=>{
    alert("hello Ripon");
}

const showSideBar = computed(() => basicStoreInfo.showSideBar)

</script>

<style scoped>
.dropdown:hover .dropdown-menu {
    display: block;
}

</style>

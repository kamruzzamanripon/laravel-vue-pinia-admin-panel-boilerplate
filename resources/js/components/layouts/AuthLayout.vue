<template>
    <section class="flex flex-col h-screen">
        <!-- navbar -->
        <nav class="w-full py-4 bg-blue-600 px-3">
           <img src="../../assets/coffeeLogo.png" alt="coffeeLogo" class="h-9">
        </nav>

        <router-view />

        <!-- footer -->
        <footer class="w-full py-3 bg-blue-800 text-center text-white">This is footer @syed kamruzzaman</footer>
    </section>
</template>



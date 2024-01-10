<template>
    <section class="flex flex-col h-screen">
        <!-- navbar -->
        <nav class="w-full py-4 bg-blue-600 px-3 min-h-[10%] flex justify-center">
           <img src="../../assets/coffeeLogo.png" alt="coffeeLogo" class="h-11">
        </nav>

        <router-view />

        <!-- footer -->
        <footer class="w-full py-3 bg-blue-800 text-center text-white min-h-[5%]">
            This is coypright@syed kamruzzaman, just fun 😂
        </footer>
        
    </section>
</template>



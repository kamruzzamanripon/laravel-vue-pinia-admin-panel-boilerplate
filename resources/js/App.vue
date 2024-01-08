<template>
    <router-view />
</template>

<script setup>
import { basicStore } from './store/basicStore';

const basicStoreApi = basicStore();
</script>
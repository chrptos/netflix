<script setup lang="ts">

const { status } = useAuth();
</script>

<template>
    <h1>Netflix Clone</h1>
    <NuxtLink to="/auth">Register/Login</NuxtLink>
    <h2>Status: {{ status }}</h2>
</template>
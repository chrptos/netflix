<script setup lang="ts">
import axios from 'axios';

definePageMeta({
  middleware: 'auth',
})

const currentUser = ref();

const { signOut, status, getSession } = useAuth();

const getUser = async () => {
    const session = await getSession();
    const email = session?.user?.email;
    console.log('---', email);
    try {
        const result = await axios.post('/api/user', {
            email,
        });
        currentUser.value = result.data.currentUser;
        console.log(currentUser);
    } catch (error) {
        console.log(error);
    }
}

onMounted(() => {
    getUser();
});

</script>

<template>
    <h1>Netflix Clone</h1>
    <h1>CurrentUser: {{ currentUser.name }}</h1>
    <NuxtLink to="/auth">Register/Login</NuxtLink>
    <h2>Status: {{ status }}</h2>
    <button @click="signOut({ callbackUrl: '/auth' })" class="h-10 w-full bg-white">Logout</button>
</template>
<script setup lang="ts">
import axios from 'axios';

const name = ref<string>('');
const email = ref<string>('');
const password = ref<string>('');
const variant = ref<string>('login');

const toggleVariant = () => {
    variant.value = variant.value === 'login' ? 'register' : 'login';
};

const register = async () => {
    try {
        await axios.post('/api/register', {
            email: email.value,
            name: name.value,
            password: password.value,
        });
    } catch (error) {
        console.log(error);
    }
};

</script>

<template>
    <div class="relative h-screen w-screen bg-[url('@/assets/images/hero.jpeg')] bg-no-repeat bg-center bg-fixed bg-cover">
        <div class="bg-black/50 h-full w-full">
            <nav class="px-12 py-5">
                <img src="@/assets/images/logo.png" alt="logo" class="h-12" />
            </nav>
            <div class="flex justify-center">
                <div class="bg-black/70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                    <h2 class="text-white text-4xl mb-8 font-semibold">
                        {{ variant === 'login' ? 'Sign in' : 'Register' }}
                    </h2>
                    <div class="flex flex-col gap-4">
                        <Input v-if="variant === 'register'" v-model="name" label="name" id="name" type="name"/>
                        <Input v-model="email" label="email" id="email" type="email" />
                        <Input v-model="password" label="password" id="password" type="password"/>
                    </div>
                    <button @click="register()" class="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                        {{ variant === 'login' ? 'Login' : 'Sign up' }}
                    </button>
                    <p class="text-neutral-500 mt-12">
                        {{ variant === 'login' ? 'First time using Netflix?' : 'Already have an account?' }}
                        <span @click="toggleVariant" class="text-white ml-1 hover:underline cursor-pointer">
                            {{ variant === 'login' ? 'Create an account' : 'Login' }}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

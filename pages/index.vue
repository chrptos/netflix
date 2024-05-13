<script setup lang="ts">

const data = ref(null);
const statusCode = ref(null);

// const { data } = await useFetch('/api/hello');

async function postData() {
    const response = await $fetch('/api/register', {
        method: 'POST',
        body: { test: 123 },
    });
    data.value = response.body;
    statusCode.value = response.status;
}

onMounted(() => {
    postData()
})

</script>

<template>
    <h1>Status Code: {{ statusCode }}</h1>
    <pre>{{ data }}</pre>
</template>
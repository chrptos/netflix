<script setup lang="ts">

const { getSession } = useAuth();

const name = ref<string>('Guest');

onMounted(async () => {
    const session = await getSession();
    name.value = session?.user?.name || 'Guest'; // 名前がない場合は'Guest'を表示
});

</script>

<template>
    <div class="bg-black flex items-center h-screen justify-center">
        <div class="flex flex-col">
            <h1 class="text-3xl md:text-6xl text-white text-center">Who is watching?</h1>
            <div class="flex items-center justify-center gap-8 mt-10">
                <div @click="navigateTo('/')">
                    <div class="group flex-row w-44 mx-auto">
                        <div class="
                            w-44
                            h-44
                            rounded-md
                            flex
                            items-center
                            justify-center
                            border-2
                            border-transparent
                            group-hover:cursor-pointer
                            group-hover:border-white
                            overflow-hidden
                        ">
                            <img src="/assets/images/default-blue.png" alt="Profile">
                        </div>

                        <div class="
                            mt-4
                            text-gray-400
                            text-2xl
                            text-center
                            group-hover:text-white
                        ">
                            {{ name }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
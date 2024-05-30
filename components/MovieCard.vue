<script setup lang="ts">

import { isEmpty } from 'lodash';

interface Movie {
    id: string;
    title: string;
    description: string;
    videoUrl: string;
    thumbnailUrl: string;
    genre: string;
    duration: string;
}

interface Props {
    data: Movie;
    title: string;
}

withDefaults(defineProps<Props>(), {
    data: () => ({
        id: '',
        title: '',
        description: '',
        videoUrl: '',
        thumbnailUrl: '',
        genre: '',
        duration: '',
    }),
    title: '',
});

// const { data, error, pending } = await useFetch('/api/movies/');

</script>

<template>
    <div class="group bg-zinc-900 col-span relative h-[12vw]">
        <img class="
                cursor-pointer
                object-cover
                transition
                duration
                shadow-xl
                rounded-md
                group-hover:opacity-90
                sm:group-hover:opacity-0
                delay-300
                w-full
                h-[12vw]
            " :src="data.thumbnailUrl" alt="thumbnail" />
        <div class="
            opacity-0
            absolute
            top-0
            transition
            duration-200
            z-10
            invisible
            sm:visible
            delay-300
            w-full
            scale-0
            group-hover:scale-110
            group-hover:-translate-y-[6vw]
            group-hover:translate-x-[2vw]
            group-hover:opacity-100

        ">
            <img class="
                    cursor-pointer
                    object-cover
                    transition
                    duration
                    shadow-xl
                    rounded-t-md
                    w-full
                    h-[12vw]
                " :src="data.thumbnailUrl" alt="thumbnail">
            <div class="
                    z-10
                    bg-zinc-800
                    p-2
                    lg:p-4
                    absolute
                    w-full
                    transition
                    shadow-md
                    rounded-b-md
                ">
                <div class="
                        flex
                        flex-row
                        items-center
                        gap-3 
                    ">
                    <div class="
                        cursor-pointer
                        w-6
                        h-6
                        lg:w-10
                        lg:h-10
                        bg-white
                        rounded-full
                        flex
                        justify-center
                        items-center
                        transition
                        hover:bg-neutral-300
                    ">
                        <Icon name="mdi:play" size="30" color="black" />
                    </div>
                </div>

                <p class="text-green-400 font-semibold mt-4">
                    New <span class="text-white">2023</span>
                </p>

                <div class="flex flex-row mt-4 gap-2 items-center">
                    <p class="text-white text-[10px] lg:text-sm">{{ data.duration }}</p>
                </div>

                <div class="flex flex-row mt-4 gap-2 items-center">
                    <p class="text-white text-[10px] lg:text-sm">{{ data.genre }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
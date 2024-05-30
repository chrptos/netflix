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
    data: Movie[];
    title: string;
}

withDefaults(defineProps<Props>(), {
  data: () => [],
  title: '',
});

// const { data, error, pending } = await useFetch('/api/movies/');

</script>

<template>
    <div class="px-4 md:px-12 mt-4 space-y-8">
        <div>
            <p class="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
                {{ title }}
            </p>
            <div class="grid grid-cols-4 gap-2">
                <MovieCard v-for="movie in data" :key="movie.id" :data="movie" />
            </div>
        </div>
    </div>
</template>
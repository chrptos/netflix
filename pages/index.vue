<script setup lang="ts">
// definePageMeta({ middleware: 'auth' })

interface Movie {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  genre: string;
  duration: string;
}

const { data, error, pending } = await useFetch<Movie[]>('/api/movies/');

const movies = ref<Movie[]>(data.value || []);

</script>

<template>
    <div>
        <Navbar />
        <Billboard />
        <div class="pb-40">
            <MovieList title="Trending Now" :data="data" />
        </div>
    </div>
</template>
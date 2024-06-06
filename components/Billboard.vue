<script setup lang="ts">

interface Props {
  visible?: boolean;
}

withDefaults(defineProps<Props>(), {
  visible: false,
});

const movieId = ref(0);

// TODO: videoファイルのcssについて
const { data, error, pending } = await useFetch('/api/random/');

movieId.value = 1;

</script>

<template>
    <div class="relative h-[56.25vw]">
      <video autoplay muted loop class="w-full h-[56.25vw] object-cover brightness-[60%]">
        <source :src="data?.videoUrl" type="video/mp4" />
      </video>
    </div>
    <div class="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
      <p class="
        text-white
        text-1xl
        md:text-5xl
        h-full
        w-[50%]
        lg:text-6xl
        font-bold
        drop-shadow-xl
        ">
        {{ data?.title }}
      </p>
      <p class="
        text-white
        text-[8px]
        md:text-lg
        mt-3
        md:mt-8
        w-[90%]
        md:w-[80%]
        lg:w-[50%]
        drop-shadow-xl
      ">
        {{ data?.description }}
      </p>
      <div class="
        flex flex-row items-center mt-3 md:mt-4 gap-3
      ">
        <PlayButton :movie-id="movieId" />
        <button class="
          bg-white
          text-white
          bg-opacity-30
          rounded-md
          py-1 md:py-2
          px-2 md:px-4
          w-auto
          text-xs lg:text-lg
          font-semibold
          flex
          flex-row
          items-center
          hover:bg-opacity-20
          transition
        ">
          <Icon class="mr-1" name="material-symbols:info-outline" size="30" />
          More Info
        </button>
      </div>
    </div>
</template>
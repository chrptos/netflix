<script setup lang="ts">

interface Props {
  visible?: boolean;
}

withDefaults(defineProps<Props>(), {
  visible: false,
});

const { data, error, pending } = await useFetch('/api/random/');

</script>

<template>
    <div class="relative h-[56.25vw]">
      <video autoplay muted loop class="w-full h-[56.25vw] object-cover brightness-[60%]">
        <source :src="data?.videoUrl" type="video/mp4" />
      </video>
    </div>
</template>
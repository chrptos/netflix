<script setup lang="ts">
interface Props {
  visible: boolean;
}

// Props with default value for 'type'
const props = withDefaults(defineProps<Props>(), {
  visible: false,
});

</script>

<template>
    <div v-if="visible" class="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
        <div class="flex flex-col gap-4">
          <div class="px-3 text-center text-white transition">
            Home
          </div>
          <div class="px-3 text-center text-white transition">
            Series
          </div>
          <div class="px-3 text-center text-white transition">
            Films
          </div>
          <div class="px-3 text-center text-white transition">
            New & Popular
          </div>
          <div class="px-3 text-center text-white transition">
            My List
          </div>
          <div class="px-3 text-center text-white transition">
            Browse by languages
          </div>
        </div>
    </div>
</template>
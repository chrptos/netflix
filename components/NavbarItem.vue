<script setup lang="ts">
interface Props {
  label: string;
}

// Props with default value for 'type'
const props = withDefaults(defineProps<Props>(), {
  label: 'Home'
});

</script>

<template>
    <div class="text-white cursor-pointer hover:text-gray-300 transition">
        {{ props.label }}
    </div>
</template>
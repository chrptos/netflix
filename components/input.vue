<script setup lang="ts">
// Props interface
interface Props {
  id: string;
  modelValue: string;
  label: string;
  type?: string;
}

// Props with default value for 'type'
const props = withDefaults(defineProps<Props>(), {
  type: 'text'
});

</script>

<template>
  <div class="relative">
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="
        block
        rounded-md
        px-6
        pt-6
        pb-1
        text-md
        w-full
        bg-neutral-700
        focus:outline-none
        focus:ring-0
        peer
      "
      placeholder=""
    />
    <label
      :for="id"
      class="
        absolute
        text-md
        text-zinc-400
        duration-150
        transform
        -translate-y-3
        scale-75
        top-4
        z-10
        origin-[0]
        left-6
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-3
      "
    >
      {{ label }}
    </label>
  </div>
</template>

<script setup lang="ts">

const { signOut } = useAuth();

interface Props {
  visible?: boolean;
}

withDefaults(defineProps<Props>(), {
  visible: false,
});

</script>

<template>
    <div v-if="visible" class="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
        <div class="flex flex-col gap-3">
          <div class="px-3 group/item flex flex-row gap-3 items-center w-full">
            <img class="w-8 rounded-md" src="/assets/images/default-blue.png" alt="">
            <p class="text-white text-sm group-hover/item:underline">
              User Name
            </p>
          </div>
          <hr class="bg-gray-600 border-0 h-px my-4"/>
          <div @click="signOut()" class="px-3 text-center text-white text-sm hover:underline">
            Sign Out
          </div>
        </div>
    </div>
</template>
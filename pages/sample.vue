<script setup lang="ts">

</script>

<template>
    <main class="container">
        <div class="wrapper">
            <div class="box box-center"></div>
        </div>
    </main>
</template>

<style>
.container {
  padding: 2rem;
}

.wrapper {
  border: 3px solid #bbb;
  height: 12rem;
  position: relative;
}

.box {
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  border-radius: 0.5rem;
  height: 4rem;
  width: 4rem;
}

.box-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

</style>
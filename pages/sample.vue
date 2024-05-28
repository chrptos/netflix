<script setup lang="ts">

</script>

<template>
<main class="container">
  <div class="wrapper wrapper-center-flex">
    <div class="box"></div>
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
}

.wrapper-center-flex {
  display: flex;
  align-items: center;
  justify-content: center;
}

.box {
  background-image: linear-gradient(to top, #f77062 0%, #fe5196 100%);
  border-radius: 0.5rem;
  height: 4rem;
  width: 4rem;
}

</style>
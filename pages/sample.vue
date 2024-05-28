<script setup lang="ts">

</script>

<template>

<header class="header">Header</header>
<div class="wrapper">
  <main class="main">Main</main>
  <aside class="aside">Aside</aside>
</div>
<footer class="footer">Footer</footer>

</template>

<style>

.header {
  background-color: #7effdb;
  padding: 1rem;
}

.wrapper {
  display: flex;
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
}

.main {
  background-color: #b693fe;
  padding: 2rem 1rem;
  flex: 1 1 auto;
}

.aside {
  background-color: #8c82fc;
  padding: 2rem 1rem;
  width: 160px;
}

.footer {
  background-color: #ff9de2;
  padding: 1rem;
}

/* max-widthが600pxまでしか表示できないscreenを持つデバイスは以下のcssが適用される */
@media screen and (max-width: 600px) {
  .wrapper {
    display: block;
  }
  
  .aside {
    width: 100%;
  }
}

</style>
<script setup lang="ts">

</script>

<template>

<div class="flex-basis">
  <p>flex-basis</p>
  <div class="flex-container">
    <div class="flex-item item1">item1</div>
    <div class="flex-item item2">item2</div>
    <div class="flex-item item3">item3</div>
  </div>
</div>

</template>

<style>
.flex-item {
    background-color: red;
    border: solid;
}

.flex-container {
	display: flex;
	width: 900px;
}
.item1 {
	flex: none;
	/*
	flex-grow: 0;
	flex-shrink: 0;
	flex-basis: auto;
	*/
}
.item2 {
	flex: 0 0 200px;
	/*
	flex-grow: 0;
	flex-shrink: 1;
	flex-basis: 200px;
	*/
}
.item3 {
	flex: 1 0 0px;
	/*
	flex-grow: 1;
	flex-shrink: 0;
	flex-basis: 0;
	*/
}

</style>
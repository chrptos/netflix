<script setup lang="ts">

</script>

<template>

<div class="container">
  <button class="button" data-modal-open="modal-1">
    OPEN
  </button>
  
  <div class="modal" id="modal-1">
    <div class="modal-overlay" data-modal-close>
      <div class="modal-container">
        <h2 class="modal-title">モーダルウィンドウ</h2>
        <div class="modal-content">
          <p>モーダルウィンドウ（英: modal window）は、コンピュータアプリケーションソフトウェアのユーザインタフェース設計において、何らかのウィンドウの子ウィンドウとして生成されるサブ要素のうち、ユーザーがそれに対して適切に応答しない限り、制御を親ウィンドウに戻さないもの。</p>
        </div>
        <div class="modal-footer">
          <button class="button" data-modal-close="modal-1">
            OK
          </button>
        </div>
      </div>
    </div>
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
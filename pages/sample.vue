<script setup lang="ts">

</script>

<template>
    <div class="container">
        <h2><code>display: block</code></h2>
        <div class="wrapper">
            <div class="box"></div>
        </div>

        <h2><code>display: inline</code></h2>
        <div class="wrapper-center">
            <span>テキスト</span>
        </div>

        <h2><code>display: inline-block</code></h2>
        <div class="wrapper-center">
            <button>ボタン</button>
        </div>
    </div>
</template>

<style>
.container {
    padding: 1rem;
}

.wrapper {
    background-color: #fdffab;
}

.box {
    background-image: linear-gradient(#4facfe, #00f2fe);
    height: 3rem;
    width: 3rem;
    /* この指定で左右に中央寄せする */
    margin: 0 auto;
}

.wrapper-center {
    background-color: #ffe2e2;
    /* この指定で左右に中央寄せする */
    text-align: center;
}
</style>
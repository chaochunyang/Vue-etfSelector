<script>
    import Themes from "./Themes.vue";
    // import Search from "./Search.vue";

    export default {
      name: "Panel",
      components: { Themes }
    }
</script>

<template>
  <div class="container" style="background-color: whitesmoke">
    <div class="container p-4">
      <h1 class="dispaly-5">ETF 主題熱搜</h1>
      <hr />
      <h5 class="text-danger">點擊主題後下方送出看報酬率!</h5>
      <Themes />
    </div>
    <div class="container p-4">
      <h1 class="dispaly-5">ETF 篩選面板 </h1>
      <hr/>
      <h5 class="text-danger">挑選完3組ETF後點選送出即可得到基本資訊比較！</h5>
      <slot />
    </div>
  </div>
</template>
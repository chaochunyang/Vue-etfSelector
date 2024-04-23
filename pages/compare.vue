<script>
import { ref } from "vue";
import Panel from "../components/Panel.vue";
import ETFTable from "../components/ETFTable.vue";
import Search from "../components/Search.vue";

export default {
  components: { Panel, Search, ETFTable },

  setup() {
    const stock1 = ref("");
    const stock2 = ref("");
    const stock3 = ref("");
    const themeData = ref({});
    const route = useRoute();

    const getValFromPanel = (etfIDs) => {
      themeData.value = etfIDs;
    };

    const handleStocksUpdate = (etfIDs) => {
      stock1.value = etfIDs.stock1;
      stock2.value = etfIDs.stock2;
      stock3.value = etfIDs.stock3;
    };

    onMounted(() => {
      // init comparing table
      stock1.value = "0056";
      stock2.value = "00713";
      stock3.value = "00878";

      // coming from index page theme if exists
      if (route.query.etf1) {
        stock1.value = route.query.etf1;
        stock2.value = route.query.etf2;
        stock3.value = route.query.etf3;
      }
    });

    return {
      stock1,
      stock2,
      stock3,
      handleStocksUpdate,
      getValFromPanel,
      themeData,
    };
  },
};
</script>

<template>
  <main>
    <div class="container mt-4">
      <Panel @valToPage="getValFromPanel">
        <Search @update-stocks="handleStocksUpdate" :themeData="themeData" />
      </Panel>
      <hr />

      <div class="container">
        <div class="row h-100 gap-4">
          <ETFTable :stockID="stock1" />
          <ETFTable :stockID="stock2" />
          <ETFTable :stockID="stock3" />
        </div>
      </div>
    </div>
  </main>
</template>

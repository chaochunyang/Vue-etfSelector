<script>
import { ref, watch } from 'vue';
import Panel from "../components/Panel.vue"
import ETFTable from "../components/ETFTable.vue"
import Search from "../components/Search.vue";

export default {
  components: { Panel, Search, ETFTable },
  methods:{
    
  },
  setup() {
    const stock1 = ref("0050");
    const stock2 = ref("00878");
    const stock3 = ref("00919");
    const themeData = ref({})

    const getValFromPanel = (etfIDs) => {
      console.log("page get", etfIDs)
      themeData.value = etfIDs
    }

    const handleStocksUpdate = (etfIDs) => {
      console.log(etfIDs)
      stock1.value = etfIDs.stock1
      stock2.value = etfIDs.stock2
      stock3.value = etfIDs.stock3
      console.log('Updated stocks data:', stock1.value, stock2.value, stock3.value);
    };

    return { stock1, stock2, stock3, handleStocksUpdate, getValFromPanel, themeData };
  }
}
</script>

<template>
  <main>
    <div class="container mt-4">
      <Panel @valToPage="getValFromPanel">
        <Search @update-stocks="handleStocksUpdate" :themeData="themeData"/>
      </Panel>
      <hr/>

      <div class="container">
        <div class="row h-100 gap-4">
          <ETFTable :stockID="stock1"/>
          <ETFTable :stockID="stock2"/>
          <ETFTable :stockID="stock3"/>
        </div>
      </div>
    </div>
  </main>
</template>

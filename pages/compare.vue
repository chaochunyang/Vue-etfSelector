<script>
import { ref } from 'vue';
import Panel from "../components/Panel.vue"
import ETFTable from "../components/ETFTable.vue"
import Search from "../components/Search.vue";

export default {
  components: { Panel, Search, ETFTable },
  setup() {
    const stocks = ref({});

    const handleStocksUpdate = (data) => {
      stocks.value = data;
      console.log('Updated stocks data:', stocks.value);
    };

    return { stocks, handleStocksUpdate };
  }
}
</script>

<template>
  <main>
    <div class="container mt-4">
      <Panel>
        <Search @update-stocks="handleStocksUpdate" />
      </Panel>
      <hr/>
  
      <div class="container">
        <div class="row h-100 gap-4">
          <ETFTable />
        </div> 
      </div>
    </div>
  </main>
</template>

<template>
  <main>
    <div class="container mt-4">
      <Panel @valToPage="getValFromPanel">
        <Search @update-stocks="handleStocksUpdate" :themeData="themeData" />
      </Panel>
      <hr />
      <div class="container mt-5 mb-5 shadow">
        <h1 class="dispaly-5 mb-3 text-center">ETF 長期績效圖表</h1>
        <div
          class="chart-container mt-2"
          id="chartContainer"
          style="position: relative"
        >
          <canvas id="mainChart"></canvas>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { ref, watch } from "vue";
import Panel from "../components/Panel.vue";
import Search from "../components/Search.vue";

export default {
  components: { Panel, Search },
  setup() {
    const stock1 = ref("");
    const stock2 = ref("");
    const stock3 = ref("");
    const stock1IRR = ref([]);
    const stock2IRR = ref([]);
    const stock3IRR = ref([]);
    const themeData = ref({});

    const getValFromPanel = (etfIDs) => {
      console.log("page get", etfIDs);
      themeData.value = etfIDs;
    };

    const handleStocksUpdate = (etfIDs) => {
      console.log(etfIDs);
      stock1.value = etfIDs.stock1;
      stock2.value = etfIDs.stock2;
      stock3.value = etfIDs.stock3;
      console.log(
        "Updated stocks data:",
        stock1.value,
        stock2.value,
        stock3.value
      );
    };

    const draw =  (ctx) => {
      var etfChart = new Chart(ctx, {
        type: "line",
        data: {
          datasets: [
            {
              label: stock1.value,
              data: stock1IRR.value,
            },
            {
              label: stock2.value,
              data: stock2IRR.value,
            },
            {
              label: stock3.value,
              data: stock3IRR.value,
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: "time",
              grid: {
                display: false, // 移除 X 軸的格線
              },
            },
            y: {
              title: {
                text: "報酬率(%)",
                display: true,
                font: {
                  // family: 'Times',
                  size: 18,
                  // style: 'normal',
                  lineHeight: 1.2,
                },
              },
            },
          },
          plugins: {
            title: {
              display: true,
              text: "截止時間: 2023.12.18",
              position: "bottom",
              align: "end",
              font: { size: 10 },
            },
          },
        },
      });
    }

    const fetchData = async () => {
      try {
        const [stock1Data, stock2Data, stock3Data] = await Promise.all([
          $fetch("/api/price", {
            method: "post",
            body: { etfID: stock1.value },
          }),
          $fetch("/api/price", {
            method: "post",
            body: { etfID: stock2.value },
          }),
          $fetch("/api/price", {
            method: "post",
            body: { etfID: stock3.value },
          }),
        ]);

        stock1IRR.value = stock1Data;
        stock2IRR.value = stock2Data;
        stock3IRR.value = stock3Data;

        var c = document.getElementById("mainChart");
        var ctx = c.getContext("2d");
        ctx.translate(0.5, 0.5);
        ctx.imageSmoothingEnabled = false;
        draw(ctx);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    onMounted(() => {
      stock1.value = "0056";
      stock2.value = "00713";
      stock3.value = "00878";
      fetchData();
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

<style lang="scss" scoped></style>

<template>
  <div class="col h-100 shadow">
    <div class="table-responsive align-top">
      <ClientOnly fallback-tag="span" fallback="Loading comments...">
        <table class="table table-bordered table-hover">
          <caption class="text-end text-light">統計截止2023.12.18</caption>
          <tr class="table-primary text-center display-6"><th colspan="3">{{ stockID }}</th></tr>
          <tr>
              <td>ETF 名稱</td>
              <td colspan="2">{{ stockID }}</td>
          </tr>
          <tr>
              <td>追蹤標的</td>
              <td colspan="2">{{ netvalue.indexTarget }}</td>
          </tr>
          <tr>
              <td>市價</td>
              <td colspan="2">{{ netvalue.price }}</td>
          </tr>
          <tr>
              <td>淨值</td>
              <td colspan="2">{{ netvalue.netValue }}</td>
          </tr>
          <tr>
              <td>成交量</td>
              <td colspan="2">{{ netvalue.transaction }}</td>
          </tr>
          <tr>
              <td>配息</td>
              <td colspan="2">{{ dividend.dividend }} </td>
          </tr>
          <tr>
              <td>配息頻率</td>
              <td colspan="2">{{ dividend.times }} </td>
          </tr>
          <tr>
              <td>年報酬率(含息)</td>
              <td colspan="2">{{ operate.IRR }}</td>
          </tr>
          <tr>
              <td>內扣費用</td>
              <td colspan="2">{{ operate.fee }}%</td>
          </tr>
          <tr>
              <td>受益人數</td>
              <td colspan="2">{{ operate.benefitPeople }}</td>
          </tr>
          <tr>
              <td>成立年齡</td>
              <td colspan="2">{{ operate.years }}</td>
          </tr>
          <tr class="table-warning">
              <th scope="row">#</th>
              <th scope="row">前十大持股</th>
              <th scope="row">持股比例</th>
          </tr>
          <tr v-for="(item,index) in components">
              <td>{{ index }} </td>
              <td>{{ item.cpName }}</td>
              <td>{{ item.weight+"%"}}</td>
          </tr>
        </table>
      </ClientOnly>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";

export default {
  props: {
    stockID: {
      type: String,
    },
  },
  setup(props) {
    const components = ref([]);
    const netvalue = ref({});
    const dividend = ref({});
    const operate = ref({});
    const stockID = ref("");

    const fetchData = async () => {
      try {
        const [componentsData, netvalueData, dividendData, operateData] = await Promise.all([
          $fetch("/api/components", {
            method: "post",
            body: { etfID: stockID.value },
          }),
          $fetch("/api/netvalue", {
            method: "post",
            body: { etfID: stockID.value },
          }),
          $fetch("/api/dividend", {
            method: "post",
            body: { etfID: stockID.value },
          }),
          $fetch("/api/operate", {
            method: "post",
            body: { etfID: stockID.value },
          }),
        ]);
        
        components.value = componentsData;
        netvalue.value = netvalueData;
        dividend.value = dividendData;
        operate.value = operateData;
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    // watch stockID
    watch(()=>props.stockID, (newVal)=>{
      stockID.value = newVal
      fetchData()
    })

    return { stockID, components, netvalue, dividend, operate };
  },
};
</script>

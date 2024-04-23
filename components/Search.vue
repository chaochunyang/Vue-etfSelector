<template>
  <form method="post">
    <div class="container p-0 mb-3">
      <label for="stock1" class="form-label fs-4">ETF 候選1號:</label>
      <input class="form-control" list="options" v-model="search1" />

      <label for="stock2" class="form-label fs-4">ETF 候選2號:</label>
      <input class="form-control" list="options" v-model="search2" />

      <label for="stock3" class="form-label fs-4">ETF 候選3號:</label>
      <input class="form-control" list="options" v-model="search3" />
      <datalist id="options">
        <option v-for="item in response" :key="item.etfID" :value="item.etfID">
          {{ item.etfName }}
        </option>
      </datalist>
    </div>

    <button type="button" @click="handleSubmit" class="btn btn-primary mb-3">
      送出
    </button>
  </form>
</template>

<script>
import { ref, onMounted, watch, defineComponent } from "vue";

export default defineComponent({
  emits: ["update-stocks"], // Declare the custom event
  props: {
    themeData: {
      type: Object,
    },
  },
  setup(props, { emit }) {
    const search1 = ref("");
    const search2 = ref("");
    const search3 = ref("");
    const response = ref([]);

    const search = async () => {
      try {
        response.value = await $fetch("/api/stockname", {
          method: "GET",
        });
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    const handleSubmit = () => {
      emit("update-stocks", {
        stock1: search1.value,
        stock2: search2.value,
        stock3: search3.value,
      });
    };

    onMounted(search);

    watch(
      () => props.themeData,
      () => {
        search1.value = props.themeData.stock1;
        search2.value = props.themeData.stock2;
        search3.value = props.themeData.stock3;
      }
    );

    return { search1, search2, search3, response, handleSubmit };
  },
});
</script>

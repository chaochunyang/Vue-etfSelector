<script>
import { ref, onMounted, defineComponent } from "vue";

export default defineComponent({
  emits: ["update-stocks"], // Declare the custom event
  setup(props, { emit }) {
    const stock1 = ref("");
    const stock2 = ref("");
    const stock3 = ref("");
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
      // Emitting an event with data to the parent component
      emit("update-stocks", {
        stock1: stock1.value,
        stock2: stock2.value,
        stock3: stock3.value,
      });
    };

    onMounted(search);

    return { stock1, stock2, stock3, response, handleSubmit };
  },
});
</script>

<template>
  <form method="post">
    <div class="container p-0 mb-3">
      <label for="stock1" class="form-label fs-4">ETF 候選1號:</label>
      <input class="form-control" list="options" id="stock1" name="stock1" v-model="stock1"/>
      
      <label for="stock2" class="form-label fs-4">ETF 候選2號:</label>
      <input class="form-control" list="options" id="stock2" name="stock2" v-model="stock2"/>

      <label for="stock3" class="form-label fs-4">ETF 候選3號:</label>
      <input class="form-control" list="options" id="stock3" name="stock3" v-model="stock3"/>
      <datalist id="options">
        <option v-for="item in response" :key="item.etfID" :value="item.etfID">
          {{ item.etfName }}
        </option>
      </datalist>
    </div>

    <button type="button" @click="handleSubmit" class="btn btn-primary mb-3">送出</button>
  </form>
</template>

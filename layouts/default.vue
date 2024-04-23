<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "default",
  components: { Header, Footer },
};
</script>

<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

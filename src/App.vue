<template>
  <Header />
  <Cards />
  <Footer />
</template>

<script>
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Cards,
    Header,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  flex-direction: column;
}

body {
  max-width: 1280px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
</style>

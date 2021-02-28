<template>
  <Header @searchInput="filterSubmit" />
  <Cards>
    <Card
      v-for="art in filteredArts"
      :image="art.image"
      :title="art.title"
      :oldPrice="art.oldPrice"
      :actualPrice="art.actualPrice"
      :key="art.id"
      :quantity="art.quantity"
    />
  </Cards>
  <Footer />
</template>

<script>
import Header from "./components/Header";
import Cards from "./components/Cards";
import Card from "./components/Card";
import Footer from "./components/Footer";
export default {
  data() {
    return {
      arts: [
        {
          title: "«Рождение Венеры» Сандро Боттичелли",
          id: 1,
          image: require("./assets/Venera.png"),
          oldPrice: "2 000 000",
          actualPrice: "1 000 000",
          sale: true,
          quantity: 5,
        },
        {
          title: "«Тайная вечеря»  Леонардо да Винчи",
          id: 2,
          image: require("./assets/Vecher.png"),
          oldPrice: null,
          actualPrice: "3 000 000",
          sale: false,
          quantity: 6,
        },
        {
          title: "«Сотворение Адама» Микеланджело",
          id: 3,
          image: require("./assets/Adam.png"),
          oldPrice: "6 000 000",
          actualPrice: "5 000 000",
          sale: false,
          quantity: 8,
        },
        {
          title: "«Урок анатомии»  Рембрандт",
          id: 4,
          image: require("./assets/Anatomia.png"),
          oldPrice: "6 000 000",
          actualPrice: "4 000 000",
          sale: false,
          quantity: 0,
        },
      ],
      filteredArts: [],
    };
  },
  name: "App",
  components: {
    Cards,
    Header,
    Footer,
    Card,
  },
  methods: {
    filterSubmit(data) {
      this.filteredArts = this.arts.filter((art) => {
        console.log(data.search);
        return art.title.toLowerCase().includes(data.search.toLowerCase());
      });
      console.log(this.filteredArts);
      return this.filteredArts;
    },
  },
  computed: {
    // filterSubmit(data) {
    //   this.filteredArts = this.arts.filter((art) => {
    //     console.log(data.search);
    //     return art.title.toLowerCase().includes(data.search.toLowerCase());
    //   });
    //   console.log(this.filteredArts);
    //   return this.filteredArts;
    // },
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
  max-width: 1920px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
</style>

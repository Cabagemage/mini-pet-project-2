<template>
  <section class="main">
    <h1 class="title">Картины эпохи Возрождения</h1>
    <div class="cards">
      <Card
        v-for="art in arts"
        :image="art.image"
        :title="art.title"
        :oldPrice="art.oldPrice"
        :actualPrice="art.actualPrice"
        :key="art.id"
        :quantity="art.quantity"
      />
    </div>
    <slot></slot>
  </section>
</template>

<script>
import Card from "./Card";

export default {
  name: "Cards",
  components: { Card },
  data() {
    return {
      arts: [
        {
          title: "«Рождение Венеры» Сандро Боттичелли",
          id: 1,
          image: require("../assets/Venera.png"),
          oldPrice: "2000000",
          actualPrice: "1000000",
          sale: true,
          quantity: 5,
        },
        {
          title: "«Тайная вечеря»  Леонардо да Винчи",
          id: 2,
          image: require("../assets/Vecher.png"),
          oldPrice: null,
          actualPrice: "3000000",
          sale: false,
          quantity: 6,
        },
        {
          title: "«Сотворение Адама» Микеланджело",
          id: 3,
          image: require("../assets/Adam.png"),
          oldPrice: "6000000",
          actualPrice: "5000000",
          sale: false,
          quantity: 8,
        },
        {
          title: "«Урок анатомии»  Рембрандт",
          id: 4,
          image: require("../assets/Anatomia.png"),
          oldPrice: "6000000",
          actualPrice: "4000000",
          sale: false,
          quantity: 0,
        },
      ],
    };
  },
  methods: {
    sendData() {
     this.someData++;
 
    },
  },
};
</script>

<style>
.title {
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 150%;
  margin: 0 0 40px 0;
  color: #343030;
}
.main {
}
.cards {
  width: 1280px;
  display: grid;
  align-items: center;
  /* justify-content: center; */
  grid-gap: 32px;
  grid-template-columns: repeat(4, 288px);
}
</style>

<template>
  <div class="card" v-if="quantity >= 1">
    <img class="card__image" :src="image" :alt="title" />
    <div class="card__info">
      <h2 class="card__title">{{ title }}</h2>
      <div class="card__row">
        <div class="card__col">
          <p class="card__price card__sale-price">
            {{ oldPrice ? oldPrice + " " + "$" : "" }}
          </p>
          <p class="card__price card__actual-price">
            {{ actualPrice ? actualPrice + " " + "$" : "" }}
          </p>
        </div>
        <button v-if="!isClicked" @click="addToCart" class="card__buy-button">
          {{ buy }}
        </button>
        <button v-else class="card__buy-button card__buy-button_status_inCart">
          {{ inCart }}
        </button>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="card card_status_sold">
      <img class="card__image" :src="image" :alt="title" />
      <div class="card__info">
        <h2 class="card__title">{{ title }}</h2>
        <div class="card__row">
          <div class="card__col">
            <p>Продана на аукционе</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isClicked: false,
      buy: "Купить",
      inCart: "В корзине",
    };
  },
  props: {
    type: Object,
    title: String,
    image: String,
    oldPrice: String,
    actualPrice: String,
    quantity: Number,
  },
  name: "Card",
  components: {},
  methods: {
    async addToCart() {
      this.isClicked = true;
      try {
        const fetchData = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        const data = await fetchData.json();
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style>
.card {
  width: 280px;
  box-sizing: border-box;
  border: 1px solid #e1e1e1;
}
.card_status_sold {
  background-color: #ffffff;
  opacity: 0.5;
}
.card__price {
  margin: 0;
}
.card__image {
  width: 280px;
  height: 160px;
  display: block;
  margin-bottom: 20px;
}
.card__info {
  padding: 0 24px 26px 24px;
}
.card__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card__sale-price {
  text-decoration: line-through #000;
  font-size: 14px;
  line-height: 150%;
  color: #a0a0a0;
}
.card__title {
  margin: 0 0 22px 0;
  width: 220px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
  color: #343030;
}
.card__buy-button {
  width: 118px;
  height: 48px;
  background-color: #382e2b;
  color: white;
  font-weight: bold;
  font-size: 14px;
  line-height: 150%;
  right: 0;
}
.card__buy-button:hover {
  opacity: 0.9;
  background-color: #403432;
}
.card__buy-button_status_inCart {
  background-color: #403432;
  background-image: url(../assets/feather_check.svg);
  background-repeat: no-repeat;
  background-position: center left 2%;
}
</style>

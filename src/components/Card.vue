<template>
  <div class="card">
    <slot> </slot>
    <img class="card__image" :src="image" :alt="title" />
    <div class="card__info">
      <h2 class="card__title">{{ title }}</h2>
      <div class="card__row">
        <div class="card__col">
          <p class="card__price card__sale-price">2 000 000 $</p>
          <p class="card__price card__actual-price">1 000 000 $</p>
        </div>
        <button class="card__buy-button">Купить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: Object,
    title: String,
    text: String,
    authorImage: String,
    date: Date,
    completed: Boolean,
  },
  name: "Card",
  components: {},
  methods: {

  }
};
</script>

<style>
.card {
  width: 280px;
  box-sizing: border-box;
  border: 1px solid #e1e1e1;
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
  background-color: #403432;
  color: white;
  font-weight: bold;
  font-size: 14px;
  line-height: 150%;
  right: 0;
}
</style>

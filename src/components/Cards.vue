<template>
  <section class="main">
    <h1 class="title">Картины эпохи Возрождения</h1>
    <div class="cards">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "Cards",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.title {
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 150%;
  margin: 0 0 40px 0;
  color: #343030;
}
.main {
  width: 1280px;
  margin: 0 auto 320px auto;
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

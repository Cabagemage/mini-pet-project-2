<template>
  <header class="header">
    <div class="justify-between">
      <nav class="navigation">
        <img src="../assets/logo.svg" alt="" class="logo" />
        <ul class="nav-list">
          <li v-for="item in listItems" :key="item.title" class="nav-item">
            <a class="nav-link" href="#">{{ item.title }}</a>
          </li>
        </ul>
      </nav>
      <form @submit.prevent class="search">
        <input
          v-model="search"
          placeholder="Поиск по названию картины"
          class="search__input"
        />
        <button @click="searchInput" class="search__button">
          Найти
        </button>
      </form>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  components: {},
  props: {
    filterSubmit: Function,
  },
  data() {
    return {
      listItems: [
        { title: "Каталог", link: "#" },
        { title: "Доставка", link: "#" },
        { title: "Оплата", link: "#" },
        { title: "Контакты", link: "#" },
        { title: "О галерее", link: "#" },
      ],
      search: "",
    };
  },
  methods: {
    searchInput() {
      this.$emit("searchInput", { search: this.search });
    },
  },
};
</script>

<style scoped>
.header {
  max-width: 1920px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  margin: 0 auto 45px auto;
  justify-content: center;
  padding: 37px 100px 37px 100px;
  border-bottom: 1px solid #e1e1e1;
}
.justify-between {
  display: flex;
  width: 1920px;
  justify-content: space-between;
}
.nav-list {
  display: flex;
  flex-direction: row;
  justify-self: center;
  list-style-type: none;
  margin: 0 0 0 48px;
  padding: 0;
}
.navigation {
  display: flex;
  align-items: center;
}
.nav-item {
  margin-right: 48px;
  text-decoration: none;
  font-size: 14px;
  line-height: 150%;
}
.nav-item:last-child {
  margin-right: 0;
}
.nav-link {
  text-decoration: none;
  color: #343030;
}
.nav-link:hover {
  opacity: 0.7;
}
.justify-between {
  display: flex;
}
.logo {
  width: 48px;
  height: 48px;
}
.search {
  position: relative;
  display: flex;
  align-items: center;
}
.search__input {
  width: 416px;
  box-sizing: border-box;
  height: 46px;
  padding: 13px 0 14px 16px;
  margin: 0;
}
.search__button {
  width: 122px;
  height: 46px;
  background-color: #403432;
  position: absolute;
  border: transparent;
  color: white;
  font-weight: bold;
  font-size: 14px;
  line-height: 150%;
  right: 0;
}
.search__button:hover {
  opacity: 0.8;
  background-color: #403432;
}

</style>

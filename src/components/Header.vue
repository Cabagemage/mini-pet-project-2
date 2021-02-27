<template>
  <header class="header">
    <div class="justify-between">
      <img src="../assets/logo.svg" alt="" class="logo" />
      <nav class="navigation">
        <ul class="nav-list">
          <li v-for="item in listItems" :key="item.title" class="nav-item">
            <a class="nav-link" href="#">{{ item.title }}</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="search">
      <input placeholder="Поиск по названию книги" class="search__input" />
      <button class="search__button">Найти</button>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  components: {},

  data() {
    return {
      listItems: [
        { title: "Каталог", link: "#" },
        { title: "Доставка", link: "#" },
        { title: "Оплата", link: "#" },
        { title: "Контакты", link: "#" },
        { title: "О галерее", link: "#" },
      ],
    };
  },
};
</script>

<style>
.header {
  width: 1280px;
  display: flex;
  margin: 0 auto 45px auto;
  justify-content: space-between;
  padding-bottom: 24px;
  border-bottom: 1px solid #E1E1E1;
}
.nav-list {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
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
.justify-between {
  display: flex;
  margin: 0 auto;
}
.logo {
  width: 48px;
  height: 48px;
}
.search {
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 0;
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
  color: white;
  font-weight: bold;
  font-size: 14px;
  line-height: 150%;
  right: 0;
}
</style>

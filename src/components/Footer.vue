<template>
  <footer class="footer">
    <div class="justify-between">
      <nav class="navigation">
        <img src="../assets/logo.svg" alt="" class="logo" />
        <ul class="nav-list">
          <li v-for="item in listItems" :key="item.title" class="nav-item">
            <a class="nav-link" href="#">{{ item.title }}</a>
          </li>
        </ul>
      </nav>
      <div class="footer__contacts">
        <div class="footer__contact">
          <img src="../assets/phone.svg" alt="" class="footer__icon" />
          <p>+7 (495) 555-55-55</p>
        </div>
        <div class="footer__contact">
          <img src="../assets/adress.svg" alt="" class="footer__icon" />
          <p>г. Москва, ул. Расплетина, 24</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
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
  methods: {},
};
</script>

<style scoped>
.footer {
  max-width: 1920px;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 24px 100px 24px 100px;
  border-bottom: 1px solid #e1e1e1;
  background-color: #eceaea;
}
.justify-between {
  display: flex;
  width: 1920px;
  justify-content: space-between;
}
.footer__contacts {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.footer__contact {
  display: flex;
  flex-direction: row;

}
.footer__icon{
  margin-right: 9px;
}
.footer__contact:first-child{
  margin-right: 51px;
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

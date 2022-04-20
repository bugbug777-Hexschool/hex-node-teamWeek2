<template>
  <header class="header">
    <div class="container">
      <div class="navbar">
        <router-link class="navbar-brand" to="/metawall">MetaWall</router-link>
        <div class="navbar-dropMenu">
            <button type="button" class="dropMenu-btn" @click="isOpen =!isOpen">
              <img src="@/assets/img/user.png" alt="avatar"/>
              <span>Member</span>
            </button>
            <ul class="dropMenu" v-show="isOpen">
              <li class="dropMenu-item">
                <a class="dropMenu-link" href="#">我的貼文牆</a>
              </li>
              <li class="dropMenu-item">
                <a class="dropMenu-link" href="#">修改個人資料</a>
              </li>
              <li class="dropMenu-item">
                <a class="dropMenu-link" href="#">登出</a>
              </li>
            </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.icons {
  width: 30px;
  height: 30px;
}
</style>

<template>
  <div class="sidebar">
    <router-link
      to="/metawall/post"
      class="btn btn-primary"
      >張貼動態</router-link
    >
    <ul class="sidebar__list">
      <li class="sidebar__list-item">
        <a class="sidebar__list-link" href="#">
          <div class="sidebar__list-image">
            <img src="@/assets/img/user.png" alt="headshot" />
          </div>
          <span>邊緣小杰</span>
        </a>
      </li>
      <li class="sidebar__list-item">
        <router-link class="sidebar__list-link" to="/metawall/following">
          <div class="sidebar__list-icon">
            <i class="bi-bell"></i>
          </div>
          <span>追蹤名單</span>
        </router-link>
      </li>
      <li class="sidebar__list-item">
        <router-link class="sidebar__list-link" to="/metawall/likes">
          <div class="sidebar__list-icon">
            <i class="bi-hand-thumbs-up"></i>
          </div>
          <span>我按讚的文章</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<template>
  <Header />
  <div class="container">
    <div class="wrapper">
      <main class="main">
        <router-view />
      </main>
      <aside class="aside">
        <Sidebar />
      </aside>
    </div>
  </div>
</template>

<script>
import Header from '@/components/HeaderComponent.vue';
import Sidebar from '@/components/SidebarComponent.vue';

export default {
  components: {
    Header,
    Sidebar,
  },
};
</script>

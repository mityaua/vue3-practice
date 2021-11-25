<template>
  <div id="in-app">
    <div class="content">
      <Header />
      <router-view></router-view>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from './components/shared/Header.vue';
import Footer from './components/shared/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
#in-app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
}

.content {
  flex-grow: 1;
  padding-top: 120px;
}
</style>

<template>
  <h1>{{ title }}</h1>
  <Button @click="increment" outlined>Click me</Button>
  <DirectiveTest />
</template>

<script>
import Button from './components/Button.vue';
import DirectiveTest from './components/DirectivesTest.vue';

export default {
  name: 'App',
  components: {
    Button,
    DirectiveTest,
  },
  // Аналог стейта, функция которая возвращает обьект
  data() {
    return {
      totalClicks: 0,
    };
  },
  // Вычисляет на основе даты или пропсов + кеширует. Внутри функциию с обязательным возвратом!
  computed: {
    title() {
      return `Total clicks: ${this.totalClicks}`;
    },
  },
  // Методы компонента. Внутри функции
  methods: {
    increment() {
      this.totalClicks += 1;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

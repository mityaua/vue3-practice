// Директивы v-if (убирает из DOM), v-show (display: none), v-for (цикл по массиву и обьекту), отрисовка по условию в цикле

<template>
  <div v-if="isVisible">
    <h1>Title Directives</h1>

    <ul>
      <template v-for="fruit in fruits" v-bind:key="fruit">
        <li v-if="fruit === 'kiwi'">{{ fruit }}</li>
      </template>
    </ul>

    <ul>
      <li v-for="(car, key) in cars" v-bind:key="key">{{ car.color }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DirectiveTest',
  data() {
    return {
      isVisible: true,
      fruits: ['mango', 'kiwi', 'poly'],
      cars: {
        audi: {
          color: 'green',
        },
        bmw: {
          color: 'tomato',
        },
      },
    };
  },
};
</script>

<style>
</style>
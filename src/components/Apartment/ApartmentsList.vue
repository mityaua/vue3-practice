<template>
  <Container>
    <!-- Паттерн именованных слотов -->
    <slot>Дефолтный слот</slot>

    <slot name="title"></slot>

    <div class="apartments-list">
      <template v-for="apartment in items">
        <slot name="apartment" v-bind:apartment="apartment"></slot>
      </template>
    </div>

    <!-- Паттерн именованных слотов -->
    <slot name="description"></slot>
  </Container>
</template>

<script>
import Container from '../shared/Container.vue';

export default {
  name: 'ApartmentsList',
  components: {
    Container,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
  margin-top: -30px;

  // &__item {
  //   flex-basis: calc(100% / 3 - 30px);

  //   margin-left: 30px;
  //   margin-top: 30px;
  // }
}
</style>
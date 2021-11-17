<template>
  <Container>
    <div class="apartments-list">
      <ApartmentsItem
        v-for="{ id, description, price, rating, imgUrl } in items"
        :key="id"
        :description="description"
        :price="price"
        :rating="rating"
        :imgSrc="imgUrl"
        class="apartments-list__item"
      /></div
  ></Container>
</template>

<script>
import Container from '../shared/Container.vue';
import ApartmentsItem from './ApartmentsItem.vue';

export default {
  name: 'ApartmentsList',
  components: {
    Container,
    ApartmentsItem,
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

  &__item {
    flex-basis: calc(100% / 3 - 30px);

    margin-left: 30px;
    margin-top: 30px;
    // margin-bottom: 30px;
  }
}
</style>
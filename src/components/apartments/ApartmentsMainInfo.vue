<template>
  <article class="apartment-main-info">
    <div class="apartment-main-info__heading">
      <h1 class="apartment-main-info__title">{{ apartment.title }}</h1>

      <Rating :rating="apartment.rating" />
    </div>

    <img
      :src="apartment.imgUrl"
      :alt="apartment.title"
      :title="apartment.title"
      class="apartment-main-info__photo"
    />

    <p class="apartment-main-info__description">{{ apartment.descr }}</p>
  </article>
</template>

<script>
import Rating from '../shared/StarRating.vue';

export default {
  name: 'ApartmentsMainInfo',
  components: {
    Rating,
  },
  props: {
    apartment: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang='scss' scoped>
.apartment-main-info {
  &__heading {
    display: flex;
    align-items: baseline;
  }

  &__title {
    margin-bottom: 20px;
    margin-right: 20px;

    font-size: 20px;
    font-weight: 700;
    line-height: 1.219;
    text-transform: capitalize;
  }

  &__photo {
    margin-bottom: 30px;
  }

  &__description {
    line-height: 1.218;
  }
}
</style>
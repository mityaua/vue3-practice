<template>
  <div class="apartments-item">
    <div class="apartments-item__inner">
      <img :src="imgSrc" :alt="description" class="apartments-item__photo" />

      <div class="apartments-item__content">
        <p class="apartments-item__description">
          {{ description }}
        </p>

        <div class="apartments-item__rating">
          <StarRating :rating="rating" />
        </div>

        <div class="apartments-item__price">UAH {{ price }} за ночь</div>

        <!-- Ссылка-обёртка для роутера (направляет на страницу апартаментов с id и query параметрами) -->
        <router-link
          :to="{
            name: 'apartment',
            params: { id },
          }"
          class="apartments-item__link"
        ></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from '../shared/StarRating.vue';

export default {
  name: 'ApartmentsItem',
  components: {
    StarRating,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    rating: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    imgSrc: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.apartments-item {
  position: relative;

  flex-basis: calc(100% / 3 - 30px);

  margin-left: 30px;
  margin-top: 30px;

  &__inner {
    position: relative;
  }

  &__photo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

    background-color: $main-color;
  }

  &__content {
    position: relative;
    padding: 20px;
    min-height: 200px;

    background: rgba(#0f1d2d, 0.7);
    color: #fff;

    line-height: 1.4;
    text-align: left;

    opacity: 0;
    transition: opacity 400ms $transition-timing;

    cursor: pointer;

    z-index: 1;

    &:hover {
      opacity: 1;
    }
  }

  &__description {
    margin-bottom: 20px;
    max-height: calc(1em * 1.4 * 4);
    overflow: hidden;
  }

  &__rating {
    margin-bottom: 20px;
  }

  &__price {
    font-size: 20px;
    font-weight: 600;
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>

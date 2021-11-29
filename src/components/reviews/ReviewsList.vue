<template>
  <section class="reviews">
    <div class="reviews__heading">
      <h2 class="reviews__title">Суммарный рейтинг</h2>
      <div class="reviews__rating">
        <span>{{ reviewsCount }} отзыв(ов)</span>

        <Rating :rating="totalRating" />
      </div>
    </div>

    <ReviewsItem
      v-for="review in currentReviews"
      :key="review.id"
      :review="review"
    />

    <button
      v-if="reviewsCount"
      class="reviews__show-more"
      @click="toggleReviews"
    >
      {{ buttonText }}
    </button>
  </section>
</template>

<script>
import ReviewsItem from './ReviewsItem.vue';
import Rating from '../shared/StarRating.vue';

export default {
  name: 'ReviewsList',
  components: {
    ReviewsItem,
    Rating,
  },
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      reviewsLimit: 2,
    };
  },
  computed: {
    // Счетчик отзывов
    reviewsCount() {
      return this.reviews.length;
    },
    // Средний рейтинг по всем отзывам
    totalRating() {
      const total = this.reviews.reduce(
        (acc, review) => (acc += review.rating),
        0,
      );

      return total / this.reviews.length;
    },
    // Текущий массив для отображения (на основе лимита из даты)
    currentReviews() {
      return this.reviews.slice(0, this.reviewsLimit);
    },
    // Текст для кнопки на основе длинны массива и лимита
    buttonText() {
      return this.reviews.length === this.reviewsLimit
        ? 'Свернуть'
        : 'Читать еще...';
    },
  },
  methods: {
    // Открывает все отзывы
    toggleReviews() {
      if (this.reviewsLimit === this.reviews.length) {
        this.reviewsLimit = 2;
      } else {
        this.reviewsLimit = this.reviews.length;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.reviews {
  &__heading {
    padding: 20px;
    background-color: #e1efff;
  }

  &__title {
    margin-bottom: 7px;

    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
  }

  &__rating {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__show-more {
    width: 100%;
    padding: 14px;
    border: none;
    background-color: #e1efff;

    font-family: inherit;
    font-size: 1rem;

    cursor: pointer;
  }
}
</style>

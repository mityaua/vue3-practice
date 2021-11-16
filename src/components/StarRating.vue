// Компонент рейтинга на основе двух слоев svg

<template>
  <div class="star-rating">
    <span
      class="star star--outlined"
      v-for="index in starLimit"
      :key="index"
    ></span>

    <div class="star-rating__colored" :style="ratingWidthStyle">
      <span
        class="star star--colored"
        v-for="index in starLimit"
        :key="index"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StarRating',
  props: {
    rating: {
      type: Number,
      default: 0,
    },
    starLimit: {
      type: Number,
      default: 5,
    },
    computed: {
      ratingWidth() {
        return (this.rating / this.starLimit) * 100;
      },
      ratingWidthStyle() {
        return `width: ${this.ratingWidth}%;`;
      },
    },
  },
};
</script>

<style lang='scss' scoped>
.star-rating {
  position: relative;
  display: inline-flex;

  &__colored {
    display: inline-flex;
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
  }
}

.star {
  display: inline-block;
  width: 16px;
  height: 15px;
  margin: 0 3px;
  flex-shrink: 0;

  &--colored {
    background: url('../assets/star-colored.svg') center no-repeat;
  }

  &--outlined {
    background: url('../assets/star-outlined.svg') center no-repeat;
  }
}
</style>
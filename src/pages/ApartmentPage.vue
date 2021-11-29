<template>
  <Container>
    <main class="apartment-page">
      <div v-if="apartment" class="apartment-page__content">
        <ApartmentsMainInfo :apartment="apartment" />

        <div class="apartment-page__additional-info">
          <ApartmentsOwner
            :owner="apartment.owner"
            class="apartment-page__owner"
          />

          <ReviewsList :reviews="reviewsList" />
        </div>
      </div>
    </main>
  </Container>
</template>

<script>
// import apartmentsData from '../mock/apartments';
// import reviewsData from '../mock/reviews.json';
import { getApartmentById } from '../services/apartments-service';

import Container from '../components/shared/Container.vue';
import ApartmentsMainInfo from '../components/apartments/ApartmentsMainInfo.vue';
import ApartmentsOwner from '../components/apartments/ApartmentsOwner.vue';
import ReviewsList from '../components/reviews/ReviewsList.vue';

export default {
  name: 'ApartmentPage',
  components: {
    Container,
    ApartmentsMainInfo,
    ApartmentsOwner,
    ReviewsList,
  },
  data() {
    return {
      apartment: null,
    };
  },
  computed: {
    reviewsList() {
      return this.apartment.reviews;
    },
  },
  // Хуки жизненного цикла
  beforeCreate() {
    // console.log(this.reviewsList, 'beforeCreate');
  },
  async created() {
    try {
      const { id } = this.$route.params;
      const { data } = await getApartmentById(id);
      this.apartment = data;
    } catch (error) {
      console.error(error);
    }
  },
  beforeMount() {
    // console.log(this.$el, 'beforeMount');
  },
  mounted() {
    // console.log(this.$el, 'mounted');
  },
  beforeUnmount() {
    // console.log(this.$el, 'beforeUnmount');
  },
  unmounted() {
    // console.log(this.$el, 'unmounted');
  },
  beforeUpdate() {
    // console.log('Вызов хука перед обновлением компонента');
  },
  updated() {
    // console.log('Вызов хука обновновления компонента');
  },
};
</script>

<style lang='scss' scoped>
.apartment-page {
  padding-bottom: 72px;

  &__content {
    display: flex;
    align-items: flex-start;
  }

  &__additional-info {
    margin-left: 30px;
    min-width: 350px;
    max-width: 350px;
  }

  &__owner {
    margin-bottom: 20px;
  }
}
</style>
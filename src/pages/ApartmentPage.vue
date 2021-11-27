<template>
  <Container>
    <main class="apartment-page">
      <div class="apartment-page__content">
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
import apartmentsData from '../mock/apartments';
import reviewsData from '../mock/reviews.json';

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
  computed: {
    apartment() {
      return apartmentsData.find(
        apartment => apartment.id === this.$route.params.id,
      );
    },
    reviewsList() {
      return reviewsData;
    },
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
  }

  &__owner {
    margin-bottom: 20px;
  }
}
</style>
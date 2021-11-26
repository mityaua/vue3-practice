<template>
  <main class="apartment-page">
    <Container>
      <div class="apartment-page__content">
        <ApartmentsMainInfo :apartment="apartment" />
        <ApartmentsOwner
          :owner="apartment.owner"
          class="apartment-page__owner"
        />
      </div>
    </Container>
  </main>
</template>

<script>
import mockData from '../components/apartments/mock-data';
import Container from '../components/shared/Container.vue';
import ApartmentsMainInfo from '../components/apartments/ApartmentsMainInfo.vue';
import ApartmentsOwner from '../components/apartments/ApartmentsOwner.vue';

export default {
  name: 'ApartmentPage',
  components: {
    Container,
    ApartmentsMainInfo,
    ApartmentsOwner,
  },
  computed: {
    apartment() {
      return mockData.find(apartment => apartment.id === this.$route.params.id);
    },
  },
  mounted() {
    console.log(this.apartment);
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

  &__owner {
    min-width: 350px;
    margin-left: 30px;
  }
}
</style>
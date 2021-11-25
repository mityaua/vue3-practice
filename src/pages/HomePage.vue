<template>
  <Container>
    <ApartmentsFilterForm @submit="filter" class="apartments-filter"
  /></Container>

  <Container
    ><p v-if="!filteredApartments.length">Ничего не найдено</p>
    <ApartmentsList v-else :items="filteredApartments">
      <template v-slot:apartment="{ apartment }">
        <ApartmentsItem
          :key="apartment.id"
          :id="apartment.id"
          :description="apartment.description"
          :price="apartment.price"
          :rating="apartment.rating"
          :imgSrc="apartment.imgUrl"
        />
      </template> </ApartmentsList
  ></Container>
</template>

<script>
import mockData from '../components/apartments/mock-data';

import Container from '../components/shared/Container.vue';
import ApartmentsList from '../components/apartments/ApartmentsList.vue';
import ApartmentsItem from '../components/apartments/ApartmentsItem.vue';
import ApartmentsFilterForm from '../components/apartments/ApartmentsFilterForm.vue';

export default {
  name: 'HomePage',
  components: {
    Container,
    ApartmentsList,
    ApartmentsItem,
    ApartmentsFilterForm,
  },
  data() {
    return {
      mockData,
      filters: {
        city: '',
        price: '',
      },
    };
  },
  computed: {
    filteredApartments() {
      return this.filterByCityName(this.filterByPrice(this.mockData));
    },
  },
  methods: {
    filter({ city, price }) {
      this.filters.city = city;
      this.filters.price = price;
    },
    filterByCityName(apartments) {
      if (!this.filters.city) return apartments;

      return apartments.filter(apartment => {
        return apartment.location.city === this.filters.city;
      });
    },
    filterByPrice(apartments) {
      if (!this.filters.price) return apartments;

      return apartments.filter(apartment => {
        return apartment.price >= this.filters.price;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-filter {
  margin-bottom: 40px;
}
</style>

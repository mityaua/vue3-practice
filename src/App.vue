<template>
  <div id="in-app">
    <div class="content">
      <Header />

      <main>
        <Container
          ><ApartmentsFilterForm @submit="filter" class="apartments-filter"
        /></Container>

        <Container
          ><p v-if="!filteredApartments.length">Ничего не найдено</p>
          <ApartmentsList v-else :items="filteredApartments">
            <template v-slot:apartment="{ apartment }">
              <ApartmentsItem
                :key="apartment.id"
                :description="apartment.description"
                :price="apartment.price"
                :rating="apartment.rating"
                :imgSrc="apartment.imgUrl"
              />
            </template> </ApartmentsList
        ></Container>
      </main>
    </div>

    <Footer />
  </div>
</template>

<script>
import mockData from './components/apartments/mock-data';

import Header from './components/shared/Header.vue';
import Container from './components/shared/Container.vue';
import ApartmentsList from './components/apartments/ApartmentsList.vue';
import ApartmentsItem from './components/apartments/ApartmentsItem.vue';
import ApartmentsFilterForm from './components/apartments/ApartmentsFilterForm.vue';
import Footer from './components/shared/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Container,
    Footer,
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
#in-app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
}

.content {
  flex-grow: 1;
  padding-top: 120px;
}

.apartments-filter {
  margin-bottom: 40px;
}
</style>

<template>
  <div id="app">
    <h1>{{ text }}</h1>

    <Container
      ><ApartmentsFilterForm @submit="logger" class="apartments-filter"
    /></Container>

    <ApartmentsList :items="mockData">
      <template v-slot:apartment="{ apartment }">
        <ApartmentsItem
          :key="apartment.id"
          :description="apartment.description"
          :price="apartment.price"
          :rating="apartment.rating"
          :imgSrc="apartment.imgUrl"
          @click="handleItemClick"
        />
      </template>
    </ApartmentsList>
  </div>
</template>

<script>
import mockData from './components/apartments/mock-data';
import ApartmentsList from './components/apartments/ApartmentsList.vue';
import ApartmentsItem from './components/apartments/ApartmentsItem.vue';
import ApartmentsFilterForm from './components/apartments/ApartmentsFilterForm.vue';
import Container from './components/shared/Container.vue';
// import CustomInput from './components/shared/CustomInput.vue';
// import CustomSelect from './components/shared/CustomSelect.vue';

export default {
  name: 'App',
  components: {
    Container,
    ApartmentsList,
    ApartmentsItem,
    ApartmentsFilterForm,
    // CustomInput,
    // CustomSelect,
  },
  data() {
    return {
      text: '',
      mockData,
    };
  },
  methods: {
    logger(value) {
      console.log(value, 'form value');
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.apartments-filter {
  margin-bottom: 40px;
}
</style>

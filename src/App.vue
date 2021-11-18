<template>
  <ApartmentsList :items="apartments">
    <template v-slot:default>Дефолтный слот уровнем выше</template>
    <template v-slot:title>Новый тайтл</template>
    <template v-slot:description>Новое описание</template>

    <template v-slot:apartment="{ apartment }">
      <ApartmentsItem
        :key="apartment.id"
        :description="apartment.description"
        :price="apartment.price"
        :rating="apartment.rating"
        :imgSrc="apartment.imgUrl"
      />
    </template>
  </ApartmentsList>
</template>

<script>
import apartments from './components/apartment/apartments';
import ApartmentsList from './components/apartment/ApartmentsList';
import ApartmentsItem from './components/apartment/ApartmentsItem.vue';

export default {
  name: 'App',
  components: {
    ApartmentsList,
    ApartmentsItem,
  },
  data() {
    return {
      apartments,
    };
  },
};
</script>

<style>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

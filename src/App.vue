<template>
  <p>{{ text }}</p>
  <CustomInput v-model="text" />

  <ApartmentsList :items="apartments">
    <template v-slot:title>Пример тайтла в слоте</template>

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
</template>

<script>
import apartments from './components/apartment/apartments';
import ApartmentsList from './components/apartment/ApartmentsList';
import ApartmentsItem from './components/apartment/ApartmentsItem.vue';
import CustomInput from './components/shared/CustomInput.vue';

export default {
  name: 'App',
  components: {
    ApartmentsList,
    ApartmentsItem,
    CustomInput,
  },
  data() {
    return {
      text: '',
      apartments,
    };
  },
  methods: {
    handleItemClick() {
      console.log('item click in App');
    },
  },
  // Заменяет модификатор native (документирует свои события с помощью опции emits)
  // emits: ['close'],
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

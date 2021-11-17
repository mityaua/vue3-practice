<template>
  <ApartmentsList :items="apartments" />
</template>

<script>
import apartments from './components/apartment/apartments';
import ApartmentsList from './components/apartment/ApartmentsList';

export default {
  name: 'App',
  components: {
    ApartmentsList,
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

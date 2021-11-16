<template>
  <div>
    <ApartmentsItem
      :description="apartment.description"
      :price="apartment.price"
      :rating="apartment.rating"
      imgSrc="https://cdn.pixabay.com/photo/2021/11/08/11/19/buildings-6778915_960_720.jpg"
    />
  </div>
</template>

<script>
import ApartmentsItem from './components/Apartment/ApartmentsItem';

export default {
  name: 'App',
  components: {
    ApartmentsItem,
  },
  data() {
    return {
      apartment: {
        id: 'ff123456789aa',
        title: 'Тестовое название апартаментов',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, quis accusamus molestias porro recusandae aliquam error ipsum cum dicta sint iste eligendi impedit!',
        price: 2000,
        rating: 3.5,
        locaton: {
          city: 'Kyiv',
        },
        owner: {
          name: 'Anna',
          phone: '0979752844',
          email: 'test@gmail.com',
        },
      },
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

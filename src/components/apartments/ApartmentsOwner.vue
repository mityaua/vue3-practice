<template>
  <section class="apartments-owner">
    <h2 class="apartments-owner__title">Информация о владельце:</h2>

    <p class="apartments-owner__name">Имя: {{ owner.name }}</p>
    <p class="apartments-owner__phone">tel: {{ owner.phone }}</p>
    <p class="apartments-owner__email">e-mail: {{ owner.email }}</p>
  </section>
</template>

<script>
export default {
  name: 'ApartmentsOwner',
  props: {
    owner: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang='scss' scoped>
.apartments-owner {
  padding: 20px;
  background-color: #e1efff;

  &__title {
    margin-bottom: 19px;

    font-size: 20px;
    font-weight: 700;
    line-height: 1.219;
  }
}
</style>
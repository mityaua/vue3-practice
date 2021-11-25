<template>
  <select :value="city" @input="handleSelect" class="custom-select">
    <option
      v-for="item in formattedItems"
      :key="item.value"
      :value="item.value"
      :selected="item.selected"
      :disabled="item.disabled"
      :hidden="item.hidden"
    >
      {{ item.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'CustomSelect',
  props: {
    items: {
      type: Array,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
  },
  computed: {
    formattedItems() {
      return this.items.map(item => {
        return typeof item === 'object' ? item : { value: item, label: item };
      });
    },
  },
  emits: ['update:city'],
  methods: {
    handleSelect(event) {
      this.$emit('update:city', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.custom-select {
  display: inline-block;
  padding: 8px 15px;
  height: 40px;
  max-width: 220px;
  width: 100%;
  border: 2px solid $main-color;

  font-size: 18px;

  outline: 1px solid transparent;
  cursor: pointer;
}
</style>
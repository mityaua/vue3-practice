<template>
  <input v-bind="$attrs" class="custom-input" />
  {{ $attrs }}
</template>

<script>
export default {
  // inheritAttrs: false,
  name: 'CustomInput',
};
</script>

<style lang='scss' scoped>
@import '../../assets/scss/variables.scss';

.custom-input {
  min-height: 40px;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  line-height: inherit;
  padding: 8px 15px;
}
</style>
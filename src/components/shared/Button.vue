// Привязка атрибута из пропсов + типизация пропсов + баиндинг (привязка)
классов + завязка класса на пропсе
<template>
  <button v-bind:type="type" :class="{ btn: true, 'btn--outlined': outlined }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    outlined: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.btn {
  display: inline-block;
  min-width: 220px;
  padding: 8px 15px;
  border: 1px solid transparent;

  background: $main-color;
  color: #fff;

  font-size: 18px;

  opacity: 1;
  transition: opacity $transition-duration $transition-timing;
  cursor: pointer;

  &--outlined {
    background: none;
    border: 1px solid $main-color;
    color: $main-color;
  }

  &:hover,
  &:focus {
    opacity: 0.8;
  }
}
</style>

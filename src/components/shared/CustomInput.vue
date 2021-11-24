<template>
  <input :value="modelValue" @input="handleInput" class="custom-input" />
</template>

<script>
export default {
  name: 'CustomInput',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  methods: {
    handleInput(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style lang='scss' scoped>
@import '../../assets/scss/variables.scss';

.custom-input {
  min-height: 40px;
  border: 2px solid $main-color;
  padding: 8px 15px;
  max-width: 220px;
  width: 100%;

  font-size: 18px;
  line-height: inherit;

  outline: 1px solid transparent;

  &::placeholder {
    color: inherit;
  }
}
</style>
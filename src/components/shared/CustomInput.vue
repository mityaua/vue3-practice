<template>
  <div class="wrapper-input">
    <input
      :value="price"
      @input="handleInput"
      v-bind="$attrs"
      class="custom-input"
      :class="!isValid && 'custom-input--error'"
    />
    <span v-if="!isValid" class="custom-input__error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  data() {
    return {
      isValid: true,
      error: '',
    };
  },
  inheritAttrs: false,
  props: {
    price: {
      type: String,
      required: true,
    },
    errorMessage: {
      type: String,
      default: '',
    },
    rules: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['update:price'],
  watch: {
    price(value) {
      this.validate(value);
      console.log(value);
    },
  },
  methods: {
    handleInput(event) {
      this.$emit('update:price', event.target.value);
    },
    validate(value) {
      this.isValid = this.rules.every(rule => {
        const { hasPassed, message } = rule(value);

        if (!hasPassed) {
          this.error = message || this.errorMessage;
        }

        return hasPassed;
      });
    },
  },
};
</script>

<style lang='scss' scoped>
@import '../../assets/scss/variables.scss';

.wrapper-input {
  position: relative;
}

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

  &--error {
    border-color: red;
  }

  &__error {
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    font-size: 12px;
    color: red;
    line-height: 1.3;
  }
}
</style>
<template>
  <form class="form" @submit.prevent="handleSubmit">
    <CustomSelect :items="['name', 'age', 'salary']" class="form__select" />
    <CustomInput v-model="text" />
    <SubmitButton type="submit" class="form__submit">Подбор жилья</SubmitButton>
  </form>
</template>

<script>
import CustomInput from '../shared/CustomInput.vue';
import CustomSelect from '../shared/CustomSelect.vue';
import SubmitButton from '../shared/Button.vue';

export default {
  name: 'ApartmentsFilterForm',
  components: {
    CustomInput,
    CustomSelect,
    SubmitButton,
  },
  data() {
    return {
      text: '',
    };
  },
  emits: ['submit'],
  methods: {
    handleSubmit() {
      this.$emit('submit', { select: 'пока пустой', input: this.text });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;

  &__select {
    margin-right: 30px;
  }

  &__submit {
    margin-left: auto;
  }
}
</style>

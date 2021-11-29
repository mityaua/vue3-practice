<template>
  <form class="form" @submit.prevent="handleSubmit">
    <CustomSelect v-model:city="city" :items="cities" class="form__select" />
    <CustomInput
      v-model:price="price"
      error-message="Не должно быть пустым"
      :rules="rules"
      placeholder="Цена, от"
    />
    <SubmitButton type="submit" class="form__submit">Подбор жилья</SubmitButton>
  </form>
</template>

<script>
import { isRequired, charLimit } from '../../utils/validationRules';

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
      city: '',
      price: '',
    };
  },
  computed: {
    computed: {
      rules() {
        return [isRequired, charLimit(10)];
      },
    },
    cities() {
      return [
        {
          value: '',
          label: 'Город',
          selected: true,
          disabled: true,
          hidden: true,
        },
        'Киев',
        'Одесса',
        'Полтава',
        'Харьков',
        'Днепр',
        'Львов',
        'Херсон',
        'Мариуполь',
      ];
    },
  },
  emits: ['submit'],
  methods: {
    handleSubmit() {
      this.$emit('submit', { city: this.city, price: this.price });
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

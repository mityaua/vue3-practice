export const isRequired = value => ({
  hasPassed: !!value,
  message: 'Заполните это поле',
});

export const charLimit = limit => value => ({
  hasPassed: value.length <= limit,
  message: 'Превышен лимит символов',
});

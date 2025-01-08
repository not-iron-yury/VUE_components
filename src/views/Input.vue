<script setup>
import { ref, computed } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, helpers, minLength, maxValue, minValue, email, numeric, sameAs } from '@vuelidate/validators';

import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';

const nameField = ref('');
const emailField = ref('');
const numberField = ref('');
const passwordField = ref('');
const confirmPasswordField = ref('');
const frontendField = ref('');

const testWord = 'Йоба';
const mustBeFrontend = value => value.includes(testWord);

const rules = computed(() => ({
  nameField: {
    required,
    minLength: helpers.withMessage('Минимальная длина: 3 символа', minLength(3)),
  },
  emailField: {
    required,
    email: helpers.withMessage('Вы ввели неверный email', email),
  },
  numberField: {
    minValue: helpers.withMessage('Минимальное число: 100', minValue(100)),
    maxValue: helpers.withMessage('Максимальное число: 1000', maxValue(1000)),
    numeric: helpers.withMessage('Вы можете ввести только цифры', numeric),
  },
  passwordField: {
    minLength: helpers.withMessage('Слишком короткий пароль', minLength(5)),
  },
  confirmPasswordField: {
    sameAsPassword: helpers.withMessage(`Пароли не совпадают`, sameAs(passwordField.value)),
  },
  frontendField: {
    frontendField: helpers.withMessage(`Строка должна содержать слово: ${testWord}`, mustBeFrontend),
  },
}));

const v$ = useVuelidate(rules, {
  nameField,
  emailField,
  numberField,
  passwordField,
  confirmPasswordField,
  frontendField,
});

function submitForm() {
  v$.value.$touch();
  if (v$.value.$error) return;
  alert('Данные формы отправлены');
}
</script>

<template>
  <h1 class="heading-1">Inputs + Vuelidate</h1>
  <div class="wrapper">
    <div class="block">
      <div class="col">
        <form @submit.prevent="submitForm">
          <div class="input-wrapper">
            <Input
              id="name"
              type="text"
              name="name"
              label="Ваше имя"
              placeholder="Введите ваше имя"
              v-model:value="v$.nameField.$model"
              :error="v$.nameField.$errors"
              required
            />
          </div>
          <div class="input-wrapper">
            <Input
              id="email"
              type="email"
              name="email"
              label="Ваша почта"
              placeholder="Введите ваш email"
              v-model:value="v$.emailField.$model"
              :error="v$.emailField.$errors"
              required
            />
          </div>
          <div class="input-wrapper">
            <Input
              id="number"
              type="number"
              name="number"
              label="Введите число от 100 до 1000"
              placeholder="Введите число"
              v-model:value="v$.numberField.$model"
              :error="v$.numberField.$errors"
            />
          </div>
          <div class="input-wrapper">
            <Input
              id="password"
              type="password"
              label="Ваш пароль"
              name="password"
              placeholder="Введите пароль"
              v-model:value="v$.passwordField.$model"
              :error="v$.passwordField.$errors"
              required
            />
            <Input
              type="password"
              name="confirm"
              placeholder="Повторите пароль"
              v-model:value="v$.confirmPasswordField.$model"
              :error="v$.confirmPasswordField.$errors"
            />
          </div>
          <div class="input-wrapper">
            <Input
              id="test"
              type="text"
              name="test"
              label="Введите слово 'Йоба'"
              placeholder="Введите проверочное слово"
              v-model:value="v$.frontendField.$model"
              :error="v$.frontendField.$errors"
              required
            />
          </div>
          <Button label="Отправить" color="primary"></Button>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
form {
  display: grid;
  gap: 30px;
  padding: 15px 0;
  max-width: 330px;
}
</style>

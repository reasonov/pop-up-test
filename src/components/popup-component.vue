<template>
  <div class="popup" @click.stop>
    <button
        class="popup__close"
        @click="closePopup"
    >
      <popupCloseIcon />
    </button>

    <h2 class="popup__title">Налоговый вычет</h2>
    <p class="popup__subtitle">
      Используйте налоговый вычет чтобы погасить ипотеку досрочно.
      Размер налогового вычета составляет не более 13% от своего официального годового дохода.
    </p>

    <h3 class="popup__input-title">Ваша зарплата в месяц</h3>
    <div :class="{'input-require': errorCalc}">
      <input
          type="text"
          class="popup__input"
          placeholder="Введите данные"
          v-model="salary"
          :disabled="calcIsOpen"
      >
    </div>
    <button class="popup__calc" @click="toggleCalc">Рассчитать</button>

    <popupCalcComponent v-if="calcIsOpen && salary != null" :salary="salary" />

    <div class="popup__select-wrapper">
      <h3 class="popup__select-title">Что уменьшаем?</h3>
      <div class="popup__toggler-wrapper">
        <button
            :class="[
                'popup__select-toggler',
                {'select-toggler--active': selectedToggler === 0}
            ]"
            @click="selectToggler(0)"
        >
          Платёж
        </button>
        <button
            :class="[
                'popup__select-toggler',
                {'select-toggler--active': selectedToggler === 1}
            ]"
            @click="selectToggler(1)"
        >
          Срок
        </button>
      </div>
    </div>

    <button class="popup__submit">Добавить</button>
  </div>
</template>

<script setup>
import popupCalcComponent from './popup-calc-component.vue';
import popupCloseIcon from "@/icons/popup-close-icon";
import { ref, defineEmits, watch } from 'vue';

const emit = defineEmits();

const calcIsOpen = ref(false);
const salary = ref(null);
const errorCalc = ref(false);
const selectedToggler = ref(0);

function toggleCalc() {
  if(salary.value != null && !isNaN(Number(salary.value))) {
    calcIsOpen.value = true;
    salary.value = Number(salary.value);
  } else {
    errorCalc.value = true;
  }
}

function closePopup() {
  emit('closePopup', false)
}

function selectToggler(number) {
  selectedToggler.value = number;
}

watch(salary, () => {
  if(errorCalc.value) {
    errorCalc.value = false;
  }
})
</script>

<style src="../assets/style/mobile/popup-mobile.css"></style>
<style src="../assets/style/tablet/popup-tablet.css"></style>
<style src="../assets/style/desktop/popup-desktop.css"></style>
<template>
  <h3 class="calc__title">Итого можете внести в качестве досрочных:</h3>
  <ul class="calc__list">
    <calcItemComponent
        v-for="index in 4"
        :key="index"
        :payment="payment"
        :lastPayment="lastPayment"
        :itemNumber="index"
    />
  </ul>
</template>

<script setup>
import calcItemComponent from './calc-item-component.vue';
import { computed, defineProps } from 'vue';

const props = defineProps({
  salary: {
    type: Number,
    required: false
  }
})

// (ЗП в месяц * 12) * 0,13 = размер вычета в год.

const fullPrice = 260000;

const payment = computed(() => {
  return props.salary * 12 * 0.13;
})

const lastPayment = computed(() => {
  return fullPrice - payment.value * 3;
})

</script>

<style scoped>
  .calc__title {
    max-width: 153px;
    margin: 15px 0;

    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
  }

  .calc__list {
    margin-bottom: 25px;
  }
</style>
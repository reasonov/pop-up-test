<template>
  <li class="calc__item" @click="toggleCheckbox">
    <customCheckbox :isActive="checkboxIsActive" />
    <span v-if="itemNumber < 4">{{ props.payment }}</span>
    <span v-else>{{ props.lastPayment }}</span>
    <span class="calc__item--grey"> в {{ itemNumber }}-ый год</span>
  </li>
</template>

<script setup>
import customCheckbox from './custom-checkbox';
import { ref, defineProps } from 'vue';

const props = defineProps({
  payment: {
    type: Number,
    required: true
  },
  lastPayment: {
    type: Number,
    required: true
  },
  itemNumber: {
    type: Number,
    required: true
  }
})

const checkboxIsActive = ref(false)

function toggleCheckbox() {
  checkboxIsActive.value = !checkboxIsActive.value;
}
</script>

<style scoped>
.calc__item {
  display: flex;

  padding-bottom: 15px;
  margin-bottom: 15px;

  border-bottom: 1px solid #dfe3e6;
  cursor: pointer;
}

.calc__item--grey {
  margin-left: 10px;
}
</style>
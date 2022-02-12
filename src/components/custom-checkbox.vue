<template>
<div class="checkbox">
  <span class="checkbox__active" v-show="props.isActive">
    <checkboxIcon />
  </span>
</div>
</template>

<script setup>
import { defineProps } from 'vue';
import checkboxIcon from '../icons/checkbox-icon';

const props = defineProps({
  isActive: {
    type: Boolean,
    required: true
  }
})

</script>

<style scoped>
.checkbox {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;
  margin-right: 10px;

  border-radius: 6px;

  background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
}
</style>
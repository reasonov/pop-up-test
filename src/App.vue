<template>
  <div class="main-wrapper" v-if="!popupState">
    <button
        class="open-popup"
        @click="togglePopup(true)"
    >
      Налоговый вычет
    </button>
  </div>

  <div class="popup-wrapper" @click="togglePopup(false)" v-else>
    <popupComponent @closePopup="togglePopup" />
  </div>
</template>

<script setup>
import popupComponent from './components/popup-component.vue';
import { ref } from 'vue';

const popupState = ref(false)

function togglePopup(value) {
  popupState.value = value;
}

</script>

<style src="./assets/style/mobile/main-mobile.css"></style>
<style src="./assets/style/tablet/main-tablet.css"></style>

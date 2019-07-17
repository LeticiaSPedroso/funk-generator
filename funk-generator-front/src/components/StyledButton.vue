<template>
  <button
    class="button"
    :class="{
      'cta': !!cta
    }"
    :style="{
      ...styles,
    }"
    @click="clickFn"
  >
    <Loader
      v-if="isLoading"
      size="30px"
    />
    <template v-else>
      {{ text }}
    </template>
  </button>
</template>

<script>
import Loader from '@/components/Loader.vue';

export default {
  components: { Loader },
  props: ['cta', 'styles', 'clickFn', 'isLoading', 'text'],
};
</script>

<style lang="scss" scoped>
.button {
  background-color: #B18DF9;
  border: 1px solid transparent;
  border-radius: 40px;
  font-family: Roboto;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
  padding: 20px;
  cursor: pointer;
  transition: all 170ms ease-in-out;
  z-index: 999;
  &:hover {
    color: white;
    background-color: #061554;
  }
}
.button.cta {
  &:hover {
    background-color: white;
    color: #7B6BF1;
  }
}
</style>

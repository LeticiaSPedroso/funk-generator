<template>
  <div
    :style="{
      ...styles,
      borderLeftColor: color,
      animationDuration: '.3s',
      width: size,
      height: size
    }"
    class="loading-spinner"
  />
</template>

<script>
export default {
  name: 'Loader',
  props: {
    color: { type: String, default: '#697398' },
    styles: { type: Object, default: () => ({}) },
    size: { type: String, default: '50px' },
    backgroundColor: { type: String, default: 'rgba(0, 0, 0, 0.8)' },
  },
};
</script>

<style lang="scss" scoped>
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.loading-spinner {
  border: 4px solid #ccc;
  border-radius: 50%;
  background-size: cover;
  animation: spin 1s linear infinite;
  position: relative;
}
</style>

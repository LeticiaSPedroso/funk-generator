<template functional>
  <h2
    class="subtitle"
    :style="{ ...props.styles }"
  >
    <slot />
  </h2>
</template>

<style lang="scss" scoped>
.subtitle {
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #aaa;
  margin: 0;
}
</style>

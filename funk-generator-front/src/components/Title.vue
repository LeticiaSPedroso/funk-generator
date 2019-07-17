<template functional>
  <h1
    class="title"
    :style="{ ...props.styles }"
  >
    <slot />
  </h1>
</template>

<style lang="scss" scoped>
.title {
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 34px;
  color: #AC8AF8;
  margin: 0;
}
</style>

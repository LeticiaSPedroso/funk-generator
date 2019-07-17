<template functional>
  <pre class="letter">
    <slot />
  </pre>
</template>

<style lang="scss" scoped>
.letter {
  line-height: 180%;
  text-align: center;
  color: #444;
  height: 90%;
  font-size: 24px;
  font-family: 'Open Sans', sans-serif;
}
</style>

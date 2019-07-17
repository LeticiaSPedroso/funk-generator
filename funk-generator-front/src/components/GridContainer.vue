<template functional>
  <div
    class="container"
    :style="{
      ...props.styles,
      flexDirection: props.direction || 'row',
      justifyContent: props.alignX || 'flex-start',
      alignItems: props.alignY || 'flex-start',
      flexWrap: props.wrap ? 'wrap' : 'nowrap',
    }"
  >
    <slot />
  </div>
</template>

<style scoped>
.container {
  display: flex;
}
</style>

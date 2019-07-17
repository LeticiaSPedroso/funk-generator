<template>
  <GridContainer
    align-x="center"
    align-y="center"
    direction="column"
    :styles="{
      width: '60%',
      height: '100%',
      padding: '20px',
      overflowY: 'scroll',
    }"
  >
    <slot />
  </GridContainer>
</template>

<script>
import GridContainer from '@/components/GridContainer.vue';

export default {
  name: 'Letter',
  components: { GridContainer },
};
</script>

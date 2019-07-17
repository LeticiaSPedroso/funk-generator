<template>
  <GridContainer
    :styles="{ width: '100%', height: '100%' }"
    align-x="center"
    align-y="center"
  >
    <h4 class="loading">
      <div class="emoji-loading">
        💩
      </div>
      <br>
      carregando...
    </h4>
  </GridContainer>
</template>

<script>
import GridContainer from '@/components/GridContainer.vue';

export default {
  name: 'Loading',
  components: { GridContainer },
};
</script>

<style lang="scss" scoped>
@keyframes rotate {
  to { transform: rotate(360deg) }
}

@keyframes writing-dots {
  0% { content: "." }
  50% { content: ".." }
  100% { content: "..." }
}

.loading {
  font-size: 35px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  color: #aaa;
  text-align: center;
}

.emoji-loading {
  transform: rotate(0deg);
  animation: rotate 3s linear infinite;
  font-size: 65px;
  margin-bottom: -45px;
}
</style>

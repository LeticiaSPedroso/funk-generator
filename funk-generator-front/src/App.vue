<template>
  <GridContainer
    direction="column"
    :styles="{
      width: '100%',
      height: '100%',
    }"
  >
    <GridContainer
      direction="column"
      align-y="center"
      :styles="{
        width: '100%',
        padding: '30px',
        backgroundImage: 'linear-gradient(135deg, #CE9FFC 0%,#7367F0 100%)'
      }"
    >
      <Title :styles="{ color: 'white', textAlign: 'center' }">
        Funk Generator
      </Title>
      <SubTitle :styles="{ color: 'white', textAlign: 'center' }">
        Qualquer um pode ser um MC 🚀
      </SubTitle>
    </GridContainer>

    <RouterView />
  </GridContainer>
</template>

<script>
import GridContainer from '@/components/GridContainer.vue';
import Title from '@/components/Title.vue';
import SubTitle from '@/components/SubTitle.vue';

export default {
  components: { GridContainer, SubTitle, Title },
};
</script>

<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
html, body { width: 100%; height: 100% }
</style>

<template>
  <GridContainer
    align-y="center"
    align-x="center"
    :styles="{ width: '100%', height: '100%' }"
  >
    <Letter>
      <Loading v-if="isLoading" />
      <StyledTitle :styles="{ textAlign: 'center' }">
        {{ funk.name }}
      </StyledTitle>
      <StyledLetter>
        {{ funk.letter }}
      </StyledLetter>
    </Letter>
    <Toolbar
      :funk="funk"
      :is-loading="isLoading"
    />
  </GridContainer>
</template>

<script>
import GridContainer from '@/components/GridContainer.vue';
import Letter from '@/components/Letter.vue';
import StyledLetter from '@/components/StyledLetter.vue';
import StyledTitle from '@/components/Title.vue';
import Toolbar from '@/components/Toolbar.vue';
import Loading from '@/components/Loading.vue';

export default {
  name: 'Home',
  components: {
    GridContainer,
    Letter,
    Toolbar,
    Loading,
    StyledLetter,
    StyledTitle,
  },
  data: () => ({
    isLoading: false,
    funk: Object.create(null),
  }),
  async created() {
    this.isLoading = true;
    const { data: funk } = await this.$services.getById(this.$route.params.id);
    this.funk = funk;
    this.isLoading = false;
  },
};
</script>

<style lang="scss" scoped>

</style>

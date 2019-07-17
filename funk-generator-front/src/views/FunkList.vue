<template>
  <GridContainer
    direction="column"
    align-y="center"
    align-x="center"
    :styles="{ width: '100%', marginTop: '30px' }"
  >
    <Loading v-if="isLoading" />
    <Card
      v-for="(funk, index) in funks"
      v-else
      :key="`funk-${index}`"
      :funk="funk"
      :click="navigate('FunkDetails', funk._id)"
    />
  </GridContainer>
</template>

<script>
import GridContainer from '@/components/GridContainer.vue';
import Card from '@/components/Card.vue';
import Loading from '@/components/Loading.vue';

export default {
  name: 'Home',
  components: { GridContainer, Card, Loading },
  data: () => ({
    isLoading: false,
    funks: [],
  }),
  async created() {
    this.isLoading = true;
    const { data: funks } = await this.$services.getAll();
    this.funks = funks;
    this.isLoading = false;
  },
  methods: {
    navigate(route, id) {
      return () => this.$router.push({ name: route, params: { id } });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>

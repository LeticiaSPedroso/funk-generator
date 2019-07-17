<template>
  <div
    class="card"
    @click="click()"
  >
    <GridContainer direction="column">
      <h3 class="card-title">
        {{ funk.name | truncate }}
      </h3>
      <h4 class="card-subtitle">
        {{ funk.author }}
      </h4>
      <p class="card-date">
        {{ funk.createdAt | parseDate }}
      </p>
    </GridContainer>
  </div>
</template>

<script>
import GridContainer from '@/components/GridContainer.vue';

export default {
  name: 'Card',
  components: { GridContainer },
  props: {
    funk: { type: Object, required: true },
    click: { type: Function, default: () => ({}) },
  },
};
</script>

<style lang="scss" scoped>
.card {
  background-color: #f4f4f4;
  border-radius: 8px;
  padding: 10px;
  width: 600px;
  margin-bottom: 20px;
  cursor: pointer;
}
.card-title {
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 25px;
  color: #AC8AF8;
  margin: 0;
}
.card-subtitle {
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #aaa;
  margin: 0;
}
.card-date {
  font-size: 16px;
  color: #aaa;
  margin-top: 10px;
}
</style>

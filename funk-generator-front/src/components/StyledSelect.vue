<template>
  <GridContainer :styles="{ width: '100%' }">
    <GridContainer
      v-for="(item, index) in items"
      :key="`select-${index}`"
      :styles="{
        ...defaultStyles,
        marginRight: '5px',
        border: `5px solid ${(type === item.value) ? '#CB9EFC' : 'transparent'}`,
        backgroundColor: 'white',
      }"
    >
      <div
        :style="{ width: '100%' }"
        @click="choose(item.value)"
      >
        {{ item.label }}
      </div>
    </GridContainer>
  </GridContainer>
</template>

<script>
import GridContainer from '@/components/GridContainer.vue';

export default {
  name: 'StyledSelect',
  components: { GridContainer },
  props: {
    items: { type: Array, required: true },
    initialValue: { type: String, default: '' },
  },
  data: () => ({
    type: 'm',
    defaultStyles: {
      width: '50%',
      fontFamily: 'Open Sans',
      cursor: 'pointer',
      borderRadius: '4px',
      padding: '10px',
      transition: 'all 200ms ease-in',
    },
  }),
  mounted() {
    this.type = this.items
      .find(item => item.value === this.initialValue)
      .value;
  },
  methods: {
    choose(type) {
      this.type = type;
      this.$emit('selected', this.type);
      this.$forceUpdate();
    },
  },
};
</script>

<style>

</style>

<template>
  <GridContainer
    :styles="{
      width: '100%',
      ...styles,
    }"
    direction="column"
  >
    <label
      class="field-label"
      for=""
    >{{ label }}</label>
    <slot v-if="$slots.default" />
    <input
      v-else
      v-model="value"
      :required="isRequired"
      :placeholder="placeholder"
      :type="type"
      class="field-input"
      @blur="$emit('changed', value)"
    >
    <span
      v-if="isRequired"
      class="field-help"
    >* campo obrigatório</span>
  </GridContainer>
</template>

<script>
import GridContainer from '@/components/GridContainer.vue';

export default {
  components: { GridContainer },
  props: {
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: 'Enter message' },
    label: { type: String, default: 'Field name' },
    styles: { type: Object, default: () => ({}) },
    isRequired: { type: Boolean, default: false },
  },
  data: () => ({
    value: 'Coelhinho fofinho',
  }),
};
</script>

<style lang="scss" scoped>
.field {
  &-label {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 1.1rem;
    margin-bottom: 5px;
    color: #3c3f47;
  }
  &-input {
    font-family: 'Open Sans', sans-serif;
    font-size: 0.9rem;
    border: none;
    padding: 10px;
    width: 100%;
    border-radius: 8px;
    &:focus {
      outline: none;
    }
  }
  &-help {
    font-family: 'Open Sans', sans-serif;
    margin-top: 5px;
    color: #b1b2b6;
  }
}
</style>

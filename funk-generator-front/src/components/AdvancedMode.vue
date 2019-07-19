<template>
  <div class="widget">
    <StyledField label="Rate">
      <input
        v-model="rate"
        class="slider"
        type="range"
        value="1"
        max="3"
        step="0.1"
        min="0.1"
        @change="$emit('change', { pitch, rate })"
      >
    </StyledField>
    <StyledField
      label="Pitch"
      :styles="{ marginTop: '30px' }"
    >
      <input
        v-model="pitch"
        class="slider"
        type="range"
        value="1"
        max="2"
        step="0.1"
        min="0"
        @change="$emit('change', { pitch, rate })"
      >
    </StyledField>
  </div>
</template>

<script>
import StyledField from '@/components/StyledField.vue';

export default {
  name: 'AdvancedMode',
  components: { StyledField },
  data: () => ({
    rate: 1,
    pitch: 1,
  }),
};
</script>

<style lang="scss" scoped>
.widget {
  width: 100%;
  height: 200px;
  background-color: white;
  padding: 25px;
  border-radius: 8px;
  margin-bottom: 20px;
}
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  margin-top: 10px;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #7B6BF1;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #7B6BF1;
  cursor: pointer;
}
</style>

<template>
  <GridContainer
    direction="column"
    align-x="center"
    :styles="{
      backgroundColor: '#f4f4f4',
      width: '40%',
      height: '100%',
      padding: '25px',
    }"
  >
    <StyledField
      label="Tipo de voz"
      :styles="{ marginBottom: '20px' }"
    >
      <StyledSelect
        :items="voiceTypes"
        :initial-value="voiceSelected"
        @selected="voice => voiceSelected = voice"
      />
    </StyledField>
    <StyledField
      label="Tipo da batida"
      :styles="{ marginBottom: '20px' }"
    >
      <StyledSelect
        :initial-value="beatSelected"
        :items="beatTypes"
        @selected="beat => beatSelected = beat"
      />
    </StyledField>

    <a class="advanced-button">
      modo avançado
    </a>


    <StyledButton
      :is-loading="isLoading"
      :text="somethingArePlaying ? 'Parar' : 'Tocar'"
      :click-fn="play"
    />
  </GridContainer>
</template>

<script>
import GridContainer from '@/components/GridContainer.vue';
import StyledField from '@/components/StyledField.vue';
import StyledButton from '@/components/StyledButton.vue';
import StyledSelect from '@/components/StyledSelect.vue';
import { speak, playAudio } from '@/utils/audio';

export default {
  name: 'Toolbar',
  components: {
    GridContainer, StyledField, StyledButton, StyledSelect,
  },
  props: {
    funk: { type: Object, default: () => ({}) },
    isLoading: { type: Boolean, default: false },
  },
  data: () => ({
    voiceSelected: 'f',
    beatSelected: 'c',
    speakInstance: null,
    audioInstance: null,
    voiceTypes: [
      { label: 'Homem', value: 'm' },
      { label: 'Mulher', value: 'f' },
    ],
    beatTypes: [
      { label: 'Clássica', value: 'c' },
      { label: 'Moderna', value: 'm' },
    ],
  }),
  computed: {
    somethingArePlaying() {
      return !!this.audioInstance || !!this.speakInstance;
    },
  },
  methods: {
    play() {
      if (this.audioInstance) {
        this.audioInstance.pause();
        this.audioInstance = null;
      } else {
        this.audioInstance = playAudio({
          source: `/funk-beat-${this.beatSelected}.mp3`,
        });
      }

      if (this.speakInstance) {
        this.speakInstance.synth.cancel();
        this.speakInstance = null;
      } else {
        this.speakInstance = speak({
          text: this.funk.letter,
          voiceType: this.voiceSelected,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.advanced-button {
  text-decoration: underline;
  font-family: 'Open Sans';
  cursor: pointer;
  margin-bottom: 20px;
}
</style>

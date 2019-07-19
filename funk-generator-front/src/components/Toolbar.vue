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
      label="Trocar palavrão por"
      :styles="{ marginBottom: '20px' }"
      @changed="word => $emit('removeUglyWordBy', word)"
    />

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

    <a
      class="advanced-button"
      @click="advancedModeIsEnable = !advancedModeIsEnable"
    >
      modo avançado
    </a>

    <transition name="slide-fade">
      <AdvancedMode
        v-if="advancedModeIsEnable"
        @change="options => defineOptions(options)"
      />
    </transition>

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
import AdvancedMode from '@/components/AdvancedMode.vue';
import { speak, playAudio } from '@/utils/audio';

export default {
  name: 'Toolbar',
  components: {
    GridContainer, StyledField, StyledButton, StyledSelect, AdvancedMode,
  },
  props: {
    funk: { type: Object, default: () => ({}) },
    isLoading: { type: Boolean, default: false },
  },
  data: () => ({
    advancedModeIsEnable: false,
    voiceSelected: 'f',
    beatSelected: 'c',
    speakInstance: null,
    audioInstance: null,
    options: {
      pitch: 1,
      rate: 1,
    },
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
    resetAll() {
      this.audioInstance.pause();
      this.audioInstance = null;
      this.speakInstance.synth.cancel();
      this.speakInstance = null;
    },
    defineOptions(options) {
      this.options = options;
      if (this.speakInstance) {
        this.resetAll();
        this.play();
      }
    },
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
        window.VoiceInstance.synth.cancel();
      } else {
        this.speakInstance = speak({
          text: this.funk.letterParsed,
          voiceType: this.voiceSelected,
          options: this.options,
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

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>

const {
  SpeechSynthesisUtterance,
  speechSynthesis: synth,
} = window;

export const speak = ({ text, voiceType, options }) => {
  const voices = synth.getVoices();
  const VOICE_TYPES = {
    m: voices[0],
    f: voices[61],
  };
  const instance = new SpeechSynthesisUtterance(text);
  instance.lang = VOICE_TYPES[voiceType].lang;
  instance.voice = VOICE_TYPES[voiceType];
  instance.rate = options.rate;
  instance.pitch = options.pitch;
  instance.volume = 1;
  synth.speak(instance);
  return { instance, synth };
};

export const playAudio = ({ source }) => {
  const audioElement = document.createElement('audio');
  audioElement.style.display = 'none';
  audioElement.src = source;
  audioElement.loop = 'loop';
  audioElement.play();
  return audioElement;
};

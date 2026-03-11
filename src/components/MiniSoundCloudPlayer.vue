<template>
  <div>
    <!-- Iframe oculto en DOM -->
    <iframe
      ref="scFrame"
      width="0"
      height="0"
      class="sc-widget"
      src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/lisa-lustig-485279146/depeche-mode-waiting-for-the-night-zonerush-remix&auto_play=false"
      frameborder="no"
      allow="autoplay"
    ></iframe>

    <!-- Nota musical flotante -->
    <div
      class="mini-note"
      :class="{ playing: isPlaying }"
      @click="togglePlay"
      title="Reproducir / Pausar canción"
    >
      🎵
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isPlaying = ref(false);
const scFrame = ref(null);
let widget = null;

onMounted(() => {
  if (window.SC && scFrame.value) {
    widget = window.SC.Widget(scFrame.value);
    widget.bind(window.SC.Widget.Events.PLAY, () => (isPlaying.value = true));
    widget.bind(window.SC.Widget.Events.PAUSE, () => (isPlaying.value = false));
    widget.bind(window.SC.Widget.Events.FINISH, () => (isPlaying.value = false));
  }
});

function togglePlay() {
  if (!widget) return;
  isPlaying.value ? widget.pause() : widget.play();
}
</script>

<style scoped>
.sc-widget {
  display: none; /* iframe oculto, no afecta layout */
}

.mini-note {
  position: fixed; /* FLOTANTE sobre todo */
  bottom: 20px;
  right: 20px;
  font-size: 36px;
  cursor: pointer;
  z-index: 1000;
  width: 56px;
  height: 56px;
  background: rgba(0,0,0,0.6);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: color 0.3s, transform 0.3s;
  animation: pulse 1.5s infinite;
}

.mini-note.playing {
  color: #ff0000;
  transform: scale(1.2);
}

@keyframes pulse {
  0%,100% { transform: scale(1); }
  50% { transform: scale(1.15); }
}
</style>

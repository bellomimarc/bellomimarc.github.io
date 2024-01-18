<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { Terminal } from 'xterm'

let remFontSize = Number.parseInt(getComputedStyle(document.documentElement).fontSize?.replace('px', ''))
let intervalId: number

const term = new Terminal({
  fontFamily: 'monospace',
  fontSize: remFontSize * 2,
  cursorInactiveStyle: 'none',
  theme: {
    background: '#000',
    foreground: '#fff',
  },
  scrollback: 100,
})

const current = {
  line: 0,
  char: 0,
};
const lines = [
  'Hi! I\'m Marcello Bellomi.',
  'Develper and Architect',
]

onMounted(() => {
  term.open(document.getElementById('terminal')!)
  
  intervalId = setInterval(() => {
    if (current.line === lines.length) {
      term.clear()
      current.line = 0
      return
    }

    const line = lines[current.line]
    current.line++

    for (let i = 0; i < line.length; i++) {
      setTimeout(() => {
        term.write(line[i])
      }, 50 * i)
    }

    term.writeln('')
  }, 3000)

})

onUnmounted(() => {
  term.dispose()
  clearInterval(intervalId)
})

</script>

<template>
  <div id="terminal"></div>
</template>

<style scoped>
/* xterm.js 100% of the container, not exceed the screen size */
#terminal {
  width: 100%;
  height: 100%;
  max-width: 90vw;
  max-height: 90vw;
  margin: 0 auto;
}
</style>

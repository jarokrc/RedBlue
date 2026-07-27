import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const sampleRate = 48_000;
const duration = 3.4;
const frames = Math.round(sampleRate * duration);
const left = new Float64Array(frames);
const right = new Float64Array(frames);

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const smoothstep = (value) => {
  const t = clamp(value, 0, 1);
  return t * t * (3 - 2 * t);
};

const panGains = (pan) => [
  Math.cos(((pan + 1) * Math.PI) / 4),
  Math.sin(((pan + 1) * Math.PI) / 4),
];

const addTone = ({
  start,
  length,
  frequency,
  endFrequency = frequency,
  gain,
  pan = 0,
  attack = 0.012,
  release = 0.18,
  harmonics = [[1, 1]],
}) => {
  const first = Math.max(0, Math.floor(start * sampleRate));
  const last = Math.min(frames, Math.ceil((start + length) * sampleRate));
  const [leftGain, rightGain] = panGains(pan);
  let phase = 0;

  for (let index = first; index < last; index += 1) {
    const localTime = index / sampleRate - start;
    const progress = localTime / length;
    const frequencyNow = frequency * Math.pow(endFrequency / frequency, smoothstep(progress));
    phase += (Math.PI * 2 * frequencyNow) / sampleRate;
    const fadeIn = smoothstep(localTime / attack);
    const fadeOut = smoothstep((length - localTime) / release);
    const envelope = gain * fadeIn * fadeOut;
    let sample = 0;
    for (const [multiple, amount] of harmonics) {
      sample += Math.sin(phase * multiple) * amount;
    }
    left[index] += sample * envelope * leftGain;
    right[index] += sample * envelope * rightGain;
  }
};

const addPing = (start, frequency, pan, gain = 0.07) => {
  addTone({
    start,
    length: 0.48,
    frequency,
    endFrequency: frequency * 1.012,
    gain,
    pan,
    attack: 0.07,
    release: 0.31,
    harmonics: [
      [1, 1],
      [2, 0.11],
      [3, 0.025],
    ],
  });
};

let noiseSeed = 0x72656462;
const randomNoise = () => {
  noiseSeed = (Math.imul(noiseSeed, 1664525) + 1013904223) >>> 0;
  return (noiseSeed / 0xffffffff) * 2 - 1;
};

const addWhoosh = ({ start, length, gain, pan = 0, cutoffStart = 180, cutoffEnd = 7200 }) => {
  const first = Math.max(0, Math.floor(start * sampleRate));
  const last = Math.min(frames, Math.ceil((start + length) * sampleRate));
  const [leftGain, rightGain] = panGains(pan);
  let filtered = 0;

  for (let index = first; index < last; index += 1) {
    const localTime = index / sampleRate - start;
    const progress = localTime / length;
    const cutoff = cutoffStart * Math.pow(cutoffEnd / cutoffStart, smoothstep(progress));
    const coefficient = 1 - Math.exp((-2 * Math.PI * cutoff) / sampleRate);
    filtered += coefficient * (randomNoise() - filtered);
    const rise = Math.pow(smoothstep(progress / 0.78), 1.7);
    const tail = smoothstep((1 - progress) / 0.22);
    const sample = filtered * gain * rise * tail;
    left[index] += sample * leftGain;
    right[index] += sample * rightGain;
  }
};

// Tichý harmonický nádych pripraví priestor ešte pred prvým viditeľným bodom.
addTone({
  start: 0.04,
  length: 1.85,
  frequency: 130.81,
  endFrequency: 146.83,
  gain: 0.022,
  attack: 0.72,
  release: 0.55,
  harmonics: [
    [1, 1],
    [2, 0.09],
  ],
});
addTone({
  start: 0.12,
  length: 1.7,
  frequency: 261.63,
  endFrequency: 293.66,
  gain: 0.018,
  pan: -0.25,
  attack: 0.78,
  release: 0.5,
});

// 1. Body postupne vystupujú z nádychu; hlasitosť rastie spolu s obrazom.
const dotNotes = [392, 440, 523.25, 587.33, 659.25, 783.99, 880, 1046.5, 1174.66];
dotNotes.forEach((frequency, index) => {
  const progress = index / (dotNotes.length - 1);
  addPing(
    0.28 + index * 0.115,
    frequency,
    -0.68 + progress * 1.36,
    0.018 + progress * 0.038
  );
});

// 2. Zmenšenie symbolu: svetlý vzostup v C dur pokračuje bez harmonického zlomu.
addTone({
  start: 1.35,
  length: 1.05,
  frequency: 392,
  endFrequency: 523.25,
  gain: 0.058,
  attack: 0.2,
  release: 0.38,
  harmonics: [
    [1, 1],
    [2, 0.1],
  ],
});

// 3. Wordmark sa otvorí do teplej durovej harmónie a jasného dvojtónového podpisu.
addTone({ start: 1.92, length: 1.25, frequency: 261.63, gain: 0.09, pan: -0.22, attack: 0.24, release: 0.48 });
addTone({ start: 1.98, length: 1.18, frequency: 329.63, gain: 0.075, pan: 0.08, attack: 0.25, release: 0.44 });
addTone({ start: 2.04, length: 1.12, frequency: 392, gain: 0.082, pan: 0.25, attack: 0.24, release: 0.42 });
addTone({
  start: 2.38,
  length: 0.48,
  frequency: 659.25,
  endFrequency: 783.99,
  gain: 0.055,
  pan: -0.12,
  attack: 0.055,
  release: 0.27,
  harmonics: [
    [1, 1],
    [2, 0.08],
  ],
});
addTone({
  start: 2.62,
  length: 0.64,
  frequency: 783.99,
  endFrequency: 1046.5,
  gain: 0.067,
  pan: 0.16,
  attack: 0.07,
  release: 0.42,
  harmonics: [
    [1, 1],
    [2, 0.07],
  ],
});

// Jemný základ uzavrie logo a nechá posledný tón prirodzene dohasnúť.
addTone({ start: 1.92, length: 1.18, frequency: 130.81, gain: 0.035, attack: 0.28, release: 0.5 });

// Cinematic vrstva: svetlý riser, široký pohyb a mäkký dopad bez temného trailerového charakteru.
addWhoosh({ start: 0.18, length: 2.18, gain: 0.038, pan: -0.22, cutoffStart: 140, cutoffEnd: 6200 });
addWhoosh({ start: 0.35, length: 2.12, gain: 0.034, pan: 0.28, cutoffStart: 220, cutoffEnd: 8400 });
addTone({
  start: 1.88,
  length: 1.15,
  frequency: 65.41,
  endFrequency: 65.41,
  gain: 0.052,
  attack: 0.018,
  release: 0.72,
  harmonics: [
    [1, 1],
    [2, 0.24],
  ],
});
addTone({
  start: 2.1,
  length: 1.12,
  frequency: 1046.5,
  endFrequency: 1567.98,
  gain: 0.027,
  pan: 0.34,
  attack: 0.34,
  release: 0.42,
  harmonics: [
    [1, 1],
    [2, 0.06],
  ],
});

let peak = 0;
for (let index = 0; index < frames; index += 1) {
  peak = Math.max(peak, Math.abs(left[index]), Math.abs(right[index]));
}
const normalization = 0.88 / Math.max(peak, 0.001);
const bytesPerSample = 2;
const channels = 2;
const dataSize = frames * channels * bytesPerSample;
const wav = Buffer.alloc(44 + dataSize);

wav.write("RIFF", 0);
wav.writeUInt32LE(36 + dataSize, 4);
wav.write("WAVE", 8);
wav.write("fmt ", 12);
wav.writeUInt32LE(16, 16);
wav.writeUInt16LE(1, 20);
wav.writeUInt16LE(channels, 22);
wav.writeUInt32LE(sampleRate, 24);
wav.writeUInt32LE(sampleRate * channels * bytesPerSample, 28);
wav.writeUInt16LE(channels * bytesPerSample, 32);
wav.writeUInt16LE(bytesPerSample * 8, 34);
wav.write("data", 36);
wav.writeUInt32LE(dataSize, 40);

for (let index = 0; index < frames; index += 1) {
  const offset = 44 + index * channels * bytesPerSample;
  wav.writeInt16LE(Math.round(clamp(left[index] * normalization, -1, 1) * 32767), offset);
  wav.writeInt16LE(Math.round(clamp(right[index] * normalization, -1, 1) * 32767), offset + 2);
}

const output = resolve("public/audio/redblue-sonic-logo-cinematic.wav");
mkdirSync(dirname(output), { recursive: true });
writeFileSync(output, wav);
console.log(`Generated ${output} (${duration.toFixed(1)} s, stereo, ${sampleRate} Hz)`);

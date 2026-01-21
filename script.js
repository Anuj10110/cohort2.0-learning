const notes = [
  { note:"C2",key:"z",url:"https://www.musicca.com/files/audio/tools/piano/28.mp3"},
  { note:"C#2",key:"s",url:"https://www.musicca.com/files/audio/tools/piano/29.mp3"},
  { note:"D2",key:"x",url:"https://www.musicca.com/files/audio/tools/piano/30.mp3"},
  { note:"D#2",key:"d",url:"https://www.musicca.com/files/audio/tools/piano/31.mp3"},
  { note:"E2",key:"c",url:"https://www.musicca.com/files/audio/tools/piano/32.mp3"},
  { note:"F2",key:"v",url:"https://www.musicca.com/files/audio/tools/piano/33.mp3"},
  { note:"F#2",key:"g",url:"https://www.musicca.com/files/audio/tools/piano/34.mp3"},
  { note:"G2",key:"b",url:"https://www.musicca.com/files/audio/tools/piano/35.mp3"},
  { note:"G#2",key:"h",url:"https://www.musicca.com/files/audio/tools/piano/36.mp3"},
  { note:"A2",key:"n",url:"https://www.musicca.com/files/audio/tools/piano/37.mp3"},
  { note:"A#2",key:"j",url:"https://www.musicca.com/files/audio/tools/piano/38.mp3"},
  { note:"B2",key:"m",url:"https://www.musicca.com/files/audio/tools/piano/39.mp3"},

  { note:"C3",key:"q",url:"https://www.musicca.com/files/audio/tools/piano/40.mp3"},
  { note:"C#3",key:"2",url:"https://www.musicca.com/files/audio/tools/piano/41.mp3"},
  { note:"D3",key:"w",url:"https://www.musicca.com/files/audio/tools/piano/42.mp3"},
  { note:"D#3",key:"3",url:"https://www.musicca.com/files/audio/tools/piano/43.mp3"},
  { note:"E3",key:"e",url:"https://www.musicca.com/files/audio/tools/piano/44.mp3"},
  { note:"F3",key:"r",url:"https://www.musicca.com/files/audio/tools/piano/45.mp3"},
  { note:"F#3",key:"5",url:"https://www.musicca.com/files/audio/tools/piano/46.mp3"},
  { note:"G3",key:"t",url:"https://www.musicca.com/files/audio/tools/piano/47.mp3"},
  { note:"G#3",key:"6",url:"https://www.musicca.com/files/audio/tools/piano/48.mp3"},
  { note:"A3",key:"y",url:"https://www.musicca.com/files/audio/tools/piano/49.mp3"},
  { note:"A#3",key:"7",url:"https://www.musicca.com/files/audio/tools/piano/50.mp3"},
  { note:"B3",key:"u",url:"https://www.musicca.com/files/audio/tools/piano/51.mp3"},

  { note:"C4",key:"i",url:"https://www.musicca.com/files/audio/tools/piano/52.mp3"},
  { note:"C#4",key:"9",url:"https://www.musicca.com/files/audio/tools/piano/53.mp3"},
  { note:"D4",key:"o",url:"https://www.musicca.com/files/audio/tools/piano/54.mp3"},
  { note:"D#4",key:"0",url:"https://www.musicca.com/files/audio/tools/piano/55.mp3"},
  { note:"E4",key:"p",url:"https://www.musicca.com/files/audio/tools/piano/56.mp3"},
  { note:"F4",key:"[",url:"https://www.musicca.com/files/audio/tools/piano/57.mp3"},
  { note:"F#4",key:"]",url:"https://www.musicca.com/files/audio/tools/piano/58.mp3"},
  { note:"G4",key:"Backslash",url:"https://www.musicca.com/files/audio/tools/piano/59.mp3"},
  { note:"G#4",key:"Equal",url:"https://www.musicca.com/files/audio/tools/piano/60.mp3"},
  { note:"A4",key:"Enter",url:"https://www.musicca.com/files/audio/tools/piano/61.mp3"},
  { note:"A#4",key:"Shift",url:"https://www.musicca.com/files/audio/tools/piano/62.mp3"},
  { note:"B4",key:"Ctrl",url:"https://www.musicca.com/files/audio/tools/piano/63.mp3"},
];

const piano = document.querySelector('#piano');
let lastWhiteKey = null;
const audioMap = {};


notes.forEach( function(note) {
    const audio = new Audio(note.url);
    audioMap[note.key] = audio;

    const key = document.createElement('div');
    key.className = 'key';
    key.dataset.key = note.key;
    key.innerHTML = `<span>${note.note}</span>`;

    if (note.note.includes('#')) {
        key.classList.add('black');
        lastWhiteKey.appendChild(key);
    } else {
        piano.appendChild(key);
        lastWhiteKey = key;
    }
})

function normalizeKey(e) {
    if (e.code === "Enter") return "Enter";
    if (e.code.startsWith("Shift")) return "Shift";
    if (e.code.startsWith("Control")) return "Ctrl";
    if (e.code === "Backslash") return "Backslash";
    if (e.code === "Equal") return "Equal";
    return e.key.toLowerCase();
}

document.body.addEventListener('keydown', function(key) {
    const normalizedKey = normalizeKey(key);
    const el = document.querySelector(`.key[data-key="${normalizedKey}"]`);
    if (!el) return;
    const audio = audioMap[normalizedKey];
    audio.currentTime = 0;
    audio.play();
    el.classList.add("active");
})

document.body.addEventListener("keyup", e => {
    const key = normalizeKey(e);
    const el = document.querySelector(`.key[data-key="${key}"]`);
    if (el) el.classList.remove("active");
});

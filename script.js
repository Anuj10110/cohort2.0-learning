const canvas = document.getElementById("canvas");
const layersList = document.getElementById("layers");

let elements = [];
let selectedId = null;

/* ---------- HELPERS ---------- */

function generateId() {
  return "el_" + Math.random().toString(36).slice(2, 8);
}

function getSelected() {
  return elements.find(el => el.id === selectedId);
}

/* ---------- CREATE ELEMENT ---------- */

function createElement(type) {
  const el = {
    id: generateId(),
    type,
    x: 60,
    y: 60,
    width: 120,
    height: 80,
    rotation: 0,
    bg: type === "rectangle" ? "#4f46e5" : "transparent",
    text: type === "text" ? "Text" : "",
    zIndex: elements.length + 1
  };

  elements.push(el);
  select(el.id);
  render();
}

/* ---------- RENDER ---------- */

function render() {
  canvas.innerHTML = "";
  layersList.innerHTML = "";

  elements.forEach(el => {
    const div = document.createElement("div");
    div.className = `element ${el.type}`;
    div.dataset.id = el.id;

    div.style.left = el.x + "px";
    div.style.top = el.y + "px";
    div.style.width = el.width + "px";
    div.style.height = el.height + "px";
    div.style.background = el.bg;
    div.style.zIndex = el.zIndex;

    if (el.type === "text") div.textContent = el.text;

    div.addEventListener("mousedown", e => {
      e.stopPropagation();
      select(el.id);
      startDrag(e, el);
    });

    if (el.id === selectedId) {
      div.classList.add("selected");
      addHandles(div, el);
    }

    canvas.appendChild(div);

    const li = document.createElement("li");
    li.textContent = el.id;
    li.onclick = () => select(el.id);
    layersList.appendChild(li);
  });

  save();
}

/* ---------- SELECTION ---------- */

function select(id) {
  selectedId = id;
  updateProps();
  render();
}

canvas.addEventListener("mousedown", () => {
  selectedId = null;
  render();
});

/* ---------- DRAG ---------- */

function startDrag(e, el) {
  const startX = e.clientX;
  const startY = e.clientY;
  const ox = el.x;
  const oy = el.y;

  function move(ev) {
    el.x = ox + (ev.clientX - startX);
    el.y = oy + (ev.clientY - startY);

    el.x = Math.max(0, Math.min(el.x, canvas.clientWidth - el.width));
    el.y = Math.max(0, Math.min(el.y, canvas.clientHeight - el.height));

    render();
  }

  document.addEventListener("mousemove", move);
  document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", move);
  }, { once: true });
}

/* ---------- RESIZE ---------- */

function addHandles(div, el) {
  ["tl","tr","bl","br"].forEach(pos => {
    const h = document.createElement("div");
    h.className = `handle ${pos}`;

    h.onmousedown = e => {
      e.stopPropagation();

      const sx = e.clientX;
      const sy = e.clientY;
      const w = el.width;
      const hgt = el.height;

      function resize(ev) {
        el.width = Math.max(30, w + (ev.clientX - sx));
        el.height = Math.max(30, hgt + (ev.clientY - sy));
        render();
      }

      document.addEventListener("mousemove", resize);
      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", resize);
      }, { once: true });
    };

    div.appendChild(h);
  });
}

/* ---------- PROPERTIES ---------- */

const propWidth = document.getElementById("propWidth");
const propHeight = document.getElementById("propHeight");
const propBg = document.getElementById("propBg");
const propText = document.getElementById("propText");

function updateProps() {
  const el = getSelected();
  if (!el) return;

  propWidth.value = el.width;
  propHeight.value = el.height;
  propBg.value = el.bg;
  propText.value = el.text;
}

[propWidth, propHeight, propBg, propText].forEach(input => {
  input.addEventListener("input", () => {
    const el = getSelected();
    if (!el) return;

    el.width = Number(propWidth.value);
    el.height = Number(propHeight.value);
    el.bg = propBg.value;
    el.text = propText.value;

    render();
  });
});

/* ---------- KEYBOARD ---------- */

document.addEventListener("keydown", e => {
  const el = getSelected();
  if (!el) return;

  const step = 5;

  if (e.key === "Delete") {
    elements = elements.filter(x => x.id !== el.id);
    selectedId = null;
  }

  if (e.key === "ArrowUp") el.y -= step;
  if (e.key === "ArrowDown") el.y += step;
  if (e.key === "ArrowLeft") el.x -= step;
  if (e.key === "ArrowRight") el.x += step;

  render();
});

/* ---------- SAVE / LOAD ---------- */

function save() {
  localStorage.setItem("layout", JSON.stringify(elements));
}

function load() {
  const data = localStorage.getItem("layout");
  if (data) elements = JSON.parse(data);
  render();
}

load();

/* ---------- BUTTONS ---------- */

document.getElementById("addRect").onclick = () => createElement("rectangle");
document.getElementById("addText").onclick = () => createElement("text");

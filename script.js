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
    textColor: "#000000",
    bg: type === "rectangle" ? "#4f46e5" : "transparent",
    text: type === "text" ? "Text" : "",
    zIndex: elements.length + 1
  };

  elements.push(el);
  select(el.id);
}

/* ---------- RENDER ---------- */

function render() {
  canvas.innerHTML = "";
  layersList.innerHTML = "";

  elements
    .sort((a, b) => a.zIndex - b.zIndex)
    .forEach(el => {
      const div = document.createElement("div");
      div.className = `element ${el.type}`;
      div.dataset.id = el.id;

      div.style.left = el.x + "px";
      div.style.top = el.y + "px";
      div.style.width = el.width + "px";
      div.style.height = el.height + "px";
      div.style.transform = `rotate(${el.rotation}deg)`;
      div.style.background = el.bg;
      div.style.zIndex = el.zIndex;

      if (el.type === "text") {
        div.textContent = el.text;
        div.style.color = el.textColor;
      }

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
  document.addEventListener(
    "mouseup",
    () => document.removeEventListener("mousemove", move),
    { once: true }
  );
}

/* ---------- RESIZE ---------- */

function addHandles(div, el) {
  ["tl", "tr", "bl", "br"].forEach(pos => {
    const handle = document.createElement("div");
    handle.className = `handle ${pos}`;

    handle.onmousedown = e => {
      e.stopPropagation();

      const sx = e.clientX;
      const sy = e.clientY;
      const sw = el.width;
      const sh = el.height;

      function resize(ev) {
        el.width = Math.max(30, sw + (ev.clientX - sx));
        el.height = Math.max(30, sh + (ev.clientY - sy));
        render();
      }

      document.addEventListener("mousemove", resize);
      document.addEventListener(
        "mouseup",
        () => document.removeEventListener("mousemove", resize),
        { once: true }
      );
    };

    div.appendChild(handle);
  });
}

/* ---------- PROPERTIES ---------- */

const propWidth = document.getElementById("propWidth");
const propHeight = document.getElementById("propHeight");
const propBg = document.getElementById("propBg");
const propText = document.getElementById("propText");
const propRotate = document.getElementById("propRotate");
const propTextColor = document.getElementById("propTextColor");

function updateProps() {
  const el = getSelected();
  if (!el) return;

  propWidth.value = el.width;
  propHeight.value = el.height;
  propBg.value = el.bg;
  propText.value = el.text;
  propRotate.value = el.rotation || 0;
  propTextColor.value = el.textColor || "#000000";

}

[propWidth, propHeight, propBg, propText, propRotate, propTextColor]
  .forEach(input => {

    input.addEventListener("input", () => {
      const el = getSelected();
      if (!el) return;

      el.width = Number(propWidth.value);
      el.height = Number(propHeight.value);
      el.rotation = Number(propRotate.value);

      if (el.type === "rectangle") {
        el.bg = propBg.value;
      }

      if (el.type === "text") {
        el.text = propText.value;
        el.textColor = propTextColor.value;
        el.bg = "transparent";
      }

      render();
    });

});



/* ---------- KEYBOARD ---------- */

window.addEventListener("keydown", e => {

  // input me typing ke time ignore
  if (
    document.activeElement.tagName === "INPUT" ||
    document.activeElement.tagName === "TEXTAREA"
  ) return;

  const el = getSelected();
  if (!el) return;

  e.preventDefault();

  const step = 5;

  if (e.key === "Delete" || e.key === "Backspace") {
    elements = elements.filter(x => x.id !== el.id);
    selectedId = null;
    render();
    return;
  }

  if (e.key === "ArrowUp") el.y -= step;
  if (e.key === "ArrowDown") el.y += step;
  if (e.key === "ArrowLeft") el.x -= step;
  if (e.key === "ArrowRight") el.x += step;

  render();
});



/* ---------- MOVE UP / DOWN ---------- */

document.getElementById("moveUp").onclick = () => {
  const el = getSelected();
  if (!el) return;

  const index = elements.findIndex(x => x.id === el.id);
  if (index === elements.length - 1) return;

  [elements[index], elements[index + 1]] =
    [elements[index + 1], elements[index]];

  updateZ();
  render();
};

document.getElementById("moveDown").onclick = () => {
  const el = getSelected();
  if (!el) return;

  const index = elements.findIndex(x => x.id === el.id);
  if (index === 0) return;

  [elements[index], elements[index - 1]] =
    [elements[index - 1], elements[index]];

  updateZ();
  render();
};

function updateZ() {
  elements.forEach((el, i) => {
    el.zIndex = i + 1;
  });
}


/* ---------- EXPORT JSON ---------- */

document.getElementById("exportJSON").onclick = () => {
  const data = JSON.stringify(elements, null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "design.json";
  a.click();

  URL.revokeObjectURL(url);
};

/* ---------- EXPORT HTML ---------- */

document.getElementById("exportHTML").onclick = () => {
  let html = `
<!doctype html>
<html>
<body style="margin:0;position:relative;width:900px;height:540px;">
`;

  elements.forEach(el => {
    html += `
<div style="
  position:absolute;
  left:${el.x}px;
  top:${el.y}px;
  width:${el.width}px;
  height:${el.height}px;
  background:${el.bg};
  color:${el.textColor || "#000"};
  transform: rotate(${el.rotation}deg);
  transform-origin:center;
  z-index:${el.zIndex};
">
${el.type === "text" ? el.text : ""}
</div>`;
  });

  html += `
</body>
</html>`;

  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "design.html";
  a.click();

  URL.revokeObjectURL(url);
};

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

document.getElementById("addRect").onclick = () =>
  createElement("rectangle");

document.getElementById("addText").onclick = () =>
  createElement("text");

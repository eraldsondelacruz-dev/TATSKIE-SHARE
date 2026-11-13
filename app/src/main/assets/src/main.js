import * as THREE from 'three';
import './style.css';

document.querySelector('#app').innerHTML = `
<div class="app">
  <aside class="sidebar">
    <div class="brand">
      <div class="brand-icon">T</div>
      <div><b>TATSKIE</b><small>SHARE NETWORK</small></div>
    </div>

    <div class="nav-label">WORKSPACE</div>
    <button class="nav active" data-page="dashboard">◈ Dashboard</button>
    <button class="nav" data-page="send">↗ Send files</button>
    <button class="nav" data-page="receive">⇩ Receive files</button>
    <button class="nav" data-page="devices">⌘ Devices</button>
    <button class="nav" data-page="settings">⚙ Settings</button>

    <div class="sidebar-bottom">
      <span class="online-dot"></span>
      SYSTEM READY
      <small>VERSION 988.0.3 · ARM64</small>
    </div>
  </aside>

  <main class="main">
    <header>
      <div>
        <div class="eyebrow">IMMERSIVE TRANSFER SYSTEM</div>
        <h1 id="page-title">Command Center</h1>
      </div>
      <div class="header-right">
        <span class="status"><i></i> ENGINE ONLINE</span>
        <div class="avatar">T</div>
      </div>
    </header>

    <section id="dashboard" class="page">
      <div class="hero">
        <div class="hero-copy">
          <div class="eyebrow">NEXT GENERATION FILE TRANSFER</div>
          <h2>Move data.<br><span>Without limits.</span></h2>
          <p>Secure, high-speed device-to-device file sharing powered by QUIC and verified by BLAKE3.</p>
          <div class="hero-buttons">
            <button class="primary" data-goto="send">↗ SEND FILES</button>
            <button class="secondary" data-goto="receive">⇩ RECEIVE FILES</button>
          </div>
        </div>
        <div class="orb-wrap">
          <canvas id="orb"></canvas>
          <div class="orb-caption">TATSKIE CORE <span>● ACTIVE</span></div>
        </div>
      </div>

      <div class="section-heading">SYSTEM OVERVIEW <span>LIVE DASHBOARD</span></div>
      <div class="stats">
        <article class="stat"><small>TRANSFER ENGINE</small><b class="cyan">QUIC</b><span>Transport protocol</span></article>
        <article class="stat"><small>INTEGRITY</small><b class="purple">BLAKE3</b><span>Content verification</span></article>
        <article class="stat"><small>RECOVERY</small><b class="green">ENABLED</b><span>Resumable transfers</span></article>
        <article class="stat"><small>VERSION</small><b>988.0.3</b><span>Immersive edition</span></article>
      </div>

      <div class="section-heading">QUICK ACTIONS</div>
      <div class="actions">
        <button data-goto="send"><b>↗</b><strong>Send a file</strong><small>Select a file to prepare a transfer</small></button>
        <button data-goto="receive"><b>⇩</b><strong>Receive a file</strong><small>Prepare to receive from another device</small></button>
        <button data-goto="devices"><b>⌘</b><strong>Manage devices</strong><small>View connection management</small></button>
      </div>
    </section>

    <section id="send" class="page hidden">
      <div class="panel">
        <div class="eyebrow">OUTGOING TRANSFER</div>
        <h2>Send your files</h2>
        <p>Select a file to prepare it for secure transfer.</p>
        <label class="dropzone" for="file-input">
          <div class="upload-icon">↑</div>
          <strong>Choose a file</strong>
          <span>Click to browse your device</span>
          <input type="file" id="file-input">
        </label>
        <div id="file-info" class="file-info">No file selected</div>
        <div class="notice">Transfer networking and device pairing will be connected in the next backend integration phase.</div>
      </div>
    </section>

    <section id="receive" class="page hidden">
      <div class="panel">
        <div class="eyebrow">INCOMING TRANSFER</div>
        <h2>Receive files</h2>
        <div class="receive-icon">⇩</div>
        <p>Incoming transfer listener is not connected yet.</p>
        <div class="notice">Your QUIC receiver and resumable transfer engine are already implemented in Rust. Next we will expose them through secure application commands.</div>
      </div>
    </section>

    <section id="devices" class="page hidden">
      <div class="panel">
        <div class="eyebrow">NETWORK MANAGEMENT</div>
        <h2>Your devices</h2>
        <div class="device-row"><span>●</span><div><b>Local device</b><small>Current application host</small></div><strong>LOCAL</strong></div>
        <div class="notice">Remote device discovery and authenticated pairing are not connected yet.</div>
      </div>
    </section>

    <section id="settings" class="page hidden">
      <div class="panel">
        <div class="eyebrow">APPLICATION CONFIGURATION</div>
        <h2>Settings</h2>
        <div class="setting"><span>Application version</span><b>988.0.3</b></div>
        <div class="setting"><span>Transport</span><b>QUIC</b></div>
        <div class="setting"><span>Integrity verification</span><b>BLAKE3</b></div>
        <div class="setting"><span>Resumable transfers</span><b>Enabled in engine</b></div>
        <div class="setting"><span>Maximum file size</span><b>10 GB default</b></div>
      </div>
    </section>

    <footer>TATSKIE-SHARE <span>SECURE DATA TRANSFER SYSTEM</span></footer>
  </main>
</div>`;

const pages = ['dashboard','send','receive','devices','settings'];

function navigate(page) {
  if (!pages.includes(page)) return;
  document.querySelectorAll('.page').forEach(el =>
    el.classList.toggle('hidden', el.id !== page));
  document.querySelectorAll('.nav').forEach(el =>
    el.classList.toggle('active', el.dataset.page === page));
  document.querySelector('#page-title').textContent =
    page === 'dashboard' ? 'Command Center' :
    page.charAt(0).toUpperCase() + page.slice(1);
}

document.querySelectorAll('[data-page]').forEach(button =>
  button.addEventListener('click', () => navigate(button.dataset.page)));

document.querySelectorAll('[data-goto]').forEach(button =>
  button.addEventListener('click', () => navigate(button.dataset.goto)));

document.querySelector('#file-input').addEventListener('change', event => {
  const file = event.target.files[0];
  document.querySelector('#file-info').textContent = file
    ? `${file.name} · ${(file.size / 1048576).toFixed(2)} MB · Selected`
    : 'No file selected';
});

// Interactive Three.js energy core
const canvas = document.querySelector('#orb');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({
  canvas, alpha: true, antialias: true
});
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

const core = new THREE.Group();
scene.add(core);

const geometry = new THREE.IcosahedronGeometry(1.05, 4);
const material = new THREE.MeshPhysicalMaterial({
  color: 0x147dff,
  emissive: 0x062c80,
  emissiveIntensity: 1.2,
  metalness: 0.75,
  roughness: 0.18,
  wireframe: true
});
const sphere = new THREE.Mesh(geometry, material);
core.add(sphere);

const ringMaterial = new THREE.MeshBasicMaterial({
  color: 0x16cfff,
  transparent: true,
  opacity: 0.8
});

for (let i = 0; i < 3; i++) {
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.35 + i * 0.17, 0.009, 8, 180),
    ringMaterial.clone()
  );
  ring.rotation.x = Math.PI * (0.3 + i * 0.27);
  ring.rotation.y = Math.PI * (0.2 + i * 0.3);
  core.add(ring);
}

const particles = new THREE.BufferGeometry();
const positions = [];
for (let i = 0; i < 650; i++) {
  positions.push(
    (Math.random() - 0.5) * 5,
    (Math.random() - 0.5) * 5,
    (Math.random() - 0.5) * 5
  );
}
particles.setAttribute('position',
  new THREE.Float32BufferAttribute(positions, 3));

const particleCloud = new THREE.Points(
  particles,
  new THREE.PointsMaterial({
    color: 0x48cfff,
    size: 0.018,
    transparent: true,
    opacity: 0.8
  })
);
scene.add(particleCloud);

scene.add(new THREE.AmbientLight(0x789cff, 2));
const light = new THREE.PointLight(0x168cff, 30, 10);
light.position.set(2, 2, 3);
scene.add(light);

function resize() {
  const width = canvas.clientWidth || 400;
  const height = canvas.clientHeight || 400;
  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}
new ResizeObserver(resize).observe(canvas);
resize();

let pointerX = 0;
let pointerY = 0;
canvas.addEventListener('pointermove', event => {
  const rect = canvas.getBoundingClientRect();
  pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 0.5;
  pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 0.5;
});

function animate(time) {
  requestAnimationFrame(animate);
  core.rotation.y = time * 0.00022 + pointerX;
  core.rotation.x = Math.sin(time * 0.0003) * 0.15 + pointerY;
  particleCloud.rotation.y = -time * 0.000025;
  sphere.scale.setScalar(1 + Math.sin(time * 0.0015) * 0.025);
  renderer.render(scene, camera);
}
requestAnimationFrame(animate);

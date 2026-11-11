// 面板内的真模型 3D 视图（Three.js + Kenney CC0 模型）
// 由 card_template.js 按需 import；资产与本文件同级目录下的 three.module.js / GLTFLoader.js / models/
//
// 设计约束：
// - 不破坏现有 2D / 2.5D：这是第三个独立视图
// - 灯的状态来自 HA（由调用方传入 state），不是 mock
// - 家具朝向/缩放规则与 demo 一致（见 docs/夜间记录-模型接入.md）

const S = 0.01;                 // cm → m
const CUT = 1.20;               // 剖切高度

const MODELS = {
  bed: { file: 'bedDouble.glb', rot: 0 },
  wardrobe: { file: 'cabinetTelevisionDoors.glb', rot: 0 },
  dresser: { file: 'sideTableDrawers.glb', rot: 0 },
  sofa: { file: 'loungeSofaLong.glb', rot: -Math.PI / 2 },
  display: { file: 'bookcaseClosed.glb', rot: -Math.PI / 2 },
  desk: { file: 'desk.glb', rot: Math.PI / 2 },
  chair: { file: 'chairDesk.glb', rot: Math.PI },
  cube: { file: 'bookcaseClosedWide.glb', rot: 0 },
  rack: { file: 'bookcaseOpen.glb', rot: Math.PI / 2 },
  fridge: { file: 'kitchenFridge.glb', rot: -Math.PI / 2 },
  bin: { file: 'trashcan.glb', rot: 0 },
  shower: { file: 'shower.glb', rot: Math.PI / 2 },
  toilet: { file: 'toilet.glb', rot: Math.PI / 2 },
  basin: { file: 'bathroomSink.glb', rot: Math.PI / 2 },
  counter_s: { file: 'kitchenCabinetDrawer.glb', rot: 0 },
  counter_w: { file: 'kitchenCabinet.glb', rot: Math.PI / 2 },
  cooktop: { file: 'kitchenStove.glb', rot: 0 },
  sink: { file: 'kitchenSink.glb', rot: 0 },
};

export async function createView3D({ container, data, state, baseUrl, onPick, onReady }) {
  const THREE = await import(new URL('three.module.js', baseUrl).href);
  const { GLTFLoader } = await import(new URL('GLTFLoader.js', baseUrl).href);
  const { OrbitControls } = await import(new URL('OrbitControls.js', baseUrl).href);

  const m3 = data.model3d || {};
  const rooms = m3.rooms || [];
  const walls = m3.walls || [];
  const doors = m3.doors || [];
  const furn = m3.furn || [];
  const decals = m3.decals || [];

  // 视野中心
  let xs = [], ys = [];
  for (const r of rooms) for (const p of r.poly) { xs.push(p[0]); ys.push(p[1]); }
  const CX = xs.length ? (Math.min(...xs) + Math.max(...xs)) / 2 : 275;
  const CY = ys.length ? (Math.min(...ys) + Math.max(...ys)) / 2 : 425;
  const tx = x => (x - CX) * S;
  const tz = y => (y - CY) * S;

  const W = container.clientWidth || 800;
  const H = container.clientHeight || 600;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(W, H);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x0c1118, 14, 30);

  const camera = new THREE.PerspectiveCamera(38, W / H, 0.1, 100);
  camera.position.set(5.6, 9.6, 8.2);
  camera.lookAt(0, 0.4, 0);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0.35, 0);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.maxPolarAngle = Math.PI * 0.49;
  controls.minDistance = 3;
  controls.maxDistance = 26;
  controls.update();

  // ---- 材质（代码生成纹理） ----
  function canvasTex(size, draw, rx = 1, ry = 1) {
    const c = document.createElement('canvas');
    c.width = c.height = size;
    draw(c.getContext('2d'), size);
    const t = new THREE.CanvasTexture(c);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(rx, ry);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }
  const woodTex = canvasTex(256, (g, w) => {
    g.fillStyle = '#8B5E3C'; g.fillRect(0, 0, w, w);
    for (let i = 0; i < 70; i++) {
      const y = Math.random() * w, amp = 2 + Math.random() * 6;
      g.strokeStyle = `rgba(60,36,20,${0.08 + Math.random() * 0.18})`;
      g.lineWidth = 0.6 + Math.random() * 2;
      g.beginPath();
      for (let x = 0; x <= w; x += 6) g.lineTo(x, y + Math.sin(x / w * Math.PI * 2 + i) * amp);
      g.stroke();
    }
  }, 3, 3);
  const clothTex = canvasTex(256, (g, w) => {
    g.fillStyle = '#CFC3AE'; g.fillRect(0, 0, w, w);
    for (let y = 0; y < w; y += 3) { g.fillStyle = `rgba(255,255,255,${0.05 + Math.random() * 0.06})`; g.fillRect(0, y, w, 1.4); }
    for (let x = 0; x < w; x += 3) { g.fillStyle = `rgba(120,104,84,${0.05 + Math.random() * 0.07})`; g.fillRect(x, 0, 1.3, w); }
  }, 3, 3);
  const tileTex = canvasTex(256, (g, w) => {
    g.fillStyle = '#DCD8CF'; g.fillRect(0, 0, w, w);
    g.strokeStyle = 'rgba(150,146,138,.55)'; g.lineWidth = 2;
    for (let i = 0; i <= w; i += 64) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i, w); g.stroke(); g.beginPath(); g.moveTo(0, i); g.lineTo(w, i); g.stroke(); }
  }, 2, 2);

  const MAT = {
    floorWood: new THREE.MeshStandardMaterial({ map: woodTex, roughness: 0.62, side: THREE.DoubleSide }),
    floorHard: new THREE.MeshStandardMaterial({ map: tileTex, roughness: 0.42, side: THREE.DoubleSide }),
    wood: new THREE.MeshStandardMaterial({ map: woodTex, roughness: 0.62 }),
    woodDark: new THREE.MeshStandardMaterial({ map: woodTex, color: 0x8a6448, roughness: 0.58 }),
    fabric: new THREE.MeshStandardMaterial({ map: clothTex, color: 0xBFB6A6, roughness: 1 }),
    fabricLight: new THREE.MeshStandardMaterial({ color: 0xF2EEE6, roughness: 1 }),
    hard: new THREE.MeshStandardMaterial({ map: tileTex, roughness: 0.42 }),
    metal: new THREE.MeshStandardMaterial({ color: 0xB08D57, roughness: 0.35, metalness: 0.75 }),
    metalDark: new THREE.MeshStandardMaterial({ color: 0x3A4149, roughness: 0.42, metalness: 0.6 }),
    glass: new THREE.MeshStandardMaterial({ color: 0xBFD8E6, roughness: 0.15, metalness: 0.1, transparent: true, opacity: 0.22 }),
    wall: new THREE.MeshStandardMaterial({ color: 0xE7E1D4, roughness: 0.92 }),
  };
  const MAT_OF = m => (m === 'soft' ? MAT.fabric : m === 'wood' ? MAT.wood : MAT.hard);

  // ---- 灯光 ----
  scene.add(new THREE.HemisphereLight(0xA8BCDA, 0x2A2118, 0.85));
  const key = new THREE.DirectionalLight(0xfff2df, 1.15);
  key.position.set(5, 9, 4);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  key.shadow.camera.left = -8; key.shadow.camera.right = 8;
  key.shadow.camera.top = 8; key.shadow.camera.bottom = -8;
  scene.add(key);

  // ---- 地板 / 房间 ----
  const roomCenters = {};
  const floorMeshes = [];
  for (const r of rooms) {
    const shape = new THREE.Shape();
    r.poly.forEach((p, i) => { const X = tx(p[0]), Z = -tz(p[1]); i ? shape.lineTo(X, Z) : shape.moveTo(X, Z); });
    shape.closePath();
    const geo = new THREE.ShapeGeometry(shape);
    geo.rotateX(-Math.PI / 2);         // Shape 在 XY 平面，-90° 后法线朝上
    const isWet = ['浴室', '厨房', '大阳台', '小阳台'].includes(r.name);
    const mesh = new THREE.Mesh(geo, isWet ? MAT.floorHard : MAT.floorWood);
    mesh.position.y = 0.001;
    mesh.receiveShadow = true;
    mesh.userData = { type: 'room', room: r.name };
    scene.add(mesh);
    floorMeshes.push(mesh);

    let cx = 0, cy = 0;
    r.poly.forEach(p => { cx += p[0]; cy += p[1]; });
    cx /= r.poly.length; cy /= r.poly.length;
    roomCenters[r.name] = { x: tx(cx), z: tz(cy) };

    const on = !!(state.lights && state.lights[r.name]);
    const pl = new THREE.PointLight(0xffcf8f, on ? 11 : 0, 12, 2);
    pl.position.set(tx(cx), 1.15, tz(cy));
    scene.add(pl);
    roomCenters[r.name].light = pl;
  }

  // ---- 墙 ----
  const wallGroup = new THREE.Group(); scene.add(wallGroup);
  for (const w of walls) {
    const [x1, y1, x2, y2] = w.seg;
    const X1 = tx(x1), Z1 = tz(y1), X2 = tx(x2), Z2 = tz(y2);
    const len = Math.hypot(X2 - X1, Z2 - Z1);
    if (len < 1e-4) continue;
    const t = (w.t || 10) * S;
    const geo = new THREE.BoxGeometry(len, CUT, t);
    const m = new THREE.Mesh(geo, MAT.wall);
    m.position.set((X1 + X2) / 2, CUT / 2, (Z1 + Z2) / 2);
    m.rotation.y = -Math.atan2(Z2 - Z1, X2 - X1);
    m.castShadow = true; m.receiveShadow = true;
    wallGroup.add(m);
  }

  // ---- 门扇 ----
  for (const d of doors) {
    if (d.type === 'swing' && d.hinge && d.open) {
      const [hx, hy] = d.hinge, [ox, oy] = d.open;
      const dx = ox - hx, dy = oy - hy;
      const L = (Math.hypot(dx, dy) || d.w) * S;
      const m = new THREE.Mesh(new THREE.BoxGeometry(L, CUT - 0.02, 0.045), MAT.wood);
      m.position.set(tx(hx + dx / 2), (CUT - 0.02) / 2, tz(hy + dy / 2));
      m.rotation.y = -Math.atan2(dy, dx);
      m.castShadow = true;
      scene.add(m);
    } else if (d.type === 'sliding' && d.gap) {
      const [[x1, y1], [x2, y2]] = d.gap;
      const ang = Math.atan2(y2 - y1, x2 - x1);
      const L = Math.hypot(x2 - x1, y2 - y1) * S * 0.56;
      for (const k of [0, 1]) {
        const mx = x1 + (x2 - x1) * (k ? 0.72 : 0.28);
        const my = y1 + (y2 - y1) * (k ? 0.72 : 0.28);
        const m = new THREE.Mesh(new THREE.BoxGeometry(L, CUT - 0.02, 0.03), MAT.wood);
        m.position.set(tx(mx), (CUT - 0.02) / 2, tz(my) + (k ? 0.035 : -0.035));
        m.rotation.y = -ang;
        scene.add(m);
      }
    }
  }

  // ---- 家具（先放盒子，模型到了再替换） ----
  const furnGroup = new THREE.Group(); scene.add(furnGroup);
  const pickable = [];
  for (const it of furn) {
    const w = it.w * S, d = it.d * S;
    const h = Math.min((it.h || 40) * S, CUT - 0.05);
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), MAT_OF(it.mat));
    m.position.set(tx(it.x + it.w / 2), (it.z || 0) * S + h / 2, tz(it.y + it.d / 2));
    m.castShadow = true; m.receiveShadow = true;
    m.userData = { type: 'furn', item: it };
    furnGroup.add(m);
    pickable.push(m);
  }

  // ---- 设备点 ----
  const PIN = {
    light: 0xffcd5c, switch: 0xffcd5c, wall_switch: 0xffcd5c, cover: 0xa882ff,
    sensor: 0x6eebaa, binary_sensor: 0x6eebaa, climate: 0x8fd3ff, media: 0xf0a5ff,
    pet: 0xffa06e, scene: 0x9fd0ff, gateway: 0xb9c4d6,
  };
  const devMeshes = [];
  for (const dc of decals) {
    const c = PIN[dc.kind] || 0xc8c8c8;
    const m = new THREE.Mesh(
      new THREE.CylinderGeometry(0.085, 0.085, 0.05, 20),
      new THREE.MeshStandardMaterial({ color: c, emissive: c, emissiveIntensity: 0.75, roughness: 0.3 })
    );
    m.position.set(tx(dc.x), 1.27, tz(dc.y));
    m.userData = { type: 'device', dev: dc };
    scene.add(m);
    devMeshes.push(m);
  }

  // ---- 房间名 ----
  function label(text) {
    const fs = 44, pad = 10;
    const c = document.createElement('canvas');
    const g0 = c.getContext('2d');
    g0.font = `600 ${fs}px "Microsoft YaHei", sans-serif`;
    const w = Math.ceil(g0.measureText(text).width) + pad * 2, h = fs + pad * 2;
    c.width = w; c.height = h;
    const g = c.getContext('2d');
    g.font = `600 ${fs}px "Microsoft YaHei", sans-serif`;
    g.fillStyle = 'rgba(10,14,22,0.6)';
    if (g.roundRect) { g.beginPath(); g.roundRect(0, 0, w, h, 14); g.fill(); } else g.fillRect(0, 0, w, h);
    g.fillStyle = '#EAF0FA'; g.textBaseline = 'middle'; g.fillText(text, pad, h / 2 + 2);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    const spr = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false, depthWrite: false }));
    const k = 0.0038;
    spr.scale.set(w * k, h * k, 1);
    spr.renderOrder = 999;
    return spr;
  }
  for (const [nm, pc] of Object.entries(roomCenters)) {
    const s = label(nm);
    s.position.set(pc.x, 1.55, pc.z);
    scene.add(s);
  }

  // ---- 加载真模型并替换盒子 ----
  const loader = new GLTFLoader();
  const cache = {};
  const loadOne = f => new Promise((res, rej) => loader.load(new URL('models/' + f, baseUrl).href, res, undefined, rej));

  (async () => {
    for (const it of furn) {
      const mm = MODELS[it.id];
      if (!mm) continue;
      try {
        if (!cache[mm.file]) cache[mm.file] = await loadOne(mm.file);
        const root = cache[mm.file].scene.clone(true);
        const bb0 = new THREE.Box3().setFromObject(root);
        const sz = bb0.getSize(new THREE.Vector3());
        if (sz.x < 1e-6 || sz.y < 1e-6 || sz.z < 1e-6) continue;

        const Wd = it.w * S, Dd = it.d * S, Hd = Math.min((it.h || 40) * S, CUT - 0.05);
        const swap = Math.abs(Math.abs(mm.rot) - Math.PI / 2) < 0.01;
        let sx = (swap ? Dd : Wd) / sz.x;
        let sz2 = (swap ? Wd : Dd) / sz.z;
        const sy = Hd / sz.y;
        const hmax = Math.max(sx, sz2), hmin = Math.min(sx, sz2);
        if (hmax / hmin > 6) { sx = sz2 = (hmax + hmin) / 2; }
        root.scale.set(sx, sy, sz2);
        root.rotation.y = mm.rot;

        const g = new THREE.Group();
        g.add(root);
        g.updateMatrixWorld(true);
        const bb1 = new THREE.Box3().setFromObject(g);
        const c1 = bb1.getCenter(new THREE.Vector3());
        const cx = tx(it.x + it.w / 2), cz = tz(it.y + it.d / 2);
        g.position.set(cx - c1.x, (it.z || 0) * S - bb1.min.y, cz - c1.z);
        g.updateMatrixWorld(true);

        // 夹回所属房间（支持 L 形）
        const room = rooms.find(r => r.name === it.room);
        if (room && room.poly.length > 2) {
          const poly = room.poly.map(p => ({ x: p[0], y: p[1] }));
          const inPoly = (X, Z) => {
            const x = X / S + CX, y = Z / S + CY;
            let c = false;
            for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
              const xi = poly[i].x, yi = poly[i].y, xj = poly[j].x, yj = poly[j].y;
              if (((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi + 1e-9) + xi)) c = !c;
            }
            return c;
          };
          const gx0 = poly.reduce((a, q) => a + q.x, 0) / poly.length;
          const gy0 = poly.reduce((a, q) => a + q.y, 0) / poly.length;
          const ok = () => {
            const b = new THREE.Box3().setFromObject(g);
            return [[b.min.x, b.min.z], [b.max.x, b.min.z], [b.min.x, b.max.z], [b.max.x, b.max.z]].every(c2 => inPoly(c2[0], c2[1]));
          };
          for (const t of [0, 0.25, 0.5, 0.75, 1.0]) {
            if (ok()) break;
            g.position.x += ((gx0 - CX) * S - g.position.x) * t * 0.5;
            g.position.z += ((gy0 - CY) * S - g.position.z) * t * 0.5;
            g.updateMatrixWorld(true);
          }
        }

        // 隐藏对应盒子
        furnGroup.children.forEach(o => {
          if (o.userData && o.userData.item === it) o.visible = false;
        });

        const matByName = nm => {
          const n = String(nm || '').toLowerCase();
          if (n.includes('glass')) return MAT.glass;
          if (n.includes('wood')) return n.includes('dark') ? MAT.woodDark : MAT.wood;
          if (n.includes('metaldark') || n.includes('dark')) return MAT.metalDark;
          if (n.includes('metal')) return MAT.metal;
          if (n.includes('carpetwhite') || n.includes('white')) return MAT.fabricLight;
          if (n.includes('carpet') || n.includes('fabric') || n.includes('cloth') || n.includes('sofa')) return MAT.fabric;
          return null;
        };
        g.traverse(o => {
          if (!o.isMesh) return;
          const m2 = matByName(o.material && o.material.name);
          if (m2) o.material = m2;
          o.castShadow = true; o.receiveShadow = true;
          o.userData = { type: 'furn', item: it };
          pickable.push(o);
        });
        furnGroup.add(g);
      } catch (e) { /* 单个模型失败不影响整体 */ }
    }
    if (onReady) onReady();
  })();

  // ---- 拾取 ----
  const ray = new THREE.Raycaster();
  const ptr = new THREE.Vector2();
  let down = null;
  renderer.domElement.addEventListener('pointerdown', e => { down = { x: e.clientX, y: e.clientY }; });
  renderer.domElement.addEventListener('pointerup', e => {
    if (!down) return;
    const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y);
    down = null;
    if (moved > 6) return;
    const r = renderer.domElement.getBoundingClientRect();
    ptr.x = ((e.clientX - r.left) / r.width) * 2 - 1;
    ptr.y = -((e.clientY - r.top) / r.height) * 2 + 1;
    ray.setFromCamera(ptr, camera);
    const hit = ray.intersectObjects(pickable.concat(devMeshes), false)[0];
    if (hit && onPick) onPick(hit.object.userData);
  });

  // ---- 状态更新 ----
  function setState(st) {
    if (!st) return;
    for (const [nm, pc] of Object.entries(roomCenters)) {
      if (!pc.light) continue;
      const on = !!(st.lights && st.lights[nm]);
      pc.light.intensity = on ? 11 : 0;
    }
    if (st.ac && roomCenters[st.ac.room] && roomCenters[st.ac.room].light) {
      const l = roomCenters[st.ac.room].light;
      l.color.set(st.ac.on ? 0x9FD4FF : 0xffcf8f);
    }
  }

  // ---- 渲染循环 ----
  let raf = 0, alive = true;
  const t0 = performance.now();
  let frames = 0;
  function loop() {
    if (!alive) return;
    raf = requestAnimationFrame(loop);
    controls.update();
    renderer.render(scene, camera);
    frames++;
  }
  loop();

  const onResize = () => {
    const w = container.clientWidth, h = container.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  const ro = new ResizeObserver(onResize);
  ro.observe(container);

  return {
    setState,
    resize: onResize,
    dispose() {
      alive = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      renderer.dispose();
      container.innerHTML = '';
    },
  };
}

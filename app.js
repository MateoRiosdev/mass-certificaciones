const certificates = [
  {
    id: '01',
    level: 'Nivel Intermedio 2026',
    area: 'Operaciones',
    title: 'Procesos de Cajas',
    course: 'Nivel Intermedio 2026 | Operaciones - Procesos de Cajas',
    date: '24/09/2026',
    duration: '1.00 h lectiva',
    score: null,
    description: 'Formación orientada a operaciones y procesos de caja dentro de tienda.',
    image: './assets/certificados/01.png'
  },
  {
    id: '02',
    level: 'Nivel Intermedio 2026',
    area: 'SST',
    title: 'Acción ante Emergencia',
    course: 'Nivel Intermedio 2026 | SST - Acción ante Emergencia',
    date: '24/09/2026',
    duration: '1.00 h lectiva',
    score: '16',
    description: 'Capacitación sobre actuación y respuesta ante situaciones de emergencia.',
    image: './assets/certificados/02.png'
  },
  {
    id: '03',
    level: 'Nivel Intermedio 2026',
    area: 'Calidad',
    title: 'ETAS',
    course: 'Nivel Intermedio 2026 | Calidad - ETAS',
    date: '24/09/2026',
    duration: '1.00 h lectiva',
    score: null,
    description: 'Formación vinculada a calidad y prevención de enfermedades transmitidas por alimentos.',
    image: './assets/certificados/03.png'
  },
  {
    id: '04',
    level: 'MASS 2026',
    area: 'Ética',
    title: 'Ética y Compliance',
    course: 'MASS | ÉTICA Y COMPLIANCE 2026',
    date: '24/09/2026',
    duration: '1.00 h lectiva',
    score: null,
    description: 'Curso de ética y cumplimiento aplicado al entorno laboral.',
    image: './assets/certificados/04.png'
  },
  {
    id: '05',
    level: 'Nivel Introductorio 2026',
    area: 'SST',
    title: 'Uso Seguro de Equipos',
    course: 'Nivel Introductorio 2026 | SST - Uso Seguro de Equipos',
    date: '24/09/2026',
    duration: '1.00 h lectiva',
    score: '20',
    description: 'Introducción a prácticas de seguridad para el uso adecuado de equipos.',
    image: './assets/certificados/05.png'
  },
  {
    id: '06',
    level: 'Nivel Introductorio 2026',
    area: 'SST',
    title: 'IPERC',
    course: 'Nivel Introductorio 2026 | SST - IPERC',
    date: '24/09/2026',
    duration: '1.00 h lectiva',
    score: '20',
    description: 'Introducción a la identificación de peligros, evaluación de riesgos y controles.',
    image: './assets/certificados/06.png'
  },
  {
    id: '07',
    level: 'Nivel Introductorio 2026',
    area: 'SST',
    title: 'Orden y Limpieza',
    course: 'Nivel Introductorio 2026 | SST - Orden y Limpieza',
    date: '24/09/2026',
    duration: '1.00 h lectiva',
    score: '20',
    description: 'Buenas prácticas introductorias para mantener espacios de trabajo seguros y ordenados.',
    image: './assets/certificados/07.png'
  },
  {
    id: '08',
    level: 'Nivel Introductorio 2026',
    area: 'SST',
    title: 'Manipulación de Carga Pesada',
    course: 'Nivel Introductorio 2026 | SST - Manipulación de Carga Pesada',
    date: '24/09/2026',
    duration: '1.00 h lectiva',
    score: '20',
    description: 'Principios de seguridad para la manipulación y traslado de cargas pesadas.',
    image: './assets/certificados/08.png'
  },
  {
    id: '09',
    level: 'Nivel Introductorio 2026',
    area: 'Sostenibilidad',
    title: 'Acoso Sexual Laboral',
    course: 'Nivel Introductorio 2026 | Sostenibilidad - Acoso Sexual Laboral',
    date: '24/09/2026',
    duration: '1.00 h lectiva',
    score: null,
    description: 'Formación introductoria relacionada con prevención y convivencia laboral respetuosa.',
    image: './assets/certificados/09.png'
  },
  {
    id: '10',
    level: 'Nivel Introductorio 2026',
    area: 'Sostenibilidad',
    title: 'Sostenibilidad',
    course: 'Nivel Introductorio 2026 | Sostenibilidad - Sostenibilidad',
    date: '24/09/2026',
    duration: '1.00 h lectiva',
    score: null,
    description: 'Introducción a conceptos y prácticas de sostenibilidad en el entorno de trabajo.',
    image: './assets/certificados/10.png'
  },
  {
    id: '11',
    level: 'Nivel Introductorio 2026',
    area: 'Calidad',
    title: 'Lavado de Manos',
    course: 'Nivel Introductorio 2026 | Calidad - Lavado de Manos',
    date: '24/09/2026',
    duration: '1.00 h lectiva',
    score: null,
    description: 'Formación introductoria sobre higiene de manos y prácticas básicas de calidad.',
    image: './assets/certificados/11.png'
  },
  {
    id: '12',
    level: 'Nivel Introductorio 2026',
    area: 'Calidad',
    title: 'Buenas Prácticas de Manipulación',
    course: 'Nivel Introductorio 2026 | Calidad - Buenas Prácticas de Manipulación',
    date: '24/09/2026',
    duration: '1.00 h lectiva',
    score: null,
    description: 'Introducción a buenas prácticas de manipulación aplicadas a calidad e inocuidad.',
    image: './assets/certificados/12.png'
  }
];

const carousel = document.getElementById('carousel');
const activeDetail = document.getElementById('activeDetail');
const activeNumber = document.getElementById('activeNumber');
const totalNumber = document.getElementById('totalNumber');
const vaultStage = document.getElementById('vaultStage');
const dragHint = document.getElementById('dragHint');
const themeToggle = document.getElementById('themeToggle');
const modal = document.getElementById('certificateModal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalInfo = document.getElementById('modalInfo');
const imagePlaceholder = document.getElementById('imagePlaceholder');
const openActive = document.getElementById('openActive');

let activeIndex = 0;
let rotation = 0;
let startX = 0;
let startRotation = 0;
let isDragging = false;
let dragDistance = 0;
let lastPointerTime = 0;
let lastPointerX = 0;
let pointerVelocity = 0;

const angleStep = 360 / certificates.length;

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;'
  }[char]));
}

function getRadius() {
  const width = window.innerWidth;
  const cardWidth = width <= 620 ? 190 : width <= 860 ? 200 : (window.innerHeight <= 820 ? 165 : 190);
  const gap = width <= 620 ? 14 : 22;
  const raw = (cardWidth + gap) / (2 * Math.sin(Math.PI / certificates.length));
  return Math.min(raw, width * 0.95);
}

function renderCards() {
  const radius = getRadius();
  carousel.innerHTML = '';
  certificates.forEach((certificate, index) => {
    const angle = index * angleStep;
    const card = document.createElement('article');
    card.className = `cert-card${index === activeIndex ? ' active' : ''}`;
    card.dataset.index = String(index);
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', index === activeIndex ? '0' : '-1');
    card.setAttribute('aria-label', `${certificate.course}. ${index + 1} de ${certificates.length}`);
    card.innerHTML = `
      <div class="card-inner">
        <span class="card-number">${certificate.id}</span>
        <div class="card-preview">
          <img src="${certificate.image}" alt="" loading="lazy" onerror="this.hidden=true; this.nextElementSibling.hidden=false;" />
          <div class="preview-placeholder" hidden>
            <strong>${escapeHtml(certificate.title)}</strong>
            <span>PNG no encontrado.<br>Revisa la ruta del certificado.</span>
          </div>
        </div>
        <div class="card-overlay">
          <div class="card-level">${escapeHtml(certificate.level)} · ${escapeHtml(certificate.area)}</div>
          <div class="card-title">${escapeHtml(certificate.title)}</div>
          <div class="card-date">${escapeHtml(certificate.date)} · ${escapeHtml(certificate.duration)}</div>
          <div class="card-status">✓ Completado</div>
        </div>
      </div>
    `;
    carousel.appendChild(card);
  });
  positionCards(radius);
}

function positionCards(radius) {
  carousel.style.transform = `translateZ(${-radius}px)`;
  const cards = [...document.querySelectorAll('.cert-card')];
  cards.forEach((card, index) => {
    const relative = ((index - activeIndex) % certificates.length + certificates.length) % certificates.length;
    const signed = relative > certificates.length / 2 ? relative - certificates.length : relative;
    const angle = signed * angleStep + rotationOffset();
    const normalized = Math.cos(angle * Math.PI / 180);
    const depth = (normalized + 1) / 2;
    const opacity = 0.2 + depth * 0.8;
    const scale = 0.72 + depth * 0.28;
    const blur = Math.max(0, (1 - depth) * 2.5);
    card.style.transform = `rotateY(${angle}deg) translateZ(${radius}px) scale(${scale})`;
    card.style.opacity = opacity.toFixed(3);
    card.style.filter = `blur(${blur}px)`;
    card.style.zIndex = String(Math.round(depth * 100));
  });
}

function rotationOffset() {
  let offset = rotation % 360;
  if (offset > 180) offset -= 360;
  if (offset < -180) offset += 360;
  return offset;
}

function snapToIndex(nextIndex) {
  activeIndex = (nextIndex + certificates.length) % certificates.length;
  rotation = 0;
  updateUI();
}

function rotateBy(steps) {
  snapToIndex(activeIndex + steps);
  dragHint.classList.add('hidden');
}

function updateUI() {
  activeNumber.textContent = String(activeIndex + 1).padStart(2, '0');
  totalNumber.textContent = String(certificates.length).padStart(2, '0');
  const cert = certificates[activeIndex];
  activeDetail.innerHTML = `
    <div>
      <div class="detail-kicker">${escapeHtml(cert.level)} · ${escapeHtml(cert.area)}</div>
      <div class="detail-title">${escapeHtml(cert.title)}</div>
      <div class="detail-description">${escapeHtml(cert.description)}</div>
      <div class="detail-meta">
        <span class="meta-chip">${escapeHtml(cert.date)}</span>
        <span class="meta-chip">${escapeHtml(cert.duration)}</span>
        ${cert.score ? `<span class="meta-chip">Nota ${escapeHtml(cert.score)}</span>` : ''}
      </div>
    </div>
    <button class="primary-button" type="button" data-open-active>Ver certificación</button>
  `;
  activeDetail.querySelector('[data-open-active]').addEventListener('click', () => openCertificate(activeIndex));
  if (openActive) openActive.onclick = () => openCertificate(activeIndex);
  document.querySelectorAll('.cert-card').forEach((card, index) => {
    card.classList.toggle('active', index === activeIndex);
    card.setAttribute('tabindex', index === activeIndex ? '0' : '-1');
  });
  positionCards(getRadius());
}

function openCertificate(index) {
  activeIndex = index;
  updateUI();
  const cert = certificates[index];
  modalTitle.textContent = cert.title;
  modalImage.alt = `Certificado: ${cert.course}`;
  modalImage.hidden = false;
  imagePlaceholder.style.display = 'none';
  modalImage.onload = () => {
    modalImage.hidden = false;
    imagePlaceholder.style.display = 'none';
  };
  modalImage.onerror = () => {
    modalImage.hidden = true;
    imagePlaceholder.style.display = 'grid';
  };
  modalImage.src = cert.image;
  modalInfo.innerHTML = `<span>${escapeHtml(cert.course)}</span><span>${escapeHtml(cert.date)} · ${escapeHtml(cert.duration)}${cert.score ? ` · Nota ${escapeHtml(cert.score)}` : ''}</span>`;
  if (typeof modal.showModal === 'function') modal.showModal();
  else modal.setAttribute('open', '');
}

function closeCertificate() {
  if (typeof modal.close === 'function') modal.close();
  else modal.removeAttribute('open');
}

document.getElementById('prevButton').addEventListener('click', () => rotateBy(-1));
document.getElementById('nextButton').addEventListener('click', () => rotateBy(1));
document.getElementById('closeModal').addEventListener('click', closeCertificate);
modal.addEventListener('click', event => {
  if (event.target.matches('[data-close-modal]')) closeCertificate();
});

carousel.addEventListener('click', event => {
  const card = event.target.closest('.cert-card');
  if (!card || isDragging) return;
  const index = Number(card.dataset.index);
  if (index === activeIndex) openCertificate(index);
  else snapToIndex(index);
});

carousel.addEventListener('keydown', event => {
  if (!event.target.closest('.cert-card')) return;
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openCertificate(activeIndex);
  }
  if (event.key === 'ArrowRight') rotateBy(1);
  if (event.key === 'ArrowLeft') rotateBy(-1);
});

vaultStage.addEventListener('pointerdown', event => {
  isDragging = true;
  dragDistance = 0;
  startX = event.clientX;
  startRotation = rotation;
  lastPointerX = event.clientX;
  lastPointerTime = performance.now();
  pointerVelocity = 0;
  vaultStage.setPointerCapture?.(event.pointerId);
  dragHint.classList.add('hidden');
});

vaultStage.addEventListener('pointermove', event => {
  if (!isDragging) return;
  const now = performance.now();
  const dx = event.clientX - startX;
  const dt = Math.max(1, now - lastPointerTime);
  pointerVelocity = (event.clientX - lastPointerX) / dt;
  lastPointerX = event.clientX;
  lastPointerTime = now;
  dragDistance = Math.abs(dx);
  rotation = startRotation + dx * 0.35;
  positionCards(getRadius());
});

function endDrag() {
  if (!isDragging) return;
  isDragging = false;
  const threshold = Math.max(35, window.innerWidth * 0.06);
  const momentum = pointerVelocity * 420;
  const movement = (lastPointerX - startX) + momentum;
  let steps = Math.round(-movement / threshold);
  if (steps === 0 && dragDistance > threshold * 0.45) steps = movement < 0 ? 1 : -1;
  if (steps !== 0) activeIndex = (activeIndex + steps + certificates.length) % certificates.length;
  rotation = 0;
  updateUI();
}

vaultStage.addEventListener('pointerup', endDrag);
vaultStage.addEventListener('pointercancel', endDrag);
vaultStage.addEventListener('pointerleave', event => { if (isDragging && event.buttons === 0) endDrag(); });

vaultStage.addEventListener('wheel', event => {
  if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;
  event.preventDefault();
  rotateBy(event.deltaY > 0 ? 1 : -1);
}, { passive: false });

let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => positionCards(getRadius()), 100);
});

themeToggle.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem('mass-cert-theme', nextTheme);
  themeToggle.setAttribute('aria-label', nextTheme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro');
});

const savedTheme = localStorage.getItem('mass-cert-theme');
document.documentElement.dataset.theme = savedTheme || 'dark';

totalNumber.textContent = String(certificates.length).padStart(2, '0');
renderCards();
updateUI();

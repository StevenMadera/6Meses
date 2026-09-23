/* ============================================================
   6 MESES DE NOSOTROS — Steven ♡ Paula
   ------------------------------------------------------------
   CONFIGURACIÓN DE CANCIONES Y LETRAS
   Edita este bloque para agregar tus archivos de audio y tus
   fragmentos de letra autorizados. Ver README.txt para más
   instrucciones.
   ============================================================ */

const songs = [
  {
    title: "Sin Tx",
    artist: "Kuervo Negro",
    file: "audio/01-sin-tx.mp3",
    cover: "images/cover-sintx.jpg", // foto/portada tipo Spotify para esta canción
    start: 0,      // segundo del archivo donde empieza el fragmento
    end: 30,       // segundo del archivo donde termina el fragmento
    lyrics: [
      // Cada "start"/"end" es el tiempo (en segundos, dentro del fragmento)
      // en el que esa línea debe estar resaltada.
      // Reemplaza el texto por tus propias líneas autorizadas.
      { start: 0, end: 2, text: "..." },
      { start: 2, end: 6, text: "No puedo estar sin ti, Apareciste justo cuando quería estar solo" },
      { start: 6, end: 13, text: "Parece que el destino te trajo para mi, Mientras pasa el tiempo de ti más me enamoro" },
      { start: 13, end: 15, text: "Tú dime que hago sin ti" },
      { start: 15, end: 21, text: "Apareciste justo cuando quería estar solo, Parece que el destino te trajo para mi" },
      { start: 21, end: 27, text: "Mientras pasa el tiempo de ti más me enamoro, Tú dime que hago sin ti" },
      { start: 27, end: 30, text: "..." },
    
    ],
  },
  {
    title: "Hecha Pa' Mí",
    artist: "Grupo Frontera",
    file: "audio/02-hecha-pa-mi.mp3",
    cover: "images/paula-1.jpg",
    start: 0,
    end: 38,
    lyrics: [
      { start: 0, end: 6, text: "Puede que yo no sea perfecto, pero, por ti, lo intento" },
      { start: 6, end: 10, text: "De esos ojitos bellos, quiero ser el dueño" },
      { start: 10, end: 13, text: "Hasta que mi tiempo se acabe" },
      { start: 13, end: 18, text: "Mija, voy a cuidarte, pa' que nada te pase" },
      { start: 18, end: 23, text: "Porque has de saber que yo estoy hecho pa' ti" },
      { start: 23, end: 28, text: "Has de saber que tú estás hecha pa' mí, pa' mí, pa' mí" },
      { start: 28, end: 33, text: "Así, a la medida, ¿dónde andabas perdida?" },
      { start: 33, end: 38, text: "Al amor y a ti, los conocí el mismo día" },
    ],
  },
  {
    title: "Ebrio de Amor",
    artist: "Efecto Elegante",
    file: "audio/03-ebrio-de-amor.mp3",
    cover: "images/cover-ebrio.jpg",
    start: 0,
    end: 19,
    lyrics: [
      { start: 0, end: 5, text: "Tú eres mi vida, tú eres mi amor" },
      { start: 5, end: 9, text: "Tú eres mi todo" },
      { start: 9, end: 12, text: "Qué triste me siento" },
      { start: 12, end: 19, text: "Por no decidir, te quiero a mi modo" },
    ],
  },
  {
    title: "Te Quiero Amor",
    artist: "Pedro Conga y su Orquesta",
    file: "audio/04-te-quiero-amor.mp3",
    cover: "images/ojos-paula.jpg",
    start: 0,
    end: 33,
    lyrics: [
      { start: 0, end: 5, text: "Noche a noche esperando por tu amor" },
      { start: 5, end: 11, text: "Como aguarda este loco corazón" },
      { start: 11, end: 16, text: "¿En dónde estás? Te quiero amar" },
      { start: 16, end: 21, text: "Eres dueña de mis sueños, de mi yo" },
      { start: 21, end: 27, text: "En mis venas solo fluye este amor" },
      { start: 27, end: 33, text: "Te quiero amar, te quiero amar" },
    ],
  },
  {
    title: "Wonderwall",
    artist: "Oasis",
    file: "audio/05-wonderwall.mp3",
    cover: "images/nosotros-2.jpg",
    start: 0,
    end: 44,
    lyrics: [
      { start: 0, end: 1, text: "And all the roads" },
      { start: 1, end: 5, text: "We have to walk are winding" },
      { start: 5, end: 6, text: "And all the lights" },
      { start: 6, end: 11, text: "That lead us there are blinding" },
      { start: 11, end: 13, text: "There are many things that I'd" },
      { start: 13, end: 15, text: "Like to say to you" },
      { start: 15, end: 21, text: "But I don't know how" },
      { start: 21, end: 25, text: "Because maybe" },
      { start: 25, end: 29, text: "You're gonna be the one that saves me" },
      { start: 29, end: 36, text: "And after all" },
      { start: 36, end: 44, text: "You're my wonderwall" },
      
    ],
  },
  {
    title: "OLIMPO",
    artist: "Milo J",
    file: "audio/06-olimpo.mp3",
    cover: "images/cover-olimpo.jpg",
    start: 0,
    end: 23,
    lyrics: [
      { start: 0, end: 2, text: "No entiendo por qué reprimís tus sentimientos" },
      { start: 2, end: 5, text: "Con la excusa de salir en busca de autoconocerte" },
      { start: 5, end: 7, text: "Sé bien de nuestras diferencias" },
      { start: 7, end: 11, text: "Pero no olvides que nos enamoramos porque somos diferente`" },
      { start: 11, end: 15, text: "Sigo siendo el mismo que te enamoró" },
      { start: 15, end: 16, text: "Pero sin ser dueño" },
      { start: 16, end: 21, text: "Del Olimpo en el que estábamo' los do'" },
      { start: 21, end: 23, text: "Solo fuiste un sueño" },
    ],
  },
  {
    title: "Lugar Seguro",
    artist: "Jay Wheeler",
    file: "audio/07-lugar-seguro.mp3",
    cover: "images/nosotros-4.jpg",
    start: 0,
    end: 22,
    lyrics: [
      { start: 0, end: 2, text: "Seis meses y parecen más" },
      { start: 2, end: 5, text: "Vas pa' tu casa y ya te echo de menos" },
      { start: 5, end: 8, text: "Los girasoles no tenían sentido" },
      { start: 8, end: 11, text: "Pero ya lo tienen desde que nos vemos" },
      { start: 11, end: 12, text: "Y a nadie le queda un mapa" },
      { start: 12, end: 16, text: "Del lunar que sabes que me pone mal" },
      { start: 16, end: 18, text: "Dijiste que arreglé tus daños" },
      { start: 18, end: 22, text: "Y tú, sin darte cuenta, me curaste igual" },
    ],
  },
];

// Fecha en que empezó la relación
const RELATIONSHIP_START = new Date("2026-03-23T00:00:00");

/* ============================================================
   SISTEMA DE AUDIO — reproduce solo un fragmento por vez
   ============================================================ */
const AudioSystem = (() => {
  let currentAudio = null;
  let currentSongIndex = null;
  let fadeInterval = null;
  const listeners = new Set();

  function notify() {
    listeners.forEach((fn) => fn(currentSongIndex, currentAudio));
  }

  function stopFade() {
    if (fadeInterval) {
      clearInterval(fadeInterval);
      fadeInterval = null;
    }
  }

  function fadeOutAndStop(audio, onDone) {
    stopFade();
    const step = 0.08;
    fadeInterval = setInterval(() => {
      if (!audio) { stopFade(); return; }
      audio.volume = Math.max(0, audio.volume - step);
      if (audio.volume <= 0.02) {
        stopFade();
        audio.pause();
        audio.currentTime = 0;
        audio.volume = 1;
        if (onDone) onDone();
      }
    }, 60);
  }

  function stopAll() {
    if (currentAudio) {
      fadeOutAndStop(currentAudio);
    }
    currentAudio = null;
    currentSongIndex = null;
    notify();
  }

  function play(index, audioEl) {
    if (currentAudio && currentAudio !== audioEl) {
      stopFade();
      currentAudio.pause();
      currentAudio.volume = 1;
    }
    currentAudio = audioEl;
    currentSongIndex = index;
    audioEl.play().catch(() => {
      /* el navegador puede bloquear autoplay; el usuario deberá tocar play */
    });
    notify();
  }

  function pause(audioEl) {
    audioEl.pause();
    if (currentAudio === audioEl) {
      notify();
    }
  }

  function subscribe(fn) {
    listeners.add(fn);
    return () => listeners.delete(fn);
  }

  function getCurrent() {
    return { index: currentSongIndex, audio: currentAudio };
  }

  return { play, pause, stopAll, fadeOutAndStop, subscribe, getCurrent };
})();

/* ============================================================
   Construcción de un reproductor dentro de un contenedor
   ============================================================ */
function buildPlayer(container, songIndex) {
  const song = songs[songIndex];
  if (!song) return;

  container.classList.add("player--spotify");
  container.innerHTML = `
    <div class="player-art-wrap">
      <div class="player-art" data-art>
        <img src="${song.cover}" alt="${song.title}" onerror="this.style.display='none'; this.parentElement.classList.add('player-art--empty');">
        <span class="player-art-note" aria-hidden="true">♪</span>
      </div>
    </div>
    <div class="player-meta">
      <p class="player-title">${song.title}</p>
      <p class="player-artist">${song.artist}</p>
    </div>
    <div class="lyrics" data-lyrics></div>
    <div class="player-progress">
      <span class="player-time" data-current>0:00</span>
      <div class="progress-bar" data-bar>
        <div class="progress-fill" data-fill></div>
      </div>
      <span class="player-time" data-duration>0:00</span>
    </div>
    <div class="player-controls">
      <div class="player-volume">
        <span aria-hidden="true">🔉</span>
        <input type="range" min="0" max="1" step="0.01" value="0.9" data-volume>
      </div>
      <button class="player-play" data-play aria-label="Reproducir">▶</button>
      <span class="player-controls-spacer" aria-hidden="true"></span>
    </div>
    <p class="player-note" data-note>Fragmento de ${Math.max(0, song.end - song.start)}s</p>
  `;

  const audio = new Audio();
  audio.src = song.file;
  audio.preload = "none";
  audio.volume = 0.9;

  const playBtn = container.querySelector("[data-play]");
  const bar = container.querySelector("[data-bar]");
  const fill = container.querySelector("[data-fill]");
  const currentEl = container.querySelector("[data-current]");
  const durationEl = container.querySelector("[data-duration]");
  const volumeInput = container.querySelector("[data-volume]");
  const lyricsEl = container.querySelector("[data-lyrics]");

  // Construir líneas de letra
  song.lyrics.forEach((line, i) => {
    const p = document.createElement("p");
    p.className = "lyrics-line";
    p.textContent = line.text;
    p.dataset.index = i;
    lyricsEl.appendChild(p);
  });

  const fragmentDuration = Math.max(0.01, song.end - song.start);
  durationEl.textContent = formatTime(fragmentDuration);

  function formatTime(t) {
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }

  function updateLyrics(fragTime) {
    const lines = lyricsEl.querySelectorAll(".lyrics-line");
    lines.forEach((el, i) => {
      const line = song.lyrics[i];
      const active = fragTime >= line.start && fragTime < line.end;
      el.classList.toggle("is-current", active);
    });
  }

  function updateUI() {
    const fragTime = Math.min(
      Math.max(0, audio.currentTime - song.start),
      fragmentDuration
    );
    const pct = (fragTime / fragmentDuration) * 100;
    fill.style.width = pct + "%";
    currentEl.textContent = formatTime(fragTime);
    updateLyrics(fragTime);
    updateMiniPlayer(song, !audio.paused);
  }

  audio.addEventListener("loadedmetadata", () => {
    if (audio.currentTime < song.start) audio.currentTime = song.start;
  });

  audio.addEventListener("timeupdate", () => {
    if (audio.currentTime >= song.end) {
      AudioSystem.fadeOutAndStop(audio, () => {
        audio.currentTime = song.start;
        playBtn.textContent = "▶";
        updateUI();
      });
    }
    updateUI();
  });

  audio.addEventListener("play", () => {
    playBtn.textContent = "❚❚";
  });
  audio.addEventListener("pause", () => {
    playBtn.textContent = "▶";
  });
  audio.addEventListener("ended", () => {
    playBtn.textContent = "▶";
  });
  audio.addEventListener("error", () => {
    container.querySelector(".player-note").textContent =
      `Agrega tu archivo en ${song.file} (${song.start}s–${song.end}s) para escuchar este fragmento.`;
  });

  function startPlayback() {
    if (audio.currentTime < song.start || audio.currentTime >= song.end) {
      audio.currentTime = song.start;
    }
    audio.volume = volumeInput.value;
    AudioSystem.play(songIndex, audio);
  }

  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      startPlayback();
    } else {
      AudioSystem.pause(audio);
    }
  });

  // Expuesto para el sistema de auto-reproducción al entrar a esta página
  container._audio = audio;
  container._start = startPlayback;
  container._songIndex = songIndex;

  bar.addEventListener("click", (e) => {
    const rect = bar.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audio.currentTime = song.start + pct * fragmentDuration;
    updateUI();
  });

  volumeInput.addEventListener("input", () => {
    audio.volume = volumeInput.value;
  });

  // Cuando otra canción empieza, refrescar el ícono de este reproductor
  AudioSystem.subscribe((activeIndex, activeAudio) => {
    if (activeAudio !== audio) {
      playBtn.textContent = "▶";
    }
  });
}

/* ============================================================
   Mini reproductor persistente
   ============================================================ */
function updateMiniPlayer(song, isPlaying) {
  const mini = document.getElementById("miniPlayer");
  const title = document.getElementById("miniPlayerTitle");
  const artist = document.getElementById("miniPlayerArtist");
  const btn = document.getElementById("miniPlayerBtn");
  if (!mini) return;
  title.textContent = song.title;
  artist.textContent = song.artist;
  btn.textContent = isPlaying ? "❚❚" : "▶";
  mini.classList.add("is-active");
}

document.getElementById("miniPlayerBtn")?.addEventListener("click", () => {
  const { audio } = AudioSystem.getCurrent();
  if (!audio) return;
  if (audio.paused) {
    AudioSystem.play(AudioSystem.getCurrent().index, audio);
  } else {
    AudioSystem.pause(audio);
  }
});

/* ============================================================
   Inicializar todos los reproductores de la página
   ============================================================ */
function initPlayers() {
  document.querySelectorAll("[data-song-index]").forEach((section) => {
    const idx = parseInt(section.dataset.songIndex, 10);
    const holder = section.querySelector("[data-player]");
    if (holder) buildPlayer(holder, idx);
  });
}

/* ============================================================
   Auto-reproducción al entrar a la página de cada canción
   ============================================================ */
function initSongAutoplay() {
  const songSections = document.querySelectorAll("[data-song-index]");
  if (!songSections.length || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const holder = entry.target.querySelector("[data-player]");
        if (!holder || !holder._audio) return;

        if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
          // Cada vez que se entra a la página de esta canción, empieza a sonar sola.
          if (holder._audio.paused) {
            holder._start();
          }
        } else if (!entry.isIntersecting) {
          // Al salir de la página, si esta canción seguía sonando, se detiene.
          if (!holder._audio.paused) {
            AudioSystem.fadeOutAndStop(holder._audio);
          }
        }
      });
    },
    { threshold: [0, 0.6] }
  );

  songSections.forEach((section) => observer.observe(section));
}

/* ============================================================
   Desbloquear el audio con el primer gesto del usuario
   (el botón "Abrir esto..." cuenta como interacción real),
   así las canciones pueden reproducirse automáticamente
   después, al entrar a cada página.
   ============================================================ */
function unlockAllAudio() {
  document.querySelectorAll("[data-player]").forEach((holder) => {
    const audio = holder._audio;
    if (!audio) return;
    audio.muted = true;
    const p = audio.play();
    if (p && p.catch) {
      p.then(() => {
        audio.pause();
        audio.currentTime = 0;
        audio.muted = false;
      }).catch(() => {
        audio.muted = false;
      });
    } else {
      audio.muted = false;
    }
  });
}

/* ============================================================
   Navegación por páginas (flechas arriba/abajo)
   ============================================================ */
function initPageNav() {
  const prevBtn = document.getElementById("navPrev");
  const nextBtn = document.getElementById("navNext");
  if (!prevBtn || !nextBtn) return;

  function visibleSections() {
    return Array.from(document.querySelectorAll("main .section")).filter(
      (el) => !el.hidden && el.offsetParent !== null
    );
  }

  function currentIndex(sections) {
    let best = 0;
    let bestDist = Infinity;
    sections.forEach((el, i) => {
      const dist = Math.abs(el.getBoundingClientRect().top);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    return best;
  }

  function goTo(step) {
    const sections = visibleSections();
    const idx = currentIndex(sections);
    const target = sections[idx + step];
    if (target) target.scrollIntoView({ behavior: "smooth" });
  }

  function refreshButtons() {
    const sections = visibleSections();
    const idx = currentIndex(sections);
    prevBtn.hidden = idx <= 0;
    nextBtn.hidden = idx >= sections.length - 1;
  }

  prevBtn.addEventListener("click", () => goTo(-1));
  nextBtn.addEventListener("click", () => goTo(1));

  window.addEventListener("scroll", debounce(refreshButtons, 120), { passive: true });
  window.addEventListener("resize", debounce(refreshButtons, 150));
  refreshButtons();

  // Se re-evalúa cuando aparecen nuevas páginas (pregunta -> respuesta -> final)
  const mo = new MutationObserver(() => refreshButtons());
  mo.observe(document.getElementById("experience"), { attributes: true, attributeFilter: ["hidden"], subtree: true });
}

function debounce(fn, ms) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}

/* ============================================================
   Bloquear desplazamiento manual sin bloquear la navegación interna
   ============================================================ */
function initManualScrollLock() {
  const scrollKeys = new Set([
    "ArrowUp",
    "ArrowDown",
    "PageUp",
    "PageDown",
    "Home",
    "End",
    " ",
  ]);

  function canScrollInsideSection(target) {
    const section = target.closest?.(".section");
    return section && section.scrollHeight > section.clientHeight;
  }

  window.addEventListener("wheel", (event) => {
    if (!canScrollInsideSection(event.target)) event.preventDefault();
  }, { passive: false });
  window.addEventListener("touchmove", (event) => {
    if (!canScrollInsideSection(event.target)) event.preventDefault();
  }, { passive: false });
  window.addEventListener("keydown", (event) => {
    if (scrollKeys.has(event.key) && !canScrollInsideSection(event.target)) {
      event.preventDefault();
    }
  });
}

/* ============================================================
   Contador de tiempo juntos
   ============================================================ */
function initCounter() {
  const dEl = document.getElementById("cDays");
  const hEl = document.getElementById("cHours");
  const mEl = document.getElementById("cMinutes");
  const sEl = document.getElementById("cSeconds");
  if (!dEl) return;

  function tick() {
    const now = new Date();
    let diff = Math.max(0, now - RELATIONSHIP_START) / 1000; // segundos
    const days = Math.floor(diff / 86400);
    diff -= days * 86400;
    const hours = Math.floor(diff / 3600);
    diff -= hours * 3600;
    const minutes = Math.floor(diff / 60);
    diff -= minutes * 60;
    const seconds = Math.floor(diff);

    dEl.textContent = days;
    hEl.textContent = hours;
    mEl.textContent = minutes;
    sEl.textContent = seconds;
  }

  tick();
  setInterval(tick, 1000);
}

/* ============================================================
   Reveal on scroll
   ============================================================ */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2, rootMargin: "0px 0px -5% 0px" }
  );
  items.forEach((el) => observer.observe(el));
}

/* ============================================================
   Corazones flotantes
   ============================================================ */
function initFloatingHearts() {
  const layer = document.getElementById("floatingLayer");
  if (!layer) return;
  const glyphs = ["♡", "♥", "✧", "・"];

  function spawn() {
    const el = document.createElement("span");
    el.className = "floating-heart";
    el.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
    const left = Math.random() * 100;
    const size = 0.8 + Math.random() * 1.4;
    const duration = 9 + Math.random() * 7;
    const drift = (Math.random() - 0.5) * 80;
    el.style.left = left + "vw";
    el.style.setProperty("--size", size + "rem");
    el.style.setProperty("--drift", drift + "px");
    el.style.animationDuration = duration + "s";
    layer.appendChild(el);
    setTimeout(() => el.remove(), duration * 1000 + 200);
  }

  for (let i = 0; i < 4; i++) setTimeout(spawn, i * 900);
  setInterval(spawn, 2600);
}

/* ============================================================
   Apertura de la experiencia (portada -> resto)
   ============================================================ */
function initCoverOpen() {
  const btn = document.getElementById("btnOpen");
  const experience = document.getElementById("experience");
  if (!btn || !experience) return;

  btn.addEventListener("click", () => {
    experience.hidden = false;
    unlockAllAudio();
    document.getElementById("instagram").scrollIntoView({ behavior: "smooth" });
  });
}

/* ============================================================
   Pregunta final -> Respuesta -> Final
   ============================================================ */
function initFinalFlow() {
  const buttons = document.querySelectorAll(".btn-answer");
  const respuesta = document.getElementById("respuesta-final");
  const finalSection = document.getElementById("final");
  const btnSeeEnd = document.getElementById("btnSeeEnd");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      respuesta.hidden = false;
      respuesta.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
      respuesta.scrollIntoView({ behavior: "smooth" });
    });
  });

  btnSeeEnd?.addEventListener("click", () => {
    finalSection.hidden = false;
    finalSection.scrollIntoView({ behavior: "smooth" });
    const lines = [
      document.getElementById("endLine1"),
      document.getElementById("endLine2"),
      document.getElementById("endLine3"),
      document.getElementById("endHeart"),
    ];
    lines.forEach((el, i) => {
      setTimeout(() => el?.classList.add("is-visible"), 500 + i * 900);
    });
  });
}

/* ============================================================
   Init general
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  initPlayers();
  initCounter();
  initReveal();
  initFloatingHearts();
  initCoverOpen();
  initFinalFlow();
  initSongAutoplay();
  initPageNav();
  initManualScrollLock();
});

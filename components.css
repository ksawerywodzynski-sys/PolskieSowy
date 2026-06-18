/* ============================================================
   POLSKIE SOWY — base.css
   Design tokens, reset, typography
   ============================================================ */

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&family=Lora:ital,wght@0,400;0,500;1,400;1,500&family=Inter:wght@400;500;600&display=swap');

/* ── Tokens ─────────────────────────────────────────────── */
:root {
  /* Palette */
  --ink-deep:    #0d0f14;
  --ink-mid:     #161b24;
  --ink-panel:   #1a2030;
  --ink-rim:     #252d3d;
  --ink-lift:    #2e3a50;

  --feather:     #e8e0d0;
  --feather-mid: #b8b0a0;
  --feather-dim: #7a7468;

  --amber:       #c8963e;
  --amber-glow:  #e4b05a;
  --amber-deep:  #8a6020;

  --iris:        #4a7fa8;   /* błękit tęczówki – akcent wtórny */
  --iris-glow:   #6aa0c8;

  /* Typography */
  --font-display: 'Nunito', 'Segoe UI', sans-serif;
  --font-body:    'Lora', Georgia, serif;
  --font-ui:      'Inter', system-ui, sans-serif;

  /* Scale */
  --text-xs:   0.75rem;
  --text-sm:   0.875rem;
  --text-base: 1rem;
  --text-lg:   1.125rem;
  --text-xl:   1.375rem;
  --text-2xl:  1.75rem;
  --text-3xl:  2.25rem;
  --text-4xl:  3rem;
  --text-5xl:  4rem;
  --text-hero: clamp(3.5rem, 8vw, 7rem);

  /* Spacing */
  --space-1:  0.25rem;
  --space-2:  0.5rem;
  --space-3:  0.75rem;
  --space-4:  1rem;
  --space-6:  1.5rem;
  --space-8:  2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;

  /* Layout */
  --max-content: 1200px;
  --max-text:    720px;
  --col-gap:     2rem;
  --section-pad: clamp(4rem, 8vw, 8rem);

  /* Curves */
  --radius-sm:  4px;
  --radius-md:  10px;
  --radius-lg:  20px;
  --radius-pill: 999px;

  /* Transitions */
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 150ms;
  --dur-mid:  300ms;
  --dur-slow: 600ms;
}

/* ── Reset ───────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html {
  font-size: 16px;
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
}

body {
  background-color: var(--ink-deep);
  color: var(--feather);
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.7;
  min-height: 100vh;
  overflow-x: hidden;
}

img, svg { display: block; max-width: 100%; }
a { color: inherit; text-decoration: none; }
ul, ol { list-style: none; }
button { cursor: pointer; border: none; background: none; font: inherit; }

/* ── Typography scale ────────────────────────────────────── */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: var(--feather);
}

h1 { font-size: var(--text-4xl); }
h2 { font-size: var(--text-3xl); }
h3 { font-size: var(--text-2xl); }
h4 { font-size: var(--text-xl); }

p { max-width: var(--max-text); }
p + p { margin-top: 1em; }

.text-ui { font-family: var(--font-ui); }
.text-dim { color: var(--feather-dim); }
.text-mid { color: var(--feather-mid); }
.text-amber { color: var(--amber-glow); }

/* ── Layout helpers ──────────────────────────────────────── */
.container {
  width: 100%;
  max-width: var(--max-content);
  margin-inline: auto;
  padding-inline: clamp(1.25rem, 4vw, 3rem);
}

.section {
  padding-block: var(--section-pad);
}

/* ── Focus ───────────────────────────────────────────────── */
:focus-visible {
  outline: 2px solid var(--amber);
  outline-offset: 3px;
  border-radius: var(--radius-sm);
}

/* ── Reduced motion ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

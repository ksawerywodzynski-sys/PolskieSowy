/* ============================================================
   POLSKIE SOWY — components.css
   Navigation, cards, buttons, badges, search
   ============================================================ */

/* ── Site Navigation ─────────────────────────────────────── */
.site-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 64px;
  display: flex;
  align-items: center;
  background: transparent;
  transition: background var(--dur-mid) var(--ease-out),
              border-bottom-color var(--dur-mid) var(--ease-out);
  border-bottom: 1px solid transparent;
}

.site-nav.scrolled {
  background: rgba(13, 15, 20, 0.92);
  backdrop-filter: blur(12px) saturate(1.4);
  -webkit-backdrop-filter: blur(12px) saturate(1.4);
  border-bottom-color: var(--ink-rim);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-family: var(--font-display);
  font-weight: 800;
  font-size: var(--text-lg);
  letter-spacing: -0.03em;
  color: var(--feather);
  transition: color var(--dur-fast);
}

.nav-logo:hover { color: var(--amber-glow); }

.nav-logo-icon {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.nav-link {
  font-family: var(--font-ui);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--feather-mid);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-pill);
  transition: color var(--dur-fast), background var(--dur-fast);
  white-space: nowrap;
}

.nav-link:hover {
  color: var(--feather);
  background: rgba(255,255,255,0.05);
}

.nav-link.active {
  color: var(--amber-glow);
}

.nav-search-btn {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-ui);
  font-size: var(--text-sm);
  color: var(--feather-dim);
  background: var(--ink-rim);
  border: 1px solid var(--ink-lift);
  border-radius: var(--radius-pill);
  padding: var(--space-2) var(--space-4);
  transition: border-color var(--dur-fast), color var(--dur-fast);
}

.nav-search-btn:hover {
  border-color: var(--amber-deep);
  color: var(--feather-mid);
}

.nav-search-btn kbd {
  font-size: var(--text-xs);
  background: var(--ink-lift);
  border-radius: var(--radius-sm);
  padding: 1px 5px;
}

/* Mobile nav toggle */
.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: var(--space-2);
}

.nav-toggle span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--feather-mid);
  border-radius: 2px;
  transition: transform var(--dur-mid) var(--ease-out),
              opacity var(--dur-fast);
}

/* ── Buttons ─────────────────────────────────────────────── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-ui);
  font-weight: 600;
  font-size: var(--text-sm);
  border-radius: var(--radius-pill);
  padding: 0.65rem 1.5rem;
  transition: all var(--dur-fast) var(--ease-out);
  white-space: nowrap;
}

.btn-primary {
  background: var(--amber);
  color: var(--ink-deep);
  border: 1px solid var(--amber);
}

.btn-primary:hover {
  background: var(--amber-glow);
  border-color: var(--amber-glow);
  transform: translateY(-1px);
  box-shadow: 0 8px 24px rgba(200, 150, 62, 0.25);
}

.btn-secondary {
  background: transparent;
  color: var(--feather-mid);
  border: 1px solid var(--ink-rim);
}

.btn-secondary:hover {
  color: var(--feather);
  border-color: var(--ink-lift);
  background: rgba(255,255,255,0.04);
}

.btn-lg {
  font-size: var(--text-base);
  padding: 0.85rem 2rem;
}

/* ── Badges / Tags ───────────────────────────────────────── */
.badge {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-ui);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: var(--radius-pill);
  border: 1px solid;
}

.badge-amber {
  color: var(--amber-glow);
  background: rgba(200, 150, 62, 0.12);
  border-color: rgba(200, 150, 62, 0.3);
}

.badge-iris {
  color: var(--iris-glow);
  background: rgba(74, 127, 168, 0.12);
  border-color: rgba(74, 127, 168, 0.3);
}

.badge-dim {
  color: var(--feather-dim);
  background: rgba(255,255,255,0.04);
  border-color: var(--ink-rim);
}

/* ── Species Card ────────────────────────────────────────── */
.species-card {
  display: flex;
  flex-direction: column;
  background: var(--ink-mid);
  border: 1px solid var(--ink-rim);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: transform var(--dur-mid) var(--ease-out),
              border-color var(--dur-mid),
              box-shadow var(--dur-mid);
  position: relative;
}

.species-card:hover {
  transform: translateY(-4px);
  border-color: var(--ink-lift);
  box-shadow: 0 20px 48px rgba(0,0,0,0.4),
              0 0 0 1px rgba(200,150,62,0.1);
}

.species-card-img {
  aspect-ratio: 4/3;
  overflow: hidden;
  background: var(--ink-panel);
  position: relative;
}

.species-card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--dur-slow) var(--ease-out);
}

.species-card:hover .species-card-img img {
  transform: scale(1.04);
}

.species-card-body {
  padding: var(--space-6);
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.species-card-name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-xl);
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.species-card-latin {
  font-family: var(--font-body);
  font-style: italic;
  font-size: var(--text-sm);
  color: var(--feather-dim);
}

.species-card-desc {
  font-size: var(--text-sm);
  color: var(--feather-mid);
  line-height: 1.6;
  flex: 1;
}

.species-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: var(--space-4);
  padding-top: var(--space-4);
  border-top: 1px solid var(--ink-rim);
}

.species-card-link {
  font-family: var(--font-ui);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--amber);
  display: flex;
  align-items: center;
  gap: var(--space-1);
  transition: gap var(--dur-fast), color var(--dur-fast);
}

.species-card-link:hover {
  color: var(--amber-glow);
  gap: var(--space-2);
}

/* ── Region Card ─────────────────────────────────────────── */
.region-card {
  background: var(--ink-mid);
  border: 1px solid var(--ink-rim);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  transition: border-color var(--dur-mid), transform var(--dur-mid) var(--ease-out);
}

.region-card:hover {
  border-color: var(--iris);
  transform: translateY(-2px);
}

.region-card-icon {
  width: 48px;
  height: 48px;
  margin-bottom: var(--space-4);
  color: var(--iris-glow);
}

.region-card-title {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: 700;
  margin-bottom: var(--space-2);
}

.region-card-count {
  font-family: var(--font-ui);
  font-size: var(--text-sm);
  color: var(--feather-dim);
}

/* ── Stat block ──────────────────────────────────────────── */
.stat-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.stat-value {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: var(--text-3xl);
  color: var(--amber-glow);
  letter-spacing: -0.04em;
  line-height: 1;
}

.stat-label {
  font-family: var(--font-ui);
  font-size: var(--text-sm);
  color: var(--feather-dim);
}

/* ── Divider ─────────────────────────────────────────────── */
.divider {
  width: 100%;
  height: 1px;
  background: var(--ink-rim);
  border: none;
  margin-block: 0;
}

/* ── Section eyebrow ─────────────────────────────────────── */
.eyebrow {
  font-family: var(--font-ui);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--amber);
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.eyebrow::before {
  content: '';
  display: block;
  width: 24px;
  height: 1px;
  background: var(--amber);
  flex-shrink: 0;
}

/* ── Search overlay ──────────────────────────────────────── */
.search-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(13, 15, 20, 0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 15vh;
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--dur-mid) var(--ease-out);
}

.search-overlay.open {
  opacity: 1;
  pointer-events: all;
}

.search-box {
  width: min(640px, 90vw);
  background: var(--ink-mid);
  border: 1px solid var(--ink-lift);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 40px 80px rgba(0,0,0,0.6);
}

.search-input-row {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-6);
  border-bottom: 1px solid var(--ink-rim);
}

.search-icon {
  color: var(--feather-dim);
  flex-shrink: 0;
}

.search-input {
  flex: 1;
  background: none;
  border: none;
  outline: none;
  font-family: var(--font-ui);
  font-size: var(--text-xl);
  color: var(--feather);
  caret-color: var(--amber);
}

.search-input::placeholder { color: var(--feather-dim); }

.search-results {
  max-height: 400px;
  overflow-y: auto;
  padding: var(--space-3);
}

.search-result-item {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
  transition: background var(--dur-fast);
  cursor: pointer;
}

.search-result-item:hover {
  background: var(--ink-panel);
}

/* ── Footer ──────────────────────────────────────────────── */
.site-footer {
  border-top: 1px solid var(--ink-rim);
  padding-block: var(--space-12);
  margin-top: var(--space-24);
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: var(--space-12);
}

.footer-brand-name {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: var(--text-xl);
  letter-spacing: -0.03em;
  margin-bottom: var(--space-3);
}

.footer-brand-desc {
  font-size: var(--text-sm);
  color: var(--feather-dim);
  line-height: 1.6;
  max-width: 280px;
}

.footer-col-title {
  font-family: var(--font-ui);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--feather-dim);
  margin-bottom: var(--space-4);
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.footer-link {
  font-family: var(--font-ui);
  font-size: var(--text-sm);
  color: var(--feather-mid);
  transition: color var(--dur-fast);
}

.footer-link:hover { color: var(--feather); }

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--space-8);
  margin-top: var(--space-8);
  border-top: 1px solid var(--ink-rim);
  font-family: var(--font-ui);
  font-size: var(--text-xs);
  color: var(--feather-dim);
}

/* ── Responsive ──────────────────────────────────────────── */
@media (max-width: 900px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-8);
  }
}

@media (max-width: 640px) {
  .nav-links, .nav-search-btn { display: none; }
  .nav-toggle { display: flex; }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .footer-bottom {
    flex-direction: column;
    gap: var(--space-2);
    text-align: center;
  }
}

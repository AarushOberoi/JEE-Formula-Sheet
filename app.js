/* JEE Formula Sheet — single-page app (hash routing, no build step).
   Flow: Home (subjects) → Subject (chapters) → Chapter (topics) → Topic (formulas). */
(function () {
  "use strict";

  const D = window.FORMULA_DATA;
  const ORDER = ["physics", "chem", "math"];
  const SUBJECTS = ORDER.map((k) => D[k]);
  const SHORT = { physics: "Physics", chem: "Chemistry", math: "Maths" };
  const TINT = { physics: "#3a4f7a", chem: "#2f6b57", math: "#7a3a3a" };
  const WATERMARK = {
    physics: "F = ma   v² = u² + 2as   pV = nRT   E = hν   T = 2π√(l/g)   ∮E·dS = q/ε₀   λ = h/p   1/v − 1/u = 1/f",
    chem: "pH = −log[H⁺]   ΔG = ΔH − TΔS   Kp = Kc(RT)^Δn   E = −13.6/n²   λ = h/mv   ΔU = q + w   M₁V₁ = M₂V₂",
    math: "∫ eˣ dx = eˣ + C   A⁻¹ = adj A / |A|   a·b = |a||b|cosθ   P(E|F) = P(E∩F)/P(F)   dy/dx + Py = Q",
  };

  // ---------- 1) Merge supplementary formulas and NCERT reactions ----------
  const SUPP = window.FORMULA_SUPPLEMENT || {};
  Object.keys(SUPP).forEach((key) => {
    const [sid, unit, ti, kind, fi] = key.split(":");
    const ch = D[sid] && D[sid].chapters.find((c) => String(c.unit) === unit);
    const tp = ch && ch.topics[Number(ti)];
    if (!tp) { console.warn("Unmatched supplement key", key); return; }
    const list = SUPP[key].map((f) => Object.assign({}, f, { ext: true, s: "" }));
    if (kind === "item") tp.formulas.splice(Number(fi), 1, ...list);
    else if (tp.gap) { tp.gap = false; tp.formulas = list; }
    else tp.formulas = (tp.formulas || []).concat(list);
  });
  const RX = window.CHEM_REACTIONS || {};
  const RX_SRC = (unit, title) => {
    const n = unit === 16 ? 6 : unit === 18 ? 9 : unit === 19 ? 10 : /aldehyde|ketone|carboxylic/i.test(title) ? 8 : 7;
    return `NCERT Chemistry XII Part II, Unit ${n}`;
  };
  Object.keys(RX).forEach((u) => {
    const ch = D.chem.chapters.find((c) => String(c.unit) === String(u));
    if (!ch) return;
    RX[u].forEach((g) => ch.topics.push({
      title: g.title.replace(/^Reactions · /, ""), rx: true,
      formulas: g.items.map((r) => Object.assign({}, r, { rx: true, s: RX_SRC(Number(u), g.title) })),
    }));
  });

  // ---------- 2) Index ----------
  const all = [], topicsAll = [];
  SUBJECTS.forEach((s) => {
    s.chapters.forEach((c) => {
      c.count = 0; c.rxCount = 0;
      c.topics.forEach((tp, ti) => {
        tp.count = 0;
        topicsAll.push({ s, c, tp, ti });
        (tp.formulas || []).forEach((f, fi) => {
          if (f.gapItem) return;
          f._id = `${s.id}-${c.unit}-${ti}-${fi}`;
          all.push({ id: f._id, s, c, ti, fi, tp, f });
          tp.count++; c.count++;
          if (f.rx) c.rxCount++;
        });
      });
    });
    s.count = s.chapters.reduce((a, c) => a + c.count, 0);
    s.rxCount = s.chapters.reduce((a, c) => a + c.rxCount, 0);
  });

  // ---------- 3) Per-viewer state ----------
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* ignore */ } },
  };
  const revised = new Set(store.get("jee-revised-v1", []));
  let recent = store.get("jee-recent-v1", []);
  const persistRevised = () => store.set("jee-revised-v1", [...revised]);
  function pushRecent(key) { recent = [key, ...recent.filter((k) => k !== key)].slice(0, 20); store.set("jee-recent-v1", recent); }

  // ---------- 4) Helpers ----------
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const pad = (n) => String(n).padStart(2, "0");
  const subjUrl = (s) => `#/s/${s.id}`;
  const chapUrl = (s, c) => `#/c/${s.id}/${c.unit}`;
  const topicUrl = (s, c, ti, fi) => `#/t/${s.id}/${c.unit}/${ti}${fi != null ? "/" + fi : ""}`;
  const findChap = (sid, unit) => D[sid] && D[sid].chapters.find((c) => String(c.unit) === String(unit));
  const revKey = (s, c) => `${s.id}:${c.unit}`;
  const copyIc = `<svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/></svg>`;
  const nf = (n, rx) => `${n} ${rx ? "reaction" : "formula"}${n === 1 ? "" : "s"}`;

  function renderMath(root) {
    if (!window.katex) return;
    root.querySelectorAll("[data-tex]").forEach((el) => {
      try { katex.render(el.dataset.tex, el, { displayMode: true, throwOnError: false, strict: "ignore" }); }
      catch (e) { el.textContent = el.dataset.tex; }
    });
  }
  function toast(msg) { const t = $("#toast"); t.textContent = msg; t.hidden = false; clearTimeout(toast._t); toast._t = setTimeout(() => { t.hidden = true; }, 1600); }
  function setActiveNav(sid) { document.querySelectorAll(".cat-nav a").forEach((a) => a.classList.toggle("active", a.dataset.subject === sid)); }
  const crumbs = (list) => `<nav class="crumbs" aria-label="Breadcrumb">${list.map((x, i) => i === list.length - 1 ? `<span>${esc(x[0])}</span>` : `<a href="${x[1]}">${esc(x[0])}</a><span class="sep">/</span>`).join("")}</nav>`;

  function formulaCard(x, i) {
    const f = x.f;
    return `<article class="formula ${f.rx ? "rx" : ""}" id="f-${f._id}">
      <div class="f-head">
        <div class="f-name"><span class="f-num">${pad(i + 1)}</span>${esc(f.n || (f.rx ? "Reaction" : "Formula"))}</div>
        <div class="f-acts"><button data-copy="${f._id}" title="Copy LaTeX" aria-label="Copy formula as LaTeX">${copyIc}</button></div>
      </div>
      <div class="f-tex" data-tex="${esc(f.t)}"></div>
      ${f.v ? `<p class="f-v">${esc(f.v)}</p>` : ""}
      ${f.c ? `<p class="f-c">${esc(f.c)}</p>` : ""}
      ${f.s ? `<span class="f-src">Source: ${esc(f.s)}</span>` : ""}
    </article>`;
  }

  // ---------- 5) Views ----------
  // Step 1 — Home: subjects only
  function viewHome() {
    setActiveNav(null);
    const tiles = SUBJECTS.map((s) => `
      <a class="hero-tile" href="${subjUrl(s)}" style="--tint:${TINT[s.id]}">
        <div class="watermark" aria-hidden="true">${esc(WATERMARK[s.id].repeat(8))}</div>
        <span class="hero-label">${SHORT[s.id].toUpperCase()}</span>
        <div class="hero-meta">${s.chapters.length} CHAPTERS · ${s.count} ${s.rxCount ? "FORMULAS & REACTIONS" : "FORMULAS"}</div>
      </a>`).join("");
    return `<section class="hero-wrap"><div class="hero">${tiles}</div></section>`;
  }

  // Step 2 — Subject: chapters
  function viewSubject(sid) {
    const s = D[sid];
    setActiveNav(sid);
    const done = s.chapters.filter((c) => revised.has(revKey(s, c))).length;
    const pct = Math.round((done / s.chapters.length) * 100);
    let grid = "", last = null;
    s.chapters.forEach((c) => {
      if (c.section && c.section !== last) { grid += `<div class="section-label">${esc(c.section)}</div>`; last = c.section; }
      grid += `<a class="card" href="${chapUrl(s, c)}">
        ${revised.has(revKey(s, c)) ? '<span class="done-mark" title="Revised">✓</span>' : ""}
        <div class="unit">CHAPTER ${c.unit}</div>
        <h3>${esc(c.title)}</h3>
        <div class="sub"><span>${c.topics.length} topics · ${nf(c.count - c.rxCount)}${c.rxCount ? ` · ${nf(c.rxCount, true)}` : ""}</span><span class="go">→</span></div>
      </a>`;
    });
    return `<section class="subject-bg subject-bg-${s.id}"><div class="container">
      ${crumbs([["Home", "#/"], [s.name, ""]])}
      <div class="subject-head">
        <div><h1>${esc(s.name.toUpperCase())}</h1><p>${esc(s.tagline)}</p></div>
        <div class="subject-stats">
          <div><b>${s.chapters.length}</b><span>Chapters</span></div>
          <div><b>${s.count - s.rxCount}</b><span>Formulas</span></div>
          ${s.rxCount ? `<div><b>${s.rxCount}</b><span>Reactions</span></div>` : ""}
        </div>
      </div>
      <div class="progress-line"><span>CHAPTER PROGRESS</span><div class="bar"><i style="width:${pct}%"></i></div><span>${done} / ${s.chapters.length} revised (${pct}%)</span></div>
      <h2 class="step-title">Chapters</h2>
      <div class="grid">${grid}</div>
    </div></section>`;
  }

  // Step 3 — Chapter: topics
  function topicRow(s, c, tp, ti) {
    return `<a class="trow ${tp.rx ? "rx" : ""}" href="${topicUrl(s, c, ti)}">
      <span class="tnum">${pad(ti + 1)}</span>
      <span class="ttl">${esc(tp.title)}</span>
      <span class="tcnt">${tp.count ? nf(tp.count, tp.rx) : "Concept only"}</span>
      <span class="go">→</span>
    </a>`;
  }
  function viewChapter(sid, unit) {
    const s = D[sid], c = findChap(sid, unit);
    if (!c) return viewNotFound();
    setActiveNav(sid);
    const idx = s.chapters.indexOf(c), prev = s.chapters[idx - 1], next = s.chapters[idx + 1];
    const isDone = revised.has(revKey(s, c));
    const fT = c.topics.map((tp, i) => [tp, i]).filter(([tp]) => !tp.rx);
    const rT = c.topics.map((tp, i) => [tp, i]).filter(([tp]) => tp.rx);
    return `<div class="container narrow">
      ${crumbs([["Home", "#/"], [s.name, subjUrl(s)], [c.title, ""]])}
      <div class="page-kicker">${esc(s.name.toUpperCase())} · CHAPTER ${c.unit}${c.section ? " · " + esc(c.section.toUpperCase()) : ""}</div>
      <h1 class="chapter-title">${esc(c.title)}</h1>
      <div class="chapter-sub"><span>${c.topics.length} topics · ${nf(c.count - c.rxCount)}${c.rxCount ? ` · ${nf(c.rxCount, true)}` : ""}</span></div>
      <div class="chapter-actions">
        <button class="btn ${isDone ? "done" : ""}" data-revise="${revKey(s, c)}">${isDone ? "✓ REVISED" : "MARK AS REVISED"}</button>
      </div>
      <h2 class="step-title">Topics</h2>
      <div class="trows">${fT.map(([tp, i]) => topicRow(s, c, tp, i)).join("")}</div>
      ${rT.length ? `<div class="rx-heading">Important Reactions · NCERT</div><div class="trows">${rT.map(([tp, i]) => topicRow(s, c, tp, i)).join("")}</div>` : ""}
      <div class="pager">
        ${prev ? `<a class="btn" href="${chapUrl(s, prev)}">← ${esc(prev.title)}</a>` : "<span></span>"}
        ${next ? `<a class="btn" href="${chapUrl(s, next)}">${esc(next.title)} →</a>` : ""}
      </div>
    </div>`;
  }

  // Step 4 — Topic: formulas
  function viewTopic(sid, unit, ti) {
    const s = D[sid], c = findChap(sid, unit), tp = c && c.topics[ti];
    if (!tp) return viewNotFound();
    setActiveNav(sid);
    pushRecent(`${sid}:${unit}:${ti}`);
    const items = all.filter((x) => x.c === c && x.ti === ti);
    const prevT = c.topics[ti - 1], nextT = c.topics[ti + 1];
    const body = items.length ? `<div class="formula-list">${items.map((x, i) => formulaCard(x, i)).join("")}</div>`
      : `<p class="info-box">${esc(tp.info || "This topic is conceptual — there are no formulas to list.")}</p>`;
    return `<div class="container narrow">
      ${crumbs([["Home", "#/"], [s.name, subjUrl(s)], [c.title, chapUrl(s, c)], [`Topic ${ti + 1}`, ""]])}
      <div class="page-kicker">${esc(c.title.toUpperCase())} · ${tp.rx ? "REACTIONS" : "TOPIC " + (ti + 1)}</div>
      <h1 class="chapter-title">${esc(tp.title)}</h1>
      <div class="chapter-sub"><span>${nf(items.length, tp.rx)}</span></div>
      ${body}
      <div class="pager">
        ${prevT ? `<a class="btn" href="${topicUrl(s, c, ti - 1)}">← Previous topic</a>` : `<a class="btn" href="${chapUrl(s, c)}">← All topics</a>`}
        ${nextT ? `<a class="btn solid" href="${topicUrl(s, c, ti + 1)}">Next topic →</a>` : `<a class="btn solid" href="${chapUrl(s, c)}">Back to chapter →</a>`}
      </div>
    </div>`;
  }

  function recentRow(k) {
    const [sid, unit, ti] = k.split(":");
    const c = findChap(sid, unit); const tp = c && c.topics[Number(ti)];
    if (!tp) return "";
    return `<a class="trow" href="${topicUrl(D[sid], c, Number(ti))}"><span class="tnum">${SHORT[sid].slice(0, 3).toUpperCase()}</span><span class="ttl">${esc(tp.title)}<br><small style="color:var(--muted);font-weight:600">${esc(c.title)}</small></span><span class="tcnt"></span><span class="go">→</span></a>`;
  }
  function viewRecent() {
    setActiveNav(null);
    const rows = recent.map(recentRow).filter(Boolean).join("");
    return `<div class="container narrow">
      ${crumbs([["Home", "#/"], ["Recently viewed", ""]])}
      <h1 class="chapter-title" style="margin-top:18px">Recently viewed</h1>
      ${recent.length ? `<div class="chapter-actions"><button class="btn" data-clear-recent>CLEAR</button></div>` : ""}
      ${rows ? `<div class="trows" style="margin-top:18px">${rows}</div>` : `<div class="empty">Open any topic and it will show up here.</div>`}
    </div>`;
  }

  // Quick revision flashcards
  let deck = [], pos = 0, deckKey = "", revealed = false;
  function buildDeck(mode) {
    let pool = ORDER.includes(mode) ? all.filter((x) => x.s.id === mode) : mode === "rx" ? all.filter((x) => x.f.rx) : all.slice();
    pool = pool.slice();
    for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [pool[i], pool[j]] = [pool[j], pool[i]]; }
    deck = pool; pos = 0; revealed = false; deckKey = mode;
  }
  function viewRevise(mode) {
    setActiveNav(null);
    mode = mode || "all";
    if (deckKey !== mode) buildDeck(mode);
    const x = deck[pos];
    const tab = (k, l) => `<a class="tab" href="#/revise/${k}" aria-pressed="${mode === k}">${l}</a>`;
    const card = x ? `<div class="flashcard">
        <div class="fc-ctx">${SHORT[x.s.id].toUpperCase()} · ${esc(x.c.title)} › ${esc(x.tp.title)}</div>
        <h2>${esc(x.f.n || (x.f.rx ? "Reaction" : "Formula"))}</h2>
        <div class="fc-box ${revealed ? "shown" : ""}" data-reveal ${revealed ? `data-tex="${esc(x.f.t)}"` : ""}>${revealed ? "" : '<span style="color:var(--muted);font-weight:600">Recall it, then tap to reveal (Space)</span>'}</div>
        ${revealed && (x.f.v || x.f.c) ? `<p style="color:var(--ink-2);margin:12px 0 0">${esc([x.f.v, x.f.c].filter(Boolean).join(" · "))}</p>` : ""}
        <div class="fc-controls">
          <button class="btn" data-fc="prev">← PREV</button>
          <button class="btn solid" data-fc="reveal">${revealed ? "HIDE" : "REVEAL"}</button>
          <button class="btn" data-fc="next">NEXT →</button>
          <button class="btn" data-fc="shuffle">SHUFFLE</button>
        </div>
        <div class="fc-meta">Card ${pos + 1} of ${deck.length} · use ← → keys</div>
      </div>` : `<div class="empty">No cards.</div>`;
    return `<div class="container">
      ${crumbs([["Home", "#/"], ["Quick revision", ""]])}
      <h1 class="chapter-title" style="margin-top:18px">Quick revision</h1>
      <div class="tabs">${tab("all", "All")}${tab("physics", "Physics")}${tab("chem", "Chemistry")}${tab("math", "Maths")}${tab("rx", "Reactions")}</div>
      ${card}
    </div>`;
  }

  function viewProgress() {
    setActiveNav(null);
    const total = SUBJECTS.reduce((a, s) => a + s.chapters.length, 0);
    const blocks = SUBJECTS.map((s) => {
      const done = s.chapters.filter((c) => revised.has(revKey(s, c))).length, pct = Math.round((done / s.chapters.length) * 100);
      return `<div class="prog-sub">
        <div style="display:flex;justify-content:space-between;align-items:baseline"><h3>${esc(s.name)}</h3><b>${pct}%</b></div>
        <div class="bar"><i style="width:${pct}%"></i></div>
        <div style="color:var(--muted);font-size:14px;font-weight:600">${done} of ${s.chapters.length} chapters revised</div>
        <div class="chk-list">${s.chapters.map((c) => `<label><input type="checkbox" data-revise-chk="${revKey(s, c)}" ${revised.has(revKey(s, c)) ? "checked" : ""}/><span>${c.unit}. ${esc(c.title)}</span></label>`).join("")}</div>
      </div>`;
    }).join("");
    return `<div class="container">
      ${crumbs([["Home", "#/"], ["My progress", ""]])}
      <h1 class="chapter-title" style="margin-top:18px">My progress</h1>
      <div class="chapter-sub"><span>${revised.size} of ${total} chapters revised</span></div>
      <div class="prog-grid">${blocks}</div>
    </div>`;
  }

  function viewNotFound() { return `<div class="container"><div class="empty">That page doesn’t exist. <a href="#/" style="color:var(--red)">Go home</a></div></div>`; }

  // ---------- 6) Router ----------
  function parse() {
    const h = decodeURIComponent(location.hash.replace(/^#/, "")) || "/";
    const p = h.split("?")[0].split("/").filter(Boolean);
    if (!p.length) return { name: "home" };
    if (p[0] === "s" && D[p[1]]) return { name: "subject", sid: p[1] };
    if (p[0] === "c" && D[p[1]]) {
      if (p[3] != null) return { name: "topic", sid: p[1], unit: p[2], ti: Number(p[3]), fi: p[4] != null ? Number(p[4]) : null };
      return { name: "chapter", sid: p[1], unit: p[2] };
    }
    if (p[0] === "t" && D[p[1]]) return { name: "topic", sid: p[1], unit: p[2], ti: Number(p[3]), fi: p[4] != null ? Number(p[4]) : null };
    if (["recent", "progress"].includes(p[0])) return { name: p[0] };
    if (p[0] === "revise") return { name: "revise", mode: p[1] };
    return { name: "404" };
  }
  function route(keep) {
    const r = parse();
    let html;
    switch (r.name) {
      case "home": html = viewHome(); break;
      case "subject": html = viewSubject(r.sid); break;
      case "chapter": html = viewChapter(r.sid, r.unit); break;
      case "topic": html = viewTopic(r.sid, r.unit, r.ti); break;
      case "recent": html = viewRecent(); break;
      case "revise": html = viewRevise(r.mode); break;
      case "progress": html = viewProgress(); break;
      default: html = viewNotFound();
    }
    const app = $("#app");
    document.body.classList.toggle("is-home", r.name === "home");
    document.body.classList.toggle("is-subject", r.name === "subject");
    // Every page after the homepage gets a themed background: the subject's own for
    // subject / chapter / topic pages, a neutral one for revision, progress and history.
    // Home background option: ?bg=1|2|3 in the URL previews an option; HOME_BG is the default.
    const HOME_BG = "1";
    const bgParam = new URLSearchParams(location.search).get("bg");
    const hb = r.name === "home" ? (["1", "2", "3"].includes(bgParam) ? bgParam : HOME_BG) : "";
    if (hb) document.body.dataset.homebg = hb; else delete document.body.dataset.homebg;
    const themed = r.name !== "home";
    document.body.classList.toggle("themed", themed);
    document.body.dataset.bg = themed ? (r.sid && D[r.sid] ? r.sid : "general") : "";
    app.innerHTML = html;
    renderMath(app);
    closeDrawer();
    if (r.name === "topic" && r.fi != null) {
      const el = document.getElementById(`f-${r.sid}-${r.unit}-${r.ti}-${r.fi}`);
      if (el) { el.scrollIntoView({ block: "center" }); el.classList.add("flash"); }
    } else if (!keep) window.scrollTo(0, 0);
  }
  function rerender() { const y = window.scrollY; route(true); window.scrollTo(0, y); }

  // ---------- 7) Drawer & footer ----------
  function buildDrawer() {
    $("#drawerBody").innerHTML = SUBJECTS.map((s, i) => `
      <details ${i === 0 ? "open" : ""}><summary>${esc(s.name.toUpperCase())}</summary>
        ${s.chapters.map((c) => `<a href="${chapUrl(s, c)}"><span class="u">${c.unit}</span><span>${esc(c.title)}</span></a>`).join("")}
      </details>`).join("") +
      `<details><summary>MORE</summary>
        <a href="#/revise"><span class="u">⚡</span><span>Quick revision</span></a>
        <a href="#/recent"><span class="u">↺</span><span>Recently viewed</span></a>
        <a href="#/progress"><span class="u">✓</span><span>My progress</span></a>
      </details>`;
  }
  function buildFooter() {
    const col = (s) => `<div><h5>${esc(s.name.toUpperCase())}</h5>${s.chapters.slice(0, 5).map((c) => `<a href="${chapUrl(s, c)}">${esc(c.title)}</a>`).join("")}<a class="more" href="${subjUrl(s)}">View More</a></div>`;
    $("#footerCols").innerHTML = SUBJECTS.map(col).join("") +
      `<div><h5>MORE INFO</h5><a href="#/revise">Quick Revision</a><a href="#/recent">Recently Viewed</a><a href="#/progress">My Progress</a><a href="#/">Home</a></div>`;
  }
  const drawer = $("#drawer"), scrim = $("#scrim"), menuBtn = $("#menuBtn");
  function openDrawer() { drawer.classList.add("open"); drawer.setAttribute("aria-hidden", "false"); scrim.hidden = false; menuBtn.setAttribute("aria-expanded", "true"); }
  function closeDrawer() { drawer.classList.remove("open"); drawer.setAttribute("aria-hidden", "true"); scrim.hidden = true; menuBtn.setAttribute("aria-expanded", "false"); }

  // ---------- 8) Search palette ----------
  const pal = $("#palette"), palIn = $("#paletteInput"), palRes = $("#paletteResults");
  let palItems = [], palSel = 0;
  const hl = (text, terms) => { let out = esc(text); terms.forEach((t) => { if (t.length > 1) out = out.replace(new RegExp("(" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig"), "<mark>$1</mark>"); }); return out; };
  function runSearch(q) {
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    palItems = [];
    if (!terms.length) {
      palItems = SUBJECTS.map((s) => ({ href: subjUrl(s), t: s.name, s: `${s.chapters.length} chapters`, g: "Subjects" }));
    } else {
      const m = (hay) => terms.every((t) => hay.toLowerCase().includes(t));
      SUBJECTS.forEach((s) => s.chapters.forEach((c) => { if (m(c.title)) palItems.push({ href: chapUrl(s, c), t: c.title, s: `${SHORT[s.id]} · Chapter ${c.unit}`, g: "Chapters" }); }));
      topicsAll.forEach(({ s, c, tp, ti }) => { if (m(tp.title)) palItems.push({ href: topicUrl(s, c, ti), t: tp.title, s: `${SHORT[s.id]} · ${c.title}`, g: "Topics" }); });
      const fs = [];
      all.forEach((x) => {
        if (m([x.f.n, x.f.v, x.f.c, x.f.t, x.tp.title, x.c.title].join(" "))) {
          let sc = 0; terms.forEach((t) => { if ((x.f.n || "").toLowerCase().includes(t)) sc += 5; if (x.tp.title.toLowerCase().includes(t)) sc += 2; });
          fs.push([sc, x]);
        }
      });
      fs.sort((a, b) => b[0] - a[0]).slice(0, 40).forEach(([, x]) => palItems.push({ href: topicUrl(x.s, x.c, x.ti, x.fi), t: x.f.n || x.tp.title, s: `${SHORT[x.s.id]} · ${x.c.title} › ${x.tp.title}`, g: x.f.rx ? "Reactions" : "Formulas" }));
      palItems = palItems.slice(0, 60);
    }
    palSel = 0;
    let lastG = null, html = "";
    palItems.forEach((it, i) => {
      if (it.g !== lastG) { html += `<div class="grp">${it.g}</div>`; lastG = it.g; }
      html += `<a href="${it.href}" data-i="${i}" class="${i === 0 ? "sel" : ""}" role="option"><div class="t">${hl(it.t, terms)}</div><div class="s">${esc(it.s)}</div></a>`;
    });
    palRes.innerHTML = html || `<div class="none">No matches for “${esc(q)}”. Try “lens”, “pH”, “aldol” or “integral”.</div>`;
  }
  function openPalette(q = "") { pal.hidden = false; palIn.value = q; runSearch(q.trim()); setTimeout(() => { palIn.focus(); palIn.setSelectionRange(q.length, q.length); }, 10); }
  function closePalette() { pal.hidden = true; $("#searchInput").value = ""; }
  function movePal(d) {
    if (!palItems.length) return;
    palSel = (palSel + d + palItems.length) % palItems.length;
    palRes.querySelectorAll("a").forEach((a) => a.classList.toggle("sel", Number(a.dataset.i) === palSel));
    const el = palRes.querySelector(`a[data-i="${palSel}"]`); if (el) el.scrollIntoView({ block: "nearest" });
  }

  // ---------- 9) Events ----------
  menuBtn.addEventListener("click", openDrawer);
  $("#drawerClose").addEventListener("click", closeDrawer);
  scrim.addEventListener("click", closeDrawer);
  $("#searchForm").addEventListener("submit", (e) => { e.preventDefault(); openPalette($("#searchInput").value); });
  $("#searchInput").addEventListener("input", (e) => { if (e.target.value.trim()) openPalette(e.target.value); });
  pal.addEventListener("click", (e) => { if (e.target === pal || e.target.closest("a")) closePalette(); });
  palIn.addEventListener("input", () => runSearch(palIn.value.trim()));
  palIn.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); movePal(1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); movePal(-1); }
    else if (e.key === "Enter") { e.preventDefault(); const it = palItems[palSel]; if (it) { closePalette(); location.hash = it.href.slice(1); } }
  });
  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); pal.hidden ? openPalette() : closePalette(); return; }
    if (e.key === "Escape") { closePalette(); closeDrawer(); return; }
    const typing = /INPUT|TEXTAREA/.test(document.activeElement.tagName);
    if (!typing && e.key === "/") { e.preventDefault(); openPalette(); return; }
    if (parse().name === "revise" && !typing && pal.hidden) {
      if (e.key === " ") { e.preventDefault(); fc("reveal"); }
      else if (e.key === "ArrowRight") fc("next");
      else if (e.key === "ArrowLeft") fc("prev");
    }
  });
  function fc(act) {
    if (!deck.length) return;
    if (act === "reveal") revealed = !revealed;
    else if (act === "next") { pos = (pos + 1) % deck.length; revealed = false; }
    else if (act === "prev") { pos = (pos - 1 + deck.length) % deck.length; revealed = false; }
    else if (act === "shuffle") buildDeck(deckKey);
    rerender();
  }
  document.addEventListener("click", (e) => {
    const t = e.target;
    const cp = t.closest("[data-copy]");
    if (cp) {
      const x = all.find((y) => y.id === cp.dataset.copy);
      if (x && navigator.clipboard) navigator.clipboard.writeText(x.f.t).then(() => toast("LaTeX copied"), () => toast("Copy not allowed here"));
      return;
    }
    const rv = t.closest("[data-revise]");
    if (rv) { const k = rv.dataset.revise; revised.has(k) ? revised.delete(k) : revised.add(k); persistRevised(); toast(revised.has(k) ? "Marked as revised" : "Unmarked"); rerender(); return; }
    const f = t.closest("[data-fc]"); if (f) { fc(f.dataset.fc); return; }
    if (t.closest("[data-reveal]")) { fc("reveal"); return; }
    if (t.closest("[data-clear-recent]")) { recent = []; store.set("jee-recent-v1", recent); rerender(); }
  });
  document.addEventListener("change", (e) => {
    const k = e.target.dataset && e.target.dataset.reviseChk;
    if (k) { e.target.checked ? revised.add(k) : revised.delete(k); persistRevised(); rerender(); }
  });
  window.addEventListener("hashchange", () => route());

  buildDrawer();
  buildFooter();
  route();
})();

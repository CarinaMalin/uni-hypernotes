// ---------- LERNEN – learn.js ----------
// Standalone JS für lernen/index.html
// Datenpersistenz: liest/schreibt learnTopicStatus + learnUserTopics
// in den gemeinsamen localStorage-Key "uniHyperNotes_v3".

const STORAGE_KEY = "uniHyperNotes_v3";

function getLearnState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

function saveLearnState(mutateFn) {
  const state = getLearnState();
  mutateFn(state);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// ---- DOM refs ----
const learnSubjectsUl = document.getElementById("learnSubjects");
const learnTopicsUl   = document.getElementById("learnTopics");
const learnContentDiv = document.getElementById("learnContent");

let currentSubjectId  = "allg-chem";
let currentTopicId    = "aufbau-materie";
let _learnQuizMode    = false;
let _learnEditTopicId = null;

// ---- helpers ----
function getTopicStatus(subjectId, topicId) {
  return ((getLearnState().learnTopicStatus || {})[subjectId + ":" + topicId]) || "new";
}

function setTopicStatus(subjectId, topicId, status) {
  saveLearnState(s => {
    if (!s.learnTopicStatus) s.learnTopicStatus = {};
    s.learnTopicStatus[subjectId + ":" + topicId] = status;
  });
  renderLearnTopics();
  renderLearnContent();
}

function getAllTopicsForSubject(subjectId) {
  const subject = learnData.subjects.find(s => s.id === subjectId);
  const builtIn = subject ? subject.topics : [];
  const userOwn = (getLearnState().learnUserTopics || []).filter(t => t.subjectId === subjectId);
  return [...builtIn, ...userOwn];
}

// ---- render subjects ----
function renderLearnSubjects() {
  learnSubjectsUl.innerHTML = "";
  learnData.subjects.forEach(sub => {
    const li = document.createElement("li");
    li.className = "learn-item" + (sub.id === currentSubjectId ? " active" : "");
    const span = document.createElement("span");
    span.style.cssText = "flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;";
    span.textContent = sub.name;
    li.appendChild(span);
    li.addEventListener("click", () => {
      currentSubjectId = sub.id;
      const all = getAllTopicsForSubject(sub.id);
      if (all.length) currentTopicId = all[0].id;
      renderLearnSubjects();
      renderLearnTopics();
      renderLearnContent();
    });
    learnSubjectsUl.appendChild(li);
  });
}

// ---- render topics ----
function renderLearnTopics() {
  learnTopicsUl.innerHTML = "";
  const allTopics = getAllTopicsForSubject(currentSubjectId);
  allTopics.forEach(t => {
    const status   = getTopicStatus(currentSubjectId, t.id);
    const dotClass = status === "done"     ? "learn-s-done"
                   : status === "learning" ? "learn-s-learning"
                   : "learn-s-new";
    const li = document.createElement("li");
    li.className = "learn-item" + (t.id === currentTopicId ? " active" : "");
    li.innerHTML = `<span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${t.title}</span>
                    <span class="learn-status-dot ${dotClass}"></span>`;
    li.addEventListener("click", () => {
      currentTopicId = t.id;
      renderLearnTopics();
      renderLearnContent();
    });
    learnTopicsUl.appendChild(li);
  });
  // "+ Eigenes Thema" button
  const addBtn = document.createElement("button");
  addBtn.className = "learn-add-topic-btn";
  addBtn.textContent = "＋ Eigenes Thema";
  addBtn.addEventListener("click", () => showLearnUserModal(null));
  learnTopicsUl.appendChild(addBtn);
}

// ---- render content ----
function renderLearnContent() {
  const subject   = learnData.subjects.find(s => s.id === currentSubjectId);
  const allTopics = getAllTopicsForSubject(currentSubjectId);
  const topic     = allTopics.find(t => t.id === currentTopicId) || allTopics[0];
  if (!topic) { learnContentDiv.innerHTML = ""; return; }

  const subjectName = subject ? subject.name : "Eigene Themen";
  const status      = getTopicStatus(currentSubjectId, topic.id);
  const isUserTopic = !!topic.userCreated;

  function quizSection(title, innerHtml, label) {
    if (!_learnQuizMode) {
      return `<div class="learn-section-title">${title}</div>${innerHtml}`;
    }
    return `<div class="learn-section-title">${title}</div>
      <button class="learn-reveal-btn js-reveal-btn">👆 Tippen zum Aufdecken – <em>${label || title}</em></button>
      <div class="learn-reveal-content" style="display:none;">${innerHtml}</div>`;
  }

  const tagsHtml     = (topic.tags     || []).map(tag => `<span class="learn-chip">${tag}</span>`).join("");
  const goalsHtml    = (topic.goals    || []).map(g => `<li>${g}</li>`).join("");
  const keyHtml      = (topic.keyPoints|| []).map(k => `<li>${k}</li>`).join("");
  const formulasHtml = (topic.formulas || []).map(f => `<li><code>${f}</code></li>`).join("");
  const visualHtml   = topic.visual
    ? quizSection("Visuelle Hilfe", `<div class="learn-visual">${topic.visual}</div>`, "Diagramm")
    : "";
  const detailHtml   = (topic.detailBlocks || [])
    .map(b => quizSection(b.title, `<div style="font-size:12px;line-height:1.5;margin-bottom:6px;">${b.content}</div>`, b.title))
    .join("");

  learnContentDiv.innerHTML = `
    <div class="card learn-card">
      <div class="learn-card-header" style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:6px;">
        <div>
          <div class="learn-heading">${topic.title}</div>
          <div class="learn-subheading">${subjectName}</div>
        </div>
        <div style="font-size:11px;opacity:0.6;flex-shrink:0;margin-left:8px;">${(topic.tags || []).length} Stichworte</div>
      </div>

      <div class="learn-chiprow">${tagsHtml}</div>

      <div class="learn-status-bar">
        <span style="font-size:11px;opacity:0.65;">Fortschritt:</span>
        <button id="lsb-new"      class="learn-st-btn lsb-new      ${status==="new"      ? "active" : ""}">⬜ Neu</button>
        <button id="lsb-learning" class="learn-st-btn lsb-learning ${status==="learning" ? "active" : ""}">📖 Lerne ich</button>
        <button id="lsb-done"     class="learn-st-btn lsb-done     ${status==="done"     ? "active" : ""}">✅ Gelernt</button>
        ${isUserTopic ? `
          <button id="lsb-edit"   style="font-size:11px;padding:3px 8px;border-radius:6px;background:rgba(255,255,255,0.06);">✏️</button>
          <button id="lsb-delete" style="font-size:11px;padding:3px 8px;border-radius:6px;background:rgba(255,80,80,0.12);color:#f87171;">🗑️</button>
        ` : ""}
        <button id="lsb-quiz" class="learn-quiz-toggle ${_learnQuizMode ? "on" : ""}">🎯 Quiz</button>
      </div>

      <div class="learn-section-title">Lernziele</div>
      <ul class="learn-list">${goalsHtml}</ul>

      ${quizSection("Zusammenfassung",
        `<p style="font-size:13px;line-height:1.5;margin-top:4px;">${topic.summary || "<em style='opacity:0.5'>Noch keine Zusammenfassung.</em>"}</p>`,
        "Zusammenfassung")}

      ${quizSection("Wichtige Punkte",
        `<ul class="learn-list">${keyHtml || "<li style='opacity:0.5'>Noch keine Punkte.</li>"}</ul>`,
        "Punkte")}

      ${formulasHtml ? quizSection("Wichtige Formeln",
        `<ul class="learn-list">${formulasHtml}</ul>`, "Formeln") : ""}

      ${visualHtml}
      ${detailHtml}
    </div>`;

  document.getElementById("lsb-new")     ?.addEventListener("click", () => setTopicStatus(currentSubjectId, topic.id, "new"));
  document.getElementById("lsb-learning")?.addEventListener("click", () => setTopicStatus(currentSubjectId, topic.id, "learning"));
  document.getElementById("lsb-done")    ?.addEventListener("click", () => setTopicStatus(currentSubjectId, topic.id, "done"));
  document.getElementById("lsb-quiz")    ?.addEventListener("click", () => { _learnQuizMode = !_learnQuizMode; renderLearnContent(); });
  document.getElementById("lsb-edit")    ?.addEventListener("click", () => showLearnUserModal(topic.id));
  document.getElementById("lsb-delete")  ?.addEventListener("click", () => deleteLearnUserTopic(topic.id));

  learnContentDiv.querySelectorAll(".js-reveal-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.style.display = "none";
      const content = btn.nextElementSibling;
      if (content) content.style.display = "";
    });
  });
}

// ---- user topic CRUD ----
function showLearnUserModal(topicId) {
  _learnEditTopicId = topicId || null;
  const existing    = topicId ? (getLearnState().learnUserTopics || []).find(t => t.id === topicId) : null;
  document.getElementById("learnModalTitle").textContent      = existing ? "✏️ Thema bearbeiten" : "📖 Eigenes Thema";
  document.getElementById("learnUserTitleInput").value        = existing ? existing.title              : "";
  document.getElementById("learnUserGoalsInput").value        = existing ? (existing.goals    || []).join("\n") : "";
  document.getElementById("learnUserSummaryInput").value      = existing ? (existing.summary  || "")           : "";
  document.getElementById("learnUserKeyInput").value          = existing ? (existing.keyPoints|| []).join("\n") : "";
  document.getElementById("learnUserModal").classList.add("open");
}

function hideLearnUserModal() {
  document.getElementById("learnUserModal").classList.remove("open");
}

function saveLearnUserTopic() {
  const title = document.getElementById("learnUserTitleInput").value.trim();
  if (!title) { alert("Bitte einen Titel eingeben."); return; }
  const goals     = document.getElementById("learnUserGoalsInput").value.split("\n").map(s => s.trim()).filter(Boolean);
  const summary   = document.getElementById("learnUserSummaryInput").value.trim();
  const keyPoints = document.getElementById("learnUserKeyInput").value.split("\n").map(s => s.trim()).filter(Boolean);

  saveLearnState(state => {
    if (!state.learnUserTopics) state.learnUserTopics = [];
    if (_learnEditTopicId) {
      const idx = state.learnUserTopics.findIndex(t => t.id === _learnEditTopicId);
      if (idx >= 0) state.learnUserTopics[idx] = { ...state.learnUserTopics[idx], title, goals, summary, keyPoints };
    } else {
      const nt = { id: "ut-" + Date.now(), subjectId: currentSubjectId, userCreated: true, title, goals, summary, keyPoints, tags: [], formulas: [] };
      state.learnUserTopics.push(nt);
      currentTopicId = nt.id;
    }
  });

  hideLearnUserModal();
  renderLearnTopics();
  renderLearnContent();
}

function deleteLearnUserTopic(topicId) {
  if (!confirm("Eigenes Thema löschen?")) return;
  saveLearnState(state => {
    state.learnUserTopics = (state.learnUserTopics || []).filter(t => t.id !== topicId);
  });
  const remaining = getAllTopicsForSubject(currentSubjectId);
  currentTopicId  = remaining.length ? remaining[0].id : null;
  renderLearnTopics();
  renderLearnContent();
}

// ---- modal event listeners ----
document.getElementById("learnModalCancelBtn")?.addEventListener("click", hideLearnUserModal);
document.getElementById("learnModalSaveBtn")  ?.addEventListener("click", saveLearnUserTopic);
document.getElementById("learnUserModal")      ?.addEventListener("click", e => { if (e.target === e.currentTarget) hideLearnUserModal(); });

// ---- INIT ----
renderLearnSubjects();
renderLearnTopics();
renderLearnContent();

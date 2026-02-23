const learnData = {
  subjects: [
    {
      id: "allg-chem",
      name: "Allgemeine Chemie",
      description:
        "Grundlagen des Aufbaus der Materie, chemische Bindungen, Stöchiometrie, Säure-Base, Redox, Titrationen & Laborsicherheit – auf Klausur-Niveau.",
      topics: [
        {
          id: "aufbau-materie",
          title: "Aufbau der Materie & Atome",
          tags: ["Atome", "Elektronenhülle", "Kern"],
          goals: [
            "Aufbau von Atomen (Protonen, Neutronen, Elektronen) sicher erklären.",
            "Ordnungszahl, Massenzahl und Isotope unterscheiden und Beispiele angeben.",
            "Elektronenkonfiguration für einfache Elemente schreiben (z. B. H, He, C, O, Na, Cl)."
          ],
          summary:
            "Materie besteht aus Atomen. Ein Atom besitzt einen positiv geladenen Kern (Protonen und Neutronen) und eine negativ geladene Elektronenhülle. Die Ordnungszahl Z entspricht der Protonenzahl und definiert das Element. Isotope haben dieselbe Protonenzahl, aber unterschiedliche Neutronenzahlen. Für die Chemie sind vor allem die Valenzelektronen (Außenelektronen) entscheidend, da sie an Bindungen beteiligt sind.",
          keyPoints: [
            "Ordnungszahl Z = Anzahl der Protonen = Anzahl der Elektronen im neutralen Atom.",
            "Massenzahl A ≈ Protonen + Neutronen; Neutronenzahl N = A − Z.",
            "Isotope: z. B. ¹²C, ¹³C, ¹⁴C – alle Kohlenstoff, aber mit unterschiedlicher Massenzahl.",
            "Elektronenkonfiguration zeigt Verteilung in Schalen/Unterschalen (z. B. 1s² 2s² 2p²).",
            "Valenzelektronen bestimmen Reaktivität (z. B. Edelgase: volle Schale → sehr reaktionsträge)."
          ],
          formulas: ["A = Z + N"],
          visual: `
            <div>Atommodell (vereinfachtes Kugelmodell):</div>
            <svg viewBox="0 0 140 80" width="140" height="80">
              <circle cx="45" cy="40" r="18" fill="rgba(123,140,255,0.35)" stroke="currentColor"/>
              <circle cx="95" cy="40" r="26" fill="none" stroke="currentColor" stroke-dasharray="4 3"/>
              <circle cx="95" cy="16" r="3" fill="currentColor"/>
              <circle cx="116" cy="40" r="3" fill="currentColor"/>
              <circle cx="74" cy="40" r="3" fill="currentColor"/>
            </svg>
            <div style="font-size:11px;opacity:0.8;margin-top:4px;">Innen: Kern (p⁺, n⁰) – außen: Elektronen auf Schale.</div>
          `
        },
        {
          id: "periodensystem",
          title: "Periodensystem der Elemente (PSE)",
          tags: ["PSE", "Trends", "Gruppen"],
          goals: [
            "Perioden und Gruppen im PSE sicher benennen.",
            "Hauptgruppen (Alkalimetalle, Erdalkalimetalle, Halogene, Edelgase) zuordnen.",
            "Trends von Atomradius und Elektronegativität qualitativ beschreiben."
          ],
          summary:
            "Das Periodensystem ordnet alle bekannten Elemente nach steigender Ordnungszahl. In einer Gruppe (Spalte) stehen Elemente mit ähnlicher Valenzelektronenkonfiguration und ähnlichen chemischen Eigenschaften. In einer Periode (Zeile) nimmt die Ordnungszahl von links nach rechts zu. Wichtige Trends: der Atomradius nimmt innerhalb einer Periode von links nach rechts ab, innerhalb einer Gruppe von oben nach unten zu. Die Elektronegativität zeigt das umgekehrte Verhalten.",
          keyPoints: [
            "Gruppen: z. B. 1. Hauptgruppe = Alkalimetalle (Li, Na, K, ...); 17. Hauptgruppe = Halogene; 18. Hauptgruppe = Edelgase.",
            "Perioden: horizontale Zeilen – geben an, wie viele Schalen im Atom besetzt sind.",
            "Atomradius ↓ nach rechts kleiner, ↑ nach unten größer.",
            "Elektronegativität ↑ nach rechts größer (bis F), ↑ nach oben größer.",
            "Metalle stehen überwiegend links unten, Nichtmetalle rechts oben."
          ],
          formulas: [],
          visual: `
            <div style="font-size:11px;margin-bottom:4px;">Sehr vereinfachtes Mini-PSE (nur Hauptgruppen):</div>
            <pre style="font-size:10px;line-height:1.2;">
H                                                   He
Li Be                                      B  C  N  O  F  Ne
Na Mg                                      Al Si P  S  Cl Ar
K  Ca                                      Ga Ge As Se Br Kr
            </pre>
          `
        },
        {
          id: "orbitale",
          title: "Atomorbitale: s- und p-Orbitale",
          tags: ["Orbitale", "s-Orbital", "p-Orbital"],
          goals: [
            "Begriff Orbital (Wahrscheinlichkeitswolke) formulieren.",
            "s-Orbitale als kugelförmig und p-Orbitale als hantelförmig skizzieren.",
            "Für p-Orbitale die drei Raumrichtungen (pₓ, pᵧ, p_z) angeben."
          ],
          summary:
            "Ein Orbital ist kein 'Planet auf einer Kreisbahn', sondern ein Bereich im Raum, in dem sich ein Elektron mit hoher Wahrscheinlichkeit aufhält. s-Orbitale sind kugelförmig um den Kern verteilt. p-Orbitale sind hantelförmig mit zwei Lobes und besitzen drei räumliche Ausrichtungen (pₓ, pᵧ, p_z). In der Klausur wird oft verlangt, ein 1s-Orbital und drei p-Orbitale zu skizzieren und sinnvoll zu beschriften.",
          keyPoints: [
            "s-Orbitale: kugelförmig, 1s liegt am niedrigsten, dann 2s, 3s ...",
            "p-Orbitale: hantelförmig, jeweils zwei 'Lappen' (Lobes) – drei Ausrichtungen: x-, y- und z-Achse.",
            "Maximal 2 Elektronen pro Orbital (mit entgegengesetztem Spin).",
            "Skizze: s-Orbital = Kreis/Kugel; p-Orbital = zwei Kreise/Ellipsen gegenüberliegend mit Kern in der Mitte."
          ],
          formulas: [],
          visual: `
            <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
              <div>
                <div style="font-size:11px;margin-bottom:2px;">s-Orbital (1s)</div>
                <svg viewBox="0 0 70 70" width="70" height="70">
                  <circle cx="35" cy="35" r="22"
                          fill="rgba(123,140,255,0.30)" stroke="currentColor"/>
                  <circle cx="35" cy="35" r="3" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <div style="font-size:11px;margin-bottom:2px;">p-Orbital (z. B. p<sub>z</sub>)</div>
                <svg viewBox="0 0 90 70" width="90" height="70">
                  <circle cx="45" cy="20" r="14"
                          fill="rgba(123,140,255,0.30)" stroke="currentColor"/>
                  <circle cx="45" cy="50" r="14"
                          fill="rgba(123,140,255,0.30)" stroke="currentColor"/>
                  <circle cx="45" cy="35" r="3" fill="currentColor"/>
                </svg>
              </div>
            </div>
            <div style="font-size:11px;opacity:0.8;margin-top:4px;">Für die Klausur: Kugel für s, Hantel für p – sauber beschriften reicht völlig.</div>
          `
        },
        {
          id: "mo-n2",
          title: "Molekülorbitale (MO) – Beispiel N₂",
          tags: ["MO-Theorie", "N₂", "Bindungsordnung"],
          goals: [
            "Grundidee der MO-Theorie wiedergeben (Orbitale kombinieren zu bindenden/antibindenden MOs).",
            "Ein einfaches MO-Schema für homonukleare zweiatomige Moleküle skizzieren (z. B. N₂).",
            "Bindungsordnung für N₂ berechnen und deuten können."
          ],
          summary:
            "In der MO-Theorie werden Atomorbitale zu Molekülorbitalen kombiniert: bindende (energetisch niedriger) und antibindende (energetisch höher). Für N₂ kombinierst du 2s- und 2p-Orbitale der beiden N-Atome. Wichtig in der Klausur: MO-Schema zeichnen, Energieniveaus sortieren und Elektronen mit Pfeilen eintragen. Danach kannst du die Bindungsordnung bestimmen.",
          keyPoints: [
            "Bindende MOs (σ, π) liegen energetisch tiefer, antibindende (σ*, π*) höher.",
            "Für N₂ (14 e⁻ pro Molekül, also 7 pro Atom): Bindungsordnung = (Bindende e⁻ − Antibindende e⁻)/2.",
            "Typisch für N₂: Bindungsordnung 3 → Dreifachbindung.",
            "MO-Schema sauber mit Pfeilen (↑↓) füllen – Hundsche Regel & Pauli-Prinzip beachten."
          ],
          formulas: [
            "Bindungsordnung = (N<sub>bindend</sub> − N<sub>antibindend</sub>) / 2"
          ],
          visual: `
            <div style="font-size:11px;margin-bottom:4px;">Sehr vereinfachtes MO-Schema (nur qualitativ):</div>
            <pre style="font-size:10px;line-height:1.2;">
           σ*2p   (antibindend)
      π2p  π2p
           σ2p   (bindend)
           σ*2s
           σ2s

    Pfeile von unten nach oben eintragen (Energie ↑).
            </pre>
          `
        ,

      detailBlocks: [
        {
          title: "Schalen, Unterschalen & Orbitale (Haus-Analogie)",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p>Ein <b>Orbital</b> ist kein Planet auf einer Kreisbahn, sondern ein Aufenthaltsbereich, in dem sich ein Elektron mit hoher Wahrscheinlichkeit aufhält.</p>

              <p>Bild dir ein Haus:</p>
              <ul>
                <li><b>Schale (n)</b> = Stockwerk (n = 1, 2, 3, ...).</li>
                <li><b>Unterschale</b> = Zimmerart im Stockwerk (s, p, d, f).</li>
                <li><b>Orbital</b> = ein konkretes Zimmer, in dem max. 2 Elektronen wohnen.</li>
              </ul>

              <p>Welche Unterschalen es pro Schale geben kann:</p>
              <ul>
                <li>n = 1 → nur 1s</li>
                <li>n = 2 → 2s, 2p</li>
                <li>n = 3 → 3s, 3p, 3d</li>
                <li>n = 4 → 4s, 4p, 4d, 4f</li>
              </ul>
            </div>
          `
        },
        {
          title: "s- vs. p-Orbitale – Formen & Kapazität",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p><b>s-Orbitale:</b></p>
              <ul>
                <li>Form: kugelförmig (&bdquo;s&rdquo; ≈ <i>sphere</i>).</li>
                <li>Pro Schale gibt es genau <b>1 s-Orbital</b> (1s, 2s, 3s...).</li>
                <li>Jedes Orbital kann max. <b>2 Elektronen</b> mit entgegengesetztem Spin (↑↓) aufnehmen.</li>
              </ul>

              <p><b>p-Orbitale:</b></p>
              <ul>
                <li>Form: hantel-/erdnussförmig (&bdquo;p&rdquo; ≈ <i>peanut/propeller</i>).</li>
                <li>Pro Schale gibt es <b>3 p-Orbitale</b>: p<sub>x</sub>, p<sub>y</sub>, p<sub>z</sub>.</li>
                <li>Jedes p-Orbital kann wieder 2 Elektronen aufnehmen → insgesamt <b>6 Elektronen</b> in einer p-Unterschale.</li>
              </ul>

              <p>Beispiel 2. Schale (n = 2):</p>
              <ul>
                <li>2s → 1 Orbital → max. 2 e⁻</li>
                <li>2p → 3 Orbitale → max. 6 e⁻</li>
                <li>Gesamt in Schale 2: max. 8 e⁻ (2s² 2p⁶)</li>
              </ul>
            </div>
          `
        },
        {
          title: "Elektronenkonfiguration & Hundsche Regel (2. Periode)",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p>Elektronenkonfiguration schreibt auf, wie die Elektronen auf die Orbitale verteilt sind, z. B.:</p>

              <p><b>Beispiel Sauerstoff:</b> O: 1s² 2s² 2p⁴</p>
              <ul>
                <li>1s² → 2 Elektronen im 1s-Orbital (innere Schale).</li>
                <li>2s² → 2 Elektronen im 2s-Orbital.</li>
                <li>2p⁴ → 4 Elektronen in den drei 2p-Orbitalen zusammen.</li>
              </ul>

              <p><b>Hundsche Regel (für p-Orbitale):</b></p>
              <ul>
                <li>Entartete Orbitale (z. B. p<sub>x</sub>, p<sub>y</sub>, p<sub>z</sub>) werden zuerst <b>einzeln</b> mit Elektronen gleicher Spinrichtung besetzt (↑, ↑, ↑).</li>
                <li>Erst danach werden sie gepaart (↑↓, ↑↓, ↑).</li>
              </ul>

              <p><b>Valenzelektronen:</b></p>
              <ul>
                <li>Die Elektronen in der äußersten, nicht vollen Schale (bei der 2. Periode: 2s und 2p).</li>
                <li>Beispiele: O hat 6 Valenzelektronen (2s² 2p⁴), F hat 7 (2s² 2p⁵).</li>
              </ul>
            </div>
          `
        },
        {
          title: "Merkkasten für Klausur: Orbitale & MO kurz und knackig",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <ul>
                <li><b>Orbital</b> = Aufenthaltsbereich eines Elektrons, max. 2 Elektronen pro Orbital (↑↓).</li>
                <li><b>s</b>-Orbital = kugelförmig, 1 s-Orbital pro Schale.</li>
                <li><b>p</b>-Orbitale = 3 Stück pro Schale, hantelförmig (p<sub>x</sub>, p<sub>y</sub>, p<sub>z</sub>), zusammen max. 6 Elektronen.</li>
                <li>Elektronenkonfiguration: von unten nach oben auffüllen (1s, 2s, 2p, 3s...), Pauli-Prinzip und Hundsche Regel beachten.</li>
                <li><b>Valenzelektronen</b> = Elektronen der äußersten Schale (für B–Ne: alles, was in 2s und 2p sitzt).</li>
                <li>Für MO-Theorie später wichtig: aus Atomorbitalen (AOs) werden Molekülorbitale (MOs), aus 2 AOs → 1 bindendes + 1 antibindendes MO.</li>
              </ul>
              <p style="margin-top:4px; opacity:0.8;">
                Wenn du diese Punkte sicher drauf hast, verstehst du die MO-Schemata (σ, π, σ*, π*) viel leichter.
              </p>
            </div>
          `
        }
      ]
      },


        {
          id: "stoechiometrie",
          title: "Stöchiometrie & chemisches Rechnen",
          tags: ["Molare Masse", "Stoffmenge", "Gleichungen"],
          goals: [
            "Stoffmenge aus Masse und molarer Masse berechnen.",
            "Reaktionsgleichungen korrekt nach Atomanzahl ausgleichen.",
            "Grobe Überschlagsrechnungen beherrschen (z. B. mg → mmol)."
          ],
          summary:
            "Stöchiometrie beantwortet die Frage: Wie viel von welcher Substanz reagiert miteinander? Grundlage ist die Stoffmenge n in mol. Über die molare Masse M verknüpfst du Masse und Stoffmenge. In Klausuraufgaben geht es oft darum, Reaktionsgleichungen zu formulieren, auszubalancieren und aus einer gegebenen Masse oder Konzentration die gesuchte Menge zu bestimmen.",
          keyPoints: [
            "Stoffmenge: n = m / M (mit m in g, M in g/mol → n in mol).",
            "Konzentration: c = n / V (mit V in L, c in mol/L).",
            "Reaktionsgleichung zuerst verbal verstehen, dann nach Atomen ausgleichen.",
            "Im Zweifel: zuerst Metalle, dann Nichtmetalle, dann H und O ausgleichen – oder deine bevorzugte Reihenfolge.",
            "Immer Einheiten mitführen (mg → g → mol)."
          ],
          formulas: [
            "n = m / M",
            "c = n / V"
          ]
        },
        {
  id: "saeure-base-ph",
  title: "Säure-Base & pH-Wert (inkl. NaOH)",
  tags: ["Brønsted", "pH", "starke Basen"],
  goals: [
    "Säuren und Basen nach Brønsted definieren.",
    "pH starker Säuren und pH starker Basen (z. B. NaOH) sicher berechnen.",
    "Zusammenhang zwischen pH, pOH und [H⁺]/[OH⁻] sowie dem Ionenprodukt des Wassers (K<sub>w</sub>) nutzen.",
    "Zwischen starken und schwachen Säuren/Basen unterscheiden und die passenden Rechenwege kennen."
  ],
  summary:
    "Nach Brønsted ist eine Säure ein Protonendonator und eine Base ein Protonenakzeptor. Starke Säuren/Basen dissoziieren im betrachteten Konzentrationsbereich praktisch vollständig, schwache nur teilweise. Für starke Säuren/Basen kannst du die Konzentration direkt mit [H⁺] oder [OH⁻] gleichsetzen. Über pH, pOH und das Ionenprodukt des Wassers (Kw) lässt sich die jeweils andere Größe berechnen. In Klausuren geht es häufig um das sichere Anwenden weniger Standardrezepte.",
  keyPoints: [
    "Brønsted-Säure: Protonendonator; Brønsted-Base: Protonenakzeptor.",
    "Starke Säure/Base: nahezu vollständige Dissoziation → [H⁺] ≈ c(Säure), [OH⁻] ≈ c(Base).",
    "Wasserautoionisation: H₂O ⇌ H⁺ + OH⁻; K<sub>w</sub> = [H⁺]·[OH⁻] ≈ 1,0·10⁻¹⁴ (25 °C).",
    "pH = −log₁₀([H⁺]); pOH = −log₁₀([OH⁻]); pH + pOH = 14 (bei 25 °C).",
    "Für NaOH: [OH⁻] = c(NaOH) (starke Base, 1:1-Stöchiometrie).",
    "Für starke Säuren/Basen reicht meist das einfache Rezept – schwache Säuren/Basen brauchen Gleichgewichtsbetrachtung (K<sub>a</sub> oder K<sub>b</sub>) oder Näherungen."
  ],
  formulas: [
    "pH = −log₁₀([H⁺])",
    "pOH = −log₁₀([OH⁻])",
    "pH + pOH = 14 (bei 25 °C)",
    "K<sub>w</sub> = [H⁺]·[OH⁻] ≈ 1,0·10⁻¹⁴"
  ],
  visual: `
    <div style="font-size:11px;margin-bottom:4px;">Rechenwege auf einen Blick:</div>
    <pre style="font-size:10px;line-height:1.3;">
Starke Säure (z. B. HCl):
    c(HCl) = 0,010 mol/L
    → [H⁺] ≈ 0,010 mol/L
    → pH = −log(0,010) = 2

Starke Base (z. B. NaOH):
    c(NaOH) = 0,010 mol/L
    → [OH⁻] ≈ 0,010 mol/L
    → pOH = 2
    → pH = 14 − 2 = 12
    </pre>
  `,
  detailBlocks: [
    {
      title: "Definitionen & Grundbegriffe",
      content: `
        <ul style="padding-left:18px; margin:0;">
          <li><b>Brønsted-Säure:</b> Teilchen, das ein Proton (H⁺) abgeben kann. Beispiel: HCl, HNO₃, CH₃COOH.</li>
          <li><b>Brønsted-Base:</b> Teilchen, das ein Proton aufnehmen kann. Beispiel: OH⁻, NH₃, CH₃COO⁻.</li>
          <li><b>Konjugiertes Säure-Base-Paar:</b> Säure und Base, die sich nur um ein Proton unterscheiden (z. B. HCl/Cl⁻).</li>
          <li><b>Starke Säure/Base:</b> Dissoziiert in Wasser praktisch vollständig (im betrachteten Konzentrationsbereich).</li>
          <li><b>Schwache Säure/Base:</b> Nur teilweise dissoziiert; es stellt sich ein Gleichgewicht ein (K<sub>a</sub> oder K<sub>b</sub> beschreibt die Stärke).</li>
          <li><b>pH-Skala:</b> Maß für die Wasserstoffionenkonzentration; pH &lt; 7 sauer, pH = 7 neutral, pH &gt; 7 basisch (bei 25 °C).</li>
        </ul>
      `
    },
    {
      title: "Rezept: pH starker Säuren",
      content: `
        <ol style="padding-left:18px; margin:0;">
          <li><b>Prüfen:</b> Ist es eine starke Säure? (z. B. HCl, HBr, HI, HNO₃, H₂SO₄ (1. Proton), HClO₄)</li>
          <li><b>Spezies bestimmen:</b> Wie viele H⁺ pro Molekül? (z. B. HCl → 1 H⁺, H₂SO₄ → 2 H⁺)</li>
          <li><b>[H⁺] berechnen:</b> [H⁺] ≈ <i>n<sub>H⁺</sub></i> · c(Säure).</li>
          <li><b>pH berechnen:</b> pH = −log₁₀([H⁺]).</li>
        </ol>
        <div style="margin-top:6px; font-size:11px;">
          Beispiel: c(HCl) = 0,050 mol/L → starke einprotonige Säure ⇒ [H⁺] ≈ 0,050 mol/L ⇒ pH = −log(0,050) ≈ 1,30.
        </div>
      `
    },
    {
      title: "Rezept: pH starker Basen (z. B. NaOH)",
      content: `
        <ol style="padding-left:18px; margin:0;">
          <li><b>Prüfen:</b> Ist es eine starke Base? (z. B. NaOH, KOH, Ba(OH)₂).</li>
          <li><b>Spezies bestimmen:</b> Wie viele OH⁻ pro Formeleinheit? (NaOH → 1, Ba(OH)₂ → 2).</li>
          <li><b>[OH⁻] berechnen:</b> [OH⁻] ≈ <i>n<sub>OH⁻</sub></i> · c(Base).</li>
          <li><b>pOH berechnen:</b> pOH = −log₁₀([OH⁻]).</li>
          <li><b>pH berechnen:</b> pH = 14 − pOH (bei 25 °C).</li>
        </ol>
        <div style="margin-top:6px; font-size:11px;">
          Beispiel: c(NaOH) = 0,020 mol/L → [OH⁻] ≈ 0,020 mol/L → pOH = −log(0,020) ≈ 1,70 → pH ≈ 12,30.
        </div>
      `
    },
    {
      title: "Beispielaufgabe (klassischer Klausurstil)",
      content: `
        <div style="font-size:12px; margin-bottom:4px;">
          <b>Aufgabe:</b> Berechne den pH-Wert einer 0,010 mol/L Natronlauge (NaOH). Gehe von vollständiger Dissoziation aus.
        </div>
        <ol style="padding-left:18px; margin:0;">
          <li><b>Schritt 1:</b> NaOH ist eine starke Base, 1:1-Stöchiometrie: NaOH → Na⁺ + OH⁻.</li>
          <li><b>Schritt 2:</b> [OH⁻] ≈ c(NaOH) = 0,010 mol/L.</li>
          <li><b>Schritt 3:</b> pOH = −log(0,010) = 2.</li>
          <li><b>Schritt 4:</b> pH = 14 − pOH = 14 − 2 = 12.</li>
        </ol>
        <div style="margin-top:6px; font-size:11px;">
          <b>Antwort:</b> pH ≈ 12, die Lösung ist deutlich basisch.
        </div>
      `
    },
    {
      title: "Typische Klausurfallen & Merksätze",
      content: `
        <ul style="padding-left:18px; margin:0;">
          <li><b>Falle 1:</b> pH direkt aus c(Base) berechnen (statt über pOH) ⇒ immer erst [OH⁻] → pOH → pH.</li>
          <li><b>Falle 2:</b> Mehrprotonige Säuren/Basen ignorieren:
              z. B. H₂SO₄ – im ersten Schritt gibt es 2 H⁺ pro Molekül → [H⁺] ≈ 2·c(H₂SO₄).</li>
          <li><b>Falle 3:</b> Falsche Einheiten: Konzentrationen müssen in mol/L eingesetzt werden, nicht in g/L.</li>
          <li><b>Falle 4:</b> K<sub>w</sub> vergessen: Bei sehr verdünnten Lösungen oder wenn nur [OH⁻] gegeben ist, hilft K<sub>w</sub> = [H⁺][OH⁻].</li>
          <li><b>Merksatz:</b> "Stark" heißt: ich darf [H⁺] bzw. [OH⁻] (fast) gleich der Anfangskonzentration setzen.</li>
        </ul>
      `
    }
  ]
}
,
{
  id: "titrationen",
  title: "Titrationen (Säure-Base, Fällung, Komplexometrie, Redox)",
  tags: ["Titration", "Äquivalenzpunkt", "Titrationskurve", "Gehaltsbestimmung"],
  goals: [
    "Das Grundprinzip einer Titration erklären können.",
    "Äquivalenzpunkt, Umschlagpunkt und Endpunkt sicher unterscheiden.",
    "Gehaltsbestimmung aus c₁·V₁ = c₂·V₂ in einfachen Fällen durchführen.",
    "Den Unterschied zwischen Säure-Base-, Fällungs-, komplexometrischen und Redoxtitrationen kennen."
  ],
  summary:
    "Bei einer Titration wird eine Maßlösung definierter Konzentration zu einer Probe gegeben, bis die stöchiometrische Menge erreicht ist (Äquivalenzpunkt). Über das verbrauchte Volumen und die bekannte Konzentration der Maßlösung kann man die Konzentration der Probe berechnen. In der Klausur sind typische Themen: Säure-Base-Titrationen, Äquivalenzpunkt-Bestimmung, Indikatorwahl, einfache Gehaltsberechnung.",
  keyPoints: [
    "Maßlösung: Lösung bekannter Konzentration (c bekannt).",
    "Probelösung: zu untersuchende Lösung (c gesucht).",
    "Äquivalenzpunkt: stöchiometrisch genaues Mengenverhältnis erreicht.",
    "Umschlagpunkt/Endpunkt: der tatsächlich beobachtete Farbumschlag des Indikators (liegt nahe am Äquivalenzpunkt).",
    "Titrationskurve: grafische Darstellung von pH (oder Potential) gegen zugegebenes Volumen.",
    "Standardrezept Gehaltsbestimmung: c₁·V₁ = c₂·V₂ (nach Stoffmenge n = c·V)."
  ],
  formulas: [
    "n = c · V",
    "c(Probelösung) = (c(Maßlösung) · V(Maßlösung)) / V(Probelösung) (bei einfacher 1:1-Stöchiometrie)",
    "für andere Verhältnisse: ν₁·c₁·V₁ = ν₂·c₂·V₂ (ν = stöchiometrischer Koeffizient)"
  ],
  visual: `
    <div style="font-size:11px;margin-bottom:4px;">Idealisierte Säure-Base-Titrationskurve (starke Säure mit starker Base):</div>
    <pre style="font-size:10px;line-height:1.2;">
pH
14 |                           ______
   |                        __/
   |                     __/
   |                  __/
   |               __/
   |            __/
   |         __/
   |      __/
   |   __/
   |__/
   +--------------------------------- V
          &uarr;
     Äquivalenzpunkt (starker Anstieg)
    </pre>
  `,
  detailBlocks: [
    {
      title: "Grundprinzip der Titration",
      content: `
        <ul style="padding-left:18px;margin:0;">
          <li>Man gibt eine <b>Maßlösung</b> definierter Konzentration tropfenweise zu einer <b>Probelösung</b> unbekannter Konzentration.</li>
          <li>Die reagierenden Stoffe stehen in einer <b>stöchiometrischen Reaktionsgleichung</b> (z. B. 1:1 oder 1:2).</li>
          <li>Am <b>Äquivalenzpunkt</b> sind die Stoffmengen im stöchiometrisch richtigen Verhältnis umgesetzt.</li>
          <li>Über das verbrauchte Volumen der Maßlösung und ihre Konzentration kann man die Stoffmenge berechnen und daraus die Konzentration der Probe.</li>
          <li>Ein <b>Indikator</b> (oder pH-Meter/Leitfähigkeit) zeigt an, wann der Endpunkt (nahe beim Äquivalenzpunkt) erreicht ist.</li>
        </ul>
      `
    },
    {
      title: "Säure-Base-Titrationen (stark/stark)",
      content: `
        <ul style="padding-left:18px;margin:0;">
          <li><b>Beispiel:</b> HCl (starke Säure) mit NaOH (starke Base).</li>
          <li>Reaktionsgleichung: HCl + NaOH → NaCl + H₂O (1:1-Verhältnis).</li>
          <li><b>Vor dem ÄP:</b> Lösung ist sauer, pH wird durch Überschuss an HCl bestimmt.</li>
          <li><b>Am ÄP:</b> Stöchiometrisch gleiche Stoffmenge HCl und NaOH umgesetzt, pH ≈ 7 (bei starken Säuren/Basen in Wasser).</li>
          <li><b>Nach dem ÄP:</b> Lösung ist basisch, pH wird durch Überschuss an NaOH bestimmt.</li>
        </ul>
        <div style="font-size:11px;margin-top:6px;">
          <b>Gehaltsberechnung (1:1):</b> c(HCl) = c(NaOH) · V(NaOH) / V(HCl) 
        </div>
      `
    },
    {
      title: "Titrationen mit anderen Stöchiometrien",
      content: `
        <ul style="padding-left:18px;margin:0;">
          <li>Reaktionsgleichung muss immer <b>zuerst</b> aufgestellt und ausgeglichen werden.</li>
          <li>Beispiel: 2 HCl + Na₂CO₃ → 2 NaCl + H₂O + CO₂ → Verhältnis 2:1.</li>
          <li>Dann gilt: 2 · n(Na₂CO₃) = n(HCl) oder allgemein: ν₁·n₁ = ν₂·n₂.</li>
          <li>Übertragen auf Konzentration und Volumen: ν₁·c₁·V₁ = ν₂·c₂·V₂.</li>
          <li>Das ist die <b>allgemeine Gehaltsgleichung</b> für Titrationen.</li>
        </ul>
      `
    },
    {
      title: "Beispielaufgabe (Gehaltsbestimmung)",
      content: `
        <div style="font-size:12px;margin-bottom:4px;">
          <b>Aufgabe:</b> 25,0 mL Salzsäure werden mit 0,100 mol/L NaOH titriert. Der Äquivalenzpunkt liegt bei 18,6 mL NaOH. Berechne c(HCl).
        </div>
        <ol style="padding-left:18px;margin:0;">
          <li>Reaktionsgleichung: HCl + NaOH → NaCl + H₂O (1:1).</li>
          <li>Formel: c(HCl) · V(HCl) = c(NaOH) · V(NaOH).</li>
          <li>Einsetzen: c(HCl) · 25,0 mL = 0,100 mol/L · 18,6 mL.</li>
          <li>Volumina in L umrechnen oder kürzen, da beide in mL: c(HCl) = 0,100 · 18,6 / 25,0 mol/L.</li>
          <li>c(HCl) ≈ 0,0744 mol/L.</li>
        </ol>
        <div style="font-size:11px;margin-top:6px;">
          <b>Antwort:</b> Die Salzsäure hat eine Konzentration von ca. 0,074 mol/L.
        </div>
      `
    },
    {
      title: "Andere Titrationsarten (Überblick)",
      content: `
        <ul style="padding-left:18px;margin:0;">
          <li><b>Fällungstitration:</b> Bildung eines schwerlöslichen Niederschlags (z. B. Ag⁺ + Cl⁻ → AgCl↓) – ÄP über Leitfähigkeit oder Indikator.</li>
          <li><b>Komplexometrische Titration:</b> Bildung von Komplexen (z. B. EDTA-Titration von Ca²⁺/Mg²⁺) – Indikatoren sind oft Metallindikatoren.</li>
          <li><b>Redoxtitration:</b> Redoxreaktion zwischen Maß- und Probelösung (z. B. Permanganattitration) – ÄP über Potentialsprung oder Eigenfärbung.</li>
        </ul>
      `
    },
    {
      title: "Typische Klausurfallen & Merksätze",
      content: `
        <ul style="padding-left:18px;margin:0;">
          <li><b>Falle 1:</b> Stoßzahlen ignorieren → immer zuerst Reaktionsgleichung sauber ausgleichen.</li>
          <li><b>Falle 2:</b> Volumen in mL einsetzen, obwohl in der Formel L gebraucht werden → Einheit checken!</li>
          <li><b>Falle 3:</b> Äquivalenzpunkt und Umschlagpunkt verwechseln.</li>
          <li><b>Falle 4:</b> c₁·V₁ = c₂·V₂ anwenden, obwohl Verhältnis ≠ 1:1 → dann braucht man ν₁·c₁·V₁ = ν₂·c₂·V₂.</li>
          <li><b>Merksatz:</b> <i>„Erst Reaktionsgleichung, dann rechnen.“</i></li>
        </ul>
      `
    }
  ]
},

{
 id: "redox",
 title: "Redoxreaktionen & elektrochemische Spannungsreihe",
 tags: ["Oxidation", "Reduktion", "Redox", "Elektrochemie"],
 goals: [
   "Oxidation und Reduktion sicher definieren (Elektronenabgabe/-aufnahme).",
   "Oxidationszahlen zuweisen und einfache Redoxgleichungen interpretieren können.",
   "Die elektrochemische Spannungsreihe zur Vorhersage der Reaktionsrichtung nutzen.",
   "Grundidee von galvanischer Zelle, Standardpotential und Nernst-Gleichung verstehen (auf Klausur-Niveau)."
 ],
 summary:
   "Redoxreaktionen sind Elektronentransferprozesse: Oxidation bedeutet Elektronenabgabe, Reduktion Elektronenaufnahme. Die elektrochemische Spannungsreihe ordnet Halbzellen nach ihren Standardelektrodenpotenzialen. Elemente mit sehr negativem Potential geben leicht Elektronen ab (starke Reduktionsmittel), solche mit hohem Potential wirken als Oxidationsmittel. In galvanischen Zellen wird die freie Reaktionsenergie in elektrische Energie umgewandelt.",
 keyPoints: [
   "Oxidation: Elektronenabgabe (Oxidationszahl wird größer).",
   "Reduktion: Elektronenaufnahme (Oxidationszahl wird kleiner).",
   "Oxidationsmittel wird selbst reduziert, Reduktionsmittel selbst oxidiert.",
   "Spannungsreihe: Metalle mit negativeren E°-Werten sind stärkere Reduktionsmittel.",
   "Zellspannung E°(Zelle) = E°(Kathode) − E°(Anode).",
   "Nernst-Gleichung beschreibt Konzentrationsabhängigkeit des Potentials."
 ],
 formulas: [
   "E°(Zelle) = E°(Kathode) − E°(Anode)",
   "Nernst (vereinfacht, 25 °C): E = E° − (0,059 V / z) · log(Q)"
 ],
 visual: `
   <div style="font-size:11px;margin-bottom:4px;">Beispiel: Daniell-Element (Zn/Cu-Zelle)</div>
   <pre style="font-size:10px;line-height:1.3;">
Anode (Oxidation):   Zn → Zn²⁺ + 2 e⁻     (E° ≈ −0,76 V)
Kathode (Reduktion): Cu²⁺ + 2 e⁻ → Cu     (E° ≈ +0,34 V)

Zellreaktion:        Zn + Cu²⁺ → Zn²⁺ + Cu

E°(Zelle) = E°(Kathode) − E°(Anode)
       = (+0,34 V) − (−0,76 V)
       = +1,10 V
   </pre>
 `,
 detailBlocks: [
   {
     title: "Oxidation, Reduktion & Oxidationszahlen",
     content: `
       <ul style="padding-left:18px;margin:0;">
         <li><b>Oxidation:</b> Abgabe von Elektronen (e⁻). Oxidationszahl wird <b>höher</b>.</li>
         <li><b>Reduktion:</b> Aufnahme von Elektronen. Oxidationszahl wird <b>niedriger</b>.</li>
         <li><b>Oxidationsmittel:</b> Stoff, der andere oxidiert (nimmt Elektronen auf) → wird selbst <b>reduziert</b>.</li>
         <li><b>Reduktionsmittel:</b> Stoff, der andere reduziert (gibt Elektronen ab) → wird selbst <b>oxidiert</b>.</li>
         <li>Oxidationszahlen helfen, Elektronenzahl bei Redoxreaktionen nachzuvollziehen (Klausurklassiker).</li>
       </ul>
     `
   },
   {
     title: "Elektrochemische Spannungsreihe (Prinzip)",
     content: `
       <ul style="padding-left:18px;margin:0;">
         <li>Liste von Halbzellen mit ihren <b>Standardelektrodenpotenzialen E°</b> (in V gegen Standard-Wasserstoffelektrode).</li>
         <li>Je <b>negativer</b> E°, desto leichter gibt die Spezies Elektronen ab → gutes Reduktionsmittel.</li>
         <li>Je <b>positiver</b> E°, desto leichter nimmt die Spezies Elektronen auf → gutes Oxidationsmittel.</li>
         <li><b>Regel:</b> Halbzelle mit größerem E° wirkt als <b>Kathode</b>, die mit kleinerem E° als <b>Anode</b>.</li>
       </ul>
     `
   },
   {
     title: "Galvanische Zelle (am Beispiel Zn/Cu)",
     content: `
       <ol style="padding-left:18px;margin:0;">
         <li><b>Anode:</b> Zn-Elektrode in Zn²⁺-Lösung, hier läuft die Oxidation: Zn → Zn²⁺ + 2 e⁻.</li>
         <li><b>Kathode:</b> Cu-Elektrode in Cu²⁺-Lösung, hier läuft die Reduktion: Cu²⁺ + 2 e⁻ → Cu.</li>
         <li>Elektronen fließen über den äußeren Leiter von der Anode zur Kathode.</li>
         <li>Die <b>Salzbrücke</b> sorgt für Ladungsausgleich (Ionentransport), damit der Strom nicht abreißt.</li>
         <li>Die gemessene Spannung entspricht E(Zelle).</li>
       </ol>
     `
   },
   {
     title: "Nernst-Gleichung (auf Klausurniveau)",
     content: `
       <div style="font-size:12px;margin-bottom:4px;">
         Die Nernst-Gleichung beschreibt, wie sich das Elektrodenpotential mit der Konzentration der beteiligten Ionen ändert.
       </div>
       <div style="padding-left:18px;font-size:12px;">
         <b>Allgemein (25 °C):</b><br/>
         E = E° − (0,059 V / z) · log(Q)
       </div>
       <ul style="padding-left:18px;margin-top:4px;">
         <li>E: aktuelles Elektrodenpotential.</li>
         <li>E°: Standardelektrodenpotential (bei 1 mol/L).</li>
         <li>z: Zahl der übertragenen Elektronen.</li>
         <li>Q: Reaktionsquotient (Verhältnis Produkte/Edukte).</li>
       </ul>
       <div style="font-size:11px;margin-top:6px;">
         In vielen Klausuren reicht es zu wissen, dass höhere Produktkonzentration das Potential verschiebt
         und dass aus Konzentrationsunterschieden eine messbare Spannung entsteht.
       </div>
     `
   },
   {
     title: "Typische Klausuraufgaben & Fallen",
        content: `
          <ul style="padding-left:18px;margin:0;">
            <li>Halbreaktionen identifizieren (was wird oxidiert, was reduziert?).</li>
            <li>E°(Zelle) berechnen aus Tabellenwerten → Kathode minus Anode.</li>
            <li>Vorhersagen, ob eine Redoxreaktion freiwillig abläuft (E°(Zelle) > 0 ⇒ tendenziell freiwillig).</li>
            <li><b>Falle 1:</b> Anode/Kathode verwechseln (Merksatz: „Anode = Oxidation“).</li>
            <li><b>Falle 2:</b> Falsche Vorzeichen bei Potentialen (E° nicht einfach addieren, sondern Kathode − Anode).</li>
            <li><b>Falle 3:</b> z in der Nernst-Gleichung vergessen.</li>
          </ul>
        `
      }
    ]            // schließt detailBlocks
  },              // schließt Topic "redox"


{
  id: "orbital-grundlagen",
  title: "Was ist ein Orbital?",
  tags: ["Orbitale", "Grundlagen", "Quantenzahlen"],
  goals: [
    "Verstehen, was mit 'Orbital' in der Chemie gemeint ist.",
    "Den Unterschied zwischen Bohr-Modell (Bahnen) und Orbitalmodell (Wolken) erklären können.",
    "Die Rolle der wichtigsten Quantenzahlen (n, l, m_l, m_s) grob einordnen.",
    "Begreifen, warum Orbitale für Bindungen und Elektronenkonfigurationen so wichtig sind."
  ],
  summary:
    "Ein Orbital ist kein feste Kreisbahn wie im Bohr-Modell, sondern ein quantenmechanisch beschriebener Raumbereich um den Atomkern, in dem sich ein Elektron mit hoher Wahrscheinlichkeit aufhält. Jedes Orbital gehört zu einem bestimmten Energieniveau und hat eine typische räumliche Form. Es kann maximal zwei Elektronen mit entgegengesetztem Spin aufnehmen. Orbitale sind die Grundlage dafür, wie Elektronen in Atomen verteilt sind und wie chemische Bindungen entstehen.",

  keyPoints: [
    "Ein Orbital beschreibt einen Aufenthaltswahrscheinlichkeitsbereich eines Elektrons mit bestimmter Energie.",
    "Im Bohr-Modell kreisen Elektronen auf festen Bahnen; im Orbitalmodell denkt man in Elektronenwolken mit Wahrscheinlichkeiten.",
    "Jedes Orbital wird durch Quantenzahlen beschrieben: n (Hauptquantenzahl), l (Form), m_l (Orientierung) und m_s (Spin).",
    "In jedes Orbital passen maximal zwei Elektronen mit entgegengesetztem Spin (Pauli-Prinzip).",
    "Orbitale sind die Basis für Elektronenkonfigurationen, Periodensystem-Aufbau und chemische Bindungen."
  ],

  formulas: [
    "Hauptquantenzahl n = 1, 2, 3, ... (Schale / grobe Energie)",
    "Nebenquantenzahl l = 0 (s), 1 (p), 2 (d), 3 (f) (Form des Orbitals)",
    "m_l = -l, ..., 0, ..., +l (Orientierung im Raum)",
    "m_s = +1/2 oder -1/2 (Spin des Elektrons)"
  ],

  visual: `
    <div class="learn-visual">
      <div style="font-size:12px; opacity:0.8; margin-bottom:6px;">
        Bohr-Modell (links, Bahnen) vs. Orbitalmodell (rechts, Elektronenwolken).
      </div>

      <div style="display:flex; flex-wrap:wrap; gap:24px; justify-content:center; align-items:flex-start;">

        <!-- Bohr-Modell -->
        <div style="text-align:center;">
          <svg viewBox="0 0 140 140" width="130" height="130">
            <!-- Kern -->
            <circle cx="70" cy="70" r="6" fill="currentColor" />
            <!-- Bahnen -->
            <circle cx="70" cy="70" r="22" fill="none" stroke="currentColor" stroke-width="0.8" />
            <circle cx="70" cy="70" r="40" fill="none" stroke="currentColor" stroke-width="0.8" />
            <!-- Elektronen als Punkte auf Bahnen -->
            <circle cx="92" cy="70" r="2" fill="currentColor" />
            <circle cx="48" cy="70" r="2" fill="currentColor" />
            <circle cx="70" cy="30" r="2" fill="currentColor" />
            <circle cx="70" cy="110" r="2" fill="currentColor" />
          </svg>
          <div style="font-size:12px; margin-top:4px;">Bohr-Modell: Elektronen auf festen Bahnen</div>
        </div>

        <!-- Orbitalmodell -->
        <div style="text-align:center;">
          <svg viewBox="0 0 140 140" width="130" height="130">
            <!-- Kern -->
            <circle cx="70" cy="70" r="5" fill="currentColor" />
            <!-- „Wolke“ -->
            <radialGradient id="orbitalCloud" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-opacity="0.8" />
              <stop offset="100%" stop-opacity="0" />
            </radialGradient>
            <circle cx="70" cy="70" r="40" fill="none" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" />
            <circle cx="70" cy="70" r="26" fill="none" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 3" />
          </svg>
          <div style="font-size:12px; margin-top:4px;">Orbitalmodell: Aufenthaltswahrscheinlichkeitswolke</div>
        </div>

      </div>

      <div style="font-size:11px; opacity:0.7; margin-top:6px;">
        Wichtig ist der Denkwechsel: weg von festen Bahnen, hin zu Wahrscheinlichkeitsverteilungen (Elektronenwolken).
      </div>
    </div>
  `,

  detailBlocks: [
    {
      title: "Vom Bohr-Modell zum Orbitalmodell",
      content:
        "Das Bohr-Modell stellt Elektronen auf festen Kreisbahnen um den Kern dar. Dieses Bild ist anschaulich, aber physikalisch nicht korrekt. In der Quantenmechanik werden Elektronen durch Wellenfunktionen beschrieben, deren Betragsquadrat eine Aufenthaltswahrscheinlichkeit ergibt. Die Bereiche mit hoher Aufenthaltswahrscheinlichkeit haben bestimmte Formen und Energieniveaus – das sind die Orbitale."
    },
    {
      title: "Was ein Orbital beschreibt",
      content:
        "Ein einzelnes Orbital fasst mehrere Eigenschaften zusammen: Es gehört zu einer bestimmten Schale (Hauptquantenzahl n), es hat eine bestimmte Form (Nebenquantenzahl l), eine räumliche Orientierung (m_l) und kann maximal zwei Elektronen mit entgegengesetztem Spin aufnehmen (m_s). Man kann sich ein Orbital als Elektronenwolke vorstellen, in der es wahrscheinlich ist, das Elektron anzutreffen."
    },
    {
      title: "Warum Orbitale für Chemie so wichtig sind",
      content:
        "Die Verteilung der Elektronen auf die verschiedenen Orbitale bestimmt, wie reaktiv ein Atom ist, welche Ladung es bevorzugt annimmt und wie es Bindungen eingeht. Valenzelektronen sitzen in den äußeren Orbitalen und sind direkt an Bindungen beteiligt. Ohne das Orbitalbild könnte man viele Phänomene wie Bindungsstärke, Molekülgeometrie oder den Aufbau des Periodensystems nur auswendig lernen, statt sie zu verstehen."
    }
  ]
},


{
  id: "orbitale",
  title: "Atomorbitale: s- und p-Orbitale",
  tags: ["Orbitale", "s-Orbital", "p-Orbitale"],
  goals: [
    "Verstehen, was ein Atomorbital ist und wie es sich vom Bohr-Modell unterscheidet.",
    "s-Orbitale und p-Orbitale korrekt skizzieren und beschriften können.",
    "Die wichtigsten Quantenzahlen (n, l, mₗ, mₛ) im Zusammenhang mit s- und p-Orbitalen einordnen.",
    "Wissen, ab welcher Schale p-Orbitale auftreten und wie viele es pro Schale gibt."
  ],
  summary:
    "Orbitale beschreiben Aufenthaltswahrscheinlichkeiten von Elektronen im Atom. s-Orbitale sind kugelförmig und besitzen Rotationssymmetrie, p-Orbitale sind hantelförmig und liegen als px-, py- und pz-Orbital entlang der Raumachsen vor. Jedes Orbital kann maximal zwei Elektronen mit entgegengesetztem Spin aufnehmen. In der Klausur ist wichtig, die Formen von s- und p-Orbitalen sauber skizzieren und richtig beschriften zu können.",

  keyPoints: [
    "Ein Orbital ist ein räumlicher Aufenthaltsbereich eines Elektrons mit bestimmter Energie (kein Planetenbahn-Modell).",
    "Die Form der Orbitale wird über die Nebenquantenzahl l festgelegt: l = 0 → s (kugelförmig), l = 1 → p (hantelförmig).",
    "s-Orbitale: kugelförmig, pro Schale gibt es genau ein s-Orbital (1s, 2s, 3s, ...).",
    "p-Orbitale: hantelförmig mit zwei Lappen; es gibt immer drei gleichwertige p-Orbitale (px, py, pz) ab n = 2.",
    "Jedes Orbital kann maximal 2 Elektronen mit entgegengesetztem Spin aufnehmen (Pauli-Prinzip).",
    "Typische Klausuraufgabe: Skizze eines s-Orbitals und eines p-Orbitals mit Achsenbeschriftung und Kernpunkt."
  ],

  formulas: [
    "Hauptquantenzahl: n = 1, 2, 3, ...",
    "Nebenquantenzahl: l = 0 (s), 1 (p), 2 (d), 3 (f)",
    "m_l = -l, ..., 0, ..., +l",
    "m_s = +1/2 oder -1/2"
  ],

  visual: `
    <div class="learn-visual">
      <div style="font-size:12px; opacity:0.8; margin-bottom:6px;">
        Vereinfachte Skizzen für ein s-Orbital und p-Orbitale (px, py, pz).
      </div>
      <div style="display:flex; gap:24px; flex-wrap:wrap; justify-content:center; align-items:flex-start;">

        <!-- s-Orbital -->
        <div style="text-align:center;">
          <svg viewBox="0 0 120 120" width="110" height="110">
            <circle cx="60" cy="60" r="3" fill="currentColor" />
            <circle cx="60" cy="60" r="35" fill="none" stroke="currentColor" stroke-width="1.5" />
          </svg>
          <div style="font-size:12px; margin-top:4px;">s-Orbital (kugelförmig)</div>
        </div>

        <!-- p<sub>x</sub>-Orbital -->
        <div style="text-align:center;">
          <svg viewBox="0 0 120 120" width="110" height="110">
            <line x1="10" y1="60" x2="110" y2="60" stroke="currentColor" stroke-width="0.8" />
            <text x="108" y="52" style="font-size:10px; fill:currentColor;">x</text>
            <ellipse cx="40" cy="60" rx="18" ry="35" fill="none" stroke="currentColor" stroke-width="1.5" />
            <ellipse cx="80" cy="60" rx="18" ry="35" fill="none" stroke="currentColor" stroke-width="1.5" />
            <circle cx="60" cy="60" r="3" fill="currentColor" />
          </svg>
          <div style="font-size:12px; margin-top:4px;">p<sub>x</sub>-Orbital (hantelförmig)</div>
        </div>

        <!-- p<sub>y</sub>-Orbital -->
        <div style="text-align:center;">
          <svg viewBox="0 0 120 120" width="110" height="110">
            <line x1="60" y1="10" x2="60" y2="110" stroke="currentColor" stroke-width="0.8" />
            <text x="66" y="16" style="font-size:10px; fill:currentColor;">y</text>
            <ellipse cx="60" cy="40" rx="18" ry="35" fill="none" stroke="currentColor" stroke-width="1.5" />
            <ellipse cx="60" cy="80" rx="18" ry="35" fill="none" stroke="currentColor" stroke-width="1.5" />
            <circle cx="60" cy="60" r="3" fill="currentColor" />
          </svg>
          <div style="font-size:12px; margin-top:4px;">p<sub>y</sub>-Orbital</div>
        </div>

        <!-- p<sub>z</sub>-Orbital (schematisch) -->
        <div style="text-align:center;">
          <svg viewBox="0 0 120 120" width="110" height="110">
            <circle cx="60" cy="60" r="3" fill="currentColor" />
            <ellipse cx="60" cy="60" rx="30" ry="12" fill="none" stroke="currentColor" stroke-width="1.5" />
            <ellipse cx="60" cy="60" rx="8" ry="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 3" />
            <text x="82" y="50" style="font-size:10px; fill:currentColor;">z</text>
          </svg>
          <div style="font-size:12px; margin-top:4px;">p<sub>z</sub>-Orbital (senkrecht zur Zeichenebene)</div>
        </div>

      </div>
      <div style="font-size:11px; opacity:0.7; margin-top:6px;">
        In der Klausur reichen oft stark vereinfachte Skizzen, wichtig sind: Kugelform für s, zwei Lappen für p und korrekte Beschriftung (Achsen, Kern).
      </div>
    </div>
  `,

  detailBlocks: [
    {
      title: "Intuition: Warum sprechen wir von Orbitalen?",
      content:
        "Das Bohr-Modell beschreibt Elektronen auf festen Kreisbahnen. Für einfache Wasserstoff-ähnliche Systeme funktioniert das näherungsweise, ist aber physikalisch nicht korrekt. In der Quantenmechanik werden Elektronen durch Wellenfunktionen beschrieben, deren Betragsquadrat eine Aufenthaltswahrscheinlichkeit ergibt. Die daraus entstehenden 'Elektronenwolken' mit bestimmter Energie und Form nennen wir Orbitale."
    },
    {
      title: "Die Rolle der Quantenzahlen",
      content:
        "Die Hauptquantenzahl n gibt Energie und Größe der Schale an. Die Nebenquantenzahl l legt die Form des Orbitals fest (s, p, d, f). Die magnetische Quantenzahl m_l beschreibt die Orientierung im Raum, bei p-Orbitalen führt das zu px, py und pz. Die Spinquantenzahl m_s unterscheidet zwei Elektronen im selben Orbital. Für Klausuraufgaben zu s- und p-Orbitalen reicht es meist, n und l richtig zuzuordnen und zu wissen, ab welcher Schale p-Orbitale auftreten."
    },
    {
      title: "Skizzen-Tipps für die Klausur",
      content:
        "s-Orbitale als Kugel: einen Kreis um den Kern zeichnen, Beschriftung z. B. '2s'. p-Orbitale als Hanteln: zwei Lappen, Kernpunkt in der Mitte, dazu eine Achse und Beschriftung (px, py). Es ist besser, eine einfache, saubere Skizze mit klarer Beschriftung zu haben, als ein überladenes Bild mit vielen Details. Achte darauf, dass bei einem p-Orbital immer beide Lappen eingezeichnet sind."
    }

  ]
},


    {
      id: "mo-schema-elektronenkonfig",
      title: "MO-Schema & Elektronenkonfiguration",
      tags: ["MO-Schema", "Molekülorbitale", "Elektronenkonfiguration"],
      goals: [
        "Elektronenkonfiguration von Atomen nach dem Aufbauprinzip, Pauli-Prinzip und Hundscher Regel aufschreiben können.",
        "Einfache MO-Schemata zeichnen und bindende sowie antibindende Molekülorbitale unterscheiden können.",
        "Die Bindungsordnung aus einem MO-Schema berechnen und interpretieren können.",
        "Aus dem MO-Schema ableiten können, ob ein Molekül paramagnetisch oder diamagnetisch ist."
      ],
      summary:
        "Die Elektronenkonfiguration beschreibt die Verteilung der Elektronen auf Atomorbitalen. In der Molekülorbitaltheorie überlappen Atomorbitale zu Molekülorbitalen, die als bindende oder antibindende Orbitale auftreten. Durch Eintragen der Elektronen in ein MO-Schema lassen sich Bindungsordnung, Stabilität und Magnetismus eines Moleküls bestimmen.",

      keyPoints: [
        "Elektronenkonfiguration wird nach dem Aufbauprinzip von energetisch niedrigen zu höheren Orbitalen aufgebaut (z. B. 1s, 2s, 2p, 3s, 3p, 4s, 3d...).",
        "Pauli-Prinzip: Maximal 2 Elektronen mit entgegengesetztem Spin pro Orbital.",
        "Hundsche Regel: Entartete Orbitale (z. B. die 3 p-Orbitale) werden zunächst einzeln mit parallelem Spin besetzt, bevor Elektronen gepaart werden.",
        "Aus zwei Atomorbitalen entstehen immer zwei Molekülorbitale: ein bindendes (energetisch tiefer) und ein antibindendes (energetisch höher, mit * gekennzeichnet).",
        "Bindungsordnung BO = (n_bindend − n_antibindend) / 2. BO = 0 bedeutet keine stabile Bindung.",
        "Paramagnetische Moleküle besitzen ungepaarte Elektronen im MO-Schema, diamagnetische nur gepaarte Elektronen."
      ],

      formulas: [
        "Beispiel: O (Z = 8): 1s² 2s² 2p⁴",
        "Bindungsordnung: BO = (n_bindend − n_antibindend) / 2"
      ],

           visual: `
        <div class="learn-visual">
          <div style="font-size:12px; opacity:0.8; margin-bottom:6px;">
            MO-Schemata wie in der Klausur: Energieniveauschemata (1a/1b) und fertiges F₂-Molekül mit eingetragenen Elektronen.
          </div>

          <div style="display:flex; flex-wrap:wrap; gap:24px; justify-content:center;">
            <div style="text-align:center;">
              <img src="Images/mo-1a-1b.png" style="max-width:260px; height:auto; border-radius:6px;">
              <div style="font-size:12px; margin-top:4px;">
                Vergleich der beiden Schemen:<br>
                <b>Abbildung 1a</b> (links): O₂, F₂, Ne₂<br>
                <b>Abbildung 1b</b> (rechts): B₂, C₂, N₂
              </div>
            </div>

            <div style="text-align:center;">
              <img src="Images/mo-f2-full.png" style="max-width:260px; height:auto; border-radius:6px;">
              <div style="font-size:12px; margin-top:4px;">
                Fertiges MO-Schema für <b>F₂</b> wie in der Musterlösung (alle 14 Valenzelektronen eingetragen).
              </div>
            </div>
          </div>

          <div style="font-size:11px; opacity:0.7; margin-top:6px;">
            Tipp: Du kannst hier später eigene Skizzen für O₂, C₂ usw. einfügen, damit es genau zu deinen Klausuraufgaben passt.
          </div>
        </div>
      `,


      detailBlocks: [
        {
          title: "Elektronenkonfiguration kurz & klausurrelevant",
          content:
            "Die Elektronenkonfiguration beschreibt, wie die Elektronen eines Atoms auf Orbitale verteilt sind. Sie wird nach dem Aufbauprinzip von niedriger zu höherer Energie aufgebaut. Das Pauli-Prinzip begrenzt die Besetzung jedes Orbitals auf zwei Elektronen mit entgegengesetztem Spin, die Hundsche Regel sorgt zuerst für möglichst viele ungepaarte Elektronen in entarteten Orbitalen. Für die Klausur solltest du Elektronenkonfigurationen sicher schreiben und einfache Kästchenschemata zeichnen können."
        },
        {
          title: "Idee der Molekülorbitale",
          content:
            "Wenn sich zwei Atome zu einem Molekül verbinden, überlappen ihre Atomorbitale und bilden Molekülorbitale. Aus zwei Atomorbitale entstehen ein bindendes und ein antibindendes MO. Elektronen im bindenden MO stabilisieren das Molekül, Elektronen im antibindenden MO schwächen die Bindung. Das Energieniveau der bindenden MOs liegt unterhalb, das der antibindenden oberhalb der ursprünglichen Atomorbitale. Im MO-Schema werden die Elektronen wieder von unten nach oben in die MOs eingetragen."
        },
        {
          title: "Bindungsordnung & Magnetismus verstehen",
          content:
            "Die Bindungsordnung BO = (n_bindend − n_antibindend) / 2 gibt an, wie stark die Bindung zwischen zwei Atomen ist. Eine höhere Bindungsordnung bedeutet in der Regel stärkere und kürzere Bindungen. Zusätzlich zeigt dir das MO-Schema, ob ein Molekül paramagnetisch (ungepaarte Elektronen) oder diamagnetisch (alle Elektronen gepaart) ist. In vielen Klausuraufgaben reicht es, ein vereinfachtes MO-Schema zu zeichnen, die Elektronen zu verteilen und dann die Bindungsordnung zu berechnen."
        },
        {
          title: "Typische Klausuraufgaben & wie du sie beantwortest",
          content: `
            <div style="padding-left:18px; font-size:13px; line-height:1.5;">
              <ol style="margin-top:0;">
                <li style="margin-bottom:10px;">
                  <b>Elektronenkonfiguration angeben</b><br>
                  <b>Schritt 1:</b> Ordnungszahl Z im Periodensystem ablesen (Anzahl der Elektronen im neutralen Atom).<br>
                  <b>Schritt 2:</b> Orbitale in der richtigen Reihenfolge auffüllen (1s, 2s, 2p, 3s, 3p, 4s, 3d, ...), max. 2 Elektronen pro Orbital.<br>
                  <b>Schritt 3:</b> Elektronenkonfiguration in der Form 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>4</sup> aufschreiben.<br>
                  <i>Beispiel:</i> O (Z = 8) → 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>4</sup>.
                </li>

                <li style="margin-bottom:10px;">
                  <b>MO-Schema zeichnen & Bindungsordnung bestimmen</b><br>
                  <b>Schritt 1:</b> Gesamtzahl der Elektronen im Molekül bestimmen (z. B. H₂ → 2 e⁻, He₂ → 4 e⁻).<br>
                  <b>Schritt 2:</b> Vereinfachtes MO-Schema zeichnen: bindendes σ(1s) unten, antibindendes σ*(1s) oben.<br>
                  <b>Schritt 3:</b> Elektronen von unten nach oben in die MOs eintragen, max. 2 e⁻ pro MO.<br>
                  <b>Schritt 4:</b> Bindungsordnung berechnen: BO = (n<sub>bindend</sub> − n<sub>antibindend</sub>) / 2.<br>
                  <i>Beispiel H₂:</i> 2 e⁻ in σ(1s), 0 e⁻ in σ*(1s) → BO = (2 − 0) / 2 = 1 (stabile Einfachbindung).<br>
                  <i>Beispiel He₂:</i> 2 e⁻ in σ(1s), 2 e⁻ in σ*(1s) → BO = (2 − 2) / 2 = 0 (keine stabile Bindung).
                </li>

                <li style="margin-bottom:10px;">
                  <b>Paramagnetisch oder diamagnetisch?</b><br>
                  <b>Schritt 1:</b> Im MO-Schema nach ungepaarten Elektronen suchen.<br>
                  <b>Schritt 2:</b> Mindestens ein ungepaartes Elektron → Molekül ist <b>paramagnetisch</b>.<br>
                  <b>Schritt 3:</b> Alle Elektronen gepaart (↑↓) → Molekül ist <b>diamagnetisch</b>.
                </li>

                <li style="margin-bottom:10px;">
                  <b>Bindungsstärke & Bindungslänge vergleichen</b><br>
                  <b>Schritt 1:</b> Für jedes Molekül die Bindungsordnung bestimmen.<br>
                  <b>Schritt 2:</b> Merksatz: Höhere BO → stärkere & kürzere Bindung; niedrigere BO → schwächere & längere Bindung.<br>
                  <i>Beispiel:</i> BO(A) = 2, BO(B) = 1 → Bindung in A ist stärker und kürzer als in B.
                </li>
              </ol>
            </div>
          `
        }
      ]
    },

    {
      id: "strahlung-energie",
      title: "Strahlung & Energieeinheiten (Joule & eV)",
      tags: ["Strahlung", "Photonenenergie", "eV", "Joule"],
      goals: [
        "Verstehen, was ein Photon ist und wie elektromagnetische Strahlung beschrieben wird.",
        "Die Zusammenhänge zwischen Wellenlänge λ, Frequenz ν und Lichtgeschwindigkeit c anwenden.",
        "Die Energie eines Photons mit E = h·ν bzw. E = h·c/λ berechnen können.",
        "Das Elektronenvolt (eV) definieren und sicher zwischen Joule und eV umrechnen.",
        "Typische Klausuraufgaben zu Photonenergie, eV–Joule-Umrechnung, Spannung und Photonenzahl systematisch lösen können."
      ],
      summary: `
        Elektromagnetische Strahlung (Licht, UV, Röntgenstrahlung ...) kann sowohl als Welle (mit Wellenlänge λ und Frequenz ν) als auch als Teilchenstrom aus Photonen beschrieben werden.
        Jedes Photon trägt eine bestimmte Energie, die nur von der Wellenlänge bzw. Frequenz der Strahlung abhängt. Über die Formeln E = h·ν und E = h·c/λ lassen sich aus λ oder ν die
        Energie einzelner Photonen berechnen. In der Atomphysik ist neben der SI-Einheit Joule besonders das Elektronenvolt (eV) wichtig: 1 eV ist die Energie, die ein Elektron beim Durchlaufen
        einer Spannung von 1 V gewinnt. Für die Klausur ist vor allem wichtig, Wellenlängen korrekt in Meter umzurechnen, mit den Naturkonstanten h und c sauber zu rechnen und sicher zwischen
        Joule und eV hin- und herzuwandeln.
      `,
      keyPoints: [
        "Elektromagnetische Strahlung kann als Welle (λ, ν) und als Strom von Photonen betrachtet werden (Welle-Teilchen-Dualismus).",
        "Frequenz und Wellenlänge hängen zusammen über: ν = c / λ (c ≈ 3,00 · 10^8 m/s).",
        "Photonenenergie: E = h·ν = h·c/λ (h ≈ 6,626 · 10^-34 J·s). Je kleiner λ, desto größer E.",
        "Elektronenvolt: 1 eV ist die Energie, die ein Elektron beim Durchlaufen von 1 V gewinnt → 1 eV = 1,602 · 10^-19 J.",
        "Umrechnung: Joule → eV: E_eV = E_J / (1,602 · 10^-19); eV → Joule: E_J = E_eV · 1,602 · 10^-19.",
        "Elektron an Spannung U: Energie = U eV (für ein Elektron) bzw. U · e Joule.",
        "Typische Klausuraufgaben: Photonenergie aus λ, Wellenlänge aus gegebener Energie, Energie eines Elektrons im elektrischen Feld, Anzahl Photonen aus einer Gesamtenergie."
      ],
      formulas: [
        "ν = c / λ",
        "E = h · ν",
        "E = h · c / λ",
        "1 eV = 1,602 · 10^-19 J",
        "E_eV = E_J / (1,602 · 10^-19)",
        "E_J = E_eV · 1,602 · 10^-19",
        "E(Elektron) = e · U ≙ U eV"
      ],
      visual: `
        <div class="learn-visual">
          <div style="font-size:12px; opacity:0.8; margin-bottom:6px;">
            Übersicht über die wichtigsten Größen der Photonenergie:
          </div>
          <pre style="font-size:11px; line-height:1.4; background:rgba(0,0,0,0.15); padding:8px; border-radius:6px;">
Wellenlänge:        λ  [m]        (z. B. 500 nm = 500 · 10^-9 m)
Frequenz:          ν  [Hz]       (ν = c / λ)
Lichtgeschwindigkeit: c ≈ 3,00 · 10^8 m/s
Planck-Konstante:  h ≈ 6,626 · 10^-34 J·s

Photonenergie:     E = h·ν = h·c/λ

Elektronenvolt:    1 eV = 1,602 · 10^-19 J
Umrechnung:
  eV → Joule:      E_J = E_eV · 1,602 · 10^-19
  Joule → eV:      E_eV = E_J / (1,602 · 10^-19)

Elektron an U Volt:
  E = U eV  (für ein Elektron)
          </pre>
          <div style="font-size:11px; opacity:0.8; margin-top:4px;">
            Merkhilfe: <b>kleine Wellenlänge → große Frequenz → große Photonenergie.</b>
          </div>
        </div>
      `,
      detailBlocks: [
        {
          title: "Elektromagnetische Strahlung & Photon-Begriff",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p>Elektromagnetische Strahlung (z. B. Radiowellen, sichtbares Licht, UV, Röntgenstrahlung) kann auf zwei Arten beschrieben werden:</p>
              <ul>
                <li>Als <b>Welle</b>: charakterisiert durch die <b>Wellenlänge</b> λ (in m) und die <b>Frequenz</b> ν (in Hz).</li>
                <li>Als <b>Teilchenstrom</b> aus <b>Photonen</b>: jedes Photon trägt ein bestimmtes Energiepaket.</li>
              </ul>
              <p>Wellenlänge und Frequenz stehen über die Lichtgeschwindigkeit c in Beziehung:</p>
              <p style="text-align:center; margin:6px 0;"><b>ν = c / λ</b></p>
              <p>Für sichtbares Licht liegen die Wellenlängen grob im Bereich von 400 nm (violett) bis 700 nm (rot). Kürzere Wellenlängen (UV, Röntgen) bedeuten höherenergetische Photonen.</p>
            </div>
          `
        },
        {
          title: "Wichtige Größen & Naturkonstanten",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p>Für Berechnungen rund um Photonenergie und eV brauchst du nur wenige Konstanten:</p>
              <ul>
                <li><b>Lichtgeschwindigkeit</b>: c ≈ 3,00 · 10<sup>8</sup> m/s.</li>
                <li><b>Planck-Konstante</b>: h ≈ 6,626 · 10<sup>-34</sup> J·s.</li>
                <li><b>Elementarladung</b> (Ladung eines Elektrons): e = 1,602 · 10<sup>-19</sup> C.</li>
              </ul>
              <p>Einheiten & Umrechnungen, die du dir merken solltest:</p>
              <ul>
                <li>1 nm = 10<sup>-9</sup> m → Beispiel: 500 nm = 500 · 10<sup>-9</sup> m = 5,00 · 10<sup>-7</sup> m.</li>
                <li>Frequenz in Hz bedeutet „Schwingungen pro Sekunde“, 1 Hz = 1/s.</li>
                <li>Joule (J) ist die SI-Einheit der Energie, eV ist eine praktische „Atomphysik-Einheit“.</li>
              </ul>
            </div>
          `
        },
        {
          title: "Photonenergie: E = h·ν = h·c/λ",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p>Die Energie eines einzelnen Photons ist direkt proportional zur Frequenz und umgekehrt proportional zur Wellenlänge:</p>
              <p style="text-align:center; margin:6px 0;">
                <b>E = h · ν = h · c / λ</b>
              </p>
              <ul>
                <li><b>E</b> in Joule (J)</li>
                <li><b>h</b> Planck-Konstante (J·s)</li>
                <li><b>ν</b> Frequenz (Hz)</li>
                <li><b>λ</b> Wellenlänge (m)</li>
                <li><b>c</b> Lichtgeschwindigkeit (m/s)</li>
              </ul>
              <p>Ablaufschema für Aufgaben mit gegebener Wellenlänge λ:</p>
              <ol>
                <li>λ in Meter umrechnen (nm → m).</li>
                <li>Mit <b>E = h·c/λ</b> die Photonenenergie in Joule berechnen.</li>
                <li>Falls gefragt: Joule → eV umrechnen.</li>
              </ol>
              <p>Typische Größenordnung: sichtbares Licht hat Photonenenergien von ca. 2 bis 3 eV (~10<sup>-19</sup> J).</p>
            </div>
          `
        },
        {
          title: "Elektronenvolt (eV) & Umrechnung zu Joule",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p><b>Definition:</b> 1 Elektronenvolt (1 eV) ist die Energie, die ein Elektron gewinnt, wenn es eine Spannung von 1 Volt durchläuft.</p>
              <p>Mathematisch: E = e · U, also für U = 1 V:</p>
              <p style="text-align:center; margin:6px 0;">
                <b>1 eV = 1,602 · 10<sup>-19</sup> J</b>
              </p>
              <p>Damit erhältst du die Umrechnungsformeln:</p>
              <ul>
                <li><b>eV → Joule</b>: E<sub>J</sub> = E<sub>eV</sub> · 1,602 · 10<sup>-19</sup> J/eV</li>
                <li><b>Joule → eV</b>: E<sub>eV</sub> = E<sub>J</sub> / (1,602 · 10<sup>-19</sup> J/eV)</li>
              </ul>
              <p>Beispiele:</p>
              <ul>
                <li>2,0 eV → E = 2,0 · 1,602 · 10<sup>-19</sup> J ≈ 3,20 · 10<sup>-19</sup> J.</li>
                <li>4,0 · 10<sup>-19</sup> J → E = (4,0 · 10<sup>-19</sup> J) / (1,602 · 10<sup>-19</sup> J/eV) ≈ 2,5 eV.</li>
              </ul>
              <p>Merke: eV ist für atomare Energien sehr handlich, Joule ist die offizielle SI-Einheit – die Klausur will oft beides.</p>
            </div>
          `
        },
        {
          title: "Elektron im elektrischen Feld: Energie aus Spannung",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p>Für ein Elektron, das eine Spannung U durchläuft, gilt:</p>
              <p style="text-align:center; margin:6px 0;">
                <b>E = e · U</b>
              </p>
              <p>Da 1 eV = e · 1 V, folgt für ein Elektron ganz einfach:</p>
              <ul>
                <li>Bei 1 V → 1 eV</li>
                <li>Bei 10 V → 10 eV</li>
                <li>Bei 120 V → 120 eV</li>
              </ul>
              <p>In Joule gerechnet:</p>
              <p>E<sub>J</sub> = U · 1,602 · 10<sup>-19</sup> J</p>
              <p><b>Beispiel:</b> U = 120 V</p>
              <ul>
                <li>E = 120 eV</li>
                <li>E<sub>J</sub> = 120 · 1,602 · 10<sup>-19</sup> ≈ 1,92 · 10<sup>-17</sup> J</li>
              </ul>
            </div>
          `
        },
        {
          title: "Typische Klausurwege – Rezepte",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p><b>1) Photonenergie aus gegebener Wellenlänge λ</b></p>
              <ol>
                <li>λ in Meter umrechnen (nm → m).</li>
                <li>Mit E = h · c / λ die Energie in Joule berechnen.</li>
                <li>Wenn eV verlangt sind: E<sub>eV</sub> = E<sub>J</sub> / (1,602 · 10<sup>-19</sup>).</li>
              </ol>

              <p><b>2) Wellenlänge aus gegebener Energie in eV</b></p>
              <ol>
                <li>E in Joule umrechnen: E<sub>J</sub> = E<sub>eV</sub> · 1,602 · 10<sup>-19</sup>.</li>
                <li>Aus E = h·c/λ nach λ umstellen: λ = h·c / E.</li>
                <li>Ergebnis in nm angeben (m → nm).</li>
              </ol>

              <p><b>3) Elektron an Spannung U</b></p>
              <ol>
                <li>Energie in eV: E = U eV.</li>
                <li>Falls Joule gefragt sind: E<sub>J</sub> = U · 1,602 · 10<sup>-19</sup> J.</li>
              </ol>

              <p><b>4) Anzahl Photonen bei gegebener Gesamtenergie</b></p>
              <ol>
                <li>Zuerst Energie eines Photons aus der Wellenlänge bestimmen (E<sub>Photon</sub> = h·c/λ).</li>
                <li>Dann: Anzahl N = E<sub>gesamt</sub> / E<sub>Photon</sub>.</li>
              </ol>
              <p>Wenn du diese vier „Rezepte“ beherrschst, kannst du praktisch jede Standardaufgabe aus diesem Themenblock bearbeiten.</p>
            </div>
          `
        },
        {
          title: "Klausurbeispiele Schritt für Schritt",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p><b>Beispiel 1: Photonenergie für λ = 550 nm (sichtbares Licht)</b></p>
              <p>Gegeben: λ = 550 nm.</p>
              <ol>
                <li>Umrechnung: 550 nm = 550 · 10<sup>-9</sup> m = 5,50 · 10<sup>-7</sup> m.</li>
                <li>Photonenergie: E ≈ h·c/λ ≈ 3,6 · 10<sup>-19</sup> J.</li>
                <li>In eV: E ≈ (3,6 · 10<sup>-19</sup> J) / (1,602 · 10<sup>-19</sup> J/eV) ≈ 2,3 eV.</li>
              </ol>

              <p><b>Beispiel 2: UV-Photon mit λ = 250 nm</b></p>
              <ol>
                <li>250 nm = 2,50 · 10<sup>-7</sup> m.</li>
                <li>E ≈ h·c/λ ≈ 8,0 · 10<sup>-19</sup> J.</li>
                <li>E in eV: ≈ 5,0 eV → deutlich energiereicher als sichtbares Licht.</li>
              </ol>

              <p><b>Beispiel 3: Energie gegeben (3,0 eV) – Wellenlänge gesucht</b></p>
              <ol>
                <li>E in Joule: E<sub>J</sub> = 3,0 eV · 1,602 · 10<sup>-19</sup> ≈ 4,81 · 10<sup>-19</sup> J.</li>
                <li>λ = h·c/E ≈ (6,626 · 10<sup>-34</sup> · 3,00 · 10<sup>8</sup>) / (4,81 · 10<sup>-19</sup>) ≈ 4,1 · 10<sup>-7</sup> m.</li>
                <li>In nm: λ ≈ 410 nm (violett/blau-violett).</li>
              </ol>

              <p><b>Beispiel 4: Elektron an U = 120 V</b></p>
              <ol>
                <li>Energie in eV: E = 120 eV.</li>
                <li>In Joule: E<sub>J</sub> = 120 · 1,602 · 10<sup>-19</sup> ≈ 1,92 · 10<sup>-17</sup> J.</li>
              </ol>

              <p><b>Beispiel 5: Anzahl Photonen in einem Laserpuls</b></p>
              <p>Gegeben: λ = 500 nm, Gesamtenergie E<sub>gesamt</sub> = 1,0 · 10<sup>-3</sup> J.</p>
              <ol>
                <li>Photonenergie bei 500 nm: E<sub>Photon</sub> ≈ 4,0 · 10<sup>-19</sup> J.</li>
                <li>Anzahl N = E<sub>gesamt</sub> / E<sub>Photon</sub> ≈ (1,0 · 10<sup>-3</sup>) / (4,0 · 10<sup>-19</sup>) ≈ 2,5 · 10<sup>15</sup> Photonen.</li>
              </ol>
              <p style="margin-top:6px;">
                Du musst die Rechenwege nicht auswendig lernen – wichtig ist, dass du die Größenordnungen kennst und sauber mit Zehnerpotenzen und der Umrechnung zwischen Joule und eV umgehen kannst.
              </p>
            </div>
          `
        }
      ]
    },
    {
      id: "stoechiometrie-ph-gehalt",
      title: "Stöchiometrie, pH & Gehaltsbestimmung",
      tags: ["Stöchiometrie", "pH", "Titration", "Gehaltsbestimmung"],
      goals: [
        "Die grundlegenden stöchiometrischen Größen (n, m, M, c, V) sicher anwenden können.",
        "Reaktionsgleichungen aufstellen, ausgleichen und Stoffmengenverhältnisse daraus ablesen können.",
        "Den pH starker Säuren und Basen (z. B. HCl, NaOH) aus Konzentrationen berechnen können.",
        "Die Logik von Titrationen und Gehaltsbestimmungen verstehen und auf Klausuraufgaben anwenden können.",
        "pH nach einer Neutralisationsreaktion mit Überschuss einer Komponente berechnen können."
      ],
      summary: `
        In diesem Thema verknüpfst du drei wichtige Bausteine der Allgemeinen Chemie: Stöchiometrie, pH-Berechnung und Gehaltsbestimmung.
        Stöchiometrie liefert dir das Handwerkszeug, um aus Massen und Volumina Stoffmengen zu berechnen und mit Reaktionsgleichungen zu arbeiten.
        Über den pH-Begriff kannst du die Stärke saurer bzw. basischer Lösungen quantitativ beschreiben – zumindest für starke Säuren und Basen mit relativ einfachen Formeln.
        Mit der Titrations- und Gehaltsbestimmung verbindest du beides: anhand der benötigten Menge einer Maßlösung kann der Gehalt einer unbekannten Probe berechnet werden.
        Genau dieser Themenmix ist typisch für Klausuraufgaben, bei denen du Schritt für Schritt von Reaktionsgleichung über Stoffmengen bis hin zu pH oder Massenanteil rechnen musst.
      `,
      keyPoints: [
        "Stoffmenge n, Masse m, molare Masse M und Konzentration c gehören zu den Grundgrößen der Stöchiometrie: n = m/M, n = c·V.",
        "Reaktionsgleichungen müssen ausgeglichen werden, bevor Stoffmengen aus dem stöchiometrischen Verhältnis berechnet werden.",
        "pH = −log10[H+] für starke Säuren; pOH = −log10[OH−] für starke Basen und pH + pOH = 14 bei 25 °C.",
        "Bei starken Säuren/Basen gilt näherungsweise: [H+] ≈ c(Säure) bzw. [OH−] ≈ c(Base), solange keine anderen Effekte dominieren.",
        "Titrationen nutzen eine Maßlösung bekannter Konzentration, um eine unbekannte Stoffmenge über das stöchiometrische Verhältnis zu bestimmen.",
        "Nach einer neutralisationsreaktion mit Überschuss kann der pH aus der übrig gebliebenen starken Säure oder Base berechnet werden."
      ],
      formulas: [
        "n = m / M",
        "n = c · V",
        "c = n / V",
        "pH = −log10 [H+]",
        "pOH = −log10 [OH−]",
        "pH + pOH = 14 (bei 25 °C)",
        "HCl + NaOH → NaCl + H2O",
        "H2SO4 + 2 NaOH → Na2SO4 + 2 H2O"
      ],
      visual: `
        <div class="learn-visual">
          <div style="font-size:12px; opacity:0.8; margin-bottom:6px;">
            Stöchiometrie, pH und Titration auf einen Blick:
          </div>
          <pre style="font-size:11px; line-height:1.4; background:rgba(0,0,0,0.15); padding:8px; border-radius:6px;">
Stoffmenge:           n [mol]     n = m / M  oder  n = c · V
Masse:                m [g]
Molmasse:             M [g/mol]
Konzentration:        c [mol/L]  (Mol pro Liter)
Volumen:              V [L]      (mL → L: durch 1000 teilen)

pH starker Säuren:    pH = −log10[H⁺]     (z.B. HCl)
pH starker Basen:     pOH = −log10[OH⁻], pH + pOH = 14 (25 °C)
                       [OH⁻] ≈ c(NaOH) bei starker Base

Neutralisation:
  HCl + NaOH → NaCl + H₂O           (1 : 1 Verhältnis)
  H₂SO₄ + 2 NaOH → Na₂SO₄ + 2 H₂O   (1 : 2 Verhältnis)

Titration:
  n(Maßlösung) = c · V
  Stoßzahl über Reaktionsgleichung auf gesuchte Stoffmenge übertragen.
          </pre>
          <div style="font-size:11px; opacity:0.8; margin-top:4px;">
            Merkhilfe: <b>Immer zuerst die Reaktionsgleichung ausgleichen, dann n berechnen, dann pH oder Masse bestimmen.</b>
          </div>
        </div>
      `,
      detailBlocks: [
        {
          title: "Stöchiometrie-Grundlagen: n, m, M, c & Reaktionsgleichung",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p>Stöchiometrie beschreibt, wie viel von welchen Stoffen in einer Reaktion beteiligt ist. Die wichtigsten Größen sind:</p>
              <ul>
                <li><b>Stoffmenge n</b> in mol.</li>
                <li><b>Masse m</b> in g.</li>
                <li><b>Molare Masse M</b> in g/mol (z. B. NaCl: M ≈ 58,5 g/mol).</li>
                <li><b>Stoffmengenkonzentration c</b> in mol/L.</li>
                <li><b>Volumen V</b> in L (mL → L: durch 1000).</li>
              </ul>
              <p>Standardbeziehungen:</p>
              <ul>
                <li><b>n = m / M</b> → aus Masse und molarer Masse die Stoffmenge bestimmen.</li>
                <li><b>m = n · M</b> → aus Stoffmenge die Masse berechnen.</li>
                <li><b>c = n / V</b> und <b>n = c · V</b> → Verknüpfung von Konzentration, Volumen und Stoffmenge.</li>
              </ul>
              <p>Die <b>Reaktionsgleichung</b> ist dein stöchiometrischer Fahrplan. Beispiel Neutralisation:</p>
              <pre style="font-size:11px; line-height:1.4; background:rgba(0,0,0,0.15); padding:6px; border-radius:6px;">
HCl + NaOH → NaCl + H₂O  (1 : 1 Verhältnis)
H₂SO₄ + 2 NaOH → Na₂SO₄ + 2 H₂O  (1 : 2 Verhältnis)
              </pre>
              <p>Allgemeine Vorgehensweise in Aufgaben:</p>
              <ol>
                <li>Reaktionsgleichung aufstellen und <b>ausgleichen</b>.</li>
                <li>Alle gegebenen Größen in SI-Einheiten umrechnen (m in g, V in L).</li>
                <li>Gegebene Stoffmengen berechnen (n = m/M oder n = c·V).</li>
                <li>Mit <b>Koeffizienten</b> aus der Reaktionsgleichung Verhältnis bestimmen und gesuchte Stoffmenge ausrechnen.</li>
                <li>Gesuchte Größe (Masse, Konzentration etc.) aus n berechnen.</li>
              </ol>
            </div>
          `
        },
        {
          title: "pH, pOH & starke Säuren/Basen",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p>Der <b>pH-Wert</b> ist ein Maß für die Konzentration an Oxoniumionen (H⁺) in einer Lösung:</p>
              <p style="text-align:center; margin:6px 0;">
                <b>pH = −log<sub>10</sub>[H⁺]</b>
              </p>
              <p>Für starke Säuren (z. B. HCl) nimmt man an, dass sie in verdünnter Lösung vollständig dissoziieren:</p>
              <ul>
                <li>HCl → H⁺ + Cl⁻ → [H⁺] ≈ c(HCl)</li>
              </ul>
              <p>Für starke Basen (z. B. NaOH) gilt:</p>
              <ul>
                <li>NaOH → Na⁺ + OH⁻ → [OH⁻] ≈ c(NaOH)</li>
              </ul>
              <p>Der pOH-Wert ist analog definiert:</p>
              <p style="text-align:center; margin:6px 0;">
                <b>pOH = −log<sub>10</sub>[OH⁻]</b>
              </p>
              <p>In Wasser bei 25 °C gilt:</p>
              <p style="text-align:center; margin:6px 0;">
                <b>pH + pOH = 14</b>
              </p>
              <p>Vorgehen für starke Basen:</p>
              <ol>
                <li>[OH⁻] aus c(Base) bestimmen.</li>
                <li>pOH = −log[OH⁻] berechnen.</li>
                <li>pH = 14 − pOH berechnen.</li>
              </ol>
              <p>Typische Werte:</p>
              <ul>
                <li>c(HCl) = 0,10 mol/L → pH ≈ 1,0</li>
                <li>c(NaOH) = 0,010 mol/L → [OH⁻] = 0,010 → pOH = 2 → pH = 12</li>
              </ul>
            </div>
          `
        },
        {
          title: "Titration & Gehaltsbestimmung – allgemeine Logik",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p>Bei einer <b>Titration</b> wird eine Probe unbekannter Zusammensetzung (z. B. Säure oder Base) mit einer <b>Maßlösung bekannter Konzentration</b> umgesetzt, bis ein bestimmter Punkt (meist Äquivalenzpunkt) erreicht ist.</p>
              <p>Am <b>Äquivalenzpunkt</b> sind die Stoffmengen von Säure und Base im <b>stöchiometrisch richtigen Verhältnis</b>, das du aus der Reaktionsgleichung ablesen kannst.</p>
              <p>Algorithmus für Gehaltsbestimmungen:</p>
              <ol>
                <li><b>Reaktionsgleichung</b> korrekt aufstellen und ausgleichen (z. B. H₂SO₄ + 2 NaOH → ...).</li>
                <li>Stoffmenge der Maßlösung berechnen: n(Maß) = c(Maß) · V(Maß) (mit V in L).</li>
                <li>Über das stöchiometrische Verhältnis aus der Gleichung die Stoffmenge der gesuchten Komponente bestimmen.</li>
                <li>Aus der Stoffmenge die Masse berechnen: m = n · M.</li>
                <li>Falls ein Gehalt in Prozent gefragt ist: w = (m(gesucht) / m(Probe)) · 100 %.</li>
              </ol>
              <p>Beispielreaktion für eine Neutralisation:</p>
              <pre style="font-size:11px; line-height:1.4; background:rgba(0,0,0,0.15); padding:6px; border-radius:6px;">
H₂SO₄ + 2 NaOH → Na₂SO₄ + 2 H₂O

→ 1 mol H₂SO₄ neutralisiert 2 mol NaOH.
              </pre>
              <p>Mit diesem Schema kannst du alle klassischen Gehaltsbestimmungsaufgaben bearbeiten, in denen eine Säure-/Base-Probe mit einer Maßlösung titriert wird.</p>
            </div>
          `
        },
        {
          title: "pH nach Neutralisation mit Überschuss",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p>Oft werden Säure und Base zusammengegeben, aber nicht im stöchiometrisch exakten Verhältnis – es bleibt ein <b>Überschuss</b> von Säure oder Base übrig. Der pH der Mischung wird dann durch diesen Überschuss bestimmt.</p>
              <p>Vorgehen:</p>
              <ol>
                <li>Reaktionsgleichung aufstellen und ausgleichen.</li>
                <li>Stoffmengen von Säure und Base berechnen: n = c·V.</li>
                <li>Über das stöchiometrische Verhältnis die tatsächlich reagierte Stoffmenge bestimmen.</li>
                <li>Übrig gebliebenen Überschuss berechnen: n(Überschuss) = n(Ausgang) − n(verbrauchte).</li>
                <li>Gesamtvolumen der Lösung berechnen (Summe der Volumina, falls additiv angenommen).</li>
                <li>Aus n(Überschuss) und V(gesamt) die Konzentration [H⁺] oder [OH⁻] berechnen.</li>
                <li>Aus [H⁺]/[OH⁻] pH bzw. pOH und dann pH berechnen.</li>
              </ol>
              <p>Wichtig: Nur der Überschuss einer starken Säure/Base bestimmt den pH. Die neutralisierten Anteile ergeben ein Salz (z. B. NaCl), das in diesen einfachen Beispielen den pH nicht wesentlich stört.</p>
            </div>
          `
        },
        {
          title: "Klausurbeispiele Schritt für Schritt",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p><b>Beispiel 1: Titration HCl mit NaOH – Konzentration berechnen</b></p>
              <p>Gegeben: 25,0 mL HCl werden mit 0,100 mol/L NaOH titriert, am Äquivalenzpunkt wurden 18,0 mL NaOH verbraucht.</p>
              <ol>
                <li>Reaktion: HCl + NaOH → NaCl + H₂O (1 : 1).</li>
                <li>n(NaOH) = 0,100 mol/L · 0,0180 L = 1,80 · 10⁻³ mol.</li>
                <li>Am ÄP: n(HCl) = n(NaOH) = 1,80 · 10⁻³ mol.</li>
                <li>c(HCl) = n / V = 1,80 · 10⁻³ mol / 0,0250 L = 0,072 mol/L.</li>
              </ol>

              <p><b>Beispiel 2: pH einer starken Base</b></p>
              <p>Gegeben: c(NaOH) = 0,020 mol/L.</p>
              <ol>
                <li>[OH⁻] = 0,020 mol/L.</li>
                <li>pOH = −log(0,020) ≈ 1,70.</li>
                <li>pH = 14 − 1,70 = 12,30.</li>
              </ol>

              <p><b>Beispiel 3: Gehaltsbestimmung über Rücktitration mit H₂SO₄</b></p>
              <p>Gegeben: Probe Base X wird in 50,0 mL 0,100 mol/L H₂SO₄ gelöst. Der Säureüberschuss wird mit 0,100 mol/L NaOH titriert, am ÄP wurden 20,0 mL NaOH verbraucht. X reagiert 1:1 mit H⁺, M(X) = 40,0 g/mol.</p>
              <ol>
                <li>n(H₂SO₄) = 0,100 · 0,0500 = 5,00 · 10⁻³ mol → n(H⁺)_anfangs = 2 · 5,00 · 10⁻³ = 1,00 · 10⁻² mol.</li>
                <li>n(NaOH) = 0,100 · 0,0200 = 2,00 · 10⁻³ mol → n(H⁺)_übrig = 2,00 · 10⁻³ mol.</li>
                <li>n(H⁺)_von X verbraucht = 1,00 · 10⁻² − 2,00 · 10⁻³ = 8,00 · 10⁻³ mol.</li>
                <li>X reagiert 1:1 mit H⁺ → n(X) = 8,00 · 10⁻³ mol.</li>
                <li>m(X) = n · M = 8,00 · 10⁻³ mol · 40,0 g/mol = 0,320 g = 320 mg.</li>
              </ol>

              <p><b>Beispiel 4: pH nach Zugabe von NaOH zu HCl (Überschuss)</b></p>
              <p>Gegeben: 50,0 mL 0,100 mol/L HCl + 30,0 mL 0,050 mol/L NaOH.</p>
              <ol>
                <li>n(HCl) = 0,100 · 0,0500 = 5,00 · 10⁻³ mol.</li>
                <li>n(NaOH) = 0,050 · 0,0300 = 1,50 · 10⁻³ mol.</li>
                <li>HCl + NaOH reagieren 1:1 → NaOH ist limitierend, HCl im Überschuss.</li>
                <li>n(HCl)_übrig = 5,00 · 10⁻³ − 1,50 · 10⁻³ = 3,50 · 10⁻³ mol.</li>
                <li>V_gesamt = (50,0 + 30,0) mL = 80,0 mL = 0,0800 L.</li>
                <li>[H⁺] = n(HCl)_übrig / V_gesamt = 3,50 · 10⁻³ / 0,0800 ≈ 4,38 · 10⁻² mol/L.</li>
                <li>pH ≈ −log(4,38 · 10⁻²) ≈ 1,4 (stark sauer).</li>
              </ol>

              <p style="margin-top:6px;">
                Wenn du diese Beispiele nachvollziehen kannst, hast du die typischen Klausuraufgaben zu Stöchiometrie, pH und Gehaltsbestimmung sehr gut im Griff: erst Reaktionsgleichung, dann Stoffmengen, dann pH oder Masse/Gehalt.
              </p>
            </div>
          `
        }
      ]
    },

    {
      id: "radioaktiver-zerfall-halbwertszeit",
      title: "Radioaktiver Zerfall & Halbwertszeit",
      tags: ["Radioaktivität", "Halbwertszeit", "Zerfall", "Exponentialfunktionen"],
      goals: [
        "Verstehen, was radioaktiver Zerfall ist und welche Rolle die Halbwertszeit spielt.",
        "Die Definition der Halbwertszeit T1/2 sicher anwenden können.",
        "Die allgemeine Zerfallsformel N(t) = N0 · (1/2)^(t/T1/2) auf Masse, Teilchenzahl oder Aktivität anwenden können.",
        "Umgekehrt aus einer gegebenen Restmenge die vergangene Zeit t bestimmen können.",
        "Typische Klausuraufgaben (z. B. 200 g → 25 g nach mehreren Halbwertszeiten) Schritt für Schritt lösen können."
      ],
      summary: `
        Beim radioaktiven Zerfall wandeln sich instabile Atomkerne spontan in andere Kerne um. Der Zerfall einzelner Kerne ist zufällig,
        aber für eine große Anzahl von Kernen lässt sich das Verhalten sehr gut mit einer Exponentialfunktion beschreiben:
        Pro Zeitintervall zerfällt immer der gleiche Bruchteil, nicht die gleiche absolute Menge.
        Die Halbwertszeit T₁/₂ gibt an, nach welcher Zeit die Hälfte der ursprünglichen Menge zerfallen ist.
        Nach jeder weiteren Halbwertszeit halbiert sich die verbleibende Menge erneut.
        Mathematisch lässt sich der Zerfall über N(t) = N₀ · (1/2)^(t/T₁/₂) (oder äquivalent mit der Zerfallskonstante λ) beschreiben.
        Das gleiche Gesetz gilt für Teilchenzahl, Masse und Aktivität. In der Klausur werden häufig Aufgaben gestellt,
        bei denen entweder die Restmenge nach einer gegebenen Zeit oder die benötigte Zeit für einen gewünschten Restanteil berechnet werden muss.
      `,
      keyPoints: [
        "Radioaktiver Zerfall ist ein statistischer, spontaner Prozess, der sich makroskopisch als exponentielle Abnahme zeigt.",
        "Die Halbwertszeit T1/2 ist die Zeit, nach der die Hälfte der ursprünglichen Menge eines radioaktiven Stoffes zerfallen ist.",
        "Nach n Halbwertszeiten gilt: N = N0 · (1/2)^n (z. B. n = 3 → N = N0/8).",
        "Allgemein: N(t) = N0 · (1/2)^(t/T1/2) für Teilchenzahl, Masse oder Aktivität.",
        "Die Zerfallskonstante λ hängt mit der Halbwertszeit zusammen über T1/2 = ln(2)/λ.",
        "Typische Aufgaben: Restmenge nach gegebener Zeit, benötigte Zeit für bestimmten Anteil, Anzahl Halbwertszeiten bestimmen."
      ],
      formulas: [
        "N(t) = N0 · (1/2)^(t / T1/2)",
        "m(t) = m0 · (1/2)^(t / T1/2)",
        "A(t) = A0 · (1/2)^(t / T1/2)",
        "N(t) = N0 · e^(−λ t)",
        "T1/2 = ln(2) / λ",
        "λ = ln(2) / T1/2",
        "t = T1/2 · ln(N(t)/N0) / ln(1/2)"
      ],
      visual: `
        <div class="learn-visual">
          <div style="font-size:12px; opacity:0.8; margin-bottom:6px;">
            Halbwertszeit und Zerfall auf einen Blick:
          </div>
          <pre style="font-size:11px; line-height:1.4; background:rgba(0,0,0,0.15); padding:8px; border-radius:6px;">
N(t):    Anzahl Kerne / Masse / Aktivität zum Zeitpunkt t
N₀:      Anfangsmenge (t = 0)
T₁/₂:    Halbwertszeit

Nach n Halbwertszeiten (t = n · T₁/₂):
  N = N₀ · (1/2)ⁿ
  n = 1  →  N = N₀/2
  n = 2  →  N = N₀/4
  n = 3  →  N = N₀/8
  n = 4  →  N = N₀/16
  ...

Allgemein:
  N(t) = N₀ · (1/2)^(t / T₁/₂)
          </pre>
          <div style="font-size:11px; opacity:0.8; margin-top:4px;">
            Merkhilfe: <b>Nicht die absolute Menge pro Zeit ist konstant, sondern der <i>Bruchteil</i>, der zerfällt.</b>
          </div>
        </div>
      `,
      detailBlocks: [
        {
          title: "Grundidee des radioaktiven Zerfalls",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p>Radioaktive Kerne sind instabil und können sich spontan in andere Kerne umwandeln. Der Zerfall einzelner Kerne ist zwar zufällig,
              aber für eine große Anzahl von Kernen ergibt sich ein sehr regelmäßiges Verhalten: die Anzahl der noch vorhandenen Kerne nimmt
              exponentiell ab.</p>
              <p>Wichtig ist die Unterscheidung:</p>
              <ul>
                <li>Auf der Ebene <b>einzelner Kerne</b> ist der Zerfall zufällig.</li>
                <li>Auf der Ebene von vielen Kernen folgt die Abnahme einer <b>glatten Exponentialfunktion</b>.</li>
              </ul>
              <p>Dieses Verhalten gilt nicht nur für die Anzahl der Kerne N, sondern auch für die Masse m der Probe oder für die Aktivität A (Zerfälle pro Sekunde),
              weil alle Größen proportional zueinander sind.</p>
            </div>
          `
        },
        {
          title: "Halbwertszeit T₁/₂ – Definition & Bedeutung",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p>Die <b>Halbwertszeit</b> T₁/₂ ist eine zentrale Größe beim radioaktiven Zerfall.</p>
              <p><b>Definition:</b> T₁/₂ ist die Zeit, nach der die Hälfte der ursprünglichen Menge eines radioaktiven Stoffes zerfallen ist.</p>
              <p>Wenn die Anfangsmenge N₀ (oder m₀) ist, gilt:</p>
              <ul>
                <li>nach 1 · T₁/₂: N = N₀/2</li>
                <li>nach 2 · T₁/₂: N = N₀/4</li>
                <li>nach 3 · T₁/₂: N = N₀/8</li>
                <li>nach n · T₁/₂: N = N₀ · (1/2)ⁿ</li>
              </ul>
              <p>Das gleiche Schema gilt für die Masse m(t) oder für die Aktivität A(t). Nach jeder weiteren Halbwertszeit halbiert sich die noch vorhandene Menge erneut.</p>
            </div>
          `
        },
        {
          title: "Allgemeine Zerfallsformeln & Zerfallskonstante λ",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p>Es gibt zwei gleichwertige mathematische Beschreibungen des Zerfalls:</p>
              <p><b>1) Darstellung mit der Halbwertszeit:</b></p>
              <p style="text-align:center; margin:6px 0;">
                <b>N(t) = N₀ · (1/2)<sup>t / T₁/₂</sup></b>
              </p>
              <p>Analog für Masse und Aktivität:</p>
              <ul>
                <li>m(t) = m₀ · (1/2)<sup>t / T₁/₂</sup></li>
                <li>A(t) = A₀ · (1/2)<sup>t / T₁/₂</sup></li>
              </ul>
              <p><b>2) Darstellung mit der Zerfallskonstante λ:</b></p>
              <p style="text-align:center; margin:6px 0;">
                <b>N(t) = N₀ · e<sup>−λ t</sup></b>
              </p>
              <p>Die Zerfallskonstante λ (Einheit 1/s, 1/a, ...) beschreibt die Zerfallswahrscheinlichkeit pro Zeiteinheit. Beide Darstellungen sind über</p>
              <p style="text-align:center; margin:6px 0;">
                <b>T₁/₂ = ln(2) / λ  &nbsp;&nbsp;↔&nbsp;&nbsp;  λ = ln(2) / T₁/₂</b>
              </p>
              <p>miteinander verknüpft. In vielen Allgemeine-Chemie-Aufgaben reicht die Form mit der Halbwertszeit völlig aus.</p>
            </div>
          `
        },
        {
          title: "Rezept 1: Restmenge nach gegebener Zeit t",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p>Typischer Aufgabentyp: <i>„Wie viel ist nach t Zeit noch übrig?“</i></p>
              <p><b>Gegeben:</b> N₀ oder m₀, Halbwertszeit T₁/₂, Zeit t.</p>
              <p><b>Gesucht:</b> Restmenge N(t) oder m(t).</p>
              <p><b>Vorgehen:</b></p>
              <ol>
                <li><b>Anzahl Halbwertszeiten</b> berechnen: n = t / T₁/₂ (darf auch nicht ganzzahlig sein).</li>
                <li>Restanteil: (1/2)<sup>n</sup>.</li>
                <li>Restmenge: N(t) = N₀ · (1/2)<sup>t/T₁/₂</sup> oder m(t) = m₀ · (1/2)<sup>t/T₁/₂</sup>.</li>
              </ol>
              <p><b>Beispiel:</b> m₀ = 80 g, T₁/₂ = 10 Jahre, t = 25 Jahre.</p>
              <ul>
                <li>n = t/T₁/₂ = 25/10 = 2,5.</li>
                <li>m(t) = 80 g · (1/2)<sup>2,5</sup> = 80 g · (1/2)² · (1/2)<sup>0,5</sup> ≈ 80 g · 1/4 · 1/√2.</li>
              </ul>
              <p>In der Klausur ist vor allem wichtig, dass du die Formel richtig anwendest und mit dem Exponenten t/T₁/₂ umgehen kannst. Wenn t ein Vielfaches von T₁/₂ ist, wird es besonders einfach.</p>
            </div>
          `
        },
        {
          title: "Rezept 2: Zeit t aus gewünschter Restmenge",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p>Hier lautet die typische Fragestellung: <i>„Nach welcher Zeit sind nur noch x % der Anfangsmenge übrig?“</i></p>
              <p><b>Gegeben:</b> Halbwertszeit T₁/₂, Verhältnis f = N(t)/N₀ (z. B. 0,10 für 10 %).</p>
              <p><b>Gesucht:</b> t.</p>
              <p>Aus der Zerfallsformel</p>
              <p style="text-align:center; margin:6px 0;">
                <b>N(t)/N₀ = (1/2)<sup>t/T₁/₂</sup></b>
              </p>
              <p>folgt nach Logarithmieren:</p>
              <p style="text-align:center; margin:6px 0;">
                <b>t = T₁/₂ · ln(N(t)/N₀) / ln(1/2)</b>
              </p>
              <p><b>Beispiel:</b> Nach welcher Zeit sind nur noch 10 % übrig, T₁/₂ = 5 Jahre?</p>
              <ul>
                <li>f = N(t)/N₀ = 0,10.</li>
                <li>t = 5 a · ln(0,10) / ln(1/2).</li>
                <li>ln(0,10) ≈ −2,3026, ln(1/2) ≈ −0,6931.</li>
                <li>t ≈ 5 a · (−2,3026 / −0,6931) ≈ 5 a · 3,32 ≈ 16,6 Jahre.</li>
              </ul>
              <p>Intuitiv passt das: nach 3 Halbwertszeiten (15 Jahre) wären 12,5 % übrig, nach 4 (20 Jahre) 6,25 % → 10 % liegt dazwischen.</p>
            </div>
          `
        },
        {
          title: "Dein Beispiel: 200 g → 25 g mit T₁/₂ = 4000 Jahren",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p>Das Beispiel aus deinen Notizen:</p>
              <p>Eine radioaktive Substanz hat am Anfang m₀ = 200 g und eine Halbwertszeit von T₁/₂ = 4000 Jahren. Wie viel Gramm sind nach 12 000 Jahren vorhanden?</p>
              <p><b>Lösungsweg über Halbwertszeiten:</b></p>
              <ol>
                <li>Anzahl Halbwertszeiten: n = t / T₁/₂ = 12 000 a / 4000 a = 3.</li>
                <li>Restanteil: (1/2)³ = 1/8.</li>
                <li>Restmasse: m(t) = m₀ · (1/8) = 200 g · 1/8 = 25 g.</li>
              </ol>
              <p>In Tabellenform:</p>
              <ul>
                <li>t = 0:   m = 200 g.</li>
                <li>t = 4000 a (1 · T₁/₂): m = 100 g.</li>
                <li>t = 8000 a (2 · T₁/₂): m = 50 g.</li>
                <li>t = 12 000 a (3 · T₁/₂): m = 25 g.</li>
              </ul>
              <p>Das ist exakt das Schema, das oft in Klausuren abgefragt wird: man erkennt, dass die gesuchte Zeit ein ganzzahliges Vielfaches der Halbwertszeit ist und halbiert die Masse entsprechend oft.</p>
            </div>
          `
        },
        {
          title: "Aktivität A(t) und Anzahl Halbwertszeiten",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p>Die <b>Aktivität</b> A gibt die Anzahl der Zerfälle pro Zeit (z. B. in Bq = Zerfälle pro Sekunde) an. Da A proportional zur Anzahl der radioaktiven Kerne N ist, gilt für die Aktivität das gleiche Zerfallsgesetz:</p>
              <p style="text-align:center; margin:6px 0;">
                <b>A(t) = A₀ · (1/2)<sup>t/T₁/₂</sup></b>
              </p>
              <p>Typischer Aufgabentyp:</p>
              <p><i>„Die Aktivität einer Probe halbiert sich in 3 Tagen. Wie groß ist die Aktivität nach 9 Tagen, wenn sie anfangs 8000 Bq beträgt?“</i></p>
              <p><b>Lösung:</b></p>
              <ul>
                <li>T₁/₂ = 3 Tage, t = 9 Tage → n = t/T₁/₂ = 3.</li>
                <li>A(t) = A₀ · (1/2)³ = 8000 Bq · 1/8 = 1000 Bq.</li>
              </ul>
              <p>In vielen Fällen ist es am einfachsten, die Anzahl der Halbwertszeiten n (= t/T₁/₂) zu bestimmen und dann zu überlegen, wie oft die Menge halbiert wird.</p>
            </div>
          `
        },
        {
          title: "Zusammenfassung & Klausurrezepte",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <ul>
                <li><b>Halbwertszeit T₁/₂:</b> Zeit, in der sich die vorhandene Menge halbiert.</li>
                <li><b>Exponentieller Zerfall:</b> N(t) = N₀ · (1/2)<sup>t/T₁/₂</sup>; analog für m(t) und A(t).</li>
                <li><b>Zerfallskonstante λ:</b> N(t) = N₀ · e<sup>−λ t</sup>, mit T₁/₂ = ln(2)/λ.</li>
                <li><b>Rezept „Restmenge“:</b> t/T₁/₂ berechnen → (1/2)<sup>t/T₁/₂</sup> → mit Anfangsmenge multiplizieren.</li>
                <li><b>Rezept „Zeit aus Restquote“:</b> t = T₁/₂ · ln(N(t)/N₀) / ln(1/2).</li>
                <li><b>Besonders einfach:</b> wenn N(t)/N₀ eine saubere Potenz von 1/2 ist (1/2, 1/4, 1/8, ...), n direkt ablesen.</li>
                <li><b>Achtung bei Einheiten:</b> T₁/₂ und t müssen in der gleichen Zeiteinheit eingesetzt werden (z. B. beide in Jahren oder beide in Sekunden).</li>
              </ul>
              <p style="margin-top:6px;">
                Wenn du diese Punkte im Kopf hast und sicher mit (1/2)<sup>t/T₁/₂</sup> umgehen kannst, bist du für alle Standardaufgaben zum radioaktiven Zerfall in der Allgemeinen Chemie sehr gut vorbereitet.
              </p>
            </div>
          `
        }
      ]
    },


    {
      id: "massendefekt-bindungsenergie",
      title: "Massendefekt, Bindungsenergie & E = mc²",
      tags: ["Massendefekt", "Bindungsenergie", "E = mc²", "Kernphysik", "Energieeinheiten"],
      goals: [
        "Verstehen, warum Atomkerne leichter sind als die Summe ihrer Nukleonen (Massendefekt).",
        "Die Einsteinsche Gleichung E = m·c² auf radioaktive Prozesse anwenden können.",
        "Aus Massendefekt Δm in u die Bindungsenergie eines Kerns in MeV berechnen können.",
        "Die Bindungsenergie pro Nukleon bestimmen und zur Stabilitätsabschätzung nutzen können.",
        "Sicher zwischen den Einheiten u, MeV, eV und Joule umrechnen können."
      ],
      summary: `
        Beim Aufbau von Atomkernen wird Energie frei: die Masse des fertigen Kerns ist kleiner als die Summe der Massen seiner Protonen und Neutronen.
        Diese Massendifferenz nennt man Massendefekt Δm. Über die Einsteinsche Gleichung E = m·c² entspricht der Massendefekt einer bestimmten Energie,
        der sogenannten Bindungsenergie. Sie ist ein Maß dafür, wie fest die Nukleonen im Kern gebunden sind. In der Kernphysik rechnet man dabei meist
        mit der atomaren Masseneinheit u und der Energieeinheit MeV. Über die Näherung 1 u·c² ≈ 931,5 MeV kann man Massendefekte in u direkt in MeV umrechnen.
        Für viele Klausuraufgaben reicht es, aus dem Massendefekt die Bindungsenergie und die Bindungsenergie pro Nukleon zu bestimmen und einfache Umrechnungen
        zwischen MeV, eV und Joule durchzuführen.
      `,
      keyPoints: [
        "Massendefekt Δm = Summe der Massen von Protonen und Neutronen minus gemessene Kernmasse.",
        "Die „fehlende“ Masse wurde bei der Kernbildung in Energie umgewandelt: E = Δm · c².",
        "Die Bindungsenergie ist die Energie, die frei wird (bzw. aufgebracht werden müsste), wenn der Kern gebildet (bzw. wieder zerlegt) wird.",
        "1 u ≈ 1,6605 · 10^-27 kg und 1 u·c² ≈ 931,5 MeV – sehr nützlich für Schnellrechnungen.",
        "Bindungsenergie pro Nukleon = E_Bindung / A ist ein Maß für die Stabilität des Kerns.",
        "1 eV = 1,602 · 10^-19 J, 1 MeV = 10^6 eV → MeV lassen sich einfach in Joule umrechnen."
      ],
      formulas: [
        "Δm = (Z · m_p + N · m_n) − m_Kern",
        "E_Bindung = Δm · c²",
        "E_Bindung[MeV] ≈ Δm[u] · 931,5 MeV/u",
        "E_pro Nukleon = E_Bindung / A",
        "1 u ≈ 1,6605 · 10^-27 kg",
        "1 eV = 1,602 · 10^-19 J",
        "1 MeV = 10^6 eV"
      ],
      visual: `
        <div class="learn-visual">
          <div style="font-size:12px; opacity:0.8; margin-bottom:6px;">
            Massendefekt & Bindungsenergie im Überblick:
          </div>
          <pre style="font-size:11px; line-height:1.4; background:rgba(0,0,0,0.15); padding:8px; border-radius:6px;">
Massendefekt:
  Δm = (Z · m_p + N · m_n) − m_Kern   (alle Massen in u)

Bindungsenergie:
  E_Bindung = Δm · c²

Praktische Einheit:
  1 u · c² ≈ 931,5 MeV
  ⇒ E_Bindung[MeV] ≈ Δm[u] · 931,5

Bindungsenergie pro Nukleon:
  E_pro Nukleon = E_Bindung / A

Einheiten:
  1 u ≈ 1,6605 · 10^-27 kg
  1 eV = 1,602 · 10^-19 J
  1 MeV = 10^6 eV
          </pre>
          <div style="font-size:11px; opacity:0.8; margin-top:4px;">
            Merkhilfe: <b>„Ein bisschen Masse → sehr viel Energie“, weil c² riesig ist.</b>
          </div>
        </div>
      `,
      detailBlocks: [
        {
          title: "Was ist der Massendefekt?",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p>Wenn du die Masse eines Atomkerns misst und mit der Summe der Massen seiner Bausteine vergleichst, stellst du fest:
              der Kern ist leichter als die Summe aus Protonen und Neutronen. Diese Differenz nennt man <b>Massendefekt</b> Δm.</p>
              <p>Für einen Kern mit Z Protonen und N Neutronen gilt:</p>
              <p style="text-align:center; margin:6px 0;">
                <b>Δm = (Z · m_p + N · m_n) − m_Kern</b>
              </p>
              <ul>
                <li>Z = Protonenzahl (Ordnungszahl)</li>
                <li>N = Neutronenzahl</li>
                <li>m_p, m_n = Massen von Proton und Neutron (z. B. in u)</li>
                <li>m_Kern = gemessene Masse des fertigen Kerns</li>
              </ul>
              <p>Δm ist in der Regel positiv, d. h. die Summe der Einzelmassen ist größer als die Kernmasse. Die „fehlende“ Masse ist nicht verschwunden,
              sondern wurde in Bindungsenergie umgewandelt.</p>
            </div>
          `
        },
        {
          title: "E = mc² und Bindungsenergie",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p>Die Einsteinsche Gleichung verknüpft Masse und Energie:</p>
              <p style="text-align:center; margin:6px 0;">
                <b>E = m · c²</b>
              </p>
              <p>Daraus folgt: jede Masse m entspricht einer Energie E. Bei Kernprozessen bedeutet das:</p>
              <ul>
                <li>Wenn bei der Kernbildung eine Masse Δm „verschwindet“, wurde eine Energie <b>E_Bindung = Δm · c²</b> frei.</li>
                <li>Umgekehrt müsstest du genau diese Energie zuführen, um den Kern wieder in seine Nukleonen zu zerlegen.</li>
              </ul>
              <p>Man nennt E_Bindung die <b>Bindungsenergie</b> des Kerns. Sie beschreibt, wie fest die Nukleonen aneinander gebunden sind.</p>
            </div>
          `
        },
        {
          title: "Einheiten: u, MeV, eV und Joule",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p>In der Kernphysik werden Massen oft in der <b>atomaren Masseneinheit</b> u angegeben:</p>
              <ul>
                <li>1 u ≈ 1,6605 · 10⁻²⁷ kg</li>
                <li>Masse eines Protons ≈ 1,007 u, eines Neutrons ≈ 1,009 u (typische Größenordnung).</li>
              </ul>
              <p>Für Energien ist statt Joule oft das <b>Elektronenvolt</b> praktisch:</p>
              <ul>
                <li>1 eV = 1,602 · 10⁻¹⁹ J</li>
                <li>1 MeV = 10⁶ eV</li>
              </ul>
              <p>Wichtiger Zusammenhang für schnelle Bindungsenergieberechnungen:</p>
              <p style="text-align:center; margin:6px 0;">
                <b>1 u · c² ≈ 931,5 MeV</b>
              </p>
              <p>Wenn der Massendefekt Δm in u gegeben ist, kannst du die Bindungsenergie direkt berechnen:</p>
              <p style="text-align:center; margin:6px 0;">
                <b>E_Bindung[MeV] ≈ Δm[u] · 931,5</b>
              </p>
              <p>Für Joule gilt dann:</p>
              <p style="text-align:center; margin:6px 0;">
                <b>E[J] = E[MeV] · 10⁶ · 1,602 · 10⁻¹⁹</b>
              </p>
            </div>
          `
        },
        {
          title: "Rezept: Bindungsenergie aus Massendefekt",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p>Typischer Klausuraufgabentyp: <i>„Berechnen Sie aus den Massendaten die Bindungsenergie eines Kerns.“</i></p>
              <p><b>Vorgehen:</b></p>
              <ol>
                <li><b>Z und N bestimmen</b> (Protonen- und Neutronenzahl) aus Ordnungszahl Z und Massenzahl A (A = Z + N).</li>
                <li><b>Summe der Einzelmassen</b> rechnen:
                  <br>Z · m_p + N · m_n (alle Massen in der gleichen Einheit, meist in u).</li>
                <li><b>Massendefekt</b> bestimmen:
                  <br>Δm = (Z · m_p + N · m_n) − m_Kern.</li>
                <li><b>Bindungsenergie in MeV</b> berechnen:
                  <br>E_Bindung[MeV] ≈ Δm[u] · 931,5.</li>
                <li>Optional: <b>Bindungsenergie pro Nukleon</b>:
                  <br>E_pro Nukleon = E_Bindung / A.</li>
              </ol>
            </div>
          `
        },
        {
          title: "Beispiel 1: Fiktiver Kern mit Z = 2, N = 2",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p>Gegeben:</p>
              <ul>
                <li>Z = 2, N = 2 (A = 4).</li>
                <li>m_p = 1,007 u, m_n = 1,009 u.</li>
                <li>m_Kern = 4,001 u.</li>
              </ul>
              <p><b>1) Summe der Einzelmassen:</b></p>
              <p>m_Summe = 2 · 1,007 u + 2 · 1,009 u = 4,032 u.</p>
              <p><b>2) Massendefekt:</b></p>
              <p>Δm = m_Summe − m_Kern = 4,032 u − 4,001 u = 0,031 u.</p>
              <p><b>3) Bindungsenergie:</b></p>
              <p>E_Bindung ≈ 0,031 · 931,5 MeV ≈ 28,9 MeV.</p>
              <p><b>4) Bindungsenergie pro Nukleon:</b></p>
              <p>E_pro Nukleon = 28,9 MeV / 4 ≈ 7,2 MeV/Nukleon.</p>
              <p>Die Größe von 7–8 MeV/Nukleon ist typisch für gut gebundene, stabile Kerne.</p>
            </div>
          `
        },
        {
          title: "Beispiel 2: Δm in u → MeV und Joule",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p>Gegeben: Δm = 0,20 u.</p>
              <p><b>1) Δm → MeV:</b></p>
              <p>E_Bindung ≈ 0,20 · 931,5 MeV ≈ 186,3 MeV.</p>
              <p><b>2) MeV → Joule:</b></p>
              <ul>
                <li>1 MeV = 10⁶ eV, 1 eV = 1,602 · 10⁻¹⁹ J.</li>
                <li>E[J] = 186,3 · 10⁶ · 1,602 · 10⁻¹⁹ ≈ 2,99 · 10⁻¹¹ J.</li>
              </ul>
              <p>Man sieht: in Joule wirkt die Zahl „klein“, in MeV aber ist es eine typische Bindungsenergie im Nuklearbereich.</p>
            </div>
          `
        },
        {
          title: "Beispiel 3: Welcher Kern ist stabiler?",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p>Gegeben:</p>
              <ul>
                <li>Kern A: E_Bindung = 400 MeV, A = 50.</li>
                <li>Kern B: E_Bindung = 700 MeV, A = 100.</li>
              </ul>
              <p><b>Bindungsenergie pro Nukleon:</b></p>
              <p>A: E_pro Nukleon = 400 / 50 = 8,0 MeV/Nukleon.</p>
              <p>B: E_pro Nukleon = 700 / 100 = 7,0 MeV/Nukleon.</p>
              <p><b>Interpretation:</b></p>
              <p>Je größer die Bindungsenergie pro Nukleon, desto „stärker gebunden“ ist der Kern. Im Vergleich ist Kern A stabiler als Kern B,
              obwohl B insgesamt eine größere absolute Bindungsenergie hat. Für Stabilitätsvergleiche zählt die Energie pro Nukleon.</p>
            </div>
          `
        },
        {
          title: "Zusammenfassung & Klausurhinweise",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <ul>
                <li><b>Massendefekt Δm</b> entsteht, weil der Kern leichter ist als die Summe der Massen seiner Nukleonen.</li>
                <li><b>Bindungsenergie</b> ist die Energie, die diesem Massendefekt entspricht: E_Bindung = Δm · c².</li>
                <li>Praktisch rechnet man mit Massen in u und Energien in MeV: 1 u·c² ≈ 931,5 MeV.</li>
                <li><b>Rezept:</b> Δm in u → E_Bindung[MeV] = Δm · 931,5 → ggf. E_pro Nukleon = E_Bindung / A.</li>
                <li>Für Umrechnungen: 1 MeV = 10⁶ eV, 1 eV = 1,602 · 10⁻¹⁹ J.</li>
                <li>Bei Stabilitätsvergleichen ist die Bindungsenergie pro Nukleon entscheidend, nicht die absolute Gesamtenergie.</li>
              </ul>
              <p style="margin-top:6px;">
                Wenn du sicher mit Massendefekt in u, der Umrechnung zu MeV und der Bindungsenergie pro Nukleon umgehen kannst,
                bist du für alle Standardaufgaben zu Massendefekt und E = mc² sehr gut vorbereitet.
              </p>
            </div>
          `
        }
      ]
    },

    {
      id: "volt-ampere-watt-energieeinheiten",
      title: "Volt, Ampere, Watt & Energieeinheiten (J, eV)",
      tags: ["Volt", "Ampere", "Watt", "Joule", "eV", "Leistung", "Energie"],
      goals: [
        "Die physikalischen Größen Ladung, Stromstärke, Spannung, Leistung und Energie sicher unterscheiden können.",
        "Die Grundformeln I = Q/t, U = E/Q, P = U·I und E = P·t anwenden können.",
        "Den Zusammenhang zwischen Volt, Ampere und Watt (P = U·I) verstehen und nutzen können.",
        "Elektronenvolt (eV) als Energieeinheit verstehen und zwischen Joule und eV umrechnen können.",
        "Typische Dreisatz-/Rechenaufgaben zu Strom, Spannung, Leistung und Energie schrittweise lösen können."
      ],
      summary: `
        In diesem Thema verbindest du die wichtigsten elektrischen Grundgrößen mit den Energieeinheiten, die in der Atom- und Kernphysik verwendet werden.
        Stromstärke (Ampere), Spannung (Volt) und Leistung (Watt) beschreiben, wie viel Ladung pro Zeit fließt, welche Energie pro Ladung zur Verfügung steht
        und wie schnell Energie umgesetzt wird. Über die Formeln P = U·I und E = P·t (bzw. E = U·I·t oder E = U·Q) kannst du Leistungen und Energien in technischen
        oder physikalischen Aufgaben berechnen. Das Elektronenvolt (eV) ist eine sehr praktische Energieeinheit auf atomarer Ebene und lässt sich direkt über
        Spannung (E = e·U) bzw. über 1 eV = 1,602 · 10^-19 J mit Joule verknüpfen. In Klausuren tauchen häufig einfache, aber verkettete Rechenaufgaben auf,
        bei denen du sauber mit Einheiten und Dreisatz umgehen musst.
      `,
      keyPoints: [
        "Ladung Q (C), Stromstärke I (A), Spannung U (V), Leistung P (W) und Energie E (J) sind eng verknüpfte Größen.",
        "Stromstärke: I = Q/t – wie viel Ladung pro Zeit fließt.",
        "Spannung: U = E/Q – wie viel Energie pro Ladung zur Verfügung steht.",
        "Leistung: P = U·I – Ampere mal Volt ist Watt.",
        "Energie: E = P·t = U·I·t oder E = U·Q.",
        "1 eV ist die Energie, die ein Elektron beim Durchlaufen von 1 Volt gewinnt: 1 eV = 1,602 · 10^-19 J.",
        "Spannung in Volt direkt in eV: ein Elektron an U Volt gewinnt U eV Energie."
      ],
      formulas: [
        "I = Q / t",
        "U = E / Q",
        "E = U · Q",
        "P = U · I",
        "E = P · t",
        "E = U · I · t",
        "1 eV = 1,602 · 10^-19 J",
        "E_eV = E_J / (1,602 · 10^-19)",
        "E_J = E_eV · 1,602 · 10^-19"
      ],
      visual: `
        <div class="learn-visual">
          <div style="font-size:12px; opacity:0.8; margin-bottom:6px;">
            Übersicht über die wichtigsten elektrischen Größen:
          </div>
          <pre style="font-size:11px; line-height:1.4; background:rgba(0,0,0,0.15); padding:8px; border-radius:6px;">
Ladung:           Q [C]          (Coulomb)
Stromstärke:      I [A]          I = Q / t
Spannung:         U [V]          U = E / Q
Leistung:         P [W]          P = U · I
Energie:          E [J]          E = P · t = U · I · t

Elektronenvolt:
  1 eV = 1,602 · 10^-19 J
  1 MeV = 10^6 eV

Elektron an Spannung U:
  E = e · U    (in Joule)
  → für ein Elektron: U Volt ≙ U eV
          </pre>
          <div style="font-size:11px; opacity:0.8; margin-top:4px;">
            Merkhilfe: <b>Ampere × Volt = Watt</b> und <b>Volt × Coulomb = Joule</b>.
          </div>
        </div>
      `,
      detailBlocks: [
        {
          title: "Grundgrößen: Q, I, U, P und E",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p>Die wichtigsten Größen in einfachen Elektro- und Energieaufgaben sind:</p>
              <ul>
                <li><b>Ladung Q</b> in Coulomb (C): beschreibt, wie viel elektrische Ladung vorhanden ist.</li>
                <li><b>Stromstärke I</b> in Ampere (A): wie viel Ladung pro Zeit durch einen Leiter fließt.</li>
                <li><b>Spannung U</b> in Volt (V): Energie pro Ladungseinheit, die im Stromkreis „zur Verfügung“ steht.</li>
                <li><b>Leistung P</b> in Watt (W): wie viel Energie pro Zeit umgesetzt wird.</li>
                <li><b>Energie E</b> in Joule (J): die gesamte umgesetzte oder übertragene Energie.</li>
              </ul>
              <p>Zwischen diesen Größen gibt es einfache, aber sehr wichtige Beziehungen, die in vielen Aufgaben immer wieder vorkommen.</p>
            </div>
          `
        },
        {
          title: "Stromstärke & Spannung: I = Q/t, U = E/Q",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p><b>Stromstärke I</b> beschreibt, wie viel Ladung pro Zeit fließt:</p>
              <p style="text-align:center; margin:6px 0;"><b>I = Q / t</b></p>
              <ul>
                <li>I in Ampere (A)</li>
                <li>Q in Coulomb (C)</li>
                <li>t in Sekunden (s)</li>
              </ul>
              <p><b>Spannung U</b> ist definiert als Energie pro Ladung:</p>
              <p style="text-align:center; margin:6px 0;"><b>U = E / Q</b></p>
              <p>Umgestellt ergibt das:</p>
              <p style="text-align:center; margin:6px 0;"><b>E = U · Q</b></p>
              <p>Damit kannst du aus einer gegebenen Spannung U und einer transportierten Ladung Q direkt die übertragene Energie E berechnen.</p>
            </div>
          `
        },
        {
          title: "Leistung: Ampere × Volt ist Watt (P = U·I)",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p>Die <b>Leistung</b> P gibt an, wie schnell Energie umgesetzt wird (Energie pro Zeit):</p>
              <p style="text-align:center; margin:6px 0;"><b>P = E / t</b></p>
              <p>In elektrischen Systemen kann man P über Spannung und Strom ausdrücken:</p>
              <p style="text-align:center; margin:6px 0;"><b>P = U · I</b></p>
              <ul>
                <li>P in Watt (W)</li>
                <li>U in Volt (V)</li>
                <li>I in Ampere (A)</li>
              </ul>
              <p>Damit ergibt sich für die Energie:</p>
              <p style="text-align:center; margin:6px 0;"><b>E = P · t = U · I · t</b></p>
              <p>Das ist die mathematische Version von:<br><b>„Ampere mal Volt ist Watt“</b> und „Watt mal Zeit ist Joule“.</p>
            </div>
          `
        },
        {
          title: "Elektronenvolt (eV) & Zusammenhang mit Spannung",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p>Das <b>Elektronenvolt (eV)</b> ist eine Energieeinheit, die vor allem in der Atom- und Kernphysik verwendet wird.</p>
              <p><b>Definition:</b> 1 eV ist die Energie, die ein Elektron gewinnt, wenn es über eine Spannung von 1 V beschleunigt wird.</p>
              <p>Formel dahinter:</p>
              <p style="text-align:center; margin:6px 0;"><b>E = e · U</b></p>
              <ul>
                <li>e = 1,602 · 10^-19 C (Elementarladung)</li>
                <li>U in Volt</li>
                <li>E in Joule</li>
              </ul>
              <p>Für ein Elektron gilt damit ganz einfach:</p>
              <ul>
                <li>1 V → 1 eV</li>
                <li>10 V → 10 eV</li>
                <li>120 V → 120 eV</li>
              </ul>
              <p>Die Umrechnung zu Joule:</p>
              <p style="text-align:center; margin:6px 0;"><b>1 eV = 1,602 · 10^-19 J</b></p>
            </div>
          `
        },
        {
          title: "Energieeinheiten: Joule ↔ eV (und MeV)",
          content: `
            <div style="font-size:13px; line-height:150%;">

              <p>Für viele Rechnungen brauchst du die Umrechnung zwischen Joule und eV:</p>

              <ul>
                <li>1 eV = 1,602 · 10^-19 J</li>

                <li>1 MeV = 10^6 eV</li>

              </ul>

              <p>Daraus folgen die Rechenformeln:</p>

              <ul>
                <li><b>eV → Joule:</b> E_J = E_eV · 1,602 · 10^-19</li>

                <li><b>Joule → eV:</b> E_eV = E_J / (1,602 · 10^-19)</li>

              </ul>

              <p>Typische Größenordnungen:</p>

              <ul>
                <li>Atomare Übergänge: einige eV bis wenige 10 eV.</li>

                <li>Kernphysik: MeV-Bereich (Millionen eV).</li>

              </ul>
            </div>
          `
        },
        {
          title: "Klausurbeispiele Schritt für Schritt",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p><b>Beispiel 1: P = U·I → Ampere × Volt = Watt</b></p>
              <p>Gegeben: U = 12 V, I = 0,50 A.</p>
              <ol>
                <li>Leistung: P = U·I = 12 V · 0,50 A = 6 W.</li>
                <li>Energie in 3 min (180 s): E = P·t = 6 W · 180 s = 1080 J.</li>
              </ol>

              <p><b>Beispiel 2: Energie aus Spannung & Ladung</b></p>
              <p>Gegeben: U = 5,0 V, Q = 10,0 C.</p>
              <ol>
                <li>E = U·Q = 5,0 V · 10,0 C = 50 J.</li>
              </ol>

              <p><b>Beispiel 3: Elektron an U = 120 V</b></p>
              <p>Gegeben: Elektron, U = 120 V.</p>
              <ol>
                <li>Energie in eV: E = 120 eV.</li>
                <li>Energie in Joule: E_J = 120 · 1,602 · 10^-19 J ≈ 1,92 · 10^-17 J.</li>
              </ol>

              <p><b>Beispiel 4: Stromstärke aus Leistung und Spannung</b></p>
              <p>Gegeben: P = 60 W, U = 12 V.</p>
              <ol>
                <li>Aus P = U·I folgt I = P/U = 60 W / 12 V = 5 A.</li>
              </ol>

              <p><b>Beispiel 5: eV ↔ Joule</b></p>
              <p>Gegeben: E = 3,0 eV.</p>
              <ol>
                <li>In Joule: E_J = 3,0 · 1,602 · 10^-19 J ≈ 4,81 · 10^-19 J.</li>
              </ol>
              <p>Gegeben: E = 1,0 · 10^-18 J.</p>
              <ol>
                <li>In eV: E_eV = (1,0 · 10^-18 J) / (1,602 · 10^-19 J/eV) ≈ 6,24 eV.</li>
              </ol>

              <p style="margin-top:6px;">
                In all diesen Aufgaben ist das Wichtigste, dass du die richtige Grundformel erkennst (I = Q/t, U = E/Q, P = U·I, E = P·t)
                und konsequent mit den Einheiten arbeitest. Der Rest ist sauberer Dreisatz.
              </p>
            </div>
          `
        }
      ]
    },


{
  id: "em-strahlung-quanten-photonen",
  title: "Elektromagnetische Strahlung, Quanten & Photonen (λ, ν, E)",
  tags: ["EM-Strahlung", "Wellenlänge", "Frequenz", "Photon", "Planck", "Energie", "Photoeffekt"],
  goals: [
    "Wellenlänge λ, Frequenz ν und Lichtgeschwindigkeit c sicher unterscheiden und korrekt mit Einheiten verwenden.",
    "Die Beziehung c = λ·ν anwenden und nach λ oder ν umstellen können.",
    "Die Photonenergie mit E = h·ν und E = h·c/λ berechnen können.",
    "Einheiten sicher umrechnen (nm → m, Hz = s^-1, Joule ↔ eV).",
    "Typische Klausuraufgaben (λ → ν → E, Vergleich von Strahlungen, Photoeffekt-Grundidee) Schritt für Schritt lösen können."
  ],
  summary: `
    Elektromagnetische Strahlung kann als Welle (Wellenlänge λ, Frequenz ν) und gleichzeitig als Teilchenstrom (Photonen) beschrieben werden.
    Die zentrale Beziehung der Wellenseite ist c = λ·ν. Damit kannst du aus einer Wellenlänge die Frequenz berechnen (oder umgekehrt).
    Auf der Quantenseite gilt für die Energie eines Photons E = h·ν. Kombiniert man beide Formeln, folgt E = h·c/λ.
    In Klausuren sind die Standardaufgaben: Umrechnungen (nm ↔ m), Frequenz berechnen, Photonenergie in Joule und eV berechnen,
    sowie qualitative Aussagen: kürzere Wellenlänge → höhere Frequenz → höhere Energie. Beim Photoeffekt ist entscheidend: Frequenz bestimmt,
    ob Elektronen austreten können (Schwelle), Intensität beeinflusst eher die Anzahl, nicht die Energie pro Elektron.
  `,
  keyPoints: [
    "λ (Lambda) = Wellenlänge [m], ν (Nu) = Frequenz [Hz], c = Lichtgeschwindigkeit [m/s].",
    "Zentrale Beziehung: c = λ·ν (und ν = c/λ, λ = c/ν).",
    "Photonenergie: E = h·ν; mit ν = c/λ folgt E = h·c/λ.",
    "Einheiten: 1 Hz = 1/s = s^-1; 1 nm = 10^-9 m.",
    "Je kleiner λ, desto größer ν und desto größer die Energie E.",
    "Photoeffekt: Elektronen treten nur aus, wenn h·ν ≥ A (A = Austrittsarbeit)."
  ],
  formulas: [
    "c = λ · ν",
    "ν = c / λ",
    "λ = c / ν",
    "E = h · ν",
    "E = (h · c) / λ",
    "1 Hz = 1/s = s^-1",
    "1 nm = 10^-9 m",
    "h = 6,626 · 10^-34 J·s",
    "c ≈ 3,00 · 10^8 m/s",
    "1 eV = 1,602 · 10^-19 J",
    "E_eV = E_J / (1,602 · 10^-19)",
    "E_J = E_eV · 1,602 · 10^-19",
    "Photoeffekt: E_kin,max = h·ν − A"
  ],
  visual: `
    <div class="learn-visual">
      <div style="font-size:12px; opacity:0.8; margin-bottom:6px;">
        Merkkette (sehr klausurrelevant):
      </div>
      <pre style="font-size:11px; line-height:1.4; background:rgba(0,0,0,0.15); padding:8px; border-radius:6px;">
c = λ · ν

kleinere λ  → größere ν  → größere E
(E = h·ν = h·c/λ)

Einheiten:
  λ: m (oft nm)
  ν: Hz = s^-1
  E: Joule oder eV
      </pre>
      <div style="font-size:11px; opacity:0.8; margin-top:4px;">
        Typischer Fehler: λ (Lambda) wird als µ gelesen und ν (Nu) als v.
      </div>
    </div>
  `,
  detailBlocks: [
    {
      title: "Grundbegriffe: λ, ν, c (mit Einheiten)",
      content: `
        <div style="font-size:13px; line-height:1.5;">
          <p><b>Wellenlänge λ (Lambda)</b>: Abstand zwischen zwei Wellenbergen. Einheit: <b>m</b> (häufig nm).</p>
          <p><b>Frequenz ν (Nu)</b>: Schwingungen pro Sekunde. Einheit: <b>Hz</b>.</p>
          <p><b>Lichtgeschwindigkeit c</b>: im Vakuum ca. <b>3,00 · 10^8 m/s</b>.</p>

          <p style="margin-top:8px;"><b>Einheiten-Merker:</b></p>
          <ul>
            <li>1 nm = 10^-9 m</li>
            <li>1 Hz = 1/s = s^-1</li>
          </ul>
        </div>
      `
    },
    {
      title: "Wellenformel: c = λ·ν (und Umstellungen)",
      content: `
        <div style="font-size:13px; line-height:1.5;">
          <p>Die zentrale Beziehung der EM-Welle ist:</p>
          <p style="text-align:center; margin:6px 0;"><b>c = λ · ν</b></p>
          <p>Wichtige Umstellungen:</p>
          <ul>
            <li><b>ν = c / λ</b> (wenn λ gegeben ist)</li>
            <li><b>λ = c / ν</b> (wenn ν gegeben ist)</li>
          </ul>
          <p><b>Merke:</b> Bei konstantem c gilt: <b>kleinere λ → größere ν</b>.</p>
        </div>
      `
    },
    {
      title: "Quanten: Photonenergie (E = h·ν) und Kombination (E = h·c/λ)",
      content: `
        <div style="font-size:13px; line-height:1.5;">
          <p>Planck/Quantenidee: Strahlung überträgt Energie in Paketen (Photonen).</p>
          <p style="text-align:center; margin:6px 0;"><b>E = h · ν</b></p>
          <p>Mit ν = c/λ folgt die sehr klausurrelevante Kombiformel:</p>
          <p style="text-align:center; margin:6px 0;"><b>E = (h · c) / λ</b></p>

          <p><b>Konstanten:</b></p>
          <ul>
            <li>h = 6,626 · 10^-34 J·s</li>
            <li>c ≈ 3,00 · 10^8 m/s</li>
          </ul>
        </div>
      `
    },
    {
      title: "Photoeffekt (Qualitativ + Standardformel)",
      content: `
        <div style="font-size:13px; line-height:1.5;">
          <p>Beim <b>photoelektrischen Effekt</b> können Elektronen aus einem Metall austreten, wenn die Photonenenergie groß genug ist.</p>
          <p><b>Schwelle:</b> h·ν muss mindestens die Austrittsarbeit A liefern.</p>
          <p style="text-align:center; margin:6px 0;"><b>E_kin,max = h·ν − A</b></p>

          <ul>
            <li><b>Frequenz</b> bestimmt, ob Elektronen überhaupt austreten (Schwellfrequenz).</li>
            <li><b>Intensität</b> beeinflusst eher die <i>Anzahl</i> der Elektronen (mehr Photonen), nicht deren Energie pro Elektron.</li>
          </ul>
        </div>
      `
    },
    {
      title: "Energie in Joule ↔ eV (kurz & klausursicher)",
      content: `
        <div style="font-size:13px; line-height:1.5;">
          <p>Oft rechnest du Photonenergien in Joule aus und wandelst dann in eV um.</p>
          <ul>
            <li><b>1 eV = 1,602 · 10^-19 J</b></li>
            <li><b>E_eV = E_J / (1,602 · 10^-19)</b></li>
            <li><b>E_J = E_eV · 1,602 · 10^-19</b></li>
          </ul>
        </div>
      `
    },
    {
      title: "Klausurbeispiele Schritt für Schritt (λ → ν → E)",
      content: `
        <div style="font-size:13px; line-height:1.5;">
          <p><b>Beispiel 1: Frequenz aus Wellenlänge</b></p>
          <p>Gegeben: λ = 500 nm. Gesucht: ν.</p>
          <ol>
            <li>Umrechnen: 500 nm = 500 · 10^-9 m.</li>
            <li>ν = c/λ = (3,00 · 10^8) / (500 · 10^-9) ≈ 6,00 · 10^14 Hz.</li>
          </ol>

          <p><b>Beispiel 2: Photonenergie aus Wellenlänge (J und eV)</b></p>
          <p>Gegeben: λ = 500 nm. Gesucht: E.</p>
          <ol>
            <li>E = h·c/λ = (6,626 · 10^-34 · 3,00 · 10^8) / (500 · 10^-9)</li>
            <li>E ≈ 3,98 · 10^-19 J.</li>
            <li>In eV: E_eV = (3,98 · 10^-19) / (1,602 · 10^-19) ≈ 2,48 eV.</li>
          </ol>

          <p><b>Beispiel 3: Vergleich – welche Strahlung ist energiereicher?</b></p>
          <p>Vergleiche: λ1 = 700 nm (rot) und λ2 = 250 nm (UV).</p>
          <ol>
            <li>Da E = h·c/λ gilt: kleinere λ → größere Energie.</li>
            <li>UV (250 nm) ist energiereicher als rot (700 nm).</li>
          </ol>

          <p style="margin-top:6px;">
            Klausur-Tipp: In fast allen Aufgaben ist der Schlüssel die Kette <b>nm → m</b>, dann <b>ν = c/λ</b>, dann <b>E = h·ν</b> (oder direkt E = h·c/λ),
            und am Ende ggf. <b>J → eV</b>.
          </p>
        </div>
      `
    }
  ]
},










// ── NEU: Hybridisierung ──────────────────────────────────────────────────────
{
  id: "hybridisierung",
  title: "Hybridisierung: sp, sp², sp³",
  tags: ["Hybridisierung", "sp³", "sp²", "sp", "Bindungswinkel", "σ-Bindung", "π-Bindung"],
  goals: [
    "Das Konzept der Hybridisierung erklären und von reinen Atomorbitalen abgrenzen.",
    "sp³-, sp²- und sp-Hybridisierung sicher bestimmen und Bindungswinkel angeben.",
    "σ- und π-Bindungen unterscheiden und zuordnen.",
    "Beispiele zuordnen: sp³ → CH₄/NH₃/H₂O, sp² → C₂H₄/Carbonyl, sp → C₂H₂/CO₂."
  ],
  summary:
    "Hybridisierung beschreibt die Umkombination von Atomorbitalen zu neuen, gleichwertigen Hybridorbitalen, bevor Bindungen eingegangen werden. sp³ → 4 Hybridorbitale (Tetraeder, ~109,5°); sp² → 3 Hybridorbitale + 1 reines p-Orbital (trigonal-planar, ~120°); sp → 2 Hybridorbitale + 2 reine p-Orbitale (linear, 180°). Nicht hybridisierte p-Orbitale bilden π-Bindungen.",
  keyPoints: [
    "Hybridisierung: AOs desselben Atoms mischen sich zu gleichwertigen Hybridorbitalen mit günstigerer Energieverteilung.",
    "sp³: 1s + 3p → 4 sp³-Orbitale; Tetraeder; Winkel ~109,5°; Beispiele: CH₄, NH₃ (mit 1 freiem Paar, ~107°), H₂O (2 freie Paare, ~104,5°).",
    "sp²: 1s + 2p → 3 sp²-Orbitale + 1 reines p-Orbital (⊥ zur Ebene); trigonal-planar; ~120°; Doppelbindung = σ + π; Beispiele: C₂H₄, Carbonyl (C=O).",
    "sp: 1s + 1p → 2 sp-Orbitale + 2 reine p-Orbitale; linear; 180°; Dreifachbindung = σ + 2π; Beispiele: C₂H₂, CO₂.",
    "σ-Bindung: Orbitale überlappen entlang der Bindungsachse – aus Hybridorbitalen.",
    "π-Bindung: laterale Überlappung der p-Orbitale senkrecht zur Bindungsachse; nur nach σ-Bindung möglich.",
    "Freie Elektronenpaare nehmen mehr Platz ein als Bindungspaare → verengen den Bindungswinkel."
  ],
  formulas: [
    "sp³: 1s + 3p → 4 gleichwertige sp³-Orbitale (Tetraeder, 109,5°)",
    "sp²: 1s + 2p → 3 sp²-Orbitale + 1 p-Orbital (trigonal-planar, 120°)",
    "sp:  1s + 1p → 2 sp-Orbitale + 2 p-Orbitale (linear, 180°)"
  ],
  visual: `
    <div style="font-size:11px; margin-bottom:4px;">Hybridisierung im Überblick:</div>
    <pre style="font-size:10px; line-height:1.4;">
Hybridisierung | Geometrie         | Winkel  | Beispiel
─────────────────────────────────────────────────────────
sp³            | Tetraeder         | ~109,5° | CH₄, NH₃, H₂O
sp²            | trigonal-planar   | ~120°   | C₂H₄, BF₃, C=O
sp             | linear            |  180°   | C₂H₂, CO₂, BeCl₂
    </pre>
    <div style="font-size:11px; opacity:0.8;">
      Merkhilfe: Anzahl σ-Bindungen + freie Elektronenpaare am Zentralatom → Hybridisierungstyp.
    </div>
  `,
  detailBlocks: [
    {
      title: "sp³-Hybridisierung (Beispiel CH₄, NH₃, H₂O)",
      content: `
        <div style="font-size:13px; line-height:1.5;">
          <p>Beim Kohlenstoff in CH₄ mischt sich das 2s-Orbital mit allen drei 2p-Orbitalen:</p>
          <p style="text-align:center;"><b>1s + 3p → 4 sp³-Hybridorbitale (gleichwertig, tetraederförmig)</b></p>
          <ul>
            <li>Jedes sp³-Orbital bildet eine <b>σ-Bindung</b> mit einem H-Atom. Winkel ~109,5°.</li>
            <li><b>NH₃:</b> 3 sp³-Bindungspaare + 1 freies Paar → trigonal-pyramidal (Winkel ~107°).</li>
            <li><b>H₂O:</b> 2 sp³-Bindungspaare + 2 freie Paare → gewinkelt (Winkel ~104,5°).</li>
          </ul>
          <p style="font-size:11px; opacity:0.8;">Freie Paare nehmen mehr Platz ein → Winkel sinkt unter 109,5°.</p>
        </div>
      `
    },
    {
      title: "sp²-Hybridisierung & π-Bindung (Beispiel C₂H₄)",
      content: `
        <div style="font-size:13px; line-height:1.5;">
          <p>In Ethen (C₂H₄) hat Kohlenstoff 3 sp²-Orbitale (trigonal-planar, 120°) und ein reines p-Orbital senkrecht zur Ebene.</p>
          <ul>
            <li>Die sp²-Orbitale bilden alle <b>σ-Bindungen</b> (1 C–C + 2 C–H pro C-Atom).</li>
            <li>Die zwei reinen p-Orbitale der C-Atome überlappen lateral → <b>π-Bindung</b>.</li>
            <li>Doppelbindung = 1 σ + 1 π. Rotation um C=C ist blockiert (π-Bindung würde brechen).</li>
          </ul>
          <p>Weitere sp²-Beispiele: Benzol, Aldehyde/Ketone (C=O), Carbonsäuren (Carboxylgruppe).</p>
        </div>
      `
    },
    {
      title: "sp-Hybridisierung (Beispiel C₂H₂ & CO₂)",
      content: `
        <div style="font-size:13px; line-height:1.5;">
          <p>Ethin (Acetylen, C₂H₂): 2 sp-Hybridorbitale (linear, 180°) + 2 reine p-Orbitale (⊥ zueinander).</p>
          <ul>
            <li>1 σ-Bindung (sp–sp) + 2 π-Bindungen (aus den zwei p-Orbital-Paaren) = <b>Dreifachbindung</b>.</li>
            <li>Lineares Molekül, Bindungswinkel 180°.</li>
            <li><b>CO₂:</b> O=C=O; C ist sp-hybridisiert; zwei Doppelbindungen; linear → kein Gesamtdipol.</li>
          </ul>
        </div>
      `
    },
    {
      title: "Klausur-Rezept: Hybridisierung bestimmen",
      content: `
        <div style="font-size:13px; line-height:1.5;">
          <ol>
            <li>Lewis-Formel des Moleküls zeichnen.</li>
            <li>Am Zentralatom: σ-Bindungen + freie Elektronenpaare zählen → Summe = <b>σ-Domänen</b>.</li>
            <li>2 Domänen → sp (linear); 3 Domänen → sp² (trigonal-planar); 4 Domänen → sp³ (Tetraeder).</li>
            <li>π-Bindungen entstehen aus den nicht hybridisierten p-Orbitalen (Doppel-/Dreifachbindungen).</li>
          </ol>
          <p style="font-size:11px; opacity:0.8;">Merke: Doppelbindungen zählen für die Geometrie als <i>eine</i> σ-Domäne, liefern aber zusätzlich eine π-Bindung.</p>
        </div>
      `
    }
  ]
},

// ── NEU: VSEPR & Molekülgeometrie ───────────────────────────────────────────
{
  id: "vsepr",
  title: "VSEPR & Molekülgeometrie",
  tags: ["VSEPR", "Molekülgeometrie", "Lewis-Struktur", "Bindungswinkel", "freie Paare"],
  goals: [
    "Das VSEPR-Modell erklären und zur Vorhersage von Molekülgeometrien anwenden.",
    "Lewis-Strukturen einfacher Moleküle zeichnen (Valenzelektronen, Oktettregel).",
    "Geometrien (linear, trigonal-planar, tetraedrisch, pyramidal, gewinkelt) und typische Winkel sicher benennen."
  ],
  summary:
    "Das VSEPR-Modell (Valence Shell Electron Pair Repulsion) sagt die Geometrie von Molekülen anhand der Abstoßung der Elektronendomänen um das Zentralatom voraus. Freie Elektronenpaare stoßen stärker ab als Bindungspaare und verengen die Bindungswinkel. Lewis-Strukturen visualisieren Bindungen und freie Paare und sind die Grundlage für VSEPR.",
  keyPoints: [
    "VSEPR: Alle Elektronendomänen (bindend + frei) stoßen sich ab und ordnen sich maximal voneinander entfernt an.",
    "Lewis-Struktur: Strich = bindendes Elektronenpaar; Punkte = freies Paar; Oktettregel für Hauptgruppenelemente.",
    "2 Domänen → linear (180°); 3 → trigonal-planar (120°); 4 → Tetraeder (109,5°).",
    "Freie Paare verengen Winkel: NH₃ → trigonal-pyramidal (~107°); H₂O → gewinkelt (~104,5°).",
    "Doppel-/Dreifachbindungen zählen als eine Domäne (üben aber mehr Abstoßung aus als Einfachbindungen).",
    "Klausurrezept: Lewis-Formel → Domänen am Zentralatom zählen → Grundgeometrie bestimmen → freie Paare abziehen → Molekülgeometrie angeben."
  ],
  formulas: [],
  visual: `
    <pre style="font-size:10px; line-height:1.4;">
Domänen | Geom. (Domänen)   | Mol.-Geom.         | Winkel   | Bsp.
────────────────────────────────────────────────────────────────────
2 B     | linear            | linear             | 180°     | BeCl₂, CO₂
3 B     | trigonal-planar   | trigonal-planar    | 120°     | BF₃, SO₃
2B+1F   | trigonal-planar   | gewinkelt          | <120°    | SO₂, O₃
4 B     | Tetraeder         | Tetraeder          | 109,5°   | CH₄
3B+1F   | Tetraeder         | trig.-pyramidal    | ~107°    | NH₃
2B+2F   | Tetraeder         | gewinkelt          | ~104,5°  | H₂O
    </pre>
    <div style="font-size:11px; opacity:0.8;">B = Bindungsdomäne, F = freies Elektronenpaar</div>
  `,
  detailBlocks: [
    {
      title: "Lewis-Strukturen zeichnen – Kurzanleitung",
      content: `
        <div style="font-size:13px; line-height:1.5;">
          <ol>
            <li>Valenzelektronen aller Atome summieren (bei Ionen: Ladung berücksichtigen: Anion + e⁻, Kation − e⁻).</li>
            <li>Skelett aufstellen: weniger elektronegatives Atom ins Zentrum; Einfachbindungen einzeichnen (je 2 e⁻).</li>
            <li>Oktettregel: zunächst äußere Atome mit freien Paaren auffüllen, dann Zentralatom.</li>
            <li>Nicht genug Elektronen für Oktett am Zentrum? → Mehrfachbindung einführen (ein freies Paar von außen → Bindung).</li>
            <li>Formale Ladungen prüfen: Formal-Ladung = VE<sub>Atom</sub> − freie e⁻ − (Bindungs-e⁻)/2.</li>
          </ol>
          <p style="font-size:11px; opacity:0.8;">Ausnahmen: BF₃ (Sextett), PCl₅ (10 e⁻), SF₆ (12 e⁻) – expanded octet nur ab 3. Periode möglich.</p>
        </div>
      `
    },
    {
      title: "Beispiel: H₂O & NH₃ mit VSEPR",
      content: `
        <div style="font-size:13px; line-height:1.5;">
          <p><b>Wasser (H₂O):</b></p>
          <ul>
            <li>O: 6 Valenzelektronen; 2 Bindungen zu H → 2 freie Paare am O.</li>
            <li>4 Domänen → Tetraeder-Grundgeometrie; aber Geometrie nach Atomposition: <b>gewinkelt</b>.</li>
            <li>Winkel ~104,5° (2 freie Paare stoßen stark ab).</li>
          </ul>
          <p><b>Ammoniak (NH₃):</b></p>
          <ul>
            <li>N: 5 VE; 3 N–H-Bindungen; 1 freies Paar.</li>
            <li>4 Domänen → Tetraeder → nach Atomen: <b>trigonal-pyramidal</b>, Winkel ~107°.</li>
          </ul>
        </div>
      `
    },
    {
      title: "Klausur-Klassiker: SO₂ & BF₃",
      content: `
        <div style="font-size:13px; line-height:1.5;">
          <p><b>SO₂ (Schwefeldioxid):</b></p>
          <ul>
            <li>S: 6 VE; je eine Bindung zu beiden O-Atomen + 1 freies Paar am S. (Mit Resonanzstrukturen: eine Einfach- und eine Doppelbindung oder zwei 1,5-Bindungen.)</li>
            <li>3 Domänen → trigonal-planar → 1 Domäne ist freies Paar → <b>gewinkelt</b>, Winkel ~119°.</li>
          </ul>
          <p><b>BF₃ (Bortrifluorid):</b></p>
          <ul>
            <li>B: 3 VE; 3 B–F-Bindungen; kein freies Paar am B → Elektron-Sextett (Ausnahme!).</li>
            <li>3 Domänen → <b>trigonal-planar</b>, Winkel 120°.</li>
            <li>BF₃ ist Lewis-Säure (akzeptiert freie Paare).</li>
          </ul>
        </div>
      `
    }
  ]
},

// ── NEU: Bindungstypen & Intermolekulare Kräfte ─────────────────────────────
{
  id: "bindungstypen-krafte",
  title: "Chemische Bindungen & Intermolekulare Kräfte",
  tags: ["Ionenbindung", "Kovalenz", "Wasserstoffbrücke", "van-der-Waals", "Elektronegativität", "Siedepunkt"],
  goals: [
    "Ionenbindung, kovalente Bindung (polar/unpolar) und Metallbindung unterscheiden.",
    "Wasserstoffbrückenbindungen, Dipol-Dipol-Kräfte und London-Dispersion erklären.",
    "Den Einfluss intermolekularer Kräfte auf Siedepunkt und Löslichkeit begründen.",
    "ΔEN-Grenzen für Bindungstypen anwenden."
  ],
  summary:
    "Chemische Bindungen entstehen durch Wechselwirkung von Valenzelektronen: Ionenbindung (ΔEN > 1,7; Elektronenübertragung), kovalente Bindung (ΔEN < 1,7; Elektronenpaarteilung, polar oder unpolar), Metallbindung (delokalisiertes Elektronengas). Zwischen Molekülen wirken schwächere intermolekulare Kräfte: London-Dispersion (immer), Dipol-Dipol (polare Moleküle) und Wasserstoffbrücken (N/O/F–H).",
  keyPoints: [
    "Ionenbindung: ΔEN > 1,7 → Elektronenübertragung → Kation + Anion; Ionengitter; hohe Schmelzpunkte; Beispiele: NaCl, MgO.",
    "Kovalente Bindung: ΔEN < 1,7 → gemeinsames Elektronenpaar; polar (ΔEN 0,4–1,7, z. B. HCl, H₂O) oder unpolar (ΔEN < 0,4, z. B. H₂, CH₄).",
    "Metallbindung: delokalisierte Elektronen ('Elektronengas') zwischen Metallkationen; elektrische und Wärmeleitfähigkeit.",
    "London-Dispersion: temporäre Dipolmomente → schwächste Kraft; steigt mit Molekülmasse; wirkt zwischen ALLEN Teilchen.",
    "Dipol-Dipol: zwischen Molekülen mit permanentem Dipol; stärker als London.",
    "Wasserstoffbrücken (H-Brücken): X–H···Y (X, Y = N, O, F); stärkste intermolekulare Kraft (~20–40 kJ/mol); erklärt hohen Siedepunkt von H₂O, HF, NH₃.",
    "Siedepunkt-Trend: H-Brücken >> Dipol-Dipol > London; mehr/stärkere Kräfte → höherer Siedepunkt."
  ],
  formulas: [
    "ΔEN > 1,7 → Ionenbindung; 0,4–1,7 → polare kovalente Bindung; < 0,4 → unpolare kovalente Bindung",
    "EN (Pauling): F = 4,0 > O = 3,5 > N = 3,0 > Cl = 3,2 > C = 2,5 > H = 2,2 > Na = 0,9"
  ],
  visual: `
    <pre style="font-size:10px; line-height:1.4;">
Bindungstyp        | ΔEN      | Beispiel         | Besonderheit
────────────────────────────────────────────────────────────────
Unpolare Kovalen.  | ~0       | H₂, Cl₂, CH₄    | symmetrisch, kein Dipol
Polare Kovalen.    | 0,4–1,7  | HCl, H₂O, NH₃   | Dipol, δ+/δ−
Ionenbindung       | >1,7     | NaCl, MgO, KBr   | Ionengitter
Metallbindung      | –        | Na, Fe, Cu        | Elektronengas

Intermolekulare Kräfte (schwächste → stärkste):
  London < Dipol-Dipol < Wasserstoffbrücken
    </pre>
  `,
  detailBlocks: [
    {
      title: "Elektronegativität & Bindungspolarität",
      content: `
        <div style="font-size:13px; line-height:1.5;">
          <p>Die <b>Elektronegativität</b> (EN) misst, wie stark ein Atom Bindungselektronen anzieht (Pauling-Skala: F = 4,0 am höchsten).</p>
          <ul>
            <li>Je größer ΔEN, desto stärker zieht das elektronegativere Atom die Elektronen an → partiell negative Ladung (δ−), das andere wird δ+.</li>
            <li>Polare Bindungen können sich aufheben: CO₂ (linear) → kein Gesamtdipol. H₂O (gewinkelt) → hat Gesamtdipol.</li>
          </ul>
          <p><b>Merke:</b> Für das Gesamtdipolmoment des Moleküls zählt die <i>Geometrie</i>, nicht nur die einzelnen Bindungen!</p>
        </div>
      `
    },
    {
      title: "Wasserstoffbrücken – Warum Wasser so besonders ist",
      content: `
        <div style="font-size:13px; line-height:1.5;">
          <p>H-Brücke: H kovalent an F, O oder N gebunden → H trägt δ+-Ladung → wechselwirkt mit freiem Elektronenpaar eines Nachbarmoleküls:</p>
          <p style="text-align:center;"><b>O–H ····· O</b></p>
          <ul>
            <li>Stärker als London und Dipol-Dipol (~20–40 kJ/mol vs. ~1–5 kJ/mol).</li>
            <li>Erklärt den hohen Siedepunkt von Wasser (100 °C statt ca. −80 °C ohne H-Brücken).</li>
            <li>Wichtig in Biochemie: DNA-Basenpaarung (A–T: 2 H-Brücken, G–C: 3 H-Brücken).</li>
            <li>Proteinsekundärstruktur (α-Helix, β-Faltblatt) durch intramolekulare H-Brücken stabilisiert.</li>
          </ul>
        </div>
      `
    },
    {
      title: "Löslichkeit & Siedepunkt – Klausurrelevanz",
      content: `
        <div style="font-size:13px; line-height:1.5;">
          <p><b>„Gleiches löst Gleiches" (similia similibus solvuntur):</b></p>
          <ul>
            <li>Polares Lösungsmittel (H₂O) löst polare und ionische Verbindungen gut.</li>
            <li>Unpolares LM (Hexan, Chloroform) löst unpolare Verbindungen.</li>
            <li>NaCl löst sich in H₂O: Hydratationsenergie kompensiert Gitterenergie.</li>
            <li>Benzol löst sich nicht in H₂O: keine polaren Wechselwirkungen möglich.</li>
          </ul>
          <p><b>Siedepunkt:</b></p>
          <ul>
            <li>Alkane (nur London): Siedepunkt steigt mit Kettenlänge/Molekülmasse.</li>
            <li>Alkohole (H-Brücken): deutlich höhere Siedepunkte als Alkane gleicher Molmasse.</li>
          </ul>
        </div>
      `
    }
  ]
},

  ] // schließt topics-Array
},    // schließt Subject "Allgemeine Chemie"



{
  id: "biochemie",
  name: "Biochemie",
  description:
    "Biomoleküle, Enzyme, Puffer/pH in biologischen Systemen, Energie (ATP) & Grundlagen des Stoffwechsels – kompakt für Klausuren.",
  topics: [
    {
      id: "bio-ueberblick",
      title: "Biochemie: Überblick & Grundideen",
      tags: ["Biomoleküle", "Enzyme", "Stoffwechsel", "ATP"],
      goals: [
        "Die vier Biomolekülklassen (KH, Lipide, Proteine, Nukleinsäuren) einordnen können.",
        "Grundidee von Enzymen (Katalyse, Spezifität) erklären können.",
        "ATP als Energiewährung verstehen (qualitativ)."
      ],
      summary:
        "Biochemie beschreibt die Chemie des Lebens: Biomoleküle, Enzymreaktionen und Stoffwechselwege. Zentral ist, wie Zellen Energie speichern/übertragen (ATP) und wie Enzyme Reaktionen extrem beschleunigen und regulieren.",
      keyPoints: [
        "Biomoleküle: Kohlenhydrate, Lipide, Proteine, Nukleinsäuren.",
        "Enzyme = Biokatalysatoren (senken Aktivierungsenergie, werden nicht verbraucht).",
        "Spezifität: Substrat passt ins aktive Zentrum.",
        "ATP koppelt Energie-freisetzende und energieverbrauchende Prozesse."
      ],
      formulas: [],
      visual: `
        <div style="font-size:11px;opacity:0.9;">
          Merksatz: <b>Struktur → Funktion</b> (Biomoleküle) und <b>Enzyme beschleunigen</b> (Katalyse).
        </div>
      `,
      detailBlocks: [
        {
          title: "Die 4 Biomolekülklassen",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <ul>
                <li><b>Kohlenhydrate</b>: Energie & Struktur (z. B. Glucose, Stärke).</li>
                <li><b>Lipide</b>: Membranen & Energiespeicher (z. B. Fettsäuren, Phospholipide).</li>
                <li><b>Proteine</b>: Enzyme, Transport, Struktur (Aminosäuren als Bausteine).</li>
                <li><b>Nukleinsäuren</b>: Information (DNA/RNA), Nukleotide als Bausteine.</li>
              </ul>
            </div>
          `
        }
      ]
    },

    {
      id: "bio-ph-puffer",
      title: "pH & Puffer in biologischen Systemen",
      tags: ["pH", "Puffer", "Henderson-Hasselbalch"],
      goals: [
        "pH sicher berechnen und interpretieren.",
        "Grundprinzip eines Puffers erklären.",
        "Henderson-Hasselbalch anwenden (falls bei euch verlangt)."
      ],
      summary:
        "Puffer halten den pH-Wert stabil, weil sie H+ abfangen oder abgeben können (schwache Säure/Base + konjugiertes Paar). Biologische Systeme sind stark pH-abhängig (Enzymaktivität!).",
      keyPoints: [
        "pH = −log10([H+]).",
        "Puffer bestehen aus schwacher Säure HA und konjugierter Base A−.",
        "Bei Mischung gilt oft: pH = pKs + log10([A−]/[HA]) (Henderson-Hasselbalch)."
      ],
      formulas: [
        "pH = −log10([H+])",
        "pOH = −log10([OH−])",
        "pH + pOH = 14 (bei 25 °C)",
        "Henderson-Hasselbalch: pH = pKs + log10([A−]/[HA])"
      ],
      visual: `
        <pre style="font-size:11px; line-height:1.4; background:rgba(0,0,0,0.15); padding:8px; border-radius:6px;">
Pufferpaar:
  HA  ⇌  H+ + A−

Wenn [A−] = [HA]  →  pH = pKs
        </pre>
      `,
      detailBlocks: [
        {
          title: "Klausurbeispiel (kurz): pH aus Henderson-Hasselbalch",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p>Gegeben: pKs = 4,76, Verhältnis [A−]/[HA] = 10.</p>
              <ol>
                <li>pH = pKs + log10([A−]/[HA])</li>
                <li>pH = 4,76 + log10(10) = 4,76 + 1 = <b>5,76</b></li>
              </ol>
            </div>
          `
        }
      ]
    },

    {
      id: "bio-enzyme",
      title: "Enzyme: Grundprinzip, Spezifität, Einflussfaktoren",
      tags: ["Enzyme", "Aktivierungsenergie", "Temperatur", "pH"],
      goals: [
        "Erklären können, was Enzyme machen (Katalyse) und warum sie so wichtig sind.",
        "Typische Einflussfaktoren (Temperatur, pH, Substrat) nennen können.",
        "Klausurtyp: Graphen qualitativ deuten (Aktivität vs. Temperatur/pH)."
      ],
      summary:
        "Enzyme sind Proteine (meist), die Reaktionen beschleunigen, indem sie die Aktivierungsenergie senken. Sie sind hochspezifisch und arbeiten nur in bestimmten pH-/Temperaturbereichen optimal.",
      keyPoints: [
        "Enzyme senken die Aktivierungsenergie, verändern aber nicht die Lage des Gleichgewichts.",
        "Aktives Zentrum bindet Substrat → Enzym-Substrat-Komplex.",
        "Temperatur zu hoch → Denaturierung; falscher pH → Aktivität sinkt."
      ],
      formulas: [],
      visual: `
        <div style="font-size:11px;opacity:0.9;">
          Klausurklassiker: „Warum sinkt Aktivität bei hohen Temperaturen?“ → <b>Denaturierung</b>.
        </div>
      `,
      detailBlocks: [
        {
          title: "Klausurfrage (typisch): Was bewirkt ein Enzym?",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <ul>
                <li>Senkt <b>Aktivierungsenergie</b> → Reaktion läuft schneller.</li>
                <li>Wird nicht verbraucht (kommt am Ende wieder raus).</li>
                <li>Verändert nicht die <b>Gleichgewichtslage</b>, nur die Geschwindigkeit.</li>
              </ul>
            </div>
          `
        }
      ]
    },

    {
      id: "bio-aminosaeuren-basics",
      title: "Aminosäuren: Struktur & Eigenschaften",
      tags: ["Aminosäuren", "α-Aminosäuren", "Zwitterion", "pI", "Klassifikation"],
      goals: [
        "Allgemeine Struktur einer α-Aminosäure zeichnen und beschriften.",
        "Erklären, was ein Zwitterion ist und bei welchem pH es vorliegt.",
        "Aminosäuren nach Ladung/Polarität der Seitenkette klassifizieren."
      ],
      summary: "Alle 20 proteinogenen Aminosäuren haben eine gemeinsame Grundstruktur: ein zentrales α-C-Atom mit einer Aminogruppe (–NH₂), einer Carboxylgruppe (–COOH), einem H-Atom und einer variablen Seitenkette (Rest R). Am isoelektrischen Punkt (pI) liegt die Aminosäure als Zwitterion vor (–NH₃⁺ und –COO⁻, Nettoladung = 0). Die Seitenketten bestimmen Polarität, Ladung und Reaktivität.",
      keyPoints: [
        "Allgemeine Formel: H₂N–CHR–COOH; alle proteinogenen AS sind L-konfiguriert.",
        "Zwitterion bei pH = pI: –NH₃⁺ und –COO⁻, Nettoladung = 0.",
        "pI = (pKs1 + pKs2) / 2 (für einfache AS mit nur zwei ionisierbaren Gruppen).",
        "Klassifikation der Seitenkette: unpolar/aliphatisch, aromatisch, polar neutral, sauer, basisch.",
        "Essentielle AS: können nicht selbst synthetisiert werden → Nahrungsaufnahme nötig.",
        "pKs-Werte: α-Carboxyl ≈ 2,0; α-Amino ≈ 9,0; Seitenketten variabel."
      ],
      formulas: [
        "pI = (pKs1 + pKs2) / 2",
        "Nettoladung bei pH < pI: positiv; bei pH > pI: negativ"
      ],
      visual: `
        <div style="font-size:12px;">
          <b>Allgemeine Struktur einer α-Aminosäure:</b>
          <pre style="font-size:12px; line-height:1.5; background:rgba(0,0,0,0.18); padding:8px; border-radius:6px; margin-top:6px;">
    COOH
     |
H₂N–Cα–H
     |
     R   (Seitenkette, variabel)
          </pre>
          <div style="margin-top:6px; font-size:11px; opacity:0.8;">Zwitterion (pH = pI): ⁻OOC–CHR–NH₃⁺</div>
        </div>
      `,
      detailBlocks: [
        {
          title: "Klassifikation der Seitenketten",
          content: `
            <div style="font-size:13px; line-height:1.6;">
              <ul>
                <li><b>Unpolar/aliphatisch:</b> Gly, Ala, Val, Leu, Ile, Pro, Met – hydrophob, bevorzugt im Proteininneren.</li>
                <li><b>Aromatisch:</b> Phe, Tyr, Trp – hydrophob, π-Stapelwechselwirkungen, UV-Absorption.</li>
                <li><b>Polar neutral:</b> Ser, Thr, Cys, Asn, Gln – H-Brücken möglich.</li>
                <li><b>Sauer (negativ, pH 7):</b> Asp (D), Glu (E) – pKs ≈ 3,5–4,1.</li>
                <li><b>Basisch (positiv, pH 7):</b> Lys (K), Arg (R), His (H) – pKs ≈ 6–12,5.</li>
              </ul>
            </div>
          `
        },
        {
          title: "Zwitterion & pI – Klausurklassiker",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p><b>Frage:</b> Warum wandert Glycin bei pH ≈ 6 im elektrischen Feld nicht?</p>
              <p><b>Antwort:</b> Beim isoelektrischen Punkt ist die Nettoladung 0 → keine Wanderung.</p>
              <p><code>pI(Gly) = (2,34 + 9,60) / 2 = 5,97</code></p>
              <p>Bei pH &lt; pI: positiv geladen → wandert zur Kathode.<br>
              Bei pH &gt; pI: negativ geladen → wandert zur Anode.</p>
            </div>
          `
        }
      ]
    },

    {
      id: "bio-aminosaeuren-20",
      title: "Die 20 proteinogenen Aminosäuren",
      tags: ["20 Aminosäuren", "Abkürzungen", "Essentiell", "Besondere AS"],
      goals: [
        "Die 20 AS nach Ein- und Dreibuchstaben-Code kennen.",
        "Besondere Aminosäuren nennen: Pro (starr), Cys (Disulfid), Gly (kein Chiralitätszentrum), His (aktives Zentrum).",
        "Essentielle Aminosäuren aufzählen."
      ],
      summary: "Die 20 proteinogenen Aminosäuren unterscheiden sich nur in ihrer Seitenkette R. Sie werden in Ein- und Dreibuchstaben-Code abgekürzt. Besondere Rollen: Cystein (Disulfidbrücken), Prolin (starrer Ring, unterbricht Helices), Glycin (kleinste AS, kein Chiralitätszentrum), Histidin (aktives Zentrum von Enzymen, pKs ≈ 6).",
      keyPoints: [
        "Essentiell (9): His, Ile, Leu, Lys, Met, Phe, Thr, Trp, Val – müssen mit der Nahrung aufgenommen werden.",
        "Glycin (G): einzige AS ohne Chiralitätszentrum (R = H).",
        "Prolin (P): sekundäres Amin, Pyrrolidinring → unterbricht α-Helices, häufig in Kollagen.",
        "Cystein (C): –SH Gruppe → Disulfidbrücken (–S–S–) durch Oxidation.",
        "Histidin (H): pKs ≈ 6 → häufig Protonenüberträger im aktiven Zentrum von Enzymen.",
        "Tyr (Y) & Trp (W): UV-Absorption bei 280 nm → Proteinkonzentrationsbestimmung."
      ],
      formulas: [],
      visual: `
        <pre style="font-size:10px; line-height:1.4; background:rgba(0,0,0,0.18); padding:8px; border-radius:6px; overflow-x:auto;">
Unpolar:    Gly(G) Ala(A) Val(V) Leu(L) Ile(I) Pro(P) Met(M)
Aromatisch: Phe(F) Tyr(Y) Trp(W)
Polar:      Ser(S) Thr(T) Cys(C) Asn(N) Gln(Q)
Sauer:      Asp(D) Glu(E)
Basisch:    Lys(K) Arg(R) His(H)
        </pre>
      `,
      detailBlocks: [
        {
          title: "Essentielle Aminosäuren – Merkhilfe",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p>Eselsbrücke: <b>„PVT TIM HaLL"</b></p>
              <ul>
                <li>P – Phenylalanin &nbsp; V – Valin &nbsp; T – Threonin</li>
                <li>T – Tryptophan &nbsp; I – Isoleucin &nbsp; M – Methionin</li>
                <li>H – Histidin &nbsp; L – Leucin &nbsp; L – Lysin</li>
              </ul>
              <p style="font-size:11px; opacity:0.7;">Semi-essentiell (bei Kindern/best. Erkrankungen): Arg, Cys, Tyr, Gln, Pro</p>
            </div>
          `
        }
      ]
    },

    {
      id: "bio-peptide",
      title: "Peptidbindung & Peptide",
      tags: ["Peptid", "Peptidbindung", "Kondensation", "N-Terminus", "C-Terminus"],
      goals: [
        "Entstehung der Peptidbindung (Kondensationsreaktion) erklären und zeichnen.",
        "Eigenschaften der Peptidbindung beschreiben (partieller Doppelbindungscharakter, Planarität).",
        "Di-, Tri-, Oligo- und Polypeptid unterscheiden."
      ],
      summary: "Aminosäuren verknüpfen sich über Peptidbindungen (–CO–NH–), die durch Kondensation (Abspaltung von H₂O) zwischen –COOH einer AS und –NH₂ der nächsten entstehen. Die Peptidbindung hat partiellen Doppelbindungscharakter → planar und rigide, keine freie Rotation. Ketten aus 2–10 AS = Oligopeptide; viele AS = Polypeptide/Proteine.",
      keyPoints: [
        "Peptidbindung: –C(=O)–NH– durch Kondensation gebildet, Wasser abgespalten.",
        "Partieller Doppelbindungscharakter (Mesomerie) → Bindung ist planar, kürzer als C–N-Einfachbindung.",
        "Leserichtung: N-Terminus (freie –NH₂) → C-Terminus (freie –COOH).",
        "Dipeptid (2 AS), Tripeptid (3), Oligopeptid (2–10), Polypeptid (> 10, oft > 50).",
        "Anzahl Peptidbindungen = n − 1 (bei n Aminosäuren).",
        "Biologisch aktive Peptide: Glutathion (γ-Glu-Cys-Gly), Insulin (51 AS), Oxytocin (9 AS), Enkephaline."
      ],
      formulas: [
        "R₁–COOH + H₂N–R₂ → R₁–CO–NH–R₂ + H₂O",
        "Anzahl Peptidbindungen = n − 1"
      ],
      visual: `
        <pre style="font-size:11px; line-height:1.5; background:rgba(0,0,0,0.18); padding:8px; border-radius:6px;">
H₂N–CH(R₁)–C(=O)–NH–CH(R₂)–COOH
              ↑
        Peptidbindung
        (planar, partieller Doppelbindungscharakter)

N-Terminus                    C-Terminus
        </pre>
      `,
      detailBlocks: [
        {
          title: "Biologisch wichtige Peptide",
          content: `
            <div style="font-size:13px; line-height:1.6;">
              <ul>
                <li><b>Glutathion</b> (γ-Glu-Cys-Gly): zelluläres Antioxidans, schützt vor oxidativem Stress.</li>
                <li><b>Insulin</b>: 51 AS, 2 Ketten (A+B) durch Disulfidbrücken verbunden → reguliert Blutzucker.</li>
                <li><b>Oxytocin</b>: 9 AS → Geburtshormon, Bindungshormon, Cyclopeptid (Disulfidbrücke).</li>
                <li><b>Vasopressin (ADH)</b>: 9 AS → Wasserhaushalt der Niere.</li>
                <li><b>Enkephaline</b>: 5 AS, körpereigene Opioide (Schmerzmodulation).</li>
              </ul>
            </div>
          `
        }
      ]
    },

    {
      id: "bio-protein-struktur",
      title: "Proteinstruktur: Primär bis Quartär",
      tags: ["Primärstruktur", "Sekundärstruktur", "α-Helix", "β-Faltblatt", "Tertiärstruktur", "Quartärstruktur"],
      goals: [
        "Die 4 Strukturebenen von Proteinen benennen und erklären.",
        "α-Helix und β-Faltblatt beschreiben (Stabilisierung, H-Brücken).",
        "Tertiärstruktur-stabilisierende Kräfte aufzählen; Denaturierung erklären."
      ],
      summary: "Proteine haben 4 Strukturebenen: (1) Primärstruktur = AS-Sequenz (kovalent); (2) Sekundärstruktur = lokale Faltung durch H-Brücken (α-Helix, β-Faltblatt); (3) Tertiärstruktur = 3D-Gesamtstruktur; (4) Quartärstruktur = Anordnung mehrerer Polypeptidketten. Struktur bestimmt Funktion.",
      keyPoints: [
        "Primärstruktur: Aminosäuresequenz, kovalente Peptidbindungen, kodiert durch Gene.",
        "Sekundärstruktur: H-Brücken zwischen C=O und N–H der Hauptkette (Backbone).",
        "α-Helix: rechtsgängig, 3,6 AS/Windung, H-Brücken zwischen AS i und i+4.",
        "β-Faltblatt: parallele (schwächer) oder antiparallele (stärker) Stränge, H-Brücken zwischen Strängen.",
        "Tertiärstruktur: Disulfidbrücken (kovalent!), hydrophobe WW, ionische WW, H-Brücken, Van-der-Waals.",
        "Quartärstruktur: z. B. Hämoglobin (2α + 2β), Antikörper (IgG: 4 Ketten).",
        "Denaturierung: Verlust der 3D-Struktur (2°–4°) durch Hitze, pH-Extremwerte, Harnstoff, SDS – Primärstruktur bleibt."
      ],
      formulas: [],
      visual: `
        <div style="font-size:12px; line-height:1.6;">
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px; margin-top:4px;">
            <div style="background:rgba(123,140,255,0.10); padding:8px; border-radius:8px;">
              <b>1° Primär</b><br>AS-Sequenz<br><small>kovalente Bindungen</small>
            </div>
            <div style="background:rgba(123,140,255,0.16); padding:8px; border-radius:8px;">
              <b>2° Sekundär</b><br>α-Helix / β-Faltblatt<br><small>H-Brücken (Backbone)</small>
            </div>
            <div style="background:rgba(123,140,255,0.22); padding:8px; border-radius:8px;">
              <b>3° Tertiär</b><br>3D-Gesamtfaltung<br><small>hydrophob, Disulfid, ionisch</small>
            </div>
            <div style="background:rgba(123,140,255,0.28); padding:8px; border-radius:8px;">
              <b>4° Quartär</b><br>Untereinheiten<br><small>z. B. Hämoglobin</small>
            </div>
          </div>
        </div>
      `,
      detailBlocks: [
        {
          title: "Denaturierung – Klausurklassiker",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p><b>Denaturierung</b> = Verlust der nativen 3D-Struktur (2°, 3°, 4°); Primärstruktur (Sequenz) bleibt intakt.</p>
              <p><b>Ursachen:</b> Hitze, extremer pH, Harnstoff/Guanidiniumchlorid, Detergenzien (SDS), organische Lösungsmittel, mechanische Kräfte.</p>
              <p><b>Folge:</b> Verlust der biologischen Aktivität (z. B. Enzym inaktiv, Protein unlöslich).</p>
              <p><b>Oft reversibel</b> → Renaturierung möglich (Anfinsen-Experiment mit Ribonuklease A).</p>
            </div>
          `
        },
        {
          title: "α-Helix vs. β-Faltblatt",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <table style="border-collapse:collapse; width:100%; font-size:12px;">
                <tr style="border-bottom:1px solid rgba(255,255,255,0.2);">
                  <th style="text-align:left; padding:4px;">Merkmal</th>
                  <th style="padding:4px;">α-Helix</th>
                  <th style="padding:4px;">β-Faltblatt</th>
                </tr>
                <tr><td style="padding:4px;">H-Brücken</td><td style="padding:4px;">i und i+4 (intrachain)</td><td style="padding:4px;">zwischen Strängen (interchain)</td></tr>
                <tr><td style="padding:4px;">Form</td><td style="padding:4px;">rechtsgängige Spirale</td><td style="padding:4px;">parallel / antiparallel</td></tr>
                <tr><td style="padding:4px;">Unterbrochen durch</td><td style="padding:4px;">Pro, Gly</td><td style="padding:4px;">–</td></tr>
                <tr><td style="padding:4px;">Beispiel</td><td style="padding:4px;">Myoglobin, Kollagen</td><td style="padding:4px;">Seidenfibroin, β-Keratin</td></tr>
              </table>
            </div>
          `
        }
      ]
    },

    {
      id: "bio-enzymkinetik",
      title: "Enzymkinetik: Michaelis-Menten",
      tags: ["Michaelis-Menten", "Km", "Vmax", "kcat", "Sättigungskurve", "Lineweaver-Burk"],
      goals: [
        "Michaelis-Menten-Gleichung aufschreiben und interpretieren.",
        "Km als Maß für Substrataffinität und Vmax als Maximalgeschwindigkeit erklären.",
        "Lineweaver-Burk-Plot (Doppelreziprok) beschreiben und Achsenabschnitte deuten."
      ],
      summary: "Die Michaelis-Menten-Kinetik beschreibt die Abhängigkeit der Reaktionsgeschwindigkeit v von der Substratkonzentration [S]. Km ist die [S], bei der v = Vmax/2 → kleines Km = hohe Affinität. Vmax bei vollständig gesättigtem Enzym. Die Sättigungskurve ist hyperbolisch.",
      keyPoints: [
        "Michaelis-Menten: v = (Vmax · [S]) / (Km + [S]).",
        "Km = [S] bei v = Vmax/2; kleines Km → hohe Affinität zum Substrat.",
        "Vmax = maximale Reaktionsgeschwindigkeit (alle aktiven Zentren besetzt).",
        "kcat (Wechselzahl) = Vmax / [E]total = Umsätze pro Enzym pro Sekunde.",
        "Katalytische Effizienz: kcat / Km (je größer, desto effizienter).",
        "Lineweaver-Burk: 1/v gegen 1/[S] → Gerade; y-Achse = 1/Vmax; x-Achse = –1/Km."
      ],
      formulas: [
        "v = (Vmax · [S]) / (Km + [S])",
        "bei [S] = Km → v = Vmax / 2",
        "kcat = Vmax / [E]total",
        "Lineweaver-Burk: 1/v = (Km/Vmax)·(1/[S]) + 1/Vmax"
      ],
      visual: `
        <div style="font-size:11px; line-height:1.4; background:rgba(0,0,0,0.18); padding:8px; border-radius:6px; font-family:monospace;">
v |
  | Vmax ·····················
  |              ____________
  | Vmax/2 ····/
  |           / Km
  |__________/_________________→ [S]
  </div>
  <div style="font-size:10px; opacity:0.7; margin-top:4px;">Hyperbolische Sättigungskurve (Michaelis-Menten)</div>
      `,
      detailBlocks: [
        {
          title: "Lineweaver-Burk-Plot erklärt",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p>Durch Auftragung von <b>1/v gegen 1/[S]</b> (Doppelreziprok) erhält man eine Gerade:</p>
              <ul>
                <li>Steigung = Km / Vmax</li>
                <li>y-Achsenabschnitt = 1/Vmax → Vmax ablesen</li>
                <li>x-Achsenabschnitt = –1/Km → Km ablesen</li>
              </ul>
              <p>Vorteil: Inhibitionstypen können an der Verschiebung der Geraden erkannt werden.</p>
            </div>
          `
        }
      ]
    },

    {
      id: "bio-enzym-inhibition",
      title: "Enzyminhibition: Typen & Mechanismen",
      tags: ["Inhibition", "kompetitiv", "unkompetitiv", "nichtkompetitiv", "allosterisch", "Km", "Vmax"],
      goals: [
        "Kompetitive, unkompetitive und nichtkompetitive Inhibition unterscheiden.",
        "Effekte auf Km und Vmax für jeden Typ angeben.",
        "Allosterische Regulation und Feedback-Inhibition erklären."
      ],
      summary: "Enzyminhibitoren hemmen die Enzymaktivität. Kompetitiv: Inhibitor konkurriert mit Substrat → Km↑, Vmax gleich (überwindbar durch ↑[S]). Unkompetitiv: bindet nur ES-Komplex → Km↓, Vmax↓. Nichtkompetitiv: bindet unabhängig von S → Vmax↓, Km gleich.",
      keyPoints: [
        "Kompetitiv: Km↑, Vmax unverändert; bei ↑[S] überwindbar; Lineweaver-Burk: Geraden schneiden y-Achse.",
        "Nichtkompetitiv: Vmax↓, Km unverändert; nicht überwindbar; Geraden schneiden x-Achse.",
        "Unkompetitiv: Km↓, Vmax↓ (im gleichen Maß); parallele Geraden im Lineweaver-Burk.",
        "Irreversible Inhibitoren: kovalente Bindung (z. B. Aspirin → COX-Acetylierung).",
        "Allosterische Regulation: Effektormolekül bindet an anderer Stelle → Konformationsänderung.",
        "Feedback-Inhibition: Endprodukt hemmt erstes Enzym der Biosynthesekette (z. B. Ile hemmt Threonin-Deaminase)."
      ],
      formulas: [
        "Kompetitiv: v = Vmax·[S] / (α·Km + [S]);  α = 1 + [I]/Ki",
        "Nichtkompetitiv: v = (Vmax/α)·[S] / (Km + [S])",
        "Unkompetitiv: v = (Vmax/α')·[S] / (Km/α' + [S])"
      ],
      visual: `
        <div style="font-size:11px;">
          <table style="border-collapse:collapse; width:100%; font-size:11px; background:rgba(0,0,0,0.12); border-radius:6px; overflow:hidden;">
            <tr style="border-bottom:1px solid rgba(255,255,255,0.15); background:rgba(255,255,255,0.06);">
              <th style="text-align:left; padding:6px;">Typ</th>
              <th style="padding:6px;">Km</th>
              <th style="padding:6px;">Vmax</th>
              <th style="padding:6px;">überwindbar?</th>
            </tr>
            <tr style="border-bottom:1px solid rgba(255,255,255,0.07);">
              <td style="padding:6px;">Kompetitiv</td>
              <td style="padding:6px; text-align:center;">↑</td>
              <td style="padding:6px; text-align:center;">= </td>
              <td style="padding:6px; text-align:center;">Ja</td>
            </tr>
            <tr style="border-bottom:1px solid rgba(255,255,255,0.07);">
              <td style="padding:6px;">Nichtkompetitiv</td>
              <td style="padding:6px; text-align:center;">=</td>
              <td style="padding:6px; text-align:center;">↓</td>
              <td style="padding:6px; text-align:center;">Nein</td>
            </tr>
            <tr>
              <td style="padding:6px;">Unkompetitiv</td>
              <td style="padding:6px; text-align:center;">↓</td>
              <td style="padding:6px; text-align:center;">↓</td>
              <td style="padding:6px; text-align:center;">Nein</td>
            </tr>
          </table>
        </div>
      `,
      detailBlocks: [
        {
          title: "Medizinisch wichtige Inhibitoren",
          content: `
            <div style="font-size:13px; line-height:1.6;">
              <ul>
                <li><b>Aspirin</b>: irreversible Hemmung von COX-1/COX-2 (Acetylierung der Ser-OH) → weniger Prostaglandine.</li>
                <li><b>Methotrexat</b>: kompetitiver Hemmer der Dihydrofolatreduktase → Krebstherapie.</li>
                <li><b>Statine</b> (Lovastatin, Atorvastatin): kompetitive Hemmer der HMG-CoA-Reduktase → Cholesterinsenkung.</li>
                <li><b>Penicillin</b>: irreversibler Hemmer der Transpeptidase → Bakterienzellwandsynthese blockiert.</li>
                <li><b>Neostigmin</b>: reversibler Acetylcholinesterase-Hemmer → verlängert Acetylcholinwirkung.</li>
              </ul>
            </div>
          `
        }
      ]
    },

    {
      id: "bio-kohlenhydrate",
      title: "Kohlenhydrate: Mono-, Di-, Polysaccharide",
      tags: ["Glucose", "Fructose", "Galactose", "Saccharose", "Stärke", "Glykogen", "Anomere", "Glykosidbindung"],
      goals: [
        "Monosaccharide (Glucose, Fructose, Galactose) unterscheiden und klassifizieren.",
        "Glykosidbindung erklären, α- und β-Anomere benennen.",
        "Wichtige Di- und Polysaccharide nennen und Bindungstypen zuordnen."
      ],
      summary: "Kohlenhydrate (Monosaccharide: CₙH₂ₙOₙ) sind Aldosen oder Ketosen. Glucose ist das zentrale Energiemolekül. In wässriger Lösung überwiegt die Ringform (Haworth-Projektion, Pyranose). Di- und Polysaccharide entstehen durch glykosidische Bindungen (Kondensation, –H₂O).",
      keyPoints: [
        "Monosaccharide: Glucose (Aldohexose, C6), Fructose (Ketohexose, C6), Galactose (C6), Ribose (Aldopentose, C5).",
        "Anomere: α-Glucose (OH an C1 axial/unten) vs. β-Glucose (OH an C1 äquatorial/oben).",
        "Glykosidbindung: zwischen anomerer OH-Gruppe (C1) und OH einer anderen Einheit → Kondensation.",
        "Saccharose: Glucose α1↔2β Fructose → kein reduzierendes Ende!",
        "Lactose: Galactose β1→4 Glucose → reduzierend (Milchzucker, Laktoseintoleranz).",
        "Maltose: Glucose α1→4 Glucose → reduzierend (aus Stärkeabbau).",
        "Stärke: Amylose (α1→4, linear) + Amylopektin (α1→4 + α1→6, verzweigt) → pflanzlicher Speicher.",
        "Glykogen: α1→4 + häufige α1→6 Verzweigungen → tierischer Energiespeicher (Leber, Muskel).",
        "Cellulose: β1→4-Bindungen → strukturell, für Mensch nicht verdaubar."
      ],
      formulas: [
        "Monosaccharide: CₙH₂ₙOₙ",
        "Glucose: C₆H₁₂O₆"
      ],
      visual: `
        <div style="font-size:11px; line-height:1.6; background:rgba(0,0,0,0.15); padding:8px; border-radius:6px;">
          <b>Wichtige Disaccharide:</b>
          <ul style="margin:4px 0; padding-left:16px;">
            <li>Saccharose = Glc α1↔β2 Fru (kein red. Ende)</li>
            <li>Lactose = Gal β1→4 Glc (red. Ende)</li>
            <li>Maltose = Glc α1→4 Glc (red. Ende)</li>
            <li>Cellobiose = Glc β1→4 Glc (red. Ende)</li>
          </ul>
        </div>
      `,
      detailBlocks: [
        {
          title: "Reduzierendes vs. nicht-reduzierendes Ende",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p>Ein <b>reduzierendes Ende</b> besitzt eine freie anomere C1-OH-Gruppe → kann oxidiert werden → positiver Fehling-Test (Cu²⁺ → Cu₂O, roter Niederschlag).</p>
              <p><b>Saccharose</b> ist <u>nicht reduzierend</u>: beide anomeren OH-Gruppen sind an der Bindung beteiligt (C1 von Glc + C2 von Fru).</p>
              <p><b>Maltose, Lactose, Cellobiose:</b> reduzierend (eine freie anomere OH-Gruppe vorhanden).</p>
            </div>
          `
        },
        {
          title: "Stärke vs. Glykogen vs. Cellulose",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <table style="border-collapse:collapse; width:100%; font-size:12px;">
                <tr style="border-bottom:1px solid rgba(255,255,255,0.2);">
                  <th style="text-align:left; padding:4px;">Polymer</th>
                  <th style="padding:4px;">Bindung</th>
                  <th style="padding:4px;">Funktion/Vorkommen</th>
                </tr>
                <tr><td style="padding:4px;">Amylose</td><td style="padding:4px;">α-1,4 (linear)</td><td style="padding:4px;">Pflanzenstärke (~20%)</td></tr>
                <tr><td style="padding:4px;">Amylopektin</td><td style="padding:4px;">α-1,4 + α-1,6</td><td style="padding:4px;">Pflanzenstärke (~80%)</td></tr>
                <tr><td style="padding:4px;">Glykogen</td><td style="padding:4px;">α-1,4 + α-1,6 (häufig)</td><td style="padding:4px;">Leber & Muskel (Tier)</td></tr>
                <tr><td style="padding:4px;">Cellulose</td><td style="padding:4px;">β-1,4</td><td style="padding:4px;">Pflanzenzellwand (Struktur)</td></tr>
              </table>
            </div>
          `
        }
      ]
    },

    {
      id: "bio-suesstoffe",
      title: "Süßstoffe & Zuckeraustauschstoffe",
      tags: ["Süßstoffe", "Saccharin", "Aspartam", "Stevia", "Sucralose", "Zuckeralkohol", "PKU"],
      goals: [
        "Unterschied kalorische Süßungsmittel, Zuckeraustauschstoffe und intensive Süßstoffe erklären.",
        "Wichtige Süßstoffe nennen und einordnen (Saccharin, Aspartam, Stevia, Sucralose).",
        "Besonderheit von Aspartam nennen (Phenylalanin-Gehalt → PKU)."
      ],
      summary: "Süßungsmittel werden eingeteilt in: (1) kalorische Süßungsmittel (Zucker, Honig); (2) Zuckeraustauschstoffe/Zuckeralkohole (Sorbit, Xylit, Erythrit – kalorienreduziert); (3) intensive Süßstoffe (Saccharin, Aspartam, Stevia, Sucralose – vielfach süßer als Zucker, kalorienarm/-frei).",
      keyPoints: [
        "Zuckeraustauschstoffe: Sorbit (E420), Xylit (E967), Erythrit (E968), Maltit – langsam resorbiert, kalorienreduziert.",
        "Saccharin (E954): 300–500× süßer, kalorienfrei, bitterer Nachgeschmack.",
        "Aspartam (E951): 200× süßer, Dipeptid (Asp + Phe-Methylester); NICHT hitzestabil → nicht zum Backen.",
        "Aspartam → enthält Phenylalanin → Warnung für PKU-Patienten (Phenylketonurie).",
        "Stevia/Stevioside (E960): Glykosid aus Stevia-Pflanze, 200–300× süßer, hitzestabil.",
        "Sucralose (E955): chloriertes Saccharose-Derivat, 600× süßer, sehr hitzestabil.",
        "Acesulfam-K (E950): 200× süßer, oft in Kombination mit Aspartam verwendet.",
        "Cyclamat (E952): 30–50× süßer, in EU zugelassen (in USA verboten)."
      ],
      formulas: [],
      visual: `
        <div style="font-size:11px;">
          <table style="border-collapse:collapse; width:100%; font-size:11px; background:rgba(0,0,0,0.12); border-radius:6px; overflow:hidden;">
            <tr style="border-bottom:1px solid rgba(255,255,255,0.15); background:rgba(255,255,255,0.06);">
              <th style="text-align:left; padding:5px;">Stoff</th>
              <th style="padding:5px;">Süßkraft*</th>
              <th style="padding:5px;">kcal/g</th>
              <th style="padding:5px;">E-Nr.</th>
            </tr>
            <tr><td style="padding:5px;">Saccharose</td><td style="padding:5px; text-align:center;">1×</td><td style="padding:5px; text-align:center;">4</td><td style="padding:5px; text-align:center;">–</td></tr>
            <tr><td style="padding:5px;">Sorbit</td><td style="padding:5px; text-align:center;">0,6×</td><td style="padding:5px; text-align:center;">2,4</td><td style="padding:5px; text-align:center;">E420</td></tr>
            <tr><td style="padding:5px;">Saccharin</td><td style="padding:5px; text-align:center;">300–500×</td><td style="padding:5px; text-align:center;">≈0</td><td style="padding:5px; text-align:center;">E954</td></tr>
            <tr><td style="padding:5px;">Aspartam</td><td style="padding:5px; text-align:center;">200×</td><td style="padding:5px; text-align:center;">≈0</td><td style="padding:5px; text-align:center;">E951</td></tr>
            <tr><td style="padding:5px;">Stevia</td><td style="padding:5px; text-align:center;">200–300×</td><td style="padding:5px; text-align:center;">≈0</td><td style="padding:5px; text-align:center;">E960</td></tr>
            <tr><td style="padding:5px;">Sucralose</td><td style="padding:5px; text-align:center;">600×</td><td style="padding:5px; text-align:center;">≈0</td><td style="padding:5px; text-align:center;">E955</td></tr>
          </table>
          <div style="font-size:10px; opacity:0.6; margin-top:4px;">* relativ zu Saccharose</div>
        </div>
      `,
      detailBlocks: [
        {
          title: "Aspartam & PKU – Klausurwissen",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p><b>Aspartam</b> = Dipeptidester: L-Asp–L-Phe-OCH₃</p>
              <p>Bei Verstoffwechselung entsteht <b>Phenylalanin</b> → problematisch für PKU-Patienten (Phenylketonurie: Phenylalaninhydroxylase defekt → Phenylalanin akkumuliert → neurotoxisch).</p>
              <p>→ Pflichthinweis auf Lebensmitteln: <i>„Enthält eine Phenylalaninquelle"</i></p>
              <p>Aspartam ist <b>nicht hitzestabil</b> → verliert Süßkraft beim Erhitzen → nicht zum Backen geeignet.</p>
            </div>
          `
        }
      ]
    },

    {
      id: "bio-lipide",
      title: "Lipide: Fettsäuren, Glycerolipide & Sterole",
      tags: ["Lipide", "Fettsäuren", "gesättigt", "ungesättigt", "Triglycerid", "Phospholipid", "Cholesterol"],
      goals: [
        "Fettsäuren nach Sättigungsgrad und Kettenlänge klassifizieren.",
        "Aufbau von Triglyceriden und Phospholipiden erklären.",
        "Biologische Funktionen von Cholesterol benennen."
      ],
      summary: "Lipide sind hydrophobe oder amphipathische Biomoleküle. Fettsäuren (langkettige Carbonsäuren) können gesättigt (keine Doppelbindung) oder ungesättigt (cis-Doppelbindungen) sein. Triglyceride = Glycerin + 3 Fettsäuren (Energiespeicher). Phospholipide = Glycerin + 2 Fettsäuren + Phosphat + polarer Kopf (Membranbausteine).",
      keyPoints: [
        "Gesättigte Fettsäuren: gerade Ketten, hoher Schmelzpunkt (z. B. Palmitinsäure C16:0, Stearinsäure C18:0).",
        "Ungesättigte Fettsäuren: cis-Doppelbindungen → Knick → niedrigerer Schmelzpunkt (z. B. Ölsäure C18:1 Δ9).",
        "Essentielle Fettsäuren: Linolsäure (C18:2, ω-6) und α-Linolensäure (C18:3, ω-3) → müssen mit Nahrung aufgenommen werden.",
        "Triglyceride: Energiespeicher (9 kcal/g); Verseifung mit NaOH → Glycerin + Seifen.",
        "Phospholipide: amphipathisch → Grundlage biologischer Membranen (Doppelschicht).",
        "Cholesterol: Steroid (4 Ringe, –OH an C3), Membranbaustein, Vorläufer Steroidhormone/Gallensäuren/Vitamin D.",
        "Nomenklatur: C18:2 Δ9,12 = 18 C-Atome, 2 Doppelbindungen bei C9 und C12."
      ],
      formulas: [
        "Verseifung: Triglycerid + 3 NaOH → Glycerin + 3 Natriumfettsäuresalze (Seifen)",
        "ω-Nomenklatur: ω = n − x (letztes C − Position letzter DB von Carboxylende)"
      ],
      visual: `
        <pre style="font-size:10px; line-height:1.5; background:rgba(0,0,0,0.15); padding:8px; border-radius:6px;">
Triglycerid:          Phospholipid:
  Glycerin              Glycerin
  |–Fettsäure 1         |–Fettsäure 1
  |–Fettsäure 2         |–Fettsäure 2
  |–Fettsäure 3         |–Phosphat–Kopfgruppe (polar)
        </pre>
      `,
      detailBlocks: [
        {
          title: "Gesättigt vs. ungesättigt – Gesundheitsrelevanz",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <ul>
                <li><b>Gesättigte Fettsäuren</b>: enger gepackt → fest bei RT (Butter, Kokosöl) → hoher Anteil nachteilig für Herz-Kreislauf.</li>
                <li><b>Ungesättigte cis-Fettsäuren</b>: Knick → locker gepackt → flüssig (Pflanzenöle) → günstiger Effekt.</li>
                <li><b>Trans-Fettsäuren</b>: bei industrieller Teilhydrierung entstanden → gerade Ketten → erhöhen LDL, senken HDL → ungünstig.</li>
                <li><b>ω-3-Fettsäuren</b> (EPA, DHA aus Fischöl): entzündungshemmend, herzschützend.</li>
              </ul>
            </div>
          `
        }
      ]
    },

    {
      id: "bio-membranen",
      title: "Biologische Membranen & Transport",
      tags: ["Lipiddoppelschicht", "Fluid-Mosaik", "Membranproteine", "passiver Transport", "aktiver Transport"],
      goals: [
        "Aufbau der Lipiddoppelschicht aus Phospholipiden erklären.",
        "Fluid-Mosaik-Modell von Singer & Nicolson beschreiben.",
        "Aktiven und passiven Transport (inkl. erleichterte Diffusion) unterscheiden."
      ],
      summary: "Biologische Membranen = Phospholipid-Doppelschicht + eingebettete Proteine (Fluid-Mosaik-Modell). Hydrophile Köpfe nach außen, hydrophobe Fettsäureschwänze nach innen. Cholesterol stabilisiert Fluidität. Membranproteine übernehmen Transport, Signalübertragung und katalytische Funktionen.",
      keyPoints: [
        "Phospholipid-Doppelschicht: amphipathisch; Köpfe (hydrophil) nach außen, Schwänze (hydrophob) nach innen.",
        "Cholesterol: 'puffert' Fluidität → bei hohen T stabiler, bei niedrigen T flexibler (verhindert Kristallisation).",
        "Integrale Membranproteine: durchspannen die Membran (Transmembranhelices, z. B. Ionenkanäle, GPCRs).",
        "Periphere Membranproteine: assoziieren an Membranoberfläche (elektrostatisch oder via Anker).",
        "Einfache Diffusion: O₂, CO₂, kleine ungeladene Moleküle → entlang Gradient, kein Protein nötig.",
        "Erleichterte Diffusion: größere/geladene Moleküle über Carrier oder Kanalproteine → entlang Gradient, kein ATP.",
        "Aktiver Transport: gegen Konzentrationsgradient → ATP nötig (z. B. Na⁺/K⁺-ATPase: 3 Na⁺ raus, 2 K⁺ rein pro ATP)."
      ],
      formulas: [],
      visual: `
        <pre style="font-size:10px; line-height:1.35; background:rgba(0,0,0,0.15); padding:8px; border-radius:6px;">
 ○○○○○○○○○○○○○○  ← Köpfe (hydrophil, außen)
 ||||||||||||||||
 ||||||||||||||||  ← Schwänze (hydrophob)
 ○○○○○○○○○○○○○○  ← Köpfe (hydrophil, innen/Zytosol)
        </pre>
      `,
      detailBlocks: [
        {
          title: "Na⁺/K⁺-ATPase – aktiver Transport (Klausurbeispiel)",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p>Pro ATP-Hydrolyse pumpt die Na⁺/K⁺-ATPase:</p>
              <ul>
                <li>3 Na⁺ <b>aus</b> der Zelle (→ extrazellulär)</li>
                <li>2 K⁺ <b>in</b> die Zelle (→ intrazellulär)</li>
              </ul>
              <p>→ Nettobewegung von Ladung → Membranpotenzial (–70 mV in Neuronen).</p>
              <p>Wichtig für: Nerven-/Muskelimpulse, osmotische Balance, sekundären aktiven Transport.</p>
            </div>
          `
        }
      ]
    },

    {
      id: "bio-nukleotide",
      title: "Nukleotide & Nukleoside",
      tags: ["Nukleotid", "Nukleosid", "Purin", "Pyrimidin", "ATP", "NAD", "cAMP"],
      goals: [
        "Aufbau eines Nukleotids erklären (Base + Zucker + Phosphat).",
        "Purine (Adenin, Guanin) und Pyrimidine (Cytosin, Thymin, Uracil) unterscheiden.",
        "Wichtige Nukleotide in der Biochemie nennen: ATP, NAD⁺, FAD, cAMP."
      ],
      summary: "Nukleotide = stickstoffhaltige Base + Pentose (Ribose oder Desoxyribose) + 1–3 Phosphatgruppen. Nukleoside = Base + Pentose (ohne Phosphat). Purine (Doppelring: A, G) und Pyrimidine (Einzelring: C, T, U) bilden die vier (bzw. fünf) DNA/RNA-Basen.",
      keyPoints: [
        "Purine: Adenin (A), Guanin (G) – bicyclisches Ringsystem.",
        "Pyrimidine: Cytosin (C), Thymin (T, nur DNA), Uracil (U, nur RNA) – Einzelring.",
        "DNA: Desoxyribose + A, G, C, T; RNA: Ribose + A, G, C, U.",
        "Nukleosid = Base + Zucker; Nukleotid = Nukleosid + n Phosphat(e).",
        "ATP: universelle Energiewährung; ΔG der Hydrolyse ≈ –30,5 kJ/mol.",
        "NAD⁺/NADH und FAD/FADH₂: Coenzyme, Elektronen- und Wasserstoffüberträger im Stoffwechsel.",
        "cAMP: second messenger, entsteht aus ATP durch Adenylylcyclase; aktiviert Proteinkinase A."
      ],
      formulas: [
        "ATP + H₂O → ADP + Pi  ΔG ≈ –30,5 kJ/mol",
        "ATP + H₂O → AMP + PPi  ΔG ≈ –45,6 kJ/mol"
      ],
      visual: `
        <div style="font-size:11px; line-height:1.6; background:rgba(0,0,0,0.15); padding:8px; border-radius:6px;">
          <b>Watson-Crick Basenpaare (DNA):</b><br>
          A = T &nbsp; (2 H-Brücken)<br>
          G ≡ C &nbsp; (3 H-Brücken) → GC-reiche DNA stabiler<br><br>
          <b>RNA:</b> U statt T; Ribose statt Desoxyribose (2'-OH)
        </div>
      `,
      detailBlocks: [
        {
          title: "ATP als Energiewährung",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p>ATP = <b>Adenosin-5'-triphosphat</b>. Die energiereichen Phosphorsäureanhydrid-Bindungen (β–γ, α–β) liefern bei Hydrolyse Energie:</p>
              <ul>
                <li>ATP → ADP + Pi: ΔG ≈ –30,5 kJ/mol (häufigste Reaktion)</li>
                <li>ATP → AMP + PPi: ΔG ≈ –45,6 kJ/mol (PPi wird sofort zu 2 Pi hydrolysiert → irreversibel)</li>
              </ul>
              <p>ATP-Regeneration: oxidative Phosphorylierung (Atmungskette) oder Substratkettenphosphorylierung (Glykolyse, TCA).</p>
            </div>
          `
        }
      ]
    },

    {
      id: "bio-dna-rna",
      title: "DNA & RNA: Struktur und Funktion",
      tags: ["DNA", "Doppelhelix", "RNA", "mRNA", "tRNA", "rRNA", "Replikation", "Transkription"],
      goals: [
        "Struktur der DNA-Doppelhelix beschreiben (antiparallel, B-DNA, Basenpaare).",
        "DNA und RNA tabellarisch unterscheiden.",
        "Replikation, Transkription und Translation grob erklären (zentrales Dogma)."
      ],
      summary: "DNA speichert genetische Information in einer antiparallelen Doppelhelix (Watson & Crick, 1953). Komplementäre Basen paaren über H-Brücken (A=T, G≡C). RNA ist meist einzelsträngig: mRNA transportiert Information, tRNA bringt Aminosäuren, rRNA ist Bestandteil des Ribosoms.",
      keyPoints: [
        "B-DNA: rechtsgängige Doppelhelix, antiparallel (5'→3' und 3'→5'), 10 Basenpaare/Windung, 3,4 Å pro Basenpaar.",
        "Chargaff-Regel: [A]=[T] und [G]=[C] in doppelsträngiger DNA.",
        "GC-reiche DNA ist thermisch stabiler (3 H-Brücken vs. 2 bei AT).",
        "Replikation: semikonservativ (Meselson-Stahl 1958); DNA-Polymerase synthetisiert 5'→3'.",
        "Transkription: DNA → mRNA; RNA-Polymerase; Template = 3'→5'-Strang; nur in Zellkern (Eukaryoten).",
        "Translation: mRNA → Protein; am Ribosom; tRNA bringt AS; Codon (3 Basen) → 1 AS.",
        "Genetischer Code: 64 Codons (61 kodierend + 3 Stopp: UAA, UAG, UGA); degeneriert (mehrere Codons pro AS)."
      ],
      formulas: [
        "Chargaff: A = T, G = C",
        "Tm = 69,3 + 0,41 × (%GC)  (Näherung für Schmelztemperatur)"
      ],
      visual: `
        <pre style="font-size:10px; line-height:1.4; background:rgba(0,0,0,0.15); padding:8px; border-radius:6px;">
5'–A–T–G–C–C–T–A–G–3'   (Sense-Strang / Coding strand)
   | | | | | | | |
3'–T–A–C–G–G–A–T–C–5'   (Antisense / Template)

A=T: 2 H-Brücken    G≡C: 3 H-Brücken
        </pre>
      `,
      detailBlocks: [
        {
          title: "DNA vs. RNA – Unterschiede",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <table style="border-collapse:collapse; width:100%; font-size:12px;">
                <tr style="border-bottom:1px solid rgba(255,255,255,0.2);">
                  <th style="text-align:left; padding:4px;">Merkmal</th>
                  <th style="padding:4px;">DNA</th>
                  <th style="padding:4px;">RNA</th>
                </tr>
                <tr><td style="padding:4px;">Zucker</td><td style="padding:4px;">2'-Desoxyribose</td><td style="padding:4px;">Ribose</td></tr>
                <tr><td style="padding:4px;">Basen</td><td style="padding:4px;">A, G, C, T</td><td style="padding:4px;">A, G, C, U</td></tr>
                <tr><td style="padding:4px;">Stränge</td><td style="padding:4px;">doppelsträngig</td><td style="padding:4px;">meist einzelsträngig</td></tr>
                <tr><td style="padding:4px;">Stabilität</td><td style="padding:4px;">stabiler</td><td style="padding:4px;">labiler (2'-OH reaktiv)</td></tr>
                <tr><td style="padding:4px;">Funktion</td><td style="padding:4px;">Informationsspeicher</td><td style="padding:4px;">mRNA, tRNA, rRNA, snRNA</td></tr>
              </table>
            </div>
          `
        },
        {
          title: "Zentrales Dogma der Molekularbiologie",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p style="font-size:14px; text-align:center;"><b>DNA → RNA → Protein</b></p>
              <ul>
                <li><b>Replikation:</b> DNA → DNA (semikonservativ, DNA-Polymerase III, Leitstrang + Folgestrang).</li>
                <li><b>Transkription:</b> DNA → prä-mRNA → mRNA (Spleißen, Capping, Polyadenylierung bei Eukaryoten).</li>
                <li><b>Translation:</b> mRNA → Protein (Ribosom: kleine + große Untereinheit; tRNA; Aminoacyl-tRNA-Synthetase).</li>
              </ul>
              <p>Ausnahme: Reverse Transkriptase (Retroviren wie HIV): RNA → DNA.</p>
            </div>
          `
        }
      ]
    },

    {
      id: "bio-glykolyse",
      title: "Glykolyse: Glucose-Abbau im Zytoplasma",
      tags: ["Glykolyse", "Glucose", "Pyruvat", "ATP", "NADH", "PFK-1", "Hexokinase"],
      goals: [
        "Ort, Bedingungen und Gesamtprodukte der Glykolyse benennen.",
        "Netto-Energiebilanz angeben (2 ATP, 2 NADH pro Glucose).",
        "Schlüsselenzyme nennen und regulatorische Bedeutung der PFK-1 erklären."
      ],
      summary: "Die Glykolyse ist ein zehnstufiger Stoffwechselweg im Zytoplasma, bei dem 1 Glucose (C6) in 2 Pyruvat (C3) umgewandelt wird. Netto entstehen 2 ATP und 2 NADH. Sie ist anaerob und aerob möglich und der erste Schritt des Glucoseabbaus.",
      keyPoints: [
        "Ort: Zytoplasma (Zytosol); sowohl aerob als auch anaerob.",
        "Netto-Bilanz: Glucose + 2 ADP + 2 Pi + 2 NAD⁺ → 2 Pyruvat + 2 ATP + 2 NADH + 2 H⁺.",
        "Schlüsselenzyme (reguliert, irreversibel): Hexokinase, Phosphofructokinase-1 (PFK-1), Pyruvatkinase.",
        "PFK-1 ist der Schrittmacher: gehemmt durch ATP und Citrat; aktiviert durch AMP, ADP und Fructose-2,6-bisphosphat.",
        "Pyruvat-Schicksal aerob: → Pyruvatdehydrogenase → Acetyl-CoA → Citratzyklus.",
        "Pyruvat-Schicksal anaerob: → Laktatdehydrogenase → Laktat (Tier) oder → Ethanol + CO₂ (Hefe)."
      ],
      formulas: [
        "Brutto: Glucose + 2 Pi + 2 ADP + 2 NAD⁺ → 2 Pyruvat + 2 ATP + 2 NADH + 2 H⁺ + 2 H₂O",
        "Netto-ATP: 2 (4 gebildet − 2 investiert in Vorbereitungsphase)"
      ],
      visual: `
        <div style="font-size:11px; line-height:1.6; background:rgba(0,0,0,0.15); padding:8px; border-radius:6px;">
          <b>Glykolyse vereinfacht:</b><br>
          Glucose (C6)<br>
          &nbsp;↓ − 2 ATP (Vorbereitungsphase)<br>
          Fructose-1,6-bisphosphat<br>
          &nbsp;↓ Aldolase-Spaltung<br>
          2× G-3-Phosphat (C3)<br>
          &nbsp;↓ + 4 ATP + 2 NADH (Gewinnungsphase)<br>
          2× Pyruvat (C3)<br><br>
          <b>Netto: + 2 ATP + 2 NADH</b>
        </div>
      `,
      detailBlocks: [
        {
          title: "Anaerobe Fermentation – Laktat vs. Ethanol",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p>Ohne Sauerstoff muss NADH re-oxidiert werden → sonst stockt Glykolyse (kein NAD⁺ mehr):</p>
              <ul>
                <li><b>Laktatfermentation</b> (Muskel, Erythrozyten, Bakterien):<br>Pyruvat + NADH → Laktat + NAD⁺ (Laktatdehydrogenase, LDH).</li>
                <li><b>Ethanolfermentation</b> (Hefe, Bacillus):<br>Pyruvat → Acetaldehyd (+ CO₂) → Ethanol + NAD⁺.</li>
              </ul>
              <p>Kein Extra-ATP! Nur NAD⁺-Regenerierung.</p>
            </div>
          `
        }
      ]
    },

    {
      id: "bio-tca",
      title: "Citratzyklus (TCA / Krebszyklus)",
      tags: ["Citratzyklus", "TCA", "Krebszyklus", "Acetyl-CoA", "NADH", "FADH₂", "GTP", "Oxalacetat"],
      goals: [
        "Ort, Funktion und Eingangssubstrat des Citratzyklus nennen.",
        "Bilanz pro Acetyl-CoA angeben (3 NADH, 1 FADH₂, 1 GTP, 2 CO₂).",
        "Schlüsselenzyme und amphibolische Funktion des TCA erläutern."
      ],
      summary: "Der Citratzyklus (TCA) läuft in der Mitochondrienmatrix. Acetyl-CoA (2C) kondensiert mit Oxalacetat (4C) zu Citrat (6C). In 8 Reaktionen werden 2 CO₂ freigesetzt und Reduktionsäquivalente (NADH, FADH₂) gewonnen, die in der Atmungskette zu ATP führen. TCA ist amphibolisch (katabol + anabol).",
      keyPoints: [
        "Ort: Mitochondrienmatrix.",
        "Eingangssubstrat: Acetyl-CoA (aus Pyruvat via PDH, β-Oxidation oder Aminosäureabbau).",
        "Bilanz pro Acetyl-CoA: 3 NADH + 1 FADH₂ + 1 GTP + 2 CO₂.",
        "Schlüsselenzyme (reguliert): Citratsynthase, Isocitratdehydrogenase, α-Ketoglutaratdehydrogenase-Komplex.",
        "Intermediate: Citrat → Isocitrat → α-Ketoglutarat → Succinyl-CoA → Succinat → Fumarat → Malat → Oxalacetat.",
        "Amphibolisch: liefert Vorstufen für Biosynthesen (z. B. Oxalacetat → Gluconeogenese; α-KG → Glutamat).",
        "Pro Glucose (2 Acetyl-CoA): 6 NADH + 2 FADH₂ + 2 GTP aus TCA."
      ],
      formulas: [
        "Acetyl-CoA (2C) + Oxalacetat (4C) → Citrat (6C) → ... → Oxalacetat (4C)",
        "Bilanz/Acetyl-CoA: 3 NADH + 1 FADH₂ + 1 GTP + 2 CO₂"
      ],
      visual: `
        <pre style="font-size:10px; line-height:1.35; background:rgba(0,0,0,0.15); padding:8px; border-radius:6px;">
   Acetyl-CoA (2C)
         ↓
OAA(4C) → Citrat(6C)
  ↑            ↓ CO₂+NADH
Malat(4C)  Isocitrat → CO₂+NADH
  ↑            ↓
Fumarat   α-KG(5C) → CO₂+NADH
  ↑            ↓
FADH₂←Succinat  Succinyl-CoA → GTP
        </pre>
      `,
      detailBlocks: [
        {
          title: "Gesamtbilanz der aeroben Glucoseoxidation",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <table style="border-collapse:collapse; width:100%; font-size:12px;">
                <tr style="border-bottom:1px solid rgba(255,255,255,0.2);">
                  <th style="text-align:left; padding:4px;">Schritt</th>
                  <th style="padding:4px;">ATP</th>
                  <th style="padding:4px;">NADH</th>
                  <th style="padding:4px;">FADH₂</th>
                </tr>
                <tr><td style="padding:4px;">Glykolyse</td><td style="padding:4px; text-align:center;">2</td><td style="padding:4px; text-align:center;">2</td><td style="padding:4px; text-align:center;">0</td></tr>
                <tr><td style="padding:4px;">Pyruvatdehydrogenase (×2)</td><td style="padding:4px; text-align:center;">0</td><td style="padding:4px; text-align:center;">2</td><td style="padding:4px; text-align:center;">0</td></tr>
                <tr><td style="padding:4px;">TCA (×2)</td><td style="padding:4px; text-align:center;">2 (GTP)</td><td style="padding:4px; text-align:center;">6</td><td style="padding:4px; text-align:center;">2</td></tr>
                <tr><td style="padding:4px;">Atmungskette</td><td style="padding:4px; text-align:center;">~26–28</td><td style="padding:4px; text-align:center;">—</td><td style="padding:4px; text-align:center;">—</td></tr>
                <tr style="font-weight:bold; border-top:1px solid rgba(255,255,255,0.2);">
                  <td style="padding:4px;">Gesamt</td><td style="padding:4px; text-align:center;">~30–32</td><td style="padding:4px; text-align:center;">—</td><td style="padding:4px; text-align:center;">—</td>
                </tr>
              </table>
            </div>
          `
        }
      ]
    },

    {
      id: "bio-ec-system-haemoglobin",
      title: "EC-System, Hämoglobin & Cofaktoren",
      tags: ["EC-System", "Enzymklassen", "Hämoglobin", "Bohr-Effekt", "2,3-BPG", "Cofaktoren", "NAD", "FAD", "CoA"],
      goals: [
        "Die 6 Enzymklassen des EC-Systems benennen und Reaktionstypen zuordnen.",
        "Hämoglobin: Aufbau, kooperative O₂-Bindung, Bohr-Effekt erklären.",
        "Cofaktoren und Coenzyme erklären (NAD, FAD, CoA); Apoenzym vs. Holoenzym.",
        "CO-Vergiftung und 2,3-BPG-Wirkung beschreiben."
      ],
      summary: "Das EC-System klassifiziert Enzyme nach dem Reaktionstyp in 6 Hauptklassen (4-stellige Nummer). Hämoglobin ist ein Transportprotein (kein Enzym!) mit 4 Untereinheiten (2α+2β), je einer Hämgruppe (Fe²⁺). O₂-Bindung ist kooperativ (Sigmoidkurve). Cofaktoren ergänzen Apoenzyme zum aktiven Holoenzym.",
      keyPoints: [
        "EC-System: 4-stellige Nummer → Hauptklasse.Unterklasse.Unterunterklasse.lfd.Nr.",
        "6 Hauptklassen: 1=Oxidoreduktasen, 2=Transferasen, 3=Hydrolasen, 4=Lyasen, 5=Isomerasen, 6=Ligasen.",
        "Merksatz: 'Otto Trifft Heute Lydia In Lissabon' (O-T-H-L-I-L).",
        "Hämoglobin: Tetramer (2α+2β), je 1 Hämgruppe (Porphyrinring + Fe²⁺). Kein Enzym!",
        "Hämgruppe: Fe²⁺ bindet O₂ an Position 6; His an Position 5.",
        "Kooperative O₂-Bindung: Sigmoidkurve; Bindung an 1 UE erhöht Affinität der anderen 3.",
        "Bohr-Effekt: CO₂↑ + H⁺↑ → O₂-Affinität↓ → O₂-Abgabe im aktiven Gewebe (1905, Christian Bohr).",
        "2,3-BPG: allosterischer Effektor, bindet in zentraler Kavität der β-UE → senkt O₂-Affinität.",
        "Fetales Hb (HbF): γ statt β → bindet 2,3-BPG schlechter → höhere O₂-Affinität → nimmt O₂ von Mutter.",
        "CO-Vergiftung: CO bindet 200× fester als O₂ → Carboxyhämoglobin. Therapie: hyperbare O₂-Kammer.",
        "Apoenzym (inaktiv) + Cofaktor = Holoenzym (aktiv).",
        "Prosthetische Gruppen: fest gebunden (z.B. Hämgruppe, FAD). Cosubstrate: locker gebunden.",
        "NAD⁺/NADH (Vit. B3), FAD/FADH₂ (Vit. B2), CoA (Vit. B5) = wichtige Coenzyme.",
        "Myoglobin: 1 Polypeptidkette, 1 Hämgruppe, hyperbolische O₂-Kurve = Sauerstoffspeicher."
      ],
      formulas: [],
      visual: `
        <div style="font-size:12px;line-height:1.7;">
          <b>EC-Klassen Merksatz:</b><br>
          <b>O</b>tto <b>T</b>rifft <b>H</b>eute <b>L</b>ydia <b>I</b>n <b>L</b>issabon<br>
          1=Oxido., 2=Transfer., 3=Hydrol., 4=Lyasen, 5=Isomer., 6=Ligasen<br><br>
          <b>O₂-Bindungskurven:</b><br>
          Myoglobin: Hyperbel (1 Kette, Speicher)<br>
          Hämoglobin: Sigmoid (kooperativ, 4 Ketten, Transport)<br><br>
          <b>Bohr-Effekt:</b> Aktives Gewebe (viel CO₂, H⁺) → O₂ wird abgegeben ✓
        </div>
      `,
      detailBlocks: [
        {
          title: "Die 6 Enzymklassen (EC-System)",
          content: `
            <table style="font-size:12px;border-collapse:collapse;width:100%;">
              <tr style="border-bottom:1px solid rgba(255,255,255,0.2);"><th style="text-align:left;padding:3px 5px;">EC</th><th style="padding:3px 5px;text-align:left;">Klasse</th><th style="padding:3px 5px;text-align:left;">Reaktion / Beispiel</th></tr>
              <tr><td style="padding:3px 5px;">EC 1</td><td>Oxidoreduktasen</td><td>Redox (e⁻-Transfer, z.B. Alkohol-DH)</td></tr>
              <tr><td style="padding:3px 5px;">EC 2</td><td>Transferasen</td><td>Gruppenübertragung (z.B. Kinasen)</td></tr>
              <tr><td style="padding:3px 5px;">EC 3</td><td>Hydrolasen</td><td>Hydrolyse + H₂O (z.B. Proteasen, Lipasen)</td></tr>
              <tr><td style="padding:3px 5px;">EC 4</td><td>Lyasen</td><td>C-X-Spaltung ohne Hydrolyse (z.B. Decarboxylasen)</td></tr>
              <tr><td style="padding:3px 5px;">EC 5</td><td>Isomerasen</td><td>Isomerisierung (z.B. Glc-6-P-Isomerase)</td></tr>
              <tr><td style="padding:3px 5px;">EC 6</td><td>Ligasen</td><td>Ligierung + ATP (z.B. DNA-Ligase)</td></tr>
            </table>
          `
        },
        {
          title: "Cofaktoren & Coenzyme (Tabelle)",
          content: `
            <table style="font-size:12px;border-collapse:collapse;width:100%;">
              <tr style="border-bottom:1px solid rgba(255,255,255,0.2);"><th style="text-align:left;padding:3px 5px;">Coenzym</th><th>Funktion</th><th>Vitamin</th></tr>
              <tr><td style="padding:3px 5px;">NAD⁺/NADH</td><td>Redoxcarrier (H-Transfer)</td><td>B3 (Niacin)</td></tr>
              <tr><td style="padding:3px 5px;">FAD/FADH₂</td><td>Redoxcarrier (H-Transfer)</td><td>B2 (Riboflavin)</td></tr>
              <tr><td style="padding:3px 5px;">Coenzym A (CoA)</td><td>Acylgruppenträger</td><td>B5 (Pantothensäure)</td></tr>
              <tr><td style="padding:3px 5px;">TPP</td><td>C₂-Gruppen-Transfer (Decarboxylierung)</td><td>B1 (Thiamin)</td></tr>
              <tr><td style="padding:3px 5px;">ATP</td><td>Energieträger, Phosphatdonor</td><td>–</td></tr>
              <tr><td style="padding:3px 5px;">Hämgruppe</td><td>O₂-Bindung (prosthetisch, Fe²⁺)</td><td>–</td></tr>
            </table>
          `
        },
        {
          title: "Hämoglobin Details (Klausurklassiker)",
          content: `
            <ul style="font-size:13px;line-height:1.5;">
              <li><b>Keine Enzymaktivität</b> → Hämoglobin ist kein Enzym! (Fangfrage)</li>
              <li>Entstand evolutionär, als Diffusion zur O₂-Versorgung großer Körper nicht mehr reichte</li>
              <li>Hämgruppe: Porphyrinring + Fe²⁺; vorkommt in Hb, Myoglobin und Cytochromen</li>
              <li>CO₂-Transport: Carboanhydrase in Erythrozyten: CO₂ + H₂O ⇌ H⁺ + HCO₃⁻</li>
              <li>2,3-BPG: stark negativ, bindet je 3 positive Gruppen der β-UE → Konformationsänderung</li>
              <li>Hyperbare O₂-Therapie: erhöhter O₂-Partialdruck verdrängt CO vom Hb</li>
            </ul>
          `
        }
      ]
    },

    {
      id: "bio-analytik",
      title: "Biochemische Analysemethoden",
      tags: ["SDS-PAGE", "Western Blot", "Gelfiltration", "Ionenaustausch", "Bradford", "Ninhydrin", "ELISA", "Edman-Abbau", "MALDI-TOF", "Dialyse", "IEF"],
      goals: [
        "SDS-PAGE erklären: was macht SDS, wonach wird getrennt?",
        "Western Blot: Ablauf und Antikörperdetektion beschreiben.",
        "Gelfiltration und Ionenaustausch nach Prinzip und Elution unterscheiden.",
        "Bradford, BCA und Ninhydrin-Reaktion kennen und unterscheiden.",
        "Iodzahl und Säurezahl definieren und einordnen."
      ],
      summary: "Biochemische Methoden trennen Biomoleküle nach Größe (SDS-PAGE, Gelfiltration SEC), Ladung (IEX, IEF) oder Affinität (Western Blot, ELISA, Affinitätschromatographie). Proteinkonzentration wird photometrisch bestimmt (Bradford, BCA, Ninhydrin). Sequenzierung erfolgt durch Edman-Abbau oder MALDI-TOF.",
      keyPoints: [
        "SDS: denaturiert Proteine, verleiht negative Ladung proportional zur Masse (0,5 SDS/AS) → Trennung nach kDa.",
        "SDS-PAGE: denaturierend; Trennung nach Molekülmasse; Kalibriergerade mit Markerproteinen.",
        "IEF (isoelektrische Fokussierung): Trennung im pH-Gradienten nach isoelektrischem Punkt (pI).",
        "2D-Gelelektrophorese: 1. IEF (nach pI) + 2. SDS-PAGE (nach Masse) → höchste Auflösung.",
        "Blot-Typen: Southern (DNA, Edwin Southern 1975) → Northern (RNA) → Western (Proteine).",
        "Western Blot: SDS-PAGE → Elektrotransfer auf Membran → 1°-AK (spezifisch) → 2°-AK (markiert: Enzym/Fluoreszenz/Radioaktiv).",
        "Gelfiltration (SEC): Größenausschluss; GROSSE Moleküle kommen ZUERST (passen nicht in Poren).",
        "Ionenaustausch (IEX): Kationenaustauscher bindet +Proteine; Elution durch Salzgradient↑ oder pH-Änderung.",
        "Aussalzen: Ammoniumsulfat fällt Proteine schonend → Dialyse zum Entsalzen (semipermeable Membran).",
        "Bradford: Coomassie Brilliant Blue R-250, Messung 595 nm, Standardreihe BSA (Rinderserumalbumin).",
        "BCA-Test: Cu²⁺-Reduktion durch Protein → Farbkomplex mit BCA, Messung 562 nm.",
        "Ninhydrin: α-Aminogruppen aller AS (außer Pro) → blauvioletter Farbstoff (540 nm), Nachweis bis 10 nmol.",
        "Edman-Abbau: PITC (Phenylisothiocyanat) + N-Terminus, zyklisch (1 AS/Runde), bis ~50 AS. PIC blockiert bei Leitersequenzierung.",
        "MALDI-TOF: Massenspektrometrie, Leitersequenzierung, sehr schnell, bis ~30 AS zuverlässig; Ile/Leu nicht unterscheidbar.",
        "ELISA: Antikörper-basierter Nachweis, photometrisch. Anwendung: HIV-Test, Erreger, Allergien, Corona-Schnelltest.",
        "Corona-Schnelltest (Lateral-Flow): kolloidales Gold-markierte AK, Kapillarfluss, Testlinie + Kontrolllinie.",
        "Iodzahl: g Iod / 100 g Fett → Maß für ungesättigte FS (höher = mehr Doppelbindungen).",
        "Säurezahl: mg KOH / g Fett → Maß für freie Fettsäuren (niedrig = frisches, gutes Fett).",
        "Merrifield-Synthese: Festphasensynthese von Peptiden (C→N-Terminus, t-Boc-Schutzgruppe, Nobelpreis 1984)."
      ],
      formulas: [],
      visual: `
        <div style="font-size:12px;line-height:1.7;">
          <b>Trennprinzipien:</b><br>
          SDS-PAGE → nach Größe (kDa), denatiert<br>
          IEF → nach Ladung (pI)<br>
          Gelfiltration → nach Größe (<b>GROSS = ZUERST!</b>)<br>
          Ionenaustausch → nach Ladung (Elution: Salz↑ oder pH)<br>
          Affinität → spezifische Bindung (His-Tag, Antikörper)<br><br>
          <b>Nachweis:</b><br>
          Bradford/BCA → Proteinkonzentration<br>
          Ninhydrin → Aminosäuren (alle außer Pro)<br>
          Western Blot → ein spezifisches Protein
        </div>
      `,
      detailBlocks: [
        {
          title: "Edman-Abbau vs. MALDI-TOF",
          content: `
            <table style="font-size:12px;border-collapse:collapse;width:100%;">
              <tr style="border-bottom:1px solid rgba(255,255,255,0.2);"><th style="text-align:left;padding:3px 5px;">Eigenschaft</th><th style="padding:3px 5px;">Edman-Abbau</th><th style="padding:3px 5px;">MALDI-TOF</th></tr>
              <tr><td style="padding:3px 5px;">Prinzip</td><td>PITC + N-Terminus, zyklisch</td><td>Massenspektrometrie</td></tr>
              <tr><td style="padding:3px 5px;">Geschwindigkeit</td><td>langsam (min–h)</td><td>sehr schnell</td></tr>
              <tr><td style="padding:3px 5px;">Max. Länge</td><td>~50 AS</td><td>~30 AS zuverlässig</td></tr>
              <tr><td style="padding:3px 5px;">Limitierung</td><td>N-Terminus muss frei sein</td><td>Ile/Leu ununterscheidbar</td></tr>
            </table>
          `
        },
        {
          title: "Protein-Aufreinigung (Strategie)",
          content: `
            <ul style="font-size:13px;line-height:1.5;">
              <li><b>Schritt 1:</b> Zellaufschluss + Zentrifugation (Zelltrümmer entfernen)</li>
              <li><b>Schritt 2:</b> Aussalzen mit Ammoniumsulfat → Dialyse</li>
              <li><b>Schritt 3:</b> Ionenaustauschchromatographie (IEX)</li>
              <li><b>Schritt 4:</b> Gelfiltration (SEC, Größentrennung)</li>
              <li><b>Schritt 5:</b> Affinitätschromatographie (z.B. His-Tag + Ni-NTA)</li>
              <li>Kontrolle: SDS-PAGE + Bradford nach jedem Schritt</li>
              <li>Spezifische Aktivität nimmt zu; Gesamtaktivität nimmt ab</li>
            </ul>
          `
        },
        {
          title: "Antikörper & Immunanalytik",
          content: `
            <ul style="font-size:13px;line-height:1.5;">
              <li><b>Antigen:</b> fremdes Protein, Polysaccharid oder Nukleinsäure</li>
              <li><b>Epitop:</b> Antigendeterminante (Bereich, den der AK erkennt)</li>
              <li><b>IgG:</b> Tetramer (2 schwere + 2 leichte Ketten, Y-Form)</li>
              <li><b>ELISA:</b> direkter oder indirekter Nachweis; Farbreaktion durch Enzym am 2°-AK</li>
              <li><b>Überlappende Spaltung:</b> große Proteine → Endo/Bromcyan-Spaltung → Sequenzierung der Fragmente</li>
            </ul>
          `
        }
      ]
    },

// ── NEU: β-Oxidation ────────────────────────────────────────────────────────
    {
      id: "bio-beta-oxidation",
      title: "β-Oxidation: Fettsäureabbau",
      tags: ["β-Oxidation", "Fettsäuren", "Acyl-CoA", "NADH", "FADH₂", "Mitochondrien", "Carnitin"],
      goals: [
        "Ort, Prinzip und Gesamtbilanz der β-Oxidation benennen.",
        "Die vier Reaktionsschritte eines β-Oxidationszyklus beschreiben.",
        "ATP-Bilanz für Palmitinsäure (C16) überschlagen.",
        "Unterschied zwischen gesättigten und ungesättigten Fettsäuren im Abbau benennen."
      ],
      summary:
        "Die β-Oxidation ist der schrittweise Abbau aktivierter Fettsäuren (Acyl-CoA) in der Mitochondrienmatrix. Jeder Zyklus verkürzt die Kette um 2C und liefert 1 NADH, 1 FADH₂ und 1 Acetyl-CoA. Acetyl-CoA geht in den TCA-Zyklus. Palmitinsäure (C16) liefert nach 7 Zyklen netto ~106 ATP – deutlich mehr als Glucose.",
      keyPoints: [
        "Ort: Mitochondrienmatrix; Fettsäuren müssen als Acyl-CoA aktiviert werden; Transport über Carnitin-Shuttle.",
        "Aktivierung: Fettsäure + CoA + ATP → Acyl-CoA + AMP + PPi (kostet 2 ATP-Äquivalente).",
        "4 Schritte pro Zyklus: ① Oxidation (FADH₂), ② Hydratation, ③ Oxidation (NADH), ④ Thiolyse → Acetyl-CoA + verkürztes Acyl-CoA.",
        "Palmitinsäure (C16): 7 Zyklen → 8 Acetyl-CoA + 7 NADH + 7 FADH₂.",
        "Netto-ATP: 7 FADH₂×1,5 + 7 NADH×2,5 + 8 Acetyl-CoA×10 − 2 (Aktivierung) ≈ 106 ATP.",
        "Ungesättigte Fettsäuren: Isomerase/Reduktase nötig → weniger FADH₂ pro Doppelbindung.",
        "Ungerade Fettsäuren: letzter Zyklus → Propionyl-CoA → Methylmalonyl-CoA → Succinyl-CoA (→ TCA).",
        "Regulation: Malonyl-CoA (Fettsäuresynthese-Intermediat) hemmt Carnitinacyltransferase I → verhindert sinnlosen Kreislauf."
      ],
      formulas: [
        "Acyl-CoA (Cn) → Acetyl-CoA (2C) + Acyl-CoA (Cn−2) + FADH₂ + NADH",
        "C16-Palmitinsäure: 7 Zyklen; Netto ~106 ATP"
      ],
      visual: `
        <pre style="font-size:10px; line-height:1.35; background:rgba(0,0,0,0.15); padding:8px; border-radius:6px;">
β-Oxidation (ein Zyklus):

Acyl-CoA (Cn)
  │ ① Oxidation (Acyl-CoA-Dehydrogenase)        → FADH₂
  ↓
trans-Δ²-Enoyl-CoA
  │ ② Hydratation (Enoyl-CoA-Hydratase)
  ↓
L-3-Hydroxyacyl-CoA
  │ ③ Oxidation (L-3-Hydroxyacyl-CoA-DH)        → NADH
  ↓
3-Ketoacyl-CoA
  │ ④ Thiolyse (β-Ketothiolase) + CoA
  ↓
Acetyl-CoA  +  Acyl-CoA (Cn−2)
        </pre>
      `,
      detailBlocks: [
        {
          title: "Aktivierung & Carnitin-Shuttle",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <ul>
                <li><b>Aktivierung:</b> Fettsäure + CoA + ATP → Acyl-CoA + AMP + PPi (Acyl-CoA-Synthetase, Außenmembran).</li>
                <li>ATP → AMP entspricht 2 verbrauchten Phosphatanhydridbindungen ≙ 2 ATP-Äquivalente.</li>
                <li><b>Carnitin-Shuttle:</b> Acyl-CoA kann die innere Mitochondrienmembran nicht direkt passieren → Übertragung auf Carnitin (CAT I) → Acylcarnitin ins Mitochondrium → dort zurück auf CoA (CAT II).</li>
                <li>Regulation: Malonyl-CoA hemmt CAT I → Fettsäuresynthese und -abbau laufen nicht gleichzeitig.</li>
              </ul>
            </div>
          `
        },
        {
          title: "ATP-Bilanz Palmitinsäure (C16)",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <table style="border-collapse:collapse; width:100%; font-size:12px;">
                <tr style="border-bottom:1px solid rgba(255,255,255,0.2);">
                  <th style="text-align:left; padding:4px;">Quelle</th>
                  <th style="padding:4px; text-align:center;">Menge</th>
                  <th style="padding:4px; text-align:center;">ATP/Einheit</th>
                  <th style="padding:4px; text-align:center;">ATP</th>
                </tr>
                <tr><td style="padding:4px;">7 FADH₂</td><td style="padding:4px; text-align:center;">7</td><td style="padding:4px; text-align:center;">1,5</td><td style="padding:4px; text-align:center;">10,5</td></tr>
                <tr><td style="padding:4px;">7 NADH</td><td style="padding:4px; text-align:center;">7</td><td style="padding:4px; text-align:center;">2,5</td><td style="padding:4px; text-align:center;">17,5</td></tr>
                <tr><td style="padding:4px;">8 Acetyl-CoA (via TCA)</td><td style="padding:4px; text-align:center;">8</td><td style="padding:4px; text-align:center;">10</td><td style="padding:4px; text-align:center;">80</td></tr>
                <tr><td style="padding:4px;">Aktivierung (Abzug)</td><td style="padding:4px; text-align:center;">–</td><td style="padding:4px; text-align:center;">–</td><td style="padding:4px; text-align:center;">−2</td></tr>
                <tr style="font-weight:bold; border-top:1px solid rgba(255,255,255,0.2);">
                  <td style="padding:4px;">Gesamt</td><td></td><td></td><td style="padding:4px; text-align:center;">≈ 106</td>
                </tr>
              </table>
              <p style="font-size:11px; opacity:0.8; margin-top:4px;">Zum Vergleich: 1 Glucose → ~30–32 ATP. Fett ist energiereicher pro Gramm (~37 kJ/g vs. ~17 kJ/g KH).</p>
            </div>
          `
        },
        {
          title: "β-Oxidation vs. Fettsäuresynthese",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <table style="border-collapse:collapse; width:100%; font-size:12px;">
                <tr style="border-bottom:1px solid rgba(255,255,255,0.2);">
                  <th style="text-align:left; padding:4px;"></th>
                  <th style="padding:4px;">β-Oxidation</th>
                  <th style="padding:4px;">Fettsäuresynthese</th>
                </tr>
                <tr><td style="padding:4px;">Ort</td><td style="padding:4px;">Mitochondrienmatrix</td><td style="padding:4px;">Cytosol</td></tr>
                <tr><td style="padding:4px;">Carrier</td><td style="padding:4px;">CoA</td><td style="padding:4px;">ACP</td></tr>
                <tr><td style="padding:4px;">Redoxmittel</td><td style="padding:4px;">FAD/NAD⁺ (Oxidation)</td><td style="padding:4px;">NADPH (Reduktion)</td></tr>
                <tr><td style="padding:4px;">Richtung</td><td style="padding:4px;">Abbau (−2C/Zyklus)</td><td style="padding:4px;">Aufbau (+2C/Zyklus)</td></tr>
              </table>
            </div>
          `
        }
      ]
    },

// ── NEU: Oxidative Phosphorylierung ─────────────────────────────────────────
    {
      id: "bio-ox-phospho",
      title: "Oxidative Phosphorylierung & Atmungskette",
      tags: ["Atmungskette", "Komplex I–IV", "ATP-Synthase", "Protonengradient", "Chemiosmose", "NADH", "FADH₂", "Inhibitoren"],
      goals: [
        "Ort und Funktion der Atmungskette im Überblick erklären.",
        "Die vier Komplexe und ihre Funktion benennen; Unterschied NADH vs. FADH₂ begründen.",
        "Das chemiosmotische Prinzip (Protonengradient → ATP-Synthase) erläutern.",
        "ATP-Ausbeute aus NADH und FADH₂ angeben; wichtige Inhibitoren benennen."
      ],
      summary:
        "Die Atmungskette sitzt in der inneren Mitochondrienmembran. NADH und FADH₂ geben Elektronen ab; diese werden schrittweise auf O₂ übertragen (→ H₂O). Dabei pumpen Komplexe I, III und IV Protonen in den Intermembranraum. Der so erzeugte elektrochemische Gradient (proton motive force) treibt die ATP-Synthase (Komplex V) an (Chemiosmose nach Mitchell).",
      keyPoints: [
        "Ort: innere Mitochondrienmembran.",
        "Komplex I (NADH-Ubichinon-Oxidoreduktase): NADH → NAD⁺; pumpt 4 H⁺.",
        "Komplex II (Succinat-Dehydrogenase): FADH₂ → FAD; pumpt KEINE H⁺ → weniger ATP pro FADH₂.",
        "Komplex III (Cytochrom-bc₁): Q-Zyklus; pumpt 4 H⁺.",
        "Komplex IV (Cytochrom-c-Oxidase): 4 Cyt c + O₂ + 4 H⁺ → 2 H₂O; pumpt 2 H⁺.",
        "ATP-Synthase (Komplex V): Rückfluss von ~3 H⁺ → 1 ATP (Rotationsmechanismus).",
        "P/O-Verhältnisse: NADH → ~2,5 ATP; FADH₂ → ~1,5 ATP.",
        "Entkoppler (z. B. DNP, UCP1): machen Membran H⁺-permeabel → Gradient kollabiert → keine ATP-Synthese, nur Wärme."
      ],
      formulas: [
        "Gesamtreaktion: NADH + ½ O₂ + H⁺ → NAD⁺ + H₂O  (ΔG° ≈ −220 kJ/mol)",
        "P/O: NADH ≈ 2,5 ATP; FADH₂ ≈ 1,5 ATP"
      ],
      visual: `
        <pre style="font-size:10px; line-height:1.4; background:rgba(0,0,0,0.15); padding:8px; border-radius:6px;">
Intermembranraum  [H⁺ ↑↑ konzentriert]
──────────────────────────────────────────────────────────────
 Komplex I → CoQ → Komplex III → Cyt c → Komplex IV → O₂→H₂O
  (NADH)          ↑
             Komplex II
             (FADH₂)
──────────────────────────────────────────────────────────────
Matrix            [H⁺ niedrig]

H⁺ fließt durch ATP-Synthase (Komplex V) zurück → ATP
        </pre>
      `,
      detailBlocks: [
        {
          title: "Chemiosmose: Mitchell-Hypothese",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p><b>Proton motive force (pmf) = ΔΨ + ΔpH</b></p>
              <ol>
                <li>Komplexe I, III, IV pumpen H⁺ → Intermembranraum (höhere Konzentration + positiver geladen als Matrix).</li>
                <li>Elektrochemischer Gradient treibt H⁺ durch die ATP-Synthase zurück in die Matrix.</li>
                <li><b>ATP-Synthase (F₀F₁):</b> H⁺-Fluss durch F₀ dreht den c-Ring → mechanische Energie → F₁ katalysiert ADP + Pᵢ → ATP.</li>
                <li>~3 H⁺ pro ATP; ca. 10–13 H⁺ pro vollständige Umdrehung (→ 3–4 ATP pro Umdrehung).</li>
              </ol>
            </div>
          `
        },
        {
          title: "Inhibitoren der Atmungskette (Klausurwissen)",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <ul>
                <li><b>Rotenon:</b> hemmt Komplex I → kein NADH-Umsatz.</li>
                <li><b>Antimycin A:</b> hemmt Komplex III.</li>
                <li><b>CO & CN⁻ (Cyanid):</b> hemmen Komplex IV (binden Fe im Hämzentrum) → kein O₂-Verbrauch → rasch tödlich.</li>
                <li><b>Oligomycin:</b> hemmt ATP-Synthase (F₀) direkt → Gradient baut sich auf, aber kein ATP.</li>
                <li><b>FCCP/DNP (Entkoppler):</b> H⁺-Ionophore → Gradient kollabiert → Atmungskette läuft unkontrolliert, aber kein ATP → Wärme.</li>
                <li><b>UCP1 (Thermogenin):</b> physiologischer Entkoppler im braunen Fettgewebe (Kälteadaptation).</li>
              </ul>
            </div>
          `
        },
        {
          title: "Gesamtbilanz aerobe Glucoseoxidation",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <table style="border-collapse:collapse; width:100%; font-size:12px;">
                <tr style="border-bottom:1px solid rgba(255,255,255,0.2);">
                  <th style="text-align:left; padding:4px;">Schritt</th>
                  <th style="padding:4px; text-align:center;">NADH</th>
                  <th style="padding:4px; text-align:center;">FADH₂</th>
                  <th style="padding:4px; text-align:center;">Direkt-ATP</th>
                </tr>
                <tr><td style="padding:4px;">Glykolyse</td><td style="padding:4px; text-align:center;">2</td><td style="padding:4px; text-align:center;">0</td><td style="padding:4px; text-align:center;">2</td></tr>
                <tr><td style="padding:4px;">PDH (×2)</td><td style="padding:4px; text-align:center;">2</td><td style="padding:4px; text-align:center;">0</td><td style="padding:4px; text-align:center;">0</td></tr>
                <tr><td style="padding:4px;">TCA (×2)</td><td style="padding:4px; text-align:center;">6</td><td style="padding:4px; text-align:center;">2</td><td style="padding:4px; text-align:center;">2 (GTP)</td></tr>
                <tr><td style="padding:4px;">Atmungskette</td><td style="padding:4px; text-align:center;">–</td><td style="padding:4px; text-align:center;">–</td><td style="padding:4px; text-align:center;">~25</td></tr>
                <tr style="font-weight:bold; border-top:1px solid rgba(255,255,255,0.2);">
                  <td style="padding:4px;">Gesamt</td><td></td><td></td><td style="padding:4px; text-align:center;"><b>~30–32 ATP</b></td>
                </tr>
              </table>
              <p style="font-size:11px; opacity:0.8; margin-top:4px;">Ältere Bücher: 36–38 ATP (veraltete P/O-Verhältnisse). Modern: ~30–32 ATP.</p>
            </div>
          `
        }
      ]
    },

// ── NEU: Transkription & Translation (Detail) ────────────────────────────────
    {
      id: "bio-transkription-translation",
      title: "Transkription & Translation im Detail",
      tags: ["Transkription", "Translation", "mRNA", "tRNA", "Ribosom", "Codon", "Spleißen", "5'-Cap", "Poly-A"],
      goals: [
        "Schritte der Transkription (Initiation, Elongation, Termination) bei Eukaryoten beschreiben.",
        "mRNA-Prozessierung (5'-Cap, Poly-A-Schwanz, Spleißen) erklären.",
        "Schritte der Translation und die Rolle von mRNA, tRNA und Ribosom darstellen.",
        "Genetischen Code, Degeneriertheit und Wobble-Hypothese einordnen."
      ],
      summary:
        "Transkription: RNA-Polymerase II liest den Templatstrang (3'→5') und synthetisiert prä-mRNA (5'→3'). Nach Prozessierung (5'-Cap, 3'-Poly-A, Spleißen der Introns) verlässt reife mRNA den Kern. Translation: Das 80S-Ribosom liest mRNA 5'→3'; aminoacyl-tRNAs bringen die Aminosäuren (Codon-Anticodon); Peptidyltransferase (Ribozym) knüpft die Peptidbindung. Termination beim Stopp-Codon.",
      keyPoints: [
        "Transkription im Zellkern (Eukaryoten); RNA-Polymerase II für mRNA; Templatstrang 3'→5', prä-mRNA 5'→3'.",
        "Prozessierung: (1) 5'-Cap (m7G-Kappe), (2) Poly-A-Schwanz (~200 A am 3'-Ende), (3) Spleißen (Introns entfernt via Spleißosom; Exons verbunden).",
        "Alternatives Spleißen: ein Gen → mehrere Proteinvarianten (wichtig für Proteindiversität).",
        "Translation: mRNA-Codon (3 Basen) ↔ tRNA-Anticodon; Aminoacyl-tRNA-Synthetase lädt tRNA mit richtiger AS.",
        "A-Stelle: neue aminoacyl-tRNA bindet; P-Stelle: wachsendes Peptid; E-Stelle: freie tRNA verlässt Ribosom.",
        "Peptidyltransferase = 28S-rRNA (Ribozym!); keine klassische Protein-Enzymaktivität.",
        "Startcodon: AUG (→ Met/fMet); Stoppcodons: UAA, UAG, UGA (Release-Faktor, keine tRNA).",
        "Genetischer Code: degeneriert (mehrere Codons/AS), universell (fast), nicht-überlappend.",
        "Wobble-Hypothese: 3. Codon-Base toleriert Fehlpaarungen → <64 tRNA-Typen für 61 Sense-Codons."
      ],
      formulas: [
        "5'-Cap: 7-Methylguanosin (m7GpppN) am 5'-Ende der mRNA",
        "Startcodon: AUG (Met); Stoppcodons: UAA, UAG, UGA"
      ],
      visual: `
        <pre style="font-size:10px; line-height:1.4; background:rgba(0,0,0,0.15); padding:8px; border-radius:6px;">
TRANSKRIPTION (Zellkern):
DNA-Templatstrang (3'→5')
  ↓ RNA-Polymerase II
prä-mRNA
  ↓ Prozessierung
reife mRNA: 5'-Cap – [Exon1]–[Exon2]–...–Poly-A-3'

TRANSLATION (Ribosom, Cytoplasma):
mRNA: 5'... AUG – Codon2 – Codon3 – ... – UAA ...3'
              ↕        ↕
       tRNA(Met)   tRNA(AS₂)   ← Anticodon-Paarung
              ↓ Peptidyltransferase
       Met – AS₂ – ...  (wachsendes Polypeptid)
        </pre>
      `,
      detailBlocks: [
        {
          title: "Transkription – Schritte im Detail",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p><b>Initiation:</b></p>
              <ul>
                <li>Allgemeine Transkriptionsfaktoren (TFIID, TFIIB …) binden an den Promotor (TATA-Box, ~−30 vom Startpunkt).</li>
                <li>RNA-Polymerase II wird rekrutiert → Präinitiationskomplex → DNA wird entwunden (offener Komplex).</li>
              </ul>
              <p><b>Elongation:</b></p>
              <ul>
                <li>RNA-Pol II liest Templatstrang 3'→5' und synthetisiert RNA 5'→3' (RNA-Polymerase kann keinen Primer starten ohne ihn).</li>
                <li>5'-Capping: bereits bei ~25 nt Länge wird m7G-Cap angehängt.</li>
              </ul>
              <p><b>Termination & Prozessierung:</b></p>
              <ul>
                <li>Polyadenylierungssignal (AAUAAA): prä-mRNA wird stromabwärts gespalten → Poly-A-Polymerase hängt ~200 A an.</li>
                <li>Spleißen: Spleißosom (5 snRNPs) entfernt Introns; Exons werden in der richtigen Reihenfolge verbunden.</li>
              </ul>
            </div>
          `
        },
        {
          title: "Translation – Schritte im Detail",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p><b>Initiation:</b></p>
              <ul>
                <li>Kleine Untereinheit (40S) + eIF-Faktoren + Initiator-Met-tRNA scannen 5'-Cap → finden erstes AUG.</li>
                <li>Große Untereinheit (60S) assoziiert → funktionelles 80S-Ribosom.</li>
              </ul>
              <p><b>Elongation (zyklisch):</b></p>
              <ol>
                <li><b>Codon-Erkennung:</b> Aminoacyl-tRNA (EF-1α/GTP) bindet A-Stelle; Codon–Anticodon-Paarung.</li>
                <li><b>Peptidyltransfer:</b> 28S-rRNA (Ribozym) überträgt wachsendes Peptid von P- auf A-Stelle → neue Peptidbindung.</li>
                <li><b>Translokation:</b> EF-2/GTP schiebt Ribosom um 1 Codon; P→E-Stelle (leere tRNA weg); A-Stelle frei.</li>
              </ol>
              <p><b>Termination:</b></p>
              <ul>
                <li>Stopp-Codon in A-Stelle → Release-Faktor (eRF1) bindet → Peptid wird hydrolysiert und freigesetzt.</li>
                <li>Ribosom dissoziiert in Untereinheiten.</li>
              </ul>
            </div>
          `
        },
        {
          title: "Genetischer Code & Wobble",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <ul>
                <li><b>Degeneriert:</b> 61 Sense-Codons für 20 Aminosäuren → mehrere Codons pro AS möglich (z. B. Leu: 6 Codons).</li>
                <li><b>3 Stoppcodons:</b> UAA ("Ocher"), UAG ("Amber"), UGA ("Opal") – keine tRNA, nur Release-Faktor.</li>
                <li><b>Universell:</b> fast identisch in Bakterien, Pflanzen, Tieren (Ausnahme: Mitochondrien, z. B. UGA = Trp).</li>
                <li><b>Wobble:</b> Die 3. Codon-Base (5'-Ende des Anticodons) wird weniger strikt gelesen → eine tRNA kann mehrere Codons erkennen → weniger als 61 tRNA-Typen nötig.</li>
                <li><b>Klausur-Merksatz:</b> AUG = Start (Met). UAA, UAG, UGA = Stopp (keine AS eingebaut).</li>
              </ul>
            </div>
          `
        }
      ]
    },

// ── NEU: Gluconeogenese ──────────────────────────────────────────────────────
    {
      id: "bio-gluconeogenese",
      title: "Gluconeogenese: Glucosesynthese aus Nicht-KH",
      tags: ["Gluconeogenese", "Pyruvat", "OAA", "PEPCK", "FBPase-1", "Leber", "Cori-Zyklus", "Regulation"],
      goals: [
        "Ort, Substrate und Zweck der Gluconeogenese benennen.",
        "Die drei irreversiblen Bypässe der Glykolyse und die jeweiligen GNG-Enzyme nennen.",
        "Energiebilanz und reziproke Regulation mit der Glykolyse erklären.",
        "Cori-Zyklus und seine physiologische Bedeutung beschreiben."
      ],
      summary:
        "Die Gluconeogenese (GNG) synthetisiert Glucose aus Nicht-Kohlenhydrat-Vorstufen (Pyruvat, Laktat, Oxalacetat, Glycerol, glucogene Aminosäuren). Sie läuft hauptsächlich in der Leber ab und sichert den Blutzucker bei Fasten/Hunger. 7 der 10 Glykolyse-Schritte laufen reversibel; drei irreversible Schritte werden durch spezifische Enzyme umgangen.",
      keyPoints: [
        "Ort: Leber (hauptsächlich), Nierenrinde. Kein Muskel (fehlt Glucose-6-Phosphatase → kein Export).",
        "Substrate: Pyruvat, Laktat (→ Pyruvat via LDH), Oxalacetat, Glycerol (aus Triglyceriden), glucogene Aminosäuren (alle außer Leucin und Lysin).",
        "Bypass 1: Pyruvat → PEP (Pyruvatcarboxylase: Pyruvat + CO₂ + ATP → OAA; dann PEPCK: OAA + GTP → PEP + CO₂).",
        "Bypass 2: Fructose-1,6-bisphosphat → Fructose-6-phosphat (FBPase-1, hydrolysiert Pi).",
        "Bypass 3: Glucose-6-phosphat → Glucose (Glucose-6-Phosphatase, ER-Lumen, nur Leber/Niere).",
        "Energiebilanz: Synthese von 1 Glucose kostet 6 ATP + 2 GTP + 2 NADH (deutlich teurer als Glykolyse liefert).",
        "Regulation: Glucagon (Hunger) → cAMP ↑ → PFK-2-Hemmung → F-2,6-BP ↓ → Glykolyse ↓, GNG ↑. Insulin: umgekehrt.",
        "Cori-Zyklus: Laktat (Muskel, Erythrozyten) → Blut → Leber → GNG → Glucose → Blut → Muskel."
      ],
      formulas: [
        "Pyruvat + CO₂ + ATP → OAA  (Pyruvatcarboxylase, Mitochondrien)",
        "OAA + GTP → PEP + CO₂  (PEPCK, Cytosol)",
        "F-1,6-BP → F-6-P + Pi  (FBPase-1)",
        "G-6-P → Glucose + Pi  (Glucose-6-Phosphatase, ER-Lumen)"
      ],
      visual: `
        <pre style="font-size:10px; line-height:1.4; background:rgba(0,0,0,0.15); padding:8px; border-radius:6px;">
Gluconeogenese (vereinfacht):

Pyruvat (Mitochondrien)
  ↓ Pyruvatcarboxylase (+ATP, +CO₂)
Oxalacetat (OAA)
  ↓ PEPCK (+GTP, −CO₂)
Phosphoenolpyruvat (PEP)      ← Bypass 1
  ↓ (7 reversible Schritte der Glykolyse, rückwärts)
Fructose-1,6-bisphosphat
  ↓ FBPase-1 (−Pi)            ← Bypass 2
Fructose-6-phosphat
  ↓ Phosphoglucoisomerase
Glucose-6-phosphat
  ↓ Glucose-6-Phosphatase     ← Bypass 3
Glucose → Export ins Blut
        </pre>
      `,
      detailBlocks: [
        {
          title: "Die 3 Bypässe im Detail",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p><b>Bypass 1: Pyruvat → PEP</b></p>
              <ul>
                <li>Pyruvatkinase (Glykolyse) ist irreversibel → muss umgangen werden.</li>
                <li><b>Pyruvatcarboxylase</b> (Mitochondrium): Pyruvat + HCO₃⁻ + ATP → OAA. Cofaktor: Biotin (Vitamin B7).</li>
                <li><b>PEPCK</b> (Cytosol oder Mitochondrium): OAA + GTP → PEP + CO₂.</li>
              </ul>
              <p><b>Bypass 2: F-1,6-BP → F-6-P</b></p>
              <ul>
                <li>PFK-1 (Glykolyse) irreversibel; stattdessen: <b>FBPase-1</b> hydrolysiert das 1-Phosphat.</li>
                <li>FBPase-1 wird durch F-2,6-BP gehemmt; PFK-1 durch F-2,6-BP aktiviert → reziproke Regulation.</li>
              </ul>
              <p><b>Bypass 3: G-6-P → Glucose</b></p>
              <ul>
                <li>Hexokinase irreversibel; stattdessen: <b>Glucose-6-Phosphatase</b> im ER-Lumen.</li>
                <li>Nur Leber + Nierenrinde → nur diese Organe können Glucose ins Blut exportieren.</li>
              </ul>
            </div>
          `
        },
        {
          title: "Cori-Zyklus & physiologische Bedeutung",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <p>Der <b>Cori-Zyklus</b> verbindet Muskel und Leber:</p>
              <ol>
                <li>Muskel (Anaerob): Glucose → Pyruvat → Laktat (Glykolyse + LDH).</li>
                <li>Laktat → Blut → Leber.</li>
                <li>Leber: Laktat → Pyruvat (LDH) → Glucose (GNG, kostet ATP).</li>
                <li>Glucose → Blut → zurück zum Muskel.</li>
              </ol>
              <p><b>Bedeutung:</b></p>
              <ul>
                <li>Recycling von Laktat (verhindert Laktatazidose).</li>
                <li>Erhält Blutzucker bei starker körperlicher Belastung.</li>
                <li>Die Leber „zahlt" die energetischen Kosten für den Muskel.</li>
              </ul>
            </div>
          `
        },
        {
          title: "Reziproke Regulation GNG vs. Glykolyse",
          content: `
            <div style="font-size:13px; line-height:1.5;">
              <table style="border-collapse:collapse; width:100%; font-size:12px;">
                <tr style="border-bottom:1px solid rgba(255,255,255,0.2);">
                  <th style="text-align:left; padding:4px;">Signal</th>
                  <th style="padding:4px;">Glykolyse</th>
                  <th style="padding:4px;">GNG</th>
                </tr>
                <tr><td style="padding:4px;">Glucagon (Fasten)</td><td style="padding:4px; text-align:center;">↓ gehemmt</td><td style="padding:4px; text-align:center;">↑ aktiviert</td></tr>
                <tr><td style="padding:4px;">Insulin (nach Essen)</td><td style="padding:4px; text-align:center;">↑ aktiviert</td><td style="padding:4px; text-align:center;">↓ gehemmt</td></tr>
                <tr><td style="padding:4px;">F-2,6-BP hoch</td><td style="padding:4px; text-align:center;">↑ (PFK-1 aktiv)</td><td style="padding:4px; text-align:center;">↓ (FBPase-1 gehemmt)</td></tr>
                <tr><td style="padding:4px;">AMP/ADP hoch</td><td style="padding:4px; text-align:center;">↑ aktiviert</td><td style="padding:4px; text-align:center;">↓ FBPase-1 gehemmt</td></tr>
                <tr><td style="padding:4px;">Citrat hoch</td><td style="padding:4px; text-align:center;">↓ PFK-1 gehemmt</td><td style="padding:4px; text-align:center;">↑ FBPase-1 aktiviert</td></tr>
              </table>
            </div>
          `
        }
      ]
    }

  ]
}



] // schließt subjects-Array
}; // schließt learnData

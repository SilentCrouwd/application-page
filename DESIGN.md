---
version: alpha
name: application-page
description: Persönliche Bewerbungs-/Visitenkartenseite im Bento-Grid. Warmer Minimalismus (inspiriert von der Notion-Analyse aus VoltAgent/awesome-design-md, MIT) – warm-neutrale Flächen, feine Hairlines, ein einziger violetter Akzent und Pastell-Tints für hervorgehobene Kacheln.

colors:
  # Light
  canvas: "#f6f5f4"        # Seitenhintergrund
  card: "#ffffff"          # Kachel-Fläche
  surface: "#fafaf9"       # Innere Flächen (z. B. Zitat-Box)
  hairline: "#e5e3df"      # 1px Borders, Divider
  hairline-strong: "#c8c4be"
  ink: "#1a1a1a"           # Headlines
  body: "#37352f"          # Fließtext (warmes Charcoal)
  muted: "#5d5b54"         # Sekundärtext
  subtle: "#787671"        # Labels, Footer
  primary: "#5645d4"       # einziger Akzent: Hover, Fokus, Links
  primary-pressed: "#4534b3"
  tint-lavender: "#e6e0f5"
  tint-peach: "#ffe8d4"
  tint-mint: "#d9f3e1"
  tint-sky: "#dcecfa"
  # Dark (eigene Ergänzung – in der Vorlage nicht enthalten)
  dark-canvas: "#191918"
  dark-card: "#222220"
  dark-surface: "#2a2a27"
  dark-hairline: "#34332f"
  dark-ink: "#f2f1ee"
  dark-body: "#d6d4ce"
  dark-muted: "#a4a097"
  dark-primary: "#9a8ff5"
  dark-tint-lavender: "#2b2640"
  dark-tint-peach: "#3a2a1e"
  dark-tint-mint: "#1e3326"
  dark-tint-sky: "#1d2b3a"

typography:
  fontFamily: Inter, system-ui, -apple-system, "Segoe UI", sans-serif
  display:   { fontSize: 36px → 60px, fontWeight: 600, lineHeight: 1.05, letterSpacing: -0.02em }
  heading-2: { fontSize: 24px → 30px, fontWeight: 600, lineHeight: 1.2, letterSpacing: -0.01em }
  heading-4: { fontSize: 18px → 22px, fontWeight: 600, lineHeight: 1.3 }
  subtitle:  { fontSize: 18px → 20px, fontWeight: 400, lineHeight: 1.5 }
  body:      { fontSize: 16px → 18px, fontWeight: 400, lineHeight: 1.6 }
  eyebrow:   { fontSize: 12px, fontWeight: 600, letterSpacing: 0.1em, uppercase: true }

rounded:
  md: 8px      # Buttons, Inputs
  lg: 12px     # innere Boxen
  xl: 16px     # Bento-Kacheln (Standard)
  full: 9999px # Badges

spacing:            # 4px-Basis
  tile-gap: 16px    # gap zwischen Kacheln (gap-4)
  tile-pad: 24px → 32px  # p-6 lg:p-8
  section: 64px → 96px   # Abstand zwischen Sections
  container: 1280px max, Gutter 16px (mobil) / 32px (ab sm)

elevation:
  flat: "none + 1px hairline"                       # Standard-Kachel
  hover: "rgba(15,15,15,0.08) 0 4px 12px 0"          # interaktive Kacheln
  hover-dark: "rgba(0,0,0,0.4) 0 4px 16px 0"

motion:
  duration: 200ms
  easing: ease-out
---

## Prinzipien

- **Warm statt kalt:** Hintergrund ist warm-grau (`canvas`), Kacheln sind weiß. Kein reines Schwarz für Text – `ink`/`body` sind leicht warm.
- **Ein Akzent:** `primary` (Violett) nur für Interaktion – Hover-Border, Icon-Hover, Fokus-Ring. Nie für große Flächen oder Fließtext.
- **Pastell-Tints sparsam:** Maximal eine getönte Kachel pro Bento-Reihe, um Rhythmus zu erzeugen. Text auf Tints bleibt `body`.
- **Flach mit Hairlines:** Kacheln haben 1px `hairline`-Border und keinen Schatten. Schatten nur beim Hover interaktiver Kacheln.
- **Theme:** Dark Mode über `data-theme="dark"` am `<html>`. Startwert = gespeicherte Wahl (`localStorage.theme`) oder Systemeinstellung; runder Toggle oben rechts in der Namenskachel (`bg-surface`, Hairline). Für Sonderfälle steht die Tailwind-Variante `dark:` zur Verfügung.
- **Ruhige Bewegung:** Hover = Border-Farbe + leichter Lift (`-translate-y-0.5`), kein Scale, keine Glows.

## Bento-Grid

- Hero: 3 Spalten (`sm:grid-cols-3`), Kompetenzen: 4 Spalten (`sm:grid-cols-4`), Kontakt: 2 → 4 Spalten.
- Einheitlich `gap-4`, Kacheln `rounded-2xl`, Padding `p-6 lg:p-8`.
- Bildkacheln: kein Border, `object-cover`, gleicher Radius wie Textkacheln.
- Section-Abstand `gap-16 lg:gap-24`; Section-Überschriften mit Eyebrow-Label darüber.

## Do / Don't

- Do: Headlines `font-semibold` mit negativem Tracking.
- Do: Labels als Eyebrow (12px, uppercase, `tracking-widest`, `subtle`).
- Don't: Kursiv als Gestaltungsmittel für ganze Absätze.
- Don't: Verschiedene Radien für Kacheln mischen.
- Don't: Farbige Glows oder `scale` beim Hover.

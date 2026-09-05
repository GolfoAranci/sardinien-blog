# Sardinien-Blog

Eine Tipp- und Ideensammlung rund um Sardinien – Strände, Kulinarik, Ausflüge, Reiseziele und Anreise, aufbereitet wie ein Blog. Als statische Website gebaut – lässt sich unverändert auf jedes einfache Webhosting (z. B. via FTP oder GitHub Pages) hochladen, ohne Server, Datenbank oder Build-Schritt.

## Öffnen (lokal)

Doppelklick auf [index.html](index.html) öffnet die Startseite im Browser. Von dort aus sind alle Artikel verlinkt.

## Struktur

```
Sardinien-Blog/
├── index.html          Startseite mit Artikel-Übersicht
├── style.css            Gemeinsames Design für alle Seiten
├── images/              Titelbilder (Pixabay, siehe Bildnachweis)
└── posts/
    ├── straende-sardinien.html
    ├── kulinarik-sardinien.html
    ├── ausfluege-sardinien.html
    ├── reiseziele-sardinien.html
    ├── faehre-schiffe-sardinien.html
    ├── tag-oder-nachtfaehre.html
    ├── faehrhaefen-vergleich.html
    ├── flughaefen-sardinien.html
    ├── tiere-sardinien.html
    ├── delfintouren-sardinien.html
    ├── jahreszeiten-sardinien.html
    └── reisetipps-sardinien.html
```

## Artikel

- **Strände** – Die schönsten Strände Sardiniens (ganze Insel, nach Region gegliedert)
- **Kulinarik** – Sardische Küche: Gerichte, Wein & Restaurant-Tipps
- **Ausflüge** – Die schönsten Ausflugsziele auf Sardinien (Tavolara, La Maddalena, Grotte di Nettuno, Su Nuraxi, Cagliari)
- **Reiseziele** – Regionen Sardiniens im Überblick (Costa Smeralda, Alghero, Golfo di Orosei, Cagliari, Barbagia, Sinis-Halbinsel)
- **Anreise**
  - Mit der Fähre nach Sardinien: Die Schiffe
  - Tagfähre oder Nachtfähre? Die Vor- und Nachteile
  - Fährhäfen im Vergleich: Von wo nach Sardinien? (Genua, Savona, Livorno, Civitavecchia, Toulon)
  - Flughäfen im Vergleich: Olbia, Cagliari oder Alghero?
- **Natur**
  - Tiere auf Sardinien: Wildpferde, Esel & Gänsegeier
  - Delfintouren auf Sardinien: Wo und worauf achten?
- **Tipps**
  - Praktische Reisetipps für Sardinien (inkl. aktuellem Trend zu Strand-Reservierungen)
  - Sardinien nach Jahreszeit: Wann ist die beste Reisezeit?

Bewusst als allgemeine Ideen- und Tippsammlung angelegt, nicht als persönliches Reisetagebuch – die Inhalte gelten für die ganze Insel, nicht nur für eine bestimmte Region oder Reise.

## Design

Überschriften nutzen die Google-Schriftart "Poppins" (per `@import` in `style.css` eingebunden, keine zusätzlichen `<link>`-Tags nötig). Artikelkarten haben einen dezenten Hover-Effekt (Bild-Zoom, Schatten) sowie eine sanfte Eingangs-Animation; der Hero-Bereich der Startseite hat dezente, verschwommene Farbflächen im Hintergrund.

## Online schalten

Da es sich um reine, statische HTML/CSS/JS-Dateien ohne externe Abhängigkeiten handelt, genügt es, den kompletten Ordnerinhalt auf einen Webspace hochzuladen (Ordnerstruktur beibehalten). Vor der Veröffentlichung empfehlenswert:

- **Fakten gegenprüfen**: Angaben zu Reservierungspflichten, Reedereien, Routen und Öffnungszeiten sind Stand September 2026 recherchiert und sollten regelmässig aktualisiert werden.
- **Impressum/Datenschutz ergänzen**, falls die Seite öffentlich zugänglich sein soll (in der Schweiz/EU je nach Reichweite ggf. gesetzlich erforderlich).

## Bildnachweis

Alle Titelbilder stammen von [Pixabay](https://pixabay.com) und stehen unter der freien [Pixabay-Inhaltslizenz](https://pixabay.com/service/license-summary/) (kostenlose Nutzung, keine Namensnennung erforderlich):

| Bild | Motiv |
|---|---|
| `images/straende-isuledda.jpg` | Strand S'Isuledda bei San Teodoro |
| `images/kulinarik-spaghetti.jpg` | Spaghetti mit Garnelen |
| `images/ausflug-tavolara.jpg` | Insel Tavolara |
| `images/reiseziele-alghero.jpg` | Altstadtmauer von Alghero |
| `images/anreise-ferry.jpg` | Fähre bei Sonnenuntergang |
| `images/tagnacht-faehre.jpg` | Sonnenaufgang über dem Meer |
| `images/faehrhaefen-genua.jpg` | Hafen von Genua |
| `images/tipps-map.jpg` | Landkarte, Reisepass und Kompass |
| `images/flughaefen-plane.jpg` | Flugzeug bei Sonnenuntergang |
| `images/tiere-pferd.jpg` | Pferdeporträt |
| `images/delfintouren-delfin.jpg` | Springender Delfin |
| `images/jahreszeiten-meer.jpg` | Küste im Abendlicht |

## Anpassen

Alle Seiten teilen sich die Datei [style.css](style.css) – Farben und Design lassen sich zentral über die CSS-Variablen im `:root`-Block anpassen. Neue Artikel am einfachsten durch Kopieren einer bestehenden Datei in `posts/` und Anpassen von Titel, Text und Bild erstellen; nicht vergessen, die neue Seite auch in der Artikel-Übersicht in [index.html](index.html) zu verlinken.

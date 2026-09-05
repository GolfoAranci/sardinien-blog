# Unser Sardinien-Blog

Ein privates Reise-Blog mit mehreren Artikeln rund um den Aufenthalt in Golfo Aranci und San Teodoro (22.09.–03.10.2026). Als statische Website gebaut – lässt sich unverändert auf jedes einfache Webhosting (z. B. via FTP oder GitHub Pages) hochladen, ohne Server, Datenbank oder Build-Schritt.

## Öffnen (lokal)

Doppelklick auf [index.html](index.html) öffnet die Blog-Startseite im Browser. Von dort aus sind alle Artikel verlinkt.

## Struktur

```
Sardinien-Blog/
├── index.html          Blog-Startseite mit Artikel-Übersicht
├── style.css            Gemeinsames Design für alle Seiten
├── images/              Titelbilder (Pixabay, siehe Bildnachweis)
└── posts/
    ├── countdown-golfo-aranci-san-teodoro.html
    ├── straende-nordosten-sardinien.html
    ├── kulinarik-golfo-aranci-san-teodoro.html
    ├── nachtfaehre-livorno-sardinien.html
    ├── ausflug-tavolara.html
    └── reisetipps-sardinien.html
```

## Artikel

1. **Vorfreude** – Countdown: Warum wir uns auf Golfo Aranci & San Teodoro freuen
2. **Strände** – Die schönsten Strände im Nordosten Sardiniens (inkl. Reservierungspflicht Cala Brandinchi/Lu Impostu)
3. **Kulinarik** – Restaurant-Tipps für beide Stationen der Reise
4. **Anreise** – Mit der Nachtfähre von Livorno nach Sardinien (Moby Legacy & Moby Fantasy)
5. **Ausflüge** – Die Insel Tavolara
6. **Tipps** – Kompakte Checkliste für die Reisevorbereitung

Die Startseite zeigt zusätzlich einen automatisch berechneten Countdown bis zur Abreise (22.09.2026).

## Online schalten

Da es sich um reine, statische HTML/CSS/JS-Dateien ohne externe Abhängigkeiten handelt, genügt es, den kompletten Ordnerinhalt auf einen Webspace hochzuladen (Ordnerstruktur beibehalten). Vor der Veröffentlichung empfehlenswert:

- **Eigene Fotos ergänzen**: Die aktuellen Titelbilder stammen von Pixabay (siehe Bildnachweis unten). Eigene Reisefotos lassen sich jederzeit einfach austauschen – dazu die entsprechende Datei in `images/` ersetzen (gleicher Dateiname) oder die `src`-Pfade in den `<img>`-Tags anpassen.
- **Fakten gegenprüfen**: Angaben zu Reservierungspflichten, Restaurant-Öffnungszeiten und Fährzeiten sind Stand September 2026 recherchiert und sollten vor Veröffentlichung/Reiseantritt nochmals verifiziert werden.
- **Impressum/Datenschutz ergänzen**, falls die Seite öffentlich zugänglich sein soll (in der Schweiz/EU je nach Reichweite ggf. gesetzlich erforderlich).

## Bildnachweis

Alle Titelbilder stammen von [Pixabay](https://pixabay.com) und stehen unter der freien [Pixabay-Inhaltslizenz](https://pixabay.com/service/license-summary/) (kostenlose Nutzung, keine Namensnennung erforderlich):

| Bild | Motiv |
|---|---|
| `images/vorfreude-suitcase.jpg` | Gepackter Koffer |
| `images/straende-isuledda.jpg` | Strand S'Isuledda bei San Teodoro |
| `images/kulinarik-spaghetti.jpg` | Spaghetti mit Garnelen |
| `images/anreise-ferry.jpg` | Fähre bei Sonnenuntergang |
| `images/ausflug-tavolara.jpg` | Insel Tavolara |
| `images/tipps-map.jpg` | Landkarte, Reisepass und Kompass |

## Anpassen

Alle Seiten teilen sich die Datei [style.css](style.css) – Farben und Design lassen sich zentral über die CSS-Variablen im `:root`-Block anpassen. Neue Artikel am einfachsten durch Kopieren einer bestehenden Datei in `posts/` und Anpassen von Titel, Text und Illustration erstellen; nicht vergessen, die neue Seite auch in der Artikel-Übersicht in [index.html](index.html) zu verlinken.

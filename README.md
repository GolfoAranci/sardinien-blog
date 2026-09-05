# Sardinien-Blog

Eine Tipp- und Ideensammlung rund um Sardinien – Strände, Kulinarik, Ausflüge, Reiseziele und Anreise, aufbereitet wie ein Blog. Als statische Website gebaut – lässt sich unverändert auf jedes einfache Webhosting (z. B. via FTP oder GitHub Pages) hochladen, ohne Server, Datenbank oder Build-Schritt.

## Öffnen (lokal)

Doppelklick auf [index.html](index.html) öffnet die Startseite im Browser. Von dort aus sind alle Artikel verlinkt.

## Struktur

```
Sardinien-Blog/
├── index.html          Startseite mit Artikel-Übersicht (Deutsch)
├── forum.html           Kommentar-Forum (siehe Abschnitt "Forum")
├── links.html           Nuetzliche externe Links (siehe Abschnitt "Links")
├── style.css            Gemeinsames Design für alle Seiten
├── images/              Titelbilder (Pixabay, siehe Bildnachweis; von allen Sprachversionen gemeinsam genutzt)
├── it/                  Italienische Version (siehe Abschnitt "Mehrsprachigkeit")
│   ├── index.html
│   └── posts/
└── posts/
    ├── straende-sardinien.html
    ├── kulinarik-sardinien.html
    ├── agriturismi-sardinien.html
    ├── weine-sardinien.html
    ├── biere-sardinien.html
    ├── likoere-sardinien.html
    ├── ausfluege-sardinien.html
    ├── reiseziele-sardinien.html
    ├── faehre-schiffe-sardinien.html
    ├── tag-oder-nachtfaehre.html
    ├── faehrhaefen-vergleich.html
    ├── flughaefen-sardinien.html
    ├── tiere-sardinien.html
    ├── wildschweine-sardinien.html
    ├── delfintouren-sardinien.html
    ├── jahreszeiten-sardinien.html
    ├── reisetipps-sardinien.html
    ├── mit-kindern-sardinien.html
    ├── autofahren-sardinien.html
    ├── camping-sardinien.html
    ├── wandern-sardinien.html
    ├── segeln-bootstouren-sardinien.html
    ├── feste-sardinien.html
    ├── cantu-a-tenore-sardinien.html
    ├── sprache-sardinien.html
    ├── nuraghen-geschichte-sardinien.html
    ├── fakten-sardinien.html
    ├── touren-buchen-sardinien.html
    ├── mietwagen-buchen-sardinien.html
    └── unterkunft-sardinien.html
```

## Artikel

- **Strände** – Die schönsten Strände Sardiniens (ganze Insel, nach Region gegliedert)
- **Kulinarik**
  - Sardische Küche: Gerichte, Wein & Restaurant-Tipps
  - Agriturismi auf Sardinien: Essen wie auf dem Land
  - Die besten Weine Sardiniens
  - Die besten Biere Sardiniens
  - Die besten Liköre Sardiniens
- **Ausflüge**
  - Die schönsten Ausflugsziele auf Sardinien (Tavolara, La Maddalena, Grotte di Nettuno, Su Nuraxi, Cagliari)
  - Wandern auf Sardinien: Die schönsten Routen (Selvaggio Blu, Tiscali, Gola Su Gorropu, Punta La Marmora)
  - Segeln und Bootstouren auf Sardinien
  - Die besten Touren und Ausflüge, die man buchen kann
- **Reiseziele**
  - Regionen Sardiniens im Überblick (Costa Smeralda, Alghero, Golfo di Orosei, Cagliari, Barbagia, Sinis-Halbinsel)
  - Unterkunft auf Sardinien: Hotel, Ferienwohnung oder Agriturismo?
- **Anreise**
  - Mit der Fähre nach Sardinien: Die Schiffe
  - Tagfähre oder Nachtfähre? Die Vor- und Nachteile
  - Fährhäfen im Vergleich: Von wo nach Sardinien? (Genua, Savona, Livorno, Civitavecchia, Toulon)
  - Flughäfen im Vergleich: Olbia, Cagliari oder Alghero?
  - Mietwagen auf Sardinien buchen: Worauf achten?
  - Sardinien im Herbst: Fähre oder Flug, Genua oder Livorno?
- **Natur**
  - Tiere auf Sardinien: Wildpferde, Esel & Gänsegeier
  - Wildschweine auf Sardinien
  - Delfintouren auf Sardinien: Wo und worauf achten?
- **Kultur** *(neu)*
  - Traditionelle Feste Sardiniens (Sant'Efisio, Sa Sartiglia, Mamuthones, Cavalcata Sarda)
  - Cantu a Tenore: Sardiniens mehrstimmiger Gesang (UNESCO-Kulturerbe)
  - Die sardische Sprache: Wörter und Ausdrücke zum Merken
  - Nuraghen und die Geschichte Sardiniens
  - 10 Fakten über Sardinien, die man vielleicht nicht kennt
- **Tipps**
  - Praktische Reisetipps für Sardinien (inkl. aktuellem Trend zu Strand-Reservierungen)
  - Sardinien nach Jahreszeit: Wann ist die beste Reisezeit?
  - Sardinien mit Kindern: Familienfreundliche Tipps
  - Autofahren auf Sardinien: Verkehr, Strassen & Mietwagen-Tipps
  - Camping auf Sardinien: Die schönsten Regionen

Bewusst als allgemeine Ideen- und Tippsammlung angelegt, nicht als persönliches Reisetagebuch – die Inhalte gelten für die ganze Insel, nicht nur für eine bestimmte Region oder Reise.

## Mehrsprachigkeit

Der Blog gibt es seit Kurzem auch auf **Italienisch**, im Unterordner [it/](it/index.html) – bewusst (noch) nicht als vollständige Übersetzung aller Artikel, sondern mit den vier bislang stärksten Themen als Start:

- Le spiagge più belle della Sardegna *(Die schönsten Strände Sardiniens)*
- La cucina sarda *(Sardische Küche)*
- Le regioni della Sardegna *(Regionen Sardiniens)*
- Le escursioni più belle in Sardegna *(Ausflugsziele)*

Ein kleiner **Sprachumschalter** (🇮🇹 / 🇩🇪) im Header verlinkt zwischen den vorhandenen deutschen und italienischen Fassungen – nur auf den Seiten, für die tatsächlich eine Übersetzung existiert, um keine toten Links zu erzeugen. Beide Sprachversionen sind zusätzlich über `<link rel="alternate" hreflang="...">` im `<head>` miteinander verknüpft (gutes Praxis-Signal für Suchmaschinen).

**Weitere Artikel übersetzen:** Eine bestehende deutsche Seite in `posts/` kopieren, ins Italienische übersetzen, unter `it/posts/` mit passendem Dateinamen ablegen, in `it/index.html` verlinken, in `sitemap.xml` ergänzen und auf beiden Seiten (DE + IT) den `lang-switch`-Link sowie den `hreflang`-Tag ergänzen.

## Forum

Über den **Forum**-Button oben rechts im Header (auf der Startseite und allen deutschen Artikeln) gelangt man zu [forum.html](forum.html), einem einfachen Kommentar-Board ohne Registrierung: Besucher geben nur einen Nickname ein und schreiben direkt los.

Technisch läuft das über [Cusdis](https://cusdis.com), einen leichtgewichtigen, quelloffenen und datenschutzfreundlichen Kommentar-Dienst (kostenlose Cloud-Stufe, aktuell 100 freigegebene Kommentare/Monat):

- Die **App ID** steckt direkt im `data-app-id`-Attribut in `forum.html` – Verwaltung/Dashboard unter [cusdis.com](https://cusdis.com) (Login mit dem GitHub-Account GolfoAranci).
- Neue Kommentare erscheinen **erst nach Freigabe** (Moderation) – es gibt eine E-Mail-Benachrichtigung mit Direkt-Freigabe-Link, ein Login ins Dashboard ist dafür nicht nötig.
- Für weitere Seiten mit eigenem Kommentarbereich (z. B. direkt unter einem Artikel) lässt sich derselbe Einbettungscode mit einer anderen `data-page-id` wiederverwenden.

## Links

Über den **Links**-Button oben rechts im Header gelangt man zu [links.html](links.html), einer kleinen kuratierten Sammlung externer Adressen (Wetter/Wellengang, offizielle Reisehinweise, Notfall, Karten, Nationalparks). Bewusst nur Themen ohne Affiliate-Potenzial – für Buchungsthemen (Mietwagen, Fähre, Unterkunft) siehe den Abschnitt "Monetarisierung" weiter unten.

## Design

- Überschriften nutzen die Google-Schriftart "Poppins" (per `@import` in `style.css` eingebunden, keine zusätzlichen `<link>`-Tags nötig).
- Artikelkarten haben einen dezenten Hover-Effekt (Bild-Zoom, Schatten) sowie eine sanfte Eingangs-Animation; der Hero-Bereich der Startseite hat dezente, verschwommene Farbflächen im Hintergrund.
- Das Logo im Header ist eine stilisierte Sardinien-Insel-Silhouette (Inline-SVG, kein Bild).
- Auf der Startseite lässt sich die Artikel-Übersicht per Themen-Filter (Leiste über den Karten) auf eine Kategorie eingrenzen; die restlichen Karten rücken automatisch zusammen (`hidden`-Attribut statt Scroll-Anker).

## SEO & Analytics

- **sitemap.xml** und **robots.txt** im Hauptverzeichnis für Suchmaschinen.
- Jede Seite hat eine individuelle **Meta-Description** für bessere Suchergebnis-Snippets.
- **Google Analytics (GA4)** ist eingebunden (`analytics.js`), lädt aber erst nach Zustimmung über den Cookie-Banner am unteren Bildschirmrand (`.cookie-banner` in `style.css`). Die Measurement-ID steht am Anfang von `analytics.js` (`GA_ID`). Die Zustimmung wird im `localStorage` des jeweiligen Browsers gespeichert.
- Neu bei Google veröffentlichte Seiten werden nicht automatisch gefunden – ohne Backlinks und ohne Einreichung in der [Google Search Console](https://search.google.com/search-console) kann es Tage bis Wochen dauern, bis sie indexiert wird.

## Monetarisierung (vorbereitet, noch nicht aktiv)

Drei Artikel sind gezielt so angelegt, dass sie sich später mit Affiliate-Links verbinden lassen, sobald ein Partnerprogramm-Konto existiert:

- **Die besten Touren und Ausflüge, die man buchen kann** → z. B. GetYourGuide oder Viator
- **Mietwagen auf Sardinien buchen** → z. B. DiscoverCars oder Rentalcars
- **Unterkunft auf Sardinien** → z. B. Booking.com

Aktuell enthalten diese Artikel nur allgemeine Erwähnungen solcher Plattformen (keine echten Affiliate-Links, keine Provisionen). Anmeldung bei den Partnerprogrammen muss der Website-Betreiber selbst vornehmen (eigenes Konto, oft mit Bank-/Steuerdaten) – danach lassen sich die entsprechenden Textstellen gezielt durch echte Affiliate-Links ersetzen.

Display-Werbung (z. B. Google AdSense) lohnt sich erst ab nennenswertem, wiederkehrendem Traffic und ist aktuell nicht eingebunden.

## Online schalten

Da es sich um reine, statische HTML/CSS/JS-Dateien ohne externe Abhängigkeiten handelt, genügt es, den kompletten Ordnerinhalt auf einen Webspace hochzuladen (Ordnerstruktur beibehalten). Vor der Veröffentlichung empfehlenswert:

- **Fakten gegenprüfen**: Angaben zu Reservierungspflichten, Reedereien, Routen und Öffnungszeiten sind Stand September 2026 recherchiert und sollten regelmässig aktualisiert werden.
- **Impressum/Datenschutzerklärung ergänzen**: Durch den Einsatz von Google Analytics ist eine Datenschutzerklärung (mit Hinweis auf Google Analytics, Auftragsverarbeitung durch Google, Widerrufsmöglichkeit) rechtlich empfehlenswert bis erforderlich, je nach Zielpublikum (Schweiz/EU). Aktuell verlinkt der Cookie-Banner auf keine solche Seite.

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
| `images/agriturismi-tisch.jpg` | Käse, Trauben und Rotwein auf rustikalem Tisch |
| `images/weine-glaeser.jpg` | Rot- und Weisswein mit Trauben |
| `images/biere-glas.jpg` | Frisch gezapftes Bier |
| `images/likoere-flaschen.jpg` | Spirituosenflaschen im Regal |
| `images/wildschweine-eber.jpg` | Wildschwein in freier Natur |
| `images/feste-kostueme.jpg` | Traditionelle sardische Tracht mit Stickerei |
| `images/cantu-tenore-nuoro.jpg` | Berglandschaft bei Nuoro (Barbagia) |
| `images/sprache-buch.jpg` | Aufgeschlagenes altes Buch |
| `images/nuraghen-losa.jpg` | Nuraghe Losa |
| `images/fakten-sardinien.jpg` | Sommerliche Küstenlandschaft |
| `images/wandern-berg.jpg` | Wanderweg im Gebirge |
| `images/segeln-kueste.jpg` | Segelboot vor der Küste |
| `images/mitkindern-familie.jpg` | Familie am Strand |
| `images/autofahren-strasse.jpg` | Kurvenreiche Landstrasse |
| `images/camping-zelt.jpg` | Zelt am Strand |
| `images/touren-boot.jpg` | Kleines Boot auf ruhigem Meer |
| `images/mietwagen-schluessel.jpg` | Autoschlüssel im Zündschloss |
| `images/unterkunft-zimmer.jpg` | Hotelzimmer mit Meerblick |
| `images/herbst-sturm.jpg` | Aufziehende Herbstwolken über einer felsigen Küste |

## Anpassen

Alle Seiten teilen sich die Datei [style.css](style.css) – Farben und Design lassen sich zentral über die CSS-Variablen im `:root`-Block anpassen. Neue Artikel am einfachsten durch Kopieren einer bestehenden Datei in `posts/` und Anpassen von Titel, Text und Bild erstellen; nicht vergessen, die neue Seite auch in der Artikel-Übersicht in [index.html](index.html) zu verlinken.

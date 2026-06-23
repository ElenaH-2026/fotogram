# ![Fotogram Logo](/assets/icons/logo-fotogram-40px.png) Fotogram - Elenas & Michis Reisefotos

<div align="center">
        
![Projektmanagement](https://img.shields.io/badge/Projektmanagement-Trelloboard_mit_Kanbanprozess-0055cc?style=for-the-badge)
<img width="12" />
![Lernprojekt](https://img.shields.io/badge/Lernprojekt-Frontend-00939b?style=for-the-badge)
<img width="12" />
![Projektstatus](https://img.shields.io/badge/Projektstatus-abgeschlossen_im_März_2026-009600?style=for-the-badge)

</div>

<div align="center">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-original.svg" height="40" alt="trello logo" />
        <img width="12" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" alt="html5 logo"  />
        <img width="12" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" alt="css3 logo" />
        <img width="12" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
</div>
<img/>
<div align="center">
        
Mein Fotogram ist eine vollständig responsive und performant optimierte Fotogalerie-App, die Bildinhalte und Beschreibungen dynamisch via JavaScript rendert.<br>Das Projekt wurde nach strengen WCAG-Standards entwickelt, um Barrierefreiheit durch Screenreader-Unterstützung und eine lückenlose Tastaturnavigation zu gewährleisten.

</div>
        
![Screenshot des Pokédex](/assets/screenshots/screenshot-readme.jpg)


<div align="center">
        
🌐 Live-Ansicht meines Projekts: 👉 [Elenas & Michis Reisefotos](https://elenahiener.developerakademie.net/modul-6_2026-02_fotogram/2026-02_fotogram/)

</div>

## 👩‍💻 Entwicklerin

<div align="center">

### ![Avatar Elena](/assets/icons/elena-avatar-80px.png) Elena Hiener

</div>

<div align="center">    
        
📊 Projektmanagement: Trello-Board mit Kanban-Prozess  
        
</div>

<div align="center">
      
📧 Email: [hiener.elena@web.de](mailto:hiener.elena@web.de)
<img width="12" />
🔗 LinkedIn: [elena-hiener](https://de.linkedin.com/in/elena-hiener)
<img width="12" />
🐙 GitHub: [ElenaH-2026](https://github.com/ElenaH-2026)

</div>


## 📑 Inhaltsverzeichnis

⚙️ [Voraussetzungen](#️-voraussetzungen)
- 💻 [Laufzeitumgebung](#-laufzeitumgebung)
- 🎨 [Frontend-Technologien (UI)](#-frontend-technologien-ui)
- 💾 [Datenquelle / Schnittstelle](#-datenquelle--schnittstelle)

🚀 [Quickstart](#-quickstart)

🛠️ [Usage](#️-usage)
- 🗂️ [Projektstruktur](#-projektstruktur)
- 🌟 [Features](#-features)

📝 [Lizenz und Urheberrecht](#-lizenz-und-urheberrecht)


## ⚙️ Voraussetzungen

### 💻 Laufzeitumgebung

*Für dieses Projekt ist keine spezielle Laufzeitumgebung erforderlich.*

### 🎨 Frontend-Technologien (UI)
<div>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="30" alt="html5 logo"  />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="30" alt="css3 logo" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="30" alt="javascript logo"  />
</div>

| Technologie | Aufgabe |
| --- | --- |
| HTML5 | Struktur der App |
| CSS3+ | Design und die visuelle Gestaltung |
| JavaScript ES6+ | Dynamik und Interaktivität |

### 💾 Datenquelle / Schnittstelle

Bilder --> private Urlaubsfotos © Michael & Elena Hiener (Bilddateien sind nicht öffentlich)

Bildinformationen --> als Objekt in photos.js (öffentlich auf GitHub)


## 🚀 Quickstart

1. Repository klonen:

```bash
git clone https://github.com/ElenaH-2026/fotogram.git
```

2. In das Verzeichnis wechseln:

```bash
cd fotogram
```

3. Starte deinen lokalen Entwicklungsserver:
```text
z.B. Live Server in VS Code
```

4. Öffne danach die URL im Browser auf deinem Computer:
```text
http://localhost:<live-server-port>
```

5. Oder öffne die URL im Browser auf deiner virtuellen Maschine:
```text
http://<deine_ip>:<live-server-port>
```


## 🛠️ Usage

### 📁 Projektstruktur

```text
.
│   .gitignore
│   README.md
│   LICENSE.md
│   index.html
│   script.js
│   style.css
│   
├───assets/
│   ├───fonts-barlow/
│   ├───icons/
│   ├───photos/ --> nicht öffentlich (in .gitignore)
│   └───screenshots/
│           
├───html/
│       datenschutz.html
│       impressum.html
│           
├───scripts/
│       templates.js
│       photos.js
│       
└───styles/
        style-impressum-datenschutz.css
```

### 🌟 Features

| Feature | Zusatzinformation |
| --- | --- |
| 📐 Figma-konformes Wireframe-Layout | *Das visuelle Design und die strukturelle Anordnung der App basieren exakt auf der vorgegebenen Figma-Design-Richtlinie.* |
| 📱 Vollständig Responsive | *Die Benutzeroberfläche ist von 320px bis hin zu großen Desktop-Monitoren optimiert, um Reisefotos auch von unterwegs perfekt darzustellen.* |
| ⚡ Performance- & Ladezeit-Optimierung | *Für ein flüssiges Nutzererlebnis wurden alle Bildmedien komprimiert (maximal 500 KB pro Bild).* |
| 📸 Dynamische Thumbnail-Galerie | *Alle Fotos und Bildbeschreibungen werden komplett dynamisch über JavaScript gerendert.* |
| 🛠️ Schnell erweiterbar | *Durch die Speicherung der Foto-Daten als Objekt, ist nur ein einziger neuer Objekt-Eintrag in der photos.js nötig, um der Galerie ein weiteres Foto hinzuzufügen.* |
| 🏗️ Semantische HTML-Architektur | *Strikter Einsatz nativer, sinnstiftender Tags (`<header>`, `<nav>`, `<main>`, `<section>`) sowie `<figure>` und `<figcaption>` für Fotos.* |
| ⌨️ Volle Tastatursteuerung | *Maximale Usability: Die gesamte Webapplikation lässt sich komplett barrierefrei über die Pfeiltasten und mit der `Esc`-Taste steuern.* |
| 🔍 Responsive Detailansicht | *Ein Klick öffnet Bilder in einer großzügigen Lightbox, die den verfügbaren Platz im Viewport für maximale Details optimal ausnutzt.* |
| ↔️ Fixierte Galerie-Navigation | *Innerhalb der Großansicht sorgen fest positionierte Navigations-Buttons für ein komfortables und nahtloses Vor- und Zurückblättern.* |
| ✖️ Flexibler Dialog-Verschluss | *Die Großansicht kann wahlweise über einen dedizierten Schließen-Button oder durch einen einfachen Klick auf den Hintergrund beendet werden.* |
| 🖼️ Barrierefreie Alternativtexte | *Jedes Bildelement (`<img>`) ist mit einem sinnvollen und beschreibenden `alt`-Attribut ausgestattet, um visuelle Inhalte zugänglich zu machen.* |
| 🏷️ Sprechende Links & Interaktionselemente | *Verzicht auf vage Phrasen wie „Hier klicken“ – alle Buttons und Links beschreiben ihre exakte Aktion oder ihr Ziel klar und verständlich.* |
| 🎨 Kontraststarke & lesbare Typografie | *Einhaltung barrierefreier Farbkontraste, eine Mindestschriftgröße von 16px für Fließtext sowie direktes visuelles Feedback durch interaktive Hover-Effekte.* |
| 🛡️ Geprüfte Barrierefreiheit (WCAG) | *Der gesamte Code wurde erfolgreich mit führenden Tools wie Lighthouse, WAVE und dem IBM Equal Access Accessibility Checker auditiert.* |
| ⚖️ Integrierter Rechtsschutz | *Rechtssichere Einbindung von eigenständigen Seiten für Impressum und Datenschutz mit maßgeschneidertem, zur Hauptseite passendem Stylesheet.* |

## 📝 Lizenz und Urheberrecht

> [!NOTE] 
> Dieses Projekt ist ein reines Übungsprojekt und ist zu Lernzwecken im Zuge meiner Weiterbildung bei der [Developer Akadamy](https://developerakademie.com) entstanden.

> [!IMPORTANT]
> Fotos: © Michael & Elena Hiener
> <br>Die Fotografien in dieser Applikation sind geistiges und privates Eigentum von Michael & Elena Hiener.
> <br>Details zur Lizenz und den Bildrechten findest du in der [LICENSE.md](https://github.com/ElenaH-2026/fotogram?tab=License-1-ov-file).

# Web Programmierung - Corinna Gresenz

## Projektübersicht

Dieses Projekt ist eine einfache Webseite namens "AI by Cora", die mit HTML, CSS, JavaScript, jQuery und Webpack erstellt wurde. Die Seite besteht aus mehreren Unterseiten, darunter eine Startseite, eine "Über mich"-Seite, eine Bildergalerie und eine Kontaktseite.

## Inhaltsverzeichnis

1. [Projektstruktur](#projektstruktur)
2. [Verwendete Technologien](#verwendete-technologien)
3. [Installation](#installation)
4. [Nutzung](#nutzung)
5. [Seitenbeschreibung](#seitenbeschreibung)
6. [Autor](#autor)

## Projektstruktur

```plaintext
web-programmierung-CorinnaGresenz/
├── assets/
│   ├── fonts/
│   │   ├── Monstserrat-Black.ttf
│   │   ├── Monstserrat-BlackItalic.ttf
│   │   ├── Monstserrat-Bold.ttf
│   │   ├── Monstserrat-BoldItalic.ttf
│   │   ├── Monstserrat-ExtraBold.ttf
│   │   ├── Monstserrat-ExtraBoldItalic.ttf
│   │   ├── Monstserrat-ExtraLight.ttf
│   │   ├── Monstserrat-ExtraLightItalic.ttf
│   │   ├── Monstserrat-Italic.ttf
│   │   ├── Monstserrat-Light.ttf
│   │   ├── Monstserrat-LightItalic.ttf
│   │   ├── Monstserrat-Medium.ttf
│   │   ├── Monstserrat-MediumItalic.ttf
│   │   ├── Monstserrat-Regular.ttf
│   │   ├── Monstserrat-SemiBold.ttf
│   │   ├── Monstserrat-SemiBoldItalic.ttf
│   │   ├── Monstserrat-Thin.ttf
│   │   └── Monstserrat-ThinItalic.ttf
│   └── svgs/
│       ├── attention-svgrepo-com.svg
│       ├── github.svg
│       ├── instagram.svg
│       ├── linked-in.svg
│       ├── patreon.svg
│       ├── pinterest.svg
│       ├── tiktok.svg
│       └── youtube.svg
├── dist/
│   ├── img/
│   │   ├── About-me-1.png
│   │   ├── AlbyCora-1.jpg
│   │   ├── AlbyCora-2.png
│   │   ├── AlbyCora-3.png
│   │   ├── AlbyCora-4.png
│   │   ├── AlbyCora-5.png
│   │   ├── AlbyCora-6.png
│   │   ├── AlbyCora-7.png
│   │   ├── AlbyCora-8.png
│   │   └── AlbyCora-9.png
│   ├── js/
│   │   └── app.js
│   └── logo/
│       └── logo.png
├── js/
│   └── app.js
├── pages/
│   ├── about-me.html
│   ├── AGB.html
│   ├── contact.html
│   ├── image-gallery.html
│   └── impressum.html
├── style/
│   ├── about-me/
│   │   └── about-me.scss
│   ├── agb/
│   │   └── agb.scss
│   ├── contact/
│   │   └── contact.scss
│   ├── image-gallery/
│   │   └── image-gallery.scss
│   ├── impressum/
│   │   └── impressum.scss
│   └── index/
│       ├── index.scss
│       ├── _global-theme.scss
│       ├── _mixins.scss
│       ├── _variables.scss
│       ├── main.css
│       ├── main.css.map
│       └── main.scss
├── .gitignore
├── 404.html
├── favicon.ico
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── webpack.common.js
├── webpack.config.dev.js
└── webpack.config.prod.js
```

## Verwendete Technologien

- HTML5
- CSS3 (SCSS)
- JavaScript (ES6)
- jQuery
- Webpack

## Installation

### Voraussetzungen

- Node.js
- npm (Node Package Manager)

### Installationsschritte
1. Klone das Repository:

```bash
git clone https://github.com/username/web-programmierung-CorinnaGresenz.git
```

2. Navigiere in das Projektverzeichnis

```bash
cd web-programmierung-CorinnaGresenz
```

3. Installiere die Abhängigkeiten:

```bash
npm install
```

## Nutzung

### Entwicklungsumgebung starten

Um die Entwicklungsumgebung zu starten, verwende den folgenden Befehl:

```bash
npm start
```

Dies wird den Webpack Dev Server starten und dein Standardbrowser sollte automatisch die Webseite öffnen.

## Produktion bauen

Um eine Produktionsversion der Webseite zu erstellen, verwende den folgenden Befehl:

```bash
npm run build
```

## Seitenbeschreibung

### Startseite (`index.html`)
Enthält eine Willkommensnachricht und Links zu sozialen Medien.

### Über mich (`pages/about-me.html`)
Beinhaltet eine persönliche Vorstellung und ein Bild.

### AGB (`pages/AGB.html`)
Enthält die allgemeinen Geschäftsbedingungen.

### Bildergalerie (`pages/image-gallery.html`)
Zeigt eine Galerie von AI-generierten Bildern.

### Kontakt (`pages/contact.html`)
Ein einfaches Kontaktformular zur Erfassung von Namen, E-Mail und Nachrichten.

### Impressum (`pages/impressum.html`)
Beinhaltet rechtliche Informationen und Impressum.

## Autor

Corinna Gresenz

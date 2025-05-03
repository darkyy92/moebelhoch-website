# MöbelHoch Website

## Über das Projekt

Die offizielle Website für MöbelHoch - Möbellift-Vermietung und Umzugsdienstleistungen in Zürich.

**Website**: https://www.moebelhoch.ch

## Technologie-Stack

Diese Website nutzt folgende Technologien:

- Vite (Build-Tool)
- TypeScript
- React
- shadcn/ui (UI-Komponenten-Bibliothek)
- Tailwind CSS (Styling)
- Calendly-Integration (Buchungssystem)

## Lokale Entwicklung

Um das Projekt lokal zu entwickeln, benötigst du Node.js & npm. Am besten installierst du diese mit [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

Folge diesen Schritten:

```sh
# Schritt 1: Repository klonen
git clone https://github.com/yourusername/moebelhoch-website.git

# Schritt 2: In das Projektverzeichnis wechseln
cd moebelhoch-website

# Schritt 3: Abhängigkeiten installieren
npm i

# Schritt 4: Entwicklungsserver starten
npm run dev
```

## Deployment

Das Projekt wird über GitHub Actions auf dem Webserver deployt. Bei jedem Push in den main-Branch wird automatisch ein neues Build erstellt und veröffentlicht.

# PROTOKOL 17

Oficiální web a veřejný obsahový systém české detektivní hry pro macOS.

## Lokálně

```bash
npm install
npm run dev
```

Otevři [http://localhost:3000](http://localhost:3000).

## GitHub Pages

Web se staví jako statický export a nasazuje se z větve `master` přes GitHub Actions.

Veřejná adresa:

https://hansvontschechien.github.io/protokol-17/

## Veřejné API

GitHub Pages nespouští Node server, proto jsou endpointy statické JSON soubory:

- `/api/version.json`
- `/api/manifest.json`
- `/api/cases.json`
- `/api/cases/:id.json`
- `/api/cases/:id/version.json`
- `/api/content/:id.json`

Verze hry a požadavky na macOS se berou z `src/content/public/release.json`.
Herní tajemství do veřejného API nepatří.

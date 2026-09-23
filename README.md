# PROTOKOL 17

Oficiální web a veřejný obsahový systém detektivní hry pro macOS, Windows, iPhone, iPad a Android.

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

Podporované platformy jsou v `src/config/platforms.mjs`. Požadavky konkrétní verze, včetně macOS, jsou u dané platformy ve stažení.
Herní tajemství do veřejného API nepatří.

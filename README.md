# THE INTERROGATION — v2

Interaktīva latviešu valodas nopratināšanas spēle ar izmeklētāju Vilku.

## Jaunajā versijā

- Pārstrādāts noformējums vecās lietas mapes stilā ar Poppins fontu un gaišā/tumšā režīma pārslēdzēju.
- **Ticamība 0%** → apcietināšana un pilnekrāna cietuma restu animācija.
- **Spiediens 100%** → spēlētājs salūst un tiek apcietināts.
- Atbilžu kvalitāte ietekmē ticamību un spiedienu. Pārliecinošas atbildes var samazināt spiedienu; augsts spiediens apgrūtina noturēt ticamību.
- **Ticamība 100%** → uzvara. Pēc 24 gājieniem spēle beidzas ar zaudējumu, ja neesi uzvarējis.
- Pielāgots telefona ekrāniem.

## Vercel izvietošana

1. Augšupielādē šī ZIP **saturu** GitHub repozitorija saknē, lai `index.html` un `api/` mape atrodas vienā līmenī.
2. Vercel → Add New → Project → izvēlies repozitoriju. Framework preset: **Other**. Build command un Output directory atstāj tukšus.
3. Vercel Settings → Environment Variables → iestati `ANTHROPIC_API_KEY`. Pēc tam veic Deploy / Redeploy.

## API

**Svarīgi:** augšupielādētajā oriģinālajā ZIP izmantots **Anthropic/Claude API**, nevis Gemini. Lai neko nesabojātu, `api/chat.js`, `api/case.js` un `api/_cases.js` no avota ir saglabāti bez izmaiņām. API atslēga jāiestata Vercel, nevis HTML failā. Vienu pašu `index.html` no datora atverot, API maršruti nedarbosies.

## Struktūra

- `index.html` — spēles dizains, interfeiss, pratināšanas gaita un uzvaras/zaudējuma loģika
- `api/chat.js` — AI servisa izsaukums un detektīva instrukcijas (nemainīts)
- `api/case.js` — nejaušas lietas piešķiršana (nemainīts)
- `api/_cases.js` — lietu dati (nemainīts)
- `vercel.json` — Vercel konfigurācija

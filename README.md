# THE INTERROGATION

Tevi nopratina AI izmeklētājs Vilks. Tu esi nevainīgs, bet viņš mēģinās tevi pārliecināt par pretējo.

## Palaišana uz Vercel
1. Ieliec projektu GitHub repozitorijā (`git init && git add . && git commit -m "init" && git push`).
2. vercel.com -> Add New -> Project -> izvēlies repozitoriju. Framework preset: **Other**. Build command un Output directory atstāj tukšus.
3. Settings -> Environment Variables -> pievieno `ANTHROPIC_API_KEY` (atslēgu iegūsti console.anthropic.com). Pēc tam Deploy (vai Redeploy).

## Lokāli
```
npm i -g vercel
vercel dev
```
(ar `.env.local`, kurā ir `ANTHROPIC_API_KEY=...`)

## Struktūra
- `index.html` - spēles saskarne
- `api/case.js` - izvēlas nejaušu lietu un atdod ievada stāstu
- `api/chat.js` - sarunas gājiens (API atslēga un Vilka instrukcijas paliek serverī)
- `api/_cases.js` - lietu dati (stāsts + „fakti“)

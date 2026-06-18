# Polskie Sowy

> Pierwsza polska encyklopedia sów świata, hostowana na Cloudflare Pages.

## Struktura repozytorium

```
polskie-sowy/
│
├── index.html                  ← Strona główna
│
├── gatunki/
│   ├── index.html              ← Lista wszystkich gatunków (z filtrowaniem)
│   └── [slug]/
│       └── index.html          ← Strona gatunku (np. strix-aluco/index.html)
│
├── regiony/
│   ├── index.html
│   └── [region]/index.html
│
├── taksonomia/
│   ├── index.html
│   ├── strigidae/index.html
│   └── tytonidae/index.html
│
├── o-projekcie/index.html
├── zrodla/index.html
│
├── css/
│   ├── base.css                ← Tokeny, reset, typografia
│   ├── components.css          ← Nav, karty, przyciski, search
│   └── pages/
│       ├── home.css            ← Strona główna
│       ├── species.css         ← Strona gatunku
│       ├── list.css            ← Lista gatunków
│       └── region.css          ← Strona regionu
│
├── js/
│   ├── nav.js                  ← Nawigacja, search overlay
│   ├── search.js               ← Wyszukiwarka po stronie klienta
│   └── species.js              ← Macaulay Library + Xeno-canto embeds
│
├── assets/
│   ├── icons/
│   │   └── favicon.svg
│   └── og/
│       └── og-default.png      ← Open Graph image (1200×630)
│
├── _headers                    ← Cloudflare Pages headers
└── _redirects                  ← Cloudflare Pages redirects
```

## Wdrożenie (Cloudflare Pages)

1. Połącz repozytorium GitHub z Cloudflare Pages (Dashboard → Pages → Create application → Connect to Git).
2. **Build settings:** brak (strona statyczna — brak kroku build command).
3. **Output directory:** `/` (root repozytorium).
4. Gotowe — każdy push do `main` wdraża automatycznie.

## Dodawanie gatunku

Utwórz plik `gatunki/[slug]/index.html` korzystając z szablonu `gatunki/_template.html`.

Wymagane dane w szablonie:
- `data-taxon-code` — kod gatunku w eBird/Macaulay Library (np. `BUROW`)
- `data-xc-id` lub `data-species` — ID nagrania Xeno-canto lub nazwa naukowa
- Dane taksonomiczne i opis po polsku

## Konwencja nazw slug

Slug = nazwa naukowa pisana małymi literami, spacje zamienione na myślniki.  
Przykład: `Strix aluco` → `strix-aluco`

## Źródła mediów

| Źródło | Typ | Integracja |
|--------|-----|-----------|
| [Macaulay Library](https://www.macaulaylibrary.org) | Fotografie, wideo | `<iframe src="https://macaulaylibrary.org/asset/{ID}/embed">` |
| [Xeno-canto](https://xeno-canto.org) | Nagrania głosów | `<iframe src="https://xeno-canto.org/{XC_ID}/embed/simple">` |

## Typografia

| Rola | Krój |
|------|------|
| Nagłówki / display | Nunito (geometryczna, bliska CN Sans) |
| Tekst główny / opisy | Lora (szeryfowa, komfortowa w długich tekstach) |
| UI / etykiety / nav | Inter |

## Licencja

Projekt open-source. Treści encyklopedyczne: CC BY-SA 4.0.  
Fotografie: zgodnie z licencjami Macaulay Library.  
Nagrania: zgodnie z licencjami Xeno-canto (zazwyczaj CC BY lub CC BY-NC).

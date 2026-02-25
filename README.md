# 💼 Finanční Poradenství - CRM & Analýza

Profesionální webové aplikace pro finanční poradenství s podporou PWA (Progressive Web App).

## 🚀 Nasazení na GitHub Pages

### Krok 1: Vytvoření GitHub repository

1. Přihlaste se na [GitHub.com](https://github.com)
2. Klikněte na **"New repository"** (zelené tlačítko vpravo nahoře)
3. Pojmenujte repository: `financial-crm` (nebo jiný název)
4. Nastavte jako **Public**
5. Klikněte **"Create repository"**

### Krok 2: Nahrání souborů

**Varianta A: Přes webové rozhraní (jednodušší)**

1. V repository klikněte na **"uploading an existing file"**
2. Přetáhněte všechny soubory:
   - `index.html`
   - `crm-system.html`
   - `financni-analyzer.html`
   - `manifest-crm.json`
   - `manifest-analyzer.json`
   - `service-worker.js`
3. Klikněte **"Commit changes"**

**Varianta B: Přes Git (pokročilé)**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/VASE-JMENO/financial-crm.git
git push -u origin main
```

### Krok 3: Aktivace GitHub Pages

1. V repository jděte do **Settings** → **Pages**
2. V sekci **"Source"** vyberte **"main"** branch
3. Složku nechte **"/ (root)"**
4. Klikněte **"Save"**
5. Za 1-2 minuty bude stránka dostupná na: `https://VASE-JMENO.github.io/financial-crm/`

## 📱 Instalace na zařízení

### iPhone / iPad (Safari)

1. Otevřete URL v Safari prohlížeči
2. Klikněte na tlačítko **Sdílet** (⎋)
3. Posuňte dolů a vyberte **"Přidat na plochu"**
4. Potvrďte **"Přidat"**

### Android (Chrome)

1. Otevřete URL v Chrome prohlížeči
2. Klikněte na **tři tečky** (⋮)
3. Vyberte **"Přidat na plochu"** nebo **"Install app"**
4. Potvrďte instalaci

### Windows / Mac

1. Otevřete URL v Chrome nebo Edge
2. V adresním řádku se objeví ikona **instalace** (+)
3. Klikněte na ni a potvrďte instalaci

## 📂 Struktura souborů

```
financial-crm/
├── index.html              # Úvodní stránka
├── crm-system.html         # CRM aplikace
├── financni-analyzer.html  # Finanční analyzátor
├── manifest-crm.json       # PWA manifest pro CRM
├── manifest-analyzer.json  # PWA manifest pro analyzátor
├── service-worker.js       # Service Worker pro offline režim
└── README.md              # Tento soubor
```

## ✨ Funkce

### CRM Systém
- 📋 Seznam všech klientů s vyhledáváním
- 🔍 Pokročilé filtry (aktivní, čekající, prioritní)
- 💬 Systém poznámek a historie
- 📅 Připomínky nadcházejících schůzek
- 💾 Export/Import dat (JSON)
- 📊 Dashboard se statistikami

### Finanční Analyzátor
- 💰 Analýza příjmů a výdajů
- 🏠 Přehled majetku (nemovitosti, úspory, investice)
- 💳 Správa závazků (hypotéky, úvěry, leasing)
- 📈 Investiční profil a cíle
- 🛡️ Pojistná ochrana
- 📋 Automatická doporučení

### Integrace
- 🔄 Obousměrná synchronizace mezi CRM a Analyzátorem
- 💾 Lokální úložiště (localStorage)
- 📴 Plně funkční offline režim
- ☁️ Export/Import pro zálohu a synchronizaci

## 🔒 Bezpečnost a soukromí

- ✅ Všechna data jsou uložená **lokálně** v prohlížeči
- ✅ **Žádné** údaje se neodesílají na server
- ✅ Data jsou dostupná pouze **vám**
- ✅ Pro zálohu použijte export do JSON souboru

## 🛠️ Technologie

- **HTML5** - Struktura aplikací
- **CSS3** - Moderní design a animace
- **JavaScript (ES6+)** - Logika aplikací
- **PWA** - Progressive Web App
- **Service Workers** - Offline funkčnost
- **localStorage** - Ukládání dat

## 📝 Licence

Tato aplikace je vytvořena pro osobní a komerční použití ve finančním poradenství.

## 💡 Tipy

1. **Pravidelně zálohujte data** pomocí funkce Export
2. **Používejte PWA instalaci** pro lepší zážitek
3. **Synchronizujte mezi zařízeními** pomocí Export/Import
4. **Chraňte své zařízení** heslem nebo biometrikou

## ❓ Často kladené otázky

**Q: Potřebuji internet pro použití?**  
A: Ne, po první návštěvě funguje vše offline.

**Q: Kde jsou uložená data?**  
A: Lokálně ve vašem prohlížeči (localStorage).

**Q: Můžu sdílet s kolegy?**  
A: Ano, sdílejte URL. Každý má vlastní data.

**Q: Co když smažu prohlížeč?**  
A: Data se smažou. Proto pravidelně exportujte JSON.

**Q: Funguje na všech zařízeních?**  
A: Ano - iPhone, iPad, Android, Windows, Mac.

## 📞 Podpora

Pro problémy nebo dotazy vytvořte Issue v tomto repository.

---

**Vytvořeno s ❤️ pro profesionální finanční poradce**

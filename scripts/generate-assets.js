const fs = require("fs");
const path = require("path");

function write(file, svg) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, svg.trim() + "\n", "utf8");
  console.log(file);
}

write(
  "public/evidence/case-00/case-00-evidence-001-sms.svg",
  `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 960">
  <rect width="720" height="960" fill="#0c0c0b"/>
  <rect x="90" y="70" width="540" height="820" rx="42" fill="#161513" stroke="#3a372f"/>
  <rect x="250" y="92" width="220" height="18" rx="9" fill="#2a271f"/>
  <text x="130" y="150" fill="#8a867c" font-family="ui-monospace, monospace" font-size="18">12. 4. 2026  17:02</text>
  <text x="130" y="210" fill="#cfc4ae" font-family="ui-monospace, monospace" font-size="22">NEZNAME CISLO</text>
  <text x="130" y="240" fill="#7a766c" font-family="ui-monospace, monospace" font-size="16">+420 *** *** 218</text>
  <rect x="130" y="290" width="430" height="150" rx="18" fill="#24211b"/>
  <text x="156" y="350" fill="#e7e1d4" font-family="Georgia, serif" font-size="28">Bud tam v 17:30.</text>
  <text x="156" y="392" fill="#e7e1d4" font-family="Georgia, serif" font-size="28">Stejne misto.</text>
  <text x="130" y="500" fill="#6e6b64" font-family="ui-monospace, monospace" font-size="14">SPIS 00  /  DUKAZ 001  /  CVICNY MATERIAL</text>
  <rect x="130" y="760" width="180" height="54" fill="none" stroke="#8f2a28" stroke-width="2"/>
  <text x="148" y="794" fill="#c45c52" font-family="ui-monospace, monospace" font-size="16">NEOVERENO</text>
</svg>`,
);

write(
  "public/evidence/case-00/case-00-evidence-002-cafe-photo.svg",
  `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 960">
  <rect width="720" height="960" fill="#1a1814"/>
  <rect x="70" y="60" width="580" height="840" fill="#e7e1d4"/>
  <rect x="98" y="88" width="524" height="620" fill="#141210"/>
  <rect x="98" y="430" width="524" height="278" fill="#1c1914"/>
  <rect x="168" y="250" width="384" height="260" fill="#2a251e"/>
  <rect x="198" y="280" width="324" height="150" fill="#17140f"/>
  <rect x="230" y="430" width="80" height="80" fill="#3a342c"/>
  <rect x="330" y="360" width="150" height="150" fill="#211e18"/>
  <path d="M168 250 L360 160 L552 250" fill="#3f3a32"/>
  <text x="250" y="330" fill="#cfc4ae" font-family="Georgia, serif" font-size="28">KAVARNA</text>
  <text x="268" y="368" fill="#8a867c" font-family="ui-monospace, monospace" font-size="16">U NADRAZI</text>
  <rect x="118" y="740" width="200" height="8" fill="#7c7a74"/>
  <text x="118" y="790" fill="#2a261f" font-family="ui-monospace, monospace" font-size="16">12. 4. 2026  17:28</text>
  <text x="118" y="818" fill="#5c584f" font-family="ui-monospace, monospace" font-size="13">SPIS 00  /  DUKAZ 002</text>
</svg>`,
);

write(
  "public/evidence/case-00/case-00-evidence-003-receipt.svg",
  `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 920">
  <rect width="560" height="920" fill="#11100e"/>
  <rect x="70" y="40" width="420" height="840" fill="#efe6d4"/>
  <text x="280" y="100" text-anchor="middle" fill="#2a261f" font-family="ui-monospace, monospace" font-size="18">KAVARNA U NADRAZI</text>
  <text x="280" y="128" text-anchor="middle" fill="#6a655c" font-family="ui-monospace, monospace" font-size="12">IC 00000000 / CVICNY DOKLAD</text>
  <line x1="110" y1="160" x2="450" y2="160" stroke="#2a261f" stroke-dasharray="3 5"/>
  <text x="110" y="200" fill="#2a261f" font-family="ui-monospace, monospace" font-size="16">12.04.2026   17:41</text>
  <text x="110" y="250" fill="#2a261f" font-family="ui-monospace, monospace" font-size="16">ESPRESSO                 62</text>
  <text x="110" y="280" fill="#2a261f" font-family="ui-monospace, monospace" font-size="16">LUNGO                    68</text>
  <text x="110" y="310" fill="#2a261f" font-family="ui-monospace, monospace" font-size="16">VODA                     25</text>
  <line x1="110" y1="340" x2="450" y2="340" stroke="#2a261f" stroke-dasharray="3 5"/>
  <text x="110" y="380" fill="#2a261f" font-family="ui-monospace, monospace" font-size="18">CELKEM                  155</text>
  <text x="110" y="420" fill="#2a261f" font-family="ui-monospace, monospace" font-size="16">HOTOVOST</text>
  <text x="110" y="500" fill="#6a655c" font-family="ui-monospace, monospace" font-size="13">STUL 4</text>
  <text x="110" y="528" fill="#6a655c" font-family="ui-monospace, monospace" font-size="13">UCTENKA 00481</text>
  <text x="110" y="620" fill="#8f2a28" font-family="ui-monospace, monospace" font-size="14">SPIS 00 / DUKAZ 003</text>
  <text x="110" y="800" fill="#8a867c" font-family="ui-monospace, monospace" font-size="12">DEKUJEME</text>
</svg>`,
);

write(
  "public/evidence/case-00/case-00-evidence-004-statement.svg",
  `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 960">
  <rect width="720" height="960" fill="#12110f"/>
  <rect x="60" y="50" width="600" height="860" fill="#e8dfcd"/>
  <rect x="60" y="50" width="16" height="860" fill="#8f2a28"/>
  <text x="110" y="110" fill="#8f2a28" font-family="ui-monospace, monospace" font-size="14">SPIS 00  /  ZAZNAM VYPOVEDI  /  DUKAZ 004</text>
  <text x="110" y="160" fill="#2a261f" font-family="Georgia, serif" font-size="32">Vypoved svedka</text>
  <text x="110" y="210" fill="#5c584f" font-family="ui-monospace, monospace" font-size="14">13. 4. 2026  09:15</text>
  <text x="110" y="270" fill="#2a261f" font-family="Georgia, serif" font-size="20">Jmeno:</text>
  <rect x="190" y="252" width="220" height="22" fill="#2a261f"/>
  <text x="110" y="310" fill="#2a261f" font-family="Georgia, serif" font-size="20">Role: obsluha kavarny</text>
  <text x="110" y="380" fill="#2a261f" font-family="Georgia, serif" font-size="18">Prisli odpoledne. Sedeli u okna.</text>
  <text x="110" y="412" fill="#2a261f" font-family="Georgia, serif" font-size="18">Jeden odesel driv. Ten druhy jeste</text>
  <text x="110" y="444" fill="#2a261f" font-family="Georgia, serif" font-size="18">chvili zustal. Na nic si nestezovali.</text>
  <text x="110" y="500" fill="#2a261f" font-family="Georgia, serif" font-size="18">Jestli se znali? To nevim.</text>
  <text x="110" y="532" fill="#2a261f" font-family="Georgia, serif" font-size="18">Nemluvili nahlas.</text>
  <rect x="110" y="600" width="220" height="18" fill="#2a261f"/>
  <rect x="110" y="632" width="310" height="18" fill="#2a261f"/>
  <text x="110" y="720" fill="#6a655c" font-family="ui-monospace, monospace" font-size="13">VEREJNA CAST — BEZ VYHODNOCENI</text>
  <rect x="430" y="780" width="150" height="48" fill="none" stroke="#8f2a28" stroke-width="2"/>
  <text x="458" y="810" fill="#8f2a28" font-family="ui-monospace, monospace" font-size="16">CVICNE</text>
</svg>`,
);

write(
  "public/evidence/case-00/case-00-evidence-005-phone-log.svg",
  `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 960">
  <rect width="720" height="960" fill="#0d0d0c"/>
  <rect x="50" y="50" width="620" height="860" fill="#161513" stroke="#2f2c26"/>
  <text x="80" y="110" fill="#8a867c" font-family="ui-monospace, monospace" font-size="14">SPIS 00  /  DUKAZ 005  /  VYPIS SPOJENI</text>
  <text x="80" y="160" fill="#e7e1d4" font-family="Georgia, serif" font-size="32">Telefonni zaznam</text>
  <text x="80" y="200" fill="#7a766c" font-family="ui-monospace, monospace" font-size="14">12. 4. 2026</text>
  <rect x="80" y="240" width="560" height="1" fill="#3a372f"/>
  <text x="80" y="280" fill="#9a9790" font-family="ui-monospace, monospace" font-size="13">CAS        SMER      CISLO              TRVANI</text>
  <text x="80" y="330" fill="#e7e1d4" font-family="ui-monospace, monospace" font-size="16">16:58      PRICHOZI  +420 *** *** 218   00:22</text>
  <text x="80" y="370" fill="#cfc4ae" font-family="ui-monospace, monospace" font-size="16">17:02      SMS       +420 *** *** 218   --</text>
  <text x="80" y="410" fill="#8a867c" font-family="ui-monospace, monospace" font-size="16">17:44      ODCHOZI   +420 *** *** ***   01:03</text>
  <rect x="80" y="470" width="560" height="1" fill="#3a372f"/>
  <text x="80" y="530" fill="#7a766c" font-family="ui-monospace, monospace" font-size="13">POZNAMKA VEREJNEHO ARCHIVU</text>
  <text x="80" y="570" fill="#cfc4ae" font-family="Georgia, serif" font-size="20">Cisla jsou castecne redigovana.</text>
  <text x="80" y="604" fill="#cfc4ae" font-family="Georgia, serif" font-size="20">Vyhodnoceni spojeni neni soucasti</text>
  <text x="80" y="638" fill="#cfc4ae" font-family="Georgia, serif" font-size="20">verejne spisovny.</text>
  <rect x="80" y="760" width="170" height="50" fill="none" stroke="#8f2a28" stroke-width="2"/>
  <text x="98" y="792" fill="#c45c52" font-family="ui-monospace, monospace" font-size="16">OMEZENY</text>
</svg>`,
);

const chars = JSON.parse(fs.readFileSync("src/content/public/characters.json", "utf8"));
for (const c of chars) {
  const file = path.join("public", c.portraitAsset.replace(/^\//, ""));
  const initials = c.name
    .split(" ")
    .map((part) => part[0])
    .join("");
  const code = c.id.replace("char_", "").slice(0, 10).toUpperCase();
  write(
    file,
    `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 800">
  <rect width="640" height="800" fill="#12110f"/>
  <rect x="24" y="24" width="592" height="752" fill="none" stroke="#3a372f"/>
  <rect x="80" y="90" width="480" height="430" fill="#1b1915"/>
  <circle cx="320" cy="250" r="78" fill="#2a261f"/>
  <path d="M170 520 C170 390 470 390 470 520 Z" fill="#2a261f"/>
  <text x="320" y="300" text-anchor="middle" fill="#7c7a74" font-family="ui-monospace, monospace" font-size="28">${initials}</text>
  <text x="80" y="580" fill="#7c7a74" font-family="ui-monospace, monospace" font-size="14">FOTOGRAFIE</text>
  <text x="80" y="606" fill="#9a9790" font-family="ui-monospace, monospace" font-size="13">NENI SOUCASTI VEREJNEHO ARCHIVU</text>
  <text x="80" y="680" fill="#e7e1d4" font-family="Georgia, serif" font-size="28">${c.name}</text>
  <text x="80" y="720" fill="#8a867c" font-family="ui-monospace, monospace" font-size="14">${code}</text>
</svg>`,
  );
}

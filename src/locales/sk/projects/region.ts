import type { Translation } from "../../types";

type ProjectPost = Translation["projects"]["blog"][number];

const region: ProjectPost = {
  slug: "region-zahorie",
  title: "Region - inteligentná platforma pre zber podujatí",
  date: "2026-03-31",
  readTime: "3 min čítanie",
  summary:
    "**Automatizovaná platforma pre agregáciu podujatí** z celého regiónu, ktorá **zbiera, analyzuje a spracúva dáta z 81 webov** a mení roztrieštené informácie na **prehľadný, škálovateľný a obchodne použiteľný systém**.",
  body: [
    "**Centralizovaný zber podujatí z 81 webov** obcí, miest a firiem - jedno riešenie, ktoré nahrádza manuálne sledovanie desiatok zdrojov a zrýchľuje publikovanie regionálneho obsahu.",
    "**Inteligentné analyzéry a admin rozhranie** - špecializované spracovanie rôznych typov webov, prehľadné GUI, JSON výstupy, monitoring a logy pre spoľahlivú každodennú prevádzku.",
    "**Škálovateľná architektúra pre rast projektu** - od technologickej detekcie cez normalizáciu dát až po pattern-based automatizáciu, ktorá pripravuje platformu na ďalšie rozširovanie bez chaosu.",
  ],
  content: [
    "**Region** je interná **dátová a publikačná platforma** navrhnutá na automatizovaný zber podujatí z webov obcí, miest, organizácií a firiem v regióne. Cieľom bolo odstrániť zdĺhavé manuálne prepisovanie akcií z desiatok rôznych stránok a nahradiť ho riešením, ktoré vie **spoľahlivo zbierať, triediť a pripravovať obsah vo veľkom rozsahu**.",
    "Riešenie pokrýva **81 regionálnych webov** a pracuje s rôznorodým technologickým prostredím, od WordPressu a Webnode až po vlastné riešenia CMS. Platforma kombinuje **špecializované analyzéry**, technologickú detekciu, validáciu HTML štruktúr a podporu pre WordPress REST API, takže dokáže efektívne spracovať aj veľmi odlišné zdroje bez straty presnosti. Výsledkom je **jednotný dátový tok**, ktorý z neprehľadného webového priestoru vytvára použiteľný základ pre regionálny obsah a ďalšie služby.",
    "Dôležitou súčasťou projektu je aj **admin rozhranie postavené na FastAPI a Reacte**, ktoré dáva tímu okamžitý prehľad nad behom analyzérov, výstupnými JSON dátami, logmi a konfiguráciou. To, čo býva pri podobných projektoch roztrúsené medzi skriptami, Excelmi a ručnou kontrolou, je tu sústredené do **jedného riadiaceho systému**, pripraveného na každodennú operatívu aj ďalšie rozširovanie.",
    "Technická architektúra bola navrhnutá ako **škálovateľný základ pre dlhodobý rast**. Platforma neslúži len na aktuálny zber podujatí, ale aj ako podklad pre inteligentné rozpoznávanie vzorov, rýchle nasadzovanie nových analyzérov a automatizáciu práce s regionálnymi dátami. Pre klienta to znamená **menej ručnej práce, vyššiu konzistenciu dát, rýchlejšie publikovanie a pevný základ pre budúce digitálne produkty**.",
  ],
  tech: ["Python", "FastAPI", "React", "TypeScript", "Vite", "JSON", "BeautifulSoup", "Requests", "WordPress REST API"],
  image: "projects/Region/hero",
  gallery: [
    "projects/Region/1",
    "projects/Region/2",
    "projects/Region/3",
    "projects/Region/4",
  ],
};

export default region;

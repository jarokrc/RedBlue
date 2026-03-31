import type { Translation } from "../../types";

type ProjectPost = Translation["projects"]["blog"][number];

const dataVista: ProjectPost = {
  slug: "data-vista",
  title: "DataVista - spracovanie API a dát",
  date: "2024-07-04",
  readTime: "1 min čítanie",
  summary: "WPF/MVVM aplikácia na získavanie a zobrazovanie dát z viacerých API (forex, ISS pozícia, Wall Street Journal, počasie) s JSON spracovaním.",
  body: [
    "Získavanie dát z verejných API (počasie, ISS, kurzy, WSJ články) a ich spracovanie v JSONe do C# objektov.",
    "Asynchrónne volania, aby UI ostalo responzívne aj pri pomalších sieťach.",
    "Využíva WPF a MVVM na prehľadné GUI a jednoduché rozširovanie modulov.",
    "Newtonsoft.Json pre serializáciu/deserializáciu a robustný HTTP klient pre GET požiadavky.",
  ],
  content: [
    "DataVista je nástroj na získavanie a zobrazovanie dát z rôznych API (forex kurzy, ISS pozícia, WSJ články, počasie). Odpovede v JSONe sa transformujú na C# objekty a zobrazia v prehľadnom GUI.",
    "Využitie: forex kurzy, sledovanie ISS v reálnom čase, články Wall Street Journal, počasie na základe kliknutia na mapu (zoom/pan).",
    "Silné stránky: asynchrónne spracovanie dát (UI sa neblokuje), jednoduchá serializácia/deserializácia s Newtonsoft.Json, modulárna architektúra (samostatné moduly pre kurzy, ISS, news, počasie), WPF UI pre interaktívne zobrazenie.",
    "Prečo si vybrať: rýchla integrácia rôznych API, čistá MVVM architektúra, robustný error handling v HTTP klientovi a prehľadné UI na Windows.",
  ],
  tech: ["C#", "WPF", "MVVM", "HTTP Client", "Newtonsoft.Json", "API integrácie"],
  link: "https://github.com/jarokrc/DataVista",
  image: "projects/DataVista/DataVista_weather.png",
  gallery: [
    "projects/DataVista/DataVista_weather.png",
    "projects/DataVista/DataVista_wallstreet.png",
    "projects/DataVista/code1.png",
    "projects/DataVista/code2.png",
  ],
};

export default dataVista;

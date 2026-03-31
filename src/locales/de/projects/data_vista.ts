import type { Translation } from "../../types";

type ProjectPost = Translation["projects"]["blog"][number];

const dataVista: ProjectPost = {
  slug: "data-vista",
  title: "DataVista - API- und Datenverarbeitung",
  date: "2024-07-04",
  readTime: "1 Min. Lesezeit",
  summary: "WPF/MVVM-App holt Daten aus mehreren APIs (Forex, ISS, WSJ, Wetter) und verarbeitet JSON effizient.",
  body: [
    "Abruf von öffentlichen APIs (Wetter, ISS, Kurse, WSJ-News) und Mapping auf C#-Objekte.",
    "Async-Calls halten die UI responsiv, auch bei langsamen Netzen.",
    "WPF + MVVM für klares UI und modulare Erweiterungen.",
    "Newtonsoft.Json für (De-)Serialisierung, robuster HTTP-Client für GET.",
  ],
  content: [
    "DataVista zeigt Daten aus diversen APIs (Forex, ISS, WSJ, Wetter) in einer übersichtlichen WPF-Oberfläche.",
    "Use-Cases: Echtzeit-ISS-Tracking, Forex-Raten, Wall Street Journal Artikel, Wetter per Kartenklick (Zoom/Pan).",
    "Stärken: asynchrone Verarbeitung, saubere JSON-(De)Serialisierung, modulare Architektur, fehlerrobuster HTTP-Client.",
    "Warum wählen: schnelle Integration, klares MVVM, stabiles Windows-UI.",
  ],
  tech: ["C#", "WPF", "MVVM", "HTTP Client", "Newtonsoft.Json", "API Integrationen"],
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

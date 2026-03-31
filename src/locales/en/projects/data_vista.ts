import type { Translation } from "../../types";

type ProjectPost = Translation["projects"]["blog"][number];

const dataVista: ProjectPost = {
  slug: "data-vista",
  title: "DataVista – API & data processing",
  date: "2024-07-04",
  readTime: "1 min read",
  summary: "WPF/MVVM app to fetch and display data from multiple APIs (forex, ISS position, WSJ news, weather) with JSON processing.",
  body: [
    "Fetches data from public APIs (weather, ISS, forex, WSJ) and maps JSON into C# objects.",
    "Async calls keep the UI responsive even on slow networks.",
    "Uses WPF + MVVM for clean UI and modular extensions.",
    "Newtonsoft.Json for (de)serialization and a robust HTTP client for GET requests.",
  ],
  content: [
    "DataVista retrieves and displays data from various APIs (forex rates, ISS position, WSJ articles, weather). JSON responses are converted into C# objects and shown in a clear WPF UI.",
    "Use cases: forex rates, real-time ISS tracking, Wall Street Journal news, weather based on map clicks with zoom/pan.",
    "Strengths: async data handling (non-blocking UI), straightforward JSON (de)serialization via Newtonsoft.Json, modular architecture (separate modules for forex, ISS, news, weather), WPF UI for interactive display.",
    "Why choose it: fast integration of diverse APIs, clean MVVM structure, robust HTTP client error handling, and a neat Windows UI.",
  ],
  tech: ["C#", "WPF", "MVVM", "HTTP Client", "Newtonsoft.Json", "API integrations"],
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

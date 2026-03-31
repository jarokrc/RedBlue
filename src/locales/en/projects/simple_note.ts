import type { Translation } from "../../types";

type ProjectPost = Translation["projects"]["blog"][number];

const simpleNote: ProjectPost = {
  slug: "simple-note",
  title: "SimpleNote – task management made easy",
  date: "2024-06-13",
  readTime: "2 min read",
  summary: "WPF/MVVM app for managing tasks with priorities, CSV import/export, and language toggle (EN/DE).",
  body: [
    "Manage tasks: add, edit, delete with description and priority.",
    "CSV import/export keeps data backed up and shareable.",
    "Simple UI with language toggle inside the app.",
    "Built on MVVM for clean, maintainable code.",
  ],
  content: [
    "SimpleNote offers a clear, powerful task manager with priorities. Clean UI and smart features help you work faster and stay organized.",
    "Key features: create/edit/delete tasks with description/priority; CSV export/import; intuitive UI; language toggle (EN/DE).",
    "Why it stands out: modern MVVM design with INotifyPropertyChanged, ObservableCollection, RelayCommand for solid architecture.",
    "Who it's for: professionals, students, teams—anyone needing straightforward task tracking without bloat.",
  ],
  tech: ["C#", "WPF", "MVVM", "CSV", "INotifyPropertyChanged"],
  link: "https://github.com/jarokrc/SimpleNoteApp",
  image: "projects/SimpleNote/SimpleNoteApp_all.png",
  gallery: [
    "projects/SimpleNote/SimpleNoteApp_all.png",
    "projects/SimpleNote/SimpleNoteApp_english.png",
    "projects/SimpleNote/code1.png",
    "projects/SimpleNote/code2.png",
  ],
};

export default simpleNote;

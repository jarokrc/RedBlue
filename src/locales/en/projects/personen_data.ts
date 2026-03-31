import type { Translation } from "../../types";

type ProjectPost = Translation["projects"]["blog"][number];

const personenData: ProjectPost = {
  slug: "personen-data",
  title: "Personal data manager (PersonenData)",
  date: "2024-04-05",
  readTime: "1 min read",
  summary: "Python/Tkinter app for managing personal data: add, edit, filter, delete, birthdays, validation, JSON storage.",
  body: [
    "Simple Tkinter GUI to add, edit, delete client records quickly.",
    "Automatic birthday processing shows important dates in the UI.",
    "Strict input validation (date, email, phone, required fields) keeps data clean.",
    "Filtering plus safe load/save to database.json on start and exit.",
  ],
  content: [
    "A personal data manager for adding, editing, filtering, and deleting records in a clear GUI.",
    "Birthdays are processed automatically and displayed so you never miss key dates.",
    "Validation checks date, email, phone, and required fields to prevent bad entries.",
    "Filter by criteria and store data safely in JSON (database.json) with auto-load on startup.",
    "Why use it: saves time, improves data accuracy, and keeps clients/employees/students organized.",
  ],
  tech: ["Python", "Tkinter", "JSON storage", "Validation", "Filtering"],
  link: "https://github.com/jarokrc/Comprehensive-personal-data-management-system",
  image: "projects/PersonenData/personendatenfassung_3.png",
  gallery: [
    "projects/PersonenData/personendatenfassung_3.png",
    "projects/PersonenData/personendatenfassung_1.png",
    "projects/PersonenData/code1.png",
    "projects/PersonenData/code2.png",
  ],
};

export default personenData;

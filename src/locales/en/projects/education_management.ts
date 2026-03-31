import type { Translation } from "../../types";

type ProjectPost = Translation["projects"]["blog"][number];

const educationManagement: ProjectPost = {
  slug: "education-management",
  title: "Modern solution for education management",
  date: "2024-07-26",
  readTime: "3 min read",
  summary: "JavaFX desktop app to manage courses, students, staff and their relationships with a modular, extensible architecture.",
  body: [
    "Covers needs of small and large institutions: courses, students, staff, and relationships in one place.",
    "JavaFX UI is clear and simple so non-technical users can handle courses, students, or staff data quickly.",
    "Modular CRUD layers (courses, students, employees, course-student relations) ready to extend and integrate with other systems.",
    "Focus on data security and reliable access controls.",
    "MySQL/JDBC layer automates enrollments, updates, and reporting to boost operational efficiency.",
  ],
  content: [
    "Modern solution for managing educational institutions: courses, students, staff, and their relationships in one place to boost efficiency and clarity.",
    "Use cases: manage courses (add/update/remove, assign trainers), students (enrollments, attendance, data), staff (roles, contacts, trainer assignment), modern JavaFX UI for navigation.",
    "Strengths: simple, clear UI; flexible, extensible architecture; secure and reliable data handling; automation via database saves time.",
    "Why choose it: modern, flexible, secure solution adaptable to any institution size, optimizing processes from courses through staff and students.",
    "Invest in a tool that delivers a competitive edge and lets you focus on quality education instead of manual data wrangling.",
  ],
  tech: ["Java", "JavaFX", "MySQL", "JDBC"],
  link: "https://github.com/jarokrc/Bildungsinstitute",
  image: "projects/Sprava_vzdelavacích_institucii/picture1.png",
  gallery: [
    "projects/Sprava_vzdelavacích_institucii/picture1.png",
    "projects/Sprava_vzdelavacích_institucii/picture2.png",
  ],
};

export default educationManagement;

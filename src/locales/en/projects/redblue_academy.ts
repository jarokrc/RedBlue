import type { Translation } from "../../types";

type ProjectPost = Translation["projects"]["blog"][number];

const redblueAcademy: ProjectPost = {
  slug: "redblue-academy",
  title: "RedBlue Academy - platform for online education",
  date: "2025-03-28",
  readTime: "2 min read",
  summary:
    "**Comprehensive education platform** with an **intelligent booking system**, **interactive calendar**, and **real-time admin dashboard** for efficient lesson and student management.",
  body: [
    "**Intelligent booking system** with a flexible calendar so students can reserve lessons around their own schedule, while tutors keep a **complete overview** of all activity.",
    "**Secure authentication** and data protection, **automatic booking** of additional hours, and **personalized guidance** for every student with real-time synchronization.",
    "**Advanced admin dashboard** with live booking overview, **student engagement analytics**, and **data-driven tools** for more effective decision-making.",
  ],
  content: [
    "**RedBlue Academy** is a reference project for a **comprehensive education platform** built on a robust **Django backend** and a modern **React frontend**. The platform transforms how tutors and students work together, from booking the very first lesson to **long-term progress tracking** and efficient study-time management.",
    "Students gain **full control** over their education. The **intuitive calendar** lets them book lessons in just a few clicks, while the system **automatically detects available time slots** and ensures conflict-free scheduling. **Flexible ordering** of additional hours directly in the application allows students to **adapt the learning pace** to their needs. All data is protected by a **robust authentication system** that ensures the **security and privacy** of every user.",
    "Tutors and administrators get **advanced tools** for efficient management. The **real-time admin dashboard** provides an **instant overview** of all bookings, orders, and student activity. **Analytics tools** show student engagement, the most popular lesson slots, and booking trends, enabling **data-driven decisions** and teaching optimization. Centralized lesson and user management saves time and **eliminates administrative overhead**.",
    "The technical implementation is built on a **Django REST API** with a **MySQL database** for reliable data operations and scalability. The **React frontend** with modern components delivers **responsive design** and a **smooth user experience** across all devices. The result? A **production-ready platform** that connects students and tutors in **one efficient solution** for modern online learning.",
  ],
  tech: ["Django", "React", "REST API", "MySQL"],
  link: "https://redblueacademy.com/",
  linkLabel: "WEB",
  image: "projects/RedBlueAcademy/redblueacademy_sk.png",
  gallery: ["projects/RedBlueAcademy/redblueacademy_sk.png"],
};

export default redblueAcademy;

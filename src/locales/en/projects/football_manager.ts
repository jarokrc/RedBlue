import type { Translation } from "../../types";

type ProjectPost = Translation["projects"]["blog"][number];

const footballManager: ProjectPost = {
  slug: "football-manager",
  title: "Football club management",
  date: "2024-05-10",
  readTime: "2 min read",
  summary: "Java CLI app to manage clubs, teams, players, and trainers with MySQL persistence and transfers.",
  body: [
    "Manage clubs, teams, players, and trainers: add, edit, delete, track history and relationships in one place.",
    "MySQL storage with unique IDs for each entity keeps data organized and secure.",
    "Transfer players/trainers between teams or keep them free for new assignments; manage free agents easily.",
    "Clear CLI menus (club, team, player, trainer, manual) with EN/DE manuals for fast onboarding.",
  ],
  content: [
    "An innovative tool for football club and team managers: handle clubs, teams, players, trainers, and their relationships in one application.",
    "Key advantages: straightforward club management (add/edit/delete), team management, secure database storage, transfers of players/trainers and free-agent management.",
    "User-friendliness: clear CLI menus and manuals (EN/DE) save time and simplify the manager’s work.",
    "Why choose: flexible for small or large clubs, with quick reactions to personnel changes and tidy data management.",
  ],
  tech: ["Java", "MySQL", "JDBC", "CLI"],
  link: "https://github.com/jarokrc/Football_Manager_Program2",
  image: "projects/Footbal_manager/footbal_manager_menu.png",
  gallery: [
    "projects/Footbal_manager/footbal_manager_menu.png",
    "projects/Footbal_manager/footbal_manager_club.png",
    "projects/Footbal_manager/footbal_manager_player.png",
    "projects/Footbal_manager/footbal_manager_manual.png",
  ],
};

export default footballManager;

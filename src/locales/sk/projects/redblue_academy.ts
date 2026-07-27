import type { Translation } from "../../types";

type ProjectPost = Translation["projects"]["blog"][number];

const redblueAcademy: ProjectPost = {
  slug: "redblue-academy",
  title: "RedBlue Academy - platforma pre online vzdelávanie",
  date: "2025-03-28",
  readTime: "2 min čítanie",
  summary: "**Komplexná vzdelávacia platforma** s **inteligentným rezervačným systémom**, **interaktívnym kalendárom** a **real-time admin dashboardom** pre efektívne riadenie lekcií a študentov.",
  body: [
    "**Inteligentný rezervačný systém** s flexibilným kalendárom - študenti si rezervujú lekcie podľa vlastného rozvrhu a lektori majú **kompletný prehľad** o všetkých aktivitách.",
    "**Bezpečná autentifikácia** a ochrana údajov, **automatické objednávanie** ďalších hodín a **personalizované vedenie** pre každého študenta s real-time synchronizáciou.",
    "**Pokročilý admin dashboard** s live prehľadom rezervácií, **analýtikou zapojenia** študentov a **data-driven** nástrojmi pre efektívne rozhodovanie.",
  ],
  content: [
    "**RedBlue Academy** je referenčný projekt **komplexnej vzdelávacej platformy** postavenej na robustnom **Django backendu** a modernom **React frontende**. Platforma transformuje spôsob, akým lektori a študenti spolupracujú - od rezervácie prvej lekcie až po **dlhodobé sledovanie pokroku** a efektívne riadenie študijného času.",
    "Študenti získavajú **plnú kontrolu** nad svojím vzdelávaním. **Intuitívny kalendár** umožňuje rezervovať lekcie s niekoľkými klikmi, pričom systém **automaticky deteguje dostupné termíny** a zabezpečuje bezkolízne plánovanie. **Flexibilné objednávanie** ďalších hodín priamo v aplikácii umožňuje študentom **prispôsobiť tempo učenia** svojim potrebám. Všetky údaje sú chránené **robustným autentifikačným systémom**, ktorý zabezpečuje **bezpečnosť a súkromie** každého používateľa.",
    "Lektori a administrátori získavajú **pokročilé nástroje** pre efektívne riadenie. **Real-time admin dashboard** poskytuje **okamžitý prehľad** o všetkých rezerváciách, objednávkach a aktivitách študentov. **Analytické nástroje** zobrazujú zapojenie študentov, najpopulárnejšie hodiny a trendy v rezerváciách, čo umožňuje **data-driven rozhodnutia** a optimalizáciu výuky. Centralizovaná správa používateľov a lekcií šetrí čas a **eliminuje administratívnu záťaž**.",
    "Technická realizácia stavia na **Django REST API** s **MySQL databázou** pre spoľahlivé dátové operácie a škálovateľnosť. **React frontend** s modernými komponentami zabezpečuje **responzívny dizajn** a **plynulý používateľský zážitok** na všetkých zariadeniach. Výsledok? **Production-ready platforma**, ktorá spája študentov a lektorov v **jednom efektívnom riešení** pre moderné online vzdelávanie.",
  ],
  tech: ["Django", "React", "REST API", "MySQL"],
  link: "https://redblueacademy.com/",
  linkLabel: "WEB",
  githubLink: "https://github.com/SZF-KRC/RedBlue",
  githubLabel: "GITHUB",
  image: "projects/RedBlueAcademy/redblueacademy_sk.png",
  gallery: ["projects/RedBlueAcademy/redblueacademy_sk.png"],
};

export default redblueAcademy;

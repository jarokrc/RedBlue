import skCommon from "./sk/common";
import skHome from "./sk/home";
import skProjects from "./sk/projects";
import skWeb from "./sk/web";
import skWebSolutionsPage2 from "./sk/webSolutionsPage2";
import skMarketing from "./sk/audit";
import skSupport from "./sk/support";
import skEducation from "./sk/education";
import skPrivacy from "./sk/privacy";
import skCookies from "./sk/cookies";
import skImpressum from "./sk/impressum";
import skContact from "./sk/contact";
import skIntro from "./sk/intro";
import skProposal from "./sk/proposal";
import enCommon from "./en/common";
import enHome from "./en/home";
import enProjects from "./en/projects";
import enWeb from "./en/web";
import enWebSolutionsPage2 from "./en/webSolutionsPage2";
import enMarketing from "./en/audit";
import enSupport from "./en/support";
import enEducation from "./en/education";
import enPrivacy from "./en/privacy";
import enCookies from "./en/cookies";
import enImpressum from "./en/impressum";
import enContact from "./en/contact";
import enIntro from "./en/intro";
import enProposal from "./en/proposal";
import deCommon from "./de/common";
import deHome from "./de/home";
import deProjects from "./de/projects";
import deWeb from "./de/web";
import deWebSolutionsPage2 from "./de/webSolutionsPage2";
import deMarketing from "./de/audit";
import deSupport from "./de/support";
import deEducation from "./de/education";
import dePrivacy from "./de/privacy";
import deCookies from "./de/cookies";
import deImpressum from "./de/impressum";
import deContact from "./de/contact";
import deIntro from "./de/intro";
import deProposal from "./de/proposal";
import type { Translation } from "./types";

const merge = (...parts: any[]) => parts.reduce((acc, part) => ({ ...acc, ...part }), {});

export const translations: Record<string, Translation> = {
  sk: merge(
    skCommon,
    skIntro,
    skHome,
    skProjects,
    skWeb,
    skWebSolutionsPage2,
    skMarketing,
    skSupport,
    skEducation,
    skPrivacy,
    skCookies,
    skImpressum,
    skContact,
    skProposal,
  ) as Translation,
  en: merge(
    enCommon,
    enIntro,
    enHome,
    enProjects,
    enWeb,
    enWebSolutionsPage2,
    enMarketing,
    enSupport,
    enEducation,
    enPrivacy,
    enCookies,
    enImpressum,
    enContact,
    enProposal,
  ) as Translation,
  de: merge(
    deCommon,
    deIntro,
    deHome,
    deProjects,
    deWeb,
    deWebSolutionsPage2,
    deMarketing,
    deSupport,
    deEducation,
    dePrivacy,
    deCookies,
    deImpressum,
    deContact,
    deProposal,
  ) as Translation,
};

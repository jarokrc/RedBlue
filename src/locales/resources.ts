import skCommon from "./sk/common";
import skHome from "./sk/home";
import skProjects from "./sk/projects";
import skWeb from "./sk/web";
import skMarketing from "./sk/marketing";
import skSupport from "./sk/support";
import skEducation from "./sk/education";
import skPrivacy from "./sk/privacy";
import skCookies from "./sk/cookies";
import skContact from "./sk/contact";
import enCommon from "./en/common";
import enHome from "./en/home";
import enProjects from "./en/projects";
import enWeb from "./en/web";
import enMarketing from "./en/marketing";
import enSupport from "./en/support";
import enEducation from "./en/education";
import enPrivacy from "./en/privacy";
import enCookies from "./en/cookies";
import enContact from "./en/contact";
import deCommon from "./de/common";
import deHome from "./de/home";
import deProjects from "./de/projects";
import deWeb from "./de/web";
import deMarketing from "./de/marketing";
import deSupport from "./de/support";
import deEducation from "./de/education";
import dePrivacy from "./de/privacy";
import deCookies from "./de/cookies";
import deContact from "./de/contact";
import type { Translation } from "./types";

const merge = (...parts: any[]) => parts.reduce((acc, part) => ({ ...acc, ...part }), {});

export const translations: Record<string, Translation> = {
  sk: merge(skCommon, skHome, skProjects, skWeb, skMarketing, skSupport, skEducation, skPrivacy, skCookies, skContact) as Translation,
  en: merge(enCommon, enHome, enProjects, enWeb, enMarketing, enSupport, enEducation, enPrivacy, enCookies, enContact) as Translation,
  de: merge(deCommon, deHome, deProjects, deWeb, deMarketing, deSupport, deEducation, dePrivacy, deCookies, deContact) as Translation,
};

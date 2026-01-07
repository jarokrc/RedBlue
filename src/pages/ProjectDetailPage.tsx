import { Link, useParams } from "react-router-dom";
import { useI18n } from "@/app/I18nProvider";
import Seo from "@/components/Seo";
import redblueAcademyImg from "@/assets-webp/projects/RedBlueAcademy/redblueacademy_sk.webp";
import eduMgmt1 from "@/assets-webp/projects/Sprava_vzdelavacich_institucii/picture1.webp";
import eduMgmt2 from "@/assets-webp/projects/Sprava_vzdelavacich_institucii/picture2.webp";
import invoiceLogin from "@/assets-webp/projects/InvoiceCreatorApp/InvoiceCreatorApp_login.webp";
import invoiceNew from "@/assets-webp/projects/InvoiceCreatorApp/InvoiceCreatorApp_newInvoice.webp";
import invoiceIncome from "@/assets-webp/projects/InvoiceCreatorApp/InvoiceCreatorApp_einnahmen.webp";
import invoiceExpense from "@/assets-webp/projects/InvoiceCreatorApp/InvoiceCreatorApp_ausgaben.webp";
import footballMenu from "@/assets-webp/projects/Footbal_manager/footbal_manager_menu.webp";
import footballClub from "@/assets-webp/projects/Footbal_manager/footbal_manager_club.webp";
import footballPlayer from "@/assets-webp/projects/Footbal_manager/footbal_manager_player.webp";
import footballManual from "@/assets-webp/projects/Footbal_manager/footbal_manager_manual.webp";
import dataVistaWeather from "@/assets-webp/projects/DataVista/DataVista_weather.webp";
import dataVistaWallstreet from "@/assets-webp/projects/DataVista/DataVista_wallstreet.webp";
import dataVistaCode1 from "@/assets-webp/projects/DataVista/code1.webp";
import dataVistaCode2 from "@/assets-webp/projects/DataVista/code2.webp";
import simpleAll from "@/assets-webp/projects/SimpleNote/SimpleNoteApp_all.webp";
import simpleEn from "@/assets-webp/projects/SimpleNote/SimpleNoteApp_english.webp";
import simpleCode1 from "@/assets-webp/projects/SimpleNote/code1.webp";
import simpleCode2 from "@/assets-webp/projects/SimpleNote/code2.webp";
import personenHero from "@/assets-webp/projects/PersonenData/personendatenfassung_3.webp";
import personen1 from "@/assets-webp/projects/PersonenData/personendatenfassung_1.webp";
import personenCode1 from "@/assets-webp/projects/PersonenData/code1.webp";
import personenCode2 from "@/assets-webp/projects/PersonenData/code2.webp";
import ozoneWeb1 from "@/assets-webp/projects/OzoneX/webka.webp";
import ozoneWeb2 from "@/assets-webp/projects/OzoneX/webka2.webp";
import ozoneCode1 from "@/assets-webp/projects/OzoneX/code1.webp";
import ozoneCode2 from "@/assets-webp/projects/OzoneX/code2.webp";
import webCalc1 from "@/assets-webp/projects/WEB_calculator/1.webp";
import webCalc2 from "@/assets-webp/projects/WEB_calculator/2.webp";
import webCalc3 from "@/assets-webp/projects/WEB_calculator/3.webp";
import webCalc4 from "@/assets-webp/projects/WEB_calculator/4.webp";
import webCalc5 from "@/assets-webp/projects/WEB_calculator/5.webp";
import miku1 from "@/assets-webp/projects/MiKuBegleitung/1.webp";
import miku2 from "@/assets-webp/projects/MiKuBegleitung/2.webp";
import miku3 from "@/assets-webp/projects/MiKuBegleitung/3.webp";
import miku4 from "@/assets-webp/projects/MiKuBegleitung/4.webp";
import miku5 from "@/assets-webp/projects/MiKuBegleitung/5.webp";

const imageMap: Record<string, string> = {
  "redblue-academy": redblueAcademyImg,
  "education-management": eduMgmt1,
  "invoice-creator-app": invoiceNew,
  "football-manager": footballMenu,
  "data-vista": dataVistaWeather,
  "simple-note": simpleAll,
  "personen-data": personenHero,
  "ozonex": ozoneWeb1,
  "miku-begleitung": miku1,
  "web-calculator": webCalc1,
};

const galleryMap: Record<string, string[]> = {
  "redblue-academy": [redblueAcademyImg],
  "education-management": [eduMgmt1, eduMgmt2],
  "invoice-creator-app": [invoiceLogin, invoiceNew, invoiceIncome, invoiceExpense],
  "football-manager": [footballMenu, footballClub, footballPlayer, footballManual],
  "data-vista": [dataVistaWeather, dataVistaWallstreet, dataVistaCode1, dataVistaCode2],
  "simple-note": [simpleAll, simpleEn, simpleCode1, simpleCode2],
  "personen-data": [personenHero, personen1, personenCode1, personenCode2],
  "ozonex": [ozoneWeb1, ozoneWeb2, ozoneCode1, ozoneCode2],
  "miku-begleitung": [miku2, miku3, miku4, miku5],
  "web-calculator": [webCalc2, webCalc3, webCalc4, webCalc5],
};

const imageMeta: Record<string, { width: number; height: number }> = {
  [redblueAcademyImg]: { width: 1190, height: 677 },
  [eduMgmt1]: { width: 751, height: 432 },
  [eduMgmt2]: { width: 752, height: 430 },
  [invoiceLogin]: { width: 283, height: 291 },
  [invoiceNew]: { width: 784, height: 443 },
  [invoiceIncome]: { width: 784, height: 442 },
  [invoiceExpense]: { width: 787, height: 443 },
  [footballMenu]: { width: 816, height: 779 },
  [footballClub]: { width: 417, height: 201 },
  [footballPlayer]: { width: 804, height: 706 },
  [footballManual]: { width: 327, height: 148 },
  [dataVistaWeather]: { width: 886, height: 592 },
  [dataVistaWallstreet]: { width: 887, height: 593 },
  [dataVistaCode1]: { width: 1141, height: 949 },
  [dataVistaCode2]: { width: 941, height: 747 },
  [simpleAll]: { width: 986, height: 642 },
  [simpleEn]: { width: 984, height: 639 },
  [simpleCode1]: { width: 794, height: 819 },
  [simpleCode2]: { width: 794, height: 805 },
  [personenHero]: { width: 1376, height: 662 },
  [personen1]: { width: 1376, height: 663 },
  [personenCode1]: { width: 944, height: 728 },
  [personenCode2]: { width: 1207, height: 740 },
  [ozoneWeb1]: { width: 1457, height: 1043 },
  [ozoneWeb2]: { width: 1478, height: 896 },
  [ozoneCode1]: { width: 752, height: 628 },
  [ozoneCode2]: { width: 642, height: 565 },
  [webCalc1]: { width: 1915, height: 1025 },
  [webCalc2]: { width: 604, height: 543 },
  [webCalc3]: { width: 645, height: 657 },
  [webCalc4]: { width: 677, height: 400 },
  [webCalc5]: { width: 871, height: 840 },
  [miku1]: { width: 1261, height: 891 },
  [miku2]: { width: 1088, height: 908 },
  [miku3]: { width: 1138, height: 706 },
  [miku4]: { width: 967, height: 878 },
  [miku5]: { width: 902, height: 420 },
};

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useI18n();

  const post = t.projects.blog.find((p) => p.slug === slug);
  const canonicalPath = `/projekty/${slug || ""}`;
  const metaDescription = post?.summary || t.meta.projectsDescription || t.meta.homeDescription;

  if (!post) {
    return (
      <div className="space-y-4">
        <Seo title={t.notFound.title} description={t.notFound.description} path="/projekty" noindex />
        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">{t.notFound.title}</h1>
        <p className="text-sm text-slate-700 md:text-base">{t.notFound.description}</p>
        <Link to="/projekty" className="text-blue-700 font-semibold hover:text-blue-800 md:text-base">
          {t.notFound.back}
        </Link>
      </div>
    );
  }

  const heroImg = post.image ? imageMap[post.slug] : undefined;
  const gallery = post.gallery?.length ? galleryMap[post.slug] || [] : [];
  const heroMeta = heroImg ? imageMeta[heroImg] : undefined;

  return (
    <div className="space-y-6">
      <Seo title={post.title} description={metaDescription} path={canonicalPath} />

      <div className="space-y-2">
        <Link to="/projekty" className="text-sm font-semibold text-blue-700 hover:text-blue-800 md:text-base">
           {t.nav.projects}
        </Link>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-700">
          {post.date} - {post.readTime}
        </p>
        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">{post.title}</h1>
        <p className="text-sm text-slate-700 md:text-base">{post.summary}</p>
      </div>

      {heroImg && (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <a href={heroImg} target="_blank" rel="noreferrer">
            <img
              src={heroImg}
              alt={post.title}
              className="mx-auto h-auto max-h-[420px] w-full object-contain p-2 md:max-h-[520px]"
              loading="lazy"
              decoding="async"
              width={heroMeta?.width}
              height={heroMeta?.height}
            />
          </a>
        </div>
      )}

      <div className="space-y-3 text-slate-700 leading-relaxed md:text-base">
        {post.content.map((para) => (
          <p key={para}>{para}</p>
        ))}
      </div>

      {post.tech?.length > 0 && (
        <p className="text-sm font-semibold text-slate-800 md:text-base">
          Tech: <span className="font-normal text-slate-700">{post.tech.join(", ")}</span>
        </p>
      )}

      {gallery.length > 0 && (
        <div className="grid gap-3 sm:grid-cols-2">
          {gallery.map((img) => {
            const meta = imageMeta[img];
            return (
              <a
                key={img}
                href={img}
                target="_blank"
                rel="noreferrer"
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                <img
                  src={img}
                  alt={post.title}
                  className="mx-auto h-auto max-h-64 w-full object-contain p-2"
                  loading="lazy"
                  decoding="async"
                  width={meta?.width}
                  height={meta?.height}
                />
              </a>
            );
          })}
        </div>
      )}

      {post.link && (
        <a
          href={post.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-800 md:text-base"
        >
          {post.linkLabel || t.projects.githubLabel || "GitHub"}
        </a>
      )}
    </div>
  );
};

export default ProjectDetailPage;

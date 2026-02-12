import type { Translation } from "@/locales/types";
import type { LayoutMeta } from "@/pages/navrh/types";

type NavrhMetaSectionProps = {
  title: string;
  description: string;
  labels: Translation["proposal"]["meta"];
  meta: LayoutMeta;
  onChange: (patch: Partial<LayoutMeta>) => void;
};

const NavrhMetaSection = ({ title, description, labels, meta, onChange }: NavrhMetaSectionProps) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
    <p className="mt-1 text-sm text-slate-600">{description}</p>
    <div className="mt-4 grid gap-4">
      <label className="grid gap-2 text-sm font-semibold text-slate-700">
        <span>{labels.projectNameLabel}</span>
        <input
          type="text"
          value={meta.projectName}
          onChange={(e) => onChange({ projectName: e.target.value })}
          placeholder={labels.projectNamePlaceholder}
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-700">
        <span>{labels.clientNameLabel}</span>
        <input
          type="text"
          value={meta.clientName}
          onChange={(e) => onChange({ clientName: e.target.value })}
          placeholder={labels.clientNamePlaceholder}
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-700">
        <span>{labels.contactLabel}</span>
        <input
          type="text"
          value={meta.contact}
          onChange={(e) => onChange({ contact: e.target.value })}
          placeholder={labels.contactPlaceholder}
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-700">
        <span>{labels.notesLabel}</span>
        <textarea
          rows={4}
          value={meta.notes}
          onChange={(e) => onChange({ notes: e.target.value })}
          placeholder={labels.notesPlaceholder}
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
        />
      </label>
    </div>
  </div>
);

export default NavrhMetaSection;

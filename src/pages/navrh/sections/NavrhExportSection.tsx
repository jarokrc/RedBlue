import type { ChangeEvent, RefObject } from "react";
import type { Translation } from "@/locales/types";

type NavrhExportSectionProps = {
  title: string;
  hint: string;
  exportJson: string;
  actions: Translation["proposal"]["actions"];
  onTriggerImport: () => void;
  onDownload: () => void;
  onCopy: () => void;
  onReset: () => void;
  importError: string | null;
  copyNotice: string | null;
  fileInputRef: RefObject<HTMLInputElement>;
  onImportFile: (event: ChangeEvent<HTMLInputElement>) => void;
};

const NavrhExportSection = ({
  title,
  hint,
  exportJson,
  actions,
  onTriggerImport,
  onDownload,
  onCopy,
  onReset,
  importError,
  copyNotice,
  fileInputRef,
  onImportFile,
}: NavrhExportSectionProps) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
    <p className="mt-1 text-sm text-slate-600">{hint}</p>
    <div className="mt-4 grid gap-3 sm:grid-cols-2">
      <button
        type="button"
        onClick={onTriggerImport}
        className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-blue-700 hover:text-blue-700"
      >
        {actions.importJson}
      </button>
      <button
        type="button"
        onClick={onDownload}
        className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-blue-800"
      >
        {actions.downloadJson}
      </button>
      <button
        type="button"
        onClick={onCopy}
        className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-blue-700 hover:text-blue-700"
      >
        {actions.copyJson}
      </button>
      <button
        type="button"
        onClick={onReset}
        className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-700 shadow-sm transition hover:border-rose-300"
      >
        {actions.reset}
      </button>
    </div>
    {importError && <p className="mt-3 text-sm font-semibold text-rose-600">{importError}</p>}
    {copyNotice && <p className="mt-3 text-sm font-semibold text-emerald-600">{copyNotice}</p>}
    <input
      ref={fileInputRef}
      type="file"
      accept="application/json"
      className="hidden"
      onChange={onImportFile}
    />
    <div className="mt-4 max-h-64 overflow-auto rounded-xl border border-slate-200 bg-slate-50 p-3">
      <pre className="text-xs text-slate-700">{exportJson}</pre>
    </div>
  </div>
);

export default NavrhExportSection;

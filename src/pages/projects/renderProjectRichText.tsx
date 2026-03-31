import { Fragment } from "react";

export const renderProjectRichText = (text: string) =>
  text
    .split(/(\*\*[^*]+\*\*)/g)
    .filter(Boolean)
    .map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={`${part}-${index}`} className="font-semibold text-slate-900">
            {part.slice(2, -2)}
          </strong>
        );
      }

      return <Fragment key={`${part}-${index}`}>{part}</Fragment>;
    });

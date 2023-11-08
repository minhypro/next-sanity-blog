/* eslint-disable @typescript-eslint/no-explicit-any */

import Refractor from "react-refractor";
import jsx from "refractor/lang/javascript";
import js from "refractor/lang/jsx";

Refractor.registerLanguage(js);
Refractor.registerLanguage(jsx);

export const CodeBlock = ({ value }: { value: any }) => (
  <Refractor className="max-w-3xl overflow-x-scroll" language={value.language} value={value.code} />
);

/* eslint-disable @typescript-eslint/no-explicit-any */

import Refractor from "react-refractor";
import jsx from "refractor/lang/javascript";
import js from "refractor/lang/jsx";

Refractor.registerLanguage(js);
Refractor.registerLanguage(jsx);

export const CodeBlock = ({ value }: { value: any }) => (
  <Refractor language={value.language} value={value.code} />
);

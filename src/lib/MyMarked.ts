import { Marked, Parser, type Token } from "marked";
import { MyMarkedRenderer } from "./MyMarkedRenderer";
// import hljs from "highlight.js";
import hljs from "highlight.js/lib/core";

import plaintext from "highlight.js/lib/languages/plaintext";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import css from "highlight.js/lib/languages/css";
import python from "highlight.js/lib/languages/python";
import json from "highlight.js/lib/languages/json";
import shell from "highlight.js/lib/languages/shell";
import yaml from "highlight.js/lib/languages/yaml";

import { markedHighlight } from "marked-highlight";
import DOMPurify from "dompurify";
import type { LanguageFn } from "highlight.js";

const languages: {
  [key: string]: LanguageFn;
} = {
  "plaintext": plaintext,
  "javascript": javascript,
  "typescript": typescript,
  "css": css,
  "python": python,
  "json": json,
  "shell": shell,
  "yaml": yaml,
}

hljs.configure({
  languages: Object.keys(languages),
});
for (const lang in languages) {
  const langFn = languages[lang];
  hljs.registerLanguage(lang, langFn);
} 
// for (const lang in languages) {
//   hljs.registerLanguage(lang, languages[lang] as LanguageFn);
// }

const highlightPlugin = markedHighlight({
  emptyLangClass: "hljs",
  langPrefix: "hljs language-",
  highlight(code, lang, info) {
    const language = hljs.getLanguage(lang) ? lang : "plaintext";
    return hljs.highlight(code, { language }).value;
  },
});

export class MyMarked extends Marked {
  constructor() {
    super(highlightPlugin);
    this.setOptions({
      renderer: new MyMarkedRenderer(),
    });
  }

  public render(markdown: string): string {
    const result = this.parse(markdown) as string;
    const clean = DOMPurify.sanitize(result);
    return clean;
  }
}

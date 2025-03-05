import { Marked, Parser, type Token } from "marked";
import { MyMarkedRenderer } from "./MyMarkedRenderer";
import hljs from "highlight.js";
import { markedHighlight } from "marked-highlight";
import DOMPurify from "dompurify";

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

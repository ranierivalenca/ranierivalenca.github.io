import { Renderer, type Tokens } from "marked";

export class MyMarkedRenderer extends Renderer {
  public link(args: Tokens.Link): string {
    let result = super.link(args);
    if (args.href.startsWith("http")) {
      result = result.replace("href=", 'target="_blank" href=');
    }
    return result;
  }

  public heading(args: Tokens.Heading): string {
    let result = super.heading(args);
    const content = result.match(/<h[1-6]>(.*)</)?.[1];
    if (content) {
      const id = content
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^a-z0-9-]/g, "");
      result = result.replace(/<h([1-6])/, `<h$1 id="${id}"`);
    }
    return result;
  }
}

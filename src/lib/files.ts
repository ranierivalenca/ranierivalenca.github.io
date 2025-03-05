import { Directory, File, MyFSNodeRepository } from "./Types";

const whoami = new File("whoami", "whoami", new Date("2025-03-02"));
const about = new File("about", "about", new Date("2025-03-02"));
const articles = new Directory(
  "my articles",
  "articles",
  new Date("2025-03-02")
).addChild(
  new Directory(
    "'my-learning-path' series",
    "my-learning-path",
    new Date("2025-03-02")
  )
);
const tests = new File(
  "markdown-tests",
  "markdown-tests",
  new Date("2025-03-05")
);

export const data = MyFSNodeRepository.getInstance().addNodes([
  whoami,
  about,
  articles,
  tests,
]).setHome(whoami);

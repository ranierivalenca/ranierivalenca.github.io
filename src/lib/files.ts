import { Directory, File, MyFSNodeRepository } from "./Types";

const home = new File("home", "home", new Date("2025-03-02"));
const about = new File("about", "about", new Date("2025-03-02"));
const articles = new Directory("articles", "articles", new Date("2025-03-02"));
const myLearningPath = new Directory(
  "my-learning-path with an extensive name",
  "my-learning-path",
  new Date("2025-03-02")
);

//
articles
  .addChild(new File("article1", "articles/article1", new Date("2025-03-02")))
  .addChild(new File("article2", "articles/article2", new Date("2025-03-02")))
  .addChild(myLearningPath)
  .addChild(new File("article5", "articles/article5", new Date("2025-03-02")))
  .addChild(new File("article6", "articles/article6", new Date("2025-03-02")))
  .addChild(new File("article7", "articles/article7", new Date("2025-03-02")))
  .addChild(new File("article8", "articles/article8", new Date("2025-03-02")))
  .addChild(new File("article9", "articles/article9", new Date("2025-03-02")))
  .addChild(new File("article10", "articles/article10", new Date("2025-03-02")))
  .addChild(new File("article11", "articles/article11", new Date("2025-03-02")))
  .addChild(new File("article12", "articles/article12", new Date("2025-03-02")))
  .addChild(new File("article13", "articles/article13", new Date("2025-03-02")))
  .addChild(new File("article14", "articles/article14", new Date("2025-03-02")))
  .addChild(new File("article15", "articles/article15", new Date("2025-03-02")))
  .addChild(new File("article16", "articles/article16", new Date("2025-03-02")))
  .addChild(new File("article17", "articles/article17", new Date("2025-03-02")))
  .addChild(new File("article18", "articles/article18", new Date("2025-03-02")))
  .addChild(new File("article19", "articles/article19", new Date("2025-03-02")))
  .addChild(new File("article20", "articles/article20", new Date("2025-03-02")))
  .addChild(new File("article21", "articles/article21", new Date("2025-03-02")))
  .addChild(new File("article22", "articles/article22", new Date("2025-03-02")))
  .addChild(new File("article23", "articles/article23", new Date("2025-03-02")))
  .addChild(new File("article24", "articles/article24", new Date("2025-03-02")))
  .addChild(
    new File("article25", "articles/article25", new Date("2025-03-02"))
  );

myLearningPath
  .addChild(
    new File(
      "article3 with a huge damn name",
      "my-learning-path/article3",
      new Date("2025-03-02")
    )
  )
  .addChild(
    new File("article4", "my-learning-path/article4", new Date("2025-03-02"))
  );

export const data = new MyFSNodeRepository([home, about, articles]);
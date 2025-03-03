import { Directory, File } from "./Types";

const home = new File("home", "/home", new Date('2025-03-02'))
const about = new File("about", "/about", new Date('2025-03-02'))
const articles = new Directory("articles", "/articles", new Date('2025-03-02'))
const myLearningPath = new Directory("my-learning-path", "/my-learning-path", new Date('2025-03-02'))

// 
articles.addChild(
    new File("article1", "/articles/article1", new Date('2025-03-02'))
).addChild(
    new File("article2", "/articles/article2", new Date('2025-03-02'))
).addChild(
    myLearningPath
)

myLearningPath.addChild(
    new File("article3", "/my-learning-path/article3", new Date('2025-03-02'))
).addChild(
    new File("article4", "/my-learning-path/article4", new Date('2025-03-02'))
)

export const data = [
    home,
    about,
    articles,
]
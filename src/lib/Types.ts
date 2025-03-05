enum InterceptorType {
  BeforeOpen = "BeforeOpen",
  AfterOpen = "AfterOpen",
  BeforeClose = "BeforeClose",
  AfterClose = "AfterClose",
}

class Interceptable {
  private interceptors: { [key: string]: Function[] } = {};
  protected intercept(type: InterceptorType, interceptor: Function): void {
    if (!this.interceptors[type]) {
      this.interceptors[type] = [];
    }
    this.interceptors[type].push(interceptor);
  }
  protected invokeInterceptors(type: InterceptorType): void {
    if (this.interceptors[type]) {
      this.interceptors[type].forEach((interceptor) => interceptor());
    }
  }
}

export abstract class MyFSNode extends Interceptable {
  private openState: boolean = false;

  protected uuid: string;
  protected name: string;
  protected path: string;

  constructor(name: string, path: string, uuid?: string) {
    super();
    this.uuid = uuid || this.generateUuid(name, path);
    this.name = name;
    this.path = path;
  }

  // generate uuid based on the name and path (hash)
  private generateUuid = (name: string, path: string): string => {
    const hash = (s: string) =>
      s
        .split("")
        .reduce(
          (a, b) =>
            ((BigInt(a) << BigInt(32)) | BigInt(b.charCodeAt(0) << 16)) &
            (BigInt(2 ** 64) - BigInt(1)),
          BigInt(0)
        );
    return hash(name + path).toString(36);
  };

  public open(): void {
    this.invokeInterceptors(InterceptorType.BeforeOpen);
    this.openState = true;
    this.invokeInterceptors(InterceptorType.AfterOpen);
  }
  public close(): void {
    this.invokeInterceptors(InterceptorType.BeforeClose);
    this.openState = false;
    this.invokeInterceptors(InterceptorType.AfterClose);
  }

  public toggle(): void {
    this.openState ? this.close() : this.open();
  }

  public isOpen = (): boolean => this.openState;
  public getUuid = (): string => this.uuid;
  public getName = (): string => this.name;
  public getPath = (): string => this.path;

  public addBeforeOpenInterceptor(interceptor: Function): void {
    this.intercept(InterceptorType.BeforeOpen, interceptor);
  }
  public addAfterOpenInterceptor(interceptor: Function): void {
    this.intercept(InterceptorType.AfterOpen, interceptor);
  }
  public addBeforeCloseInterceptor(interceptor: Function): void {
    this.intercept(InterceptorType.BeforeClose, interceptor);
  }
  public addAfterCloseInterceptor(interceptor: Function): void {
    this.intercept(InterceptorType.AfterClose, interceptor);
  }

  public abstract isFile(): boolean;
  public abstract isDirectory(): boolean;

  public abstract getAsFile(): File;
  public abstract getAsDirectory(): Directory;
}

export class File extends MyFSNode {
  private createdAt: Date;
  private modifiedAt: Date;
  private markdown: string = "";
  private markdownSet: boolean = false;

  constructor(
    name: string,
    path: string,
    createdAt: Date,
    modifiedAt?: Date,
    uuid?: string
  ) {
    super(name, path, uuid);
    this.createdAt = createdAt;
    this.modifiedAt = modifiedAt || createdAt;
  }

  public getCreatedAt = (): Date => this.createdAt;
  public getModifiedAt = (): Date => this.modifiedAt;

  public rename(newName: string): void {
    this.name = newName;
    this.modifiedAt = new Date();
  }

  public move(newPath: string): void {
    this.path = newPath;
    this.modifiedAt = new Date();
  }

  public touch(): void {
    this.modifiedAt = new Date();
  }

  public isMarkdownSet = (): boolean => this.markdownSet;
  public getMarkdown = (): string => this.markdown;
  public setMarkdown(markdown: string): void {
    this.markdown = markdown;
    this.markdownSet = true;
  }

  public isFile = (): boolean => true;
  public isDirectory = (): boolean => false;

  public getAsFile = (): File => this;
  public getAsDirectory = (): Directory => {
    throw new Error("This is not a directory");
  };

  public toJson = (): string =>
    JSON.stringify({
      uuid: this.uuid,
      name: this.name,
      path: this.path,
      createdAt: this.createdAt.toISOString(),
      modifiedAt: this.modifiedAt.toISOString(),
    });

  static fromJSON(jsonString: string): File {
    const json = JSON.parse(jsonString);
    return new File(
      json.name,
      json.path,
      new Date(json.createdAt),
      new Date(json.modifiedAt),
      json.uuid
    );
  }
}

export class Directory extends MyFSNode {
  private children: MyFSNode[] = [];

  constructor(name: string, path: string, createdAt: Date) {
    super(name, path);
  }

  public getChildren = (): MyFSNode[] => this.children;

  public addChild(child: MyFSNode): Directory {
    this.children.push(child);

    return this;
  }

  public removeChild(child: MyFSNode): void {
    this.children = this.children.filter(
      (c) => c.getUuid() !== child.getUuid()
    );
  }

  public isFile = (): boolean => false;
  public isDirectory = (): boolean => true;

  public getAsFile = (): File => {
    throw new Error("This is not a file");
  };
  public getAsDirectory = (): Directory => this;
}

export class MyFSNodeRepository {
  private nodes: MyFSNode[] = [];

  constructor(nodes: MyFSNode[]) {
    this.nodes = nodes;
  }

  private recursiveFind<T>(
    nodes: MyFSNode[],
    getAttributeFunction: (node: MyFSNode) => T,
    testFunction: (attribute: T) => boolean
  ): MyFSNode | null {
    for (let node of nodes) {
      if (testFunction(getAttributeFunction(node))) {
        return node;
      }
      if (!node.isDirectory()) {
        continue;
      }
      const result = this.recursiveFind(
        node.getAsDirectory().getChildren(),
        getAttributeFunction,
        testFunction
      );
      if (result) {
        return result;
      }
    }
    return null;
  }

  private recursiveFindNodeByUuid(uuid: string): MyFSNode | null {
    return this.recursiveFind(
      this.nodes,
      (node) => node.getUuid(),
      (attribute) => attribute === uuid
    );
  }

  private recursiveFindNodeByPath(path: string): MyFSNode | null {
    return this.recursiveFind(
      this.nodes,
      (node) => node.getPath(),
      (attribute) => attribute === path
    );
  }

  public getNodeByUuid(uuid: string): MyFSNode | null {
    return this.recursiveFindNodeByUuid(uuid);
  }

  public getNodeByPath(path: string): MyFSNode | null {
    return this.recursiveFindNodeByPath(path);
  }

  public getNodes = (): MyFSNode[] => this.nodes;
}

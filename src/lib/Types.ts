enum InterceptorType {
    BeforeOpen = 'BeforeOpen',
    AfterOpen = 'AfterOpen',
    BeforeClose = 'BeforeClose',
    AfterClose = 'AfterClose'
}

class Interceptable {
    private interceptors: { [key: string ]: Function[] } = {}
    protected intercept(type: InterceptorType, interceptor: Function): void {
        if (!this.interceptors[type]) {
            this.interceptors[type] = []
        }
        this.interceptors[type].push(interceptor)
    }
    protected invokeInterceptors(type: InterceptorType): void {
        if (this.interceptors[type]) {
            this.interceptors[type].forEach(interceptor => interceptor())
        }
    }
}


export abstract class MyFSNode extends Interceptable {
    private openState: boolean = false

    protected uuid: string = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    protected name: string
    protected path: string

    constructor(name: string, path: string) {
        super()
        this.name = name
        this.path = path
    }

    public open(): void {
        this.invokeInterceptors(InterceptorType.BeforeOpen)
        this.openState = true
        this.invokeInterceptors(InterceptorType.AfterOpen)
    }
    public close(): void {
        this.invokeInterceptors(InterceptorType.BeforeClose)
        this.openState = false
        this.invokeInterceptors(InterceptorType.AfterClose)
    }

    public toggle(): void {
        (this.openState) ? this.close() : this.open()
    }

    public isOpen = (): boolean => this.openState
    public getUuid = (): string => this.uuid
    public getName = (): string => this.name
    public getPath = (): string => this.path

    public addBeforeOpenInterceptor(interceptor: Function): void {
        this.intercept(InterceptorType.BeforeOpen, interceptor)
    }
    public addAfterOpenInterceptor(interceptor: Function): void {
        this.intercept(InterceptorType.AfterOpen, interceptor)
    }
    public addBeforeCloseInterceptor(interceptor: Function): void {
        this.intercept(InterceptorType.BeforeClose, interceptor)
    }
    public addAfterCloseInterceptor(interceptor: Function): void {
        this.intercept(InterceptorType.AfterClose, interceptor)
    }

    public abstract isFile(): boolean
    public abstract isDirectory(): boolean

    public abstract getAsFile(): File
    public abstract getAsDirectory(): Directory
}

export class File extends MyFSNode {
    private createdAt: Date
    private modifiedAt: Date
    
    constructor(name: string, path: string, createdAt: Date) {
        super(name, path)
        this.createdAt = createdAt
        this.modifiedAt = createdAt
    }
    

    public getCreatedAt = (): Date => this.createdAt
    public getModifiedAt = (): Date => this.modifiedAt

    public rename(newName: string): void {
        this.name = newName
        this.modifiedAt = new Date()
    }

    public move(newPath: string): void {
        this.path = newPath
        this.modifiedAt = new Date()
    }

    public touch(): void {
        this.modifiedAt = new Date()
    }

    public isFile = (): boolean => true
    public isDirectory = (): boolean => false

    public getAsFile = (): File => this
    public getAsDirectory = (): Directory => {
        throw new Error('This is not a directory')
    }
}

export class Directory extends MyFSNode {
    private children: (MyFSNode)[] = []

    constructor(name: string, path: string, createdAt: Date) {
        super(name, path)
    }

    public getChildren = (): (MyFSNode)[] => this.children

    public addChild(child: MyFSNode): Directory {
        this.children.push(child)

        return this
    }

    public removeChild(child: MyFSNode): void {
        this.children = this.children.filter(c => c.getUuid() !== child.getUuid())
    }

    public isFile = (): boolean => false
    public isDirectory = (): boolean => true

    public getAsFile = (): File => {
        throw new Error('This is not a file')
    }
    public getAsDirectory = (): Directory => this
}
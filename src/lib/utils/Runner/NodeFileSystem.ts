import type { WebContainer } from "@webcontainer/api";

export class NodeFileSystemManager {
    container: WebContainer
    // any type due to the dynamic nature of the file system
    files: Record<string, any> = {}

    constructor(container: WebContainer) {
        this.container = container
    }

    setFile(name: string, content: string, toDirectory?: string) {
        void name;
        void content;
        void toDirectory;
        throw new Error("Method to be implemented!")
    }

    complileFiles() {
        this.container.mount(this.files)
    }
}
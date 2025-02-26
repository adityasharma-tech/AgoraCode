import { WorkspaceItemPropT } from "./types";

export const demoWorkspaces: WorkspaceItemPropT[] = [
    {
        _id: crypto.randomUUID(),
        title: `Workspace ${Math.floor(Math.random() * 10000)}`,
        cid: crypto.randomUUID(),
        createdAt: new Date(),
        files: [],
        updatedAt: new Date()
    },
    {
        _id: crypto.randomUUID(),
        title: `Workspace ${Math.floor(Math.random() * 10000)}`,
        cid: crypto.randomUUID(),
        createdAt: new Date(),
        files: [],
        updatedAt: new Date()
    },
    {
        _id: crypto.randomUUID(),
        title: `Workspace ${Math.floor(Math.random() * 10000)}`,
        cid: crypto.randomUUID(),
        createdAt: new Date(),
        files: [],
        updatedAt: new Date()
    },    
]
import { FileItemPropT, WorkspaceItemPropT } from "./types";

export const demoWorkspaces: WorkspaceItemPropT[] = [
  {
    _id: crypto.randomUUID(),
    title: `Workspace ${Math.floor(Math.random() * 10000)}`,
    cid: crypto.randomUUID(),
    createdAt: new Date(),
    files: [],
    updatedAt: new Date(),
  },
  {
    _id: crypto.randomUUID(),
    title: `Workspace ${Math.floor(Math.random() * 10000)}`,
    cid: crypto.randomUUID(),
    createdAt: new Date(),
    files: [],
    updatedAt: new Date(),
  },
  {
    _id: crypto.randomUUID(),
    title: `Workspace ${Math.floor(Math.random() * 10000)}`,
    cid: crypto.randomUUID(),
    createdAt: new Date(),
    files: [],
    updatedAt: new Date(),
  },
];

export const demoFilesData:FileItemPropT [] = [
  ...Array.from({ length: 10 }).map(() => ({
    _id: crypto.randomUUID(),
    filepath: `/path/to/file${Math.floor(Math.random() * 10000)}.txt`,
    content: `File content ${Math.random().toString(36).substring(2, 15)}`,
    createdAt: new Date(),
    updatedAt: new Date(),
  })),
];

export const demoOpenFiles:FileItemPropT [] = [
  ...Array.from({ length: 3 }).map(() => ({
    _id: crypto.randomUUID(),
    filepath: `/path/to/file${Math.floor(Math.random() * 10000)}.txt`,
    content: `File content ${Math.random().toString(36).substring(2, 15)}`,
    createdAt: new Date(),
    updatedAt: new Date(),
  })),
];
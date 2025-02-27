export type WorkspaceItemPropT = {
    _id?: string;
    title: string; 
    files: string[];
    cid: string;
    createdAt: Date;
    updatedAt: Date;
}

export type FileItemPropT = {
  _id: string;
  filepath: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
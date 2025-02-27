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

export const defaultCodeContent = `import http from "http";\nimport morgan from "morgan";\nimport express from "express";\nimport cookieParser from "cookie-parser";\n\nimport { Server } from "socket.io";\nimport { rateLimit } from "express-rate-limit";\nimport { ApiResponse } from "./lib/ApiResponse";\n\n/**\n* Http Express Server\n*/\nconst app = express();\nconst server = http.createServer(app);\n\n/**\n* Socket io server\n*/\nconst io = new Server(server);\nio.attach(server);\n\n\n/**\n* Rate limiter configuration\n*/\nconst limiter = rateLimit({\nwindowMs: 1000 * 60,\nlimit: 60,\nmessage: new ApiResponse(429, null, "Too many requests"),\nstandardHeaders: true,\nlegacyHeaders: false,\n});\n\n/**\n* middlewares\n*/\napp.use(express.json());\napp.use(cookieParser());\napp.use(morgan("dev"));\napp.use(limiter);\n\n/**\n* Router imports\n*/\nimport fileRouter from "./routes/files.routes"\nimport workspaceRouter from "./routes/workspace.routes"\n\n/**\n* Router handlers\n*/\napp.use("/file", fileRouter);\napp.use("/workspace", workspaceRouter);\n\nexport default server;\n\n`
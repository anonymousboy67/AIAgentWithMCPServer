# AIAgentWithMCPServer

A Node.js backend project using the Model Context Protocol (MCP) to build AI-powered tools with real-time server communication using Server-Sent Events (SSE).

## 📁 Folder Structure

```
aiagentwithmcpserver/
├── client/            # Frontend (optional)
├── server/            # Backend server
│   ├── index.js       # Main server entry point
│   └── mcp.tool.js    # Custom MCP tools (e.g., createPost)
├── .gitignore         # Git ignore rules
└── README.md          # Project documentation
```

## 🚀 Features

- 🤖 MCP-powered tools integration  
- 🔢 Tool: `addTwoNumbers`  
- 🐦 Tool: `createPost`  
- 📡 Real-time communication with SSE  
- ✅ Schema validation with Zod  

## 🧑‍💻 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/anonymousboy67/AIAgentWithMCPServer.git
cd AIAgentWithMCPServer
```

### 2. Install Dependencies

```bash
cd server
npm install
```

### 3. Run the Server

```bash
node index.js
```

Server will be live at: [http://localhost:3001](http://localhost:3001)

## 📬 Endpoints

| Method | Endpoint     | Description                        |
|--------|--------------|------------------------------------|
| GET    | /sse         | Connect via SSE                    |
| POST   | /messages    | Send messages to server via POST   |

## 🧠 Defined Tools

### ➕ addTwoNumbers

Adds two numbers and returns their sum.

### 🐤 createPost

Creates a post on X (formerly Twitter) using provided status.

## 📦 Tech Stack

- Node.js  
- Express.js  
- Model Context Protocol (MCP)  
- Zod  
- Server-Sent Events (SSE)  

## 🙌 Credits

Built using [Model Context Protocol SDK](https://github.com/modelcontextprotocol/sdk)




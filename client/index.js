import { config } from "dotenv";
import readline from 'readline/promises'
import {GoogleGenAI} from "./google/genai"
import {client} from "@modelcontextprotocol/sdk/client/index.js";
import {SSEClientTransport} from "@modelcontextprotocol/sdk/client/sse.js";
config();


const ai=new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});

const chartHistory=[];
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

async function chatLoop() {
    const question=await rl.question("You: ");
    if(question==="exit"){
        rl.close();
        return;
    }
    const response=await ai.chat(question,chartHistory);
    console.log("AI:",response);
    chartHistory.push({question,response});
    await chatLoop();
}
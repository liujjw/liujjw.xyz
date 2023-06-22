import { Configuration, OpenAIApi } from 'openai-edge';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import type { NextRequest } from 'next/server'
 
const aiConfig = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(aiConfig);
 
// export const runtime = 'edge';
export const config = {
  runtime: 'experimental-edge'
}

export default async function handler(req: NextRequest) {
  const { prompt } = await req.json();
 
  const response = await openai.createCompletion({
    model: 'gpt-3.5-turbo',
    prompt,
    stream: true,
    temperature: 0.7,
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
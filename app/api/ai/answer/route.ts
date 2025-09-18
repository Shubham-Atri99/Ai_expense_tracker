import { generateInsightAnswer } from '@/app/Actions/getAIanswer';

import { NextResponse } from 'next/server';


export async function POST(req: Request) {
  const { question } = await req.json();
  const answer = await generateInsightAnswer(question);
  return NextResponse.json({ answer });
}

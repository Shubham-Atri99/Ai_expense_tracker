import { getAIInsights } from '@/app/Actions/getAIInsights';
import { NextResponse } from 'next/server';


export async function GET() {
  const data = await getAIInsights();
  return NextResponse.json(data);
}

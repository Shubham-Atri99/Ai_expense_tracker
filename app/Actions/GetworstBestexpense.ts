'use server';
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";


export async function getworstBestexpense(): Promise<{
  worst?: number;
  best?: number;
  error?: string;
}> {
    const { userId } = await auth();
    if (!userId) {
    return { error: 'User not found' };
  }
    try {
    const records= await db.record.findMany({
    where: { userId },
  })
  const amounts = records.map(record => record.amount);
    const worst = Math.min(...amounts);
    const best = Math.max(...amounts);
    return { worst, best };
  } catch (error) {
    console.error('Error fetching user records:', error);
    return { error: 'Database error' };
  }
}
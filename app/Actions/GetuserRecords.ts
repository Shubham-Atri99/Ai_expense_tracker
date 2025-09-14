'use server';
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";


export async function getuserRecords(): Promise<{
  record?: number;
  daysWithRecords?: number;
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
  const record= records.reduce((total, record) => total + record.amount, 0);
   
  const daysWithRecords = records.filter(
    (record)=> record.amount>0
  ).length;
    return { record, daysWithRecords };
  } catch (error) {
    console.error('Error fetching user records:', error);
    return { error: 'Database error' };
  }
  
}

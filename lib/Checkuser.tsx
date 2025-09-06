import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";

export const Checkuser = async () => {
  try {
    const user = await currentUser();
    if (!user) {
      console.log("⚠️ No Clerk user found");
      return null;
    }

    const loggedInUser = await db.user.findUnique({
      where: { clerkUserId: user.id },
    });

    if (loggedInUser) {
      console.log("✅ Found existing user:", loggedInUser.email);
      return loggedInUser;
    }

    console.log("🆕 Creating new user in DB:", {
      id: user.id,
      name: `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim(),
      email: user.emailAddresses[0].emailAddress,
    });

    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name: `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim(),
        email: user.emailAddresses[0].emailAddress,
        imageUrl: user.imageUrl,
      },
    });

    return newUser;
  } catch (err) {
    console.error("❌ Error in Checkuser:", err);
    throw err;
  }
};


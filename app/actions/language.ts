"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function setLanguage(language: string) {
    const cookieStore = await cookies();
    cookieStore.set("language", language, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 30, // 30 days
    });
    revalidatePath("/");
}

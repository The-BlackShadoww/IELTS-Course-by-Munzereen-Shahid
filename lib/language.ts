import { cookies } from "next/headers";

export async function getServerLanguage(): Promise<string> {
    const cookieStore = await cookies();
    return cookieStore.get("language")?.value || "en";
}

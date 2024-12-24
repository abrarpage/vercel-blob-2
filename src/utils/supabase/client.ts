import { createBrowserClient } from "@supabase/ssr";

export function createClient(deleteAccount: "" | "deleteAccount" = "") {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    deleteAccount === "deleteAccount"
      ? process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE!
      : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}

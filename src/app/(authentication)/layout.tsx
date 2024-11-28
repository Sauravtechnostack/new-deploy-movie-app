import { Toaster } from "@/components/ui/toaster";
import { getUserFromToken } from "@/utils/auth";
import { redirect } from "next/navigation";
import "../globals.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = await getUserFromToken();
  if (user) {
    return redirect("/dashboard");
  }

  return (
    <>
      <div
        className={`bg-background text-foreground font-sans overflow-y-auto overflow-x-hidden w-screen min-h-screen bg-bottom-pattern bg-no-repeat	bg-bottom bg-contain`}
      >
        <Toaster />
        {children}
      </div>
    </>
  );
}

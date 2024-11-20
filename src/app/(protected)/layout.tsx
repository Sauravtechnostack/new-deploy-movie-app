import { Toaster } from "@/components/ui/toaster";
import { UserProvider } from "@/store/user-store";
import { getUserFromToken } from "@/utils/auth";
import { redirect } from "next/navigation";
import "../globals.css";



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUserFromToken();
  if(!user) {
    return redirect("/login");
  }

  return (
    
        <UserProvider user={{
            email: user?.email || '',
            id: user?._id.toString() || '',
        }}>
          <Toaster />
          {children}
        </UserProvider>
  );
}

import { LoginForm } from "./components/LoginForm";

export const dynamic = "force-static";

export default function LoginPage() {
  return (
    <div className="w-screen h-screen flex justify-center">
      <LoginForm />
    </div>
  );
}

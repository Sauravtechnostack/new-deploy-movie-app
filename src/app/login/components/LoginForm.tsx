"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  rememberMe: z.boolean().default(false),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginForm() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    }
  });

  const onSubmit = async (data: LoginFormData) => {
    // Handle login logic here
    console.log(data);  
    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
        }); 

    if(response.ok) {
      redirect("/dashboard");
    } else {
      toast({
        title: "Something went wrong",
      });
    }
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[300px] flex flex-col justify-center items-center">
      <div className="text-primary-foreground text-center font-semibold text-[48px] lg:text-[64px] mb-40">
        Sign in
      </div>
      
      <div className="mb-5 w-full">
        <Input
          className="w-full"
          placeholder="Email"
          type="email"
          {...register("email")}
        />
        <div className="h-4">
          {errors.email && (
            <p className="text-red-500 text-[11px] mt-1">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="mb-5 w-full">
        <Input
          placeholder="Password"
          type="password"
          className="w-full"
          {...register("password")}
        />
        <div className="h-4">
          {errors.password && (
            <p className="text-red-500 text-[11px] mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
      </div>

      <div className="mb-24 flex items-center justify-center w-full">
        <Checkbox
          id="rememberMeCheckbox"
          className="h-[17px] w-[18px] mr-8 bg-input outline-none border-none"
          onChange={() => {
            setValue("rememberMe", !getValues("rememberMe"));
          }}
        />
        <Label
          htmlFor="rememberMeCheckbox"
          className="font-normal text-[14px] text-primary-foreground tracking-wider"
        >
          Remember me
        </Label>
      </div>

      <div>
        <Button type="submit">Login</Button>
      </div>
    </form>
  );
} 
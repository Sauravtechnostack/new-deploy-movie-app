"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { validateEmail, validatePassword } from "@/lib/utils";
import { redirect } from "next/navigation";
import React, { useRef, useState } from "react";

function LoginPage() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>("");

  const handleEmailInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmail(event.target.value);
    // Reset error while typing
    setEmailErrorMessage("");
  };

  const handlePasswordInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
    setPasswordErrorMessage("");
  };

  const handleEmailBlur = () => {
    if (!validateEmail(email)) {
      setEmailErrorMessage("Invalid email address.");
    }
  };

  const handlePasswordBlur = () => {
    const error = validatePassword(password);
    if (error.length > 0) {
      setPasswordErrorMessage(error);
    }
  };

  const handleLogin = () => {
    const error = validatePassword(password);
    if (!validateEmail(email)) {
      setEmailErrorMessage("Invalid email address.");
      return false;
    }
    if (error.length > 0) {
      setPasswordErrorMessage(error);
      return false;
    }

    redirect("/dashboard");
    return true;
  };

  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="w-[300px] flex flex-col justify-center items-center">
        <div className="text-primary-foreground text-center font-semibold text-[48px] lg:text-[64px] mb-40">
          Sign in
        </div>
        <div className="mb-5 w-full">
          <Input
            className="w-full"
            placeholder="Email"
            type="email"
            ref={emailInputRef}
            onChange={handleEmailInputChange}
            onBlur={handleEmailBlur}
            value={email}
            isInputvalid={emailErrorMessage.length > 0 ? false : true}
          />
          <div className="h-4">
            {emailErrorMessage && (
              <p className="text-red-500 text-[11px] mt-1">
                {emailErrorMessage}
              </p>
            )}
          </div>
        </div>
        <div className="mb-5 w-full">
          <Input
            placeholder="Password"
            type="password"
            ref={passwordInputRef}
            onChange={handlePasswordInputChange}
            onBlur={handlePasswordBlur}
            value={password}
            isInputvalid={passwordErrorMessage.length > 0 ? false : true}
            className="w-full"
          />
          <div className="h-4">
            {passwordErrorMessage && (
              <p className="text-red-500 text-[11px] mt-1">
                {passwordErrorMessage}
              </p>
            )}
          </div>
        </div>
        <div className="mb-24 flex items-center justify-center w-full">
          <Checkbox
            id="rememberMeCheckbox"
            className="h-[17px] w-[18px] mr-8 bg-input outline-none border-none "
          />
          <Label
            htmlFor="rememberMeCheckbox"
            className="font-normal text-[14px] text-primary-foreground tracking-wider"
          >
            {" "}
            Remember me{" "}
          </Label>
        </div>
        <div>
          <Button onClick={handleLogin}>Login</Button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

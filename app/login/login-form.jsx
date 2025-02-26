"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function LogingForm({ title }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateForm = () => {
    if (!email) {
      setEmailError("Email is required");
      return false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      return false;
    } else {
      setPasswordError("");
    }

    return true;
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log({ email: email, password: password });
    }
  };
  return (
    <div className="w-[380px] mx-auto">
      <Card className="bg-white shadow-md border border-gray-200 rounded-lg p-4">
        <CardHeader>
          <CardTitle className="text-center text-xl font-semibold text-gray-900">
            {title}
          </CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmitForm} className="space-y-4">
          <CardContent>
            <Label
              htmlFor="email"
              className="text-sm font-medium text-gray-900 block mb-2 "
            >
              Your Email
            </Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300  text-gray-900 focus:ring-1 focus:ring-offset-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 rounded-md  mb-2"
              placeholder="example@email.com"
            />
            {emailError && (
              <div className="text-red-600 text-xs mt-2 ml-1">{emailError}</div>
            )}

            <Label
              htmlFor="password"
              className="text-sm font-medium text-gray-900 block mb-2 "
            >
              Your Password
            </Label>
            <Input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300  text-gray-900 focus:ring-1 focus:ring-offset-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 rounded-md"
              placeholder="**********"
            />
            {passwordError && (
              <div className="text-red-600 text-xs mt-2 ml-1">
                {passwordError}
              </div>
            )}

            <div className="flex justify-between items-center mt-4">
              <div className="flex gap-2 ">
                <div className="flex items-center h-5">
                  <Checkbox
                    id="remember"
                    className="bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-300 h-4 w-4 rounded"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="remember"
                    className="font-medium text-gray-900 "
                  >
                    Remember me
                  </Label>
                </div>
              </div>
              <a
                href="/forgot-password"
                className="text-blue-900 text-sm font-medium hover:underline "
              >
                Forgot password?
              </a>
            </div>
            <Button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4"
            >
              Sign in
            </Button>
          </CardContent>
          <CardFooter className=" flex justify-center">
            <div className=" text-sm  text-gray-900  space-x-1">
              <span>Don’t have an account yet?</span>
              <a
                href="/register"
                className="text-sm font-semibold text-blue-700 hover:underline "
              >
                Sign up here
              </a>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

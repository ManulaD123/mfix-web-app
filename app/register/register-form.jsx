"use client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";

export default function RegisterForm() {
  const [isLoading, setLoading] = useState(false);
  const handleSubmitForm = () => {};
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="bg-blue-50/90 w-[350px]">
        <CardHeader>
          <CardTitle className="text-center">Create an account</CardTitle>
          <CardDescription className="text-xs text-center">
            Enter your information to get started
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmitForm}>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-1.5 ">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="John Doe" />
              </div>

              <div className="flex flex-col space-y-1.5 ">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col space-y-1.5 ">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter new password"
                />
              </div>

              <div className="flex flex-col space-y-1.5 ">
                <Label htmlFor="confirm_password">Confirm password</Label>
                <Input
                  type="password"
                  id="confirm_password"
                  name="confirm_password"
                  placeholder="Enter password to confirm"
                />
              </div>
              {/* form error */}

              <div className="flex justify-center gap-1 text-xs">
                Already have an accont?{" "}
                <Link
                  href="/login"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Login
                </Link>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              className="flex-1 bg-gray-900 text-white"
              type="submit"
              disabled={isLoading}
            >
              {isLoading && <Loader2 className="animate-spin" />}
              Register
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

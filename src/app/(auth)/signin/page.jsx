"use client";

import React, { useState } from "react";
import {
  Input,
  Button,
  Form,
  Checkbox,
  TextField,
  Label,
  FieldError,
  InputGroup,
} from "@heroui/react";
import { Eye, Lock, EyeSlash } from "@gravity-ui/icons";
import Link from "next/link";
import { Mail } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { FaGoogle } from "react-icons/fa";

export default function SignInPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const Alldata = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: Alldata.email,
      password: Alldata.password,
      
      callbackURL: "/",
    });

    if (error) {
      alert(`SignIn Failed: ${error.message}`);
      return;
    }

    if (data) {
      alert(`SignIn Successful for: ${Alldata.email}`);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50/50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-[0_2px_10px_0_rgba(0,0,0,0.05)] border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
         
          <p className="text-sm text-gray-500 mt-2">
            Please enter your details to sign in
          </p>
        </div>

        <Form
          className="flex flex-col gap-5"
          onSubmit={handleSubmit}
          validationBehavior="native"
        >
          {/* Email Field Group */}
          <div className="flex flex-col gap-1.5">
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label>Email</Label>
              <Input placeholder="john@example.com" />
              <FieldError />
            </TextField>
          </div>

          {/* Password Field Group */}
          <div className="flex flex-col gap-1.5">
            <TextField className="w-full" name="password">
              <Label>Password</Label>
              <InputGroup>
                <InputGroup.Input
                  className="w-full"
                  type={isVisible ? "text" : "password"}
                  value={password}
                  placeholder="Enter Your Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputGroup.Suffix className="pr-0">
                  <Button
                    isIconOnly
                    size="sm"
                    variant="ghost"
                    onPress={() => setIsVisible(!isVisible)}
                  >
                    {isVisible ? <Eye /> : <EyeSlash />}
                  </Button>
                </InputGroup.Suffix>
              </InputGroup>
            </TextField>
          </div>

          <div className="flex justify-between items-center px-1">
            <Checkbox
              color="success"
              size="sm"
              classNames={{ label: "text-xs font-medium" }}
            >
              Remember me
            </Checkbox>
            <Link
              href="/signup"
             
              className="text-xs text-green-600 hover:underline font-medium"
            >
              Forgot password?
            </Link>
          </div>

          <Button
            className="w-full bg-green-600 text-white font-bold h-12 rounded-xl mt-2 shadow-sm"
            type="submit"
          >
            Sign In
          </Button>
        </Form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="text-green-600 font-bold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

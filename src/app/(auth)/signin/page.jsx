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
import { Eye, EyeSlash } from "@gravity-ui/icons";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { FaGoogle } from "react-icons/fa"; 
import { toast } from "react-toastify";

export default function SignInPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [password, setPassword] = useState("");

  // Google Login Handler
  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

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
      toast.error(`SignIn Failed: ${error.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
    if (data) {
      
        toast.error(`SignIn Successful!: ${Alldata.email}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50/50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-sm text-gray-500 mt-2">
            Please enter your details
          </p>
        </div>

        <Form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          {/* Email & Password  */}
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField name="password">
            <Label>Password</Label>
            <InputGroup>
              <InputGroup.Input
                type={isVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputGroup.Suffix>
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

          <Button
            className="w-full bg-green-600 text-white font-bold h-12 rounded-xl mt-2"
            type="submit"
          >
            Sign In
          </Button>
        </Form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-200"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        {/* Google Login Button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-700 font-semibold h-12 rounded-xl hover:bg-gray-50 transition-all active:scale-95 shadow-sm"
        >
          <FaGoogle className="text-red-500 text-lg" />
          Sign in with Google
        </button>

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

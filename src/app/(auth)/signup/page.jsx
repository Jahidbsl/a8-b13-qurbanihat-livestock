"use client";

import React, { useState } from "react";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Form,
  Input,
  Label,
  TextField,
  FieldError,
  InputGroup,
} from "@heroui/react";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { toast, Bounce, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";


export default function SignUpPage() {
  const router = useRouter();
  const [userImage, setUserImage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [password, setPassword] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const Alldata = Object.fromEntries(formData.entries());

    try {
      const { data, error } = await authClient.signUp.email({
        email: Alldata.email,
        password: Alldata.password,
        name: Alldata.fullName,
        image: userImage,
        callbackURL: "/",
      });

      if (error) {
        toast.error(`Registration Failed: ${error.message}`, {
          position: "top-center",
          autoClose: 5000,
          theme: "light",
          transition: Bounce,
        });
        return;
      }

      if (data) {
        toast.success(`Registration Successful for: ${Alldata.fullName}`, {
          position: "top-center",
          theme: "light",
          transition: Bounce,
        });

        e.target.reset();

        setTimeout(() => {
          router.push("/");
          router.refresh();
        }, 1500);
      }
    } catch (err) {
      toast.error("An unexpected error occurred.");
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-10">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Form
        className="flex w-full max-w-md flex-col gap-4 bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
        onSubmit={onSubmit}
        validationBehavior="native"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Create Account
        </h2>

        {/* Full Name */}
        <TextField isRequired name="fullName">
          <Label>Full Name</Label>
          <Input placeholder="Enter your full name" type="text" />
          <FieldError />
        </TextField>

        {/* Email */}
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Invalid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        {/* Password */}
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

        {/*  Image  */}
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-semibold text-gray-700">
            Profile Picture
          </Label>
          <div className="relative">
            <input
              type="file"
              name="profileImage"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-500
        file:mr-4 file:py-2.5 file:px-4
        file:rounded-r-2xl rounded-l-xl file:border-0
        file:text-sm file:font-bold
        file:bg-gray-100 file:text-gray-700
        hover:file:bg-green-50 hover:file:text-green-700
        cursor-pointer border-b border-gray-200 rounded-xl transition-all shadow-[0_1px_3px_0_rgba(0,0,0,0.1)]"
            />
          </div>
        </div>

        {/* Phone */}
        <TextField name="phone">
          <Label>Phone Number (Optional)</Label>
          <Input placeholder="+880 1XXX XXXXXX" type="tel" />
          <FieldError />
        </TextField>

        <div className="flex gap-3 mt-4">
          <Button
            className="flex-1 bg-green-600 text-white font-bold h-12 rounded-xl"
            type="submit"
          >
            <Check />
            Register Now
          </Button>
          <Button
            className="h-12 rounded-xl font-bold"
            type="reset"
            variant="flat"
            onClick={() => {
              setPreview(null);
              setUserImage("");
            }}
          >
            Reset
          </Button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-2">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="text-green-600 font-semibold underline"
          >
            Sign In
          </Link>
        </p>
      </Form>
    </div>
  );
}

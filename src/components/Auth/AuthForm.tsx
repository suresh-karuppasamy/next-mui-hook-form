"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import { LoginValidationSchema } from "@/shared/validations/login";
import { LoginDataTypes } from "@/shared/interfaces/LoginDataTypes";
import { useRouter } from "next/navigation";
import FormTextField from "@/shared/atoms/FormTextField";

interface AuthFormProps {
  type: "sign-in" | "sign-up";
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const router = useRouter();
  const [user, setUser] = useState<LoginDataTypes | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDataTypes>({
    mode: "onSubmit",
    defaultValues:
      type === "sign-up"
        ? { email: "", password: "", firstName: "", lastName: "" }
        : { email: "", password: "" },
    resolver: yupResolver(LoginValidationSchema(type)), // Ensure this function returns correct schema
  });

  const onSubmit = async (data: LoginDataTypes) => {
    setIsLoading(true);
    alert(type);
    try {
      if (type === "sign-up") {
        const userData = {
          firstName: data.firstName || "",
          lastName: data.lastName || "",
          email: data.email,
          password: data.password,
        };
        alert("User data: " + JSON.stringify(userData));
        localStorage.setItem('userData', JSON.stringify(userData));
        localStorage.setItem('isAuthenticated', "true");
        router.push("/");
        // const newUser = await signUp(userData);
        // setUser(newUser);
      } else {
        const userData = {
          email: data.email,
          password: data.password,
        };
        localStorage.setItem('userData', JSON.stringify(userData));
        localStorage.setItem('isAuthenticated', "true");
        router.push("/");
        // const response = await signIn({ email: data.email, password: data.password });
        // if (response) router.push("/");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  console.log("errors", errors);

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
          </h1>
          <p className="text-16 font-normal text-gray-600">
            {user
              ? "Link your account to get started"
              : "Please enter your details"}
          </p>
        </div>
      </header>

      {user ? (
        <div className="flex flex-col gap-4">
          {/* Add PlaidLink or other components here */}
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {type === "sign-up" && (
            <>
              <FormTextField name="firstName" register={register} errors={errors.firstName} />
              <FormTextField name="lastName" register={register} errors={errors.lastName} />
            </>
          )}
          <FormTextField name="email" register={register} errors={errors} />
          <FormTextField name="password" register={register} errors={errors} />

          <div className="flex flex-col gap-4">
            <Button type="submit" disabled={isLoading} className="form-btn">
              {isLoading
                ? "Loading..."
                : type === "sign-in"
                ? "Sign In"
                : "Sign Up"}
            </Button>
          </div>
        </form>
      )}

      <footer className="flex justify-center gap-1">
        <p className="text-14 font-normal text-gray-600">
          {type === "sign-in"
            ? "Don't have an account?"
            : "Already have an account?"}
        </p>
        <Link
          href={type === "sign-in" ? "/sign-up" : "/sign-in"}
          className="form-link"
        >
          {type === "sign-in" ? "Sign up" : "Sign in"}
        </Link>
      </footer>
    </section>
  );
};

export default AuthForm;

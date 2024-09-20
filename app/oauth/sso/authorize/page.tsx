// import Image from "next/image";
"use client";
import { AuthorizeForm } from "@/components/forms/authorize-form";
import Image from "@/components/ui/image";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <div className="grid gap-2 text-center">
        <div className="relative m-auto  aspect-[4/1] w-full ">
          <Image
            className="rounded-2xl"
            src="/images/full-login.png"
            alt="Profile Image"
            fill
            enableTransition={false}
            enableLoading={false}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-4">
        <AuthorizeForm />
      </div>
      <div className="mt-4 text-center text-sm">
        Belum punya akun ?{" "}
        <Link href="register" className="underline">
          Daftar
        </Link>
      </div>
    </>
  );
}

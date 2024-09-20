import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function OauthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full lg:grid lg:grid-cols-2">
      <div className="flex flex-col justify-center gap-y-6 mx-auto w-[350px] min-h-screen py-12">
        {children}
      </div>
      <div className="hidden bg-muted lg:block bg-gradient-to-r from-blue-400 to-blue-800"></div>
    </div>
  );
}
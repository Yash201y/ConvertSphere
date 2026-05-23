import {
  auth
} from "@clerk/nextjs/server";

import { redirect } from "next/navigation";

import UploadZone from "@/components/dashboard/UploadZone";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <main className="
      min-h-screen
      bg-black
      text-white
      p-10
    ">
      <h1 className="
        text-5xl font-bold mb-10
      ">
        Dashboard
      </h1>

      <UploadZone />
    </main>
  );
}
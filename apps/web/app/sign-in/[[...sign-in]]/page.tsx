import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="
      min-h-screen
      flex items-center justify-center
      bg-black
    ">
      <SignIn
        routing="path"
        path="/sign-in"
        appearance={{
          elements: {
            footerActionText: "text-zinc-400",
            card: "bg-zinc-950 border border-white/10 shadow-2xl",
          }
        }}
      />
    </div>
  );
}
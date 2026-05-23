import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="
      min-h-screen
      flex items-center justify-center
      bg-black
    ">
      <SignUp
        routing="path"
        path="/sign-up"
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
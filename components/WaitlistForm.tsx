"use client";

import { FormEvent, useState } from "react";
import { cn } from "@/lib/utils";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface WaitlistFormProps {
  className?: string;
}

export function WaitlistForm({ className }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!EMAIL_REGEX.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email.");
      return;
    }

    console.log("Waitlist email:", email);
    setStatus("success");
    setMessage("Thanks! You're on the list.");
    setEmail("");
  }

  return (
    <div className={cn("w-full", className)}>
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-3 rounded-full border border-black/10 bg-white/70 p-2 text-base shadow-sm backdrop-blur-sm sm:flex-row"
      >
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          className="w-full rounded-full border-0 bg-transparent px-5 py-3 text-sm sm:text-base focus:outline-none"
          required
        />
        <button
          type="submit"
          className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/90"
        >
          Join waitlist
        </button>
      </form>
      {status !== "idle" && (
        <p className={cn("mt-3 text-sm", status === "error" ? "text-rose-500" : "text-emerald-600")}>{message}</p>
      )}
    </div>
  );
}

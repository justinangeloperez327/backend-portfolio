import Link from "next/link";
import { ArrowLeft, FileQuestion } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="mb-6 flex size-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary/5">
        <FileQuestion className="size-7 text-primary" aria-hidden="true" />
      </div>
      <p className="font-mono text-xs tracking-[0.2em] text-primary">404 / NOT FOUND</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">This page doesn&apos;t exist.</h1>
      <p className="mt-4 max-w-md text-base leading-7 text-muted-foreground">
        The route you requested isn&apos;t part of this portfolio.
      </p>
      <Button asChild size="lg" className="mt-8 rounded-xl">
        <Link href="/"><ArrowLeft className="size-4" aria-hidden="true" /> Return home</Link>
      </Button>
    </main>
  );
}

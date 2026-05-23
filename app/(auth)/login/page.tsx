import Image from "next/image"

import { AuthCard } from "@/components/auth/auth-card"
import Link from "next/link"

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <header className="border-b">
        <div className="container flex h-20 items-center justify-center">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight flex items-center gap-2"
          >
            <Image src="/logo/logo.png" alt="Logo" width={48} height={48} className="rounded-full" priority />
            <span className="hidden sm:block">BuahKita</span>
          </Link>
        </div>
      </header>

      <div className="flex justify-center py-20">
        <AuthCard />
      </div>
    </main>
  )
}
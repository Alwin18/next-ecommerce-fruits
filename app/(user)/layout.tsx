import type { ReactNode } from "react"
import { Header } from "@/components/layout/header"

export default function UserLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {children}
      </main>
    </div>
  )
}
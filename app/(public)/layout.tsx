import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import type { ReactNode } from "react"


export default function PublicLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="px-[80px] py-[32px]">
        {children}
      </main>

      <Footer />
    </div>
  )
}
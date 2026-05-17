// components/layout/header/header.tsx

import { Search, Heart, ShoppingCart, Menu, User } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        {/* LEFT */}
        <div className="flex items-center gap-3">
          {/* MOBILE MENU */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* LOGO */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight flex items-center gap-2"
          >
            {/* rounded-md */}
            <Image src="/logo/logo.png" alt="Logo" width={48} height={48} className="rounded-full" priority />
            <span className="hidden sm:block">BuahKita</span>
          </Link>
        </div>

        {/* CENTER */}
        <div className="hidden flex-1 items-center justify-center px-8 md:flex">
          <div className="relative w-full max-w-2xl">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              placeholder="Search products..."
              className="pl-10"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2">
          {/* SEARCH MOBILE */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
          >
            <Search className="h-5 w-5" />
          </Button>

          {/* WISHLIST */}
          <Button
            variant="ghost"
            size="icon"
            asChild
          >
            <Link href="/wishlist">
              <Heart className="h-5 w-5" />
            </Link>
          </Button>

          {/* CART */}
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="relative"
          >
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />

              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-white">
                2
              </span>
            </Link>
          </Button>

          {/* ACCOUNT */}
          <Button
            variant="ghost"
            size="icon"
            asChild
          >
            <Link href="/profile">
              <User className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
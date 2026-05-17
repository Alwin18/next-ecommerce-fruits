// components/layout/mobile-nav/mobile-nav.tsx

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  House,
  Search,
  Heart,
  ShoppingCart,
  User,
} from "lucide-react"

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
    icon: House,
  },
  {
    label: "Search",
    href: "/search",
    icon: Search,
  },
  {
    label: "Wishlist",
    href: "/wishlist",
    icon: Heart,
  },
  {
    label: "Cart",
    href: "/cart",
    icon: ShoppingCart,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: User,
  },
]

export function MobileNav() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background md:hidden">
      <nav className="grid h-16 grid-cols-5">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon

          const isActive =
            pathname === item.href

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 text-xs transition-colors ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              <Icon className="h-5 w-5" />

              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
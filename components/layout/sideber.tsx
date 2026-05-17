// components/layout/sidebar/sidebar.tsx

"use client"

import Link from "next/link"
import {
  LayoutGrid,
  ShoppingBag,
  Heart,
  ShoppingCart,
  User,
  MapPin,
  Package,
  LogOut,
} from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

type SidebarProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const SHOP_LINKS = [
  {
    label: "Home",
    href: "/",
    icon: LayoutGrid,
  },
  {
    label: "Products",
    href: "/products",
    icon: ShoppingBag,
  },
]

const USER_LINKS = [
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
  {
    label: "Address",
    href: "/profile/address",
    icon: MapPin,
  },
  {
    label: "Orders",
    href: "/profile/orders",
    icon: Package,
  },
]

export function Sidebar({
  open,
  onOpenChange,
}: SidebarProps) {
  return (
    <Sheet
      open={open}
      onOpenChange={onOpenChange}
    >
      <SheetContent
        side="left"
        className="w-[300px] p-0"
      >
        <SheetHeader className="border-b px-6 py-5">
          <SheetTitle className="text-left text-2xl font-bold">
            EasyMart
          </SheetTitle>
        </SheetHeader>

        <div className="flex h-full flex-col overflow-y-auto">
          {/* SHOP */}
          <div className="px-4 py-6">
            <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Shop
            </p>

            <nav className="space-y-1">
              {SHOP_LINKS.map((item) => {
                const Icon = item.icon

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                    onClick={() => onOpenChange(false)}
                  >
                    <Icon className="h-4 w-4" />

                    {item.label}
                  </Link>
                )
              })}
            </nav>
          </div>

          {/* USER */}
          <div className="border-t px-4 py-6">
            <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Account
            </p>

            <nav className="space-y-1">
              {USER_LINKS.map((item) => {
                const Icon = item.icon

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                    onClick={() => onOpenChange(false)}
                  >
                    <Icon className="h-4 w-4" />

                    {item.label}
                  </Link>
                )
              })}

              {/* LOGOUT */}
              <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-red-500 transition-colors hover:bg-red-50">
                <LogOut className="h-4 w-4" />

                Logout
              </button>
            </nav>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
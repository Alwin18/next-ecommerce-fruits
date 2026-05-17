import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

const SHOP_LINKS = [
  {
    label: "Buah Organik",
    href: "/products",
  },
  {
    label: "Buah Lokal",
    href: "/products",
  },
  {
    label: "Buah Premium",
    href: "/products",
  },
]

const COMPANY_LINKS = [
  {
    label: "Tentang Kami",
    href: "/",
  },
  {
    label: "Kontak",
    href: "/",
  },
  {
    label: "FAQs",
    href: "/",
  },
]

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="px-[80px] py-[32px]">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* BRAND */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-2xl font-bold"
            >
              BuahKita
            </Link>

            <p className="text-sm text-muted-foreground">
              Fresh and organic fruits delivered to your doorstep.
            </p>

            <div className="flex items-center gap-2"> 
              <Button
                size="icon"
                variant="outline"
              >
                <Image src="/logo/facebook.png" alt="Facebook" width={20} height={20} />
              </Button>

              <Button
                size="icon"
                variant="outline"
              >
                <Image src="/logo/instagram.png" alt="Instagram" width={20} height={20} />
              </Button>

              <Button
                size="icon"
                variant="outline"
              >
                <Image src="/logo/youtube.png" alt="Youtube" width={20} height={20} />
              </Button>
            </div>
          </div>

          {/* SHOP */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide">
              Shop
            </h3>

            <ul className="space-y-3">
              {SHOP_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide">
              Company
            </h3>

            <ul className="space-y-3">
              {COMPANY_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wide">
              BuahKita
            </h3>

            <p className="mb-4 text-sm text-muted-foreground">
              Subscribe to get updates about new products
              and special offers.
            </p>

            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
              />

              <Button>
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 border-t pt-6">
          <p className="text-center text-sm text-muted-foreground">
            © 2026 BuahKita. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
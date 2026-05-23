import { Button } from "@/components/ui/button"
import Image from "next/image"

export function SocialLogin() {
  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>

        <div className="relative flex justify-center text-sm">
          <span className="bg-background px-3 text-muted-foreground">
            Or
          </span>
        </div>
      </div>

      <Button
        variant="secondary"
        className="h-12 w-full rounded-full"
      >
        <Image src="/logo/facebook.png" alt="Facebook" width={20} height={20} />
        Sign in with Facebook
      </Button>

      <Button
        variant="secondary"
        className="h-12 w-full rounded-full"
      >
        <Image src="/logo/google.png" alt="Google" width={20} height={20} />
        Sign in with Google
      </Button>
    </div>
  )
}
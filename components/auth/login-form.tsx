"use client"

import { useCallback, useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { ArrowRight, Mail, Phone } from "lucide-react"

import { zodResolver } from "@/lib/zodResolver" // ✅ import dari custom resolver
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter } from "next/navigation"

const loginSchema = z.object({
  value: z.string().min(1, "Field is required"),
})

type LoginFormValues = z.infer<typeof loginSchema>

export function LoginForm() {
  const [type, setType] = useState<"email" | "phone">("email")
  const router = useRouter()

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema), // ✅ tidak ada error lagi
    defaultValues: {
      value: "",
    },
  })

  const handleSubmit = useCallback(
    async (data: LoginFormValues) => {
      const payload =
        type === "email"
          ? { email: data.value }
          : { phone: data.value }

      console.log(payload)
      router.push("/")
    },
    [router, type]
  )

  return (
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      className="space-y-6"
    >
      <div className="rounded-3xl border bg-white p-5 shadow-sm">
        <Tabs
          defaultValue="email"
          onValueChange={(value) => {
            setType(value as "email" | "phone")
            form.reset()
          }}
        >
          <TabsList className="grid w-fit grid-cols-2 rounded-xl bg-muted">
            <TabsTrigger
              value="email"
              className="gap-2 rounded-lg px-6"
            >
              <Mail className="h-4 w-4" />
              Email
            </TabsTrigger>

            <TabsTrigger
              value="phone"
              className="gap-2 rounded-lg px-6"
            >
              <Phone className="h-4 w-4" />
              Phone
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="mt-6 space-y-3">
          <label className="text-sm font-medium">
            {type === "email" ? "Email" : "Phone"}
          </label>

          <Input
            {...form.register("value")}
            placeholder={
              type === "email"
                ? "Enter your email"
                : "Enter your phone"
            }
            className="h-12"
          />

          {form.formState.errors.value && (
            <p className="text-sm text-destructive">
              {form.formState.errors.value.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="mt-6 h-12 w-full rounded-full bg-fuchsia-600 hover:bg-fuchsia-700"
        >
          Continue
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </form>
  )
}
import { z } from "zod"
import type { FieldValues, FieldErrors, ResolverSuccess, ResolverError } from "react-hook-form"

export function zodResolver<T extends FieldValues>(schema: z.ZodType<T>) {
  return async (values: unknown): Promise<ResolverSuccess<T> | ResolverError<T>> => {
    const result = schema.safeParse(values)

    if (result.success) {
      return { 
        values: result.data, 
        errors: {} 
      } as ResolverSuccess<T>
    }

    const flatErrors = result.error.flatten().fieldErrors

    const errors = Object.fromEntries(
      Object.entries(flatErrors).map(([key, messages]) => [
        key,
        {
          type: "validation",
          message: (messages as string[])?.[0] ?? "Invalid value",
        },
      ])
    ) as FieldErrors<T>

    return { 
      values: {} as never, 
      errors 
    } as ResolverError<T>
  }
}
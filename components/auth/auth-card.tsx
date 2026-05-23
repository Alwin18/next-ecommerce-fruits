import { LoginForm } from "./login-form"
import { SocialLogin } from "./social-login"

export function AuthCard() {
  return (
    <div className="w-full max-w-xl">
      <h1 className="mb-8 text-4xl font-bold">
        Login
      </h1>

      <LoginForm />

      <div className="mt-8">
        <SocialLogin />
      </div>
    </div>
  )
}
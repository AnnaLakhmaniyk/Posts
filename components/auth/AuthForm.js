import { useState, useRef } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"
import s from "./AuthForm.module.css"

async function createUser(email, password) {
  const respons = await fetch("api/auth/singup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" },
  })

  const data = await respons.json()

  if (!respons.ok) {
    throw new Error(data.message || "Something went wrong!")
  }
  return data
}

export default function AuthForm() {
  const emailInputRef = useRef()
  const paswordInputRef = useRef()
  const [isLogin, setIsLogin] = useState(true)

  const router = useRouter()

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState)
  }

  async function submitHendler(event) {
    event.preventDefault()

    const enteredEmail = emailInputRef.current.value
    const enteredPassword = paswordInputRef.current.value

    if (isLogin) {
      const result = await signIn("credentials", {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      })

      if (!result.error) {
        router.replace("/")
      }

      console.log(result)
    } else {
      try {
        const respons = await createUser(enteredEmail, enteredPassword)
        console.log(respons)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <section className={s.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHendler}>
        <div className={s.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={s.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={paswordInputRef} />
        </div>
        <div className={s.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button type="button" className={s.toggle} onClick={switchAuthModeHandler}>
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  )
}

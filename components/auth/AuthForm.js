import { useState } from "react"
import s from "./AuthForm.module.css"

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true)

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState)
  }

  return (
    <section className={s.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form>
        <div className={s.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required />
        </div>
        <div className={s.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required />
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

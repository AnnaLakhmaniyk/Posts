import Link from "next/link"
import { useRouter } from "next/router"
import Image from "next/image"
import s from "../styles/Navbar.module.css"

import { signOut, useSession } from "next-auth/react"

export default function Navbar() {
  const { pathname } = useRouter()
  const { data: session, status } = useSession()
  const loading = status === "loading"

  console.log("session", session)

  const navigation = session
    ? [
        { id: 1, title: "Home", path: "/" },
        { id: 2, title: "Posts", path: "/posts" },
        { id: 3, title: "Contacts", path: "/contacts" },
        { id: 4, title: "Profole", path: "/profile" },
      ]
    : [{ id: 5, title: "Auth", path: "/auth" }]

  function logoutHendler() {
    signOut()
  }

  return (
    <nav className={s.nav}>
      <Image src="/logo.png" width={60} height={60} alt="webDev" />
      <div className={s.links}>
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path} className={pathname === path ? s.active : null}>
            {title}
          </Link>
        ))}
      </div>
      {session && <button onClick={logoutHendler}>LOGOUT</button>}
    </nav>
  )
}

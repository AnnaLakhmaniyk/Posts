import Link from "next/link"
import { useRouter } from "next/router"
import s from "../styles/Navbar.module.css"

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Posts", path: "/posts" },
  { id: 3, title: "Contacts", path: "/contacts" },
]

export default function Navbar() {
  const { pathname } = useRouter()
  return (
    <nav className={s.nav}>
      <div>webDev</div>
      <div className={s.links}>
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path} className={pathname === path && s.active}>
            {title}
          </Link>
        ))}
      </div>
    </nav>
  )
}

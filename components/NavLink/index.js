import Link from 'next/link'

export const NavLink = ({ href,children }) => {
  return <Link href={href}>{children}</Link>
}

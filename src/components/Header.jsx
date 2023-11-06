import Link from 'next/link';
import Navigation from '@/components/Navigation';

const navItems = [
  {label: 'Home', href: '/'},
  {label: 'Blog', href: '/blog'},
  {label: 'About', href: '/about'}
]

export default function Header () {
  return (
    <header>
        <Navigation navLinks={navItems}/>
    </header>
  )
}
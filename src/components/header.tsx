import '@/components/styles.css'
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { ShoppingCart, Search, Menu } from "lucide-react"
import CartButton from './cartButton'

const Header = () => {
    const navLinks = ['Male', 'Female', 'Kids', 'All Products']

    return (
        <header>
            <nav className="navbar">
                <Link 
                    href={'/'}
                    className="h-7"
                >
                    <Image 
                        src={'/images/piaic-e-com-logo.jpg'}
                        alt="logo"
                        width={140}
                        height={25}
                    />
                </Link>
                <ul className="nav-links">
                    {navLinks.map((link, index) => (
                        <Link 
                            key={`nav-link-${index}`} 
                            href={`/${link !== 'All Products' ? link.toLowerCase() : 'products'}`}
                        >
                            <li>{link}</li>
                        </Link>
                    ))}
                </ul>
                <div className="search-bar">
                    <Search className="search-icon" size={17} />
                    <Input 
                        className="pl-9 py-0.5" 
                        placeholder="What you looking for"
                    />
                </div>
                <CartButton />
                <Button className="lg:hidden bg-transparent hover:bg-transparent hover:transition-none">
                    <Menu className="menu-icon" color="#000000" />
                </Button>
            </nav>
        </header>
    )
}

export default Header
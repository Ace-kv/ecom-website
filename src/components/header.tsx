import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { ShoppingCart } from "lucide-react"

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
                    <Input 
                        className="py-0.5" 
                        placeholder="What you looking for"
                    />
                </div>
                <Button className="bg-gray-100 rounded-full w-[50px] h-[50px] p-0 relative hover:scale-110 hover:bg-gray-100 
                                   transition ease-in duration-200">
                    <ShoppingCart size={22} color="black"/>
                    <span className="cart-item-qty">0</span>
                </Button>
            </nav>
        </header>
    )
}

export default Header
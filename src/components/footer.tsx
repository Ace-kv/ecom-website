import '@/components/styles.css'
import Link from "next/link"
import Image from "next/image"
import { Twitter, Facebook, Linkedin } from "lucide-react"

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="logo-and-socials">
                    <Link 
                        href={'/'}
                        className="h-7"
                    >
                        <Image 
                            src={'/images/piaic-e-com-logo.jpg'}
                            alt="logo"
                            width={180}
                            height={25}
                        />
                    </Link>
                    <p>
                        Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.
                    </p>
                    <div className="icon-container">
                        <div>
                            <Twitter strokeWidth={1.2} />
                        </div>
                        <div>
                            <Facebook strokeWidth={1.2} />
                        </div>
                        <div>
                            <Linkedin strokeWidth={1.2} />
                        </div>
                    </div>
                </div>
                <div className="footer-links">
                    <h3>Company</h3>
                    <ul>
                        <li>About</li>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                        <li>How it Works</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h3>Support</h3>
                    <ul>
                        <li>Support Carrer</li>
                        <li>24h Service</li>
                        <li>Quick Chat</li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h3>Contact</h3>
                    <ul>
                        <li>Whatsapp</li>
                        <li>Support 24h</li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright © 2022 Dine Market</p>
                <p>
                    Design by. <span>Some Design Studio</span>
                </p>
                <p>
                    Code by. <span>Ace-kv on github</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer
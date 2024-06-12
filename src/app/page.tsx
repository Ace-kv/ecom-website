import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"

const Home = () => {
  const featuredList = ['featured1.jpg', 'featured2.jpg', 'featured3.jpg', 'featured4.jpg']

  return (
    <main>
      {/* <Button size={'icon'} className="rounded-3xl">Click Me!</Button> */}
      <header className="header">
        <div className="header-left-side">
          <div className="header-content">
            <span className="sale-span">Sale 70%</span>
            <h1 className="text-[3.5rem] leading-[55px] font-[700] tracking-wide">An Industrial Take on Streetwear</h1>
            <p className="w-[70%] text-stone-600">
              Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
            </p>
            <Link href={'/products'}>
              <Button className="flex gap-2 h-[61px] text-base leading-4 font-semibold py-4 px-6 rounded-md w-1/2 lg:w-auto">
                <ShoppingCart />
                Start Shopping
              </Button>
            </Link>
          </div>
          <div className="header-featured">
            {featuredList.map((image, index) => (
              <Image 
                key={`featured-${index + 1}`}
                src={`/images/${image}`}
                alt="featured brands"
                width={105}
                height={100}
              />
            ))}
          </div>
        </div>
        <div className="header-right-side">
          <div className="header-circle"></div>
          <Image 
            src={'/images/Image_by_halayalex_on_Freepik-removebg-preview.png'}
            alt=""
            className="hero-image"
            width={550}
            height={500}
            />
        </div>
      </header>
    </main>
  )
}

export default Home
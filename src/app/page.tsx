import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import ProductCard from "@/components/product-card"
import { Input } from "@/components/ui/input"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getAllProductData } from "./(categories)/products/page"
import SProduct from "./types/product"

const data: SProduct[] = await getAllProductData('Male')

const Home = () => {
  const featuredList = ['featured1.jpg', 'featured2.jpg', 'featured3.jpg', 'featured4.jpg']

  return (
    <>
      <Header />
      <main>
        {/* HEADER */}
        <header className="header">
          <div className="header-left-side">
            <div className="header-content">
              <span className="sale-span">Sale 70%</span>
              <h1 className="text-[3.5rem] leading-[55px] font-[700] tracking-wide">An Industrial Take on Streetwear</h1>
              <p className="w-[70%] text-stone-600">
                Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
              </p>
              <Link href={'/products'}>
                <button className="flex justify-center items-center gap-2 h-[61px] text-white bg-[#212121] text-base leading-4 
                                  font-semibold py-4 px-6 rounded-md w-1/2 lg:w-auto">
                                  
                  <ShoppingCart />
                  Start Shopping
                </button>
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

        {/* EVENT SECTION */}
        <section className="event-container">
          <div className="subtitle">
            <span className="text-xs text-[#0062f5] font-bold tracking-[0.1rem] leading-4">PROMOTIONS</span>
            <h2 className="text-[32px] font-bold tracking-wide leading-10">Our Promotions Events</h2>
          </div>
          <div className="event-banner">
            <div className="event-banner-left">
              <div className="event-card-1">
                <div className="card-1-content">
                  <h3 className="text-[1.75rem] leading-[35px] font-bold">GET UP TO
                    <span className="text-4xl font-bold leading-[45px]">{' '}60%</span>
                  </h3>
                  <p className="font-normal text-lg leading-[23px] tracking-[0.03em]">For the summer season</p>
                </div>
                <Image
                    src={'/images/pexels-gyetimova-14668121-removebg-preview.png'}
                    className="-mr-4"
                    alt=""
                    width={313}
                    height={218}
                  />
              </div>
              <div className="event-card-2">
                <h3 className=" text-white text-4xl font-extrabold leading-[45px] tracking-[0.03em] mb-4">GET 30% Off</h3>
                <p className="text-white text-sm font-normal leading-[18px] tracking-[0.03em]">USE PROMO CODE</p>
                <button className="bg-[#474747] text-white text-base font-bold leading-5 tracking-[0.25em] py-2 px-10 mt-2.5 rounded-lg">
                  DINE-WEEKEND-SALE
                </button>
              </div>
            </div>
            <div className="event-banner-right">
              <div className="event-banner-right-1">
                <div className="details">
                  <p className="text-[15px] font-normal leading-6 tracking-[0.03em]">Flex Sweatshirt</p>
                  <div className="price">
                    <span className="line-through">$100.00</span>
                    <span className="text-lg font-semibold leading-6 ml-2.5">$75.00</span>
                    <Image 
                      src={'/images/event-banner-right-1.png'}
                      className="pt-4"
                      alt=""
                      width={245}
                      height={340}
                    />
                  </div>
                </div>
              </div>
              <div className="event-banner-right-2">
                <div className="details">
                  <p className="text-[15px] font-normal leading-6 tracking-[0.03em]">Flex Push Button Bomber</p>
                  <div className="price">
                    <span className="line-through">$225.00</span>
                    <span className="text-lg font-semibold leading-6 ml-2.5">$190.00</span>
                    <Image 
                      src={'/images/event-banner-right-2.png'}
                      className="pt-4"
                      alt=""
                      width={241}
                      height={360}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS SECTION */}
        <section>
          <div className="subtitle">
            <span className="text-xs text-[#0062f5] font-bold tracking-[0.1rem] leading-4">PRODUCTS</span>
            <h2 className="text-[32px] font-bold tracking-wide leading-10">Check What We Have</h2>
          </div>
          <div className="product-showcase">
            <ProductCard product={data[0]} />
            <ProductCard product={data[1]} />
            <ProductCard product={data[4]} />
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="features-section">
          <div className="title" style={{background: 'linear-gradient(180deg, #fff 60%, #fbfcff 0%)'}}>
            <h1 className="text-[2.75rem] text-[#212121] font-bold leading-[55px] tracking-[0.03em] w-[45%]">
              Unique and Authentic Vintage Designer Jewellery
            </h1>
          </div>
          <div className="content">
            <div className="left">
              <div className="feature-background">
                Different from others
              </div>
              <div>
                <h3>Using Good Quality Materials</h3>
                <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
              </div>
              <div>
                <h3>100% Handmade Products</h3>
                <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
              </div>
              <div>
                <h3>Modern Fashion Design</h3>
                <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
              </div>
              <div>
                <h3>Discount for Bulk Orders</h3>
                <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="right">
              <Image
                src={'/images/male-3-crop.png'}
                className="mt-6"
                alt=""
                width={260}
                height={500}
              />
              <div>
                <p>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care.
                  The Natural color is the actual natural color of the fiber, undyed and 100% traceable.
                </p>
                <Link href={'/products'}>
                  <button className="text-sm text-white font-semibold w-1/2 bg-[#212121] px-4 py-3 rounded-sm">
                    See All Products
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* NEWSLETTER SECTION */}
        <section className="newsletter">
          <div className="newsletter-background">Newsletter</div>
          <h1>Subscribe Our Newsletter</h1>
          <p>Get the latest information and promo offers directly</p>
          <form>
            <Input className="border-[#212121]" type="email" placeholder="Input email address" />
            <button 
              className="text-sm text-white font-semibold w-1/2 bg-[#212121] py-2 rounded-sm" 
              type="submit"
            >
              Get Started
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home
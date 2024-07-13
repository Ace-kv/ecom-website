import "@/app/(categories)/styles.css"
import Image from "next/image"
import { client } from "../../../../../sanity/lib/client"
import SProduct from "@/app/types/product"
import { urlForImage } from "../../../../../sanity/lib/image"
import UnitCounter from "@/components/unit-counter"
import { ShoppingCart } from "lucide-react"
import { getAllProductData } from "../../male/page"

const getProductData = async (dynamicUrl: string) => {
    const res = await client.fetch(`*[_type=='product' && dynamicUrlSeg=='${dynamicUrl}'][0]`)
    return res
}

const ProductPage = async ({ params }: {
    params: {
        dynamicUrlSeg: string[]}
}) => {
    const { dynamicUrlSeg } = params
    const data: SProduct = await getProductData(dynamicUrlSeg[1])
    
    return (
        <div className="products">
            <div className="product-detail-container">
                <div className="product-images">
                    <div className="small-images-container">
                        {data.small_images.map((image) => (
                            <Image 
                                key={image._key}
                                src={urlForImage(image)}
                                alt=""
                                width={100}
                                height={100}
                            />
                        ))}
                    </div>
                    <div className="big-image-container">
                        <Image 
                            src={urlForImage(data.big_image)}
                            alt=""
                            width={700}
                            height={700}
                        />
                    </div>
                </div>
                <div className="product-details">
                    <div className="name-and-category">
                        <h3>{data.title}</h3>
                        <span>{data.tag}</span>
                    </div>
                    <div className="size">
                        <p>SELECT SIZE</p>
                        <ul>
                            <li>XS</li>
                            <li>S</li>
                            <li>M</li>
                            <li>L</li>
                            <li>XL</li>
                        </ul>
                    </div>
                    <div className="quantity-desc">
                        <h4>Quantity:</h4>
                        <UnitCounter />
                    </div>
                    <div className="add-to-cart">
                        <button className="flex justify-center items-center gap-2 text-white bg-[#212121] text-base
                                           leading-4 font-semibold py-3 px-4 rounded-sm">             
                            <ShoppingCart />
                            Add to Cart
                        </button>
                        <p className="price">{data.price}.00</p>
                    </div>
                </div>
            </div>
            <div className="product-desc-container">
                <div className="desc-title">
                    <div className="desc-background">Overview</div>
                    <h2>Product Information</h2>
                </div>
                <div className="desc-details">
                    <h4>PRODUCT DETAILS</h4>
                    <p>{data.description[0].children[0].text}</p>
                </div>
                <div className="desc-care">
                    <h4>PRODUCT CARE</h4>
                    <ul>
                        {data.productCare.map((instruction, index) => (
                            <li key={`product-care-${index + 1}`}>
                                {instruction}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div> 
    )
}

export default ProductPage
import '@/components/styles.css'
import Link from "next/link"
import Image from "next/image"
import { urlForImage } from '../../sanity/lib/image'
import SProduct from '@/app/types/product'

const ProductCard = ({product}: {
    product: SProduct
}) => {
    return (
        <div>
            <Link href={`/product/${product.dynamicUrlSeg}`}>
                <div className="product-card">
                    <Image
                        src={urlForImage(product.big_image)}
                        alt=""
                        width={380}
                        height={400}
                    />
                    <p className="product-name">{product.title}</p>
                    <p className="product-price">{product.price}</p>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard
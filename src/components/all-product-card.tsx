import '@/components/styles.css'
import Link from "next/link"
import Image from "next/image"
import { urlForImage } from '../../sanity/lib/image'
import SProduct from '@/app/types/product'

const AllProductCard = ({product}: {
    product: SProduct
}) => {
    return (
        <div className='mb-8'>
            <Link href={`/product/${product.dynamicUrlSeg}`}>
                <div className="all-product-card">
                    <Image
                        src={urlForImage(product.big_image)}
                        alt=""
                        width={280}
                        height={200}
                    />
                    <p className="all-product-name">{product.title}</p>
                    <p className="all-product-tag">{product.tag}</p>
                    <p className="all-product-price">{product.price}</p>
                </div>
            </Link>
        </div>
    )
}

export default AllProductCard
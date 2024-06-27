import '@/components/styles.css'
import Link from "next/link"
import Image from "next/image"

const ProductCard = ({product}: {
    product: {
        id: string,
        name: string,
        tag: string,
        gender: string,
        price: string,
        img_URL: string
    }
}) => {
    return (
        <div>
            <Link href={'/'}>
                <div className="product-card">
                    <Image
                        src={product.img_URL}
                        alt=""
                        width={380}
                        height={400}
                    />
                    <p className="product-name">{product.name}</p>
                    <p className="product-price">{product.price}</p>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard
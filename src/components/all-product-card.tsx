import '@/components/styles.css'
import Link from "next/link"
import Image from "next/image"

const AllProductCard = ({product}: {
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
        <div className='mb-8'>
            <Link href={'/'}>
                <div className="all-product-card">
                    <Image
                        src={product.img_URL}
                        alt=""
                        width={280}
                        height={200}
                    />
                    <p className="all-product-name">{product.name}</p>
                    <p className="all-product-tag">{product.tag}</p>
                    <p className="all-product-price">{product.price}</p>
                </div>
            </Link>
        </div>
    )
}

export default AllProductCard
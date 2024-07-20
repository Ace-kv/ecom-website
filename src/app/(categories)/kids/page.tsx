import "@/app/(categories)/styles.css"
import AllProductCard from "@/components/all-product-card"
import SProduct from "@/app/types/product"
import { getAllProductData } from "../products/page"

const KidsPage = async () => {
    const products: SProduct[] = await getAllProductData('Kids')
    console.log(products);

    return (
        <main>
            <div className="all-products-container">
                {products.map((item) => (
                    <AllProductCard 
                        product={item}  
                        key={item._id}
                    />
                ))}
            </div>
        </main>
    )
}

export default KidsPage
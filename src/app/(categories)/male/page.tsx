import "@/app/(categories)/styles.css"
import AllProductCard from "@/components/all-product-card"
import { getAllProductData } from "../products/page"
import SProduct from "@/app/types/product"

const MalePage = async () => {
    const products: SProduct[] = await getAllProductData('Male')
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

export default MalePage
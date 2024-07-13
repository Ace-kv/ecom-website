import "@/app/(categories)/styles.css"
import AllProductCard from "@/components/all-product-card"
import SProduct from "@/app/types/product"
import { getAllProductData } from "../male/page"

const AllProductsPage = async () => {
    const products: SProduct[] = await getAllProductData()
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

export default AllProductsPage
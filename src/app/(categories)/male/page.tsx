import "@/app/(categories)/styles.css"
import AllProductCard from "@/components/all-product-card"
import { client } from "../../../../sanity/lib/client"
import SProduct from "@/app/types/product"

export const getAllProductData = async (gender?: 'Male' | 'Female' | 'Kids') => {
    if (gender === 'Male') {
        const res = await client.fetch(`*[_type=='product' && category->category_title=='Male']`)
        return res
    } else if (gender === 'Female') {
        const res = await client.fetch(`*[_type=='product' && category->category_title=='Female']`)
        return res
    } else if (gender === 'Kids') {
        const res = await client.fetch(`*[_type=='product' && category->category_title=='Kids']`)
        return res
    } else {
        const res = await client.fetch(`*[_type=='product']`)
        return res
    }
    
}

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
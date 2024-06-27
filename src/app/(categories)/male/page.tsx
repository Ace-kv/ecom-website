import "@/app/(categories)/styles.css"
import AllProductCard from "@/components/all-product-card"
import data from "../../../../data/db.json"

const MalePage =() => {
    const products = data.products.male

    return (
        <main>
            <div className="all-products-container">
                {products.map((item) => (
                    <AllProductCard 
                        product={item}  
                        key={item.id}
                    />
                ))}
            </div>
        </main>
    )
}

export default MalePage
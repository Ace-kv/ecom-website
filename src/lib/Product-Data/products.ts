import { client } from "../../../sanity/lib/client"

const getAllProductData = async (gender?: 'Male' | 'Female' | 'Kids') => {
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

export default getAllProductData
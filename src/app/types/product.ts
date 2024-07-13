import { Image } from "sanity"

export default interface SProduct {
    _id: string,
    title: string,
    description: {
        _type: 'block',
        children: {
            _type: 'span',
            text: string
        }[]
    }[],
    productCare: string[]
    dynamicUrlSeg: string,
    tag: string,
    category: {
        category_title: string
    },
    price: string,
    big_image: Image,
    small_images: {
        _type: string,
        _key: string,
        asset: {
            _ref: string,
            _type: 'image'
        }
    }[]
}
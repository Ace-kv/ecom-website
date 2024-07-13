import {defineField, defineType} from 'sanity'

export const product = defineType({
    name: 'product', //  json key
    title: 'Product',  // UI title
    type: 'document',
    fields: [
        defineField({
            name: 'title',  // json key
            title: 'Product Title',  // UI title
            type: 'string'
        }),
        defineField({
            name: 'tag',  // json key
            title: 'Product Tag',  // UI title
            type: 'string'
        }),
        defineField({
            name: 'description',  // json key
            title: 'Product Description',  // UI title
            type: 'array',
            of: [{type: 'block'}],
        }),
        defineField({
            name: 'productCare',  // json key
            title: 'Product Care Instructions (Bulleted)',  // UI title
            type: 'array',
            of: [{
                type: 'string'
            }]
        }),
        defineField({
            name: 'category',  // json key
            title: 'Category',  // UI title
            type: 'reference',
            to: [{
                type: 'category'
            }]
        }),
        defineField({
            name: 'price',  // json key
            title: 'Product Price',  // UI title
            type: 'string'
        }),
        defineField({
            name: 'dynamicUrlSeg',  // json key
            title: 'Custom URL Segment',  // UI title
            type: 'string'
        }),
        defineField({
            name: 'big_image',  // json key
            title: 'Product Image (Main)',  // UI title
            type: 'image'
        }),
        defineField({
            name: 'small_images',  // json key
            title: 'Product Images (Different Angles)',  // UI title
            type: 'array',
            of: [{type: 'image'}]
        }),
    ]
})
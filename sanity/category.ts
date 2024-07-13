import {defineField, defineType} from 'sanity'

export const category = defineType({
    name: 'category', //  json key
    title: 'Category',  // UI title
    type: 'document',
    fields: [
        defineField({
            name: 'category_title',  // json key
            title: 'Category Name',  // UI title
            type: 'string'
        }),
    ]
})
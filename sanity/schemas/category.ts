import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'mainColor',
      title: 'Main color',
      type: 'color',
      options: {
        colorList: [
          '#FF6900',
          { hex: '#FCB900' },
          { r: 123, g: 220, b: 181 },
          { r: 0, g: 208, b: 132, a: 0.5 },
          { h: 203, s: 95, l: 77, a: 1 },
          { h: 202, s: 95, l: 46, a: 0.5 },
          { h: 345, s: 43, v: 97 },
          { h: 344, s: 91, v: 92, a: 0.5 },
        ]
      }
    }),
  ],
})

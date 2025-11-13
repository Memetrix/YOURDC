import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'partner',
  title: 'Партнер',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Название компании',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Логотип',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Опционально - логотип партнера',
    }),
    defineField({
      name: 'order',
      title: 'Порядок сортировки',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'По порядку',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}]
    },
  ],
})

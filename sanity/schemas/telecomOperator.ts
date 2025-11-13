import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'telecomOperator',
  title: 'Оператор связи',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Название',
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
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Порядок',
      type: 'number',
      description: 'Порядок отображения',
    }),
  ],
  orderings: [
    {
      title: 'Порядок',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}]
    },
  ],
})

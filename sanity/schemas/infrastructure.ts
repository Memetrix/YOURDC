import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'infrastructure',
  title: 'Инфраструктура',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Название раздела',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'Пункты',
      type: 'array',
      of: [{type: 'string'}],
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: 'order',
      title: 'Порядок сортировки',
      type: 'number',
      validation: Rule => Rule.required(),
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

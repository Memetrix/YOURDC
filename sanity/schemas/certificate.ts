import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'certificate',
  title: 'Сертификат',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Название сертификата',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'issuer',
      title: 'Выдавший орган',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Описание',
      type: 'text',
      validation: Rule => Rule.required(),
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

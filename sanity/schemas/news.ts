import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'news',
  title: 'Новость',
  type: 'document',
  fields: [
    defineField({
      name: 'date',
      title: 'Дата',
      type: 'date',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Краткое описание',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Категория',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
  ],
  orderings: [
    {
      title: 'Дата, новые первыми',
      name: 'dateDesc',
      by: [{field: 'date', direction: 'desc'}]
    },
  ],
})

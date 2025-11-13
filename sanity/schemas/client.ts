import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'client',
  title: 'Клиент (Кейс)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Название компании',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'industry',
      title: 'Отрасль',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'solution',
      title: 'Решение',
      type: 'string',
      validation: Rule => Rule.required(),
      description: 'Например: Colocation, Облачные решения, Гибридное решение',
    }),
    defineField({
      name: 'description',
      title: 'Описание кейса',
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

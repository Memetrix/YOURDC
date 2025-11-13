import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'advantage',
  title: 'Преимущество',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Название',
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
      name: 'icon',
      title: 'Иконка',
      type: 'string',
      description: 'Название иконки (certificate, power, network, etc.)',
    }),
  ],
})

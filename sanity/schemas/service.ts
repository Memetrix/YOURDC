import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'service',
  title: 'Услуга',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Название',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Краткое описание',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'fullDescription',
      title: 'Полное описание',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Возможности',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'pricingStarter',
      title: 'Базовый тариф',
      type: 'object',
      fields: [
        {name: 'name', type: 'string', title: 'Название'},
        {name: 'price', type: 'string', title: 'Цена'},
        {name: 'description', type: 'string', title: 'Описание'},
      ],
    }),
    defineField({
      name: 'pricingProfessional',
      title: 'Профессиональный тариф',
      type: 'object',
      fields: [
        {name: 'name', type: 'string', title: 'Название'},
        {name: 'price', type: 'string', title: 'Цена'},
        {name: 'description', type: 'string', title: 'Описание'},
      ],
    }),
    defineField({
      name: 'pricingEnterprise',
      title: 'Корпоративный тариф',
      type: 'object',
      fields: [
        {name: 'name', type: 'string', title: 'Название'},
        {name: 'price', type: 'string', title: 'Цена'},
        {name: 'description', type: 'string', title: 'Описание'},
      ],
    }),
  ],
})

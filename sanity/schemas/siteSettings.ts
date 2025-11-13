import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Настройки сайта',
  type: 'document',
  fields: [
    defineField({
      name: 'datacenterStats',
      title: 'Статистика дата-центра',
      type: 'object',
      fields: [
        {name: 'sla', type: 'string', title: 'SLA'},
        {name: 'totalPower', type: 'string', title: 'Общая мощность'},
        {name: 'racks', type: 'number', title: 'Стойки'},
        {name: 'support', type: 'string', title: 'Поддержка'},
        {name: 'machineRoomArea', type: 'string', title: 'Площадь машинного зала'},
        {name: 'tierLevel', type: 'string', title: 'Уровень Tier'},
        {name: 'powerPerRack', type: 'string', title: 'Мощность на стойку'},
        {name: 'fuelReserve', type: 'string', title: 'Запас топлива'},
        {name: 'autonomousOperation', type: 'string', title: 'Автономная работа'},
      ],
    }),
    defineField({
      name: 'contactInfo',
      title: 'Контактная информация',
      type: 'object',
      fields: [
        {name: 'phone', type: 'string', title: 'Телефон'},
        {name: 'phoneTollfree', type: 'string', title: 'Бесплатный номер'},
        {name: 'email', type: 'string', title: 'Email'},
        {name: 'supportEmail', type: 'string', title: 'Email поддержки'},
        {name: 'salesEmail', type: 'string', title: 'Email отдела продаж'},
        {
          name: 'address',
          type: 'object',
          title: 'Адрес',
          fields: [
            {name: 'city', type: 'string', title: 'Город'},
            {name: 'street', type: 'string', title: 'Улица'},
            {name: 'building', type: 'string', title: 'Здание'},
            {name: 'office', type: 'string', title: 'Офис'},
            {name: 'postalCode', type: 'string', title: 'Почтовый индекс'},
          ],
        },
        {
          name: 'workingHours',
          type: 'object',
          title: 'Часы работы',
          fields: [
            {name: 'office', type: 'string', title: 'Офис'},
            {name: 'support', type: 'string', title: 'Поддержка'},
          ],
        },
        {
          name: 'coordinates',
          type: 'object',
          title: 'Координаты',
          fields: [
            {name: 'lat', type: 'number', title: 'Широта'},
            {name: 'lon', type: 'number', title: 'Долгота'},
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Настройки сайта',
      }
    },
  },
})

import { defineField, defineType } from 'sanity'

export const challengeSchema = defineType({
  name: 'challenge',
  title: 'Challenge',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().max(100)
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'shortDesc',
      title: 'Short Description',
      type: 'text'
    }),
    defineField({
      name: 'openFrom',
      title: 'Open From',
      description: 'The date people can start completing the medal',
      type: 'datetime'
    }),
    defineField({
      name: 'available',
      title: 'Available to buy?',
      type: 'boolean',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }]
    }),
    defineField({
      name: 'requirements',
      title: 'Requirements',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'distance',
      title: 'Distance',
      type: 'number',
      description: 'The distance required to complete this challenge (in km)'
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'object',
      description: 'The amount of time to complete the challenge (from checkout).',
      fields: [
        defineField({
          name: 'quantity',
          title: 'Quantity',
          type: 'string',
        }),
        defineField({
          name: 'unit',
          title: 'Unit',
          type: 'string',
          options: {
            list: [
              { title: 'Days', value: 'days' },
              { title: 'Months', value: 'months' },
              { title: 'Years', value: 'years' },
            ]
          }
        }),
      ]
    }),
    defineField({
      name: 'entryFee',
      title: 'Entry Fee',
      type: 'number',
      description: 'The price users pay to enter this challenge'
    }),
    defineField({
      name: 'totalStock',
      title: 'Total Stock',
      type: 'number',
      description: 'Total available stock for this challenge'
    })
  ]
})

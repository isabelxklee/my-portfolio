/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'press',
  title: 'Press',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tag'}}],
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
    },
    {
      name: 'source',
      title: 'Source',
      type: 'string',
    },
  ],
  orderings: [
    {
      title: 'Date, Latest',
      name: 'latestDate',
      by: [{field: 'date', direction: 'desc'}],
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}

/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'link',
  title: 'Link',
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
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}

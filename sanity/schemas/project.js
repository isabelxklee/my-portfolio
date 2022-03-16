/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
    {
      name: 'code',
      title: 'Code',
      type: 'url',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
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
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
}

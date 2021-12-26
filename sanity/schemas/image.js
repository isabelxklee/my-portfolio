export default {
  name: 'imageAsset',
  title: 'Image',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
        {
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
}

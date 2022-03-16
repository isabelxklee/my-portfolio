/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}

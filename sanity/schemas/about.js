/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'intro',
      title: 'Intro Copy',
      type: 'string',
    },
    {
      name: 'about',
      title: 'About Copy',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}

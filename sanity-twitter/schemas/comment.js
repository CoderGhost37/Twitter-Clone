export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'comment',
      title: 'Comment',
      type: 'string',
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    {
      name: 'profileImg',
      title: 'Profile Image',
      type: 'image',
    },
    {
      name: 'tweet',
      title: 'Tweet',
      description: 'The Tweet that this comment is associated with:',
      type: 'reference',
      to: {
        type: 'tweet',
      },
    }
  ],
}

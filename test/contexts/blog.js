exports.context = {
  blog: {
    title: "Scrumptious lessons",
  },
  posts: [
    {
      title: 'A happy time',
      content: '<p>In my childhood I would laugh and play.</p>',
      author: 'Hornsby Sumpin',
      tags: ['happy', 'fun', 'joy']
    },
    {
      title: 'Better days',
      content: '<p>Pals are a necessity in this lonely world.</p>',
      author: 'Baffle McCough',
      tags: ['mirth', 'briny', 'pith'],
      comments: [
        {
          content: 'I stand in complete agreement.',
          author: 'Bitters Compote'
        },
        {
          content: 'What a baleful load of beeswax.',
          author: 'Gluglug Baldag'
        }
      ]
    },
    {
      title: 'True madness',
      content: '<p>Let us begin again, as we were when we were babies.</p><p>Further and further from the truth we could never travel.</p>',
      tags: ['malaise'],
      comments: [
        {
          content: 'I am comforted by our debate.',
          author: 'Mildrand Brumpup'
        }
      ]
    }
  ]
};

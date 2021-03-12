const { Comment } = require('../models');

const commentdata = [
    {
      comment_text: 'Nunc rhoncus dui vel sem.',
      user_id: 6,
      post_id: 1
    },
    {
      comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
      user_id: 6,
      post_id: 8
    },
    {
      comment_text: 'Aliquam erat volutpat. In congue.',
      user_id: 3,
      post_id: 10
    },
    {
      comment_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
      user_id: 3,
      post_id: 18
    },
    {
        comment_text: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
        user_id: 9,
        post_id: 6
      },
      {
        comment_text:
          'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
        user_id: 7,
        post_id: 9
      }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
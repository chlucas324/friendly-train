const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Nunc rhoncus dui vel sem.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: '',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text: 'In hac habitasse platea dictumst.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Vivamus vestibulum sagittis sapien.',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis estNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'Sed vel enim sit amet nunc viverra dapibus.',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    user_id: 6,
    post_id: 12
  },
  {
    comment_text: 'Donec ut mauris eget massa tempor convallis.',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    user_id: 3,
    post_id: 14
  },
  {
    comment_text: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus',
    user_id: 5,
    post_id: 4
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
const { Post } = require('../models');

const postdata = [
  
  {
    title: 'voluptatem',
    post_text: 'ed ut perspiciatis unde omnis iste natus error sit voluptatem.',
    user_id: 1
  },
  {
    title: 'et accusamus',
    post_text: 'At vero eos et accusamus et iusto odio dignissimos.',
    user_id: 4
  },
  {
    title: 'Quis autem',
    post_text: 'Quis autem vel eum iure reprehenderit qui.',
    user_id: 4
  },
  {
    title: 'reprehenderit',
    post_text: ' Sed tempus massa quis augue bibendum, vitae consectetur tellus imperdiet.',
    user_id: 1
  },
  {
    title: 'et vestibulum',
    post_text: 'Praesent volutpat a neque et vestibulum.',
    user_id: 1
  },
  {
    title: 'Itaque earum',
    post_text: 'Itaque earum rerum hic tenetur a sapiente delectus.',
    user_id: 6
  },
  {
    title: 'Curabitur at.',
    post_text: 'Ut quam erat, auctor sit amet bibendum ut, posuere ut nequeVestibulum bibendum libero at mi euismod, et tincidunt arcu maximus..',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_text: 'Donec purus arcu, ultricies dapibus ante et.',
    user_id: 3
  },
  {
    title: 'Vestibulum ante',
    post_text: 'Cras tincidunt, mauris quis commodo.',
    user_id: 3
  },
  {
    title: 'Cras mi pede',
    post_text: 'Etiam accumsan tincidunt consectetur.',
    user_id: 3
  },
  {
    title: 'Vestibulum ante',
    post_text: 'Etiam accumsan tincidunt consectetur.',
    user_id: 7
  },
  {
    title: 'Tincidunt eget, tempus vel, pede.',
    post_text: 'Cras tincidunt, mauris augue sagittis magna ex sed elit.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
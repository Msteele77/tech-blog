const { Post } = require('../models');

const postdata =  [
    {
        title: 'Test Title',
        post_text: 'Test post text',
        user_id: 1
    },
    {
        title: 'Test Title 2',
        post_text: 'Test post text 3',
        user_id: 2
    },
    {
        title: 'Test Title 3',
        post_text: 'Test post text 4',
        user_id: 1
    }
];


const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
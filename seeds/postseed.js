const { Post } = require('../models');

const postData = [
    {
        title: 'Tech Blog goes viral!',
        content: 'We recently launched our tech blog and it has gone viral!',
        user_id: 1
    },
    {
        title: 'Did you hear? Tech Blog is hiring!',
        content: 'We want to hear from you!',
        user_id: 2
    },
    {
        title: 'Our artical was featured in a magazine!',
        content: 'Visit WIRED to read it!',
        user_id: 3
    },
    {
        title: 'Someone just donated $1 million to our blog!',
        content: 'Go thank them!',
        user_id: 4
    },
];

const postSeeds = () => Post.bulkCreate(postData);
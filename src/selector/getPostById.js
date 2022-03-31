import posts from '../data/posts';

export const getPostById = (id) => {
    return posts.find(item => item.id === parseInt(id));
}
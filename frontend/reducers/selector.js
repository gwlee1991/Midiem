export const selectAllTopics = ({topics}) => {
  return Object.keys(topics).map(id => topics[id]);
};

export const selectAllPosts = ({posts}) => {
  return Object.keys(posts).map(id => posts[id]);
};

export const selectPost = ({posts}, id) => {
  return posts[id] || {};
};

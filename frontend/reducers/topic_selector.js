export const selectAllTopics = ({topics}) => {
  return Object.keys(topics).map(id => topics[id]);
};

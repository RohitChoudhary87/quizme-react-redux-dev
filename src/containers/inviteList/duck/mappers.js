export const inviteListMapper = ({ results }) => {
  return results.map(({ name }) => {
    return name.title + ' ' + name.first + ' ' + name.last;
  });
};

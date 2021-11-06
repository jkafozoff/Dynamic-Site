let postId = 1;

export const addPost = (title, img, desc) => {
  return {
    type: "ADD_POST",
    title,
    img,
    desc,
    id: postId++,
  };
};

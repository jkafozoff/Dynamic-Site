export const modifyIntro = (img, desc) => {
  return {
    type: "MODIFY_INTRO",
    img,
    desc,
  };
};

export const importImage = async (name) => {
  return import(`../assets/${name}`)
    .then((module) => {
      return module.default;
    })
    .catch((err) => console.error('Error while trying to import image' + err));
};

export const loadImages = async (images) => {
  return await Promise.all(images)
    .then((values) => {
      values.forEach(async (src) => {
        const img = await new Promise((resolve) => {
          const image = new Image();
          image.onload = () => {
            resolve(image);
          };
          image.src = src;
        });
      });
      return values;
    })
    .catch((err) => console.error('Error while loading images' + err));
};

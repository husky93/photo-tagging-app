const imagesLoader = () => {
  const importImage = async (name) => {
    return import(`../assets/${name}`)
      .then((module) => {
        return module.default;
      })
      .catch((err) =>
        console.error('Error while trying to import image' + err)
      );
  };

  const loadImages = async (images) => {
    const imgArray = await Promise.all(images)
      .then((values) => {
        const array = [];
        values.forEach(async (src) => {
          const promise = new Promise((resolve) => {
            const image = new Image();
            image.onload = () => {
              resolve(image);
            };
            image.src = src;
          });
          array.push(promise);
        });
        return array;
      })
      .catch((err) => console.error('Error while loading images' + err));

    const loadedArray = await Promise.all(imgArray).then((values) => {
      return values.map((img) => img.src);
    });
    return loadedArray;
  };

  return { importImage, loadImages };
};

export default imagesLoader();

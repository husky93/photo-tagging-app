import { useState, useEffect } from 'react';
import imagesLoader from '../modules/imagesLoader';

export const useImageLoader = (imageArray) => {
  const [images, setImages] = useState(null);
  useEffect(() => {
    if (images === null) {
      imagesLoader
        .loadImages(imageArray.map((img) => imagesLoader.importImage(img)))
        .then((value) => setImages(value));
    }
  });

  return images;
};

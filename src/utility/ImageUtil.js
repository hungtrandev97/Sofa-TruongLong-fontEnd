const urlToBase64 = (url, ext) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = url;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.height = img.height;
      canvas.width = img.width;
      ctx.drawImage(img, 0, 0);
      resolve(canvas.toDataURL(`image/${ext}`));
    };
    img.onerror = () => {
      reject(new Error(`Cannot fetch image ${url}.`));
    };
    img.src = url;
  });
};

// eslint-disable-next-line import/prefer-default-export
export { urlToBase64 };

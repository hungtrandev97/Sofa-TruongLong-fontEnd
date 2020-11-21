import { storage } from "../../firebase/index";

function UploadImage(image) {
  const now = Date.now();
  storage.ref(`images/product_${image.name}-${now}`).put(image);
  const UrlImage = storage
    .ref("images")
    .child(`product_${image.name}`)
    .getDownloadURL();
  return UrlImage;
}
export default UploadImage;

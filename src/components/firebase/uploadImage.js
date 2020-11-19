import { storage } from "../../firebase/index";

function UploadImage(image) {
  storage.ref(`images/product_${image.name}`).put(image);
  const UrlImage = storage
    .ref("images")
    .child(`product_${image.name}`)
    .getDownloadURL();
  return UrlImage;
}
export default UploadImage;

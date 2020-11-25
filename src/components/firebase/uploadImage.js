import firebase from "../../firebase/index";

async function UploadImage(file) {
  const now = Date.now();
  const image = `product_${now}${file.name}`;
  const bucketName = "images";
  await firebase.storage().ref(`${bucketName}/${image}`).put(file);
  const storageRefImage = await firebase.storage().ref();
  const spaceRef = await storageRefImage
    .child(`${bucketName}/${image}`)
    .getDownloadURL();
  return spaceRef;
}
export default UploadImage;

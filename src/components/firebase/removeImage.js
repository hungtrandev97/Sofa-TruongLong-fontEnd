import firebase from "../../firebase/index";

async function RemoveImage(urlFile) {
  console.log(urlFile);
  const storageRefImage = await firebase.storage().ref();
  const desertRef = await storageRefImage.child(urlFile);
  console.log(desertRef);
  if (desertRef) {
    return true;
  }
  return false;
}
export default RemoveImage;

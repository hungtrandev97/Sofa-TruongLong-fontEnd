import firebase from "../../firebase/index";

async function RemoveImage(urlFile) {
  const storageRefImage = await firebase.storage().ref();
  const desertRef = storageRefImage.child(`images/${urlFile}`);
  const desertRefs = await desertRef.delete();
  return desertRefs;
}
export default RemoveImage;

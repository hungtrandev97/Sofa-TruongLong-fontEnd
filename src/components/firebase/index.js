import React, { useState } from "react";
// import { storage } from "../../firebase/index";
import UploadImagevIEW from "./uploadImage";

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [urlImage, setUrlImage] = useState("");
  // const [Progress, setProgress] = useState(0);

  const handleChage = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      console.log(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    const urlImageFirebase = await UploadImagevIEW(image);
    setUrlImage(urlImageFirebase);
  };

  return (
    <div>
      {/* <progress value={Progress} max="100" /> */}
      <br />
      <input type="file" onChange={handleChage} />
      <button type="button" onClick={handleUpload}>
        upload
      </button>
      <br />
      <img
        src={urlImage || "http://via.placeholder.com/300x400"}
        alt=""
        width="100"
      />
    </div>
  );
};

export default UploadImage;

import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useDropzone } from "react-dropzone";

//INTERNAL IMPORT
import UploadICON from "./SVG/UploadICON";

const UploadLogo = ({
  imageURL,
  setImageURL,
  setLoader,
  PINATA_AIP_KEY,
  PINATA_SECRECT_KEY,
}) => {
  const notifySuccess = (msg) => toast.success(msg, { duration: 2000 });
  const notifyError = (msg) => toast.error(msg, { duration: 2000 });

  const uploadToIPFS = async (file) => {
    if (file) {
      try {
        setLoader(true);
        const formData = new FormData();
        formData.append("file", file);

        const response = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          maxBodyLength: "Infinity",
          headers: {
            pinata_api_key: PINATA_AIP_KEY,
            pinata_secret_api_key: PINATA_SECRECT_KEY,
            "Content-Type": "multipart/form-data",
          },
        });

        const url = `https://ipfs.io/ipfs/${response.data.IpfsHash}`;

        setImageURL(url);
        setLoader(false);
        notifySuccess("Logo uploaded successfully");
      } catch (error) {
        setLoader(false);
        notifyError("Check your PinataKeys");
        console.log(error);
      }
    }
  };

  const onDrop = useCallback(async (acceptedFile) => {
    await uploadToIPFS(acceptedFile[0]);
  });

  const { getInputProps, getRootProps } = useDropzone({
    onDrop,
    maxSize: 500000000000,
  });
  return (
    <>
      {imageURL ? (
        <div>
          <img
            src={imageURL}
            style={{ width: "200px", height: "auto" }}
            alt=""
          />
        </div>
      ) : (
        <div {...getRootProps()}>
          <label htmlFor="file" className="custum-file-upload">
            <div className="icon">
              <UploadICON />
            </div>
            <div className="text">
              <span>Click to upload Logo</span>
            </div>
            <input type="file" id="file" {...getInputProps()} />
          </label>
        </div>
      )}
    </>
  );
};

export default UploadLogo;

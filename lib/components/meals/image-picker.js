"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImg, setPickImg] = useState();
  const imageInput = useRef();
  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImgChange(evt) {
    const file = evt.target.files[0];
    if (!file) {
      setPickImg(null);
      return;
    }
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickImg(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImg && <p>Not Img has been picked yet!</p>}
          {pickedImg && <Image src={pickedImg} alt="Selected Img" fill />}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImgChange}
          required
        />
        <button
          onClick={handlePickClick}
          className={classes.button}
          type="button"
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}

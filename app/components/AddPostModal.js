"use client";

import { useRecoilState } from "recoil";
import modalState from "../atom/modalAtom";
import Modal from "react-modal";
import { CameraIcon } from "@heroicons/react/outline";
import { useRef } from "react";
import { useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../firebase";
import { ref, uploadString, getDownloadURL } from "firebase/storage";

export default function AddPostModal({ username, profilePic }) {
  const [open, setOpen] = useRecoilState(modalState);
  const filePickerRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  function addImageToPost(e) {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  }

  const captionRef = useRef(null);
  const [loading, setLoading] = useState(false);
  async function uploadPost() {
    if (loading) return;
    setLoading(true);
    const docRef = await addDoc(collection(db, "posts"), {
      caption: captionRef.current.value,
      username: username,
      profilePic: profilePic,
      timestamp: serverTimestamp(),
    });
    const imageRef = ref(storage, `posts/${docRef.id}/image`);
    await uploadString(imageRef, selectedFile, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadURL,
        });
      }
    );
    setOpen(false);
  }

  return (
    <div>
      {open && (
        <Modal
          isOpen={open}
          onRequestClose={() => {
            setOpen(false);
            setSelectedFile(null);
          }}
          className="max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md "
        >
          <div className="flex flex-col justify-center items-center  p-2 h-[100%]">
            {selectedFile ? (
              <img
                src={selectedFile}
                alt="Selected Image"
                className="w-full max-h-[250px] object-cover cursor-pointer"
                onClick={() => setSelectedFile(null)}
              />
            ) : (
              <CameraIcon
                className="h-14 text-blue-500 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out rounded-full border-2 p-2 bg-red-200"
                onClick={() => filePickerRef.current.click()}
              />
            )}

            <input
              type="file"
              hidden
              ref={filePickerRef}
              onChange={addImageToPost}
            />
            <input
              type="text"
              maxLength="150"
              placeholder="What's on your mind?"
              className="border-none text-center w-full focus:ring-0 focus:outline-none"
              ref={captionRef}
            />
            <button
              className="w-full bg-blue-500 text-white px-4 py-2 shadow-md hover:brightness-125 rounded-md mt-4 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100"
              disabled={!selectedFile || loading}
              onClick={uploadPost}
            >
              Upload Post
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

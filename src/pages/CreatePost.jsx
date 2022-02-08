import React from "react";
import { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../service/firebase-config";
import { useNavigate } from "react-router-dom";

function CreatePost({ isLogin }) {
  const [postTitle, setPostTitle] = useState("");
  const [postText, setPostText] = useState("");
  const navigate = useNavigate();

  //For mild protected routes
  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, []);

  //Creating the reference to database collection needed
  const postCollectionRef = collection(db, "Posts");

  const createPost = async () => {
    // await addDoc(ref, collection)
    await addDoc(postCollectionRef, {
      title: postTitle,
      post: postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };
  return (
    <div className="bg-slate-50 height flex items-center justify-center">
      <div className="bg-zinc-500 rounded px-4 py-10 w-1/2">
        <h1 className="text-zinc-100 text-center font-semibold text-3xl">
          Create A Post
        </h1>
        <div className="text-center">
          <div className="grid w-1/2 mx-auto my-4">
            <label className="text-zinc-100 text-left mb-2 text-lg font-semibold">
              Title:
            </label>
            <input
              type="text"
              placeholder="Title..."
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
              className="p-2 rounded"
            />
          </div>
          <div className="grid w-1/2 mx-auto my-4">
            <label className="text-zinc-100 text-left mb-2 text-lg font-semibold">
              Post:
            </label>
            <textarea
              placeholder="Create Post..."
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              className="h-40 p-2 rounded"
            />
          </div>
          <button
            onClick={createPost}
            className="text-zinc-100 shadow-lg px-3 py-2 border-2 border-slate-200 rounded mt-5"
          >
            Submit Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;

import React from "react";
import { useState, useEffect } from "react";
import { db } from "../service/firebase-config";
import { collection, doc, getDocs } from "firebase/firestore";

function Home() {
  //To add post from the firestore database
  const [postLists, setPostLists] = useState([]);

  //Creating the reference to database collection needed
  const postCollectionRef = collection(db, "Posts");

  //To populate the database
  useEffect(() => {
    const getPost = async () => {
      const data = await getDocs(postCollectionRef);
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPost();
  }, []);

  return (
    <div className="px-10 sm:px-20 pb-20">
      <h1 className="text-center my-8 font-bold text-4xl">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
        {postLists.map((item, i) => (
          <div className="p-4 px-8 bg-red-100 my-4 rounded heightCard">
            <p className="text-2xl font-semibold my-4">{item.title}</p>
            <p>{item.post}</p>
            <small className="text-base my-8">@{item.author.name}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

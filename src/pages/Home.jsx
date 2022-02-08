import React from "react";
import { useState, useEffect } from "react";
import { auth, db } from "../service/firebase-config";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";

function Home({ isLogin }) {
  //To add post from the firestore database
  const [postLists, setPostLists] = useState([]);
  const [loading, setLoading] = useState(true)

  //Creating the reference to database collection needed
  const postCollectionRef = collection(db, "Posts");

  //To populate the database
  useEffect(() => {
    const getPost = async () => {
      const data = await getDocs(postCollectionRef);
      // console.log(data);
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false)
    };
    getPost();
  }, []);

  const deletePost = async (val) => {
    const postDoc = doc(db, "Posts", val);
    await deleteDoc(postDoc);
    alert("Me")
  };

  return (
    <div className="px-10 sm:px-20 pb-20">
      <h1 className="text-center my-8 font-bold text-4xl">Posts</h1>
      {loading ? (
        <div className="text-center text-2xl m-4">Loading</div>
      ) : (
        <div>
          {postLists.length === 0 ? (
            <p className="text-center text-2xl m-4">
              Oops... Login to add post
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {postLists.map((item, i) => (
                <div className="p-4 px-8 bg-zinc-600 text-slate-100 my-4 rounded heightCard" key={i}>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-semibold my-4">{item.title}</p>
                    {isLogin && item.author.id === auth.currentUser.uid && (
                      <p
                        className="text-2xl font-bold cursor-pointer"
                        onClick={() => deletePost(item.id)}
                      >
                        {" "}
                        &#128465;{" "}
                      </p>
                    )}
                  </div>
                  <p>{item.post}</p>
                  <small className="text-base my-8">@{item.author.name}</small>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;

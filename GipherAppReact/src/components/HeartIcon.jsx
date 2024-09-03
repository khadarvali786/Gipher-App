import { useState } from "react";
import axios from "axios"; // node

export default function HeartIcon({ gif, onLike, isLiked }) {



  const handleLike = async() => {
  // let id=gif.hash;
  //   const response = await axios.put(`http://localhost:8080/update/${id}`,{Liked:isLiked});
  //   console.log(response);
    onLike(gif);

  };
  
  
  {
    /* //{...(isLike && { color: 'red' })} */
  }
  return (
    <span onClick={handleLike}>
      <i
        className={`bi ${isLiked ? `bi-heart-fill` : `bi-heart`}`}
        style={{ color: isLiked ? "red" : "" }}
      ></i>
    </span>
  );
}

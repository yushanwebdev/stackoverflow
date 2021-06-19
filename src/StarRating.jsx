import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
// import { rateAlbum } from "../../store/actions/userAlbumRatingAction";

function StarRating({ width }) {
  const [rating, setRating] = useState(0);

  const ratePicture = (rating) => {
    setRating(++rating);
    console.log("click me");
    // rateAlbum({
    //   rating: rating,
    // }); // Dispatch the action to the Database
  };

  console.log(rating);

  return (
    <div className="flex h-full" style={{ width: width, display: "flex" }}>
      {[...Array(5)].map((star, i) => (
        <div key={i} className="flex items-center w-full">
          <FaStar
            className="md:m-1 w-full h-full delay-200 cursor-pointer"
            color={i < rating ? "#ffc107" : "#e4e5e9"}
            onClick={() => ratePicture(i)}
          />
        </div>
      ))}
    </div>
  );
}

export default StarRating;

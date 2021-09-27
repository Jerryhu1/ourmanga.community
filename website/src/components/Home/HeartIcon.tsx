import React, { useState } from "react";
import { useStore } from "../../global";
import { Manga } from "../../types";

interface Props {
  manga: Manga;
  index: number;
}

export const HeartIcon: React.FC<Props> = ({ ...props }) => {
  const { liked } = props.manga;
  const { addLikedManga, removeLikedManga, likedMangas, likeManga } = useStore(
    (state) => state
  );

  const isLiked = (type: string) => {
    if (props.manga.liked) {
      return "red";
    }
    return type === "stroke" ? "currentColor" : "none";
  };

  // const likeManga = () => {
  //   if (!liked) {
  //     addLikedManga(props.manga);
  //   } else {
  //     removeLikedManga(props.manga);
  //   }
  //   // qprops.manga.liked = !props.manga.liked;
  // };

  return (
    <div onClick={() => likeManga(props.index)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 cursor-pointer"
        fill={isLiked("fill")}
        viewBox="0 0 24 24"
        stroke={isLiked("stroke")}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </div>
  );
};

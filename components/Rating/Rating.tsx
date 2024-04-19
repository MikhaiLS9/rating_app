"use client";
import { useEffect, useState } from "react";
import { RatingProps } from "./RatingProps";
import Star from "@/public/rating.svg";
import styles from "./Rating.module.css";
import cn from "classnames";

function Rating({
  isEditable = false,
  rating,
  setRating,
  className,
}: RatingProps) {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating]);

  const handleEventRating = (i: number) => {
    if (!isEditable) return;
    constructRating(i);
  };
  const handlePutRating = (index: number) => {
    if (!isEditable || !setRating) return;
    setRating(index);
  };

  const constructRating = (currentRating: number) => {
    const updateRatingArray = ratingArray.map((e: JSX.Element, index) => {
      return (
        <span
          onMouseEnter={() => handleEventRating(index + 1)}
          onMouseLeave={() => handleEventRating(rating)}
          onClick={() => handlePutRating(index + 1)}
          key={`star_${index}`}
          className={cn(styles.span,className, {
            [styles.fill]: index < currentRating,
            [styles.editable]: isEditable,
          })}
        >
          <Star />
        </span>
      );
    });
    setRatingArray(updateRatingArray);
  };

  return (
    <div>
      {ratingArray.map((e, i) => (
        <span key={i} >{e}</span>
      ))}
    </div>
  );
}

export default Rating;

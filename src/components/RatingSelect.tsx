import { useState } from "react";

function RatingSelect({
  numOfStars = 5,
  onSetRating,
}: {
  numOfStars?: number;
  onSetRating: (rating: number) => void;
}) {
  const [rating, setRating] = useState(0);

  function handleClick(rating: number) {
    setRating((prevRating) => (prevRating === rating ? 0 : rating));
    onSetRating(rating);
  }

  return (
    <ul className="flex gap-2 sm:gap-5 items-center justify-center flex-wrap w-full">
      {Array.from({ length: numOfStars }, (_, i) => (
        <li className="">
          <input
            type="radio"
            value={i + 1}
            id={`num${i + 1}`}
            className="opacity-0 absolute peer"
            checked={rating === i + 1}
          />
          <label
            className="bg-neutral-darkBlue w-10 h-10 sm:w-16 sm:h-16 text-center transition-colors hover:bg-primary hover:text-white cursor-pointer sm:text-xl p-2 rounded-full flex items-center justify-center peer-checked:bg-neutral-mediumGray peer-checked:text-white"
            htmlFor={`num${i + 1}`}
            onClick={() => handleClick(i + 1)}
          >
            {i + 1}
          </label>
        </li>
      ))}
    </ul>
  );
}
export default RatingSelect;

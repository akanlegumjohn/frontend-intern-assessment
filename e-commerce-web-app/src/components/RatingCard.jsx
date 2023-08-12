import ratingStar from "../assets/ratingStar.svg";
export const RatingCard = ({ rating }) => {
  return (
    <div className=" flex gap-2 items-center p-1  border-4 border-gray-200 bg-white rounded-full">
      {rating} <img src={ratingStar} alt="Product rating" />
    </div>
  );
};

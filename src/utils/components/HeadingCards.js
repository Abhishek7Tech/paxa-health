import Users1 from "../../assets/card-logos-imgs/user-img-1.png";

import CommentIcon from "../../assets/card-logos-imgs/comments.svg";
import LikeIcon from "../../assets/card-logos-imgs/heart.svg";
import ShareIcon from "../../assets/card-logos-imgs/link.svg";

const UsersImgArray = [Users1];
const CardsWithHeading = (props) => {
  const { data } = props;
  return (
    <div className="bg-gray-150  w-72 md:w-86 my-3 px-2 py-4 rounded-xl">
      {data.color.map((color, i) => (
        <div
          key={i}
          className={`${color} w-10 md:w-15 h-1.5 md:h-2 rounded ml-2`}
        >
          {" "}
        </div>
      ))}
      <h2 className="text-sm md:text-base w-76 px-2 pt-2 pb-2">
        {data.heading}
      </h2>
      <div className="flex justify-between px-2 mt-4">
        <img
          className="w-auto h-6 md:h-7"
          src={[UsersImgArray[data.img]]}
        ></img>
        <div className="flex">
          <div className="flex items-center pr-4">
            <span className="text-gray-250 text-xs md:text-sm">
              {data.comments}
            </span>
            <img
              className="h-4 w-4 ml-1"
              src={CommentIcon}
              alt="comments"
            ></img>
          </div>
          <div className="flex items-center pr-4">
            <span className="text-gray-250 text-xs md:text-sm">
              {data.like}
            </span>
            <img className="h-4 w-4 ml-1" src={LikeIcon} alt="like"></img>
          </div>

          <div className="flex items-center">
            <span className="text-gray-250 text-xs md:text-sm">
              {data.shares}
            </span>
            <img className="h-4 w-4 ml-1" src={ShareIcon} alt="share"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsWithHeading;

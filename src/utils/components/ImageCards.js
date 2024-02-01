import Users1 from "../../assets/card-logos-imgs/user-img-3.png";
import Users2 from "../../assets/card-logos-imgs/user-img-5.png";
import Users3 from "../../assets/card-logos-imgs/user-img-6.png";

import CommentIcon from "../../assets/card-logos-imgs/comments.svg";
import LikeIcon from "../../assets/card-logos-imgs/heart.svg";
import ShareIcon from "../../assets/card-logos-imgs/link.svg";
import HandImg from "../../assets/card-logos-imgs/hand.png";
import CoupleImg from "../../assets/card-logos-imgs/couple.png";
import TriangleImg from "../../assets/card-logos-imgs/triangle.png";
const UsersImgArray = [Users1, Users2, Users3];
const CardImgArray = [HandImg, CoupleImg, TriangleImg];
const CardsWithImages = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <div className="bg-gray-150 w-86 my-2 px-2 py-4 rounded-xl">
      <img
        className="w-96 h-42 px-2 mt-1"
        src={CardImgArray[data.cardImg]}
        alt="card"
      ></img>
      {data.color.map((color, i) => (
        <div key={i} className={`${color} w-15 h-2 mt-3 rounded ml-2`}>
          {" "}
        </div>
      ))}
      <h2 className="text-base w-76 px-2 pt-2 pb-2">{data.heading}</h2>
     {data?.subheading && <p className="px-2 w-72 text-gray-250 text-sm pb-2">{data.subheading}</p>}
     
      <div className="flex justify-between px-2 mt-4">
        <img className="w-auto h-7" src={[UsersImgArray[data.img]]}></img>
        <div className="flex">
          <div className="flex items-center pr-4">
            <span className="text-gray-250">{data.comments}</span>
            <img
              className="h-4 w-4 ml-1"
              src={CommentIcon}
              alt="comments"
            ></img>
          </div>
          <div className="flex items-center pr-4">
            <span className="text-gray-250">{data.like}</span>
            <img className="h-4 w-4 ml-1" src={LikeIcon} alt="like"></img>
          </div>

          <div className="flex items-center">
            <span className="text-gray-250">{data.shares}</span>
            <img className="h-4 w-4 ml-1" src={ShareIcon} alt="share"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsWithImages;

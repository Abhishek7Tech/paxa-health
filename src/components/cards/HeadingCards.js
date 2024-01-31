import Users1 from "../../assets/card-logos-imgs/user-img-1.png"; 

const UsersImgArray = [Users1];
const CardsWithHeading = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <div>
      {data.color.map((color, i) => (
        <div key={i} className={`bg-${color} w-15 h-2 rounded`}>
        </div>
      ))}
      <h2 className="">{data.heading}</h2>
      <div>
        <img src={[UsersImgArray[data.img]]}></img>
      </div>
    </div>
  );
};

export default CardsWithHeading;

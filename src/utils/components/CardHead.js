const CardHead = (props) => {
  return (
    <div className="bg-gray-150 min-w-72 max-w-86 min-h-10 max-h-13 flex rounded-xl justify-between px-4 items-center">
      <h3 className="text-xs md:text-base font-medium">{props.name}</h3>
      <div>
        <button className="mb-4"><span className="text-2xl text-gray-250">...</span></button>
      </div>
    </div>
  );
};

export default CardHead;

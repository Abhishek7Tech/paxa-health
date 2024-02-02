import TrelloIcon from "../../assets/nav-bar-logos/trello-logo.png";
import TrelloBoardsIcon from "../../assets/nav-bar-logos/trello-mark-icon.png";
import SearchIcon from "../../assets/nav-bar-logos/search-icon.png";
import SearchIconSm from "../../assets/nav-bar-logos/search-icon-sm.svg";

import AddIcon from "../../assets/nav-bar-logos/plus-circle-outline.png";
import AlertCircleIcon from "../../assets/nav-bar-logos/alert-circle-outline.png";
import BellIcon from "../../assets/nav-bar-logos/bell-icon.png";
import UserIcon from "../../assets/nav-bar-logos/user.png";
import VerticalBars from "../../utils/components/VerticalBars";
import useWindowDimensions from "../../utils/helpers/GetDimensions";

const NavBar = () => {
  const { width } = useWindowDimensions();

  return (
    <nav className="flex py-2 md:py-4 border-b-2 border-gray-150 items-center justify-between md:px-8 px-2">
      <div className="flex items-center  md:items-baseline">
        <img
          className="hidden md:inline"
          src={TrelloIcon}
          alt="trello"
          width={75}
          height={30}
        ></img>
        <div className="flex items-center px-2 md:px-4 cursor-pointer">
          {width > 768 && <VerticalBars />}
          <img
            src={TrelloBoardsIcon}
            alt="trello-boards"
            width={24}
            height={24}
          ></img>
          {width > 768 && <h1 className="text-black text-base px-2">Boards</h1>}
          {width > 768 && <VerticalBars />}
        </div>
        <div className="flex relative items-baseline">
          {width > 768 && (
            <>
              {" "}
              <input
                className="lg:w-128 md:w-64 h-8 rounded-xl bg-gray-150 hidden md:block"
                type="text"
              ></input>
              <img
                className="h-4 w-4 z-10 absolute inset-y-2 right-0 mr-4"
                src={SearchIcon}
                alt="search"
              ></img>{" "}
            </>
          )}

          {width < 768 && (
            <img
              className="h-4 w-4 z-10 mr-2"
              src={SearchIconSm}
              alt="search"
            ></img>
          )}
        </div>
      </div>

      <div className="flex items-center">
        <img className="h-5 w-5 mx-2 md:mx-4 cursor-pointer" src={AddIcon} alt="add"></img>
        <img className="h-5 w-5 mx-2 md:mx-4 cursor-pointer " src={AlertCircleIcon} alt="alert"></img>
        <img className="h-5 w-5 mx-2 md:mx-4 cursor-pointer" src={BellIcon} alt="bell"></img>
        <img className="h-7.5 md:h-10 w-7.5 md:w-10 cursor-pointer" src={UserIcon} alt="user"></img>
      </div>
    </nav>
  );
};

export default NavBar;

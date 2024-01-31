import TrelloIcon from "../../assets/nav-bar-logos/trello-logo.png";
import TrelloBoardsIcon from "../../assets/nav-bar-logos/trello-mark-icon.png";
import SearchIcon from "../../assets/nav-bar-logos/search-icon.png";
import AddIcon from "../../assets/nav-bar-logos/plus-circle-outline.png";
import AlertCircleIcon from "../../assets/nav-bar-logos/alert-circle-outline.png";
import BellIcon from "../../assets/nav-bar-logos/bell-icon.png";
import UserIcon from "../../assets/nav-bar-logos/user.png";
import VerticalBars from "../../utils/components/VerticalBars";

const NavBar = () => {
  return (
    <nav className="flex py-4 border-b-2 border-gray-150 items-center justify-between px-8">
      <div className="flex items-baseline">
        <img src={TrelloIcon} alt="trello" width={75} height={30}></img>
        <div className="flex items-center px-4">
          <VerticalBars />
          <img
            src={TrelloBoardsIcon}
            alt="trello-boards"
            width={24}
            height={24}
          ></img>
          <h1 className="text-black text-base px-2">Boards</h1>
          <VerticalBars />
        </div>
        <div className="flex relative items-baseline">
          <input
            className="w-128 h-8 rounded-xl bg-gray-150"
            type="text"
          ></input>
          <img
            className="h-4 w-4 z-10 absolute inset-y-2 right-0 mr-4"
            src={SearchIcon}
            alt="search"
          ></img>
        </div>
      </div>

      <div className="flex items-center">
        <img className="h-5 w-5 mx-4" src={AddIcon} alt="add"></img>
        <img className="h-5 w-5 mx-4" src={AlertCircleIcon} alt="alert"></img>
        <img className="h-5 w-5 mx-4" src={BellIcon} alt="bell"></img>
        <img className="h-10 w-10" src={UserIcon} alt="user"></img>
      </div>
    </nav>
  );
};

export default NavBar;

import HeartIcon from "../../assets/menu-bar-logos/Heart.png";
import GlobeIcon from "../../assets/menu-bar-logos/globe-2-outline.png";
import BagIcon from "../../assets/menu-bar-logos/hard.png";
import UserIcons from "../../assets/menu-bar-logos/users.png"; 
import VerticalBars from "../../utils/components/VerticalBars";
const MenuBar = () => {
    return (
        <nav className="flex px-8 justify-between items-center pt-4 pb-2">
            <div className="flex">
                <h1 className="text-1xl font-medium">Brackets</h1>
                <div className="flex ml-24 items-center">
                    <img className="w-5 h-5" src={HeartIcon} alt="heart"></img>
                    <VerticalBars/>
                    <img className="w-5 h-5" src={GlobeIcon} alt="globe"></img>
                    <h2 className="text-lg text-gray-300 px-2">Public</h2>
                    <VerticalBars/>
                    <img className="w-5 h-5" src={BagIcon} alt="shopping bag"></img>
                </div>
            </div>

                <div className="flex items-center">
                    <img className="mr-24 h-10 w-auto" src={UserIcons} alt="users"></img>
                    <h2 className="font-medium text-xl">Menu</h2>
                </div>
        </nav>
    )
}

export default MenuBar;
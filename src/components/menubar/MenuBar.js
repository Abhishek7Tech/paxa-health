import HeartIcon from "../../assets/menu-bar-logos/Heart.png";
import GlobeIcon from "../../assets/menu-bar-logos/globe-2-outline.png";
import BagIcon from "../../assets/menu-bar-logos/hard.png";
import UserIcons from "../../assets/menu-bar-logos/users.png"; 
import VerticalBars from "../../utils/components/VerticalBars";
const MenuBar = () => {
    return (
        <nav className="flex px-4 md:px-8 justify-between items-center pt-4 pb-2">
            <div className="flex flex-col lg:flex-row">
                <h1 className="text-base md:text-1xl font-medium cursor-pointer">Brackets</h1>
                <div className="flex md:ml-24 items-center">
                    <img className="w-5 h-5 cursor-pointer" src={HeartIcon} alt="heart"></img>
                    <VerticalBars/>
                    <img className="w-5 h-5 cursor-pointer" src={GlobeIcon} alt="globe"></img>
                    <h2 className="text-base md:text-lg text-gray-300 md:px-2 px-1 cursor-pointer">Public</h2>
                    <VerticalBars/>
                    <img className="w-5 h-5 cursor-pointer" src={BagIcon} alt="shopping bag"></img>
                </div>
            </div>

                <div className="flex items-center ml-2">
                    <img className="md:mr-24 mr-8 h-7.5 md:h-10 w-auto" src={UserIcons} alt="users"></img>
                    <h2 className="font-medium md:text-xl text-base cursor-pointer">Menu</h2>
                </div>
        </nav>
    )
}

export default MenuBar;
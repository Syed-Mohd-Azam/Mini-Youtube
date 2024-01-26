import Hamberger from "../assets/Hamberger-menu-icon.png";
import YoutubeIcon from "../assets/youtube.png";
import UserIcon from "../assets/user-icon.jpg";
import Search from "../assets/search.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <>
      <section className="grid grid-flow-col shadow-sm px-3 py-6 ">
        <article className="flex gap-3 col-span-1  justify-start items-center px-2">
          <img
            onClick={toggleMenuHandler}
            className="w-12 h-12 hover:cursor-pointer p-2 hover:bg-purple-50  hover:rounded-full"
            src={Hamberger}
            alt="Hamberger-Menu-Icon"
          />
          <img
            className="w-24 hover:cursor-pointer"
            src={YoutubeIcon}
            alt="Youtube-Icon"
          />
        </article>
        <article className="col-span-10 flex justify-center items-center">
          <section className="flex justify-content items-center gap-0 border-2 rounded-e-full rounded-l-full p-2">
            <input
              type="text"
              className="border-none w-96 rounded-2xl outline-none pl-3 tracking-wider text-lg font-semibold"
              placeholder="Search"
            />
            <article className="pr-3">
              <img className="w-8 h-8" src={Search} alt="search" />
            </article>
          </section>
        </article>
        <article className="col-span-1 flex justify-center">
          <img
            className="w-12 h-12 p-2 hover:cursor-pointer hover:bg-purple-50 hover:rounded-full hover:border-0 border-2 rounded-full"
            src={UserIcon}
            alt="User-Icon"
          />
        </article>
      </section>
    </>
  );
};
export default Header;

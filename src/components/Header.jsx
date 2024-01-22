import Hamberger from "../assets/Hamberger-menu-icon.png";
import YoutubeIcon from "../assets/youtube.png";
const Header = () => {
  return (
    <>
      <section>
        <article className="flex">
          <img
            className="w-8 h-8 hover:cursor-pointer"
            src={Hamberger}
            alt="Hamberger-Menu-Icon"
          />
          <img className="w-28 " src={YoutubeIcon} alt="Youtube-Icon" />
        </article>
      </section>
    </>
  );
};
export default Header;

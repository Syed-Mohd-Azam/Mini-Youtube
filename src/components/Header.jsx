import Hamberger from "../assets/Hamberger-menu-icon.png";
import YoutubeIcon from "../assets/Youtube-Icon.png";
const Header = () => {
  return (
    <>
      <section>
        <article className="flex">
          <img src={Hamberger} alt="Hamberger-Menu-Icon" />
          <img src={YoutubeIcon} alt="Youtube-Icon" />
        </article>
      </section>
    </>
  );
};
export default Header;

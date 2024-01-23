import { useSelector } from "react-redux";
import FullSideBarSection from "./FullSideBarSection";
import HalfSideBarSection from "./HalfSideBarSection";
const SideBar = () => {
  const menuOpen = useSelector((store) => store.app.isMenuOpen);
  console.log(menuOpen);
  return (
    <>
      {menuOpen ? (
        <>
          <FullSideBarSection />
        </>
      ) : (
        <>
          <HalfSideBarSection />
        </>
      )}
    </>
  );
};
export default SideBar;

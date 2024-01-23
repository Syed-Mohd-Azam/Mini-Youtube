import { useSelector } from "react-redux";
const SideBar = () => {
  const menuOpen = useSelector((store) => store.app.isMenuOpen);
  console.log(menuOpen);
  return (
    <>
      {menuOpen ? (
        <>
          <h1>SideBar</h1>
        </>
      ) : null}
    </>
  );
};
export default SideBar;

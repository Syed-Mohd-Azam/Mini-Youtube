import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu);
  }, []);
  return (
    <>
      <h1>Watch Page</h1>
    </>
  );
};
export default WatchPage;

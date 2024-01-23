import MainContainer from "./MainContainer";
import SideBar from "./SideBar";
const Body = () => {
  return (
    <>
      <section className="grid grid-flow-col grid-cols-12">
        <article className="col-span-2 border-r-2 p-4">
          <SideBar />
        </article>
        <article className="col-span-10 p-4">
          <MainContainer />
        </article>
      </section>
    </>
  );
};
export default Body;

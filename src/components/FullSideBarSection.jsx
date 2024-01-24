import Home from "../assets/Home.png";
import Shorts from "../assets/shorts.png";
import Subscription from "../assets/subscription.png";
import Download from "../assets/download.png";
const FullSideBarSection = () => {
  return (
    <>
      <section className="min-h-screen max-h-fit ">
        <article className="flex flex-col gap-1">
          <article className="flex gap-2  items-center mb-1">
            <img className="h-14 w-14" src={Home} alt="Home-Logo" />
            <p className="text-md pl-2 ">Home</p>
          </article>
          <article className="flex gap-8  items-center mb-3">
            <img className="h-8 w-8 ml-2" src={Shorts} alt="Shorts-Logo" />
            <p className="text-md ">Shorts</p>
          </article>
          <article className="flex gap-8  items-center">
            <img
              className="h-6 w-6 ml-3"
              src={Subscription}
              alt="Subscriptions-Logo"
            />
            <p className="text-md pl-1 ">Subscriptions</p>
          </article>
        </article>
        <article className="border-b border-1 mt-5"></article>
        <p className="font-semibold ml-4 mt-4 text-lg mb-5">You {">"}</p>
        <section>
          <article className="flex gap-6">
            <img
              className="h-10 w-10"
              src={Download}
              alt="Your-Channel-Image"
            />
            <p>Your Channel</p>
          </article>
          <article className="flex gap-7 mb-2">
            <img className="h-10 w-10" src={Download} alt="History-Image" />
            <p>History</p>
          </article>
          <article className="flex gap-7 mb-2">
            <img className="h-10 w-10" src={Download} alt="Videos-Image" />
            <p>Your Videos</p>
          </article>
          <article className="flex gap-7 mb-2">
            <img className="h-10 w-10" src={Download} alt="Watch-Later-Image" />
            <p>Watch later</p>
          </article>
          <article className="flex gap-7 mb-2">
            <img className="w-10 h-10" src={Download} alt="Download-Image" />
            <p>Downloads</p>
          </article>
        </section>
      </section>
    </>
  );
};
export default FullSideBarSection;

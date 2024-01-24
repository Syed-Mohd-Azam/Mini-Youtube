import Home from "../assets/Home.png";
import Shorts from "../assets/shorts.png";
import Subscription from "../assets/subscription.png";
import Download from "../assets/download.png";
import Channel from "../assets/channel.png";
import History from "../assets/history.png";
import Videos from "../assets/videos.jpg";
import Watch from "../assets/watch-later.png";
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
        <section className="flex flex-col gap-3 p-2">
          <article className="flex gap-6 mb-1">
            <img
              className="h-6 w-6 ml-1"
              src={Channel}
              alt="Your-Channel-Image"
            />
            <p className="ml-2">Your Channel</p>
          </article>
          <article className="flex gap-7 mb-2">
            <img className="h-6 w-6 ml-1" src={History} alt="History-Image" />
            <p className="ml-2">History</p>
          </article>
          <article className="flex gap-7 mb-2">
            <img className="h-6 w-6 ml-1" src={Videos} alt="Videos-Image" />
            <p className="ml-2">Your Videos</p>
          </article>
          <article className="flex gap-7 mb-2">
            <img className="h-6 w-6 ml-1" src={Watch} alt="Watch-Later-Image" />
            <p className="ml-2">Watch later</p>
          </article>
          <article className="flex gap-7 mb-2">
            <img className="w-6 h-6 ml-1" src={Download} alt="Download-Image" />
            <p className="ml-2">Downloads</p>
          </article>
        </section>
        <article className="border-b border-1 mt-1"></article>
        <p className="mt-5 font-semibold ml-4 mb-5 text-lg">Explore</p>
        <section>
          <article className="flex gap-4 mb-1">
            <img className="w-10 h-10" src={Download} alt="Trending-Image" />
            <p className="ml-3">Trending</p>
          </article>
          <article className="flex gap-4 mb-1">
            <img className="w-10 h-10" src={Download} alt="Shopping-Image" />
            <p className="ml-3">Shopping</p>
          </article>
          <article className="flex gap-4 mb-1">
            <img className="w-10 h-10" src={Download} alt="Music-Image" />
            <p className="ml-3">Music</p>
          </article>
          <article className="flex gap-4 mb-1">
            <img className="w-10 h-10" src={Download} alt="Movies-Image" />
            <p className="ml-3">Movies</p>
          </article>
          <article className="flex gap-4 mb-1">
            <img className="w-10 h-10" src={Download} alt="Live-Image" />
            <p className="ml-3">Live</p>
          </article>
          <article className="flex gap-4 mb-1">
            <img className="w-10 h-10" src={Download} alt="Gaming-Image" />
            <p className="ml-3">Gaming</p>
          </article>
          <article className="flex gap-4 mb-1">
            <img className="w-10 h-10" src={Download} alt="News-Image" />
            <p className="ml-3">News</p>
          </article>
          <article className="flex gap-4 mb-1">
            <img className="w-10 h-10" src={Download} alt="Sports-Image" />
            <p className="ml-3">Sports</p>
          </article>
          <article className="flex gap-4 mb-1">
            <img className="w-10 h-10" src={Download} alt="Learning-Image" />
            <p className="ml-3">Learning</p>
          </article>
          <article className="flex gap-4 mb-1">
            <img className="w-10 h-10" src={Download} alt="Fashion-Image" />
            <p className="ml-3">Fashion-Beauty</p>
          </article>
          <article className="flex gap-4 mb-1">
            <img className="w-10 h-10" src={Download} alt="Podcasts-Image" />
            <p className="ml-3">Podcasts</p>
          </article>
        </section>
      </section>
    </>
  );
};
export default FullSideBarSection;

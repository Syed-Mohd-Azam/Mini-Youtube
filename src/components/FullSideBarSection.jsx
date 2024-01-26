import Home from "../assets/Home.png";
import Shorts from "../assets/shorts.png";
import Subscription from "../assets/subscription.png";
import Download from "../assets/download.png";
import Channel from "../assets/channel.png";
import History from "../assets/history.png";
import Videos from "../assets/videos.jpg";
import Watch from "../assets/watch-later.png";
import Trending from "../assets/trending.png";
import Shopping from "../assets/shopping.png";
import Music from "../assets/music.png";
import Movies from "../assets/movies.png";
import Live from "../assets/live.png";
import Gaming from "../assets/gaming.png";
import News from "../assets/news.png";
import Learning from "../assets/learning.png";
import Sports from "../assets/shorts.png";
import Podcast from "../assets/podcast.png";
import Fashion from "../assets/fashion.png";
import Kids from "../assets/kids - Copy.webp";
import YoutubeMusic from "../assets/music-youtube - Copy.png";
import Premium from "../assets/premium.png";
import Studio from "../assets/studio.png";
import FeedBack from "../assets/fedback.png";
import Help from "../assets/help.png";
import HistoryFlag from "../assets/history-flag.png";
import Settings from "../assets/settings.png";
const FullSideBarSection = () => {
  return (
    <>
      <section className="min-h-screen max-h-fit">
        <article className="flex flex-col gap-1">
          <article className="flex gap-2  items-center  hover:bg-purple-50 rounded-2xl hover:cursor-pointer">
            <img className="h-14 w-14" src={Home} alt="Home-Logo" />
            <p className="text-md pl-2 ">Home</p>
          </article>
          <article className="flex gap-8  items-center py-3 hover:bg-purple-50 rounded-2xl hover:cursor-pointer">
            <img className="h-8 w-8 ml-2" src={Shorts} alt="Shorts-Logo" />
            <p className="text-md ">Shorts</p>
          </article>
          <article className="flex gap-8  items-center hover:bg-purple-50 rounded-2xl py-3 hover:cursor-pointer">
            <img
              className="h-6 w-6 ml-3"
              src={Subscription}
              alt="Subscriptions-Logo"
            />
            <p className="text-md pl-1 ">Subscriptions</p>
          </article>
        </article>
        <article className="border-b border-1 mt-5"></article>
        <p className="font-semibold ml-4 mt-4 text-lg mb-3">You {">"}</p>
        <section className="flex flex-col  p-2">
          <article className="flex gap-6 py-3 hover:bg-purple-50 rounded-2xl px-3 hover:cursor-pointer">
            <img className="h-6 w-6 " src={Channel} alt="Your-Channel-Image" />
            <p className="ml-2">Your Channel</p>
          </article>
          <article className="flex gap-7 py-3 px-3 hover:bg-purple-50 hover:rounded-2xl hover:cursor-pointer">
            <img className="h-6 w-6 " src={History} alt="History-Image" />
            <p className="ml-2">History</p>
          </article>
          <article className="flex gap-7 py-3 px-3 hover:bg-purple-50 hover:rounded-2xl hover:cursor-pointer">
            <img className="h-6 w-6 " src={Videos} alt="Videos-Image" />
            <p className="ml-1">Your Videos</p>
          </article>
          <article className="flex gap-7 py-3 px-3 hover:bg-purple-50 hover:rounded-2xl hover:cursor-pointer">
            <img className="h-6 w-6 " src={Watch} alt="Watch-Later-Image" />
            <p className="ml-1">Watch later</p>
          </article>
          <article className="flex gap-7 py-3 px-3 hover:rounded-2xl hover:bg-purple-50 hover:cursor-pointer">
            <img className="w-6 h-6 " src={Download} alt="Download-Image" />
            <p className="ml-1">Downloads</p>
          </article>
        </section>
        <article className="border-b border-1 mt-1"></article>
        <p className="mt-5 font-semibold ml-4 mb-5 text-lg">Explore</p>
        <section className="flex flex-col gap-3">
          <article className="flex gap-4 py-2 px-3 hover:bg-purple-50 hover:rounded-xl hover:cursor-pointer">
            <img className="w-6 h-6 ml-3" src={Trending} alt="Trending-Image" />
            <p className="ml-3">Trending</p>
          </article>
          <article className="flex gap-4 py-2 px-3 hover:bg-purple-50 hover:rounded-xl hover:cursor-pointer">
            <img className="w-6 h-6 ml-3" src={Shopping} alt="Shopping-Image" />
            <p className="ml-3">Shopping</p>
          </article>
          <article className="flex gap-4 py-2 px-3 hover:rounded-xl hover:bg-purple-50 hover:cursor-pointer">
            <img className="w-7 h-7 ml-3" src={Music} alt="Music-Image" />
            <p className="ml-3">Music</p>
          </article>
          <article className="flex gap-4 py-2 px-3 hover:bg-purple-50 hover:rounded-xl hover:cursor-pointer">
            <img className="w-6 h-6 ml-3" src={Movies} alt="Movies-Image" />
            <p className="ml-4">Movies</p>
          </article>
          <article className="flex gap-4 py-2 px-3 hover:bg-purple-50 hover:rounded-xl hover:cursor-pointer">
            <img className="w-6 h-6 ml-2" src={Live} alt="Live-Image" />
            <p className="ml-5">Live</p>
          </article>
          <article className="flex gap-4 py-2 px-3 hover:rounded-xl hover:bg-purple-50 hover:cursor-pointer">
            <img className="w-6 h-6 ml-3" src={Gaming} alt="Gaming-Image" />
            <p className="ml-4">Gaming</p>
          </article>
          <article className="flex gap-4 px-2 py-3 hover:bg-purple-50 hover:rounded-xl hover:cursor-pointer">
            <img className="w-6 h-6 ml-3" src={News} alt="News-Image" />
            <p className="ml-5">News</p>
          </article>
          <article className="flex gap-4 py-2 px-3 hover:rounded-xl hover:bg-purple-50 hover:cursor-pointer">
            <img className="w-7 h-7 ml-3" src={Learning} alt="Sports-Image" />
            <p className="ml-3">Learning</p>
          </article>
          <article className="flex gap-4 py-2 px-3 hover:bg-purple-50 hover:rounded-xl hover:cursor-pointer">
            <img className="w-8 h-8 ml-3" src={Sports} alt="Learning-Image" />
            <p className="ml-2">Sports</p>
          </article>
          <article className="flex gap-4 px-3 py-2 hover:rounded-xl hover:bg-purple-50 hover:cursor-pointer">
            <img className="w-6 h-6 ml-3" src={Fashion} alt="Fashion-Image" />
            <p className="ml-4">Fashion & Beauty</p>
          </article>
          <article className="flex gap-4 px-3 py-2 hover:rounded-xl hover:bg-purple-50 hover:cursor-pointer">
            <img className="w-7 h-7 ml-3" src={Podcast} alt="Podcasts-Image" />
            <p className="ml-3 mb-4">Podcasts</p>
          </article>
        </section>
        <section className="border-b border-1 mt-2 mb-4"></section>
        <p className="font-semibold text-lg ml-3 mb-5">More from Youtube</p>
        <section className="flex flex-col gap-1">
          <section className="flex gap-4 hover:bg-purple-50 hover:rounded-xl py-2 px-1 justify-center hover:cursor-pointer">
            <img
              className="h-5 w-5 ml-2 mt-1"
              src={Premium}
              alt="Premium-Image"
            />
            <p className="ml-2">YouTube Premium</p>
          </section>
          <section className="flex gap-4 hover:bg-purple-50 hover:rounded-xl py-2 px-2 hover:cursor-pointer">
            <img className="h-7 w-7 ml-1" src={Studio} alt="Studio-Image" />
            <p className="ml-1">YouTube Studio</p>
          </section>
          <section className="flex gap-4 hover:bg-purple-50 hover:rounded-xl py-2 px-2 hover:cursor-pointer">
            <img
              className="h-7 w-7 ml-1"
              src={YoutubeMusic}
              alt="Music-Image"
            />
            <p className="ml-1">YouTube Music</p>
          </section>
          <section className="flex gap-4 hover:bg-purple-50 hover:rounded-xl py-2 px-2 hover:cursor-pointer">
            <img className="h-8 w-8 ml-1" src={Kids} alt="Kids-Image" />
            <p className="ml-1">YouTube Kids</p>
          </section>
        </section>
        <section className="border-b border-1 mt-4 mb-5"></section>
        <section>
          <article className="flex gap-6 py-3 px-1 hover:bg-purple-50 hover:rounded-2xl hover:cursor-pointer">
            <img className="h-7 w-7 ml-2" src={Settings} alt="Settings-Logo" />
            <p className="ml-2">Settings</p>
          </article>
          <article className="flex gap-6 py-3 px-1 hover:bg-purple-50 hover:rounded-2xl hover:cursor-pointer">
            <img
              className="h-7 w-7 ml-2"
              src={HistoryFlag}
              alt="History-Logo"
            />
            <p className="ml-2">Report History</p>
          </article>
          <article className="flex gap-6 py-3 px-1 hover:bg-purple-50 hover:rounded-2xl hover:cursor-pointer">
            <img className="h-7 w-7 ml-2" src={Help} alt="Help-Logo" />
            <p className="ml-2">Help</p>
          </article>
          <article className="flex gap-6 py-3 px-1 hover:bg-purple-50 hover:rounded-2xl hover:cursor-pointer">
            <img className="h-6 w-6 ml-2" src={FeedBack} alt="Feedback-Logo" />
            <p className="ml-2">Send Feedback</p>
          </article>
          <section className="border-b border-1 mt-6 mb-4"></section>
          <section className="flex flex-wrap gap-x-2 gap-y-1 mb-1">
            <p className="text-sm">About</p>
            <p className="text-sm ">Press</p>
            <p className="text-sm ">Copyright</p>
            <p className="text-sm ">Contact us</p>
            <p className="text-sm ">Creators</p>
            <p className="text-sm ">Advertise</p>
            <p className="text-sm ">Developers</p>
          </section>
          <section className="flex flex-row flex-wrap gap-x-2 gap-y-1 mt-3 ">
            <p className="text-sm ">Terms</p>
            <p className="text-sm ">Privacy</p>
            <p className="text-sm ">Policy-Safety</p>
            <p className="text-sm ">How Youtube Works</p>
            <p className="text-sm ">Test new features</p>
          </section>
        </section>
        <section className="border-b border-1 mt-5 mb-5"></section>
        <p className="mt-4  italic text-normal ml-2 font-semibold">
          &#169; Syed Mohd Azam !!
        </p>
      </section>
    </>
  );
};
export default FullSideBarSection;

import Home from "../assets/Home.png";
import Shorts from "../assets/shorts.png";
import Subscription from "../assets/subscription.png";
import You from "../assets/You.png";
import Download from "../assets/Download.png";
const HalfSideBarSection = () => {
  return (
    <>
      <section className="flex  flex-col min-h-screen max-h-fit">
        <article className="flex justify-start gap-4 items-center hover:bg-purple-50 hover:rounded-lg py-1">
          <img className="h-16 w-16" src={Home} alt="Home-Icon" />
          <p className=" text-lg">Home</p>
        </article>
        <article className="flex justify-start gap-4 items-center hover:bg-purple-50 hover:rounded-lg py-1">
          <img className="h-14 w-14 p-2" src={Shorts} alt="shorts" />
          <p className=" text-lg">Shorts</p>
        </article>
        <article className="flex justify-start gap-4 items-center hover:bg-purple-50 hover:rounded-lg py-1 mb-1">
          <img
            className="h-11 w-11 p-2 ml-2"
            src={Subscription}
            alt="subscriptions"
          />
          <p className=" text-lg ml-1">Subscriptions</p>
        </article>
        <article className="flex justify-start gap-4 items-center hover:bg-purple-50 hover:rounded-lg py-1 mb-1">
          <img className="h-11 w-11 p-2 ml-2" src={You} alt="subscriptions" />
          <p className="text-lg p-2">You</p>
        </article>
        <article className="flex justify-start gap-4 items-center hover:bg-purple-50 hover:rounded-lg py-1">
          <img
            className="h-11 w-11 p-2 ml-2"
            src={Download}
            alt="subscriptions"
          />
          <p className="text-lg p-2">Downloads</p>
        </article>
      </section>
    </>
  );
};
export default HalfSideBarSection;

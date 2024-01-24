import Home from "../assets/Home.png";
import Shorts from "../assets/shorts.png";
import Subscription from "../assets/subscription.png";
import You from "../assets/You.png";
import Download from "../assets/Download.png";
const HalfSideBarSection = () => {
  return (
    <>
      <section className="flex  flex-col min-h-screen max-h-fit ">
        <article className="flex justify-start gap-4 items-center hover:bg-purple-50 hover:rounded-lg ">
          <img className="h-16 w-16" src={Home} alt="Home-Icon" />
          <p className=" text-lg">Home</p>
        </article>
        <article className="flex justify-start gap-4 items-center hover:bg-purple-50 hover:rounded-lg mb-6">
          <img className="h-10 w-10 ml-3" src={Shorts} alt="shorts" />
          <p className=" text-lg ml-3">Shorts</p>
        </article>
        <article className="flex justify-start gap-4 items-center hover:bg-purple-50 hover:rounded-lg mb-6 ">
          <img
            className="h-8 w-8 ml-4"
            src={Subscription}
            alt="subscriptions"
          />
          <p className=" text-lg ml-4">Subscriptions</p>
        </article>
        <article className="flex justify-start gap-4 items-center hover:bg-purple-50 hover:rounded-lg mb-6">
          <img className="h-7 w-7  ml-4" src={You} alt="subscriptions" />
          <p className="text-lg ml-5">You</p>
        </article>
        <article className="flex justify-start gap-4 items-center hover:bg-purple-50 hover:rounded-lg mb-6">
          <img className="h-6 w-6  ml-4" src={Download} alt="subscriptions" />
          <p className="text-lg ml-5">Downloads</p>
        </article>
      </section>
    </>
  );
};
export default HalfSideBarSection;

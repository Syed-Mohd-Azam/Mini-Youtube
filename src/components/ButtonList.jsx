import buttons from "../utils/buttons";
import Button from "./Button";
const ButtonList = () => {
  return (
    <>
      <section className=" pb-5 w-11/12 mx-auto">
        <article className="flex flex-row overflow-x-auto scrollbar-hide flex-nowrap scroll-smooth  ">
          {buttons?.map((button, index) => (
            <Button key={index} button={button} />
          ))}
        </article>
      </section>
    </>
  );
};
export default ButtonList;

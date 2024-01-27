import buttons from "../utils/buttons";
import Button from "./Button";
import { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineArrowRight } from "react-icons/md";
const ButtonList = () => {
  const [chance, setChance] = useState(0);
  return (
    <>
      <section className=" pb-5 w-11/12 mx-auto">
        <article className="flex flex-row gap-1">
          <MdOutlineKeyboardArrowLeft />
          <article className="flex flex-row overflow-x-auto scrollbar-hide flex-nowrap scroll-smooth  ">
            {buttons?.map((button, index) => (
              <Button
                index={index}
                chance={chance}
                key={index}
                button={button}
                setChance={setChance}
              />
            ))}
          </article>
          <MdOutlineArrowRight />
        </article>
      </section>
    </>
  );
};
export default ButtonList;

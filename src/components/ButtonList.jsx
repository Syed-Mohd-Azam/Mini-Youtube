import buttons from "../utils/buttons";
import Button from "./Button";
import { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const ButtonList = () => {
  const [chance, setChance] = useState(0);
  return (
    <>
      <section className=" pb-5 w-11/12 mx-auto">
        <article className="flex flex-row gap-2 justify-center items-center">
          <MdOutlineKeyboardArrowLeft className="w-8 h-8 hover:bg-purple-100 text-black rounded-full" />
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
          <MdOutlineKeyboardArrowRight className="w-8 h-8 hover:bg-purple-100 rounded-full" />
        </article>
      </section>
    </>
  );
};
export default ButtonList;

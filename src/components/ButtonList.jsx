import buttons from "../utils/buttons";
import Button from "./Button";
import { useState } from "react";
const ButtonList = () => {
  const [chance, setChance] = useState(0);
  return (
    <>
      <section className=" pb-5 w-11/12 mx-auto">
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
      </section>
    </>
  );
};
export default ButtonList;

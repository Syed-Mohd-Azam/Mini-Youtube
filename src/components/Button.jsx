// eslint-disable-next-line react/prop-types
const Button = ({ button, chance, index }) => {
  return (
    <>
      <button
        className={
          chance === index
            ? "bg-black text-white p-3 mx-2 font-semibold rounded-lg w-fit whitespace-nowrap"
            : "bg-purple-50 p-3 mx-2 font-semibold rounded-lg w-fit whitespace-nowrap"
        }
      >
        {button}
      </button>
    </>
  );
};
export default Button;

// eslint-disable-next-line react/prop-types
const Button = ({ button }) => {
  return (
    <>
      <button className="bg-purple-50 p-3 mx-2 font-semibold rounded-lg w-fit whitespace-nowrap">
        {button}
      </button>
    </>
  );
};
export default Button;

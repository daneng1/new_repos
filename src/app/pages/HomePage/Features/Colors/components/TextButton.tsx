interface Props {
  reversed: boolean;
  title: string;
  id: string;
  changeColorDisplay: (arg: string) => void;
}

const Button = ({ reversed, title, id, changeColorDisplay }: Props) => {
  let btnStyle = reversed
    ? 'w-40 text-teal-600 mt-16 py-2  text-center font-bold bg-white text-base border border-teal-600 rounded'
    : 'w-40 text-white mt-16 py-2  text-center font-bold bg-teal-600 text-base border border-teal-600 rounded';
  return (
    <button className={btnStyle} onClick={() => changeColorDisplay(id)}>
      <p className="">Show {title}</p>
    </button>
  );
};

export default Button;

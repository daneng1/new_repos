import Button from './TextButton';
import logo from './assets/56px-CR-logo_RGB_2.png';

const Tile = ({ color, changeDisplayColor }) => {
  return (
    <div
      key={color.id}
      className="bg-white w-96 h-80 rounded shadow-lg lg:m-8 m-4 p-8 flex flex-row space-x-8"
    >
      <div className="flex justify-left flex-col w-3/4">
        <div className="flex flex-row items-center">
          <img
            src={logo}
            alt="Carerev logo"
            width="56"
            height="56"
            className="justify-left w-16 h-16"
          />
          <h1 className="pl-4 font-bold text-gray-700 text-xl">{color.name}</h1>
        </div>
        <h2 className="font-bold text-gray-700 pt-14 text-xl">
          Color:{' '}
          <span className="font-normal">
            {color.showRGB ? color.hex : color.rgb}
          </span>
        </h2>
        <Button
          id={color.id}
          changeColorDisplay={changeDisplayColor}
          reversed={!color.showRGB}
          title={color.showRGB ? 'Rgb' : 'Hex'}
        />
      </div>
      <div className="flex flex-col justify-center">
        <div
          className="h-14 w-14"
          style={{ backgroundColor: `${color.rgb}` }}
        ></div>
      </div>
    </div>
  );
};

export default Tile;

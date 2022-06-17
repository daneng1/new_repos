import { useDispatch } from 'react-redux';
import { useColorsSlice } from '../slice';
import logo from './assets/128px-CR-logo_RGB.png';

const NavBar = () => {
  const { actions } = useColorsSlice();
  const dispatch = useDispatch();

  return (
    <div className="w-full h-24 bg-white flex flex-col justify-center">
      <div className=" flex flex-row justify-evenly ">
        <img src={logo} alt="Carerev logo" className="h-8 mt-4" />
        <button
          onClick={() => dispatch(actions.loadColors())}
          className="w-48 h-12 mt-2 text-white text-center font-bold bg-purple-800 text-base border border-purple-800 rounded"
        >
          Refresh Colors
        </button>
      </div>
    </div>
  );
};

export default NavBar;

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectLoading, selectColors } from './Colors/slice/selectors';
import { useColorsSlice } from './Colors/slice';

import Tile from './Colors/components/Tile';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

const Features = () => {
  const { actions } = useColorsSlice();

  const isLoading = useSelector(selectLoading);

  const colors = useSelector(selectColors);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loadColors());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="lg:grid lg:grid-cols-2 flex flex-col">
      {isLoading && <LoadingIndicator />}
      {colors &&
        colors.map(color => {
          return (
            <Tile
              key={color.id}
              color={color}
              changeDisplayColor={() => dispatch(actions.changeColor(color.id))}
            />
          );
        })}
    </div>
  );
};

export default Features;

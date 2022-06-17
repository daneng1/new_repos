import { v4 as uuidv4 } from 'uuid';
import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from '../../../../../../utils/request';
import { colorsActions as actions } from '.';

export function* getColors() {
  const num1 = Math.floor(Math.random() * 255);
  const num2 = Math.floor(Math.random() * 255);
  const num3 = Math.floor(Math.random() * 255);
  const requestURL = `https://www.thecolorapi.com/scheme?count=10&rgb=${num1},${num2},${num3}`;

  try {
    const colors: any = yield call(request, requestURL);
    const data = colors.colors.map(color => {
      return {
        id: uuidv4(),
        name: color.name.value,
        hex: color.hex.value,
        rgb: color.rgb.value,
        showRGB: true,
      };
    });
    yield put(actions.colorsLoaded(data));
  } catch (err: any) {
    console.log(err);
  }
}

export function* colorsFormSaga() {
  yield takeLatest(actions.loadColors.type, getColors);
}

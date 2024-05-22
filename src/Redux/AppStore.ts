import { createStore, AnyAction } from 'redux';
import AlarmModel from '../Models/AlarmModel';

// Action type
export const CHANGE_ALARM = 'CHANGE_ALARM';

// State interface
export interface AppState {
  alarm: AlarmModel | null;
}

// Action interface
interface ChangeAlarmAction extends AnyAction {
  type: typeof CHANGE_ALARM;
  payload: AlarmModel;
}

type AppActionTypes = ChangeAlarmAction;

// Initial state
const initialState: AppState = {
  alarm: null
};

// Reducer to handle alarm state changes
const reducer = (state = initialState, action: AppActionTypes): AppState => {
  switch (action.type) {
    case CHANGE_ALARM:
      return {
        ...state,
        alarm: action.payload
      };
    default:
      return state;
  }
};

// Create the store
export const store = createStore(reducer);

// Action creator to change the alarm
export const changeAlarm = (alarm: AlarmModel): AppActionTypes => ({
  type: CHANGE_ALARM,
  payload: alarm
});

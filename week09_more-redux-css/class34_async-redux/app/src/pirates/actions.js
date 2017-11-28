import { PIRATE_ADD, PIRATE_LOAD } from './reducer';
import piratesApi from '../services/pirates-api';

export function loadPirates(crewId) {
  return async (dispatch, getState) => {
    const { pirates } = getState();
    if(pirates[crewId]) return;

    const loaded = await piratesApi.get(crewId);
    dispatch({
      type: PIRATE_LOAD,
      payload: { crewId, pirates: loaded }
    });
  };
}

export function addPirate(crewId, pirate) {
  return async dispatch => {
    pirate.crew = crewId;
    const saved = await piratesApi.add(pirate);

    dispatch({
      type: PIRATE_ADD,
      payload: saved
    });
  };
}

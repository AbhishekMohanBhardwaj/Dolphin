export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';


export const requestData = (payload) => ({ type: FETCH_DATA, payload });

export const receiveDataSuccessfully = data => ({ type: FETCH_DATA_SUCCESS, data });

export const receiveDataFailed = data => ({ type: FETCH_DATA_FAIL, data });

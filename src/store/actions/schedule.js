import ScheduleResource from "../../resources/ScheduleResource";

export const ERROR = "SCHEDULE_ERROR";
export const INDEX_SUCCESS = "SCHEDULE_INDEX_SUCCESS";
export const ADD = "SCHEDULE_ADD";
export const CHANGE = "SCHEDULE_CHANGE";
export const SAVE_SUCCESS = "SCHEDULE_SAVE_SUCCESS";
export const KIND_SERVICE = "KIND_SERVICE";
export const BOOK_SERVICE = "BOOK_SERVICE";
export const SPECIFIC_SERVICE_ID = "SPECIFIC_SERVICE_ID";
export const SPECIFIC_SERVICE = "SPECIFIC_SERVICE";
export const BACK_SERVICE = "BACK_SERVICE";
export const CHANGE_SERVICE_MODAL_TYPE = "CHANGE_SERVICE_MODAL_TYPE";

export const add = () => (dispatch) => {
  dispatch({ type: ADD });
};

export const change = (payload) => (dispatch) => {
  dispatch({ type: CHANGE, payload });
};

export const save = (payload) => (dispatch) => {
  ScheduleResource.post(payload)
    .then((response) => {
      dispatch({ type: SAVE_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: ERROR, payload: error.response.data });
    });
};
export const kindService = (payload) => (dispatch) => {
  dispatch({ type: KIND_SERVICE, payload });
};

export const bookService = (payload) => (dispatch) => {
  dispatch({ type: BOOK_SERVICE, payload });
};

export const specificService = (payload) => (dispatch) => {
  dispatch({ type: SPECIFIC_SERVICE_ID, payload });
};

export const setSpecificServiceId = (payload) => (dispatch) => {
  dispatch({ type: SPECIFIC_SERVICE_ID, payload });
};

export const setSpecificService = (payload) => (dispatch) => {
  dispatch({ type: SPECIFIC_SERVICE, payload });
};

export const backService = (payload) => (dispatch) => {
  dispatch({ type: BACK_SERVICE, payload });
};

export const setServiceModalType = (payload) => (dispatch) => {
  dispatch({ type: CHANGE_SERVICE_MODAL_TYPE, payload });
};

export const setError = (payload) => (dispatch) => {
  dispatch({ type: ERROR, payload });
};

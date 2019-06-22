import actionTypes from "../actionTypes";

let INITIAL_STATE = {
  isProgress: false,
  isError: false,
  errorTest: "",
  currentUser: {},
  userID: "",
  phoneNumber: "",
 
  signuperror: '',
  signInerror: null,
  maggieuser: {}
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
// for sign in action
    case actionTypes.SIGNIN_PROGRESS:
      return { ...state, isProgress: true };

    case actionTypes.SIGNIN_SUCCEED:
      return {
        ...state, isProgress: false, maggieuser: action.data,
        isError: false
      }

    case actionTypes.SIGNIN_ERROR:
      return {
        ...state, isError: true,
        signInerror: action.error,
      }


    case actionTypes.SIGNIN_SUCCESSFUL:
      return { ...state, isProgress: false, currentUser: action.payload, userID: action.uid, phoneNumber: action.phoneNumber, isError: false }
    case actionTypes.SIGNIN_REJECTED:
      return { ...state, isProgress: false, isError: true, errorTest: action.payload }
    case actionTypes.SIGNIN_PROGRESS_VERIFY:
      return { ...state, isProgress: true };
    case actionTypes.SIGNIN_SUCCESSFUL_VERIFY:
      return { ...state, isProgress: false, userID: action.payload }
    case actionTypes.SIGNIN_REJECTED_VERIFY:
      return { ...state, isError: true, isProgress: false, errorTest: action.payload }

    case actionTypes.SIGNUP_PROGRESS:
      return { ...state, isProgress: true };

    case actionTypes.SIGNUP_SUCCEED:
      return {
        ...state, isProgress: false,
        MaggieUser: action.payload,
        isError: false
      }

    case actionTypes.SIGNUP_ERROR:
      return {
        ...state, isError: true,
        signuperror: action.payload,
      }







    default:
      return state;
  }
};

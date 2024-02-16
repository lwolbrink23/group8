// authReducer.js
const initialState = {
  isLoggedIn: false,
  userId: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        isLoggedIn: true,
        userId: action.payload.userId,
      };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};

export default authReducer;

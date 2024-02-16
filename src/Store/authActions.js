// authActions.js
export const login = (userId) => ({
  type: "LOGIN",
  payload: { userId },
});

export const logout = () => ({
  type: "LOGOUT",
});
